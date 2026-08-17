import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryNewsItems, primaryNav } from '@/data/navigation'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import { asset } from '@/lib/asset'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { useDarkHeroRoute } from '@/hooks/useDarkHeroRoute'
import { Navbar } from '@/components/navigation/Navbar'
import { BrandMark } from '@/components/common/BrandMark'

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
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-secondary hover:bg-brand-soft"
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const scrolled = useScrollHeader()
  const darkHero = useDarkHeroRoute()
  const [open, setOpen] = useState(false)
  const solid = scrolled || open || !darkHero

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'border-b border-border/80 bg-white/95 shadow-[0_8px_30px_rgb(8_43_76/0.08)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-4 lg:h-20">
        <Link to="/site" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={asset('/logo.png')}
            alt={`${site.campusName} logo`}
            className="h-12 w-12 shrink-0 rounded-full object-cover md:h-14 md:w-14"
            width={56}
            height={56}
          />
          <BrandMark
            compact
            showCampus
            titleClassName={solid ? 'text-navy' : 'text-white'}
            subtitleClassName={solid ? 'text-ink-secondary' : 'text-white/85'}
            campusClassName={solid ? 'text-ink-muted' : 'text-white/70'}
          />
        </Link>

        <Navbar transparent={!solid} />

        <button
          type="button"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden',
            solid ? 'border-border text-navy' : 'border-white/35 text-white',
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
