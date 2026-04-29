import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { createStudyEvent, listStudyEvents } from '@/lib/pulse/repository'
import type { PulseStudyEventKind } from '@/lib/pulse/types'

const EVENT_TYPES: PulseStudyEventKind[] = ['view_page', 'search', 'save_page', 'review_flashcard', 'create_page']

export async function GET(request: Request) {
  const client = createPulseServerClient(request)
  const url = new URL(request.url)

  try {
    const user = await requireRequestUser(client, request)
    const events = await listStudyEvents(client, user.id, Number(url.searchParams.get('limit') || 30))
    return jsonOk(events)
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not load study events.', 500)
  }
}

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{
      eventType?: PulseStudyEventKind
      pageId?: string
      deckId?: string
      metadata?: Record<string, unknown>
    }>(request)
    if (!input.eventType || !EVENT_TYPES.includes(input.eventType)) return jsonError('valid eventType is required.')
    const event = await createStudyEvent(client, input, user.id)
    return jsonOk(event, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save study event.', 500)
  }
}
