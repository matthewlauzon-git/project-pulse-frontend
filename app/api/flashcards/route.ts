import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { createFlashcardDeck, listFlashcardDecks } from '@/lib/pulse/repository'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const decks = await listFlashcardDecks(client)
    return jsonOk(decks)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load flashcard decks.', 500)
  }
}

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{ title: string; description?: string; course_id?: string; visibility?: 'private' | 'course' | 'community' | 'public' }>(request)
    if (!input.title?.trim()) return jsonError('title is required.')
    const deck = await createFlashcardDeck(client, input, user.id)
    return jsonOk(deck, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not create flashcard deck.', 500)
  }
}
