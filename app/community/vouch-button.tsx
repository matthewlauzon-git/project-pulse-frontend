'use client'

import { useEffect, useState } from 'react'
import { getVouchSummary, setPageVouch, type VouchSummary } from '@/lib/supabase'

const EMPTY: VouchSummary = { helpful: 0, relevant: 0, verified: 0, userVouch: null }

export function VouchButton({ pageId }: { pageId: string }) {
  const [summary, setSummary] = useState<VouchSummary>(EMPTY)
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getVouchSummary(pageId).then(setSummary).catch(() => setSummary(EMPTY))
  }, [pageId])

  async function vouch(type: 'helpful' | 'relevant' | 'verified') {
    setSaving(true)
    setMessage('')
    try {
      await setPageVouch(pageId, type)
      const nextSummary = await getVouchSummary(pageId)
      setSummary(nextSummary)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Could not save vouch.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="vouch-box">
      <div className="vouch-counts">
        <span>{summary.helpful} helpful</span>
        <span>{summary.relevant} relevant</span>
        <span>{summary.verified} vouched</span>
      </div>
      <div className="vouch-actions">
        <button type="button" onClick={() => vouch('helpful')} disabled={saving}>Helpful</button>
        <button type="button" onClick={() => vouch('relevant')} disabled={saving}>Relevant</button>
        <button type="button" onClick={() => vouch('verified')} disabled={saving}>Prof said this</button>
      </div>
      {message && <p className="save-message error">{message}</p>}
    </div>
  )
}
