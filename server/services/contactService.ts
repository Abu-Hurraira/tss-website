import { createHash, randomUUID } from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { ContactInput } from '../validation/contactSchema.js'
import { sendContactNotification } from './emailService.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '..', 'data')
const dataFile = path.join(dataDir, 'contact-inquiries.json')

export type InquiryStatus = 'New' | 'In Progress' | 'Resolved' | 'Spam'

export type Inquiry = {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  source: string
  status: InquiryStatus
  createdAt: string
  updatedAt: string
  fingerprint: string
}

function sanitize(input: string) {
  return input.replace(/[<>]/g, '')
}

function fingerprintOf(email: string, subject: string, message: string) {
  return createHash('sha256')
    .update(`${email.toLowerCase()}|${subject}|${message}`)
    .digest('hex')
}

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true })
  try {
    await fs.access(dataFile)
  } catch {
    await fs.writeFile(dataFile, '[]', 'utf8')
  }
}

async function readInquiries(): Promise<Inquiry[]> {
  await ensureStore()
  const raw = await fs.readFile(dataFile, 'utf8')
  return JSON.parse(raw) as Inquiry[]
}

async function writeInquiries(items: Inquiry[]) {
  await ensureStore()
  await fs.writeFile(dataFile, JSON.stringify(items, null, 2), 'utf8')
}

export async function createInquiry(data: ContactInput) {
  if (data.website && data.website.trim().length > 0) {
    return {
      honeypot: true as const,
      message: 'Thank you. Your message has been received. Our team will contact you shortly.',
      emailDelivered: false,
    }
  }

  const inquiry: Inquiry = {
    id: randomUUID(),
    name: sanitize(data.name),
    email: sanitize(data.email),
    phone: sanitize(data.phone),
    subject: sanitize(data.subject),
    message: sanitize(data.message),
    source: sanitize(data.source || 'contact'),
    status: 'New',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    fingerprint: fingerprintOf(data.email, data.subject, data.message),
  }

  const existing = await readInquiries()
  const duplicate = existing.find(
    (item) =>
      item.fingerprint === inquiry.fingerprint &&
      Date.now() - new Date(item.createdAt).getTime() < 10 * 60 * 1000,
  )
  if (duplicate) {
    return {
      duplicate: true as const,
      message: 'We already received this message. Our team will contact you shortly.',
    }
  }

  existing.unshift(inquiry)
  await writeInquiries(existing)

  const emailResult = await sendContactNotification(inquiry)
  if (!emailResult.configured) {
    console.info('[contact] Inquiry stored. Email provider not configured.', { id: inquiry.id })
  } else if (!emailResult.sent) {
    console.error('[contact] Inquiry stored but email failed', {
      id: inquiry.id,
      error: emailResult.error,
    })
  }

  return {
    ok: true as const,
    inquiry,
    emailDelivered: emailResult.sent,
    message: 'Thank you. Your message has been received. Our team will contact you shortly.',
  }
}
