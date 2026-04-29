import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { AuthStatus } from './auth-status'
import { GlobalSearch } from './global-search'
import { ThemeToggle } from './theme-toggle'

export const metadata: Metadata = {
  title: 'Pulse — Nursing Class Command Center',
  description: 'A personal nursing-school class organizer for files, deadlines, study guides, and clinical prep',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="app-shell">
          <aside className="side-nav">
            <div className="brand-block">
              <Link href="/" className="logo">Pulse</Link>
              <p>Clinical Knowledge</p>
            </div>
            <nav className="side-links">
              <Link href="/"><span>▦</span> Home</Link>
              <Link href="/workspace"><span>▣</span> Workspace</Link>
              <Link href="/import"><span>↥</span> Import</Link>
              <Link href="/workspace#kit-tray"><span>✣</span> Kit Tray</Link>
              <Link href="/search"><span>⌕</span> Search</Link>
            </nav>
            <div className="side-actions">
              <ThemeToggle />
              <Link href="/import" className="primary-nav-action">Drop In Files</Link>
              <Link href="/workspace#kit-tray" className="quiet-nav-action">Add A Kit</Link>
            </div>
          </aside>
          <div className="app-main">
            <header className="topnav">
              <Link href="/" className="logo mobile-logo">Pulse</Link>
              <GlobalSearch />
              <AuthStatus />
            </header>
            {children}
            <footer className="footer">
              <strong>Pulse Nursing Command Center</strong>
              <span>Private class files first. Shared resources only in context.</span>
              <Link href="/source-policy">Source policy</Link>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
