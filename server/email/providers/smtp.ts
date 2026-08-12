import nodemailer from 'nodemailer'
import type { ContactNotification } from '../email-service.js'

export async function sendViaSmtp(inquiry: ContactNotification) {
  const host = process.env.SMTP_HOST!
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = String(process.env.SMTP_SECURE || 'false') === 'true'
  const user = process.env.SMTP_USER!
  const pass = process.env.SMTP_PASSWORD!
  const fromName = process.env.MAIL_FROM_NAME || 'TIME School System Website'
  const fromAddress = process.env.MAIL_FROM_ADDRESS || user
  const adminEmail = process.env.CONTACT_ADMIN_EMAIL || 'admissions@timeschool.edu'

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  const submittedAt = new Date(inquiry.createdAt).toLocaleString('en-PK', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const text = [
    'New Website Contact Inquiry',
    '',
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Subject: ${inquiry.subject}`,
    `Source: ${inquiry.source || 'contact'}`,
    `Submission Time: ${submittedAt}`,
    '',
    'Message:',
    inquiry.message,
    '',
    'Reply to this email to respond directly to the visitor.',
  ].join('\n')

  const html = `
    <div style="font-family:Segoe UI,Arial,sans-serif;color:#082B4C;line-height:1.5">
      <h2 style="margin:0 0 12px">New Website Contact Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></p>
      <p><strong>Phone:</strong> ${escapeHtml(inquiry.phone)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(inquiry.subject)}</p>
      <p><strong>Source:</strong> ${escapeHtml(inquiry.source || 'contact')}</p>
      <p><strong>Submission Time:</strong> ${escapeHtml(submittedAt)}</p>
      <hr style="border:none;border-top:1px solid #DCE6F2;margin:16px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(inquiry.message)}</p>
      <p style="margin-top:24px"><a href="mailto:${escapeHtml(inquiry.email)}" style="background:#F97316;color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none">Reply to Visitor</a></p>
    </div>
  `

  await transporter.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: adminEmail,
    replyTo: inquiry.email,
    subject: `New Website Contact Inquiry — ${inquiry.subject}`,
    text,
    html,
  })
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
