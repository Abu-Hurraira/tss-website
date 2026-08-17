export type BlogCategory =
  | 'Parenting'
  | 'Academics'
  | 'Student Life'
  | 'Leadership'
  | 'Wellbeing'

export type BlogSection = {
  heading: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  tags: string[]
  date: string
  readMinutes: number
  author: string
  authorRole: string
  image: string
  sections: BlogSection[]
  takeaways: string[]
}
