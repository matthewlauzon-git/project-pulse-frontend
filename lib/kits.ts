export type PulseKitStatus = 'Core' | 'Available' | 'Prototype'

export type PulseKitCategory = 'Organizer' | 'Study' | 'Reference' | 'Sharing' | 'Export'

export type PulseKit = {
  slug: string
  title: string
  creator: string
  status: PulseKitStatus
  category: PulseKitCategory
  summary: string
  adds: string[]
  permissions: string[]
  actionHref: string
  actionLabel: string
  defaultInstalled?: boolean
  locked?: boolean
}

export const pulseKits: PulseKit[] = [
  {
    slug: 'private-inbox',
    title: 'Private Intake',
    creator: 'Pulse core',
    status: 'Core',
    category: 'Organizer',
    summary: 'The only thing every workspace starts with: a safe place to drop files, paste notes, and review extracted structure.',
    adds: [
      'Drag-and-drop import',
      'Review-before-save queue',
      'Source labels and private/raw-file boundaries',
    ],
    permissions: [
      'Can read files you choose to import',
      'Cannot share raw source files',
      'Can send extracted text to installed kits after review',
    ],
    actionHref: '/import',
    actionLabel: 'Import files',
    defaultInstalled: true,
    locked: true,
  },
  {
    slug: 'course-organizer',
    title: 'Courses Organizer',
    creator: 'Pulse starter kit',
    status: 'Available',
    category: 'Organizer',
    summary: 'Adds class shelves, modules, professor/course info, and module-linked notes without forcing every student into the same layout.',
    adds: [
      'Course cards and module shelves',
      'Class Canon and My Layer separation',
      'Links to disease and drug cards by module',
    ],
    permissions: [
      'Uses reviewed class metadata',
      'Can suggest module placement',
      'Does not publish your class files',
    ],
    actionHref: '/classes',
    actionLabel: 'Open course kit',
  },
  {
    slug: 'calendar-kit',
    title: 'Calendar Kit',
    creator: 'Pulse starter kit',
    status: 'Prototype',
    category: 'Organizer',
    summary: 'A detachable calendar and deadline board fed by extracted syllabus dates, assignment sheets, and clinical schedules.',
    adds: [
      'Upcoming deadlines',
      'Exam and clinical date candidates',
      'Future Google/Apple/ICS export target',
    ],
    permissions: [
      'Reads reviewed date candidates',
      'Can create calendar items you approve',
      'Can stay inside Pulse or become its own organizer page',
    ],
    actionHref: '/classes',
    actionLabel: 'Preview calendar source',
  },
  {
    slug: 'ask-pulse',
    title: 'Ask Pulse',
    creator: 'Pulse starter kit',
    status: 'Available',
    category: 'Study',
    summary: 'Adds a class-aware question box that answers from your imported material, installed kits, and built-in nursing cards.',
    adds: [
      'Ask over selected workspace sources',
      'Source cards for every answer',
      'Permissioned suggestions when notes look messy',
    ],
    permissions: [
      'Uses only sources you allow',
      'Does not silently use peer resources',
      'Can suggest but not auto-change your workspace',
    ],
    actionHref: '/ask',
    actionLabel: 'Open Ask',
  },
  {
    slug: 'create-studies',
    title: 'Study Output Kit',
    creator: 'Pulse starter kit',
    status: 'Available',
    category: 'Study',
    summary: 'Turns selected files into study guides, quizzes, clinical prep sheets, drug tables, and flashcards.',
    adds: [
      'Study guide generator',
      'Quiz and flashcard prompts',
      'Clinical prep sheet structure',
    ],
    permissions: [
      'Uses selected files only',
      'Labels generated output as AI assisted',
      'Keeps outputs private until you share',
    ],
    actionHref: '/create',
    actionLabel: 'Open create kit',
  },
  {
    slug: 'card-library',
    title: 'Drug and Disease Card Library',
    creator: 'Matt and Pulse',
    status: 'Available',
    category: 'Reference',
    summary: 'Adds the nursing-card backbone: disease cards, drug cards, source chips, and wikilinks.',
    adds: [
      'Disease and drug cards',
      'Wikilinks between cards and modules',
      'Course-specific notes layered on top',
    ],
    permissions: [
      'Can link extracted topics to existing cards',
      'Can suggest new card candidates',
      'Does not replace course/professor guidance',
    ],
    actionHref: '/second-brain',
    actionLabel: 'Open library',
  },
  {
    slug: 'shared-resources',
    title: 'Source-Safe Sharing Kit',
    creator: 'Pulse starter kit',
    status: 'Prototype',
    category: 'Sharing',
    summary: 'Lets students share reviewed summaries, links, templates, and guides without turning Pulse into a public file dump.',
    adds: [
      'Private until shared review step',
      'Vouch labels for classmates',
      'Professor-aligned and source-chip labels',
    ],
    permissions: [
      'Never shares raw slides or textbook files by default',
      'Can create shareable summaries after review',
      'Keeps peer experience separate from clinical/course truth',
    ],
    actionHref: '/community',
    actionLabel: 'Open shared kit',
  },
  {
    slug: 'student-intel',
    title: 'Student Intel Kit',
    creator: 'Pulse starter kit',
    status: 'Prototype',
    category: 'Sharing',
    summary: 'A separate peer-advice board for placements, electives, next-year tips, and things nobody officially tells students.',
    adds: [
      'Placement and elective tips',
      'Peer vouches',
      'Clear unofficial-experience labels',
    ],
    permissions: [
      'Cannot feed clinical/course answers as truth',
      'Can be filtered by cohort or placement',
      'Keeps advice separate from source-backed study material',
    ],
    actionHref: '/student-intel',
    actionLabel: 'Open intel kit',
  },
  {
    slug: 'markdown-export',
    title: 'Markdown Folder Export',
    creator: 'Pulse starter kit',
    status: 'Prototype',
    category: 'Export',
    summary: 'The local-first escape hatch: keep clean Markdown notes, generated guides, and source pointers you can take anywhere.',
    adds: [
      'Pulse Workspace folder map',
      'Course/module Markdown outline',
      'Action log for import and export changes',
    ],
    permissions: [
      'Copies by default instead of deleting originals',
      'Keeps export available even on free tier',
      'Designed for Obsidian or plain folders later',
    ],
    actionHref: '/second-brain',
    actionLabel: 'Open export target',
  },
]

export function getCoreKits() {
  return pulseKits.filter(kit => kit.defaultInstalled)
}

export function getAvailableKits() {
  return pulseKits.filter(kit => !kit.defaultInstalled)
}

export function getKitBySlug(slug: string) {
  return pulseKits.find(kit => kit.slug === slug)
}
