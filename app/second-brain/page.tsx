import Link from 'next/link'
import { courses, getModuleSlug } from '@/lib/classes'
import { listModuleReviewQueue } from '@/lib/module-review-queue'

export const dynamic = 'force-dynamic'

const libraryStats = [
  { label: 'Current courses', value: courses.length },
  { label: 'Active modules', value: courses.reduce((total, course) => total + course.modules.length, 0) },
  { label: 'Linked cards', value: courses.reduce((total, course) => total + course.modules.reduce((sum, module) => sum + module.links.length, 0), 0) },
]

const librarySections = [
  {
    title: 'Disease Cards',
    body: 'Clean system-based cards for patho patterns, red flags, labs, and nursing priorities.',
    href: '/diseases',
    meta: 'By system',
  },
  {
    title: 'Drug Cards',
    body: 'Before-giving checks, hold/reassess cues, monitoring, teaching, and NCLEX traps.',
    href: '/drugs',
    meta: 'By class',
  },
  {
    title: 'Study Notes',
    body: 'Flexible notes, guides, module summaries, and imported study material drafts.',
    href: '/notes',
    meta: 'By course',
  },
  {
    title: 'Source Policy',
    body: 'Canadian-first rules for source pointers, student summaries, and copyrighted materials.',
    href: '/source-policy',
    meta: 'Rules',
  },
  {
    title: 'Import Module Notes',
    body: 'Paste NotebookLM or lecture summaries and draft source chips, dates, topics, and card links.',
    href: '/import',
    meta: 'Intake',
  },
]

const reviewQueue = [
  {
    status: 'Needs source',
    title: 'Renal exam review checklist',
    course: 'Med-Surg I',
    href: '/classes/med-surg-i/modules/renal-and-urinary',
  },
  {
    status: 'Conflicting sources',
    title: 'HCO3 course range',
    course: 'Pathophysiology',
    href: '/classes/pathophysiology/modules/fluids-electrolytes-and-renal-function',
  },
  {
    status: 'Student shared',
    title: 'Antibiotic adverse-effect quick table',
    course: 'Pharmacology',
    href: '/classes/pharmacology/modules/anti-infectives',
  },
]

export default async function SecondBrainPage() {
  const savedQueue = await listModuleReviewQueue(6)
  const currentModules = courses.flatMap(course =>
    course.modules.slice(0, 2).map(module => ({
      course,
      module,
      href: `/classes/${course.slug}/modules/${getModuleSlug(module)}`,
    }))
  )

  return (
    <main className="repository-page library-page">
      <header className="library-hero">
        <div>
          <p className="eyebrow">Library</p>
          <h1>Everything you have learned, organized by class.</h1>
          <p>
            The Library is the cumulative layer: modules, cards, source notes, student resources, and
            review items. Dashboard tells you what to do today; Library helps you find the right material.
          </p>
        </div>
        <div className="library-stat-grid">
          {libraryStats.map(stat => (
            <span key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </span>
          ))}
        </div>
      </header>

      <section className="library-section-grid" aria-label="Library sections">
        {librarySections.map(section => (
          <Link href={section.href} key={section.title} className="library-section-card">
            <span>{section.meta}</span>
            <strong>{section.title}</strong>
            <p>{section.body}</p>
          </Link>
        ))}
      </section>

      <div className="library-layout">
        <section className="library-panel">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Modules</p>
              <h2>Current Course Map</h2>
            </div>
          </div>
          <div className="library-module-list">
            {currentModules.map(({ course, module, href }) => (
              <Link href={href} key={`${course.slug}-${module.title}`} className="library-module-row">
                <span>{course.code}</span>
                <div>
                  <strong>{module.title}</strong>
                  <p>{module.focus}</p>
                </div>
                <small>{module.links.length} cards</small>
              </Link>
            ))}
          </div>
        </section>

        <aside className="library-side-stack">
          <section className="library-panel">
            <p className="eyebrow">Review Queue</p>
            <h2>Needs Human Eyes</h2>
            <div className="review-queue-list">
              {savedQueue.map(item => (
                <Link href={item.moduleHref} key={item.id} className="review-queue-card saved-draft">
                  <span>{item.status}</span>
                  <strong>{item.moduleTitle}</strong>
                  <p>{item.courseTitle} · {item.topics.length || item.linkedCards.length} extracted items</p>
                </Link>
              ))}
              {reviewQueue.map(item => (
                <Link href={item.href} key={item.title} className="review-queue-card">
                  <span>{item.status}</span>
                  <strong>{item.title}</strong>
                  <p>{item.course}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="library-panel">
            <p className="eyebrow">Contribution Rules</p>
            <h2>Student Shared, Not Official</h2>
            <ul className="library-rule-list">
              <li>Useful votes affect ranking, not truth.</li>
              <li>Official card changes need trusted review.</li>
              <li>Source chips are required for course claims.</li>
              <li>Pulse stores references and summaries, not PDFs or slide decks.</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  )
}
