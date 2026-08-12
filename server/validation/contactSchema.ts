import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(40),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
  source: z.string().trim().max(40).optional(),
})

export const admissionSchema = contactSchema.extend({
  studentName: z.string().trim().min(2).max(120).optional(),
  guardianName: z.string().trim().min(2).max(120).optional(),
  grade: z.string().trim().max(80).optional(),
  campus: z.string().trim().max(120).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
export type AdmissionInput = z.infer<typeof admissionSchema>
