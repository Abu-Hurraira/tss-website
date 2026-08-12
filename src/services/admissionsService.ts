import type { ApplyPayload } from '@/types/contact'
import { postJson } from '@/services/api'

export const admissionsService = {
  submitInquiry(payload: ApplyPayload) {
    return postJson('/api/admissions', {
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
      studentName: payload.studentName,
      guardianName: payload.guardianName,
      grade: payload.grade,
      campus: payload.campus,
    })
  },
}
