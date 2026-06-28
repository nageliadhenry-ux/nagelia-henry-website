# Nagelia Henry — Personal Brand Website

Premium Next.js 14 personal brand website.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (animations)

## Get Started

```bash
cd nagelia-henry-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/work` | Work & Projects |
| `/content` | Content Creation |
| `/leadership` | Leadership |
| `/resume` | Resume |
| `/contact` | Contact |

## Images
All images live in `public/images/`. Replace or add files here:
- `public/images/headshot.jpg` — Hero / About photo
- `public/images/photography/` — Event & leadership photos
- `public/images/projects/` — Project thumbnails
- `public/images/social/` — Social media screenshots

## Deploy
```bash
npm run build    # Build for production
npm start        # Run production server
```

Recommended: deploy to **Vercel** — connect your GitHub repo and it auto-deploys on every push.

## Contact Form
The contact form currently opens the user's email client via `mailto:`. To add a real form backend, integrate [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) in `app/contact/page.tsx`.
