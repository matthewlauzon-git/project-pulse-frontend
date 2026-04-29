import Link from 'next/link'
import { notFound } from 'next/navigation'
import { courses, getModuleBySlug, getModuleSlug } from '@/lib/classes'
import { getEventsForCourse } from '@/lib/semester'

type ModulePageProps = {
  params: Promise<{ course: string; module: string }>
}

export function generateStaticParams() {
  return courses.flatMap(course =>
    course.modules.map(module => ({
      course: course.slug,
      module: getModuleSlug(module),
    }))
  )
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { course: courseSlug, module: moduleSlug } = await params
  const result = getModuleBySlug(courseSlug, moduleSlug)

  if (!result) notFound()

  const { course, lessonModule, moduleIndex } = result
  const courseEvents = getEventsForCourse(course)
  const moduleEvents = courseEvents.filter(event =>
    lessonModule.deadline?.includes(event.title.split(' ')[0]) ||
    event.title.toLowerCase().includes(lessonModule.title.split(' ')[0].toLowerCase()) ||
    lessonModule.title.toLowerCase().includes(event.title.split(' ')[0].toLowerCase())
  )
  const visibleEvents = moduleEvents.length > 0 ? moduleEvents : courseEvents.slice(0, 2)

  return (
    <main className="classes-page module-workspace-page">
      <div className="class-detail-topbar">
        <Link href={`/classes/${course.slug}`} className="back-btn">Back to {course.title}</Link>
        <Link
          href={`/pages/new?type=note&template=study-guide&course=${encodeURIComponent(course.code)}&module=${encodeURIComponent(lessonModule.title)}`}
          className="secondary-button"
        >
          Add Study Note
        </Link>
      </div>

      <header className="module-hero">
        <div>
          <span className="course-code">{course.code} Module {moduleIndex + 1}</span>
          <h1>{lessonModule.title}</h1>
          <p>{lessonModule.focus}</p>
        </div>
        <aside>
          <strong>{lessonModule.deadline || 'No module deadline yet'}</strong>
          <span>{lessonModule.links.length} linked cards</span>
          <span>{lessonModule.materials.length} source references</span>
        </aside>
      </header>

      <div className="module-workspace-layout">
        <section className="module-main-stack">
          <section className="module-panel">
            <div className="board-heading">
              <div>
                <p className="eyebrow">Study Path</p>
                <h2>What To Work Through</h2>
              </div>
            </div>
            <div className="module-task-list">
              {(lessonModule.tasks || []).map(task => (
                <article key={task.title} className={`module-task-card ${task.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                  <span>{task.status}</span>
                  <div>
                    <strong>{task.title}</strong>
                    <p>{task.note}</p>
                  </div>
                </article>
              ))}
              {(!lessonModule.tasks || lessonModule.tasks.length === 0) && (
                <article className="module-task-card do-next">
                  <span>Do next</span>
                  <div>
                    <strong>Build the module study path</strong>
                    <p>Drop NotebookLM output or lecture notes here, then link cards and source chips.</p>
                  </div>
                </article>
              )}
            </div>
          </section>

          <section className="module-panel">
            <div className="board-heading">
              <div>
                <p className="eyebrow">Linked Cards</p>
                <h2>Review These With This Module</h2>
              </div>
            </div>
            <div className="module-linked-grid">
              {lessonModule.links.map(link => (
                <Link href={link.href} key={link.href} className={`linked-study-card ${link.type.toLowerCase()}`}>
                  <span>{link.type}</span>
                  <strong>{link.title}</strong>
                  <p>Open card and add course-specific notes from this module.</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="module-panel">
            <div className="board-heading">
              <div>
                <p className="eyebrow">Shared Resources</p>
                <h2>Useful, But Labeled</h2>
              </div>
            </div>
            <div className="module-resource-list">
              {(lessonModule.resources || []).map(resource => (
                <article key={resource.title} className="module-resource-card">
                  <span>{resource.status}</span>
                  <strong>{resource.title}</strong>
                  <p>{resource.note}</p>
                  <small>{resource.type}</small>
                </article>
              ))}
              {(!lessonModule.resources || lessonModule.resources.length === 0) && (
                <article className="module-resource-card empty">
                  <span>Student shared</span>
                  <strong>No shared resources yet</strong>
                  <p>Later this is where Practical Nurse RN videos, study guides, and project links show up when tagged to this module.</p>
                  <small>Placeholder</small>
                </article>
              )}
            </div>
          </section>
        </section>

        <aside className="module-side-stack">
          <section className="module-panel">
            <p className="eyebrow">Dates</p>
            <h2>Upcoming</h2>
            <div className="class-event-list compact">
              {visibleEvents.map(event => (
                <article key={`${event.date}-${event.title}`} className="class-event-row">
                  <span>{event.type}</span>
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.time || course.title}</p>
                  </div>
                  <time>{event.date}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="module-panel">
            <p className="eyebrow">Source Chips</p>
            <h2>Where Claims Come From</h2>
            <div className="source-chip-list">
              {(lessonModule.sourceAnchors || []).map(anchor => (
                <article key={`${anchor.label}-${anchor.detail}`} className={`source-chip-card ${anchor.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                  <span>{anchor.status}</span>
                  <strong>{anchor.label}</strong>
                  <p>{anchor.kind}</p>
                  <small>{anchor.detail}</small>
                </article>
              ))}
              {(!lessonModule.sourceAnchors || lessonModule.sourceAnchors.length === 0) && (
                <article className="source-chip-card needs-source">
                  <span>Needs source</span>
                  <strong>Add source anchors</strong>
                  <p>Lecture slide, textbook, professor/course, or student note</p>
                  <small>Required before official card changes.</small>
                </article>
              )}
            </div>
          </section>

          <section className="module-panel">
            <p className="eyebrow">Materials</p>
            <h2>References Only</h2>
            <div className="material-reference-list">
              {lessonModule.materials.map(material => (
                <span key={material}>{material}</span>
              ))}
            </div>
            <p className="module-policy-note">Pulse stores pointers and summaries, not textbook PDFs or full slide decks.</p>
          </section>
        </aside>
      </div>
    </main>
  )
}
