import { SectionHeading } from '@/components/common/SectionHeading'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { trustStats } from '@/data/site'

export function TrustSection() {
  return (
    <section id="trust" className="section-pad gradient-soft">
      <div className="container-wide grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          eyebrow="Institution"
          title="A trusted academic home in Mial."
          description="TIME School System Mial combines rigorous academics with a caring campus culture — preparing students for leadership with integrity."
        />
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2">
          {trustStats.map((stat) => (
            <div key={stat.id} className="border-t border-border pt-4">
              <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
