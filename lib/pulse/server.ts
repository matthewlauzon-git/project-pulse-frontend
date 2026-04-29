import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export function getBearerToken(request: Request): string | null {
  const authorization = request.headers.get('authorization')
  if (!authorization?.toLowerCase().startsWith('bearer ')) return null
  return authorization.slice('bearer '.length).trim()
}

export function createPulseServerClient(request?: Request): SupabaseClient {
  const token = request ? getBearerToken(request) : null

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : undefined,
  })
}

export async function getRequestUser(client: SupabaseClient, request: Request): Promise<User | null> {
  const token = getBearerToken(request)
  if (!token) return null
  const { data, error } = await client.auth.getUser(token)
  if (error) return null
  return data.user
}

export async function requireRequestUser(client: SupabaseClient, request: Request): Promise<User> {
  const user = await getRequestUser(client, request)
  if (!user) throw new Error('AUTH_REQUIRED')
  return user
}

export function jsonOk<T>(data: T, init?: ResponseInit): Response {
  return Response.json({ data }, init)
}

export function jsonError(message: string, status = 400): Response {
  return Response.json({ error: message }, { status })
}

export async function readJson<T>(request: Request): Promise<T> {
  try {
    return await request.json() as T
  } catch {
    throw new Error('INVALID_JSON')
  }
}
