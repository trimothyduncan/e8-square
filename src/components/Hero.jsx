import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-[5%] pt-[100px] pb-[60px] chess-bg"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid-bg animate-grid-shift opacity-80" />

      {/* Radial glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 animate-glow-breathe pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,107,255,0.12) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
      />

      {/* Floating logo */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-8 animate-king-float"
      >
        <img
          src="/e8-blue.png"
          alt="E8 Square"
          className="w-[clamp(100px,14vw,180px)] h-auto block"
          style={{ filter: 'drop-shadow(0 0 30px rgba(26,107,255,0.6)) drop-shadow(0 0 80px rgba(26,107,255,0.25))' }}
        />
      </motion.div>

      {/* Eyebrow */}
      <motion.p
        {...fadeUp(0.4)}
        className="relative z-10 text-[#1a6bff] text-xs tracking-[0.3em] uppercase font-medium mb-5"
      >
        E8-Square &bull; Where Kings Play
      </motion.p>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.6)}
        className="relative z-10 font-serif font-black text-center leading-[1.05] max-w-4xl"
        style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
      >
        Where <span className="text-[#1a6bff]">Strategy</span>
        <br />
        Meets Style.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        {...fadeUp(0.8)}
        className="relative z-10 text-white/60 text-center max-w-[540px] mt-6 leading-[1.75] text-[1.05rem]"
      >
        A premium grooming studio and cutting-edge digital wallet SaaS platform —&nbsp;
        built for those who move with precision.
      </motion.p>

      {/* Buttons */}
      <motion.div
        {...fadeUp(1.0)}
        className="relative z-10 flex flex-wrap gap-4 mt-10 justify-center"
      >
        <a
          href="#platform"
          className="relative overflow-hidden bg-[#1a6bff] text-white text-sm font-semibold tracking-[0.06em] uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 group"
          style={{ boxShadow: '0 0 30px rgba(26,107,255,0.35), 0 0 60px rgba(26,107,255,0.15)' }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 45px rgba(26,107,255,0.65), 0 0 90px rgba(26,107,255,0.2)' }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(26,107,255,0.35), 0 0 60px rgba(26,107,255,0.15)' }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          Explore E8 Pass
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#studio"
          className="text-white text-sm font-medium tracking-[0.06em] uppercase px-8 py-4 rounded-sm inline-flex items-center border border-white/25 transition-all duration-300 hover:border-[#1a6bff] hover:bg-[rgba(26,107,255,0.12)] hover:-translate-y-0.5"
        >
          View Studio
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <div
          className="w-px h-10 animate-scroll-line"
          style={{ background: 'linear-gradient(to bottom, #1a6bff, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
