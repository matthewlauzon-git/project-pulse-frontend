export type CardLink = {
  title: string
  href: string
  type: 'Disease' | 'Drug' | 'Note'
}

export type SourceAnchor = {
  label: string
  detail: string
  kind: 'Professor/course' | 'Lecture slide' | 'Textbook' | 'Student note'
  status: 'Sourced' | 'Needs source' | 'Conflicting sources'
}

export type ModuleResource = {
  title: string
  type: 'Study guide' | 'Video' | 'Practice questions' | 'Concept map' | 'Project workspace'
  note: string
  status: 'Student shared' | 'Needs source' | 'Peer checked'
}

export type ModuleTask = {
  title: string
  note: string
  status: 'Do next' | 'Review' | 'Optional'
}

export type LessonModule = {
  title: string
  focus: string
  materials: string[]
  links: CardLink[]
  deadline?: string
  sourceAnchors?: SourceAnchor[]
  resources?: ModuleResource[]
  tasks?: ModuleTask[]
}

export type CourseTrack = {
  slug: string
  code: string
  title: string
  term: string
  summary: string
  modules: LessonModule[]
}

export type CardCourseContext = {
  course: Pick<CourseTrack, 'slug' | 'code' | 'title'>
  moduleTitle: string
  moduleSlug: string
  focus: string
  deadline?: string
  sources: SourceAnchor[]
  tasks: ModuleTask[]
}

export const courses: CourseTrack[] = [
  {
    slug: 'pathophysiology',
    code: 'PATHO',
    title: 'Pathophysiology',
    term: 'This year',
    summary: 'Use this track to explain why disease processes happen before memorizing the care plan.',
    modules: [
      {
        title: 'Cell Injury, Inflammation, and Immunity',
        focus: 'Tissue damage, repair, immune response, infection patterns, and exam language.',
        materials: ['Lecture notes', 'PowerPoint deck', 'Concept map'],
        sourceAnchors: [
          { label: 'Patho Module 1', detail: 'Course lecture notes and inflammation slides', kind: 'Professor/course', status: 'Sourced' },
          { label: 'Textbook', detail: 'Pathophysiology inflammation and immune response chapters', kind: 'Textbook', status: 'Needs source' },
        ],
        tasks: [
          { title: 'Build the injury-to-symptom chain', note: 'For each condition, connect tissue injury to assessment findings.', status: 'Do next' },
          { title: 'Flag infection escalation cues', note: 'Pull fever, WBC, mental status, and perfusion cues into linked cards.', status: 'Review' },
        ],
        links: [
          { title: 'CNS Infections', href: '/diseases/cns-infections', type: 'Disease' },
          { title: 'Glomerulonephritis', href: '/diseases/glomerulonephritis', type: 'Disease' },
        ],
      },
      {
        title: 'Fluids, Electrolytes, and Renal Function',
        focus: 'Perfusion, kidney injury, urinary disorders, and the lab changes that show up first.',
        materials: ['Lecture notes', 'Case study', 'Practice questions'],
        sourceAnchors: [
          { label: 'Patho renal lecture', detail: 'Perfusion, AKI, CKD, urinary disorders', kind: 'Lecture slide', status: 'Sourced' },
          { label: 'Course note', detail: 'Use professor/course lab ranges when they differ from textbook ranges', kind: 'Professor/course', status: 'Conflicting sources' },
        ],
        tasks: [
          { title: 'Review AKI vs CKD patterns', note: 'Focus on what changes first: urine output, creatinine, potassium, fluid status.', status: 'Do next' },
          { title: 'Attach lab value conflicts', note: 'Add course-specific ranges when slides and textbook disagree.', status: 'Review' },
        ],
        links: [
          { title: 'Acute Kidney Injury', href: '/diseases/acute-kidney-injury-aki', type: 'Disease' },
          { title: 'Chronic Kidney Disease', href: '/diseases/chronic-kidney-disease-ckd', type: 'Disease' },
          { title: 'Furosemide', href: '/drugs/furosemide', type: 'Drug' },
        ],
      },
      {
        title: 'Neuro and Endocrine Regulation',
        focus: 'Brain injury, seizures, glucose regulation, and priority changes in assessment.',
        materials: ['Lecture notes', 'PowerPoint deck', 'NCLEX review'],
        deadline: 'Case analysis due Apr 22',
        sourceAnchors: [
          { label: 'Patho Module 3', detail: 'Neuro and endocrine regulation lecture sequence', kind: 'Lecture slide', status: 'Sourced' },
          { label: 'Student note', detail: 'Need professor emphasis for endocrine case-analysis rubric', kind: 'Student note', status: 'Needs source' },
        ],
        resources: [
          { title: 'Endocrine case analysis outline', type: 'Study guide', note: 'Student-made outline for linking endocrine dysfunction to assessment findings.', status: 'Needs source' },
        ],
        tasks: [
          { title: 'Prepare case-analysis evidence', note: 'Connect endocrine signs to labs, nursing priorities, and linked disease cards.', status: 'Do next' },
          { title: 'Review seizure safety', note: 'Prioritize airway, injury prevention, timing, and postictal assessment.', status: 'Review' },
        ],
        links: [
          { title: 'Seizures and Epilepsy', href: '/diseases/seizures-and-epilepsy', type: 'Disease' },
          { title: 'Diabetes Mellitus', href: '/diseases/diabetes-mellitus', type: 'Disease' },
          { title: 'Insulin', href: '/drugs/insulin', type: 'Drug' },
        ],
      },
    ],
  },
  {
    slug: 'pharmacology',
    code: 'PHARM',
    title: 'Pharmacology',
    term: 'This year',
    summary: 'Organize meds by class, mechanism, nursing monitoring, and patient teaching.',
    modules: [
      {
        title: 'Medication Safety and Core Principles',
        focus: 'Rights of administration, adverse effects, contraindications, and high-alert thinking.',
        materials: ['Lecture notes', 'Drug table', 'Safety checklist'],
        sourceAnchors: [
          { label: 'Pharm safety lecture', detail: 'Rights, adverse effects, contraindications, high-alert meds', kind: 'Professor/course', status: 'Sourced' },
        ],
        tasks: [
          { title: 'Make hold/reassess rules visible', note: 'Every high-alert drug card needs before-giving and monitoring bullets.', status: 'Do next' },
        ],
        links: [
          { title: 'Heparin', href: '/drugs/heparin', type: 'Drug' },
          { title: 'Warfarin', href: '/drugs/warfarin', type: 'Drug' },
        ],
      },
      {
        title: 'Anti-Infectives',
        focus: 'Indications, resistance patterns, adverse effects, and patient teaching.',
        materials: ['PowerPoint deck', 'Prototype drug cards', 'Practice questions'],
        deadline: 'Prototype drug cards due May 1',
        sourceAnchors: [
          { label: 'Pharm Module 2', detail: 'Anti-infective PowerPoint and prototype drug-card assignment', kind: 'Lecture slide', status: 'Sourced' },
          { label: 'Textbook', detail: 'Assigned anti-infective chapters', kind: 'Textbook', status: 'Needs source' },
        ],
        resources: [
          { title: 'Antibiotic adverse-effect quick table', type: 'Study guide', note: 'Good candidate for peer-checked student resource after source chips are added.', status: 'Student shared' },
        ],
        tasks: [
          { title: 'Group meds by what to monitor', note: 'Focus on allergic reaction, GI effects, renal/hepatic concerns, and teaching.', status: 'Do next' },
          { title: 'Link UTI antibiotics to UTI card', note: 'Make the disease-drug connection obvious for exam questions.', status: 'Review' },
        ],
        links: [
          { title: 'Nitrofurantoin', href: '/drugs/nitrofurantoin', type: 'Drug' },
          { title: 'Ciprofloxacin', href: '/drugs/ciprofloxacin', type: 'Drug' },
          { title: 'Urinary Tract Infection', href: '/diseases/urinary-tract-infection-uti', type: 'Disease' },
        ],
      },
      {
        title: 'Cardiac, Renal, and Endocrine Meds',
        focus: 'Vitals, labs, contraindications, and when to hold the medication.',
        materials: ['Lecture notes', 'PowerPoint deck', 'Clinical worksheet'],
        sourceAnchors: [
          { label: 'Pharm Module 3', detail: 'Cardiac, renal, and endocrine medication lecture', kind: 'Lecture slide', status: 'Sourced' },
          { label: 'Course emphasis', detail: 'Before giving: BP, HR when relevant, potassium, renal function, glucose cues', kind: 'Professor/course', status: 'Needs source' },
        ],
        tasks: [
          { title: 'Compress each drug to six useful bullets', note: 'Need to know, before giving, hold/reassess, monitor, teach, NCLEX trap.', status: 'Do next' },
          { title: 'Append course notes to existing cards', note: 'Keep Lisinopril base card clean; add Pharm-specific emphasis separately.', status: 'Review' },
        ],
        links: [
          { title: 'Lisinopril', href: '/drugs/lisinopril', type: 'Drug' },
          { title: 'Spironolactone', href: '/drugs/spironolactone', type: 'Drug' },
          { title: 'Metformin', href: '/drugs/metformin', type: 'Drug' },
        ],
      },
    ],
  },
  {
    slug: 'med-surg-i',
    code: 'MS I',
    title: 'Med-Surg I',
    term: 'This year',
    summary: 'Build the foundation: assessment, common adult disorders, and priority nursing actions.',
    modules: [
      {
        title: 'GI and Metabolic Disorders',
        focus: 'Pain, nutrition, complications, and surgery-related priority assessment.',
        materials: ['Lecture notes', 'PowerPoint deck', 'Clinical case'],
        sourceAnchors: [
          { label: 'MS I Module 1', detail: 'GI disorders, metabolic complications, surgery priorities', kind: 'Lecture slide', status: 'Sourced' },
        ],
        tasks: [
          { title: 'Prioritize assessment cues', note: 'Pain pattern, bleeding, nutrition, dehydration, infection, and postop complications.', status: 'Do next' },
        ],
        links: [
          { title: 'Pancreatitis', href: '/diseases/pancreatitis', type: 'Disease' },
          { title: 'Cirrhosis', href: '/diseases/cirrhosis', type: 'Disease' },
          { title: 'Lactulose', href: '/drugs/lactulose', type: 'Drug' },
        ],
      },
      {
        title: 'Renal and Urinary',
        focus: 'UTIs, stones, obstruction, kidney injury, and infection escalation.',
        materials: ['Lecture notes', 'Lab interpretation', 'Practice questions'],
        deadline: 'Renal exam Apr 28',
        sourceAnchors: [
          { label: 'MS I renal lecture', detail: 'UTIs, stones, obstruction, pyelonephritis, AKI escalation', kind: 'Professor/course', status: 'Sourced' },
          { label: 'Textbook', detail: 'Renal and urinary disorders chapter', kind: 'Textbook', status: 'Needs source' },
        ],
        resources: [
          { title: 'Renal exam review checklist', type: 'Practice questions', note: 'Use this to drive the one-week-out study suggestion.', status: 'Needs source' },
        ],
        tasks: [
          { title: 'Exam review: modules 1-2', note: 'Renal exam is close; review GI/metabolic carryover plus renal/urinary cards.', status: 'Do next' },
          { title: 'Know infection escalation', note: 'Differentiate lower UTI, pyelonephritis, obstruction, and sepsis cues.', status: 'Review' },
        ],
        links: [
          { title: 'Nephrolithiasis', href: '/diseases/nephrolithiasis-kidney-stones', type: 'Disease' },
          { title: 'Pyelonephritis', href: '/diseases/pyelonephritis', type: 'Disease' },
          { title: 'Tamsulosin', href: '/drugs/tamsulosin', type: 'Drug' },
        ],
      },
      {
        title: 'Integumentary, Wounds, and Infection Risk',
        focus: 'Pressure injury prevention, wound assessment, and patient teaching.',
        materials: ['PowerPoint deck', 'Skills notes', 'Clinical worksheet'],
        sourceAnchors: [
          { label: 'MS I integumentary lecture', detail: 'Pressure injury prevention, wound staging, infection risk', kind: 'Lecture slide', status: 'Sourced' },
        ],
        tasks: [
          { title: 'Use integumentary language', note: 'Keep system labels consistent; do not call the course area dermatologic.', status: 'Review' },
        ],
        links: [
          { title: 'Pressure Ulcers', href: '/diseases/pressure-ulcers', type: 'Disease' },
          { title: 'Atopic Dermatitis', href: '/diseases/atopic-dermatitis-eczema', type: 'Disease' },
        ],
      },
    ],
  },
  {
    slug: 'med-surg-ii',
    code: 'MS II',
    title: 'Med-Surg II',
    term: 'This year',
    summary: 'Handle higher-acuity patterns: neuro, hematology, oncology, and complex deterioration.',
    modules: [
      {
        title: 'Neuro Emergencies and Chronic Neuro',
        focus: 'Stroke, ICP, spinal cord injury, seizures, and safety priorities.',
        materials: ['Lecture notes', 'PowerPoint deck', 'Neuro assessment sheet'],
        deadline: 'Neuro priorities case May 3',
        sourceAnchors: [
          { label: 'MS II neuro lecture', detail: 'Stroke, ICP, spinal cord injury, seizure safety priorities', kind: 'Professor/course', status: 'Sourced' },
        ],
        tasks: [
          { title: 'Practice priority stems', note: 'Airway, ICP, new neuro change, seizure safety, and time-sensitive escalation.', status: 'Do next' },
        ],
        links: [
          { title: 'Cerebrovascular Disease', href: '/diseases/cerebrovascular-disease-stroke', type: 'Disease' },
          { title: 'Cerebral Edema', href: '/diseases/cerebral-edema', type: 'Disease' },
          { title: 'Dexamethasone', href: '/drugs/dexamethasone', type: 'Drug' },
        ],
      },
      {
        title: 'Hematology and Oncology',
        focus: 'Anemia, coagulation, cancer treatment, infection risk, and bleeding precautions.',
        materials: ['Lecture notes', 'PowerPoint deck', 'Drug safety table'],
        sourceAnchors: [
          { label: 'MS II heme/onc lecture', detail: 'Bleeding, infection risk, anemia patterns, oncology med safety', kind: 'Lecture slide', status: 'Sourced' },
        ],
        tasks: [
          { title: 'Sort by safety priority', note: 'Bleeding, neutropenic precautions, infection, fatigue, and med adverse effects.', status: 'Do next' },
        ],
        links: [
          { title: 'Sickle Cell Anemia', href: '/diseases/sickle-cell-anemia', type: 'Disease' },
          { title: 'Disseminated Intravascular Coagulation', href: '/diseases/disseminated-intravascular-coagulation-dic', type: 'Disease' },
          { title: 'Cyclophosphamide', href: '/drugs/cyclophosphamide', type: 'Drug' },
        ],
      },
      {
        title: 'Complex Chronic Conditions',
        focus: 'Multisystem deterioration, medication burden, discharge teaching, and exam prioritization.',
        materials: ['Lecture notes', 'Case study', 'Exam review'],
        sourceAnchors: [
          { label: 'MS II chronic conditions case', detail: 'Multisystem priorities, discharge teaching, med burden', kind: 'Professor/course', status: 'Needs source' },
        ],
        tasks: [
          { title: 'Connect chronic disease to teaching', note: 'Focus on what the patient must report, monitor, and do after discharge.', status: 'Do next' },
        ],
        links: [
          { title: 'Multiple Sclerosis', href: '/diseases/multiple-sclerosis-ms', type: 'Disease' },
          { title: 'Parkinson Disease', href: '/diseases/parkinson-s-disease', type: 'Disease' },
          { title: 'Prednisone', href: '/drugs/prednisone', type: 'Drug' },
        ],
      },
    ],
  },
]

export function getModuleSlug(lessonModule: LessonModule): string {
  return lessonModule.title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getCourseBySlug(slug: string): CourseTrack | undefined {
  return courses.find(course => course.slug === slug)
}

export function getModuleBySlug(courseSlug: string, moduleSlug: string) {
  const course = getCourseBySlug(courseSlug)
  if (!course) return undefined
  const lessonModule = course.modules.find(item => getModuleSlug(item) === moduleSlug)
  if (!lessonModule) return undefined
  return { course, lessonModule, moduleIndex: course.modules.indexOf(lessonModule) }
}

export function getCourseContextsForCard(cardPath: string): CardCourseContext[] {
  return courses.flatMap(course =>
    course.modules
      .filter(lessonModule => lessonModule.links.some(link => link.href === cardPath))
      .map(lessonModule => ({
        course: {
          slug: course.slug,
          code: course.code,
          title: course.title,
        },
        moduleTitle: lessonModule.title,
        moduleSlug: getModuleSlug(lessonModule),
        focus: lessonModule.focus,
        deadline: lessonModule.deadline,
        sources: lessonModule.sourceAnchors || [],
        tasks: lessonModule.tasks || [],
      }))
  )
}
