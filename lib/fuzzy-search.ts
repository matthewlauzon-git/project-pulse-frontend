import { courses, getModuleSlug } from '@/lib/classes'
import { getDiseases, getDrugs, getNotes } from '@/lib/supabase'

export type PulseSearchKind = 'Disease' | 'Drug' | 'Note' | 'Class' | 'Module'

export type PulseSearchItem = {
  id: string
  title: string
  href: string
  kind: PulseSearchKind
  kicker: string
  body?: string
  keywords: string
}

let searchIndexCache: PulseSearchItem[] | null = null

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

function fuzzyScore(query: string, item: PulseSearchItem): number {
  const q = normalize(query)
  if (!q) return 0

  const title = normalize(item.title)
  const haystack = normalize(`${item.title} ${item.kicker} ${item.body || ''} ${item.keywords}`)
  if (title === q) return 1000
  if (title.startsWith(q)) return 850
  if (title.includes(q)) return 760
  if (haystack.includes(q)) return 620

  let score = 0
  let cursor = 0
  for (const char of q.replace(/\s/g, '')) {
    const next = haystack.indexOf(char, cursor)
    if (next === -1) return 0
    score += Math.max(12, 40 - (next - cursor))
    cursor = next + 1
  }
  return score
}

export async function getPulseSearchIndex(): Promise<PulseSearchItem[]> {
  if (searchIndexCache) return searchIndexCache

  const [diseases, drugs, notes] = await Promise.all([getDiseases(), getDrugs(), getNotes()])
  const classItems: PulseSearchItem[] = courses.flatMap(course => [
    {
      id: `class-${course.code}`,
      title: course.title,
      href: `/classes/${course.slug}`,
      kind: 'Class' as const,
      kicker: course.code,
      body: course.summary,
      keywords: `${course.term} ${course.modules.map(module => module.title).join(' ')}`,
    },
    ...course.modules.map(module => ({
      id: `module-${course.code}-${module.title}`,
      title: module.title,
      href: `/classes/${course.slug}/modules/${getModuleSlug(module)}`,
      kind: 'Module' as const,
      kicker: course.title,
      body: module.focus,
      keywords: `${course.code} ${module.materials.join(' ')} ${module.links.map(link => link.title).join(' ')}`,
    })),
  ])

  searchIndexCache = [
    ...diseases.map(item => ({
      id: `disease-${item.slug}`,
      title: item.title,
      href: `/diseases/${item.slug}`,
      kind: 'Disease' as const,
      kicker: 'Disease card',
      body: item.incidence,
      keywords: item.tags?.join(' ') || '',
    })),
    ...drugs.map(item => ({
      id: `drug-${item.slug}`,
      title: item.title,
      href: `/drugs/${item.slug}`,
      kind: 'Drug' as const,
      kicker: 'Drug card',
      body: item.classification || item.trade_names,
      keywords: `${item.classification || ''} ${item.trade_names || ''} ${item.tags?.join(' ') || ''}`,
    })),
    ...notes.map(item => ({
      id: `note-${item.slug}`,
      title: item.title,
      href: `/notes/${item.slug}`,
      kind: 'Note' as const,
      kicker: item.course_code || item.content_type || 'Note',
      body: item.content_type,
      keywords: `${item.course_code || ''} ${item.tags?.join(' ') || ''}`,
    })),
    ...classItems,
  ]

  return searchIndexCache
}

export async function queryPulseSearch(query: string, limit = 24): Promise<PulseSearchItem[]> {
  const index = await getPulseSearchIndex()
  return index
    .map(item => ({ item, score: fuzzyScore(query, item) }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(result => result.item)
}
