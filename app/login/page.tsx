'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setMessage('')

    const redirectTo = `${window.location.origin}/second-brain`
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    })

    if (error) {
      setStatus('error')
      setMessage(error.message)
      return
    }

    setStatus('sent')
    setMessage('Check your email for the sign-in link.')
  }

  return (
    <main className="page-wrap auth-page">
      <div className="detail-header">
        <Link href="/" className="back-btn">Back to dashboard</Link>
        <span className="type-badge note">Account</span>
      </div>
      <div className="page-header">
        <h1>Sign in to Pulse</h1>
        <p>Use your email to save notes, study guides, edits, and vouches.</p>
      </div>

      <section className="auth-panel">
        {user ? (
          <div className="empty-state">
            <p>Signed in as {user.email}</p>
            <button type="button" className="primary-button" onClick={() => supabase.auth.signOut().then(() => setUser(null))}>
              Sign out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="editor-panel">
            <label>
              <span>Email</span>
              <input value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" type="email" required />
            </label>
            <button type="submit" className="primary-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Magic Link'}
            </button>
            {message && <p className={`save-message ${status === 'error' ? 'error' : 'saved'}`}>{message}</p>}
          </form>
        )}
      </section>
    </main>
  )
}
