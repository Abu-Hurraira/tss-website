import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function ImageReveal({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        initial={reduced ? false : { scale: 1.08, opacity: 0.6 }}
        whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />
    </div>
  )
}
