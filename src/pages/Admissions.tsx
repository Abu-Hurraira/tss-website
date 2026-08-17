import { PageHero } from '@/components/hero/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import {
  AdmissionFAQ,
  AdmissionSteps,
  ImportantDates,
  Requirements,
} from '@/components/admissions/AdmissionSteps'
import { Button } from '@/components/common/Button'
import { feeOverview } from '@/data/admissions'
import { usePageSeo } from '@/lib/seo'

export default function Admissions() {
  usePageSeo({
    title: 'Admissions — TIME School System Mial',
    description: 'Admissions process, requirements, timelines, and FAQs for TIME School System Mial.',
    path: '/site/admissions',
  })

  return (
    <>
      <PageHero
        title="Admissions"
        description="A clear, supportive pathway from first inquiry to confident enrollment at Mial."
        image="/images/hero/admissions-cover.jpg"
      />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Process" title="Your path to joining TIME School System Mial." />
          <AdmissionSteps />
          <div className="mt-10">
            <Button to="/site/contact" variant="orange">Contact Admissions</Button>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft/50">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Requirements" title="What to prepare." />
            <Requirements />
          </div>
          <div>
            <SectionHeading eyebrow="Dates" title="Important timelines." />
            <ImportantDates />
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Fees & scholarships" title="Transparent guidance for families." />
            <div className="mt-6 space-y-4">
              {feeOverview.map((item) => (
                <div key={item.title} className="border-l-2 border-accent-orange pl-4">
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-secondary">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="FAQ" title="Common questions." />
            <div className="mt-6">
              <AdmissionFAQ />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
