import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { NewsCard, NewsGrid, NewsMeta } from '@/components/news/NewsCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { getAllArticles, getFeaturedArticle } from '@/data/news'
import type { ContentCategory } from '@/types/news'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'
import { cn } from '@/lib/utils'

const filters: Array<'All' | ContentCategory> = ['All', 'News', 'Events', 'Announcements', 'Academic']

export default function News() {
  usePageSeo({
    title: 'News & Events — TIME School System Mial',
    description: 'Latest news, events, and announcements from TIME School System Mial.',
    path: '/site/news',
  })

  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const featured = getFeaturedArticle()
  const items = useMemo(() => {
    const all = getAllArticles()
    return filter === 'All' ? all : all.filter((i) => i.category === filter)
  }, [filter])

  const listItems = useMemo(() => {
    if (filter !== 'All' || !featured) return items
    return items.filter((item) => item.slug !== featured.slug)
  }, [filter, featured, items])

  return (
    <>
      <PageHero
        title="News & Events"
        description="Announcements, academic stories, celebrations, and important dates from TIME School System Mial."
        image="/images/gallery/campus/campus-courtyard-sunny.jpg"
      />

      <section className="section-pad border-b border-border">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Stay connected"
            title="What is happening at TSS Mial."
            description="Read updates from classrooms and campus life, then explore upcoming events. Families can also reach admissions anytime through Contact."
          />
          {featured && (
            <Link
              to={featured.category === 'Events' ? `/site/events/${featured.slug}` : `/site/news/${featured.slug}`}
              className="mt-10 grid overflow-hidden rounded-[24px] border border-border bg-surface transition hover:shadow-[0_18px_40px_rgb(8_43_76/0.08)] lg:grid-cols-2"
            >
              <div className="aspect-[16/11] lg:aspect-auto lg:min-h-[360px]">
                <img
                  src={asset(featured.image)}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">Featured story</p>
                <NewsMeta category={featured.category} date={featured.date} />
                <h2 className="font-display mt-3 text-3xl font-semibold text-navy md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">{featured.summary}</p>
                <span className="mt-6 text-sm font-semibold text-brand">Read full story →</span>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="All updates"
              title="Browse by category"
              description={`${items.length} stories and events available${filter === 'All' ? '' : ` in ${filter}`}.`}
            />
            <Link to="/site/events" className="text-sm font-semibold text-brand">
              Events calendar →
            </Link>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold',
                  filter === f ? 'bg-navy text-white' : 'bg-brand-muted text-brand',
                )}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          {filter === 'All' && featured ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {listItems.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <NewsGrid items={items} />
          )}
        </div>
      </section>

      <section className="section-pad bg-brand-soft/50">
        <div className="container-wide grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="For families"
              title="Need details about admissions or school routines?"
              description="Our office can help with enrollment questions, visit bookings, and general campus information."
            />
          </div>
          <div className="flex flex-col justify-end gap-3">
            <Link to="/site/contact" className="text-sm font-semibold text-brand hover:text-brand-hover">
              Contact the school →
            </Link>
            <Link to="/site/gallery" className="text-sm font-semibold text-brand hover:text-brand-hover">
              Browse the photo gallery →
            </Link>
            <Link to="/site/admissions" className="text-sm font-semibold text-brand hover:text-brand-hover">
              View admissions process →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
