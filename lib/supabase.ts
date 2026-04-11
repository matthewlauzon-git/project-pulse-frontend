import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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

export async function getRelated(type: string, slug: string): Promise<any[]> {
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

export async function searchContent(query: string): Promise<{diseases: DiseaseListItem[], drugs: DrugListItem[], notes: NoteListItem[]}> {
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
