<!-- Copilot instructions tailored to the phimart-client repo -->
# Repo snapshot

- Stack: React + Vite (see `vite.config.js`), Tailwind + DaisyUI for styling.
- Entry points: `index.html`, `src/main.jsx`, top-level routes in `src/routes/AppRoutes.jsx`.

# Quick dev commands

- Start dev server: `npm run dev` (uses Vite)
- Build: `npm run build` -> `dist/`
- Preview build: `npm run preview`
- Lint: `npm run lint` (project uses ESLint; config in `eslint.config.js`)

# Key architecture & patterns (what to know before editing)

- Routing: All app routes are declared in `src/routes/AppRoutes.jsx`. Public pages are wrapped by `MainLayout` while `/dashboard` routes are protected by `PrivateRoute` and use `DashboardLayout`.
- Authentication & protection: Authentication state is provided via `src/context/AuthContext.jsx` (which delegates to `src/hooks/useAuth.js`). To protect routes, use the existing `PrivateRoute.jsx` pattern.
- API clients: Two axios instances live in `src/services/`:
  - `api-client.js` — main API base: `https://phimart-xi.vercel.app/api`
  - `auth-api-client.js` — auth API base: `https://freelance-platform-delta.vercel.app/api`
  `auth-api-client.js` already adds a request interceptor that reads `localStorage.getItem('authTokens')` and sets `Authorization: JWT <access>` when present. Follow this pattern when adding other axios-level behavior.
- State & hooks: Project favors custom hooks in `src/hooks/` (e.g., `useAuth`, `useCart`). These hooks are the canonical way to access/update context state rather than modifying context providers directly.
- Components & layout: Reusable UI lives under `src/components/` and page-level components under `src/pages/`. Shared layout wrappers are `src/layouts/MainLayout.jsx` and `src/layouts/DashboardLayout.jsx`.

# Conventions & small gotchas

- Default exports are used heavily (components, API clients). Prefer to follow existing export style to reduce refactor scope.
- Local auth token key: `authTokens` in localStorage and token object stores `access` (used by interceptors). Don't change the storage key without updating `auth-api-client.js` and `useAuth`.
- Route naming: product details route uses `shop/:productId` (see `AppRoutes.jsx`) — keep parameter names consistent when generating links or API calls.
- Styling: Tailwind utility classes are used across components. Keep classes small and composable (project prefers utility-first usage over long CSS files).
- No test harness found in repo; avoid adding heavy test infra without discussion.

# When adding endpoints or features

- Update or reuse `src/services/api-client.js` (or `auth-api-client.js` if auth needs) rather than creating ad-hoc fetch/Axios instances.
- If a new API host is needed, prefer adding a new axios instance in `src/services/` and document it in this file.

# Files to read first when editing a feature

- `package.json` — confirms scripts and deps.
- `src/routes/AppRoutes.jsx` — entrypoint for routing changes.
- `src/context/AuthContext.jsx` + `src/hooks/useAuth.js` — auth patterns and contract.
- `src/services/auth-api-client.js` — token handling interceptor and header shape.
- Affected component under `src/components/` or `src/pages/`.

# Example: adding an auth-protected API call

- Use `auth-api-client` to make requests that require JWT. Example pattern:

  - import the client: `import authApi from '../services/auth-api-client';`
  - call: `const { data } = await authApi.get('/some/protected/endpoint');`

# Final notes

- Keep changes small and follow existing component & export styles.
- If adding new dev commands or test infra, update `package.json` and `README.md` and note any required environment variables here.

---
If anything here is unclear or you want more/less detail in a specific area (tests, CI, or env vars), tell me and I'll iterate.
