import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Studio', href: '#studio' },
  { label: 'E8 Pass', href: '#platform' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#cta' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setMobileOpen(false)}
      className="relative text-white/60 hover:text-white text-xs font-medium tracking-widest uppercase transition-colors duration-200 group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px bg-[#1a6bff] w-0 group-hover:w-full transition-all duration-300" />
    </a>
  )

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(7,7,9,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,245,240,0.08)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/e8-blue.png"
            alt="E8 Square"
            className="h-9 w-auto block animate-pulse-glow"
            style={{ filter: 'drop-shadow(0 0 8px rgba(26,107,255,0.35))' }}
          />
          <span className="font-serif font-bold text-xl text-white/90 hidden sm:block">
            E8<span className="text-[#1a6bff]">-Square</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink {...l} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="bg-[#1a6bff] text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: '0 0 20px rgba(26,107,255,0.35)' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 35px rgba(26,107,255,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(26,107,255,0.35)' }}
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px bg-white transition-transform duration-300"
            style={{ transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : '' }}
          />
          <span
            className="block w-6 h-px bg-white transition-opacity duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-white transition-transform duration-300"
            style={{ transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : '' }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 glass flex flex-col items-center gap-8 py-10"
          >
            {links.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="bg-[#1a6bff] text-white text-xs font-semibold tracking-widest uppercase px-8 py-3 rounded-sm"
              style={{ boxShadow: '0 0 20px rgba(26,107,255,0.35)' }}
            >
              Get a Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
