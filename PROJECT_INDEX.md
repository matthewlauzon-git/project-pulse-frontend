# Project Index

## Product Docs

- `CODEX_START_HERE.md`: fastest way to open this repo in Codex and vibe-code safely.
- `START_HERE.md`: current next action and content intake quickstart.
- `README.md`: project overview and local setup.
- `AGENTS.md`: rules for Codex and sub-agents.
- `docs/pulse-gameplan.md`: product strategy and summer launch path.
- `docs/class-rescue-mvp.md`: current MVP plan for private class workspaces, upload/intake, create flows, folder helper, legal guardrails, and monetization.
- `docs/matt-workspace-prototype.md`: how to test the modular base workspace with real notes, kits, extractor output, and privacy rules.
- `docs/student-operating-system-guide.md`: current product pivot and build guide for dashboard, courses, modules, cards, sources, and student contributions.
- `docs/backend-roadmap.md`: backend contract for frontend work.
- `docs/card-reframe-tracker.md`: current disease/drug card reframe status and next actions.
- `docs/source-policy.md`: Canadian-first source, copyright, and course-material policy.
- `docs/content-intake.md`: how raw notes become standardized cards.
- `docs/codex-workflow.md`: how to work with Codex in this repo.

## App

- `app/`: Next.js app routes and screens.
- `app/page.tsx`: Pulse dashboard/home.
- `app/workspace/page.tsx`: modular base workspace builder; optional kits expose the shelved app surfaces.
- `app/classes/page.tsx`: current-year class and module hub.
- `app/ask/page.tsx`: scoped Ask Pulse surface grounded in private class files and built-in cards.
- `app/create/page.tsx`: study-output creation surface for guides, quizzes, clinical prep, and drug tables.
- `app/student-intel/page.tsx`: peer-vouched placement/elective/next-year advice kept separate from clinical answers.
- `app/second-brain/page.tsx`: Library hub for modules, cards, source warnings, and contribution rules.
- `app/diseases`: disease list and detail pages.
- `app/drugs`: drug list and detail pages.
- `app/notes`: notes list and detail pages.
- `app/search`: search page.
- `app/source-policy/page.tsx`: public source and study-use policy page.
- `app/globals.css`: visual system and page styling.
- `app/api/`: backend route handlers.
- `app/api/extract/route.ts`: server-side file extraction for import-to-kit signals.

## Data Access

- `lib/pulse/`: backend types, server client helpers, and repository functions.
- `lib/supabase.ts`: existing frontend Supabase helpers.
- `lib/classification.ts`: disease system and drug class classification.
- `lib/class-command-center.ts`: current MVP command-center data concepts for Class Canon, My Layer, matched resources, and Student Intel.

## Content

- `content/inbox/markdown`: raw notes.
- `content/inbox/references`: screenshots, PDFs, and source references.
- `content/templates/disease-card.md`: disease card template.
- `content/templates/drug-card.md`: drug card template.
- `content/templates/procedure-card.md`: procedure card template.
- `content/processed/diseases`: standardized disease cards.
- `content/processed/drugs`: standardized drug cards.
- `content/processed/procedures`: standardized procedure cards.
- `content/processed/notes`: cleaned flexible notes.
- `content/checklists/diseases-by-system.md`: disease coverage map.
- `content/checklists/drugs-by-class.md`: pharmacology coverage map.
- `content/checklists/coverage-report.md`: generated card quality report.
- `public/data/cards.json`: local browser fallback data.
- `public/data/content-health.json`: generated content quality snapshot.

## Database

- `supabase/migrations`: schema migrations.
- `supabase/seed.sql`: seeded Supabase content.
- `content/processed/exports`: generated page/link seed exports.

## Scripts

- `npm run content:audit`: audit processed cards and write content health reports.
- `npm run data:export`: export local processed cards into app and seed data.

## Current Rule

Do not widen the app until the content system is useful. The current product is dashboard, Second Brain, disease cards, drug cards, notes, search, account basics, feedback, and standardized content intake.
