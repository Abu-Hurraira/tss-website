import { Link } from 'react-router-dom'
import { formatDate } from '@/lib/utils'
import type { NewsItem } from '@/types/news'

export function NewsMeta({ category, date }: { category: string; date: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold tracking-wide text-brand uppercase">
      <span>{category}</span>
      <span className="text-ink-faint">•</span>
      <time dateTime={date} className="font-medium tracking-normal text-ink-muted normal-case">
        {formatDate(date)}
      </time>
    </div>
  )
}

export function NewsCard({ item }: { item: NewsItem }) {
  const to = item.category === 'Events' ? `/site/events/${item.slug}` : `/site/news/${item.slug}`
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(8_43_76/0.08)]">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <NewsMeta category={item.category} date={item.date} />
        <h3 className="mt-3 text-lg font-semibold text-navy md:text-xl">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">{item.summary}</p>
        <Link to={to} className="mt-4 inline-flex text-sm font-semibold text-brand hover:text-brand-hover">
          Read more →
        </Link>
      </div>
    </article>
  )
}

export function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  )
}
