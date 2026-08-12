import type { EventItem, NewsItem } from '@/types/news'

export const newsItems: NewsItem[] = [
  {
    slug: 'welcome-to-the-new-academic-year',
    title: 'Welcome to the New Academic Year',
    summary: 'Students, families, and faculty begin another year of ambitious learning at TIME School System Mial.',
    category: 'Announcements',
    date: '2026-08-01',
    image: '/images/news/school-event-1.jpg',
    body: [
      'TIME School System Mial welcomes families to a new academic year filled with purposeful teaching and enriched activities.',
      'Orientation sessions introduce classroom expectations, communication channels, and the habits that help students thrive.',
      'We look forward to partnering with parents as we continue empowering future leaders through quality education.',
    ],
  },
  {
    slug: 'stem-week-highlights-inquiry-learning',
    title: 'STEM Week Highlights Inquiry Learning',
    summary: 'Learners explored experiments, design challenges, and collaborative problem-solving.',
    category: 'Academic',
    date: '2026-07-18',
    image: '/images/gallery/academics/learning-moment-1.jpg',
    body: [
      'STEM Week invited students to investigate real questions through hands-on experiments and design challenges.',
      'Teachers facilitated inquiry stations that strengthened observation, measurement, and teamwork.',
    ],
  },
  {
    slug: 'reading-culture-flourishes',
    title: 'Reading Culture Flourishes on Campus',
    summary: 'Classroom libraries and literacy celebrations deepen a love of books at TSS Mial.',
    category: 'News',
    date: '2026-06-22',
    image: '/images/gallery/academics/art-corner-classroom.jpg',
    body: [
      'A vibrant reading culture is central to academic success at TIME School System Mial.',
      'Families are encouraged to protect daily reading time at home to reinforce classroom progress.',
    ],
  },
]

export const eventItems: EventItem[] = [
  {
    slug: 'open-house-admissions-morning',
    title: 'Open House & Admissions Morning',
    summary: 'Tour classrooms, meet faculty leadership, and learn about grade pathways for the upcoming term.',
    category: 'Events',
    date: '2026-09-12',
    image: '/images/gallery/campus/campus-exterior-1.jpg',
    body: [
      'Prospective families are invited to an Open House featuring campus tours and admissions guidance at Mial.',
      'Register your interest through Contact or Apply so we can reserve your visit slot.',
    ],
  },
  {
    slug: 'parent-teacher-conference-cycle',
    title: 'Parent–Teacher Conference Cycle',
    summary: 'Structured conversations focused on progress, next goals, and home–school partnership.',
    category: 'Announcements',
    date: '2026-10-05',
    image: '/images/gallery/academics/early-years-classroom.jpg',
    body: [
      'Parent–Teacher Conferences provide dedicated time to review learning progress and set goals together.',
    ],
  },
  {
    slug: 'annual-prize-day',
    title: 'Annual Prize Day',
    summary: 'Celebrating academic achievement, character awards, and student contributions across the year.',
    category: 'Events',
    date: '2026-12-15',
    image: '/images/gallery/events/academic-achievement.jpg',
    body: [
      'Prize Day recognises excellence in academics, arts, sports, and service at TIME School System Mial.',
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return [...newsItems, ...eventItems].find((item) => item.slug === slug)
}

export function getAllArticles() {
  return [...newsItems, ...eventItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}
