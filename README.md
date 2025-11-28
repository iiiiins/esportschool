# Esports Schools

A comprehensive learning platform for esports education, connecting students with professional coaches and offering courses to help develop skills in competitive gaming.

## Features

### Pages

- **Homepage** - Hero CTA, methodology overview, 7 pillars of esports excellence, featured articles, and bottom CTA
- **Courses** - Browse and filter courses by skill level and category
- **Staff Marketplace** - Find coaches and staff with filtering by category, price range, ratings, and reviews
- **Community** - Forum discussions, community stats, and top members
- **News** - Latest esports news and updates
- **Blog** - Articles, tips, and stories from the community
- **What is Esports** - Educational content about competitive gaming
- **About Us** - Team information, mission, values, and company stats

### Key Features

- **Staff Marketplace**: Filter coaches by:
  - Category (MOBA, FPS, Strategy, Battle Royale, etc.)
  - Price range
  - View ratings, reviews, specializations, languages, and availability

- **7 Pillars of Esports**:
  1. Game Knowledge
  2. Teamwork & Communication
  3. Mental Resilience
  4. Physical Health
  5. Strategic Thinking
  6. Practice & Discipline
  7. Career Development

- **Responsive Design**: Mobile-friendly layout that works on all screen sizes
- **Modern UI**: Built with Tailwind CSS v4 for a sleek, modern design

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon set

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd esportschool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
esportschool/
├── src/
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── CoursesPage.tsx
│   │   ├── StaffMarketplace.tsx
│   │   ├── CommunityPage.tsx
│   │   ├── NewsPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── WhatIsEsportsPage.tsx
│   │   └── AboutPage.tsx
│   ├── layouts/         # Layout components
│   │   └── MainLayout.tsx
│   ├── components/      # Reusable components
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── data/           # Mock data
│   │   └── mockData.ts
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind config
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Features to Add

- User authentication and authorization
- Backend API integration
- Real-time booking system for coaches
- Payment processing
- User profiles and progress tracking
- Live chat and messaging
- Video conferencing integration
- Course management system
- Admin dashboard

## License

MIT License

## Contact

For questions or support, please open an issue on GitHub.
