import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { NewsCard } from '@/components/news/NewsCard'
import { getAllArticles, getArticleBySlug } from '@/data/news'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export default function NewsDetail() {
  const { slug = '' } = useParams()
  const item = getArticleBySlug(slug)
  const related = getAllArticles()
    .filter((article) => article.slug !== slug)
    .slice(0, 3)

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
          <Link to="/site/news" className="mt-4 inline-block text-brand">
            Back to news
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero
        title={item.title}
        description={`${item.category} · ${formatDate(item.date)}`}
        image={item.image}
      />
      <section className="section-pad">
        <article className="container-site max-w-3xl">
          <img
            src={asset(item.image)}
            alt=""
            className="mb-8 aspect-[16/9] w-full rounded-[18px] object-cover"
            loading="eager"
            decoding="async"
          />
          <p className="text-lg leading-relaxed text-ink md:text-xl">{item.summary}</p>
          <div className="mt-8 space-y-5">
            {item.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-ink-secondary md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <Link to="/site/news" className="mt-10 inline-flex text-sm font-semibold text-brand">
            ← Back to news
          </Link>
        </article>
      </section>
      {related.length > 0 && (
        <section className="section-pad bg-brand-soft/40">
          <div className="container-wide">
            <h2 className="font-display text-3xl font-semibold text-navy">More updates</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((article) => (
                <NewsCard key={article.slug} item={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
