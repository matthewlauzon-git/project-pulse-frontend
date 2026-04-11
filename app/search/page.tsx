'use client'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { searchContent } from '@/lib/supabase'

function SearchResults() {
  const params = useSearchParams()
  const router = useRouter()
  const q = params.get('q') || ''
  const [results, setResults] = useState<any>({ diseases: [], drugs: [], notes: [] })
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState(q)

  useEffect(() => {
    setSearchInput(q)
    if (q) {
      setLoading(true)
      searchContent(q).then(r => { setResults(r); setLoading(false) })
    } else {
      setResults({ diseases: [], drugs: [], notes: [] })
      setLoading(false)
    }
  }, [q])

  const total = results.diseases.length + results.drugs.length + results.notes.length

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Search{q ? `: ${q}` : ''}</h1>
        {q && !loading && <p>{total} result{total !== 1 ? 's' : ''}</p>}
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input
          type="text"
          placeholder="Search diseases, drugs, notes…"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && searchInput.trim() && router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`)}
          autoFocus
        />
      </div>
      {loading && <div className="loading">Searching…</div>}
      {!loading && q && total === 0 && <div className="empty-state">No results for &quot;{q}&quot;</div>}
      {!q && !loading && (
        <div className="empty-state">
          <p>Try searching for a condition, drug name, body system, or keyword.</p>
          <p style={{ marginTop: 8, fontSize: '0.82rem' }}>Tip: Searches match titles, tags, classifications, trade names, and incidence data.</p>
        </div>
      )}
      {!loading && results.diseases.length > 0 && (
        <>
          <div className="system-label"><span className="sys-emoji">🩺</span> Diseases <span className="sys-count">{results.diseases.length}</span></div>
          {results.diseases.map((d: any) => (
            <Link key={d.slug} href={`/diseases/${d.slug}`}>
              <div className="result-item disease">
                <div className="ri-type">Disease</div>
                <h4>{d.title}</h4>
                {d.incidence && <p>{d.incidence}</p>}
                {d.tags?.length && <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{d.tags.map((t: string) => `#${t}`).join(' ')}</p>}
              </div>
            </Link>
          ))}
        </>
      )}
      {!loading && results.drugs.length > 0 && (
        <>
          <div className="system-label"><span className="sys-emoji">💊</span> Drugs <span className="sys-count">{results.drugs.length}</span></div>
          {results.drugs.map((d: any) => (
            <Link key={d.slug} href={`/drugs/${d.slug}`}>
              <div className="result-item drug">
                <div className="ri-type">Drug</div>
                <h4>{d.title}</h4>
                {d.classification && <p>{d.classification}</p>}
                {d.trade_names && <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Trade: {d.trade_names}</p>}
              </div>
            </Link>
          ))}
        </>
      )}
      {!loading && results.notes.length > 0 && (
        <>
          <div className="system-label"><span className="sys-emoji">📝</span> Notes <span className="sys-count">{results.notes.length}</span></div>
          {results.notes.map((n: any) => (
            <Link key={n.slug} href={`/notes/${n.slug}`}>
              <div className="result-item note">
                <div className="ri-type">{n.content_type || 'Note'}</div>
                <h4>{n.title}</h4>
                {n.course_code && <p>{n.course_code}</p>}
              </div>
            </Link>
          ))}
        </>
      )}
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<main className="page-wrap"><div className="loading">Loading…</div></main>}>
      <SearchResults />
    </Suspense>
  )
}