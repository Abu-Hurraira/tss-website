import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { primaryCampus } from '@/data/campuses'

export function CampusPreview() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our campus"
          title="Time School System Mial"
          description="One focused campus — modern classrooms, outdoor spaces, and a community built for learning."
        />
        <article className="mt-10 overflow-hidden rounded-[22px] border border-border bg-surface lg:grid lg:grid-cols-2">
          <div className="aspect-[16/10] lg:aspect-auto">
            <img src={primaryCampus.image} alt={primaryCampus.name} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="p-6 md:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">{primaryCampus.city}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{primaryCampus.name}</h3>
            <p className="mt-1 text-sm text-ink-muted">{primaryCampus.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">{primaryCampus.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {primaryCampus.facilities.map((f) => (
                <li key={f} className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand">
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/site/campus-life" className="mt-6 inline-flex text-sm font-semibold text-brand hover:text-brand-hover">
              Explore campus life →
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
