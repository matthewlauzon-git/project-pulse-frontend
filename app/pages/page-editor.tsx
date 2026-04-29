'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { savePage, type PageRow, type PageType } from '@/lib/supabase'

const TYPE_OPTIONS: PageType[] = ['disease', 'drug', 'procedure', 'note']

const STARTER_CONTENT: Record<PageType, string> = {
  disease: `## Clinical Core

### Definition

### Pathophysiology

### Assessment

## Nursing Safety

### Priorities

### Red Flags

### Teaching
`,
  drug: `## Clinical Core

### Class

### Brand Names

### Mechanism

## Nursing Safety

### Monitor

### Adverse Effects

### Teaching
`,
  procedure: `## Purpose

## Before

## During

## After

## Nursing Safety
`,
  note: `## Summary

## Key Concepts

## Links
`,
}

export const STUDY_GUIDE_STARTER = `## What The Professor Emphasized

## Exam Clues

## Must Know

## Common Mistakes

## Practice Questions

## Related Pulse Cards
`

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function routeFor(type: PageType, id: string): string {
  if (type === 'disease') return `/diseases/${id}`
  if (type === 'drug') return `/drugs/${id}`
  return `/notes/${id}`
}

export function PageEditor({
  page,
  defaultType = 'note',
  defaultContent,
}: {
  page?: PageRow | null
  defaultType?: PageType
  defaultContent?: string
}) {
  const router = useRouter()
  const [title, setTitle] = useState(page?.title || '')
  const [type, setType] = useState<PageType>(page?.type || defaultType)
  const [id, setId] = useState(page?.id || '')
  const [content, setContent] = useState(page?.content || defaultContent || STARTER_CONTENT[defaultType])
  const [slugTouched, setSlugTouched] = useState(Boolean(page?.id))
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const isNew = !page
  const canSave = useMemo(() => Boolean(title.trim() && id.trim() && content.trim()), [title, id, content])

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!canSave) return

    setStatus('saving')
    setMessage('')

    try {
      const saved = await savePage({
        id: id.trim(),
        title: title.trim(),
        type,
        content,
        isNew,
      })
      setStatus('saved')
      setMessage('Saved to Supabase.')
      router.push(routeFor(saved.type, saved.id))
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Save failed.')
    }
  }

  return (
    <form className="editor-shell" onSubmit={handleSave}>
      <div className="editor-grid">
        <section className="editor-panel">
          <label>
            <span>Title</span>
            <input
              value={title}
              onChange={event => {
                const nextTitle = event.target.value
                setTitle(nextTitle)
                if (!slugTouched) setId(slugify(nextTitle))
              }}
              placeholder="e.g. Heart Failure"
            />
          </label>

          <label>
            <span>Type</span>
            <select
              value={type}
              onChange={event => {
                const nextType = event.target.value as PageType
                setType(nextType)
                if (!page && !content.trim()) setContent(STARTER_CONTENT[nextType])
              }}
            >
              {TYPE_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Slug</span>
            <input
              value={id}
              onChange={event => {
                setSlugTouched(true)
                setId(slugify(event.target.value))
              }}
              placeholder="heart-failure"
              disabled={!isNew}
            />
          </label>

          <div className="editor-actions">
            <button type="submit" className="primary-button" disabled={!canSave || status === 'saving'}>
              {status === 'saving' ? 'Saving...' : 'Save Page'}
            </button>
            {message && <p className={`save-message ${status}`}>{message}</p>}
          </div>
        </section>

        <label className="markdown-editor">
          <span>Markdown</span>
          <textarea value={content} onChange={event => setContent(event.target.value)} />
        </label>
      </div>
    </form>
  )
}
