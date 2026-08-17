import { cn } from '@/lib/utils'

type BrandMarkProps = {
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  showCampus?: boolean
  campusClassName?: string
  compact?: boolean
}

/** Brand lockup: TIME (abbreviation) above, School System below. */
export function BrandMark({
  className,
  titleClassName,
  subtitleClassName,
  showCampus = false,
  campusClassName,
  compact = false,
}: BrandMarkProps) {
  return (
    <div className={cn('min-w-0 leading-tight', className)}>
      <p
        className={cn(
          'font-semibold tracking-[0.18em] uppercase',
          compact ? 'text-sm md:text-base' : 'text-base md:text-lg',
          titleClassName,
        )}
      >
        TIME
      </p>
      <p
        className={cn(
          'font-medium',
          compact ? 'text-[11px] md:text-xs' : 'text-xs md:text-sm',
          subtitleClassName,
        )}
      >
        School System
      </p>
      {showCampus && (
        <p className={cn('mt-0.5 text-[10px] font-medium tracking-[0.16em] uppercase', campusClassName)}>
          Mial
        </p>
      )}
    </div>
  )
}
