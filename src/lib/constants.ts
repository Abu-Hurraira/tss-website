export const PORTAL_LOGIN_URL =
  import.meta.env.VITE_PORTAL_LOGIN_URL || 'http://localhost:5173/login'

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'http://localhost:5174'

export const BRAND = {
  navy: '#082B4C',
  brand: '#0C558F',
  brandHover: '#094474',
  soft: '#E8F1F8',
  canvas: '#F7FAFF',
  orange: '#F97316',
} as const
