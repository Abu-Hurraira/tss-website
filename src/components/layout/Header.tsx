import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryNewsItems, primaryNav } from '@/data/navigation'
import { site } from '@/data/site'
import { PORTAL_LOGIN_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { Navbar } from '@/components/navigation/Navbar'

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-border bg-white lg:hidden"
        >
          <div className="container-wide flex max-h-[calc(100vh-72px)] flex-col gap-1 overflow-y-auto py-4 pb-8">
            {primaryNav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-base font-semibold text-ink-secondary hover:bg-brand-soft"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-4 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
              Gallery & News
            </p>
            {galleryNewsItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-secondary hover:bg-brand-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/site/contact"
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-secondary hover:bg-brand-soft"
            >
              Contact
            </Link>
            <div className="mt-4 grid gap-2">
              <Link
                to="/site/apply"
                onClick={onClose}
                className="rounded-full bg-brand px-4 py-3 text-center text-sm font-bold text-white"
              >
                Apply Now
              </Link>
              <a
                href={PORTAL_LOGIN_URL}
                className="rounded-full border border-border px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                Portal Login
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const scrolled = useScrollHeader()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-border/80 bg-white/95 shadow-[0_8px_30px_rgb(8_43_76/0.08)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-4 lg:h-20">
        <Link to="/site" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt={`${site.name} logo`}
            className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
          />
          <div className="leading-tight">
            <p
              className={cn(
                'text-sm font-bold tracking-wide md:text-base',
                scrolled || open ? 'text-navy' : 'text-white',
              )}
            >
              TIME School
            </p>
            <p
              className={cn(
                'text-[11px] font-medium tracking-[0.14em] uppercase',
                scrolled || open ? 'text-ink-muted' : 'text-white/70',
              )}
            >
              Mial
            </p>
          </div>
        </Link>

        <div
          className={cn(
            'hidden rounded-full px-2 py-1 transition lg:block',
            scrolled || open ? 'bg-transparent' : 'bg-white/95 shadow-[0_10px_30px_rgb(8_43_76/0.12)]',
          )}
        >
          <Navbar />
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={PORTAL_LOGIN_URL}
            className={cn(
              'rounded-full px-4 py-2.5 text-sm font-semibold transition',
              scrolled
                ? 'border border-border text-navy hover:bg-brand-soft'
                : 'border border-white/30 text-white hover:bg-white/10',
            )}
          >
            Portal Login
          </a>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden',
            scrolled || open ? 'border-border text-navy' : 'border-white/30 text-white',
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
