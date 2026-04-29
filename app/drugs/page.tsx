'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getDrugs, type DrugListItem } from '@/lib/supabase'
import { DRUG_CLASS_ORDER, inferDrugClass } from '@/lib/classification'

const CLASS_ICON: Record<string, string> = {
  'Beta Blockers': 'BB',
  'ACE Inhibitors / ARBs': 'ACE',
  'Loop Diuretics': 'LD',
  'Potassium-Sparing Diuretics': 'K',
  Anticoagulants: 'AC',
  Insulins: 'IN',
  'Oral Antidiabetics': 'DM',
  Corticosteroids: 'CS',
  'Antibiotics / Antimicrobials': 'AB',
  Antivirals: 'AV',
  'Opioid Analgesics': 'OP',
  'Non-Opioid Analgesics': 'PA',
  Gastrointestinal: 'GI',
  'Oncology / Biologics': 'ON',
  Integumentary: 'I',
  Other: 'O',
}

function DrugsPageInner() {
  const [drugs, setDrugs] = useState<DrugListItem[]>([])
  const [filter, setFilter] = useState('')
  const searchParams = useSearchParams()
  const classFilter = searchParams.get('class') || ''

  useEffect(() => { getDrugs().then(setDrugs) }, [])

  const filtered = filter
    ? drugs.filter(d =>
        d.title.toLowerCase().includes(filter.toLowerCase()) ||
        d.classification?.toLowerCase().includes(filter.toLowerCase()) ||
        d.trade_names?.toLowerCase().includes(filter.toLowerCase())
      )
    : drugs

  const groups: Record<string, DrugListItem[]> = {}
  filtered.forEach(d => {
    const cls = inferDrugClass(d)
    if (!groups[cls]) groups[cls] = []
    groups[cls].push(d)
  })
  const order = DRUG_CLASS_ORDER.filter(cls => groups[cls])
  const visibleGroups = classFilter ? order.filter(cls => cls === classFilter) : order

  return (
    <>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input
          type="text"
          placeholder="Filter by name, class, or trade name…"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      <div className="quick-filter-row">
        {DRUG_CLASS_ORDER.map(drugClass => (
          <Link
            key={drugClass}
            href={`/drugs?class=${encodeURIComponent(drugClass)}`}
            className={classFilter === drugClass ? 'active' : ''}
          >
            {drugClass}
          </Link>
        ))}
      </div>
      {classFilter && (
        <div style={{ marginBottom: 16 }}>
          <Link href="/drugs" className="back-btn">← All classes</Link>
          <span style={{ marginLeft: 12, fontWeight: 600 }}>{CLASS_ICON[classFilter] ?? 'O'} {classFilter}</span>
        </div>
      )}
      {visibleGroups.map(cls => (
        <div key={cls}>
          <div className="system-label">
            <span className="sys-emoji">{CLASS_ICON[cls] ?? 'O'}</span> {cls} <span className="sys-count">{groups[cls].length}</span>
          </div>
          <div className="card-grid">
            {groups[cls].map(d => (
              <Link key={d.slug} href={`/drugs/${d.slug}`} className="card drug">
                <div className="type">Drug</div>
                <h3>{d.title}</h3>
                {d.classification && <p className="meta">{d.classification}</p>}
              </Link>
            ))}
          </div>
        </div>
      ))}
      {filtered.length === 0 && <div className="empty-state">No drugs found</div>}
      {filtered.length > 0 && visibleGroups.length === 0 && <div className="empty-state">No cards in this class yet.</div>}
    </>
  )
}

export default function DrugsPage() {
  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Drug Cards</h1>
        <p>Pharmacology reference — grouped by therapeutic class</p>
      </div>
      <Suspense fallback={<div className="loading">Loading…</div>}>
        <DrugsPageInner />
      </Suspense>
    </main>
  )
}
