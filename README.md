# GraphiqNest - Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS v4, showcasing graphic design work and professional services.

## 🚀 Features

- **Next.js 15**: Latest version with enhanced performance and features
- **Tailwind CSS v4**: Modern CSS framework with simplified configuration
- **Mobile-First Design**: Fully responsive across all devices
- **Professional UI**: Clean, modern design with smooth animations
- **SEO Optimized**: Proper meta tags, structured data, and performance optimizations
- **Accessibility**: WCAG compliant with proper focus management
- **Performance**: Optimized images, lazy loading, and efficient bundling

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI + Shadcn/ui
- **Typography**: Space Grotesk + Inter fonts
- **Package Manager**: pnpm

## 📱 Mobile Responsive Features

- Responsive typography scaling
- Mobile-friendly navigation with hamburger menu
- Touch-optimized buttons and interactions
- Optimized images for different screen sizes
- Performance enhancements for mobile devices

## 🎨 Design System

### Colors

- **Primary**: Blue gradient theme (#3b82f6 to #60a5fa)
- **Background**: Dark slate (#0f172a)
- **Text**: Off-white (#f8fafc)
- **Accents**: Electric blue (#60a5fa)

### Typography

- **Display Font**: Space Grotesk
- **Body Font**: Inter
- **Responsive Text**: Custom responsive classes (.text-responsive-\*)

### Components

- Glass morphism effects
- Smooth scroll and parallax
- Custom focus states
- Hover animations
- Gradient text effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd rishabh-portfolio
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Start development server

   ```bash
   pnpm dev
   ```

4. Build for production

   ```bash
   pnpm build
   ```

## 📁 Project Structure

```rishabh-portfolio/
├── app/ # Next.js 15 app directory
│ ├── globals.css # Global styles and Tailwind imports
│ ├── layout.tsx # Root layout component
│ ├── page.tsx # Home page
│ └── [routes]/ # Additional pages
├── components/ # React components
│ ├── ui/ # Shadcn/ui components
│ └── [custom]/ # Custom components
├── data/ # Static data (projects, testimonials, etc.)
├── public/ # Static assets
└── styles/ # Additional stylesheets
```

## 🎯 Key Improvements Made

### 1. Next.js 15 Upgrade

- Removed deprecated configurations
- Updated to latest React patterns
- Improved build performance

### 2. Tailwind CSS v4 Integration

- Removed unnecessary config file
- Used modern import syntax
- Custom theme integration

### 3. Mobile Responsiveness

- Responsive typography system
- Mobile-optimized layouts
- Touch-friendly interactions
- Performance optimizations

### 4. Professional Code Quality

- TypeScript strict mode
- ESLint configuration
- Proper error handling
- Performance monitoring

### 5. SEO & Accessibility

- Semantic HTML structure
- Proper meta tags
- Alt text for images
- Keyboard navigation

## 🔧 Configuration

### Tailwind CSS v4

The project uses Tailwind CSS v4 with a simplified configuration approach:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark \*));
```

### Custom CSS Variables

Portfolio-specific colors and theme variables are defined in \`globals.css\`:

```css
:root {
  --charcoal: #0f172a;
  --off-white: #f8fafc;
  --neon-lime: #3b82f6;
  --electric-blue: #60a5fa;
  --muted-gray: #1e293b;
}
```

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Portfolio Owner

**GraphiqNest** - Graphic Design Studio & Creative Professional

- Portfolio: [graphiqnest.com](https://graphiqnest.com)
- WhatsApp: [+91 95291 55325](https://wa.me/919529155325)

## 🚀 Developer

**Sanyam Jain** - Full Stack Developer

- Website: [sanyam.software](https://sanyam.software/)
- Specialized in modern web development and portfolio solutions

---

Built with ❤️ using Next.js 15 and Tailwind CSS v4
