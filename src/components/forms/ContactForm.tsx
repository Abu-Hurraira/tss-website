import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FormInput, FormSelect, FormStatus, FormTextarea } from '@/components/forms/FormInput'
import { Button } from '@/components/common/Button'
import { contactService } from '@/services/contactService'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { gradeOptions } from '@/data/admissions'

const initial = { name: '', email: '', phone: '', grade: '', message: '', website: '' }

export function ContactForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  function validate() {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone)) next.phone = 'Enter a valid phone number'
    if (!form.grade) next.grade = 'Select a grade'
    if (!form.message.trim()) next.message = 'Message is required'
    else if (form.message.trim().length < 10) next.message = 'Please share a little more detail'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    if (!validate()) return
    setStatus('loading')
    const result = await contactService.submit(form)
    if (result.ok) {
      setStatus('success')
      setMessage(result.message)
      setForm(initial)
    } else {
      setStatus('error')
      setMessage(result.message)
    }
  }

  function set(key: keyof typeof initial) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      setStatus((s) => (s === 'success' || s === 'error' ? 'idle' : s))
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput label="Full name" id="contact-name" error={errors.name} value={form.name} onChange={set('name')} />
        <FormInput label="Email" id="contact-email" type="email" error={errors.email} value={form.email} onChange={set('email')} />
        <FormInput label="Phone" id="contact-phone" type="tel" error={errors.phone} value={form.phone} onChange={set('phone')} />
        <FormSelect label="Grade" id="contact-grade" error={errors.grade} value={form.grade} onChange={set('grade')}>
          <option value="">Select grade</option>
          {gradeOptions.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </FormSelect>
      </div>
      <FormTextarea label="Message" id="contact-message" rows={5} error={errors.message} value={form.message} onChange={set('message')} />
      <Button type="submit" variant="orange" disabled={status === 'loading'} className="min-w-40">
        {status === 'loading' ? (
          <span className="inline-flex items-center gap-2">
            <LoadingSpinner /> Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
      <FormStatus status={status} message={message} />
    </form>
  )
}
