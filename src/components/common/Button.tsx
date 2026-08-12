import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'orange' | 'ghost'
type Props = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: Variant
  className?: string
  disabled?: boolean
  onClick?: () => void
}

const styles: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-hover shadow-[0_8px_20px_rgb(12_85_143/0.25)]',
  secondary: 'border border-border text-navy hover:bg-brand-soft',
  orange: 'bg-accent-orange text-white hover:brightness-105 shadow-[0_8px_20px_rgb(249_115_22/0.28)]',
  ghost: 'border border-white/35 text-white hover:bg-white/10',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className,
  disabled,
  onClick,
}: Props) {
  const cls = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70',
    styles[variant],
    className,
  )
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
