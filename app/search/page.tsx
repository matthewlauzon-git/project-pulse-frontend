'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { queryPulseSearch, type PulseSearchItem } from '@/lib/fuzzy-search'

const KIND_LABEL: Record<string, string> = {
  Class: 'Classes',
  Disease: 'Diseases',
  Drug: 'Drugs',
  Module: 'Modules',
  Note: 'Notes',
}

const KIND_ICON: Record<string, string> = {
  Class: '▤',
  Disease: '+',
  Drug: '◆',
  Module: '▤',
  Note: '□',
}

function SearchResults() {
  const params = useSearchParams()
  const initialQuery = params.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<PulseSearchItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  useEffect(() => {
    let cancelled = false
    const nextQuery = query.trim()

    if (!nextQuery) {
      setResults([])
      setLoading(false)
      return
    }

    setLoading(true)
    queryPulseSearch(nextQuery, 40).then(nextResults => {
      if (!cancelled) {
        setResults(nextResults)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [query])

  const groupedResults = results.reduce<Record<string, PulseSearchItem[]>>((groups, result) => {
    groups[result.kind] = groups[result.kind] || []
    groups[result.kind].push(result)
    return groups
  }, {})

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Search</h1>
        <p>Live fuzzy search across disease cards, drug cards, notes, classes, and modules.</p>
      </div>

      <div className="search-wrap live-search-wrap">
        <span className="si">⌕</span>
        <input
          type="search"
          placeholder="Try alzh, uti, pharm, renal, insulin..."
          value={query}
          onChange={event => setQuery(event.target.value)}
          autoFocus
        />
      </div>

      {loading && <div className="loading">Searching...</div>}
      {!loading && query.trim() && results.length === 0 && <div className="empty-state">No results for &quot;{query}&quot;</div>}
      {!query.trim() && !loading && (
        <div className="empty-state">
          <p>Start typing to see matching links instantly.</p>
          <p style={{ marginTop: 8, fontSize: '0.82rem' }}>Search catches close matches, abbreviations, tags, classes, and modules.</p>
        </div>
      )}

      {!loading && Object.entries(groupedResults).map(([kind, items]) => (
        <section key={kind} className="search-result-section">
          <div className="system-label">
            <span className="sys-emoji">{KIND_ICON[kind] || '□'}</span>
            {KIND_LABEL[kind] || kind} <span className="sys-count">{items.length}</span>
          </div>
          <div className="live-result-list">
            {items.map(item => (
              <Link href={item.href} key={item.id} className={`result-item ${item.kind.toLowerCase()}`}>
                <div className="ri-type">{item.kind}</div>
                <h4>{item.title}</h4>
                <p>{item.kicker}{item.body ? ` - ${item.body}` : ''}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<main className="page-wrap"><div className="loading">Loading...</div></main>}>
      <SearchResults />
    </Suspense>
  )
}
