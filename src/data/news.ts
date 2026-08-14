import type { EventItem, NewsItem } from '@/types/news'

export const newsItems: NewsItem[] = [
  {
    slug: 'welcome-to-the-new-academic-year',
    title: 'Welcome to the New Academic Year',
    summary:
      'Students, families, and faculty begin another year of ambitious learning at Time School System Mial.',
    category: 'Announcements',
    date: '2026-08-01',
    image: '/images/gallery/community/community-2.jpg',
    body: [
      'Time School System Mial welcomes families to a new academic year filled with purposeful teaching and enriched activities across every grade.',
      'Orientation sessions introduce classroom expectations, communication channels, and the daily habits that help students thrive — from early years through secondary.',
      'Our teachers have prepared learning goals for the term, and we encourage parents to stay connected through regular updates and school events.',
      'We look forward to partnering with every family as we continue empowering future leaders through quality education.',
    ],
  },
  {
    slug: 'labour-day-celebration-mial',
    title: 'Labour Day Celebration Highlights Skills for Life',
    summary:
      'Students explored real-world roles through outdoor stations, classroom projects, and community tributes.',
    category: 'Events',
    date: '2026-05-01',
    image: '/images/gallery/events/labour-day-outdoor.jpg',
    body: [
      'Labour Day at Time School System Mial brought classrooms and courtyard to life with hands-on stations celebrating hard work, teamwork, and service.',
      'Students built models, tried role-play activities, and presented classroom projects that honoured workers across many professions.',
      'Teachers guided learners to connect creativity with character — dreaming big while respecting the people who keep communities strong.',
      'Photos from the day are available in our Gallery under Events.',
    ],
  },
  {
    slug: 'final-exam-certificates-2024',
    title: 'Certificates of Appreciation for Final Examination Achievers',
    summary:
      'Outstanding performers were recognised for excellence in the Final Examination cycle.',
    category: 'Academic',
    date: '2026-04-20',
    image: '/images/gallery/events/certificate-appreciation.jpg',
    body: [
      'Time School System Mial celebrated students who demonstrated outstanding performance in the Final Examination cycle.',
      'Certificates of Appreciation recognised strong academic results, consistent effort, and the support of families throughout the year.',
      'Principal Muhammad Siddique congratulated achievers and encouraged every learner to set clear goals for the next term.',
      'Families are invited to continue celebrating progress at home with regular reading, revision routines, and positive encouragement.',
    ],
  },
  {
    slug: 'orange-day-early-years',
    title: 'Orange Day Brings Colour and Curiosity to Early Years',
    summary:
      'Young learners explored colour, language, and celebration through a joyful Orange Day programme.',
    category: 'News',
    date: '2026-03-14',
    image: '/images/gallery/events/orange-day.jpg',
    body: [
      'Early years classes hosted Orange Day — a bright celebration that blends vocabulary, sensory play, and confidence-building presentation.',
      'Children wore orange accents, shared themed objects, and practised speaking about colours, shapes, and favourite things.',
      'These theme days help young learners build social skills while making classroom concepts memorable and fun.',
    ],
  },
  {
    slug: 'classroom-creativity-spotlight',
    title: 'Classroom Creativity Spotlight: Art, Counting & Discovery',
    summary:
      'From painting tables to whiteboard counting games, classrooms stay active, colourful, and purposeful.',
    category: 'Academic',
    date: '2026-02-28',
    image: '/images/gallery/academics/student-painting.jpg',
    body: [
      'Learning at TSS Mial is designed to be active. Recent classroom moments show students painting, counting, presenting, and collaborating with focus.',
      'Teachers balance structured lessons with creative stations so children practise literacy, numeracy, and fine-motor skills every week.',
      'Parents can reinforce this at home with short drawing sessions, number games, and conversations about what their child learned each day.',
    ],
  },
  {
    slug: 'reading-culture-flourishes',
    title: 'Reading Culture Flourishes on Campus',
    summary:
      'Daily reading habits and literacy celebrations deepen a love of books at TSS Mial.',
    category: 'News',
    date: '2026-01-22',
    image: '/images/gallery/academics/welcome-classroom.jpg',
    body: [
      'A vibrant reading culture is central to academic success at Time School System Mial.',
      'Classrooms protect quiet reading time, celebrate storytelling, and help students build vocabulary through guided practice.',
      'Families are encouraged to protect daily reading time at home to reinforce classroom progress and grow lifelong learners.',
    ],
  },
]

export const eventItems: EventItem[] = [
  {
    slug: 'open-house-admissions-morning',
    title: 'Open House & Admissions Morning',
    summary:
      'Tour classrooms, meet faculty leadership, and learn about grade pathways for the upcoming term.',
    category: 'Events',
    date: '2026-09-12',
    image: '/images/gallery/campus/campus-courtyard-sunny.jpg',
    body: [
      'Prospective families are invited to an Open House featuring campus tours and admissions guidance at Time School System Mial.',
      'You will meet leadership, walk through classrooms, and hear how our pathways support learners from Pre-Nursery through Grade 10.',
      'Bring questions about academics, school day routines, and enrollment timelines — our team is ready to help.',
      'Register your interest through the Contact page so we can reserve your visit slot.',
    ],
  },
  {
    slug: 'parent-teacher-conference-cycle',
    title: 'Parent–Teacher Conference Cycle',
    summary:
      'Structured conversations focused on progress, next goals, and home–school partnership.',
    category: 'Announcements',
    date: '2026-10-05',
    image: '/images/gallery/student-life/student-whiteboard.jpg',
    body: [
      'Parent–Teacher Conferences provide dedicated time to review learning progress and set goals together.',
      'Teachers will share classroom observations, assessment highlights, and practical ways families can support study habits at home.',
      'Please arrive a few minutes early for your scheduled slot and bring any questions about your child’s growth.',
    ],
  },
  {
    slug: 'annual-prize-day',
    title: 'Annual Prize Day',
    summary:
      'Celebrating academic achievement, character awards, and student contributions across the year.',
    category: 'Events',
    date: '2026-12-15',
    image: '/images/gallery/events/certificate-appreciation.jpg',
    body: [
      'Prize Day recognises excellence in academics, character, arts, and service at Time School System Mial.',
      'Students are celebrated not only for scores, but for consistency, kindness, leadership, and contribution to school life.',
      'Families are warmly invited to join us as we honour hard work and inspire the next chapter of learning.',
    ],
  },
  {
    slug: 'welcome-back-morning',
    title: 'Welcome Back Morning for Families',
    summary:
      'A cheerful campus gathering to reopen the term with students, parents, and teachers together.',
    category: 'Events',
    date: '2026-08-10',
    image: '/images/gallery/community/community-2.jpg',
    body: [
      'Our Welcome Back Morning helps families reconnect with teachers and rediscover campus life at the start of term.',
      'Students share smiles, classrooms open for short visits, and parents receive practical reminders for a strong school year.',
      'It is one of our favourite community traditions — warm, simple, and focused on belonging.',
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

export function getFeaturedArticle() {
  return getAllArticles()[0]
}
