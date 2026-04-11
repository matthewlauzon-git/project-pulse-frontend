import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pulse — SLC Nursing Knowledge',
  description: 'Nursing knowledge commons for St. Lawrence College students',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="topnav">
          <Link href="/" className="logo">Pulse<span>.slc</span></Link>
          <div className="nav-links">
            <Link href="/diseases">Diseases</Link>
            <Link href="/drugs">Drug Cards</Link>
            <Link href="/notes">Notes</Link>
          </div>
        </nav>
        {children}
        <footer className="footer">Project Pulse — Built by nursing students, for nursing students</footer>
      </body>
    </html>
  )
}
