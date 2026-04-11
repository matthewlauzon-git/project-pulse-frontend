'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getNote } from '@/lib/supabase'
import type { Note } from '@/lib/supabase'

function renderWikilinks(content: string): string {
  return content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, slug, label) => {
    return `[${label}](/notes/${slug.trim()})`
  })
}

export default function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [note, setNote] = useState<Note | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNote(slug).then(n => { setNote(n); setLoading(false) })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!note) return <main className="page-wrap"><div className="empty-state">Note not found</div></main>

  let content = note.content || ''
  content = renderWikilinks(content)

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
