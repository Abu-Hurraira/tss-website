import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { NewsGrid } from '@/components/news/NewsCard'
import { getAllArticles } from '@/data/news'
import type { ContentCategory } from '@/types/news'
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
  const items = useMemo(() => {
    const all = getAllArticles()
    return filter === 'All' ? all : all.filter((i) => i.category === filter)
  }, [filter])

  return (
    <>
      <PageHero
        title="News & Events"
        description="Announcements, academic stories, and moments from campus life."
        crumbs={[{ label: 'News & Events' }]}
        image="/images/news/school-event-1.jpg"
      />
      <section className="section-pad">
        <div className="container-wide">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
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
            <Link to="/site/events" className="text-sm font-semibold text-brand">
              Events calendar →
            </Link>
          </div>
          <NewsGrid items={items} />
        </div>
      </section>
    </>
  )
}
