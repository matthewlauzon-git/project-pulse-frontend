'use client'

import { Suspense, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { PageEditor, STUDY_GUIDE_STARTER } from '../page-editor'
import type { PageType } from '@/lib/supabase'

const VALID_TYPES: PageType[] = ['disease', 'drug', 'procedure', 'note']

function NewPageContent() {
  const params = useSearchParams()
  const defaultType = useMemo(() => {
    const type = params.get('type') as PageType | null
    return type && VALID_TYPES.includes(type) ? type : 'note'
  }, [params])
  const defaultContent = params.get('template') === 'study-guide' ? STUDY_GUIDE_STARTER : undefined

  return <PageEditor defaultType={defaultType} defaultContent={defaultContent} />
}

export default function NewPage() {
  return (
    <main className="page-wrap">
      <div className="detail-header">
        <Link href="/" className="back-btn">Back to dashboard</Link>
        <span className="type-badge note">New Page</span>
      </div>
      <div className="page-header">
        <h1>Create a Page</h1>
        <p>Draft a disease, drug, procedure, or study note in the same markdown model Pulse already uses.</p>
      </div>
      <Suspense fallback={<div className="loading">Loading editor...</div>}>
        <NewPageContent />
      </Suspense>
    </main>
  )
}
