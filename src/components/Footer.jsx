import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const studioLinks = ['Haircuts', 'Beard Sculpt', 'Hot Towel Shave', 'Facials', 'Color Services', 'Book Now']
const platformLinks = ['Membership Passes', 'Loyalty Programs', 'Digital Coupons', 'Points & Rewards', 'Business Dashboard', 'Request Demo']
const companyLinks = ['About E8 Square', 'Our Story', 'Contact', 'Privacy Policy', 'Terms of Service']

export default function Footer() {
  const { ref, isInView } = useScrollReveal()

  return (
    <footer className="relative bg-[#0e0e12]">
      {/* Chess border top */}
      <div
        className="h-3"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.03) 75%)
          `,
          backgroundSize: '12px 12px',
          backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0',
        }}
      />
      <div className="h-px bg-gradient-to-r from-transparent via-[#1a6bff] to-transparent opacity-60" />

      <div ref={ref} className="px-[5%] py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/e8-blue.png"
                alt="E8 Square"
                className="h-10 w-auto"
                style={{ filter: 'drop-shadow(0 0 8px rgba(26,107,255,0.35))' }}
              />
              <span className="font-serif font-bold text-lg">
                E8<span className="text-[#1a6bff]">-Square</span>
              </span>
            </div>
            <p className="text-white/50 text-[0.85rem] leading-[1.7] max-w-[260px]">
              A premium grooming studio and digital wallet platform. Where strategy meets style — and kings get their edge.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {['Twitter/X', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-sm border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#1a6bff] hover:border-[rgba(26,107,255,0.4)] transition-colors duration-200"
                >
                  {social === 'Twitter/X' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social === 'Instagram' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth={0} />
                    </svg>
                  )}
                  {social === 'LinkedIn' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* The Studio */}
          <div>
            <p className="text-white/90 text-[0.8rem] font-semibold tracking-[0.15em] uppercase mb-5">The Studio</p>
            <ul className="flex flex-col gap-3">
              {studioLinks.map((l) => (
                <li key={l}>
                  <a href="#studio" className="text-white/50 text-[0.85rem] hover:text-[#1a6bff] transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* E8 Pass */}
          <div>
            <p className="text-white/90 text-[0.8rem] font-semibold tracking-[0.15em] uppercase mb-5">E8 Pass</p>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((l) => (
                <li key={l}>
                  <a href="#platform" className="text-white/50 text-[0.85rem] hover:text-[#1a6bff] transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/90 text-[0.8rem] font-semibold tracking-[0.15em] uppercase mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 text-[0.85rem] hover:text-[#1a6bff] transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[0.8rem]">
            © {new Date().getFullYear()} E8-Square. All rights reserved.
          </p>
          <p className="text-white/30 text-[0.8rem] flex items-center gap-2">
            <span className="text-[#1a6bff]">♚</span> Where Kings Play
          </p>
        </div>
      </div>
    </footer>
  )
}
