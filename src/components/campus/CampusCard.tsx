import type { Campus } from '@/types/school'
import { Link } from 'react-router-dom'

export function CampusCard({ campus }: { campus: Campus }) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-border bg-surface">
      <img src={campus.image} alt={campus.name} className="aspect-[16/9] w-full object-cover" loading="lazy" />
      <div className="p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">{campus.city}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{campus.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{campus.location}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{campus.description}</p>
        <Link to="/site/campus-life" className="mt-6 inline-flex text-sm font-semibold text-brand">
          Explore campus life →
        </Link>
      </div>
    </article>
  )
}

export function FacilityCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[16px] border border-border bg-surface p-5">
      <h3 className="font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-ink-secondary">{text}</p>
    </div>
  )
}

export function FacilityShowcase({
  items,
}: {
  items: { title: string; text: string; image: string }[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item, index) => (
        <article key={item.title} className={`overflow-hidden rounded-[22px] ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}>
          <div className={`${index === 0 ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[360px]' : 'aspect-[16/10]'} overflow-hidden`}>
            <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="bg-navy p-6 text-white md:p-8">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
