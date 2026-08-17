import type { BlogCategory, BlogPost } from '@/types/blog'

export const blogCategories: Array<'All' | BlogCategory> = [
  'All',
  'Parenting',
  'Academics',
  'Student Life',
  'Leadership',
  'Wellbeing',
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-strong-study-habits-at-home',
    title: 'Building Strong Study Habits at Home: A Practical Guide for TSS Families',
    excerpt:
      'Consistency beats intensity. Learn how to design a calm home routine that improves focus, confidence, and long-term academic growth.',
    category: 'Parenting',
    tags: ['Study skills', 'Home routines', 'Family partnership'],
    date: '2026-08-10',
    readMinutes: 7,
    author: 'Muhammad Siddique',
    authorRole: 'Principal',
    image: '/images/gallery/academics/welcome-classroom.jpg',
    takeaways: [
      'Protect a fixed study window every weekday.',
      'Use short focus blocks instead of long stressful sessions.',
      'Celebrate effort and improvement, not only marks.',
    ],
    sections: [
      {
        heading: 'Why habits matter more than last-minute revision',
        paragraphs: [
          'At TIME School System Mial, we see a clear pattern: students who follow small daily routines outperform those who only study hard before tests. Habits reduce anxiety, protect sleep, and help children feel in control of learning.',
          'A strong home routine does not need to be complicated. It needs to be predictable, realistic, and kind.',
        ],
      },
      {
        heading: 'A simple weekday framework',
        paragraphs: [
          'Start with three anchors: arrival calm-down (15 minutes), focused study (30–50 minutes by age), and a short review chat with a parent or elder sibling.',
          'Keep phones out of the study space. Use a timer for focus blocks, then allow a short break. Younger learners do best with shorter cycles; secondary students can stretch focus gradually.',
        ],
      },
      {
        heading: 'How parents can coach without pressure',
        paragraphs: [
          'Ask process questions: What did you understand today? What still feels unclear? What will you try tomorrow?',
          'Avoid comparing siblings or classmates. Progress is personal. When children feel safe to admit confusion, learning accelerates.',
        ],
      },
    ],
  },
  {
    slug: 'early-years-learning-through-play',
    title: 'Early Years Excellence: How Play Builds Language, Confidence, and Curiosity',
    excerpt:
      'Play is not a break from learning — it is how young minds build vocabulary, social skills, and school readiness.',
    category: 'Academics',
    tags: ['Early years', 'Play-based learning', 'School readiness'],
    date: '2026-07-28',
    readMinutes: 6,
    author: 'Faculty Team',
    authorRole: 'Early Years Educators',
    image: '/images/gallery/academics/early-years-room.jpg',
    takeaways: [
      'Play develops language, motor skills, and emotional regulation.',
      'Theme days and art corners reinforce classroom concepts.',
      'Parents can extend learning with simple home play prompts.',
    ],
    sections: [
      {
        heading: 'What high-quality early years learning looks like',
        paragraphs: [
          'In our early classrooms, children count, paint, present, and collaborate through guided play. A colour day or art station is carefully designed to build vocabulary, listening, and fine-motor control.',
          'Teachers observe, prompt, and stretch thinking — so play stays joyful and purposeful.',
        ],
      },
      {
        heading: 'How families can support at home',
        paragraphs: [
          'Talk about colours, numbers, and feelings during daily routines. Read aloud every evening, even for five minutes. Encourage drawing, storytelling, and outdoor exploration.',
          'These small moments prepare children for confident primary learning at TSS Mial.',
        ],
      },
    ],
  },
  {
    slug: 'character-leadership-in-everyday-school-life',
    title: 'Character & Leadership: Teaching Integrity Beyond the Timetable',
    excerpt:
      'Academic excellence is incomplete without character. Here is how TSS Mial weaves integrity, empathy, and responsibility into daily school culture.',
    category: 'Leadership',
    tags: ['Character', 'Values', 'Student leadership'],
    date: '2026-07-12',
    readMinutes: 8,
    author: 'Muhammad Siddique',
    authorRole: 'Principal',
    image: '/images/gallery/events/labour-day-outdoor.jpg',
    takeaways: [
      'Character is taught through routines, recognition, and role models.',
      'Events like Labour Day connect learning with service and respect.',
      'Leadership begins with small acts of responsibility in class.',
    ],
    sections: [
      {
        heading: 'Leadership is a daily practice',
        paragraphs: [
          'Students lead when they help a classmate, care for shared spaces, or present with honesty. We intentionally create opportunities for responsibility across grades.',
          'Assemblies, classroom roles, and community events give students a stage to practise confidence with humility.',
        ],
      },
      {
        heading: 'Why values strengthen academic outcomes',
        paragraphs: [
          'Children who practise discipline and empathy also study better — they listen, persist, and collaborate. Character is not separate from academics; it is the foundation that sustains achievement.',
        ],
      },
    ],
  },
  {
    slug: 'preparing-for-grades-9-10-with-confidence',
    title: 'Preparing for Grades 9–10: Clarity, Confidence, and Career Awareness',
    excerpt:
      'Secondary years demand sharper study systems and stronger self-management. A calm plan now prevents overwhelm later.',
    category: 'Academics',
    tags: ['Secondary', 'Exam readiness', 'Future pathways'],
    date: '2026-06-30',
    readMinutes: 9,
    author: 'Faculty Team',
    authorRole: 'Secondary Mentors',
    image: '/images/gallery/academics/classroom-study.jpg',
    takeaways: [
      'Map weekly goals for each subject instead of random revision.',
      'Use active recall and past-paper practice early.',
      'Balance ambition with sleep, sport, and family time.',
    ],
    sections: [
      {
        heading: 'Move from passive reading to active mastery',
        paragraphs: [
          'Secondary success comes from retrieving knowledge, not only re-reading notes. Encourage students to teach a topic aloud, solve without looking, and track weak areas honestly.',
          'Teachers at TSS Mial guide this shift through classroom practice and feedback cycles.',
        ],
      },
      {
        heading: 'Support wellbeing while raising standards',
        paragraphs: [
          'High expectations should never erase rest. A sustainable timetable includes movement, prayer/reflection time if relevant to the family, and digital boundaries.',
          'When students feel supported, they take ownership — and that ownership is the real secondary advantage.',
        ],
      },
    ],
  },
  {
    slug: 'digital-balance-for-modern-learners',
    title: 'Digital Balance for Modern Learners: Focus in an Age of Distraction',
    excerpt:
      'Technology can accelerate learning — or shatter attention. Families need clear agreements that protect focus and sleep.',
    category: 'Wellbeing',
    tags: ['Screen time', 'Focus', 'Family agreements'],
    date: '2026-06-15',
    readMinutes: 6,
    author: 'Faculty Team',
    authorRole: 'Student Wellbeing',
    image: '/images/gallery/student-life/outdoor-learning.jpg',
    takeaways: [
      'Create device-free study and meal windows.',
      'Prefer purposeful tech use over endless scrolling.',
      'Model the same boundaries adults expect from children.',
    ],
    sections: [
      {
        heading: 'Attention is a school skill',
        paragraphs: [
          'Deep work — reading carefully, solving patiently, writing clearly — needs unbroken attention. Constant notifications train the brain for interruption.',
          'A family agreement works best when everyone participates: charging phones outside bedrooms at night, and keeping study desks clear of social apps.',
        ],
      },
      {
        heading: 'Use technology as a tool, not a default',
        paragraphs: [
          'Educational videos, timers, and research can help. Endless short-form content rarely does. Teach children to ask: Is this helping me learn, rest, or connect — or only filling time?',
        ],
      },
    ],
  },
  {
    slug: 'making-the-most-of-parent-teacher-conferences',
    title: 'Making the Most of Parent–Teacher Conferences',
    excerpt:
      'A short meeting can change a term. Come prepared, listen for patterns, and leave with one clear next step.',
    category: 'Parenting',
    tags: ['Conferences', 'Communication', 'Partnership'],
    date: '2026-05-22',
    readMinutes: 5,
    author: 'Admissions & Faculty Office',
    authorRole: 'Family Partnership',
    image: '/images/gallery/student-life/student-whiteboard.jpg',
    takeaways: [
      'Bring specific questions about progress and habits.',
      'Ask what “good progress” looks like for the next 6 weeks.',
      'Agree on one home action and one school action.',
    ],
    sections: [
      {
        heading: 'Before the meeting',
        paragraphs: [
          'Review recent notebooks, notices, and your child’s feelings about school. Note strengths as well as worries. Teachers respond best to collaborative, specific conversations.',
        ],
      },
      {
        heading: 'During and after the meeting',
        paragraphs: [
          'Listen for patterns across subjects — effort, organisation, confidence. Leave with a written next step. Follow up after two weeks so momentum does not fade.',
          'At TIME School System Mial, we treat conferences as partnership, not performance reviews.',
        ],
      },
    ],
  },
  {
    slug: 'campus-life-why-events-matter',
    title: 'Why Campus Events Matter: Belonging, Confidence, and Real-World Skills',
    excerpt:
      'From Orange Day to Labour Day, celebrations teach collaboration, presentation skills, and pride in school identity.',
    category: 'Student Life',
    tags: ['Events', 'Belonging', 'Soft skills'],
    date: '2026-05-02',
    readMinutes: 5,
    author: 'Campus Life Team',
    authorRole: 'Student Activities',
    image: '/images/gallery/events/orange-day.jpg',
    takeaways: [
      'Events build confidence beyond textbooks.',
      'Students practise teamwork, creativity, and public presence.',
      'Family attendance strengthens school community.',
    ],
    sections: [
      {
        heading: 'Learning you cannot get from worksheets alone',
        paragraphs: [
          'Planning a stall, presenting a project, or performing in front of peers develops communication and resilience. These skills matter in secondary school and adult life.',
          'Our gallery and news pages capture these moments — but the real value is what students feel: I belong here, and I can contribute.',
        ],
      },
    ],
  },
  {
    slug: 'choosing-the-right-school-for-your-child',
    title: 'Choosing the Right School: Questions Every Parent Should Ask',
    excerpt:
      'A school visit reveals culture. Use these questions to evaluate academics, care, communication, and long-term fit.',
    category: 'Leadership',
    tags: ['Admissions', 'School choice', 'Campus visit'],
    date: '2026-04-18',
    readMinutes: 7,
    author: 'Admissions Office',
    authorRole: 'Family Guidance',
    image: '/images/campus/gallery-cover.jpg',
    takeaways: [
      'Observe classrooms, not only corridors.',
      'Ask how teachers support different learners.',
      'Check communication systems and leadership accessibility.',
    ],
    sections: [
      {
        heading: 'Look for culture, not just claims',
        paragraphs: [
          'Mission statements matter less than what you see: Do students look engaged? Do teachers speak with warmth and clarity? Is the campus safe, organised, and purposeful?',
          'At TSS Mial, we invite families to tour, ask direct questions, and meet leadership — because trust begins with transparency.',
        ],
      },
      {
        heading: 'Academic pathway and pastoral care',
        paragraphs: [
          'Ask how learning progresses from early years to Grade 10, how feedback is shared, and how behaviour and wellbeing are handled.',
          'The best school for your child is the one that combines standards with genuine care.',
        ],
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedBlogPost() {
  return getAllBlogPosts()[0]
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug)
  if (!current) return getAllBlogPosts().slice(0, limit)
  return getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0
      const bScore = b.category === current.category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}
