import { PageHero } from '@/components/hero/PageHero'
import { NewsGrid } from '@/components/news/NewsCard'
import { eventItems } from '@/data/events'
import { usePageSeo } from '@/lib/seo'

export default function Events() {
  usePageSeo({
    title: 'Events — Time School System Mial',
    description: 'Upcoming and featured events at Time School System Mial.',
    path: '/site/events',
  })

  return (
    <>
      <PageHero
        title="Events"
        description="Open houses, conferences, celebrations, and community gatherings."
        crumbs={[{ label: 'News & Events', to: '/site/news' }, { label: 'Events' }]}
        image="/images/news/academic-achievement.jpg"
      />
      <section className="section-pad">
        <div className="container-wide">
          <NewsGrid items={eventItems} />
        </div>
      </section>
    </>
  )
}
