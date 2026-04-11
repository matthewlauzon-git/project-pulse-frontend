'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDisease, getRelated, getSlugTypeMap, renderWikilinks } from '@/lib/supabase'
import type { Disease } from '@/lib/supabase'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

export default function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [disease, setDisease] = useState<Disease | null>(null)
  const [related, setRelated] = useState<any[]>([])
  const [slugMap, setSlugMap] = useState<Record<string, 'disease' | 'drug' | 'note'> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch slug map + disease in parallel
    Promise.all([
      getSlugTypeMap(),
      getDisease(slug),
    ]).then(([map, d]) => {
      setSlugMap(map)
      setDisease(d)
      setLoading(false)
      if (d) {
        getRelated('disease', slug).then(r => setRelated(r)).catch(() => {})
      }
    })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!disease) return <main className="page-wrap"><div className="empty-state">Disease not found</div></main>

  let content = disease.content || ''
  if (slugMap) content = renderWikilinks(content, slugMap)
  content = renderHashtags(content)

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/diseases" className="back-btn">← Back to diseases</Link>
        <span className="type-badge disease">Disease</span>
      </div>
      <h1 className="detail-title">{disease.title}</h1>
      <div className="detail-meta">
        {disease.incidence && <span>{disease.incidence}</span>}
        {disease.tags?.map((t: string) => <span key={t}>#{t}</span>)}
      </div>
      <div className="content-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {related.length > 0 && (
        <div className="related">
          <h4>Linked Content</h4>
          <div className="related-grid">
            {related.map(item => (
              <Link key={item.slug} href={`/diseases/${item.slug}`} className="rcard disease">
                <div className="rc-type">Disease</div>
                <h5>{item.title}</h5>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
