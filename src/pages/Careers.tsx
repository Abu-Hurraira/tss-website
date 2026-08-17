import { PageHero } from '@/components/hero/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { usePageSeo } from '@/lib/seo'

export default function Careers() {
  usePageSeo({
    title: 'Careers — TIME School System Mial',
    description: 'Explore career opportunities at TIME School System Mial.',
    path: '/site/careers',
  })

  return (
    <>
      <PageHero
        title="Careers"
        description="Join a team committed to academic excellence and student growth."
      />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Work with us</h2>
            <p className="mt-3 text-ink-secondary">
              Share your interest and our HR team will contact you about current or upcoming openings at TIME School System Mial.
            </p>
          </div>
          <div className="rounded-[22px] border border-border bg-surface p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
