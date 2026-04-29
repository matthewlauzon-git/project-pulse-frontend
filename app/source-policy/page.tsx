import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Source Policy — Pulse',
  description: 'How Pulse handles course sources, study notes, and copyrighted materials.',
}

export default function SourcePolicyPage() {
  return (
    <main className="page-wrap source-policy-page">
      <header className="page-header">
        <p className="eyebrow">Source Policy</p>
        <h1>Pulse is a study layer, not a file library.</h1>
        <p>
          Pulse is designed for Canadian nursing students using materials they already have access to
          through their course, school, library, bookstore, or instructor.
        </p>
      </header>

      <section className="policy-alert">
        <strong>Study support only.</strong>
        <span>
          Pulse is not medical advice, does not replace instructor guidance, and does not replace
          assigned textbooks, lecture slides, institutional policy, or clinical judgment.
        </span>
      </section>

      <div className="policy-grid">
        <section className="policy-card">
          <h2>What Pulse Stores</h2>
          <ul>
            <li>Course, module, lecture, chapter, page, and slide references.</li>
            <li>Student-authored summaries written in the Pulse nursing-study format.</li>
            <li>Source chips that link claims back to a class, module, lecture, or reference.</li>
            <li>Professor/course notes when a test value or emphasis differs from the textbook.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>What Pulse Does Not Share</h2>
          <ul>
            <li>Textbook PDFs.</li>
            <li>Full PowerPoint decks.</li>
            <li>Copied chapters, copied slides, or copied answer keys.</li>
            <li>Material that lets students bypass the original assigned source.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>Canadian-First Source Rules</h2>
          <ul>
            <li>Pulse uses Canadian fair dealing language first: education, private study, and research.</li>
            <li>Course materials stay course-restricted when they are tied to a cohort.</li>
            <li>Uploaded source files are private processing inputs, not shared cohort resources.</li>
            <li>When in doubt, Pulse keeps the pointer and summary, not the original file.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h2>Source Hierarchy</h2>
          <ol>
            <li>Professor, course instruction, and lecture slides.</li>
            <li>Assigned textbook.</li>
            <li>Trusted outside references.</li>
            <li>Student notes, when clearly labeled and tied to a source or class date.</li>
          </ol>
        </section>
      </div>

      <section className="policy-card policy-wide">
        <h2>Conflicts Are Shown, Not Hidden</h2>
        <p>
          If a professor says one value and the textbook says another, Pulse should show both. The
          course-specific rule comes first for that class, and the card should keep a clarification
          note so students understand why the sources differ.
        </p>
      </section>

      <section className="policy-card policy-wide">
        <h2>Report A Source Issue</h2>
        <p>
          If something looks copied, unsourced, unsafe, outdated, or outside the class context, it
          should be flagged for review before it becomes official Pulse content.
        </p>
        <Link className="policy-action" href="/community">
          Report source issue
        </Link>
      </section>
    </main>
  )
}
