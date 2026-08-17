import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BlogCard, BlogGrid, BlogMeta } from '@/components/blog/BlogCard'
import { blogCategories, getAllBlogPosts, getFeaturedBlogPost } from '@/data/blog'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'
import { cn } from '@/lib/utils'

export default function Blog() {
  usePageSeo({
    title: 'Blog — TIME School System Mial',
    description:
      'Expert guidance on academics, parenting, leadership, and student wellbeing from TIME School System Mial.',
    path: '/site/blog',
  })

  const [filter, setFilter] = useState<(typeof blogCategories)[number]>('All')
  const featured = getFeaturedBlogPost()
  const posts = useMemo(() => {
    const all = getAllBlogPosts()
    return filter === 'All' ? all : all.filter((post) => post.category === filter)
  }, [filter])

  const listPosts = useMemo(() => {
    if (filter !== 'All' || !featured) return posts
    return posts.filter((post) => post.slug !== featured.slug)
  }, [filter, featured, posts])

  return (
    <>
      <PageHero
        title="Blog"
        description="Practical insights for families and learners — academics, character, wellbeing, and school partnership."
        image="/images/gallery/academics/welcome-classroom.jpg"
      />

      <section className="section-pad border-b border-border">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Insights from TSS Mial"
            title="Ideas that help students and families grow."
            description="Our blog shares advanced, practical guidance from school leadership and faculty — written for real family life, not empty slogans."
          />

          {featured && (
            <Link
              to={`/site/blog/${featured.slug}`}
              className="mt-10 grid overflow-hidden rounded-[24px] border border-border bg-surface transition hover:shadow-[0_18px_40px_rgb(8_43_76/0.08)] lg:grid-cols-2"
            >
              <div className="aspect-[16/11] lg:aspect-auto lg:min-h-[380px]">
                <img
                  src={asset(featured.image)}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">Featured article</p>
                <div className="mt-3">
                  <BlogMeta
                    category={featured.category}
                    date={featured.date}
                    readMinutes={featured.readMinutes}
                  />
                </div>
                <h2 className="font-display mt-3 text-3xl font-semibold text-navy md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">{featured.excerpt}</p>
                <p className="mt-4 text-sm text-ink-muted">
                  By {featured.author} · {featured.authorRole}
                </p>
                <span className="mt-6 text-sm font-semibold text-brand">Read full article →</span>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Browse topics"
              title="All articles"
              description={`${posts.length} articles${filter === 'All' ? '' : ` in ${filter}`}.`}
            />
            <Link to="/site/news" className="text-sm font-semibold text-brand">
              Latest news & events →
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition',
                  filter === category ? 'bg-navy text-white' : 'bg-brand-muted text-brand hover:bg-brand hover:text-white',
                )}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filter === 'All' && featured ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {listPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <BlogGrid posts={posts} />
          )}
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-wide grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-accent-orange uppercase">Family partnership</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              Want personal advice for your child’s learning journey?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Our admissions and faculty team can help with grade placement, study routines, and campus visits.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/site/contact"
              className="inline-flex rounded-full bg-accent-orange px-5 py-3 text-sm font-semibold text-white hover:brightness-110"
            >
              Contact school
            </Link>
            <Link
              to="/site/admissions"
              className="inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
