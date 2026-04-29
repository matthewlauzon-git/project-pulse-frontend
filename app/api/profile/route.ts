import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { getUserProfile, upsertUserProfile } from '@/lib/pulse/repository'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const profile = await getUserProfile(client, user)
    return jsonOk(profile)
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not load profile.', 500)
  }
}

export async function PATCH(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{ display_name?: string; avatar_url?: string; program?: string }>(request)
    const existing = await getUserProfile(client, user)
    const profile = await upsertUserProfile(client, user, {
      display_name: input.display_name ?? existing.display_name ?? undefined,
      avatar_url: input.avatar_url ?? existing.avatar_url ?? undefined,
      program: input.program ?? existing.program ?? undefined,
    })
    return jsonOk(profile)
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save profile.', 500)
  }
}
