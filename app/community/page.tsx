'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { matchedSharedResources } from '@/lib/class-command-center'
import { getCommunityPages, type PageRow } from '@/lib/supabase'
import { VouchButton } from './vouch-button'

function excerpt(content: string): string {
  return content
    .replace(/^#+\s+/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, '$2$1')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180)
}

export default function CommunityPage() {
  const [pages, setPages] = useState<PageRow[]>([])
  const [loaded, setLoaded] = useState(false)
  const hasStudentPages = pages.length > 0

  useEffect(() => {
    getCommunityPages().then(result => {
      setPages(result)
      setLoaded(true)
    })
  }, [])

  return (
    <main className="repository-page">
      <header className="repository-header">
        <div>
          <p className="eyebrow">Matched Shared Resources</p>
          <h1>Helpful after your class is organized.</h1>
          <p>Peer resources are shown in context by class, module, and topic. Vouches rank usefulness; they do not make anything official.</p>
        </div>
        <div className="repository-actions">
          <Link href="/pages/new?type=note&template=study-guide" className="primary-button">New Study Guide</Link>
          <Link href="/student-intel" className="secondary-button">Student Intel</Link>
        </div>
      </header>

      <section className="matched-resource-strip">
        {matchedSharedResources.map(resource => (
          <article key={resource.title}>
            <span>{resource.label}</span>
            <strong>{resource.title}</strong>
            <p>{resource.note}</p>
            <small>{resource.vouches} vouches · {resource.module}</small>
          </article>
        ))}
      </section>

      <section className="repository-results">
        <div className="result-toolbar">
          <strong>{loaded ? (hasStudentPages ? `${pages.length} student submissions` : 'Starter matched resources') : 'Loading submissions'}</strong>
          <span>Context first. Vouch before trusting.</span>
        </div>

        {loaded && !hasStudentPages ? (
          <>
            <p className="repository-results-note">
              No live class submissions yet, so Pulse shows sample matched resources that demonstrate the standard: module-specific, vouched, and clearly labeled.
            </p>
            <div className="repository-card-grid">
              {matchedSharedResources.map(resource => (
                <article key={resource.title} className="repo-card community-card">
                  <div className="repo-card-top">
                    <span className="repo-icon">{resource.kind.slice(0, 1)}</span>
                    <span className="repo-type">{resource.kind}</span>
                  </div>
                  <h2>{resource.title}</h2>
                  <p>{resource.note}</p>
                  <div className="resource-trust-row">
                    <span>{resource.label}</span>
                    <strong>{resource.vouches} vouches</strong>
                  </div>
                  <div className="repo-card-footer">
                    <span>{resource.module}</span>
                    <Link href="/classes/med-surg-i">Match to class</Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="repository-card-grid">
            {pages.map(page => (
              <article key={page.id} className="repo-card community-card">
                <div className="repo-card-top">
                  <span className="repo-icon">{page.type.slice(0, 1).toUpperCase()}</span>
                  <span className="repo-type">{page.type === 'procedure' ? 'Study Guide' : 'Note'}</span>
                </div>
                <h2>{page.title}</h2>
                <p>{excerpt(page.content)}</p>
                <VouchButton pageId={page.id} />
                <div className="repo-card-footer">
                  <span>{new Date(page.updated_at || page.created_at).toLocaleDateString()}</span>
                  <Link href={`/notes/${page.id}`}>Open</Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
