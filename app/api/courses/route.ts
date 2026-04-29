import { createPulseServerClient, jsonError, jsonOk, readJson, requireRequestUser } from '@/lib/pulse/server'
import { createCourse, listCourses } from '@/lib/pulse/repository'

export async function GET(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const courses = await listCourses(client)
    return jsonOk(courses)
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Could not load courses.', 500)
  }
}

export async function POST(request: Request) {
  const client = createPulseServerClient(request)

  try {
    const user = await requireRequestUser(client, request)
    const input = await readJson<{ title: string; code?: string; institution?: string; term?: string; description?: string }>(request)
    if (!input.title?.trim()) return jsonError('title is required.')
    const course = await createCourse(client, input, user.id)
    return jsonOk(course, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') return jsonError('Sign in required.', 401)
    return jsonError(error instanceof Error ? error.message : 'Could not create course.', 500)
  }
}
