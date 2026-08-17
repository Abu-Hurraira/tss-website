import { SectionHeading } from '@/components/common/SectionHeading'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { Reveal } from '@/components/common/Reveal'
import { trustStats, testimonials } from '@/data/site'

export function TrustSection() {
  return (
    <section id="trust" className="section-pad gradient-soft">
      <div className="container-wide">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <SectionHeading
            eyebrow="Institution"
            title="A trusted academic home in Mial."
            description="Focused classes, caring teachers, and a campus culture that builds character with every school day."
          />
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            {trustStats.map((stat) => (
              <div key={stat.id} className="border-t border-border pt-5">
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.05, 0.12)}>
              <figure className="h-full border-t border-brand/25 pt-6">
                <blockquote className="text-base leading-relaxed text-ink-secondary md:text-[1.05rem]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-semibold text-navy">{item.name}</p>
                  <p className="mt-1 text-xs tracking-wide text-ink-muted uppercase">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
