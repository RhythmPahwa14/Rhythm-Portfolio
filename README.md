# Rhythm Pahwa - Portfolio Website

A modern, performant portfolio website built with Next.js 14, featuring stunning animations, interactive elements, and optimized for exceptional user experience.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)

## Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Performance Optimized** - Lazy loading, code splitting, and GPU-accelerated animations
- **Interactive Animations** - Canvas-based particle effects with Intersection Observer optimization
- **Fully Responsive** - Mobile-first design that works on all devices
- **Fast Loading** - Optimized for Core Web Vitals with dynamic imports
- **Accessible** - ARIA compliant and keyboard navigable

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Montserrat (Google Fonts)
- **Deployment:** Vercel

## Project Structure

```
rhythm-portfolio/
├── src/
│   └── app/
│       ├── components/        # Reusable components
│       │   ├── AnimatedBackground.jsx
│       │   ├── Hero.js
│       │   ├── Navbar.jsx
│       │   ├── Footer.js
│       │   └── ...
│       ├── context/          # React Context (Theme)
│       ├── about/            # About page
│       ├── skills/           # Skills page
│       ├── projects/         # Projects page
│       ├── contact/          # Contact page
│       └── styles/           # CSS modules
├── public/                   # Static assets
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RhythmPahwa14/Rhythm-Portfolio.git
cd Rhythm-Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

Create an optimized production build:

```bash
npm run build
npm start
```

## Performance Optimizations

- **Lazy Loading:** Dynamic imports for route components
- **Canvas Optimization:** Animations pause when not in viewport
- **GPU Acceleration:** Transform and will-change CSS properties
- **Code Splitting:** Automatic code splitting with Next.js
- **Image Optimization:** Next.js Image component
- **Font Optimization:** next/font with Montserrat

## Customization

### Theme Colors
Edit theme colors in `src/app/globals.css`:
```css
.dark {
  --bg-primary: #111827;
  --text-primary: #f9fafb;
  /* ... */
}
```

### Animation Speed
Adjust animation speeds in components:
```javascript
const speed = 4; // Ball movement speed
const numDots = 20; // Number of animated dots
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Rhythm Pahwa**
- Website: [rhythmpahwa.tech](https://rhythmpahwa.tech)
- GitHub: [@RhythmPahwa14](https://github.com/RhythmPahwa14)
- LinkedIn: [pahwa-rhythm](https://linkedin.com/in/pahwa-rhythm/)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/RhythmPahwa14/Rhythm-Portfolio/issues).

## Show Your Support

Give a star if you like this project!

---

**Built with Next.js and Tailwind CSS**
