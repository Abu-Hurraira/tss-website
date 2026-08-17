import type { Campus } from '@/types/school'

/** Single campus for now — TIME School System Mial */
export const campuses: Campus[] = [
  {
    id: 'mial',
    name: 'TIME School System Mial',
    city: 'Mial',
    location: 'Mial, Pakistan',
    description:
      'Our home campus in Mial offers a complete academic journey with modern classrooms, outdoor spaces, and a caring community focused on excellence.',
    facilities: ['Sports grounds', 'Activity studios', 'Play areas', 'Bright classrooms', 'Outdoor learning spaces'],
    phone: '0346 5018150',
    email: 'info@timeschool.edu',
    image: '/images/gallery/campus/campus-courtyard-sunny.jpg',
  },
]

export const primaryCampus = campuses[0]!
