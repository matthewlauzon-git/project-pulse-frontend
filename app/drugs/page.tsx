'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getDrugs, type DrugListItem } from '@/lib/supabase'

const CLASS_EMOJI: Record<string, string> = {
  'Antibiotics / Antimicrobials': '🦠', 'Analgesics': '💊', 'Cardiovascular': '❤️',
  'Antidiabetics': '🩸', 'Respiratory': '🫁', 'Psychiatric / Neurological': '🧠',
  'Gastrointestinal': '🫁', 'Anticoagulants / Blood': '🩸', 'Immunologics / Steroids': '🛡️',
  'Endocrine / Hormones': '🦋', 'Oncology': '🎗️', 'Dermatological': '🩹',
  'Renal': '🫘', 'Anesthetics': '💉', 'Other': '📁',
}

function classifyDrug(drug: DrugListItem): string {
  const c = (drug.classification || '').toLowerCase()
  const t = (drug.tags || []).map(x => x.toLowerCase())
  const all = [c, ...t].join(' ')
  if (/antibiot|macrolide|penicill|cephalospor|fluoroquinol|tetracycl|aminoglycos|sulfon|nitroimidaz/.test(all)) return 'Antibiotics / Antimicrobials'
  if (/analges|nsaid|opioid|pain|acetaminoph|morphine|fentanyl/.test(all)) return 'Analgesics'
  if (/cardio|antihypertens|ace inhibi|beta.?block|calcium channel|diuretic|vasodilat|digoxin|antiangin/.test(all)) return 'Cardiovascular'
  if (/antidiabet|insulin|metform|sulfonyl|glp.?1|sglt/.test(all)) return 'Antidiabetics'
  if (/respirat|bronchodil|corticost|inhaler|albuterol|asthma|copd/.test(all)) return 'Respiratory'
  if (/antidepress|ssri|snri|anxiolyt|benzodiaz|antipsych|sedative|psych/.test(all)) return 'Psychiatric / Neurological'
  if (/gastroint|ppi|proton pump|antacid|laxative|antiemet|ondansetron/.test(all)) return 'Gastrointestinal'
  if (/anticoag|heparin|warfarin|thromboly|antiplatelet/.test(all)) return 'Anticoagulants / Blood'
  if (/immunosuppr|corticost|steroid|prednis/.test(all)) return 'Immunologics / Steroids'
  if (/hormone|thyroid|levothyrox|cortisol/.test(all)) return 'Endocrine / Hormones'
  if (/oncolog|chemother/.test(all)) return 'Oncology'
  if (/topical|dermatol|skin/.test(all)) return 'Dermatological'
  if (/renal|diuret/.test(all)) return 'Renal'
  if (/anesthes|local anesth|general anesth/.test(all)) return 'Anesthetics'
  return 'Other'
}

export default function DrugsPage() {
  const [drugs, setDrugs] = useState<DrugListItem[]>([])
  const [filter, setFilter] = useState('')
  const searchParams = useSearchParams()
  const classFilter = searchParams.get('class') || ''

  useEffect(() => { getDrugs().then(setDrugs) }, [])

  let filtered = filter
    ? drugs.filter(d =>
        d.title.toLowerCase().includes(filter.toLowerCase()) ||
        d.classification?.toLowerCase().includes(filter.toLowerCase()) ||
        d.trade_names?.toLowerCase().includes(filter.toLowerCase())
      )
    : drugs

  // Group by therapeutic class
  const groups: Record<string, DrugListItem[]> = {}
  filtered.forEach(d => {
    const cls = classifyDrug(d)
    if (!groups[cls]) groups[cls] = []
    groups[cls].push(d)
  })
  const order = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length)

  // If classFilter is set, only show that class
  const visibleGroups = classFilter
    ? order.filter(cls => cls === classFilter)
    : order

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Drug Cards</h1>
        <p>Pharmacology reference — grouped by therapeutic class</p>
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input
          type="text"
          placeholder="Filter by name, class, or trade name…"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          autoFocus
        />
      </div>
      {classFilter && (
        <div style={{ marginBottom: 16 }}>
          <Link href="/drugs" className="back-btn">← All classes</Link>
          <span style={{ marginLeft: 12, fontWeight: 600 }}>{CLASS_EMOJI[classFilter] ?? '📁'} {classFilter}</span>
        </div>
      )}
      {visibleGroups.map(cls => (
        <div key={cls}>
          <div className="system-label">
            <span className="sys-emoji">{CLASS_EMOJI[cls] ?? '📁'}</span> {cls} <span className="sys-count">{groups[cls].length}</span>
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
    </main>
  )
}