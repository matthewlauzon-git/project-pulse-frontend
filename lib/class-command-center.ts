import { courses, getCourseBySlug, getModuleSlug, type CardLink, type CourseTrack, type LessonModule } from '@/lib/classes'
import { getEventsForCourse, semesterEvents, type SemesterEvent } from '@/lib/semester'

export type ClassCanonItem = {
  title: string
  kind: 'Syllabus' | 'Slides' | 'Rubric' | 'Assignment' | 'Schedule' | 'Lecture notes'
  detail: string
  source: string
  privacy: 'Private'
}

export type MyLayerItem = {
  title: string
  kind: 'Note' | 'Teacher emphasis' | 'Generated guide' | 'Extra resource'
  detail: string
  linkedTo: string
}

export type StudyOutput = {
  title: string
  kind: 'Study guide' | 'Clinical prep' | 'Quiz' | 'Drug table' | 'Flashcards'
  detail: string
  source: 'My files' | 'Pulse template'
}

export type SharedResource = {
  title: string
  kind: 'Study guide' | 'Checklist' | 'Concept map' | 'Video notes'
  module: string
  note: string
  vouches: number
  label: 'Matches your class' | 'Peer vouched' | 'Professor-aligned'
}

export type StudentIntelPost = {
  title: string
  category: 'Placement' | 'Elective' | 'Next year' | 'Clinical site'
  cohort: string
  body: string
  vouches: number
  caution: string
}

export type ClassWorkspace = {
  course: CourseTrack
  proof: boolean
  canon: ClassCanonItem[]
  myLayer: MyLayerItem[]
  studyOutputs: StudyOutput[]
  sharedResources: SharedResource[]
  nextActions: string[]
  askSources: string[]
  askAnswer: string[]
  activeModule: LessonModule
  linkedCards: CardLink[]
  events: SemesterEvent[]
}

const medSurgCanon: ClassCanonItem[] = [
  {
    title: 'Med-Surg course outline',
    kind: 'Syllabus',
    detail: 'Exam weighting, clinical expectations, textbook chapters, assignment windows.',
    source: 'Blackboard import',
    privacy: 'Private',
  },
  {
    title: 'Renal and urinary lecture deck',
    kind: 'Slides',
    detail: 'UTI, stones, obstruction, AKI escalation, labs, infection risk.',
    source: 'Class file',
    privacy: 'Private',
  },
  {
    title: 'Adult med-surg rotation sheet',
    kind: 'Schedule',
    detail: 'Clinical day, prep expectations, arrival time, instructor notes.',
    source: 'Clinical folder',
    privacy: 'Private',
  },
  {
    title: 'Renal exam review checklist',
    kind: 'Assignment',
    detail: 'Exam on Apr 28 with modules 1-2 and priority assessment cues.',
    source: 'Course announcement',
    privacy: 'Private',
  },
]

const medSurgMyLayer: MyLayerItem[] = [
  {
    title: 'Teacher emphasized escalation language',
    kind: 'Teacher emphasis',
    detail: 'Differentiate lower UTI, pyelonephritis, obstruction, and sepsis cues.',
    linkedTo: 'Renal and Urinary',
  },
  {
    title: 'My clinical prep notes',
    kind: 'Note',
    detail: 'Bring renal lab ranges, I&O reminders, infection precautions, and patient teaching prompts.',
    linkedTo: 'Adult Med-Surg Rotation',
  },
  {
    title: 'Renal exam cram guide',
    kind: 'Generated guide',
    detail: 'A compact guide built from slides, module tasks, and linked cards.',
    linkedTo: 'Renal and Urinary',
  },
]

const medSurgOutputs: StudyOutput[] = [
  {
    title: 'Clinical Prep Sheet',
    kind: 'Clinical prep',
    detail: 'Assessment cues, priority interventions, labs, meds, teaching, and safety alerts.',
    source: 'Pulse template',
  },
  {
    title: 'Renal Exam Study Guide',
    kind: 'Study guide',
    detail: 'What to know first: infection escalation, AKI/CKD patterns, stones, I&O, creatinine, potassium.',
    source: 'My files',
  },
  {
    title: 'Priority Questions',
    kind: 'Quiz',
    detail: 'NCLEX-style stems built only from the class canon and linked cards.',
    source: 'Pulse template',
  },
]

export const matchedSharedResources: SharedResource[] = [
  {
    title: 'Renal exam review checklist',
    kind: 'Checklist',
    module: 'Renal and Urinary',
    note: 'Peer-vouched checklist focused on infection escalation, stones, obstruction, and AKI patterns.',
    vouches: 18,
    label: 'Matches your class',
  },
  {
    title: 'UTI vs pyelonephritis comparison',
    kind: 'Study guide',
    module: 'Renal and Urinary',
    note: 'Clean side-by-side guide with red flags, labs, interventions, and teaching.',
    vouches: 12,
    label: 'Peer vouched',
  },
  {
    title: 'Clinical prep: renal patient',
    kind: 'Concept map',
    module: 'Adult Med-Surg Rotation',
    note: 'Maps assessment priorities to I&O, labs, safety risks, and escalation language.',
    vouches: 9,
    label: 'Professor-aligned',
  },
]

export const studentIntelPosts: StudentIntelPost[] = [
  {
    title: 'What people wish they knew before adult med-surg placement',
    category: 'Placement',
    cohort: '4th year peer note',
    body: 'Ask early about parking, medication-pass expectations, documentation access, and whether your instructor wants prep sheets printed or digital.',
    vouches: 24,
    caution: 'Peer experience only. Confirm with your instructor or official placement package.',
  },
  {
    title: 'Elective planning: ask about workload before picking',
    category: 'Elective',
    cohort: 'Upper-year advice',
    body: 'Students said the same elective can feel very different depending on clinical days, commute, and group-project load.',
    vouches: 17,
    caution: 'Program details change. Treat this as planning advice, not official course guidance.',
  },
  {
    title: 'Next-year heads up: simulation weeks sneak up fast',
    category: 'Next year',
    cohort: 'Recent cohort',
    body: 'People recommended starting skills review before the first sim week instead of waiting for the official reminder.',
    vouches: 15,
    caution: 'Check your own year calendar when it is released.',
  },
]

function findActiveModule(course: CourseTrack) {
  if (course.slug === 'med-surg-i') return course.modules[1] || course.modules[0]
  if (course.slug === 'med-surg-ii') return course.modules[0]
  return course.modules.find(module => module.deadline) || course.modules[0]
}

export function getCommandCenterWorkspace(courseSlug = 'med-surg-i'): ClassWorkspace {
  const course = getCourseBySlug(courseSlug) || getCourseBySlug('med-surg-i') || courses[0]
  const activeModule = findActiveModule(course)
  const events = getEventsForCourse(course)
  const linkedCards = course.modules.flatMap(module => module.links)

  const genericCanon: ClassCanonItem[] = [
    {
      title: `${course.title} syllabus`,
      kind: 'Syllabus',
      detail: 'Course dates, assignments, grading, required chapters, and schedule.',
      source: 'Blackboard import',
      privacy: 'Private',
    },
    {
      title: `${activeModule.title} lecture files`,
      kind: 'Slides',
      detail: activeModule.focus,
      source: 'Class file',
      privacy: 'Private',
    },
  ]

  return {
    course,
    proof: course.slug === 'med-surg-i' || course.slug === 'med-surg-ii',
    canon: course.slug.startsWith('med-surg') ? medSurgCanon : genericCanon,
    myLayer: course.slug.startsWith('med-surg') ? medSurgMyLayer : [],
    studyOutputs: course.slug.startsWith('med-surg') ? medSurgOutputs : medSurgOutputs.slice(0, 2),
    sharedResources: course.slug.startsWith('med-surg') ? matchedSharedResources : matchedSharedResources.slice(0, 1),
    nextActions: [
      `Review ${activeModule.title}`,
      'Generate a clinical prep sheet from class files',
      'Ask Pulse what to prioritize for the next assessment',
      'Check matched shared resources only after your files are sorted',
    ],
    askSources: ['Class Canon', 'My Layer', 'Built-in disease/drug cards'],
    askAnswer: [
      'Start with assessment cues that change what you do next.',
      'Know infection escalation, renal labs, I&O, potassium, creatinine, pain pattern, and patient teaching.',
      'Use linked cards for disease/drug facts, but keep professor/course emphasis separate.',
    ],
    activeModule,
    linkedCards,
    events: events.length ? events : semesterEvents.filter(event => event.courseSlug === course.slug),
  }
}

export function getWorkspaceModuleHref(workspace: ClassWorkspace) {
  return `/classes/${workspace.course.slug}/modules/${getModuleSlug(workspace.activeModule)}`
}
