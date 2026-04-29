import { createPulseServerClient, jsonError, jsonOk } from '@/lib/pulse/server'
import { listPages } from '@/lib/pulse/repository'
import type { PulsePageType } from '@/lib/pulse/types'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)
  const url = new URL(request.url)
  const q = url.searchParams.get('q') || ''

  if (!q.trim()) return jsonOk([])

  try {
    const pages = await listPages(client, {
      type: (url.searchParams.get('type') || 'all') as PulsePageType | 'all',
      query: q.trim(),
      limit: Number(url.searchParams.get('limit') || 40),
    })
    return jsonOk(pages)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Search failed.', 500)
  }
}
