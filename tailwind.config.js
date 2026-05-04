/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1a6bff',
          glow: 'rgba(26,107,255,0.35)',
          dim: 'rgba(26,107,255,0.12)',
          25: 'rgba(26,107,255,0.25)',
          10: 'rgba(26,107,255,0.10)',
          6: 'rgba(26,107,255,0.06)',
        },
        bg: {
          DEFAULT: '#070709',
          2: '#0e0e12',
          3: '#13131a',
        },
        white: {
          DEFAULT: '#f5f5f0',
          dim: 'rgba(245,245,240,0.6)',
          faint: 'rgba(245,245,240,0.08)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        blue: '0 0 30px rgba(26,107,255,0.35), 0 0 60px rgba(26,107,255,0.15)',
        'blue-lg': '0 0 45px rgba(26,107,255,0.65), 0 0 90px rgba(26,107,255,0.2)',
      },
      animation: {
        'grid-shift': 'grid-shift 20s linear infinite',
        'glow-breathe': 'glow-breathe 4s ease-in-out infinite',
        'king-float': 'king-float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
      keyframes: {
        'grid-shift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(80px)' },
        },
        'glow-breathe': {
          '0%,100%': { opacity: '0.7', transform: 'translate(-50%,-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translate(-50%,-50%) scale(1.15)' },
        },
        'king-float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%,100%': { filter: 'drop-shadow(0 0 8px rgba(26,107,255,0.35))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(26,107,255,0.6)) drop-shadow(0 0 40px rgba(26,107,255,0.2))' },
        },
        'scroll-line': {
          '0%': { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { opacity: '0', transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
