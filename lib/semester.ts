import type { CourseTrack } from './classes'

export type SemesterEvent = {
  date: string
  day: number
  courseSlug: string
  course: string
  type: 'Assignment' | 'Assessment' | 'Clinical' | 'Lecture'
  title: string
  time?: string
}

export type CourseInfo = {
  professor: string
  email: string
  officeHours: string
  textbook: string
  textbookHref: string
  schedule: string
}

export const semesterEvents: SemesterEvent[] = [
  {
    date: 'Apr 22',
    day: 22,
    courseSlug: 'pathophysiology',
    course: 'Pathophysiology',
    type: 'Assignment',
    title: 'Pathophysiology Case Analysis',
    time: '11:59 PM',
  },
  {
    date: 'Apr 22',
    day: 22,
    courseSlug: 'med-surg-ii',
    course: 'Med-Surg II',
    type: 'Lecture',
    title: 'Ethics Seminar',
    time: '10:00 AM',
  },
  {
    date: 'Apr 23',
    day: 23,
    courseSlug: 'pharmacology',
    course: 'Pharmacology',
    type: 'Lecture',
    title: 'Anti-Infectives',
    time: '09:00 AM',
  },
  {
    date: 'Apr 24',
    day: 24,
    courseSlug: 'pathophysiology',
    course: 'Pathophysiology',
    type: 'Lecture',
    title: 'Endocrine Regulation',
    time: '13:00',
  },
  {
    date: 'Apr 28',
    day: 28,
    courseSlug: 'med-surg-i',
    course: 'Med-Surg I',
    type: 'Assessment',
    title: 'Renal and Urinary Exam',
    time: '08:00',
  },
  {
    date: 'Apr 30',
    day: 30,
    courseSlug: 'med-surg-i',
    course: 'Med-Surg I',
    type: 'Clinical',
    title: 'Adult Med-Surg Rotation',
    time: '07:00',
  },
  {
    date: 'May 1',
    day: 1,
    courseSlug: 'pharmacology',
    course: 'Pharmacology',
    type: 'Assignment',
    title: 'Prototype Drug Cards',
    time: '11:59 PM',
  },
  {
    date: 'May 3',
    day: 3,
    courseSlug: 'med-surg-ii',
    course: 'Med-Surg II',
    type: 'Assessment',
    title: 'Neuro Priorities Case',
    time: '18:00',
  },
]

export const aprilCalendarDays = [
  { label: '29', muted: true, day: 29 },
  { label: '30', muted: true, day: 30 },
  { label: '31', muted: true, day: 31 },
  ...Array.from({ length: 30 }, (_, index) => ({
    label: String(index + 1),
    muted: false,
    day: index + 1,
  })),
  { label: '1', muted: true, day: 1 },
  { label: '2', muted: true, day: 2 },
]

export const courseInfo: Record<string, CourseInfo> = {
  pathophysiology: {
    professor: 'Dr. Helena Vance',
    email: 'helena.vance@pulse.edu',
    officeHours: 'Tue 14:00-15:30',
    textbook: 'McCance & Huether Pathophysiology',
    textbookHref: 'https://shop.elsevier.com/books/mccance-and-huether-s-pathophysiology/rogers/978-0-323-78987-5',
    schedule: 'Wednesday 13:00',
  },
  pharmacology: {
    professor: 'Prof. Mara Chen',
    email: 'mara.chen@pulse.edu',
    officeHours: 'Mon 11:00-12:00',
    textbook: 'Lehne Pharmacology for Nursing Care',
    textbookHref: 'https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-443-10710-8',
    schedule: 'Thursday 09:00',
  },
  'med-surg-i': {
    professor: 'Prof. Daniel Ortiz',
    email: 'daniel.ortiz@pulse.edu',
    officeHours: 'Friday 10:00-11:30',
    textbook: 'Lewis Medical-Surgical Nursing',
    textbookHref: 'https://evolve.elsevier.com/cs/product/9780323789615?role=student',
    schedule: 'Friday 08:00',
  },
  'med-surg-ii': {
    professor: 'Dr. Priya Nair',
    email: 'priya.nair@pulse.edu',
    officeHours: 'Wed 15:00-16:00',
    textbook: 'Lewis Medical-Surgical Nursing',
    textbookHref: 'https://evolve.elsevier.com/cs/product/9780323789615?role=student',
    schedule: 'Monday 12:00',
  },
}

export function getEventsForCourse(course: CourseTrack): SemesterEvent[] {
  return semesterEvents.filter(event => event.courseSlug === course.slug)
}
