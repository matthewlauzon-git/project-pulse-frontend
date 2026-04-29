'use client'
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getDrug, getSlugTypeMap, renderWikilinks } from '@/lib/supabase'
import type { Drug } from '@/lib/supabase'
import { getCourseContextsForCard } from '@/lib/classes'
import { drugStudyFrames, type DrugStudyFrame } from '@/lib/drug-study-frames'

function renderHashtags(content: string): string {
  return content.replace(/(^|\s)#([A-Za-z0-9_-]+)/g, (_, space, tag) => `${space}\`#${tag}\``)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WIKILINK: any = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  const isInternal = href?.startsWith('/diseases/') || href?.startsWith('/drugs/') || href?.startsWith('/notes/')
  if (isInternal && href) return <Link href={href} className="wikilink">{children}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

const COMPONENTS = { a: WIKILINK }

function splitCue(item: string) {
  const [label, ...rest] = item.split(':')
  if (rest.length === 0) return { label: '', body: item }
  return { label: label.trim(), body: rest.join(':').trim() }
}

function BulletSection({ title, items, tone }: { title: string; items: string[]; tone?: 'danger' | 'watch' }) {
  return (
    <section className={`drug-frame-section ${tone || ''}`}>
      <h2>{title}</h2>
      <ul>
        {items.map(item => {
          const cue = splitCue(item)
          return (
            <li key={item}>
              {cue.label && <strong>{cue.label}</strong>}
              <span>{cue.body}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function DrugStudyFrameView({ frame }: { frame: DrugStudyFrame }) {
  return (
    <article className="drug-study-frame">
      <header className="drug-frame-hero">
        <div>
          <p className="eyebrow">Student Drug Card</p>
          <h2>Before you give it, know this.</h2>
          <p>{frame.oneLiner}</p>
        </div>
        <div className="drug-frame-facts" aria-label="Drug facts">
          <span>
            <strong>Class</strong>
            {frame.classLabel}
          </span>
          <span>
            <strong>Brands</strong>
            {frame.brands.join(', ')}
          </span>
        </div>
      </header>

      <div className="drug-priority-strip">
        <section>
          <span>Stop first</span>
          <strong>{splitCue(frame.danger[0]).body}</strong>
        </section>
        <section>
          <span>Reassess</span>
          <strong>{splitCue(frame.holdOrReassess[0]).body}</strong>
        </section>
        <section>
          <span>Do not forget</span>
          <strong>{splitCue(frame.nclexTrap[1]).body}</strong>
        </section>
      </div>

      <div className="drug-frame-workflow">
        <div className="drug-frame-primary">
          <BulletSection title="Before Giving" items={frame.quickChecks} />
          <BulletSection title="Hold / Reassess" items={frame.holdOrReassess.slice(1)} tone="watch" />
        </div>
        <div className="drug-frame-secondary">
          <BulletSection title="Monitor" items={frame.monitor} />
          <BulletSection title="Teach" items={frame.patientTeaching} />
          <BulletSection title="Danger" items={frame.danger.slice(1)} tone="danger" />
          <BulletSection title="NCLEX Trap" items={frame.nclexTrap.filter((_, index) => index !== 1)} tone="watch" />
        </div>
      </div>
    </article>
  )
}

export default function DrugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [drug, setDrug] = useState<Drug | null>(null)
  const [slugMap, setSlugMap] = useState<Record<string, 'disease' | 'drug' | 'note'>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getDrug(slug), getSlugTypeMap()])
      .then(([d, map]) => { setDrug(d); setSlugMap(map); setLoading(false) })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading…</div></main>
  if (!drug) return <main className="page-wrap"><div className="empty-state">Drug not found</div></main>

  let content = drug.content || ''
  content = renderWikilinks(content, slugMap)
  content = renderHashtags(content)
  const courseContexts = getCourseContextsForCard(`/drugs/${drug.slug}`)
  const hasCourseSources = courseContexts.some(context => context.sources.some(source => source.status === 'Sourced'))
  const hasSourceWarnings = courseContexts.some(context => context.sources.some(source => source.status !== 'Sourced'))
  const studyFrame = drugStudyFrames[drug.slug]

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/drugs" className="back-btn">← Back to drugs</Link>
        <div className="detail-actions">
          <Link href={`/pages/${drug.slug}/edit`} className="back-btn">Edit</Link>
          <span className="type-badge drug">Drug</span>
        </div>
      </div>
      <h1 className="detail-title">{drug.title}</h1>
      <div className="detail-meta">
        {drug.classification && <span>{drug.classification}</span>}
        {drug.trade_names && <span>Trade names: {drug.trade_names}</span>}
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
        <div className="drug-detail-stack">
          {studyFrame ? (
            <DrugStudyFrameView frame={studyFrame} />
          ) : (
            <div className="content-body drug-card-body">
              <ReactMarkdown components={COMPONENTS}>{content}</ReactMarkdown>
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
