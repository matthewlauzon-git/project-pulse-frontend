'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDisease, getRelated, getSlugTypeMap, renderWikilinks } from '@/lib/supabase'
import type { Disease, RelatedItem } from '@/lib/supabase'
import { getCourseContextsForCard } from '@/lib/classes'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
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
  const [slugMap, setSlugMap] = useState<Record<string, 'disease' | 'drug' | 'note'>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getDisease(slug),
      getRelated('disease', slug),
      getSlugTypeMap(),
    ]).then(([d, r, map]) => {
      setDisease(d)
      setRelated(r || [])
      setSlugMap(map)
      setLoading(false)
    })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!disease) return <main className="page-wrap"><div className="empty-state">Disease not found</div></main>

  let content = disease.content || ''
  content = renderWikilinks(content, slugMap)
  content = renderHashtags(content)
  const courseContexts = getCourseContextsForCard(`/diseases/${disease.slug}`)
  const hasCourseSources = courseContexts.some(context => context.sources.some(source => source.status === 'Sourced'))
  const hasSourceWarnings = courseContexts.some(context => context.sources.some(source => source.status !== 'Sourced'))

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/diseases" className="back-btn">← Back to diseases</Link>
        <div className="detail-actions">
          <Link href={`/pages/${disease.slug}/edit`} className="back-btn">Edit</Link>
          <span className="type-badge disease">Disease</span>
        </div>
      </div>
      <h1 className="detail-title">{disease.title}</h1>
      <div className="detail-meta">
        {disease.incidence && <span>{disease.incidence}</span>}
        {disease.tags?.map((t: string) => <span key={t}>#{t}</span>)}
      </div>
      <div className="card-source-banner">
        <span className={hasCourseSources ? 'source-status good' : 'source-status warning'}>
          {hasCourseSources ? 'Course-linked' : 'Needs course source'}
        </span>
        <span className={hasSourceWarnings ? 'source-status warning' : 'source-status good'}>
          {hasSourceWarnings ? 'Has source warnings' : 'No course warnings'}
        </span>
        <p>Study support only. Use course instructions, institutional policy, and clinical judgment.</p>
      </div>
      <div className="detail-study-layout">
        <div>
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
        </div>
        <aside className="card-context-rail">
          <section className="card-context-panel">
            <p className="eyebrow">Course Notes</p>
            <h2>Where This Shows Up</h2>
            {courseContexts.length > 0 ? (
              <div className="course-context-list">
                {courseContexts.map(context => (
                  <Link
                    href={`/classes/${context.course.slug}/modules/${context.moduleSlug}`}
                    key={`${context.course.slug}-${context.moduleSlug}`}
                    className="course-context-card"
                  >
                    <span>{context.course.code}</span>
                    <strong>{context.moduleTitle}</strong>
                    <p>{context.focus}</p>
                    {context.deadline && <small>{context.deadline}</small>}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="course-context-empty">
                <strong>No course notes yet</strong>
                <p>When a module links this card, its professor/course notes will appear here.</p>
              </div>
            )}
          </section>

          <section className="card-context-panel">
            <p className="eyebrow">Source Chips</p>
            <h2>Claim Anchors</h2>
            <div className="source-chip-list compact">
              {courseContexts.flatMap(context =>
                context.sources.map(source => (
                  <article key={`${context.moduleSlug}-${source.label}-${source.detail}`} className={`source-chip-card ${source.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                    <span>{source.status}</span>
                    <strong>{source.label}</strong>
                    <p>{source.kind}</p>
                    <small>{source.detail}</small>
                  </article>
                ))
              )}
              {courseContexts.every(context => context.sources.length === 0) && (
                <article className="source-chip-card needs-source">
                  <span>Needs source</span>
                  <strong>Add course source</strong>
                  <p>Professor/course, lecture slide, textbook, or student note</p>
                  <small>Required before this becomes official course-specific content.</small>
                </article>
              )}
            </div>
          </section>

          <section className="card-context-panel">
            <p className="eyebrow">Next Study Moves</p>
            <h2>Do / Review</h2>
            <div className="module-task-list compact">
              {courseContexts.flatMap(context =>
                context.tasks.slice(0, 2).map(task => (
                  <article key={`${context.moduleSlug}-${task.title}`} className={`module-task-card ${task.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                    <span>{task.status}</span>
                    <div>
                      <strong>{task.title}</strong>
                      <p>{task.note}</p>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}
