import { Link } from 'react-router-dom'
import { formatDate } from '@/lib/utils'
import { asset } from '@/lib/asset'
import type { BlogPost } from '@/types/blog'
import { Reveal } from '@/components/common/Reveal'

export function BlogMeta({
  category,
  date,
  readMinutes,
}: {
  category: string
  date: string
  readMinutes: number
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-brand uppercase">
      <span>{category}</span>
      <span className="text-ink-faint">•</span>
      <time dateTime={date} className="font-medium tracking-normal text-ink-muted normal-case">
        {formatDate(date)}
      </time>
      <span className="text-ink-faint">•</span>
      <span className="font-medium tracking-normal text-ink-muted normal-case">{readMinutes} min read</span>
    </div>
  )
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(8_43_76/0.08)]">
      <Link to={`/site/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden">
        <img
          src={asset(post.image)}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <BlogMeta category={post.category} date={post.date} readMinutes={post.readMinutes} />
        <h3 className="mt-3 text-lg font-semibold text-navy md:text-xl">
          <Link to={`/site/blog/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xs text-ink-muted">
            {post.author} · {post.authorRole}
          </p>
          <Link to={`/site/blog/${post.slug}`} className="text-sm font-semibold text-brand hover:text-brand-hover">
            Read →
          </Link>
        </div>
      </div>
    </article>
  )
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <Reveal key={post.slug} delay={Math.min(index * 0.05, 0.2)}>
          <BlogCard post={post} />
        </Reveal>
      ))}
    </div>
  )
}
