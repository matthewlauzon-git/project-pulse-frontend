import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const exportsDir = path.join(repoRoot, "content", "processed", "exports");
const outPath = path.join(repoRoot, "supabase", "seed.sql");

function sqlString(value) {
  if (value === null || value === undefined) return "null";
  return `'${String(value).replaceAll("'", "''")}'`;
}

const pages = JSON.parse(await readFile(path.join(exportsDir, "pages.seed.json"), "utf8"));
const links = JSON.parse(await readFile(path.join(exportsDir, "links.seed.json"), "utf8"));

const statements = [
  "begin;",
  "delete from public.links;",
  "delete from public.pages;",
];

for (const page of pages) {
  statements.push(`insert into public.pages (id, title, type, content, user_id)
values (${sqlString(page.id)}, ${sqlString(page.title)}, ${sqlString(page.type)}, ${sqlString(page.content)}, null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();`);
}

for (const link of links) {
  statements.push(`insert into public.links (from_page_id, to_page_id)
values (${sqlString(link.from_page_id)}, ${sqlString(link.to_page_id)})
on conflict do nothing;`);
}

statements.push("commit;");

await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, `${statements.join("\n\n")}\n`, "utf8");

console.log(`Wrote ${pages.length} pages and ${links.length} links to ${outPath}`);
