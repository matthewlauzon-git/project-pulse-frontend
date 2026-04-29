'use client'

import { use, useEffect, useState } from 'react'
import Link from 'next/link'
import { getPage, type PageRow } from '@/lib/supabase'
import { PageEditor } from '../../page-editor'

export default function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [page, setPage] = useState<PageRow | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPage(slug).then(result => {
      setPage(result)
      setLoading(false)
    })
  }, [slug])

  if (loading) return <main className="page-wrap"><div className="loading">Loading editor...</div></main>

  if (!page) {
    return (
      <main className="page-wrap">
        <div className="empty-state">Page not found.</div>
      </main>
    )
  }

  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href={`/${page.type === 'disease' ? 'diseases' : page.type === 'drug' ? 'drugs' : 'notes'}/${page.id}`} className="back-btn">
          Back to page
        </Link>
        <span className={`type-badge ${page.type === 'drug' ? 'drug' : page.type === 'disease' ? 'disease' : 'note'}`}>
          Edit {page.type}
        </span>
      </div>
      <div className="page-header">
        <h1>Edit Page</h1>
        <p>Make focused markdown edits, then save back to Supabase.</p>
      </div>
      <PageEditor page={page} />
    </main>
  )
}
