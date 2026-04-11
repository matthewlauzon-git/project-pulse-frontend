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

export default function HomePage() {
  const [counts, setCounts] = useState({ disease: 0, drug: 0, note: 0 })
  const [systems, setSystems] = useState<Record<string, number>>({})
  const [recent, setRecent] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const [{ count: dc }, { count: dr }, { count: nt }, { data: dis }] = await Promise.all([
        supabase.from('diseases').select('*', { count: 'exact', head: true }),
        supabase.from('drugs').select('*', { count: 'exact', head: true }),
        supabase.from('notes').select('*', { count: 'exact', head: true }),
        supabase.from('diseases').select('slug,title,tags').order('created_at', { ascending: false }).limit(50),
      ])
      setCounts({ disease: dc || 0, drug: dr || 0, note: nt || 0 })
      const sys: Record<string, number> = {}
      ;(dis || []).forEach((d: any) => {
        const tag = (d.tags || [])[0] || 'Other'
        sys[tag] = (sys[tag] || 0) + 1
      })
      setSystems(sys)
      setLoading(false)
    }
    load()
  }, [])

  const sysOrder = ['Neurological','Cardiovascular','Gastrointestinal','Renal','Endocrine',
                    'Hematologic','Dermatological','Immunology','Oncology','Infectious','Respiratory']

  return (
    <main className="page-wrap">
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: 8 }}>Project Pulse</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Nursing patho‑pharm reference — diseases, drugs & notes
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
        <Link href="/diseases" className="card disease" style={{ textAlign: 'center', padding: 24, textDecoration: 'none' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{loading ? '—' : counts.disease}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Diseases</div>
        </Link>
        <Link href="/drugs" className="card drug" style={{ textAlign: 'center', padding: 24, textDecoration: 'none' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{loading ? '—' : counts.drug}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Drugs</div>
        </Link>
        <Link href="/notes" className="card note" style={{ textAlign: 'center', padding: 24, textDecoration: 'none' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{loading ? '—' : counts.note}</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Notes</div>
        </Link>
      </div>

      {/* Body systems */}
      <h2 style={{ marginBottom: 16 }}>Browse by System</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 48 }}>
        {[...sysOrder.filter(s => systems[s]), ...Object.keys(systems).filter(s => !sysOrder.includes(s))].map(sys => (
          systems[sys] ? (
            <Link key={sys} href={`/diseases?system=${sys}`} className="card disease" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', textDecoration: 'none' }}>
              <span style={{ fontSize: '1.4rem' }}>{SYS_EMOJI[sys] || '📁'}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{sys}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{systems[sys]} cards</div>
              </div>
            </Link>
          ) : null
        ))}
      </div>

      {/* Quick nav */}
      <h2 style={{ marginBottom: 16 }}>Quick Links</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        <Link href="/diseases" className="card disease" style={{ textDecoration: 'none' }}>
          <h3 style={{ margin: 0 }}>Diseases →</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pathophysiology & med-surg</p>
        </Link>
        <Link href="/drugs" className="card drug" style={{ textDecoration: 'none' }}>
          <h3 style={{ margin: 0 }}>Drug Cards →</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pharmacology reference</p>
        </Link>
        <Link href="/notes" className="card note" style={{ textDecoration: 'none' }}>
          <h3 style={{ margin: 0 }}>Notes →</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Course summaries</p>
        </Link>
      </div>
    </main>
  )
}
