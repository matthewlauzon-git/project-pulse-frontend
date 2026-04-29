import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { courses, getModuleSlug, type CardLink, type SourceAnchor } from '@/lib/classes'
import { detectImportDestination, parseModuleImport, type ImportSourceKind } from '@/lib/module-import'

export type ModuleReviewStatus = 'Needs source' | 'Needs review' | 'Ready to merge'

export type ModuleReviewQueueItem = {
  id: string
  createdAt: string
  updatedAt: string
  status: ModuleReviewStatus
  courseSlug: string
  courseTitle: string
  courseCode: string
  moduleSlug: string
  moduleTitle: string
  moduleHref: string
  summary: string
  topics: string[]
  dates: string[]
  sourceAnchors: SourceAnchor[]
  linkedCards: CardLink[]
  warnings: string[]
  rawInput: string
  sourceKind?: ImportSourceKind
  filingPath?: string
  detectionConfidence?: number
}

export type CreateModuleReviewInput = {
  courseSlug?: string
  moduleSlug?: string
  input?: string
}

const queuePath = path.join(process.cwd(), 'content', 'review-queue', 'module-imports.json')

function inferStatus(warnings: string[], sourceAnchors: SourceAnchor[]): ModuleReviewStatus {
  if (sourceAnchors.length === 0 || warnings.some(warning => /needs source/i.test(warning))) return 'Needs source'
  if (warnings.length > 0) return 'Needs review'
  return 'Ready to merge'
}

async function readQueueFile(): Promise<ModuleReviewQueueItem[]> {
  try {
    const raw = await readFile(queuePath, 'utf8')
    const parsed = JSON.parse(raw) as ModuleReviewQueueItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return []
    throw error
  }
}

async function writeQueueFile(items: ModuleReviewQueueItem[]) {
  await mkdir(path.dirname(queuePath), { recursive: true })
  await writeFile(queuePath, `${JSON.stringify(items, null, 2)}\n`, 'utf8')
}

export async function listModuleReviewQueue(limit = 12): Promise<ModuleReviewQueueItem[]> {
  const items = await readQueueFile()
  return items
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit)
}

export async function createModuleReviewItem(input: CreateModuleReviewInput): Promise<ModuleReviewQueueItem> {
  const rawInput = input.input?.trim() || ''
  if (rawInput.length < 20) throw new Error('IMPORT_TOO_SHORT')

  const detected = detectImportDestination(rawInput)
  const course = courses.find(item => item.slug === (input.courseSlug || detected.courseSlug))
  if (!course) throw new Error('COURSE_NOT_FOUND')

  const lessonModule = course.modules.find(item => getModuleSlug(item) === (input.moduleSlug || detected.moduleSlug))
  if (!lessonModule) throw new Error('MODULE_NOT_FOUND')

  const draft = parseModuleImport(rawInput, course, lessonModule)
  const now = new Date().toISOString()
  const moduleSlug = getModuleSlug(lessonModule)

  const item: ModuleReviewQueueItem = {
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    status: inferStatus(draft.warnings, draft.sourceAnchors),
    courseSlug: course.slug,
    courseTitle: course.title,
    courseCode: course.code,
    moduleSlug,
    moduleTitle: lessonModule.title,
    moduleHref: `/classes/${course.slug}/modules/${moduleSlug}`,
    summary: draft.summary,
    topics: draft.topics,
    dates: draft.dates,
    sourceAnchors: draft.sourceAnchors,
    linkedCards: draft.linkedCards,
    warnings: draft.warnings,
    rawInput,
    sourceKind: detected.sourceKind,
    filingPath: detected.filingPath,
    detectionConfidence: detected.confidence,
  }

  const items = await readQueueFile()
  await writeQueueFile([item, ...items].slice(0, 100))
  return item
}
