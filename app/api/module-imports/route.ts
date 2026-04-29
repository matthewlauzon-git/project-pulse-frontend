import { createModuleReviewItem, listModuleReviewQueue } from '@/lib/module-review-queue'
import { jsonError, jsonOk, readJson } from '@/lib/pulse/server'

export async function GET() {
  try {
    const items = await listModuleReviewQueue(25)
    return jsonOk(items)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load module review queue.', 500)
  }
}

export async function POST(request: Request) {
  try {
    const input = await readJson<{ courseSlug?: string; moduleSlug?: string; input?: string }>(request)
    const item = await createModuleReviewItem(input)
    return jsonOk(item, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'COURSE_NOT_FOUND') return jsonError('Choose a valid course.')
    if (error instanceof Error && error.message === 'MODULE_NOT_FOUND') return jsonError('Choose a valid module.')
    if (error instanceof Error && error.message === 'IMPORT_TOO_SHORT') return jsonError('Paste enough module content to review.')
    return jsonError(error instanceof Error ? error.message : 'Could not save module draft.', 500)
  }
}
