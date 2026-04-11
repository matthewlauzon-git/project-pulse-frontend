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

  useEffect(() => {
    if (q) {
      setLoading(true)
      searchContent(q).then(r => { setResults(r); setLoading(false) })
    }
  }, [q])

  const total = results.diseases.length + results.drugs.length + results.notes.length

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Search: {q}</h1>
        <p>{total} results</p>
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input
          type="text"
          placeholder="Search…"
          defaultValue={q}
          onKeyDown={e => e.key === 'Enter' && router.push(`/search?q=${encodeURIComponent((e.target as HTMLInputElement).value)}`)}
          autoFocus
        />
      </div>
      {loading && <div className="loading">Searching…</div>}
      {!loading && total === 0 && <div className="empty-state">No results for &quot;{q}&quot;</div>}
      {!loading && results.diseases.length > 0 && (
        <>
          <div className="system-label">Diseases</div>
          {results.diseases.map((d: any) => (
            <Link key={d.slug} href={`/diseases/${d.slug}`}>
              <div className="result-item disease">
                <div className="ri-type">Disease</div>
                <h4>{d.title}</h4>
                {d.incidence && <p>{d.incidence}</p>}
              </div>
            </Link>
          ))}
        </>
      )}
      {!loading && results.drugs.length > 0 && (
        <>
          <div className="system-label">Drugs</div>
          {results.drugs.map((d: any) => (
            <Link key={d.slug} href={`/drugs/${d.slug}`}>
              <div className="result-item drug">
                <div className="ri-type">Drug</div>
                <h4>{d.title}</h4>
                {d.classification && <p>{d.classification}</p>}
              </div>
            </Link>
          ))}
        </>
      )}
      {!loading && results.notes.length > 0 && (
        <>
          <div className="system-label">Notes</div>
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
