import type { Leadership, Pillar, TrustStat } from '@/types/school'

export const site = {
  name: 'TIME School System',
  shortName: 'TSS',
  campusName: 'TIME School System Mial',
  motto: 'Empowering Future Leaders Through Quality Education.',
  established: 2018,
  email: 'info@timeschool.edu',
  phone: '0346 5018150',
  website: 'https://timeschool.edu',
  address: 'Mial, Pakistan',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    linkedin: '#',
  },
} as const

export const trustStats: TrustStat[] = [
  { id: 'students', label: 'Students', value: 200, suffix: '' },
  { id: 'faculty', label: 'Faculty & Staff', value: 15, suffix: '' },
  { id: 'years', label: 'Years of Excellence', value: new Date().getFullYear() - 2018, suffix: '+' },
]

export const testimonials = [
  {
    id: 'parent-1',
    quote: 'Teachers know our child by name and share clear progress updates. The campus feels safe, organised, and welcoming.',
    name: 'Parent of a Grade 3 student',
    role: 'Mial family',
  },
  {
    id: 'parent-2',
    quote: 'From early years to the upper grades, learning stays active and caring. We trust the school with both academics and character.',
    name: 'Parent of a Grade 7 student',
    role: 'Mial family',
  },
  {
    id: 'parent-3',
    quote: 'Admissions was straightforward, and the principal’s team is easy to reach. Our daughter looks forward to school each morning.',
    name: 'Parent of a Grade 1 student',
    role: 'Mial family',
  },
]

export const pillars: Pillar[] = [
  {
    id: 'excellence',
    title: 'Academic Excellence',
    description:
      'A rigorous, well-sequenced curriculum that builds strong foundations in literacy, numeracy, sciences, and critical thinking.',
    image: '/images/gallery/academics/classroom-study.jpg',
  },
  {
    id: 'student-centered',
    title: 'Student-Centred Learning',
    description:
      'Teachers know every learner. Instruction is responsive, supportive, and designed to help each student grow with confidence.',
    image: '/images/gallery/academics/early-years-room.jpg',
  },
  {
    id: 'modern',
    title: 'Modern Learning Environment',
    description:
      'Bright classrooms, outdoor play spaces, and a campus that invites curiosity, collaboration, and disciplined study habits.',
    image: '/images/gallery/campus/campus-courtyard-sunny.jpg',
  },
  {
    id: 'character',
    title: 'Character & Leadership',
    description:
      'We cultivate integrity, empathy, and responsibility — preparing students to lead with purpose in school and beyond.',
    image: '/images/gallery/events/labour-day-outdoor.jpg',
  },
]

export const leadership: Leadership = {
  name: 'Muhammad Siddique',
  title: 'Principal',
  message:
    'Education at TIME School System Mial is about more than exam scores. We shape intellect, character, and confidence — in partnership with every family.',
  portrait: '/images/leadership/student-life-1.jpg',
}

export const values = [
  {
    title: 'Integrity',
    text: 'Honest effort, fair conduct, and responsibility in every classroom and corridor.',
  },
  {
    title: 'Curiosity',
    text: 'Questions are welcomed. Discovery, reading, and disciplined inquiry drive learning.',
  },
  {
    title: 'Respect',
    text: 'We honour diversity of thought, culture, and ability within a caring community.',
  },
  {
    title: 'Excellence',
    text: 'High standards, thoughtful feedback, and continuous improvement for every learner.',
  },
]
