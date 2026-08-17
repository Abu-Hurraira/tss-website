import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeUp } from '@/lib/animations'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  description?: string
  image?: string
  className?: string
}

export function PageHero({ title, description, image, className }: Props) {
  const reduced = useReducedMotion()

  return (
    <section className={cn('relative overflow-hidden pt-28 md:pt-32', className)}>
      <div className="absolute inset-0">
        <motion.img
          src={asset(image || '/images/gallery/campus/campus-building-courtyard.jpg')}
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center"
          initial={reduced ? false : { scale: 1.03 }}
          animate={reduced ? undefined : { scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/25" />
      </div>

      <motion.div
        className="container-wide relative section-pad py-16 md:py-20"
        initial={reduced ? false : 'hidden'}
        animate={reduced ? undefined : 'visible'}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-display max-w-3xl text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
