import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { createPageFeedback } from '@/lib/pulse/repository'
import type { PulseFeedbackKind } from '@/lib/pulse/types'

const FEEDBACK_KINDS: PulseFeedbackKind[] = ['confusing', 'missing', 'incorrect', 'helpful']

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{ pageId?: string; kind?: PulseFeedbackKind; body?: string }>(request)
    if (!input.pageId) return jsonError('pageId is required.')
    if (!input.kind || !FEEDBACK_KINDS.includes(input.kind)) return jsonError('valid kind is required.')
    const feedback = await createPageFeedback(client, input, user.id)
    return jsonOk(feedback, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save feedback.', 500)
  }
}
