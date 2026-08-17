import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BlogCard } from '@/components/blog/BlogCard'
import { getAllBlogPosts } from '@/data/blog'

export function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3)

  return (
    <section className="section-pad bg-brand-soft/40">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Guides for families and learners."
            description="Advanced, practical articles on study habits, character, wellbeing, and school partnership."
          />
          <Link to="/site/blog" className="text-sm font-semibold text-brand hover:text-brand-hover">
            Explore all articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
