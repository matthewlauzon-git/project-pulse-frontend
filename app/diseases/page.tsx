'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getDiseases, type DiseaseListItem } from '@/lib/supabase'

const SYS_MAP: Record<string, string[]> = {
  Gastrointestinal: ['gastrointestinal', 'gi'],
  Hematologic: ['hematologic', 'blood', 'coagulation'],
  Neurological: ['neurological'],
  Renal: ['renal'],
  Endocrine: ['endocrine'],
  Cardiovascular: ['cardiovascular'],
  Dermatological: ['dermatological', 'integumentary'],
  Immunology: ['immunology', 'immunological', 'immune'],
  Oncology: ['oncology', 'cancer', 'carcinoma'],
  Infectious: ['infectious', 'infection', 'sepsis'],
  Respiratory: ['respiratory', 'pulmonary'],
}

const SYS_EMOJI: Record<string, string> = {
  Gastrointestinal: '🫁', Hematologic: '🩸', Neurological: '🧠', Renal: '🫘',
  Endocrine: '🦋', Cardiovascular: '❤️', Dermatological: '🩹', Immunology: '🛡️',
  Oncology: '🎗️', Infectious: '🦠', Respiratory: '🫁', Other: '📁',
}

function inferSystem(tags: string[]): string {
  if (!tags?.length) return 'Other'
  const ts = new Set(tags.map(t => t.toLowerCase()))
  for (const [sys, kws] of Object.entries(SYS_MAP))
    if (kws.some(k => ts.has(k))) return sys
  return 'Other'
}

export default function DiseasesPage() {
  const [diseases, setDiseases] = useState<DiseaseListItem[]>([])
  const [filter, setFilter] = useState('')
  const searchParams = useSearchParams()
  const systemFilter = searchParams.get('system') || ''

  useEffect(() => { getDiseases().then(setDiseases) }, [])

  const filtered = filter
    ? diseases.filter(d =>
        d.title.toLowerCase().includes(filter.toLowerCase()) ||
        d.tags?.some((t: string) => t.toLowerCase().includes(filter.toLowerCase())) ||
        d.incidence?.toLowerCase().includes(filter.toLowerCase())
      )
    : diseases

  const groups: Record<string, DiseaseListItem[]> = {}
  filtered.forEach(d => {
    const sys = inferSystem(d.tags)
    if (!groups[sys]) groups[sys] = []
    groups[sys].push(d)
  })
  const order = [...Object.keys(SYS_MAP), 'Other'].filter(s => groups[s])

  const visibleGroups = systemFilter
    ? order.filter(s => s === systemFilter)
    : order

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Diseases</h1>
        <p>Pathophysiology & Med-Surg flash cards</p>
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input
          type="text"
          placeholder="Filter by name, tag, or incidence…"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          autoFocus
        />
      </div>
      {systemFilter && (
        <div style={{ marginBottom: 16 }}>
          <Link href="/diseases" className="back-btn">← All systems</Link>
          <span style={{ marginLeft: 12, fontWeight: 600 }}>{SYS_EMOJI[systemFilter] ?? '📁'} {systemFilter}</span>
        </div>
      )}
      {visibleGroups.map(sys => (
        <div key={sys}>
          <div className="system-label">
            <span className="sys-emoji">{SYS_EMOJI[sys] ?? '📁'}</span> {sys} <span className="sys-count">{groups[sys].length}</span>
          </div>
          <div className="card-grid">
            {groups[sys].map(d => (
              <Link key={d.slug} href={`/diseases/${d.slug}`} className="card disease">
                <div className="type">Disease</div>
                <h3>{d.title}</h3>
                {d.incidence && <p className="meta">{d.incidence}</p>}
              </Link>
            ))}
          </div>
        </div>
      ))}
      {filtered.length === 0 && <div className="empty-state">No diseases found</div>}
    </main>
  )
}