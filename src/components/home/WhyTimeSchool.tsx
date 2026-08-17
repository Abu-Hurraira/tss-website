import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { pillars } from '@/data/site'
import { asset } from '@/lib/asset'

export function WhyTimeSchool() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why TIME School"
          title="Four pillars that shape every school day."
          description="Excellence is visible in classrooms, relationships, and the environments where students grow."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.id}
              delay={i * 0.06}
              className={
                i === 0
                  ? 'relative min-h-[280px] overflow-hidden rounded-[24px] lg:col-span-7 lg:min-h-[420px]'
                  : i === 1
                    ? 'relative min-h-[280px] overflow-hidden rounded-[24px] lg:col-span-5 lg:min-h-[420px]'
                    : 'relative min-h-[280px] overflow-hidden rounded-[24px] lg:col-span-6'
              }
            >
              <img
                src={asset(pillar.image)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-navy/10" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{pillar.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:text-base">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
