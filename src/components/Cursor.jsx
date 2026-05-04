import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Hidden on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onEnterInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 24}px, ${ringY - 24}px) scale(1.8)`
        ringRef.current.style.borderColor = 'rgba(26,107,255,0.8)'
      }
    }
    const onLeaveInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.borderColor = 'rgba(26,107,255,0.5)'
      }
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
      }
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ background: '#1a6bff', transition: 'opacity 0.15s ease' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] rounded-full pointer-events-none z-[9998]"
        style={{
          border: '1px solid rgba(26,107,255,0.5)',
          transition: 'transform 0.05s linear, border-color 0.3s ease, opacity 0.3s',
        }}
      />
    </>
  )
}
