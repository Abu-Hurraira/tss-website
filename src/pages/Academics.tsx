import { PageHero } from '@/components/hero/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { AcademicPathway, CurriculumSection, DepartmentCard } from '@/components/academics/ProgramCard'
import { AdmissionsCTA } from '@/components/home/AdmissionsCTA'
import { academicFacilities, departments, learningApproach, programs } from '@/data/academics'
import { usePageSeo } from '@/lib/seo'

export default function Academics() {
  usePageSeo({
    title: 'Academics — Time School System Mial',
    description: 'Explore academic programs, departments, and learning facilities at TSS Mial.',
    path: '/site/academics',
  })

  return (
    <>
      <PageHero
        title="Academics"
        description="A coherent journey from early years to senior school — rigorous, supportive, and future-focused."
        crumbs={[{ label: 'Academics' }]}
        image="/images/academics/classroom-study.jpg"
      />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Programs" title="Grade pathways designed for growth." />
          <div className="mt-10">
            <AcademicPathway programs={programs} />
          </div>
        </div>
      </section>
      <section className="section-pad gradient-soft">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Departments" title="Subject depth with interdisciplinary care." />
            <div className="mt-8 space-y-5">
              {departments.map((dept) => (
                <DepartmentCard key={dept.name} name={dept.name} description={dept.description} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Approach" title="How learning happens at TSS." />
            <div className="mt-8">
              <CurriculumSection items={learningApproach} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="Facilities" title="Spaces that support serious learning." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {academicFacilities.map((facility) => (
              <li key={facility} className="rounded-[14px] border border-border bg-surface px-5 py-4 text-sm font-medium text-navy">
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <AdmissionsCTA />
    </>
  )
}
