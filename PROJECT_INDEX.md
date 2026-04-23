# Project Index

Use this file when you are not sure where something belongs.

## Start Here

- `START_HERE.md`: plain-English next steps for Matthew.
- `README.md`: project overview and local setup.
- `AGENTS.md`: rules for Codex and sub-agents.

## App

- `app/page.tsx`: Pulse dashboard.
- `app/second-brain/page.tsx`: repository-style Second Brain view.
- `app/diseases`: disease list and detail pages.
- `app/drugs`: drug list and detail pages.
- `app/notes`: notes list and detail pages.
- `app/search`: search page.
- `app/globals.css`: visual system and page styling.

## Data Access

- `lib/supabase.ts`: Supabase client, fetch helpers, search helpers, and wikilink helpers.

## Content System

- `content/inbox/markdown`: put raw markdown study notes here.
- `content/inbox/references`: put screenshots, PDFs, and reference files here.
- `content/processed/diseases`: standardized disease cards.
- `content/processed/drugs`: standardized drug cards.
- `content/processed/procedures`: standardized procedure cards.
- `content/processed/notes`: cleaned flexible notes.

## Templates

- `content/templates/disease-card.md`
- `content/templates/drug-card.md`
- `content/templates/procedure-card.md`

## Coverage Checklists

- `content/checklists/diseases-by-system.md`
- `content/checklists/drugs-by-class.md`

## Workflow Docs

- `docs/content-intake.md`: how raw notes become standardized Pulse cards.

## Current Rule

Do not widen the app until the content system is useful. The current product is dashboard, Second Brain, disease cards, drug cards, notes, search, and standardized content intake.

