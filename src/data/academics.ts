import type { Department, Program } from '@/types/academic'

export const programs: Program[] = [
  {
    id: 'early-years',
    title: 'Early Years',
    ages: 'Pre-Nursery — Kindergarten',
    summary:
      'A warm, structured introduction to school life where play, language, and social growth build the foundation for lifelong learning.',
    highlights: ['Phonics & early literacy', 'Numeracy through play', 'Creative expression', 'Social-emotional routines'],
  },
  {
    id: 'primary',
    title: 'Primary School',
    ages: 'Grades 1 — 5',
    summary: 'Core academic mastery paired with inquiry projects, reading culture, and habits of independence.',
    highlights: ['English & Urdu literacy', 'Mathematics fluency', 'Integrated science', 'Arts & physical education'],
  },
  {
    id: 'middle',
    title: 'Middle School',
    ages: 'Grades 6 — 8',
    summary:
      'Deeper subject study, research skills, and leadership opportunities that prepare students for senior pathways.',
    highlights: ['STEM enrichment', 'Language development', 'Debate & clubs', 'Study skills coaching'],
  },
  {
    id: 'secondary',
    title: 'Secondary / Senior',
    ages: 'Grades 9 — 10',
    summary:
      'Focused academic pathways with examination readiness, counseling support, and character formation for university and life.',
    highlights: ['Sciences & mathematics', 'Humanities options', 'Career guidance', 'Leadership programmes'],
  },
]

export const departments: Department[] = [
  { name: 'Sciences', description: 'Hands-on investigation across biology, chemistry, physics, and environmental awareness.' },
  { name: 'Mathematics', description: 'Conceptual understanding, problem-solving fluency, and real-world application.' },
  { name: 'Languages', description: 'English and Urdu communication, literature appreciation, and confident expression.' },
  { name: 'Humanities & Arts', description: 'History, geography, visual arts, and cultural understanding that widen perspective.' },
]

export const learningApproach = [
  { title: 'Clear learning goals', text: 'Every unit begins with what students should know, understand, and be able to do.' },
  { title: 'Active classrooms', text: 'Discussion, collaboration, and purposeful practice keep students intellectually engaged.' },
  { title: 'Meaningful assessment', text: 'Formative checks and timely feedback guide improvement — not only end-of-term scores.' },
  { title: 'Home–school partnership', text: 'Parents receive clear communication so learning continues with shared expectations.' },
]

export const academicFacilities = [
  'Well-resourced classrooms',
  'Art and activity studios',
  'Sports and outdoor play areas',
  'Outdoor learning spaces',
  'Early years activity corners',
  'Digital learning support',
]
