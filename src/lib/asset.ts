/** Prefix public asset paths with Vite BASE_URL (required for GitHub Pages). */
export function asset(path: string) {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\//, '')}`
}
