import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { createPulseServerClient, getRequestUser, jsonError, jsonOk } from '@/lib/pulse/server'
import { listPages, listStudyEvents } from '@/lib/pulse/repository'

async function readContentHealth() {
  try {
    const file = path.join(process.cwd(), 'public', 'data', 'content-health.json')
    return JSON.parse(await readFile(file, 'utf8')) as unknown
  } catch {
    return null
  }
}

export async function GET(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const [recentPages, contentHealth, user] = await Promise.all([
      listPages(client, { limit: 8 }),
      readContentHealth(),
      getRequestUser(client, request),
    ])

    const studyEvents = user ? await listStudyEvents(client, user.id, 8) : []

    return jsonOk({
      recentPages,
      studyEvents,
      contentHealth,
      signedIn: Boolean(user),
    })
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load dashboard.', 500)
  }
}
