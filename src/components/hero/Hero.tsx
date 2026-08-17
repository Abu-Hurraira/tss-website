import { motion } from 'framer-motion'
import { site } from '@/data/site'
import { fadeUp } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Button } from '@/components/common/Button'
import { BrandMark } from '@/components/common/BrandMark'
import { asset } from '@/lib/asset'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={asset('/images/gallery/campus/campus-building-courtyard.jpg')}
          alt={`${site.campusName} courtyard`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
          initial={reduced ? false : { scale: 1.04, opacity: 0.92 }}
          animate={reduced ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/72 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-navy/25" />
      </div>

      <div className="container-wide relative flex min-h-[100svh] flex-col justify-end pb-20 pt-28 md:justify-center md:pb-28 md:pt-24">
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'visible'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mb-8">
            <BrandMark
              titleClassName="text-3xl tracking-[0.22em] text-white md:text-4xl lg:text-5xl"
              subtitleClassName="mt-1 text-base text-white/85 md:text-lg"
              showCampus
              campusClassName="mt-2 text-xs tracking-[0.2em] text-accent-orange"
            />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display max-w-2xl text-[2.35rem] leading-[1.12] font-semibold text-white sm:text-5xl md:text-6xl"
          >
            {site.motto}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/78 md:text-lg"
          >
            Quality education in Mial — from early years through Grade 10.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-9 flex flex-wrap gap-3">
            <Button to="/site/admissions" variant="orange" className="min-w-[10.5rem]">
              Admissions
            </Button>
            <Button to="/site/contact" variant="ghost" className="min-w-[10.5rem]">
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function HeroSlider() {
  return <Hero />
}
