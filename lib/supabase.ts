import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'missing-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

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

interface SlugOnly {
  slug: string
}

export async function getDiseases(): Promise<DiseaseListItem[]> {
  const { data, error } = await supabase
    .from('diseases')
    .select('slug, title, tags, incidence, created_date, updated_at')
    .order('title')
  if (error) throw error
  return (data || []) as DiseaseListItem[]
}

export async function getDisease(slug: string): Promise<Disease | null> {
  const { data, error } = await supabase
    .from('diseases')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}

export async function getDrugs(): Promise<DrugListItem[]> {
  const { data, error } = await supabase
    .from('drugs')
    .select('slug, title, tags, classification, trade_names, created_date')
    .order('title')
  if (error) throw error
  return (data || []) as DrugListItem[]
}

export async function getDrug(slug: string): Promise<Drug | null> {
  const { data, error } = await supabase
    .from('drugs')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}

export async function getNotes(): Promise<NoteListItem[]> {
  const { data, error } = await supabase
    .from('notes')
    .select('slug, title, content_type, course_code, tags, created_date')
    .order('title')
  if (error) throw error
  return (data || []) as NoteListItem[]
}

export async function getNote(slug: string): Promise<Note | null> {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}

export async function getRelated(type: string, slug: string): Promise<RelatedItem[]> {
  // Try diseases first
  if (type === 'disease') {
    const { data, error } = await supabase
      .from('diseases')
      .select('slug, title, content_type:slug')
      .ilike('content', `%${slug}%`)
      .limit(6)
    if (!error && data) return data.map(d => ({ ...d, content_type: 'disease' }))
  }
  return []
}

export async function searchContent(query: string): Promise<SearchContentResult> {
  const pattern = `%${query}%`
  const [dis, dru, not] = await Promise.all([
    supabase
      .from('diseases')
      .select('slug, title, tags, incidence')
      .or(`title.ilike.${pattern},tags.cs.{${query}},incidence.ilike.${pattern}`)
      .limit(20)
      .then(r => r.data || []),
    supabase
      .from('drugs')
      .select('slug, title, tags, classification, trade_names')
      .or(`title.ilike.${pattern},classification.ilike.${pattern},trade_names.ilike.${pattern},tags.cs.{${query}}`)
      .limit(20)
      .then(r => r.data || []),
    supabase
      .from('notes')
      .select('slug, title, content_type, course_code, tags')
      .or(`title.ilike.${pattern},course_code.ilike.${pattern},tags.cs.{${query}}`)
      .limit(20)
      .then(r => r.data || []),
  ])
  return {
    diseases: dis as DiseaseListItem[],
    drugs: dru as DrugListItem[],
    notes: not as NoteListItem[],
  }
}

// Wikilink resolver — given a slug, find which type it belongs to
export async function resolveWikilink(slug: string): Promise<{found: boolean, type?: string, url?: string}> {
  // Check diseases
  const { data: d } = await supabase.from('diseases').select('slug').eq('slug', slug).single()
  if (d) return { found: true, type: 'disease', url: `/diseases/${slug}` }
  const { data: dr } = await supabase.from('drugs').select('slug').eq('slug', slug).single()
  if (dr) return { found: true, type: 'drug', url: `/drugs/${slug}` }
  const { data: n } = await supabase.from('notes').select('slug').eq('slug', slug).single()
  if (n) return { found: true, type: 'note', url: `/notes/${slug}` }
  return { found: false }
}

// --- Wikilink routing ---
// Cached slug→type map, fetched once per page load
let _slugMapCache: Record<string, 'disease' | 'drug' | 'note'> | null = null

export async function getSlugTypeMap(): Promise<Record<string, 'disease' | 'drug' | 'note'>> {
  if (_slugMapCache) return _slugMapCache
  const [dis, dru, not] = await Promise.all([
    supabase.from('diseases').select('slug'),
    supabase.from('drugs').select('slug'),
    supabase.from('notes').select('slug'),
  ])
  _slugMapCache = {}
  ;((dis.data || []) as SlugOnly[]).forEach(d => { _slugMapCache![d.slug] = 'disease' })
  ;((dru.data || []) as SlugOnly[]).forEach(d => { _slugMapCache![d.slug] = 'drug' })
  ;((not.data || []) as SlugOnly[]).forEach(d => { _slugMapCache![d.slug] = 'note' })
  return _slugMapCache
}

export function renderWikilinks(content: string, slugMap: Record<string, 'disease' | 'drug' | 'note'>): string {
  return content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, slug, label) => {
    const clean = slug.trim()
    const type = slugMap[clean]
    if (!type) return label // unknown slug — render as plain text
    return `[${label}](/${type === 'disease' ? 'diseases' : type === 'drug' ? 'drugs' : 'notes'}/${clean})`
  })
}
