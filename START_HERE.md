# Start Here

You do not need to understand the whole project to make progress.

## Your Job

Put your nursing study files here:

```text
content/inbox/markdown
```

That is the main thing.

If you have screenshots, PDFs, textbook excerpts, or reference material, put them here:

```text
content/inbox/references
```

Do not worry about Supabase, Vercel, schemas, migrations, or app architecture yet.

## What Codex Will Do

Codex will take files from `content/inbox/markdown` and convert them into standardized cards:

```text
content/processed/diseases
content/processed/drugs
content/processed/procedures
content/processed/notes
```

Codex will use these templates:

```text
content/templates/disease-card.md
content/templates/drug-card.md
content/templates/procedure-card.md
```

## What To Ask Next

Use prompts like these:

```text
I dropped 10 markdown files into content/inbox/markdown. Convert them into standardized disease and drug cards. Do not invent facts. Preserve useful wikilinks.
```

```text
Take the notes about heart failure and furosemide and make one disease card and one drug card.
```

```text
Check the processed cards and tell me which disease systems and drug classes are missing from the checklist.
```

## What Not To Do Yet

Do not start by importing textbooks.

Do not rebuild the backend.

Do not add collaboration, graph views, institutional features, or AI agents inside the app.

Do not try to make all content perfect at once.

## The Current Plan

1. Collect raw notes.
2. Convert notes into standardized disease/drug/procedure cards.
3. Check coverage using the disease and drug checklists.
4. Make the frontend display those cards cleanly.
5. Stabilize Supabase only after the content shape is proven.

