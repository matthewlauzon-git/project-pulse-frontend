import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const processedRoot = path.join(repoRoot, "content", "processed");
const outDir = path.join(processedRoot, "exports");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return { frontmatter: {}, content: markdown.trim() };
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: {}, content: markdown.trim() };

  const rawFrontmatter = markdown.slice(3, end).trim();
  const content = markdown.slice(end + 4).trimStart();
  const frontmatter = {};

  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const match = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!match) continue;
    frontmatter[match[1]] = match[2].trim();
  }

  return { frontmatter, content };
}

function extractTitle(content, fallback) {
  const h1 = content.match(/^#\s+(.+)$/m);
  return h1?.[1]?.trim() || fallback;
}

function extractLinks(content) {
  return [...content.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)]
    .map((match) => slugify(match[1].trim()))
    .filter(Boolean);
}

async function listMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !entry.name.startsWith("."))
    .map((entry) => path.join(dir, entry.name))
    .sort((a, b) => a.localeCompare(b));
}

async function loadPages(type, dir) {
  const files = await listMarkdownFiles(dir);
  const pages = [];

  for (const file of files) {
    const markdown = await readFile(file, "utf8");
    const { frontmatter, content } = stripFrontmatter(markdown);
    const title = frontmatter.title || extractTitle(content, path.basename(file, ".md"));
    const id = slugify(title);

    pages.push({
      id,
      title,
      type,
      content,
      user_id: null,
      source_path: frontmatter.source_path || file,
      created_at: null,
      updated_at: null,
    });
  }

  return pages;
}

const pages = [
  ...(await loadPages("disease", path.join(processedRoot, "diseases"))),
  ...(await loadPages("drug", path.join(processedRoot, "drugs"))),
];

const pageIds = new Set(pages.map((page) => page.id));
const links = [];
const seenLinks = new Set();

for (const page of pages) {
  for (const targetId of extractLinks(page.content)) {
    if (!pageIds.has(targetId) || targetId === page.id) continue;
    const key = `${page.id}->${targetId}`;
    if (seenLinks.has(key)) continue;
    seenLinks.add(key);
    links.push({ from_page_id: page.id, to_page_id: targetId });
  }
}

await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "pages.seed.json"), `${JSON.stringify(pages, null, 2)}\n`, "utf8");
await writeFile(path.join(outDir, "links.seed.json"), `${JSON.stringify(links, null, 2)}\n`, "utf8");

console.log(`Exported ${pages.length} pages into ${path.join(outDir, "pages.seed.json")}`);
console.log(`Exported ${links.length} links into ${path.join(outDir, "links.seed.json")}`);
