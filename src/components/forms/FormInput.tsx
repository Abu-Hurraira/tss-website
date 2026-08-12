import { cn } from '@/lib/utils'
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

export function FormInput({
  label,
  id,
  error,
  ...props
}: { label: string; id: string; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm" htmlFor={id}>
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      <input id={id} className={inputClass(error)} {...props} />
      {error && <span className="mt-1 block text-xs text-danger">{error}</span>}
    </label>
  )
}

export function FormTextarea({
  label,
  id,
  error,
  ...props
}: { label: string; id: string; error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block text-sm" htmlFor={id}>
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      <textarea id={id} className={inputClass(error)} {...props} />
      {error && <span className="mt-1 block text-xs text-danger">{error}</span>}
    </label>
  )
}

export function FormSelect({
  label,
  id,
  error,
  children,
  ...props
}: { label: string; id: string; error?: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block text-sm" htmlFor={id}>
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      <select id={id} className={inputClass(error)} {...props}>
        {children}
      </select>
      {error && <span className="mt-1 block text-xs text-danger">{error}</span>}
    </label>
  )
}

export function FormStatus({
  status,
  message,
}: {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}) {
  if (status === 'success') {
    return (
      <p className="rounded-[10px] border border-success/30 bg-success-soft px-4 py-3 text-sm text-success" role="status">
        ✓ {message}
      </p>
    )
  }
  if (status === 'error') {
    return (
      <p className="rounded-[10px] border border-danger/30 bg-danger-soft px-4 py-3 text-sm text-danger" role="alert">
        {message}
      </p>
    )
  }
  return null
}

function inputClass(error?: string) {
  return cn(
    'w-full rounded-[10px] border bg-white px-3.5 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20',
    error ? 'border-danger' : 'border-border',
  )
}
