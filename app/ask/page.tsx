import Link from 'next/link'
import { getCommandCenterWorkspace } from '@/lib/class-command-center'

export default function AskPage() {
  const workspace = getCommandCenterWorkspace('med-surg-i')

  return (
    <main className="classes-page ask-page">
      <header className="student-organizer-header compact">
        <div>
          <p className="eyebrow">Ask Pulse</p>
          <h1>Ask from your files, not the whole internet.</h1>
          <p>
            V1 answers are grounded in Class Canon, My Layer, and built-in Pulse cards.
            Shared resources and Student Intel are never silently used as course truth.
          </p>
        </div>
        <Link href="/import" className="primary-button">Import class files</Link>
      </header>

      <div className="ask-workspace-layout">
        <section className="ask-main-panel">
          <div className="ask-thread">
            <div className="chat-bubble user">What do I actually need to know for the renal exam?</div>
            <div className="chat-bubble pulse">
              <p>Based on your Med-Surg Class Canon, My Layer, and linked cards, study this first:</p>
              <ul>
                {workspace.askAnswer.map(item => <li key={item}>{item}</li>)}
              </ul>
              <div className="chat-source-grid">
                {workspace.askSources.map(source => <span key={source}>{source}</span>)}
              </div>
            </div>
          </div>
          <div className="ask-prompt-box">
            <span>Ask about {workspace.course.title}, your files, or linked cards...</span>
            <button type="button" aria-label="Ask Pulse">↑</button>
          </div>
          <div className="ask-quick-actions">
            <Link href="/create">Make clinical prep sheet</Link>
            <Link href="/create">Quiz me on priority cues</Link>
            <Link href="/classes/med-surg-i">Open command center</Link>
          </div>
        </section>

        <aside className="ask-source-rail">
          <section>
            <p className="eyebrow">Allowed Sources</p>
            <h2>Grounded context</h2>
            <div className="command-item-list">
              {workspace.canon.slice(0, 3).map(item => (
                <article key={item.title} className="command-item-row">
                  <span>{item.kind}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
              {workspace.linkedCards.slice(0, 3).map(card => (
                <Link key={card.href} href={card.href} className="command-item-row">
                  <span>{card.type}</span>
                  <div>
                    <strong>{card.title}</strong>
                    <p>Built-in Pulse card</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="source-boundary-card">
            <span>Boundary</span>
            <strong>Peer advice is separate.</strong>
            <p>Student Intel helps with placement/elective context, but it does not feed clinical or course-file answers.</p>
          </section>
        </aside>
      </div>
    </main>
  )
}
