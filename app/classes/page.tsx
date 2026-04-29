import Link from 'next/link'
import { courses } from '@/lib/classes'
import { aprilCalendarDays, semesterEvents } from '@/lib/semester'

const enrolledClassNotes: Record<string, { next: string; due: string; focus: string }> = {
  pathophysiology: {
    next: 'Neuro and Endocrine Regulation',
    due: 'Case analysis due Apr 22',
    focus: 'Disease process reasoning before care plans',
  },
  pharmacology: {
    next: 'Anti-Infectives',
    due: 'Prototype drug cards due May 1',
    focus: 'Mechanism, monitoring, adverse effects, teaching',
  },
  'med-surg-i': {
    next: 'Renal and Urinary',
    due: 'Renal exam Apr 28',
    focus: 'Common adult disorders and priority nursing actions',
  },
  'med-surg-ii': {
    next: 'Neuro Emergencies',
    due: 'Ethics seminar Apr 22',
    focus: 'Higher-acuity deterioration and complex chronic care',
  },
}

export default function ClassesPage() {
  const eventsByDay = semesterEvents
    .filter(event => event.date.startsWith('Apr '))
    .reduce<Record<number, typeof semesterEvents>>((days, event) => {
      days[event.day] = days[event.day] || []
      days[event.day].push(event)
      return days
    }, {})
  const upcomingWork = semesterEvents.slice(0, 6)

  return (
    <main className="classes-page student-organizer-page">
      <header className="student-organizer-header compact">
        <div>
          <p className="eyebrow">Classes</p>
          <h1>My Classes</h1>
          <p>
            A clean home base for the classes you are actually registered in. Open a class to see its modules,
            lessons, slides, deadlines, and linked cards.
          </p>
        </div>
      </header>

      <section className="enrollment-note">
        <div>
          <strong>Enrollment-based view</strong>
          <p>For the MVP this uses your current year courses. Later, sign-in can decide which class cards appear here.</p>
        </div>
      </section>

      <section className="enrolled-class-grid" aria-label="Enrolled classes">
        {courses.map(course => {
          const note = enrolledClassNotes[course.slug]
          return (
            <Link href={`/classes/${course.slug}`} key={course.slug} className="enrolled-class-card">
              <div className="enrolled-class-top">
                <span>{course.code}</span>
                <small>{course.modules.length} modules</small>
              </div>
              <h2>{course.title}</h2>
              <p>{note.focus}</p>
              <div className="enrolled-class-meta">
                <span>Next: {note.next}</span>
                <strong>{note.due}</strong>
              </div>
            </Link>
          )
        })}
      </section>

      <div className="class-home-layout">
        <section className="semester-schedule-panel semester-calendar-panel">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Calendar</p>
              <h2>April 2026</h2>
            </div>
          </div>
          <div className="calendar-grid semester-calendar-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-weekday">{day}</div>
            ))}
            {aprilCalendarDays.map((day, index) => (
              <div key={`${day.label}-${index}`} className={`calendar-cell ${day.muted ? 'muted' : ''} ${day.day === 22 && !day.muted ? 'selected' : ''}`}>
                <span className="calendar-day">{day.label}</span>
                {!day.muted && eventsByDay[day.day]?.map(event => (
                  <Link
                    href={`/classes/${event.courseSlug}`}
                    key={`${event.title}-${event.courseSlug}`}
                    className={`calendar-event ${event.type.toLowerCase()}`}
                  >
                    <strong>{event.title}</strong>
                    <span>{event.course}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>

        <aside className="semester-schedule-panel deadline-rail">
          <div className="board-heading">
            <div>
              <p className="eyebrow">Upcoming</p>
              <h2>Deadlines</h2>
            </div>
          </div>
          <div className="class-event-list">
            {upcomingWork.map(item => (
              <Link href={`/classes/${item.courseSlug}`} key={`${item.date}-${item.title}`} className="deadline-rail-row">
                <span>{item.type}</span>
                <strong>{item.title}</strong>
                <p>{item.course}</p>
                <time>{item.date}{item.time ? ` • ${item.time}` : ''}</time>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}
