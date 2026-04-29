import JSZip from 'jszip'

export type ExtractionStatus = 'extracted' | 'partial' | 'unsupported' | 'error'

export type ExtractedFileText = {
  fileName: string
  mimeType: string
  size: number
  extension: string
  status: ExtractionStatus
  text: string
  preview: string
  warnings: string[]
}

const TEXT_EXTENSIONS = new Set(['txt', 'md', 'markdown', 'csv', 'json', 'rtf', 'html'])
const WORD_EXTENSIONS = new Set(['docx'])
const SLIDE_EXTENSIONS = new Set(['pptx'])
const PDF_EXTENSIONS = new Set(['pdf'])

function getExtension(fileName: string) {
  return fileName.split('.').pop()?.toLowerCase() || ''
}

function normalizeText(value: string) {
  return value
    .replace(/\r/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

function previewText(value: string) {
  return normalizeText(value).slice(0, 900)
}

function decodeXmlEntities(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_match, code) => String.fromCodePoint(parseInt(code, 16)))
}

function xmlTextRuns(xml: string, tagPattern: RegExp) {
  const runs: string[] = []
  let match: RegExpExecArray | null
  while ((match = tagPattern.exec(xml)) !== null) {
    const text = decodeXmlEntities(match[1].replace(/<[^>]+>/g, ''))
    if (text.trim()) runs.push(text.trim())
  }
  return runs
}

function sortOfficePaths(paths: string[]) {
  return paths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
}

async function extractDocx(buffer: Buffer) {
  const zip = await JSZip.loadAsync(buffer)
  const parts = ['word/document.xml', 'word/footnotes.xml', 'word/endnotes.xml']
  const chunks: string[] = []

  for (const part of parts) {
    const file = zip.file(part)
    if (!file) continue
    const xml = await file.async('string')
    const runs = xmlTextRuns(xml, /<w:t[^>]*>([\s\S]*?)<\/w:t>/g)
    if (runs.length) chunks.push(runs.join(' '))
  }

  return normalizeText(chunks.join('\n\n'))
}

async function extractPptx(buffer: Buffer) {
  const zip = await JSZip.loadAsync(buffer)
  const slidePaths = sortOfficePaths(
    Object.keys(zip.files).filter(fileName => /^ppt\/slides\/slide\d+\.xml$/i.test(fileName))
  )
  const notePaths = sortOfficePaths(
    Object.keys(zip.files).filter(fileName => /^ppt\/notesSlides\/notesSlide\d+\.xml$/i.test(fileName))
  )
  const chunks: string[] = []

  for (const [index, slidePath] of slidePaths.entries()) {
    const xml = await zip.file(slidePath)?.async('string')
    if (!xml) continue
    const runs = xmlTextRuns(xml, /<a:t[^>]*>([\s\S]*?)<\/a:t>/g)
    if (runs.length) chunks.push(`Slide ${index + 1}\n${runs.join('\n')}`)
  }

  for (const [index, notePath] of notePaths.entries()) {
    const xml = await zip.file(notePath)?.async('string')
    if (!xml) continue
    const runs = xmlTextRuns(xml, /<a:t[^>]*>([\s\S]*?)<\/a:t>/g)
    if (runs.length) chunks.push(`Slide notes ${index + 1}\n${runs.join('\n')}`)
  }

  return normalizeText(chunks.join('\n\n'))
}

async function extractPdf(buffer: Buffer) {
  const { PDFParse } = await import('pdf-parse')
  const parser = new PDFParse({ data: buffer })
  try {
    const result = await parser.getText({ pageJoiner: '\n\n--- Page ---\n\n' })
    return normalizeText(result.text || '')
  } finally {
    await parser.destroy()
  }
}

function isTextLike(mimeType: string, extension: string) {
  return mimeType.startsWith('text/') || TEXT_EXTENSIONS.has(extension)
}

export async function extractFileText(fileName: string, mimeType: string, size: number, buffer: Buffer): Promise<ExtractedFileText> {
  const extension = getExtension(fileName)
  const warnings: string[] = []

  try {
    let text = ''

    if (isTextLike(mimeType, extension)) {
      text = normalizeText(buffer.toString('utf8'))
    } else if (WORD_EXTENSIONS.has(extension)) {
      text = await extractDocx(buffer)
      warnings.push('Word document text was extracted. Formatting, tables, and images may need review.')
    } else if (SLIDE_EXTENSIONS.has(extension)) {
      text = await extractPptx(buffer)
      warnings.push('PowerPoint slide text was extracted. Visual diagrams and speaker context may need review.')
    } else if (PDF_EXTENSIONS.has(extension)) {
      text = await extractPdf(buffer)
      warnings.push('PDF text was extracted. Scanned PDFs may require OCR later.')
    } else {
      return {
        fileName,
        mimeType,
        size,
        extension,
        status: 'unsupported',
        text: '',
        preview: '',
        warnings: ['This file type is queued by name. Add a parser before using it for study output.'],
      }
    }

    if (!text) {
      return {
        fileName,
        mimeType,
        size,
        extension,
        status: 'partial',
        text: '',
        preview: '',
        warnings: [...warnings, 'No readable text was found. This may be a scan, image-only file, or protected document.'],
      }
    }

    return {
      fileName,
      mimeType,
      size,
      extension,
      status: 'extracted',
      text,
      preview: previewText(text),
      warnings,
    }
  } catch (error) {
    return {
      fileName,
      mimeType,
      size,
      extension,
      status: 'error',
      text: '',
      preview: '',
      warnings: [error instanceof Error ? error.message : 'Could not extract this file.'],
    }
  }
}
