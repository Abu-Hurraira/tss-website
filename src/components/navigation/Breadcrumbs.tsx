import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Crumb = { label: string; to?: string }

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-[13px] tracking-[0.04em]', className)}>
      <ol className="flex flex-wrap items-center gap-2.5">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2.5">
            {i > 0 && (
              <span aria-hidden="true" className="opacity-50">
                /
              </span>
            )}
            {item.to ? (
              <Link
                to={item.to}
                className="font-medium uppercase transition-colors hover:text-accent-orange"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold uppercase" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
