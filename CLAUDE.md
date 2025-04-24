# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Run development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Code Style Guidelines
- **Imports**: Group imports by type (React, Next.js, components, utilities)
- **Component structure**: Use named exports for components with JSX file extension
- **Naming**: Components use PascalCase, files use snake_case, functions use camelCase
- **CSS**: Use Tailwind CSS utility classes for styling
- **Props**: When destructuring props with many parameters, stack them vertically
- **State management**: Use React hooks for state management
- **Client components**: Mark client-side components with "use client" directive
- **Path aliases**: Use @/ for imports from project root (configured in jsconfig.json)
- **UI components**: Leverage Radix UI components from the /components/ui/ directory
- **Error handling**: Use try/catch blocks for async operations
- **Responsiveness**: Design for mobile-first, use conditional classes for larger screens