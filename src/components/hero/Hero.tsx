import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { site } from '@/data/site'
import { fadeUp } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Button } from '@/components/common/Button'
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
          className="h-full w-full object-cover"
          initial={reduced ? false : { scale: 1.1 }}
          animate={reduced ? undefined : { scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />
      </div>

      <div className="container-wide relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-28">
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'visible'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent-orange uppercase">
            TIME School System Mial · ESTB {site.established}
          </motion.p>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.65 }} className="font-display text-4xl leading-[1.08] font-semibold text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Empowering Future Leaders Through Quality Education.
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.65 }} className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            A premium academic community in Mial where rigorous learning, character, and modern campus life prepare students for tomorrow.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.65 }} className="mt-8 flex flex-wrap gap-3">
            <Button to="/site/admissions" variant="orange">Explore Admissions</Button>
            <Button to="/site/about" variant="ghost">Discover TSS</Button>
          </motion.div>
        </motion.div>

        <a href="#trust" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 md:flex" aria-label="Scroll to content">
          <span className="text-[11px] tracking-[0.18em] uppercase">Scroll</span>
          <ChevronDown className="animate-bounce" size={18} />
        </a>
      </div>
    </section>
  )
}

export function HeroSlider() {
  // Reserved for multi-slide hero; currently uses cinematic single hero.
  return <Hero />
}
