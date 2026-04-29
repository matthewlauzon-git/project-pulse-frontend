import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { createPageComment, listPageComments } from '@/lib/pulse/repository'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)
  const url = new URL(request.url)
  const pageId = url.searchParams.get('pageId')

  if (!pageId) return jsonError('pageId is required.')

  try {
    const comments = await listPageComments(client, pageId)
    return jsonOk(comments)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load comments.', 500)
  }
}

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{ pageId?: string; parentId?: string; body?: string }>(request)
    if (!input.pageId) return jsonError('pageId is required.')
    if (!input.body?.trim()) return jsonError('body is required.')
    const comment = await createPageComment(client, input, user.id)
    return jsonOk(comment, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save comment.', 500)
  }
}
