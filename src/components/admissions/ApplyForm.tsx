import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FormInput, FormSelect, FormStatus, FormTextarea } from '@/components/forms/FormInput'
import { Button } from '@/components/common/Button'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { gradeOptions } from '@/data/admissions'
import { primaryCampus } from '@/data/campuses'
import { admissionsService } from '@/services/admissionsService'

const initial = {
  studentName: '',
  guardianName: '',
  email: '',
  phone: '',
  grade: '',
  campus: primaryCampus.name,
  message: '',
  website: '',
}

export function ApplyForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  function validate() {
    const next: Record<string, string> = {}
    if (!form.studentName.trim()) next.studentName = 'Student name is required'
    if (!form.guardianName.trim()) next.guardianName = 'Parent/guardian name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone)) next.phone = 'Enter a valid phone number'
    if (!form.grade) next.grade = 'Select a grade/program'
    if (!form.campus) next.campus = 'Select a campus'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    if (!validate()) return
    setStatus('loading')
    const result = await admissionsService.submitInquiry(form)
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
        <label htmlFor="apply-website">Website</label>
        <input id="apply-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput label="Student name" id="studentName" error={errors.studentName} value={form.studentName} onChange={set('studentName')} />
        <FormInput label="Parent / guardian name" id="guardianName" error={errors.guardianName} value={form.guardianName} onChange={set('guardianName')} />
        <FormInput label="Email" id="apply-email" type="email" error={errors.email} value={form.email} onChange={set('email')} />
        <FormInput label="Phone" id="apply-phone" type="tel" error={errors.phone} value={form.phone} onChange={set('phone')} />
        <FormSelect label="Desired grade / program" id="grade" error={errors.grade} value={form.grade} onChange={set('grade')}>
          <option value="">Select grade</option>
          {gradeOptions.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </FormSelect>
        <FormSelect label="Campus" id="campus" error={errors.campus} value={form.campus} onChange={set('campus')}>
          <option value={primaryCampus.name}>{primaryCampus.name}</option>
        </FormSelect>
      </div>
      <FormTextarea
        label="Message (optional)"
        id="apply-message"
        rows={4}
        error={errors.message}
        value={form.message}
        onChange={set('message')}
      />
      <Button type="submit" variant="orange" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <span className="inline-flex items-center gap-2">
            <LoadingSpinner /> Submitting...
          </span>
        ) : (
          'Submit Application Inquiry'
        )}
      </Button>
      <FormStatus status={status} message={message} />
    </form>
  )
}
