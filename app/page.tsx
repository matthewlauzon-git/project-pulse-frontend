'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getDiseases } from '@/lib/supabase'

export default function Home() {
  const router = useRouter()
  const [diseases, setDiseases] = useState<any[]>([])
  const [counts, setCounts] = useState({ diseases: 0, drugs: 0, notes: 0 })

  useEffect(() => {
    getDiseases().then(d => {
      setDiseases(d.slice(0, 8))
      setCounts(c => ({ ...c, diseases: d.length }))
    })
  }, [])

  function doSearch(q: string) {
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <main className="page-wrap">
      <div className="hero">
        <h1>Project Pulse</h1>
        <p>Nursing knowledge commons — St. Lawrence College</p>
        <div className="hero-input">
          <span className="si">🔍</span>
          <input
            type="text"
            placeholder="Search diseases, drugs, notes…"
            onKeyDown={e => e.key === 'Enter' && doSearch((e.target as HTMLInputElement).value)}
            autoFocus
          />
        </div>
      </div>

      <div className="stat-row">
        <div className="stat-card"><div className="num">{counts.diseases}+</div><div className="label">Diseases</div></div>
        <div className="stat-card"><div className="num">{counts.drugs}+</div><div className="label">Drug Cards</div></div>
        <div className="stat-card"><div className="num">{counts.notes}+</div><div className="label">Notes</div></div>
      </div>

      <div className="section-label">Browse</div>
      <div className="card-grid">
        <Link href="/diseases" className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>🩺</div>
          <h3>Diseases</h3>
          <p className="meta">Pathophysiology & Med-Surg</p>
        </Link>
        <Link href="/drugs" className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>💊</div>
          <h3>Drug Cards</h3>
          <p className="meta">Pharmacology reference</p>
        </Link>
        <Link href="/notes" className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>📝</div>
          <h3>Notes</h3>
          <p className="meta">Lectures & exam prep</p>
        </Link>
      </div>

      <div className="section-label">Recent Diseases</div>
      <div className="card-grid">
        {diseases.length === 0 && <div className="loading">Loading…</div>}
        {diseases.map(d => (
          <Link key={d.slug} href={`/diseases/${d.slug}`} className="card disease">
            <div className="type">Disease</div>
            <h3>{d.title}</h3>
            {d.incidence && <p className="meta">{d.incidence}</p>}
          </Link>
        ))}
      </div>
    </main>
  )
}
