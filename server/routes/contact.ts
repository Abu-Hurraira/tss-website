import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { contactSchema } from '../validation/contactSchema.js'
import { createInquiry } from '../services/contactService.js'

export const contactRouter = Router()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many submissions. Please try again later.' },
})

contactRouter.post('/', limiter, async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body)
    if (!parsed.success) {
      return res.status(400).json({ message: 'Please check the form fields and try again.' })
    }

    const result = await createInquiry(parsed.data)
    if ('honeypot' in result) {
      return res.json({ message: result.message, emailDelivered: false })
    }
    if ('duplicate' in result) {
      return res.status(429).json({ message: result.message })
    }
    return res.json({ message: result.message, emailDelivered: result.emailDelivered })
  } catch (error) {
    console.error('[contact] Unexpected error', error)
    return res.status(500).json({
      message: 'Something went wrong. Please try again or contact us directly.',
    })
  }
})
