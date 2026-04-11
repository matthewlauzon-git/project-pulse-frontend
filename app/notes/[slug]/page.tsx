'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getNote, getSlugTypeMap, renderWikilinks } from '@/lib/supabase'
import type { Note } from '@/lib/supabase'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

export default function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [note, setNote] = useState<Note | null>(null)
  const [slugMap, setSlugMap] = useState<Record<string, 'disease' | 'drug' | 'note'> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getSlugTypeMap(),
      getNote(slug),
    ]).then(([map, n]) => {
      setSlugMap(map)
      setNote(n)
      setLoading(false)
    })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!note) return <main className="page-wrap"><div className="empty-state">Note not found</div></main>

  let content = note.content || ''
  if (slugMap) content = renderWikilinks(content, slugMap)
  content = renderHashtags(content)

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/notes" className="back-btn">← Back to notes</Link>
        <span className="type-badge note">{note.content_type || 'Note'}</span>
      </div>
      <h1 className="detail-title">{note.title}</h1>
      <div className="detail-meta">
        {note.course_code && <span>{note.course_code}</span>}
      </div>
      <div className="content-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  )
}
