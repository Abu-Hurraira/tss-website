import type { ContactPayload } from '@/types/contact'
import { postJson } from '@/services/api'

export const contactService = {
  submit(payload: ContactPayload) {
    return postJson('/api/contact', payload)
  },
}
