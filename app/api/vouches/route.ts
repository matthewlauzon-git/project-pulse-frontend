import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { setVouch } from '@/lib/pulse/repository'
import type { PulseVouchType } from '@/lib/pulse/types'

const VOUCH_TYPES: PulseVouchType[] = ['helpful', 'relevant', 'verified']

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{ pageId?: string; vouchType?: PulseVouchType }>(request)
    if (!input.pageId) return jsonError('pageId is required.')
    if (!input.vouchType || !VOUCH_TYPES.includes(input.vouchType)) return jsonError('valid vouchType is required.')
    await setVouch(client, input.pageId, user.id, input.vouchType)
    return jsonOk({ saved: true })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save vouch.', 500)
  }
}
