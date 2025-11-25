# Lamdon — Frontend

This folder contains the frontend for the Lamdon website — a React + Vite single-page app styled with Tailwind CSS.

## Quick overview

- Framework: React (v19)
- Bundler: Vite
- Styling: Tailwind CSS
- Routing: react-router-dom
- Icons: lucide-react, react-icons
- Animations: framer-motion

This README documents how to run the frontend locally, the main structure, and helpful developer notes.

## Requirements

- Node.js 18+ (recommended) and npm/yarn/pnpm
- A modern OS (Windows, macOS, Linux). The maintainer used PowerShell on Windows.

## Install dependencies

From the `FRONTEND` folder run:

```powershell
npm install
```

Or with your preferred package manager:

```powershell
# pnpm install
# yarn install
```

## Dev scripts

Available scripts in `package.json`:

- Start dev server (hot reload):

```powershell
npm run dev
```

- Build for production:

```powershell
npm run build
```

- Preview production build locally:

```powershell
npm run preview
```

- Lint the codebase (ESLint):

```powershell
npm run lint
```

Vite's dev server defaults to port 5173.

## Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — main routes and app layout
- `src/index.css` — global CSS, imports Tailwind
- `src/assets/` — images and `assets.js` which centralizes imports/exports
- `src/component/` — shared components (Navbar, Footer, GoldenJubileeLayout, etc.)
- `src/pages/` — route pages (Home, About, GoldenJubilee, Academics, Admission, Community, etc.)

Examples in the codebase:

- `src/pages/GoldenJubilee/GoldenJubilee.jsx` — Golden Jubilee overview page
- `src/component/GoldenJubileeLayout.jsx` — layout + sidebar for Golden Jubilee pages
- `src/assets/assets.js` — exports an `assets` object of imported media

## Assets

All site images and media are imported in `src/assets/assets.js` and exported via an `assets` object. When adding new media:

1. Add the file to `src/assets/`.
2. Import it in `src/assets/assets.js` and add it to the `assets` export.
3. Use the imported asset via `assets.<name>` in components.

Prefer modern/image-compressed formats (AVIF/WebP) for performance.

## Routing & pages

Routing uses `react-router-dom`. The `App.jsx` file wires top-level routes and nested layouts. Golden Jubilee pages use `GoldenJubileeLayout` with an `<Outlet />` for subpages.

When you add a page:

- Create the component under `src/pages/...`.
- Add the route to `src/App.jsx` (or the matching layout file).
- Register any images in `src/assets/assets.js`.

## Tailwind

Tailwind CSS is used. The project imports Tailwind directives in `src/index.css`. If you need custom configuration, add or update `tailwind.config.js` at the project root.

## Code style and linting

ESLint is configured; run:

```powershell
npm run lint
```

Consider adding pre-commit hooks (Husky) and a CI action to run linting on PRs.

## Deployment

This project is ready for platforms like Vercel or Netlify. The repo already contains `vercel.json` to rewrite SPA routes to `/`.

Vercel build command: `npm run build` — output: `dist/` (Vite default).

## Troubleshooting

- If images fail to load, verify their filenames and imports in `src/assets/assets.js` (case-sensitive on some systems).
- If Vite doesn't start, ensure Node and npm versions are correct and re-run `npm install`.

## Suggested next steps

- Add a `tailwind.config.js` if not present or extend theme/colors.
- Add unit/integration tests (Vitest or Jest + React Testing Library).
- Add CI (GitHub Actions) to run lint and tests on PRs.
- Add a `CONTRIBUTING.md` for conventions.

---

If you'd like, I can create a minimal `tailwind.config.js` or add a simple GitHub Actions workflow to lint commits — tell me which you'd prefer next.
