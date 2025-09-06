# DevWorks Portfolio Website

## Overview

This is a full-stack portfolio website for DevWorks, a digital agency showcasing web development, UI/UX design, e-commerce solutions, and mobile applications. The application features a modern dark-themed single-page design with multiple sections including services, portfolio, testimonials, pricing, and a contact form. Built with React and Express.js, it demonstrates contemporary web development practices with a responsive design system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system for consistent, accessible interface elements
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting dark mode by default
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for consistency and type safety
- **Development**: tsx for TypeScript execution in development mode
- **Production**: esbuild for efficient bundling and deployment

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development and testing

### API Structure
- **Contact Management**: RESTful endpoints for contact form submissions and retrieval
- **Error Handling**: Centralized error handling with Zod validation for request data
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging

### Authentication and Authorization
- **Session Management**: Prepared for PostgreSQL-based sessions using connect-pg-simple
- **User Schema**: Defined user table structure with username/password authentication ready for implementation

## External Dependencies

### UI and Design
- **Component Library**: Extensive Radix UI ecosystem for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer for cross-browser compatibility
- **Fonts**: Google Fonts integration (Inter, JetBrains Mono) for typography

### Database and ORM
- **Database Provider**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Zod for schema validation
- **Migrations**: Drizzle Kit for database schema management

### Development Tools
- **Type Checking**: TypeScript compiler with strict configuration
- **Build Tools**: Vite with React plugin and custom error overlay for development
- **Replit Integration**: Vite plugins for Replit development environment support

### Form Handling
- **Validation**: Zod for runtime type validation and form schema definition
- **Form Management**: React Hook Form with Hookform Resolvers for form state management
- **UI Feedback**: Toast notifications for user feedback on form submissions

### Utilities
- **Styling**: clsx and tailwind-merge for conditional CSS classes
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel React for image/content sliders
- **Command Interface**: cmdk for command palette functionality