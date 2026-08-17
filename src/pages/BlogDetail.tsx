import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { BlogCard, BlogMeta } from '@/components/blog/BlogCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/data/blog'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'

export default function BlogDetail() {
  const { slug = '' } = useParams()
  const post = getBlogPostBySlug(slug)
  const related = getRelatedBlogPosts(slug, 3)

  usePageSeo({
    title: post ? `${post.title} — TIME School System Blog` : 'Article — TIME School System Blog',
    description: post?.excerpt || 'Insights from TIME School System Mial.',
    path: `/site/blog/${slug}`,
    image: post?.image,
  })

  if (!post) {
    return (
      <section className="section-pad pt-32">
        <div className="container-site text-center">
          <h1 className="font-display text-4xl text-navy">Article not found</h1>
          <Link to="/site/blog" className="mt-4 inline-block text-brand">
            Back to blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero title={post.title} description={post.excerpt} image={post.image} />

      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="max-w-3xl">
            <BlogMeta category={post.category} date={post.date} readMinutes={post.readMinutes} />
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand">
                  {tag}
                </span>
              ))}
            </div>

            <img
              src={asset(post.image)}
              alt=""
              className="mt-8 aspect-[16/9] w-full rounded-[18px] object-cover"
              loading="eager"
              decoding="async"
            />

            <div className="mt-8 rounded-[18px] border border-border bg-brand-soft/60 p-5 md:p-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">Key takeaways</p>
              <ul className="mt-3 space-y-2">
                {post.takeaways.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-ink-secondary md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-sm font-semibold text-navy">{post.author}</p>
              <p className="text-sm text-ink-muted">{post.authorRole}</p>
              <Link to="/site/blog" className="mt-6 inline-flex text-sm font-semibold text-brand">
                ← Back to blog
              </Link>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[18px] border border-border bg-surface p-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">In this article</p>
              <ul className="mt-4 space-y-2">
                {post.sections.map((section) => (
                  <li key={section.heading} className="text-sm leading-snug text-ink-secondary">
                    {section.heading}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] bg-navy p-5 text-white">
              <p className="text-sm font-semibold">Talk to admissions</p>
              <p className="mt-2 text-sm text-white/75">Questions about grades, visits, or learning support?</p>
              <Link to="/site/contact" className="mt-4 inline-flex text-sm font-semibold text-accent-orange">
                Contact us →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-brand-soft/40">
          <div className="container-wide">
            <SectionHeading eyebrow="Keep reading" title="Related articles" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((article) => (
                <BlogCard key={article.slug} post={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
