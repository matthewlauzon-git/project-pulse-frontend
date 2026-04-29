begin;

delete from public.links;

delete from public.pages;

insert into public.pages (id, title, type, content, user_id)
values ('acne-vulgaris', 'Acne Vulgaris', 'disease', '# Acne Vulgaris

## Study Snapshot

### What It Is

Acne vulgaris is a chronic inflammatory disorder of the pilosebaceous unit (hair follicle + sebaceous gland). It develops from excess sebum, follicular plugging, Cutibacterium acnes overgrowth, and inflammation. Severity ranges from comedones to inflammatory nodules and scarring.

> **The Simplified View:** "Too much oil + clogged pores + bacteria + inflammation = pimples and possible scars."

### Why It Matters

- Permanent scarring and post-inflammatory hyperpigmentation
- Significant anxiety/depression impact in severe acne

### Patho In One Line

Sebaceous stimulation and keratin plugging form comedones

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Sebum overproduction, follicular hyperkeratinization, C. acnes proliferation
- **Modifiable Risk Factors:** Occlusive products, friction, delayed treatment
- **Non-Modifiable Risk Factors:** Puberty, genetics, androgen sensitivity
- **Pathways:** Inflammatory + hormonal + follicular obstruction

### What You See

- Skin: Open/closed comedones — Follicular plugging
- Skin: Papules/pustules — Local inflammatory response
- Skin: Nodules/scars — Deep inflammation and tissue injury

### What Confirms It

Clinical diagnosis by lesion pattern and distribution.

## Nursing Lens

### Nursing Priorities

**Education:** adherence, gentle skin routine, realistic timelines.
**Safety:** monitor adverse effects (dryness, photosensitivity, teratogenic risk with isotretinoin).

### Red Flags

- Permanent scarring and post-inflammatory hyperpigmentation
- Significant anxiety/depression impact in severe acne

### Treatment Themes

- **First-line:** Topical retinoid ± [[benzoyl-peroxide|Benzoyl Peroxide]]
- **Moderate inflammatory:** Add topical/oral antibiotics (time-limited)
- **Severe/refractory:** Oral [[isotretinoin|Isotretinoin]] under strict monitoring
- **Adjuncts:** Hormonal therapy in selected patients

## Exam Layer

### Exam Clues

- Do not use topical/oral antibiotics as monotherapy long-term.
- Benzoyl peroxide helps reduce antibiotic resistance.

## Related

- [[atopic-dermatitis-eczema]]
- [[benzoyl-peroxide]]
- [[isotretinoin]]
- [[skin-cancers]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('acute-confusional-states', 'Acute Confusional States', 'disease', '# Acute Confusional States

## Study Snapshot

### What It Is

Acute confusional state (delirium) is a sudden-onset, fluctuating disturbance in attention and awareness with altered cognition that develops over hours to days — in stark contrast to dementia (insidious onset, progressive, consciousness preserved) and depression (no fluctuating consciousness, attention intact but patient "doesn''t try"). Delirium represents acute brain dysfunction — a medical emergency reflecting underlying cerebral hypoperfusion, neurotransmitter dysregulation, or inflammatory response. It is NOT a diagnosis itself but a syndrome with a cause that must be found.

> **The Simplified View:** "The brain''s operating system has crashed — it''s trying to run too many programs at once with not enough power. Unlike dementia (slow hard drive failure), delirium is a sudden system overload that can often be reversed if you find and fix the trigger."

### Why It Matters

- **Prolonged delirium:** Increases hospital stay 3–5x, institutionalization, mortality; ~40% mortality at 6 months in ICU delirium
- **Permanent cognitive impairment:** Delirium may unmask or accelerate underlying dementia
- **ICU delirium (CAM-ICU positive):** Very common; associated with PTSD, cognitive decline post-ICU — mobilize early, reduce sedation, sleep hygiene

### Patho In One Line

**Precipitating insult** (infection, medication, metabolic, hypoxia) meets vulnerable brain (elderly, dementia)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes (mnemonic: DELIRIUM):** **D**rugs (anticholinergics, opioids, benzodiazepines, steroids), **E**lectrolyte disturbances (Na, Ca, Mg), **L**ow oxygen/CO retention (hypoxia, hypercapnia), **I**nfections (UTI, pneumonia, sepsis), **R**etention (urinary, fecal), **I**nfarction (stroke, TIAs), **U**remia/liver failure (metabolic encephalopathy)
- **Modifiable Risk Factors:** Polypharmacy, alcohol withdrawal, sleep deprivation, immobility, dehydration, pain
- **Non-Modifiable Risk Factors:** Age >65, prior cognitive impairment (biggest risk factor), severe underlying illness, dementia, depression
- **Pathways:** Acute illness or medication → cytokine release, neurotransmitter dysregulation (especially acetylcholine deficiency, dopamine excess), HPA axis activation → disrupted cortical and subcortical processing → impaired attention, memory, and consciousness

### What Confirms It

- **CBC, CMP, LFTs, renal function** (metabolic, infection, organ failure)
- **ABG/VBG** (hypoxia, hypercapnia, acidosis)
- **Thyroid panel** (hypo/hyperthyroidism)
- **Vitamin B12, folate** (deficiency)
- **Urinalysis + urine culture** (UTI — #1 cause of delirium in elderly)
- **Blood cultures, CXR** (occult infection)

## Nursing Lens

### Nursing Priorities

**Identify and Treat Underlying Cause:** Delirium is a symptom of something — work up systematically (infections, medications, metabolic, hypoxia); nursing assessment drives diagnosis

**Non-Pharmacological Environmental Control:** Use CAM assessment each shift; cluster care; orient patient frequently; family presence; reduce stimulation; manage pain proactively

### Red Flags

- **Prolonged delirium:** Increases hospital stay 3–5x, institutionalization, mortality; ~40% mortality at 6 months in ICU delirium
- **Permanent cognitive impairment:** Delirium may unmask or accelerate underlying dementia
- **ICU delirium (CAM-ICU positive):** Very common; associated with PTSD, cognitive decline post-ICU — mobilize early, reduce sedation, sleep hygiene

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Hyperactive delirium vs. dementia — which finding indicates delirium?" → Fluctuating level of consciousness, acute onset, inattention — delirium is ACUTE; dementia is INSIDIOUS
- **Sundowning:** Worsening of confusion in the evening — classic delirium pattern; don''t miss hypoactive delirium — it presents as "quiet" and is often dismissed
- **The big distinction:** Delirium = acute onset + fluctuating + inattention + altered consciousness. Dementia = gradual onset + progressive + consciousness preserved until late

## Related

- [[dementia]]
- [[encephalopathies]]
- [[haloperidol]]
- [[quetiapine]]
- [[seizures-and-epilepsy]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('acute-kidney-injury-aki', 'Acute Kidney Injury (AKI)', 'disease', '# Acute Kidney Injury (AKI)

## Study Snapshot

### What It Is

AKI is an abrupt decline in kidney function causing reduced filtration, fluid/electrolyte imbalance, and waste retention. It is often reversible if the cause is found and treated quickly. Delayed recognition can progress to life-threatening complications.

> **The Simplified View:** "Kidneys suddenly stop filtering well, so fluid and toxins back up fast."

### Why It Matters

- Hyperkalemic arrhythmias
- Progression to CKD or dialysis dependence

### Patho In One Line

Renal perfusion drop or nephron injury occurs

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Prerenal hypoperfusion, intrinsic injury (ATN), postrenal obstruction
- **Modifiable Risk Factors:** Nephrotoxic drugs, dehydration, contrast exposure
- **Non-Modifiable Risk Factors:** Older age, CKD, diabetes, heart failure
- **Pathways:** Ischemic, toxic, inflammatory, obstructive

### What You See

- Renal: Oliguria — Reduced filtration/perfusion
- Cardiorespiratory: Edema/crackles — Fluid retention
- Neuro: Confusion/lethargy — Uremic toxin buildup

### What Confirms It

No single test; diagnosis by KDIGO criteria (creatinine rise and/or urine output decline).

## Nursing Lens

### Nursing Priorities

**Monitoring:** strict I&O, daily weights, trend labs.
**Safety:** arrhythmia/sepsis/respiratory compromise surveillance.

### Red Flags

- Hyperkalemic arrhythmias
- Progression to CKD or dialysis dependence

### Treatment Themes

- Stop nephrotoxins and adjust drug dosing to renal function
- Treat hyperkalemia urgently when present
- Diuretics for volume overload (not for "fixing" AKI itself)
- Dialysis when refractory electrolyte/acid-base/volume or uremic complications occur

## Exam Layer

### Exam Clues

- Rising creatinine can precede dramatic symptoms.
- Oliguria is important but AKI can be non-oliguric.

## Related

- [[chronic-kidney-disease-ckd]]
- [[glomerulonephritis]]
- [[hemolytic-uremic-syndrome-hus]]
- [[nephroblastoma-wilms-tumor]]
- [[nephrolithiasis-kidney-stones]]
- [[pyelonephritis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('alzheimer-s-disease', 'Alzheimer''s Disease', 'disease', '# Alzheimer''s Disease

## Study Snapshot

### What It Is

Alzheimer''s disease is a progressive neurodegenerative disorder causing memory loss, cognitive decline, and impaired function. Pathology includes beta-amyloid plaques and tau neurofibrillary tangles leading to synaptic and neuronal loss.

> **The Simplified View:** "Brain wiring slowly deteriorates, first memory, then function and independence."

### Why It Matters

- Delirium superimposed on dementia
- Caregiver burnout and placement crises

### Patho In One Line

Amyloid/tau accumulation disrupts synapses

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Multifactorial neurodegeneration with amyloid/tau pathology
- **Modifiable Risk Factors:** Vascular risk burden, inactivity, low cognitive/social engagement
- **Non-Modifiable Risk Factors:** Age, APOE-e4/genetics, family history
- **Pathways:** Degenerative + inflammatory + vascular overlap

### What You See

- Neurocognitive: Short-term memory loss — Hippocampal dysfunction
- Behavioral: Apathy/agitation — Frontal-limbic involvement
- Functional: ADL dependence — Global cortical decline

### What Confirms It

Definitive diagnosis is neuropathology (postmortem); clinical diagnosis uses cognitive testing + history.

## Nursing Lens

### Nursing Priorities

**Safety:** falls, wandering, medication supervision.
**Support:** caregiver teaching, routines, communication strategies.

### Red Flags

- Delirium superimposed on dementia
- Caregiver burnout and placement crises

### Treatment Themes

- Cholinesterase inhibitors (e.g., donepezil) for symptom support
- Memantine for moderate-severe disease
- Targeted behavioral symptom meds only when necessary

## Exam Layer

### Exam Clues

- Treat reversible causes of cognitive decline before labeling dementia progression.
- Consistent routines reduce agitation.

## Related

- [[cerebrovascular-disease-stroke]]
- [[dementia]]
- [[frontotemporal-dementia]]
- [[parkinsons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('amyotrophic-lateral-sclerosis-als', 'Amyotrophic Lateral Sclerosis (ALS)', 'disease', '# Amyotrophic Lateral Sclerosis (ALS)

## Study Snapshot

### What It Is

ALS is a progressive degeneration of upper and lower motor neurons causing weakness, atrophy, spasticity, and eventual respiratory failure. Sensation is usually preserved early, while motor function declines relentlessly.

> **The Simplified View:** "The movement command cables fail while awareness is often intact."

### Why It Matters

- Aspiration pneumonia
- Respiratory failure and end-of-life planning needs

### Patho In One Line

Motor neuron degeneration begins

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Mostly sporadic; some familial mutations (e.g., C9orf72, SOD1)
- **Modifiable Risk Factors:** Limited proven modifiable factors
- **Non-Modifiable Risk Factors:** Age, sex, family history/genetics
- **Pathways:** Neurodegenerative excitotoxic and inflammatory mechanisms

### What You See

- Neuromuscular: Progressive weakness — Motor neuron loss
- Bulbar: Dysarthria/dysphagia — Cranial motor pathway involvement
- Respiratory: Dyspnea/orthopnea — Diaphragm weakness

### What Confirms It

Clinical diagnosis supported by EMG/NCS and exclusion of mimics.

## Nursing Lens

### Nursing Priorities

**Airway/Breathing:** monitor FVC, sleep/ventilation symptoms.
**Nutrition/Communication:** swallowing safety, PEG timing, assistive communication.

### Red Flags

- Aspiration pneumonia
- Respiratory failure and end-of-life planning needs

### Treatment Themes

- Riluzole and edaravone (selected patients)
- Symptom-directed meds (spasticity, sialorrhea, pseudobulbar affect)

## Exam Layer

### Exam Clues

- Sensory findings are usually minimal; motor decline dominates.
- Early advance-care planning is key.

## Related

- [[multiple-sclerosis-ms]]
- [[parkinsons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('appendicitis', 'Appendicitis', 'disease', '# Appendicitis

## Study Snapshot

### What It Is

[[appendicitis|Appendicitis]] is inflammation of the vermiform appendix, usually from luminal obstruction. Rising intraluminal pressure reduces blood flow, leading to ischemia, infection, and possible perforation.

> **The Simplified View:** "The appendix gets blocked, swells, loses blood flow, then can rupture and contaminate the abdomen."

### Why It Matters

- Perforation
- Peritonitis
- Abscess formation

### Patho In One Line

Appendix lumen becomes obstructed.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** obstruction by stool, foreign body, tumor, infection
- **Modifiable Risk Factors:** not many practical day-to-day ones
- **Non-Modifiable Risk Factors:** age distribution peaks younger, but can occur anytime
- **Pathways:** obstruction → pressure ↑ → ischemia → bacterial invasion → perforation

### What You See

- GI: Periumbilical pain migrating to RLQ — Inflammation spreads from visceral to parietal peritoneum
- GI: Nausea/vomiting/anorexia — Inflammatory GI response
- GI: Rebound tenderness RLQ — Peritoneal irritation

### What Confirms It

Clinical picture supported by ultrasound or CT.

## Nursing Lens

### Nursing Priorities

**Keep NPO and move fast toward surgery/workup.**  
**Monitor for perforation/peritonitis.**  
**Post-op infection and pain management.**

### Red Flags

- Perforation
- Peritonitis
- Abscess formation

### Treatment Themes

- Antibiotics
- Analgesia
- Perioperative meds as ordered

## Exam Layer

### Exam Clues

- Classic sequence: vague periumbilical pain → RLQ pain.  
- Rebound tenderness matters.  
- This is a surgical emergency question more than a cozy GI complaint.

## Related

- [[crohns-disease]]
- [[diverticular-disease]]
- [[Gastroenteritis]]
- [[intussusception]]
- [[Mesenteric Ischemia]]
- [[Ovarian Torsion]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('atopic-dermatitis-eczema', 'Atopic Dermatitis (Eczema)', 'disease', '# Atopic Dermatitis (Eczema)

## Study Snapshot

### What It Is

Atopic dermatitis is a chronic relapsing inflammatory skin condition driven by barrier dysfunction and immune dysregulation. It causes pruritic, dry, inflamed skin and can significantly impact sleep and quality of life.

> **The Simplified View:** "Leaky skin barrier + overreactive immune response = itch-inflammation cycle."

### Why It Matters

- Secondary bacterial/viral skin infection
- Psychosocial burden from chronic itch/sleep loss

### Patho In One Line

Skin barrier disruption increases transepidermal water loss

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Genetic barrier defects (e.g., filaggrin), immune dysregulation
- **Modifiable Risk Factors:** Irritants, allergens, harsh soaps, dry climate
- **Non-Modifiable Risk Factors:** Family history of atopy, early childhood predisposition
- **Pathways:** Inflammatory (Type 2 dominant), barrier disruption

### What You See

- Skin: Intense pruritus — Inflammatory mediator release
- Skin: Erythematous patches/plaques — Immune activation
- Skin: Lichenification — Chronic scratching trauma

### What Confirms It

Clinical diagnosis by pattern, chronicity, and itch.

## Nursing Lens

### Nursing Priorities

**Skin Care:** moisturizer adherence and trigger control.
**Infection Watch:** monitor for impetiginization and sleep disruption.

### Red Flags

- Secondary bacterial/viral skin infection
- Psychosocial burden from chronic itch/sleep loss

### Treatment Themes

- Emollients as foundation therapy
- Topical corticosteroids for flares
- Topical calcineurin inhibitors for sensitive areas
- Biologics/systemic therapy in severe refractory disease

## Exam Layer

### Exam Clues

- Moisturizers are core treatment, not optional add-ons.
- Avoid overuse of high-potency steroids on thin skin areas.

## Related

- [[acne-vulgaris]]
- [[psoriasis-papulosquamous-disorder]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('autonomic-hyperreflexia', 'Autonomic Hyperreflexia', 'disease', '# Autonomic Hyperreflexia

## Study Snapshot

### What It Is

Autonomic hyperreflexia (AH) is a life-threatening autonomic dysreflexia occurring in patients with spinal cord injuries above T6. It results from an exaggerated sympathetic response to stimuli below the lesion level that cannot be modulated by descending inhibitory pathways. The condition causes a sudden, massive, unopposed sympathetic discharge triggered by stimuli that would normally cause only a mild autonomic response — leading to severe, potentially catastrophic hypertension. It is a true neurological emergency requiring immediate identification and treatment.

> **The Simplified View:** "Below the injury, the body can still sense things and respond — but the brain''s ''brake pedal'' can''t reach that part of the nervous system anymore. So a full bladder or bowel impaction triggers a runaway sympathetic ''gas pedal'' response with no way to apply the brakes. The blood pressure skyrockets, which can cause stroke."

### Why It Matters

- **Hypertensive stroke:** Most feared complication — severe HTN can cause intracerebral hemorrhage
- **Seizures:** From severe hypertension
- **Cardiac arrest:** Severe bradycardia + hypertension + vagal overflow can be catastrophic
- **Recurrence:** Without proper trigger prevention and patient education, AH recurs

### Patho In One Line

**Stimulus below T6** (bladder distention, bowel impaction, skin irritation)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes/Triggers:** Bladder distention (most common — 75–85% of cases; urinary catheter blockage, kink, or full bladder), bowel impaction (fecal impaction, bowel program irritation), skin stimulation (pressure injuries, burns, ingrown toenails, tight clothing), fractures or trauma below lesion level, sexual activity, menstrual cramps, vaginal deliveries, hemorrhoids
- **Non-Modifiable Risk Factors:** SCI at T6 or above; injuries older than several weeks (spinal shock must have resolved for AH to occur)
- **Pathways:** Stimulus below T6 → afferent signal travels to spinal cord → massive sympathetic discharge from thoracolumbar sympathetic chain → vasoconstriction below lesion level → severe hypertension → baroreceptors in carotids and aortic arch detect HTN → vagal-mediated bradycardia and vasodilation ABOVE the lesion (but this cannot reach below) → paradox: bradycardia + severe HTN simultaneously

### What You See

- Cardio: [sudden severe hypertension — 200+/100+ mmHg] — Massive sympathetic discharge below lesion
- Cardio: [bradycardia — reflex slowing from vagal response] — Baroreceptor reflex attempting to lower BP
- Cardio: [pallor and vasoconstriction below lesion] — Sympathetic vasoconstriction isolated below lesion
- Cardio: [flushing and warmth above lesion] — Sympathetic overflow above lesion
- Neuro: [throbbing headache — occipital, sudden onset] — Rapid rise in cerebral blood pressure
- Neuro: [blurred vision, visual disturbances] — Hypertensive emergency effects on retina/brain

### What Confirms It

Clinical diagnosis — based on history (SCI patient with sudden HTN + bradycardia + flushing above lesion) and removal of trigger with resolution of symptoms; no time for tests in acute setting

## Nursing Lens

### Nursing Priorities

**Emergency Recognition and Rapid Response:** This is a nursing emergency — recognize as urgent and anticipate protocol-based escalation; begin protocol immediately: sit patient up, remove triggers, check BP every 1–2 minutes, anticipate ordered antihypertensives as ordered

**Trigger Prevention in Chronic SCI Patients:** Routine bowel/bladder programs; catheter care; pressure injury prevention; patient education for self-recognition and self-treatment

### Red Flags

- **Hypertensive stroke:** Most feared complication — severe HTN can cause intracerebral hemorrhage
- **Seizures:** From severe hypertension
- **Cardiac arrest:** Severe bradycardia + hypertension + vagal overflow can be catastrophic
- **Recurrence:** Without proper trigger prevention and patient education, AH recurs

### Patient Teaching Cues

* Teach self-recognition of early signs (flushing, headache, BP elevation)
* Teach bladder management to prevent retention
* Teach bowel program to prevent impaction
* Carry emergency medical alert card with protocol
* Medications to have on hand: nitropaste, nifedipine

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "A patient with T4 SCI suddenly develops severe hypertension and bradycardia — what do you do FIRST?" → Sit them upright (if spine stable), then check for bladder distention and remove trigger — this is autonomic hyperreflexia until proven otherwise
- **The mnemonic for triggers:** "The 5 B''s" — Bladder (most common), Bowel, Skin (breaks), Bones (fractures), Boots (tight clothing)
- **The dangerous paradox:** Hypertension + bradycardia = autonomic hyperreflexia (not hypovolemic shock which is tachycardia)

## Related

- [[neurogenic-bladder]]
- [[nifedipine]]
- [[nitroglycerin]]
- [[spinal-cord-injury]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('brain-trauma', 'Brain Trauma', 'disease', '# Brain Trauma

## Study Snapshot

### What It Is

Brain trauma (TBI) encompasses a spectrum from mild concussion to severe penetrating injury. The key concept is PRIMARY injury (the direct mechanical damage at moment of impact — contusion, laceration, diffuse axonal injury) versus SECONDARY injury (the cascade of ischemia, edema, excitotoxicity, and inflammation that develops over hours to days and is largely preventable with proper management). Nursing and medical care focuses on preventing secondary injury by maintaining cerebral perfusion, preventing hypoxia, and controlling intracranial pressure.

> **The Simplified View:** "The initial blow is the ''earthquake'' — what matters is what happens after, when the fires start (ischemia, swelling, chemical cascade) and whether we can put them out before the brain is destroyed."

### Why It Matters

- **Epidural hematoma with lucid interval:** Classic board question — patient talks, then deteriorates rapidly → EMS must be ready to rush to OR
- **Diffuse axonal injury:** CT may look almost normal but patient is severely impaired; MRI more sensitive
- **Chronic subdural in elderly:** Minimal trauma can cause significant bleeding — watch anticoagulated elderly with headaches and confusion
- **Post-concussive syndrome:** Headache, dizziness, cognitive changes for weeks to months after concussion

### Patho In One Line

**Mechanical insult** — acceleration/deceleration, direct impact, penetrating wound

## Clinical Pattern

### What You See

- Neuro: [Glasgow Coma Scale — document each assessment] — Objective measure of consciousness and severity
- Neuro: [headache, confusion, LOC] — Direct injury + rising ICP
- Neuro: [pupillary changes — blown pupil (CN III)] — Uncal herniation compressing CN III
- Neuro: [hemiparesis — contralateral] — Corticospinal tract compression
- Neuro: [seizures — post-traumatic] — Cortical irritation from contusion/hematoma
- Neuro: [CSF rhinorrhea/otorrhea] — Basilar skull fracture — CSF leak

### What Confirms It

- CBC (hemoglobin, hematocrit — delayed blood loss may not show initially)
- Coagulation panel (INR, PT, PTT — coagulopathy worsens bleeding; anticoagulated patients at higher risk)
- Toxicology screen (alcohol/drugs common co-factors)
- ABG (hypoxia, hypercapnia — worsens secondary injury)
- Serum osmolality (monitor for mannitol therapy)

## Nursing Lens

### Nursing Priorities

**Neurological Assessment (Frequent & Serial):** GCS every 1–2 hours initially; pupillary response, motor strength, vital signs; detect deterioration EARLY — notify physician for any decline in GCS ≥2 points, new pupillary asymmetry, or hemodynamic changes

**ICP Management:** Maintain HOB 30 degrees (venous drainage); avoid neck flexion; maintain normal temperature; adequate sedation and analgesia; maintain MAP to keep CPP 60–70 mmHg; avoid hypotension

### Red Flags

- **Epidural hematoma with lucid interval:** Classic board question — patient talks, then deteriorates rapidly → EMS must be ready to rush to OR
- **Diffuse axonal injury:** CT may look almost normal but patient is severely impaired; MRI more sensitive
- **Chronic subdural in elderly:** Minimal trauma can cause significant bleeding — watch anticoagulated elderly with headaches and confusion
- **Post-concussive syndrome:** Headache, dizziness, cognitive changes for weeks to months after concussion

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Epidural hematoma classic triad: head trauma + lucid interval + rapid neurological deterioration" → This is a SURGICAL EMERGENCY — prepare for craniotomy, not just medications
- **GCS interpretation:** GCS ≤8 = severe TBI, intubate for airway protection; GCS 9–12 = moderate; GCS 13–15 = mild
- **The critical numbers:** CPP = MAP – ICP; target CPP 60–70 mmHg; ICP <20 mmHg; MAP must be maintained

## Related

- [[cerebral-edema]]
- [[concussion]]
- [[fentanyl]]
- [[hematomas]]
- [[levetiracetam]]
- [[mannitol]]
- [[spinal-cord-injury]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('celiac-disease', 'Celiac Disease', 'disease', '# Celiac Disease

## Study Snapshot

### What It Is

Celiac disease is an autoimmune disorder triggered by dietary gluten (wheat, barley, rye) that causes immune-mediated destruction of small intestinal villi, leading to malabsorption. Also called nontropical sprue or celiac sprue.

> **The Simplified View:** "Gluten triggers the immune system to attack the gut lining, flattening the absorptive surface."

### Why It Matters

- Refractory celiac disease (no response to GFD)
- ↑ Risk of intestinal lymphoma and small bowel adenocarcinoma
- Osteoporosis from chronic calcium/vitamin D malabsorption
- Infertility, recurrent miscarriage
- Neurological complications (ataxia, peripheral neuropathy)

### Patho In One Line

Gluten (gliadin) crosses damaged intestinal barrier

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Gluten protein (gliadin fraction) triggers autoimmune response
- **Modifiable Risk Factors:** Gluten ingestion (the trigger itself)
- **Non-Modifiable Risk Factors:** HLA-DQ2/DQ8 genotype, family history, associated autoimmune conditions (Type 1 DM, thyroid disease)
- **Pathways:** Autoimmune → tissue transglutaminase (tTG) antibodies → villous atrophy → malabsorption

### What You See

- GI: Chronic diarrhea, bloating, flatulence — Malabsorption, villous damage
- GI: Steatorrhea (fatty stools) — Fat malabsorption
- Hematologic: Iron-deficiency anemia — ↓ Iron absorption in damaged duodenum
- Musculoskeletal: Osteoporosis / bone pain — ↓ Calcium + vitamin D absorption
- Integumentary: Dermatitis herpetiformis (itchy vesicles) — IgA deposits; gluten-linked
- Pediatric: Growth failure, delayed puberty — Chronic malnutrition

### What Confirms It

**Small intestinal biopsy** (via upper endoscopy) — villous atrophy, crypt hyperplasia, intraepithelial lymphocytosis

## Nursing Lens

### Nursing Priorities

**Dietary Education:** Lifelong strict GFD; hidden gluten sources (sauces, medications, cross-contamination); read labels

**Nutritional Assessment:** Monitor CBC, iron studies, bone density, vitamin levels; coordinate dietitian referral

**Surveillance:** Monitor symptom resolution with GFD; screen for associated autoimmune conditions; bone density monitoring

### Red Flags

- Refractory celiac disease (no response to GFD)
- ↑ Risk of intestinal lymphoma and small bowel adenocarcinoma
- Osteoporosis from chronic calcium/vitamin D malabsorption
- Infertility, recurrent miscarriage
- Neurological complications (ataxia, peripheral neuropathy)

## Exam Layer

### Exam Clues

- Celiac = autoimmune, NOT allergy or intolerance
- tTG IgA = screening; biopsy = commonly tested confirmation clue
- Treatment is dietary, NOT pharmacologic (GFD for life)
- Dermatitis herpetiformis = skin manifestation, pathognomonic
- Associated with Type 1 DM and thyroid disease
- Villous atrophy = ↓ absorptive surface → malabsorption of everything

## Related

- [[crohns-disease]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cerebral-edema', 'Cerebral Edema', 'disease', '# Cerebral Edema

## Study Snapshot

### What It Is

Cerebral edema is the pathological accumulation of fluid within the brain parenchyma, leading to increased brain volume and raised intracranial pressure (ICP). The skull is a rigid container — when brain volume increases, ICP rises unless displaced fluid finds an exit (which it largely cannot). This is a neurological emergency because even modest ICP elevations compromise cerebral perfusion, and severe elevations cause herniation — the deadly final common pathway of many intracranial catastrophes.

> **The Simplified View:** "The brain sits inside a hard skull with nowhere to expand — when it swells, the pressure builds and parts of the brain get squeezed through the openings, cutting off their blood supply."

### Why It Matters

- **Herniation syndromes:** Uncal (CN III palsy, contralateral hemiparesis, decreased LOC); transtentorial (Cushing''s triad, bilateral pupillary changes); tonsillar (cardiorespiratory arrest from brainstem compression)
- **Cerebral perfusion failure:** CPP <50–60 mmHg → global ischemia; brain death
- **Rebound edema:** After abrupt discontinuation of osmotic therapy — gradual taper preferred

### Patho In One Line

**Insult to brain** (ischemia, trauma, tumor, infection) → disrupted BBB or cellular energy failure

## Clinical Pattern

### What You See

- Neuro: [headache — worse AM, worse with cough/strain/bending] — Raised ICP — venous congestion with head-down position
- Neuro: [papilledema — optic disc swelling] — Increased CSF pressure transmitted to optic nerve sheath
- Neuro: [vomiting — projectile, without nausea] — Direct brainstem compression
- Neuro: [decreased LOC, confusion, lethargy] — Cortical compression and brainstem involvement
- Neuro: [Cushing''s triad — hypertension, bradycardia, irregular respirations] — Brainstem compression — Cushing''s reflex
- EENT: [blurred vision, diplopia, CN VI palsy] — Abducens nerve (VI) — long intracranial course — "false localizer"

### What Confirms It

- Serum osmolality (check for osmotic edema, monitor mannitol therapy)
- Sodium (hyponatremia → cerebral edema)
- ABG (hypoxia, hypercapnia worsens cerebral vasodilation → raises ICP)
- CBC, cultures (rule out CNS infection)

## Nursing Lens

### Nursing Priorities

**ICP Monitoring & Neurological Assessments:** Maintain head of bed at 30 degrees (promotes venous drainage); avoid neck flexion/rotation (impairs jugular venous outflow); keep environment calm (pain, agitation raise ICP); perform frequent neuro checks (LOC, pupillary response, motor strength); maintain normal temperature

**Airway & Breathing in Raised ICP:** Ensure adequate oxygenation (PaO2 >80); avoid hypercapnia (CO2 is cerebral vasodilator — raises ICP); prepare for emergent intubation if GCS ≤8 (airway protection); hyperventilate only as temporizing measure

### Red Flags

- **Herniation syndromes:** Uncal (CN III palsy, contralateral hemiparesis, decreased LOC); transtentorial (Cushing''s triad, bilateral pupillary changes); tonsillar (cardiorespiratory arrest from brainstem compression)
- **Cerebral perfusion failure:** CPP <50–60 mmHg → global ischemia; brain death
- **Rebound edema:** After abrupt discontinuation of osmotic therapy — gradual taper preferred

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "A patient with raised ICP has a blown pupil (dilated, non-reactive) — what does this indicate?" → Uncal herniation compressing CN III — this is a neurological emergency requiring immediate intervention
- **Cushing''s triad:** Hypertension + bradycardia + irregular respirations = imminent herniation — notify physician IMMEDIATELY
- **The "C" in CPP:** CPP = MAP – ICP; to raise CPP, either raise MAP (vasopressors) or lower ICP — the nursing priority is ALWAYS to lower ICP first

## Related

- [[brain-trauma]]
- [[cerebrovascular-disease-stroke]]
- [[dexamethasone]]
- [[hydrocephalus]]
- [[mannitol]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cerebrovascular-disease-stroke', 'Cerebrovascular Disease (Stroke)', 'disease', '# Cerebrovascular Disease (Stroke)

## Study Snapshot

### What It Is

Stroke is acute neurological dysfunction caused by interrupted cerebral blood flow (ischemic) or intracranial hemorrhage (hemorrhagic). Time-sensitive reperfusion or bleeding control determines outcomes.

> **The Simplified View:** "Brain tissue is starved of blood or compressed by bleeding—every minute matters."

### Why It Matters

- Hemorrhagic transformation or expanding hematoma
- Post-stroke depression and long-term disability burden

### Patho In One Line

Vessel occlusion or rupture occurs

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Thrombotic/embolic occlusion, intracerebral hemorrhage
- **Modifiable Risk Factors:** Hypertension, smoking, diabetes, atrial fibrillation, dyslipidemia
- **Non-Modifiable Risk Factors:** Age, prior stroke/TIA, genetics
- **Pathways:** Ischemic vs hemorrhagic vascular injury

### What You See

- Neuro: Facial droop, weakness, aphasia — Focal cerebral injury
- Neuro: Vision loss/neglect — Specific vascular territory involvement
- Cardiorespiratory: Aspiration risk — Bulbar dysfunction and impaired swallow

### What Confirms It

Immediate non-contrast head CT to distinguish ischemic vs hemorrhagic stroke.

## Nursing Lens

### Nursing Priorities

**Time Critical:** stroke alert workflow, neuro checks, airway/swallow safety.
**Prevention:** aspiration, DVT, pressure injuries, early rehab support.

### Red Flags

- Hemorrhagic transformation or expanding hematoma
- Post-stroke depression and long-term disability burden

### Treatment Themes

- Ischemic: thrombolysis/thrombectomy candidates, antiplatelet/anticoagulation strategy
- Hemorrhagic: BP control, reversal of anticoagulation, neurosurgical consultation
- Secondary prevention: antihypertensive, statin, antithrombotic plan

## Exam Layer

### Exam Clues

- Never delay imaging in suspected stroke.
- Correct hypoglycemia mimics early.

## Related

- [[alzheimers-disease]]
- [[dementia]]
- [[diabetes-mellitus]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cholelithiasis-and-cholecystitis', 'Cholelithiasis and Cholecystitis', 'disease', '# Cholelithiasis and Cholecystitis

## Study Snapshot

### What It Is

[[Cholelithiasis]] is gallstone formation, usually from cholesterol imbalance in bile. [[Cholecystitis]] is inflammation of the gallbladder, usually because a stone gets stuck in the cystic duct and blocks drainage.

> **The Simplified View:** "Stones clog the gallbladder plumbing, then pressure and inflammation make the whole thing angry."

### Why It Matters

- Gallbladder necrosis/perforation
- Common bile duct obstruction
- [[pancreatitis|Pancreatitis]]

### Patho In One Line

Cholesterol/bile imbalance forms stones.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** cholesterol stones, bile imbalance, cystic duct obstruction
- **Modifiable Risk Factors:** obesity, rapid weight loss, diet patterns
- **Non-Modifiable Risk Factors:** female sex, middle age, some ancestry/genetic risks
- **Pathways:** bile supersaturation → stones → obstruction → inflammation ± infection

### What You See

- GI: RUQ or epigastric pain after fatty meal — Gallbladder contracts against obstructing stone
- GI: Pain radiating to back/right shoulder — Referred biliary pain
- GI: Murphy''s sign — Inflamed gallbladder is sharply tender with inspiration
- Skin/Eyes: Jaundice — Possible common bile duct obstruction

### What Confirms It

Ultrasound is the usual first-line study; cholescintigraphy is highly sensitive for cholecystitis.

## Nursing Lens

### Nursing Priorities

**Control pain and inflammation.**  
**Keep them NPO if acute and prep for imaging/surgery.**  
**Watch for obstruction, jaundice, sepsis, or pancreatitis.**

### Red Flags

- Gallbladder necrosis/perforation
- Common bile duct obstruction
- [[pancreatitis|Pancreatitis]]

### Treatment Themes

- Laparoscopic cholecystectomy
- Endoscopic management if bile duct obstruction

## Exam Layer

### Exam Clues

- RUQ pain after fatty foods = think gallbladder.  
- Murphy''s sign matters.  
- Cholelithiasis = stones; cholecystitis = inflammation.

## Related

- [[Acute Pyelonephritis]]
- [[Cholecystitis]]
- [[Cholelithiasis]]
- [[cirrhosis]]
- [[pancreatitis]]
- [[peptic-ulcer-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('chronic-kidney-disease-ckd', 'Chronic Kidney Disease (CKD)', 'disease', '# Chronic Kidney Disease (CKD)

## Study Snapshot

### What It Is

CKD is a persistent decline in kidney structure/function over months to years, often irreversible. Progressive nephron loss impairs fluid, electrolyte, endocrine, and toxin clearance functions.

> **The Simplified View:** "Kidney filtering capacity slowly declines until complications and replacement therapy may be needed."

### Why It Matters

- Hyperkalemia and arrhythmia risk
- Cardiovascular disease as leading mortality driver

### Patho In One Line

Initial nephron injury reduces functional reserve

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Diabetes, hypertension, glomerular disease
- **Modifiable Risk Factors:** BP/glucose control, smoking, nephrotoxin exposure
- **Non-Modifiable Risk Factors:** Age, family history, baseline nephron mass
- **Pathways:** Progressive nephron loss with maladaptive hyperfiltration

### What You See

- Renal: Nocturia/foamy urine — Concentrating/protein handling impairment
- Heme: Fatigue/anemia — Reduced erythropoietin
- Cardiovascular: Edema/HTN — Sodium-water retention and RAAS effects

### What Confirms It

Diagnosis by persistent eGFR reduction and/or albuminuria over ≥3 months.

## Nursing Lens

### Nursing Priorities

**Monitoring:** trend kidney function and complication labs.
**Education:** diet/med adherence, nephrotoxin avoidance, dialysis planning literacy.

### Red Flags

- Hyperkalemia and arrhythmia risk
- Cardiovascular disease as leading mortality driver

### Treatment Themes

- RAAS blockade and BP optimization
- Glucose management, SGLT2 inhibitors when indicated
- Complication treatment: anemia, acidosis, CKD-MBD management

## Exam Layer

### Exam Clues

- Albuminuria can precede severe eGFR decline.
- Dose-adjust many drugs to kidney function.

## Related

- [[acute-kidney-injury-aki]]
- [[albumin]]
- [[diabetes-mellitus]]
- [[glomerulonephritis]]
- [[nephrotic-syndrome]]
- [[pyelonephritis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cirrhosis', 'Cirrhosis', 'disease', '# Cirrhosis

## Study Snapshot

### What It Is

[[cirrhosis|Cirrhosis]] is an irreversible fibrotic liver disease caused by chronic cellular injury with disordered regeneration. Scar tissue distorts hepatic architecture, obstructs biliary channels and blood flow, and drives [[Portal Hypertension]], ascites, varices, and liver failure.

> **The Simplified View:** "The liver gets scarred so badly that blood and bile can’t move through it properly."

### Why It Matters

- [[Portal Hypertension]] → varices, ascites, splenomegaly
- [[Hepatic Encephalopathy]] from toxin accumulation
- Hepatorenal syndrome / renal failure
- Spontaneous bacterial peritonitis

### Patho In One Line

Chronic liver injury activates inflammatory cells and hepatic stellate cells.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** alcohol-related liver disease, viral hepatitis, metabolic liver disease, NAFLD/NASH
- **Modifiable Risk Factors:** alcohol use, obesity, hepatotoxic exposures
- **Non-Modifiable Risk Factors:** underlying chronic liver disease, some genetic/metabolic conditions
- **Pathways:** chronic inflammation → fibrosis → nodules → portal hypertension + liver dysfunction

### What You See

- GI/Hepatic: Ascites — Portal hypertension + low albumin shift fluid into peritoneum
- GI: Esophageal varices / GI bleed — Portal venous pressure backs up into collateral vessels
- Neuro: Confusion, asterixis — Neurotoxins not cleared → [[Hepatic Encephalopathy]]
- Resp: Dyspnea / can''t tolerate high HOB changes well with massive abdomen — Ascites pushes on diaphragm
- Skin/Eyes: Jaundice — Impaired bilirubin handling

### What Confirms It

Liver biopsy is definitive, though clinical/lab picture often makes diagnosis clear.

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Watch for decompensation:** bleeding, encephalopathy, respiratory compromise from ascites.  
**Manage fluid status:** weights, girth, I/O, edema, electrolytes.

### Red Flags

- [[Portal Hypertension]] → varices, ascites, splenomegaly
- [[Hepatic Encephalopathy]] from toxin accumulation
- Hepatorenal syndrome / renal failure
- Spontaneous bacterial peritonitis

## Exam Layer

### Exam Clues

- Massive ascites can impair breathing because it pushes up on the diaphragm.
- Most important nursing watch item: bleeding + mental-status changes.
- Know early manifestations before the end-stage picture appears.

## Related

- [[albumin]]
- [[Alcohol Use Disorder]]
- [[cholelithiasis-and-cholecystitis]]
- [[furosemide]]
- [[gerd]]
- [[Hepatic Encephalopathy]]
- [[lactulose]]
- [[NAFLD]]
- [[pancreatitis]]
- [[peptic-ulcer-disease]]
- [[Portal Hypertension]]
- [[spironolactone]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cns-infections', 'CNS Infections', 'disease', '# CNS Infections

## Study Snapshot

### What It Is

CNS infections are life-threatening conditions involving the brain parenchyma (encephalitis), meninges (meningitis), or brain abscess. The blood-brain barrier (BBB) — a specialized endothelial barrier that limits drug penetration — is both a therapeutic challenge and a key pathophisiological concept. Meningitis presents with fever, neck stiffness, and altered mental status (classic triad); encephalitis adds focal neurological deficits and behavioral changes. These are medical emergencies requiring immediate empiric antibiotic/antiviral therapy before culture results return.

> **The Simplified View:** "The brain and spinal cord are wrapped in layers of protective membranes (the meninges) and float in cerebrospinal fluid. Germs can reach these spaces through the bloodstream, through fractures that connect to sinus infections, or directly through the nose/ears. Once inside, the inflammation they cause can be as damaging as the infection itself."

### Why It Matters

- **Cerebral edema and herniation:** From inflammatory response and mass effect — manage with dexamethasone, mannitol
- **Cerebral abscess rupture:** Can cause catastrophic meningitis and ventriculitis
- **Sensorineural hearing loss:** Complication of bacterial meningitis (especially S. pneumoniae) — permanent in 10–20%
- **Waterhouse-Friderichsen syndrome:** Bilateral adrenal hemorrhage from meningococcemia — DIC, shock, rapid death
- **Subdural empyema:** Collection of pus between dura and arachnoid — surgical emergency

## Clinical Pattern

### What You See

- Neuro: [fever + headache + neck stiffness — classic meningitis triad] — Meningeal irritation
- Neuro: [altered mental status — confusion, lethargy] — Cerebral inflammation
- Neuro: [photophobia — light hurts eyes] — Meningeal irritation
- Neuro: [Kernig''s sign — knee extension pain with hip flexed] — Meningeal irritation
- Neuro: [Brudzinski''s sign — neck flexion causes hip flexion] — Meningeal irritation
- Neuro: [focal neuro deficits, seizures — encephalitis] — Brain parenchymal involvement

### What Confirms It

- Blood cultures (positive in ~50% of bacterial meningitis)
- CBC, CRP, ESR (inflammation)
- Serum glucose for comparison with CSF glucose
- HIV test, RPR (associated infections)

## Nursing Lens

### Nursing Priorities

**EMERGENT Antibiotic/Antiviral Therapy:** In suspected bacterial meningitis, empiric antibiotics MUST be given within 30–60 minutes — do NOT delay for LP; if LP must be delayed, give antibiotics BEFORE LP; dexamethasone with or before first antibiotic dose for S. pneumoniae meningitis

**ICP Management and Neurological Monitoring:** HOB 30 degrees; frequent neuro checks; monitor for seizures; isolation precautions for meningococcal meningitis (droplet precautions for N. meningitidis); monitor for syndrome of inappropriate ADH (SIADH)

### Red Flags

- **Cerebral edema and herniation:** From inflammatory response and mass effect — manage with dexamethasone, mannitol
- **Cerebral abscess rupture:** Can cause catastrophic meningitis and ventriculitis
- **Sensorineural hearing loss:** Complication of bacterial meningitis (especially S. pneumoniae) — permanent in 10–20%
- **Waterhouse-Friderichsen syndrome:** Bilateral adrenal hemorrhage from meningococcemia — DIC, shock, rapid death
- **Subdural empyema:** Collection of pus between dura and arachnoid — surgical emergency

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Suspected bacterial meningitis + CT ordered — what do you do?" → Give empiric antibiotics BEFORE CT/LP — don''t wait for imaging to start treatment
- **Classic triad of meningitis:** Fever + nuchal rigidity + altered mental status — but many patients don''t have all three
- **LP findings differentiation:** Bacterial = low glucose, high protein, neutrophil predominance; Viral = normal glucose, mildly elevated protein, lymphocyte predominance; Fungal/TB = low glucose, high protein, lymphocyte predominance

## Related

- [[acyclovir]]
- [[amphotericin-b]]
- [[ampicillin]]
- [[ceftriaxone]]
- [[cerebral-edema]]
- [[encephalopathies]]
- [[fluconazole]]
- [[flucytosine]]
- [[isoniazid]]
- [[meningitis]]
- [[rifampin]]
- [[seizures-and-epilepsy]]
- [[vancomycin]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cns-tumors', 'CNS Tumors', 'disease', '# CNS Tumors

## Study Snapshot

### What It Is

CNS tumors are space-occupying lesions of the brain or spinal cord — primary tumors arising from brain tissue itself or its coverings, or secondary/metastatic tumors from systemic cancers. The key clinical concepts are: (1) symptoms from mass effect (edema, increased ICP) vs. focal neurological deficits from invasion; (2) primary vs. metastatic distinction; (3) tumor grade (I–IV) predicting aggressiveness; (4) treatment modalities (surgery, radiation, chemotherapy, targeted therapy); and (5) the blood-brain barrier''s impact on drug penetration.

> **The Simplified View:** "A brain tumor is like a building with a new room added — it takes up space, pushes things aside, and the construction work (edema) makes everything tighter. The type of room matters — some are slow-growing (low-grade) and some are aggressive construction crews that tear through walls (high-grade)."

### Why It Matters

- **Herniation:** From rapid tumor swelling or post-operative edema — emergency surgical decompression may be needed
- **Radiation necrosis:** Delayed complication of radiation therapy; mass effect from necrotic tissue; treated with steroids or bevacizumab
- **CSF obstruction:** Tumor blocking CSF pathways → acute hydrocephalus → shunt placement needed
- **Cerebral edema refractory to steroids:** Consider bevacizumab (anti-VEGF) or surgical decompression

### Patho In One Line

**Tumor growth** → occupies space in skull

## Clinical Pattern

### What You See

- Neuro: [headache — worse in morning, worse with Valsalva] — Raised ICP from tumor and edema
- Neuro: [focal seizures — Jacksonian march] — Tumor irritates cortex
- Neuro: [generalized tonic-clonic seizure] — Cortical irritation
- Neuro: [hemiparesis — contralateral] — Frontal/parietal lobe tumor
- Neuro: [aphasia — expressive or receptive] — Dominant hemisphere involvement
- Neuro: [visual field defect — bitemporal hemianopsia] — Pituitary tumor or optic chiasm lesion

### What Confirms It

- **AFP, β-hCG:** Germ cell tumors (secreting markers)
- **Prolactin:** Prolactinoma
- **GH, IGF-1:** Acromegaly
- **ACTH, cortisol:** Cushing''s disease
- **LDH, ESR:** Non-specific tumor burden

## Nursing Lens

### Nursing Priorities

**ICP Management and Seizure Safety:** HOB 30 degrees; seizure precautions; assess neuro status frequently; manage headache; avoid Valsalva maneuvers

**Corticosteroid Tapering:** When tumor responds (surgery, radiation, chemo) → taper steroids to avoid long-term effects; do NOT stop abruptly

**Symptom Management:** Pain (opioids as needed), nausea (ondansetron), constipation (stool softeners), skin care for immobility

### Red Flags

- **Herniation:** From rapid tumor swelling or post-operative edema — emergency surgical decompression may be needed
- **Radiation necrosis:** Delayed complication of radiation therapy; mass effect from necrotic tissue; treated with steroids or bevacizumab
- **CSF obstruction:** Tumor blocking CSF pathways → acute hydrocephalus → shunt placement needed
- **Cerebral edema refractory to steroids:** Consider bevacizumab (anti-VEGF) or surgical decompression

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Brain tumor + morning headache + papilledema = raised ICP — manage with corticosteroids, HOB elevation, and prepare for neurosurgical consult"
- **Seizures in brain tumor:** Prophylactic anticonvulsants NOT recommended unless patient has had a seizure; first seizure requires anticonvulsants
- **Steroids for edema:** Dexamethasone is the steroid of choice — does NOT treat the tumor, only the edema

## Related

- [[bevacizumab]]
- [[breast-cancer]]
- [[carmustine]]
- [[cerebral-edema]]
- [[dexamethasone]]
- [[levetiracetam]]
- [[lung-cancer]]
- [[phenytoin]]
- [[pituitary-adenoma]]
- [[seizures-and-epilepsy]]
- [[temozolomide]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('concussion', 'Concussion', 'disease', '# Concussion

## Study Snapshot

### What It Is

Concussion is a mild traumatic brain injury (mTBI) characterized by transient neurological dysfunction resulting from mechanical force transmitted to the brain — typically a direct blow, acceleration/deceleration, or rotational force. The key features are: (1) rapid onset of neurological symptoms, (2) functional rather than structural damage (no intracranial hemorrhage on CT), (3) typically self-resolving within days to weeks, and (4) metabolic vulnerability of the brain in the post-concussion period. Second-impact syndrome — when a second concussion occurs before the first has fully healed — causes catastrophic cerebral edema and is often fatal.

> **The Simplified View:** "Your brain floats in CSF inside your skull. A hard hit makes it slosh around inside — bruising the neurons themselves rather than tearing blood vessels. The neurons are temporarily stunned and metabolically vulnerable, like a phone on low battery."

### Why It Matters

- **Post-Concussion Syndrome:** Symptoms persisting >3 months — headaches, dizziness, cognitive difficulties, mood changes; may require multidisciplinary management
- **Second-Impact Syndrome:** Nearly always fatal; occurs when second concussion happens before first has resolved → rapid cerebral edema → herniation; mostly in young athletes (adolescents); prevention is key
- **Chronic Traumatic Encephalopathy (CTE):** Progressive neurodegenerative disease from repeated head trauma (not just concussions but subconcussive hits); tauopathy; presents years later with mood, cognitive, and motor symptoms

### Patho In One Line

**Mechanical impact** transmits force to brain parenchyma

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Sports (football, hockey, soccer, lacrosse, basketball), MVA (whiplash), falls (especially elderly and children), assault, recreational activities (cycling, playground)
- **Modifiable Risk Factors:** Contact sports without proper technique; inadequate protective equipment; returning to play too soon after prior concussion
- **Non-Modifiable Risk Factors:** Prior concussion (risk of repeat concussion 3–5x higher), male sex (higher participation in contact sports), young age (adolescents have larger head-to-body ratio, less neck strength)
- **Pathways:** Mechanical impact → acceleration/deceleration of brain → diffuse neuronal membrane perturbation → diffuse axonal stress → potassium efflux, glutamate release → energy crisis → impaired axonal transport; inflammatory response; altered cerebral blood flow

### What You See

- Neuro: [confusion — appears dazed, foggy] — Cortical dysfunction
- Neuro: [dizziness, balance problems] — Vestibular-ocular dysfunction
- Neuro: [visual disturbances — double/blurred vision] — Optic pathway involvement
- Neuro: [tinnitus, sensitivity to sound] — Auditory pathway involvement
- Neuro: [amnesia — retrograde or anterograde] — Hippocampal vulnerability
- Neuro: [nausea/vomiting] — Chemoreceptor trigger zone activation

### What Confirms It

No routine lab markers for concussion; CT if indicated to rule out structural injury

## Nursing Lens

### Nursing Priorities

**Physical and Cognitive Rest (Acute Phase 24–72h):** Avoid activities requiring concentration; limit screen time; no return to play until symptom-free at rest; complete rest is NOT prolonged (leads to deconditioning)

**Return-to-Learn/Play Protocol:** Follow stepwise progression; no return to full activity until asymptomatic at rest and with exertion; each step requires 24 hours minimum

### Red Flags

- **Post-Concussion Syndrome:** Symptoms persisting >3 months — headaches, dizziness, cognitive difficulties, mood changes; may require multidisciplinary management
- **Second-Impact Syndrome:** Nearly always fatal; occurs when second concussion happens before first has resolved → rapid cerebral edema → herniation; mostly in young athletes (adolescents); prevention is key
- **Chronic Traumatic Encephalopathy (CTE):** Progressive neurodegenerative disease from repeated head trauma (not just concussions but subconcussive hits); tauopathy; presents years later with mood, cognitive, and motor symptoms

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "When can an athlete return after concussion?" → ONLY when completely symptom-free at rest and at exertion; gradual stepwise protocol over days to weeks
- **The red flags requiring CT:** Loss of consciousness >30 minutes, focal neurological deficit, GCS <13, worsening headache, repeated vomiting, signs of skull fracture
- **Never send a concussed athlete back to play the same day** — this is now universally mandated

## Related

- [[acetaminophen]]
- [[amitriptyline]]
- [[brain-trauma]]
- [[headaches]]
- [[ondansetron]]
- [[post-concussion-syndrome]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('crohn-s-disease', 'Crohn’s Disease', 'disease', '# Crohn’s Disease

## Study Snapshot

### What It Is

Crohn’s disease is a chronic inflammatory bowel disease (IBD) with **transmural** (full-thickness) inflammation that can affect any part of the GI tract, commonly terminal ileum and colon. It tends to appear in patchy “skip lesions” and can lead to strictures, fistulas, malabsorption, and recurrent flares.

> **The Simplified View:** "The gut’s immune system keeps overreacting, causing repeated deep inflammation and damage."

### Why It Matters

- Bowel obstruction from strictures
- Fistulas and intra-abdominal/perianal abscesses
- Severe malnutrition and micronutrient deficiency
- Infection risk from immunosuppressive therapy
- Increased long-term colorectal cancer risk depending on disease extent/duration

### Patho In One Line

**Immune activation** in GI tract mucosa.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Multifactorial immune dysregulation in genetically susceptible individuals.
- **Modifiable Risk Factors:** Smoking (major worsening factor), medication nonadherence, unmanaged stress/sleep disruption.
- **Non-Modifiable Risk Factors:** Family history, genetics, age at onset.
- **Pathways:** Autoimmune/inflammatory process driven by abnormal mucosal immune response.

### What You See

- GI: Chronic diarrhea — Active intestinal inflammation
- GI: RLQ abdominal pain/cramping — Ileal/colonic inflammation, edema
- Nutrition: Weight loss/anorexia — Malabsorption + reduced intake
- Perianal: Fissures/fistulas/abscesses — Transmural disease extension
- Hematologic: Anemia — Chronic inflammation, blood/nutrient loss

### What Confirms It

Endoscopic evaluation (ileocolonoscopy with biopsy) with histologic confirmation and disease mapping.

## Nursing Lens

### Nursing Priorities

**Flare Assessment & Safety**
- Trend stool frequency, pain, hydration status, vitals, fever, bleeding cues.

**Medication & Monitoring**
- Timely med administration, monitor side effects/labs, reinforce adherence.

**Nutrition & Function**
- Support small frequent intake, monitor weight and deficits, coordinate dietitian input.

**Education & Self-Management**
- Flare trigger awareness, smoking cessation support, when to seek urgent care.

### Red Flags

- Bowel obstruction from strictures
- Fistulas and intra-abdominal/perianal abscesses
- Severe malnutrition and micronutrient deficiency
- Infection risk from immunosuppressive therapy
- Increased long-term colorectal cancer risk depending on disease extent/duration

## Exam Layer

### Exam Clues

- Crohn’s = **transmural + skip lesions + anywhere mouth-to-anus**.
- Distinguish from ulcerative colitis patterns in questions.
- Watch for obstruction/fistula clues in stem.
- Nursing answers often prioritize hydration, nutrition, infection surveillance, and complication escalation.

## Related

- [[albumin]]
- [[appendicitis]]
- [[azathioprine]]
- [[Celiac disease]]
- [[celiac-disease]]
- [[crohns-disease]]
- [[Infectious colitis]]
- [[Irritable bowel syndrome (IBS)]]
- [[Ulcerative Colitis]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('degenerative-disorders-of-the-spine', 'Degenerative Disorders of the Spine', 'disease', '# Degenerative Disorders of the Spine

## Study Snapshot

### What It Is

Degenerative spine disorders encompass a spectrum of age-related changes in the spinal column — disc degeneration, facet joint osteoarthritis, ligamentum flavum hypertrophy, and osteophyte formation — that can cause canal stenosis, foraminal narrowing, and mechanical pain. These changes are part of normal aging but become symptomatic when they compress neural structures (spinal cord, cauda equina, or nerve roots). Cervical spondylotic myelopathy (CSM) and lumbar spinal stenosis are the most clinically significant presentations, with myelopathy representing cord compression that can cause permanent neurological deficits.

> **The Simplified View:** "The spine ages like the rest of the body — discs dry out and flatten, bones develop bone spurs, and ligaments thicken. When these changes narrow the tunnel where the spinal cord or nerves travel, they get squeezed. In the neck, this can compress the spinal cord (myelopathy). In the lower back, it squeezes the nerve roots going to the legs (radiculopathy)."

### Why It Matters

- **Cervical myelopathy progression:** Without surgical decompression, can progress to permanent paralysis, incontinence, respiratory compromise
- **Cauda equina syndrome:** Surgical emergency — permanent bowel/bladder dysfunction and leg paralysis if not treated within 24–48 hours
- **Failed back surgery syndrome:** Persistent pain after spine surgery; multi-factorial; requires comprehensive management

## Clinical Pattern

### What You See

- MSK: [neck pain, cervical spine stiffness — cervical spondylosis] — Degenerative joint disease
- MSK: [low back pain — lumbar stenosis/herniated disc] — Mechanical compression
- MSK: [radicular pain — shooting down arm (cervical) or leg (lumbar)] — Nerve root compression
- MSK: [gait ataxia, leg heaviness — lumbar stenosis] — Cauda equina/nerve root compression
- MSK: [hand clumsiness — cervical myelopathy] — Corticospinal tract involvement
- Neuro: [upper motor neuron signs — hyperreflexia, Babinski, spasticity] — Cervical myelopathy — cord compression

### What Confirms It

- No specific labs for degenerative spine disease
- Rule out inflammatory arthritis: ESR, CRP, RF, HLA-B27

## Nursing Lens

### Nursing Priorities

**Myelopathy Recognition (Cervical):** Assess for gait disturbance, upper motor neuron signs (hyperreflexia, Babinski), hand clumsiness; ANY cord compression signs = urgent surgical consult (can progress to paralysis)

**Cauda Equina Recognition (Lumbar):** Sudden bowel/bladder incontinence or retention + saddle anesthesia + bilateral leg weakness = EMERGENCY — notify surgeon IMMEDIATELY

**Pain Management and Mobility:** NSAIDs, physical therapy, activity modification; educate on proper body mechanics; weight management

### Red Flags

- **Cervical myelopathy progression:** Without surgical decompression, can progress to permanent paralysis, incontinence, respiratory compromise
- **Cauda equina syndrome:** Surgical emergency — permanent bowel/bladder dysfunction and leg paralysis if not treated within 24–48 hours
- **Failed back surgery syndrome:** Persistent pain after spine surgery; multi-factorial; requires comprehensive management

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Neurogenic claudication vs. vascular claudication: neurogenic — pain with walking, relieved by sitting/flexion (shopping cart sign); vascular — pain with walking, relieved by stopping (even without sitting)"
- **Lhermitte''s sign:** Electric shock down spine with neck flexion = cervical myelopathy — classic board question
- **Cauda equina red flags:** Saddle anesthesia, bowel/bladder dysfunction, bilateral lower extremity weakness = emergency

## Related

- [[cyclobenzaprine]]
- [[degenerative-disk-disease]]
- [[gabapentin]]
- [[herniated-disc]]
- [[naproxen]]
- [[osteoarthritis]]
- [[pregabalin]]
- [[spinal-cord-injury]]
- [[triamcinolone]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('dementia', 'Dementia', 'disease', '# Dementia

## Study Snapshot

### What It Is

Dementia is a syndrome of progressive cognitive decline that interferes with function and independence. It has multiple etiologies (e.g., Alzheimer’s, vascular, frontotemporal, Lewy body) and is not a normal part of aging.

> **The Simplified View:** "Persistent, progressive thinking and function decline from brain disease."

### Why It Matters

- Delirium overlying baseline dementia
- Institutionalization risk from behavioral escalation

### Patho In One Line

Brain network injury accumulates

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Neurodegenerative and vascular brain disorders
- **Modifiable Risk Factors:** Vascular risk control, hearing loss support, social/cognitive engagement
- **Non-Modifiable Risk Factors:** Age, genetics, prior neurologic disease
- **Pathways:** Degenerative, vascular, mixed pathologies

### What You See

- Neurocognitive: Memory and executive deficits — Cortical/subcortical network damage
- Behavioral: Agitation/apathy — Frontal-limbic dysregulation
- Functional: ADL decline — Global cognitive impairment

### What Confirms It

Syndromic clinical diagnosis with cognitive testing + collateral history.

## Nursing Lens

### Nursing Priorities

**Safety:** falls/wandering/medication supervision.
**Communication:** structured cues, routine, caregiver coaching.

### Red Flags

- Delirium overlying baseline dementia
- Institutionalization risk from behavioral escalation

### Treatment Themes

- Etiology-dependent symptomatic therapies (e.g., cholinesterase inhibitors for AD)
- Behavioral symptom medications used cautiously and selectively

## Exam Layer

### Exam Clues

- Always differentiate dementia (chronic) from delirium (acute/fluctuating).
- Functional decline is required for major neurocognitive disorder diagnosis.

## Related

- [[alzheimers-disease]]
- [[cerebrovascular-disease-stroke]]
- [[frontotemporal-dementia]]
- [[huntingtons-disease]]
- [[hydrocephalus]]
- [[parkinsons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('demyelinating-disorders', 'Demyelinating Disorders', 'disease', '# Demyelinating Disorders

## Study Snapshot

### What It Is

Demyelinating disorders are characterized by autoimmune-mediated destruction of CNS myelin. When myelin is damaged, nerve conduction slows or blocks entirely. MS has relapsing and progressive forms; ADEM is monophasic post-infectious; NMOSD targets astrocytes via AQP4 antibodies. These diseases differ in pattern, distribution, and severity but share the core problem of autoimmune demyelination.

> **The Simplified View:** "Myelin is insulation on electrical wires — when it degrades, signals short-circuit. In MS, faulty wiring throughout the nervous system with intermittent patches. In ADEM, a one-time short circuit from infection. In NMOSD, a different insulator (AQP4 on astrocytes) is attacked."

### Why It Matters

- **PML (JC virus reactivation):** Occurs with natalizumab, fingolimod, dimethyl fumarate, ocrelizumab — rapidly progressive, report new neuro symptoms immediately
- **Cumulative disability:** Axonal loss is irreversible — early treatment matters
- **NMOSD attacks more severe than MS:** Recovery often incomplete — aggressive acute treatment needed

## Clinical Pattern

### What You See

- Neuro: [optic neuritis — painful monocular vision loss] — Optic nerve demyelination
- Neuro: [INO — failure of adduction] — MLF demyelination (classic MS finding)
- Neuro: [transverse myelitis — weakness, sensory level] — Spinal cord demyelination
- Neuro: [paresthesias, numbness, Lhermitte''s sign] — Dorsal column involvement
- Neuro: [spasticity — UMN signs] — Corticospinal tract involvement
- Neuro: [fatigue — overwhelming exhaustion] — CNS inflammatory burden

### What Confirms It

- **Anti-AQP4 antibodies** (NMOSD — NMO-IgG)
- **Anti-MOG antibodies** (some ADEM, NMOSD)
- Vitamin D levels

## Nursing Lens

### Nursing Priorities

**Acute Relapse Recognition:** New neurological symptoms >24h = presumed relapse; rule out infection; start high-dose steroids

**DMT Adherence:** Ensure compliance; monitor for PML symptoms, liver toxicity, blood count changes; no live vaccines on most DMTs

### Red Flags

- **PML (JC virus reactivation):** Occurs with natalizumab, fingolimod, dimethyl fumarate, ocrelizumab — rapidly progressive, report new neuro symptoms immediately
- **Cumulative disability:** Axonal loss is irreversible — early treatment matters
- **NMOSD attacks more severe than MS:** Recovery often incomplete — aggressive acute treatment needed

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Optic neuritis + INO = classic MS"
- **Dawson''s fingers:** Periventricular lesions extending into corpus callosum — characteristic MS MRI
- **NMOSD red flag:** Longitudinally extensive myelitis (≥3 vertebral segments) + optic neuritis

## Related

- [[dimethyl-fumarate]]
- [[eculizumab]]
- [[fingolimod]]
- [[glatiramer-acetate]]
- [[interferon-beta]]
- [[methylprednisolone]]
- [[multiple-sclerosis-ms]]
- [[natalizumab]]
- [[neuromuscular-junction-disorders]]
- [[ocrelizumab]]
- [[optic-neuritis]]
- [[transverse-myelitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('diabetes-mellitus', 'Diabetes Mellitus', 'disease', '# Diabetes Mellitus

## Study Snapshot

### What It Is

Diabetes mellitus is chronic hyperglycemia caused by impaired [[insulin|Insulin]] secretion, insulin action, or both. Long-term uncontrolled glucose causes microvascular and macrovascular complications.

> **The Simplified View:** "Glucose stays high because insulin supply or response is broken."

### Why It Matters

- DKA/HHS acute emergencies
- Progressive microvascular and cardiovascular complications

### Patho In One Line

Insulin deficiency/resistance causes hyperglycemia

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Type 1 autoimmune beta-cell destruction; Type 2 insulin resistance + beta-cell dysfunction
- **Modifiable Risk Factors:** Obesity, inactivity, diet quality, smoking
- **Non-Modifiable Risk Factors:** Age, family history, ethnicity, gestational history
- **Pathways:** Autoimmune (T1DM), metabolic/inflammatory resistance (T2DM)

### What You See

- Renal: Polyuria — Osmotic diuresis from hyperglycemia
- Endocrine: Polydipsia/polyphagia — Fluid loss + cellular energy deficit
- Neuro/Vascular: Neuropathy/poor healing — Chronic glycotoxic vascular injury

### What Confirms It

Diagnosis via HbA1c, fasting plasma glucose, OGTT, or random glucose with symptoms.

## Nursing Lens

### Nursing Priorities

**Safety:** hypoglycemia prevention/recognition.
**Education:** self-monitoring, sick-day rules, foot care, adherence.

### Red Flags

- DKA/HHS acute emergencies
- Progressive microvascular and cardiovascular complications

### Treatment Themes

- Lifestyle + [[metformin|Metformin]] first-line in many T2DM cases
- Add GLP-1RA/SGLT2i/insulin based on goals/comorbidities
- T1DM requires insulin therapy

## Exam Layer

### Exam Clues

- Distinguish DKA (ketotic, often T1) vs HHS (severe hyperosmolar, often T2).
- Hypoglycemia treatment should be immediate and protocol-driven.

## Related

- [[cerebrovascular-disease-stroke]]
- [[chronic-kidney-disease-ckd]]
- [[enuresis]]
- [[insulin]]
- [[metformin]]
- [[nephrolithiasis-kidney-stones]]
- [[pancreatitis]]
- [[pressure-ulcers]]
- [[pyelonephritis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('disseminated-intravascular-coagulation-dic', 'Disseminated Intravascular Coagulation (DIC)', 'disease', '# Disseminated Intravascular Coagulation (DIC)

## Study Snapshot

### What It Is

DIC is a life-threatening acquired coagulation disorder in which widespread inappropriate activation of the coagulation cascade leads to simultaneous widespread microvascular thrombosis and consumptive coagulopathy. The body''s clotting factors and platelets are exhausted fighting phantom clots throughout the microvasculature, leaving nothing available for actual bleeding injuries — resulting in simultaneous clotting AND bleeding at the same time.

> **The Simplified View:** "Your body''s coagulation system goes into full panic mode — clotting everywhere in the small vessels (consuming all your clotting supplies), then you have nothing left when you actually need to clot for a real injury. You''re simultaneously clotting and bleeding."

### Why It Matters

- **Multi-organ failure:** Renal failure, hepatic failure, respiratory failure, DIC-induced coagulopathy — mortality rate 30–80%.
- **Purpura fulminans:** Skin necrosis and gangrene from dermal microvascular thrombosis — especially in protein C deficiency patients with DIC.
- **Massive hemorrhage:** Refractory bleeding despite aggressive factor replacement — often requires ongoing massive transfusion protocol.
- **Hemorrhagic adrenal necrosis (Waterhouse-Friderichsen):** Bilateral adrenal hemorrhage → acute adrenal insufficiency; requires immediate steroid replacement.

### Patho In One Line

Underlying trigger (sepsis, tissue destruction, obstetric complication) releases massive tissue factor.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Any condition that triggers massive systemic inflammation and endothelial damage can precipitate DIC.
- **#1 Cause: Sepsis** (bacterial endotoxin activates coagulation cascade)
- **Obstetric:** HELLP syndrome, placental abruption, amniotic fluid embolism, septic abortion — the "perfect storm" of tissue factor release + inflammation in pregnancy.
- **Other Triggers:** Severe trauma (especially brain injury), malignancy (especially pancreatic, prostate, AML), severe burns, snake venom, transfusion reactions, shock.
- **Pathways:** Systemic inflammation/endothelial injury → massive tissue factor expression → thrombin generation → fibrin deposits in microvasculature → clotting factors and platelets consumed → clotting cascade collapses → hemorrhage

### What You See

- Hematologic: Bleeding from IV sites, gums, mucosal surfaces — Consumed clotting factors + fibrin degradation products → no clot formation
- Hematologic: Petechiae, purpura, ecchymoses — Capillary bleeding from coagulopathy
- Hematologic: Thrombocytopenia — Rapid platelet consumption
- Renal: Oliguria, ↑ creatinine, acute kidney injury — Microthrombi in renal vasculature
- Pulmonary: Respiratory distress, ARDS-like picture — Pulmonary microvasculature thrombosis
- Hepatic: Jaundice, elevated LFTs, hepatic failure — Central lobular necrosis from microthrombi

### What Confirms It

No single test — diagnosis is clinical + laboratory. Combination of findings supports the diagnosis:
- **Peripheral smear:** Schistocytes (fragmented RBCs) from mechanical RBC destruction.
- **D-dimer:** Massively elevated (fibrin degradation marker).
- **Fibrinogen:** LOW (consumed in clotting; can help differentiate from other causes of elevated D-dimer).
- **PT/PTT:** Both PROLONGED (consumption of clotting factors).
- **Platelets:** LOW (consumption).
- **Antithrombin III:** LOW (consumed).

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Bleeding precautions and monitoring:** Apply pressure to all bleeding sites; no IM injections; monitor all mucous membranes, IV sites, catheter sites, wounds; watch for signs of internal hemorrhage (↓ BP, ↑ HR, ↓ Hgb, hematemesis, melena, hematuria).
**Organ perfusion monitoring:** Watch renal function (I/O, creatinine), neurologic status (LOC, cranial nerve assessment), respiratory status (O₂ sat, work of breathing), hepatic function (jaundice, LFTs, ammonia).

### Red Flags

- **Multi-organ failure:** Renal failure, hepatic failure, respiratory failure, DIC-induced coagulopathy — mortality rate 30–80%.
- **Purpura fulminans:** Skin necrosis and gangrene from dermal microvascular thrombosis — especially in protein C deficiency patients with DIC.
- **Massive hemorrhage:** Refractory bleeding despite aggressive factor replacement — often requires ongoing massive transfusion protocol.
- **Hemorrhagic adrenal necrosis (Waterhouse-Friderichsen):** Bilateral adrenal hemorrhage → acute adrenal insufficiency; requires immediate steroid replacement.

## Exam Layer

### Exam Clues

- The #1 cause of DIC is SEPSIS — always look for and treat the underlying trigger.
- DIC = simultaneous CLOTTING and BLEEDING — not one or the other. This is the key clinical distinction.
- Oozing from IV catheter insertion sites is one of the most common early signs.
- Schistocytes on peripheral smear + thrombocytopenia + elevated D-dimer + low fibrinogen = classic DIC lab pattern.
- Treatment of DIC without treating the underlying c

## Related

- [[hemophilia-a-and-b]]
- [[heparin]]
- [[sickle-cell-anemia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('diverticular-disease-diverticulosis-and-diverticulitis', 'Diverticular Disease (Diverticulosis & Diverticulitis)', 'disease', '# Diverticular Disease (Diverticulosis & Diverticulitis)

## Study Snapshot

### What It Is

Diverticulosis = presence of diverticula (small outpouchings through the colon wall, usually in the sigmoid colon). Diverticulitis = inflammation/infection of those diverticula.

> **The Simplified View:** "Low-pressure weak spots in the colon wall balloon out. If one gets inflamed/infected, that''s diverticulitis."

### Why It Matters

- Abscess formation
- Free perforation → peritonitis (surgical emergency)
- Fistula (colovesical most common → pneumaturia)
- Stricture/obstruction
- Bleeding (painless lower GI bleed)

### Patho In One Line

High intraluminal pressure + wall weakness → mucosal herniation (diverticulum)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Increased intraluminal pressure against weak points in colonic wall (where vasa recta penetrate)
- **Modifiable Risk Factors:** Low-fiber diet, obesity, sedentary lifestyle, smoking
- **Non-Modifiable Risk Factors:** Age (>60), family history
- **Pathways:** Mechanical: chronic straining → high pressure → mucosal herniation through muscle wall

### What You See

- GI: LLQ pain (worse with diverticulitis) — Inflammation of sigmoid colon
- GI: Change in bowel habits — Altered motility from inflammation
- GI: Nausea, vomiting (if obstruction) — Partial/complete blockage
- Severe: Peritoneal signs (rigid abdomen) — Perforation → peritonitis

### What Confirms It

CT scan with contrast — shows diverticula, inflammation, abscess, perforation

## Nursing Lens

### Nursing Priorities

**Assess Severity:** Pain location/character, fever, WBC, peritoneal signs, bowel sounds

**Diet & Bowel Management:** Liquid diet during acute attack → advance; high-fiber diet for prevention

**Medication & Monitoring:** Antibiotic administration, pain management, monitor for complications

### Red Flags

- Abscess formation
- Free perforation → peritonitis (surgical emergency)
- Fistula (colovesical most common → pneumaturia)
- Stricture/obstruction
- Bleeding (painless lower GI bleed)

## Exam Layer

### Exam Clues

- Diverticulosis = diverticula present (asymptomatic). Diverticulitis = inflamed/infected (symptomatic).
- Most common location: **sigmoid colon**
- LLQ pain = think diverticulitis (vs RLQ = appendicitis)
- Old myth: no nuts/seeds — not evidence-based
- Avoid colonoscopy during acute attack

## Related

- [[amoxicillin]]
- [[appendicitis]]
- [[ciprofloxacin]]
- [[crohns-disease]]
- [[Irritable bowel syndrome (IBS)]]
- [[metronidazole]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('ear-disorders', 'Ear Disorders', 'disease', '# Ear Disorders

## Study Snapshot

### What It Is

Ear disorders affect the auditory and vestibular systems — the cochlea (hearing), the vestibular apparatus (balance), and the neural pathways connecting them to the brain. Hearing loss is either conductive (sound transmission blocked in external/middle ear) or sensorineural (cochlear or auditory nerve damage). Vestibular disorders disrupt balance through dysfunction of the semicircular canals, utricle, and saccule. Meniere''s disease exemplifies both systems'' involvement — endolymphatic hydrops damages both cochlear and vestibular hair cells.

> **The Simplified View:** "The inner ear has its own plumbing system for fluid and its own gyroscope for balance — when the fluid pressure builds up (Meniere''s) or the gyroscope gets miscalibrated (vestibular neuritis), everything goes wrong."

### Why It Matters

- **Bilateral hearing loss:** Can result from repeated Meniere''s attacks or bilateral vestibular neuritis — devastating functional impact
- **Labyrinthine artery occlusion (SSNHL):** Can cause permanent cochlear infarction — represents a "stroke of the ear"
- **Meniere''s disease + falls:** Elderly patients with chronic vestibular dysfunction at high fall risk — screen and implement vestibular rehabilitation

## Clinical Pattern

### What You See

- EENT: [severe episodic vertigo lasting 20 min–hours — Meniere''s] — Unilateral vestibular hair cell damage from endolymphatic hydrops
- EENT: [fluctuating hearing loss — Meniere''s] — Cochlear hair cell damage
- EENT: [tinnitus, aural fullness — Meniere''s] — Cochlear involvement
- EENT: [sudden onset vertigo lasting days — vestibular neuritis] — Unilateral vestibular nerve inflammation
- EENT: [sudden one-sided hearing loss — SSNHL] — Acute cochlear or auditory nerve damage
- EENT: [ear pain, fever, conductive hearing loss — otitis media] — Middle ear inflammation and effusion

### What Confirms It

- CBC (infection workup)
- Inflammatory markers (ESR, CRP) if autoimmune cause suspected
- Audiogram findings (conductive vs. sensorineural differentiation)
- Viral titers if post-viral suspected

## Nursing Lens

### Nursing Priorities

**Fall Prevention & Safety During Acute Vertigo:** Keep environment safe (bed low, call light within reach, no-slip mats); assist with ambulation during acute vertigo; position patient to prevent aspiration if vomiting

**Hearing Assessment & Audiology Referral:** Perform and document hearing assessment (whisper test, Weber/Rinne tuning fork tests); refer for formal audiometry and vestibular testing; for SSNHL — URGENT ENT referral (steroid treatment most effective within 2 weeks)

### Red Flags

- **Bilateral hearing loss:** Can result from repeated Meniere''s attacks or bilateral vestibular neuritis — devastating functional impact
- **Labyrinthine artery occlusion (SSNHL):** Can cause permanent cochlear infarction — represents a "stroke of the ear"
- **Meniere''s disease + falls:** Elderly patients with chronic vestibular dysfunction at high fall risk — screen and implement vestibular rehabilitation

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Patient with Meniere''s disease asks about dietary changes — what should you recommend?" → Low-sodium diet (<2 g/day), avoid caffeine and alcohol, stay hydrated
- **Tuning fork tests:** Weber test lateralizes to the affected ear in conductive loss; lateralizes to the GOOD ear in sensorineural loss
- **SSNHL is an ENT emergency:** Unlike sudden hearing loss from cerumen impaction, SSNHL requires urgent steroids and MRI — time matters for hearing recovery

## Related

- [[amoxicillin]]
- [[cerebrovascular-disease-stroke]]
- [[clonazepam]]
- [[dexamethasone]]
- [[hydrochlorothiazide]]
- [[meclizine]]
- [[multiple-sclerosis-ms]]
- [[valacyclovir]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('encephalopathies', 'Encephalopathies', 'disease', '# Encephalopathies

## Study Snapshot

### What It Is

Encephalopathies are diffuse brain dysfunctions caused by systemic metabolic derangements, toxins, or structural abnormalities — the brain is functioning abnormally due to something wrong with its environment, not a primary brain disease. Key types are: hepatic (ammonia toxicity), uremic (uremic toxins), hypoxic-ischemic (global cerebral hypoperfusion), and Wernicke (thiamine deficiency). The hallmark is altered mental status with identifiable metabolic cause — the diagnosis is made by recognizing the pattern and finding the underlying metabolic abnormality.

> **The Simplified View:** "The brain runs on clean fuel — when the fuel supply is contaminated (ammonia in liver failure, uremic toxins in kidney failure, hypoxia after cardiac arrest, or missing a key vitamin), the brain''s software malfunctions. Fix the fuel, fix the brain — but some damage may be permanent."

### Why It Matters

- **Hepatic encephalopathy progression:** Can progress to coma and death if untreated; recurrent episodes indicate liver failure needing transplant evaluation
- **Wernicke-Korsakoff permanent syndrome:** If thiamine not given early, Korsakoff syndrome (permanent memory deficits, confabulation) develops — this is preventable
- **Post-hypoxic myoclonus:** Chronic movement disorder after HIE; treat with clonazepam, valproate, or levetiracetam
- **Dialysis disequilibrium syndrome:** Acute encephalopathy during/after rapid hemodialysis — treat with slowing dialysis, mannitol

## Clinical Pattern

### What You See

- Neuro: [asterixis — liver flap, involuntary postural lapses] — Hepatic encephalopathy — classic finding
- Neuro: [confusion, disorientation — fluctuating] — Diffuse cerebral dysfunction
- Neuro: [somnolence → stupor → coma] — Progressive encephalopathy
- Neuro: [constructional apraxia — can''t draw shapes] — Prefrontal cortex dysfunction
- Neuro: [fetor hepaticus — musty breath] — Liver failure
- Neuro: [hyperreflexia, Babinski — late] — Corticospinal tract involvement

### What Confirms It

**Hepatic Encephalopathy:**
- **Ammonia (elevated)** — not perfectly correlated with severity but supports diagnosis
- **LFTs, bilirubin, albumin, INR** — assess liver function
- **CBC** — anemia, infection

**Uremic Encephalopathy:**
- **BUN, creatinine (elevated)** — quantify renal dysfunction
- **Electrolytes (K, Ca, PO4, Mg)** — abnormalities worsen encephalopathy
- **ABG** — metabolic acidosis

**Hypoxic-Ischemic Encephalopathy:**

**Wernicke Encephalopathy:**

## Nursing Lens

### Nursing Priorities

**Identify and Treat Underlying Cause:** Encephalopathy is a symptom — must find and treat the metabolic cause; work systematically through metabolic panel, liver/kidney function, infection, toxins

**Safety and Supportive Care:** Prevent falls; protect airway; NPO if unable to protect airway; frequent neuro checks; seizure precautions; maintain hydration and nutrition

**Specific Management by Type:**
- HE: Lactulose to 2–3 soft stools/day; rifaximin adjunct; restrict protein (controversial); treat precipitants
- Uremic: Optimize dialysis; correct electrolytes
- HIE: Therapeutic hypothermia; seizure control; support function
- Wernicke''s: Thiamine before glucose; monitor for Korsakoff progression

### Red Flags

- **Hepatic encephalopathy progression:** Can progress to coma and death if untreated; recurrent episodes indicate liver failure needing transplant evaluation
- **Wernicke-Korsakoff permanent syndrome:** If thiamine not given early, Korsakoff syndrome (permanent memory deficits, confabulation) develops — this is preventable
- **Post-hypoxic myoclonus:** Chronic movement disorder after HIE; treat with clonazepam, valproate, or levetiracetam
- **Dialysis disequilibrium syndrome:** Acute encephalopathy during/after rapid hemodialysis — treat with slowing dialysis, mannitol

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Asterixis (liver flap) = hepatic encephalopathy — classic board finding"
- **Wernicke''s triad:** Confusion + ophthalmoplegia + ataxia = thiamine deficiency → give thiamine BEFORE glucose in alcoholics
- **HIE management:** Therapeutic hypothermia (32–36°C) post-cardiac arrest with ROSC — proven to improve neurological outcomes

## Related

- [[acute-kidney-injury-aki]]
- [[cerebral-edema]]
- [[chronic-kidney-disease-ckd]]
- [[hemodialysis]]
- [[hepatic-encephalopathy]]
- [[hepatic-failure]]
- [[lactulose]]
- [[levetiracetam]]
- [[lola]]
- [[rifaximin]]
- [[thiamine]]
- [[wernicke-encephalopathy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('enuresis', 'Enuresis', 'disease', '# Enuresis

## Study Snapshot

### What It Is

Enuresis is repeated involuntary urination during sleep (nocturnal) or wakefulness in a child beyond expected bladder-control age. It may be primary (never consistently dry) or secondary (recurs after dryness period).

> **The Simplified View:** "Bladder control timing is lagging or disrupted—often functional, sometimes secondary to another issue."

### Why It Matters

- Persistent psychosocial distress
- Secondary enuresis from stress or medical conditions

### Patho In One Line

Nighttime urine production or bladder signaling exceeds control

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Delayed bladder maturation, nocturnal polyuria, arousal dysfunction
- **Modifiable Risk Factors:** Evening fluid habits, constipation, sleep routine
- **Non-Modifiable Risk Factors:** Family history, developmental factors
- **Pathways:** Functional, behavioral, occasionally secondary medical cause

### What You See

- GU: Nighttime wetting — Nocturnal control/arousal mismatch
- GI: Constipation association — Pelvic floor/bladder pressure effects
- Psychosocial: Embarrassment/avoidance — Recurrent episodes impact self-esteem

### What Confirms It

Clinical diagnosis from history and voiding pattern.

## Nursing Lens

### Nursing Priorities

**Family Education:** normalize condition, avoid blame/punishment.
**Behavior Plan:** timed voiding, fluid timing, alarm consistency.

### Red Flags

- Persistent psychosocial distress
- Secondary enuresis from stress or medical conditions

### Treatment Themes

- First-line usually behavioral/alarm therapy
- [[desmopressin|Desmopressin]] in selected nocturnal polyuria cases
- Treat constipation/UTI/other contributors as indicated

## Exam Layer

### Exam Clues

- Rule out UTI, diabetes, constipation, and abuse concerns when indicated.
- Positive reinforcement works better than punishment.

## Related

- [[desmopressin]]
- [[diabetes-mellitus]]
- [[urinary-tract-infection-uti]]
- [[vesicoureteral-reflux-vur]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('eye-disorders', 'Eye Disorders', 'disease', '# Eye Disorders

## Study Snapshot

### What It Is

Eye disorders span a spectrum from refractive errors and age-related changes to sight-threatening diseases of the retina, optic nerve, and anterior chamber. The key structures are the cornea (refracts light), lens (accommodates focus), retina (photoreceptor layer), optic nerve (transmits to brain), and anterior chamber (drains aqueous humor). Dysfunction in any of these — elevated intraocular pressure (IOP) damaging the optic nerve in glaucoma, opacification of the lens in cataracts, or vascular damage to the retina in diabetic retinopathy — leads to vision loss.

> **The Simplified View:** "The eye is like a camera — the lens can cloud over (cataracts), the film can degrade (retina), or the cable sending the picture to the brain can get crushed (glaucoma)."

### Why It Matters

- **Irreversible blindness:** From untreated glaucoma or acute angle-closure — optic nerve damage is permanent
- **Diabetic retinopathy progression:** Can lead to vitreous hemorrhage, tractional retinal detachment, neovascular glaucoma
- **Post-operative endophthalmitis:** Infection inside the eye after surgery — medical emergency

## Clinical Pattern

### What You See

- Ocular: [gradual peripheral vision loss — open-angle glaucoma] — Optic nerve fiber loss (nerve fiber layer bundles)
- Ocular: [sudden severe eye pain, headache, nausea — angle-closure] — Acute IOP elevation; vagal response triggers nausea
- Ocular: [halos around lights, red eye, fixed mid-dilated pupil] — Corneal edema from acute IOP; pupillary paralysis
- Ocular: [painless, progressive blurry vision — cataracts] — Lens opacification scatters light
- Ocular: [microaneurysms, hemorrhages, cotton-wool spots — diabetic retinopathy] — Capillary damage from chronic hyperglycemia
- Neuro: [optical coherence tomography shows nerve fiber layer thinning] — Glaucomatous axonal loss

### What Confirms It

- Fasting blood glucose, HbA1c (diabetic retinopathy)
- Lipid panel (associated with retinal vessel disease)

## Nursing Lens

### Nursing Priorities

**Acute Angle-Closure Glaucoma Emergency:** Recognize acute presentation (severe eye pain, headache, nausea, halos, fixed mid-dilated pupil); IMMEDIATELY prepare IOP-lowering medications (mannitol, acetazolamide, pilocarpine, timolol); prepare for emergency iridotomy

**Medication Adherence for Chronic Glaucoma:** Emphasize that glaucoma medications are lifelong — vision loss from glaucoma is irreversible; teach proper eye drop technique (punctal occlusion, wait 5 min between drops); schedule follow-up IOP checks

### Red Flags

- **Irreversible blindness:** From untreated glaucoma or acute angle-closure — optic nerve damage is permanent
- **Diabetic retinopathy progression:** Can lead to vitreous hemorrhage, tractional retinal detachment, neovascular glaucoma
- **Post-operative endophthalmitis:** Infection inside the eye after surgery — medical emergency

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Patient with acute glaucoma reports severe eye pain and nausea — what nursing intervention is PRIORITY?" → Prepare for immediate administration of IOP-lowering medications (not transport to radiology or comfort measures)
- **Key distinction:** Open-angle glaucoma is a "silent thief of vision" — peripheral vision loss first, then central. Angle-closure is an emergency with acute pain and redness
- **Administration technique:** Always teach punctal occlusion (press on medial canthus for 2 minutes) after eye drops to minimize systemic absorption

## Related

- [[acetazolamide]]
- [[brimonidine]]
- [[cerebrovascular-disease-stroke]]
- [[diabetic-ketoacidosis]]
- [[dorzolamide]]
- [[latanoprost]]
- [[mannitol]]
- [[multiple-sclerosis-ms]]
- [[pilocarpine]]
- [[timolol]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('frontotemporal-dementia', 'Frontotemporal Dementia', 'disease', '# Frontotemporal Dementia

## Study Snapshot

### What It Is

Frontotemporal dementia (FTD) is a neurodegenerative syndrome affecting frontal and/or temporal lobes, leading to prominent behavioral, executive, or language changes. Onset often occurs earlier than Alzheimer’s disease.

> **The Simplified View:** "Personality, behavior, or language can change first—memory may be less prominent early."

### Why It Matters

- High caregiver strain and burnout
- Misdiagnosis as primary psychiatric illness early

### Patho In One Line

Frontal/temporal neuron loss begins

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Degenerative tau/TDP-43 spectrum pathology
- **Modifiable Risk Factors:** Limited proven modifiable factors
- **Non-Modifiable Risk Factors:** Genetics/family history, age
- **Pathways:** Selective frontal/temporal neurodegeneration

### What You See

- Behavioral: Disinhibition/apathy — Frontal lobe dysfunction
- Language: Progressive aphasia — Temporal-frontal network injury
- Functional: Poor judgment/ADL decline — Executive dysfunction progression

### What Confirms It

Clinical syndrome diagnosis with neuropsych testing + imaging pattern support.

## Nursing Lens

### Nursing Priorities

**Safety/Structure:** supervision and routine.
**Caregiver Support:** education, respite, crisis planning.

### Red Flags

- High caregiver strain and burnout
- Misdiagnosis as primary psychiatric illness early

### Treatment Themes

- No disease-modifying cure currently
- Symptom-targeted behavioral management; cautious psychotropic use

## Exam Layer

### Exam Clues

- Early prominent behavior/language change favors FTD over AD.
- Memory may be relatively preserved early.

## Related

- [[alzheimers-disease]]
- [[dementia]]
- [[huntingtons-disease]]
- [[parkinsons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('gastroesophageal-reflux-disease-gerd', 'Gastroesophageal Reflux Disease (GERD)', 'disease', '# Gastroesophageal Reflux Disease (GERD)

## Study Snapshot

### What It Is

GERD is the chronic backflow of gastric contents (acid + pepsin) into the esophagus due to incompetence of the lower esophageal sphincter (LES). Repeated exposure damages esophageal mucosa and can lead to Barrett''s esophagus — a premalignant change.

> **The Simplified View:** "The stomach''s one-way valve doesn''t close properly, so acid keeps splashing back up."

### Why It Matters

- Barrett''s esophagus → esophageal adenocarcinoma
- Esophageal stricture (progressive dysphagia)
- Esophageal ulceration and bleeding
- Laryngeal/pulmonary complications from chronic aspiration

### Patho In One Line

LES tone decreases or transient relaxations increase

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Decreased LES tone, transient LES relaxations, hiatal hernia
- **Modifiable Risk Factors:** Obesity, smoking, alcohol, caffeine, chocolate, mint, fatty/spicy foods, eating late, lying flat after meals
- **Non-Modifiable Risk Factors:** Hiatal hernia, pregnancy, connective tissue disorders
- **Pathways:** Chemical injury to esophageal mucosa → inflammation → possible metaplasia (Barrett''s)

### What You See

- GI: Heartburn (retrosternal burning) — Acid contact with esophageal mucosa
- GI: Regurgitation — Gastric contents reflux into esophagus/pharynx
- GI: Dysphagia — Stricture or edema from chronic inflammation
- Respiratory: Chronic cough, hoarseness, asthma-like — Acid microaspiration, vagal reflex
- Cardiac: Chest pain (non-cardiac) — Esophageal irritation mimics cardiac pain

### What Confirms It

Upper endoscopy (EGD) with biopsy — identifies esophagitis, Barrett''s, strictures

## Nursing Lens

### Nursing Priorities

**Symptom Management:** Anticipate med timing (PPI 30 min before meals), assess pain, monitor for alarm symptoms (dysphagia, weight loss, bleeding)

**Lifestyle Education:** Elevate HOB 6–8 inches, avoid eating 2–3h before bed, weight loss if overweight, smoking cessation, dietary trigger avoidance

**Complication Surveillance:** Barrett''s screening per provider, educate on warning signs

### Red Flags

- Barrett''s esophagus → esophageal adenocarcinoma
- Esophageal stricture (progressive dysphagia)
- Esophageal ulceration and bleeding
- Laryngeal/pulmonary complications from chronic aspiration

## Exam Layer

### Exam Clues

- GERD = LES dysfunction, NOT excess acid production (the valve is the problem)
- Barrett''s = metaplasia (squamous → columnar), NOT yet cancer but precancerous
- PPIs are first-line for moderate-severe; lifestyle changes alone for mild
- Sitting up after eating > lying flat

## Related

- [[cirrhosis]]
- [[peptic-ulcer-disease]]
- [[ranitidine]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('glomerulonephritis', 'Glomerulonephritis', 'disease', '# Glomerulonephritis

## Study Snapshot

### What It Is

Glomerulonephritis is inflammation and injury of glomeruli, often immune-mediated, leading to impaired filtration, hematuria/proteinuria, and possible AKI or CKD progression.

> **The Simplified View:** "The kidney’s filtering units become inflamed and leaky, so blood/protein escape into urine and filtration drops."

### Why It Matters

- Rapidly progressive GN with swift renal decline
- Progression to CKD/end-stage kidney disease

### Patho In One Line

Immune activation injures glomerular capillary structures

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Post-infectious, autoimmune (e.g., lupus, ANCA), IgA-related processes
- **Modifiable Risk Factors:** Delayed treatment of triggers, uncontrolled systemic inflammation
- **Non-Modifiable Risk Factors:** Genetic/immune predisposition
- **Pathways:** Immune-complex or antibody-mediated glomerular injury

### What You See

- Renal: Hematuria (tea/cola urine) — Glomerular capillary damage
- Renal: Proteinuria/edema — Increased glomerular permeability
- Cardiovascular: Hypertension — Sodium-water retention + RAAS activation

### What Confirms It

Renal biopsy for subtype confirmation and treatment planning.

## Nursing Lens

### Nursing Priorities

**Monitoring:** urine findings, BP, renal function trends.
**Safety:** medication monitoring (immunosuppression adverse effects/infection risk).

### Red Flags

- Rapidly progressive GN with swift renal decline
- Progression to CKD/end-stage kidney disease

### Treatment Themes

- Etiology-specific immunosuppression when indicated
- BP/proteinuria control (often RAAS blockade)
- Diuretics and supportive renal care

## Exam Layer

### Exam Clues

- Hematuria + proteinuria + HTN pattern should trigger glomerular source thinking.
- Biopsy guides many treatment decisions.

## Related

- [[acute-kidney-injury-aki]]
- [[chronic-kidney-disease-ckd]]
- [[nephrotic-syndrome]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('headaches', 'Headaches', 'disease', '# Headaches

## Study Snapshot

### What It Is

Headaches are among the most common neurological complaints and are classified as primary (the headache itself is the disease — migraine, tension-type, cluster) or secondary (caused by an underlying condition — tumor, infection, hemorrhage, giant cell arteritis). The key clinical skill is recognizing "red flag" headaches that signal serious underlying pathology requiring urgent workup.

> **The Simplified View:** "Headaches are the brain''s alarm system — sometimes it''s a broken smoke detector going off for no reason (primary), sometimes there''s actually a fire (secondary). Know when to look for the fire."

### Why It Matters

- **Status migrainosus:** Migraine lasting >72 hours; requires hospitalization, IV fluids, IV antiemetics, DHE or steroids
- **Migrainous infarction:** Ischemic stroke during migraine with aura; rare but serious
- **Giant cell arteritis:** Headache + jaw claudication + elevated ESR → risk of permanent vision loss — urgent temporal artery biopsy, start steroids immediately
- **Idiopathic intracranial hypertension:** Young obese women; headache + papilledema + vision loss; treat with weight loss, acetazolamide

## Clinical Pattern

### What You See

- Neuro: [unilateral throbbing — migraine] — Trigeminovascular activation
- Neuro: [severe unilateral periorbital — cluster] — Hypothalamic-trigeminal activation
- Neuro: [visual aura — fortification spectra] — Cortical spreading depression
- Neuro: [photophobia, phonophobia] — Sensory hypersensitivity
- Neuro: [ptosis, lacrimation, rhinorrhea — cluster] — Autonomic activation
- Neuro: [neck stiffness, fever — meningitis] — Meningeal irritation

### What Confirms It

- ESR/CRP (giant cell arteritis)
- CBC, infectious workup (meningitis)
- LP (if meningitis/SAH suspected)

## Nursing Lens

### Nursing Priorities

**Red Flag Recognition:** Know thunderclap, fever + neck stiffness, papilledema, focal neuro signs — these require IMMEDIATE workup

**Migraine Trigger Identification:** Food diary, sleep hygiene, stress management; prophylactic therapy if >4 headache days/month

**Medication-Overuse Prevention:** Limit acute medication use; patient education on MOH risk

### Red Flags

- **Status migrainosus:** Migraine lasting >72 hours; requires hospitalization, IV fluids, IV antiemetics, DHE or steroids
- **Migrainous infarction:** Ischemic stroke during migraine with aura; rare but serious
- **Giant cell arteritis:** Headache + jaw claudication + elevated ESR → risk of permanent vision loss — urgent temporal artery biopsy, start steroids immediately
- **Idiopathic intracranial hypertension:** Young obese women; headache + papilledema + vision loss; treat with weight loss, acetazolamide

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Thunderclap headache = subarachnoid hemorrhage until proven otherwise → CT head, then LP if CT negative"
- **Migraine vs. Tension vs. Cluster:**
  - Migraine: unilateral, throbbing, photophobia/phonophobia, patient lies still
  - Tension: bilateral, pressing, no autonomic features
  - Cluster: unilateral, periorbital, autonomic features, patient paces
- **Red flag mnemonic (SNOOP):** Systemic symptoms, Neurologic deficit, Onset sudden, Older age, Previous headache pattern change

## Related

- [[amitriptyline]]
- [[cerebral-edema]]
- [[cerebrovascular-disease-stroke]]
- [[erenumab]]
- [[ibuprofen]]
- [[meningitis]]
- [[ondansetron]]
- [[propranolol]]
- [[sumatriptan]]
- [[temporal-arteritis]]
- [[topiramate]]
- [[verapamil]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('hematomas', 'Hematomas', 'disease', '# Hematomas

## Study Snapshot

### What It Is

Intracranial hematomas are blood collections within the skull that occupy space and raise intracranial pressure. The key distinction is anatomical location — epidural (between skull and dura, arterial), subdural (between dura and arachnoid, venous), and intracerebral (within brain parenchyma) — each with different causes, presentations, and management. Because the skull cannot expand, any expanding hematoma eventually causes herniation and death unless evacuated.

> **The Simplified View:** "A bleed inside the skull is like a balloon inflating in a locked box — there''s no room to expand, so the brain gets squeezed out through the available openings. Arterial blood fills fast (epidural = minutes); venous blood fills slower (subdural = hours to weeks)."

### Why It Matters

- **Uncal herniation:** Rapid deterioration and death if not surgically evacuated within hours
- **Chronic subdural recurrence:** Common in elderly and anticoagulated; may require repeat evacuation
- **Post-operative re-bleeding:** Monitor post-op CT; anticoagulation restart must be carefully timed

## Clinical Pattern

### What You See

- Neuro: [epidural — lucid interval, then rapid deterioration] — Classic arterial "talk and deteriorate"
- Neuro: [subdural — gradual confusion, headache] — Venous bleeding is slow
- Neuro: [blown pupil (dilated, fixed)] — Uncal herniation — CN III compression
- Neuro: [contralateral hemiparesis] — Corticospinal tract compression
- Neuro: [Cushing''s triad — HTN, bradycardia, irregular respirations] — Imminent herniation
- EENT: [Battle''s sign, raccoon eyes] — Basilar skull fracture (associated)

### What Confirms It

- Coagulation panel (PT, PTT, INR) — MUST reverse if abnormal
- CBC (H/H may be deceptively normal early)
- Type and screen

## Nursing Lens

### Nursing Priorities

**Rapid Neurological Monitoring:** Frequent neuro checks (every 15 min to 1h depending on severity); detect deterioration EARLY — blown pupil, GCS decline, new focal signs = IMMEDIATE intervention and surgical consult

**Anticoagulation Reversal:** Confirm anticoagulant use; reverse urgently with appropriate agent; coordinate between ED, neurosurgery, pharmacy, and blood bank

### Red Flags

- **Uncal herniation:** Rapid deterioration and death if not surgically evacuated within hours
- **Chronic subdural recurrence:** Common in elderly and anticoagulated; may require repeat evacuation
- **Post-operative re-bleeding:** Monitor post-op CT; anticoagulation restart must be carefully timed

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Epidural = lens-shaped on CT, arterial, lucid interval. Subdural = crescent-shaped on CT, venous, gradual presentation"
- **Anticoagulation risk:** All anticoagulated patients with head trauma need CT and monitoring regardless of symptoms
- **Subdural in elderly:** Brain atrophy makes bridging veins stretch and tear easily — even minor trauma causes significant bleeding

## Related

- [[brain-trauma]]
- [[cerebral-edema]]
- [[cerebrovascular-disease-stroke]]
- [[hypertension]]
- [[mannitol]]
- [[protamine-sulfate]]
- [[vitamin-k]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('hemolytic-uremic-syndrome-hus', 'Hemolytic Uremic Syndrome (HUS)', 'disease', '# Hemolytic Uremic Syndrome (HUS)

## Study Snapshot

### What It Is

HUS is a thrombotic microangiopathy classically characterized by the triad of microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury. Typical HUS often follows Shiga-toxin-producing bacterial infection.

> **The Simplified View:** "Tiny clots damage red cells and kidneys, dropping platelets and kidney function."

### Why It Matters

- Severe AKI requiring renal replacement
- Neurologic involvement and long-term renal sequelae

### Patho In One Line

Endothelial injury triggers platelet-rich microthrombi

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Typical (Shiga toxin-associated) and atypical complement-mediated forms
- **Modifiable Risk Factors:** Food/water hygiene for infectious prevention
- **Non-Modifiable Risk Factors:** Genetic complement dysregulation in atypical HUS
- **Pathways:** Endothelial injury → microthrombi formation

### What You See

- Hematologic: Pallor/fatigue — Hemolytic anemia
- Renal: Oliguria/AKI — Renal microthrombi and ischemia
- Heme/skin: Petechiae/bruising — Thrombocytopenia

### What Confirms It

Syndromic diagnosis by triad + clinical context; evaluate for Shiga toxin and atypical features.

## Nursing Lens

### Nursing Priorities

**Renal Support:** strict I&O, fluid/electrolyte monitoring, dialysis readiness.
**Hematologic Safety:** bleeding/anemia monitoring and transfusion support as ordered.

### Red Flags

- Severe AKI requiring renal replacement
- Neurologic involvement and long-term renal sequelae

### Treatment Themes

- Typical HUS: mainly supportive care (fluids, BP, dialysis as needed)
- Atypical HUS: complement inhibition therapy in specialist-guided management

## Exam Layer

### Exam Clues

- Think HUS triad when AKI + thrombocytopenia + hemolysis appear together.
- Avoid assuming all thrombotic microangiopathies are the same etiology.

## Related

- [[acute-kidney-injury-aki]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('hemophilia-a-and-b', 'Hemophilia A & B', 'disease', '# Hemophilia A & B

## Study Snapshot

### What It Is

Hemophilia A and B are X-linked recessive bleeding disorders caused by deficiency of Factor VIII (Hemophilia A) or Factor IX (Hemophilia B) in the intrinsic coagulation pathway. The clinical picture is identical — spontaneous joint bleeds, muscle hematomas, and prolonged bleeding after injury. The cascade stalls at the amplification step, producing the same result through different broken factors.

> **The Simplified View:** "The coagulation cascade is like a waterfall — Factor VIII and Factor IX are two of the major steps that amplify the signal to make a clot. Without them, the cascade stalls out before a solid fibrin clot can form. Same broken plumbing, different pipe."

### Why It Matters

- **Hemarthrosis (joint bleeds):** Recurrent bleeds → synovitis → cartilage destruction → hemophilic arthropathy (irreversible joint damage and deformity).
- **Compartment syndrome:** Muscle hematomas in closed fascial compartments — limb-threatening emergency requiring fasciotomy.
- **Factor inhibitors:** Neutralizing antibodies develop against infused factor — bleeding refractory to standard treatment; immune tolerance protocols needed.
- **Intracranial hemorrhage:** Most common cause of death; any head trauma requires immediate factor coverage + neuro imaging.
- **Hemophilia B-specific:** Nephrocalcinosis risk with long-term factor replacement in some patients.

### Patho In One Line

Blood vessel injury exposes tissue factor → extrinsic pathway initiates clotting.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** X-linked recessive mutation → deficient or dysfunctional Factor VIII (Hem A) or Factor IX (Hem B). The gene is on the X chromosome, so males are affected; females are carriers.
- **Modifiable Risk Factors:** Contact sports, dental work without prophylaxis, medications impairing platelet function (NSAIDs)
- **Non-Modifiable Risk Factors:** Male sex; maternal carrier status; family history
- **Pathways:** ↓ Factor VIII or IX → intrinsic pathway impaired → insufficient thrombin generation → unstable fibrin clot → bleeding into joints, muscles, soft tissues

**Female Carriers:** Female carriers have ~50% normal factor levels — usually asymptomatic but may have mildly increased bleeding; some are symptomatic if lyonization heavily favors the affected X chromosome.

### What You See

Both Hemophilia A and B present identically — the bleeding pattern is indistinguishable without a specific factor assay.

- Musculoskeletal: Spontaneous hemarthrosis (ankles, knees, elbows — most common) — Bleeding into synovial space; joints under high pressure
- Musculoskeletal: Muscle hematomas (psoas, calf, thigh, forearm) — Deep bleeding into confined fascial compartments
- Hematologic: Prolonged bleeding after cuts/injury — Failed intrinsic cascade → inadequate clot
- Integumentary: Easy bruising, deep tissue bleeding — Bleeding into soft tissues and muscles
- Neurologic: Intracranial hemorrhage (spontaneous or post-trauma) — Serious; most common cause of death in hemophilia
- Post-op: Exaggerated post-surgical bleeding — Often first presentation in mild hemophilia

### What Confirms It

Specific factor activity assay — Factor VIII for Hemophilia A; Factor IX for Hemophilia B.

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Acute bleed management:** RICE (Rest, Ice, Compression, Elevation) for joint/muscle bleeds; anticipate ordered appropriate factor concentrate promptly per protocol; immobilize affected joint; elevated extremity.
**Pain and mobility:** Acetaminophen for pain only; NSAIDs contraindicated; gentle ROM after bleeds resolve; physiotherapy for chronic arthropathy.

### Red Flags

- **Hemarthrosis (joint bleeds):** Recurrent bleeds → synovitis → cartilage destruction → hemophilic arthropathy (irreversible joint damage and deformity).
- **Compartment syndrome:** Muscle hematomas in closed fascial compartments — limb-threatening emergency requiring fasciotomy.
- **Factor inhibitors:** Neutralizing antibodies develop against infused factor — bleeding refractory to standard treatment; immune tolerance protocols needed.
- **Intracranial hemorrhage:** Most common cause of death; any head trauma requires immediate factor coverage + neuro imaging.
- **Hemophilia B-specific:** Nephrocalcinosis risk with long-term factor replacement in some patients.

## Exam Layer

### Exam Clues

- Hemophilia = joint/muscle DEEP bleeding. Von Willebrand = mucocutaneous (surface) bleeding. Know the distinction cold.
- PT normal + PTT prolonged + bleeding = intrinsic pathway problem → think Factor VIII, IX, or XI deficiency.
- Both are X-linked recessive → affected males, carrier females. A male with hemophilia inherited the gene from his mother.
- Severe hemophilia (<1% factor) can have spontaneous bleeding without any trauma.
- Emicizumab (Hemlibra) bypasses the broken factor entirely — works for both Hem A and Hem B.
- Never give IM injections (risk of hematoma) — use subQ or IV.

## Related

- [[acetaminophen]]
- [[desmopressin]]
- [[DIC]]
- [[dic-disseminated-intravascular-coagulation]]
- [[Factor XI Deficiency]]
- [[Thrombocytopenia]]
- [[Von Willebrand Disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('hirschsprung-disease', 'Hirschsprung Disease', 'disease', '# Hirschsprung Disease

## Study Snapshot

### What It Is

Congenital absence of ganglion cells (aganglionosis) in a segment of colon → no peristalsis in that segment → functional obstruction.

> **The Simplified View:** "A section of colon has no nerve cells, so it can''t push anything through — like a paralyzed pipe."

### Why It Matters

- Hirschsprung-associated enterocolitis (most common cause of morbidity/mortality)
- Toxic megacolon
- Perforation
- Post-op: incontinence, constipation, enterocolitis recurrence

### Patho In One Line

Segment of colon lacks ganglion cells (myenteric/submucosal plexus)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Failure of neural crest cell migration to distal colon during fetal development
- **Modifiable Risk Factors:** None
- **Non-Modifiable Risk Factors:** Male sex, Down syndrome, family history, RET gene mutations
- **Pathways:** Developmental: absent ganglion cells → no relaxation/contraction coordination → functional obstruction

### What You See

- GI: Failure to pass meconium (24–48h) — No peristalsis in aganglionic segment
- GI: Abdominal distension — Obstruction, gas accumulation
- GI: Bilious vomiting — Proximal obstruction
- GI: Chronic severe constipation — Functional obstruction
- Acute: Explosive watery diarrhea (enterocolitis) — Bacterial overgrowth proximal to obstruction → Hirschsprung-associated enterocolitis

### What Confirms It

**Rectal suction biopsy** — absence of ganglion cells, hypertrophied nerve trunks

## Nursing Lens

### Nursing Priorities

**Obstruction Management:** Monitor for distension, vomiting, bowel function; rectal irrigations as ordered

**Pre-surgical Preparation:** Decompression, nutritional support, hydration

**Post-op Care:** Wound/ostomy care if staged, monitor bowel function, assess for enterocolitis

### Red Flags

- Hirschsprung-associated enterocolitis (most common cause of morbidity/mortality)
- Toxic megacolon
- Perforation
- Post-op: incontinence, constipation, enterocolitis recurrence

## Exam Layer

### Exam Clues

- Failure to pass meconium in first 24–48h = red flag
- Absence of ganglion cells = the diagnostic finding
- Associated with Down syndrome
- Rectal suction biopsy = commonly tested confirmation clue (NOT barium enema)
- Functional obstruction (no mechanical blockage — the nerves are missing)
- "Transition zone" on barium enema = dilated proximal → narrow distal

## Related

- [[intussusception]]
- [[pyloric-stenosis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('huntington-s-disease', 'Huntington''s Disease', 'disease', '# Huntington''s Disease

## Study Snapshot

### What It Is

Huntington''s disease is a progressive inherited neurodegenerative disorder caused by CAG trinucleotide repeat expansion in the **HTT** gene. It causes motor dysfunction (chorea), cognitive decline, and psychiatric symptoms.

### Why It Matters

- Aspiration pneumonia, malnutrition, trauma from falls
- Progressive dependence and severe psychiatric morbidity

### Patho In One Line

Mutant huntingtin protein accumulates and impairs neuronal function

## Clinical Pattern

### Who Is At Risk

- **Cause:** Autosomal dominant HTT mutation (chromosome 4)
- **Major risk factor:** Family history (50% risk in first-degree offspring)
- **Pathway:** Striatal and cortical neuron degeneration, especially caudate/putamen

### What You See

- Chorea, dystonia, gait instability, dysarthria
- Executive dysfunction, memory decline
- Depression, irritability, impulsivity, suicidality risk

### What Confirms It

- Clinical syndrome + family history
- Confirmatory genetic testing for HTT CAG expansion
- MRI/CT may show caudate atrophy (supportive)

## Nursing Lens

### Nursing Priorities

- Fall/injury prevention and swallowing/aspiration monitoring
- Support nutrition, communication, and ADL adaptation
- Screen for depression/suicide risk; involve caregivers early

### Red Flags

- Aspiration pneumonia, malnutrition, trauma from falls
- Progressive dependence and severe psychiatric morbidity

### Treatment Themes

- VMAT2 inhibitors (e.g., tetrabenazine/deutetrabenazine) for chorea
- Antipsychotics for severe chorea/behavioral disturbance
- Antidepressants/anxiolytics as indicated

## Related

- [[dementia]]
- [[frontotemporal-dementia]]
- [[parkinsons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('hydrocephalus', 'Hydrocephalus', 'disease', '# Hydrocephalus

## Study Snapshot

### What It Is

Hydrocephalus is abnormal accumulation of cerebrospinal fluid (CSF) in the ventricles, causing ventricular enlargement and increased intracranial pressure (or, in normal-pressure hydrocephalus, altered CSF dynamics with normal measured pressure).

### Why It Matters

- Shunt obstruction, shunt infection, overdrainage/subdural hematoma
- Developmental delay or permanent neurologic deficits if untreated

### Patho In One Line

CSF outflow obstruction or absorption failure develops

## Clinical Pattern

### Who Is At Risk

- **Causes:** Obstructive (non-communicating), impaired absorption (communicating), rarely overproduction
- **Risk factors:** Congenital malformations, intraventricular hemorrhage, meningitis, tumors, head trauma
- **Pathway:** CSF flow/absorption imbalance

### What You See

- Infants: Enlarging head circumference, bulging fontanelle, sunset eyes, irritability
- Older children/adults: Headache, nausea/vomiting, papilledema, gait/cognitive changes
- NPH triad: Gait disturbance, urinary incontinence, cognitive impairment

### What Confirms It

- Cranial ultrasound (infants), CT/MRI showing ventriculomegaly
- Neurologic exam and ICP/CSF assessment when indicated
- Lumbar tap test may support NPH diagnosis

## Nursing Lens

### Nursing Priorities

- Frequent neuro checks and ICP symptom surveillance
- Pre/post-op care for shunt or ETV; monitor incision and drainage patterns
- Family teaching: shunt malfunction/infection red flags

### Red Flags

- Shunt obstruction, shunt infection, overdrainage/subdural hematoma
- Developmental delay or permanent neurologic deficits if untreated

### Treatment Themes

- No definitive chronic drug cure
- Temporary ICP support measures may be used in select settings
- Treat underlying causes (e.g., infection, tumor-related edema) as indicated

## Related

- [[cerebrovascular-disease-stroke]]
- [[dementia]]
- [[meningitis]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('intussusception', 'Intussusception', 'disease', '# Intussusception

## Study Snapshot

### What It Is

Intussusception is the telescoping (invagination) of a proximal segment of intestine into an adjacent distal segment, causing obstruction and potentially ischemia/necrosis.

> **The Simplified View:** "One section of the intestine slides into the next like a telescope collapsing — blood supply gets cut off."

### Why It Matters

- Bowel necrosis and perforation → peritonitis, sepsis
- Recurrence (~10% after enema reduction)
- Death if untreated (nearly always fatal in infants if >24h unreduced)
- Short bowel syndrome if resection needed

### Patho In One Line

Proximal bowel segment telescopes into distal segment

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Often idiopathic; viral infections causing lymphoid hyperplasia may serve as a "lead point"
- **Modifiable Risk Factors:** None clearly established
- **Non-Modifiable Risk Factors:** Age (6–24 months), male > female
- **Pathways:** Mechanical: proximal bowel invaginates into distal lumen → venous congestion → edema → ischemia → necrosis if unreduced

### What You See

- GI: Colicky abdominal pain (intermittent) — Bowel obstruction with peristalsis against blockage
- GI: Vomiting — Obstruction
- GI: "Currant jelly" stools (blood + mucus) — Mucosal hemorrhage from ischemia
- Abdomen: Sausage-shaped mass (RUQ) — Telescoped bowel palpable
- General: Irritability, knees to chest — Pain response in infants
- Late: Lethargy, shock — Ischemia, fluid loss

### What Confirms It

**Ultrasound** — target sign or pseudokidney sign

## Nursing Lens

### Nursing Priorities

**Rapid Assessment:** Pain pattern, stool character, abdominal exam, vitals (shock signs)

**Pre-procedure:** NPO, IV access, prepare for enema reduction or surgery

**Post-reduction:** Monitor for recurrence (occurs in ~10% of cases), bowel function return

### Red Flags

- Bowel necrosis and perforation → peritonitis, sepsis
- Recurrence (~10% after enema reduction)
- Death if untreated (nearly always fatal in infants if >24h unreduced)
- Short bowel syndrome if resection needed

## Exam Layer

### Exam Clues

- Classic triad in infants: colicky pain + vomiting + currant jelly stools
- Most common cause of intestinal obstruction in infants
- **Time-sensitive** — reduce within 24h for best outcomes
- Enema = first-line for large bowel; surgery for small bowel
- Ultrasound = imaging of choice (not X-ray)

## Related

- [[appendicitis]]
- [[pyloric-stenosis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('meningitis', 'Meningitis', 'disease', '# Meningitis

## Study Snapshot

### What It Is

Meningitis is inflammation of the meninges, the protective membranes covering the brain and spinal cord. It is usually caused by infection and can progress rapidly, especially when bacterial. The biggest danger is not just infection itself, but the inflammatory response that causes cerebral edema, increased intracranial pressure, reduced brain perfusion, and possible sepsis.

> **The Simplified View:** "An infection gets into the meninges/CSF, the brain gets inflamed and swollen, pressure rises, and the patient can crash fast."

### Why It Matters

- Increased ICP and brain herniation
- Sepsis / septic shock / DIC
- Seizures
- Hearing loss
- Long-term neurologic deficits
- Death if treatment is delayed

### Patho In One Line

Pathogen enters the bloodstream or spreads from a nearby infection.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Bacterial, viral, and less commonly fungal/parasitic infection
- **Common Bacterial Causes:** *Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae*, Group B strep in neonates
- **Common Viral Causes:** Enteroviruses, HSV, VZV
- **Modifiable Risk Factors:** Incomplete vaccination, exposure in close quarters, delayed treatment of nearby infection
- **Non-Modifiable / Major Risk Factors:** Immunosuppression, extremes of age, skull trauma, neurosurgery
- **Pathways:** Hematogenous spread or spread from nearby ENT/respiratory infection into the CNS

### What You See

- Neuro: Severe headache — Meningeal irritation + inflammation
- Neuro: Nuchal rigidity — Inflamed meninges irritate neck movement
- Neuro: Photophobia — Meningeal irritation and CNS sensitivity
- Neuro: Confusion / altered LOC — Reduced cerebral perfusion, inflammation, raised ICP
- Neuro: Seizures — Cortical irritation from CNS inflammation
- GI: Nausea / vomiting — Raised ICP and CNS irritation

### What Confirms It

**Lumbar puncture with CSF analysis** (cell count, protein, glucose, Gram stain, culture, PCR as indicated).

## Nursing Lens

### Nursing Priorities

**Rapid Recognition:** treat meningitis as time-sensitive; monitor for worsening neuro status, shock, and ICP signs.

**Neuro Monitoring:** frequent LOC, pupils, vitals, seizure activity, and trend changes.

**Safety + Support:** maintain isolation precautions when indicated, manage fever/pain, provide a dark quiet environment, and support oxygenation/perfusion.

### Red Flags

- Increased ICP and brain herniation
- Sepsis / septic shock / DIC
- Seizures
- Hearing loss
- Long-term neurologic deficits
- Death if treatment is delayed

### Treatment Themes

- **First-line when bacterial suspected:** Immediate empiric IV antibiotics
- **Adjunct:** [[dexamethasone|Dexamethasone]] early, often with or just before first antibiotic dose depending on protocol
- **Supportive meds:** Antipyretics, analgesics, anticonvulsants if indicated
- **Infection control:** Droplet precautions initially for suspected meningococcal disease

## Exam Layer

### Exam Clues

- **Do not delay antibiotics** in suspected bacterial meningitis just to get the LP done first if the patient is unstable.
- The classic triad is **fever + headache + neck stiffness**, but not every patient presents perfectly.
- **Meningococcal rash = big red flag.**
- Think of the real danger as **infection + inflammation + raised ICP + sepsis**.

## Related

- [[../Assignments/Meningitis_Infographic_Content]]
- [[dexamethasone]]
- [[hydrocephalus]]
- [[Screenshot 2026-03-09 at 8.40.32 PM.png]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('motor-neuron-syndromes', 'Motor Neuron Syndromes', 'disease', '# Motor Neuron Syndromes

## Study Snapshot

### What It Is

Motor neuron syndromes result from dysfunction of either upper motor neurons (UMNs) in the motor cortex or lower motor neurons (LMNs) in the anterior horn of the spinal cord and cranial nerve motor nuclei. The clinical distinction — whether weakness is accompanied by UMN signs (spasticity, hyperreflexia, Babinski) or LMN signs (flaccidity, hyporeflexia, fasciculations, atrophy) — is the cornerstone of neurological localization. These syndromes range from degenerative diseases (ALS, SMA) to compressive lesions (myelopathy) and autoimmune conditions (multifocal motor neuropathy).

> **The Simplified View:** "Upper motor neurons are the ''go'' signals from the brain''s motor cortex; lower motor neurons are the ''wires'' going from the spinal cord to the muscles. When the ''go'' signals are cut, you get a rigid, overactive muscle (spasticity). When the ''wires'' are cut, you get a limp, twitching, atrophied muscle."

### Why It Matters

- **ALS progression to respiratory failure:** Leading cause of death; advance care planning critical
- **Pseudobulbar affect (PBA):** Involuntary crying/laughing episodes from UMN bulbar involvement — treat with dextromethorphan/quinidine (Nuedexta)
- **Multifocal motor neuropathy misdiagnosed as ALS:** MMN is treatable with IVIG and has a better prognosis — distinguish with conduction block on NCS

## Clinical Pattern

### What You See

- Neuro: [spasticity — velocity-dependent increased tone] — UMN — loss of corticospinal inhibition on stretch reflex
- Neuro: [hyperreflexia — brisk DTRs, pathological reflexes] — UMN — disinhibition of spinal reflex arcs
- Neuro: [Babinski sign — upgoing plantar reflex] — UMN — release of primitive protective reflex
- Neuro: [flaccidity — low tone, weakness] — LMN — muscle denervated, no voluntary input
- Neuro: [hyporeflexia/areflexia — diminished or absent DTRs] — LMN — reflex arc interrupted at anterior horn or nerve
- Neuro: [fasciculations — muscle twitching at rest] — LMN — spontaneous denervation potentials in muscle fibers

### What Confirms It

- CK (often mildly elevated in LMN disease)
- Anti-GM1 ganglioside antibodies (multifocal motor neuropathy — treatable with IVIG)
- Genetic testing for C9orf72 (ALS), SMN1 (SMA)

## Nursing Lens

### Nursing Priorities

**Respiratory Assessment:** Monitor FVC (forced vital capacity) monthly; assess for nocturnal hypoventilation (morning headaches, fatigue); BiPAP typically needed when FVC <50% or symptomatic; prepare for progressive respiratory failure

**Bulbar Function & Swallowing:** Referral to speech-language pathologist for swallowing evaluation; monitor weight; consider feeding tube (PEG) before FVC drops too low for safe procedure

### Red Flags

- **ALS progression to respiratory failure:** Leading cause of death; advance care planning critical
- **Pseudobulbar affect (PBA):** Involuntary crying/laughing episodes from UMN bulbar involvement — treat with dextromethorphan/quinidine (Nuedexta)
- **Multifocal motor neuropathy misdiagnosed as ALS:** MMN is treatable with IVIG and has a better prognosis — distinguish with conduction block on NCS

## Exam Layer

### Exam Clues

- **NCLEX pearl:** UMN = hyperreflexia, spasticity, Babinski (upgoing); LMN = hyporeflexia/areflexia, flaccidity, fasciculations, atrophy
- **ALS vs. MMN:** MMN has asymmetric hand/forearm weakness + conduction block on NCS; no UMN signs; treatable with IVIG
- **Differentiating myopathy from motor neuron disease:** Myopathy has proximal weakness, no fasciculations, normal NCS, CK often very elevated; motor neuron disease has fasciculations, abnormal NCS

## Related

- [[als]]
- [[baclofen]]
- [[cervical-spondylosis]]
- [[edaravone]]
- [[ivig]]
- [[multiple-sclerosis-ms]]
- [[riluzole]]
- [[spinal-cord-injury]]
- [[tizanidine]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('multiple-myeloma', 'Multiple Myeloma', 'disease', '# Multiple Myeloma

## Study Snapshot

### What It Is

Multiple Myeloma is a malignancy of plasma cells in the bone marrow. Malignant plasma cells proliferate uncontrollably, produce excessive monoclonal (M) protein, activate osteoclasts (causing lytic bone lesions), suppress normal plasma cells (causing immunodeficiency), and damage kidneys via light chain deposition.

> **The Simplified View:** "Your plasma cells — which normally make antibodies — go rogue and multiply wildly, flooding the blood with junk protein while eating away your bones and clogging your kidneys."

### Why It Matters

- **Spinal cord compression:** From pathologic vertebral fracture → neurologic emergency (bladders/bowels, weakness, sensory loss) — requires immediate steroids + radiation/neurosurgery.
- **Hypercalcemic crisis:** Severe confusion, cardiac arrhythmias — treat with hydration + bisphosphonates + calcitonin.
- **Renal failure requiring dialysis:** From light chain cast nephropathy.
- **Sepsis:** From immunocompromised state; most common cause of death.

### Patho In One Line

Malignant plasma cells accumulate in bone marrow, crowding out normal hematopoietic cells.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Malignant plasma cell (B-cell derived) proliferation; cause of initial mutation is usually unknown.
- **Modifiable Risk Factors:** Obesity, chemical/toxic exposures (some occupational)
- **Non-Modifiable Risk Factors:** Age, male sex, Black race, family history, MGUS (pre-malignant state)
- **Pathways:** Clonal plasma cell expansion in marrow → ↑ M-protein (non-functional antibody) + ↑ osteoclast-activating factors → lytic lesions + immunosuppression + light chain nephropathy

### What You See

- Musculoskeletal: Bone pain, pathological fractures — Lytic lesions from ↑ osteoclast activity
- Musculoskeletal: Hypercalcemia: confusion, constipation, polyuria — Osteoclasts release calcium into blood
- Renal: Anuria, ↑ creatinine, kidney failure — Light chain deposition in renal tubules
- Hematologic: Anemia, infections — An marrow infiltration + ↓ normal immunoglobulin
- Immune: Recurrent bacterial infections — Hypogammaglobulinemia (↓ normal antibodies)
- Neurologic: Fatigue, weakness from anemia and hypercalcemia — ↓ O₂ delivery + electrolyte disturbance

### What Confirms It

Bone marrow biopsy/aspirate confirms plasma cell clonal expansion (>10% plasma cells).

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Infection prevention:** Monitor fever, WBC trends; assess for cough, urinary symptoms, skin/soft tissue infections. Neutropenic precautions when indicated.
**Renal protection:** Monitor I/O, daily weights, creatinine, BUN; avoid nephrotoxins; hydration.

### Red Flags

- **Spinal cord compression:** From pathologic vertebral fracture → neurologic emergency (bladders/bowels, weakness, sensory loss) — requires immediate steroids + radiation/neurosurgery.
- **Hypercalcemic crisis:** Severe confusion, cardiac arrhythmias — treat with hydration + bisphosphonates + calcitonin.
- **Renal failure requiring dialysis:** From light chain cast nephropathy.
- **Sepsis:** From immunocompromised state; most common cause of death.

## Exam Layer

### Exam Clues

- SLIM-CRAB is the classic diagnostic/clinical framework — know it cold.
- Myeloma patients get recurrent infections because the malignant plasma cells crowd out normal plasma cells → ↓ functional antibodies.
- Bortezomib (proteasome inhibitor) must be given subcutaneously or IV — monitor for peripheral neuropathy.
- Any sudden back pain + myeloma history = suspect spinal cord compression until proven otherwise.
- Hydration is key to preventing cast nephropathy and hypercalcemia.

## Related

- [[chronic-kidney-disease-ckd]]
- [[cyclophosphamide]]
- [[dexamethasone]]
- [[doxorubicin]]
- [[MGUS]]
- [[non-hodgkin-lymphoma]]
- [[prednisone]]
- [[Waldenström Macroglobulinemia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('multiple-sclerosis-ms', 'Multiple Sclerosis (MS)', 'disease', '# Multiple Sclerosis (MS)

## Study Snapshot

### What It Is

MS is an immune-mediated CNS disorder characterized by inflammatory demyelination and axonal injury, causing neurologic deficits separated in time and/or location.

### Why It Matters

- Progressive disability, depression, chronic pain
- Treatment-related infection or lab abnormalities

### Patho In One Line

Peripheral immune activation crosses blood-brain barrier

## Clinical Pattern

### Who Is At Risk

- **Cause:** Multifactorial autoimmune susceptibility
- **Risk factors:** Female sex, family history, EBV exposure, low vitamin D, smoking
- **Pathway:** Immune attack on CNS myelin and oligodendrocytes

### What You See

- Optic neuritis, diplopia, sensory loss, limb weakness
- Spasticity, ataxia, bowel/bladder dysfunction, fatigue
- Relapsing-remitting pattern is most common initially

### What Confirms It

- MRI brain/spine with demyelinating lesions disseminated in space/time
- CSF oligoclonal bands (supportive)
- Evoked potentials in selected cases

## Nursing Lens

### Nursing Priorities

- Monitor relapse symptoms, mobility, and functional decline
- Promote energy conservation, fall prevention, rehab adherence
- Infection surveillance and vaccine/safety counseling with immunotherapies

### Red Flags

- Progressive disability, depression, chronic pain
- Treatment-related infection or lab abnormalities

### Treatment Themes

- Relapse treatment: high-dose corticosteroids
- Disease-modifying therapies (platform or high-efficacy agents)
- Symptom control: antispasticity, neuropathic pain, bladder/fatigue management

## Related

- [[amyotrophic-lateral-sclerosis-als]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('nephroblastoma-wilms-tumor', 'Nephroblastoma (Wilms Tumor)', 'disease', '# Nephroblastoma (Wilms Tumor)

## Study Snapshot

### What It Is

Wilms tumor is a malignant embryonal renal tumor of childhood, usually presenting as an asymptomatic abdominal mass.

### Why It Matters

- Tumor rupture/spillage, metastasis, treatment toxicity
- Long-term: CKD risk, secondary malignancy risk (survivorship)

### Patho In One Line

Dysregulated renal developmental tissue persists

## Clinical Pattern

### Who Is At Risk

- **Cause:** Genetic/developmental renal tumorigenesis
- **Risk factors:** WT1-related syndromes (WAGR, Denys-Drash), Beckwith-Wiedemann, hemihyperplasia
- **Pathway:** Nephrogenic rests progressing to malignant blastemal tumor

### What You See

- Painless abdominal/flank mass
- Hematuria, hypertension, abdominal pain (variable)
- Fever or anemia in some patients

### What Confirms It

- Abdominal ultrasound then CT/MRI for staging
- Chest imaging for pulmonary metastases
- Histopathology confirms diagnosis

## Nursing Lens

### Nursing Priorities

- **Do not palpate known renal mass repeatedly** (rupture risk)
- Monitor BP, renal function, fluid status, chemo adverse effects
- Family teaching on treatment phases and infection precautions

### Red Flags

- Tumor rupture/spillage, metastasis, treatment toxicity
- Long-term: CKD risk, secondary malignancy risk (survivorship)

### Treatment Themes

- Chemotherapy protocols (agent selection by stage/histology)
- Adjunct radiotherapy for selected higher-risk cases
- Supportive meds for nausea, infection prophylaxis, and pain

## Related

- [[acute-kidney-injury-aki]]
- [[chronic-kidney-disease-ckd]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('nephrolithiasis-kidney-stones', 'Nephrolithiasis (Kidney Stones)', 'disease', '# Nephrolithiasis (Kidney Stones)

## Study Snapshot

### What It Is

Nephrolithiasis is formation of crystalline calculi in the kidney/urinary tract, often causing acute colicky pain and possible obstruction.

### Why It Matters

- Hydronephrosis, AKI, recurrent infection/urosepsis
- Recurrent stone disease with chronic renal injury risk

### Patho In One Line

Urine supersaturates with lithogenic solutes

## Clinical Pattern

### Who Is At Risk

- **Stone types:** Calcium oxalate (most common), uric acid, struvite, cystine
- **Risk factors:** Low fluid intake, high sodium intake, metabolic disorders, recurrent UTIs, family history
- **Pathway:** Urinary supersaturation → crystal nucleation and aggregation

### What You See

- Sudden severe flank pain radiating to groin
- Nausea/vomiting, hematuria, urinary urgency/frequency
- Fever/chills suggest infected obstructed system (emergency)

### What Confirms It

- Non-contrast CT KUB (high sensitivity)
- Urinalysis for blood/crystals/infection
- Serum creatinine/electrolytes; stone analysis when available

## Nursing Lens

### Nursing Priorities

- Pain control, hydration guidance, strain urine for stone capture
- Monitor urine output, fever, and worsening obstruction signs
- Reinforce recurrence prevention: fluid goals, diet, follow-up testing

### Red Flags

- Hydronephrosis, AKI, recurrent infection/urosepsis
- Recurrent stone disease with chronic renal injury risk

### Treatment Themes

- NSAIDs first-line analgesia (if appropriate)
- Alpha-blocker (e.g., tamsulosin) may aid distal ureteral passage
- Antibiotics for concomitant infection
- Preventive meds guided by metabolic profile (e.g., thiazides, citrate, [[allopurinol|Allopurinol]])

## Related

- [[acute-kidney-injury-aki]]
- [[allopurinol]]
- [[pyelonephritis]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('nephrotic-syndrome', 'Nephrotic Syndrome', 'disease', '# Nephrotic Syndrome

## Study Snapshot

### What It Is

Nephrotic syndrome is a glomerular disorder causing heavy proteinuria, hypoalbuminemia, edema, and hyperlipidemia from filtration barrier damage.

### Why It Matters

- Venous thromboembolism, spontaneous bacterial infection
- AKI and progression to CKD

### Patho In One Line

Glomerular barrier permeability increases

## Clinical Pattern

### Who Is At Risk

- **Primary causes:** Minimal change disease, FSGS, membranous nephropathy
- **Secondary causes:** Diabetes, lupus, amyloidosis, infections, drugs
- **Pathway:** Podocyte/glomerular basement membrane injury

### What You See

- Periorbital/generalized edema, weight gain, foamy urine
- Fatigue, ascites/pleural effusions in severe cases
- Often minimal gross hematuria compared with nephritic states

### What Confirms It

- Urine protein quantification (nephrotic range)
- Low serum albumin, elevated lipids, urinalysis with lipiduria
- Kidney biopsy in many cases to define etiology

## Nursing Lens

### Nursing Priorities

- Strict I&O, daily weights, edema/skin assessment
- Monitor renal function, electrolytes, clot/infection signs
- Sodium restriction education and medication adherence support

### Red Flags

- Venous thromboembolism, spontaneous bacterial infection
- AKI and progression to CKD

### Treatment Themes

- RAAS blockade (ACEi/ARB) to reduce proteinuria
- Diuretics for edema; statins when indicated
- Anticoagulation in selected high-thrombosis-risk patients
- Etiology-directed immunosuppression (e.g., steroids) when appropriate

## Related

- [[albumin]]
- [[chronic-kidney-disease-ckd]]
- [[glomerulonephritis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('neural-tube-defects', 'Neural Tube Defects', 'disease', '# Neural Tube Defects

## Study Snapshot

### What It Is

Neural tube defects (NTDs) are congenital malformations resulting from failure of the neural tube to close properly during embryonic development (days 17–30 post-conception). The neural tube forms the brain superiorly and the spinal cord inferiorly; failure of closure at different levels produces different defects. Spina bifida ranges from harmless occulta (bony defect only) to myelomeningocele (open spinal cord with neurological deficits). Anencephaly is incompatible with life. Folic acid supplementation before conception and during early pregnancy is the major public health preventive measure.

> **The Simplified View:** "The neural tube is the precursor to the brain and spinal cord — it forms like a zipper closing from the middle outward. If the zipper gets stuck or doesn''t close properly in the skull region, you get anencephaly (no brain). If it fails in the spine region, you get spina bifida (open spine). And folic acid is the thing that helps the zipper close properly."

### Why It Matters

- **Meningitis:** Open neural tissue → infection risk → IV antibiotics urgently
- **Hydrocephalus requiring shunt:** Nearly all myelomeningocele patients; VP shunt placement
- **Chiari II malformation:** Cerebellar tonsils herniate through foramen magnum → brainstem compression → stridor, apnea, dysphagia; may need suboccipital decompression
- **Tethered cord syndrome:** Spinal cord adherent to surgical scar → progressive neurological deterioration; requires surgical release
- **Latex allergy:** From repeated catheterizations and surgeries — use latex-free supplies
- **Neurogenic bladder → renal failure:** Without proper CIC management, hydronephrosis → CKD

## Clinical Pattern

### What You See

- MSK: [visible midline sac over spine — myelomeningocele] — Open neural tube protrusion
- MSK: [lower extremity weakness or paralysis — below lesion level] — Lumbar/sacral cord damage
- MSK: [clubfoot (talipes equinovarus)] — Muscle imbalance from nerve involvement
- MSK: [hip dislocation] — Abnormal muscle forces on developing hip
- MSK: [scoliosis] — Paraspinal muscle weakness
- Neuro: [hydrocephalus — enlarging head circumference, bulging fontanelle] — Chiari II malformation with 4th ventricle obstruction

### What Confirms It

- **AFP:** Elevated in open NTDs (both prenatal and postnatal)
- **Closure site AFP:** Wound drainage if open defect

## Nursing Lens

### Nursing Priorities

**Prevent Infection and Protect Neural Tissue:** For open myelomeningocele — keep defect covered with sterile saline dressings; position prone to minimize tension on sac; IV antibiotics as ordered; surgical repair typically within 24–72 hours

**Monitor for Hydrocephalus and Shunt Complications:** Measure head circumference daily; assess fontanelle; monitor for signs of shunt malfunction (irritability, vomiting, headache, lethargy); Chiari II symptoms (stridor, feeding difficulties)

**Neurogenic Bladder/Bowel Management:** Clean intermittent catheterization (CIC) to prevent kidney damage; bowel program to prevent impaction; monitor for UTI symptoms; skin care for insensate areas

### Red Flags

- **Meningitis:** Open neural tissue → infection risk → IV antibiotics urgently
- **Hydrocephalus requiring shunt:** Nearly all myelomeningocele patients; VP shunt placement
- **Chiari II malformation:** Cerebellar tonsils herniate through foramen magnum → brainstem compression → stridor, apnea, dysphagia; may need suboccipital decompression
- **Tethered cord syndrome:** Spinal cord adherent to surgical scar → progressive neurological deterioration; requires surgical release
- **Latex allergy:** From repeated catheterizations and surgeries — use latex-free supplies
- **Neurogenic bladder → renal failure:** Without proper CIC management, hydronephrosis → CKD

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Myelomeningocele patient has neurogenic bladder — what is priority nursing intervention?" → Clean intermittent catheterization (CIC) to prevent kidney damage from urinary retention
- **Spina bifida occulta vs. myelomeningocele:** Occulta = bony defect only, intact neurology; myelomeningocele = open neural tissue, neurological deficits
- **Folic acid is key:** All women of childbearing age should take 400–800 mcg daily — NTDs occur before most women know they''re pregnant

## Related

- [[baclofen]]
- [[cefotaxime]]
- [[chiari-malformation]]
- [[folic-acid]]
- [[hydrocephalus]]
- [[morphine]]
- [[myelomeningocele-surgery]]
- [[neurogenic-bladder]]
- [[oxybutynin]]
- [[peg-laxative]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('neuromuscular-junction-disorders', 'Neuromuscular Junction Disorders', 'disease', '# Neuromuscular Junction Disorders

## Study Snapshot

### What It Is

Neuromuscular junction (NMJ) disorders involve dysfunction at the synapse between motor neuron and skeletal muscle — specifically at the acetylcholine receptor (AChR) or presynaptic terminal. In myasthenia gravis (MG), antibodies (usually anti-AChR, sometimes anti-MuSK) attack the postsynaptic receptor, blocking neuromuscular transmission and causing fatigable weakness. In Lambert-Eaton myasthenic syndrome (LEMS), antibodies against presynaptic voltage-gated calcium channels impair acetylcholine release. The critical distinction is that MG weakness WORSENS with activity (fatigable), while LEMS weakness may briefly IMPROVE with activity before worsening.

> **The Simplified View:** "The NMJ is where the nerve tells the muscle to contract — the nerve releases acetylcholine, the muscle has receptors to receive it. In MG, the receivers are blocked or destroyed (like someone jamming your phone''s signal). In LEMS, the sender isn''t sending enough signal (like a phone with low battery)."

### Why It Matters

- **Myasthenic crisis:** Respiratory failure from diaphragmatic weakness; requires intubation and aggressive immunotherapy; mortality 5% with modern treatment
- **Cholinergic crisis:** From AChE inhibitor overdose; SLUDGE symptoms + fasciculations + respiratory failure; treat by stopping AChE inhibitors
- **Thymoma:** 10–15% of MG patients — requires thymectomy; associated with more severe MG
- **Paraneoplastic LEMS:** Associated with small cell lung cancer — tumor treatment is primary therapy

## Clinical Pattern

### What You See

- Neuro: [fatigable ptosis — worsens with sustained upgaze] — Ocular muscles are highly used and AChR-dependent
- Neuro: [fluctuating diplopia — variable double vision] — Extraocular muscle weakness
- Neuro: [dysphagia — difficulty swallowing] — Bulbar muscle fatigability
- Neuro: [dysarthria — slurred speech, nasal voice] — Bulbar muscle weakness
- Neuro: [proximal limb weakness — climbing stairs, lifting] — Limb-girdle muscles affected
- Neuro: [respiratory muscle weakness — SOB, respiratory failure] — Diaphragmatic weakness (myasthenic crisis)

### What Confirms It

- **CT chest:** For thymoma (MG) or small cell lung cancer (LEMS)
- **Tumor markers:** If paraneoplastic LEMS suspected

## Nursing Lens

### Nursing Priorities

**Myasthenic vs. Cholinergic Crisis Differentiation:** Both cause respiratory weakness. Myasthenic crisis = under-treatment → need more AChE inhibitors, steroids, IVIG/PLEX. Cholinergic crisis = over-treatment → too much ACh → SLUDGE symptoms (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) + fasciculations and miosis. Treat by holding AChE inhibitor and doing edrophonium test (improvement = myasthenic crisis)

**Respiratory Monitoring:** Monitor FVC, negative inspiratory force (NIF); if FVC <1L or NIF <-20 cmH2O → prepare for intubation; myasthenic crisis is a medical emergency

**Medication Adherence and Trigger Avoidance:** Ensure immunosuppressants taken consistently; teach patients to avoid medications that worsen MG (aminoglycosides, fluoroquinolones, beta-blockers, magnesium, opioids)

### Red Flags

- **Myasthenic crisis:** Respiratory failure from diaphragmatic weakness; requires intubation and aggressive immunotherapy; mortality 5% with modern treatment
- **Cholinergic crisis:** From AChE inhibitor overdose; SLUDGE symptoms + fasciculations + respiratory failure; treat by stopping AChE inhibitors
- **Thymoma:** 10–15% of MG patients — requires thymectomy; associated with more severe MG
- **Paraneoplastic LEMS:** Associated with small cell lung cancer — tumor treatment is primary therapy

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "MG = fatigable weakness that WORSENS with use; LEMS = weakness that IMPROVES briefly with use (''warming up phenomenon'')"
- **Myasthenic vs. Cholinergic crisis:** SLUDGE + fasciculations + miosis = cholinergic (stop AChE inhibitors); no SLUDGE = myasthenic (increase AChE inhibitors)
- **Crisis trigger:** Infection is the #1 trigger for myasthenic crisis — always look for and treat infection

## Related

- [[azathioprine]]
- [[ivig]]
- [[lung-cancer-small-cell]]
- [[multiple-sclerosis-ms]]
- [[mycophenolate-mofetil]]
- [[prednisone]]
- [[pyridostigmine]]
- [[respiratory-failure]]
- [[thymoma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('neuropathic-pain', 'Neuropathic Pain', 'disease', '# Neuropathic Pain

## Study Snapshot

### What It Is

Neuropathic pain results from damage or disease affecting the somatosensory nervous system — the nerves themselves misfire and send pain signals without any true tissue threat. Unlike nociceptive pain (which warns of actual tissue damage), neuropathic pain is a disease of the nerve signaling itself. It manifests as burning, shooting, electric shock-like pain, often with allodynia (pain from light touch) and hyperalgesia (exaggerated response to painful stimuli).

> **The Simplified View:** "The alarm wiring is frayed — the smoke detector keeps going off even when there''s no fire."

### Why It Matters

- **Central sensitization:** Untreated neuropathic pain can lead to permanent CNS changes making pain refractory to treatment
- **Opioid dependence:** Inappropriate escalation of opioids in chronic neuropathic pain patients
- **Suicide risk:** Chronic pain patients on SNRIs/TCAs need mood monitoring

### Patho In One Line

**Nerve injury or disease** (diabetes, viral infection, trauma, chemo) damages peripheral nerve axons or myelin

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Diabetic peripheral neuropathy, post-herpetic neuralgia, trigeminal neuralgia, chemotherapy-induced peripheral neuropathy (CIPN), central post-stroke pain, multiple sclerosis, spinal cord injury, phantom limb pain
- **Modifiable Risk Factors:** Poor glycemic control (diabetics), alcohol use, smoking, vitamin B12 deficiency, sedentary lifestyle
- **Non-Modifiable Risk Factors:** Age (older adults), genetics (some channelopathies), prior chemotherapy, history of shingles
- **Pathways:** Peripheral nerve damage → ectopic nerve discharge → central sensitization in dorsal horn → thalamic and cortical pain processing abnormalities

### What You See

- Neuro: [burning pain, electric shocks] — Damaged sensory nerve ectopic firing
- Neuro: [allodynia — pain from light touch] — Central sensitization of pain pathways
- Neuro: [numbness, tingling, pins and needles] — Large-fiber sensory nerve involvement
- Musculo: [muscle weakness if motor nerves involved] — Motor neuron involvement in some etiologies
- Psych: [anxiety, depression, sleep disturbance] — Chronic pain impact on CNS

### What Confirms It

- HbA1c (diabetic neuropathy)
- Vitamin B12 levels
- Lyme serology, HIV testing if indicated
- Serum protein electrophoresis (paraproteinemia)
- CSF analysis if central cause suspected

## Nursing Lens

### Nursing Priorities

**Pain Assessment:** Use standardized tools (DN4, pain DETECT, VAS) to characterize neuropathic vs. nociceptive pain; assess functional impact on ADLs and sleep

**Medication Adherence & Titration:** Ensure patients understand the need for gradual uptitration of gabapentinoids to achieve therapeutic effect; reinforce that pain relief may take 2–4 weeks

### Red Flags

- **Central sensitization:** Untreated neuropathic pain can lead to permanent CNS changes making pain refractory to treatment
- **Opioid dependence:** Inappropriate escalation of opioids in chronic neuropathic pain patients
- **Suicide risk:** Chronic pain patients on SNRIs/TCAs need mood monitoring

## Exam Layer

### Exam Clues

- **NCLEX pearl:** When managing neuropathic pain, do NOT rely on opioids alone — gabapentinoids and SNRIs are first-line; opioids are a last resort
- **The question they love:** "A patient with diabetic neuropathy reports burning feet — which medication would you expect as first-line?" → Gabapentin or duloxetine

## Related

- [[amitriptyline]]
- [[diabetic-ketoacidosis]]
- [[duloxetine]]
- [[gabapentin]]
- [[multiple-sclerosis-ms]]
- [[pregabalin]]
- [[seizures-and-epilepsy]]
- [[venlafaxine]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('non-hodgkin-lymphoma', 'Non-Hodgkin Lymphoma', 'disease', '# Non-Hodgkin Lymphoma

## Study Snapshot

### What It Is

Non-Hodgkin Lymphoma (NHL) is a heterogeneous group of cancers originating in lymphocytes (B-cells, T-cells, or NK-cells) and lymph nodes. Malignant lymphoid cells proliferate and accumulate, eventually crowding out normal immune function. Unlike Hodgkin lymphoma, Reed-Sternberg cells are absent.

> **The Simplified View:** "Your lymph nodes — the security checkpoints of your immune system — get filled with cancerous lymphocytes that multiply out of control and block the immune system from doing its job."

### Why It Matters

- **Superior vena cava syndrome:** From mediastinal mass compression — facial swelling, dyspnea, stridor — medical emergency.
- **Spinal cord compression:** From epidural lymphoma — back pain, neuro deficits, bladder/bowel dysfunction.
- **Tumor lysis syndrome:** Acute oncologic emergency — hyperkalemia, hyperphosphatemia, hypocalcemia, acute kidney injury.
- **Bowel obstruction:** From GI/mesenteric lymphoma involvement.
- **Richter transformation:** Indolent B-cell NHL transforming into aggressive diffuse large B-cell lymphoma.

### Patho In One Line

Mutation in a single lymphocyte (B, T, or NK cell) creates a malignant clone.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Malignant transformation of B, T, or NK cells; usually unknown trigger. Think of it as an "overflowing water glass" — abnormal lymphocytes outnumber normal ones.
- **Modifiable Risk Factors:** Immunosuppression (post-transplant, HIV), obesity, chemical exposures
- **Non-Modifiable Risk Factors:** Age >65, male sex, family history, prior chemotherapy/radiation, autoimmune disease (Hashimoto thyroiditis, RA, celiac disease)
- **Pathways:** Lymphoid cell transformation → clonal expansion in lymph nodes/marrow → immune dysfunction + mass effect from tumor + systemic symptoms

**Key Distinction from Hodgkin Lymphoma:** Reed-Sternberg cells (large binucleated cells with "owl-eye" appearance) define Hodgkin lymphoma — they are absent in NHL.

**Cell Markers:** B-cell NHL → CD19, CD20; T-cell NHL → CD3, CD4/CD8.

### What You See

- Lymphoid: Painless lymphadenopathy (neck, axilla, groin) — Tumor infiltration of lymph nodes
- Hematologic: Fatigue, pallor — Anemia from marrow infiltration or hemolysis
- Immune: Recurrent infections — B-cell dysfunction / hypogammaglobulinemia
- Integumentary: Painless skin nodules (in cutaneous NHL) — Lymphoma cells in dermis/subcutis
- Hematologic: Bleeding, petechiae — Thrombocytopenia from marrow infiltration

### What Confirms It

Excisional lymph node biopsy — determines B-cell vs. T-cell lineage (flow cytometry, immunohistochemistry) and confirms clonal population.

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Infection surveillance:** Fever workup in neutropenic patients; assess for cough, dysuria, skin infections; monitor WBC/ANC trends.
**Tumor lysis prevention:** Aggressive hydration, I/O monitoring, watch K+, phosphate, uric acid, creatinine (TLS labs).

### Red Flags

- **Superior vena cava syndrome:** From mediastinal mass compression — facial swelling, dyspnea, stridor — medical emergency.
- **Spinal cord compression:** From epidural lymphoma — back pain, neuro deficits, bladder/bowel dysfunction.
- **Tumor lysis syndrome:** Acute oncologic emergency — hyperkalemia, hyperphosphatemia, hypocalcemia, acute kidney injury.
- **Bowel obstruction:** From GI/mesenteric lymphoma involvement.
- **Richter transformation:** Indolent B-cell NHL transforming into aggressive diffuse large B-cell lymphoma.

## Exam Layer

### Exam Clues

- Indolent NHL = slow-growing, may not need immediate treatment. Aggressive NHL = fast-growing, requires prompt treatment.
- B symptoms (fever, night sweats, >10% weight loss) = poorer prognosis and higher stage.
- Rituximab (anti-CD20) + chemo is standard for B-cell NHL — monitor for infusion reactions (cytokine release).
- Always do a lymph node biopsy before starting treatment — subtype determines the entire treatment plan.
- Tumor lysis syndrome risk is highest within 12–72 hours of starting chemo — know your TLS labs and emergency management.

## Related

- [[acyclovir]]
- [[allopurinol]]
- [[brentuximab-vedotin]]
- [[Chronic Lymphocytic Leukemia (CLL)]]
- [[cyclophosphamide]]
- [[doxorubicin]]
- [[Hodgkin Lymphoma]]
- [[multiple-myeloma]]
- [[prednisone]]
- [[rituximab]]
- [[vincristine]]
- [[Waldenström Macroglobulinemia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('olfactory-dysfunctions', 'Olfactory Dysfunctions', 'disease', '# Olfactory Dysfunctions

## Study Snapshot

### What It Is

Olfactory dysfunction encompasses a spectrum from complete loss of smell (anosmia) to distorted smell perception (parosmia) and phantom smells without an external source (phantosmia). The olfactory system — olfactory epithelium, cribriform plate, olfactory bulb, and central olfactory cortex — is uniquely exposed to the external environment, making it vulnerable to viral damage, head trauma shearing olfactory neurons, and neurodegenerative processes. Loss of smell is not merely a quality-of-life issue — it significantly impacts safety (inability to detect smoke, gas leaks, spoiled food) and nutrition (diminished appetite and food enjoyment).

> **The Simplified View:** "The smell sensors in the roof of your nose are like smoke detectors connected directly to your brain''s memory center — when they break, you lose both the warning system and the emotional connection to food and experience."

### Why It Matters

- **Permanent anosmia:** In ~20% of post-viral cases, loss may be permanent — requires long-term safety adaptations
- **Phantosmia with no trigger:** Can be disabling (phantom smells of garbage, chemicals, burning); refractory cases may require anticonvulsants (carbamazepine) or surgical intervention
- **Early marker of neurodegenerative disease:** Anosmia precedes motor symptoms in Parkinson''s by years — screen patients with unexplained anosmia for early neurodegenerative signs

### Patho In One Line

**Olfactory receptor neurons damaged** (viral, traumatic, neurodegenerative)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Post-viral olfactory loss (most common — rhinovirus, influenza, COVID-19 damages olfactory receptor neurons); head trauma (shearing of olfactory nerve fibers as they pass through cribriform plate); neurodegenerative diseases (Alzheimer''s, Parkinson''s — early olfactory dysfunction); sinonasal disease (polyps, chronic sinusitis); medications (zinc-containing nasal products, intranasal zinc)
- **Modifiable Risk Factors:** Smoking (impairs olfactory epithelium), poor nutrition (zinc deficiency), intranasal zinc use
- **Non-Modifiable Risk Factors:** Age (olfactory function declines with age), male sex (higher prevalence), genetic predisposition, neurodegenerative disease
- **Pathways:** Viral damage to olfactory receptor neurons; mechanical shearing of olfactory nerve filaments; neuronal degeneration; mucosal edema blocking odorant access

### What You See

- EENT: [complete loss of smell — anosmia] — Olfactory receptor neuron destruction or obstruction
- EENT: [reduced smell sensitivity — hyposmia] — Partial olfactory receptor or nerve damage
- EENT: [distorted smell perception — parosmia] — Central processing dysfunction; regenerating nerve fibers miswired
- EENT: [phantom smells without source — phantosmia] — Spontaneous olfactory bulb activity; maladaptive regeneration
- Neuro: [loss of emotional association with smell] — Amygdala-hippocampus connection disrupted
- Psych: [depression, social isolation, anorexia] — Loss of smell-linked pleasure and appetite

### What Confirms It

- CT sinuses (rule out sinonasal obstruction)
- MRI brain with dedicated olfactory bulb imaging (rule out neurodegenerative, tumors)
- Serum zinc level (zinc deficiency — reversible cause)
- Vitamin B12 (deficiency can contribute)

## Nursing Lens

### Nursing Priorities

**Safety Assessment & Education:** Assess home safety — inability to detect smoke, gas leaks, spoiled food requires safety interventions (smoke detectors, gas sniffer, food dating labels); educate patient on food safety practices

**Nutritional Monitoring:** Monitor weight and appetite; refer to dietitian if significant weight loss; counsel that food may taste bland (flavor is 80% smell + 20% taste) — use texture, temperature, and visual appeal to enhance eating

### Red Flags

- **Permanent anosmia:** In ~20% of post-viral cases, loss may be permanent — requires long-term safety adaptations
- **Phantosmia with no trigger:** Can be disabling (phantom smells of garbage, chemicals, burning); refractory cases may require anticonvulsants (carbamazepine) or surgical intervention
- **Early marker of neurodegenerative disease:** Anosmia precedes motor symptoms in Parkinson''s by years — screen patients with unexplained anosmia for early neurodegenerative signs

## Exam Layer

### Exam Clues

- **NCLEX pearl:** Anosmia from head trauma = shearing of olfactory nerve fibers at the cribriform plate. Anosmia from viral infection = direct damage to olfactory receptor neurons
- **Clinical pearl:** Always ask about smell and taste in patients — often underreported. In COVID-19, anosmia was a key distinguishing feature
- **The "apple perfume" test:** Classic bedside test — ask patient to identify common smells; coffee, cinnamon, and vanilla are commonly used screening tools

## Related

- [[alzhheimers-disease]]
- [[cerebral-edema]]
- [[mometasone]]
- [[parkinsons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('pancreatitis', 'Pancreatitis', 'disease', '# Pancreatitis

## Study Snapshot

### What It Is

[[pancreatitis|Pancreatitis]] is inflammation of the pancreas caused by premature activation of digestive enzymes inside the pancreas, leading to autodigestion. Acute disease can become life-threatening fast because local inflammation turns systemic.

> **The Simplified View:** "The pancreas starts digesting itself instead of the food."

### Why It Matters

- SIRS / shock
- ARDS
- Acute kidney injury
- Pseudocysts
- Chronic pancreatitis if recurrent

### Patho In One Line

Gallstone obstruction or direct alcohol-related injury disrupts enzyme flow.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** gallstones, alcohol use, idiopathic cases, trauma, steroids, infections, autoimmune causes, post-ERCP causes, drugs
- **Modifiable Risk Factors:** alcohol, smoking, diet-related gallstone risk, hypertriglyceridemia
- **Non-Modifiable Risk Factors:** some structural, genetic, autoimmune, or chronic pancreatic disorders
- **Pathways:** obstruction or toxic injury → enzyme activation in pancreas → inflammation / necrosis

**Memory aid — I GET SMASHED**
- **I** = Idiopathic (unknown cause)
- **G** = Gallstones (most common)

### What You See

- GI: Severe epigastric pain radiating to back — Inflamed pancreas + peritoneal irritation
- GI: Nausea/vomiting — Ileus / inflammatory irritation
- CV: Hypotension, tachycardia — Third spacing and hypovolemia
- Resp: Tachypnea / low O2 — Inflammation, effusions, ARDS risk
- Metabolic: Hypocalcemia, hyperglycemia — Fat necrosis binds calcium; endocrine disruption

### What Confirms It

Clinical picture plus labs and imaging.

## Nursing Lens

### Nursing Priorities

**Keep up perfusion:** monitor VS, urine output, labs, fluid balance.  
**Treat pain and keep pancreas resting:** NPO, pain control, nausea management.  
**Watch for complications:** ARDS, shock, renal failure, electrolyte shifts.

### Red Flags

- SIRS / shock
- ARDS
- Acute kidney injury
- Pseudocysts
- Chronic pancreatitis if recurrent

## Exam Layer

### Exam Clues

- Severe upper abdominal pain to the back = pancreatitis until proven otherwise.  
- NPO is not random — it reduces pancreatic stimulation.  
- Urine output matters because third spacing can get ugly fast.

## Related

- [[../Assignments/Digestive_Presentation_Pancreatitis]]
- [[azathioprine]]
- [[cholelithiasis-and-cholecystitis]]
- [[cirrhosis]]
- [[diabetes-mellitus]]
- [[peptic-ulcer-disease]]
- [[Upper Gastrointestinal Bleeding]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('parkinson-s-disease', 'Parkinson''s Disease', 'disease', '# Parkinson''s Disease

## Study Snapshot

### What It Is

Parkinson''s disease is a progressive neurodegenerative movement disorder due to dopaminergic neuron loss in the substantia nigra with basal ganglia dysfunction.

### Why It Matters

- Falls/fractures, aspiration pneumonia
- Motor fluctuations, dyskinesias, dementia/psychosis in advanced stages

### Patho In One Line

Nigrostriatal dopaminergic neurons degenerate

## Clinical Pattern

### Who Is At Risk

- **Cause:** Mostly idiopathic; multifactorial neurodegeneration
- **Risk factors:** Increasing age, male sex, family/genetic susceptibility
- **Pathway:** Dopamine depletion and Lewy body (alpha-synuclein) pathology

### What You See

- Resting tremor, bradykinesia, rigidity, shuffling gait
- Masked facies, hypophonia, micrographia
- Non-motor: constipation, sleep disturbance, depression, cognitive decline

### What Confirms It

- Clinical diagnosis (cardinal motor features)
- No single confirmatory lab test
- Imaging mainly to exclude alternative diagnoses

## Nursing Lens

### Nursing Priorities

- Fall prevention and mobility support (PT/OT)
- Swallowing/aspiration precautions and bowel regimen support
- Reinforce strict med timing and monitor for dyskinesia/hallucinations

### Red Flags

- Falls/fractures, aspiration pneumonia
- Motor fluctuations, dyskinesias, dementia/psychosis in advanced stages

### Treatment Themes

- Levodopa/carbidopa as core symptomatic therapy
- [[dopamine|Dopamine]] agonists, MAO-B inhibitors, COMT inhibitors as adjuncts
- Medication timing is critical for functional control

## Related

- [[alzheimers-disease]]
- [[dementia]]
- [[dopamine]]
- [[huntingtons-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('peptic-ulcer-disease', 'Peptic Ulcer Disease', 'disease', '# Peptic Ulcer Disease

## Study Snapshot

### What It Is

[[peptic-ulcer-disease|Peptic Ulcer Disease]] is a break in the protective mucosal lining of the stomach, duodenum, or lower esophagus. It happens when protective barriers lose to acid, pepsin, [[Helicobacter pylori]], or chronic NSAID injury.

> **The Simplified View:** "The stomach or duodenum loses its protective coating and starts getting eaten by its own acid."

### Why It Matters

- Upper GI bleed
- Perforation / peritonitis
- Gastric outlet obstruction

### Patho In One Line

Mucosal protection is weakened by H. pylori, NSAIDs, or hyperacidity.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** [[Helicobacter pylori]] infection, NSAID use
- **Modifiable Risk Factors:** smoking, alcohol, NSAID use
- **Non-Modifiable Risk Factors:** older age, chronic disease burden
- **Pathways:** excess injury / reduced mucosal defense → erosion → ulceration → bleeding or perforation

### What You See

- GI: Epigastric pain — Ulcerated mucosa exposed to acid
- GI: Duodenal ulcer pain 2–4 hrs after meals / at night — Pain when stomach empties; food temporarily buffers acid
- GI: Gastric ulcer pain worsens with eating — Food stimulates acid in already injured stomach lining
- GI: Melena / coffee-ground emesis — Upper GI bleeding from eroded vessels
- GI: Weight loss / vomiting — More common with gastric ulcers

### What Confirms It

Upper endoscopy with visualization ± biopsy.

## Nursing Lens

### Nursing Priorities

**Recognize bleeding/perforation:** black tarry stool, hematemesis, sudden severe pain.  
**Symptom control:** pain, nausea, diet tolerance.  
**Cause control:** med teaching, H. pylori treatment adherence, avoid irritants.

### Red Flags

- Upper GI bleed
- Perforation / peritonitis
- Gastric outlet obstruction

## Exam Layer

### Exam Clues

- Duodenal ulcer: food makes it feel better.  
- Gastric ulcer: food makes it worse.  
- Tarry black stool = melena = think upper GI bleed.

## Related

- [[cirrhosis]]
- [[Gastritis]]
- [[gerd]]
- [[Helicobacter pylori]]
- [[peptic-ulcer-disease]]
- [[Upper Gastrointestinal Bleeding]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('phenylketonuria-pku', 'Phenylketonuria (PKU)', 'disease', '# Phenylketonuria (PKU)

## Study Snapshot

### What It Is

PKU is an autosomal recessive inborn error of metabolism caused by deficiency of phenylalanine hydroxylase (or related tetrahydrobiopterin defects), leading to toxic phenylalanine accumulation.

### Why It Matters

- Severe irreversible neurocognitive impairment if untreated early
- Maternal PKU syndrome (fetal malformations, neurodevelopmental injury)

### Patho In One Line

Phenylalanine metabolism is blocked

## Clinical Pattern

### Who Is At Risk

- **Cause:** PAH gene mutations (most cases)
- **Risk factors:** Family history/consanguinity
- **Pathway:** Impaired conversion of phenylalanine to tyrosine

### What You See

- Often asymptomatic at birth; detected by newborn screen
- Untreated: developmental delay, intellectual disability, seizures, musty odor, eczema-like rash
- Lighter skin/hair may occur due to reduced tyrosine-derived melanin

### What Confirms It

- Positive newborn screening with elevated phenylalanine
- Confirmatory plasma amino acid testing and genetic evaluation
- Ongoing therapeutic level monitoring is essential

## Nursing Lens

### Nursing Priorities

- Support strict dietary adherence and family education
- Coordinate frequent blood level monitoring and growth/development tracking
- For pregnancy: reinforce tight maternal phenylalanine control (maternal PKU risk)

### Red Flags

- Severe irreversible neurocognitive impairment if untreated early
- Maternal PKU syndrome (fetal malformations, neurodevelopmental injury)

### Treatment Themes

- Sapropterin (BH4 cofactor) in responsive patients
- Pegvaliase in selected older patients with refractory high levels
- Medical formula and specialized nutrition are core therapy

## Related

- [[diabetes-mellitus]]
- [[seizures-and-epilepsy]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('pressure-ulcers', 'Pressure Ulcers', 'disease', '# Pressure Ulcers

## Study Snapshot

### What It Is

Pressure ulcers (pressure injuries) are localized skin and underlying tissue damage from prolonged pressure and/or shear, usually over bony prominences.

### Why It Matters

- Cellulitis, osteomyelitis, sepsis
- Chronic non-healing wounds and prolonged hospitalization

### Patho In One Line

Prolonged pressure exceeds capillary perfusion pressure

## Clinical Pattern

### Who Is At Risk

- **Primary mechanism:** Sustained pressure, shear, friction, moisture
- **Risk factors:** Immobility, poor nutrition, incontinence, impaired perfusion/sensation, critical illness
- **Pathway:** Tissue ischemia → inflammation → necrosis

### What You See

- Non-blanchable erythema (Stage 1)
- Partial/full-thickness tissue loss (Stages 2–4)
- Pain, drainage, odor, tunneling in advanced wounds

### What Confirms It

- Clinical staging and full skin assessment
- Wound measurement (size, depth, undermining, exudate)
- Culture/labs only when infection suspected

## Nursing Lens

### Nursing Priorities

- Reposition schedule, pressure redistribution surfaces, heel offloading
- Moisture/incontinence management and gentle skin care
- Nutrition/hydration optimization and consistent wound documentation

### Red Flags

- Cellulitis, osteomyelitis, sepsis
- Chronic non-healing wounds and prolonged hospitalization

### Treatment Themes

- Topical antimicrobials when indicated; systemic antibiotics for cellulitis/osteomyelitis/sepsis
- Analgesics for dressing changes and chronic wound pain
- Adjunct nutrition support may include protein/calorie optimization

## Related

- [[diabetes-mellitus]]
- [[skin-cancers]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('psoriasis-papulosquamous-disorder', 'Psoriasis (Papulosquamous Disorder)', 'disease', '# Psoriasis (Papulosquamous Disorder)

## Study Snapshot

### What It Is

Psoriasis is a chronic immune-mediated inflammatory disease causing accelerated keratinocyte turnover and well-demarcated erythematous plaques with silvery scale.

### Why It Matters

- Psoriatic arthritis and functional decline
- Increased cardiometabolic/inflammatory comorbidity burden

### Patho In One Line

Immune activation stimulates cytokine cascades

## Clinical Pattern

### Who Is At Risk

- **Cause:** Immune dysregulation (not contagious)
- **Risk factors:** Family history, obesity, smoking, alcohol, stress, infections, certain drugs
- **Pathway:** TNF-alpha/IL-23/IL-17 axis activation

### What You See

- Plaques on extensor surfaces/scalp/sacrum
- Pruritus, nail pitting/onycholysis
- Possible psoriatic arthritis (joint pain/stiffness)

### What Confirms It

- Usually clinical diagnosis by morphology/distribution
- Biopsy only when diagnosis is uncertain
- Screen for arthritis and cardiometabolic comorbidities

## Nursing Lens

### Nursing Priorities

- Trigger identification and skin-care education
- Adherence support and monitoring for treatment adverse effects
- Psychosocial support for body image and quality-of-life impact

### Red Flags

- Psoriatic arthritis and functional decline
- Increased cardiometabolic/inflammatory comorbidity burden

### Treatment Themes

- Topicals: corticosteroids, vitamin D analogs
- Phototherapy for moderate disease
- Systemic agents/biologics for moderate-severe or arthritic disease

## Related

- [[atopic-dermatitis-eczema]]
- [[pressure-ulcers]]
- [[skin-cancers]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('pyelonephritis', 'Pyelonephritis', 'disease', '# Pyelonephritis

## Study Snapshot

### What It Is

Pyelonephritis is an infection of the renal pelvis and kidney parenchyma (an **upper UTI**). It is usually caused by ascending bacteria from the lower urinary tract, most often *E. coli*. Compared with cystitis, pyelonephritis has greater systemic risk and can progress to sepsis if not recognized and treated quickly.

> **The Simplified View:** "A bladder infection climbs up to the kidney and turns a local problem into a body-wide risk."

### Why It Matters

- Urosepsis/septic shock in delayed or severe infection.
- Acute kidney injury (especially with dehydration, obstruction, or comorbidity burden).
- Renal/perinephric abscess (persistent fever/non-response).
- Pregnancy-associated pyelonephritis with maternal/fetal risk.

### Patho In One Line

**Initial Trigger:** Bacterial colonization of lower urinary tract and ascent to kidney.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Ascending gram-negative infection (commonly *E. coli*), less commonly hematogenous spread.
- **Modifiable Risk Factors:** Dehydration, delayed voiding, poor catheter care, incomplete treatment of lower UTI.
- **Non-Modifiable Risk Factors:** Female anatomy, pregnancy, older age, structural urinary abnormalities.
- **Pathways:** Infectious (ascending), worsened by stasis/obstruction and host vulnerability (e.g., diabetes, immunosuppression).

### What You See

- Renal/Urinary: Flank pain, CVA tenderness — Inflammation of kidney capsule/parenchyma
- Urinary: Dysuria, urgency, frequency — Concurrent lower tract irritation/infection
- Hemodynamic (severe): Hypotension, tachycardia — Sepsis/volume depletion physiology

### What Confirms It

Urine culture and sensitivity (with clinical correlation) to confirm organism and guide targeted therapy.

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Early Recognition & Stability:** trend vitals/mentation, identify sepsis cues, escalate promptly.

**Safe Treatment Delivery:** anticipate ordered ordered meds on time, monitor response, ensure hydration and symptom control.

### Red Flags

- Urosepsis/septic shock in delayed or severe infection.
- Acute kidney injury (especially with dehydration, obstruction, or comorbidity burden).
- Renal/perinephric abscess (persistent fever/non-response).
- Pregnancy-associated pyelonephritis with maternal/fetal risk.

## Exam Layer

### Exam Clues

- Distinguish **cystitis (lower/local)** vs **pyelonephritis (upper/systemic risk)**.
- Cloudy or foul urine alone is not diagnostic without clinical context.
- In older adults, confusion may be a key infection signal.
- Trend changes and escalation timing are high-yield nursing priorities.

## Related

- [[acute-kidney-injury-aki]]
- [[chronic-kidney-disease-ckd]]
- [[glomerulonephritis]]
- [[nephrolithiasis-kidney-stones]]
- [[urinary-tract-infection-uti]]
- [[vesicoureteral-reflux-vur]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('pyloric-stenosis-infantile-hypertrophic', 'Pyloric Stenosis (Infantile Hypertrophic)', 'disease', '# Pyloric Stenosis (Infantile Hypertrophic)

## Study Snapshot

### What It Is

Hypertrophy of the pyloric smooth muscle → narrowing of the gastric outlet → functional obstruction. Presents at 2–8 weeks of life.

> **The Simplified View:** "The muscle gate between the stomach and duodenum thickens so much that food can''t get through."

### Why It Matters

- Severe metabolic alkalosis → respiratory compensation (slow breathing to retain CO2)
- Hypokalemia → cardiac dysrhythmias
- Wound infection (post-op)
- Incomplete myotomy → persistent vomiting (rare)

### Patho In One Line

Pyloric muscle hypertrophy develops (usually presents 2–8 weeks)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Idiopathic pyloric muscle hypertrophy
- **Modifiable Risk Factors:** None established
- **Non-Modifiable Risk Factors:** First-born males, family history, Caucasian, macrolide antibiotic exposure in neonates
- **Pathways:** Progressive pyloric muscle hypertrophy → gastric outlet obstruction

### What You See

- GI: **Projectile** non-bilious vomiting — Gastric outlet obstruction
- Abdomen: Palpable olive-sized mass (RUQ) — Hypertrophied pylorus
- Abdomen: Visible gastric peristalsis — Stomach contracting against obstruction
- Metabolic: Hypochloremic metabolic alkalosis — Loss of H+ and Cl- from vomiting
- Metabolic: Hypokalemia — K+ loss with vomiting
- General: Dehydration, weight loss, failure to thrive — Persistent vomiting, poor intake

### What Confirms It

**Ultrasound** — pyloric muscle thickness ≥ 3 mm, pyloric channel length ≥ 15 mm

## Nursing Lens

### Nursing Priorities

**Fluid & Electrolyte Correction:** IV access, monitor I&Os, replace electrolytes, assess hydration

**Pre-op Preparation:** NPO, NG tube if vomiting persists, correct labs before surgery

**Post-op Care:** Advance feeds gradually per protocol, monitor for vomiting (may still occur briefly post-op), wound care

### Red Flags

- Severe metabolic alkalosis → respiratory compensation (slow breathing to retain CO2)
- Hypokalemia → cardiac dysrhythmias
- Wound infection (post-op)
- Incomplete myotomy → persistent vomiting (rare)

## Exam Layer

### Exam Clues

- Projectile **non-bilious** vomiting in 2–8 week old = pyloric stenosis until proven otherwise
- Hypochloremic metabolic alkalosis = the electrolyte signature
- Palpable olive mass = classic finding
- Ultrasound = diagnostic test of choice
- **Correct electrolytes BEFORE surgery**
- Common in first-born males

## Related

- [[hirschsprung-disease]]
- [[intussusception]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('renal-tumours', 'Renal Tumours', 'disease', '# Renal Tumours

## Study Snapshot

### What It Is

Renal tumours encompass a spectrum from benign cysts to aggressive malignancies. Renal cell carcinoma (RCC) — the most common malignant kidney tumor — arises from the renal cortex and is notorious for its ability to metastasize silently without symptoms. Wilms tumor (nephroblastoma) is the most common childhood renal malignancy. Hematuria is the classic presenting sign for RCC, though many are now found incidentally on imaging. Urothelial carcinoma of the renal pelvis is a distinct entity arising from the urothelial lining.

> **The Simplified View:** "The kidney has different cell types — the filtering tubes, the collecting system lining, and the support structures. When cancer starts in the filtering tubes (RCC), it often grows silently and spreads early. When it starts in the collecting system lining (urothelial), it behaves more like bladder cancer. Wilms tumor is a childhood kidney cancer that starts in the immature kidney cells."

### Why It Matters

- **RCC extending into renal vein/IVC:** May require surgical extraction with vascular surgery; tumor thrombus can extend to right atrium
- **Paraneoplastic syndromes:** RCC can produce EPO, PTHrP, ACTH, insulin, IL-6 — treat the tumor to resolve paraneoplastic effects
- **Spontaneous rupture of kidney tumor:** Emergency nephrectomy for hemorrhage
- **Wilms tumor rupture:** Intra-abdominal spill → upstaging + radiation required

## Clinical Pattern

### What You See

- Renal: [flank pain — dull, constant] — Kidney capsule stretching
- Renal: [palpable abdominal/kidney mass] — Large tumor
- Renal: [hematuria — Wilms tumor] — Tumor invasion
- MSK: [hypertension — Wilms tumor and RCC] — Renin production from tumor compression
- Cardio: [left varicocele (left-sided) or scrotal varicocele] — Renal vein tumor invasion → gonadal vein obstruction
- CV: [polycythemia — RCC] — Erythropoietin production by tumor

### What Confirms It

- **CBC:** Anemia (chronic disease) or polycythemia (EPO production)
- **BMP, LFTs:** Assess baseline renal and liver function
- **Calcium:** Hypercalcemia (PTHrP)
- **Urinalysis:** Hematuria
- **RCC:** No reliable tumor markers; CA-125 sometimes elevated

## Nursing Lens

### Nursing Priorities

**Post-Op Monitoring After Nephrectomy:** Monitor vital signs; assess for bleeding; manage pain; monitor renal function (single kidney now doing all the work); incentive spirometry

**Targeted Therapy/Immunotherapy Side Effect Management:** Fatigue, hand-foot syndrome (TKIs); immune-related adverse events (checkpoint inhibitors — educate patient to report diarrhea, rash, dyspnea); monitor CBC, LFTs, renal function

**Monitor for Metastatic Disease:** Persistent symptoms (bone pain, cough, headaches) warrant investigation; long-term surveillance imaging per protocol

### Red Flags

- **RCC extending into renal vein/IVC:** May require surgical extraction with vascular surgery; tumor thrombus can extend to right atrium
- **Paraneoplastic syndromes:** RCC can produce EPO, PTHrP, ACTH, insulin, IL-6 — treat the tumor to resolve paraneoplastic effects
- **Spontaneous rupture of kidney tumor:** Emergency nephrectomy for hemorrhage
- **Wilms tumor rupture:** Intra-abdominal spill → upstaging + radiation required

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Painless hematuria + flank mass + hypertension = think renal cell carcinoma (classic triad present in only ~10%)"
- **Wilms tumor:** "Preschool-age child with abdominal mass and hypertension = think Wilms tumor"
- **TKIs for RCC:** Remember sunitinib, pazopanib — both are multi-kinase inhibitors affecting VEGF pathway

## Related

- [[bladder-cancer]]
- [[chronic-kidney-disease-ckd]]
- [[cisplatin]]
- [[dactinomycin]]
- [[doxorubicin]]
- [[everolimus]]
- [[gemcitabine]]
- [[nephroblastoma-wilms-tumor]]
- [[nivolumab]]
- [[pazopanib]]
- [[renal-cell-carcinoma]]
- [[sunitinib]]
- [[vincristine]]
- [[von-hippel-lindau]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('seizures-and-epilepsy', 'Seizures and Epilepsy', 'disease', '# Seizures and Epilepsy

## Study Snapshot

### What It Is

A seizure is a transient episode of abnormal excessive or synchronous brain electrical activity. Epilepsy is a chronic predisposition to recurrent unprovoked seizures.

### Why It Matters

- Status epilepticus, aspiration, traumatic injury
- SUDEP risk in uncontrolled epilepsy

### Patho In One Line

Hyperexcitable neuronal focus develops or widespread threshold drops

## Clinical Pattern

### Who Is At Risk

- **Causes:** Structural, genetic, infectious, metabolic, immune, or unknown
- **Provoked seizure triggers:** Hypoglycemia, electrolyte disturbances, intoxication/withdrawal, fever, acute CNS injury
- **Pathway:** Imbalance between neuronal excitation and inhibition

### What You See

- Focal symptoms: sensory, motor, autonomic, behavioral, ± impaired awareness
- Generalized: tonic-clonic activity, absence events, myoclonic jerks
- Postictal confusion, fatigue, headache are common after many seizure types

### What Confirms It

- Detailed history/witness description
- EEG for epileptiform activity classification
- Brain MRI (preferred structural imaging) and targeted labs

## Nursing Lens

### Nursing Priorities

- During event: protect airway/safety, time seizure, avoid restraint/object insertion
- Postictal care and injury assessment
- Medication adherence, trigger counseling, and rescue-plan education

### Red Flags

- Status epilepticus, aspiration, traumatic injury
- SUDEP risk in uncontrolled epilepsy

### Treatment Themes

- Acute: benzodiazepines for prolonged seizures/status
- Maintenance: antiseizure medications tailored to seizure type
- Refractory cases: combination therapy, device/surgical evaluation

## Related

- [[cerebrovascular-disease-stroke]]
- [[hydrocephalus]]
- [[meningitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('sickle-cell-anemia', 'Sickle Cell Anemia', 'disease', '# Sickle Cell Anemia

## Study Snapshot

### What It Is

Sickle Cell Anemia is an inherited autosomal recessive hemoglobin disorder in which RBCs adopt a rigid, crescent (sickle) shape under stress, causing vaso-occlusion, hemolysis, and tissue hypoxia. The spleen eventually autoscars (autosplenectomy), and chronic hemolytic anemia is permanent.

> **The Simplified View:** "Your red blood cells are supposed to be soft and round like a balloon — instead they''re stiff and shaped like a crescent moon, so they get stuck in small vessels and break apart."

### Why It Matters

- **Acute Chest Syndrome:** Life-threatening — fever, chest pain, respiratory distress, new pulmonary infiltrate. Medical emergency.
- **Stroke:** Especially in children ages 2–16; sudden neuro changes require immediate intervention.
- **Multi-organ failure** from repeated vaso-occlusion.
- **Aplastic crisis:** Parvovirus B19 infection temporarily halts RBC production → sudden severe anemia.

### Patho In One Line

RBCs with HbS polymerize and sickle when O₂ tension drops (infection, cold, exertion).

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Homozygous HbS mutation (both parents must carry the trait; child has ~1/4 chance if both parents are carriers)
- **Modifiable Risk Factors:** Dehydration, cold exposure, high altitude, strenuous exertion, stress, infection
- **Non-Modifiable Risk Factors:** Genetic inheritance, African/Mediterranean ancestry
- **Pathways:** HbS polymerization under low oxygen → RBCs sickle → rigid crescents clog microvasculature → vaso-occlusive crisis + premature hemolysis (half-life of RBCs drops from 120 days to ~10–20 days)

### What You See

- Hematologic: Chronic pallor, fatigue, tachycardia — Chronic hemolytic anemia → ↓ O₂-carrying capacity
- Hematologic: Jaundice — Lysis of RBCs → ↑ bilirubin
- Musculoskeletal: Acute severe pain (vaso-occlusive crisis) — Sickled cells block bone/joint microvasculature
- Resp: Acute chest syndrome: chest pain, fever, respiratory distress — Lung vaso-occlusion + infection
- Neuro: Stroke: sudden neuro deficits, HA, LOC — Vaso-occlusion in cerebral vessels
- Renal: Hematuria, nocturia — Sickling damages renal medulla (low O₂ environment)

### What Confirms It

Hemoglobin electrophoresis confirms HbS homozygosity and quantifies HbS, HbA, HbF.

## Nursing Lens

### Nursing Priorities

Care proceeds through 3 priorities:

**Crisis management:** Frequent pain reassessment (0–10 scale), anticipate ordered analgesics promptly, heat packs, hydration.
**Prevent complications:** Monitor for fever/neutropenia (splenic dysfunction → infection risk), respiratory distress, neuro changes.

### Red Flags

- **Acute Chest Syndrome:** Life-threatening — fever, chest pain, respiratory distress, new pulmonary infiltrate. Medical emergency.
- **Stroke:** Especially in children ages 2–16; sudden neuro changes require immediate intervention.
- **Multi-organ failure** from repeated vaso-occlusion.
- **Aplastic crisis:** Parvovirus B19 infection temporarily halts RBC production → sudden severe anemia.

## Exam Layer

### Exam Clues

- The #1 nursing priority during a vaso-occlusive crisis is pain control — treat it aggressively and reassess frequently.
- Any fever in a sickle cell patient is treated as a potential infection/sepsis until proven otherwise (asplenia).
- Chronic hemolysis causes jaundice and ↑ bilirubin — not hepatitis, just RBC breakdown.
- All patients with sickle cell disease should be on folic acid and have Pneumovax/immunizations current.

## Related

- [[Acute Chest Syndrome]]
- [[acute-kidney-injury-aki]]
- [[dic-disseminated-intravascular-coagulation]]
- [[fentanyl]]
- [[Hemolytic Anemia]]
- [[Hemophilia A]]
- [[hydroxyurea]]
- [[l-glutamine]]
- [[morphine]]
- [[pyelonephritis]]
- [[Thrombocytopenia]]
- [[voxelotor]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('skin-cancers', 'Skin Cancers', 'disease', '# Skin Cancers

## Study Snapshot

### What It Is

Skin cancers are malignant neoplasms of skin cells, mainly basal cell carcinoma (BCC), squamous cell carcinoma (SCC), and melanoma.

### Why It Matters

- Local tissue destruction/scarring
- Metastatic spread (highest concern with melanoma)

### Patho In One Line

UV-induced mutations accumulate in epidermal cells/melanocytes

## Clinical Pattern

### Who Is At Risk

- **Primary driver:** Ultraviolet radiation exposure
- **Risk factors:** Fair skin, sunburn history, tanning beds, immunosuppression, age, atypical nevi/family history (melanoma)
- **Pathway:** DNA damage with failure of repair/tumor suppression

### What You See

- BCC: Pearly papule, telangiectasia, rolled border, non-healing lesion
- SCC: Scaly/ulcerated indurated lesion on sun-exposed skin
- Melanoma: ABCDE changes (asymmetry, border, color, diameter, evolving)

### What Confirms It

- Full skin exam with dermoscopy where available
- Excisional/targeted biopsy for histologic diagnosis
- Staging imaging/labs based on tumor type and stage

## Nursing Lens

### Nursing Priorities

- Sun-protection education and self-exam coaching
- Wound care and post-procedure monitoring
- Reinforce follow-up for recurrence surveillance

### Red Flags

- Local tissue destruction/scarring
- Metastatic spread (highest concern with melanoma)

### Treatment Themes

- Topical field/lesion therapies for selected superficial lesions (e.g., 5-FU, imiquimod)
- Systemic targeted/immunotherapy in advanced melanoma/nonmelanoma disease
- Adjuvant therapy depends on stage and pathology

## Related

- [[acne-vulgaris]]
- [[pressure-ulcers]]
- [[psoriasis-papulosquamous-disorder]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('sleep-disorders', 'Sleep Disorders', 'disease', '# Sleep Disorders

## Study Snapshot

### What It Is

Sleep disorders encompass conditions where the quality, timing, or amount of sleep is impaired, leading to daytime dysfunction and health consequences. They disrupt the normal sleep architecture — the cycling between NREM (N1, N2, N3) and REM sleep that the brain requires for memory consolidation, tissue repair, and hormonal regulation. The suprachiasmatic nucleus (SCN) governs circadian rhythm, and dysfunction here or in sleep-wake homeostatic mechanisms produces these disorders.

> **The Simplified View:** "Your body''s internal clock is stuck in the wrong time zone, or the gatekeeper that controls sleep onset won''t open on schedule."

### Why It Matters

- **Cardiovascular complications from OSA:** Resistant hypertension, atrial fibrillation, stroke, cor pulmonale from chronic hypoxia
- **Sudden death in narcolepsy:** Rare but documented — cataplexy-related injury, car accidents
- ** Sodium oxybate overdose:** Life-threatening CNS depression, respiratory depression, bradycardia — has antidote (flumazenil if mixed with benzodiazepine; supportive care primary)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Obstructive sleep apnea (pharyngeal collapse), narcolepsy (hypocretin/orexin deficiency), restless legs syndrome (dopaminergic dysfunction), circadian rhythm disorders, chronic insomnia (psychophysiological), medications, substance use
- **Modifiable Risk Factors:** Obesity (OSA), alcohol use, caffeine after 2 PM, irregular sleep schedules, sedentary lifestyle, shift work
- **Non-Modifiable Risk Factors:** Age (older adults more susceptible), genetics (narcolepsy, RLS have genetic components), male sex (higher OSA risk), postmenopausal status
- **Pathways:** Mechanical obstruction (OSA), neurotransmitter dysregulation (narcolepsy, RLS), SCN dysfunction (circadian disorders), cognitive hyperarousal (insomnia)

### What You See

- Neuro: [excessive daytime sleepiness, "sleep attacks"] — Narcolepsy — REM intrusion into wakefulness
- Neuro: [cataplexy — sudden muscle weakness with emotion] — Narcolepsy — intruding REM atonia
- Neuro: [unrefreshing sleep, fatigue] — All disorders — sleep architecture disruption
- Resp: [snoring, witnessed apneas, gasping at night] — OSA — upper airway collapse
- Cardio: [nocturnal hypertension, morning tachycardia] — OSA — sympathetic activation from hypoxia
- Psych: [irritability, poor concentration, mood changes] — Sleep deprivation effect on prefrontal cortex

### What Confirms It

- Overnight oximetry (screening for OSA)
- Serum ferritin (low in RLS — below 50 ng/mL warrants treatment)
- CSF hypocretin-1 levels (narcolepsy type 1 — typically below 110 pg/mL)
- Thyroid function tests (hypothyroidism can contribute to OSA)
- ABG (if concern for nocturnal hypoventilation)

## Nursing Lens

### Nursing Priorities

**Sleep Hygiene & Behavioral Interventions:** Assess and reinforce sleep hygiene (consistent wake time, dark/cool room, no screens before bed); for insomnia, facilitate referral to CBT-I; for OSA, emphasize CPAP adherence and weight management

**Safety Assessment:** Screen for daytime sleepiness (Epworth Sleepiness Scale); assess driving safety in patients with narcolepsy or untreated OSA; monitor for complex sleep behaviors on Z-drugs

### Red Flags

- **Cardiovascular complications from OSA:** Resistant hypertension, atrial fibrillation, stroke, cor pulmonale from chronic hypoxia
- **Sudden death in narcolepsy:** Rare but documented — cataplexy-related injury, car accidents
- ** Sodium oxybate overdose:** Life-threatening CNS depression, respiratory depression, bradycardia — has antidote (flumazenil if mixed with benzodiazepine; supportive care primary)

## Exam Layer

### Exam Clues

- **NCLEX pearl:** The question they''ll ask — "Which patient should be assessed first for narcolepsy?" → The one reporting irresistible sleep attacks and cataplexy
- **Critical distinction:** Insomnia is a symptom; narcolepsy and OSA are neurological/sleep disorders with specific pathophysiology — don''t confuse them
- **CPAP teaching:** The most important nursing intervention is proper mask fitting and explaining that the machine MUST be used every sleep period — even during naps

## Related

- [[eszopiclone]]
- [[ferrous-sulfate]]
- [[modafinil]]
- [[multiple-sclerosis-ms]]
- [[parkinsons-disease]]
- [[pitolisant]]
- [[pramipexole]]
- [[ramelteon]]
- [[sodium-oxybate]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('spinal-cord-injury', 'Spinal Cord Injury', 'disease', '# Spinal Cord Injury

## Study Snapshot

### What It Is

Spinal cord injury (SCI) is damage to the spinal cord that results in temporary or permanent loss of motor function and sensation below the level of the lesion. The cord ends at L1-L2 (conus medullaris), after which the cauda equina (nerve roots) occupy the spinal canal. The key concepts are: complete vs. incomplete injuries (preserved sacral sensation = incomplete); ASIA classification; the distinction between spinal shock (acute flaccid areflexia) and neurogenic shock (hemodynamic instability from loss of sympathetic tone); and autonomic hyperreflexia (chronic complication in lesions above T6).

> **The Simplified View:** "The spinal cord is the information superhighway from brain to body. When it''s severed or crushed, everything below the injury loses contact with the brain — motor commands can''t get through to muscles, and sensation signals can''t reach the brain. But below the injury, the spinal cord itself can still generate reflexes that are no longer under the brain''s control."

### Why It Matters

- **Autonomic Hyperreflexia (T6 and above):** Medical emergency — severe hypertension + bradycardia from triggers below lesion level (see [[autonomic-hyperreflexia|Autonomic Hyperreflexia]])
- **Neurogenic DVT/PE:** Up to 100x higher risk than normal; anticoagulation + mechanical prophylaxis mandatory
- **Heterotopic Ossification:** Abnormal bone formation in soft tissues around joints; early recognition with ROM exercises
- **Pressure Injuries:** Develop rapidly below neurological level; can be life-threatening
- **Urinary Complications:** UTI, autonomic bladder (require catheterization program)
- **Respiratory Failure:** Cervical injuries — pneumonia and respiratory failure are leading causes of death

### Patho In One Line

**Primary injury:** Cord contusion, compression, or transection at moment of trauma

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** MVA (46%), falls (22%), violence (15%), sports injuries (8% — diving, football, equestrian), medical/surgical complications
- **Modifiable Risk Factors:** Alcohol use (MVA, diving), risk-taking behavior, contact sports without proper protection
- **Non-Modifiable Risk Factors:** Male sex (4:1), age 16–30 (peak age group), pre-existing spinal abnormalities (ankylosing spondylitis, osteoporosis)
- **Pathways:** Direct cord trauma (fracture/dislocation, penetrating injury) or secondary injury (ischemia from cord compression, hemorrhage, inflammatory cascade)

### What You See

- MSK: [flaccid paralysis — acute phase] — Spinal shock — loss of all reflexes
- MSK: [spasticity — velocity-dependent stiffness] — UMN syndrome after spinal shock resolves
- MSK: [bradycardia + hypotension] — Neurogenic shock — loss of sympathetic outflow (T1–L2)
- MSK: [warm, dry extremities — "pink and warm" — Neurogenic shock — loss of sympathetic vasoconstriction
- Neuro: [loss of sensation below lesion level] — Sensory pathways disrupted
- Neuro: [loss of motor function below lesion] — Corticospinal tract disruption

### What Confirms It

- CBC, CMP (assess overall trauma burden)
- Coagulation studies (DVT/PE risk)
- ABG (respiratory compromise monitoring)

## Nursing Lens

### Nursing Priorities

**Airway and Breathing (Cervical Lesions):** C3–C5 lesions affect diaphragm (phrenic nerve); intubate early if respiratory compromise; maintain SpO2 >94%; incentive spirometry, cough assist

**Hemodynamic Stability (Neurogenic Shock):** Maintain MAP 85–90 mmHg for first 7 days (spinal cord perfusion); dopamine or norepinephrine; bradycardia may require atropine or pacing

**Immobility Complications:**
- DVT/PE prophylaxis (LMWH + SCDs)
- Pressure injury prevention (turn every 2h, specialized mattress)
- Bowel and bladder management (catheter, bowel program)
- Spasticity management (baclofen, tizanidine)

### Red Flags

- **Autonomic Hyperreflexia (T6 and above):** Medical emergency — severe hypertension + bradycardia from triggers below lesion level (see [[autonomic-hyperreflexia|Autonomic Hyperreflexia]])
- **Neurogenic DVT/PE:** Up to 100x higher risk than normal; anticoagulation + mechanical prophylaxis mandatory
- **Heterotopic Ossification:** Abnormal bone formation in soft tissues around joints; early recognition with ROM exercises
- **Pressure Injuries:** Develop rapidly below neurological level; can be life-threatening
- **Urinary Complications:** UTI, autonomic bladder (require catheterization program)
- **Respiratory Failure:** Cervical injuries — pneumonia and respiratory failure are leading causes of death

## Exam Layer

### Exam Clues

- **NCLEX pearl:** Neurogenic shock = hypotension + bradycardia + warm/dry skin (not hypovolemic shock which is tachycardia + cool/clammy). Treatment is vasopressors and保暖
- **Complete vs. Incomplete:** Sacral sensation (S4-S5) present = incomplete = better prognosis
- **Autonomic hyperreflexia is T6 and above:** Remember this cutoff — it will be on boards

## Related

- [[autonomic-hyperreflexia]]
- [[dopamine]]
- [[dvt]]
- [[enoxaparin]]
- [[methylprednisolone]]
- [[norepinephrine]]
- [[spinal-cord-injury]]
- [[vertebral-injuries]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('taste-dysfunctions', 'Taste Dysfunctions', 'disease', '# Taste Dysfunctions

## Study Snapshot

### What It Is

Taste dysfunctions range from complete loss of taste (ageusia) to reduced taste sensitivity (hypogeusia) and distorted taste perception (dysgeusia). The gustatory system involves taste buds (containing taste receptor cells), cranial nerves VII (anterior 2/3 of tongue), IX (posterior 1/3), and X (soft palate, epiglottis), and central processing in the gustatory cortex (insula, frontal operculum, thalamus). Unlike smell (olfaction), which provides flavor complexity, taste proper only mediates sweet, salty, sour, bitter, and umami — these five qualities. Most "taste" complaints are actually smell-related (flavor = 80% smell + 20% taste).

> **The Simplified View:** "Taste is your tongue''s five-alarm system — sweet, salty, sour, bitter, and savory — and when it goes offline, food becomes a nutritional necessity instead of a pleasure, which tanks appetite and nutrition."

### Why It Matters

- **Severe malnutrition:** From prolonged dysgeusia/anorexia — particularly dangerous in cancer patients who are already catabolic
- **Depression and social isolation:** Loss of eating as a social pleasure is clinically significant — screen for depression
- **Chemotherapy non-adherence:** Taste changes can cause patients to refuse adequate nutrition during cancer treatment — contribute to treatment interruptions

### Patho In One Line

**Damage to taste receptor cells or gustatory nerves** (zinc deficiency, chemo, radiation, viral, mechanical)

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Zinc deficiency (most common reversible cause — interferes with taste bud renewal); chemotherapy (50–75% of patients — destroys taste buds and salivary gland function); radiation therapy (head/neck cancers); head trauma (taste nerve damage); upper respiratory infections (COVID-19 — taste and smell often lost together); burning mouth syndrome (idiopathic, associated with depression, diabetes, nutritional deficiencies); medications (metallic taste — ACE inhibitors, metronidazole, lithium); heavy metal exposure (mercury, lead); smoking
- **Modifiable Risk Factors:** Smoking (taste bud damage), poor nutrition (zinc deficiency), excessive alcohol
- **Non-Modifiable Risk Factors:** Age (taste buds atrophy with age — presbygeusia), cancer chemotherapy, radiation to head/neck
- **Pathways:** Zinc deficiency → impaired taste bud cell turnover → decreased taste receptor sensitivity; chemo/radiation → direct taste bud cell apoptosis and salivary gland fibrosis; nerve damage → interrupted gustatory signal transmission

### What You See

- EENT: [complete loss of taste — ageusia] — Taste receptor or gustatory nerve destruction
- EENT: [reduced taste sensitivity — hypogeusia] — Partial taste bud or nerve damage
- EENT: [distorted taste — dysgeusia ("everything tastes metallic/rancid")] — Abnormal gustatory signal processing; often chemo-induced
- EENT: [phantom taste — phantageusia] — Spontaneous gustatory cortex activation
- EENT: [burning mouth syndrome — burning, tingling, altered taste] — Idiopathic or secondary to nutritional deficiencies, diabetes, menopause
- Neuro: [diminished gustatory cortex response on fMRI] — Neuroimaging confirms gustatory pathway dysfunction

### What Confirms It

- **Serum zinc level** (normal 70–120 µg/dL; <70 suggests deficiency — correlate with clinical picture)
- **Vitamin B12** (deficiency causes glossitis and taste changes)
- **Folate** (deficiency)
- **Iron studies** (iron deficiency anemia associated with taste changes)
- **Creatinine/electrolytes** (renal failure — uremic fetor and dysgeusia)
- **Liver function tests** (hepatic disease — altered taste)

## Nursing Lens

### Nursing Priorities

**Nutritional Assessment & Support:** Monitor weight, BMI, and dietary intake; refer to dietitian; counsel that food enjoyment requires compensation (enhance with texture, temperature, color, and aromatic herbs since flavor is largely smell)

**Oral Hygiene & Moisture:** For chemo/radiation patients — frequent sips of water, saliva substitutes, gentle oral care with non-alcoholic rinses; taste changes may improve with saliva replacement

### Red Flags

- **Severe malnutrition:** From prolonged dysgeusia/anorexia — particularly dangerous in cancer patients who are already catabolic
- **Depression and social isolation:** Loss of eating as a social pleasure is clinically significant — screen for depression
- **Chemotherapy non-adherence:** Taste changes can cause patients to refuse adequate nutrition during cancer treatment — contribute to treatment interruptions

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "A patient on chemotherapy reports food tastes like ''cardboard'' — what do you advise?" → Enhance flavor with stronger seasonings, tart foods (lemon), marinating meats, and prioritize protein intake even if taste is bland; nutritional support referral
- **Key distinction:** Dysgeusia (distorted taste) vs. phantosmia (phantom smell) vs. parosmia (distorted smell) — know the differences. Dysgeusia is always a taste disorder; parosmia/phantosmia are olfactory
- **Zinc and taste:** Remember that zinc deficiency is a reversible cause — always check levels before assuming permanent

## Related

- [[cerebral-edema]]
- [[gabapentin]]
- [[pilocarpine]]
- [[zinc]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('ulcerative-colitis', 'Ulcerative Colitis', 'disease', '# Ulcerative Colitis

## Study Snapshot

### What It Is

[[ulcerative-colitis|Ulcerative Colitis]] is a chronic inflammatory bowel disease that causes **ulceration of the colonic mucosa**. It begins in the **rectum** and may extend proximally through the colon in a **continuous** pattern.

> **The Simplified View:** "The colon lining stays inflamed and ulcerated, causing frequent bloody diarrhea, cramping, and flare-ups."

### Why It Matters

- Dehydration and electrolyte imbalance from frequent diarrhea

- Anemia from chronic bloody stools

- Increased long-term risk of **colon cancer** with chronic inflammation

- Severe disease requiring escalation to surgical management

### Patho In One Line

Immune/inflammatory activation in the colonic mucosa.

## Clinical Pattern

### Who Is At Risk

- **Primary Causes:** Idiopathic chronic inflammatory disorder with immune dysregulation.

- **Modifiable Risk Factors:** Flare triggers and treatment nonadherence may worsen disease activity.

- **Non-Modifiable Risk Factors:** Genetics / family predisposition.

- **Pathways:** Chronic inflammatory bowel disease with altered immune reactions to intestinal flora and epithelial barrier dysfunction.

### What You See

- GI: Frequent diarrhea (up to 10–20/day) — Inflamed ulcerated colon cannot regulate fluid normally
- GI: Bloody / purulent stools with mucus — Mucosal ulceration and active inflammation
- GI: Urgency — Rectal/colonic inflammation irritates bowel activity
- GI: Cramping abdominal pain — Inflammation and bowel irritation
- Constitutional: Weight loss / fatigue — Chronic disease burden, poor intake, ongoing GI loss
- Hematologic: Anemia — Chronic blood loss through stool

### What Confirms It

Endoscopic evaluation with biopsy to confirm continuous **mucosal** disease involving the colon/rectum.

## Nursing Lens

### Nursing Priorities

Care proceeds through 4 priorities:

**Fluid & Electrolyte Balance:** monitor stool frequency, dehydration, and ongoing GI losses.  
**Pain Management:** manage cramping / visceral abdominal pain.

### Red Flags

- Dehydration and electrolyte imbalance from frequent diarrhea

- Anemia from chronic bloody stools

- Increased long-term risk of **colon cancer** with chronic inflammation

- Severe disease requiring escalation to surgical management

## Exam Layer

### Exam Clues

- [[ulcerative-colitis|Ulcerative Colitis]] = **colon/rectum only + mucosal involvement + continuous lesions**.

- Distinguish it from [[crohns-disease|Crohn''s Disease]] by **location**, **depth**, and **continuous vs skip** pattern.

- Watch for bloody diarrhea, urgency, and cramping in question stems.

## Related

- [[Celiac disease]]
- [[celiac-disease]]
- [[Crohn''s Disease]]
- [[crohns-disease]]
- [[diverticular-disease]]
- [[Infectious colitis]]
- [[Irritable bowel syndrome (IBS)]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('urinary-incontinence', 'Urinary Incontinence', 'disease', '# Urinary Incontinence

## Study Snapshot

### What It Is

Urinary incontinence is the involuntary loss of urine — it is NOT a normal part of aging, though prevalence increases with age. The types are defined by pathophysiology: stress (leakage with increased intra-abdominal pressure), urge (overactive detrusor with involuntary bladder contractions), overflow (overdistended bladder from outlet obstruction or weak detrusor), functional (physical/cognitive barrier to toileting), and mixed (combination). Accurate type identification drives treatment selection — behavioral therapy is first-line for most types.

> **The Simplified View:** "Your bladder is a balloon with a pinch valve (urethral sphincter). If the balloon is too full (overflow), if the valve doesn''t stay closed when you cough (stress), if the balloon squeezes on its own before it''s full (urge), or if you can''t get to the toilet in time because of physical or mental limitations (functional) — you leak. Each has a different fix."

### Why It Matters

- **Incontinence-associated dermatitis (IAD):** Moisture-associated skin damage from prolonged exposure to urine; erythema, maceration, secondary infection — treat with barrier products and gentle cleansing
- **Recurrent UTIs:** Urinary stasis from incomplete emptying → bacterial overgrowth; treat underlying cause; prophylactic antibiotics not recommended
- **Social isolation and depression:** Incontinence is underreported and undertreated; screen for psychosocial impact
- **Falls:** Rushing to toilet in elderly → fall risk; environmental modifications needed
- **Overflow from neurogenic bladder:** Risk of hydronephrosis and renal failure if not managed with catheterization

## Clinical Pattern

### What You See

- Renal: [leakage with coughing, sneezing, exercise — stress] — Increased intra-abdominal pressure exceeds urethral resistance
- Renal: [sudden strong urge + leakage — urge] — Detrusor overactivity
- Renal: [continuous dribbling — overflow] — Chronic bladder overdistension
- Renal: [frequent urination (>8/day), nocturia (>2/night) — OAB
- Renal: [incomplete bladder emptying, weak stream — overflow] — Outlet obstruction or detrusor underactivity
- Skin: [perineal skin irritation, contact dermatitis] — Constant moisture from incontinence

### What Confirms It

- **CBC, BMP:** Rule out metabolic causes (hyperglycemia, hypercalcemia)
- **Urinalysis and culture:** Rule out UTI
- **PSA (men):** Rule out prostate pathology in overflow

## Nursing Lens

### Nursing Priorities

**Identify Incontinence Type:** Accurate history and bladder diary to differentiate stress, urge, overflow, functional; treat underlying cause

**Behavioral Interventions (First-Line for ALL types):**
- Bladder training (scheduled voids to gradually increase interval)
- Pelvic floor muscle exercises (Kegels) — especially for stress incontinence
- Timed voids/toileting schedules — for functional and overflow
- Fluid management (reduce bladder irritants: caffeine, alcohol, artificial sweeteners)
- Weight loss (reduces intra-abdominal pressure)

**Skin and Comfort Care:** Perineal skin care; barrier creams; absorbent products; prevent incontinence-associated dermatitis

### Red Flags

- **Incontinence-associated dermatitis (IAD):** Moisture-associated skin damage from prolonged exposure to urine; erythema, maceration, secondary infection — treat with barrier products and gentle cleansing
- **Recurrent UTIs:** Urinary stasis from incomplete emptying → bacterial overgrowth; treat underlying cause; prophylactic antibiotics not recommended
- **Social isolation and depression:** Incontinence is underreported and undertreated; screen for psychosocial impact
- **Falls:** Rushing to toilet in elderly → fall risk; environmental modifications needed
- **Overflow from neurogenic bladder:** Risk of hydronephrosis and renal failure if not managed with catheterization

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Leaking when coughing = stress incontinence → pelvic floor exercises. Sudden urge to void = urge incontinence → anticholinergics. Can''t empty bladder fully = overflow → treat obstruction or use catheter"
- **Anticholinergics in elderly:** AVOID in dementia patients — increased confusion, falls, constipation, urinary retention; mirabegron is safer alternative
- **PVR measurement:** Elevated PVR (>100–200 mL) = overflow; normal PVR = urge, stress, or functional

## Related

- [[benign-prostatic-hyperplasia]]
- [[bethanechol]]
- [[botulinum-toxin]]
- [[duloxetine]]
- [[estrogen-topical]]
- [[finasteride]]
- [[menopause]]
- [[mirabegron]]
- [[neurogenic-bladder]]
- [[oxybutynin]]
- [[solifenacin]]
- [[spinal-cord-injury]]
- [[tamsulosin]]
- [[tolterodine]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('urinary-tract-infection-uti', 'Urinary Tract Infection (UTI)', 'disease', '# Urinary Tract Infection (UTI)

## Study Snapshot

### What It Is

UTI is microbial infection of the urinary tract (urethra, bladder, ureters, or kidneys), most commonly caused by ascending uropathogens such as *E. coli*.

### Why It Matters

- Pyelonephritis, renal abscess, urosepsis
- Recurrent infections and antimicrobial resistance

### Patho In One Line

Perineal/urethral colonization by uropathogens

## Clinical Pattern

### Who Is At Risk

- **Common pathogens:** Uropathogenic *E. coli* most frequent
- **Risk factors:** Female anatomy, sexual activity, urinary stasis/obstruction, catheters, pregnancy, diabetes
- **Pathway:** Periurethral colonization with ascending infection

### What You See

- Dysuria, urgency, frequency, suprapubic discomfort
- Hematuria or cloudy/foul-smelling urine
- Fever/flank pain/CVA tenderness suggest upper tract involvement

### What Confirms It

- Urinalysis (pyuria, leukocyte esterase, nitrites)
- Urine culture for complicated/recurrent/severe presentations
- Renal imaging when obstruction/complicated infection suspected

## Nursing Lens

### Nursing Priorities

- Encourage hydration and complete antibiotic course
- Monitor for worsening infection, sepsis signs, or poor response
- Educate on recurrence prevention and catheter care when relevant

### Red Flags

- Pyelonephritis, renal abscess, urosepsis
- Recurrent infections and antimicrobial resistance

### Treatment Themes

- Empiric antibiotics guided by local resistance, then culture-directed therapy
- Analgesic adjuncts as appropriate
- Prophylactic strategies for selected recurrent UTI patients

## Related

- [[enuresis]]
- [[nephrolithiasis-kidney-stones]]
- [[pyelonephritis]]
- [[vesicoureteral-reflux-vur]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('urinary-tract-obstruction', 'Urinary Tract Obstruction', 'disease', '# Urinary Tract Obstruction

## Study Snapshot

### What It Is

Urinary tract obstruction is a blockage anywhere in the urinary system — from kidney stones in the ureter to BPH obstructing the bladder outlet. Obstruction causes post-renal AKI and, if prolonged, permanent renal damage. Rapid decompression is essential to prevent irreversible kidney injury.

> **The Simplified View:** "Urine travels from kidney to bladder through a plumbing system. When there''s a blockage — a stone in the ureter or an enlarged prostate squeezing the urethra — the pipes back up. The kidney swells, pressure damages the nephrons, and if not relieved quickly, the kidney is permanently destroyed."

### Why It Matters

- **Urosepsis:** Infected obstruction → septic shock — medical emergency; decompression + antibiotics
- **AKI → CKD:** Prolonged obstruction causes irreversible kidney damage
- **Bilateral obstruction:** Both kidneys obstructed → anuria, rapid AKI progression
- **Solitary kidney obstruction:** Single functioning kidney obstructed → urgent decompression needed

### Patho In One Line

**Obstruction** → urine cannot drain → pressure builds proximal

## Clinical Pattern

### What You See

- Renal: [flank pain — colicky, radiating to groin] — Ureteral obstruction
- Renal: [oliguria/anuria] — Decreased urine output
- Renal: [hematuria] — Stone trauma
- MSK: [costovertebral angle tenderness] — Kidney distention
- MSK: [palpable bladder] — Urinary retention
- MSK: [edema] — Fluid overload

### What Confirms It

- BUN, creatinine (elevated — post-renal AKI)
- Electrolytes (hyperkalemia)
- Urinalysis (hematuria)
- Urine culture

## Nursing Lens

### Nursing Priorities

**Urgent Decompression:** If obstructed and infected (fever + obstruction) → emergent decompression within hours to prevent sepsis and permanent kidney damage

**Monitor Renal Function:** Serial BUN/creatinine; urine output; electrolytes (watch for hyperkalemia)

**Pain Management and Comfort:** Analgesics; antiemetics; encourage mobility

### Red Flags

- **Urosepsis:** Infected obstruction → septic shock — medical emergency; decompression + antibiotics
- **AKI → CKD:** Prolonged obstruction causes irreversible kidney damage
- **Bilateral obstruction:** Both kidneys obstructed → anuria, rapid AKI progression
- **Solitary kidney obstruction:** Single functioning kidney obstructed → urgent decompression needed

### Treatment Themes

* **Urethral catheter:** For bladder outlet obstruction
* **Ureteral stent (JJ stent):** Placed cystoscopically through obstruction
* **Percutaneous nephrostomy:** For infected obstructed kidney or when stenting impossible

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Obstructed, infected kidney + fever = EMERGENCY decompression + antibiotics"
- **Post-renal AKI:** Elevated BUN:Cr ratio (>20:1) due to passive reabsorption of urea; relieved by decompression

## Related

- [[acute-kidney-injury-aki]]
- [[benign-prostatic-hyperplasia]]
- [[ceftriaxone]]
- [[ketorolac]]
- [[morphine]]
- [[nephrolithiasis-kidney-stones]]
- [[tamsulosin]]
- [[urinary-tract-infection-uti]]
- [[urosepsis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('vertebral-injuries', 'Vertebral Injuries', 'disease', '# Vertebral Injuries

## Study Snapshot

### What It Is

Vertebral injuries range from stable compression fractures to unstable burst fractures, fracture-dislocations, and atlantoaxial injuries. The spine has a three-column system (anterior, middle, posterior); when two or more columns are disrupted, the spine is unstable and may require surgical stabilization. Proper handling and immobilization is critical — improper movement can convert a neurologically intact patient into a complete paraplegic.

> **The Simplified View:** "The spine is a stack of building blocks held together by ligaments. When blocks crack or ligaments tear, the stack becomes unstable — the spinal cord running through the middle is at risk."

### Why It Matters

- **Spinal cord injury from unstable fracture:** Improper handling can cause complete cord injury
- **Non-union:** Especially odontoid Type II in elderly — may require C1-C2 fusion
- **Post-traumatic kyphosis:** Progressive deformity; may need surgical correction
- **Halo vest complications:** Pin site infection, pressure injuries, respiratory compromise

### Patho In One Line

**High-energy mechanism** (MVA, fall, diving, assault)

## Clinical Pattern

### What You See

- MSK: [cervical pain, neck stiffness, limited ROM] — Musculoskeletal injury
- MSK: [step-off or deformity palpable] — Vertebral displacement
- MSK: [localized vertebral tenderness] — Fracture site
- Neuro: [UMN signs below level — spasticity, hyperreflexia] — Corticospinal tract involvement
- Neuro: [respiratory compromise — high cervical] — Phrenic nerve (C3–C5) affected
- Skin: [seatbelt sign — abdominal bruising] — Risk of Chance fracture and intra-abdominal injury

### What Confirms It

- CBC (blood loss from associated injuries)
- Calcium (hypercalcemia from immobilization)

## Nursing Lens

### Nursing Priorities

**Spinal Immobilization:** Maintain C-spine until cleared; log-roll for turning; NEVER remove collar without physician order; use halo vest or Philadelphia collar as indicated

**Neurological Assessment:** Frequent neuro checks; document any deterioration IMMEDIATELY; assess bowel/bladder function

**Immobilization Complications:** DVT prophylaxis (LMWH + SCDs); pressure injury prevention; respiratory care (incentive spirometry for high lesions)

### Red Flags

- **Spinal cord injury from unstable fracture:** Improper handling can cause complete cord injury
- **Non-union:** Especially odontoid Type II in elderly — may require C1-C2 fusion
- **Post-traumatic kyphosis:** Progressive deformity; may need surgical correction
- **Halo vest complications:** Pin site infection, pressure injuries, respiratory compromise

## Exam Layer

### Exam Clues

- **NCLEX pearl:** "Three-column concept: anterior + middle + posterior. Two or more columns disrupted = unstable = likely needs surgery"
- **Jefferson vs. Hangman:** Jefferson = C1 burst (axial loading); Hangman = C2 pars (hyperextension)
- **Chance fracture:** Think seatbelt injury + possible intra-abdominal organ damage

## Related

- [[autonomic-hyperreflexia]]
- [[baclofen]]
- [[degenerative-disorders-of-the-spine]]
- [[enoxaparin]]
- [[fentanyl]]
- [[gabapentin]]
- [[morphine]]
- [[osteoporosis]]
- [[spinal-cord-injury]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('vesicoureteral-reflux-vur', 'Vesicoureteral Reflux (VUR)', 'disease', '# Vesicoureteral Reflux (VUR)

## Study Snapshot

### What It Is

VUR is retrograde flow of urine from the bladder into the ureter and sometimes kidney due to an incompetent vesicoureteral junction.

### Why It Matters

- Renal scarring/reflux nephropathy
- Hypertension, CKD in severe persistent cases

### Patho In One Line

UVJ valve mechanism fails during voiding

## Clinical Pattern

### Who Is At Risk

- **Primary VUR:** Congenital short/incompetent intramural ureter
- **Secondary VUR:** Elevated bladder pressure (e.g., obstruction, neurogenic bladder)
- **Risk factors:** Family history, recurrent febrile UTIs, bladder-bowel dysfunction

### What You See

- Recurrent febrile UTIs (often first clue in children)
- Dysuria, urgency, abdominal/flank discomfort
- Poor growth or hypertension in chronic scarred disease

### What Confirms It

- Renal/bladder ultrasound for anatomy and hydronephrosis
- Voiding cystourethrogram (VCUG) for diagnosis and grading
- DMSA scan may assess renal scarring in selected cases

## Nursing Lens

### Nursing Priorities

- Teach parents UTI symptom recognition and early urine testing
- Reinforce hydration, timed voiding, and bowel regimen adherence
- Track growth, BP, renal follow-up, and specialist appointments

### Red Flags

- Renal scarring/reflux nephropathy
- Hypertension, CKD in severe persistent cases

### Treatment Themes

- Continuous antibiotic prophylaxis in selected higher-risk children
- Prompt culture-directed treatment of breakthrough UTIs
- Medication for bladder-bowel dysfunction when indicated

## Related

- [[chronic-kidney-disease-ckd]]
- [[pyelonephritis]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('acetaminophen', 'Acetaminophen', 'drug', '# Acetaminophen

## Study Snapshot

### What It Is

Generic: Acetaminophen

Class: Analgesic / Antipyretic

### Why Students Care

Mild-moderate pain, fever. Preferred analgesic in hemophilia (no bleeding risk).

### Mechanism In One Line

Inhibits COX-1 and COX-2 in CNS; reduces prostaglandin synthesis.

### Common Uses

Mild-moderate pain, fever. Preferred analgesic in hemophilia (no bleeding risk).

## Nursing Lens

### Monitor For

Study cue: verify maximum daily dose and total intake from all sources. Hepatotoxicity risk above dose. Avoid alcohol. pregnancy safety varies; verify current guidance.

## Related

- [[ ]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('acyclovir', 'Acyclovir', 'drug', '# Acyclovir

## Study Snapshot

### What It Is

Generic: Acyclovir

Class: Antiviral (nucleoside analogue)

### Why Students Care

Herpes simplex (HSV), herpes zoster (shingles), encephalitis. Used in immunocompromised.

### Mechanism In One Line

Inhibits viral DNA polymerase; incorporated into viral DNA and causes chain termination.

### Common Uses

Herpes simplex (HSV), herpes zoster (shingles), encephalitis. Used in immunocompromised.

## Nursing Lens

### Monitor For

IV dose requires hydration, slow infusion. Monitor renal function. Oral: can take with food.

## Related

- [[meningitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('albumin', 'Albumin', 'drug', '# Albumin

## Study Snapshot

### What It Is

Generic: Albumin

Common brand names: Albu-Resid, AlbuRx, Albuminar, Albutein, Buminate, Plasmanate, etc.

Class: Therapeutic Class: Plasma Volume Expander / Pharmacologic Class: Plasma Protein Fraction

### Mechanism In One Line

Administered albumin expands plasma volume by increasing colloid osmotic pressure.

## Nursing Lens

### Before Giving: What To Check

**Before administration:** Assess vital signs (BP, HR), hydration status, signs of fluid overload (edema, rales), electrolytes, and patient history (e.g., heart failure, renal impairment).

### Monitor For

**Assessment:** Monitor vital signs closely during infusion, watching for changes in BP, HR, and respiratory status. Assess for signs of fluid overload (crackles in lungs, increased edema, dyspnea) and reaction to the infusion (rash, itching, flushing).

**Education:** Explain the purpose of the infusion to the patient. Instruct them to report any unusual symptoms immediately.

### Major Safety Flags

**Toxicity signs:** Signs of fluid overload, allergic reaction.

**Study response cue:** stop and escalate per order or facility policy. anticipate ordered emergency medications as needed (e.g., epinephrine for anaphylaxis, diuretics for fluid overload).

## Exam Layer

### Exam Clues

- **Not a substitute for blood:** Albumin expands volume but does not carry oxygen or clotting factors.
- **Monitor BP & HR:** Infusion can cause rapid changes.
- **Listen to lungs:** Crucial for detecting early signs of fluid overload.
- **Use with diuretics:** Often used in conjunction with diuretics to manage edema in nephrotic syndrome.

## Related

- [[ACE Inhibitors/ARBs]]
- [[cirrhosis]]
- [[Loop Diuretics]]
- [[nephrotic-syndrome]]
- [[Potassium Supplements]]
- [[Sodium Restricted Diet]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('allopurinol', 'Allopurinol', 'drug', '# Allopurinol

## Study Snapshot

### What It Is

Generic: Allopurinol

Class: Antigout / Xanthine oxidase inhibitor

### Why Students Care

Chronic gout, tumour lysis syndrome prophylaxis, hyperuricemia.

### Mechanism In One Line

Blocks xanthine oxidase → ↓ uric acid production.

### Common Uses

Chronic gout, tumour lysis syndrome prophylaxis, hyperuricemia.

## Nursing Lens

### Monitor For

Start during/after acute attack resolves. Keep hydrated (2-3L/day). May cause rash (stop if occurs).

## Related

- [[nephrolithiasis-kidney-stones]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('amoxicillin', 'Amoxicillin', 'drug', '# Amoxicillin

## Study Snapshot

### What It Is

Generic: Amoxicillin

Class: Antibiotic (penicillin)

### Why Students Care

Respiratory infections, H. pylori, Lyme disease, UTIs. Often combined with clavulanic acid (Augmentin).

### Mechanism In One Line

Bactericidal; binds penicillin-binding proteins → inhibits cell wall synthesis.

### Common Uses

Respiratory infections, H. pylori, Lyme disease, UTIs. Often combined with clavulanic acid (Augmentin).

## Nursing Lens

### Monitor For

Assess allergy (cross-reacts with all penicillins). Can crush tabs. May cause diarrhea. Oral absorption unaffected by food.

## Related

- [[meningitis]]
- [[pyelonephritis]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('azathioprine', 'Azathioprine', 'drug', '# Azathioprine

## Study Snapshot

### What It Is

Generic: Azathioprine

Class: Immunosuppressant (antimetabolite)

### Why Students Care

Crohn''s disease, ulcerative colitis, autoimmune conditions, transplant rejection prevention.

### Mechanism In One Line

Converted to mercaptopurine; interferes with purine synthesis → ↓ lymphocyte proliferation.

### Common Uses

Crohn''s disease, ulcerative colitis, autoimmune conditions, transplant rejection prevention.

## Nursing Lens

### Monitor For

Monitor CBC (bone marrow suppression). Hepatotoxicity risk. Avoid live vaccines. Takes weeks to work.

## Related

- [[crohns-disease]]
- [[multiple-sclerosis-ms]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('benzoyl-peroxide', 'Benzoyl Peroxide', 'drug', '# Benzoyl Peroxide

## Study Snapshot

### What It Is

Generic: Benzoyl Peroxide

Class: Topical keratolytic / Antimicrobial

### Why Students Care

Acne vulgaris (mild-moderate inflammatory). Often combined with topical retinoids.

### Mechanism In One Line

Releases free radical oxygen → kills P.

### Common Uses

Acne vulgaris (mild-moderate inflammatory). Often combined with topical retinoids.

## Nursing Lens

### Monitor For

Start at low concentration (2.5-5%). Avoid hair and coloured fabrics (bleaches). Can cause initial dryness/flaking.

## Related

- [[acne-vulgaris]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('brentuximab-vedotin', 'Brentuximab Vedotin', 'drug', '# Brentuximab Vedotin

## Study Snapshot

### What It Is

Generic: Brentuximab Vedotin

Class: Antineoplastic (antibody-drug conjugate)

### Why Students Care

Hodgkin lymphoma (after transplant failure), anaplastic large cell lymphoma (ALCL).

### Mechanism In One Line

Anti-CD30 monoclonal antibody linked to MMAE (microtubule inhibitor).

### Common Uses

Hodgkin lymphoma (after transplant failure), anaplastic large cell lymphoma (ALCL).

## Nursing Lens

### Monitor For

Monitor for peripheral neuropathy (may be dose-limiting). Pre-medicate for infusion reactions. Risk of PML.

## Related

- [[non-hodgkin-lymphoma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('calcium-carbonate', 'Calcium Carbonate', 'drug', '# Calcium Carbonate

## Study Snapshot

### What It Is

Generic: Calcium Carbonate

Common brand names: Tums, Os-Cal (when combined with Vitamin D), generic calcium carbonate

Class: Therapeutic Class: Antacid / Mineral Supplement / Pharmacologic Class: Calcium Salt

### Mechanism In One Line

In the gastrointestinal tract, calcium carbonate reacts with dietary phosphate to form insoluble calcium phosphate, which is then excreted in the feces.

## Nursing Lens

### Before Giving: What To Check

**Before administration:** Assess serum phosphate and calcium levels. Review patient''s current medications, as calcium carbonate can affect the absorption of certain drugs (e.g., tetracyclines, fluoroquinolones, thyroid hormones).

### Monitor For

**Assessment:** Monitor serum calcium and phosphate levels regularly. Monitor for symptoms of hypercalcemia and constipation. Obtain baseline kidney function tests.

**Education:** Educate patient on the importance of taking the medication with meals. Advise them to report signs of hypercalcemia (constipation, nausea, confusion, polyuria) or severe abdominal pain. Inform them to separate administration from other oral medications that can be affected by calcium''s absorption-altering properties.

### Major Safety Flags

**Toxicity signs:** Symptoms of hypercalcemia, severe constipation, fecal impaction.

**Study response cue:** Discontinue calcium carbonate. Hydration. Correct electrolyte imbalances. For severe constipation, management may include laxatives or enemas. For hypercalcemia, treatment depends on severity and may include IV fluids, loop diuretics, and calcitonin.

## Exam Layer

### Exam Clues

- **Timing is Key:** Always give with meals for phosphate binding.
- **Separate Meds:** Advise patients to wait 1-2 hours before or after taking other medications that can interact.
- **Constipation:** Monitor for and manage constipation proactively, especially in elderly patients or those on other constipating medications.

## Related

- [[ace-inhibitors/arbs]]
- [[dietary-phosphate-restriction]]
- [[loop-diuretics]]
- [[sevelamer]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('ciprofloxacin', 'Ciprofloxacin', 'drug', '# Ciprofloxacin

## Study Snapshot

### What It Is

Generic: Ciprofloxacin

Class: Antibiotic (fluoroquinolone)

### Why Students Care

UTIs, respiratory infections, traveller''s diarrhoea, diverticulitis, bone/joint infections.

### Mechanism In One Line

Bactericidal; inhibits DNA gyrase and topoisomerase IV → DNA fragmentation.

### Common Uses

UTIs, respiratory infections, traveller''s diarrhoea, diverticulitis, bone/joint infections.

## Nursing Lens

### Monitor For

Avoid antacids (chelation). Take with full glass of water. Tendon rupture risk (stop if pain). Avoid in children <18.

## Related

- [[pyelonephritis]]
- [[urinary-tract-infection-uti]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('cyclophosphamide', 'Cyclophosphamide', 'drug', '# Cyclophosphamide

## Study Snapshot

### What It Is

Generic: Cyclophosphamide

Class: Antineoplastic (alkylating agent)

### Why Students Care

NHL (CHOP regimen), leukemia, autoimmune diseases (vasculitis), bone marrow transplant conditioning.

### Mechanism In One Line

Nitrogen mustard → cross-links DNA → prevents cell division.

### Common Uses

NHL (CHOP regimen), leukemia, autoimmune diseases (vasculitis), bone marrow transplant conditioning.

## Nursing Lens

### Monitor For

Hydrate well (prevent haemorrhagic cystitis). Monitor WBC. Give in AM (less bladder exposure). Antiemetics needed.

## Related

- [[multiple-myeloma]]
- [[nephroblastoma-wilms-tumor]]
- [[non-hodgkin-lymphoma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('desmopressin', 'Desmopressin', 'drug', '# Desmopressin

## Study Snapshot

### What It Is

Generic: Desmopressin

Class: Antidiuretic (synthetic ADH)

### Why Students Care

Von Willebrand disease (Type 1, some Type 2), diabetes insipidus, nocturnal enuresis.

### Mechanism In One Line

Synthetic analogue of vasopressin; ↑ water reabsorption in collecting ducts.

### Common Uses

Von Willebrand disease (Type 1, some Type 2), diabetes insipidus, nocturnal enuresis.

## Nursing Lens

### Monitor For

Monitor for hyponatremia (water intoxication). Restrict fluids during treatment. Test dose in vWD to confirm response.

## Related

- [[enuresis]]
- [[hemophilia-a-and-b]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('dexamethasone', 'Dexamethasone', 'drug', '# Dexamethasone

## Study Snapshot

### What It Is

Generic: Dexamethasone

Class: Glucocorticoid (corticosteroid)

### Why Students Care

Inflammation, autoimmune conditions, meningitis (adjunct), multiple myeloma, allergic reactions, cerebral oedema.

### Mechanism In One Line

Binds intracellular glucocorticoid receptors → anti-inflammatory and immunosuppressant effects.

### Common Uses

Inflammation, autoimmune conditions, meningitis (adjunct), multiple myeloma, allergic reactions, cerebral oedema.

## Nursing Lens

### Monitor For

Long-term: taper slowly. Monitor glucose, BP, weight. DKA risk. PPI for GI protection. Avoid live vaccines.

## Related

- [[cerebrovascular-disease-stroke]]
- [[meningitis]]
- [[multiple-myeloma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('donepezil', 'Donepezil', 'drug', '# Donepezil

## Nursing Lens

### Before Giving: What To Check

- **Primary Use:** Mild-to-severe Alzheimer symptom support
- **Modifiable Risk Factors:** Adherence, timing, adverse-effect monitoring
- **Non-Modifiable Risk Factors:** Underlying disease progression
- **Pathways:** Reversible acetylcholinesterase inhibition

## Exam Layer

### Exam Clues

- Donepezil is symptomatic treatment, not disease-modifying cure.
- Watch for bradycardia in frail older adults.

## Related

- [[alzheimers-disease]]
- [[dementia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('dopamine', 'Dopamine', 'drug', '# Dopamine

## Study Snapshot

### What It Is

Generic: Dopamine

Class: Vasopressor / Inotrope

### Why Students Care

Cardiogenic shock, septic shock (low dose for renal perfusion), heart failure.

### Mechanism In One Line

Dose-dependent: low → renal/mesenteric dilation (D1), medium → β1 cardiac stimulation, high → α1 vasoconstriction.

### Common Uses

Cardiogenic shock, septic shock (low dose for renal perfusion), heart failure.

## Nursing Lens

### Monitor For

Central line preferred. Monitor ECG, BP, urine output. Titrate carefully. Do NOT stop abruptly.

## Related

- [[acute-kidney-injury-aki]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('doxorubicin', 'Doxorubicin', 'drug', '# Doxorubicin

## Study Snapshot

### What It Is

Generic: Doxorubicin

Class: Antineoplastic (anthracycline)

### Why Students Care

NHL (CHOP), leukemia, breast cancer, sarcomas, bladder cancer.

### Mechanism In One Line

Intercalates DNA → prevents replication.

### Common Uses

NHL (CHOP), leukemia, breast cancer, sarcomas, bladder cancer.

## Nursing Lens

### Monitor For

Monitor cardiac function (cumulative exposure is a major safety concern). Safety flag: vesicant; know extravasation risk and strict institutional administration precautions. Pre- and post-hydration. Antiemetics.

## Related

- [[multiple-myeloma]]
- [[nephroblastoma-wilms-tumor]]
- [[non-hodgkin-lymphoma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('fentanyl', 'Fentanyl', 'drug', '# Fentanyl

## Study Snapshot

### What It Is

Generic: Fentanyl

Class: Opioid analgesic

### Why Students Care

Severe pain (cancer, procedural), breakthrough pain, anaesthetic adjunct. Sickle cell crisis pain.

### Mechanism In One Line

μ-opioid receptor agonist.

### Common Uses

Severe pain (cancer, procedural), breakthrough pain, anaesthetic adjunct. Sickle cell crisis pain.

## Nursing Lens

### Monitor For

Respiratory depression risk. Have naloxone available. Transdermal: onset 12-24h. Do not stop abruptly.

## Related

- [[ ]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('furosemide', 'Furosemide', 'drug', '# Furosemide

## Study Snapshot

### What It Is

Generic: Furosemide

Common brand names: Lasix

Class: Therapeutic Class: Antiembolic / Pharmacologic Class: Loop Diuretic

### Mechanism In One Line

Furosemide acts on the thick ascending limb of the Loop of Henle in the nephron.

## Nursing Lens

### Before Giving: What To Check

*   Oral: Onset 30-60 min, Peak 1-2 hr, Duration 6-8 hr
    *   IV: Onset 5 min, Peak 30 min, Duration 2 hr

**Before administration:** Assess vital signs (BP, HR), monitor intake and output, check electrolytes (especially Potassium, Sodium), assess for edema, lung sounds, and shortness of breath. Check patient''s weight.

### Monitor For

**Assessment:** Closely monitor fluid balance (intake/output, daily weights), vital signs (BP, HR), and electrolyte levels (K+, Na+, Cl-, Ca++, Mg++). Assess for signs of dehydration (dry mucous membranes, decreased skin turgor) and electrolyte imbalances (muscle cramps, weakness, arrhythmias). Monitor kidney function (BUN, Creatinine). Assess lung sounds for crackles and degree of edema.

**Education:** Educate the patient on the importance of reporting symptoms of dehydration, electrolyte imbalance (e.g., muscle weakness, palpitations), and tinnitus. Advise patient to maintain adequate fluid intake unless otherwise restricted, and to consume potassium-rich foods if advised. Emphasize the importance of regular follow-up appointments and lab monitoring.

### Major Safety Flags

**Toxicity signs:** Severe dehydration, electrolyte depletion (hypokalemia, hyponatremia), hypotension, ototoxicity.

**Study response cue:** Discontinue furosemide. Rehydrate cautiously. Correct electrolyte imbalances with appropriate supplementation or replacement therapy. Monitor vital signs and renal function closely.

## Exam Layer

### Exam Clues

- **Electrolytes:** Always monitor potassium! Loop diuretics waste potassium.
- **Ototoxicity:** Infuse IV furosemide slowly to minimize risk of hearing damage.
- **Weight:** Daily weights are crucial for monitoring fluid status.
- **Timing:** Administering in divided doses is common to maintain diuresis and reduce nocturia.

## Related

- [[ace-inhibitors/arbs]]
- [[acute-kidney-injury-aki]]
- [[chronic-kidney-disease-ckd]]
- [[cirrhosis]]
- [[potassium-supplements]]
- [[thiazide-diuretics]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('heparin', 'Heparin', 'drug', '# Heparin

## Study Snapshot

### What It Is

Generic: Heparin

Class: Anticoagulant (indirect)

### Why Students Care

DVT/PE treatment/prophylaxis, DIC (treat underlying + heparin), ACS, catheter flushing.

### Mechanism In One Line

Potentiates antithrombin III → inhibits thrombin and factor Xa.

### Common Uses

DVT/PE treatment/prophylaxis, DIC (treat underlying + heparin), ACS, catheter flushing.

## Nursing Lens

### Monitor For

Monitor aPTT (therapeutic 1.5-2.5x control). HIT risk (check platelets). Protamine reversal. SC or IV only.

## Related

- [[cerebrovascular-disease-stroke]]
- [[dic-disseminated-intravascular-coagulation]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('hydroxyurea', 'Hydroxyurea', 'drug', '# Hydroxyurea

## Study Snapshot

### What It Is

Generic: Hydroxyurea

Class: Antineoplastic (antimetabolite) / HbF inducer

### Why Students Care

Sickle cell disease (reduces crises), chronic myelogenous leukemia, polycythemia vera, psoriasis.

### Mechanism In One Line

Inhibits ribonucleotide reductase → ↓ DNA synthesis.

### Common Uses

Sickle cell disease (reduces crises), chronic myelogenous leukemia, polycythemia vera, psoriasis.

## Nursing Lens

### Monitor For

Monitor CBC closely (myelosuppression). Contraception required. May cause darkening of skin lesions.

## Related

- [[multiple-myeloma]]
- [[sickle-cell-anemia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('insulin', 'Insulin', 'drug', '# Insulin

## Study Snapshot

### What It Is

Generic: Insulin

Class: Pancreatic hormone / Glucose regulator

### Why Students Care

Diabetes mellitus Type 1, DKA, hyperkalaemia, T2DM when oral agents insufficient.

### Mechanism In One Line

Binds insulin receptor → ↑ glucose uptake into cells, ↑ glycogen synthesis, ↓ gluconeogenesis.

### Common Uses

Diabetes mellitus Type 1, DKA, hyperkalaemia, T2DM when oral agents insufficient.

## Nursing Lens

### Monitor For

Rotate injection sites. Correct storage (don''t freeze, don''t use expired). Hypoglycaemia management always available.

## Related

- [[diabetes-mellitus]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('isotretinoin', 'Isotretinoin', 'drug', '# Isotretinoin

## Study Snapshot

### What It Is

Generic: Isotretinoin

Class: Retinoid (acne agent)

### Why Students Care

Severe recalcitrant nodular acne, acne resistant to other treatments.

### Mechanism In One Line

Reduces sebum production, normalizes keratinization, anti-inflammatory.

### Common Uses

Severe recalcitrant nodular acne, acne resistant to other treatments.

## Nursing Lens

### Monitor For

iPLEDGE program (teratogenic — dual contraception required). Baseline and monthly LFTs, lipids. Dry skin/mucous membranes expected.

## Related

- [[acne-vulgaris]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('l-glutamine', 'L-Glutamine', 'drug', '# L-Glutamine

## Study Snapshot

### What It Is

Generic: L-Glutamine

Class: Amino acid supplement

### Why Students Care

Sickle cell disease (reduce oxidative stress and acute crises). GI mucositis from chemo.

### Mechanism In One Line

Fuel for enterocytes and immune cells.

### Common Uses

Sickle cell disease (reduce oxidative stress and acute crises). GI mucositis from chemo.

## Nursing Lens

### Monitor For

Usually given orally. Generally well tolerated. Part of Endari (prescription) for SCD.

## Related

- [[sickle-cell-anemia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('lactulose', 'Lactulose', 'drug', '# Lactulose

## Study Snapshot

### What It Is

Generic: Lactulose

Class: Osmotic laxative / Hepatic encephalopathy agent

### Why Students Care

Hepatic encephalopathy, constipation. Used in cirrhosis to reduce ammonia.

### Mechanism In One Line

Non-absorbable disaccharide → metabolized by colonic bacteria → organic acids → lowers colonic pH → traps NH3 as NH4+; osmotic effect → bowel evacuation.

### Common Uses

Hepatic encephalopathy, constipation. Used in cirrhosis to reduce ammonia.

## Nursing Lens

### Monitor For

Can take with juice. Expect 2-3 soft stools/day (dose titration). Long-term safe. Avoid in galactosaemia.

## Related

- [[cirrhosis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('lisinopril', 'Lisinopril', 'drug', '# Lisinopril

## Study Snapshot

### What It Is

Generic: Lisinopril

Common brand names: Prinivil, Zestril

Class: Therapeutic Class: Antihypertensive / Pharmacologic Class: Angiotensin-Converting Enzyme (ACE) Inhibitor

### Mechanism In One Line

Lisinopril inhibits the angiotensin-converting enzyme (ACE), which is responsible for converting angiotensin I to angiotensin II.

## Nursing Lens

### Before Giving: What To Check

**Before administration:** Assess blood pressure (supine and standing if symptomatic), heart rate, kidney function (serum creatinine, BUN), and electrolytes (especially potassium). Inquire about history of angioedema or cough.

### Monitor For

**Assessment:** Monitor blood pressure regularly, including postural checks if indicated. Assess for signs of angioedema, hyperkalemia (e.g., muscle weakness, ECG changes), and worsening kidney function (monitoring creatinine, BUN). Monitor intake and output.

**Education:** Educate the patient on the importance of taking the medication as prescribed, potential side effects (especially cough and angioedema), and the need for regular monitoring of BP and kidney function. Advise them to report any swelling or breathing difficulties immediately. Instruct them to avoid salt substitutes containing potassium.

### Major Safety Flags

**Toxicity signs:** Severe hypotension, dizziness, bradycardia (rare).

**Study response cue:** hold/escalate per order or facility policy. If severe hypotension occurs, anticipate ordered intravenous fluids and vasopressors as needed. Monitor kidney function and electrolytes.

## Exam Layer

### Exam Clues

- **First-dose hypotension:** Can occur, especially in volume-depleted patients. Start with a lower dose and monitor BP closely.
- **Hyperkalemia Risk:** Monitor potassium levels, especially in patients with renal impairment or those taking potassium supplements/sparing diuretics.
- **Cough:** A common side effect, often bothersome. If persistent and severe, alternative antihypertensives may be considered.
- **Angioedema:** A serious allergic reaction. Student cue: recognize this as a stop-and-escalate safety issue.

## Related

- [[angiotensin-ii-receptor-blockers-arbs]]
- [[beta-blockers]]
- [[diuretics]]
- [[potassium-supplements]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('metformin', 'Metformin', 'drug', '# Metformin

## Study Snapshot

### What It Is

Generic: Metformin

Class: Antidiabetic (biguanide)

### Why Students Care

Type 2 DM (first-line), polycystic ovary syndrome, prediabetes.

### Mechanism In One Line

↓ hepatic gluconeogenesis, ↑ insulin sensitivity.

### Common Uses

Type 2 DM (first-line), polycystic ovary syndrome, prediabetes.

## Nursing Lens

### Monitor For

Hold before/after contrast dye procedures (renal risk). Take with food. Monitor B12. ECG for lactic acidosis risk.

## Related

- [[diabetes-mellitus]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('metronidazole', 'Metronidazole', 'drug', '# Metronidazole

## Study Snapshot

### What It Is

Generic: Metronidazole

Class: Antibiotic / Antiprotozoal

### Why Students Care

Diverticulitis (with amoxicillin + ciprofloxacin), bacterial vaginosis, C. diff, anaerobic infections, parasitic infections (Giardia, amebiasis).

### Mechanism In One Line

Enters microbial/anerobic cell → toxic metabolites damage DNA.

### Common Uses

Diverticulitis (with amoxicillin + ciprofloxacin), bacterial vaginosis, C. diff, anaerobic infections, parasitic infections (Giardia, amebiasis).

## Nursing Lens

### Monitor For

Take with food to reduce GI upset. Avoid alcohol (disulfiram-like reaction). Metallic taste common. Dark urine is harmless.

## Related

- [[cholelithiasis-and-cholecystitis]]
- [[crohns-disease]]
- [[diverticular-disease]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('morphine', 'Morphine', 'drug', '# Morphine

## Study Snapshot

### What It Is

Generic: Morphine

Class: Opioid analgesic

### Why Students Care

Moderate-severe pain (cancer, MI, sickle cell crisis), dyspnoea in palliative care, pulmonary oedema.

### Mechanism In One Line

μ-opioid receptor agonist.

### Common Uses

Moderate-severe pain (cancer, MI, sickle cell crisis), dyspnoea in palliative care, pulmonary oedema.

## Nursing Lens

### Monitor For

Respiratory depression risk. Start low, titrate. Have naloxone available. Monitor bowel sounds (constipation).

## Related

- [[ ]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('nitrofurantoin', 'Nitrofurantoin', 'drug', '# Nitrofurantoin

## Study Snapshot

### What It Is

Generic: Nitrofurantoin

Common brand names: Macrobid, Macrodantin, Furadantin

Class: Therapeutic Class: Anti-infective / Pharmacologic Class: Nitrofuran

### Mechanism In One Line

Nitrofurantoin is reduced by bacterial flavoproteins into reactive intermediates that disrupt bacterial protein synthesis, cellular respiration, DNA, and RNA synthesis.

## Nursing Lens

### Before Giving: What To Check

**Before administration:** Assess for allergy to nitrofurantoin or related compounds. Review kidney function (contraindicated in significant renal impairment, CrCl <30-60 mL/min depending on source) and history of pulmonary reactions or liver dysfunction.

### Monitor For

**Assessment:** Monitor for signs of efficacy (resolution of UTI symptoms) and side effects (pulmonary symptoms, jaundice, peripheral neuropathy). Assess kidney function (CrCl).

**Education:** Emphasize completing the full course of antibiotics. Educate patient on potential side effects and to report any new or worsening symptoms, especially pulmonary (cough, shortness of breath) or neurological (numbness, tingling).

### Major Safety Flags

**Toxicity signs:** Pulmonary toxicity, hepatotoxicity, peripheral neuropathy.

**Study response cue:** Discontinue nitrofurantoin. Supportive care. Management depends on specific toxicity (e.g., oxygen for pulmonary, monitoring for hepatic/renal function).

## Exam Layer

### Exam Clues

- **Not for flank pain:** Nitrofurantoin is primarily for lower UTIs; it does not achieve adequate tissue levels for pyelonephritis (upper UTI).
- **Renal Impairment:** Use cautiously and avoid if CrCl is low.
- **G6PD Deficiency:** Risk of hemolytic anemia.
- **Dark urine:** A normal side effect, patients should be informed.

## Related

- [[other-uti-antibiotics]]
- [[phenazopyridine]]
- [[probiotics]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('pantoprazole', 'Pantoprazole', 'drug', '# Pantoprazole

## Study Snapshot

### What It Is

Generic: Pantoprazole

Class: Proton pump inhibitor (PPI)

### Why Students Care

GERD, peptic ulcer disease, H. pylori eradication regimen, Zollinger-Ellison syndrome.

### Mechanism In One Line

Irreversibly inhibits H+/K+-ATPase in gastric parietal cells → ↓ gastric acid secretion.

### Common Uses

GERD, peptic ulcer disease, H. pylori eradication regimen, Zollinger-Ellison syndrome.

## Nursing Lens

### Monitor For

Take 30-60 min before first meal (usually breakfast). IV for inpatients. Long-term: monitor B12, Mg2+.

## Related

- [[cirrhosis]]
- [[gerd]]
- [[peptic-ulcer-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('prednisone', 'Prednisone', 'drug', '# Prednisone

## Study Snapshot

### What It Is

Generic: Prednisone

Common brand names: Deltasone, Rayos

Class: Therapeutic Class: Anti-inflammatory / Immunosuppressant / Pharmacologic Class: Corticosteroid (Glucocorticoid)

### Mechanism In One Line

Prednisone is a prodrug converted to its active form, prednisolone, in the liver.

## Nursing Lens

### Before Giving: What To Check

**Before administration:** Assess current symptoms, vital signs, glucose levels (corticosteroids can increase blood sugar), and potential contraindications/precautions (e.g., active infection, history of peptic ulcer, osteoporosis, glaucoma).

### Monitor For

**Assessment:** Monitor for signs of infection (fever, ^WBCs, delayed wound healing), assess for signs of Cushingoid effects, monitor blood glucose and blood pressure, assess mood and mental status, monitor for GI bleeding (dark stools, coffee-ground emesis).

**Education:** Emphasize adherence to the prescribed dose and schedule, and **never** to stop abruptly without physician guidance (tapering instructions). Educate on signs of infection and the need to report them. Advise on potential side effects and management (e.g., diet for weight gain/hyperglycemia, safety precautions for mood changes). Inform patient to inform all healthcare providers they are on corticosteroids.

### Major Safety Flags

**Toxicity signs:** Acute adrenal crisis (hypotension, weakness, nausea, vomiting) particularly with sudden withdrawal after prolonged use. Also, severe side effects like psychosis or Cushingoid features with chronic high-dose use.

**Study response cue:** For acute adrenal crisis, IV hydrocortisone and aggressive fluid resuscitation are needed. For chronic side effects, the dose is usually tapered under medical supervision. There is no specific antidote for prednisone itself, management is supportive and dose-related.

## Exam Layer

### Exam Clues

- **Tapering is Key:** Always emphasize tapering the dose to prevent adrenal crisis.
- **Infection Risk:** Patients are immunocompromised; monitor closely for any S/S of infection.
- **Blood Sugar:** Monitor glucose levels, especially in diabetics or those at risk. May require adjustment of diabetes medications.
- **Mood:** Be aware of potential psychological effects and provide support.

## Related

- [[calcium-supplements-and-vitamin-d]]
- [[crohns-disease]]
- [[glomerulonephritis]]
- [[immunosuppressants]]
- [[meningitis]]
- [[multiple-myeloma]]
- [[multiple-sclerosis-ms]]
- [[nephrotic-syndrome]]
- [[non-hodgkin-lymphoma]]
- [[other-corticosteroids]]
- [[proton-pump-inhibitors-ppis]]
- [[ulcerative-colitis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('ranitidine', 'Ranitidine', 'drug', '# Ranitidine

## Study Snapshot

### What It Is

Generic: Ranitidine

Class: H2 receptor antagonist

### Why Students Care

GERD, peptic ulcer disease (historical — largely replaced by PPIs due to NDMA recall).

### Mechanism In One Line

Blocks histamine H2 receptors on gastric parietal cells → ↓ gastric acid secretion.

### Common Uses

GERD, peptic ulcer disease (historical — largely replaced by PPIs due to NDMA recall).

## Nursing Lens

### Monitor For

Generally replaced by PPIs clinically. Previously: take with or without food. Safer in renal impairment than PPIs.

## Related

- [[gerd]]
- [[peptic-ulcer-disease]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('rituximab', 'Rituximab', 'drug', '# Rituximab

## Study Snapshot

### What It Is

Generic: Rituximab

Class: Anti-CD20 monoclonal antibody (immunotherapy)

### Why Students Care

Non-Hodgkin lymphoma (B-cell), chronic lymphocytic leukaemia, rheumatoid arthritis, ANCA vasculitis.

### Mechanism In One Line

Binds CD20 on B-cell surface → B-cell depletion via complement and antibody-dependent cytotoxicity.

### Common Uses

Non-Hodgkin lymphoma (B-cell), chronic lymphocytic leukaemia, rheumatoid arthritis, ANCA vasculitis.

## Nursing Lens

### Monitor For

Pre-medicate with antihistamines and acetaminophen. Infusion reactions common (first infusion). Monitor for HBV reactivation.

## Related

- [[multiple-myeloma]]
- [[nephrotic-syndrome]]
- [[non-hodgkin-lymphoma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('spironolactone', 'Spironolactone', 'drug', '# Spironolactone

## Study Snapshot

### What It Is

Generic: Spironolactone

Class: Potassium-sparing diuretic (aldosterone antagonist)

### Why Students Care

Ascites/edema (cirrhosis), heart failure, resistant hypertension, hyperaldosteronism, hirsutism.

### Mechanism In One Line

Blocks aldosterone receptor in collecting duct → ↓ Na+ reabsorption, ↓ K+ excretion.

### Common Uses

Ascites/edema (cirrhosis), heart failure, resistant hypertension, hyperaldosteronism, hirsutism.

## Nursing Lens

### Monitor For

Monitor K+ (hyperkalaemia risk, especially with ACEi/ARB). Gynaecomastia risk (androgen receptor blockade). Take with food.

## Related

- [[acne-vulgaris]]
- [[chronic-kidney-disease-ckd]]
- [[cirrhosis]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('sulfonylureas-drug-card', 'Sulfonylureas Drug Card', 'drug', '# Sulfonylureas Drug Card

## Study Snapshot

### What It Is

Generic: Sulfonylureas Drug Card

Class: Antidiabetic Agent (Oral Hypoglycemic)

### Why Students Care

*   Used as an adjunct to diet and exercise for the treatment of Diabetes Mellitus Type 2 (older than 10 years of age; extended release form for patients older than 17 years).
*   Adjunct treatment with Polycystic Ovary Syndrome.

### Mechanism In One Line

*   Stimulate Insulin release from the beta cells in the Pancreas.

### Common Uses

*   Used as an adjunct to diet and exercise for the treatment of Diabetes Mellitus Type 2 (older than 10 years of age; extended release form for patients older than 17 years).
*   Adjunct treatment with Polycystic Ovary Syndrome.

## Nursing Lens

### Monitor For

*   **Hypoglycemia** (most common and significant adverse effect).
*   GI Distress (Nausea, Vomiting, Epigastric discomfort).
*   Allergic Skin Reactions.

### Major Safety Flags

*   Allergy to Sulfonylureas (to avoid Hypersensitivity Reactions).
*   Diabetes Mellitus Type 1 (patients do not have functioning beta cells and would have no benefit from the drug).
*   Pregnancy and Lactation (potential adverse effect on the Fetus or Neonate).
*   Severe Renal or Hepatic Dysfunction (assess for these as they affect drug excretion/metabolism).

### Patient Teaching Cues

*   Educate on signs and symptoms of Hypoglycemia and what to do if it occurs.
*   Emphasize the importance of adherence to Diet and Exercise Regimens.
*   Instruct on proper Medication Administration (e.g., taking with food if severe GI Upset occurs).
*   Advise to report any severe GI Distress or Allergic Skin Reactions.
*   Inform about potential Drug Interactions (e.g., drugs that acidify Urine).
*   Stress the importance of regular Blood Glucose Monitoring and Follow-up Appointments.

## Related

- [[ ]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('tamsulosin', 'Tamsulosin', 'drug', '# Tamsulosin

## Study Snapshot

### What It Is

Generic: Tamsulosin

Common brand names: Flomax

Class: Therapeutic Class: Alpha-Adrenergic Blocker / Pharmacologic Class: Selective alpha-1A blocker

### Mechanism In One Line

Tamsulosin selectively blocks alpha-1A adrenergic receptors found in smooth muscle of the prostate, bladder neck, and proximal urethra.

## Nursing Lens

### Before Giving: What To Check

**Before administration:** Assess blood pressure, check for contraindications (e.g., history of severe hypotension, sulfonamide allergy).

### Monitor For

**Assessment:** Monitor blood pressure, especially postural changes. Assess for dizziness or lightheadedness. Monitor for signs of priapism or allergic reactions.

**Education:** Instruct patient to stand up slowly to minimize orthostatic hypotension. Advise on taking medication after meals. Emphasize reporting any signs of priapism or allergic reactions immediately. Inform patient about potential for abnormal ejaculation.

### Major Safety Flags

**Toxicity signs:** Severe hypotension, dizziness, syncope, bradycardia (rare).

**Study response cue:** Discontinue tamsulosin. If symptoms persist, monitor BP and heart rate. IV fluids and vasopressors may be needed for severe hypotension. Monitor for bradycardia and manage symptomatically.

## Exam Layer

### Exam Clues

- **Postural Hypotension:** Counsel patients to rise slowly from sitting or lying positions.
- **Sulfonamide Allergy:** Tamsulosin is a sulfonamide derivative; cross-reactivity is possible but uncommon.
- **Off-label use for stones:** Often used to help pass stones smaller than 6mm in the lower ureter.

## Related

- [[5-alpha-reductase-inhibitors]]
- [[antihypertensives]]
- [[nsaids]]
- [[other-alpha-blockers]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('vincristine', 'Vincristine', 'drug', '# Vincristine

## Study Snapshot

### What It Is

Generic: Vincristine

Class: Antineoplastic (vinca alkaloid)

### Why Students Care

NHL (CHOP regimen), acute lymphoblastic leukaemia, Wilms tumour, rhabdomyosarcoma.

### Mechanism In One Line

Binds tubulin → prevents microtubule polymerization → arrests cell in metaphase.

### Common Uses

NHL (CHOP regimen), acute lymphoblastic leukaemia, Wilms tumour, rhabdomyosarcoma.

## Nursing Lens

### Monitor For

Safety flag: vesicant; know extravasation risk and strict institutional administration precautions. Monitor for neuropathy (dose-limiting). No other vinca alkaloids concurrently.

## Related

- [[multiple-myeloma]]
- [[non-hodgkin-lymphoma]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('voxelotor', 'Voxelotor', 'drug', '# Voxelotor

## Study Snapshot

### What It Is

Generic: Voxelotor

Class: Disease-modifying agent (HbS polymerization inhibitor)

### Why Students Care

Sickle cell disease (adults and paeds ≥12). Reduces haemolysis and acute vaso-occlusive crises.

### Mechanism In One Line

Binds to haemoglobin S → stabilizes HbS in its oxygenated state → inhibits polymerisation → reduces sickling.

### Common Uses

Sickle cell disease (adults and paeds ≥12). Reduces haemolysis and acute vaso-occlusive crises.

## Nursing Lens

### Monitor For

Once daily with or without food. Monitor haemoglobin (may increase). No dose adjustment in renal/hepatic impairment.

## Related

- [[sickle-cell-anemia]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.pages (id, title, type, content, user_id)
values ('warfarin', 'Warfarin', 'drug', '# Warfarin

## Study Snapshot

### What It Is

Generic: Warfarin

Class: Anticoagulant (vitamin K antagonist)

### Why Students Care

DVT/PE treatment, atrial fibrillation, mechanical heart valves, antiphospholipid syndrome.

### Mechanism In One Line

Inhibits vitamin K epoxide reductase → ↓ synthesis of factors II, VII, IX, X, protein C and S.

### Common Uses

DVT/PE treatment, atrial fibrillation, mechanical heart valves, antiphospholipid syndrome.

## Nursing Lens

### Monitor For

INR monitoring (therapeutic 2-3 for most). Many drug/food interactions (vitamin K). Heparin bridge until therapeutic.

## Related

- [[cerebrovascular-disease-stroke]]
', null)
on conflict (id) do update set
  title = excluded.title,
  type = excluded.type,
  content = excluded.content,
  updated_at = now();

insert into public.links (from_page_id, to_page_id)
values ('acne-vulgaris', 'benzoyl-peroxide')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acne-vulgaris', 'isotretinoin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acne-vulgaris', 'atopic-dermatitis-eczema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acne-vulgaris', 'skin-cancers')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-confusional-states', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-confusional-states', 'encephalopathies')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-confusional-states', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-confusional-states', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-kidney-injury-aki', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-kidney-injury-aki', 'glomerulonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-kidney-injury-aki', 'hemolytic-uremic-syndrome-hus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-kidney-injury-aki', 'nephroblastoma-wilms-tumor')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-kidney-injury-aki', 'nephrolithiasis-kidney-stones')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acute-kidney-injury-aki', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('alzheimer-s-disease', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('alzheimer-s-disease', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('alzheimer-s-disease', 'frontotemporal-dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('amyotrophic-lateral-sclerosis-als', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('appendicitis', 'intussusception')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('atopic-dermatitis-eczema', 'acne-vulgaris')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('atopic-dermatitis-eczema', 'psoriasis-papulosquamous-disorder')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('autonomic-hyperreflexia', 'spinal-cord-injury')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('autonomic-hyperreflexia', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('brain-trauma', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('brain-trauma', 'concussion')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('brain-trauma', 'fentanyl')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('brain-trauma', 'hematomas')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('brain-trauma', 'spinal-cord-injury')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('celiac-disease', 'ulcerative-colitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebral-edema', 'brain-trauma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebral-edema', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebral-edema', 'dexamethasone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebral-edema', 'hydrocephalus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebral-edema', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebrovascular-disease-stroke', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebrovascular-disease-stroke', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cerebrovascular-disease-stroke', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cholelithiasis-and-cholecystitis', 'pancreatitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cholelithiasis-and-cholecystitis', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cholelithiasis-and-cholecystitis', 'peptic-ulcer-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('chronic-kidney-disease-ckd', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('chronic-kidney-disease-ckd', 'albumin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('chronic-kidney-disease-ckd', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('chronic-kidney-disease-ckd', 'glomerulonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('chronic-kidney-disease-ckd', 'nephrotic-syndrome')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('chronic-kidney-disease-ckd', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'albumin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'cholelithiasis-and-cholecystitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'furosemide')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'lactulose')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'pancreatitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'peptic-ulcer-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cirrhosis', 'spironolactone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-infections', 'acyclovir')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-infections', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-infections', 'encephalopathies')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-infections', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-infections', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-tumors', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-tumors', 'dexamethasone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cns-tumors', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('concussion', 'acetaminophen')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('concussion', 'brain-trauma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('concussion', 'headaches')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('concussion', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('crohn-s-disease', 'albumin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('crohn-s-disease', 'appendicitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('crohn-s-disease', 'azathioprine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('crohn-s-disease', 'celiac-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('crohn-s-disease', 'ulcerative-colitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('degenerative-disorders-of-the-spine', 'spinal-cord-injury')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dementia', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dementia', 'frontotemporal-dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dementia', 'hydrocephalus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('demyelinating-disorders', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('demyelinating-disorders', 'neuromuscular-junction-disorders')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'insulin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'metformin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'enuresis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'nephrolithiasis-kidney-stones')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'pancreatitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'pressure-ulcers')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diabetes-mellitus', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('disseminated-intravascular-coagulation-dic', 'hemophilia-a-and-b')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('disseminated-intravascular-coagulation-dic', 'heparin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('disseminated-intravascular-coagulation-dic', 'sickle-cell-anemia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diverticular-disease-diverticulosis-and-diverticulitis', 'amoxicillin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diverticular-disease-diverticulosis-and-diverticulitis', 'appendicitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diverticular-disease-diverticulosis-and-diverticulitis', 'ciprofloxacin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diverticular-disease-diverticulosis-and-diverticulitis', 'metronidazole')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('diverticular-disease-diverticulosis-and-diverticulitis', 'ulcerative-colitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ear-disorders', 'amoxicillin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ear-disorders', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ear-disorders', 'dexamethasone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ear-disorders', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('encephalopathies', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('encephalopathies', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('encephalopathies', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('encephalopathies', 'lactulose')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('enuresis', 'desmopressin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('enuresis', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('enuresis', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('enuresis', 'vesicoureteral-reflux-vur')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('eye-disorders', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('eye-disorders', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('frontotemporal-dementia', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('gastroesophageal-reflux-disease-gerd', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('gastroesophageal-reflux-disease-gerd', 'peptic-ulcer-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('gastroesophageal-reflux-disease-gerd', 'ranitidine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('glomerulonephritis', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('glomerulonephritis', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('glomerulonephritis', 'nephrotic-syndrome')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('headaches', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('headaches', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('headaches', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hematomas', 'brain-trauma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hematomas', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hematomas', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hemolytic-uremic-syndrome-hus', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hemophilia-a-and-b', 'acetaminophen')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hemophilia-a-and-b', 'desmopressin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hirschsprung-disease', 'intussusception')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('huntington-s-disease', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('huntington-s-disease', 'frontotemporal-dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hydrocephalus', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hydrocephalus', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hydrocephalus', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hydrocephalus', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('intussusception', 'appendicitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('meningitis', 'dexamethasone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('meningitis', 'hydrocephalus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('meningitis', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('motor-neuron-syndromes', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('motor-neuron-syndromes', 'spinal-cord-injury')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-myeloma', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-myeloma', 'cyclophosphamide')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-myeloma', 'dexamethasone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-myeloma', 'doxorubicin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-myeloma', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-myeloma', 'prednisone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-sclerosis-ms', 'amyotrophic-lateral-sclerosis-als')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('multiple-sclerosis-ms', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephroblastoma-wilms-tumor', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephroblastoma-wilms-tumor', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrolithiasis-kidney-stones', 'allopurinol')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrolithiasis-kidney-stones', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrolithiasis-kidney-stones', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrolithiasis-kidney-stones', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrotic-syndrome', 'albumin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrotic-syndrome', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('nephrotic-syndrome', 'glomerulonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neural-tube-defects', 'hydrocephalus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neural-tube-defects', 'morphine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neuromuscular-junction-disorders', 'azathioprine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neuromuscular-junction-disorders', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neuromuscular-junction-disorders', 'prednisone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neuropathic-pain', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('neuropathic-pain', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'acyclovir')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'allopurinol')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'brentuximab-vedotin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'cyclophosphamide')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'doxorubicin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'prednisone')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'rituximab')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('non-hodgkin-lymphoma', 'vincristine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('olfactory-dysfunctions', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pancreatitis', 'azathioprine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pancreatitis', 'cholelithiasis-and-cholecystitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pancreatitis', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pancreatitis', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pancreatitis', 'peptic-ulcer-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('parkinson-s-disease', 'dopamine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('parkinson-s-disease', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('peptic-ulcer-disease', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('phenylketonuria-pku', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('phenylketonuria-pku', 'seizures-and-epilepsy')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pressure-ulcers', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pressure-ulcers', 'skin-cancers')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pressure-ulcers', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('psoriasis-papulosquamous-disorder', 'atopic-dermatitis-eczema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('psoriasis-papulosquamous-disorder', 'pressure-ulcers')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('psoriasis-papulosquamous-disorder', 'skin-cancers')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyelonephritis', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyelonephritis', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyelonephritis', 'glomerulonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyelonephritis', 'nephrolithiasis-kidney-stones')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyelonephritis', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyelonephritis', 'vesicoureteral-reflux-vur')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyloric-stenosis-infantile-hypertrophic', 'hirschsprung-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pyloric-stenosis-infantile-hypertrophic', 'intussusception')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('renal-tumours', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('renal-tumours', 'doxorubicin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('renal-tumours', 'nephroblastoma-wilms-tumor')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('renal-tumours', 'vincristine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('seizures-and-epilepsy', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('seizures-and-epilepsy', 'hydrocephalus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('seizures-and-epilepsy', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'fentanyl')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'hydroxyurea')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'l-glutamine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'morphine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sickle-cell-anemia', 'voxelotor')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('skin-cancers', 'acne-vulgaris')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('skin-cancers', 'pressure-ulcers')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('skin-cancers', 'psoriasis-papulosquamous-disorder')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('sleep-disorders', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('spinal-cord-injury', 'autonomic-hyperreflexia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('spinal-cord-injury', 'dopamine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('spinal-cord-injury', 'vertebral-injuries')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('taste-dysfunctions', 'cerebral-edema')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ulcerative-colitis', 'celiac-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ulcerative-colitis', 'crohn-s-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-incontinence', 'spinal-cord-injury')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-incontinence', 'tamsulosin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-incontinence', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-infection-uti', 'enuresis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-infection-uti', 'nephrolithiasis-kidney-stones')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-infection-uti', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-infection-uti', 'vesicoureteral-reflux-vur')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-obstruction', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-obstruction', 'morphine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-obstruction', 'nephrolithiasis-kidney-stones')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-obstruction', 'tamsulosin')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('urinary-tract-obstruction', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vertebral-injuries', 'autonomic-hyperreflexia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vertebral-injuries', 'degenerative-disorders-of-the-spine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vertebral-injuries', 'fentanyl')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vertebral-injuries', 'morphine')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vertebral-injuries', 'spinal-cord-injury')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vesicoureteral-reflux-vur', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vesicoureteral-reflux-vur', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vesicoureteral-reflux-vur', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('acyclovir', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('albumin', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('albumin', 'nephrotic-syndrome')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('allopurinol', 'nephrolithiasis-kidney-stones')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('amoxicillin', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('amoxicillin', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('amoxicillin', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('azathioprine', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('azathioprine', 'ulcerative-colitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('benzoyl-peroxide', 'acne-vulgaris')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('brentuximab-vedotin', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ciprofloxacin', 'pyelonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ciprofloxacin', 'urinary-tract-infection-uti')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cyclophosphamide', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cyclophosphamide', 'nephroblastoma-wilms-tumor')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('cyclophosphamide', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('desmopressin', 'enuresis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('desmopressin', 'hemophilia-a-and-b')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dexamethasone', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dexamethasone', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dexamethasone', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('donepezil', 'dementia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('dopamine', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('doxorubicin', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('doxorubicin', 'nephroblastoma-wilms-tumor')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('doxorubicin', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('furosemide', 'acute-kidney-injury-aki')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('furosemide', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('furosemide', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('heparin', 'cerebrovascular-disease-stroke')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hydroxyurea', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('hydroxyurea', 'sickle-cell-anemia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('insulin', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('isotretinoin', 'acne-vulgaris')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('l-glutamine', 'sickle-cell-anemia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('lactulose', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('metformin', 'diabetes-mellitus')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('metronidazole', 'cholelithiasis-and-cholecystitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('metronidazole', 'ulcerative-colitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pantoprazole', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('pantoprazole', 'peptic-ulcer-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'glomerulonephritis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'meningitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'multiple-sclerosis-ms')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'nephrotic-syndrome')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('prednisone', 'ulcerative-colitis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('ranitidine', 'peptic-ulcer-disease')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('rituximab', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('rituximab', 'nephrotic-syndrome')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('rituximab', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('spironolactone', 'acne-vulgaris')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('spironolactone', 'chronic-kidney-disease-ckd')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('spironolactone', 'cirrhosis')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vincristine', 'multiple-myeloma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('vincristine', 'non-hodgkin-lymphoma')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('voxelotor', 'sickle-cell-anemia')
on conflict do nothing;

insert into public.links (from_page_id, to_page_id)
values ('warfarin', 'cerebrovascular-disease-stroke')
on conflict do nothing;

commit;
