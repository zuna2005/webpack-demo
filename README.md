# Webpack Demo Project

This is a simple Webpack project demonstrating the configuration and setup for a modern frontend build pipeline.

## Features

- Uses `src/index.js` as the entry point
- Outputs final build files into a `dist/` directory
- Processes:
  - TypeScript (`.ts`, `.tsx`) files
  - JavaScript (`.js`) files, transpiled to ES5
  - SCSS (`.scss`) stylesheets
- Minifies JavaScript and CSS in production mode
- Generates source maps for debugging
- Processes HTML and automatically injects links to the minified CSS and JS files
- Handles images and other static assets

## Project Structure

```

project-root/
├── dist/                  # Build output (auto-generated)
├── src/
│   ├── index.js           # Main entry point
│   ├── index.ts           # Example TypeScript file
│   ├── style.scss         # Sample SCSS file
│   └── image.jpg          # Sample image
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md

```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Build

```bash
npm run build
```

This will generate the final production-ready files inside the `dist/` folder.