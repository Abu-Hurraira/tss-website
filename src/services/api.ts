import type { ApiResult } from '@/types/contact'

export async function postJson<T>(url: string, body: T): Promise<ApiResult> {
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
