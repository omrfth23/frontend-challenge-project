# Portfolio Website 

Professional portfolio and resume website built with modern web technologies, featuring multi-language support and dark mode functionality.

## 📋 Project Overview

This project is a responsive, production-ready portfolio website showcasing professional skills, projects, and experience. It serves as a full-stack developer's digital resume with interactive features and a clean, modern user interface.

## ✨ Features

- **Multi-Language Support**: English and Turkish language toggle
- **Dark Mode**: Theme switcher for light and dark modes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Modular and maintainable React components
- **State Management**: Context API for language and theme management
- **E2E Testing**: Comprehensive Cypress test suite
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Professional Styling**: Tailwind CSS with custom configurations
- **Notifications**: Toast notifications using react-toastify

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 3.4
- **State Management**: React Context API
- **HTTP Client**: Axios 1.13
- **Icons**: Lucide React 0.563
- **Notifications**: React-Toastify 11.0
- **Testing**: Cypress 14.5
- **Code Quality**: ESLint 9.39
- **CSS Tools**: PostCSS, Autoprefixer

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header/          # Navigation and language/theme toggles
│   ├── Hero/            # Hero section with introductory content
│   ├── Skills/          # Technical skills showcase
│   ├── Profile/         # Personal profile and about me section
│   ├── Projects/        # Project portfolio display
│   ├── Footer/          # Footer with contact information
│   └── LanguageToggle/  # Language switcher component
├── context/             # React Context providers
│   ├── LanguageContext.jsx    # Language state management
│   └── ThemeContext.jsx       # Dark mode theme management
├── data/                # Content data
│   ├── en.json         # English content
│   └── tr.json         # Turkish content
├── services/           # API and external services
│   └── api.js         # Axios API configuration
├── assets/            # Images and static files
├── App.jsx            # Main application component
└── main.jsx           # React entry point

cypress/
├── e2e/               # End-to-end test files
│   ├── header.cy.js
│   ├── hero.cy.js
│   ├── skills.cy.js
│   ├── profile.cy.js
│   ├── projects.cy.js
│   ├── footer.cy.js
│   └── language.cy.js
└── support/           # Cypress support files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd s6-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run cypress` | Open Cypress Test Runner (interactive mode) |
| `npm run test:e2e` | Run Cypress tests in headless mode |

## 🧪 Testing

The project includes comprehensive end-to-end tests using Cypress covering:

- Header navigation and interactions
- Hero section content
- Skills display
- Profile section functionality
- Projects portfolio
- Footer content
- Language toggle functionality

### Run Tests

**Interactive Mode:**
```bash
npm run cypress
```

**Headless Mode:**
```bash
npm run test:e2e
```

## 🎨 Customization

### Add New Content

1. **Update JSON Data**: Modify `src/data/en.json` and `src/data/tr.json` with your content
2. **Edit Components**: Update React components in `src/components/` directory
3. **Styling**: Customize styles using Tailwind CSS classes or modify `tailwind.config.js`

### Environment Configuration

Configuration files available:
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS plugins

## 🔄 Deployment

Build the production bundle:
```bash
npm run build
```

The optimized build will be created in the `dist/` directory, ready for deployment on any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📦 Dependencies

- **Runtime**: React, React DOM, Axios, Lucide React, React Toastify
- **Development**: Vite, Tailwind CSS, ESLint, Cypress, PostCSS

## 📝 Code Quality

- **Linting**: ESLint configuration with React-specific rules
- **Formatting**: Enforced through ESLint
- **Testing**: Comprehensive E2E test coverage with Cypress

