# Biogax - Sustainable Biogas Energy for Modern Agriculture

Biogax is a premium, high-performance landing page and platform designed for an environmental energy company. It specializes in converting organic waste into clean, sustainable biogas energy for farms, helping them reduce costs and environmental impact.

![Biogax Preview](https://biogax.vercel.app/hero-bg.webp)

## 🚀 Live Demo

Check out the live site: [biogax.vercel.app](https://biogax.vercel.app)

---

## ✨ Features

- **Modern Responsive Design**: A mobile-first, premium aesthetic using liquid glass effects and a nature-inspired color palette.
- **Infinite Project Marquee**: A seamless, auto-scrolling gallery of project implementation images powered by Framer Motion.
- **Dynamic Content**: Centralized data layer for Projects, Blog Posts, and Leadership profiles.
- **Interactive Assessment Form**: A focused, single-column energy assessment form for lead generation.
- **Optimized User Experience**:
    - **Scroll Restoration**: Automatically scrolls to top on page navigation.
    - **Dynamic Tab Titles**: Browser tab titles update based on the current page.
    - **Smooth Animations**: Micro-interactions and entry animations using Framer Motion.
- **SEO Ready**: Semantic HTML, descriptive meta titles, and optimized performance.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Build Tool**: [Bun](https://bun.sh/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI components (Hero, Navbar, Footer, etc.)
│   ├── ui/          # Low-level UI primitives (buttons, inputs)
│   └── layout/      # Layout wrappers
├── data/            # Static data stores (projects.ts, blogs.ts, authors.ts)
├── hooks/           # Custom React hooks (usePageTitle)
├── pages/           # Main route components (HomePage, ProjectsPage, etc.)
├── assets/          # Global styles and public assets
└── main.tsx         # Application entry point
```

---

## ⚙️ Development

### Prerequisites

- [Bun](https://bun.sh/) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ugbodagadave/biogax.git
   cd biogax
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

### Building for Production

To create a production build:
```bash
bun run build
```

---

## 🔧 Vercel Deployment

The project is configured for seamless deployment on Vercel.

1. Ensure the Vercel CLI is installed: `bun add -g vercel`
2. Run the deployment command:
   ```bash
   vercel --prod
   ```
*Note: The `vercel.json` file handles SPA routing (rewrites) to prevent 404 errors on direct navigation.*

---

## 📄 License

Copyright © 2026 Biogax Energy Solutions. All rights reserved.
