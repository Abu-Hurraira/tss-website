import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { getArticleBySlug } from '@/data/news'
import { usePageSeo } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export default function NewsDetail() {
  const { slug = '' } = useParams()
  const item = getArticleBySlug(slug)

  usePageSeo({
    title: item ? `${item.title} — TIME School System` : 'Article — TIME School System',
    description: item?.summary || 'News from TIME School System Mial.',
    path: `/site/news/${slug}`,
    image: item?.image,
  })

  if (!item) {
    return (
      <section className="section-pad pt-32">
        <div className="container-site text-center">
          <h1 className="font-display text-4xl text-navy">Article not found</h1>
          <Link to="/site/news" className="mt-4 inline-block text-brand">Back to news</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero
        title={item.title}
        description={`${item.category} · ${formatDate(item.date)}`}
        crumbs={[{ label: 'News & Events', to: '/site/news' }, { label: item.title }]}
        image={item.image}
      />
      <section className="section-pad">
        <article className="container-site max-w-3xl">
          {item.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              {paragraph}
            </p>
          ))}
          <Link to="/site/news" className="mt-8 inline-flex text-sm font-semibold text-brand">← Back to news</Link>
        </article>
      </section>
    </>
  )
}
