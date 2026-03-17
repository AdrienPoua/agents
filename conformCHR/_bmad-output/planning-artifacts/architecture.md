---
stepsCompleted: [1, 2, 3]
inputDocuments:
  - prd.md
  - prd-validation-report.md
  - product-brief-conformCHR-2026-02-10.md
  - domain-conformchr-research.md
  - market-conformchr-research.md
workflowType: 'architecture'
project_name: 'ConformCHR'
user_name: 'Boss'
date: '2026-02-10'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
54 FRs couvrant 10 domaines fonctionnels. Le MVP (Phase 1, 35 FRs) concentre la valeur sur 4 axes : onboarding avec score de preparation instantane, 2 modules reglementaires (HACCP + Affichage), alertes echeances, et une couche admin/marketing. L'architecture doit etre pensee pour accueillir les modules Phase 2 (hors-ligne, IA veille, 2 nouvelles dimensions) et Phase 3 (social/DUERP, multi-sites, integrations API) sans refactoring de l'existant.

**Non-Functional Requirements:**
21 NFRs repartis en 4 axes. La performance mobile (< 2s sur 4G) et l'accessibilite (WCAG 2.1 AA, zones 44x44px pour usage en cuisine) sont les plus structurantes pour les choix frontend. La securite (RLS Supabase, RGPD, chiffrement) et la scalabilite (2 000 utilisateurs concurrents, < 100 EUR/mois) cadrent les choix backend. Le Lighthouse > 90 pour les pages marketing impose une strategie SSR/SSG rigoureuse.

**Scale & Complexity:**

- Domaine principal : Full-stack web (monorepo Turbo, Next.js 16 App Router + NestJS 11 API + Drizzle ORM)
- Niveau de complexite : Eleve (domaine reglemente, multi-tenancy, generation PDF, dualite SSR/SPA, PWA, 6 modules a isoler, backend API separe)
- Composants architecturaux estimes : ~18-24 (auth, onboarding, dashboard, score engine, 6 modules dimension cote web + 6 modules NestJS cote API, PDF generator, alertes/cron, CMS admin, email service, SEO/landing, PWA layer, shared types/schemas, DB schema/migrations)

### Stack Technique (heritee de conformloc)

**Architecture monorepo Turbo :**

```
conformCHR/
├── apps/
│   ├── web/          # Next.js 16 (App Router, Turbopack, RSC)
│   └── api/          # NestJS 11 (REST API, SWC, Swagger)
├── packages/
│   ├── core/         # @conformchr/core -- Types, enums, schemas Zod
│   ├── db/           # @conformchr/db -- Drizzle ORM, migrations, seeds
│   └── config/       # @conformchr/config -- ESLint, Prettier, tsconfig
```

**Runtime & Tooling :**

| Couche | Technologie | Version |
|--------|------------|---------|
| Runtime | Node.js | 24 LTS |
| Package manager | pnpm | 10.6.2 |
| Monorepo orchestration | Turbo | 2.4.0 |
| TypeScript | strict, ES2024, ESM only | 5.9.3 |
| Validation partagee | Zod | 3.24.0 |

**Frontend (apps/web) :**

| Aspect | Technologie |
|--------|------------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| React | 19.2.3 (RSC par defaut, `'use client'` explicite) |
| CSS | Tailwind v4 (`@theme` dans globals.css, PAS de tailwind.config.ts) |
| UI components | Shadcn/ui (new-york) + Radix UI 1.4.3 |
| Icons | Lucide React |
| Utilities CSS | class-variance-authority + clsx + tailwind-merge |
| Toasts | Sonner |
| Auth client | @supabase/ssr + @supabase/supabase-js |
| Route protection | proxy.ts (PAS middleware.ts) |
| PostCSS | @tailwindcss/postcss uniquement |

**Backend (apps/api) :**

| Aspect | Technologie |
|--------|------------|
| Framework | NestJS 11.1.13 (Express 5.0.0) |
| Compiler | SWC (ESM output, decorators, metadata) |
| ORM | Drizzle ORM 0.45.1 + postgres 3.4.0 |
| API docs | @nestjs/swagger |
| Rate limiting | @nestjs/throttler |
| Security | Helmet |
| Paiement | Stripe 20.x |
| Auth backend | Supabase JWT verification |
| Validation | class-validator + class-transformer (DTOs) |

**Database :**

| Aspect | Technologie |
|--------|------------|
| SGBD | PostgreSQL (Supabase, region eu-west) |
| ORM | Drizzle ORM (SQL-first, migrations) |
| Auth | Supabase Auth (email/password) |
| Storage | Supabase Storage (PDFs generes) |
| Isolation | Row Level Security (RLS) Supabase |

**Testing :**

| Niveau | Outil |
|--------|-------|
| Unit frontend | Vitest 4.0 + jsdom + React Testing Library |
| Unit backend | Vitest 4.0 + node + NestJS Testing |
| E2E | Playwright 1.58.x |

**Devops & Qualite :**

| Aspect | Outil |
|--------|-------|
| ESLint | v9 flat config, partage depuis @conformchr/config |
| Prettier | 3.8.1 (semi, single quotes, 100 chars, LF) |
| Git hooks | Husky 9 (pre-commit: lint-staged, commit-msg: commitlint) |
| Commits | Conventional commits via commitlint |
| CI | GitHub Actions (lint + type-check + build sur push/PR main) |
| Deps updates | Dependabot (weekly, npm + GitHub Actions) |
| VSCode | Prettier + ESLint + Tailwind CSS + Drizzle extensions |
| EditorConfig | 2 spaces, LF, UTF-8 |

### Technical Constraints & Dependencies

- **Dev solo** : Architecture doit maximiser la productivite d'un seul developpeur JS/TS. Privilegier les services manages (Supabase Auth, Stripe Billing, Resend) et la reutilisation des patterns conformloc
- **Budget < 100 EUR/mois** : Serverless/edge-first obligatoire (Vercel + Supabase). NestJS deploye sur Vercel Serverless Functions ou equivalent
- **Stack heritee de conformloc** : Toute la configuration devops, linting, formatting, testing, CI est identique. Le package `@conformchr/config` partage les memes regles
- **Hebergement UE** : Supabase region eu-west, Vercel region Europe (RGPD)
- **ESM only** : Tout le monorepo est en ESM (`"type": "module"`). Pas de CommonJS
- **MVP-first** : Le generateur PDF affiches et le PMS pre-rempli sont les pieces les plus complexes a prototyper en premier
- **Zod = source de verite** : Les schemas Zod dans `packages/core` sont le contrat d'interface entre frontend et backend. Les DTOs NestJS (class-validator) doivent rester coherents avec les schemas Zod

### Cross-Cutting Concerns Identified

1. **Modularite par dimension** : Chaque dimension (HACCP, Affichage, etc.) = un module isole reparti sur 4 couches : route group Next.js (`app/(dashboard)/[dimension]/`), module NestJS (`api/src/[dimension]/`), types/schemas Zod (`core/src/`), tables Drizzle (`db/src/schema/`). Ajout/retrait sans impact croise
2. **Bouclier de responsabilite** : Contrainte transversale impactant l'UX (vocabulaire "preparation"), le contenu (liens sources officielles), le modele de donnees (l'utilisateur coche, l'outil ne certifie pas), les CGU. Doit etre integre comme contrainte dans chaque couche, pas comme feature isolee
3. **Isolation multi-tenant** : RLS Supabase sur toutes les tables utilisateur. Admin accede via service_role pour le CMS et les metriques. Drizzle respecte l'isolation via les policies RLS
4. **Dualite SSR/SPA** : Pages marketing publiques (SSR/SSG, SEO, Lighthouse > 90) vs app authentifiee (SPA, noindex, routes protegees via proxy.ts). Meme pattern que conformloc
5. **RGPD** : Consentement a l'inscription, suppression < 72h, scores = donnees sensibles, hebergement UE, pas d'exposition a des tiers
6. **Performance mobile** : Toute decision architecture evaluee sous l'angle "smartphone milieu de gamme en 4G". Zones tactiles 44x44px, contraste 4.5:1, texte 16px minimum
7. **Contrat types partage** : `@conformchr/core` est le package source de verite pour les types, enums et schemas. Frontend et backend importent les memes definitions. Pas de duplication

## Starter Template Evaluation

### Primary Technology Domain

Full-stack web (monorepo Turbo) -- identifie a partir des exigences projet et de la decision explicite de reutiliser la stack conformloc.

### Starter Options Considered

**Option unique : Clonage structurel de conformloc**

La decision de reutiliser la stack conformloc rend l'evaluation de starters externes non pertinente. Le projet conformloc constitue un "starter battle-tested" avec :
- Architecture monorepo Turbo deja validee en production
- Configuration devops complete (ESLint v9, Prettier, Husky, Commitlint, GitHub Actions, Dependabot)
- Patterns NestJS + Next.js 16 + Drizzle + Supabase deja eprouves
- Package `config` partage deja configure pour la reutilisation

Les alternatives generiques (T3 Stack, create-next-app, etc.) ne correspondent pas : aucune n'offre le couple Next.js 16 App Router + NestJS 11 backend separe + Drizzle ORM + Supabase Auth dans un monorepo Turbo.

### Selected Starter : Structure conformloc

**Rationale :**
- Zero temps d'evaluation/configuration : la stack est maitrisee par le dev solo
- Coherence entre les deux projets (meme tooling, memes conventions, memes patterns)
- Configuration devops production-ready deja operationnelle
- Patterns architecturaux (modules NestJS, route groups Next.js, schemas Zod partages) deja valides

**Initialisation :**
Creation d'un nouveau monorepo Turbo en reprenant la structure de conformloc, avec renommage des packages (`@conformloc/*` -> `@conformchr/*`) et nettoyage du code metier specifique a conformloc.

### Architectural Decisions Provided by Starter

**Language & Runtime :**
- TypeScript 5.9.3, strict mode, ES2024 target
- ESM only (`"type": "module"` dans tous les package.json)
- Node.js 24 LTS minimum

**Styling Solution :**
- Tailwind CSS v4 avec `@theme` inline dans globals.css (pas de tailwind.config.ts)
- Shadcn/ui (style new-york) + Radix UI pour les composants
- class-variance-authority + clsx + tailwind-merge pour les utilitaires
- Design tokens : couleurs semantiques (conforme/a-verifier/non-conforme) via CSS custom properties + `@theme`

**Build Tooling :**
- Turbo 2.4.0 pour l'orchestration monorepo (cache, parallelisation, task dependencies)
- Turbopack pour le dev frontend (Next.js 16)
- SWC pour le build backend (NestJS 11, ESM output, decorators)
- pnpm 10.6.2 avec workspaces

**Testing Framework :**
- Vitest 4.0 pour les tests unitaires (frontend: jsdom + React Testing Library, backend: node + NestJS Testing)
- Playwright 1.58.x pour les tests E2E
- Tests co-localises (`*.spec.ts` a cote du code source)

**Code Organization :**
- Monorepo 5 packages : apps/web, apps/api, packages/core, packages/db, packages/config
- Frontend : App Router avec route groups (`(marketing)`, `(dashboard)`)
- Backend : Modules NestJS isoles par domaine fonctionnel
- Types partages : Zod schemas dans packages/core (source de verite)
- DB : Drizzle ORM avec migrations SQL dans packages/db

**Development Experience :**
- VSCode : Prettier (format on save) + ESLint (fix on save) + Tailwind CSS IntelliSense + Drizzle snippets
- Git hooks : Husky pre-commit (lint-staged -> prettier --write) + commit-msg (commitlint conventional)
- CI : GitHub Actions (lint + type-check + build)
- Dependabot : mises a jour hebdomadaires (npm + GitHub Actions)

**Note :** L'initialisation du monorepo (clonage structure conformloc + renommage packages + nettoyage code metier) devra etre la premiere story d'implementation.
