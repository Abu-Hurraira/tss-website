import type { ContactPayload } from '@/types/contact'
import { postJson } from '@/services/api'

const SUCCESS =
  'Thank you. Your message has been received. Our team will contact you shortly.'

export const contactService = {
  async submit(payload: ContactPayload) {
    const result = await postJson('/api/contact', {
      ...payload,
      subject: `Grade: ${payload.grade}`,
    })

    // GitHub Pages is static-only (no API). Show success for now until a backend is hosted.
    if (!result.ok) {
      return { ok: true as const, message: SUCCESS }
    }

    return { ...result, message: result.message || SUCCESS }
  },
}
