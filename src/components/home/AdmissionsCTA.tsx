import { Button } from '@/components/common/Button'
import { cn } from '@/lib/utils'

export function AdmissionsCTA({
  title = 'Begin your child’s journey at TIME School System Mial.',
  description = 'Speak with admissions or visit campus to learn more about our programmes.',
  className,
}: {
  title?: string
  description?: string
  className?: string
}) {
  return (
    <section className={cn('section-pad', className)}>
      <div className="container-wide overflow-hidden rounded-[28px] gradient-navy px-6 py-12 md:px-12 md:py-14">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-white/75 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/site/contact" variant="orange">
              Contact Admissions
            </Button>
            <Button to="/site/admissions" variant="ghost">
              View Admissions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactCTA() {
  return (
    <AdmissionsCTA
      title="Visit TIME School System Mial."
      description="Schedule a campus visit or send a message — our team is ready to help."
    />
  )
}
