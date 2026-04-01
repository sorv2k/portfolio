# Sourav Guruprasad - Portfolio Website

A modern, responsive portfolio website showcasing my software engineering experience, projects, and skills.

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling and responsive design
- **Framer Motion** - Smooth scroll animations
- **React Icons** - Icon library

## Features

- 🌗 Dark-themed design with teal accent colors
- 🎨 Smooth scroll-triggered animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast and optimized with Vite
- ♿ Accessible navigation and keyboard support

## Sections

1. **Hero** - Introduction with social links
2. **Skills** - Technical skills grouped by category
3. **Experience** - Professional work experience
4. **Projects** - Featured projects with tech stacks
5. **Education** - Academic background
6. **Contact** - Get in touch with email and LinkedIn

## Getting Started

### Prerequisites

- Node.js 16+ installed

### Installation

Dependencies are already installed. If needed:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── assets/          # Static assets (add headshot.jpg here)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles & Tailwind
│   └── main.jsx         # Entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Add Your Photo

Place your headshot image at `public/assets/headshot.jpg` (recommended: 400x400px, rounded).

### Update Content

Edit the component files in `src/components/` to update:
- Contact information
- Work experience
- Projects
- Skills
- Education

### Colors

Custom colors are defined in `src/index.css`:
- `--color-dark-bg`: Main background
- `--color-dark-secondary`: Secondary background
- `--color-dark-card`: Card backgrounds
- `--color-accent`: Accent color (teal)
- `--color-accent-hover`: Hover state

## Deployment

This portfolio can be deployed to:
- **Vercel** - `npm run build` then deploy `dist/`
- **Netlify** - Connect your repo and deploy
- **GitHub Pages** - Use `gh-pages` package
- **AWS Amplify** - Connect and deploy

## Contact

- **Email**: sourav.guruprasad15@gmail.com
- **LinkedIn**: [linkedin.com/in/souravguruprasad](https://linkedin.com/in/souravguruprasad)
- **GitHub**: [github.com/sorv2k](https://github.com/sorv2k)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
