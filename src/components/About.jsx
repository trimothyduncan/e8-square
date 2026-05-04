import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const panels = [
  {
    tag: '01 — The Studio',
    icon: '✦',
    title: 'Premium Barbershop\n& Grooming Studio',
    desc: 'Step into a space where craft meets ritual. Our studio delivers precision cuts, hot towel shaves, skincare facials, and color services — each one a deliberate move.',
    link: '#studio',
    linkLabel: 'View Services',
    cls: 'studio',
  },
  {
    tag: '02 — The Platform',
    icon: '◈',
    title: 'SaaS Digital\nWallet Platform',
    desc: 'E8 Pass is a white-label digital wallet SaaS powering custom membership, loyalty, coupon, and points passes — giving any business a powerful retention engine.',
    link: '#platform',
    linkLabel: 'Explore E8 Pass',
    cls: 'platform',
  },
]

export default function About() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="about" className="grid md:grid-cols-2 gap-px bg-white/[0.08]">
      {panels.map((p, i) => (
        <motion.div
          key={p.cls}
          ref={i === 0 ? ref : undefined}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0e0e12] px-[8%] py-[70px] flex flex-col gap-6 overflow-hidden group cursor-none"
        >
          {/* Background hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                p.cls === 'studio'
                  ? 'radial-gradient(circle at 80% 20%, rgba(26,107,255,0.07) 0%, transparent 60%)'
                  : 'radial-gradient(circle at 20% 80%, rgba(26,107,255,0.1) 0%, transparent 60%)',
            }}
          />

          {/* Phantom number */}
          <span className="absolute top-8 right-8 font-serif font-black text-8xl text-white/[0.03] leading-none select-none">
            {i === 0 ? 'E8' : 'SaaS'}
          </span>

          <span className="text-[#1a6bff] text-[0.7rem] tracking-[0.3em] uppercase font-medium">{p.tag}</span>
          <span className="text-3xl leading-none">{p.icon}</span>

          <div className="w-10 h-px bg-[#1a6bff]" />

          <h2
            className="font-serif font-bold leading-[1.2] relative z-10"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', whiteSpace: 'pre-line' }}
          >
            {p.title}
          </h2>

          <p className="text-white/60 text-[0.95rem] leading-[1.75] max-w-[420px] relative z-10">
            {p.desc}
          </p>

          <a
            href={p.link}
            className="inline-flex items-center gap-2 text-[#1a6bff] text-[0.85rem] font-semibold tracking-[0.08em] uppercase mt-2 transition-all duration-300 group/link hover:gap-4"
          >
            {p.linkLabel}
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      ))}
    </section>
  )
}
