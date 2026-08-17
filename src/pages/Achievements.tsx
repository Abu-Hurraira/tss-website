import { PageHero } from '@/components/hero/PageHero'
import { achievements } from '@/data/achievements'
import { usePageSeo } from '@/lib/seo'

export default function Achievements() {
  usePageSeo({
    title: 'Achievements — TIME School System Mial',
    description: 'Academic growth, character awards, and community highlights.',
    path: '/site/achievements',
  })

  return (
    <>
      <PageHero title="Achievements" description="Milestones that reflect our commitment to excellence." />
      <section className="section-pad">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="border-t-2 border-accent-orange pt-5">
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
