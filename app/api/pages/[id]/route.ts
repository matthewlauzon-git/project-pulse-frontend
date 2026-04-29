import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { getPage, upsertPage } from '@/lib/pulse/repository'
import type { PulsePageInput } from '@/lib/pulse/types'

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const client = createPulseServerClient(_request)
  const { id } = await context.params

  try {
    const page = await getPage(client, id)
    if (!page) return jsonError('Page not found.', 404)
    return jsonOk(page)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load page.', 500)
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const client = createPulseServerClient(request)
  const { id } = await context.params

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<PulsePageInput>(request)
    const page = await upsertPage(client, { ...input, id }, user.id)
    return jsonOk(page)
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not update page.', 500)
  }
}
