import type { Metadata } from 'next'
import { ModuleImportClient } from './module-import-client'

export const metadata: Metadata = {
  title: 'Import Class Materials — Pulse',
  description: 'Auto-file messy class materials into the right course, module, source type, dates, and linked card candidates.',
}

export default function ImportPage() {
  return (
    <main className="classes-page module-import-page">
      <header className="student-organizer-header compact">
        <div>
          <p className="eyebrow">Workspace Intake</p>
          <h1>Drop in messy files. Pulse routes them.</h1>
          <p>
            Paste a syllabus section, Blackboard file list, lecture summary, rubric, or NotebookLM output.
            Pulse detects the course, module, source type, dates, source chips, linked cards, and filing path.
            The extractor also suggests which installed kit should receive the result.
          </p>
        </div>
      </header>
      <ModuleImportClient />
    </main>
  )
}
