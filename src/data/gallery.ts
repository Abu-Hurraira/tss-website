import type { GalleryCategory, GalleryItem } from '@/types/gallery'

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Campus',
  'Academics',
  'Events',
  'Sports',
  'Student Life',
  'Community',
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'campus-courtyard',
    src: '/images/gallery/campus/campus-building-courtyard.jpg',
    alt: 'Campus courtyard with greenery and classroom wings',
    caption: 'Mial campus courtyard — a calm setting for learning and play',
    category: 'Campus',
  },
  {
    id: 'campus-exterior',
    src: '/images/gallery/campus/campus-exterior-1.jpg',
    alt: 'Campus exterior view',
    caption: 'Welcoming campus exterior',
    category: 'Campus',
  },
  {
    id: 'campus-view-1',
    src: '/images/gallery/campus/campus-view-1.jpg',
    alt: 'Campus grounds view',
    caption: 'Open learning spaces across campus',
    category: 'Campus',
  },
  {
    id: 'campus-view-2',
    src: '/images/gallery/campus/campus-view-2.jpg',
    alt: 'Another campus grounds view',
    caption: 'Pathways connecting classrooms and activity areas',
    category: 'Campus',
  },
  {
    id: 'playground',
    src: '/images/gallery/campus/playground-garden.jpg',
    alt: 'Playground and garden area',
    caption: 'Outdoor play and garden spaces',
    category: 'Campus',
  },
  {
    id: 'classroom-study',
    src: '/images/gallery/academics/classroom-study.jpg',
    alt: 'Students studying in classroom',
    caption: 'Focused classroom learning',
    category: 'Academics',
  },
  {
    id: 'early-years',
    src: '/images/gallery/academics/early-years-classroom.jpg',
    alt: 'Early years classroom',
    caption: 'Early years learning environment',
    category: 'Academics',
  },
  {
    id: 'art-corner',
    src: '/images/gallery/academics/art-corner-classroom.jpg',
    alt: 'Art corner in classroom',
    caption: 'Creativity woven into daily learning',
    category: 'Academics',
  },
  {
    id: 'learning-moment',
    src: '/images/gallery/academics/learning-moment-1.jpg',
    alt: 'Teacher and student learning moment',
    caption: 'Guided instruction and discovery',
    category: 'Academics',
  },
  {
    id: 'event-1',
    src: '/images/gallery/events/school-event-1.jpg',
    alt: 'School event celebration',
    caption: 'Community gatherings and celebrations',
    category: 'Events',
  },
  {
    id: 'achievement',
    src: '/images/gallery/events/academic-achievement.jpg',
    alt: 'Academic achievement moment',
    caption: 'Recognising academic achievement',
    category: 'Events',
  },
  {
    id: 'sports-1',
    src: '/images/gallery/sports/sports-1.jpg',
    alt: 'Sports and outdoor activity',
    caption: 'Sports, movement, and healthy competition',
    category: 'Sports',
  },
  {
    id: 'student-life-1',
    src: '/images/gallery/student-life/student-life-1.jpg',
    alt: 'Student life on campus',
    caption: 'Everyday student life at TSS Mial',
    category: 'Student Life',
  },
  {
    id: 'student-portrait',
    src: '/images/gallery/student-life/student-portrait-classroom.jpg',
    alt: 'Student portrait in classroom',
    caption: 'Confident learners in uniform',
    category: 'Student Life',
  },
  {
    id: 'community-1',
    src: '/images/gallery/community/community-1.jpg',
    alt: 'School community moment',
    caption: 'Families and community partnership',
    category: 'Community',
  },
]

export const campusLifeFacilities = [
  {
    title: 'Learning Spaces',
    text: 'Bright classrooms, reading corners, and activity areas designed for focus and collaboration.',
    image: '/images/gallery/academics/early-years-classroom.jpg',
  },
  {
    title: 'Sports & Play',
    text: 'Outdoor grounds and structured games that build fitness, teamwork, and resilience.',
    image: '/images/gallery/sports/sports-1.jpg',
  },
  {
    title: 'Arts & Expression',
    text: 'Opportunities for visual art, performance, and creative projects across the year.',
    image: '/images/gallery/academics/art-corner-classroom.jpg',
  },
  {
    title: 'Clubs & Activities',
    text: 'Student clubs deepen interests beyond the timetable — from STEM to language and leadership.',
    image: '/images/gallery/events/school-event-1.jpg',
  },
]
