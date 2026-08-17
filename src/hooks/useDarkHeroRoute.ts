import { useLocation } from 'react-router-dom'

/** Routes that use a dark full-bleed hero (header stays transparent until scroll). */
const DARK_HERO_SEGMENTS = new Set([
  '',
  'about',
  'academics',
  'admissions',
  'apply',
  'campus-life',
  'gallery',
  'news',
  'events',
  'blog',
  'contact',
  'faq',
  'faculty',
  'achievements',
  'careers',
])

export function useDarkHeroRoute() {
  const { pathname } = useLocation()
  const relative = pathname.replace(/^\/site\/?/, '')
  const segment = relative.split('/')[0] ?? ''
  return DARK_HERO_SEGMENTS.has(segment)
}
