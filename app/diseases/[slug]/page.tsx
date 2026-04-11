'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDisease, getRelated } from '@/lib/supabase'
import type { Disease } from '@/lib/supabase'

// Drug slugs — wikilinks to these go to /drugs/, all others to /diseases/
const DRUG_SLUGS = new Set<string>(["acetaminophen", "acyclovir", "albumin", "allopurinol", "amoxicillin", "azathioprine", "azithromycin", "benzoyl-peroxide", "brentuximab-vedotin", "buprenorphine", "ciprofloxacin", "clarithromycin", "cyclophosphamide", "desmopressin", "dexamethasone", "dopamine", "doxorubicin", "duloxetine", "fentanyl", "furosemide", "gabapentin", "heparin", "hydromorphone", "hydroxyurea", "insulin", "isotretinoin", "l-glutamine", "lactulose", "loperamide", "metformin", "methadone", "metoclopramide", "metronidazole", "morphine", "naloxone", "omeprazole", "ondansetron", "pantoprazole", "prednisone", "pregabalin", "ranitidine", "rituximab", "spironolactone", "sulfamethoxazole-trimethoprim", "vincristine", "voxelotor", "warfarin"])

function renderWikilinks(content: string): string {
  return content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, slug, label) => {
    const clean = slug.trim()
    const prefix = DRUG_SLUGS.has(clean) ? '/drugs' : '/diseases'
    return `[$\{label}]($\{prefix}/$\{clean})`
  })
}

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => {
    return `${space}\`#${tag}\``
  })
}

export default function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [disease, setDisease] = useState<Disease | null>(null)
  const [related, setRelated] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDisease(slug).then(d => {
      setDisease(d)
      setLoading(false)
      if (d) {
        getRelated('disease', slug).then(r => setRelated(r)).catch(() => {})
      }
    })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!disease) return <main className="page-wrap"><div className="empty-state">Disease not found</div></main>

  // Process content: wikilinks first, then hashtags
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
