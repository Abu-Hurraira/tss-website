import { Hero } from '@/components/hero/Hero'
import { TrustSection } from '@/components/home/TrustSection'
import { WhyTimeSchool } from '@/components/home/WhyTimeSchool'
import { AcademicsPreview } from '@/components/home/AcademicsPreview'
import { CampusPreview } from '@/components/home/CampusPreview'
import { LeadershipPreview } from '@/components/home/LeadershipPreview'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { NewsPreview } from '@/components/home/NewsPreview'
import { AdmissionsCTA } from '@/components/home/AdmissionsCTA'
import { site } from '@/data/site'
import { usePageSeo } from '@/lib/seo'

export default function Home() {
  usePageSeo({
    title: 'TIME School System — Empowering Future Leaders Through Quality Education',
    description: `${site.motto} Visit TIME School System Mial.`,
    path: '/site',
  })

  return (
    <>
      <Hero />
      <TrustSection />
      <WhyTimeSchool />
      <AcademicsPreview />
      <CampusPreview />
      <LeadershipPreview />
      <GalleryPreview />
      <NewsPreview />
      <AdmissionsCTA />
    </>
  )
}
