# Sala Sera

Sala Sera is a Thai–Italian riverside restaurant website built with React Router
framework mode. It includes restaurant information, a menu, and a client-side
table reservation experience.

## Requirements

- Node.js 22.22 or later
- npm

## Getting started

```sh
npm install
npm run dev
```

The development server generates React Router route types automatically.

## Routes

- `/` — Home
- `/menu` — Menu
- `/about` — Restaurant story
- `/reservation` — Reservation form

The reservation form validates input and displays a confirmation in the browser;
it does not submit a booking to a reservation service.

## Scripts

- `npm run dev` — Start the Vite development server.
- `npm run typegen` — Generate React Router route types.
- `npm run build` — Type-check and create the production client and server bundles.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint.

## Project structure

- `src/app/routes.ts` — Route configuration.
- `src/app/routes/` — Page route modules.
- `src/app/root.tsx` — App shell and HTML document.
- `src/app/app.css` — Global styles, theme tokens, and component styles.
- `src/components/` — Shared layout, common, and page components.
- `src/constants/` — Restaurant details and menu data.

This project uses React 19, React Router framework mode with SSR, Vite, Tailwind
CSS 4, and Base UI.
