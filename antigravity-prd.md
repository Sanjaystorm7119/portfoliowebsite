text
# Product Requirements Document (PRD): AntiGravity Portfolio Replica

## Overview
This PRD outlines the requirements to build an **exact replica** of https://www.zzzzshawn.cloud/ rebranded for **AntiGravity** using Next.js 14+. The site maintains the modern, minimalist design with smooth animations, dark mode support, and developer-focused content showcasing AntiGravity projects, skills, and experience.

**Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui components.

## Key Features & Sections
The replica must include these core sections with identical layout, animations, and interactions:

- **Hero Section**: Full-viewport animated intro with AntiGravity profile image, name, tagline, and CTA buttons
- **Navigation**: Fixed/sticky navbar with smooth scroll links (Home, About, Projects, Contact)
- **About Section**: Timeline of AntiGravity experience, skills grid, tech stack showcase
- **Projects Section**: Grid of AntiGravity project cards with hover effects, live demo links, GitHub repos
- **Contact Section**: Form with email integration, AntiGravity social links
- **Footer**: AntiGravity copyright, social icons, back-to-top button

## Design & Layout Requirements

### Visual Style
Primary Colors (AntiGravity Theme):

Dark: #0a0a0a, #1a1a1a, #ffffff (text)

Light: #ffffff, #f8fafc, #000000 (text)

AntiGravity Accents:

#00d4ff (cyan glow)

#7c3aed (violet)

#06ffa5 (neon green)

Typography:

Headings: Inter Black (display), Inter Bold (h2-h3)

Body: Inter Regular/Medium

Sizes: 4.5rem (hero), 3rem (h2), 1.25rem (body)

text

### Responsive Breakpoints
| Breakpoint | Width | Layout |
|------------|-------|--------|
| Desktop | >1024px | Primary design |
| Tablet | 768px-1023px | Adjusted spacing |
| Mobile | <768px | Stacked layouts, hamburger menu |

### Animations (Framer Motion)
Hero: Staggered entrance (image → text → buttons) with AntiGravity particle effects

Scroll Reveal: Fade-up on all sections (y: 50px, opacity: 0 → 1)

Project Cards: Scale + cyan glow shadow on hover

Navbar: Slide-down on scroll

Dark Mode: Smooth AntiGravity color transitions

text

## Technical Requirements

### Project Structure
antigravity-portfolio/
├── app/
│ ├── layout.tsx (global styles, theme provider)
│ ├── page.tsx (hero + sections)
│ ├── globals.css (tailwind + antigravity custom)
│ └── favicon.ico
├── components/
│ ├── ui/ (shadcn components)
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── Projects.tsx
│ ├── Contact.tsx
│ └── Footer.tsx
├── lib/
│ ├── utils.ts
│ └── cn.ts (className helper)
├── public/
│ ├── antigravity-profile.jpg
│ └── assets/
└── content/
├── antigravity-projects.json
└── antigravity-experience.json

text

### Dependencies
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11.0.0",
    "tailwindcss": "^3.4.0",
    "next-themes": "^0.3.0",
    "@radix-ui/react-*": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "lucide-react": "^0.400.0"
  }
}
Component Breakdown
Navbar (Fixed, Dark BG)
text
- Logo: "AntiGravity" (custom font-weight, cyan gradient)
- Links: Home, About, Projects, Contact (smooth scroll)
- Theme Toggle: Sun/Moon icon with glow effect
- Mobile: Hamburger → Fullscreen menu
Hero Section (100vh)
text
Left: AntiGravity profile image (circular, floating + particle animation)
Right: 
| Hi, I'm AntiGravity    | (subtitle)
| Full Stack Developer   | (h1, cyan→violet gradient text)
| Crafting exceptional...| (description)
[View Work] [Let's Talk] | (AntiGravity gradient buttons)
Projects Grid (3-col desktop, 1-col mobile)
text
Each AntiGravity Card:
- Thumbnail (hover zoom + cyan glow)
- Title + AntiGravity tech stack badges
- Description (2 lines)
- Links: Live Demo ↗, GitHub ↗
AntiGravity Content Structure
typescript
// lib/antigravity-content.ts
export const antigravityProjects = [
  {
    title: "Quantum Dashboard",
    description: "Real-time analytics platform with particle physics...",
    tech: ["Next.js", "Tailwind", "Three.js", "AntiGravity Core"],
    demo: "https://...",
    github: "https://...",
    image: "/antigravity/quantum-dashboard.jpg"
  },
  {
    title: "Zero-G Ecommerce",
    description: "Frictionless shopping experience with anti-gravity UX...",
    tech: ["Next.js", "Strapi", "Framer Motion"],
    demo: "https://...",
    github: "https://...",
    image: "/antigravity/zero-g-ecommerce.jpg"
  }
]
Performance Requirements
Lighthouse Score: 95+ (Performance, Accessibility, Best Practices)

Core Web Vitals: LCP <1.5s, FID <100ms, CLS <0.1

Bundle Size: <200KB gzipped

Image Optimization: Next/Image with WebP/AVIF

SEO: Dynamic meta tags, Open Graph, sitemap.xml

Development Tasks
Phase 1: Setup & Base
 Next.js 14 + TypeScript project (antigravity-portfolio)

 Tailwind + shadcn/ui setup

 AntiGravity theme provider (dark/light)

 Global fonts (Inter)

 Navbar component with AntiGravity branding

Phase 2: Core Sections
 Hero (full viewport + AntiGravity particle animations)

 About (AntiGravity timeline + skills)

 AntiGravity projects grid

 Contact form

Phase 3: Polish & Deploy
 Mobile responsiveness

 AntiGravity scroll animations + particle systems

 Performance optimization

 Deploy to Vercel (antigravity-portfolio.vercel.app)

 PWA setup

Exact AntiGravity Visual Matches Required
Hero gradient: Linear cyan→violet on h1 text

Card shadows: 0 25px 50px -12px rgba(0,212,255,0.3)

AntiGravity Button gradients:

text
bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]
hover:from-[#7c3aed] hover:to-[#06ffa5]
Scroll behavior: scroll-behavior: smooth

AntiGravity Cursor: Custom pointer with cyan trail effect

Success Criteria
✅ Visually identical to https://www.zzzzshawn.cloud/ with AntiGravity branding

✅ Perfect responsive behavior across devices

✅ Smooth 60fps AntiGravity animations + particle effects

✅ Lighthouse 95+ scores

✅ Deployed on Vercel as antigravity-portfolio
