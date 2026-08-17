import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { galleryItems } from '@/data/gallery'
import { asset } from '@/lib/asset'

export function GalleryPreview() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            light
            eyebrow="Campus life"
            title="Moments that make a school feel like home."
            description="A glimpse of classrooms, courtyards, events, and everyday student life at Mial."
          />
          <Link to="/site/gallery" className="text-sm font-semibold text-accent-orange hover:brightness-110">
            View gallery →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryItems
            .filter((item) => ['Campus', 'Events', 'Academics'].includes(item.category))
            .slice(0, 8)
            .map((item, i) => (
            <div key={item.id} className={`overflow-hidden rounded-[16px] ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img
                src={asset(item.src)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[140px] w-full object-cover object-center md:min-h-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StudentLifePreview() {
  return <GalleryPreview />
}
