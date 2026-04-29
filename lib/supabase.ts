import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'missing-anon-key'
const hasSupabaseConfig = Boolean(
  supabaseUrl !== 'https://example.supabase.co' &&
  supabaseKey !== 'missing-anon-key'
)

const globalForSupabase = globalThis as typeof globalThis & {
  pulseSupabase?: SupabaseClient
}

export const supabase = globalForSupabase.pulseSupabase || createClient(supabaseUrl, supabaseKey)
globalForSupabase.pulseSupabase = supabase

export interface Disease {
  slug: string
  title: string
  content: string
  tags: string[]
  incidence: string
  created_date: string
  updated_at: string
}

export interface DiseaseListItem {
  slug: string
  title: string
  tags: string[]
  incidence: string
  created_date: string
  updated_at?: string
}

export interface Drug {
  slug: string
  title: string
  content: string
  tags: string[]
  classification: string
  trade_names: string
  created_date: string
}

export interface DrugListItem {
  slug: string
  title: string
  tags: string[]
  classification: string
  trade_names: string
  created_date?: string
}

export interface Note {
  slug: string
  title: string
  content: string
  content_type: string
  course_code: string
  tags: string[]
  created_date?: string
}

export interface NoteListItem {
  slug: string
  title: string
  content_type: string
  course_code: string
  tags: string[]
  created_date?: string
}

export interface RelatedItem {
  slug: string
  title: string
  content_type: 'disease' | 'drug' | 'note'
}

export interface SearchContentResult {
  diseases: DiseaseListItem[]
  drugs: DrugListItem[]
  notes: NoteListItem[]
}

export type PageType = 'disease' | 'drug' | 'procedure' | 'note'

export interface PageRow {
  id: string
  title: string
  type: PageType
  content: string
  created_at: string
  updated_at: string
  user_id?: string | null
}

export interface VouchSummary {
  helpful: number
  relevant: number
  verified: number
  userVouch?: 'helpful' | 'relevant' | 'verified' | null
}

interface LocalCardsData {
  diseases: Disease[]
  drugs: Drug[]
  notes: Note[]
}

let localCardsCache: LocalCardsData | null = null
const preferLocalGeneratedCards = process.env.NEXT_PUBLIC_PULSE_CONTENT_SOURCE !== 'supabase'

async function getLocalCards(): Promise<LocalCardsData> {
  if (localCardsCache) return localCardsCache
  const response = await fetch('/data/cards.json', { cache: 'no-store' })
  if (!response.ok) return { diseases: [], drugs: [], notes: [] }
  localCardsCache = await response.json()
  return localCardsCache || { diseases: [], drugs: [], notes: [] }
}

function extractHeading(content: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`^### ${escaped}\\s*\\n\\n([\\s\\S]*?)(?=\\n### |\\n## |$)`, 'm')
  return content.match(pattern)?.[1]?.trim() || ''
}

function pageToDisease(page: PageRow): Disease {
  return {
    slug: page.id,
    title: page.title,
    content: page.content,
    tags: [],
    incidence: (extractHeading(page.content, 'What It Is') || extractHeading(page.content, 'Definition')).slice(0, 180),
    created_date: page.created_at,
    updated_at: page.updated_at,
  }
}

function pageToDrug(page: PageRow): Drug {
  return {
    slug: page.id,
    title: page.title,
    content: page.content,
    tags: [],
    classification: extractHeading(page.content, 'What It Is') || extractHeading(page.content, 'Class'),
    trade_names: extractHeading(page.content, 'Brand Names'),
    created_date: page.created_at,
  }
}

function pageToNote(page: PageRow): Note {
  return {
    slug: page.id,
    title: page.title,
    content: page.content,
    content_type: page.type,
    course_code: '',
    tags: [],
  }
}

export async function getDiseases(): Promise<DiseaseListItem[]> {
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    return local.diseases
  }

  const { data, error } = await supabase
    .from('pages')
    .select('id, title, type, content, created_at, updated_at')
    .eq('type', 'disease')
    .order('title')
  if (error || !data?.length) {
    const local = await getLocalCards()
    return local.diseases
  }
  return ((data || []) as PageRow[]).map(pageToDisease)
}

export async function getDisease(slug: string): Promise<Disease | null> {
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    return local.diseases.find(disease => disease.slug === slug) || null
  }

  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('id', slug)
    .eq('type', 'disease')
    .single()
  if (error) {
    const local = await getLocalCards()
    return local.diseases.find(disease => disease.slug === slug) || null
  }
  return pageToDisease(data as PageRow)
}

export async function getDrugs(): Promise<DrugListItem[]> {
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    return local.drugs
  }

  const { data, error } = await supabase
    .from('pages')
    .select('id, title, type, content, created_at, updated_at')
    .eq('type', 'drug')
    .order('title')
  if (error || !data?.length) {
    const local = await getLocalCards()
    return local.drugs
  }
  return ((data || []) as PageRow[]).map(pageToDrug)
}

export async function getDrug(slug: string): Promise<Drug | null> {
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    return local.drugs.find(drug => drug.slug === slug) || null
  }

  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('id', slug)
    .eq('type', 'drug')
    .single()
  if (error) {
    const local = await getLocalCards()
    return local.drugs.find(drug => drug.slug === slug) || null
  }
  return pageToDrug(data as PageRow)
}

export async function getNotes(): Promise<NoteListItem[]> {
  if (!hasSupabaseConfig) {
    const local = await getLocalCards()
    return local.notes
  }

  const { data, error } = await supabase
    .from('pages')
    .select('id, title, type, content, created_at, updated_at')
    .eq('type', 'note')
    .order('title')
  if (error || !data?.length) {
    const local = await getLocalCards()
    return local.notes
  }
  return ((data || []) as PageRow[]).map(pageToNote)
}

export async function getCommunityPages(): Promise<PageRow[]> {
  if (!hasSupabaseConfig) return []

  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .in('type', ['note', 'procedure'])
    .order('updated_at', { ascending: false })
    .limit(40)

  if (error || !data) return []
  return data as PageRow[]
}

export async function getNote(slug: string): Promise<Note | null> {
  if (!hasSupabaseConfig) {
    const local = await getLocalCards()
    return local.notes.find(note => note.slug === slug) || null
  }

  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('id', slug)
    .in('type', ['note', 'procedure'])
    .single()
  if (error) {
    const local = await getLocalCards()
    return local.notes.find(note => note.slug === slug) || null
  }
  return pageToNote(data as PageRow)
}

export async function getPage(slug: string): Promise<PageRow | null> {
  if (!hasSupabaseConfig) {
    const local = await getLocalCards()
    const disease = local.diseases.find(item => item.slug === slug)
    const drug = local.drugs.find(item => item.slug === slug)
    const note = local.notes.find(item => item.slug === slug)
    const match = disease || drug || note

    if (!match) return null

    const type: PageType = drug ? 'drug' : note ? 'note' : 'disease'
    const createdAt = disease?.created_date || drug?.created_date || note?.created_date || ''
    const updatedAt = disease?.updated_at || createdAt

    return {
      id: match.slug,
      title: match.title,
      type,
      content: match.content,
      created_at: createdAt,
      updated_at: updatedAt,
    }
  }

  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('id', slug)
    .single()

  if (error || !data) return null
  return data as PageRow
}

export async function savePage(input: {
  id: string
  title: string
  type: PageType
  content: string
  isNew: boolean
}): Promise<PageRow> {
  if (!hasSupabaseConfig) {
    throw new Error('Supabase is not configured for this environment.')
  }

  const { data: userResult } = await supabase.auth.getUser()
  const user = userResult.user

  if (!user) {
    throw new Error('Sign in before saving pages.')
  }

  await supabase.from('users').upsert({
    id: user.id,
    email: user.email,
  })

  const payload = {
    id: input.id,
    title: input.title,
    type: input.type,
    content: input.content,
    user_id: user.id,
    updated_at: new Date().toISOString(),
  }

  const request = input.isNew
    ? supabase.from('pages').insert(payload).select('*').single()
    : supabase
        .from('pages')
        .update({
          title: payload.title,
          type: payload.type,
          content: payload.content,
          updated_at: payload.updated_at,
        })
        .eq('id', input.id)
        .select('*')
        .single()

  const { data, error } = await request
  if (error || !data) {
    throw new Error(error?.message || 'The page could not be saved.')
  }

  _slugMapCache = null
  return data as PageRow
}

export async function getVouchSummary(pageId: string): Promise<VouchSummary> {
  if (!hasSupabaseConfig) return { helpful: 0, relevant: 0, verified: 0, userVouch: null }

  const [{ data: rows }, { data: userResult }] = await Promise.all([
    supabase.from('page_vouches').select('vouch_type').eq('page_id', pageId),
    supabase.auth.getUser(),
  ])

  const summary: VouchSummary = { helpful: 0, relevant: 0, verified: 0, userVouch: null }
  ;((rows || []) as Array<{ vouch_type: 'helpful' | 'relevant' | 'verified' }>).forEach(row => {
    summary[row.vouch_type] += 1
  })

  const user = userResult.user
  if (user) {
    const { data } = await supabase
      .from('page_vouches')
      .select('vouch_type')
      .eq('page_id', pageId)
      .eq('user_id', user.id)
      .maybeSingle()
    summary.userVouch = data?.vouch_type || null
  }

  return summary
}

export async function setPageVouch(pageId: string, vouchType: 'helpful' | 'relevant' | 'verified'): Promise<void> {
  if (!hasSupabaseConfig) throw new Error('Supabase is not configured for this environment.')

  const { data: userResult } = await supabase.auth.getUser()
  const user = userResult.user
  if (!user) throw new Error('Sign in before vouching.')

  const { error } = await supabase.from('page_vouches').upsert({
    page_id: pageId,
    user_id: user.id,
    vouch_type: vouchType,
  })
  if (error) throw new Error(error.message)
}

export async function getRelated(type: string, slug: string): Promise<RelatedItem[]> {
  if (!hasSupabaseConfig) return []

  const { data, error } = await supabase
    .from('links')
    .select('to_page:pages!links_to_page_id_fkey(id, title, type)')
    .eq('from_page_id', slug)
    .limit(6)

  if (error || !data) return []

  return data
    .map(item => Array.isArray(item.to_page) ? item.to_page[0] : item.to_page)
    .filter(Boolean)
    .map(page => ({
      slug: page.id,
      title: page.title,
      content_type: page.type,
    }))
}

export async function searchContent(query: string): Promise<SearchContentResult> {
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    const normalizedQuery = query.toLowerCase()
    const matches = (value = '') => value.toLowerCase().includes(normalizedQuery)
    return {
      diseases: local.diseases
        .filter(d => matches(d.title) || matches(d.content) || d.tags?.some(matches))
        .slice(0, 20),
      drugs: local.drugs
        .filter(d => matches(d.title) || matches(d.content) || matches(d.classification) || matches(d.trade_names))
        .slice(0, 20),
      notes: local.notes
        .filter(n => matches(n.title) || matches(n.content) || n.tags?.some(matches))
        .slice(0, 20),
    }
  }

  const pattern = `%${query}%`
  const [dis, dru, not] = await Promise.all([
    supabase
      .from('pages')
      .select('id, title, type, content, created_at, updated_at')
      .eq('type', 'disease')
      .or(`title.ilike.${pattern},content.ilike.${pattern}`)
      .limit(20)
      .then(r => ((r.data || []) as PageRow[]).map(pageToDisease)),
    supabase
      .from('pages')
      .select('id, title, type, content, created_at, updated_at')
      .eq('type', 'drug')
      .or(`title.ilike.${pattern},content.ilike.${pattern}`)
      .limit(20)
      .then(r => ((r.data || []) as PageRow[]).map(pageToDrug)),
    supabase
      .from('pages')
      .select('id, title, type, content, created_at, updated_at')
      .eq('type', 'note')
      .or(`title.ilike.${pattern},content.ilike.${pattern}`)
      .limit(20)
      .then(r => ((r.data || []) as PageRow[]).map(pageToNote)),
  ])
  return {
    diseases: dis,
    drugs: dru,
    notes: not,
  }
}

// Wikilink resolver — given a slug, find which type it belongs to
export async function resolveWikilink(slug: string): Promise<{found: boolean, type?: string, url?: string}> {
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    if (local.diseases.some(disease => disease.slug === slug)) return { found: true, type: 'disease', url: `/diseases/${slug}` }
    if (local.drugs.some(drug => drug.slug === slug)) return { found: true, type: 'drug', url: `/drugs/${slug}` }
    if (local.notes.some(note => note.slug === slug)) return { found: true, type: 'note', url: `/notes/${slug}` }
    return { found: false }
  }

  const { data } = await supabase.from('pages').select('id, type').eq('id', slug).single()
  if (data?.type === 'disease') return { found: true, type: 'disease', url: `/diseases/${slug}` }
  if (data?.type === 'drug') return { found: true, type: 'drug', url: `/drugs/${slug}` }
  if (data?.type === 'note') return { found: true, type: 'note', url: `/notes/${slug}` }
  return { found: false }
}

// --- Wikilink routing ---
// Cached slug→type map, fetched once per page load
let _slugMapCache: Record<string, 'disease' | 'drug' | 'note'> | null = null

export async function getSlugTypeMap(): Promise<Record<string, 'disease' | 'drug' | 'note'>> {
  if (_slugMapCache) return _slugMapCache
  if (preferLocalGeneratedCards || !hasSupabaseConfig) {
    const local = await getLocalCards()
    _slugMapCache = {}
    local.diseases.forEach(d => { _slugMapCache![d.slug] = 'disease' })
    local.drugs.forEach(d => { _slugMapCache![d.slug] = 'drug' })
    local.notes.forEach(n => { _slugMapCache![n.slug] = 'note' })
    return _slugMapCache
  }

  const { data } = await supabase.from('pages').select('id, type')
  _slugMapCache = {}
  ;((data || []) as Array<{ id: string, type: 'disease' | 'drug' | 'note' }>).forEach(page => {
    if (page.type === 'disease' || page.type === 'drug' || page.type === 'note') {
      _slugMapCache![page.id] = page.type
    }
  })
  return _slugMapCache
}

export function renderWikilinks(content: string, slugMap: Record<string, 'disease' | 'drug' | 'note'>): string {
  return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, slug, label) => {
    const clean = slug.trim()
    const type = slugMap[clean]
    const text = (label || clean).trim()
    if (!type) return text
    return `[${text}](/${type === 'disease' ? 'diseases' : type === 'drug' ? 'drugs' : 'notes'}/${clean})`
  })
}
