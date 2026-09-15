# Installation Guide

This guide will walk you through the complete installation process for the RentHouse Intel platform.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0.0 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
  
- **npm** (v9.0.0 or higher)
  - Comes bundled with Node.js
  - Verify installation: `npm --version`

### Optional (for development)
- **Git** (for cloning the repository)
  - Download from: https://git-scm.com/
  - Verify installation: `git --version`

- **VS Code** (recommended IDE)
  - Download from: https://code.visualstudio.com/
  - Recommended extensions:
    - ESLint
    - Prettier
    - Tailwind CSS IntelliSense

## Installation Steps

### Step 1: Clone the Repository

```bash
git clone https://github.com/mrharrysharma99/seo-ads-intelligence.git
cd seo-ads-intelligence
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages defined in `package.json`. The installation may take 2-5 minutes depending on your internet connection.

**What gets installed:**
- React and React DOM
- TypeScript and type definitions
- Vite build tool
- Tailwind CSS
- Development tools and plugins

### Step 3: Verify Installation

Check that all dependencies are installed correctly:

```bash
npm list --depth=0
```

You should see output showing all installed packages without any errors.

### Step 4: Start Development Server

```bash
npm run dev
```

The development server will start and display:
```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: Open the Application

Open your browser and navigate to:
```
http://localhost:5173
```

You should see the RentHouse Intel dashboard with:
- Sidebar navigation on the left
- Dashboard metrics in the center
- Dark theme interface

## Build for Production

When you're ready to deploy the application:

### Step 1: Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist` directory:
```
dist/
├── index.html
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

### Step 2: Preview Production Build

Test the production build locally:

```bash
npm run preview
```

This serves the built files at `http://localhost:4173`

## Common Issues & Solutions

### Issue 1: Port Already in Use

**Error:** `Port 5173 is already in use`

**Solution:**
```bash
# Kill the process using port 5173
npx kill-port 5173

# Or start on a different port
npm run dev -- --port 3000
```

### Issue 2: Node Version Mismatch

**Error:** `Unsupported engine` or similar warnings

**Solution:**
```bash
# Check your Node version
node --version

# If below v18, update Node.js
# Download from: https://nodejs.org/
```

### Issue 3: npm Install Fails

**Error:** Various npm install errors

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue 4: TypeScript Errors

**Error:** TypeScript compilation errors

**Solution:**
```bash
# Run type checking
npm run typecheck

# Fix any reported errors
```

### Issue 5: Build Fails

**Error:** Build process fails

**Solution:**
```bash
# Clean build artifacts
rm -rf dist

# Rebuild
npm run build
```

## Environment Configuration

### Development Environment

The development server includes:
- Hot Module Replacement (HMR)
- Source maps
- Error overlays

### Production Environment

The production build includes:
- Minified JavaScript and CSS
- Optimized assets
- Tree-shaking
- Code splitting

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run build
npm run deploy
```

## Troubleshooting

### Application Shows Blank Screen

1. Check browser console for errors (F12)
2. Verify all files are present in `src/` directory
3. Run `npm run typecheck` to check for TypeScript errors
4. Clear browser cache and reload

### Styles Not Loading

1. Verify Tailwind CSS is configured in `vite.config.js`
2. Check that `src/index.css` exists
3. Rebuild the project: `npm run build`

### Hot Reload Not Working

1. Restart the development server
2. Check file permissions
3. Verify no syntax errors in code

## Performance Optimization

### Development
- Use React DevTools for component inspection
- Enable React Strict Mode in development
- Monitor bundle size with `npm run build -- --report`

### Production
- Enable gzip compression on your server
- Use CDN for static assets
- Implement lazy loading for routes
- Optimize images before deployment

## Support

If you encounter any issues not covered in this guide:

1. Check existing issues on GitHub
2. Review the error messages carefully
3. Check Node.js and npm versions match requirements
4. Contact the development team

## Next Steps

After successful installation:

1. Explore the Dashboard
2. Navigate through different sections
3. Test the interactive features
4. Review the code structure
5. Start customizing for your needs

---

**Happy Coding! 🚀**
