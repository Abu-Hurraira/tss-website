import type { Leadership, Pillar, TrustStat } from '@/types/school'

export const site = {
  name: 'Time School System',
  shortName: 'TSS',
  campusName: 'Time School System Mial',
  motto: 'Empowering Future Leaders Through Quality Education.',
  established: 2018,
  email: 'info@timeschool.edu',
  phone: '0301 5391013',
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
  { id: 'students', label: 'Students', value: 600, suffix: '+' },
  { id: 'faculty', label: 'Faculty & Staff', value: 45, suffix: '+' },
  { id: 'programs', label: 'Academic Pathways', value: 8, suffix: '' },
  { id: 'years', label: 'Years of Excellence', value: new Date().getFullYear() - 2018, suffix: '+' },
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
    image: '/images/gallery/student-life/student-portrait-classroom.jpg',
  },
  {
    id: 'modern',
    title: 'Modern Learning Environment',
    description:
      'Bright classrooms, purposeful labs, and campus spaces that invite curiosity, collaboration, and disciplined study habits.',
    image: '/images/gallery/campus/playground-garden.jpg',
  },
  {
    id: 'character',
    title: 'Character & Leadership',
    description:
      'We cultivate integrity, empathy, and responsibility — preparing students to lead with purpose in school and beyond.',
    image: '/images/gallery/events/academic-achievement.jpg',
  },
]

export const leadership: Leadership = {
  name: 'Muhammad Siddique',
  title: 'Principal',
  message:
    'At Time School System Mial, we believe education is more than examination success. It is the careful shaping of intellect, character, and confidence. Our educators partner with families to nurture curious minds and compassionate leaders.',
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
