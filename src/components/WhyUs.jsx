import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    num: '01',
    title: 'Precision',
    desc: "Whether it's a fade line or a software feature, we don't cut corners. Every detail is deliberate. Every move calculated. The king doesn't make careless plays.",
  },
  {
    num: '02',
    title: 'Innovation',
    desc: "We're not just a barbershop with an app. We're a tech-forward brand redefining what a service business can look like in the digital age — from chair to checkout.",
  },
  {
    num: '03',
    title: 'Loyalty',
    desc: 'We earn it in the chair. We engineer it in the platform. Our entire business — both divisions — is built to create customers who don\'t leave.',
  },
]

export default function WhyUs() {
  const { ref: headerRef, isInView: headerVisible } = useScrollReveal()
  const { ref: gridRef, isInView: gridVisible } = useScrollReveal()

  return (
    <section id="why" className="py-[120px] px-[5%]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#1a6bff] text-[0.7rem] tracking-[0.35em] uppercase font-medium mb-3"
          >
            Our Edge
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif font-bold leading-[1.2]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', maxWidth: '600px' }}
          >
            Built on Three<br />Non-Negotiables.
          </motion.h2>
        </div>

        {/* Pillars */}
        <div
          ref={gridRef}
          className="mt-16 grid md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={gridVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[var(--bg)] px-10 py-14 flex flex-col gap-5 overflow-hidden group cursor-none"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(26,107,255,0.05) 0%, transparent 70%)' }} />

              <span
                className="font-serif font-black leading-none text-[#1a6bff]"
                style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 15px rgba(26,107,255,0.4))' }}
              >
                {p.num}
              </span>

              <h3 className="font-serif font-bold text-[1.5rem] tracking-tight relative z-10">{p.title}</h3>

              <p className="text-white/60 text-[0.88rem] leading-[1.7] relative z-10">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
