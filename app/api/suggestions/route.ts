import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { createPageSuggestion, listPageSuggestions } from '@/lib/pulse/repository'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)
  const url = new URL(request.url)

  try {
    await requireRequestUser(client, request)
    const suggestions = await listPageSuggestions(client, url.searchParams.get('pageId') || undefined)
    return jsonOk(suggestions)
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not load suggestions.', 500)
  }
}

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{
      pageId?: string
      title?: string
      content?: string
      summary?: string
      system?: string
      drug_class?: string
      rationale?: string
    }>(request)
    if (!input.pageId) return jsonError('pageId is required.')
    if (!input.title?.trim() && !input.content?.trim() && !input.summary?.trim() && !input.rationale?.trim()) {
      return jsonError('At least one suggestion field is required.')
    }
    const suggestion = await createPageSuggestion(client, input, user.id)
    return jsonOk(suggestion, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not save suggestion.', 500)
  }
}
