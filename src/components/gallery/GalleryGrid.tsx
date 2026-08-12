import { useEffect, useId, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { GalleryCategory, GalleryItem } from '@/types/gallery'
import { galleryCategories } from '@/data/gallery'
import { cn } from '@/lib/utils'

export function GalleryFilter({
  category,
  onChange,
}: {
  category: GalleryCategory
  onChange: (c: GalleryCategory) => void
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
      {galleryCategories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={category === cat}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-semibold transition',
            category === cat ? 'bg-navy text-white' : 'bg-brand-muted text-brand hover:bg-brand hover:text-white',
          )}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export function GalleryItemButton({
  item,
  onOpen,
}: {
  item: GalleryItem
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[16px] focus-visible:outline-offset-4"
      onClick={onOpen}
    >
      <span className="relative block overflow-hidden">
        <img src={item.src} alt={item.alt} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">
          {item.caption}
        </span>
      </span>
    </button>
  )
}

export function GalleryLightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}) {
  const titleId = useId()
  const open = index !== null
  const current = index !== null ? items[index] : null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && index !== null) onChange((index + 1) % items.length)
      if (e.key === 'ArrowLeft' && index !== null) onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, items.length, onClose, onChange])

  if (!current || index === null) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button type="button" className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Close" onClick={onClose}>
            <X size={20} />
          </button>
          <button
            type="button"
            className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index - 1 + items.length) % items.length)
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index + 1) % items.length)
            }}
          >
            <ChevronRight size={22} />
          </button>
          <motion.figure
            className="max-h-[85vh] w-full max-w-5xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.src} alt={current.alt} className="mx-auto max-h-[72vh] w-auto rounded-xl object-contain" />
            <figcaption id={titleId} className="mt-4 text-center text-sm text-white/85">
              {current.caption}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <GalleryItemButton key={item.id} item={item} onOpen={() => setActive(index)} />
        ))}
      </div>
      <GalleryLightbox items={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  )
}
