import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { jsonError, jsonOk } from '@/lib/pulse/server'

export async function GET() {
  try {
    const file = path.join(process.cwd(), 'public', 'data', 'content-health.json')
    const content = await readFile(file, 'utf8')
    return jsonOk(JSON.parse(content))
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load content health.', 500)
  }
}
