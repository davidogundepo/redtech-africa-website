# REDtech Africa Vision ✨

Welcome to the **REDtech Africa** vision codebase! This repository contains the modern, fast, and responsive React frontend for the REDtech Africa platform.

## 🚀 Tech Stack

This project is built with the latest enterprise-grade frontend tooling:
- **[React 18](https://react.dev/)** - Core UI Library
- **[Vite](https://vitejs.dev/)** - Lightning Fast Build Tool & Dev Server
- **[TypeScript](https://www.typescriptlang.org/)** - Static Type Checking
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Highly customizable foundational components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful & consistent icon set
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)** - Global Content Delivery Network (CDN) deployment

## ⚙️ Project Setup

### 1. Installation

To get the project running locally, simply install the dependencies via npm:

```bash
npm install
```

### 2. Local Development

Start the local Vite development server:

```bash
npm run dev
```

You can now view the application at `http://localhost:8080/`.

### 3. Production Build

To build the application for production, compiling the TypeScript and generating optimized static assets:

```bash
npm run build
```

This will create a `dist/` directory with the final bundle.

## 🚢 Deployment (Firebase)

The application is configured to deploy to **Firebase Hosting**. 

Once your changes are successfully built, deploy the static `dist/` bundle to Firebase simply passing:

```bash
firebase deploy
```

*(Ensure you are logged into Firebase CLI with `firebase login` and have access to the `redtechafrica-v2` project).*
