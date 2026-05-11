# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Architecture

**RSbit** is a single-page portfolio/landing site built with React 19 + Vite. It has no router — the entire app is one scrollable page with anchor-based navigation.

### Structure

- `src/App.jsx` — root layout: `Navbar` + sections (`Hero`, `Services`, `Portfolio`, `About`, `Contact`) separated by `.divider` elements + `Footer`
- `src/data/` — static data files (`services.js`, `projects.js`, `skills.js`). Add/edit content here rather than in components.
- `src/hooks/` — two scroll-aware hooks used by `Navbar`:
  - `useScrolled(threshold)` — returns `true` when page is scrolled past a pixel threshold (triggers navbar style change)
  - `useActiveSection(sectionIds, threshold)` — uses `IntersectionObserver` to track which section is currently visible (drives active nav link highlighting)
- `src/components/<Section>/` — each section has its own folder with `<Section>.jsx` and `<Section>.module.css`

### Styling

All global styles, CSS variables, and utility classes live in `src/App.css` (not `index.css`, which is empty). Component-specific styles use CSS Modules (`.module.css`). Global utility classes available in all components: `.container`, `.btn`, `.btn-primary`, `.btn-ghost`, `.tag`, `.section-label`, `.gradient-text`, `.divider`.

CSS custom properties (defined in `:root`): `--bg`, `--surface`, `--card`, `--border`, `--blue`, `--teal`, `--purple`, `--text`, `--muted`, `--radius`, `--transition`.

### Portfolio cards

`ProjectCanvas.jsx` renders an animated Canvas background for each project card. Each project in `projects.js` defines a `palette` object (`dot`, `line`, `glow`, `node` colors) and a `bgGradient` string that control its visual appearance.
