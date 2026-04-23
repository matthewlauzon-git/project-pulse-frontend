import Link from 'next/link'

const repositoryCards = [
  {
    type: 'Disease Profile',
    title: 'Type 2 Diabetes Mellitus',
    body: 'Chronic metabolic disorder characterized by insulin resistance and relative insulin deficiency.',
    course: 'Med-Surg II',
    href: '/diseases',
  },
  {
    type: 'Pharmacology',
    title: 'Beta Blockers',
    body: 'Mechanisms, nursing considerations, pulse checks, and safety teaching before administration.',
    course: 'Pharm I',
    href: '/drugs',
  },
  {
    type: 'Patho Notes',
    title: 'Left-Sided Heart Failure',
    body: 'Pulmonary congestion, forward failure, RAAS activation, dyspnea, crackles, and fatigue.',
    course: 'Med-Surg I',
    href: '/diseases',
  },
  {
    type: 'Lab Reference',
    title: 'Electrolytes',
    body: 'Potassium, sodium, calcium, and magnesium ranges for quick clinical review.',
    course: 'Reference',
    href: '/notes',
  },
]

const checklistItems = [
  'Disease cards by system',
  'Drug cards by class',
  'Procedure cards',
  'Flexible notes',
]

export default function SecondBrainPage() {
  return (
    <main className="repository-page">
      <header className="repository-header">
        <div>
          <p className="eyebrow">Repository</p>
          <h1>Second Brain</h1>
          <p>Search and manage your clinical knowledge base while the raw notes become standardized Pulse cards.</p>
        </div>
        <div className="repository-actions">
          <Link href="/search" className="secondary-button">Search</Link>
          <Link href="/notes" className="primary-button">Open Notes</Link>
        </div>
      </header>

      <div className="repository-layout">
        <aside className="filter-rail">
          <section>
            <h2>Course Track</h2>
            <label><input type="checkbox" /> Fundamentals</label>
            <label><input type="checkbox" defaultChecked /> Med-Surg I & II</label>
            <label><input type="checkbox" /> Pharmacology</label>
            <label><input type="checkbox" /> Psychiatric Health</label>
          </section>

          <section>
            <h2>Content Topic</h2>
            <div className="topic-pills">
              <span>Diseases</span>
              <span className="active">Lab Values</span>
              <span>Pathophysiology</span>
              <span>Anatomy</span>
            </div>
          </section>

          <section>
            <h2>Coverage</h2>
            <ul className="coverage-list">
              {checklistItems.map(item => <li key={item}>{item}<span>Ready</span></li>)}
            </ul>
          </section>
        </aside>

        <section className="repository-results">
          <div className="result-toolbar">
            <strong>Showing starter repository cards</strong>
            <span>Sort by: Recently Modified</span>
          </div>

          <div className="repository-card-grid">
            {repositoryCards.map(card => (
              <Link href={card.href} key={card.title} className="repo-card">
                <div className="repo-card-top">
                  <span className="repo-icon">{card.type.slice(0, 1)}</span>
                  <span className="repo-type">{card.type}</span>
                </div>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
                <div className="repo-card-footer">
                  <span>Course: {card.course}</span>
                  <strong>Open →</strong>
                </div>
              </Link>
            ))}
          </div>

          <div className="wide-resource-card">
            <div className="resource-visual">Clinical Rubric</div>
            <div>
              <span className="priority-tag">High Priority</span>
              <h2>Clinical Rotation Rubric - Week 4</h2>
              <p>Comprehensive evaluation criteria for patient assessment, SBAR communication, and medication safety.</p>
              <Link href="/notes" className="primary-button">View Notes</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
