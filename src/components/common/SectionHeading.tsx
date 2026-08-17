import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}: Props) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={cn(align === 'center' && 'mx-auto max-w-3xl text-center', className)}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className={cn('mb-3 text-xs font-semibold tracking-[0.18em] uppercase', light ? 'text-accent-orange' : 'text-brand')}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn('font-display max-w-3xl text-[1.85rem] leading-[1.18] font-semibold md:text-4xl lg:text-[2.55rem]', light ? 'text-white' : 'text-navy')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 max-w-2xl text-base leading-relaxed md:text-[1.05rem]', light ? 'text-white/80' : 'text-ink-secondary')}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
