import { PageHero } from '@/components/hero/PageHero'
import { ApplyForm } from '@/components/admissions/ApplyForm'
import { usePageSeo } from '@/lib/seo'

export default function Apply() {
  usePageSeo({
    title: 'Apply Now — Time School System Mial',
    description: 'Submit an admissions inquiry to Time School System Mial.',
    path: '/site/apply',
  })

  return (
    <>
      <PageHero
        title="Apply Now"
        description="Share a few details and our admissions team will guide you through the next steps."
        image="/images/hero/hero-classroom.jpg"
      />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Application inquiry</h2>
            <p className="mt-3 text-ink-secondary">
              This form starts your conversation with admissions for Time School System Mial. Our team will follow up using the contact details you provide.
            </p>
          </div>
          <div className="rounded-[22px] border border-border bg-surface p-6 shadow-[0_16px_40px_rgb(8_43_76/0.06)] md:p-8">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  )
}
