// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const SYS_EMOJI: Record<string, string> = {
  Neurological: '🧠', Cardiovascular: '❤️', Gastrointestinal: '🫁',
  Renal: '🫘', Hematologic: '🩸', Endocrine: '🦋',
  Dermatological: '🩹', Immunology: '🛡️', Oncology: '🎗️',
  Infectious: '🦠', Respiratory: '🫁', Other: '📁',
}

const SYS_ORDER = [
  'Neurological','Cardiovascular','Gastrointestinal','Renal','Endocrine',
  'Hematologic','Dermatological','Immunology','Oncology','Infectious','Respiratory',
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
      const sc: Record<string, number> = {}
      ;(ds.data || []).forEach((d: any) => {
        const t = (d.tags || [])[0] || 'Other'
        sc[t] = (sc[t] || 0) + 1
      })
      setSystemCounts(sc)
      setLoaded(true)
    })
  }, [])

  const sysList = SYS_ORDER.filter(s => systemCounts[s]).concat(
    Object.keys(systemCounts).filter(s => !SYS_ORDER.includes(s))
  )

  return (
    <main className="page-wrap">
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: 8 }}>Project Pulse</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Nursing patho‑pharm reference — diseases, drugs & notes
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
        <Link href="/diseases" style={{ textAlign: 'center', padding: 24, borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{loaded ? counts.disease : '—'}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Diseases</div>
        </Link>
        <Link href="/drugs" style={{ textAlign: 'center', padding: 24, borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{loaded ? counts.drug : '—'}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Drugs</div>
        </Link>
        <Link href="/notes" style={{ textAlign: 'center', padding: 24, borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{loaded ? counts.note : '—'}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Notes</div>
        </Link>
      </div>

      <h2 style={{ marginBottom: 16 }}>Browse by System</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 48 }}>
        {sysList.map(sys => (
          <Link key={sys} href={`/diseases?system=${sys}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontSize: '1.4rem' }}>{SYS_EMOJI[sys] || '📁'}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{sys}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{systemCounts[sys]} cards</div>
            </div>
          </Link>
        ))}
      </div>

      <h2 style={{ marginBottom: 16 }}>Quick Links</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        <Link href="/diseases" style={{ padding: 20, borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: 0 }}>Diseases →</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pathophysiology & med-surg</p>
        </Link>
        <Link href="/drugs" style={{ padding: 20, borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: 0 }}>Drug Cards →</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pharmacology reference</p>
        </Link>
        <Link href="/notes" style={{ padding: 20, borderRadius: 12, background: 'var(--card-bg)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ margin: 0 }}>Notes →</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Course summaries</p>
        </Link>
      </div>
    </main>
  )
}
