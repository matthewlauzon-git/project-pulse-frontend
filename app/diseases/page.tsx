'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getDiseases, type DiseaseListItem } from '@/lib/supabase'
import { DISEASE_SYSTEM_ORDER, inferDiseaseSystem } from '@/lib/classification'

const SYSTEM_META: Record<string, { icon: string; blurb: string }> = {
  Cardiac: { icon: '♥', blurb: 'Perfusion, rhythm, pressure, and pump problems.' },
  Respiratory: { icon: '↟', blurb: 'Oxygenation, ventilation, airway, and gas exchange.' },
  Neurological: { icon: '✦', blurb: 'Brain, spine, nerves, safety, and assessment cues.' },
  Endocrine: { icon: '◐', blurb: 'Hormones, glucose, metabolism, and regulation.' },
  'Renal and Urinary': { icon: '◇', blurb: 'Kidney function, fluids, electrolytes, and UTIs.' },
  Gastrointestinal: { icon: '◎', blurb: 'Digestion, liver, pancreas, nutrition, and elimination.' },
  Hematologic: { icon: '◆', blurb: 'Blood cells, clotting, bleeding, and oncology overlap.' },
  'Infectious and Immune': { icon: '✚', blurb: 'Inflammation, infection, immunity, and escalation.' },
  Integumentary: { icon: '▧', blurb: 'Skin integrity, wounds, lesions, and teaching.' },
  Sensory: { icon: '◉', blurb: 'Eyes, ears, smell, taste, and safety adaptations.' },
  Other: { icon: '□', blurb: 'Mixed concepts that still need a cleaner home.' },
}

function DiseasesPageInner() {
  const [diseases, setDiseases] = useState<DiseaseListItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const searchParams = useSearchParams()
  const systemFilter = searchParams.get('system') || ''

  useEffect(() => {
    getDiseases().then(items => {
      setDiseases(items)
      setLoaded(true)
    })
  }, [])

  const groups: Record<string, DiseaseListItem[]> = {}
  diseases.forEach(disease => {
    const system = inferDiseaseSystem(disease)
    groups[system] = groups[system] || []
    groups[system].push(disease)
  })

  const systemCards = DISEASE_SYSTEM_ORDER.map(system => ({
    system,
    count: groups[system]?.length || 0,
    meta: SYSTEM_META[system] || SYSTEM_META.Other,
  }))
  const selectedCards = systemFilter ? groups[systemFilter] || [] : []

  if (systemFilter) {
    const meta = SYSTEM_META[systemFilter] || SYSTEM_META.Other
    return (
      <>
        <div className="disease-system-detail-header">
          <Link href="/diseases" className="back-btn">All systems</Link>
          <span>{meta.icon}</span>
          <div>
            <h2>{systemFilter}</h2>
            <p>{loaded ? `${selectedCards.length} disease cards` : 'Loading cards'}</p>
          </div>
        </div>

        {loaded && (
          <div className="card-grid">
            {selectedCards.map(disease => (
              <Link key={disease.slug} href={`/diseases/${disease.slug}`} className="card disease">
                <div className="type">Disease</div>
                <h3>{disease.title}</h3>
                {disease.incidence && <p className="meta">{disease.incidence}</p>}
              </Link>
            ))}
          </div>
        )}

        {loaded && selectedCards.length === 0 && <div className="empty-state">No cards in this system yet.</div>}
      </>
    )
  }

  return (
    <>
      <section className="disease-system-grid" aria-label="Disease systems">
        {systemCards.map(({ system, count, meta }) => (
          <Link href={`/diseases?system=${encodeURIComponent(system)}`} key={system} className="disease-system-card">
            <span className="disease-system-icon">{meta.icon}</span>
            <div>
              <h2>{system}</h2>
              <p>{meta.blurb}</p>
            </div>
            <strong>{loaded ? `${count} cards` : 'Loading'}</strong>
          </Link>
        ))}
      </section>
    </>
  )
}

export default function DiseasesPage() {
  return (
    <main className="page-wrap disease-systems-page">
      <div className="page-header disease-page-header">
        <p className="eyebrow">Diseases</p>
        <h1>Browse By Body System</h1>
        <p>Pick a system first. Search stays global when you already know the disease name.</p>
      </div>
      <Suspense fallback={<div className="loading">Loading systems...</div>}>
        <DiseasesPageInner />
      </Suspense>
    </main>
  )
}
