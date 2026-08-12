import { PageHero } from '@/components/hero/PageHero'
import { faculty } from '@/data/faculty'
import { usePageSeo } from '@/lib/seo'

export default function Faculty() {
  usePageSeo({
    title: 'Faculty — Time School System Mial',
    description: 'Meet the leadership and faculty community at TSS Mial.',
    path: '/site/faculty',
  })

  return (
    <>
      <PageHero title="Faculty" description="Educators dedicated to academic excellence and student growth." crumbs={[{ label: 'Faculty' }]} />
      <section className="section-pad">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {faculty.map((person) => (
            <div key={person.name} className="rounded-[18px] border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold text-navy">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand">{person.role}</p>
              <p className="mt-3 text-sm text-ink-secondary">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
