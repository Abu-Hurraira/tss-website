import { Link } from 'react-router-dom'
import { Megaphone } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <div className="container-wide flex items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
        <Megaphone size={14} className="shrink-0 text-accent-orange" />
        <p>
          Admissions open for the new term at TIME School System Mial.{' '}
          <Link to="/site/contact" className="font-semibold text-accent-orange underline-offset-2 hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  )
}
