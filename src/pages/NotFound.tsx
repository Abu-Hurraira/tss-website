import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { usePageSeo } from '@/lib/seo'

export default function NotFound() {
  usePageSeo({
    title: 'Page not found — TIME School System',
    description: 'The page you requested could not be found.',
    path: '/404',
  })

  return (
    <section className="section-pad flex min-h-[70vh] items-center pt-32">
      <div className="container-site text-center">
        <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">404</p>
        <h1 className="font-display mt-3 text-4xl font-semibold text-navy md:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-secondary">
          The page you are looking for may have moved. Return home or explore admissions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/site">Back to Home</Button>
          <Button to="/site/admissions" variant="secondary">Admissions</Button>
        </div>
        <Link to="/site/contact" className="mt-6 inline-block text-sm font-semibold text-brand">
          Contact us
        </Link>
      </div>
    </section>
  )
}
