import type { Campus } from '@/types/school'

/** Single campus for now — Time School System Mial */
export const campuses: Campus[] = [
  {
    id: 'mial',
    name: 'Time School System Mial',
    city: 'Mial',
    location: 'Mial, Pakistan',
    description:
      'Our home campus in Mial offers a complete academic journey with modern classrooms, outdoor spaces, and a caring community focused on excellence.',
    facilities: ['Sports grounds', 'Activity studios', 'Play areas', 'Bright classrooms', 'Outdoor learning spaces'],
    phone: '0301 5391013',
    email: 'info@timeschool.edu',
    image: '/images/gallery/campus/campus-courtyard-sunny.jpg',
  },
]

export const primaryCampus = campuses[0]!
