# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm run build:portfolio` — build only the saqr-portfolio (Vercel-friendly)
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

- **saqr-portfolio** (`artifacts/saqr-portfolio/`) — Bilingual (AR/EN) personal portfolio for Saqr (Ibrahim Ahmed). React + Vite + Framer Motion. Dark theme with warm gold palette.

## Vercel Deployment

The project is configured for Vercel deployment via `vercel.json` at the root.

- **Install command**: `pnpm install`
- **Build command**: `pnpm --filter @workspace/saqr-portfolio run build`
- **Output directory**: `artifacts/saqr-portfolio/dist/public`
- **SPA routing**: All non-API paths rewrite to `index.html`
- **Serverless API**: `/api/*` routes are handled by `api/index.ts`

### Environment variables needed on Vercel

None required for the portfolio (fully static). The `PORT` and `BASE_PATH` env vars are optional — they default to `5173` and `/` respectively during builds.

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
