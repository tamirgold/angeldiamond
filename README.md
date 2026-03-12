# Angel Diamond - Landing Page

A modern, high-conversion landing page for angeldiamond.com built with React, Tailwind CSS, and Lucide-React.

## Brand Identity

- **Tone**: Institutional, Innovative, and Trustworthy
- **Color Palette**:
  - Deep Slate (#0f172a)
  - Emerald Accent (#10b981)
  - White/Light Gray for readability
- **Style**: Clean lines, generous whitespace, and glassmorphism effects

## Features

### Core Sections

1. **Hero Section**
   - Compelling headline and sub-headline
   - Clear CTAs for ventures and management services
   - Smooth scroll indicator

2. **Three Pillars**
   - PropTech Ventures (with betterdeal.ai highlight)
   - Commercial & Operational Management
   - Residential Portfolio

3. **Ecosystem Advantage**
   - Explains the synergy between investments and operations
   - Highlights competitive advantages

4. **Partners Marquee**
   - Auto-scrolling portfolio showcase

5. **Multi-Purpose Contact Form**
   - Dropdown for user type (Founder/Owner/Tenant/Other)
   - Clean, accessible form design

### Technical Highlights

- **Mobile-First**: Fully responsive design
- **Glassmorphism**: Modern glass effects on navigation and cards
- **Smooth Animations**: Hover effects and transitions
- **Modular Components**: Clean, maintainable code structure

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky glass header
│   ├── Hero.jsx            # Main hero section
│   ├── PillarGrid.jsx      # Three pillars section
│   ├── Ecosystem.jsx       # Ecosystem advantage
│   ├── Partners.jsx        # Portfolio marquee
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main app component
├── main.jsx                # App entry point
└── index.css              # Global styles & Tailwind

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing

## Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  'deep-slate': '#0f172a',
  'emerald-accent': '#10b981',
}
```

### Content

All content is contained within the component files. Update text, links, and data directly in:
- `src/components/Hero.jsx` - Main messaging
- `src/components/PillarGrid.jsx` - Three pillars content
- `src/components/Partners.jsx` - Portfolio partners list

### Form Handling

The contact form currently logs to console. Integrate with your backend by updating the `handleSubmit` function in `src/components/Contact.jsx`.

## License

All rights reserved.
