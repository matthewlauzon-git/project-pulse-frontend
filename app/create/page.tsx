import Link from 'next/link'
import { getCommandCenterWorkspace } from '@/lib/class-command-center'

const templateSections = [
  {
    title: 'Quick Snapshot',
    bullets: ['Condition or topic in one line', 'Why it matters for safety', 'What changes nursing action'],
  },
  {
    title: 'Assessment Cues',
    bullets: ['What to check first', 'Findings that matter', 'When to reassess or escalate'],
  },
  {
    title: 'Priority Interventions',
    bullets: ['What you actually do', 'What to monitor after', 'Patient teaching that prevents harm'],
  },
  {
    title: 'Labs / Diagnostics',
    bullets: ['Only labs that change action', 'Course-specific values if professor differs', 'NCLEX trap or common mistake'],
  },
]

export default function CreatePage() {
  const workspace = getCommandCenterWorkspace('med-surg-i')

  return (
    <main className="classes-page create-page">
      <header className="student-organizer-header compact">
        <div>
          <p className="eyebrow">Create</p>
          <h1>Turn class files into study tools.</h1>
          <p>
            Generate outputs from selected private files and Pulse nursing templates.
            Class Canon and My Layer stay visibly separated.
          </p>
        </div>
        <Link href="/import" className="secondary-button">Add source files</Link>
      </header>

      <section className="create-source-strip" aria-label="Selected materials">
        {workspace.canon.slice(0, 3).map(item => (
          <article key={item.title}>
            <span>{item.kind}</span>
            <strong>{item.title}</strong>
            <p>{item.source}</p>
          </article>
        ))}
        <article className="add-source-card">
          <span>+</span>
          <strong>Add more</strong>
          <p>Attach notes, rubrics, or lecture summaries.</p>
        </article>
      </section>

      <div className="create-layout">
        <section className="create-preview-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Preview</p>
              <h2>Clinical Prep Sheet - Renal and Urinary</h2>
            </div>
            <span className="dashboard-data-note">Generated from private class files</span>
          </div>
          <div className="template-preview-grid">
            {templateSections.map(section => (
              <article key={section.title} className="template-preview-card">
                <strong>{section.title}</strong>
                <ul>
                  {section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="safety-alert-card">
            <span>Safety alerts</span>
            <p>Flag infection escalation, low urine output, rising creatinine, hyperkalemia, acute confusion, fever, hypotension, and uncontrolled pain.</p>
          </div>
        </section>

        <aside className="create-controls-panel">
          <p className="eyebrow">Output Type</p>
          <div className="create-option-list">
            {workspace.studyOutputs.map(output => (
              <button type="button" key={output.title}>
                <strong>{output.title}</strong>
                <span>{output.kind} · {output.source}</span>
                <p>{output.detail}</p>
              </button>
            ))}
          </div>
          <div className="create-include-card">
            <p className="eyebrow">Include</p>
            <label><input type="checkbox" defaultChecked /> Class Canon</label>
            <label><input type="checkbox" defaultChecked /> My Layer</label>
            <label><input type="checkbox" defaultChecked /> Linked cards</label>
            <label><input type="checkbox" /> Matched shared resources</label>
          </div>
          <button type="button" className="primary-button">Generate private output</button>
          <p className="create-note">Outputs can be exported. Sharing is optional and should happen only after review.</p>
        </aside>
      </div>
    </main>
  )
}
