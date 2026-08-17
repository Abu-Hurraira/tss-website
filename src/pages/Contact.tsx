import { useEffect } from 'react'
import { PageHero } from '@/components/hero/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppFloat } from '@/components/common/WhatsAppFloat'
import { primaryCampus } from '@/data/campuses'
import { site } from '@/data/site'
import { asset } from '@/lib/asset'
import { usePageSeo } from '@/lib/seo'

export default function Contact() {
  usePageSeo({
    title: 'Contact — TIME School System Mial',
    description: 'Contact TIME School System Mial admissions and campus office.',
    path: '/site/contact',
  })

  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <PageHero
        title="Contact"
        description="We would love to hear from you. Send a message and our team will respond shortly."
        image="/images/gallery/campus/campus-building-courtyard.jpg"
      />
      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            id="contact-form"
            className="scroll-mt-28 rounded-[22px] border border-border bg-surface p-6 md:p-8"
          >
            <SectionHeading
              eyebrow="Write to us"
              title="Send a message"
              description="Inquiries are stored securely and notified to our admissions team by email."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[22px] border border-border bg-brand-soft p-6 md:p-8">
              <h2 className="text-xl font-semibold text-navy">General contact</h2>
              <p className="mt-4 text-sm text-ink-secondary">
                Email:{' '}
                <a className="font-semibold text-brand" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-secondary">
                Phone:{' '}
                <a className="font-semibold text-brand" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-secondary">
                WhatsApp:{' '}
                <a
                  className="font-semibold text-brand"
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with principal
                </a>
              </p>
              <p className="mt-4 text-sm text-ink-muted">Office hours: Monday–Friday, 9:00 AM – 3:00 PM</p>
            </div>
            <div className="overflow-hidden rounded-[22px] border border-border bg-surface">
              <img
                src={asset(primaryCampus.image)}
                alt=""
                className="aspect-[16/8] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy">{primaryCampus.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{primaryCampus.location}</p>
                <p className="mt-3 text-sm text-ink-secondary">{primaryCampus.email}</p>
                <p className="text-sm text-ink-secondary">{primaryCampus.phone}</p>
                <div className="mt-4 rounded-[12px] border border-dashed border-border bg-canvas px-4 py-8 text-center text-xs text-ink-faint">
                  Map placeholder — integrate maps later
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppFloat />
    </>
  )
}
