'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { courses, getModuleSlug } from '@/lib/classes'
import { detectImportDestination, parseModuleImport, type ImportDestination } from '@/lib/module-import'

type ImportedFilePreview = {
  name: string
  size: number
  text: string
  readable: boolean
  status: 'extracted' | 'partial' | 'unsupported' | 'error'
  warnings: string[]
  targetKits: string[]
  destination?: ImportDestination
}

type ExtractResponseItem = {
  fileName: string
  size: number
  text: string
  preview: string
  status: ImportedFilePreview['status']
  warnings: string[]
  targetKits: string[]
  destination: ImportDestination
}

type ExtractResponse = {
  data?: {
    items: ExtractResponseItem[]
    summary: {
      fileCount: number
      extractedCount: number
      calendarCandidateCount: number
      targetKits: string[]
    }
  }
  error?: string
}

export function ModuleImportClient() {
  const defaultCourse = courses.find(course => course.slug === 'med-surg-i') || courses[0]
  const defaultModule = defaultCourse?.modules[1] || defaultCourse?.modules[0]
  const [courseSlug, setCourseSlug] = useState(defaultCourse?.slug || '')
  const [moduleSlug, setModuleSlug] = useState(defaultModule ? getModuleSlug(defaultModule) : '')
  const [input, setInput] = useState('')
  const [importedFiles, setImportedFiles] = useState<ImportedFilePreview[]>([])
  const [extractState, setExtractState] = useState<'idle' | 'extracting' | 'done' | 'error'>('idle')
  const [extractMessage, setExtractMessage] = useState('')
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [saveMessage, setSaveMessage] = useState('')
  const [manualDestination, setManualDestination] = useState(false)

  const hasInput = input.trim().length > 0
  const destination = useMemo(() => detectImportDestination(input), [input])
  const canAutoFile = hasInput && destination.confidence >= 45
  const effectiveCourseSlug = !manualDestination && canAutoFile ? destination.courseSlug : courseSlug
  const selectedCourse = courses.find(course => course.slug === effectiveCourseSlug) || courses[0]
  const effectiveModuleSlug = !manualDestination && canAutoFile ? destination.moduleSlug : moduleSlug
  const selectedModule = selectedCourse?.modules.find(module => getModuleSlug(module) === effectiveModuleSlug) || selectedCourse?.modules[0]

  const draft = useMemo(() => {
    if (!selectedCourse || !selectedModule) return null
    return parseModuleImport(input, selectedCourse, selectedModule)
  }, [input, selectedCourse, selectedModule])

  const fileDestinations = useMemo(() => {
    return importedFiles.map(file => ({
      file,
      destination: file.destination || detectImportDestination(`${file.name}\n${file.text}`),
    }))
  }, [importedFiles])

  function handleCourseChange(nextCourseSlug: string) {
    const nextCourse = courses.find(course => course.slug === nextCourseSlug) || courses[0]
    setCourseSlug(nextCourse.slug)
    setModuleSlug(getModuleSlug(nextCourse.modules[0]))
    setManualDestination(true)
    setSaveState('idle')
    setSaveMessage('')
  }

  function useDetectedDestination() {
    setCourseSlug(destination.courseSlug)
    setModuleSlug(destination.moduleSlug)
    setManualDestination(false)
    setSaveState('idle')
    setSaveMessage('')
  }

  async function handleFiles(files: FileList | null) {
    if (!files?.length) return

    setExtractState('extracting')
    setExtractMessage('Extracting text, dates, topics, and kit targets...')
    setSaveState('idle')
    setSaveMessage('')

    const formData = new FormData()
    Array.from(files).forEach(file => formData.append('files', file))

    const response = await fetch('/api/extract', {
      method: 'POST',
      body: formData,
    })
    const payload = await response.json() as ExtractResponse

    if (!response.ok || !payload.data) {
      setExtractState('error')
      setExtractMessage(payload.error || 'Could not extract these files.')
      return
    }

    const previews = payload.data.items.map(item => {
      return {
        name: item.fileName,
        size: item.size,
        text: item.text || item.preview,
        readable: item.status === 'extracted' || item.status === 'partial',
        status: item.status,
        warnings: item.warnings,
        targetKits: item.targetKits,
        destination: item.destination,
      }
    })

    setImportedFiles(previews)
    const combined = previews
      .map(file => {
        const body = file.readable && file.text.trim()
          ? file.text.trim()
          : 'File queued by name. No readable text was extracted yet.'
        return `Source file: ${file.name}\nTarget kits: ${file.targetKits.join(', ') || 'private-inbox'}\n${body}`
      })
      .join('\n\n---\n\n')

    setInput(combined)
    setManualDestination(false)
    setExtractState('done')
    setExtractMessage(
      `Extracted ${payload.data.summary.extractedCount} of ${payload.data.summary.fileCount} file(s). Target kits: ${payload.data.summary.targetKits.join(', ') || 'private-inbox'}.`
    )
  }

  async function saveForReview() {
    if (!selectedCourse || !selectedModule || input.trim().length < 20) {
      setSaveState('error')
      setSaveMessage('Paste enough module content before saving.')
      return
    }

    setSaveState('saving')
    setSaveMessage('Saving this as a draft for human review...')

    const response = await fetch('/api/module-imports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courseSlug: selectedCourse.slug,
        moduleSlug: getModuleSlug(selectedModule),
        input,
      }),
    })

    const payload = await response.json() as { data?: { id: string }; error?: string }
    if (!response.ok) {
      setSaveState('error')
      setSaveMessage(payload.error || 'Could not save this draft.')
      return
    }

    setSaveState('saved')
    setSaveMessage('Saved to the Library review queue. Nothing is official yet.')
  }

  const moduleHref = selectedCourse && selectedModule
    ? `/classes/${selectedCourse.slug}/modules/${getModuleSlug(selectedModule)}`
    : '/classes'
  const previewDestination = hasInput
    ? destination
    : {
        courseTitle: selectedCourse?.title || 'Med-Surg I',
        moduleTitle: selectedModule?.title || 'Renal and Urinary',
        sourceKind: 'Unknown',
        filingPath: selectedCourse && selectedModule
          ? `Pulse Workspace/02_Courses/${selectedCourse.title.replace(/[^A-Za-z0-9]+/g, '_')}/Inbox/${selectedModule.title.replace(/[^A-Za-z0-9]+/g, '_')}`
          : 'Pulse Workspace/02_Courses/Med_Surg_I/Inbox/Renal_and_Urinary',
        reasons: ['Waiting for class material'],
      }

  return (
    <div className="module-import-layout">
      <section className="module-import-panel">
        <div className="board-heading">
          <div>
            <p className="eyebrow">Import</p>
            <h2>Drop in messy workspace material</h2>
          </div>
        </div>

        <div className="auto-file-card">
          <div>
            <span>Auto Filing</span>
            <strong>{hasInput ? `${destination.courseCode} · ${destination.moduleTitle}` : 'Waiting for class material'}</strong>
            <p>{hasInput ? `${destination.sourceKind} → ${destination.filingPath}` : 'Paste or upload course content and Pulse will suggest a class, module, source type, and filing path.'}</p>
          </div>
          <div className="auto-confidence">
            <strong>{destination.confidence}%</strong>
            <span>confidence</span>
          </div>
          <button type="button" onClick={useDetectedDestination} disabled={!hasInput}>Use detected</button>
        </div>

        <div className="import-onboarding-note">
          <span>Base workspace</span>
          <strong>Start with one folder or file batch.</strong>
          <p>Pulse extracts structure first, then routes the result into whatever kits you install: Calendar, Courses, Cards, Ask, Create, or Export.</p>
        </div>

        <div className="module-import-controls">
          <label>
            <span>Course {manualDestination ? '(manual)' : '(auto)'}</span>
            <select value={selectedCourse?.slug || ''} onChange={event => handleCourseChange(event.target.value)}>
              {courses.map(course => (
                <option key={course.slug} value={course.slug}>{course.title}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Module</span>
            <select value={effectiveModuleSlug} onChange={event => {
              setModuleSlug(event.target.value)
              setManualDestination(true)
            }}>
              {selectedCourse?.modules.map(module => (
                <option key={module.title} value={getModuleSlug(module)}>{module.title}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="import-file-drop">
          <span>Upload Blackboard exports, notes, slides, rubrics, or syllabus files</span>
          <input
            type="file"
            multiple
            onChange={event => handleFiles(event.target.files)}
            accept=".txt,.md,.markdown,.csv,.json,.pdf,.ppt,.pptx,.doc,.docx"
          />
          <strong>Choose files</strong>
          <small>Text, Markdown, PDF, PowerPoint, and Word extraction now runs through the server-side extractor prototype.</small>
        </label>
        {extractMessage ? <p className={`module-import-save-message ${extractState === 'error' ? 'error' : 'saved'}`}>{extractMessage}</p> : null}

        {fileDestinations.length ? (
          <div className="import-file-list">
            {fileDestinations.map(({ file, destination }) => (
              <article key={file.name}>
                <div>
                  <strong>{file.name}</strong>
                  <span>{file.status} · {(file.size / 1024).toFixed(1)} KB · {file.targetKits.join(', ') || 'private-inbox'}</span>
                </div>
                <p>{destination.courseCode} · {destination.moduleTitle}</p>
                <small>{destination.sourceKind} · {destination.confidence}% match{file.warnings.length ? ` · ${file.warnings[0]}` : ''}</small>
              </article>
            ))}
          </div>
        ) : null}

        <label className="module-import-textarea">
          <span>Blackboard files, syllabus text, lecture notes, NotebookLM output, or assignment details</span>
          <textarea
            value={input}
            onChange={event => {
              setInput(event.target.value)
              setManualDestination(false)
              setSaveState('idle')
              setSaveMessage('')
            }}
            placeholder="Paste a syllabus section, Blackboard file list, lecture notes, rubric, slide text, or NotebookLM summary. Pulse will detect the course, module, source type, dates, topics, and filing path..."
          />
        </label>
      </section>

      <aside className="module-import-panel">
        <div className="board-heading">
          <div>
            <p className="eyebrow">Draft</p>
            <h2>Review Before Saving</h2>
          </div>
        </div>

        <div className="import-preview-stack">
          <section>
            <span className="import-preview-label">Detected Destination</span>
            <div className="detected-destination-card">
              <strong>{previewDestination.courseTitle} · {previewDestination.moduleTitle}</strong>
              <p>{previewDestination.sourceKind} files under:</p>
              <code>{previewDestination.filingPath}</code>
              <div className="import-chip-list">
                {previewDestination.reasons.map(reason => <span key={reason}>{reason}</span>)}
              </div>
            </div>
          </section>

          <section>
            <span className="import-preview-label">Kit Routing Preview</span>
            <div className="command-preview-list">
              <article>
                <span>Class Canon</span>
                <strong>Course-provided files stay private</strong>
                <p>Syllabus, slides, rubrics, assignments, and dates become the official-ish class layer.</p>
              </article>
              <article>
                <span>My Layer</span>
                <strong>Your notes append separately</strong>
                <p>Personal summaries and teacher-emphasis notes never overwrite the base cards.</p>
              </article>
              <article>
                <span>Matched Resources</span>
                <strong>Shared guides come after import</strong>
                <p>Pulse only suggests peer resources when they match this course, module, or topic.</p>
              </article>
            </div>
          </section>

          <section>
            <span className="import-preview-label">Summary</span>
            <p>{draft?.summary || 'Paste content to generate a compact module draft.'}</p>
          </section>

          <section>
            <span className="import-preview-label">Topics</span>
            <div className="import-chip-list">
              {draft?.topics.length ? draft.topics.map(topic => <span key={topic}>{topic}</span>) : <span>None detected yet</span>}
            </div>
          </section>

          <section>
            <span className="import-preview-label">Dates</span>
            <div className="import-chip-list">
              {draft?.dates.length ? draft.dates.map(date => <span key={date}>{date}</span>) : <span>No dates detected</span>}
            </div>
          </section>

          <section>
            <span className="import-preview-label">Linked Cards</span>
            <div className="import-linked-list">
              {draft?.linkedCards.length ? draft.linkedCards.map(card => (
                <Link key={card.href} href={card.href}>
                  <span>{card.type}</span>
                  <strong>{card.title}</strong>
                </Link>
              )) : <p>No existing card matches yet.</p>}
            </div>
          </section>

          <section>
            <span className="import-preview-label">Source Chips</span>
            <div className="source-chip-list compact">
              {draft?.sourceAnchors.length ? draft.sourceAnchors.map(anchor => (
                <article key={`${anchor.label}-${anchor.detail}`} className={`source-chip-card ${anchor.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                  <span>{anchor.status}</span>
                  <strong>{anchor.label}</strong>
                  <p>{anchor.kind}</p>
                  <small>{anchor.detail}</small>
                </article>
              )) : (
                <article className="source-chip-card needs-source">
                  <span>Needs source</span>
                  <strong>No source chips detected</strong>
                  <p>Add professor/course, lecture slide, textbook, or student note references.</p>
                </article>
              )}
            </div>
          </section>

          <section>
            <span className="import-preview-label">Warnings</span>
            <div className="import-warning-list">
              {draft?.warnings.length ? draft.warnings.map(warning => <p key={warning}>{warning}</p>) : <p>No warnings yet.</p>}
            </div>
          </section>

          <div className="module-import-actions">
            <button className="primary-button" type="button" onClick={saveForReview} disabled={saveState === 'saving'}>
              {saveState === 'saving' ? 'Saving...' : 'Save For Review'}
            </button>
            <Link href={moduleHref} className="secondary-button">Open Module Workspace</Link>
          </div>
          {saveMessage ? <p className={`module-import-save-message ${saveState}`}>{saveMessage}</p> : null}
        </div>
      </aside>
    </div>
  )
}
