'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getNotes, type NoteListItem } from '@/lib/supabase'

export default function NotesPage() {
  const [notes, setNotes] = useState<NoteListItem[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => { getNotes().then(setNotes) }, [])

  const filtered = filter
    ? notes.filter(n => n.title.toLowerCase().includes(filter.toLowerCase()) || n.course_code?.toLowerCase().includes(filter.toLowerCase()))
    : notes

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Notes</h1>
        <p>Lectures, exam prep, clinical notes</p>
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input type="text" placeholder="Filter notes…" value={filter} onChange={e => setFilter(e.target.value)} autoFocus />
      </div>
      <div className="card-grid">
        {filtered.length === 0 && <div className="loading">Loading…</div>}
        {filtered.map(n => (
          <Link key={n.slug} href={`/notes/${n.slug}`} className="card note">
            <div className="type">{n.content_type || 'Note'}</div>
            <h3>{n.title}</h3>
            {n.course_code && <p className="meta">{n.course_code}</p>}
          </Link>
        ))}
      </div>
    </main>
  )
}
