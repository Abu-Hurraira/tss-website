import { PageHero } from '@/components/hero/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { FacilityShowcase } from '@/components/campus/CampusCard'
import { CampusCard } from '@/components/campus/CampusCard'
import { AdmissionsCTA } from '@/components/home/AdmissionsCTA'
import { campusLifeFacilities } from '@/data/gallery'
import { primaryCampus } from '@/data/campuses'
import { usePageSeo } from '@/lib/seo'

export default function CampusLife() {
  usePageSeo({
    title: 'Campus Life — Time School System Mial',
    description: 'Explore facilities, sports, clubs, and student life at TSS Mial.',
    path: '/site/campus-life',
  })

  return (
    <>
      <PageHero
        title="Campus Life"
        description="Learning continues beyond the timetable — in play, clubs, competitions, and everyday community."
        crumbs={[{ label: 'Campus Life' }]}
        image="/images/facilities/playground-garden.jpg"
      />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="A day at TSS" title="Spaces and rituals that shape belonging." />
          <div className="mt-12">
            <FacilityShowcase items={campusLifeFacilities} />
          </div>
        </div>
      </section>
      <section className="section-pad gradient-soft">
        <div className="container-wide">
          <SectionHeading eyebrow="Campus" title="Welcome to Mial." />
          <div className="mt-10 max-w-3xl">
            <CampusCard campus={primaryCampus} />
          </div>
        </div>
      </section>
      <AdmissionsCTA
        title="See campus life for yourself."
        description="Book a visit and walk the courtyards, classrooms, and activity spaces at Mial."
      />
    </>
  )
}
