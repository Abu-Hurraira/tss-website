import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { Button } from '@/components/common/Button'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  description?: string
  crumbs: { label: string; to?: string }[]
  image?: string
  className?: string
}

export function PageHero({ title, description, crumbs, image, className }: Props) {
  return (
    <section className={cn('relative overflow-hidden pt-28 md:pt-32', className)}>
      <div className="absolute inset-0">
        <img
          src={image || '/images/gallery/campus/campus-building-courtyard.jpg'}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/55" />
      </div>
      <div className="container-wide relative section-pad py-16 md:py-20">
        <Breadcrumbs
          items={[{ label: 'Home', to: '/site' }, ...crumbs]}
          className="text-white/65 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
        />
        <h1 className="font-display mt-5 max-w-3xl text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{description}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/site/apply" variant="orange">Apply Now</Button>
          <Button to="/site/contact" variant="ghost">Contact Admissions</Button>
        </div>
      </div>
    </section>
  )
}
