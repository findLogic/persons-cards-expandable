## About the Project

This web application was developed as part of a test assignment for PAREVO company. It allows viewing a list of users with search, filtering, and data detailing capabilities.

## Getting Started

### Prerequisites

- Node.js (v22+ recommended)
- npm (v11+ recommended)

### Installation

```bash
git clone https://github.com/findLogic/persons-cards-expandable.git
cd my-app
npm install
```

## Key Features

### Architecture

- Feature-Sliced Design for scalability and maintainability

### Technology Stack

- **React 19 + TypeScript** for type safety
- **Vite** — fast build and hot module replacement
- **Redux Toolkit + React Query** — state management and data caching
- **React Router** — page navigation
- **SCSS (Sass Embedded)** — modular styling

### Optimization

- Dynamic component loading (code splitting)
- API request caching via React Query
- Pre-rendering and lazy loading

## Functionality

### User List

- Data loading from custom Express server with Faker
- Search by name/email and filtering (city, company)
- Responsive cards/table display

## Development Tools

- **ESLint + Prettier** — code quality control
- **Husky + lint-staged** — pre-commit checks
- **React Query Devtools** — request debugging
