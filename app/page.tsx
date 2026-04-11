'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getDiseases, getDrugs, getNotes } from '@/lib/supabase'
import type { DiseaseListItem, DrugListItem, NoteListItem } from '@/lib/supabase'

const SYS_MAP: Record<string, string[]> = {
  Gastrointestinal: ['gastrointestinal', 'gi'],
  Hematologic: ['hematologic', 'blood', 'coagulation'],
  Neurological: ['neurological'],
  Renal: ['renal'],
  Endocrine: ['endocrine'],
  Cardiovascular: ['cardiovascular'],
  Dermatological: ['dermatological', 'integumentary'],
  Immunology: ['immunology', 'immunological', 'immune'],
  Oncology: ['oncology', 'cancer', 'carcinoma'],
  Infectious: ['infectious', 'infection', 'sepsis'],
  Respiratory: ['respiratory', 'pulmonary'],
}

const SYS_EMOJI: Record<string, string> = {
  Gastrointestinal: '🫁', Hematologic: '🩸', Neurological: '🧠', Renal: '🫘',
  Endocrine: '🦋', Cardiovascular: '❤️', Dermatological: '🩹', Immunology: '🛡️',
  Oncology: '🎗️', Infectious: '🦠', Respiratory: '🫁', Other: '📁',
}

function inferSystem(tags: string[]): string {
  if (!tags?.length) return 'Other'
  const ts = new Set(tags.map(t => t.toLowerCase()))
  for (const [sys, kws] of Object.entries(SYS_MAP))
    if (kws.some(k => ts.has(k))) return sys
  return 'Other'
}

function classifyDrug(drug: DrugListItem): string {
  const c = (drug.classification || '').toLowerCase()
  const t = (drug.tags || []).map(x => x.toLowerCase())
  const all = [c, ...t].join(' ')
  if (/antibiot|macrolide|penicill|cephalospor|fluoroquinol|tetracycl|aminoglycos|sulfon|nitroimidaz/.test(all)) return 'Antibiotics / Antimicrobials'
  if (/analges|nsaid|opioid|pain|acetaminoph|morphine|fentanyl/.test(all)) return 'Analgesics'
  if (/cardio|antihypertens|ace inhibi|beta.?block|calcium channel|diuretic|vasodilat|digoxin|antiangin/.test(all)) return 'Cardiovascular'
  if (/antidiabet|insulin|metform|sulfonyl|glp.?1|sglt/.test(all)) return 'Antidiabetics'
  if (/respirat|bronchodil|corticost|inhaler|albuterol|asthma|copd/.test(all)) return 'Respiratory'
  if (/antidepress|ssri|snri|anxiolyt|benzodiaz|antipsych|sedative|psych/.test(all)) return 'Psychiatric / Neurological'
  if (/gastroint|ppi|proton pump|antacid|laxative|antiemet|ondansetron/.test(all)) return 'Gastrointestinal'
  if (/anticoag|heparin|warfarin|thromboly|antiplatelet/.test(all)) return 'Anticoagulants / Blood'
  if (/immunosuppr|corticost|steroid|prednis/.test(all)) return 'Immunologics / Steroids'
  if (/hormone|thyroid|levothyrox|cortisol/.test(all)) return 'Endocrine / Hormones'
  if (/oncolog|chemother/.test(all)) return 'Oncology'
  if (/topical|dermatol|skin/.test(all)) return 'Dermatological'
  if (/renal|diuret/.test(all)) return 'Renal'
  if (/anesthes|local anesth|general anesth/.test(all)) return 'Anesthetics'
  return 'Other'
}

const DRUG_CLASS_EMOJI: Record<string, string> = {
  'Antibiotics / Antimicrobials': '🦠',
  'Analgesics': '💊',
  'Cardiovascular': '❤️',
  'Antidiabetics': '🩸',
  'Respiratory': '🫁',
  'Psychiatric / Neurological': '🧠',
  'Gastrointestinal': '🫁',
  'Anticoagulants / Blood': '🩸',
  'Immunologics / Steroids': '🛡️',
  'Endocrine / Hormones': '🦋',
  'Oncology': '🎗️',
  'Dermatological': '🩹',
  'Renal': '🫘',
  'Anesthetics': '💉',
  'Other': '📁',
}

export default function Home() {
  const router = useRouter()
  const [diseases, setDiseases] = useState<DiseaseListItem[]>([])
  const [drugs, setDrugs] = useState<DrugListItem[]>([])
  const [notes, setNotes] = useState<NoteListItem[]>([])
  const [searchQ, setSearchQ] = useState('')

  useEffect(() => {
    Promise.all([getDiseases(), getDrugs(), getNotes()]).then(([d, dr, n]) => {
      setDiseases(d)
      setDrugs(dr)
      setNotes(n)
    })
  }, [])

  function doSearch(q: string) {
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  // Compute system groups for diseases
  const diseaseSystems: Record<string, DiseaseListItem[]> = {}
  diseases.forEach(d => {
    const sys = inferSystem(d.tags || [])
    if (!diseaseSystems[sys]) diseaseSystems[sys] = []
    diseaseSystems[sys].push(d)
  })
  const diseaseSystemOrder = [...Object.keys(SYS_MAP), 'Other'].filter(s => diseaseSystems[s])

  // Compute class groups for drugs
  const drugClasses: Record<string, DrugListItem[]> = {}
  drugs.forEach(d => {
    const cls = classifyDrug(d)
    if (!drugClasses[cls]) drugClasses[cls] = []
    drugClasses[cls].push(d)
  })
  const drugClassOrder = Object.keys(drugClasses).sort((a, b) => drugClasses[b].length - drugClasses[a].length)

  // Recent items (by created_date descending)
  const recentDiseases = [...diseases]
    .filter(d => d.created_date)
    .sort((a, b) => (b.created_date || '').localeCompare(a.created_date || ''))
    .slice(0, 5)
  const recentDrugs = [...drugs]
    .filter(d => d.created_date)
    .sort((a, b) => (b.created_date || '').localeCompare(a.created_date || ''))
    .slice(0, 5)

  // Course groups for notes
  const courseGroups: Record<string, NoteListItem[]> = {}
  notes.forEach(n => {
    const course = n.course_code || 'Uncategorized'
    if (!courseGroups[course]) courseGroups[course] = []
    courseGroups[course].push(n)
  })
  const courseOrder = Object.keys(courseGroups).sort()

  return (
    <main className="page-wrap">
      <div className="hero">
        <h1>Project Pulse</h1>
        <p>Nursing knowledge commons — St. Lawrence College</p>
        <div className="hero-input">
          <span className="si">🔍</span>
          <input
            type="text"
            placeholder="Search diseases, drugs, notes…"
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && doSearch(searchQ)}
            autoFocus
          />
        </div>
      </div>

      <div className="stat-row">
        <div className="stat-card"><div className="num">{diseases.length}</div><div className="label">Diseases</div></div>
        <div className="stat-card"><div className="num">{drugs.length}</div><div className="label">Drug Cards</div></div>
        <div className="stat-card"><div className="num">{notes.length}</div><div className="label">Notes</div></div>
      </div>

      {/* Disease systems */}
      <div className="section-label">Diseases by System</div>
      <div className="card-grid compact-grid">
        {diseaseSystemOrder.map(sys => (
          <Link key={sys} href={`/diseases?system=${encodeURIComponent(sys)}`} className="card sys-card">
            <span className="sys-emoji">{SYS_EMOJI[sys] ?? '📁'}</span>
            <h3>{sys}</h3>
            <p className="meta">{diseaseSystems[sys].length} diseases</p>
          </Link>
        ))}
      </div>

      {/* Drug classes */}
      <div className="section-label">Drugs by Class</div>
      <div className="card-grid compact-grid">
        {drugClassOrder.map(cls => (
          <Link key={cls} href={`/drugs?class=${encodeURIComponent(cls)}`} className="card sys-card">
            <span className="sys-emoji">{DRUG_CLASS_EMOJI[cls] ?? '📁'}</span>
            <h3>{cls}</h3>
            <p className="meta">{drugClasses[cls].length} drugs</p>
          </Link>
        ))}
      </div>

      {/* Notes by course */}
      {courseOrder.length > 0 && (
        <>
          <div className="section-label">Notes by Course</div>
          <div className="card-grid compact-grid">
            {courseOrder.map(course => (
              <Link key={course} href={`/notes?course=${encodeURIComponent(course)}`} className="card sys-card">
                <span className="sys-emoji">📝</span>
                <h3>{course}</h3>
                <p className="meta">{courseGroups[course].length} notes</p>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Recently added */}
      {(recentDiseases.length > 0 || recentDrugs.length > 0) && (
        <>
          <div className="section-label">Recently Added</div>
          <div className="card-grid">
            {recentDiseases.map(d => (
              <Link key={d.slug} href={`/diseases/${d.slug}`} className="card disease">
                <div className="type">Disease</div>
                <h3>{d.title}</h3>
                {d.incidence && <p className="meta">{d.incidence}</p>}
              </Link>
            ))}
            {recentDrugs.map(d => (
              <Link key={d.slug} href={`/drugs/${d.slug}`} className="card drug">
                <div className="type">Drug</div>
                <h3>{d.title}</h3>
                {d.classification && <p className="meta">{d.classification}</p>}
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  )
}