import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { NewsCard } from '@/components/news/NewsCard'
import { newsItems } from '@/data/news'

export function NewsPreview() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="News"
            title="Stories from our community."
            description="Academic highlights, announcements, and campus events."
          />
          <Link to="/site/news" className="text-sm font-semibold text-brand hover:text-brand-hover">
            All news & events →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {newsItems.slice(0, 3).map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
