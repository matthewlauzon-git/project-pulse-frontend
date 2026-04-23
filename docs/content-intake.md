# Content Intake Workflow

This is the simple workflow for turning Matthew's study files into Pulse cards.

## 1. Drop Raw Files

Put original markdown notes in:

- `content/inbox/markdown`

Put screenshots, PDFs, and source references in:

- `content/inbox/references`

Do not edit raw source files after placing them here.

## 2. Choose The Card Type

Use one of:

- Disease card
- Drug card
- Procedure card
- Flexible note

If a file contains multiple diseases or drugs, split it into multiple cards.

## 3. Standardize

Copy the closest template from:

- `content/templates/disease-card.md`
- `content/templates/drug-card.md`
- `content/templates/procedure-card.md`

Then rewrite the notes into the fixed structure. Keep the original meaning. Do not add unsupported details unless the source is being used to verify a gap.

## 4. Link Related Concepts

Use `[[wikilinks]]` for:

- Related diseases
- Drugs
- Procedures
- Labs
- Symptoms
- Safety concepts

Examples:

- `[[heart-failure|Heart failure]]`
- `[[furosemide|Furosemide]]`
- `[[hypokalemia|Hypokalemia]]`

## 5. Save Processed Cards

Save standardized files into:

- `content/processed/diseases`
- `content/processed/drugs`
- `content/processed/procedures`
- `content/processed/notes`

## 6. Update Coverage

Check off the matching item in:

- `content/checklists/diseases-by-system.md`
- `content/checklists/drugs-by-class.md`

If the card is not listed, add it under the closest system or class.

## Sub-Agent Task Shape

Good task:

> Convert these 5 markdown notes into disease cards using `content/templates/disease-card.md`. Do not invent facts. Preserve wikilinks where possible. Save output in `content/processed/diseases`.

Bad task:

> Organize all my nursing notes.

