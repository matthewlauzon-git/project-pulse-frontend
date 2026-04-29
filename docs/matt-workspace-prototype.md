# Matt Workspace Prototype

## What This Is

This prototype makes Pulse testable with real nursing-school material without pretending the full platform exists yet.

Use `/workspace` as the base builder and `/import` as the intake door.

The first test is simple:

> Start with a private workspace, drop in messy material, and add only the kits that help.

Everything else is shelved behind optional kits. Courses, calendar, Ask, cards, sharing, and exports are no longer assumed to be on every student's home page.

## What To Try First

Start with one real class folder or one real class chunk.

Good first inputs:

- a Blackboard file list
- a syllabus section
- assignment instructions
- lecture notes
- NotebookLM output
- a copied table of upcoming due dates
- a small Markdown or text file

Avoid starting with the whole year. If the first import feels good, scale up one class at a time.

## What Pulse Does With Your Material

Pulse separates material into layers:

- **Class Canon:** course-provided material such as syllabus, slides, rubrics, schedules, assignments, and module outlines.
- **My Layer:** your notes, summaries, teacher-emphasis notes, extra links, and generated study outputs.
- **Installed Kits:** optional structures such as Courses Organizer, Calendar Kit, Ask Pulse, Card Library, and source-safe sharing.
- **Matched Shared:** peer resources that are suggested only after Pulse knows the class, module, or topic.

This matters because a professor slide, a textbook note, a classmate study guide, and your own summary should not all be treated as the same kind of truth.

## Privacy Contract

The default rule is:

> Imported material is private until reviewed.

Pulse should not publish:

- raw instructor slides
- full textbooks
- test banks
- real exam questions
- paid course packs
- patient-identifying information

Pulse can eventually help create shareable outputs:

- your own study guide
- your own summary
- a link list
- a flashcard set
- a quiz
- a calendar kit
- a template

But the shareable thing should be reviewed and labeled before classmates see it.

## What Works Now

The current prototype can:

- read pasted text
- extract `.txt`, `.md`, `.markdown`, `.csv`, `.json`, `.pdf`, `.pptx`, and `.docx` files through `/api/extract`
- suggest target kits such as Private Intake, Calendar Kit, Courses Organizer, Card Library, or Study Output Kit
- suggest class, module, source type, dates, topics, linked cards, and filing path
- save an import draft for review
- keep old course/card/community pages shelved as optional kits instead of default home surfaces

## Extractor Status

The extractor prototype is now connected at `/api/extract`.

It can attempt to read:

- plain text
- Markdown
- CSV/JSON
- PDF
- PPTX
- DOCX

It returns extracted text, detected dates/topics, likely course/module, source kind, linked-card candidates, and target kits such as Calendar Kit or Courses Organizer.

Still not done:

- ZIP or Blackboard export folders
- image/OCR for scanned PDFs
- paid API/LLM cleanup pass
- calendar event approval/export

## How To Explain This To A Classmate

Pulse is not stealing your files and dumping them into a public repository.

The safer explanation is:

> Pulse gives each student a private study workspace. You can import your own class material, organize it by course and module, generate study tools, and optionally share reviewed summaries or kits with classmates.

## Milestone Demo Script

1. Open `/workspace`.
2. Drag in or add only the kits you want.
3. Click **Drop in files**.
4. Upload or paste a real syllabus chunk, assignment sheet, lecture note, or NotebookLM summary.
5. Check whether Pulse detected the right class, module, source type, and target kits.
6. Correct the course/module if needed.
7. Review dates, topics, linked cards, and source chips.
8. Save the draft.
9. Add the Calendar Kit or Courses Organizer and see whether the output has somewhere useful to go.

## Build Next

1. Test with Matt's real Med-Surg material.
2. Add ZIP/Blackboard folder import.
3. Store import drafts with source pointers and review status.
4. Wire date candidates into the Calendar Kit.
5. Generate one clean clinical prep sheet from selected class files.
6. Generate one clean study guide from selected class files.
7. Add export to Markdown folder.
8. Try the same flow with one second user.
