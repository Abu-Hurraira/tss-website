export type ContactPayload = {
  name: string
  email: string
  phone: string
  grade: string
  message: string
  website?: string
  source?: string
}

export type ApplyPayload = {
  studentName: string
  guardianName: string
  email: string
  phone: string
  grade: string
  campus: string
  message: string
  website?: string
}

export type ApiResult =
  | { ok: true; message: string; emailDelivered?: boolean }
  | { ok: false; message: string }

export type InquiryStatus = 'New' | 'In Progress' | 'Resolved' | 'Spam'
