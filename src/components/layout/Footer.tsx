import { Link } from 'react-router-dom'
import { footerLinks } from '@/data/navigation'
import { primaryCampus } from '@/data/campuses'
import { site } from '@/data/site'
import { asset } from '@/lib/asset'
import { BrandMark } from '@/components/common/BrandMark'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide section-pad grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link to="/site" className="inline-flex items-center gap-3">
            <img src={asset('/logo.png')} alt="" className="h-14 w-14 rounded-full object-cover" width={56} height={56} />
            <BrandMark
              titleClassName="text-white"
              subtitleClassName="text-white/80"
              showCampus
              campusClassName="text-white/55"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{site.motto}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] text-white/55 uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-white/80 transition hover:text-accent-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] text-white/55 uppercase">Campus</h3>
          <p className="mt-4 font-semibold">{primaryCampus.name}</p>
          <p className="mt-1 text-sm text-white/70">{primaryCampus.location}</p>
          <p className="mt-4 text-sm text-white/80">{primaryCampus.email}</p>
          <p className="text-sm text-white/80">{primaryCampus.phone}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] text-white/55 uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent-orange">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-accent-orange">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.campusName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/site/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/site/contact" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
