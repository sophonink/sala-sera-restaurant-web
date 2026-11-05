# AGENTS.md

## Stack & structure

- React Router 8 **framework mode** (SSR) + React 19 + Vite 8 + Tailwind 4 + shadcn/ui.
- The app directory is `src/app`, set by `appDirectory` in `react-router.config.ts` — not the conventional root `app/`.
- Routes are **config-based**, not file-system based. Every route must be registered in `src/app/routes.ts`; route file paths there are relative to `src/app`.
- `src/app/root.tsx` owns the `<html>` document (`Layout`); route modules export page content, `meta`, loaders, etc.
- `@/` resolves to `src/` (configured in both `vite.config.ts` and tsconfig). Route modules import generated types from `./+types/<route>`.
- shadcn uses the `base-vega` style with **Base UI** primitives (`@base-ui/react`), not Radix.

## Commands

- `npm install` — npm is the package manager (`package-lock.json`).
- `npm run dev` — Vite dev server; also regenerates route types.
- `npm run typegen` — run after adding/renaming a route or changing route exports. `npm run dev` does this automatically; `tsc -b` and `vite build` do not.
- `npx tsc -b` — typecheck only (no build output).
- `npm run build` — `tsc -b && vite build`; emits `build/client` and `build/server`.
- `npm run lint` — see lint caveat below.
- There is **no test script, test framework, CI, or pre-commit hook**. Do not assume `npm test` exists.
- React Router 8 requires **Node >= 22.22**; `package.json` has no `engines` field.

## Conventions & gotchas

- TypeScript is strict about imports and syntax: `verbatimModuleSyntax` (use `import type`), `erasableSyntaxOnly` (no enums, namespaces, or parameter properties), and unused locals/parameters are errors.
- Tailwind 4 has **no `tailwind.config.js`**. Theme tokens and custom variants live in `src/app/app.css` (`@theme`, CSS variables), which also imports `shadcn/tailwind.css`.
- `components.json` maps the shadcn `ui` alias to `@/components/common`, not the default `@/components/ui`. Use `npx shadcn@latest add <name>` and keep shared UI components there.
- `cn` comes from the `cn` npm package; `src/lib/utils.ts` re-exports it for shadcn compatibility. Existing `Button.tsx` imports `cn` directly from `"cn"`, is a **default export**, and wraps `@base-ui/react/button` — match that pattern for new components.
- `.react-router/types/**` is generated **and committed**. Never hand-edit it; regenerate with `npm run typegen`.
- `npm run lint` is currently not green: ESLint only ignores `dist`, so it reports errors inside generated `.react-router/types`, plus `no-empty-pattern`/`react-refresh` errors in the template's `meta({ }: Route.MetaArgs)` route. Lint targeted files (`npx eslint src/app/routes/<file>.tsx`) rather than treating the repo-wide script as a clean gate.
- `npm run build` writes to `build/`, which is **not** in `.gitignore`; do not commit it. The existing `dist/` directory is stale output from the pre-React-Router Vite template and is ignored.
- `README.md` is the default Vite template and does not describe this app. Trust `package.json`, `react-router.config.ts`, and `components.json` over it.
