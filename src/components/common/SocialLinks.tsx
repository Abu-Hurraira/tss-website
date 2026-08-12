import { site } from '@/data/site'
import { cn } from '@/lib/utils'

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-3', className)}>
      {Object.entries(site.social).map(([name, href]) => (
        <a
          key={name}
          href={href}
          className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold capitalize text-ink-muted hover:border-brand hover:text-brand"
          aria-label={name}
        >
          {name.slice(0, 2)}
        </a>
      ))}
    </div>
  )
}
