import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const processedRoot = path.join(repoRoot, "content", "processed");
const outPath = path.join(repoRoot, "public", "data", "cards.json");

function stripFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return { frontmatter: {}, content: markdown.trim() };
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: {}, content: markdown.trim() };

  const frontmatter = {};
  const raw = markdown.slice(3, end).trim();
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!match) continue;
    frontmatter[match[1]] = parseFrontmatterValue(match[2].trim());
  }

  return { frontmatter, content: markdown.slice(end + 4).trimStart() };
}

function parseFrontmatterValue(value) {
  if (value === "[]") return [];
  if (value.startsWith("[") && value.endsWith("]")) {
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  }
  return value;
}

function slugFromFile(file) {
  return path.basename(file, ".md");
}

function extractTitle(content, fallback) {
  const h1 = content.match(/^#\s+(.+)$/m);
  return h1?.[1]?.trim() || fallback;
}

function extractHeading(content, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`^### ${escaped}\\s*\\n\\n([\\s\\S]*?)(?=\\n### |\\n## |$)`, "m");
  return content.match(pattern)?.[1]?.trim() || "";
}

async function listCards(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !entry.name.startsWith("."))
    .map((entry) => path.join(dir, entry.name))
    .sort((a, b) => a.localeCompare(b));
}

async function loadDiseases() {
  const files = await listCards(path.join(processedRoot, "diseases"));
  const diseases = [];

  for (const file of files) {
    const markdown = await readFile(file, "utf8");
    const { frontmatter, content } = stripFrontmatter(markdown);
    const slug = slugFromFile(file);
    diseases.push({
      slug,
      title: frontmatter.title || extractTitle(content, slug),
      content,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      incidence: (extractHeading(content, "What It Is") || extractHeading(content, "Why It Matters")).slice(0, 180),
      created_date: "",
      updated_at: "",
    });
  }

  return diseases;
}

async function loadDrugs() {
  const files = await listCards(path.join(processedRoot, "drugs"));
  const drugs = [];

  for (const file of files) {
    const markdown = await readFile(file, "utf8");
    const { frontmatter, content } = stripFrontmatter(markdown);
    const slug = slugFromFile(file);
    drugs.push({
      slug,
      title: frontmatter.title || extractTitle(content, slug),
      content,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      classification: frontmatter.class || extractHeading(content, "What It Is"),
      trade_names: Array.isArray(frontmatter.trade_names)
        ? frontmatter.trade_names.join(", ")
        : "",
      created_date: "",
    });
  }

  return drugs;
}

const data = {
  diseases: await loadDiseases(),
  drugs: await loadDrugs(),
  notes: [],
};

await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");

console.log(`Exported ${data.diseases.length} diseases and ${data.drugs.length} drugs to ${outPath}`);
