export type DrugStudyFrame = {
  slug: string
  oneLiner: string
  classLabel: string
  brands: string[]
  quickChecks: string[]
  holdOrReassess: string[]
  monitor: string[]
  patientTeaching: string[]
  danger: string[]
  nclexTrap: string[]
}

export const drugStudyFrames: Record<string, DrugStudyFrame> = {
  lisinopril: {
    slug: 'lisinopril',
    oneLiner: 'ACE inhibitor. Think: BP down, potassium up, kidneys watched, angioedema is the emergency.',
    classLabel: 'ACE inhibitor',
    brands: ['Prinivil', 'Zestril'],
    quickChecks: [
      'BP: low or dizzy changes the plan',
      'Kidneys: creatinine/BUN trend',
      'Potassium: level plus K-raising meds',
      'History: angioedema or swelling',
    ],
    holdOrReassess: [
      'Low BP: reassess before giving',
      'Swelling: stop and escalate',
      'High K: clarify the plan',
      'Parameters: follow order and facility policy',
    ],
    monitor: [
      'BP: first-dose drop',
      'K+: hyperkalemia',
      'Renal labs: creatinine/BUN',
      'Cough: dry, persistent',
    ],
    patientTeaching: [
      'Position: rise slowly',
      'Emergency: swelling or breathing trouble',
      'Potassium: avoid salt substitutes',
      'Follow-up: BP and labs',
    ],
    danger: [
      'Angioedema: airway emergency',
      'Hyperkalemia: may be silent',
      'Dehydration: hypotension risk',
    ],
    nclexTrap: [
      'Cough: expected, not automatically allergy',
      'Kidney protection: still watch labs',
      'K-sparing meds: hyperkalemia risk',
    ],
  },
}
