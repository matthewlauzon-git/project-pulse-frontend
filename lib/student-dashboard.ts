import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { DISEASE_SYSTEM_ORDER, inferDiseaseSystem } from '@/lib/classification'
import { courses, getModuleSlug, type CourseTrack } from '@/lib/classes'
import { aprilCalendarDays, semesterEvents, type SemesterEvent } from '@/lib/semester'
import type { DiseaseListItem, DrugListItem, NoteListItem } from '@/lib/supabase'

const FEATURED_SYSTEMS = [
  'Cardiac',
  'Respiratory',
  'Neurological',
  'Endocrine',
  'Renal and Urinary',
  'Gastrointestinal',
  'Hematologic',
  'Infectious and Immune',
]

export type StudentDashboardCourse = {
  slug: string
  code: string
  title: string
  summary: string
  moduleCount: number
  currentModuleTitle?: string
  currentModuleHref?: string
  nextDeadline?: string
}

export type StudentDashboardSuggestion = {
  courseCode: string
  title: string
  note: string
  moduleTitle: string
  href: string
}

export type StudentDashboardGroup = {
  title: string
  course: string
  href: string
  note: string
  due: string
}

export type StudentDashboardBundle = {
  signedIn: boolean
  dataMode: 'placeholder' | 'enrollment'
  monthLabel: string
  calendarDays: typeof aprilCalendarDays
  events: SemesterEvent[]
  eventsByDay: Record<number, SemesterEvent[]>
  upcomingEvents: SemesterEvent[]
  courses: StudentDashboardCourse[]
  studySuggestions: StudentDashboardSuggestion[]
  activeGroups: StudentDashboardGroup[]
  libraryCounts: {
    disease: number
    drug: number
    note: number
  }
  systemCounts: Record<string, number>
  visibleSystems: string[]
}

function moduleHref(course: CourseTrack, moduleIndex: number) {
  const lessonModule = course.modules[moduleIndex]
  if (!lessonModule) return undefined
  return `/classes/${course.slug}/modules/${getModuleSlug(lessonModule)}`
}

function getCurrentModuleIndex(course: CourseTrack): number {
  const deadlineIndex = course.modules.findIndex(module => module.deadline)
  if (deadlineIndex >= 0) return deadlineIndex
  if (course.slug === 'med-surg-i') return 1
  if (course.slug === 'pharmacology') return 2
  if (course.slug === 'pathophysiology') return 2
  return 0
}

function buildCourseRows(): StudentDashboardCourse[] {
  return courses.map(course => {
    const currentModuleIndex = getCurrentModuleIndex(course)
    const currentModule = course.modules[currentModuleIndex]
    return {
      slug: course.slug,
      code: course.code,
      title: course.title,
      summary: course.summary,
      moduleCount: course.modules.length,
      currentModuleTitle: currentModule?.title,
      currentModuleHref: moduleHref(course, currentModuleIndex),
      nextDeadline: currentModule?.deadline,
    }
  })
}

function buildStudySuggestions(): StudentDashboardSuggestion[] {
  const planned = [
    {
      courseSlug: 'med-surg-i',
      moduleIndex: 1,
      title: 'Renal exam is close',
      note: 'Review renal/urinary plus the GI and metabolic carryover before the Apr 28 assessment.',
    },
    {
      courseSlug: 'pharmacology',
      moduleIndex: 2,
      title: 'Tighten med cards',
      note: 'Use the six-bullet nursing card shape for cardiac, renal, and endocrine meds.',
    },
    {
      courseSlug: 'pathophysiology',
      moduleIndex: 2,
      title: 'Case-analysis prep',
      note: 'Connect endocrine and neuro findings to labs, safety risks, and linked cards.',
    },
  ]

  return planned.flatMap(item => {
    const course = courses.find(candidate => candidate.slug === item.courseSlug)
    const lessonModule = course?.modules[item.moduleIndex]
    if (!course || !lessonModule) return []
    return [{
      courseCode: course.code,
      title: item.title,
      note: item.note,
      moduleTitle: lessonModule.title,
      href: `/classes/${course.slug}/modules/${getModuleSlug(lessonModule)}`,
    }]
  })
}

function buildActiveGroups(): StudentDashboardGroup[] {
  return [
    {
      title: 'Patho Case Analysis',
      course: 'Pathophysiology',
      href: '/classes/pathophysiology/modules/neuro-and-endocrine-regulation',
      note: 'Draft source notes, rubric reminders, and linked endocrine cards.',
      due: 'Apr 22',
    },
    {
      title: 'Prototype Drug Cards',
      course: 'Pharmacology',
      href: '/classes/pharmacology/modules/anti-infectives',
      note: 'Use the official card template; mark unclear claims as Needs source.',
      due: 'May 1',
    },
  ]
}

function buildEventsByDay(events: SemesterEvent[]) {
  return events
    .filter(event => event.date.startsWith('Apr '))
    .reduce<Record<number, SemesterEvent[]>>((days, event) => {
      days[event.day] = days[event.day] || []
      days[event.day].push(event)
      return days
    }, {})
}

async function readLocalCards() {
  const file = path.join(process.cwd(), 'public', 'data', 'cards.json')
  const parsed = JSON.parse(await readFile(file, 'utf8')) as {
    diseases?: DiseaseListItem[]
    drugs?: DrugListItem[]
    notes?: NoteListItem[]
  }
  return {
    diseases: parsed.diseases || [],
    drugs: parsed.drugs || [],
    notes: parsed.notes || [],
  }
}

export async function getStudentDashboardBundle(): Promise<StudentDashboardBundle> {
  const { diseases, drugs, notes } = await readLocalCards()

  const systemCounts: Record<string, number> = {}
  ;(diseases as DiseaseListItem[]).forEach(disease => {
    const system = inferDiseaseSystem(disease)
    systemCounts[system] = (systemCounts[system] || 0) + 1
  })

  const visibleSystems = FEATURED_SYSTEMS.filter(system => systemCounts[system]).concat(
    DISEASE_SYSTEM_ORDER.filter(system => systemCounts[system] && !FEATURED_SYSTEMS.includes(system))
  )

  return {
    signedIn: false,
    dataMode: 'placeholder',
    monthLabel: 'April 2026',
    calendarDays: aprilCalendarDays,
    events: semesterEvents,
    eventsByDay: buildEventsByDay(semesterEvents),
    upcomingEvents: semesterEvents.slice(0, 5),
    courses: buildCourseRows(),
    studySuggestions: buildStudySuggestions(),
    activeGroups: buildActiveGroups(),
    libraryCounts: {
      disease: diseases.length,
      drug: drugs.length,
      note: notes.length,
    },
    systemCounts,
    visibleSystems,
  }
}
