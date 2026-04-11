'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getDiseases, type DiseaseListItem } from '@/lib/supabase'

const SYS_MAP: Record<string, string[]> = {
  Cardiovascular: ['cardiac','heart','cardiovascular','hypertension','angina','mi','hf','chf','cad','atherosclerosis','arrhythmia','afib'],
  Respiratory: ['respiratory','lung','pulmonary','copd','asthma','pneumonia','tb','bronchitis','ards'],
  Neurological: ['neuro','brain','seizure','stroke','dementia','ms','als','parkinson','meningitis','headache','migraine'],
  'Renal/Urinary': ['renal','kidney','urinary','aki','ckd','nephro','uti'],
  Hematologic: ['blood','hematologic','anemia','sickle','hemophilia','thrombo','clotting','leukemia','lymphoma'],
  Gastrointestinal: ['gi','digestive','bowel','liver','pancreat','colitis','crohn','appendic','gerd','ulcer','hepatitis','cirrhosis'],
  Endocrine: ['thyroid','diabetes','endocrine','metabolic','cushing','addison','hyperthyroid','hypothyroid'],
  Immunological: ['immune','lupus','hiv','allergy','autoimmune','rheumatoid'],
  Oncology: ['cancer','tumor','leukemia','lymphoma','myeloma','melanoma','carcinoma','oncology'],
  Infectious: ['infection','sepsis','septic','viral','bacterial','fungal','parasitic'],
  Integumentary: ['skin','dermat','wound','burn','pressure','psoriasis','eczema'],
  Musculoskeletal: ['bone','joint','fracture','osteoporosis','arthritis','osteoarthritis'],
}

function inferSystem(tags: string[]): string {
  if (!tags?.length) return 'Other'
  const ts = tags.join(' ').toLowerCase()
  for (const [sys, kws] of Object.entries(SYS_MAP))
    if (kws.some(k => ts.includes(k))) return sys
  return 'Other'
}

export default function DiseasesPage() {
  const [diseases, setDiseases] = useState<DiseaseListItem[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => { getDiseases().then(setDiseases) }, [])

  const filtered = filter
    ? diseases.filter(d => d.title.toLowerCase().includes(filter.toLowerCase()) || d.tags?.some((t: string) => t.toLowerCase().includes(filter.toLowerCase())))
    : diseases

  const groups: Record<string, DiseaseListItem[]> = {}
  filtered.forEach(d => {
    const sys = inferSystem(d.tags)
    if (!groups[sys]) groups[sys] = []
    groups[sys].push(d)
  })
  const order = [...Object.keys(SYS_MAP), 'Other'].filter(s => groups[s])

  return (
    <main className="page-wrap">
      <div className="page-header">
        <h1>Diseases</h1>
        <p>Pathophysiology & Med-Surg flash cards</p>
      </div>
      <div className="search-wrap">
        <span className="si">🔍</span>
        <input type="text" placeholder="Filter diseases…" value={filter} onChange={e => setFilter(e.target.value)} autoFocus />
      </div>
      {order.map(sys => (
        <div key={sys}>
          <div className="system-label">{sys}</div>
          <div className="card-grid">
            {groups[sys].map(d => (
              <Link key={d.slug} href={`/diseases/${d.slug}`} className="card disease">
                <div className="type">Disease</div>
                <h3>{d.title}</h3>
                {d.incidence && <p className="meta">{d.incidence}</p>}
              </Link>
            ))}
          </div>
        </div>
      ))}
      {filtered.length === 0 && <div className="empty-state">No diseases found</div>}
    </main>
  )
}
