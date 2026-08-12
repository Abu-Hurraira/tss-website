import { eventItems } from '@/data/events'
import { getArticleBySlug } from '@/data/news'

export const eventsService = {
  list: () => Promise.resolve(eventItems),
  bySlug: (slug: string) => Promise.resolve(getArticleBySlug(slug)),
}
