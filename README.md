# Project Pulse

Project Pulse is a structured clinical knowledge system for nursing school. The app is intentionally narrow right now: searchable disease cards, drug cards, and notes built from Matthew's study material.

This is not a generic notes app. The goal is to turn raw nursing notes into consistent clinical cards that are fast to search, easy to compare, and useful for exam-focused studying.

## Quick Links

- Start here: `START_HERE.md`
- Repo map: `PROJECT_INDEX.md`
- Content workflow: `docs/content-intake.md`
- Disease template: `content/templates/disease-card.md`
- Drug template: `content/templates/drug-card.md`
- Procedure template: `content/templates/procedure-card.md`

## Current Product Focus

- Organize existing markdown study notes.
- Standardize disease and drug cards.
- Keep content grouped by body system or drug class.
- Preserve wikilinks between related concepts.
- Avoid adding collaboration, graph views, or extra backend complexity until the basic content system works.

## Content Workflow

Put source material here:

- `content/inbox/markdown`: raw `.md` files from study notes.
- `content/inbox/references`: screenshots, PDFs, or source references that still need review.

Processed output goes here:

- `content/processed/diseases`: standardized disease cards.
- `content/processed/drugs`: standardized drug cards.
- `content/processed/procedures`: standardized procedure cards.
- `content/processed/notes`: flexible study notes.

Use these guides before processing content:

- `content/templates/disease-card.md`
- `content/templates/drug-card.md`
- `content/templates/procedure-card.md`
- `content/checklists/diseases-by-system.md`
- `content/checklists/drugs-by-class.md`

## Source Priority

1. Matthew's own course notes and markdown files.
2. Instructor-provided study guides and local class material.
3. Textbooks and external references only to fill gaps or verify unclear notes.

Do not mass-ingest textbooks before the card templates are stable.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
