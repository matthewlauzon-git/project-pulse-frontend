import type { SupabaseClient, User } from '@supabase/supabase-js'
import { inferDiseaseSystem, inferDrugClass } from '@/lib/classification'
import type {
  PulseCourse,
  PulseFeedbackKind,
  PulseFlashcardDeck,
  PulseLibraryItem,
  PulsePage,
  PulsePageComment,
  PulsePageFeedback,
  PulsePageInput,
  PulsePageSuggestion,
  PulsePageType,
  PulseStudyEvent,
  PulseStudyEventKind,
  PulseUserProfile,
  PulseVouchCounts,
  PulseVouchType,
} from './types'

const EMPTY_VOUCHES: PulseVouchCounts = {
  helpful_count: 0,
  relevant_count: 0,
  verified_count: 0,
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function summarize(content: string): string {
  return content
    .replace(/^#+\s+/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, '$2$1')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 220)
}

function normalizePageInput(input: PulsePageInput, userId: string): Record<string, unknown> {
  const id = input.id ? slugify(input.id) : slugify(input.title)
  const summary = input.summary?.trim() || summarize(input.content)
  const base = {
    id,
    title: input.title.trim(),
    type: input.type,
    content: input.content,
    summary,
    aliases: input.aliases || [],
    tags: input.tags || [],
    template_version: input.template_version || null,
    quality_status: input.quality_status || 'needs_review',
    source_path: input.source_path || null,
    source_citation: input.source_citation || null,
    status: input.status || 'draft',
    visibility: input.visibility || 'private',
    source_kind: 'student',
    user_id: userId,
  }

  if (input.type === 'disease') {
    return {
      ...base,
      system: input.system || inferDiseaseSystem({ title: input.title, tags: [], incidence: summary }),
      drug_class: null,
    }
  }

  if (input.type === 'drug') {
    return {
      ...base,
      system: null,
      drug_class: input.drug_class || inferDrugClass({ title: input.title, tags: [], classification: summary, trade_names: '' }),
    }
  }

  return {
    ...base,
    system: input.system || null,
    drug_class: null,
  }
}

function normalizeStoredPage(row: Partial<PulsePage> & { id: string; title: string; type: PulsePage['type']; content: string; created_at: string; updated_at: string }): PulsePage {
  const summary = row.summary || summarize(row.content)
  return {
    id: row.id,
    title: row.title,
    type: row.type,
    content: row.content,
    summary,
    system: row.system || (row.type === 'disease' ? inferDiseaseSystem({ title: row.title, tags: [], incidence: summary }) : null),
    drug_class: row.drug_class || (row.type === 'drug' ? inferDrugClass({ title: row.title, tags: [], classification: summary, trade_names: '' }) : null),
    aliases: row.aliases || [],
    tags: row.tags || [],
    template_version: row.template_version || null,
    quality_status: row.quality_status || 'needs_review',
    source_path: row.source_path || null,
    source_citation: row.source_citation || null,
    status: row.status || 'published',
    visibility: row.visibility || 'public',
    source_kind: row.source_kind || 'seed',
    user_id: row.user_id ?? null,
    created_at: row.created_at,
    updated_at: row.updated_at,
  }
}

function missingBackendSchema(error: { message?: string; code?: string } | null): boolean {
  const message = error?.message || ''
  return (
    error?.code === '42703'
    || error?.code === '42P01'
    || error?.code === 'PGRST200'
    || error?.code === 'PGRST204'
    || message.includes('schema cache')
    || message.includes('does not exist')
    || message.includes('Could not find a relationship')
  )
}

function normalizeUserProfile(
  row: Partial<PulseUserProfile> & { id: string; email: string | null; created_at: string },
): PulseUserProfile {
  return {
    id: row.id,
    email: row.email,
    display_name: row.display_name || null,
    avatar_url: row.avatar_url || null,
    program: row.program || null,
    created_at: row.created_at,
    updated_at: row.updated_at || null,
  }
}

export async function getUserProfile(client: SupabaseClient, user: User): Promise<PulseUserProfile> {
  const { data, error } = await client.from('users').select('*').eq('id', user.id).maybeSingle()
  if (error) throw new Error(error.message)
  if (data) return normalizeUserProfile(data as PulseUserProfile)

  return upsertUserProfile(client, user, {})
}

export async function upsertUserProfile(
  client: SupabaseClient,
  user: User,
  input: { display_name?: string; avatar_url?: string; program?: string },
): Promise<PulseUserProfile> {
  const enhancedPayload = {
    id: user.id,
    email: user.email || null,
    display_name: input.display_name?.trim() || null,
    avatar_url: input.avatar_url?.trim() || null,
    program: input.program?.trim() || null,
    updated_at: new Date().toISOString(),
  }

  const { data, error } = await client.from('users').upsert(enhancedPayload).select('*').single()
  if (error && !missingBackendSchema(error)) throw new Error(error.message)

  if (error && missingBackendSchema(error)) {
    const { data: fallbackData, error: fallbackError } = await client
      .from('users')
      .upsert({ id: user.id, email: user.email || null })
      .select('*')
      .single()

    if (fallbackError) throw new Error(fallbackError.message)
    return normalizeUserProfile(fallbackData as PulseUserProfile)
  }

  return normalizeUserProfile(data as PulseUserProfile)
}

export async function listPages(
  client: SupabaseClient,
  filters: { type?: PulsePageType | 'all'; system?: string; drugClass?: string; query?: string; limit?: number },
): Promise<PulseLibraryItem[]> {
  let query = client
    .from('pages')
    .select('*, page_vouch_counts(helpful_count, relevant_count, verified_count)')
    .neq('status', 'archived')
    .order('updated_at', { ascending: false })
    .limit(filters.limit || 60)

  if (filters.type && filters.type !== 'all') query = query.eq('type', filters.type)
  if (filters.system) query = query.eq('system', filters.system)
  if (filters.drugClass) query = query.eq('drug_class', filters.drugClass)
  if (filters.query) {
    const pattern = `%${filters.query}%`
    query = query.or(`title.ilike.${pattern},summary.ilike.${pattern},content.ilike.${pattern}`)
  }

  const { data, error } = await query
  if (error && !missingBackendSchema(error)) throw new Error(error.message)

  if (error && missingBackendSchema(error)) {
    let fallback = client
      .from('pages')
      .select('id, title, type, content, user_id, created_at, updated_at')
      .order('updated_at', { ascending: false })
      .limit(filters.limit || 60)

    if (filters.type && filters.type !== 'all') fallback = fallback.eq('type', filters.type)
    if (filters.query) {
      const pattern = `%${filters.query}%`
      fallback = fallback.or(`title.ilike.${pattern},content.ilike.${pattern}`)
    }

    const { data: fallbackData, error: fallbackError } = await fallback
    if (fallbackError) throw new Error(fallbackError.message)

    return ((fallbackData || []) as Array<{ id: string; title: string; type: PulsePage['type']; content: string; user_id: string | null; created_at: string; updated_at: string }>)
      .map(row => normalizeStoredPage(row))
      .filter(page => !filters.system || page.system === filters.system)
      .filter(page => !filters.drugClass || page.drug_class === filters.drugClass)
      .map(page => ({ ...page, vouches: EMPTY_VOUCHES }))
  }

  return ((data || []) as Array<PulsePage & { page_vouch_counts?: PulseVouchCounts[] | PulseVouchCounts | null }>).map(row => {
    const rawCounts = Array.isArray(row.page_vouch_counts) ? row.page_vouch_counts[0] : row.page_vouch_counts
    const { page_vouch_counts: _counts, ...page } = row
    void _counts
    return {
      ...normalizeStoredPage(page),
      vouches: rawCounts || EMPTY_VOUCHES,
    }
  })
}

export async function getPage(client: SupabaseClient, id: string): Promise<PulsePage | null> {
  const { data, error } = await client.from('pages').select('*').eq('id', id).maybeSingle()
  if (error) throw new Error(error.message)
  return data ? normalizeStoredPage(data as PulsePage) : null
}

export async function upsertPage(client: SupabaseClient, input: PulsePageInput, userId: string): Promise<PulsePage> {
  const payload = normalizePageInput(input, userId)
  const { data, error } = await client.from('pages').upsert(payload).select('*').single()
  if (error && !missingBackendSchema(error)) throw new Error(error.message)

  if (error && missingBackendSchema(error)) {
    const basicPayload = {
      id: payload.id,
      title: payload.title,
      type: payload.type,
      content: payload.content,
      user_id: payload.user_id,
    }
    const { data: fallbackData, error: fallbackError } = await client.from('pages').upsert(basicPayload).select('*').single()
    if (fallbackError) throw new Error(fallbackError.message)
    return normalizeStoredPage(fallbackData as PulsePage)
  }

  return normalizeStoredPage(data as PulsePage)
}

export async function saveToLibrary(client: SupabaseClient, pageId: string, userId: string): Promise<void> {
  const { error } = await client.from('user_library').upsert({ page_id: pageId, user_id: userId, last_viewed_at: new Date().toISOString() })
  if (error) throw new Error(error.message)
}

export async function setVouch(client: SupabaseClient, pageId: string, userId: string, vouchType: PulseVouchType): Promise<void> {
  const { error } = await client.from('page_vouches').upsert({ page_id: pageId, user_id: userId, vouch_type: vouchType })
  if (error) throw new Error(error.message)
}

export async function createPageFeedback(
  client: SupabaseClient,
  input: { pageId?: string; kind?: PulseFeedbackKind; body?: string },
  userId: string,
): Promise<PulsePageFeedback> {
  const { data, error } = await client
    .from('page_feedback')
    .insert({
      page_id: input.pageId,
      user_id: userId,
      kind: input.kind,
      body: input.body?.trim() || null,
    })
    .select('*')
    .single()

  if (error) throw new Error(error.message)
  return data as PulsePageFeedback
}

export async function listPageComments(client: SupabaseClient, pageId: string): Promise<PulsePageComment[]> {
  const { data, error } = await client
    .from('page_comments')
    .select('*')
    .eq('page_id', pageId)
    .order('created_at', { ascending: true })

  if (error && missingBackendSchema(error)) return []
  if (error) throw new Error(error.message)
  return (data || []) as PulsePageComment[]
}

export async function createPageComment(
  client: SupabaseClient,
  input: { pageId?: string; parentId?: string; body?: string },
  userId: string,
): Promise<PulsePageComment> {
  const { data, error } = await client
    .from('page_comments')
    .insert({
      page_id: input.pageId,
      parent_id: input.parentId || null,
      body: input.body?.trim(),
      user_id: userId,
    })
    .select('*')
    .single()

  if (error) throw new Error(error.message)
  return data as PulsePageComment
}

export async function listPageSuggestions(client: SupabaseClient, pageId?: string): Promise<PulsePageSuggestion[]> {
  let query = client
    .from('page_suggestions')
    .select('*')
    .order('created_at', { ascending: false })

  if (pageId) query = query.eq('page_id', pageId)

  const { data, error } = await query
  if (error && missingBackendSchema(error)) return []
  if (error) throw new Error(error.message)
  return (data || []) as PulsePageSuggestion[]
}

export async function createPageSuggestion(
  client: SupabaseClient,
  input: {
    pageId?: string
    title?: string
    content?: string
    summary?: string
    system?: string
    drug_class?: string
    rationale?: string
  },
  userId: string,
): Promise<PulsePageSuggestion> {
  const { data, error } = await client
    .from('page_suggestions')
    .insert({
      page_id: input.pageId,
      user_id: userId,
      title: input.title?.trim() || null,
      content: input.content?.trim() || null,
      summary: input.summary?.trim() || null,
      system: input.system?.trim() || null,
      drug_class: input.drug_class?.trim() || null,
      rationale: input.rationale?.trim() || null,
      status: 'pending',
    })
    .select('*')
    .single()

  if (error) throw new Error(error.message)
  return data as PulsePageSuggestion
}

export async function listStudyEvents(client: SupabaseClient, userId: string, limit = 30): Promise<PulseStudyEvent[]> {
  const { data, error } = await client
    .from('study_events')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error && missingBackendSchema(error)) return []
  if (error) throw new Error(error.message)
  return (data || []) as PulseStudyEvent[]
}

export async function createStudyEvent(
  client: SupabaseClient,
  input: { eventType?: PulseStudyEventKind; pageId?: string; deckId?: string; metadata?: Record<string, unknown> },
  userId: string,
): Promise<PulseStudyEvent> {
  const { data, error } = await client
    .from('study_events')
    .insert({
      user_id: userId,
      page_id: input.pageId || null,
      deck_id: input.deckId || null,
      event_type: input.eventType,
      metadata: input.metadata || {},
    })
    .select('*')
    .single()

  if (error) throw new Error(error.message)
  return data as PulseStudyEvent
}

export async function listCourses(client: SupabaseClient): Promise<PulseCourse[]> {
  const { data, error } = await client.from('courses').select('*').order('updated_at', { ascending: false })
  if (error && missingBackendSchema(error)) return []
  if (error) throw new Error(error.message)
  return (data || []) as PulseCourse[]
}

export async function createCourse(
  client: SupabaseClient,
  input: { title: string; code?: string; institution?: string; term?: string; description?: string },
  userId: string,
): Promise<PulseCourse> {
  const course = {
    slug: slugify(`${input.code || input.title}-${input.term || 'course'}`),
    title: input.title.trim(),
    code: input.code || null,
    institution: input.institution || null,
    term: input.term || null,
    description: input.description || null,
    owner_id: userId,
  }

  const { data, error } = await client.from('courses').insert(course).select('*').single()
  if (error) throw new Error(error.message)

  await client.from('course_memberships').insert({ course_id: data.id, user_id: userId, role: 'owner' })
  return data as PulseCourse
}

export async function listFlashcardDecks(client: SupabaseClient): Promise<PulseFlashcardDeck[]> {
  const { data, error } = await client.from('flashcard_decks').select('*').order('updated_at', { ascending: false })
  if (error && missingBackendSchema(error)) return []
  if (error) throw new Error(error.message)
  return (data || []) as PulseFlashcardDeck[]
}

export async function createFlashcardDeck(
  client: SupabaseClient,
  input: { title: string; description?: string; course_id?: string; visibility?: 'private' | 'course' | 'community' | 'public' },
  userId: string,
): Promise<PulseFlashcardDeck> {
  const { data, error } = await client
    .from('flashcard_decks')
    .insert({
      title: input.title.trim(),
      description: input.description || null,
      course_id: input.course_id || null,
      visibility: input.visibility || 'private',
      owner_id: userId,
    })
    .select('*')
    .single()

  if (error) throw new Error(error.message)
  return data as PulseFlashcardDeck
}
