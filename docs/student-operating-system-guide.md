# Pulse Student Operating System Guide

This is the current product north star for Pulse.

Pulse is not trying to be Lexicomp, UpToDate, Blackboard, WhatsApp, Google Docs, or a textbook library. It is the student layer that organizes what a nursing student needs to learn, do, review, and share right now.

## One-Sentence Product

Pulse is what Blackboard should be for nursing students: a date-aware class dashboard, module organizer, and source-linked study library built by students for students.

## First User

The first user is a nursing student in Matthew's cohort.

Optimize for:

- Current classes.
- Current modules.
- Assignments, clinical, exams, presentations, and deadlines.
- Lecture and textbook differences.
- Fast NCLEX-style clinical reasoning.
- Shared student resources with source and safety guardrails.

Do not optimize first for:

- Experienced bedside nurses.
- Public clinical reference use.
- Institutions.
- Full drug databases.
- Open internet collaboration.

## Product Layers

### 1. Dashboard

The dashboard is the home screen and should answer: what does school need from me right now?

It should show:

- Calendar.
- Upcoming assignments, exams, lectures, clinical, and project milestones.
- Date-aware study suggestions.
- Active group project links.
- Recently relevant course/module content.
- New resources only when they connect to current courses, modules, or projects.

Dashboard content should be date/action driven, not a general feed.

The current dashboard may use placeholder semester data while the app is still local. In the real product, dashboard content must come from the logged-in student's enrollment, current modules, assignments, clinical schedule, group projects, and recent relevant class activity.

### 2. Courses

Courses are the organizing layer.

Student flow:

```text
Student -> enrolled courses -> modules -> lessons/materials -> linked cards -> notes/resources
```

Current first course set:

- Pathophysiology.
- Pharmacology.
- Med-Surg I.
- Med-Surg II.

Long term, logged-in students should see the courses they are actually enrolled in. Prior material should not be hidden under a dusty archive label; it should live in the Library and remain filterable by course, module, system, semester, and cohort.

### 3. Modules

Module pages should be guided study paths, not document dumps.

A good module page starts with:

- Topics covered.
- What to learn first.
- Dates and deadlines.
- Required lecture/textbook/source references.
- Lessons or study sections.
- Linked disease, drug, intervention, and nursing action cards.
- Shared resources from classmates.
- Group project links if relevant.

NotebookLM exports should become module pages first. From there, Pulse can link or append to cards.

### 4. Library

The Library is the cumulative knowledge layer.

It should include:

- Disease cards.
- Drug cards.
- Interventions.
- Nursing actions.
- Lessons.
- Student resources.
- Course-specific notes.

Library content should be organized by:

- Course.
- Module.
- System.
- Drug class.
- Type.
- Source.
- Cohort or semester.

The old `Second Brain` page should behave as this Library hub. It should not be a random repository card wall. It should orient the student around current modules, disease/drug cards, course notes, source warnings, and student-shared resources.

## Card Philosophy

Pulse cards are not encyclopedias. They are clinical relevance filters.

Every card should help a student answer:

1. What is this?
2. Why does it matter for safety, clinical, or NCLEX thinking?
3. What do I check before I act?
4. What findings should I monitor or escalate?
5. What is the common student trap?

If a line does not help a student assess, hold, monitor, teach, escalate, or remember the pattern, move it to lesson notes or delete it.

### Drug Card Shape

Use one unified template:

- Need To Know.
- Before Giving.
- Hold / Reassess.
- Monitor.
- Teach.
- NCLEX Trap.

The card should feel like "I am about to give this med or answer a test question."

Example level for beta blockers:

- Lowers HR and BP.
- Check HR and BP before giving.
- Hold or question if HR/BP is too low per order, policy, or course parameter.
- Can mask hypoglycemia signs.
- Watch dizziness, bradycardia, hypotension.
- Teach not to stop suddenly.

### Disease Card Shape

Use one unified template:

- Need To Know.
- Recognize It.
- Assess First.
- Do / Escalate.
- Labs / Diagnostics.
- NCLEX Trap.

The card should not become a care plan dump. It should stay specific, conditional, and tied to action.

## Base Cards vs Course Notes

Base cards and course notes are different things.

### Base Card

The base card is the clean reusable nursing/NCLEX card. It should stay compact and broadly useful.

### Course Note

The course note is what a class, module, professor, or lecture added.

Course/module additions should attach to the card as course notes. They should not automatically rewrite the base card.

Example:

```text
Base card: Check potassium and kidney function with ACE inhibitors.

Course note:
Pharmacology / Module 5: Professor emphasized cough, angioedema, and hold/reassess for low BP.
```

Inside a specific course, course notes win for study emphasis. The base card changes only after review.

## Source Hierarchy

Pulse is course-first. Source weight should follow this order:

1. Professor, course instruction, and lecture slides.
2. Assigned textbook.
3. Trusted outside references.
4. Student notes, when clearly labeled and tied to a class date, source, or module.

Course truth beats generic truth for school use.

Example:

```text
Textbook: HCO3 is 20-30.
Professor/course: use 21-28 on this test.
Study rule: use 21-28 for this course unless told otherwise.
```

Pulse should show the conflict instead of hiding it.

## Source And Copyright Rules

Canadian law first. Use Canadian fair dealing language, not U.S. fair use language.

Pulse should store:

- Source pointers.
- Course/module/source anchors.
- Student-authored summaries.
- Claim-level source chips.
- Conflict notes.

Pulse should not share:

- Textbook PDFs.
- Full PowerPoint decks.
- Copied textbook chapters.
- Copied slides.
- Answer keys.
- Anything that functions as a replacement for the assigned source.

If upload processing is added later, uploaded copyrighted materials should be private processing inputs. Pulse can keep source anchors and student-authored summaries, but should not make the file visible to the cohort.

See `docs/source-policy.md`.

## Verification Layer

The MVP verification layer should be simple:

- Source chips.
- Warning labels.
- Manual review.

Use labels like:

- Professor/course.
- Lecture slide.
- Textbook.
- Student note.
- Instructor submitted.
- Student shared.
- Needs source.
- Conflicting sources.
- Peer checked.
- Top contributor.
- Trusted reviewer.

Avoid labels like:

- Clinically verified.
- Source of truth.
- 99% accurate.
- Gold standard.
- Medical authority.

Usefulness votes improve visibility, not official status.

## Student Contributions

Pulse should be by students for students, but not uncontrolled.

First contribution scope:

- Logged-in cohort students only.
- No anonymous posting.
- Title, URL, course/module tag, topic tag, and "why this helped" required.
- Report button on every contribution.
- Admin/trusted reviewer can hide or remove.
- Suspicious users or links can be held for review.

Contribution types:

- Study guide.
- Video.
- Article.
- Mnemonic.
- Practice quiz.
- Concept map.
- Project notes.
- Lecture notes.
- Source clarification.
- Suggested card fix.

Student-shared resources can be visible quickly if clearly labeled. They do not become official Pulse content without review.

## Contributor Reputation

Contributor reputation should measure study usefulness and source quality, not clinical authority.

Good signals:

- Useful votes.
- Sources included.
- Low report rate.
- Accepted corrections.
- Repeat contributions to course modules.
- Trusted reviewer approval.

Student badges:

- Helpful Contributor.
- Top Contributor.
- Strong Source Notes.
- Module Builder.

Instructor/reviewer badges:

- Instructor.
- Course Staff.
- Trusted Reviewer.

Instructor status is course-scoped. A professor's note can override student notes inside their course, but it should not automatically rewrite global cards.

## Resource Board

The Resource Board is later than dashboard/courses/modules, but the shape is clear.

It should support:

- Resource title.
- Link/video URL.
- Course/module tag.
- Topic/system tag.
- Why it helped.
- Submitted by.
- Source type.
- Useful votes.
- Report issue.

It should appear:

- As a global board for browsing.
- Inside module pages when tagged to that module.

Pulse should link out to videos/resources. Do not scrape or rehost them.

## Group Work

Chat is later.

The MVP group/project feature is a tracker, not a messaging app:

- Project name.
- Course/module.
- Due date.
- Members.
- External link to Google Docs, OneDrive, Teams, WhatsApp, or another place the group already works.
- Task checklist.
- Related cards/modules.
- Recent update note.

Pulse should tell students where the group work lives and when it matters. It should not replace Google Docs or WhatsApp in the MVP.

## NotebookLM Intake

NotebookLM can help prepare module content, but it is not the source of truth.

Workflow:

1. Gather class material and notes.
2. Use NotebookLM to extract or summarize module content.
3. Ingest the output into a course module page.
4. Extract topics, lessons, assignments, and source anchors.
5. Detect disease, drug, intervention, and nursing action mentions.
6. Link to existing cards.
7. Append course notes to existing cards.
8. Create draft cards only when no card exists.
9. Mark unclear claims as `Needs source`.
10. Admin/trusted reviewer approves before official content changes.

## Build Order

Build in this order:

1. Dashboard: full calendar, timeline, upcoming actions, study suggestions.
2. Courses: current enrolled courses, clean course pages, course info.
3. Modules: guided study paths with deadlines, topics, source references, and linked cards.
4. Library: compact cards with course notes and source chips.
5. Resource Board: student-shared links/resources with useful votes and contributor labels.
6. Project trackers: links, tasks, members, deadlines.
7. Chat: later, only if the core loop is already loved.

## What To Build Next

Immediate next work:

1. Replace dashboard placeholder bundle with logged-in student enrollment/module/assignment data.
2. Make `/import` able to save module drafts or suggested course notes for review.
3. Add real reviewer actions for accepting course notes into official card context.
4. Add warning labels: `Needs source`, `Conflicting sources`, `Student shared`.

Do not start with the Resource Board until course/module structure is solid.

## Non-Negotiables

- Keep Pulse narrow.
- Do not build AI agents inside the app.
- Do not build graph view.
- Do not build institution workspaces.
- Do not build real-time collaboration yet.
- Do not host textbooks or slide decks.
- Do not publish content as medical advice.
- Do not make students guess where a claim came from.
- Do not let cards become giant databases.

## Success Standard

Pulse is working when a student opens it and immediately knows:

- What is due.
- What is coming next.
- What module they should review.
- What cards matter for that module.
- What classmates shared that is actually useful.
- What source a claim came from.
- What content needs review before trusting it.
