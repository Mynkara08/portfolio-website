# Mayank Kumar Portfolio - Full Stack Web Application

## Overview

This is a full-stack web application built as a personal portfolio for Mayank Kumar, a Software Developer and Android Enthusiast. The application features a modern, responsive design with a React frontend and Express backend, showcasing professional experience, projects, skills, and providing a contact form for potential employers or collaborators.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animation**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **Validation**: Zod schemas shared between frontend and backend

### Development Environment
- **Deployment**: Replit-optimized with development tooling
- **Development Server**: Concurrent frontend (Vite) and backend (Express) servers
- **TypeScript**: Strict mode enabled with path mapping
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling to sections
- **Hero Section**: Professional introduction with profile image
- **About Section**: Detailed background and education information
- **Projects Section**: Showcase of key projects with technologies used
- **Skills Section**: Technical skills with animated progress bars
- **Contact Section**: Form submission with toast notifications
- **Footer**: Social links and contact information

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Storage Layer**: Abstracted storage interface (currently in-memory, ready for database)
- **Validation**: Shared Zod schemas for type safety
- **Error Handling**: Centralized error middleware
- **Development Tools**: Request logging and error overlay

### UI System
- **Design System**: shadcn/ui components with consistent styling
- **Theming**: CSS custom properties for light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Inter font family for professional appearance
- **Icons**: Lucide React for consistent iconography

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. React Hook Form validates input using Zod schema
3. Form data is sent to `/api/contact` endpoint via POST request
4. Backend validates data against shared schema
5. Contact is stored in database (currently in-memory storage)
6. Success/error response triggers toast notification
7. Form resets on successful submission

### Data Storage
- **Current**: In-memory storage with Map-based implementation
- **Future**: PostgreSQL database with Drizzle ORM
- **Schema**: Contacts table with id, name, email, subject, message, and timestamp

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, React Query
- **Database**: Drizzle ORM, Neon Database serverless client
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Validation**: Zod for runtime type checking
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Animation**: Framer Motion for UI animations
- **Build Tools**: Vite, esbuild, TypeScript

### Development Dependencies
- **Replit Integration**: Cartographer plugin, runtime error modal
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Development Server**: Express with middleware for API routes

## Deployment Strategy

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Database: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: NODE_ENV=development with hot reload
- **Production**: NODE_ENV=production with optimized builds
- **Database**: DATABASE_URL environment variable for PostgreSQL connection

### Replit Deployment
- Configured for Replit environment with development banners
- Automatic builds and deployments
- Environment variable management through Replit secrets

## Changelog

- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.