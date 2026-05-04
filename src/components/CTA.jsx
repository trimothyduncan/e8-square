import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section
      id="cta"
      className="relative py-[100px] px-[5%] bg-[#13131a] overflow-hidden"
    >
      {/* Chess bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(26,107,255,0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(26,107,255,0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(26,107,255,0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(26,107,255,0.03) 75%)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 0 25px, 25px -25px, -25px 0',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0 items-start">

          {/* Left — Studio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="px-0 md:pr-14 py-12"
          >
            <p className="text-[#1a6bff] text-[0.7rem] tracking-[0.3em] uppercase font-medium mb-4">The Studio</p>
            <h3 className="font-serif font-bold text-[1.8rem] leading-[1.25] mb-4">
              Ready for Your<br />Next Move?
            </h3>
            <p className="text-white/60 text-[0.88rem] leading-[1.7] mb-8">
              Book your appointment at E8-Square Studio. Precision cuts, premium services, no wait. Secure your seat at the board.
            </p>
            <a
              href="mailto:e8square@gmail.com?subject=Booking Request"
              className="inline-flex items-center gap-2 bg-[#1a6bff] text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: '0 0 20px rgba(26,107,255,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 35px rgba(26,107,255,0.6)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(26,107,255,0.35)' }}
            >
              Book Appointment →
            </a>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block self-stretch">
            <div
              className="w-px h-full relative"
              style={{ background: 'linear-gradient(to bottom, transparent, #1a6bff, transparent)' }}
            >
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1a6bff] text-xl bg-[#13131a] py-2"
              >
                ♚
              </span>
            </div>
          </div>

          {/* Right — Platform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="px-0 md:pl-14 py-12"
          >
            <p className="text-[#1a6bff] text-[0.7rem] tracking-[0.3em] uppercase font-medium mb-4">The Platform</p>
            <h3 className="font-serif font-bold text-[1.8rem] leading-[1.25] mb-4">
              Launch E8 Pass<br />for Your Business.
            </h3>
            <p className="text-white/60 text-[0.88rem] leading-[1.7] mb-8">
              Ready to build a digital loyalty program for your clients? Let's talk strategy. Get a free platform demo tailored to your business model.
            </p>
            <a
              href="mailto:e8square@gmail.com?subject=E8 Pass Demo Request"
              className="inline-flex items-center gap-2 border border-[rgba(26,107,255,0.5)] text-[#1a6bff] text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all duration-300 hover:bg-[rgba(26,107,255,0.12)] hover:-translate-y-0.5"
            >
              Request Free Demo →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
