import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ImageReveal } from '@/components/common/ImageReveal'
import { Reveal } from '@/components/common/Reveal'
import { faculty } from '@/data/faculty'
import { leadership } from '@/data/site'
import { asset } from '@/lib/asset'

export function LeadershipPreview() {
  const featured = faculty.slice(0, 3)

  return (
    <section className="section-pad bg-brand-soft/40">
      <div className="container-wide grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[22px]">
            <ImageReveal
              src={leadership.portrait}
              alt={`${leadership.name}, ${leadership.title}`}
              className="aspect-[4/5] max-h-[540px]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading eyebrow="Leadership" title="A message from the Principal" />
          <blockquote className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
            {leadership.message}
          </blockquote>
          <p className="mt-6 font-semibold text-navy">{leadership.name}</p>
          <p className="text-sm text-ink-muted">{leadership.title}</p>
        </Reveal>
      </div>

      <div className="container-wide mt-16 md:mt-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Faculty"
            title="Educators who know every learner."
            description="A focused team serving early years through secondary pathways."
          />
          <Link to="/site/faculty" className="text-sm font-semibold text-brand hover:text-brand-hover">
            Meet the faculty →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((person, index) => (
            <Reveal key={person.name} delay={Math.min(index * 0.04, 0.1)}>
              <article className="h-full rounded-[18px] border border-border bg-surface p-6">
                {person.image ? (
                  <img
                    src={asset(person.image)}
                    alt=""
                    className="mb-5 aspect-[4/3] w-full rounded-[14px] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-[14px] bg-brand-muted">
                    <span className="font-display text-3xl font-semibold text-brand">
                      {person.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-navy">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{person.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
