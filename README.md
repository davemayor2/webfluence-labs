# Webfluence Labs Website

A modern, pixel-perfect website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Satoshi (headings), Geist/Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── PortfolioSlider.tsx # Portfolio preview slider
│   ├── Services.tsx        # Services section
│   ├── WhyChooseUs.tsx     # Why Choose Us section
│   ├── Testimonials.tsx    # Testimonials section
│   ├── Pricing.tsx         # Pricing plans section
│   ├── CTA.tsx             # Call-to-action section
│   ├── FAQ.tsx             # FAQ accordion
│   └── Footer.tsx          # Footer
├── public/
│   ├── *.png               # Images
│   ├── *.svg               # Icons
│   └── portfolio/          # Portfolio images
└── ...
```

## Brand Colors

- **Primary Blue (Buttons)**: `#00B1D5`
- **Primary Blue Light**: `#90E0EF`
- **Background**: Black/Dark (`#000000`)
- **Text**: White

## Fonts

### Satoshi (Headings)
Currently using Inter as a fallback. To use Satoshi:

1. Download Satoshi font files
2. Place them in `/public/fonts/` directory
3. Update `app/layout.tsx` to use local fonts

### Geist (Body)
Using Inter (Google Fonts) as Geist. Can be replaced with actual Geist font if preferred.

## Customization

All components are modular and can be easily customized:

- **Colors**: Update `tailwind.config.ts`
- **Content**: Edit component files in `/components`
- **Styling**: Modify Tailwind classes in components
- **Images**: Replace images in `/public` directory

## Building for Production

```bash
npm run build
npm start
```

## Notes

- The website is designed to be pixel-perfect based on the Figma design
- All sections are fully responsive
- Images should be optimized for web (consider using Next.js Image optimization)
- Fonts may need to be configured based on your font file availability

