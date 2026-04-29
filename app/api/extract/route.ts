import { courses, getModuleSlug } from '@/lib/classes'
import { extractFileText, type ExtractedFileText } from '@/lib/file-extractor'
import { detectImportDestination, parseModuleImport } from '@/lib/module-import'
import { jsonError, jsonOk } from '@/lib/pulse/server'

export const runtime = 'nodejs'

const MAX_FILES = 12
const MAX_FILE_BYTES = 24 * 1024 * 1024

type ExtractedWorkspaceItem = ExtractedFileText & {
  destination: ReturnType<typeof detectImportDestination>
  draft: ReturnType<typeof parseModuleImport> | null
  targetKits: string[]
}

function targetKitsForText(text: string, dates: string[]) {
  const targets = new Set<string>(['private-inbox'])
  if (dates.length || /\b(due|exam|quiz|clinical|presentation|deadline|schedule)\b/i.test(text)) targets.add('calendar-kit')
  if (/\b(module|course|week|lecture|syllabus|rubric)\b/i.test(text)) targets.add('course-organizer')
  if (/\b(drug|medication|disease|pathophysiology|assessment|intervention|nursing)\b/i.test(text)) targets.add('card-library')
  if (/\b(study guide|quiz|flashcard|review|exam)\b/i.test(text)) targets.add('create-studies')
  return Array.from(targets)
}

function buildWorkspaceItem(extracted: ExtractedFileText): ExtractedWorkspaceItem {
  const sourceText = extracted.text || `Source file: ${extracted.fileName}`
  const destination = detectImportDestination(`${extracted.fileName}\n${sourceText}`)
  const course = courses.find(item => item.slug === destination.courseSlug) || courses[0]
  const lessonModule = course.modules.find(item => getModuleSlug(item) === destination.moduleSlug) || course.modules[0]
  const draft = extracted.text ? parseModuleImport(sourceText, course, lessonModule) : null

  return {
    ...extracted,
    destination,
    draft,
    targetKits: targetKitsForText(sourceText, draft?.dates || []),
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files').filter((item): item is File => item instanceof File)

    if (!files.length) return jsonError('Add at least one file to extract.', 400)
    if (files.length > MAX_FILES) return jsonError(`Import up to ${MAX_FILES} files at once for this prototype.`, 400)

    const items: ExtractedWorkspaceItem[] = []

    for (const file of files) {
      if (file.size > MAX_FILE_BYTES) {
        items.push(buildWorkspaceItem({
          fileName: file.name,
          mimeType: file.type || 'application/octet-stream',
          size: file.size,
          extension: file.name.split('.').pop()?.toLowerCase() || '',
          status: 'unsupported',
          text: '',
          preview: '',
          warnings: [`File is larger than ${Math.round(MAX_FILE_BYTES / 1024 / 1024)} MB. Split it before importing.`],
        }))
        continue
      }

      const buffer = Buffer.from(await file.arrayBuffer())
      const extracted = await extractFileText(file.name, file.type || 'application/octet-stream', file.size, buffer)
      items.push(buildWorkspaceItem(extracted))
    }

    const calendarCandidates = items.flatMap(item =>
      (item.draft?.dates || []).map(date => ({
        date,
        fileName: item.fileName,
        courseTitle: item.destination.courseTitle,
        moduleTitle: item.destination.moduleTitle,
        sourceKind: item.destination.sourceKind,
      }))
    )

    return jsonOk({
      items,
      calendarCandidates,
      summary: {
        fileCount: items.length,
        extractedCount: items.filter(item => item.status === 'extracted').length,
        calendarCandidateCount: calendarCandidates.length,
        targetKits: Array.from(new Set(items.flatMap(item => item.targetKits))),
      },
    })
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not extract files.', 500)
  }
}
