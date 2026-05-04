import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: '🪪',
    name: 'Custom Membership Passes',
    desc: 'White-labeled membership cards delivered straight to Apple & Google Wallet. Tiered access, perks, and exclusive member pricing built in.',
  },
  {
    icon: '⭐',
    name: 'Loyalty Programs',
    desc: 'Stamp-card or point-accumulation loyalty passes. Customers earn, track, and redeem — all without an app download.',
  },
  {
    icon: '🎟',
    name: 'Digital Coupons',
    desc: 'Time-sensitive, geo-triggered, or event-based digital coupons that auto-update and expire. No printing. Maximum conversion.',
  },
  {
    icon: '💎',
    name: 'Points & Rewards',
    desc: 'Full points economy for your brand. Customers earn on every visit or purchase and redeem against your reward catalog.',
  },
  {
    icon: '📊',
    name: 'Business Dashboard',
    desc: 'Real-time analytics on pass usage, redemption rates, and customer engagement — all from one clean control panel.',
  },
  {
    icon: '📲',
    name: 'Wallet-Native Delivery',
    desc: 'Passes live in Apple Wallet and Google Wallet — zero friction, zero app needed. Push-update capable for instant promotions.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Platform() {
  const { ref: headerRef, isInView: headerVisible } = useScrollReveal()
  const { ref: gridRef, isInView: gridVisible } = useScrollReveal()

  return (
    <section id="platform" className="relative py-[120px] px-[5%] bg-[#0e0e12] overflow-hidden chess-bg-blue">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 bg-[rgba(26,107,255,0.12)] border border-[rgba(26,107,255,0.25)] px-5 py-2 rounded-full text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-[#1a6bff] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1a6bff] animate-blink" />
              E8 Pass — Live Platform
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#1a6bff] text-[0.7rem] tracking-[0.35em] uppercase font-medium mb-3"
            >
              The Platform
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-bold leading-[1.2]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Give Your Customers<br />
              a Reason to{' '}
              <span className="text-[#1a6bff]">Return.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 text-[0.95rem] leading-[1.75]"
          >
            E8 Pass is a white-label digital wallet SaaS platform. We build custom Membership, Loyalty, Coupon, and Points passes that live directly in your customers' Apple Wallet or Google Wallet — driving retention, repeat visits, and brand loyalty at scale.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.name}
              variants={cardVariants}
              className="relative bg-[rgba(7,7,9,0.6)] border border-white/[0.08] rounded-sm p-9 flex flex-col gap-4 overflow-hidden group cursor-none transition-all duration-300 hover:-translate-y-1"
              style={{ '--tw-translate-y': 0 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,107,255,0.3)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(26,107,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(245,245,240,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a6bff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="w-12 h-12 rounded-sm bg-[rgba(26,107,255,0.12)] border border-[rgba(26,107,255,0.2)] flex items-center justify-center text-[1.3rem]">
                {f.icon}
              </div>

              <h3 className="font-serif font-bold text-[1.1rem]">{f.name}</h3>

              <p className="text-white/60 text-[0.85rem] leading-[1.65]">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[rgba(26,107,255,0.2)] rounded-sm px-10 py-8 bg-[rgba(26,107,255,0.04)]"
        >
          <div>
            <p className="font-serif font-bold text-xl mb-1">Ready to launch E8 Pass for your business?</p>
            <p className="text-white/50 text-sm">White-labeled, fully managed. Go live in days, not months.</p>
          </div>
          <a
            href="#cta"
            className="shrink-0 bg-[#1a6bff] text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: '0 0 20px rgba(26,107,255,0.35)' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 35px rgba(26,107,255,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(26,107,255,0.35)' }}
          >
            Get a Free Demo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
