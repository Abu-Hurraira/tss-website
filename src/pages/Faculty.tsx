import { PageHero } from '@/components/hero/PageHero'
import { faculty } from '@/data/faculty'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'

export default function Faculty() {
  usePageSeo({
    title: 'Faculty — TIME School System Mial',
    description: 'Meet the leadership and faculty community at TSS Mial.',
    path: '/site/faculty',
  })

  return (
    <>
      <PageHero
        title="Faculty"
        description="Educators dedicated to academic excellence and student growth."
        image="/images/gallery/campus/campus-courtyard-sunny.jpg"
      />
      <section className="section-pad">
        <div className="container-wide grid gap-6 md:grid-cols-2 lg:gap-8">
          {faculty.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-[18px] border border-border bg-surface">
              {person.image ? (
                <img
                  src={asset(person.image)}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center bg-brand-muted">
                  <span className="font-display text-4xl font-semibold text-brand">
                    {person.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
