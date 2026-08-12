import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { admissionSteps, admissionRequirements, importantDates } from '@/data/admissions'
import { faqs } from '@/data/faqs'
import { cn } from '@/lib/utils'
import { Button } from '@/components/common/Button'

export function AdmissionSteps() {
  return (
    <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {admissionSteps.map((step) => (
        <li key={step.step} className="relative rounded-[18px] border border-border bg-surface p-6">
          <p className="font-display text-4xl text-accent-orange">{step.step}</p>
          <h3 className="mt-3 text-xl font-semibold text-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

export function Requirements() {
  return (
    <ul className="mt-6 space-y-3">
      {admissionRequirements.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-ink-secondary">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ImportantDates() {
  return (
    <dl className="mt-6 space-y-4">
      {importantDates.map((d) => (
        <div key={d.label} className="rounded-[14px] border border-border bg-surface px-5 py-4">
          <dt className="text-sm font-semibold text-navy">{d.label}</dt>
          <dd className="mt-1 text-sm text-ink-secondary">{d.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function AdmissionFAQ({ items = faqs }: { items?: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-border rounded-[18px] border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-semibold text-navy">{item.question}</span>
              <ChevronDown className={cn('shrink-0 text-brand transition-transform', isOpen && 'rotate-180')} size={18} />
            </button>
            <div className={cn('grid transition-[grid-template-rows] duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-secondary md:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ApplyNowBand() {
  return (
    <div className="mt-10">
      <Button to="/site/apply" variant="orange">Apply Now</Button>
    </div>
  )
}
