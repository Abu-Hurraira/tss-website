import type { NavDropdownItem, NavLink } from '@/types/school'

export const primaryNav: NavLink[] = [
  { to: '/site', label: 'Home', end: true },
  { to: '/site/about', label: 'About' },
  { to: '/site/academics', label: 'Academics' },
  { to: '/site/admissions', label: 'Admissions' },
  { to: '/site/contact', label: 'Contact' },
]

export const galleryNewsItems: NavDropdownItem[] = [
  {
    to: '/site/gallery',
    label: 'Gallery',
    description: 'Campus moments and student life',
  },
  {
    to: '/site/news',
    label: 'News',
    description: 'Announcements and stories',
  },
  {
    to: '/site/events',
    label: 'Events',
    description: 'Open days and celebrations',
  },
  {
    to: '/site/campus-life',
    label: 'Campus Life',
    description: 'Facilities, clubs, and activities',
  },
]

export const footerLinks = [
  { to: '/site/about', label: 'About' },
  { to: '/site/academics', label: 'Academics' },
  { to: '/site/admissions', label: 'Admissions' },
  { to: '/site/campus-life', label: 'Campus Life' },
  { to: '/site/gallery', label: 'Gallery' },
  { to: '/site/news', label: 'News' },
  { to: '/site/events', label: 'Events' },
  { to: '/site/contact', label: 'Contact' },
  { to: '/site/faq', label: 'FAQ' },
  { to: '/site/careers', label: 'Careers' },
]
