'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

export function AuthStatus() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  if (!user) {
    return <Link href="/login" className="top-search">Sign in</Link>
  }

  return (
    <button
      type="button"
      className="top-search top-button"
      onClick={() => supabase.auth.signOut().then(() => setUser(null))}
      title={user.email || 'Signed in'}
    >
      Sign out
    </button>
  )
}
