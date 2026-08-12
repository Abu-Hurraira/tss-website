export type GalleryCategory =
  | 'All'
  | 'Campus'
  | 'Academics'
  | 'Events'
  | 'Sports'
  | 'Student Life'
  | 'Community'

export type GalleryItem = {
  id: string
  src: string
  alt: string
  caption: string
  category: Exclude<GalleryCategory, 'All'>
}
