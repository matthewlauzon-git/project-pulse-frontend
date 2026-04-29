# Pulse Personal Class Command Center MVP

## Verdict

Pulse is monetizable and scalable if it starts as a personal class command center, not as a public drug database, public upload repository, or giant student social platform.

The MVP promise is:

> Pick one class, drop in the messy Blackboard folder, and Pulse turns it into a clean command center: files, deadlines, modules, study priorities, notes, and better study outputs.

## First User

A nursing student who is behind, anxious, and sitting on a Blackboard folder full of slides, rubrics, notes, PDFs, clinical sheets, and assignment sheets.

They are not looking for another website. They need control in one sitting.

The proof case is Med-Surg I/II because it shows the strongest practical value: clinical prep, assessment cues, interventions, patient teaching, prioritization, deadlines, and placement anxiety.

## Core Loop

1. Pick one class.
2. Upload/import that class folder or paste its course material.
3. Pulse builds Class Canon: syllabus, slides, rubrics, assignments, schedules, dates, topics, and source categories.
4. Student adds My Layer: notes, teacher-emphasis notes, summaries, links, and generated outputs.
5. Home shows Today Plan: next deadline, current module, what to study, and the next useful action.
6. Ask Pulse answers from Class Canon, My Layer, and built-in Pulse cards only.
7. Create generates clinical prep sheets, study guides, quizzes, drug tables, or flashcards.
8. Matched shared resources appear only after import and only in context.

## MVP Screens

- Home: Today Plan, active class, urgent dates, Class Canon, My Layer, and study actions.
- Class Command Center: ask, Class Canon, My Layer, deadlines, modules, create, linked cards, matched resources.
- Import: paste or upload course material and review extracted structure.
- Create: generate study guide, quiz, flashcards, visual summary, or drug table.
- Ask: private course-file Q&A with visible sources.
- Student Intel: peer-vouched placement/elective/next-year advice, separate from clinical answers.

## Folder Helper

The helper should be optional, transparent, and local-first.

It should:

- only operate on a folder the user chooses
- copy files by default, not delete originals
- create a Pulse Workspace folder structure
- sort files into Slides, Assignments, Rubrics, Notes, Readings, and Generated
- write an action log
- support undo
- generate `pulse.config.json`

Do not market this as cleaning a computer. Market it as rescuing one selected class folder.

## Sharing Rules

Private source files stay private. Shared resources are contextual and optional.

Shareable later:

- student-written study guides
- generated summaries after review
- templates
- flashcards
- quiz sets
- links to official resources

Not shareable:

- full textbooks
- test banks
- real exam questions
- paid course packs
- full instructor slide decks unless permission is clear
- copied textbook diagrams
- patient-identifying information

## Monetization

Free:

- one class workspace
- limited uploads
- basic date/topic extraction
- basic Markdown export

Student Pro:

- more classes
- more uploads
- more AI generations
- templates
- quizzes and flashcards
- folder helper
- Markdown/Obsidian export

Class Pro later:

- shared outputs
- vouches
- class templates
- class-aware assistant

Student Intel later:

- placement tips
- elective advice
- clinical-site experience
- next-year heads-up posts
- peer vouches

Student Intel is peer experience, not official program guidance, and it must not silently feed Ask Pulse clinical/course answers.

Avoid school/institution sales until direct-to-student use is real.

## Build Order

1. One-class import to command center.
2. Med-Surg I/II command center proof flow.
3. Class Canon and My Layer separation.
4. Date/topic/source extraction.
5. Generate clinical prep sheet and study guide.
6. Ask over private workspace files and built-in cards.
7. Contextual matched shared resources.
8. Student Intel board.
9. Folder Helper prototype.

## Current Implementation Slice

The current slice is the Med-Surg class command center:

- command cards
- Class Canon
- My Layer
- Ask grounded in private files and cards
- private import list
- create actions
- deadlines
- course info
- linked cards
- upload/paste intake
- automatic class, module, source type, and filing-path suggestions
- review-before-save queue
- contextual matched shared resources
- separate Student Intel board

This tests whether the product shape feels right before adding expensive AI/file infrastructure.

Current limitation: text, markdown, and pasted content can be read directly in the browser. PDFs, PowerPoints, and Word files are listed and filed by name for now; the next implementation step is server-side extraction so Pulse can read those files safely before storing only summaries, citations, and pointers.

## Ruthless Product Audit - April 28, 2026

### What Is Genuinely Useful

- Home as a command center is the right first screen. A student opens Pulse to know what is due, what matters this week, what class/module they are in, and what to do next.
- Import is the wedge. Students already have Blackboard chaos. The fastest "aha" is dropping in a messy class folder and seeing deadlines, modules, and study priorities appear.
- Create is useful only when it starts from real class material. Clinical prep sheet, study guide, quiz, and drug table are worth keeping because they map directly to nursing-school work.
- Student Intel is useful, but only as peer experience. Placement, elective, next-year, and clinical-site tips are a separate problem from clinical/course truth.
- Personal setup matters. Two classmates can share Med-Surg but have different electives, placements, commute issues, instructors, and clinical expectations. Pulse should follow the individual student after sign-in.

### What Is Overbuilt Or Risky

- Shared resources should not be the home screen. They are useful after a student imports their own class and Pulse can match by course/module/topic.
- Community features are risky if they become a public repository. Keep them contextual, vouched, and reviewable.
- Streaks, broad progress stats, and large dashboards are decoration unless they drive today's action.
- Global disease/drug libraries are useful as linked support, but they should not become the main product. The main product is "what matters for my class right now."
- Full drag-and-drop dashboard building is too early. A fixed command center is better for v1.

### Highest-Leverage Gaps

- Real file extraction for PDF, PPTX, DOCX, and Blackboard exports.
- A review screen that lets students correct detected class, module, source type, deadline, and topic before saving.
- A personal profile/enrollment layer: current courses, placement, elective, next-year unknowns, instructor info, and calendars.
- Ask Pulse needs source cards with exact provenance: course file, My Layer, Pulse card, or matched shared resource.
- Create outputs need export/download and a clear "private until shared" review step.
- Class detail pages should be shorter. They should lead with current module, deadlines, canon files, and actions instead of every possible section.

### Next Iteration Queue

1. Make the fixed Home dashboard the product anchor.
2. Make Import the primary onboarding path.
3. Add personal setup/enrollment data so Pulse can differ by student.
4. Tighten Class Command Center pages to the current module plus the most urgent actions.
5. Make Ask and Create feel live enough to prove the workflow, even with mocked extraction.
6. Add export paths: Markdown folder, Obsidian-style vault, and printable study guide.
7. Only then add richer peer sharing and vouching.
