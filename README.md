# E8-Square Website

## Quick Start

**To run locally:** Just open `index.html` in any modern browser. No build tools, no dependencies, no Node.js required.

## Hosting Options

### Option 1 — Netlify (Recommended, Free)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag and drop the `e8-square` folder onto the Netlify dashboard
3. Your site is live instantly with a free `.netlify.app` URL
4. Add your custom domain in Settings > Domain Management

### Option 2 — GitHub Pages (Free)
1. Create a GitHub repo named `e8-square`
2. Upload `index.html` to the root of the repo
3. Go to Settings > Pages > Deploy from branch `main`
4. Live at `yourusername.github.io/e8-square`

### Option 3 — Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo or drag & drop folder
3. Deploy in one click

### Option 4 — Traditional Web Host (cPanel, etc.)
Upload `index.html` to your `public_html` or `www` root directory via FTP or File Manager.

---

## Customization Guide

### Update Booking Link
Find the two `<a href="#">Book Appointment</a>` buttons and replace `#` with your actual booking URL (Calendly, Square Appointments, etc.)

### Update Social Links
In the footer, find:
```html
<a href="#">Instagram</a>
<a href="#">Twitter</a>
<a href="#">LinkedIn</a>
```
Replace `#` with your actual profile URLs.

### Update Demo Request Link
Find `<a href="#">Request a Demo</a>` and link to a form (Typeform, Google Form, etc.)

### Change Colors
All colors are CSS variables at the top of the `<style>` block:
```css
--blue: #1a6bff;   /* Change accent color here */
--bg: #070709;     /* Main background */
--white: #f5f5f0;  /* Primary text */
```

### Update Business Info
- Replace service descriptions with your actual pricing/details
- Update footer copyright year and social links
- Add your phone number / address in the footer if desired

---

## Structure
```
e8-square/
├── index.html   ← The entire website (single file)
└── README.md    ← This file
```

## Features Included
- ✅ Custom animated chess king cursor
- ✅ Animated hero with floating king symbol
- ✅ Dual-brand split panel (Studio + SaaS)
- ✅ 8 barbershop service cards
- ✅ 6 SaaS platform feature cards
- ✅ Scroll-reveal animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Mobile hamburger navigation
- ✅ Dual CTA section with chess divider
- ✅ Chess-pattern backgrounds & accents
- ✅ Blue neon glow effects
- ✅ No dependencies — loads instantly
