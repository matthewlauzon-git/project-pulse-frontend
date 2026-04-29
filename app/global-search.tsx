'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { queryPulseSearch, type PulseSearchItem } from '@/lib/fuzzy-search'

export function GlobalSearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<PulseSearchItem[]>([])
  const [open, setOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    if (!query.trim()) {
      return
    }

    queryPulseSearch(query, 8).then(nextResults => {
      if (!cancelled) setResults(nextResults)
    })

    return () => { cancelled = true }
  }, [query])

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeOnOutsideClick)
  }, [])

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextQuery = query.trim()
    if (nextQuery) {
      setOpen(false)
      router.push(`/search?q=${encodeURIComponent(nextQuery)}`)
    }
  }

  const visibleResults = query.trim() ? results : []

  return (
    <div className="global-search" ref={searchRef}>
      <form className="global-search-form" onSubmit={submitSearch}>
        <span>⌕</span>
        <input
          type="search"
          value={query}
          onChange={event => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search diseases, drugs, notes, classes, modules..."
          aria-label="Search Pulse"
        />
      </form>

      {open && query.trim() && (
        <div className="global-search-results">
          {visibleResults.length > 0 ? visibleResults.map(result => (
            <Link
              href={result.href}
              key={result.id}
              className={`global-search-result ${result.kind.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              <span>{result.kind}</span>
              <strong>{result.title}</strong>
              <small>{result.kicker}{result.body ? ` - ${result.body}` : ''}</small>
            </Link>
          )) : (
            <div className="global-search-empty">No matches yet</div>
          )}
          <button type="button" className="global-search-all" onClick={() => router.push(`/search?q=${encodeURIComponent(query.trim())}`)}>
            View all results
          </button>
        </div>
      )}
    </div>
  )
}
