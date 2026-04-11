'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getNote } from '@/lib/supabase'
import type { Note } from '@/lib/supabase'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

const DRUG_SLUGS = new Set([
  'prednisone','metformin','insulin','furosemide','spironolactone','warfarin','heparin',
  'albumin','acetaminophen','acyclovir','allopurinol','amoxicillin','azathioprine',
  'benzoyl-peroxide','brentuximab-vedotin','ciprofloxacin','cyclophosphamide',
  'desmopressin','dexamethasone','dopamine','doxorubicin','fentanyl','hydroxyurea',
  'isotretinoin','l-glutamine','lactulose','metronidazole','morphine','ondansetron',
  'pantoprazole','ranitidine','rituximab','vincristine','voxelotor','azithromycin',
  'clarithromycin','omeprazole','metoclopramide','loperamide','gabapentin','pregabalin',
  'duloxetine','hydromorphone','naloxone','buprenorphine','methadone',
  'sulfamethoxazole-trimethoprim',
])

function renderWikilinks(content: string): string {
  return content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, slug, label) => {
    const clean = slug.trim()
    const prefix = DRUG_SLUGS.has(clean) ? '/drugs' : '/diseases'
    return `[${label}](${prefix}/${clean})`
  })
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNote(slug).then(n => { setNote(n); setLoading(false) })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!note) return <main className="page-wrap"><div className="empty-state">Note not found</div></main>

  let content = note.content || ''
  content = renderWikilinks(content)
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
        <ReactMarkdown components={COMPONENTS}>{content}</ReactMarkdown>
      </div>
    </main>
  )
}
