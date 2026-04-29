export type StudentPathCard = {
  label: string
  title: string
  note: string
}

export type StudentProfile = {
  displayName: string
  activeCourseSlugs: string[]
  placement: StudentPathCard
  elective: StudentPathCard
  classMix: StudentPathCard
}

export const demoStudentProfile: StudentProfile = {
  displayName: 'Matthew',
  activeCourseSlugs: ['med-surg-i', 'med-surg-ii', 'pharmacology', 'pathophysiology'],
  placement: {
    label: 'Clinical placement',
    title: 'Adult med-surg rotation',
    note: 'Prep sheet, instructor expectations, and arrival details stay tied to you.',
  },
  elective: {
    label: 'Elective watch',
    title: 'Not finalized yet',
    note: 'When next term opens, Pulse can keep elective files separate from core classes.',
  },
  classMix: {
    label: 'Current class mix',
    title: 'Med-Surg I focus',
    note: 'Your dashboard should follow your registered courses, not your whole cohort.',
  },
}

export function getPersonalSetupCards(profile = demoStudentProfile): StudentPathCard[] {
  return [profile.placement, profile.elective, profile.classMix]
}
