import type { Campus } from '@/types/school'

/** Single campus for now — TIME School System Mial */
export const campuses: Campus[] = [
  {
    id: 'mial',
    name: 'TIME School System Mial',
    city: 'Mial',
    location: 'Mial, Pakistan',
    description:
      'Our home campus in Mial offers a complete academic journey with modern classrooms, science facilities, outdoor spaces, and a caring community focused on excellence.',
    facilities: ['Science labs', 'Library & resource centre', 'Sports grounds', 'Activity studios', 'Play areas'],
    phone: '+92 000 0000000',
    email: 'info@timeschool.edu',
    image: '/images/gallery/campus/campus-building-courtyard.jpg',
  },
]

export const primaryCampus = campuses[0]!
