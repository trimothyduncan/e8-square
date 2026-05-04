import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { icon: '🪒', name: 'Hot Towel Shave', desc: 'The classic ritual. Steam-softened skin, straight razor precision, finishing cold towel close.' },
  { icon: '✦', name: 'Facial Treatment', desc: 'Curated skincare routines tailored for men — cleanse, exfoliate, hydrate, revive.' },
  { icon: '✂️', name: 'Scissor Trim', desc: 'Hand-cut with shears for texture, movement, and a natural finish that clippers can\'t replicate.' },
  { icon: '🎨', name: 'Hair Coloring', desc: 'Full color, highlights, fades, and corrections. Precision pigment from root to tip.' },
  { icon: '👑', name: 'Classic Haircut', desc: 'The foundation of the craft. Clean, precise, timeless — tailored to your head shape and lifestyle.' },
  { icon: '◈', name: 'Beard Sculpt', desc: 'Shape, define, and condition your beard with expert detailing for maximum edge.' },
  { icon: '◉', name: 'Skin Fade', desc: 'Zero to full — seamlessly blended skin fades executed with surgeon-level attention.' },
  { icon: '⬡', name: 'Line-Up & Edge', desc: 'Sharp hairline, crisp edges, perfect symmetry. The detail that defines the look.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  const { ref: headerRef, isInView: headerVisible } = useScrollReveal()
  const { ref: gridRef, isInView: gridVisible } = useScrollReveal()

  return (
    <section id="studio" className="py-[120px] px-[5%] relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#1a6bff] text-[0.7rem] tracking-[0.35em] uppercase font-medium mb-3"
          >
            The Studio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif font-bold leading-[1.2] mb-14"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', maxWidth: '600px' }}
          >
            Every Service Is<br />
            a Deliberate Move.
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? 'visible' : 'hidden'}
          className="grid gap-px bg-white/[0.08] border border-white/[0.08]"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}
        >
          {services.map((s) => (
            <motion.div
              key={s.name}
              variants={cardVariants}
              className="relative bg-[#0e0e12] px-7 py-9 flex flex-col gap-4 overflow-hidden group cursor-none transition-colors duration-300 hover:bg-[#13131a]"
            >
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-full h-0.5 bg-[#1a6bff] group-hover:right-0 transition-all duration-400" />
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(26,107,255,0.04)' }} />

              <span className="text-[1.8rem] leading-none">{s.icon}</span>
              <h3 className="font-serif font-bold text-[1.15rem]">{s.name}</h3>
              <p className="text-white/60 text-[0.85rem] leading-[1.6]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
