import { PageHero } from '@/components/hero/PageHero'
import { GalleryFilter, GalleryGrid } from '@/components/gallery/GalleryGrid'
import { useGallery } from '@/hooks/useGallery'
import { usePageSeo } from '@/lib/seo'

export default function Gallery() {
  usePageSeo({
    title: 'Gallery — TIME School System Mial',
    description: 'Browse campus, academics, events, and student life photography from TSS Mial.',
    path: '/site/gallery',
  })

  const { category, setCategory, items } = useGallery()

  return (
    <>
      <PageHero
        title="Gallery"
        description="A visual story of our campus, classrooms, and community in Mial."
        crumbs={[{ label: 'Gallery' }]}
        image="/images/campus/campus-view-2.jpg"
      />
      <section className="section-pad">
        <div className="container-wide">
          <GalleryFilter category={category} onChange={setCategory} />
          <div className="mt-8">
            <GalleryGrid items={items} />
          </div>
        </div>
      </section>
    </>
  )
}
