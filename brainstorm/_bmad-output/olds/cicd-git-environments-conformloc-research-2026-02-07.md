---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - technical-conformloc-research-2026-02-06.md
workflowType: 'research'
lastStep: 5
research_type: 'technical-cicd'
research_topic: 'ConformLoc - CI/CD, Environnements, Git Strategy pour monorepo Turborepo'
research_goals: 'Definir strategie Git, pipeline CI/CD, gestion des environnements, deploiement et monitoring pour le monorepo ConformLoc'
user_name: 'Boss'
date: '2026-02-07'
web_research_enabled: true
source_verification: true
---

# Research Report: CI/CD, Environnements & Git

**Date:** 2026-02-07
**Author:** Boss
**Research Type:** Technical - CI/CD & DevOps
**Prerequis:** technical-conformloc-research-2026-02-06.md

---

## Rappel Architecture Technique

```
MONOREPO TURBOREPO (pnpm workspaces)
├── apps/web/          ← Next.js 15+ (Vercel Pro, $20/mois)
├── apps/api/          ← NestJS 11 (Railway, $5-10/mois)
├── packages/core/     ← Types partages, DTOs, Zod schemas
├── packages/db/       ← Drizzle ORM, migrations, seed
└── packages/config/   ← ESLint, tsconfig, prettier
```

**Services tiers** : Supabase Pro ($25/mois), Stripe, Inngest, Resend, Plausible, Sentry

---

## 1. Strategie Git

### 1.1 Modele de Branching : GitHub Flow (Recommande)

**Decision : GitHub Flow, PAS GitFlow, PAS Trunk-Based pur.**

| Critere | GitHub Flow | Trunk-Based | GitFlow |
|---------|-------------|-------------|---------|
| Simplicite | 5/5 | 4/5 | 1/5 |
| Monorepo-friendly | 4/5 | 5/5 | 2/5 |
| Overhead solo dev | 5/5 | 4/5 | 1/5 |
| Deploiement continu | 5/5 | 5/5 | 2/5 |
| **TOTAL** | **19/20** | **18/20** | **6/20** |

**Pourquoi GitHub Flow** :
1. **Branche `main`** = toujours deployable, deploiement automatique (Vercel + Railway)
2. **Branches courtes** (feature/fix) = max 2-3 jours, merges frequents
3. **Pas de branche `develop`** = zero overhead de synchronisation
4. **Preview deploys** sur chaque PR = validation avant merge
5. **Solo dev** = pas besoin de la ceremonie GitFlow

**Flux quotidien** :
```
main (prod) ← feature/apps-web/GH-42-diagnostic-panel
           ← fix/apps-api/jwt-validation
           ← chore/packages-db/add-migration
```

**GitFlow elimine** : 6+ branches simultanees, merge complexity, overkill pour 1 personne. Recommande obsolete depuis 2020+.

**Trunk-Based elimine** : Necessite une couverture de tests excellente des le jour 1. Pas confortable pour les phases d'experimentation du MVP.

_Confiance : HAUTE -- Pattern valide pour solo dev SaaS, utilise par la majorite des projets open-source modernes_
_Sources: [Trunk-Based Development](https://trunkbaseddevelopment.com/alternative-branching-models/), [GitHub Flow](https://docs.github.com/en/get-started/using-git/github-flow), [My Git Workflow as a Solo Developer](https://medium.com/@reillychase/my-git-workflow-as-a-solo-developer-3a3c2953b44b)_

### 1.2 Convention de Nommage des Branches

**Format** :
```
<type>/<scope>/<description>
```

| Prefixe | Usage | Exemple |
|---------|-------|---------|
| `feature/` | Nouvelle fonctionnalite | `feature/apps-web/diagnostic-panel` |
| `fix/` | Bug fix | `fix/apps-api/jwt-validation` |
| `hotfix/` | Bug urgent PRODUCTION | `hotfix/apps-web/critical-payment-error` |
| `chore/` | Deps, configs, refactor | `chore/packages-db/bump-drizzle` |
| `docs/` | Documentation | `docs/api-authentication` |
| `ci/` | CI/CD, workflows | `ci/add-e2e-workflow` |
| `test/` | Tests uniquement | `test/apps-api/unit-conformite` |
| `perf/` | Optimisation performance | `perf/apps-web/reduce-bundle` |

**Regles** :
- Longueur max : 60 caracteres
- Lowercase uniquement, hyphens entre les mots
- Pas d'underscores, points, caracteres speciaux
- Ticket ID optionnel : `feature/apps-web/GH-123-description`

### 1.3 Convention de Commits : Conventional Commits

**Format obligatoire** :
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types autorises** :

| Type | Description | Version bump |
|------|-------------|-------------|
| `feat` | Nouvelle feature | Minor (1.x.0) |
| `fix` | Bug fix | Patch (1.0.x) |
| `feat!` / `fix!` | Breaking change | Major (x.0.0) |
| `chore` | Deps, configs | Patch ou None |
| `docs` | Documentation | None |
| `style` | Formatting | None |
| `refactor` | Refactor sans logic change | None |
| `perf` | Optimisation | Patch |
| `test` | Tests uniquement | None |
| `ci` | CI/CD changes | None |

**Scopes autorises pour le monorepo** :
- `apps-web`, `apps-api`
- `packages-core`, `packages-db`, `packages-config`
- `root` (pour les changements a la racine)

**Exemples** :
```
feat(apps-web): add diagnostic result page with score display
fix(apps-api): handle null DPE response from ADEME API
chore(packages-db): add commune_rules migration
ci(root): add e2e workflow with Playwright
```

**Regles du message** :
- Ligne 1 : max 72 caracteres, imperatif ("add" pas "added"), pas de point final
- Body : separe du subject par une ligne vide, explique le QUOI et le POURQUOI
- Footer : `Closes #123`, `BREAKING CHANGE: description`

_Sources: [Conventional Commits v1.0.0](https://www.conventionalcommits.org/), [Commitlint](https://github.com/conventional-changelog/commitlint)_

### 1.4 Outils : Husky + Commitlint + lint-staged

**Architecture** (tout a la racine du monorepo) :
```
conformloc/
├── .husky/
│   ├── pre-commit          ← lint-staged
│   └── commit-msg          ← commitlint
├── commitlint.config.js
├── .lintstagedrc.mjs
└── package.json            ← "prepare": "husky install"
```

**Installation** :
```bash
pnpm add -D husky lint-staged @commitlint/cli @commitlint/config-conventional
npx husky install
```

**commitlint.config.js** :
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'hotfix', 'chore', 'docs', 'style',
      'refactor', 'perf', 'test', 'ci', 'revert',
    ]],
    'scope-enum': [2, 'always', [
      'apps-web', 'apps-api',
      'packages-core', 'packages-db', 'packages-config',
      'root',
    ]],
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['start-case', 'pascal-case']],
  },
};
```

**.lintstagedrc.mjs** :
```javascript
export default {
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,yaml,yml,md}': ['prettier --write'],
};
```

**Hooks Husky** :
```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
npx husky add .husky/pre-commit 'pnpm exec lint-staged'
```

### 1.5 Versioning : Changesets pour Monorepo

**Decision : Changesets, PAS semantic-release.**

semantic-release assume 1 repo = 1 package et cree un seul tag `v1.0.0`. Avec un monorepo, on a besoin de `apps-web@2.1.0` et `apps-api@1.3.2` en meme temps. Changesets gere nativement les versions independantes.

**Installation** :
```bash
pnpm add -D @changesets/cli
pnpm changeset init
```

**.changeset/config.json** :
```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "privatePackages": {
    "version": true,
    "tag": true
  }
}
```

**Workflow quotidien** :
```bash
# 1. Apres avoir termine une feature
pnpm changeset
# → Interactif: selectionner packages affectes + type de bump + description

# 2. Commit le changeset
git add .changeset/brave-lions-fight.md
git commit -m "chore: add changeset for diagnostic feature"

# 3. Merge to main → GitHub Actions auto-cree une PR "version packages"
# 4. Merge la PR → auto-bump versions + CHANGELOG + git tags
```

**Format des tags** :
```
apps-web@1.1.0
apps-api@1.0.1
@conformloc/core@1.1.0
@conformloc/db@1.0.2
```

**GitHub Actions pour Changesets** :
```yaml
# .github/workflows/release.yml
name: Release
on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo build
      - uses: changesets/action@v1
        with:
          version: pnpm changeset version
          publish: pnpm changeset publish
          commit: "chore: version packages"
          title: "chore: version packages"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

_Sources: [Changesets - Vercel Academy](https://vercel.com/academy/production-monorepos/changesets-versioning), [Turborepo Publishing Guide](https://turborepo.dev/docs/guides/publishing-libraries), [Supercharging Monorepo Workflows](https://vinayak-hegde.medium.com/supercharging-monorepo-workflows-building-publishable-packages-with-turborepo-vite-and-eaec60571f70)_

### 1.6 Protection de la Branche Main

**Configuration GitHub** (Settings → Rules → New Ruleset) :

| Setting | Valeur | Justification |
|---------|--------|---------------|
| Require PR before merge | 1 approval | Meme solo, une PR = meilleure review |
| Require status checks | build, test, lint, type-check | CI gate |
| Require branches up to date | Oui | Evite merge conflicts |
| Require linear history | Oui | Force rebase/squash, pas de merge commits |
| Require signed commits | Optionnel | Securite (setup GPG) |
| Allow force pushes | Non | Protege main |
| Dismiss stale PR approvals | Oui | Re-run CI apres nouveau push |

**Required status checks** :
- `lint` (rapide, ~2 min)
- `type-check` (~2-3 min)
- `test` (~5-10 min)
- `build` (~5-10 min)

_Sources: [GitHub Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets), [Branch Protection Best Practices](https://dev.to/piyush_gaikwad_2fadecf5f4/branch-protection-rules-vs-rulesets-the-right-way-to-protect-your-git-repos-305m)_

---

## 2. Pipeline CI/CD

### 2.1 Vue d'Ensemble

```
┌─ Lint (rapide: ~2 min) ──────────── Si fail → STOP
│
├─ Type-Check (parallele: ~2-3 min)
└─ Test unitaires (parallele: ~5 min)
   └─ Si fail → STOP

└─ Build (si lint + typecheck OK: ~5 min)
   └─ Si fail → STOP

├─ Integration Tests (si build OK: ~10 min)
└─ E2E Tests (si build OK: ~15-30 min)

Temps total: ~20-25 min (avec parallelisation)
```

### 2.2 Turborepo Configuration

**turbo.json** :
```json
{
  "$schema": "https://turborepo.org/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"],
      "cache": true
    },
    "lint": {
      "outputs": [],
      "cache": true
    },
    "type-check": {
      "outputs": [],
      "cache": true
    },
    "test": {
      "outputs": ["coverage/**"],
      "cache": true,
      "inputs": ["src/**/*.ts", "src/**/*.tsx", "**/*.test.ts", "**/*.spec.ts"]
    },
    "test:e2e": {
      "dependsOn": ["build"],
      "cache": false
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  },
  "globalDependencies": ["**/.env.local", "**/.env"]
}
```

**Cle Turborepo pour CI** : Le filtre `--filter='...[origin/main...HEAD]'` ne build/test QUE les packages affectes par les changements. Reduit les temps de CI de ~60%.

### 2.3 Pipeline CI Principal (GitHub Actions)

**.github/workflows/ci.yml** :
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo run lint --filter='...[origin/main...HEAD]'

  type-check:
    name: Type Check
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo run type-check --filter='...[origin/main...HEAD]'

  test:
    name: Unit Tests
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo run test --filter='...[origin/main...HEAD]' -- --coverage

  build:
    name: Build
    runs-on: ubuntu-latest
    timeout-minutes: 15
    needs: [lint, type-check]
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo run build --filter='...[origin/main...HEAD]'

  e2e:
    name: E2E Tests
    runs-on: ubuntu-latest
    timeout-minutes: 30
    needs: build
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo run build --filter=web
      - run: pnpm exec playwright install --with-deps
      - run: pnpm turbo run test:e2e --filter=web
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: apps/web/playwright-report/
          retention-days: 14
```

**Couts GitHub Actions** :
- Free tier : **2 000 min/mois** = suffisant pour ~80-100 runs de CI (a ~20 min chacun)
- Optimisation : `cancel-in-progress: true` + Turborepo cache + affected filter

### 2.4 Remote Cache

**Vercel Remote Cache** (gratuit, zero config) :
```bash
npx turbo login
# Turborepo utilise automatiquement le cache Vercel
```

**Alternative : GitHub Actions Cache** :
```yaml
- uses: actions/cache@v4
  with:
    path: .turbo
    key: ${{ runner.os }}-turbo-${{ github.sha }}
    restore-keys: |
      ${{ runner.os }}-turbo-
```

### 2.5 Outils de Qualite de Code

#### ESLint Flat Config Partagee

**packages/config/eslint.config.js** :
```javascript
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import typescript from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  { ignores: ["node_modules/**", "dist/**", ".next/**", "coverage/**"] },
  js.configs.recommended,
  ...typescript.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: { import: importPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "import/order": ["error", {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        alphabetize: { order: "asc", caseInsensitive: true },
      }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
    },
  },
];
```

#### Prettier Partagee

**packages/config/prettier.config.js** :
```javascript
module.exports = {
  semi: true,
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  arrowParens: "avoid",
  endOfLine: "lf",
};
```

#### Tests : Vitest (Unit) + Playwright (E2E)

**vitest.workspace.ts** (racine) :
```typescript
import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    name: "web",
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./apps/web/vitest.setup.ts"],
      coverage: { provider: "v8", reporter: ["text", "json", "html"] },
    },
  },
  {
    name: "api",
    test: {
      globals: true,
      environment: "node",
      setupFiles: ["./apps/api/vitest.setup.ts"],
      coverage: { provider: "v8", reporter: ["text", "json", "html"] },
    },
  },
]);
```

**apps/web/playwright.config.ts** :
```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html"], ["github"], ["list"]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
  ],
});
```

#### Knip (Detection Code Mort)

**knip.config.ts** :
```typescript
import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    "apps/web": {
      entry: ["src/app/**/*.tsx", "src/app/**/*.ts"],
      project: ["src/**/*.tsx", "src/**/*.ts"],
    },
    "apps/api": {
      entry: ["src/main.ts"],
      project: ["src/**/*.ts"],
    },
  },
};
export default config;
```

#### Renovate (Mise a Jour des Deps)

**renovate.json** :
```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:base", ":enableVulnerabilityAlerts"],
  "schedule": ["before 3am on Monday"],
  "timezone": "Europe/Paris",
  "packageRules": [
    {
      "groupName": "Next.js",
      "matchPackagePatterns": ["^next", "^react", "^react-dom"],
      "automerge": false
    },
    {
      "groupName": "NestJS",
      "matchPackagePatterns": ["^@nestjs"],
      "automerge": false
    },
    {
      "groupName": "Testing",
      "matchPackagePatterns": ["^vitest", "^@vitest", "^playwright", "^@playwright"],
      "automerge": true
    },
    {
      "groupName": "ESLint & Prettier",
      "matchPackagePatterns": ["^eslint", "^prettier", "^@typescript-eslint"],
      "automerge": true
    }
  ],
  "vulnerabilityAlerts": {
    "extends": ["schedule:immediately"]
  }
}
```

_Sources: [GitHub Actions Turborepo](https://turborepo.dev/docs/guides/ci-vendors/github-actions), [Turborepo Structuring Repos](https://turborepo.dev/docs/crafting-your-repository/structuring-a-repository), [Knip](https://knip.dev/), [Renovate Monorepo](https://docs.renovatebot.com/), [Vitest Coverage](https://github.com/step-security/vitest-coverage-report-action)_

---

## 3. Strategie d'Environnements

### 3.1 Decision : 3 Environnements (Pas de Staging Dedie)

**Local → Preview (PR) → Production**

| Environnement | Infrastructure | Cout supplementaire |
|---------------|---------------|---------------------|
| **Local** | Supabase CLI + Docker + turbo dev | $0 |
| **Preview** | Vercel Preview Deploys (auto) + Railway | $0 |
| **Production** | Vercel + Railway + Supabase Pro | ~60-65 EUR/mois |

**Pourquoi PAS de staging dedie** :
- Cout supplementaire (Supabase branch + Railway env)
- Overhead maintenance (3x migrations, 3x seed data)
- Vercel Preview Deployments font deja le job (gratuit, automatique sur chaque PR)
- Solo dev = pas besoin de gatekeeping entre staging et prod

_Confiance : HAUTE -- Pattern standard pour les SaaS solo dev en 2026_
_Sources: [Vercel Preview Deployments](https://vercel.com/docs/deployments/preview-deployments), [Railway Environments](https://docs.railway.com/guides/environments)_

### 3.2 Environnement Local

#### Supabase CLI (BDD + Auth + Storage local)

```bash
# Installation
npm install -g @supabase/cli

# Initialisation
supabase init
supabase start

# URLs locales (toujours les memes) :
# API URL:         http://localhost:54321
# Studio:          http://localhost:54323
# Anon key:        eyJhbG... (stable entre les relances)
# Service role key: eyJhbG... (stable entre les relances)
```

**Avantages** : Auth integree, Storage local, Real-time local, pas de connexion reseau requise. Zero cout.

#### Turbo Dev (Hot Reload Parallele)

```bash
pnpm dev
# Lance en parallele :
# - Next.js (port 3000)
# - NestJS (port 3001)
# - Supabase local (port 54321)
```

#### Stripe CLI (Webhooks Locaux)

```bash
# Terminal 1 : ecouter
stripe listen --forward-to localhost:3001/webhooks/stripe
# Output: whsec_xxx (a mettre dans .env.local)

# Terminal 2 : tester
stripe trigger payment_intent.succeeded
```

#### Inngest Dev Server (Background Jobs)

```bash
npx inngest-cli@latest dev
# Dashboard: http://localhost:8288
# Tester les jobs visuellement
```

#### Seed Data

**supabase/seed.sql** :
```sql
-- User test
INSERT INTO auth.users (id, email, created_at)
VALUES ('11111111-1111-1111-1111-111111111111', 'test@conformloc.fr', NOW());

-- Propriete test
INSERT INTO properties (id, user_id, address, status)
VALUES ('22222222-2222-2222-2222-222222222222',
        '11111111-1111-1111-1111-111111111111',
        '123 Rue de Rivoli, 75001 Paris',
        'PENDING');
```

```bash
supabase db reset  # Applique migrations + seed
```

### 3.3 Variables d'Environnement

#### Hierarchie des Fichiers

```
.env                    ← Valeurs par defaut (commitee)
.env.local              ← Overrides locaux (GITIGNORE)
.env.example            ← Template publique (commitee, sans secrets)
```

#### .env.example (a committer)

```bash
# === Database ===
DATABASE_URL=postgresql://dev:dev_password@localhost:5432/conformloc_dev

# === Supabase Local (from supabase status) ===
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# === Stripe (test mode) ===
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# === Inngest ===
INNGEST_EVENT_KEY=test_key_local
INNGEST_BASE_URL=http://localhost:8288

# === Resend ===
RESEND_API_KEY=re_...

# === App ===
NEXT_PUBLIC_APP_URL=http://localhost:3000
API_URL=http://localhost:3001
NODE_ENV=development
```

#### Variables par Environnement

| Variable | Local | Preview | Production |
|----------|-------|---------|------------|
| `DATABASE_URL` | `localhost:5432` | Supabase Pro (shared) | Supabase Pro |
| `NEXT_PUBLIC_SUPABASE_URL` | `localhost:54321` | `xxx.supabase.co` | `xxx.supabase.co` |
| `STRIPE_SECRET_KEY` | `sk_test_...` | `sk_test_...` | `sk_live_...` |
| `NEXT_PUBLIC_APP_URL` | `localhost:3000` | `branch.vercel.app` | `conformloc.fr` |
| `API_URL` | `localhost:3001` | `api-preview.railway.app` | `api.conformloc.fr` |
| `NODE_ENV` | `development` | `production` | `production` |

#### Validation avec @t3-oss/env-nextjs

**apps/web/src/env.ts** :
```typescript
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
    INNGEST_EVENT_KEY: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
```

**Avantage** : Si une variable est manquante, le build ECHOUE immediatement. Type-safe dans tout le code.

_Sources: [T3 Env](https://env.t3.gg/docs/nextjs), [Supabase Local Development](https://supabase.com/docs/guides/local-development), [Stripe CLI](https://docs.stripe.com/stripe-cli), [Inngest Local Dev](https://www.inngest.com/docs/local-development)_

### 3.4 Preview Environments (PR Deploys)

#### Vercel (Frontend) -- Automatique

Chaque push sur une branche non-main cree automatiquement un preview deployment avec son propre URL. Cout : **zero** (inclus dans tous les plans Vercel).

URL : `https://branch-name-conformloc.vercel.app`

#### Railway (Backend) -- Configuration Requise

Railway peut creer des **Ephemeral Environments** par PR :
1. Project Settings → Environments → Enable PR Environments
2. Chaque PR cree une copie isolee du service API
3. URL temporaire : `api-staging-pr-123.railway.app`
4. Supprimee automatiquement quand la PR est fermee

#### Database Preview

**Recommandation : Partager la DB Supabase Pro entre preview et prod.**

Supabase Branching (DB branch par PR) est couteux pour un solo dev. Alternative :
- Les previews utilisent la meme DB que la prod
- Isolation via prefixes ou RLS policies
- Acceptable pour un MVP solo dev

### 3.5 Production

| Composant | Service | Custom Domain | SSL |
|-----------|---------|---------------|-----|
| Frontend | Vercel Pro | `conformloc.fr` | Auto (Let's Encrypt) |
| Backend API | Railway | `api.conformloc.fr` | Auto (Caddy) |
| BDD + Auth | Supabase Pro | Sous-domaine auto | Auto |

---

## 4. Deploiement

### 4.1 Vercel -- Next.js Monorepo

**Detection automatique** : Vercel detecte Turborepo via la presence de `turbo.json`.

**Configuration Dashboard** :
- Root Directory : `apps/web`
- Build Command : `pnpm turbo run build --filter=web`
- Output Directory : `.next`
- Install Command : auto-detecte (pnpm)

**Ignored Build Step** (skip si apps/web n'a pas change) :
```bash
npx turbo-ignore --fallback=HEAD^1
```

**Deployments** :
- **Preview** : automatique sur chaque push (branche non-main)
- **Production** : automatique sur push to `main`
- **Rollback** : instantane (<1s) via dashboard ou `vercel rollback`

**vercel.json** (optionnel, a la racine) :
```json
{
  "buildCommand": "pnpm turbo run build --filter=web",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### 4.2 Railway -- NestJS Monorepo

**Configuration Dashboard** :
- Root Directory : `apps/api`
- Build Command : `pnpm turbo run build --filter=api`
- Start Command : `node dist/main.js`
- Watch Paths : `/apps/api/**`, `/packages/**`

**Dockerfile recommande** (image ~76MB vs 1.3GB avec Nixpacks) :

**apps/api/Dockerfile** :
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@9
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages ./packages
COPY apps/api ./apps/api
RUN pnpm install --frozen-lockfile
RUN pnpm turbo run build --filter=api

# Runtime stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN npm install -g pnpm@9
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["node", "dist/main.js"]
```

**Health Check Endpoint** :
```typescript
// apps/api/src/health/health.controller.ts
@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
```

**Railway CLI** :
```bash
railway login
railway up -s api -e production    # Deploy vers prod
railway logs -s api -f             # Suivre les logs
railway redeploy -s api            # Redeploy
```

### 4.3 Supabase -- Migrations Drizzle en CI/CD

**Workflow recommande** :
1. Ecrire le schema en TypeScript (Drizzle)
2. Generer les migrations SQL (`drizzle-kit generate`)
3. Versionner les fichiers SQL dans git
4. Appliquer automatiquement en CI/CD

**packages/db/drizzle.config.ts** :
```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

**Scripts** :
```json
{
  "scripts": {
    "migrate:generate": "drizzle-kit generate",
    "migrate:deploy": "drizzle-kit migrate",
    "migrate:studio": "drizzle-kit studio"
  }
}
```

**GitHub Actions pour migrations** :
```yaml
# .github/workflows/db-migrations.yml
name: Database Migrations

on:
  push:
    branches: [main]
    paths:
      - 'packages/db/src/**'
      - 'packages/db/migrations/**'

jobs:
  migrate:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - name: Apply migrations
        env:
          DATABASE_URL: ${{ secrets.PRODUCTION_DATABASE_URL }}
        run: pnpm --filter db run migrate:deploy
```

**NestJS startup migration** (alternative) :
```typescript
// apps/api/src/main.ts
import { migrate } from 'drizzle-orm/postgres-js/migrator';

async function bootstrap() {
  await migrate(db, { migrationsFolder: './migrations' });
  // ... lancer l'app
}
```

### 4.4 Strategie de Rollback

| Composant | Methode | Temps | Detail |
|-----------|---------|-------|--------|
| **Frontend** | `vercel rollback` | < 1 seconde | Rollback atomique vers le deployment precedent |
| **Backend** | Railway dashboard → Rollback | < 1 minute | Revient au deployment precedent |
| **Database** | Migration inverse manuelle | Variable | Creer un fichier SQL de rollback |
| **Feature** | Vercel Edge Config | < 5 secondes | Desactiver un feature flag sans redeployer |

**Limitation Drizzle** : Pas de rollback natif. Il faut creer manuellement une migration inverse :
```sql
-- migrations/0002_rollback_phone_number.sql
ALTER TABLE users DROP COLUMN phone_number;
```

**Feature Flags (Vercel Edge Config)** pour rollback sans redeploiement :
```typescript
import { get } from '@vercel/edge-config';

export async function isFeatureEnabled(flag: string): Promise<boolean> {
  const flags = await get('featureFlags');
  return flags?.[flag] ?? false;
}
```

### 4.5 Zero-Downtime Deployment

| Service | Methode | Detail |
|---------|---------|--------|
| **Vercel** | Atomic deployments (defaut) | Nouveau code build sur nouvelle instance, switch instantane |
| **Railway** | Rolling deploys + health check | Ancien code reste actif jusqu'a ce que `/health` retourne 200 |
| **Database** | Expand-Contract pattern | Ajouter colonne → backfill → supprimer ancienne |

**Expand-Contract pour migrations sans downtime** :
```
Phase 1 (EXPAND)   : ALTER TABLE users ADD COLUMN phone_new VARCHAR(20);
Phase 2 (MIGRATE)  : UPDATE users SET phone_new = phone;
Phase 3 (CONTRACT) : ALTER TABLE users DROP COLUMN phone;
                     ALTER TABLE users RENAME COLUMN phone_new TO phone;
```

Deployer le code entre chaque phase. Le code doit gerer les deux colonnes pendant la transition.

_Sources: [Vercel Instant Rollback](https://vercel.com/docs/deployments/instant-rollback), [Railway Health Checks](https://docs.railway.com/guides/healthchecks), [Drizzle Migrations](https://orm.drizzle.team/docs/kit-overview), [Expand-Contract Pattern](https://www.tim-wellhausen.de/papers/ExpandAndContract/ExpandAndContract.html)_

---

## 5. Monitoring et Observabilite

### 5.1 Stack de Monitoring Recommande

| Outil | Role | Cout | Tier |
|-------|------|------|------|
| **Sentry** | Error tracking (Next.js + NestJS) | $0 (5K erreurs/mois) | Free |
| **Vercel Analytics** | Core Web Vitals, trafic | Inclus (Pro) | Inclus |
| **Vercel Speed Insights** | Performance frontend | Inclus (Pro) | Inclus |
| **Railway Metrics** | CPU, Memory, Network (API) | Inclus | Inclus |
| **UptimeRobot** | Uptime monitoring + alertes | $0 (50 monitors) | Free |
| **Plausible** | Analytics RGPD (deja prevu) | 10 EUR/mois | Payant |

**Budget monitoring supplementaire : $0** (tout est dans les free tiers ou inclus dans Vercel Pro/Railway).

### 5.2 Sentry -- Error Tracking

**Next.js** :
```typescript
// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

**NestJS** :
```typescript
// apps/api/src/main.ts
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
});

// Global exception filter
@Catch()
export class SentryFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    Sentry.captureException(exception);
    super.catch(exception, host);
  }
}
```

### 5.3 Vercel Analytics + Speed Insights

```typescript
// apps/web/src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 5.4 UptimeRobot -- Monitoring + Alertes

**Configuration gratuite** :
1. Monitor HTTP : `https://api.conformloc.fr/health` (interval 5 min)
2. Monitor HTTP : `https://conformloc.fr` (interval 5 min)
3. Alerte email/Slack si down > 5 minutes

_Sources: [Sentry Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/), [Sentry NestJS](https://docs.sentry.io/platforms/javascript/guides/nestjs/), [Vercel Analytics](https://vercel.com/docs/analytics), [UptimeRobot](https://uptimerobot.com/)_

---

## 6. Structure Finale des Fichiers DevOps

```
conformloc/
├── .github/
│   └── workflows/
│       ├── ci.yml                    ← CI principal (lint, typecheck, test, build, e2e)
│       ├── release.yml               ← Changesets auto-release
│       └── db-migrations.yml         ← Migrations auto sur push main
│
├── .husky/
│   ├── pre-commit                    ← lint-staged
│   └── commit-msg                    ← commitlint
│
├── .changeset/
│   └── config.json                   ← Changesets config
│
├── apps/
│   ├── web/
│   │   ├── src/env.ts               ← @t3-oss/env-nextjs validation
│   │   ├── playwright.config.ts     ← E2E config
│   │   ├── vitest.config.ts         ← Unit tests frontend
│   │   ├── sentry.client.config.ts  ← Sentry frontend
│   │   └── eslint.config.js         ← Extends packages/config
│   └── api/
│       ├── Dockerfile               ← Multi-stage build (76MB)
│       ├── vitest.config.ts         ← Unit tests backend
│       ├── src/health/              ← Health check endpoint
│       └── eslint.config.js         ← Extends packages/config
│
├── packages/
│   ├── config/
│   │   ├── eslint.config.js         ← ESLint flat config partagee
│   │   └── prettier.config.js       ← Prettier partagee
│   └── db/
│       ├── drizzle.config.ts        ← Drizzle Kit config
│       └── migrations/              ← SQL migrations versionnees
│
├── supabase/
│   ├── config.toml                  ← Supabase CLI config
│   └── seed.sql                     ← Seed data dev local
│
├── .env.example                     ← Template (commitee)
├── .lintstagedrc.mjs                ← lint-staged config
├── commitlint.config.js             ← Commit message validation
├── knip.config.ts                   ← Dead code detection
├── renovate.json                    ← Deps auto-update
├── turbo.json                       ← Turborepo tasks
├── vitest.workspace.ts              ← Vitest monorepo config
└── vercel.json                      ← Vercel deployment config
```

---

## 7. Checklist de Setup

### Jour 1 : Git & Qualite

- [ ] Initialiser le repo GitHub
- [ ] Configurer les branch protection rules sur `main`
- [ ] Installer Husky + lint-staged + commitlint
- [ ] Configurer ESLint flat config + Prettier partagees
- [ ] Initialiser Changesets

### Jour 2 : CI/CD

- [ ] Creer `.github/workflows/ci.yml`
- [ ] Creer `.github/workflows/release.yml`
- [ ] Creer `.github/workflows/db-migrations.yml`
- [ ] Configurer Vercel Remote Cache (turbo login)
- [ ] Installer Renovate

### Jour 3 : Environnements

- [ ] Setup Supabase CLI local (`supabase init && supabase start`)
- [ ] Configurer turbo dev (Next.js + NestJS en parallele)
- [ ] Setup Stripe CLI (`stripe listen`)
- [ ] Setup Inngest Dev Server
- [ ] Creer `.env.example` + `.env.local`
- [ ] Setup @t3-oss/env-nextjs

### Jour 4 : Deploiement Production

- [ ] Connecter GitHub → Vercel (auto-deploy)
- [ ] Configurer Railway service API (root dir, build, start, health check)
- [ ] Configurer custom domains (conformloc.fr + api.conformloc.fr)
- [ ] Configurer variables d'environnement (Vercel + Railway)
- [ ] Tester le pipeline complet : push → CI → deploy

### Jour 5 : Monitoring

- [ ] Installer Sentry (Next.js + NestJS)
- [ ] Ajouter Vercel Analytics + Speed Insights
- [ ] Configurer UptimeRobot (2 monitors)
- [ ] Tester le rollback (Vercel + Railway)

---

## 8. Couts Recapitulatifs

### Infrastructure Production (inchange)

| Service | Cout/mois |
|---------|-----------|
| Vercel Pro | $20 |
| Railway | $5-10 |
| Supabase Pro | $25 |
| Plausible | 10 EUR |
| **Total infra** | **~60-65 EUR** |

### DevOps (entierement gratuit)

| Outil | Cout |
|-------|------|
| GitHub Actions (2000 min/mois) | $0 |
| Vercel Remote Cache | $0 |
| Vercel Preview Deploys | $0 |
| Sentry (5K erreurs/mois) | $0 |
| UptimeRobot (50 monitors) | $0 |
| Renovate | $0 |
| Changesets | $0 |
| **Total DevOps** | **$0** |

**Cout total mensuel : ~60-65 EUR/mois** (inchange par rapport a la recherche technique initiale).

---

## Sources Principales

1. [Turborepo - GitHub Actions CI](https://turborepo.dev/docs/guides/ci-vendors/github-actions)
2. [Vercel - Monorepos with Turborepo](https://vercel.com/docs/monorepos/turborepo)
3. [Railway - Monorepo Deployment](https://docs.railway.com/guides/monorepo)
4. [Railway - Health Checks](https://docs.railway.com/guides/healthchecks)
5. [Railway - Environments](https://docs.railway.com/guides/environments)
6. [Supabase - Local Development](https://supabase.com/docs/guides/local-development)
7. [Supabase - Database Branching](https://supabase.com/docs/guides/deployment/branching)
8. [Drizzle ORM - Migrations](https://orm.drizzle.team/docs/kit-overview)
9. [Changesets - Versioning Monorepo](https://vercel.com/academy/production-monorepos/changesets-versioning)
10. [Conventional Commits v1.0.0](https://www.conventionalcommits.org/)
11. [GitHub Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
12. [T3 Env - Environment Variables](https://env.t3.gg/docs/nextjs)
13. [Sentry - Next.js Guide](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
14. [Sentry - NestJS Guide](https://docs.sentry.io/platforms/javascript/guides/nestjs/)
15. [Vercel - Instant Rollback](https://vercel.com/docs/deployments/instant-rollback)
16. [Expand-Contract Pattern](https://www.tim-wellhausen.de/papers/ExpandAndContract/ExpandAndContract.html)
17. [Knip - Dead Code Detection](https://knip.dev/)
18. [Renovate - Monorepo Config](https://docs.renovatebot.com/)
19. [Stripe CLI - Webhook Testing](https://docs.stripe.com/stripe-cli)
20. [Inngest - Local Development](https://www.inngest.com/docs/local-development)
