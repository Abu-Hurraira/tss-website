import { Link } from 'react-router-dom'
import { PageHero } from '@/components/hero/PageHero'
import { GalleryFilter, GalleryGrid } from '@/components/gallery/GalleryGrid'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useGallery } from '@/hooks/useGallery'
import { galleryCategories, galleryItems } from '@/data/gallery'
import { usePageSeo } from '@/lib/seo'
import { asset } from '@/lib/asset'

const categoryNotes: Record<string, string> = {
  Campus: 'Courtyards, classrooms wings, and outdoor spaces that shape every school day.',
  Academics: 'Active lessons, art corners, and focused learning across grade levels.',
  Events: 'Celebrations, theme days, and moments that bring the whole community together.',
  Sports: 'Movement, play, and healthy competition on our grounds.',
  'Student Life': 'Everyday smiles, friendships, and student confidence in uniform and beyond.',
  Community: 'Family partnership and shared traditions at TSS Mial.',
}

export default function Gallery() {
  usePageSeo({
    title: 'Gallery — TIME School System Mial',
    description: 'Browse campus, academics, events, and student life photography from TSS Mial.',
    path: '/site/gallery',
  })

  const { category, setCategory, items } = useGallery()
  const featured = galleryItems.filter((item) =>
    ['labour-day-outdoor', 'welcome-classroom', 'campus-courtyard-sunny', 'student-painting'].includes(item.id),
  )
  const counts = galleryCategories
    .filter((c) => c !== 'All')
    .map((c) => ({
      name: c,
      count: galleryItems.filter((item) => item.category === c).length,
      note: categoryNotes[c] || '',
    }))

  return (
    <>
      <PageHero
        title="Gallery"
        description="A living album of TIME School System Mial — campus spaces, classrooms, celebrations, and student life."
        image="/images/campus/gallery-cover.jpg"
      />

      <section className="section-pad border-b border-border bg-brand-soft/40">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="Inside TSS Mial"
            title="More than photos — a window into school life."
            description="Browse by category to explore how our students learn, create, celebrate, and grow. New moments are added as campus life continues through the year."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {counts.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setCategory(item.name as typeof category)}
                className="rounded-[16px] border border-border bg-surface px-4 py-4 text-left transition hover:border-brand/40"
              >
                <p className="font-display text-2xl font-semibold text-navy">{item.count}</p>
                <p className="mt-1 text-sm font-semibold text-brand">{item.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Featured moments"
            title="Highlights from recent school life."
            description="A quick look at campus atmosphere, classroom energy, and community celebrations."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-[18px] border border-border bg-surface">
                <img
                  src={asset(item.src)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">{item.category}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-wide">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Full collection"
              title={category === 'All' ? 'All gallery photos' : `${category} photos`}
              description={
                category === 'All'
                  ? `Showing ${items.length} photos across campus life.`
                  : categoryNotes[category] || `Showing ${items.length} photos.`
              }
            />
            <Link to="/site/news" className="text-sm font-semibold text-brand hover:text-brand-hover">
              Related news & events →
            </Link>
          </div>
          <GalleryFilter category={category} onChange={setCategory} />
          <div className="mt-8">
            <GalleryGrid items={items} />
          </div>
        </div>
      </section>
    </>
  )
}
