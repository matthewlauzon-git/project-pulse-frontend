'use client'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { searchContent } from '@/lib/supabase'
import type { SearchContentResult } from '@/lib/supabase'

const EMPTY_RESULTS: SearchContentResult = { diseases: [], drugs: [], notes: [] }

function SearchResults() {
  const params = useSearchParams()
  const router = useRouter()
  const q = params.get('q') || ''
  const [searchState, setSearchState] = useState<{ query: string; results: SearchContentResult }>({
    query: '',
    results: EMPTY_RESULTS,
  })

  useEffect(() => {
    if (!q) return
    let cancelled = false
    searchContent(q).then(results => {
      if (!cancelled) setSearchState({ query: q, results })
    })
    return () => { cancelled = true }
  }, [q])

  const results = q ? searchState.results : EMPTY_RESULTS
  const loading = Boolean(q && searchState.query !== q)
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
          defaultValue={q}
          onKeyDown={e => {
            const nextQuery = e.currentTarget.value.trim()
            if (e.key === 'Enter' && nextQuery) router.push(`/search?q=${encodeURIComponent(nextQuery)}`)
          }}
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
          {results.diseases.map(d => (
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
          {results.drugs.map(d => (
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
          {results.notes.map(n => (
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
