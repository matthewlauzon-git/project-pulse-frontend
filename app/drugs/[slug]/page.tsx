'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDrug } from '@/lib/supabase'
import type { Drug } from '@/lib/supabase'

function renderWikilinks(content: string): string {
  return content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, slug, label) => {
    return `[${label}](/drugs/${slug.trim()})`
  })
}

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

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
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  )
}
