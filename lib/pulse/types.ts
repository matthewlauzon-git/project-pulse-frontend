export type PulsePageType = 'disease' | 'drug' | 'procedure' | 'note'
export type PulseVisibility = 'private' | 'course' | 'community' | 'public'
export type PulsePageStatus = 'draft' | 'published' | 'archived'
export type PulseVouchType = 'helpful' | 'relevant' | 'verified'
export type PulseFeedbackKind = 'confusing' | 'missing' | 'incorrect' | 'helpful'
export type PulseStudyEventKind = 'view_page' | 'search' | 'save_page' | 'review_flashcard' | 'create_page'
export type PulseCommentStatus = 'visible' | 'hidden' | 'resolved'
export type PulseSuggestionStatus = 'pending' | 'accepted' | 'rejected'

export interface PulseUserProfile {
  id: string
  email: string | null
  display_name: string | null
  avatar_url: string | null
  program: string | null
  created_at: string
  updated_at: string | null
}

export interface PulsePage {
  id: string
  title: string
  type: PulsePageType
  content: string
  summary: string | null
  system: string | null
  drug_class: string | null
  aliases: string[]
  tags: string[]
  template_version: string | null
  quality_status: 'needs_review' | 'student_ready' | 'class_verified' | 'archived'
  source_path: string | null
  source_citation: string | null
  status: PulsePageStatus
  visibility: PulseVisibility
  source_kind: 'seed' | 'student' | 'course' | 'import'
  user_id: string | null
  created_at: string
  updated_at: string
}

export interface PulseCourse {
  id: string
  slug: string
  title: string
  code: string | null
  institution: string | null
  term: string | null
  description: string | null
  visibility: 'private' | 'community' | 'public'
  owner_id: string
  created_at: string
  updated_at: string
}

export interface PulseVouchCounts {
  helpful_count: number
  relevant_count: number
  verified_count: number
}

export interface PulseLibraryItem extends PulsePage {
  vouches: PulseVouchCounts
  saved_at?: string | null
  pinned?: boolean
}

export interface PulseFlashcardDeck {
  id: string
  title: string
  description: string | null
  owner_id: string
  course_id: string | null
  visibility: PulseVisibility
  created_at: string
  updated_at: string
}

export interface PulseFlashcard {
  id: string
  deck_id: string
  page_id: string | null
  front: string
  back: string
  position: number
  created_at: string
  updated_at: string
}

export interface PulsePageFeedback {
  id: string
  page_id: string
  user_id: string
  kind: PulseFeedbackKind
  body: string | null
  created_at: string
}

export interface PulseStudyEvent {
  id: string
  user_id: string
  page_id: string | null
  deck_id: string | null
  event_type: PulseStudyEventKind
  metadata: Record<string, unknown>
  created_at: string
}

export interface PulsePageComment {
  id: string
  page_id: string
  user_id: string
  parent_id: string | null
  body: string
  status: PulseCommentStatus
  created_at: string
  updated_at: string
}

export interface PulsePageSuggestion {
  id: string
  page_id: string
  user_id: string
  title: string | null
  content: string | null
  summary: string | null
  system: string | null
  drug_class: string | null
  rationale: string | null
  status: PulseSuggestionStatus
  reviewer_id: string | null
  reviewed_at: string | null
  created_at: string
  updated_at: string
}

export interface PulsePageInput {
  id?: string
  title: string
  type: PulsePageType
  content: string
  summary?: string
  system?: string
  drug_class?: string
  aliases?: string[]
  tags?: string[]
  template_version?: string
  quality_status?: PulsePage['quality_status']
  source_path?: string
  source_citation?: string
  status?: PulsePageStatus
  visibility?: PulseVisibility
}
