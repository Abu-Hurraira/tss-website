export type ContentCategory = 'News' | 'Events' | 'Announcements' | 'Academic'

export type NewsItem = {
  slug: string
  title: string
  summary: string
  category: ContentCategory
  date: string
  image: string
  body: string[]
}

export type EventItem = NewsItem
