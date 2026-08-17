import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { galleryNewsItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function NavDropdown({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const active = galleryNewsItems.some((item) => location.pathname.startsWith(item.to))

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('mousedown', onPointer)
    return () => window.removeEventListener('mousedown', onPointer)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition',
          transparent
            ? active || open
              ? 'bg-white/15 text-white'
              : 'text-white/90 hover:bg-white/10 hover:text-white'
            : active || open
              ? 'bg-brand-muted text-brand'
              : 'text-ink-secondary hover:bg-brand-soft hover:text-navy',
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        Gallery & News
        <ChevronDown size={16} className={cn('transition', open && 'rotate-180')} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-1/2 z-50 mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-[0_18px_40px_rgb(8_43_76/0.12)]"
        >
          {galleryNewsItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              className="block rounded-xl px-4 py-3 transition hover:bg-brand-soft"
              onClick={() => setOpen(false)}
            >
              <span className="block text-sm font-semibold text-navy">{item.label}</span>
              {item.description && (
                <span className="mt-0.5 block text-xs text-ink-muted">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const linkClass = (transparent: boolean, isActive: boolean) =>
  cn(
    'rounded-full px-4 py-2 text-sm font-medium tracking-wide transition',
    transparent
      ? isActive
        ? 'bg-white/15 text-white'
        : 'text-white/90 hover:bg-white/10 hover:text-white'
      : isActive
        ? 'bg-brand-muted text-brand'
        : 'text-ink-secondary hover:bg-brand-soft hover:text-navy',
  )

export function Navbar({
  className,
  transparent = false,
}: {
  className?: string
  transparent?: boolean
}) {
  return (
    <nav className={cn('hidden items-center gap-1 lg:flex', className)} aria-label="Primary">
      <NavLink to="/site" end className={({ isActive }) => linkClass(transparent, isActive)}>
        Home
      </NavLink>
      <NavLink to="/site/about" className={({ isActive }) => linkClass(transparent, isActive)}>
        About
      </NavLink>
      <NavLink to="/site/academics" className={({ isActive }) => linkClass(transparent, isActive)}>
        Academics
      </NavLink>
      <NavLink to="/site/admissions" className={({ isActive }) => linkClass(transparent, isActive)}>
        Admissions
      </NavLink>
      <NavDropdown transparent={transparent} />
      <NavLink to="/site/contact" className={({ isActive }) => linkClass(transparent, isActive)}>
        Contact
      </NavLink>
    </nav>
  )
}
