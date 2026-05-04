import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Platform from './components/Platform'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  // Re-register interactive elements for cursor after mount
  useEffect(() => {
    document.title = 'E8 Square | Premium SaaS & Digital Platform'
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Platform />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
