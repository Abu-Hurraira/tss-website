export type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  website?: string // honeypot
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

async function postJson<T>(url: string, body: T): Promise<ApiResult> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = (await res.json().catch(() => ({}))) as {
      message?: string
      emailDelivered?: boolean
    }
    if (!res.ok) {
      return {
        ok: false,
        message: data.message || 'Something went wrong. Please try again or contact us directly.',
      }
    }
    return {
      ok: true,
      message:
        data.message ||
        'Thank you. Your message has been received. Our team will contact you shortly.',
      emailDelivered: data.emailDelivered,
    }
  } catch {
    return {
      ok: false,
      message: 'Something went wrong. Please try again or contact us directly.',
    }
  }
}

export const contactService = {
  submit(payload: ContactPayload) {
    return postJson('/api/contact', payload)
  },
}

export const applyService = {
  async submit(payload: ApplyPayload): Promise<ApiResult> {
    // Structure ready for future admissions API; currently uses contact endpoint with tagged subject
    return postJson('/api/contact', {
      name: payload.guardianName,
      email: payload.email,
      phone: payload.phone,
      subject: `Admission Application — ${payload.grade} (${payload.campus})`,
      message: [
        `Student: ${payload.studentName}`,
        `Guardian: ${payload.guardianName}`,
        `Desired Grade/Program: ${payload.grade}`,
        `Preferred Campus: ${payload.campus}`,
        '',
        payload.message,
      ].join('\n'),
      website: payload.website,
      source: 'apply',
    })
  },
}
