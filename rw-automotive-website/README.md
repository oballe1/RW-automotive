# RW General Automotive and Tire Services - Website

A modern, professional, and fully responsive website for RW General Automotive and Tire Services in Douglasville, GA.

## Features

### ✅ Implemented Features

1. **Responsive Design**
   - Mobile-first approach
   - Fully responsive on all devices (mobile, tablet, desktop)
   - Touch-friendly navigation and CTAs

2. **SEO Optimized**
   - Schema.org markup (LocalBusiness, Organization)
   - Optimized meta tags and descriptions
   - Semantic HTML structure
   - Keyword-optimized content
   - Open Graph tags for social sharing

3. **Core Pages**
   - **Homepage**: Hero section, services overview, testimonials, CTAs
   - **Services Page**: Comprehensive service listings
   - **Service Detail Pages**: Brake repair (example with full SEO)
   - **Appointment Booking**: Online appointment request form
   - **Tire Finder Tool**: Interactive tire search by vehicle
   - **Contact Page**: Contact form with Google Maps integration

4. **Key Components**
   - Sticky navigation with mobile menu
   - Professional header with business info
   - Comprehensive footer with sitemap
   - Call-to-action buttons throughout
   - Customer testimonials section
   - Schema markup for local SEO

5. **Interactive Features**
   - Online appointment booking system
   - Tire finder tool with vehicle search
   - Contact form with validation
   - Click-to-call phone numbers
   - Google Maps integration

## Tech Stack

- **Framework**: Next.js 15 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: next-seo, Schema.org markup

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rw-automotive-website/
├── app/                     # Next.js app directory
│   ├── layout.tsx          # Root layout with SEO meta tags
│   ├── page.tsx            # Homepage
│   ├── services/           # Services pages
│   │   ├── page.tsx        # Services overview
│   │   ├── repairs/        # Repair services
│   │   ├── maintenance/    # Maintenance services
│   │   ├── fleet/          # Fleet services
│   │   └── tire-services/  # Tire services
│   ├── tires/              # Tire finder tool
│   ├── used-cars/          # Used car inventory
│   ├── truck-rental/       # Truck rental
│   ├── appointment/        # Online booking
│   ├── contact/            # Contact form & map
│   ├── reviews/            # Customer reviews
│   ├── about/              # About us
│   ├── privacy-policy/     # Privacy policy
│   ├── terms/              # Terms of service
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── Header.tsx          # Navigation & top bar
│   ├── Footer.tsx          # Footer with sitemap
│   └── SchemaMarkup.tsx    # SEO schema markup
├── docker/                 # Docker configuration (NEW)
│   ├── Dockerfile          # Container build
│   ├── docker-compose.yml  # Orchestration
│   ├── .dockerignore       # Build exclusions
│   ├── scripts/            # Helper scripts
│   │   ├── start.sh        # Start containers
│   │   ├── stop.sh         # Stop containers
│   │   ├── logs.sh         # View logs
│   │   ├── rebuild.sh      # Rebuild containers
│   │   └── status.sh       # Check status
│   └── README.md           # Docker docs
├── public/                 # Static assets
└── DOCKER_DEPLOYMENT.md    # Deployment guide
```

## SEO Strategy

### Primary Keywords
- auto repair Douglasville GA
- tire shop Douglasville
- oil change near me
- brake repair Douglasville Georgia

### On-Page SEO
- Optimized title tags (55-60 characters)
- Meta descriptions (150-155 characters)
- Proper H1-H6 heading hierarchy
- Alt text for all images
- Internal linking structure
- Schema markup for local business

### Local SEO
- Google Business Profile integration
- NAP (Name, Address, Phone) consistency
- Local keywords throughout content
- Service area pages
- Customer reviews integration

## Performance Optimization

- Mobile-first responsive design
- Lazy loading for images
- Optimized fonts (Inter)
- Minimal JavaScript bundle size
- Fast page load times (<2 seconds target)

## Customization

### Update Business Information

Edit the following files to update business details:

1. **app/layout.tsx** - Meta tags and SEO info
2. **components/Header.tsx** - Phone number, address in top bar
3. **components/Footer.tsx** - Footer contact info
4. **components/SchemaMarkup.tsx** - Schema.org data

### Add New Services

1. Create a new folder in `app/services/[service-name]/`
2. Add `page.tsx` with service details
3. Update navigation in `components/Header.tsx`
4. Add service to homepage services section

### Change Colors/Branding

Edit `tailwind.config.ts` to customize:
- Primary colors (currently red-600)
- Font families
- Spacing and sizing

## Deployment

### Docker (Recommended)

All Docker configuration is now cleanly organized in the `docker/` directory.

**Quick Start:**
```bash
cd docker
./scripts/start.sh
```

**See detailed documentation:**
- [docker/README.md](docker/README.md) - Docker setup and scripts
- [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) - Production deployment guide

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Next Steps / Future Enhancements

1. **Backend Integration**
   - Connect appointment booking to email/CRM
   - Real tire inventory management
   - Customer portal for service history

2. **Additional Features**
   - Blog/auto tips section
   - Special offers page
   - Used car inventory system
   - Service price estimator
   - Customer reviews from Google/Facebook API

3. **Advanced SEO**
   - Blog content strategy
   - Local citation building
   - Review generation system
   - Video content integration

4. **Analytics**
   - Google Analytics 4
   - Conversion tracking
   - Heat maps (Hotjar)
   - A/B testing

## Support

For questions or issues with the website:
- Email: info@rwautomotive.com
- Phone: (404) 429-0256

## License

© 2025 RW General Automotive and Tire Services. All rights reserved.
