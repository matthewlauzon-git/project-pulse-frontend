'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

interface DiseaseSystemRow {
  tags: string[] | null
}

const SYSTEM_ORDER = [
  'Cardiovascular',
  'Respiratory',
  'Neurological',
  'Endocrine',
  'Renal',
  'Gastrointestinal',
  'Hematologic',
  'Infectious',
]

export default function HomePage() {
  const [counts, setCounts] = useState({ disease: 0, drug: 0, note: 0 })
  const [systemCounts, setSystemCounts] = useState<Record<string, number>>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    Promise.all([
      supabase.from('diseases').select('*', { count: 'exact', head: true }),
      supabase.from('drugs').select('*', { count: 'exact', head: true }),
      supabase.from('notes').select('*', { count: 'exact', head: true }),
      supabase.from('diseases').select('tags').limit(200),
    ]).then(([dc, dr, nt, ds]) => {
      setCounts({
        disease: dc.count ?? 0,
        drug: dr.count ?? 0,
        note: nt.count ?? 0,
      })
      const nextSystemCounts: Record<string, number> = {}
      ;((ds.data || []) as DiseaseSystemRow[]).forEach(d => {
        const system = (d.tags || [])[0] || 'Other'
        nextSystemCounts[system] = (nextSystemCounts[system] || 0) + 1
      })
      setSystemCounts(nextSystemCounts)
      setLoaded(true)
    })
  }, [])

  const visibleSystems = SYSTEM_ORDER.filter(system => systemCounts[system]).concat(
    Object.keys(systemCounts).filter(system => !SYSTEM_ORDER.includes(system))
  )

  return (
    <main className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">Clinical Workspace</p>
          <h1>Welcome back, future nurse.</h1>
          <p>Search, review, and shape your nursing knowledge into disease cards, drug cards, and study notes.</p>
        </div>
        <Link href="/search" className="hero-search">
          <span>⌕</span>
          <strong>Search diseases, drugs, notes, and links</strong>
          <kbd>Enter</kbd>
        </Link>
      </section>

      <section className="metric-grid">
        <Link href="/diseases" className="metric-card">
          <span className="metric-label">Disease Cards</span>
          <strong>{loaded ? counts.disease : '—'}</strong>
          <span>Pathophysiology and clinical reasoning</span>
        </Link>
        <Link href="/drugs" className="metric-card">
          <span className="metric-label">Drug Cards</span>
          <strong>{loaded ? counts.drug : '—'}</strong>
          <span>Pharmacology and nursing safety</span>
        </Link>
        <Link href="/notes" className="metric-card">
          <span className="metric-label">Study Notes</span>
          <strong>{loaded ? counts.note : '—'}</strong>
          <span>Lectures, clinical notes, and exam prep</span>
        </Link>
      </section>

      <div className="dashboard-grid">
        <section className="panel panel-large">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Today</p>
              <h2>Study Priorities</h2>
            </div>
            <span className="pill">MVP Focus</span>
          </div>
          <div className="task-list">
            <Link href="/second-brain" className="task-row urgent">
              <span className="task-icon">!</span>
              <div>
                <strong>Drop raw markdown notes into the inbox</strong>
                <p>Start with your own course notes before textbooks.</p>
              </div>
              <span>Open</span>
            </Link>
            <Link href="/diseases" className="task-row">
              <span className="task-icon">+</span>
              <div>
                <strong>Review standardized disease cards</strong>
                <p>Clinical core, nursing focus, treatment, and learning layer.</p>
              </div>
              <span>Browse</span>
            </Link>
            <Link href="/drugs" className="task-row">
              <span className="task-icon">◆</span>
              <div>
                <strong>Review standardized drug cards</strong>
                <p>Mechanism, monitoring, adverse effects, and teaching.</p>
              </div>
              <span>Browse</span>
            </Link>
          </div>
        </section>

        <aside className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Next</p>
              <h2>Content Pipeline</h2>
            </div>
          </div>
          <ol className="timeline">
            <li><strong>Inbox</strong><span>Raw markdown notes</span></li>
            <li><strong>Normalize</strong><span>Disease, drug, procedure templates</span></li>
            <li><strong>Link</strong><span>Use wikilinks for related concepts</span></li>
            <li><strong>Publish</strong><span>Render clean cards in Pulse</span></li>
          </ol>
        </aside>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Systems</p>
              <h2>Browse By System</h2>
            </div>
          </div>
          <div className="system-grid">
            {visibleSystems.length > 0 ? visibleSystems.slice(0, 8).map(system => (
              <Link key={system} href={`/diseases?system=${system}`} className="system-chip">
                <strong>{system}</strong>
                <span>{systemCounts[system]} cards</span>
              </Link>
            )) : SYSTEM_ORDER.slice(0, 6).map(system => (
              <Link key={system} href={`/diseases?system=${system}`} className="system-chip muted">
                <strong>{system}</strong>
                <span>Ready for cards</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="panel panel-dark">
          <p className="eyebrow">Clinical Hours</p>
          <div className="hours-row">
            <strong>422</strong>
            <span>/ 500</span>
          </div>
          <p>On track for semester completion.</p>
          <div className="progress-ring">84%</div>
        </section>
      </div>
    </main>
  )
}
