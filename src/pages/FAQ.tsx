import { PageHero } from '@/components/hero/PageHero'
import { AdmissionFAQ } from '@/components/admissions/AdmissionSteps'
import { faqs } from '@/data/faqs'
import { usePageSeo } from '@/lib/seo'

export default function FAQ() {
  usePageSeo({
    title: 'FAQ — TIME School System Mial',
    description: 'Frequently asked questions about admissions and campus life.',
    path: '/site/faq',
  })

  return (
    <>
      <PageHero title="FAQ" description="Answers to common questions from families." crumbs={[{ label: 'FAQ' }]} />
      <section className="section-pad">
        <div className="container-site">
          <AdmissionFAQ items={faqs} />
        </div>
      </section>
    </>
  )
}
