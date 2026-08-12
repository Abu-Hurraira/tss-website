import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Academics from '@/pages/Academics'
import Admissions from '@/pages/Admissions'
import Apply from '@/pages/Apply'
import CampusLife from '@/pages/CampusLife'
import Gallery from '@/pages/Gallery'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import Events from '@/pages/Events'
import EventDetail from '@/pages/EventDetail'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'
import Faculty from '@/pages/Faculty'
import Achievements from '@/pages/Achievements'
import Careers from '@/pages/Careers'
import NotFound from '@/pages/NotFound'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/site" replace />} />
      <Route path="/site" element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="apply" element={<Apply />} />
        <Route path="campus-life" element={<CampusLife />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsDetail />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/site" replace />} />
    </Routes>
  )
}
