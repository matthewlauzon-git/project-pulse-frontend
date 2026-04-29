import Link from 'next/link'
import { notFound } from 'next/navigation'
import { courses, getCourseBySlug, getModuleSlug } from '@/lib/classes'
import { getCommandCenterWorkspace } from '@/lib/class-command-center'
import { courseInfo, getEventsForCourse } from '@/lib/semester'

type ClassPageProps = {
  params: Promise<{ course: string }>
}

const createActions = [
  { title: 'Make Study Guide', body: 'One clean guide from the Class Canon and My Layer.', meta: 'Private output', href: '/create' },
  { title: 'Make Quiz', body: 'Practice questions with visible source labels.', meta: 'Exam prep', href: '/create' },
  { title: 'Clinical Prep Sheet', body: 'Assessment cues, priority interventions, labs, teaching.', meta: 'Med-Surg template', href: '/create' },
  { title: 'Folder Helper', body: 'Copy a messy Blackboard folder into Pulse structure.', meta: 'Local first', href: '/import' },
]

const rescueSteps = [
  'Upload the Blackboard dump.',
  'Pulse labels files and extracts dates.',
  'Review what is due and what matters.',
  'Generate a guide or quiz from selected files.',
]

export function generateStaticParams() {
  return courses.map(course => ({ course: course.slug }))
}

export default async function ClassDetailPage({ params }: ClassPageProps) {
  const { course: courseSlug } = await params
  const course = getCourseBySlug(courseSlug)

  if (!course) notFound()

  const events = getEventsForCourse(course)
  const info = courseInfo[course.slug]
  const workspace = getCommandCenterWorkspace(course.slug)
  const activeDeadline = events[0]
  const nextModule = workspace.activeModule
  const linkedCards = workspace.linkedCards.slice(0, 6)

  return (
    <main className="classes-page class-detail-page">
      <div className="class-detail-topbar">
        <Link href="/classes" className="back-btn">Back to classes</Link>
        <Link href="/import" className="secondary-button">Import Class Materials</Link>
      </div>

      <header className="class-workspace-hero">
        <div className="class-workspace-copy">
          <span className="course-code">{course.code}</span>
          <h1>{course.title} Command Center</h1>
          <p>
            Class Canon, My Layer, deadlines, linked cards, and study actions in one place.
            Source files stay private; shared resources only appear when they match this class.
          </p>
          <div className="class-workspace-actions">
            <Link href="/import" className="primary-button">Upload / Import</Link>
            <Link href={`/pages/new?type=note&template=study-guide&course=${encodeURIComponent(course.code)}`} className="secondary-button">
              Create Study Guide
            </Link>
          </div>
        </div>

        <aside className="class-rescue-card" aria-label="Class rescue workflow">
          <p className="eyebrow">Panic Mode</p>
          <h2>From Blackboard dump to command center</h2>
          <ol>
            {rescueSteps.map(step => <li key={step}>{step}</li>)}
          </ol>
        </aside>
      </header>

      <section className="class-command-grid" aria-label="Class command center">
        <article className="class-command-card urgent">
          <span>Next Deadline</span>
          <strong>{activeDeadline?.title || nextModule.deadline || 'No deadline detected yet'}</strong>
          <p>{activeDeadline ? `${activeDeadline.date}${activeDeadline.time ? ` · ${activeDeadline.time}` : ''}` : 'Upload syllabus or assignment sheets to detect dates.'}</p>
        </article>
        <article className="class-command-card">
          <span>Study Next</span>
          <strong>{nextModule.title}</strong>
          <p>{nextModule.focus}</p>
        </article>
        <article className="class-command-card">
          <span>Private Files</span>
          <strong>{workspace.canon.length} canon items</strong>
          <p>Syllabus, slides, rubrics, assignments, and dates stay private.</p>
        </article>
        <article className="class-command-card">
          <span>Linked Cards</span>
          <strong>{course.modules.reduce((total, module) => total + module.links.length, 0)}</strong>
          <p>Drug and disease cards support the class workspace.</p>
        </article>
      </section>

      <div className="class-rescue-layout">
        <section className="class-ai-panel">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Ask</p>
              <h2>Ask this class workspace</h2>
            </div>
          </div>
          <div className="class-chat-card">
            <div className="chat-bubble user">What do I actually need to know for the next exam?</div>
            <div className="chat-bubble pulse">
              <p>Based on your Class Canon, My Layer, and linked Pulse cards, focus first on:</p>
              <ul>
                {workspace.askAnswer.map(item => <li key={item}>{item}</li>)}
              </ul>
              <div className="chat-source-grid">
                {workspace.askSources.map(source => <span key={source}>{source}</span>)}
              </div>
            </div>
          </div>
          <div className="class-ask-box">
            <span>Ask anything about {course.title.toLowerCase()}...</span>
            <button type="button" aria-label="Ask Pulse">↑</button>
          </div>
        </section>

        <aside className="class-side-panel">
          {info && (
            <section className="class-compact-panel">
              <p className="eyebrow">Course Info</p>
              <div className="class-info-list">
                <div><span>Professor</span><strong>{info.professor}</strong><a href={`mailto:${info.email}`}>{info.email}</a></div>
                <div><span>Office Hours</span><strong>{info.officeHours}</strong></div>
                <div><span>Schedule</span><strong>{info.schedule}</strong></div>
                <div><span>Textbook</span><strong>{info.textbook}</strong><a href={info.textbookHref} target="_blank" rel="noreferrer">Open info</a></div>
              </div>
            </section>
          )}

          <section className="class-compact-panel">
            <p className="eyebrow">Upcoming</p>
            <h2>Deadlines</h2>
            <div className="class-event-list compact">
              {events.map(event => (
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
        </aside>
      </div>

      <section className="class-workspace-section" aria-label="Create study tools">
        <div className="board-heading">
          <div>
            <p className="eyebrow">Create</p>
            <h2>Turn class files into study tools</h2>
          </div>
        </div>
        <div className="class-create-grid">
          {createActions.map(action => (
            <Link key={action.title} href={action.href} className="class-create-card">
              <span>{action.meta}</span>
              <strong>{action.title}</strong>
              <p>{action.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="class-detail-layout">
        <section className="class-main-panel">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Class Canon</p>
              <h2>Course-provided material</h2>
            </div>
          </div>

          <div className="class-file-list">
            {workspace.canon.map(file => (
              <article key={file.title} className="class-file-row">
                <span>{file.kind}</span>
                <div>
                  <strong>{file.title}</strong>
                  <p>{file.source} · {file.detail}</p>
                </div>
                <small>{file.privacy}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="class-main-panel">
          <div className="board-heading">
            <div>
              <p className="eyebrow">My Layer</p>
              <h2>Your notes and generated tools</h2>
            </div>
          </div>

          <div className="clean-module-list">
            {workspace.myLayer.length ? workspace.myLayer.map((item, index) => (
              <article key={item.title} className="clean-module-row">
                <div className="module-number">{index + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <div className="module-resource-summary">
                    <span>{item.kind}</span>
                    <span>{item.linkedTo}</span>
                  </div>
                </div>
                <div className="module-row-actions">
                  <Link href="/pages/new?type=note">Edit</Link>
                </div>
              </article>
            )) : (
              <article className="clean-module-row">
                <div className="module-number">+</div>
                <div>
                  <h3>Add your layer</h3>
                  <p>Personal notes, teacher-emphasis notes, and generated guides append here without overwriting class files.</p>
                </div>
                <div className="module-row-actions"><Link href="/pages/new?type=note">Add</Link></div>
              </article>
            )}
          </div>
        </section>
      </div>

      <section className="class-workspace-section" aria-label="Modules">
        <div className="board-heading">
          <div>
            <p className="eyebrow">Modules</p>
            <h2>What this class is covering</h2>
          </div>
        </div>
        <div className="clean-module-list">
          {course.modules.map((module, index) => (
            <article key={module.title} className="clean-module-row">
              <div className="module-number">{index + 1}</div>
              <div>
                <h3>{module.title}</h3>
                <p>{module.focus}</p>
                <div className="module-resource-summary">
                  <span>{module.materials.length} materials</span>
                  <span>{module.links.length} linked cards</span>
                </div>
              </div>
              <div className="module-row-actions">
                <Link href={`/classes/${course.slug}/modules/${getModuleSlug(module)}`}>Open</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="class-workspace-section" aria-label="Matched shared resources">
        <div className="board-heading">
          <div>
            <p className="eyebrow">Matched Shared Resources</p>
            <h2>Only after your class is organized</h2>
          </div>
          <Link href="/community">View shared</Link>
        </div>
        <div className="class-create-grid">
          {workspace.sharedResources.map(resource => (
            <article key={resource.title} className="class-create-card">
              <span>{resource.label}</span>
              <strong>{resource.title}</strong>
              <p>{resource.note}</p>
              <small>{resource.vouches} vouches · {resource.module}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="class-workspace-section" aria-label="Linked cards">
        <div className="board-heading">
          <div>
            <p className="eyebrow">Library Links</p>
            <h2>Cards this class is teaching</h2>
          </div>
        </div>
        <div className="class-linked-card-grid">
          {linkedCards.map(card => (
            <Link key={`${card.href}-${card.title}`} href={card.href} className="class-linked-card">
              <span>{card.type}</span>
              <strong>{card.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
