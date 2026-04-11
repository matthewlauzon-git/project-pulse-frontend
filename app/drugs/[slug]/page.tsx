'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDrug } from '@/lib/supabase'
import type { Drug } from '@/lib/supabase'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

function renderWikilinks(content: string): string {
  return content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, slug, label) => {
    return `[${label}](/diseases/${slug.trim()})`
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WIKILINK: any = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  const isInternal = href?.startsWith('/diseases/') || href?.startsWith('/drugs/') || href?.startsWith('/notes/')
  if (isInternal && href) return <Link href={href} className="wikilink">{children}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

const COMPONENTS = { a: WIKILINK }

export default function DrugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [drug, setDrug] = useState<Drug | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDrug(slug).then(d => { setDrug(d); setLoading(false) })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!drug) return <main className="page-wrap"><div className="empty-state">Drug not found</div></main>

  let content = drug.content || ''
  content = renderWikilinks(content)
  content = renderHashtags(content)

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/drugs" className="back-btn">← Back to drugs</Link>
        <span className="type-badge drug">Drug</span>
      </div>
      <h1 className="detail-title">{drug.title}</h1>
      <div className="detail-meta">
        {drug.classification && <span>{drug.classification}</span>}
        {drug.trade_names && <span>Trade names: {drug.trade_names}</span>}
      </div>
      <div className="content-body">
        <ReactMarkdown components={COMPONENTS}>{content}</ReactMarkdown>
      </div>
    </main>
  )
}
