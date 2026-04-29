import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const sourceRoot =
  "/Users/matthewlauzon/Documents/second-brain/05_Nursing_School";

const diseaseSourceDir = path.join(sourceRoot, "Pathophysiology", "Disease_Cards");
const drugSourceDir = path.join(sourceRoot, "Pharmacology");

const diseaseOutDir = path.join(repoRoot, "content", "processed", "diseases");
const drugOutDir = path.join(repoRoot, "content", "processed", "drugs");

const emptyValue = "Not specified in source notes.";

const diseaseSections = [
  ["What It Is", ["what is this condition", "definition"]],
  ["Patho In One Line", ["patho-flow", "pathophysiology", "mechanism"]],
  ["Who Is At Risk", ["the setup", "etiology", "risk factors"]],
  ["What You See", ["clinical presentation", "s/s", "signs", "symptoms"]],
  ["What Confirms It", ["diagnostics", "labs", "laboratory markers", "gold standard"]],
  ["Why It Matters", ["complications", "edge cases"]],
  ["Nursing Priorities", ["assessment priorities", "assessment", "nursing management", "interventions"]],
  ["Patient Teaching Cues", ["education", "patient teaching"]],
  ["Red Flags", ["safety", "red flags", "complications", "edge cases"]],
  ["Treatment Themes", ["pharmacological interventions", "medications", "procedures", "lifestyle"]],
  ["Exam Clues", ["strategy tips", "exam focus", "exam clues"]],
  ["Common Mix-Ups", ["common confusions", "differential"]],
  ["Must Remember Under Pressure", ["must remember", "clinical pearls"]],
];

const drugSections = [
  ["What It Is", ["generic name", "brand names", "trade names", "classification", "class"]],
  ["Why Students Care", ["indications"]],
  ["Mechanism In One Line", ["mechanism of action", "mechanism"]],
  ["Common Uses", ["indications"]],
  ["Before Giving: What To Check", ["before administration", "the setup", "administration"]],
  ["Monitor For", ["monitoring", "nursing considerations", "nursing focus", "side effects", "common side effects"]],
  ["Major Safety Flags", ["contraindications", "adverse", "red flags", "toxicity", "safety", "antidote", "reversal"]],
  ["Patient Teaching Cues", ["education", "patient teaching"]],
  ["Exam Clues", ["strategy tips", "clinical pearls", "exam clues"]],
  ["Common Mix-Ups", ["common confusions"]],
  ["Must Remember Under Pressure", ["must remember"]],
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromFilename(filePath) {
  return path.basename(filePath, ".md").replace(/[-_]+/g, " ").trim();
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return markdown;
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return markdown;
  return markdown.slice(end + 4).trimStart();
}

function extractTitle(markdown, fallback) {
  const frontmatterTitle = markdown.match(/^---[\s\S]*?\ntitle:\s*"?([^"\n]+)"?\s*\n[\s\S]*?\n---/);
  if (frontmatterTitle?.[1]) return frontmatterTitle[1].trim();

  const h1 = markdown.match(/^#\s+(.+)$/m);
  if (h1?.[1]) return h1[1].trim();

  return fallback;
}

function normalizeHeading(heading) {
  return heading
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9/+\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSections(markdown) {
  const body = stripFrontmatter(markdown);
  const lines = body.split(/\r?\n/);
  const intro = [];
  const sections = [];
  let current = null;

  for (const line of lines) {
    const heading = line.match(/^##+\s+(.+)$/);
    if (heading) {
      current = {
        title: heading[1].trim(),
        normalizedTitle: normalizeHeading(heading[1]),
        lines: [],
      };
      sections.push(current);
      continue;
    }

    if (current) {
      current.lines.push(line);
    } else if (!line.startsWith("# ")) {
      intro.push(line);
    }
  }

  return {
    intro: cleanBlock(intro.join("\n")),
    sections: sections.map((section) => ({
      ...section,
      content: cleanBlock(section.lines.join("\n")),
    })),
  };
}

function cleanBlock(value) {
  return value
    .replace(/^---\s*$/gm, "")
    .replace(/^Export to Sheets\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function findSection(parsed, aliases) {
  const normalizedAliases = aliases.map(normalizeHeading);
  const matchesPhrase = (title, alias) => {
    if (title === alias) return true;
    const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|\\b)${escaped}(\\b|$)`).test(title);
  };

  const scored = parsed.sections
    .filter((section) => section.content)
    .map((section) => {
      const score = normalizedAliases.reduce((best, alias) => {
        if (section.normalizedTitle === alias) return Math.max(best, 3);
        if (section.normalizedTitle.startsWith(alias)) return Math.max(best, 2);
        if (matchesPhrase(section.normalizedTitle, alias)) return Math.max(best, 1);
        return best;
      }, 0);

      return { section, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const match = scored[0]?.section;

  return match?.content || "";
}

function extractInlineField(markdown, names) {
  for (const name of names) {
    const pattern = new RegExp(`^\\*\\*${name}:\\*\\*\\s*(.+)$`, "im");
    const match = markdown.match(pattern);
    if (match?.[1]) return match[1].trim();
  }
  return "";
}

function sectionValue(markdown, parsed, aliases) {
  const section = findSection(parsed, aliases);
  if (section) return section;

  const inline = extractInlineField(markdown, aliases);
  return inline || emptyValue;
}

function extractTags(markdown) {
  const tagMatches = markdown.match(/#[A-Za-z][A-Za-z0-9_-]*/g) || [];
  return [...new Set(tagMatches.map((tag) => tag.slice(1)).filter(Boolean))].sort();
}

function extractLinks(markdown, title) {
  const links = [...markdown.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)]
    .map((match) => match[1].trim())
    .filter((link) => link && normalizeHeading(link) !== normalizeHeading(title));

  return [...new Set(links)].sort((a, b) => a.localeCompare(b));
}

function yamlList(values) {
  if (!values.length) return "[]";
  return `[${values.map((value) => JSON.stringify(value)).join(", ")}]`;
}

function renderRelated(markdown, title) {
  const links = extractLinks(markdown, title);
  if (!links.length) return "- [[ ]]";
  return links.map((link) => `- [[${link}]]`).join("\n");
}

function hasSourceContent(value) {
  return Boolean(value && value.trim() && value.trim() !== emptyValue);
}

function firstSentence(value) {
  if (!hasSourceContent(value)) return "";
  const cleaned = cleanForStudyCard(value);
  const firstLine = cleaned.split(/\n/).find((line) => line.trim())?.trim() || "";
  const numbered = firstLine.match(/^\d+\.\s+(.+)$/);
  if (numbered?.[1]) return numbered[1].trim();
  const sentence = cleaned.match(/^[\s\S]*?[.!?](?:\s|$)/)?.[0]?.trim();
  return sentence || firstLine;
}

function combineBlocks(...values) {
  return values.filter(hasSourceContent).join("\n\n");
}

function cleanForStudyCard(value, options = {}) {
  if (!hasSourceContent(value)) return "";

  const skipPatterns = [
    /^-?\s*\*\*Route\(s\):\*\*/i,
    /^-?\s*\*\*Typical Dosage:\*\*/i,
    /^-?\s*\*\*Onset\/Peak\/Duration:\*\*/i,
    /^-?\s*\*\*Compatibility:\*\*/i,
    /^\*\*How to administer:\*\*/i,
    /^\*\*How to anticipate ordered:\*\*/i,
    /^#{1,6}\s*How to administer/i,
  ];

  const lines = value
    .split(/\r?\n/)
    .flatMap(tableLineToStudyLine)
    .join("\n")
    .replace(/\bdo NOT wait for orders\b/gi, "recognize as urgent and anticipate protocol-based escalation")
    .replace(/\bThe Fix:\s*/gi, "Study response cue: ")
    .replace(/\bPatient must discontinue ([^.]+)\./gi, "Student cue: recognize this as a stop-and-escalate safety issue.")
    .replace(/\bDiscontinue the drug\b/gi, "hold/escalate per order or facility policy")
    .replace(/\bdiscontinue ([^.]+?) immediately\b/gi, "stop and escalate per order or facility policy")
    .replace(/\bVESICANT\s+[—-]\s+give via CVL only\b/gi, "Safety flag: vesicant; know extravasation risk and strict institutional administration precautions")
    .replace(/\bVesicant\s+[—-]\s+give via CVL only\b/gi, "Safety flag: vesicant; know extravasation risk and strict institutional administration precautions")
    .replace(/\bgive via CVL only\b/gi, "requires strict institutional administration precautions")
    .replace(/\(cumulative dose limit[^)]*\)/gi, "(cumulative exposure is a major safety concern)")
    .replace(/cumulative dose limit[^).]*(?:\)|$)?/gi, "cumulative exposure is a major safety concern")
    .replace(/\(cumulative exposure is a major safety concern\./gi, "(cumulative exposure is a major safety concern).")
    .replace(/\bMax\s*\d+[^.]*\./gi, "Study cue: verify maximum daily dose and total intake from all sources.")
    .replace(/\bgold standard\b/gi, "commonly tested confirmation clue")
    .replace(/\bsafe in pregnancy\b/gi, "pregnancy safety varies; verify current guidance")
    .replace(/\bgive within\b/gi, "recognize time-sensitive ordered therapy within")
    .replace(/\badminister\b/gi, options.allowAdminister ? "administer" : "anticipate ordered")
    .replace(/\bDermatologic\b/g, "Integumentary")
    .replace(/\bdermatologic\b/g, "integumentary")
    .replace(/\*\*Study response cue: \*\*\s*/g, "**Study response cue:** ")
    .split(/\r?\n/)
    .filter((line) => {
      const trimmed = line.trim();
      if (!trimmed) return true;
      if (/^\d+\.\s/.test(trimmed) && options.dropNumberedSteps) return false;
      return !skipPatterns.some((pattern) => pattern.test(trimmed));
    });

  const compacted = lines
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\*\*Priority \d+\s+—\s*/g, "**")
    .trim();

  return limitStudyBlock(compacted);
}

function tableLineToStudyLine(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|")) return [line];
  if (/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(trimmed)) return [];

  const cells = trimmed
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim())
    .filter(Boolean);

  if (cells.length < 2) return [];
  if (/body system|system|action|symptom|why/i.test(cells.join(" "))) return [];

  if (cells.length >= 3) return [`- ${cells[0]}: ${cells[1]} — ${cells.slice(2).join("; ")}`];
  return [`- ${cells.join(": ")}`];
}

function limitStudyBlock(value) {
  const lines = value.split(/\r?\n/);
  const kept = [];
  let bullets = 0;
  let paragraphs = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (kept.length && kept.at(-1) !== "") kept.push("");
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      bullets += 1;
      if (bullets > 6) continue;
    } else if (!/^#{1,6}\s/.test(trimmed)) {
      paragraphs += 1;
      if (paragraphs > 3 && bullets === 0) continue;
    }

    kept.push(line);
  }

  return kept.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function renderSection(heading, value, options = {}) {
  const cleaned = cleanForStudyCard(value, options);
  return cleaned ? `### ${heading}\n\n${cleaned}` : "";
}

function renderSectionGroup(groupHeading, sections) {
  const rendered = sections.filter(Boolean).join("\n\n");
  return rendered ? `## ${groupHeading}\n\n${rendered}` : "";
}

function renderDiseaseCard(filePath, markdown) {
  const title = extractTitle(markdown, titleFromFilename(filePath));
  const parsed = splitSections(markdown);
  const tags = extractTags(markdown);
  const system = tags.find((tag) => tag !== "ActiveStudy") || "";

  const sectionMap = new Map(
    diseaseSections.map(([heading, aliases]) => [
      heading,
      sectionValue(markdown, parsed, aliases),
    ]),
  );

  if (sectionMap.get("What It Is") === emptyValue && parsed.intro) {
    sectionMap.set("What It Is", parsed.intro);
  }

  const snapshot = renderSectionGroup("Study Snapshot", [
    renderSection("What It Is", sectionMap.get("What It Is")),
    renderSection("Why It Matters", sectionMap.get("Why It Matters")),
    renderSection("Patho In One Line", firstSentence(sectionMap.get("Patho In One Line"))),
  ]);
  const clinicalPattern = renderSectionGroup("Clinical Pattern", [
    renderSection("Who Is At Risk", sectionMap.get("Who Is At Risk")),
    renderSection("What You See", sectionMap.get("What You See")),
    renderSection("What Confirms It", sectionMap.get("What Confirms It")),
  ]);
  const nursingLens = renderSectionGroup("Nursing Lens", [
    renderSection("Nursing Priorities", sectionMap.get("Nursing Priorities")),
    renderSection("Red Flags", sectionMap.get("Red Flags")),
    renderSection("Treatment Themes", sectionMap.get("Treatment Themes")),
    renderSection("Patient Teaching Cues", sectionMap.get("Patient Teaching Cues")),
  ]);
  const examLayer = renderSectionGroup("Exam Layer", [
    renderSection("Exam Clues", sectionMap.get("Exam Clues")),
    renderSection("Common Mix-Ups", sectionMap.get("Common Mix-Ups")),
    renderSection("Must Remember Under Pressure", sectionMap.get("Must Remember Under Pressure")),
  ]);

  return `---
type: disease
title: ${title}
system: ${system}
tags: ${yamlList(tags)}
source_path: ${filePath}
---

# ${title}

${[snapshot, clinicalPattern, nursingLens, examLayer].filter(Boolean).join("\n\n")}

## Related

${renderRelated(markdown, title)}
`;
}

function renderDrugCard(filePath, markdown) {
  const title = extractTitle(markdown, titleFromFilename(filePath));
  const parsed = splitSections(markdown);
  const tags = extractTags(markdown);
  const className =
    extractInlineField(markdown, ["Classification", "Class"]) ||
    findSection(parsed, ["classification", "class"]).split("\n")[0] ||
    "";
  const tradeNames = extractInlineField(markdown, ["Trade Names", "Brand Names"]);

  const sectionMap = new Map(
    drugSections.map(([heading, aliases]) => [
      heading,
      sectionValue(markdown, parsed, aliases),
    ]),
  );

  if (sectionMap.get("Generic Name") === emptyValue) {
    sectionMap.set("What It Is", title);
  }
  if (className || tradeNames) {
    sectionMap.set(
      "What It Is",
      combineBlocks(
        `Generic: ${title}`,
        tradeNames ? `Common brand names: ${tradeNames}` : "",
        className ? `Class: ${className}` : "",
      ),
    );
  }

  const snapshot = renderSectionGroup("Study Snapshot", [
    renderSection("What It Is", sectionMap.get("What It Is")),
    renderSection("Why Students Care", sectionMap.get("Why Students Care")),
    renderSection("Mechanism In One Line", firstSentence(sectionMap.get("Mechanism In One Line"))),
    renderSection("Common Uses", sectionMap.get("Common Uses")),
  ]);
  const nursingLens = renderSectionGroup("Nursing Lens", [
    renderSection("Before Giving: What To Check", sectionMap.get("Before Giving: What To Check"), {
      dropNumberedSteps: true,
    }),
    renderSection("Monitor For", sectionMap.get("Monitor For")),
    renderSection("Major Safety Flags", sectionMap.get("Major Safety Flags")),
    renderSection("Patient Teaching Cues", sectionMap.get("Patient Teaching Cues")),
  ]);
  const examLayer = renderSectionGroup("Exam Layer", [
    renderSection("Exam Clues", sectionMap.get("Exam Clues")),
    renderSection("Common Mix-Ups", sectionMap.get("Common Mix-Ups")),
    renderSection("Must Remember Under Pressure", sectionMap.get("Must Remember Under Pressure")),
  ]);

  return `---
type: drug
title: ${title}
class: ${className}
trade_names: ${tradeNames ? yamlList(tradeNames.split(",").map((name) => name.trim())) : "[]"}
tags: ${yamlList(tags)}
source_path: ${filePath}
---

# ${title}

${[snapshot, nursingLens, examLayer].filter(Boolean).join("\n\n")}

## Related

${renderRelated(markdown, title)}
`;
}

async function listMarkdownFiles(dir, recursive = false) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && recursive) {
      files.push(...(await listMarkdownFiles(fullPath, recursive)));
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    if (entry.name.startsWith("_") || entry.name.toLowerCase().includes("template")) continue;
    if (entry.name.toLowerCase().includes("quick_reference")) continue;
    if (entry.name.toLowerCase().includes("quick-reference")) continue;
    files.push(fullPath);
  }

  return files.sort((a, b) => a.localeCompare(b));
}

async function normalizeFiles(files, outDir, renderer) {
  await mkdir(outDir, { recursive: true });
  const seen = new Map();

  for (const file of files) {
    const markdown = await readFile(file, "utf8");
    const title = extractTitle(markdown, titleFromFilename(file));
    const baseSlug = slugify(title);
    const count = seen.get(baseSlug) || 0;
    seen.set(baseSlug, count + 1);

    const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
    const outPath = path.join(outDir, `${slug}.md`);
    await writeFile(outPath, renderer(file, markdown), "utf8");
  }

  return files.length;
}

async function uniqueByTitle(files) {
  const bySlug = new Map();

  for (const file of files) {
    const markdown = await readFile(file, "utf8");
    const title = extractTitle(markdown, titleFromFilename(file));
    const slug = slugify(title);
    const current = bySlug.get(slug);
    const currentScore = current?.includes(`${path.sep}Drug_Cards${path.sep}`) ? 2 : 1;
    const nextScore = file.includes(`${path.sep}Drug_Cards${path.sep}`) ? 2 : 1;

    if (!current || nextScore > currentScore) {
      bySlug.set(slug, file);
    }
  }

  return [...bySlug.values()].sort((a, b) => a.localeCompare(b));
}

const diseaseFiles = await listMarkdownFiles(diseaseSourceDir);
const drugFiles = await uniqueByTitle(await listMarkdownFiles(drugSourceDir, true));

const diseaseCount = await normalizeFiles(diseaseFiles, diseaseOutDir, renderDiseaseCard);
const drugCount = await normalizeFiles(drugFiles, drugOutDir, renderDrugCard);

console.log(`Normalized ${diseaseCount} disease cards into ${diseaseOutDir}`);
console.log(`Normalized ${drugCount} drug cards into ${drugOutDir}`);
