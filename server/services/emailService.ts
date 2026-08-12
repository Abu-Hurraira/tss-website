export type ContactNotification = {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
  source?: string
}

export type EmailSendResult = {
  configured: boolean
  sent: boolean
  provider: 'smtp' | 'mock'
  error?: string
}

export async function sendContactNotification(
  inquiry: ContactNotification,
): Promise<EmailSendResult> {
  const smtpConfigured = Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD,
  )

  if (!smtpConfigured) {
    console.info('[email:mock] Contact notification (SMTP not configured)')
    console.info({
      to: process.env.CONTACT_ADMIN_EMAIL || 'admin@timeschool.edu',
      subject: `New Website Contact Inquiry — ${inquiry.subject}`,
      replyTo: inquiry.email,
      inquiry,
    })
    return { configured: false, sent: false, provider: 'mock' }
  }

  try {
    const { sendViaSmtp } = await import('../email/providers/smtp.js')
    await sendViaSmtp(inquiry)
    return { configured: true, sent: true, provider: 'smtp' }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown email error'
    return { configured: true, sent: false, provider: 'smtp', error: message }
  }
}
