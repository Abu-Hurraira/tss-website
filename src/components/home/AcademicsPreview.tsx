import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { programs } from '@/data/academics'

export function AcademicsPreview() {
  return (
    <section className="section-pad bg-brand-soft/60">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Academics"
            title="Pathways from early years to senior school."
            description="A coherent curriculum that builds mastery, curiosity, and confidence at every stage."
          />
          <Link to="/site/academics" className="text-sm font-semibold text-brand hover:text-brand-hover">
            Explore academics →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <div key={program.id} className="rounded-[18px] border border-border bg-surface p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-accent-orange uppercase">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-navy">{program.title}</h3>
              <p className="mt-1 text-xs font-medium text-brand">{program.ages}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{program.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
