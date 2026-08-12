import { useMemo, useState } from 'react'
import { galleryItems } from '@/data/gallery'
import type { GalleryCategory } from '@/types/gallery'

export function useGallery(initial: GalleryCategory = 'All') {
  const [category, setCategory] = useState<GalleryCategory>(initial)
  const items = useMemo(
    () => (category === 'All' ? galleryItems : galleryItems.filter((i) => i.category === category)),
    [category],
  )
  return { category, setCategory, items }
}
