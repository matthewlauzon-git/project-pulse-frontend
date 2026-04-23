'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDisease, getRelated } from '@/lib/supabase'
import type { Disease, RelatedItem } from '@/lib/supabase'

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

function Wikilink({ href, children }: { href?: string; children?: React.ReactNode }) {
  const isInternal = href?.startsWith('/diseases/') || href?.startsWith('/drugs/') || href?.startsWith('/notes/')
  if (isInternal && href) return <Link href={href} className="wikilink">{children}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

const COMPONENTS = { a: Wikilink }

export default function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [disease, setDisease] = useState<Disease | null>(null)
  const [related, setRelated] = useState<RelatedItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getDisease(slug),
      getRelated('disease', slug),
    ]).then(([d, r]) => {
      setDisease(d)
      setRelated(r || [])
      setLoading(false)
    })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!disease) return <main className="page-wrap"><div className="empty-state">Disease not found</div></main>

  let content = disease.content || ''
  content = renderWikilinks(content)
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
        <ReactMarkdown components={COMPONENTS}>{content}</ReactMarkdown>
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
