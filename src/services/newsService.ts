import { getAllArticles, getArticleBySlug, newsItems } from '@/data/news'

export const newsService = {
  list: () => Promise.resolve(newsItems),
  all: () => Promise.resolve(getAllArticles()),
  bySlug: (slug: string) => Promise.resolve(getArticleBySlug(slug)),
}
