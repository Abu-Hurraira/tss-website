import { PageHero } from '@/components/hero/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { AdmissionsCTA } from '@/components/home/AdmissionsCTA'
import { leadership, site, values } from '@/data/site'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'

export default function About() {
  usePageSeo({
    title: 'About — Time School System Mial',
    description: `Learn about ${site.campusName}, established ${site.established}.`,
    path: '/site/about',
  })

  return (
    <>
      <PageHero
        title="About Time School System Mial"
        description="An institution committed to academic excellence, character formation, and modern learning since 2018."
        image="/images/campus/campus-exterior-1.jpg"
      />
      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Our story"
            title="Built to educate with purpose."
            description="Time School System Mial was established to offer families a rigorous yet nurturing academic environment — where strong foundations, ethical leadership, and contemporary pedagogy work together."
          />
          <div className="rounded-[24px] border border-border bg-brand-soft p-8">
            <p className="font-display text-2xl leading-relaxed text-navy md:text-3xl">“{site.motto}”</p>
            <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-brand uppercase">Our motto</p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-soft/50">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[24px]">
            <img src={asset(leadership.portrait)} alt={`${leadership.name}, ${leadership.title}`} className="aspect-[4/5] w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div>
            <SectionHeading eyebrow="Leadership" title="A message from the Principal" />
            <blockquote className="mt-6 text-base leading-relaxed text-ink-secondary md:text-lg">{leadership.message}</blockquote>
            <p className="mt-6 font-semibold text-navy">{leadership.name}</p>
            <p className="text-sm text-ink-muted">{leadership.title}</p>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Values" title="What we stand for." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div key={value.title} className="border-t-2 border-accent-orange pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AdmissionsCTA title="Experience TSS Mial." description="Visit campus, meet our team, and discover how we partner with families." />
    </>
  )
}
