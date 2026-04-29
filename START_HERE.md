# Start Here

Current focus: Pulse is a blank personal nursing-school workspace. Start with private intake, then drag in optional kits like Courses Organizer, Calendar, Ask, Card Library, Study Outputs, or Sharing when they help.

Read this first:

```text
CODEX_START_HERE.md
PROJECT_INDEX.md
AGENTS.md
docs/class-rescue-mvp.md
docs/matt-workspace-prototype.md
docs/student-operating-system-guide.md
```

You do not need to understand the whole project to make progress.

## Your Job

Put raw nursing study files here:

```text
content/inbox/markdown
```

Put screenshots, PDFs, textbook excerpts, or reference material here:

```text
content/inbox/references
```

Do not edit raw source files after dropping them in. The useful rhythm is: add notes, create/update modules, link cards, audit coverage, repair the highest-impact gaps.

## What Is Done

- Existing Supabase `pages` content is being used.
- Disease and drug browsing works with system/class organization.
- Wikilinks render.
- Login shell exists.
- Page create/edit/save path exists.
- Backend route handlers exist for the frontend mockup.
- Content health auditing exists with `npm run content:audit`.
- Disease and drug card templates have been reframed around `Study Snapshot`, `Nursing Lens`, and `Exam Layer`.
- Source policy exists with Canadian-first fair dealing language.
- The product direction is now dashboard -> courses -> modules -> linked cards -> shared resources.
- Course modules now have real pages at `/classes/[course]/modules/[module]`.
- Dashboard study suggestions can link directly into module workspaces.
- Disease and drug detail pages now show course notes, source chips, and warning states derived from linked modules.
- `/second-brain` now behaves as the Library hub, not an old random repository page.
- `/workspace` is the base builder: only Private Intake is installed by default; other product surfaces are shelved as optional kits.
- `/import` provides the one-class import on-ramp: file/paste intake, auto destination, review before save.
- `/api/extract` is the server-side extraction prototype for text, Markdown, PDF, PPTX, and DOCX imports.
- `/ask`, `/create`, and `/student-intel` exist as scoped MVP surfaces.

## What Codex Should Do

Codex should take files from `content/inbox/markdown` and convert them into standardized cards:

```text
content/processed/diseases
content/processed/drugs
content/processed/procedures
content/processed/notes
```

Codex should use these templates:

```text
content/templates/disease-card.md
content/templates/drug-card.md
content/templates/procedure-card.md
```

## Next Best Build Order

1. Wire extracted date candidates into the Calendar Kit.
2. Add ZIP/Blackboard folder import.
3. Connect `/import` saved drafts into installed kits.
4. Make Create generate/export a clinical prep sheet and study guide.
5. Make Ask answer from imported text plus built-in cards with visible sources.
6. Add reviewer actions for accepting course notes into official card context.

## Current Quality Snapshot

- 112 total cards.
- 73 disease cards.
- 39 drug cards.
- 183 broken wikilink targets.
- 25 student-ready cards.
- 42 repair-first cards.

Run this after adding or editing content:

```bash
npm run content:audit
```

## What Not To Do Yet

- Do not import entire textbooks.
- Do not throw away the `pages` and `links` model.
- Do not add graph view, institution workspaces, real-time collaboration, or broad social feeds.
- Do not make chat the only product surface.
- Do not make shared resources visible before a student's own class is organized.
- Do not host textbook PDFs, full slide decks, copied chapters, copied slides, or answer keys.
- Do not try to make all content perfect at once.
