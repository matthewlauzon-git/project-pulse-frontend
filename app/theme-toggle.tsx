'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('pulse-theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    document.documentElement.dataset.theme = nextTheme
    window.requestAnimationFrame(() => setTheme(nextTheme))
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('pulse-theme', nextTheme)
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
      <span>{theme === 'dark' ? '☾' : '☼'}</span>
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}
