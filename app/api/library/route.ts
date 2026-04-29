import { createPulseServerClient, jsonError, jsonOk, requireRequestUser } from '@/lib/pulse/server'
import { listPages, saveToLibrary } from '@/lib/pulse/repository'
import type { PulsePageType } from '@/lib/pulse/types'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)
  const url = new URL(request.url)

  try {
    const pages = await listPages(client, {
      type: (url.searchParams.get('type') || 'all') as PulsePageType | 'all',
      system: url.searchParams.get('system') || undefined,
      drugClass: url.searchParams.get('drugClass') || undefined,
      query: url.searchParams.get('q') || undefined,
      limit: Number(url.searchParams.get('limit') || 60),
    })
    return jsonOk(pages)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load library.', 500)
  }
}

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const body = await request.json() as { pageId?: string }
    if (!body.pageId) return jsonError('pageId is required.')
    await saveToLibrary(client, body.pageId, user.id)
    return jsonOk({ saved: true })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save page.', 500)
  }
}
