import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { Button } from '@/components/common/Button'
import { getArticleBySlug } from '@/data/news'
import { usePageSeo } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export default function EventDetail() {
  const { slug = '' } = useParams()
  const item = getArticleBySlug(slug)

  usePageSeo({
    title: item ? `${item.title} — TIME School System` : 'Event — TIME School System',
    description: item?.summary || 'Event details from TIME School System Mial.',
    path: `/site/events/${slug}`,
    image: item?.image,
  })

  if (!item) {
    return (
      <section className="section-pad pt-32">
        <div className="container-site text-center">
          <h1 className="font-display text-4xl text-navy">Event not found</h1>
          <Link to="/site/events" className="mt-4 inline-block text-brand">Back to events</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero
        title={item.title}
        description={`${item.category} · ${formatDate(item.date)}`}
        crumbs={[{ label: 'Events', to: '/site/events' }, { label: item.title }]}
        image={item.image}
      />
      <section className="section-pad">
        <article className="container-site max-w-3xl">
          {item.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="mt-6">
            <Button to="/site/apply" variant="orange">Apply Now</Button>
          </div>
        </article>
      </section>
    </>
  )
}
