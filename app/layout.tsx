import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pulse — Nursing Knowledge',
  description: 'Structured nursing knowledge for diseases, drugs, procedures, and notes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <aside className="side-nav">
            <div className="brand-block">
              <Link href="/" className="logo">Pulse</Link>
              <p>Clinical Knowledge</p>
            </div>
            <nav className="side-links">
              <Link href="/"><span>▦</span> Dashboard</Link>
              <Link href="/second-brain"><span>✦</span> Second Brain</Link>
              <Link href="/diseases"><span>+</span> Diseases</Link>
              <Link href="/drugs"><span>◆</span> Drug Cards</Link>
              <Link href="/notes"><span>□</span> Notes</Link>
            </nav>
            <div className="side-actions">
              <Link href="/second-brain" className="primary-nav-action">New Clinical Note</Link>
              <Link href="/search" className="quiet-nav-action">Search Repository</Link>
            </div>
          </aside>
          <div className="app-main">
            <header className="topnav">
              <Link href="/" className="logo mobile-logo">Pulse</Link>
              <div className="nav-links">
                <Link href="/">Dashboard</Link>
                <Link href="/second-brain">Second Brain</Link>
                <Link href="/diseases">Diseases</Link>
                <Link href="/drugs">Drugs</Link>
                <Link href="/notes">Notes</Link>
              </div>
              <Link href="/search" className="top-search">Search</Link>
            </header>
            {children}
            <footer className="footer">
              <strong>Pulse Nursing Platform</strong>
              <span>Built for focused clinical study</span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
