import { useEffect } from 'react'
import { SITE_URL } from '@/lib/constants'

type SeoProps = {
  title: string
  description: string
  path?: string
  image?: string
}

export function usePageSeo({
  title,
  description,
  path = '',
  image = '/logo.png',
}: SeoProps) {
  useEffect(() => {
    document.title = title
    const canonicalHref = `${SITE_URL.replace(/\/$/, '')}${path}`

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalHref)
    setMeta('property', 'og:image', image.startsWith('http') ? image : `${SITE_URL}${image}`)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalHref
  }, [title, description, path, image])
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}
