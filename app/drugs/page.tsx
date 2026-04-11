'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getDrugs, type DrugListItem } from '@/lib/supabase'

export default function DrugsPage() {
  const [drugs, setDrugs] = useState<DrugListItem[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => { getDrugs().then(setDrugs) }, [])

  const filtered = filter
    ? drugs.filter(d => d.title.toLowerCase().includes(filter.toLowerCase()) || d.classification?.toLowerCase().includes(filter.toLowerCase()))
    : drugs

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Drug Cards</h1>
        <p>Pharmacology reference</p>
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input type="text" placeholder="Filter drugs…" value={filter} onChange={e => setFilter(e.target.value)} autoFocus />
      </div>
      <div className="card-grid">
        {filtered.length === 0 && <div className="loading">Loading…</div>}
        {filtered.map(d => (
          <Link key={d.slug} href={`/drugs/${d.slug}`} className="card drug">
            <div className="type">Drug</div>
            <h3>{d.title}</h3>
            {d.classification && <p className="meta">{d.classification}</p>}
          </Link>
        ))}
      </div>
    </main>
  )
}
