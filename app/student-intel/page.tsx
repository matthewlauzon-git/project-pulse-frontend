import { studentIntelPosts } from '@/lib/class-command-center'

export default function StudentIntelPage() {
  return (
    <main className="repository-page student-intel-page">
      <header className="repository-header">
        <div>
          <p className="eyebrow">Student Intel</p>
          <h1>The inside-track stuff, shared fairly.</h1>
          <p>
            Placement, elective, clinical-site, and next-year advice from peers.
            Clearly labeled as experience, not official program guidance.
          </p>
        </div>
        <div className="intel-trust-card">
          <span>V1 trust rule</span>
          <strong>Vouched peer posts</strong>
          <p>Useful votes help surface advice. Official details still belong to the school or instructor.</p>
        </div>
      </header>

      <section className="intel-board">
        {studentIntelPosts.map(post => (
          <article key={post.title} className="intel-card">
            <div className="intel-card-top">
              <span>{post.category}</span>
              <strong>{post.vouches} vouches</strong>
            </div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="intel-card-foot">
              <small>{post.cohort}</small>
              <em>{post.caution}</em>
            </div>
          </article>
        ))}
      </section>

      <section className="intel-boundary-panel">
        <p className="eyebrow">Boundary</p>
        <h2>Student Intel does not feed Ask Pulse clinical answers.</h2>
        <p>
          This board solves the placement/elective “some people heard things” problem.
          It stays separate from private class files, source-linked cards, and clinical study outputs.
        </p>
      </section>
    </main>
  )
}
