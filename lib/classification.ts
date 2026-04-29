import type { DiseaseListItem, DrugListItem } from './supabase'

const DISEASE_SYSTEMS: Array<{ name: string; terms: string[] }> = [
  { name: 'Neurological', terms: ['neuro', 'brain', 'spinal', 'seizure', 'epilepsy', 'dementia', 'alzheimer', 'parkinson', 'multiple sclerosis', 'meningitis', 'hydrocephalus', 'concussion'] },
  { name: 'Cardiac', terms: ['cardiac', 'cardio', 'heart', 'hypertension', 'myocardial', 'atrial'] },
  { name: 'Respiratory', terms: ['respiratory', 'pulmonary', 'lung', 'asthma', 'copd', 'pneumonia', 'ards'] },
  { name: 'Endocrine', terms: ['endocrine', 'diabetes', 'thyroid', 'adrenal', 'cushing', 'addison', 'pku'] },
  { name: 'Renal and Urinary', terms: ['renal', 'kidney', 'urinary', 'nephro', 'glomerulo', 'pyelo', 'incontinence', 'enuresis', 'vesicoureteral'] },
  { name: 'Gastrointestinal', terms: ['gastro', 'gi', 'bowel', 'intestinal', 'liver', 'cirrhosis', 'pancreatitis', 'appendicitis', 'crohn', 'colitis', 'celiac', 'gerd', 'ulcer', 'chole'] },
  { name: 'Hematologic', terms: ['hematologic', 'blood', 'sickle', 'hemophilia', 'lymphoma', 'myeloma', 'anemia', 'coagulation', 'dic'] },
  { name: 'Infectious and Immune', terms: ['infectious', 'infection', 'immune', 'meningitis', 'sepsis', 'eczema', 'psoriasis'] },
  { name: 'Integumentary', terms: ['skin', 'dermat', 'acne', 'eczema', 'psoriasis', 'pressure ulcer'] },
  { name: 'Sensory', terms: ['eye', 'ear', 'taste', 'olfactory'] },
]

const DRUG_CLASSES: Array<{ name: string; terms: string[] }> = [
  { name: 'Beta Blockers', terms: ['beta blocker', 'beta-blocker', 'metoprolol', 'atenolol', 'propranolol', 'carvedilol'] },
  { name: 'ACE Inhibitors / ARBs', terms: ['ace inhibitor', 'angiotensin', 'lisinopril', 'arb', 'receptor blocker'] },
  { name: 'Loop Diuretics', terms: ['loop diuretic', 'furosemide', 'lasix'] },
  { name: 'Potassium-Sparing Diuretics', terms: ['potassium-sparing', 'spironolactone'] },
  { name: 'Anticoagulants', terms: ['anticoagulant', 'antiembolic', 'heparin', 'warfarin'] },
  { name: 'Insulins', terms: ['insulin'] },
  { name: 'Oral Antidiabetics', terms: ['metformin', 'sulfonylurea', 'antidiabetic'] },
  { name: 'Corticosteroids', terms: ['corticosteroid', 'steroid', 'prednisone', 'dexamethasone'] },
  { name: 'Antibiotics / Antimicrobials', terms: ['antibiotic', 'antimicrobial', 'penicillin', 'amoxicillin', 'ciprofloxacin', 'metronidazole', 'nitrofurantoin'] },
  { name: 'Antivirals', terms: ['antiviral', 'acyclovir'] },
  { name: 'Opioid Analgesics', terms: ['opioid', 'morphine', 'fentanyl'] },
  { name: 'Non-Opioid Analgesics', terms: ['analgesic', 'acetaminophen', 'nsaid'] },
  { name: 'Gastrointestinal', terms: ['proton pump', 'ppi', 'h2 blocker', 'lactulose', 'pantoprazole', 'ranitidine'] },
  { name: 'Oncology / Biologics', terms: ['oncology', 'chemotherapy', 'rituximab', 'vincristine', 'doxorubicin', 'cyclophosphamide', 'brentuximab'] },
  { name: 'Integumentary', terms: ['topical', 'integumentary', 'dermat', 'benzoyl', 'isotretinoin'] },
]

function haystack(parts: Array<string | string[] | undefined>): string {
  return parts.flatMap(part => Array.isArray(part) ? part : [part || '']).join(' ').toLowerCase()
}

function includesClinicalTerm(text: string, term: string): boolean {
  if (term.length <= 4) {
    return new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(text)
  }
  return text.includes(term)
}

export function inferDiseaseSystem(disease: Pick<DiseaseListItem, 'title' | 'tags' | 'incidence'>): string {
  const text = haystack([disease.title, disease.tags, disease.incidence])
  return DISEASE_SYSTEMS.find(system => system.terms.some(term => includesClinicalTerm(text, term)))?.name || 'Other'
}

export function inferDrugClass(drug: Pick<DrugListItem, 'title' | 'tags' | 'classification' | 'trade_names'>): string {
  const text = haystack([drug.title, drug.tags, drug.classification, drug.trade_names])
  return DRUG_CLASSES.find(drugClass => drugClass.terms.some(term => includesClinicalTerm(text, term)))?.name || 'Other'
}

export const DISEASE_SYSTEM_ORDER = DISEASE_SYSTEMS.map(system => system.name).concat('Other')
export const DRUG_CLASS_ORDER = DRUG_CLASSES.map(drugClass => drugClass.name).concat('Other')
