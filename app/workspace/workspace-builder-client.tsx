'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import type { PulseKit } from '@/lib/kits'

type WorkspaceBuilderClientProps = {
  kits: PulseKit[]
}

const STORAGE_KEY = 'pulse.workspace.installedKits.v1'

function readStoredKitSlugs(kits: PulseKit[]) {
  if (typeof window === 'undefined') return kits.filter(kit => kit.defaultInstalled).map(kit => kit.slug)
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return kits.filter(kit => kit.defaultInstalled).map(kit => kit.slug)
    const parsed = JSON.parse(stored) as string[]
    const valid = parsed.filter(slug => kits.some(kit => kit.slug === slug))
    const core = kits.filter(kit => kit.defaultInstalled).map(kit => kit.slug)
    return Array.from(new Set([...core, ...valid]))
  } catch {
    return kits.filter(kit => kit.defaultInstalled).map(kit => kit.slug)
  }
}

export function WorkspaceBuilderClient({ kits }: WorkspaceBuilderClientProps) {
  const [installedSlugs, setInstalledSlugs] = useState(() => kits.filter(kit => kit.defaultInstalled).map(kit => kit.slug))
  const [draggingSlug, setDraggingSlug] = useState<string | null>(null)

  useEffect(() => {
    setInstalledSlugs(readStoredKitSlugs(kits))
  }, [kits])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(installedSlugs))
  }, [installedSlugs])

  const installedKits = useMemo(
    () => installedSlugs.map(slug => kits.find(kit => kit.slug === slug)).filter((kit): kit is PulseKit => Boolean(kit)),
    [installedSlugs, kits]
  )
  const availableKits = kits.filter(kit => !installedSlugs.includes(kit.slug))

  function addKit(slug: string) {
    setInstalledSlugs(current => current.includes(slug) ? current : [...current, slug])
  }

  function removeKit(slug: string) {
    const kit = kits.find(item => item.slug === slug)
    if (kit?.locked) return
    setInstalledSlugs(current => current.filter(item => item !== slug))
  }

  function moveKit(slug: string, direction: -1 | 1) {
    setInstalledSlugs(current => {
      const index = current.indexOf(slug)
      const nextIndex = index + direction
      if (index < 0 || nextIndex < 0 || nextIndex >= current.length) return current
      const next = [...current]
      const [item] = next.splice(index, 1)
      next.splice(nextIndex, 0, item)
      return next
    })
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    const slug = event.dataTransfer.getData('text/plain') || draggingSlug
    if (slug) addKit(slug)
    setDraggingSlug(null)
  }

  return (
    <main className="workspace-page workspace-builder-page">
      <section className="workspace-builder-hero">
        <div>
          <p className="eyebrow">Base workspace</p>
          <h1>Start empty. Add only what you need.</h1>
          <p>
            Pulse is now a build-your-own nursing workspace. Drag in kits like Courses,
            Calendar, Ask, Cards, or Sharing when they help. Everything else stays shelved.
          </p>
          <div className="workspace-hero-actions">
            <Link href="/import" className="primary-button">Drop in files</Link>
            <a href="#kit-tray" className="secondary-button">Open kit tray</a>
          </div>
        </div>

        <aside className="workspace-builder-principles">
          <span>Ground rule</span>
          <strong>No default portal.</strong>
          <p>Your workspace starts with private intake. Calendar, courses, cards, shared resources, and study tools are optional kits you install or remove.</p>
        </aside>
      </section>

      <section className="workspace-builder-layout">
        <div className="workspace-canvas-panel">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Your page</p>
              <h2>Workspace Canvas</h2>
            </div>
            <span>{installedKits.length} active kits</span>
          </div>

          <div
            className={`workspace-drop-zone ${draggingSlug ? 'is-dragging' : ''}`}
            onDragOver={event => event.preventDefault()}
            onDrop={handleDrop}
          >
            <strong>Drop kits here</strong>
            <p>Arrange this however you study. The first real version can save layouts per student.</p>
          </div>

          <div className="installed-kit-grid">
            {installedKits.map((kit, index) => (
              <article key={kit.slug} className={`installed-kit-card ${kit.locked ? 'is-locked' : ''}`}>
                <div className="installed-kit-top">
                  <div>
                    <span>{kit.category}</span>
                    <h3>{kit.title}</h3>
                  </div>
                  <em>{kit.status}</em>
                </div>
                <p>{kit.summary}</p>
                <div className="kit-sends-to">
                  <strong>Receives from extractor</strong>
                  <ul>
                    {kit.adds.slice(0, 3).map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="installed-kit-actions">
                  <Link href={kit.actionHref}>{kit.actionLabel}</Link>
                  <button type="button" onClick={() => moveKit(kit.slug, -1)} disabled={index === 0}>↑</button>
                  <button type="button" onClick={() => moveKit(kit.slug, 1)} disabled={index === installedKits.length - 1}>↓</button>
                  <button type="button" onClick={() => removeKit(kit.slug)} disabled={kit.locked}>Remove</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="kit-tray-panel" id="kit-tray">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Tray</p>
              <h2>Available Kits</h2>
            </div>
          </div>
          <div className="kit-tray-list">
            {availableKits.length ? availableKits.map(kit => (
              <article
                key={kit.slug}
                draggable
                onDragStart={event => {
                  setDraggingSlug(kit.slug)
                  event.dataTransfer.setData('text/plain', kit.slug)
                }}
                onDragEnd={() => setDraggingSlug(null)}
              >
                <div>
                  <span>{kit.category}</span>
                  <strong>{kit.title}</strong>
                  <p>{kit.summary}</p>
                </div>
                <button type="button" onClick={() => addKit(kit.slug)}>Add</button>
              </article>
            )) : (
              <div className="kit-tray-empty">
                <strong>Everything is installed.</strong>
                <p>Remove a kit from the canvas to send it back here.</p>
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="workspace-extractor-map">
        <div>
          <p className="eyebrow">Extractor pipeline</p>
          <h2>Files Become Structured Signals</h2>
          <p>
            The extractor reads the files you approve, pulls out text, dates, topics, source type,
            likely class/module, and linked-card candidates, then sends those signals to installed kits.
          </p>
        </div>
        <div className="extractor-flow">
          <span>Files</span>
          <span>Extract text</span>
          <span>Detect dates/topics</span>
          <span>Send to kits</span>
        </div>
      </section>
    </main>
  )
}
