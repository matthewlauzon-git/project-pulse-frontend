import { courses, getModuleSlug, type CardLink, type CourseTrack, type LessonModule, type SourceAnchor } from '@/lib/classes'

export type ModuleImportDraft = {
  summary: string
  topics: string[]
  dates: string[]
  sourceAnchors: SourceAnchor[]
  linkedCards: CardLink[]
  warnings: string[]
}

export type ImportSourceKind = 'Syllabus' | 'Slides' | 'Assignment' | 'Rubric' | 'Study guide' | 'Lecture notes' | 'Unknown'

export type ImportDestination = {
  courseSlug: string
  courseTitle: string
  courseCode: string
  moduleSlug: string
  moduleTitle: string
  sourceKind: ImportSourceKind
  confidence: number
  reasons: string[]
  filingPath: string
}

const SOURCE_PATTERNS: Array<{ pattern: RegExp; kind: SourceAnchor['kind']; label: string }> = [
  { pattern: /\b(professor|instructor|teacher|lecture said|said in class)\b/i, kind: 'Professor/course', label: 'Professor/course note' },
  { pattern: /\b(slide|powerpoint|ppt|lecture deck)\b/i, kind: 'Lecture slide', label: 'Lecture slide' },
  { pattern: /\b(textbook|chapter|page\s+\d+|ch\.)\b/i, kind: 'Textbook', label: 'Textbook' },
  { pattern: /\b(my note|student note|study guide|notebooklm)\b/i, kind: 'Student note', label: 'Student note' },
]

const SOURCE_KIND_PATTERNS: Array<{ kind: ImportSourceKind; pattern: RegExp; reason: string }> = [
  { kind: 'Syllabus', pattern: /\b(syllabus|course outline|grading|evaluation|course schedule)\b/i, reason: 'Looks like a syllabus/course outline' },
  { kind: 'Rubric', pattern: /\b(rubric|criteria|grading rubric|marking guide)\b/i, reason: 'Rubric or grading criteria detected' },
  { kind: 'Assignment', pattern: /\b(assignment|due|submit|submission|case analysis|project|presentation)\b/i, reason: 'Assignment/deadline language detected' },
  { kind: 'Slides', pattern: /\b(slide|slides|powerpoint|ppt|lecture deck|week\s+\d+)\b/i, reason: 'Lecture slide/deck language detected' },
  { kind: 'Study guide', pattern: /\b(study guide|review notes|exam review|midterm guide|final review)\b/i, reason: 'Study guide/review language detected' },
  { kind: 'Lecture notes', pattern: /\b(lecture notes|class notes|professor said|said in class|instructor)\b/i, reason: 'Lecture/class-note language detected' },
]

function cleanLine(line: string) {
  return line
    .replace(/^[-*#\d.)\s]+/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)))
}

function folderSafe(value: string) {
  return value
    .replace(/&/g, 'and')
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function sourceFolder(kind: ImportSourceKind) {
  if (kind === 'Slides') return 'Slides'
  if (kind === 'Assignment' || kind === 'Rubric') return 'Assignments'
  if (kind === 'Syllabus') return 'Syllabus'
  if (kind === 'Study guide') return 'Study_Guides'
  if (kind === 'Lecture notes') return 'Notes'
  return 'Inbox'
}

function detectSourceKind(text: string): { kind: ImportSourceKind; reason: string } {
  const matched = SOURCE_KIND_PATTERNS.find(item => item.pattern.test(text))
  return matched ? { kind: matched.kind, reason: matched.reason } : { kind: 'Unknown', reason: 'No strong source type detected yet' }
}

function scoreCourse(text: string, course: CourseTrack) {
  const reasons: string[] = []
  let score = 0
  const haystack = text.toLowerCase()
  const codeTokens = [course.code, course.title, course.slug].map(item => item.toLowerCase())

  for (const token of codeTokens) {
    if (token && haystack.includes(token)) {
      score += 32
      reasons.push(`Matched ${course.code}/${course.title}`)
      break
    }
  }

  for (const lessonModule of course.modules) {
    const moduleText = [
      lessonModule.title,
      lessonModule.focus,
      ...lessonModule.materials,
      ...lessonModule.links.map(link => link.title),
    ].join(' ').toLowerCase()
    const moduleTokens = unique(moduleText.split(/[^a-z0-9]+/).filter(token => token.length > 4))
    const matches = moduleTokens.filter(token => haystack.includes(token)).slice(0, 8)
    if (matches.length) {
      score += Math.min(40, matches.length * 8)
      reasons.push(`Matched module terms: ${matches.slice(0, 3).join(', ')}`)
    }
  }

  return { score, reasons }
}

function scoreModule(text: string, course: CourseTrack, lessonModule: LessonModule) {
  const haystack = text.toLowerCase()
  let score = 0
  const reasons: string[] = []
  const directTerms = [lessonModule.title, ...lessonModule.materials, ...lessonModule.links.map(link => link.title)]

  for (const term of directTerms) {
    if (term.length > 3 && haystack.includes(term.toLowerCase())) {
      score += 26
      reasons.push(`Matched ${term}`)
    }
  }

  const topicTokens = unique(`${lessonModule.focus} ${lessonModule.title}`.toLowerCase().split(/[^a-z0-9]+/).filter(token => token.length > 4))
  const matches = topicTokens.filter(token => haystack.includes(token)).slice(0, 5)
  if (matches.length) {
    score += Math.min(35, matches.length * 7)
    reasons.push(`Topic fit: ${matches.slice(0, 3).join(', ')}`)
  }

  if (course.modules.indexOf(lessonModule) === 0) score += 2
  return { score, reasons }
}

export function detectImportDestination(input: string): ImportDestination {
  const text = input.trim()
  const source = detectSourceKind(text)
  const scoredCourses = courses.map(course => ({ course, ...scoreCourse(text, course) }))
  const bestCourse = scoredCourses.sort((a, b) => b.score - a.score)[0]?.course || courses[0]
  const courseReasons = scoredCourses.find(item => item.course.slug === bestCourse.slug)?.reasons || []
  const scoredModules = bestCourse.modules.map(lessonModule => ({ lessonModule, ...scoreModule(text, bestCourse, lessonModule) }))
  const bestModule = scoredModules.sort((a, b) => b.score - a.score)[0]?.lessonModule || bestCourse.modules[0]
  const moduleReasons = scoredModules.find(item => item.lessonModule.title === bestModule.title)?.reasons || []
  const rawConfidence = (scoredCourses[0]?.score || 0) + (scoredModules[0]?.score || 0) + (source.kind === 'Unknown' ? 0 : 12)
  const confidence = text ? Math.max(22, Math.min(96, rawConfidence)) : 0
  const moduleSlug = getModuleSlug(bestModule)
  const filingPath = `Pulse Workspace/02_Courses/${folderSafe(bestCourse.title)}/${sourceFolder(source.kind)}/${folderSafe(bestModule.title)}`

  return {
    courseSlug: bestCourse.slug,
    courseTitle: bestCourse.title,
    courseCode: bestCourse.code,
    moduleSlug,
    moduleTitle: bestModule.title,
    sourceKind: source.kind,
    confidence,
    reasons: unique([source.reason, ...courseReasons, ...moduleReasons]).slice(0, 5),
    filingPath,
  }
}

function firstSentences(input: string, limit = 2) {
  return input
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .slice(0, limit)
    .join(' ')
}

function extractTopics(lines: string[]) {
  const topicLines = lines.flatMap(line => {
    const clean = cleanLine(line)
    const explicit = clean.match(/^(?:topics?|covered|focus)\s*:\s*(.+)$/i)
    if (explicit) return explicit[1].split(/[,;]+/).map(topic => topic.trim())
    return [clean]
  })

  return unique(
    topicLines
      .filter(line => line.length >= 6 && line.length <= 90)
      .filter(line => !/(http|www\.|due|exam|assignment|chapter|slide|page)/i.test(line))
      .slice(0, 10)
  )
}

function extractDates(text: string) {
  const matches = text.match(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{1,2}(?:,\s+\d{4})?(?:\s*(?:at|@|•|-)\s*\d{1,2}:?\d{0,2}\s*(?:AM|PM)?)?/gi)
  return unique(matches || []).slice(0, 8)
}

function extractSourceAnchors(lines: string[]) {
  const anchors: SourceAnchor[] = []
  const seen = new Set<string>()
  for (const line of lines) {
    const clean = cleanLine(line)
    if (!clean) continue
    for (const matched of SOURCE_PATTERNS) {
      if (!matched.pattern.test(clean)) continue
      const key = `${matched.kind}-${clean.slice(0, 90)}`
      if (seen.has(key)) continue
      seen.add(key)
      anchors.push({
        label: matched.label,
        detail: clean.slice(0, 160),
        kind: matched.kind,
        status: matched.kind === 'Student note' ? 'Needs source' : 'Sourced',
      })
    }
  }
  return anchors.slice(0, 8)
}

function extractLinkedCards(text: string, course: CourseTrack, lessonModule: LessonModule) {
  const searchText = text.toLowerCase()
  const courseLinks = course.modules.flatMap(module => module.links)
  const candidates = unique([...lessonModule.links, ...courseLinks].map(link => link.href))
    .map(href => courseLinks.find(link => link.href === href) || lessonModule.links.find(link => link.href === href))
    .filter((link): link is CardLink => Boolean(link))

  return candidates.filter(link => {
    const title = link.title.toLowerCase()
    const simpleTitle = title.replace(/\s*\([^)]*\)/g, '')
    return searchText.includes(title) || (simpleTitle.length > 4 && searchText.includes(simpleTitle))
  })
}

export function parseModuleImport(input: string, course: CourseTrack, lessonModule: LessonModule): ModuleImportDraft {
  const text = input.trim()
  if (!text) {
    return {
      summary: '',
      topics: [],
      dates: [],
      sourceAnchors: [],
      linkedCards: [],
      warnings: ['Paste NotebookLM output, lecture notes, or a module summary to create a draft.'],
    }
  }

  const lines = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean)
  const sourceAnchors = extractSourceAnchors(lines)
  const linkedCards = extractLinkedCards(text, course, lessonModule)
  const dates = extractDates(text)
  const topics = extractTopics(lines)
  const warnings = []

  if (sourceAnchors.length === 0) warnings.push('Needs source chips before becoming official course content.')
  if (linkedCards.length === 0) warnings.push('No existing disease/drug cards detected. Review for new card candidates.')
  if (/pdf|textbook|powerpoint|ppt|slide deck/i.test(text)) warnings.push('Keep source pointers and summaries only. Do not share full PDFs or slide decks.')
  if (/dosage|administer|give|hold|contraindication/i.test(text)) warnings.push('Review med-action language for course context, orders, and institution policy.')

  return {
    summary: firstSentences(text, 3),
    topics,
    dates,
    sourceAnchors,
    linkedCards,
    warnings,
  }
}
