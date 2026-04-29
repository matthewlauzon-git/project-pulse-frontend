'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getNote, getSlugTypeMap, renderWikilinks } from '@/lib/supabase'
import type { Note } from '@/lib/supabase'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WIKILINK: any = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  const isInternal = href?.startsWith('/diseases/') || href?.startsWith('/drugs/') || href?.startsWith('/notes/')
  if (isInternal && href) return <Link href={href} className="wikilink">{children}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

const COMPONENTS = { a: WIKILINK }

export default function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [note, setNote] = useState<Note | null>(null)
  const [slugMap, setSlugMap] = useState<Record<string, 'disease' | 'drug' | 'note'>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getNote(slug), getSlugTypeMap()])
      .then(([n, map]) => { setNote(n); setSlugMap(map); setLoading(false) })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!note) return <main className="page-wrap"><div className="empty-state">Note not found</div></main>

  let content = note.content || ''
  content = renderWikilinks(content, slugMap)
  content = renderHashtags(content)

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/notes" className="back-btn">← Back to notes</Link>
        <div className="detail-actions">
          <Link href={`/pages/${note.slug}/edit`} className="back-btn">Edit</Link>
          <span className="type-badge note">{note.content_type || 'Note'}</span>
        </div>
      </div>
      <h1 className="detail-title">{note.title}</h1>
      <div className="detail-meta">
        {note.course_code && <span>{note.course_code}</span>}
      </div>
      <div className="content-body">
        <ReactMarkdown components={COMPONENTS}>{content}</ReactMarkdown>
      </div>
    </main>
  )
}
