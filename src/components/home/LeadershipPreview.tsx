import { SectionHeading } from '@/components/common/SectionHeading'
import { leadership } from '@/data/site'

export function LeadershipPreview() {
  return (
    <section className="section-pad bg-brand-soft/50">
      <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-[24px]">
          <img src={leadership.portrait} alt={`${leadership.name}, ${leadership.title}`} className="aspect-[4/5] w-full object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow="Leadership" title="A message from the Principal" />
          <blockquote className="mt-6 text-base leading-relaxed text-ink-secondary md:text-lg">
            {leadership.message}
          </blockquote>
          <p className="mt-6 font-semibold text-navy">{leadership.name}</p>
          <p className="text-sm text-ink-muted">{leadership.title}</p>
        </div>
      </div>
    </section>
  )
}
