---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - domain-conformloc-research-2026-02-06.md
  - market-conformloc-research-2026-02-06.md
workflowType: 'research'
lastStep: 1
research_type: 'technical'
research_topic: 'ConformLoc - Architecture technique SaaS conformite reglementaire loueurs meubles de tourisme France'
research_goals: 'Definir architecture optimale, evaluer stack technique, identifier APIs disponibles, concevoir le modele de donnees communales, planifier le MVP technique'
user_name: 'Boss'
date: '2026-02-06'
web_research_enabled: true
source_verification: true
---

# Research Report: Technical

**Date:** 2026-02-06
**Author:** Boss
**Research Type:** Technical

---

## Research Overview

Recherche technique pour ConformLoc, SaaS de conformite reglementaire pour loueurs de meubles de tourisme en France. Cette recherche s'appuie sur le domain research (BMAD 4.5/5) et le market research completes le 2026-02-06.

---

## Technical Research Scope Confirmation

**Research Topic:** ConformLoc - Architecture technique SaaS conformite reglementaire loueurs meubles de tourisme France
**Research Goals:** Definir architecture optimale, evaluer stack technique, identifier APIs disponibles, concevoir le modele de donnees communales, planifier le MVP technique

**Technical Research Scope:**

- Architecture Analysis - design patterns, frameworks, system architecture
- Implementation Approaches - development methodologies, coding patterns
- Technology Stack - languages, frameworks, tools, platforms
- Integration Patterns - APIs, protocols, interoperability
- Performance Considerations - scalability, optimization, patterns

**Research Methodology:**

- Current web data with rigorous source verification
- Multi-source validation for critical technical claims
- Confidence level framework for uncertain information
- Comprehensive technical coverage with architecture-specific insights

**Scope Confirmed:** 2026-02-06

---

## Technology Stack Analysis

### Langages de Programmation

**TypeScript / JavaScript -- Standard pour ce projet**

ConformLoc sera construit en TypeScript, le standard dominant pour les SaaS B2C en 2026. Ce choix est dicte par le profil du fondateur (solo dev JS/TS) et par l'ecosysteme disponible :

- **TypeScript** : Typage statique, autocompletion, detection d'erreurs a la compilation. Essentiel pour un projet reglementaire ou la precision des donnees est critique.
- **JavaScript (Node.js runtime)** : Serveur et client unifies, un seul langage pour tout le stack.
- Pas de raison d'introduire Python, Go ou Rust pour ce cas d'usage -- le stack JS/TS couvre 100% des besoins avec des performances adequates.

_Confiance : HAUTE -- Choix impose par le contexte (profil fondateur + ecosysteme SaaS)_

### Frameworks de Developpement

#### Architecture Separee : Next.js (Frontend) + NestJS (Backend)

**Decision architecturale majeure** : Separer frontend et backend dans un **monorepo Turborepo** pour eviter le piege du "tout dans Next.js" qui mene inevitablement a du code spaghetti quand la logique metier se complexifie (8 dimensions de conformite, 6+ APIs gouvernementales, regles communales variables).

#### Next.js App Router -- Frontend / BFF

**Next.js 15+/16 avec App Router** gere exclusivement le frontend et sert de BFF (Backend For Frontend) :

| Critere | Next.js App Router | SvelteKit | Astro | Remix |
|---------|-------------------|-----------|-------|-------|
| **Maturite SaaS** | Excellente | Bonne (croissance 300% YoY) | Limitee (static-first) | Bonne |
| **Bundle size (homepage)** | ~85 KB | ~8 KB | ~0-5 KB | Moyen |
| **Lighthouse score** | ~75 | ~90 | ~95 | ~80 |
| **Ecosysteme composants** | Massif (React) | Croissant | Limite | React |
| **Server Components** | Stable, production-ready | N/A | N/A | Equivalent (loaders) |

**Role de Next.js dans ConformLoc (frontend uniquement) :**
1. **Server Components** : Rendu HTML cote serveur, zero JS client pour le rendu initial. Critique pour le lead magnet gratuit.
2. **Server Actions comme thin controllers** : Recoit le formulaire, fait un `fetch()` vers l'API NestJS, retourne le resultat. Aucune logique metier dans Next.js.
3. **Streaming & Suspense** : L'UI s'affiche instantanement pendant que NestJS orchestre les APIs gouvernementales.
4. **App Router** est le standard officiel en 2026.

**Ce que Next.js ne fait PAS** : Pas de logique metier, pas d'appels directs aux APIs gouvernementales, pas de gestion de cron/jobs, pas de webhooks Stripe.

_Sources: [Next.js Routing Explained 2026](https://www.grapestechsolutions.com/blog/next-js-routing-app-router-vs-page-router/), [SvelteKit vs Next.js 2026](https://dev.to/paulthedev/sveltekit-vs-nextjs-in-2026-why-the-underdog-is-winning-a-developers-deep-dive-155b), [Next.js 15 Blog](https://nextjs.org/blog/next-15)_

#### NestJS -- Backend API / Logique Metier

**NestJS** est le framework backend qui porte toute la logique metier de ConformLoc :

| Critere | NestJS | Hono | Fastify |
|---------|--------|------|---------|
| **Architecture** | Modulaire (DI, Guards, Interceptors) | Minimaliste | Plugin-based |
| **Structure** | Opinionnee, scalable | Libre, risque spaghetti | Semi-structuree |
| **TypeScript** | Natif, decorateurs | Bon | Bon |
| **Testing** | DI = mocking facile | Manuel | Manuel |
| **Ecosysteme** | Riche (Swagger, CQRS, Cron, etc.) | Leger | Moyen |
| **Courbe d'apprentissage** | Plus elevee (Angular-like) | Tres faible | Faible |

**Pourquoi NestJS pour ConformLoc :**
1. **Architecture modulaire** : Chaque dimension de conformite = un module isole (ComplianceModule, DPEModule, TaxeSejourModule, ZoneTendueModule, AlertModule, PaymentModule)
2. **Injection de dependances** : Testing unitaire facile -- mock des APIs gouvernementales sans modifier le code
3. **Guards et Interceptors** : Auth JWT (Supabase), rate limiting, logging, cache -- appliques globalement ou par route
4. **Swagger auto-genere** : Documentation API gratuite via decorateurs
5. **Scalabilite du code** : Quand une nouvelle regle reglementaire arrive, on ajoute un module sans toucher au reste

**Modules NestJS prevus pour ConformLoc :**

```
apps/api/src/
├── auth/               ← JWT validation (Supabase tokens)
├── compliance/         ← Orchestrateur diagnostic (appels paralleles)
├── dpe/                ← Service DPE ADEME
├── geocoding/          ← Service IGN Geoplateforme
├── taxe-sejour/        ← Service DELTA
├── zone-tendue/        ← Lookup dataset local
├── commune-rules/      ← Regles communales (BDD)
├── scoring/            ← Calcul du score 8 dimensions
├── alerts/             ← Inngest event triggers
├── payment/            ← Stripe webhooks + billing
├── email/              ← Resend transactionnel
└── common/             ← Guards, interceptors, filters
```

_Sources: [NestJS Documentation](https://docs.nestjs.com/), [NestJS vs Fastify 2026](https://www.simform.com/blog/nestjs-vs-fastify/)_

#### Monorepo Turborepo -- Structure du Projet

```
conformloc/
├── apps/
│   ├── web/              ← Next.js (UI, pages, formulaires)
│   └── api/              ← NestJS (logique metier, APIs gov, scoring)
├── packages/
│   ├── core/             ← Types partages, DTOs, enums (ex: DiagnosticResult, ComplianceScore)
│   ├── db/               ← Schema Drizzle, migrations, seed
│   └── config/           ← ESLint, tsconfig, prettier partages
├── turbo.json
├── package.json
└── .env                  ← Variables partagees
```

**Avantages du monorepo** :
1. **Types partages** : Un DTO defini dans `packages/core` est utilise par Next.js ET NestJS -- zero divergence
2. **Schema BDD unique** : Drizzle dans `packages/db`, importe par les deux apps
3. **Build intelligent** : Turborepo ne rebuild que ce qui a change (cache local + remote)
4. **Un seul `pnpm install`** : Dependances unifiees, pas de version mismatch
5. **CI/CD simplifie** : Un repo, un pipeline, des deplois independants

**Communication Next.js -> NestJS** :
```typescript
// apps/web/src/app/actions/diagnostic.ts (Server Action)
"use server"
export async function runDiagnostic(address: string) {
  const res = await fetch(`${process.env.API_URL}/compliance/diagnostic`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address }),
  });
  return res.json() as Promise<DiagnosticResult>; // type de packages/core
}
```

#### Librairies Cles

**Frontend (apps/web)** :
- **React 19** : Server Components et Server Actions
- **Tailwind CSS v4** : Styling utilitaire, rapide a iterer
- **Shadcn/ui** : Composants accessibles pre-construits
- **React Hook Form** : Gestion de formulaires performante

**Backend (apps/api)** :
- **NestJS 11** : Framework backend modulaire
- **@nestjs/swagger** : Documentation API auto-generee
- **@nestjs/schedule** : Cron natif (backup Inngest)
- **class-validator + class-transformer** : Validation DTO

**Partage (packages/core)** :
- **Zod** : Validation de schemas TypeScript (runtime, partage front/back)
- **TypeScript** : Strict mode, types partages

### Base de Donnees et Stockage

#### Supabase Pro -- Backend-as-a-Service Recommande

**Decision cle : Supabase Pro ($25/mois) vs Neon + services separes**

| Critere | Supabase Pro ($25/mois) | Neon Launch ($5/mois) + services |
|---------|------------------------|----------------------------------|
| **Auth integree** | OUI (50K MAU) | NON (besoin de Clerk/Auth.js) |
| **Real-time** | OUI (WebSocket natif) | NON |
| **Stockage fichiers** | OUI (S3 protocol) | NON |
| **Edge Functions** | OUI (Deno) | NON |
| **Cold starts** | Aucun (compute dedie) | ~500ms depuis l'idle |
| **Cout total + auth** | ~$25/mois tout inclus | ~$5 + $0-25 auth = $5-30/mois |
| **DX solo dev** | Dashboard unifie | Multiple services a gerer |
| **Scalabilite 50K users** | Prouvee (connection pooling) | Bonne (auto-scaling) |
| **Region EU RGPD** | OUI (documentee) | Incertain post-Databricks |

**VERDICT : Supabase Pro** pour ConformLoc car :
1. **Auth integree** = pas de service supplementaire a integrer (OAuth, magic links, RLS)
2. **Real-time** = alertes reglementaires en temps reel (feature future)
3. **Dashboard unifie** = un solo dev n'a pas le temps de gerer 4 services separes
4. **$25/mois couvre tout** (auth + BDD + stockage + edge functions)

**Attention** : Le free tier Supabase **pause les projets apres 7 jours d'inactivite** -- il faut passer en Pro des le lancement en production.

_Sources: [Supabase Pricing](https://supabase.com/pricing), [Neon vs Supabase Comparison](https://www.bytebase.com/blog/neon-vs-supabase/), [Supabase at Scale](https://www.stacksync.com/blog/supabase-at-scale)_

#### PostgreSQL -- Moteur de Base de Donnees

PostgreSQL (via Supabase) est le choix naturel pour les donnees reglementaires :
- **ACID compliance** : Integrite transactionnelle pour les donnees de conformite
- **JSONB** : Stockage flexible des regles communales (chaque commune a des champs differents)
- **Full-text search** : Recherche dans les textes reglementaires
- **GIS (PostGIS)** : Calculs geographiques pour les zones tendues et les regles par arrondissement
- **Row Level Security (RLS)** : Securite au niveau des lignes pour les donnees multi-tenant

#### Drizzle ORM -- Acces aux Donnees

**Decision : Drizzle ORM plutot que Prisma**

| Critere | Drizzle | Prisma |
|---------|---------|--------|
| **Performance runtime** | Baseline (1x) | Jusqu'a 100x plus lent (SQLite) |
| **Generation de code** | Aucune (inference TS) | Oui (`prisma generate`) |
| **Serverless** | Optimise (pas de code genere) | Cold starts plus longs |
| **SQL genere** | 1 requete SQL par operation, transparent | Peut generer plusieurs requetes cachees |
| **Compilation TypeScript** | Plus lente avec gros schemas (5000+ types) | Plus rapide (100s types) |
| **Controle SQL** | Total (SQL-first) | Abstrait |

**Drizzle est superieur pour ConformLoc** car :
1. Requetes complexes sur 36K communes + DPE = besoin de SQL optimise et transparent
2. Pas de code genere = meilleur pour les Edge Functions Supabase
3. Schema defini en TypeScript pur (coherent avec le stack)
4. Outil d'introspection officiel si migration depuis un schema existant

_Sources: [Drizzle vs Prisma 2026](https://betterstack.com/community/guides/scaling-nodejs/drizzle-vs-prisma/), [Drizzle ORM Benchmarks](https://orm.drizzle.team/benchmarks)_

### Outils de Developpement et Plateformes

#### Authentification

**Deux options viables :**

| Critere | Supabase Auth (integre) | Clerk |
|---------|------------------------|-------|
| **Free tier** | 50K MAU (inclus dans Supabase) | 10K MAU |
| **Social login** | Basique (Google, Apple, GitHub) | 20+ providers |
| **Magic links** | OUI | OUI |
| **Composants UI pre-construits** | Non | OUI (excellent) |
| **Bot detection** | Non | OUI (ML) |
| **MFA** | Limite | OUI (SMS, TOTP, backup codes) |
| **Integration** | Native Supabase RLS | SDK React |

**Recommandation** : Utiliser **Supabase Auth** (deja inclus dans Supabase Pro) pour le MVP. Migrer vers Clerk uniquement si les composants pre-construits ou le bot detection deviennent necessaires a grande echelle.

#### Paiement : Stripe

**Stripe est le choix evident pour un SaaS B2C en France :**

- **Tarif France domestique** : 1.5% + 0,25 EUR par transaction
- **International** : +3.25% supplementaires
- **Stripe Billing** : Abonnements recurrents mensuels, essais gratuits, factures automatiques
- **Stripe Checkout** : Paiement en 1 clic, methodes sauvegardees
- **Customer Portal** : Gestion self-service (annulation, upgrade, downgrade)
- **Stripe Tax** : Gestion TVA automatique + conformite e-facturation France (obligatoire sept 2026 pour grandes entreprises)

**Alternatives ecartees** :
- **LemonSqueezy** : 5% + $0.50 = 3x plus cher que Stripe France
- **Paddle** : 5% + $0.50 = idem, MoR ajoute de la complexite inutile pour un marche 100% France

_Sources: [Stripe Pricing France](https://stripe.com/pricing), [Stripe France E-Invoicing](https://stripe.com/resources/more/e-invoicing-france)_

#### Email Transactionnel : Resend

| Service | Free tier | Prix Pro | DX | Marketing | React Email |
|---------|-----------|----------|------|-----------|-------------|
| **Resend** | 3 000/mois | $20/mois (50K) | Excellent | Limite | Natif |
| Postmark | 100/mois | $15/mois (10K) | Excellent | Non | Non |
| Brevo | 15 000/mois | 9 EUR/mois | Bon | OUI | Non |
| SendGrid | 100/jour | Variable | Bon | OUI | Non |

**Resend** est recommande pour :
1. Integration native avec **React Email** (templates en composants React)
2. Free tier suffisant pour le MVP (3 000 emails/mois = alertes + bienvenue + recus)
3. DX excellent pour un solo dev
4. Brevo en backup si besoin de marketing newsletters plus tard

_Sources: [Resend Pricing](https://resend.com/pricing), [Transactional Email Services 2026](https://www.emailtooltester.com/en/blog/best-transactional-email-service/)_

#### Background Jobs : Inngest

**Decision critique pour les alertes reglementaires :**

| Service | Free tier | Architecture | Pour ConformLoc |
|---------|-----------|-------------|----------------|
| **Inngest** | 50K exec/mois | Event-driven, durable | IDEAL |
| Vercel Cron | Inclus | Simple scheduled | Basique |
| QStash (Upstash) | Inclus | Message queue | Alternative |
| Trigger.dev | TBD | Workflow orchestration | Trop nouveau |

**Inngest (free tier)** est le choix car :
1. **50 000 executions/mois gratuites** = largement suffisant (ConformLoc ~35 exec/mois)
2. **Cron avec timezone** : `"TZ=Europe/Paris 0 12 * * 5"` pour les alertes hebdomadaires
3. **Retries automatiques** : Si une API gouvernementale est down, Inngest reessaye
4. **Step functions** : Workflows multi-etapes (verifier DPE > verifier taxe > generer alerte > envoyer email)
5. **Pas de timeout** : Contrairement a Vercel Cron (60s max)

Besoins ConformLoc couverts :
- Scan quotidien des changements reglementaires : 1 exec/jour = 30/mois
- Rapports hebdomadaires de conformite : 4/mois
- Sync facturation mensuelle : 1/mois

_Sources: [Inngest Pricing](https://www.inngest.com/pricing), [Inngest Scheduled Functions](https://www.inngest.com/docs/guides/scheduled-functions)_

#### Analytics : Plausible

**Priorite absolue pour un SaaS B2C France : conformite RGPD sans bandeau cookies.**

| Outil | Free tier | Prix | RGPD | Cookies | Hebergement |
|-------|-----------|------|------|---------|-------------|
| **Plausible** | 30j essai | 10 EUR/mois | Excellent | Aucun | Falkenstein, Allemagne |
| Umami | 100K events/mois | 20 EUR/mois | Excellent | Aucun | Self-hosted ou cloud |
| PostHog | 1M events/mois | $500/mois (Team) | Bon | Configurable | Francfort |

**Plausible** est recommande car :
1. **Pas de cookies** = pas de bandeau consentement = meilleur taux de conversion sur le diagnostic gratuit
2. **Heberge en UE** (Falkenstein, Allemagne) = RGPD natif
3. **10 EUR/mois** = budget raisonnable
4. 16 000+ abonnes = service mature et fiable

**Sentry (free tier)** pour le suivi d'erreurs : 5K erreurs/mois gratuit, suffisant pour le MVP.

**Vercel Analytics** inclus dans le plan Pro pour le monitoring Core Web Vitals.

_Sources: [Plausible GDPR Compliance](https://plausible.io/privacy-focused-web-analytics), [Sentry Pricing](https://sentry.io/pricing/)_

### Infrastructure Cloud et Deploiement

#### Architecture Distribuee : Vercel (Frontend) + Railway (Backend)

**Option 1 retenue** : Deploiement separe pour chaque app du monorepo, avec communication interne via HTTPS.

```
INTERNET
    |
    ├── Vercel (Next.js)          ← apps/web, SSR, CDN, static assets
    │       |
    │       └── fetch() ──────────> Railway (NestJS)  ← apps/api, logique metier
    │                                    |
    │                                    ├── Supabase (PostgreSQL + Auth + Storage)
    │                                    ├── APIs gouvernementales (DPE, IGN, DELTA)
    │                                    ├── Stripe (webhooks entrants)
    │                                    ├── Inngest (background jobs)
    │                                    └── Resend (emails)
    |
    └── Plausible (analytics)
```

**Pourquoi Vercel + Railway :**
- **Vercel** : Optimise pour Next.js (zero-config, edge network, preview deploys, cache ISR)
- **Railway** : Ideal pour NestJS (container Docker, scaling horizontal, cout previsible ~$5-10/mois)
- **Separation des responsabilites** : Le frontend scale independamment du backend
- **Cout maitrise** : Railway facture a l'usage (~$5/mois pour un service leger), pas de surprises

**Phase 1 -- MVP (0-1K utilisateurs)**

| Composant | Service | Cout |
|-----------|---------|------|
| Frontend + SSR + CDN | Vercel Pro | $20/mois |
| Backend API (NestJS) | Railway Starter | ~$5-10/mois |
| BDD + Auth + Storage | Supabase Pro | $25/mois |
| Email | Resend Free | $0 |
| Cron/Jobs | Inngest Free | $0 |
| Analytics | Plausible | 10 EUR/mois |
| Error tracking | Sentry Free | $0 |
| **TOTAL** | | **~60-65 EUR/mois** |

**Phase 2 -- Croissance (1K-50K utilisateurs) : Meme stack**

Le stack tient sans changement architectural jusqu'a ~50K utilisateurs :
- Supabase Pro supporte 100K MAU
- Railway scale automatiquement (replicas si besoin, ~$15-20/mois)
- Vercel Pro absorbe le trafic frontend avec les credits inclus
- Upgrade Resend a $20/mois pour 50K emails
- **TOTAL : ~85-110 EUR/mois**

**Phase 3 -- Scale (50K+ utilisateurs) : Migration partielle**

Si les couts explosent, considerer :
1. **Self-host NestJS sur Hetzner** ($4/mois CX22) + **Coolify** : Economise Railway
2. **Cloudflare Pages** pour le frontend : Requetes statiques illimitees
3. **Self-host complet** : Hetzner + Coolify pour tout, economise 50-70%

**Variables d'environnement inter-services** :
```
# Vercel (apps/web)
API_URL=https://api.conformloc.fr        # URL Railway
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Railway (apps/api)
DATABASE_URL=postgresql://...             # Supabase connection string
SUPABASE_SERVICE_ROLE_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
INNGEST_SIGNING_KEY=...
RESEND_API_KEY=...
```

**Custom domains** :
- `conformloc.fr` → Vercel (Next.js)
- `api.conformloc.fr` → Railway (NestJS)

_Sources: [Vercel Pricing](https://vercel.com/pricing), [Railway Pricing](https://railway.com/pricing), [Railway NestJS Deploy](https://docs.railway.com/guides/nestjs)_

### Tendances d'Adoption Technologique

#### APIs Gouvernementales Francaises -- Etat des Lieux Critique

**ALERTE : Transition API en cours !** L'ancienne API adresse (api-adresse.data.gouv.fr) a ete **decomissionnee fin janvier 2026**. La nouvelle API est sur la Geoplateforme IGN.

| API | Statut Fevrier 2026 | Rate Limit | Auth | Automatisable |
|-----|---------------------|-----------|------|---------------|
| **DPE ADEME** | Operationnelle | 10 req/s | Non | OUI (par adresse) |
| **Taxe de sejour DELTA** | Operationnelle | Non documente | Non | PARTIEL (~1 837 communes) |
| **BAN Geoplateforme (NOUVEAU)** | Operationnelle | 50 req/s | Non | OUI (geocoding + code INSEE) |
| **Cadastre / DVF** | Operationnelle | Gratuit | Non | OUI (references cadastrales) |
| **GPU (PLU urbanisme)** | Operationnelle | Non documente | Non documente | PARTIEL (docs limitees) |
| **Zone tendue** | Simulateur seulement | N/A | Non | NON (pas d'API dediee) |
| **SIRENE / Entreprise** | Operationnelle | Non documente | API Key INSEE | OUI (SIREN/SIRET) |
| **Teleservice national** | PAS ENCORE DISPONIBLE | N/A | N/A | NON (mai 2026) |

**Endpoints cles pour le MVP :**

```
Geocoding (BAN) :    GET https://data.geopf.fr/geocodage/search
Reverse geocoding :  GET https://data.geopf.fr/geocodage/reverse
DPE :                https://data.ademe.fr/datasets/dpe-france (JSON)
Taxe de sejour :     https://data.economie.gouv.fr/explore/dataset/delta_deliberation_ts_tarif0/api/
Cadastre :           https://cadastre.data.gouv.fr/
GPU (PLU) :          https://www.geoportail-urbanisme.gouv.fr/api/
SIRENE :             https://data.siren-api.fr/v3/
```

**Gaps critiques identifies :**
1. **Zone tendue** : Pas d'API dediee -- il faudra scraper le simulateur Service Public ou utiliser le dataset data.gouv.fr (decret 2023-822, ~1 837 communes)
2. **Taxe de sejour** : Seulement ~1 837 communes sur 36 000 dans DELTA -- couverture partielle
3. **Teleservice national** : Aucune documentation technique publique, aucun sandbox. Portail experimental a https://apimeubles.finances.gouv.fr/ mais acces limite.
4. **DPE ADEME** : Ne contient PAS tous les biens (DPE non obligatoire pour tous) -- donnees partielles
5. **Regles communales de changement d'usage** : Aucune API -- donnees a collecter manuellement

_Sources: [API DPE api.gouv.fr](https://api.gouv.fr/les-api/api_dpe_logements), [IGN Geoplateforme Rate Limits](https://geoservices.ign.fr/documentation/services/limite-d-usage), [DELTA Taxe de sejour](https://data.economie.gouv.fr/explore/dataset/delta_deliberation_ts_tarif0/api/), [Geoportail Urbanisme API](https://www.geoportail-urbanisme.gouv.fr/api/)_

#### Stack Technique Recommande -- Synthese

```
MONOREPO TURBOREPO
├── apps/web/ ─── FRONTEND (Vercel)
│   ├── Next.js 15+ (App Router)
│   ├── React 19 (Server Components + Server Actions)
│   ├── Tailwind CSS v4
│   ├── Shadcn/ui
│   └── React Hook Form
│
├── apps/api/ ─── BACKEND (Railway)
│   ├── NestJS 11 (modules, DI, Guards, Interceptors)
│   ├── @nestjs/swagger (docs API auto-generees)
│   ├── Drizzle ORM (acces BDD)
│   ├── Inngest SDK (background jobs, cron, workflows)
│   ├── Stripe SDK (webhooks, billing)
│   └── Resend SDK (emails transactionnels)
│
├── packages/core/ ─── TYPES PARTAGES
│   ├── DTOs (DiagnosticRequest, ComplianceScore, etc.)
│   ├── Enums (ComplianceDimension, AlertType, etc.)
│   └── Zod schemas (validation runtime front + back)
│
├── packages/db/ ─── BASE DE DONNEES
│   ├── Drizzle schema (tables, relations)
│   ├── Migrations
│   └── Seed data (communes, zones tendues)
│
└── packages/config/ ─── CONFIG PARTAGEE
    ├── tsconfig.base.json
    ├── eslint.config.js
    └── prettier.config.js

SERVICES TIERS
├── Supabase Pro (PostgreSQL + Auth + Storage)
├── Stripe (paiements, abonnements, facturation)
├── Resend + React Email (emails transactionnels)
├── Inngest (background jobs, cron)
├── Plausible (analytics RGPD)
├── Sentry (error tracking)
└── APIs gouvernementales (DPE, IGN, DELTA, SIRENE)

DEPLOIEMENT
├── Vercel Pro ($20/mois) ── apps/web (CDN + SSR)
├── Railway ($5-10/mois) ── apps/api (NestJS container)
├── Supabase Pro ($25/mois) ── BDD + auth + storage
├── Plausible (10 EUR/mois)
└── Budget total : ~60-65 EUR/mois
```

#### Estimation des Couts Mensuels

| Phase | Utilisateurs | Cout mensuel | Detail |
|-------|-------------|-------------|--------|
| **MVP** | 0-1K | ~60-65 EUR/mois | Vercel $20 + Railway $5-10 + Supabase $25 + Plausible 10 EUR |
| **Croissance** | 1K-10K | ~85 EUR/mois | + Resend $20, Railway ~$15 |
| **Scale** | 10K-50K | ~110 EUR/mois | Railway $20, overages legers |
| **Seuil migration** | 50K+ | 110-200 EUR/mois | Self-host NestJS sur Hetzner si Railway > 50 EUR |

_Confiance : HAUTE -- Tous les prix verifies sur les sites officiels en fevrier 2026_

---

## Integration Patterns Analysis

### Design des APIs -- Architecture du Diagnostic ConformLoc

Le coeur technique de ConformLoc est un **pipeline d'APIs chainee** : l'utilisateur entre une adresse, et le systeme interroge sequentiellement plusieurs APIs gouvernementales pour produire un diagnostic de conformite sur 8 dimensions.

#### Flow du Diagnostic Gratuit (MVP)

```
UTILISATEUR          NEXT.JS (Vercel)           NESTJS (Railway)           APIs EXTERNES
    |                     |                           |                         |
    |-- Saisie adresse -->|                           |                         |
    |                     |-- Server Action           |                         |
    |                     |   fetch(API_URL) -------->|                         |
    |                     |                           |-- Geocodage ----------->| IGN Geoplateforme
    |                     |                           |<-- coords + INSEE ------|
    |                     |                           |                         |
    |                     |                           |-- [PARALLELE] -------->|
    |                     |                           |   ├── Query DPE ------>| ADEME DPE
    |                     |                           |   ├── Query taxe ----->| DELTA
    |                     |                           |   ├── Lookup zone ---->| Dataset local
    |                     |                           |   └── Lookup regles -->| BDD communes
    |                     |                           |<-- resultats ----------|
    |                     |                           |                         |
    |                     |                           |-- ScoringService        |
    |                     |                           |   calcul 8 dimensions   |
    |                     |<-- DiagnosticResult (JSON)|                         |
    |<-- UI score --------|                           |                         |
```

**Temps de reponse cible** : < 3 secondes pour l'ensemble du pipeline
**Strategie** : Geocodage d'abord (NestJS GeocodingService), puis DPE + taxe + zone tendue + regles communales en `Promise.all()` dans le ComplianceService

### Protocoles de Communication

#### API DPE ADEME -- Specifications Techniques Detaillees

**Endpoint principal** :
```
GET https://data.ademe.fr/data-fair/api/v1/datasets/dpe-france/lines
```

**Parametres de requete cles** :

| Parametre | Type | Description |
|-----------|------|-------------|
| `q` | string | Recherche texte (adresse, commune) |
| `select` | string | Champs a retourner (liste separee par virgules) |
| `filters` | string | Filtres structures (ex: `code_insee_commune_actualise:75056`) |
| `geo_distance` | string | Filtre par distance geographique (lat,lon,rayon) |
| `size` | integer | Nombre de resultats par page |
| `format` | string | Format de sortie : `json`, `csv`, `geojson` |

**Operateurs de filtre** : `_eq`, `_in`, `_gt`, `_gte`, `_lt`, `_lte`, `_ne`

**Champs de reponse pertinents pour ConformLoc** (22 champs totaux) :

| Champ | Type | Usage ConformLoc |
|-------|------|-----------------|
| `numero_dpe` | string | Identifiant unique du DPE |
| `classe_consommation_energie` | string | Classe A-G (CRITIQUE : determine la conformite) |
| `classe_estimation_ges` | string | Classe GES A-G |
| `date_etablissement_dpe` | date | Validite du DPE (10 ans) |
| `surface_thermique_lot` | number | Surface en m2 |
| `annee_construction` | integer | Annee de construction |
| `code_insee_commune_actualise` | string | Code INSEE 5 chiffres |
| `geo_adresse` | string | Adresse geocodee |
| `latitude` / `longitude` | number | Coordonnees GPS |

**Rate limits** :
- Anonyme : **600 requetes / 60 secondes** (10 req/s), bande passante 2 MB/s statique, 500 KB/s dynamique
- Authentifie : **1 200 requetes / 60 secondes** (20 req/s), bande passante 8 MB/s statique, 1 MB/s dynamique
- **Pas d'authentification requise** pour l'acces anonyme (Open Data, licence Etalab 2.0)
- Depassement : HTTP 429 (Too Many Requests)

**Volume de donnees** : 9M+ diagnostics, ~35 000 nouveaux par semaine
**Limitation critique** : La BDD ne contient PAS tous les biens -- le DPE n'est obligatoire que pour les ventes/locations. Beaucoup de biens n'ont pas de DPE enregistre.

**Exemple de requete ConformLoc** :
```
GET https://data.ademe.fr/data-fair/api/v1/datasets/dpe-france/lines?
  select=numero_dpe,classe_consommation_energie,classe_estimation_ges,date_etablissement_dpe,surface_thermique_lot&
  filters=code_insee_commune_actualise:75056&
  geo_distance=48.8585,2.3522,100&
  size=5&
  format=json
```

_Sources: [API DPE api.gouv.fr](https://api.gouv.fr/les-api/api_dpe_logements), [ADEME Data Portal](https://data.ademe.fr/datasets/dpe-france), [Data Fair Documentation](https://data-fair.github.io/3/functional-presentation/api/)_

#### IGN Geoplateforme -- Nouveau Service de Geocodage (Post Janvier 2026)

**ALERTE MIGRATION** : L'ancienne API `api-adresse.data.gouv.fr` a ete **decomissionnee le 31 janvier 2026**. La nouvelle API est geree par l'IGN.

**Endpoints** :
```
Geocodage direct :  GET https://data.geopf.fr/geocodage/search
Geocodage inverse : GET https://data.geopf.fr/geocodage/reverse
Capabilities :      GET https://data.geopf.fr/geocodage/getCapabilities
Bulk CSV :          POST https://data.geopf.fr/geocodage/search/csv
OpenAPI :           https://data.geopf.fr/geocodage/openapi
```

**Parametres de geocodage direct** :

| Parametre | Type | Requis | Description |
|-----------|------|--------|-------------|
| `q` | string | OUI | Adresse a geocoder |
| `limit` | integer | Non | Nombre max de resultats |
| `postcode` | string | Non | Code postal (filtre) |
| `citycode` | string | Non | Code INSEE commune (filtre) |
| `index` | string | Non | Index : `address`, `poi`, `parcel` |
| `type` | string | Non | Type de resultat |

**Format de reponse** : GeoJSON FeatureCollection

```json
{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {
      "score": 0.98,
      "label": "123 Rue de Rivoli, 75001 Paris",
      "postcode": "75001",
      "citycode": "75056",
      "city": "Paris",
      "departmentcode": "75",
      "inseeCode": ["75", "75056"],
      "context": "Ile-de-France, Paris, France"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8585]
    }
  }]
}
```

**Champs cles pour ConformLoc** :
- `citycode` : Code INSEE 5 chiffres = **cle de liaison** avec toutes les autres APIs et datasets
- `postcode` : Code postal
- `score` : Confiance du geocodage (0-1)
- `coordinates` : [longitude, latitude] pour la requete DPE par `geo_distance`

**Rate limits** : **50 requetes/seconde par IP**, pas d'authentification requise

**Geocodage en masse (CSV)** :
- POST avec fichier CSV (UTF-8, < 50 Mo ou 200 000 lignes)
- Colonnes minimales : `address`, optionnel `postcode`, `citycode`
- Mode asynchrone disponible pour fichiers jusqu'a 1 Go

**Nouveaute par rapport a l'ancienne API** :
- Parametre `index` pour chercher dans POI et parcelles cadastrales
- Parametre `returntruegeometry` pour obtenir les polygones
- Compatibilite arriere maintenue pour les requetes d'adresse

_Sources: [IGN Geoplateforme Geocodage](https://geoservices.ign.fr/documentation/services/services-geoplateforme/geocodage), [OpenAPI data.geopf.fr](https://data.geopf.fr/geocodage/openapi), [Migration BAN -> IGN](https://geoservices.ign.fr/actualites/2026-15-01-maj-api-ban)_

#### API Taxe de Sejour DELTA

**Endpoint** :
```
GET https://data.economie.gouv.fr/explore/dataset/delta_deliberation_ts_tarif0/api/
```

**Donnees disponibles** :
- Regime fiscal (reel ou forfaitaire)
- Tarifs par categorie d'hebergement
- Periodes de collecte
- Seuils minimaux de location
- Taux d'abattement
- Taxes departementales additionnelles (jusqu'a 10%)

**Couverture** : ~1 837 communes ayant delibere sur la taxe de sejour (PAS les 36 000)
**Rate limits** : Non documentes
**Format** : JSON via API OpenDataSoft, XML pour les operateurs de plateformes

**Limitation** : Documentation API minimale. Le portail manque de specifications techniques d'endpoints. Peut necessiter un contact direct avec la DGFiP pour les details.

_Sources: [DELTA Tarifs Taxe de Sejour](https://data.economie.gouv.fr/explore/dataset/delta_deliberation_ts_tarif0/api/), [Taxe de sejour mini-site](https://taxesejour.impots.gouv.fr)_

### Formats de Donnees et Standards

#### Dataset Zone Tendue -- Donnees Structurees

**CORRECTION IMPORTANTE** : Le nombre de communes en zone tendue est **3 697** (et non 1 837 comme indique dans certaines sources). Le decret 2023-822 a considerablement elargi la liste.

**Source officielle** : [data.gouv.fr - Communes en zone tendue](https://www.data.gouv.fr/datasets/observatoire-habitat-communes-situees-en-zone-tendue)
**Formats** : CSV, JSON, GeoJSON, Shapefile
**Reference legale** : Decret n 2023-822 du 25 aout 2023

**28 agglomerations couvertes** : Paris, Lyon, Marseille-Aix, Toulouse, Nice, Bordeaux, Nantes, Strasbourg, Montpellier, Lille, Grenoble, Toulon, Ajaccio, Bastia, Bayonne, Beauvais, Draguignan, Frejus, Geneve-Annemasse, La Rochelle, La Teste-Arcachon, Meaux, Saint-Nazaire, Sete, Thonon-les-Bains, Annecy, Arles

**Alerte qualite** : Derniere MAJ avril 2022, score qualite metadata 56%. Verifier si une version 2026 existe.

**Integration ConformLoc** : Telechargement bulk du CSV, chargement en table PostgreSQL, lookup par `code_insee`. Pas d'API temps reel necessaire -- donnees stables (mise a jour par decret, rare).

#### Schema de Donnees Communales ConformLoc

**Modele de donnees propose pour les regles par commune** :

```json
{
  "code_insee": "75056",
  "nom": "Paris",
  "region": "Ile-de-France",
  "population": 2161000,
  "zone_tendue": true,
  "reglementation_meuble_tourisme": {
    "reglementee": true,
    "changement_usage": {
      "requis": true,
      "concerne_rp": true,
      "limite_jours": 90,
      "autorisation_requise": true,
      "compensation": {
        "type": "commercialite",
        "ratio_m2": 2.0,
        "cout_estime_m2": 2500,
        "secteur_hyper_renforce": true
      }
    },
    "enregistrement": {
      "obligatoire": true,
      "teleservice_local": true,
      "teleservice_national": true,
      "deadline": "2026-05-20"
    },
    "quotas": { "actif": false },
    "sanctions": {
      "defaut_enregistrement": 10000,
      "fausse_declaration": 20000,
      "depassement_jours": 15000,
      "changement_usage_illegal": 50000
    }
  },
  "source": "paris.fr",
  "date_verification": "2026-02-06",
  "statut_verification": "source_officielle"
}
```

**Statuts de verification** :
- `source_officielle` : API ou site officiel de la mairie
- `utilisateur_signale` : Crowdsource par les utilisateurs
- `infere_regles_nationales` : Defaut (regles nationales appliquees)

#### Strategie de Collecte des Donnees Communales

**Tier 1 -- Automatise (APIs)** : ~3 700 communes
- Dataset zone tendue (3 697 communes, CSV/JSON)
- Geoportail de l'Urbanisme API (PLU, zonage)
- API DELTA taxe de sejour (~1 837 communes)

**Tier 2 -- Semi-automatise (Scraping legal)** : ~200 communes
- Sites officiels des grandes villes (Paris, Lyon, Bordeaux, Nice, etc.)
- Portails open data regionaux
- **Legalement autorise** : La CNIL confirme que le scraping de donnees publiques administratives est legal sous reserve de respecter robots.txt, ne pas collecter de donnees personnelles, avoir un interet legitime (= logiciel de conformite)

**Tier 3 -- Manuel + Crowdsource** : ~32 000 communes
- Defaut : regles nationales appliquees
- Enrichissement progressif par les utilisateurs
- Contact mairies pour les cas specifiques

**Priorite MVP** : Commencer par les **50 plus grandes villes** (couvre ~60% des meubles de tourisme), puis elargir.

_Sources: [CNIL Web Scraping](https://www.cnil.fr/en/legal-basis-legitimate-interests-focus-sheet-measures-implement-case-data-collection-web-scraping), [Geoportail Urbanisme API](https://www.geoportail-urbanisme.gouv.fr/api/), [data.gouv.fr Zone Tendue](https://www.data.gouv.fr/datasets/observatoire-habitat-communes-situees-en-zone-tendue)_

#### Villes avec Changement d'Usage -- Reference

| Ville | Compensation | Ratio | Cout estime/m2 | Limite jours RP |
|-------|-------------|-------|----------------|----------------|
| **Paris** | OUI (commercialite) | 2m2 pour 1m2 (3m2 hyper-renforce) | 1 600-3 000 EUR | 90 jours |
| **Lyon** | OUI (temporaire 9 ans) | Variable | Variable | 120 jours |
| **Nice** | OUI (autorisation 6 ans puis compensation) | Variable | Variable | 120 jours |
| **Bordeaux** | OUI | Variable | Variable | 120 jours |
| **Strasbourg** | OUI | Variable | Variable | 120 jours |
| **Toulouse** | OUI | Variable | Variable | 120 jours |
| **Lille** | Declaration + autorisation | Variable | Variable | 120 jours |
| **Marseille** | **PAS ENCORE IMPLEMENTE** | N/A | N/A | 120 jours |

**Donnees manquantes critiques** : Il n'existe **aucun dataset centralise** avec les montants exacts de compensation par ville. Ces donnees doivent etre collectees manuellement ville par ville.

_Sources: [Paris Meubles Touristiques](https://www.paris.fr/pages/meubles-touristiques-3637), [Service Public - Meubles de tourisme](https://www.service-public.gouv.fr/particuliers/vosdroits/F2043)_

### Patterns d'Interoperabilite Systeme

#### Integration Stripe -- NestJS PaymentModule

**Pattern recommande : NestJS Controller + Webhooks + Supabase Stripe Sync Engine**

**1. Checkout via NestJS (appele depuis Next.js Server Action)** :
```typescript
// apps/api/src/payment/payment.controller.ts
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('checkout')
  @UseGuards(JwtAuthGuard)
  async createCheckout(@Body() dto: CreateCheckoutDto, @Req() req) {
    return this.paymentService.createCheckoutSession(req.user.id, dto.priceId);
  }
}

// apps/web/src/app/actions/payment.ts (Server Action = thin controller)
"use server"
export async function createCheckoutSession(priceId: string) {
  const session = await fetch(`${process.env.API_URL}/payment/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ priceId }),
  });
  const { url } = await session.json();
  redirect(url);
}
```

**2. Webhooks directement sur NestJS** (Railway, pas Vercel) :
```typescript
// apps/api/src/payment/stripe-webhook.controller.ts
@Controller('webhooks/stripe')
export class StripeWebhookController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async handleWebhook(@Req() req: RawBodyRequest<Request>) {
    const sig = req.headers['stripe-signature'];
    const event = this.paymentService.constructEvent(req.rawBody, sig);
    // Handle: customer.subscription.created/updated/deleted
  }
}
```

**Avantage NestJS** : Les webhooks Stripe arrivent sur `api.conformloc.fr/webhooks/stripe` (Railway) -- pas de timeout Vercel, pas de cold starts, logs persistants.

**3. Supabase Stripe Sync Engine** : Integration one-click dans le dashboard Supabase. Synchronise automatiquement customers, subscriptions, invoices vers PostgreSQL dans un schema `stripe`.

**Structure de pricing freemium** :
```
Produit: "ConformLoc"
├── Free (0 EUR/mois) : Diagnostic 3/8 dimensions, 1 bien
├── Starter (9,90 EUR/mois) : Diagnostic complet + alertes, 1 bien
├── Pro (19,90 EUR/mois) : Multi-biens + documents + suivi DPE
└── Enterprise (39,90 EUR/mois) : Conciergeries + API + export
```

**France-specifique** :
- Tarif domestique : **1,5% + 0,25 EUR** par transaction (vs 5% LemonSqueezy/Paddle)
- Stripe Tax : TVA 20% automatique, conformite e-facturation (sept 2026)
- Cartes Bancaires (CB) : Supportees nativement (~80% des paiements en France)
- SEPA Direct Debit : Disponible (notification 14 jours, droit d'annulation 8 semaines)

**Templates open-source recommandes** :
1. **next-supabase-stripe-starter** (KolbySisk) : Config declarative pricing, webhooks Supabase, Resend
2. **Vercel Stripe & Supabase SaaS Starter Kit** : Officiel Vercel, DrizzleORM, shadcn/ui
3. **launch-mvp** (ShenSeanChen) : Emails transactionnels automatises, React Email

_Sources: [Stripe Pricing France](https://stripe.com/pricing), [Supabase Stripe Sync Engine](https://supabase.com/blog/stripe-sync-engine-integration), [next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter)_

### Architecture Event-Driven -- Inngest

#### Setup NestJS + Inngest

```typescript
// apps/api/src/inngest/inngest.client.ts
import { Inngest } from "inngest";
export const inngest = new Inngest({ id: "conformloc" });

// apps/api/src/inngest/inngest.module.ts
@Module({
  controllers: [InngestController],
  providers: [InngestService, DailyComplianceCheck, UserComplianceCheck],
})
export class InngestModule {}

// apps/api/src/inngest/inngest.controller.ts
@Controller('inngest')
export class InngestController {
  @All()
  async handleInngest(@Req() req, @Res() res) {
    // Inngest SDK serve handler adapte pour NestJS
    return serve({ client: inngest, functions: this.inngestService.getFunctions() })(req, res);
  }
}
```

**Avantage NestJS** : Inngest tourne sur Railway (`api.conformloc.fr/inngest`) -- pas de timeout Vercel (60s max sur le free tier), pas de cold starts. Les jobs lourds (scan de conformite multi-communes) s'executent sans contrainte.

#### Pattern Cron + Fan-Out pour Alertes Reglementaires

```typescript
// Cron quotidien : scan tous les utilisateurs
export const dailyComplianceCheck = inngest.createFunction(
  { id: "daily-compliance-check" },
  { cron: "TZ=Europe/Paris 0 3 * * *" }, // 3h du matin
  async ({ step }) => {
    const users = await step.run("load-users", async () => {
      return await db.users.findAll({ hasProperties: true });
    });
    // Fan-out : 1 event par utilisateur
    await step.sendEvent("dispatch", users.map(u => ({
      name: "user.compliance.check",
      data: { userId: u.id }
    })));
  }
);

// Traitement par utilisateur (declenche par fan-out)
export const userComplianceCheck = inngest.createFunction(
  { id: "user-compliance-check" },
  { event: "user.compliance.check" },
  async ({ event, step }) => {
    const { userId } = event.data;
    // Step 1: Verifier DPE via API ADEME
    const dpe = await step.run("check-dpe", async () => { /* ... */ });
    // Step 2: Verifier taxe de sejour via DELTA
    const taxe = await step.run("check-taxe", async () => { /* ... */ });
    // Step 3: Envoyer alerte si non-conforme
    if (!dpe.conforme || !taxe.conforme) {
      await step.run("send-alert", async () => {
        await resend.emails.send({ /* ... */ });
      });
    }
  }
);
```

**Comptage des executions (free tier)** :
- Chaque `step.run()` = 1 execution
- `step.sleep()` et `step.waitForEvent()` = 0 execution (ne compte PAS)
- Budget ConformLoc (100 users) : ~170 exec/jour = **5 100/mois** sur 50 000 gratuits

#### Integration Supabase Database Webhooks -> Inngest

1. Configurer un webhook dans Inngest Dashboard (URL unique fournie)
2. Ajouter une fonction de transformation dans Inngest :
```javascript
function transform(evt) {
  return {
    name: `supabase/db.${evt.table}.${evt.type}`,
    data: { table: evt.table, record: evt.record }
  };
}
```
3. Configurer le Database Webhook dans Supabase (table `properties`, events INSERT/UPDATE)
4. Ecouter les events dans les fonctions Inngest

**Limites free tier detaillees** :

| Limite | Valeur Free |
|--------|-------------|
| Executions/mois | 50 000 |
| Steps paralleles | 5 max simultanes |
| Timeout par step | 2 heures max |
| Sleep max | 7 jours |
| Payload requete | 256 KB |
| Retour par step | 4 MB |
| State total par run | 32 MB |
| Steps par fonction | 1 000 max |
| Retention traces | 7 jours |
| Retries par defaut | 4 (5 tentatives totales) |

_Sources: [Inngest Next.js Quick Start](https://www.inngest.com/docs/getting-started/nextjs-quick-start), [Inngest Cron](https://www.inngest.com/docs/guides/scheduled-functions), [Inngest Fan-Out](https://www.inngest.com/docs/guides/fan-out-jobs), [Inngest Pricing](https://www.inngest.com/pricing)_

### Securite des Integrations

#### Authentification et Autorisation

| Service | Methode Auth | Cles a gerer | Localisation |
|---------|-------------|-------------|-------------|
| DPE ADEME | Aucune (open data) | Aucune | NestJS (Railway) |
| IGN Geoplateforme | Aucune (open data) | Aucune | NestJS (Railway) |
| DELTA Taxe de sejour | Aucune (open data) | Aucune | NestJS (Railway) |
| SIRENE / INSEE | API Key (portail INSEE) | `X-Client-Secret` | NestJS (Railway) |
| Stripe | Secret Key + Webhook Secret | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | NestJS (Railway) |
| Supabase | Anon Key (frontend) + Service Role Key (backend) | `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Next.js (Vercel) + NestJS (Railway) |
| Inngest | Signing Key | `INNGEST_SIGNING_KEY` | NestJS (Railway) |
| Resend | API Key | `RESEND_API_KEY` | NestJS (Railway) |

**Strategie de securite** :
- **Separation des secrets** : Vercel ne contient que `API_URL` + cles Supabase publiques. Toutes les cles sensibles (Stripe, Resend, Inngest, Service Role) sont sur Railway uniquement.
- **Auth flow** : Supabase Auth cote client (Next.js) genere un JWT → Next.js Server Action forward le JWT → NestJS valide le JWT via `JwtStrategy` (cle publique Supabase)
- **NestJS Guards** : `JwtAuthGuard` global sur toutes les routes protegees, `RolesGuard` pour les endpoints admin
- **Webhook verification** : Stripe webhook signe avec `constructEvent()`, Inngest signe avec signing key -- les deux sur NestJS
- **Row Level Security (RLS)** : Supabase RLS pour isoler les donnees par utilisateur (couche supplementaire au-dessus des guards NestJS)
- **CORS** : NestJS configure pour accepter uniquement les requetes de `conformloc.fr` (Vercel)
- **Rate limiting** : NestJS `@nestjs/throttler` pour proteger les endpoints publics

#### Rate Limiting Interne

Pour proteger ConformLoc contre les abus (free tier diagnostic spam) :

```typescript
// apps/api/src/common/throttler.config.ts
// NestJS @nestjs/throttler -- rate limiting natif
@Module({
  imports: [
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 3 },    // 3 req/s (anti-burst)
      { name: 'medium', ttl: 60000, limit: 20 },  // 20 req/min
      { name: 'long', ttl: 3600000, limit: 100 }, // 100 req/h
    ]),
  ],
})

// Sur un endpoint specifique :
@Throttle({ long: { ttl: 3600000, limit: 10 } }) // 10 req/h pour diagnostic gratuit
@Post('diagnostic/free')
async freeDiagnostic(@Body() dto: DiagnosticDto) { /* ... */ }
```

Limites recommandees :
- Diagnostic gratuit : **10 requetes/heure par IP** (anti-spam)
- Utilisateurs authentifies : **100 requetes/heure**
- API Pro/Enterprise : **1 000 requetes/heure**

#### Caching des Reponses API

**Strategie cache multi-niveaux** :

| Donnee | TTL Cache | Justification |
|--------|-----------|---------------|
| Geocodage (adresse -> coords) | 7 jours | Adresses stables |
| DPE par adresse | 24 heures | Nouveaux DPE quotidiens |
| Taxe de sejour par commune | 30 jours | Deliberations rares |
| Zone tendue | 90 jours | Mise a jour par decret |
| Regles communales | 7 jours | Peuvent changer |

**Implementation** : Table PostgreSQL `api_cache` avec `key`, `value` (JSONB), `expires_at`. Lookup cache-first avant chaque appel API externe.

_Sources: [Supabase Rate Limiting](https://supabase.com/docs/guides/functions/examples/rate-limiting), [Supabase Edge Functions Storage Caching](https://supabase.com/docs/guides/functions/storage-caching)_

### Teleservice National -- Strategie d'Integration Future

**Etat au 06/02/2026** : Le teleservice national d'enregistrement (deadline 20 mai 2026) n'a **AUCUNE documentation technique publique**. Le portail experimental `https://apimeubles.finances.gouv.fr/` est en acces limite.

**Ce qu'on sait** :
- Portail numerique unique remplacant les teleservices communaux
- Numero d'enregistrement (NER) delivre automatiquement apres verification des justificatifs
- Utilise la BAN pour l'harmonisation des adresses
- Echange de donnees entre communes et plateformes
- Exports CSV et JSON prevus

**Strategie ConformLoc** :
1. **Pre-mai 2026** : Aider les loueurs a preparer leur dossier (justificatifs, DPE valide, assurance)
2. **Post-mai 2026** : "Vous avez votre numero ? Mais etes-vous VRAIMENT conforme sur les 7 autres dimensions ?"
3. **Quand l'API sera publique** : Integrer la verification du NER dans le diagnostic ConformLoc
4. **Action immediate** : Contacter la DGE et la DGALN pour demander un acces beta/sandbox

_Sources: [API Meubles Portal](https://apimeubles.finances.gouv.fr/), [DGALN API Producer](https://api.gouv.fr/producteurs/dgaln)_

---

## Architectural Patterns and Design

### System Architecture Patterns

#### Monolith Modulaire NestJS -- Le Bon Choix pour ConformLoc

**Decision architecturale : Monolith modulaire, PAS microservices.**

ConformLoc n'a pas besoin de microservices. Un seul processus NestJS avec des modules bien isoles est la bonne architecture pour un solo dev avec < 50K utilisateurs. Le monolith modulaire combine la simplicite de deploiement (un seul container Railway) avec la separation logique des domaines metier.

```
                    ┌─────────────────────────────────────────┐
                    │            NestJS Application            │
                    │                                         │
                    │  ┌──────────┐  ┌──────────┐  ┌───────┐ │
  HTTP Request ───▶ │  │   Auth   │  │Compliance│  │Payment│ │
                    │  │  Module  │  │  Module  │  │Module │ │
                    │  └────┬─────┘  └────┬─────┘  └───┬───┘ │
                    │       │             │            │     │
                    │  ┌────┴─────────────┴────────────┴───┐ │
                    │  │         Common Module              │ │
                    │  │  (Guards, Interceptors, Filters)   │ │
                    │  └────┬──────────────────────────┬───┘ │
                    │       │                          │     │
                    │  ┌────┴─────┐              ┌─────┴───┐ │
                    │  │   DB     │              │  Cache   │ │
                    │  │ (Drizzle)│              │(in-mem)  │ │
                    │  └──────────┘              └─────────┘ │
                    └─────────────────────────────────────────┘
```

**Quand migrer vers des microservices ?** Seulement si :
- Le temps de build depasse 10 minutes (peu probable avec Turborepo cache)
- Un module necessite un scaling independant (ex: le diagnostic gratuit a 100x plus de trafic que le paiement)
- L'equipe depasse 3-4 developpeurs

_Confiance : HAUTE -- Pattern valide pour les SaaS < 50K utilisateurs selon les retours d'experience production_
_Sources: [NestJS Architecture That Survived Real Production Traffic](https://medium.com/@bhagyarana80/nestjs-architecture-that-survived-real-production-traffic-d690fc6afefd), [NestJS Modular Architecture](https://levelup.gitconnected.com/nest-js-and-modular-architecture-principles-and-best-practices-806c2cb008d5)_

#### Organisation des Modules NestJS

**Principe : Un module par domaine metier, pas par couche technique.**

```
apps/api/src/
│
├── app.module.ts                    ← Module racine (imports tous les modules)
│
├── auth/                            ← AuthModule
│   ├── auth.module.ts
│   ├── auth.controller.ts           ← POST /auth/login, POST /auth/refresh
│   ├── auth.service.ts              ← Validation JWT Supabase
│   ├── strategies/
│   │   └── jwt.strategy.ts          ← PassportStrategy (Supabase JWT)
│   ├── guards/
│   │   ├── jwt-auth.guard.ts        ← Guard global (routes protegees)
│   │   └── roles.guard.ts           ← Guard admin
│   └── decorators/
│       └── current-user.decorator.ts ← @CurrentUser() param decorator
│
├── compliance/                      ← ComplianceModule (orchestrateur)
│   ├── compliance.module.ts
│   ├── compliance.controller.ts     ← POST /compliance/diagnostic
│   ├── compliance.service.ts        ← Orchestre les sous-services en parallele
│   └── dto/
│       ├── diagnostic-request.dto.ts
│       └── diagnostic-result.dto.ts
│
├── geocoding/                       ← GeocodingModule
│   ├── geocoding.module.ts
│   ├── geocoding.service.ts         ← Appel IGN Geoplateforme
│   └── geocoding.types.ts
│
├── dpe/                             ← DPEModule
│   ├── dpe.module.ts
│   ├── dpe.service.ts               ← Appel API ADEME
│   └── dpe.types.ts
│
├── taxe-sejour/                     ← TaxeSejourModule
│   ├── taxe-sejour.module.ts
│   ├── taxe-sejour.service.ts       ← Appel API DELTA + fallback BDD
│   └── taxe-sejour.types.ts
│
├── zone-tendue/                     ← ZoneTendueModule
│   ├── zone-tendue.module.ts
│   ├── zone-tendue.service.ts       ← Lookup BDD (dataset pre-charge)
│   └── zone-tendue.types.ts
│
├── commune-rules/                   ← CommuneRulesModule
│   ├── commune-rules.module.ts
│   ├── commune-rules.service.ts     ← Lookup BDD regles communales
│   └── commune-rules.repository.ts  ← Drizzle repository
│
├── scoring/                         ← ScoringModule
│   ├── scoring.module.ts
│   ├── scoring.service.ts           ← Calcul score 8 dimensions
│   └── scoring.types.ts
│
├── alerts/                          ← AlertModule
│   ├── alerts.module.ts
│   ├── alerts.service.ts            ← Declenchement events Inngest
│   └── alerts.types.ts
│
├── payment/                         ← PaymentModule
│   ├── payment.module.ts
│   ├── payment.controller.ts        ← POST /payment/checkout
│   ├── payment.service.ts           ← Stripe SDK
│   ├── stripe-webhook.controller.ts ← POST /webhooks/stripe
│   └── dto/
│
├── email/                           ← EmailModule
│   ├── email.module.ts
│   ├── email.service.ts             ← Resend SDK
│   └── templates/                   ← React Email templates
│
├── inngest/                         ← InngestModule
│   ├── inngest.module.ts
│   ├── inngest.client.ts            ← new Inngest({ id: "conformloc" })
│   └── functions/
│       ├── daily-compliance-check.ts
│       ├── user-compliance-check.ts
│       └── index.ts
│
└── common/                          ← CommonModule (partage)
    ├── common.module.ts
    ├── interceptors/
    │   ├── logging.interceptor.ts
    │   └── cache.interceptor.ts
    ├── filters/
    │   └── http-exception.filter.ts
    ├── pipes/
    │   └── validation.pipe.ts
    └── config/
        └── configuration.ts
```

**Regles d'organisation** :
1. **Pas de dependances circulaires** : ComplianceModule importe GeocodingModule, DPEModule, etc. -- jamais l'inverse
2. **Common est global** : `@Global()` sur CommonModule pour les interceptors et filters
3. **Chaque module exporte son service** : ComplianceModule.exports = [ComplianceService] pour que d'autres modules puissent l'utiliser
4. **DTOs dans le module** : Pas de dossier `dto/` global, chaque module gere ses propres DTOs

_Sources: [NestJS Module Best Practices](https://blog.bytescrum.com/nestjs-module-best-practices-for-clean-code-organization), [NestJS Folder Structure 2025](https://medium.com/@nairi.abgaryan/stop-the-chaos-clean-folder-file-naming-guide-for-backend-nest-js-and-node-331fdc6400cb)_

### Design Principles and Best Practices

#### Repository Pattern avec Drizzle ORM

**Pattern : Service → Repository → Drizzle → PostgreSQL**

Le repository pattern isole l'acces aux donnees de la logique metier. Avec Drizzle ORM, on peut utiliser soit le client direct (plus simple), soit un repository formel (plus testable).

**Approche recommandee pour ConformLoc : Client Drizzle injecte directement dans les services.**

```typescript
// packages/db/src/drizzle.module.ts
import { Module, Global } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const DRIZZLE = 'DRIZZLE';

@Global()
@Module({
  providers: [{
    provide: DRIZZLE,
    useFactory: async () => {
      const pool = new Pool({ connectionString: process.env.DATABASE_URL });
      return drizzle(pool, { schema });
    },
  }],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
```

```typescript
// apps/api/src/commune-rules/commune-rules.service.ts
@Injectable()
export class CommuneRulesService {
  constructor(@Inject('DRIZZLE') private db: DrizzleDatabase) {}

  async findByInseeCode(codeInsee: string) {
    return this.db.query.communes.findFirst({
      where: eq(communes.codeInsee, codeInsee),
      with: { reglementations: true },
    });
  }

  async upsertRules(codeInsee: string, rules: CommuneRulesDto) {
    return this.db.insert(communeReglementations)
      .values({ codeInsee, ...rules })
      .onConflictDoUpdate({
        target: communeReglementations.codeInsee,
        set: { ...rules, updatedAt: new Date() },
      });
  }
}
```

**Pourquoi pas un repository abstrait ?** Pour un solo dev, l'abstraction supplementaire n'apporte rien -- Drizzle est deja SQL-first et transparent. Le repository pattern formel (avec interface + implementation) sera utile si l'equipe grandit ou si on change d'ORM.

_Sources: [NestJS & DrizzleORM: A Great Match - Trilon](https://trilon.io/blog/nestjs-drizzleorm-a-great-match), [Repository Pattern in NestJS with Drizzle](https://medium.com/@vimulatus/repository-pattern-in-nest-js-with-drizzle-orm-e848aa75ecae)_

#### Injection de Dependances -- Patterns Cles

**1. Module Scoping** : Chaque service n'est accessible que par les modules qui l'importent explicitement.

```typescript
// dpe.module.ts
@Module({
  providers: [DPEService],
  exports: [DPEService], // Expose DPEService aux modules qui importent DPEModule
})
export class DPEModule {}

// compliance.module.ts
@Module({
  imports: [DPEModule, GeocodingModule, TaxeSejourModule, ZoneTendueModule, CommuneRulesModule, ScoringModule],
  providers: [ComplianceService],
  controllers: [ComplianceController],
})
export class ComplianceModule {}
```

**2. Configuration dynamique** : ConfigModule injecte les variables d'environnement typees.

```typescript
// apps/api/src/common/config/configuration.ts
export default () => ({
  api: {
    ademe: { url: process.env.ADEME_API_URL, rateLimit: 600 },
    ign: { url: process.env.IGN_API_URL, rateLimit: 50 },
    delta: { url: process.env.DELTA_API_URL },
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
});
```

**3. Testing avec DI** : Le mock des APIs gouvernementales est trivial grace a l'injection.

```typescript
// compliance.service.spec.ts
const module = await Test.createTestingModule({
  providers: [
    ComplianceService,
    { provide: DPEService, useValue: { findByAddress: jest.fn().mockResolvedValue(mockDPE) } },
    { provide: GeocodingService, useValue: { geocode: jest.fn().mockResolvedValue(mockGeo) } },
    // ... autres mocks
  ],
}).compile();
```

### Scalability and Performance Patterns

#### Pattern : Appels API Paralleles dans le ComplianceService

Le diagnostic ConformLoc interroge 5+ sources de donnees. L'orchestration parallele est critique pour tenir le budget de 3 secondes.

```typescript
// apps/api/src/compliance/compliance.service.ts
@Injectable()
export class ComplianceService {
  constructor(
    private geocoding: GeocodingService,
    private dpe: DPEService,
    private taxeSejour: TaxeSejourService,
    private zoneTendue: ZoneTendueService,
    private communeRules: CommuneRulesService,
    private scoring: ScoringService,
  ) {}

  async diagnostic(address: string): Promise<DiagnosticResult> {
    // Step 1 : Geocodage (sequentiel -- on a besoin du code INSEE)
    const geo = await this.geocoding.geocode(address);
    if (!geo || geo.score < 0.6) throw new BadRequestException('Adresse non reconnue');

    // Step 2 : Requetes paralleles (toutes dependantes du code INSEE)
    const [dpe, taxe, zoneTendue, rules] = await Promise.all([
      this.dpe.findByLocation(geo.coordinates, geo.codeInsee),
      this.taxeSejour.findByCommune(geo.codeInsee),
      this.zoneTendue.isZoneTendue(geo.codeInsee),
      this.communeRules.findByInseeCode(geo.codeInsee),
    ]);

    // Step 3 : Scoring
    return this.scoring.calculate({ geo, dpe, taxe, zoneTendue, rules });
  }
}
```

**Budget temps** :
| Etape | Temps estime | Strategie |
|-------|-------------|-----------|
| Geocodage IGN | ~200ms | Sequentiel (prerequis) |
| DPE ADEME | ~500ms | Parallele |
| Taxe de sejour | ~300ms | Parallele (BDD locale si DELTA indisponible) |
| Zone tendue | ~10ms | Parallele (lookup BDD locale) |
| Regles communales | ~10ms | Parallele (lookup BDD locale) |
| Scoring | ~5ms | Sequentiel (CPU) |
| **TOTAL** | **~700ms** | **Bien sous les 3s** |

#### Pattern : Cache Multi-Niveaux dans NestJS

```typescript
// apps/api/src/common/interceptors/cache.interceptor.ts
// Cache en memoire (Map) pour les donnees stables + PostgreSQL pour la persistence

@Injectable()
export class ApiCacheService {
  private memoryCache = new Map<string, { data: any; expiresAt: number }>();

  constructor(@Inject('DRIZZLE') private db: DrizzleDatabase) {}

  async getOrFetch<T>(key: string, ttlSeconds: number, fetcher: () => Promise<T>): Promise<T> {
    // 1. Check memory cache
    const cached = this.memoryCache.get(key);
    if (cached && cached.expiresAt > Date.now()) return cached.data as T;

    // 2. Check DB cache
    const dbCached = await this.db.query.apiCache.findFirst({
      where: and(eq(apiCache.key, key), gt(apiCache.expiresAt, new Date())),
    });
    if (dbCached) {
      this.memoryCache.set(key, { data: dbCached.value, expiresAt: Date.now() + ttlSeconds * 1000 });
      return dbCached.value as T;
    }

    // 3. Fetch from source
    const data = await fetcher();
    this.memoryCache.set(key, { data, expiresAt: Date.now() + ttlSeconds * 1000 });
    await this.db.insert(apiCache).values({ key, value: data, expiresAt: new Date(Date.now() + ttlSeconds * 1000) })
      .onConflictDoUpdate({ target: apiCache.key, set: { value: data, expiresAt: new Date(Date.now() + ttlSeconds * 1000) } });
    return data;
  }
}
```

**TTLs par type de donnee** :
- Geocodage : 7 jours (adresses stables)
- DPE : 24h (nouveaux diagnostics quotidiens)
- Taxe de sejour : 30 jours (deliberations rares)
- Zone tendue : 90 jours (decret, tres rare)
- Regles communales : 7 jours (peuvent changer)

#### Scaling Horizontal -- Quand et Comment

| Seuil | Action | Cout |
|-------|--------|------|
| < 1K users | 1 container Railway | ~$5/mois |
| 1K-10K users | 1 container + cache agressif | ~$10/mois |
| 10K-50K users | 2 replicas Railway | ~$20/mois |
| 50K+ users | Migration Hetzner + load balancer | ~$15/mois |

**NestJS est stateless** : Aucune session en memoire, tout est en BDD Supabase. Ajouter des replicas Railway est trivial -- il suffit de configurer le nombre de replicas dans Railway dashboard.

### Integration and Communication Patterns

#### Next.js ↔ NestJS -- Pattern de Communication

```typescript
// apps/web/src/lib/api.ts -- Client API centralise
class ConformLocAPI {
  private baseUrl = process.env.API_URL!; // https://api.conformloc.fr

  async request<T>(path: string, options?: RequestInit & { token?: string }): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options.token}` }),
        ...options?.headers,
      },
    });
    if (!res.ok) throw new APIError(res.status, await res.json());
    return res.json();
  }

  // Methodes typees
  diagnostic(address: string) {
    return this.request<DiagnosticResult>('/compliance/diagnostic', {
      method: 'POST',
      body: JSON.stringify({ address }),
    });
  }

  getProperties(token: string) {
    return this.request<Property[]>('/properties', { token });
  }
}

export const api = new ConformLocAPI();
```

```typescript
// apps/web/src/app/actions/diagnostic.ts -- Server Action thin
"use server"
import { api } from '@/lib/api';

export async function runDiagnostic(formData: FormData) {
  const address = formData.get('address') as string;
  return api.diagnostic(address); // Pas de token pour le diagnostic gratuit
}
```

**Avantages de ce pattern** :
1. **Types partages** : `DiagnosticResult` vient de `packages/core`, utilise des deux cotes
2. **Un seul point de contact** : `api.ts` centralise toute la communication
3. **Server Actions comme thin controllers** : Zero logique dans Next.js, juste un relay vers NestJS

#### Inngest dans NestJS -- Setup Complet

```typescript
// apps/api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { serve } from 'inngest/express';
import { inngest } from './inngest/inngest.client';
import { getAllFunctions } from './inngest/functions';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Inngest endpoint (AVANT les middlewares globaux)
  app.useBodyParser('json', { limit: '10mb' });
  app.use('/api/inngest', serve({
    client: inngest,
    functions: getAllFunctions(),
  }));

  // CORS (uniquement conformloc.fr)
  app.enableCors({ origin: process.env.FRONTEND_URL });

  await app.listen(process.env.PORT || 3001);
}
```

**Pourquoi dans `main.ts` et pas dans un controller ?** Le serve() d'Inngest est un middleware Express natif. L'injecter dans main.ts evite les conflits avec les guards NestJS (Inngest a besoin d'un acces direct sans JWT).

_Sources: [Inngest Serving Functions](https://www.inngest.com/docs/learn/serving-inngest-functions), [Inngest NestJS Example](https://github.com/inngest/sdk-example-nestjs), [nestjs-inngest community module](https://github.com/finn751/nestjs-inngest)_

### Security Architecture Patterns

#### Flow d'Authentification Complet

```
1. CONNEXION
   Navigateur → Supabase Auth (login Google/email)
   Supabase Auth → JWT token (contient user_id, email, role)
   JWT stocke dans cookies HttpOnly (gere par Supabase client SDK)

2. REQUETE PROTEGEE
   Next.js Server Action → lit le JWT depuis cookies
   Server Action → fetch(NestJS API, { Authorization: Bearer ${jwt} })
   NestJS JwtAuthGuard → decode le JWT avec SUPABASE_JWT_SECRET
   NestJS → execute la logique metier
   NestJS → retourne le resultat a Next.js

3. REQUETE PUBLIQUE (diagnostic gratuit)
   Next.js Server Action → fetch(NestJS API) (pas de token)
   NestJS ThrottlerGuard → verifie le rate limiting par IP
   NestJS → execute le diagnostic
   NestJS → retourne le resultat
```

#### NestJS Passport Strategy pour Supabase

```typescript
// apps/api/src/auth/strategies/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('SUPABASE_JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    // payload contient : sub (user_id), email, role, aud, exp
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
```

**Packages requis** : `passport`, `passport-jwt`, `@nestjs/passport`, `@nestjs/jwt`

#### CORS et Protection Inter-Services

```typescript
// apps/api/src/main.ts
app.enableCors({
  origin: [process.env.FRONTEND_URL], // https://conformloc.fr uniquement
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true, // Pour les cookies JWT
  maxAge: 3600, // Preflight cache 1h
});
```

**Protection supplementaire** : Un header custom `X-Api-Key` peut etre ajoute pour les appels Next.js → NestJS comme couche de defense en profondeur, en plus du JWT utilisateur.

_Sources: [NestJS Supabase Auth Strategy](https://github.com/hiro1107/nestjs-supabase-auth), [Supabase JWT Docs](https://supabase.com/docs/guides/auth/jwts), [Next x Nest Supabase OAuth](https://dev.to/abhikbanerjee99/next-x-nest-using-supabase-google-oauth-in-nestjs-1m7j)_

### Data Architecture Patterns

#### Schema PostgreSQL -- Donnees Communales

**Decision : JSONB pour les regles communales specifiques + colonnes normalisees pour les champs communs.**

Chaque commune a des regles differentes (certaines ont des compensations, d'autres des quotas, d'autres rien). Un schema 100% normalise serait impossible a maintenir. Le compromis : colonnes SQL pour les champs universels, JSONB pour les champs specifiques.

```sql
-- packages/db/src/schema/communes.ts (Drizzle)

-- Table principale des communes
CREATE TABLE communes (
  code_insee VARCHAR(5) PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  departement VARCHAR(3) NOT NULL,
  region VARCHAR(100),
  population INTEGER,
  zone_tendue BOOLEAN DEFAULT FALSE,
  reglementee BOOLEAN DEFAULT FALSE,

  -- Champs communs normalises
  limite_jours_rp INTEGER DEFAULT 120,        -- 90 pour Paris, 120 par defaut
  enregistrement_obligatoire BOOLEAN DEFAULT TRUE,
  changement_usage_requis BOOLEAN DEFAULT FALSE,
  taxe_sejour_active BOOLEAN DEFAULT FALSE,

  -- Regles specifiques en JSONB
  regles_specifiques JSONB DEFAULT '{}',
  -- Exemple : { "compensation": { "type": "commercialite", "ratio": 2.0 },
  --             "quotas": { "actif": true, "max_par_quartier": 50 },
  --             "sanctions_locales": { "amende_max": 50000 } }

  -- Metadata
  source VARCHAR(100),                         -- 'paris.fr', 'data.gouv.fr', 'crowdsource'
  statut_verification VARCHAR(50) DEFAULT 'infere_regles_nationales',
  date_verification TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table historique pour le versioning des regles
CREATE TABLE communes_historique (
  id SERIAL PRIMARY KEY,
  code_insee VARCHAR(5) REFERENCES communes(code_insee),
  regles_snapshot JSONB NOT NULL,              -- Copie complete des regles a cette date
  date_debut TIMESTAMPTZ NOT NULL,
  date_fin TIMESTAMPTZ,                        -- NULL = version courante
  motif_changement VARCHAR(255),               -- 'Loi Le Meur', 'Deliberation municipale'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requetes frequentes
CREATE INDEX idx_communes_zone_tendue ON communes(zone_tendue) WHERE zone_tendue = TRUE;
CREATE INDEX idx_communes_departement ON communes(departement);
CREATE INDEX idx_communes_regles ON communes USING GIN (regles_specifiques);
```

**Pourquoi pas les Temporal Tables PostgreSQL ?** L'extension `temporal_tables` n'est pas supportee par Supabase (managed PostgreSQL). La table `communes_historique` avec snapshot JSONB est un pattern plus simple et portable qui couvre le besoin de tracer les changements reglementaires.

#### Schema Drizzle ORM

```typescript
// packages/db/src/schema/communes.ts
import { pgTable, varchar, integer, boolean, jsonb, timestamp, index } from 'drizzle-orm/pg-core';

export const communes = pgTable('communes', {
  codeInsee: varchar('code_insee', { length: 5 }).primaryKey(),
  nom: varchar('nom', { length: 255 }).notNull(),
  departement: varchar('departement', { length: 3 }).notNull(),
  region: varchar('region', { length: 100 }),
  population: integer('population'),
  zoneTendue: boolean('zone_tendue').default(false),
  reglementee: boolean('reglementee').default(false),
  limiteJoursRp: integer('limite_jours_rp').default(120),
  enregistrementObligatoire: boolean('enregistrement_obligatoire').default(true),
  changementUsageRequis: boolean('changement_usage_requis').default(false),
  taxeSejourActive: boolean('taxe_sejour_active').default(false),
  reglesSpecifiques: jsonb('regles_specifiques').default({}),
  source: varchar('source', { length: 100 }),
  statutVerification: varchar('statut_verification', { length: 50 }).default('infere_regles_nationales'),
  dateVerification: timestamp('date_verification', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
}, (table) => ({
  zoneTendueIdx: index('idx_communes_zone_tendue').on(table.zoneTendue),
  departementIdx: index('idx_communes_departement').on(table.departement),
}));

export const communesHistorique = pgTable('communes_historique', {
  id: serial('id').primaryKey(),
  codeInsee: varchar('code_insee', { length: 5 }).references(() => communes.codeInsee),
  reglesSnapshot: jsonb('regles_snapshot').notNull(),
  dateDebut: timestamp('date_debut', { withTimezone: true }).notNull(),
  dateFin: timestamp('date_fin', { withTimezone: true }),
  motifChangement: varchar('motif_changement', { length: 255 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
```

#### Row Level Security (RLS) -- Multi-Tenancy B2C

```sql
-- Supabase RLS pour les donnees utilisateur
ALTER TABLE user_properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own properties"
  ON user_properties FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own properties"
  ON user_properties FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Les communes sont publiques (pas de RLS)
-- Les diagnostics sont lies a l'utilisateur (RLS actif)
```

**Double securite** : RLS Supabase protege au niveau BDD, les Guards NestJS protegent au niveau applicatif. Meme si un bug NestJS laisse passer une requete, RLS bloque l'acces aux donnees d'un autre utilisateur.

_Sources: [Temporal Tables PostgreSQL](https://pgxn.org/dist/temporal_tables/), [Multi-Temporal Versioning](https://hash.dev/blog/multi-temporal-versioning), [Drizzle ORM PostgreSQL Best Practices](https://gist.github.com/productdevbook/7c9ce3bbeb96b3fabc3c7c2aa2abc717)_

### Deployment and Operations Architecture

#### CI/CD -- Monorepo Turborepo → Vercel + Railway

```
GitHub Push (main)
    │
    ├──── Vercel (auto-detect apps/web)
    │     └── Build: turbo run build --filter=web
    │     └── Deploy: Next.js sur Vercel CDN
    │
    └──── Railway (root directory: apps/api)
          └── Build: Dockerfile ou nixpacks
          └── Deploy: NestJS container
```

**Vercel** detecte automatiquement le monorepo Turborepo et build uniquement `apps/web`. Configurer dans Vercel Dashboard :
- Root Directory : `apps/web`
- Build Command : `cd ../.. && npx turbo run build --filter=web`
- Framework : Next.js (auto-detect)

**Railway** deploie `apps/api`. Configuration :
- Root Directory : `/` (racine du monorepo)
- Build Command : `pnpm install && pnpm turbo run build --filter=api`
- Start Command : `node apps/api/dist/main.js`
- Ou via Dockerfile pour plus de controle

#### Dockerfile NestJS (apps/api)

```dockerfile
# apps/api/Dockerfile
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS builder
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/api/package.json apps/api/
COPY packages/ packages/
RUN pnpm install --frozen-lockfile
COPY apps/api/ apps/api/
RUN pnpm turbo run build --filter=api

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/node_modules ./apps/api/node_modules
EXPOSE 3001
CMD ["node", "dist/main.js"]
```

#### Monitoring et Observabilite

| Outil | Usage | Cout |
|-------|-------|------|
| **Sentry** (free tier) | Error tracking NestJS + Next.js | $0 |
| **Vercel Analytics** (inclus Pro) | Core Web Vitals frontend | $0 |
| **Railway Metrics** (inclus) | CPU, RAM, requests backend | $0 |
| **Plausible** | Analytics utilisateur RGPD | 10 EUR/mois |
| **Inngest Dashboard** | Monitoring des jobs/crons | $0 (free tier) |

**Alerting** :
- Sentry → Slack/email pour les erreurs critiques
- Railway → alertes si CPU > 80% ou RAM > 90%
- Inngest → alertes si un job echoue 5x consecutives
- UptimeRobot (free) → monitoring uptime `conformloc.fr` et `api.conformloc.fr`

_Sources: [Railway NestJS Deploy Guide](https://docs.railway.com/guides/nest), [Railway Monorepo Deploy](https://station.railway.com/questions/how-to-deploy-api-nestjs-and-web-next-98ac17ca), [NestJS + Next.js Turborepo](https://github.com/vndevteam/nestjs-turbo)_

---

## Implementation Approaches and Technology Adoption

### Roadmap d'Implementation MVP

**Contrainte critique : Le teleservice national ouvre le 20 mai 2026.**
ConformLoc doit etre en ligne AVANT cette date pour capter les loueurs qui cherchent a se mettre en conformite.

#### Phase 0 -- Setup Monorepo (Semaine 1 : 10-16 fevrier 2026)

| Jour | Tache | Livrable |
|------|-------|----------|
| L-M | Init Turborepo + pnpm, apps/web + apps/api + packages/* | Monorepo fonctionnel, `pnpm dev` lance les 2 apps |
| M-J | Setup Supabase Pro, schema Drizzle initial (communes, users, properties) | BDD PostgreSQL avec tables de base, migrations |
| V | CI/CD : GitHub → Vercel (web) + Railway (api), Sentry, domaines | Pipeline de deploy automatique, `conformloc.fr` live |

#### Phase 1 -- Diagnostic Gratuit (Semaines 2-4 : 17 fevrier - 9 mars 2026)

**Objectif : Lead magnet fonctionnel -- entrer une adresse, obtenir un score.**

| Semaine | Tache | Detail |
|---------|-------|--------|
| S2 | GeocodingModule + DPEModule | Integration IGN Geoplateforme + API ADEME DPE |
| S2 | ZoneTendueModule | Import CSV 3 697 communes, lookup par code INSEE |
| S3 | TaxeSejourModule + CommuneRulesModule | API DELTA + seed 50 plus grandes villes |
| S3 | ScoringModule + ComplianceService | Orchestration parallele, calcul score 8 dimensions |
| S4 | Landing page + formulaire diagnostic | Next.js, Shadcn/ui, Server Action → NestJS |
| S4 | Page resultat + CTA inscription | Affichage score, teaser "debloquer le detail complet" |

**Critere de succes Phase 1** : Un utilisateur entre une adresse parisienne et recoit un score de conformite en < 3 secondes.

#### Phase 2 -- Monetisation (Semaines 5-7 : 10-30 mars 2026)

| Semaine | Tache | Detail |
|---------|-------|--------|
| S5 | AuthModule (Supabase Auth) | Inscription Google/email, JWT, guards NestJS |
| S5 | PaymentModule (Stripe) | Checkout, webhooks, plans freemium/starter/pro |
| S6 | Dashboard utilisateur | Mes biens, mes diagnostics, mon abonnement |
| S6 | Diagnostic complet (payant) | 8/8 dimensions detaillees, recommandations |
| S7 | AlertModule + Inngest | Cron hebdomadaire, alertes email (Resend) |
| S7 | Tests E2E du parcours complet | Inscription → diagnostic → paiement → dashboard |

**Critere de succes Phase 2** : Un utilisateur peut s'inscrire, payer 9,90 EUR/mois, et recevoir un diagnostic complet avec alertes.

#### Phase 3 -- Enrichissement (Semaines 8-10 : 31 mars - 20 avril 2026)

| Semaine | Tache | Detail |
|---------|-------|--------|
| S8 | Multi-biens (plan Pro) | Ajouter/gerer plusieurs proprietes |
| S8 | Enrichissement donnees communales | Scraping 200 villes, crowdsource |
| S9 | Checklist pre-teleservice national | Guide etape par etape pour l'enregistrement |
| S9 | SEO + contenu | Pages par ville ("Conformite Airbnb Paris", etc.) |
| S10 | Beta privee + feedback | 50 premiers utilisateurs, iteration rapide |

#### Phase 4 -- Lancement Public (Semaines 11-14 : 21 avril - 20 mai 2026)

| Semaine | Tache | Detail |
|---------|-------|--------|
| S11 | Fix bugs beta, performance | Optimisation cache, UX |
| S12 | Lancement Product Hunt / forums | r/airbnb_host, Facebook groups loueurs |
| S13-14 | Marketing pre-teleservice | "Le teleservice ouvre dans X jours, etes-vous pret ?" |

**Buffer** : 2 semaines de marge avant le 20 mai 2026.

### Workflow de Developpement Solo Dev

#### Outils Quotidiens

| Outil | Usage | Pourquoi |
|-------|-------|---------|
| **Claude Code (CLI)** | Developpement assiste IA | Generation de code, debugging, refactoring |
| **Cursor** | IDE principal | VS Code + IA integree, completion contextuelle |
| **pnpm** | Package manager | 3x plus rapide que npm, strict par defaut |
| **Turborepo** | Build orchestration | Cache intelligent, builds paralleles |
| **Docker Desktop** | Dev local (optionnel) | PostgreSQL local si besoin de tester hors Supabase |
| **Postman / Hoppscotch** | Test d'APIs | Tester les endpoints NestJS manuellement |
| **TablePlus** | Client BDD | Visualiser les donnees Supabase |

#### Commandes de Dev

```bash
# Dev quotidien
pnpm dev                      # Lance Next.js (3000) + NestJS (3001) en parallele

# Build et test
pnpm build                    # Build les 2 apps via Turborepo
pnpm test                     # Tests Vitest sur tout le monorepo
pnpm test:e2e                 # Tests E2E

# Base de donnees
pnpm db:generate              # Generer les types Drizzle
pnpm db:push                  # Push schema vers Supabase
pnpm db:migrate               # Executer les migrations
pnpm db:seed                  # Seed donnees (communes, zones tendues)

# Deploiement
git push origin main          # Auto-deploy Vercel + Railway
```

#### Strategie Git

- **main** : Production (auto-deploy)
- **dev** : Pre-production (preview deploys Vercel)
- Pas de feature branches complexes -- solo dev, commits directs sur `dev`, merge dans `main` quand stable
- Conventional commits : `feat:`, `fix:`, `refactor:`, `chore:`

_Sources: [Solo Dev SaaS Stack 2025](https://dev.to/dev_tips/the-solo-dev-saas-stack-powering-10kmonth-micro-saas-tools-in-2025-pl7), [MVP Development Tools 2026](https://www.cabotsolutions.com/blog/mvp-development-tools-and-tech-stack-every-founder-should-know-in-2026)_

### Testing et Qualite

#### Strategie de Testing -- Pyramide Pragmatique

Pour un solo dev, le testing doit maximiser la confiance avec un effort minimal.

```
         ┌──────────┐
         │  E2E (5) │  ← Playwright : parcours critique uniquement
         ├──────────┤
         │ Integ(15)│  ← Vitest + Supertest : API endpoints NestJS
         ├──────────┤
         │ Unit(50) │  ← Vitest : Services, scoring, regles metier
         └──────────┘
```

**Repartition ciblee** :
- **50 tests unitaires** : ScoringService, ComplianceService, regles de calcul
- **15 tests d'integration** : Endpoints NestJS avec BDD test (Supabase local ou TestContainers)
- **5 tests E2E** : Diagnostic gratuit, inscription, paiement, dashboard, alerte

#### Vitest -- Framework de Test Unifie

**Pourquoi Vitest plutot que Jest :**
- 3-4x plus rapide en CI (15 min → 4 min sur des projets similaires)
- ESM natif, pas besoin de transformation
- Configuration unique pour Next.js ET NestJS dans le monorepo
- Watch mode instantane

**Configuration NestJS avec decorateurs :**

```typescript
// apps/api/vitest.config.ts
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    include: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@repo/core': path.resolve(__dirname, '../../packages/core/src'),
      '@repo/db': path.resolve(__dirname, '../../packages/db/src'),
    },
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' },
      jsc: {
        parser: { syntax: 'typescript', decorators: true },
        transform: { legacyDecorator: true, decoratorMetadata: true },
      },
    }),
  ],
});
```

**Configuration Next.js :**

```typescript
// apps/web/vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**Packages requis :**
```bash
# Backend (apps/api)
pnpm add -D vitest unplugin-swc @swc/core @vitest/coverage-v8 supertest @types/supertest

# Frontend (apps/web)
pnpm add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom

# E2E (racine)
pnpm add -D @playwright/test
```

#### Exemple de Test Critique -- ScoringService

```typescript
// apps/api/src/scoring/scoring.service.spec.ts
import { ScoringService } from './scoring.service';

describe('ScoringService', () => {
  let service: ScoringService;

  beforeEach(() => {
    service = new ScoringService(); // Pas besoin de DI pour le scoring pur
  });

  it('devrait scorer un bien parisien non conforme', () => {
    const result = service.calculate({
      geo: { codeInsee: '75056', city: 'Paris' },
      dpe: { classe: 'G', dateEtablissement: new Date('2015-01-01') },
      taxe: { active: true, regime: 'reel' },
      zoneTendue: true,
      rules: { limiteJoursRp: 90, changementUsageRequis: true },
    });

    expect(result.score).toBeLessThan(50); // DPE G = non conforme
    expect(result.dimensions.dpe.conforme).toBe(false);
    expect(result.dimensions.dpe.raison).toContain('classe G interdite');
  });

  it('devrait scorer un bien en zone non tendue comme plus conforme', () => {
    const result = service.calculate({
      geo: { codeInsee: '01001', city: 'Abergement' },
      dpe: { classe: 'C', dateEtablissement: new Date('2023-06-01') },
      taxe: null,
      zoneTendue: false,
      rules: { limiteJoursRp: 120, changementUsageRequis: false },
    });

    expect(result.score).toBeGreaterThan(70);
    expect(result.dimensions.zoneTendue.conforme).toBe(true);
  });
});
```

_Sources: [Vitest Next.js Guide](https://nextjs.org/docs/app/guides/testing/vitest), [Jest to Vitest NestJS Migration](https://blog.ablo.ai/jest-to-vitest-in-nestjs), [Vitest NestJS E2E](https://medium.com/@aymankaddioui/end-to-end-testing-in-nestjs-the-real-way-with-vitest-postgresql-99afd4c25f65)_

### CI/CD Pipeline -- GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: CI/CD ConformLoc

on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main]

env:
  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
  TURBO_TEAM: ${{ vars.TURBO_TEAM }}

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo lint type-check test --parallel

  deploy-web:
    needs: lint-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-api:
    needs: lint-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: railwayapp/railway-github-action@v1
        with:
          railway-token: ${{ secrets.RAILWAY_TOKEN }}
          service: conformloc-api
```

**Temps CI estime** : ~3-4 minutes (Turborepo remote cache + Vitest)
**Deplois paralleles** : Vercel et Railway se deploient simultanement apres les tests

_Sources: [Turborepo GitHub Actions](https://turborepo.dev/docs/guides/ci-vendors/github-actions), [Vercel Monorepo Deploy](https://vercel.com/docs/monorepos/turborepo)_

### Gestion des Risques

#### Risques Techniques -- Matrice

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| **API ADEME DPE down** | Moyenne | Haut | Cache 24h + message "DPE non disponible temporairement" |
| **IGN Geoplateforme rate limit** | Faible | Moyen | Cache 7 jours, 50 req/s largement suffisant |
| **Teleservice national sans API publique** | Haute | Moyen | Strategie "preparation avant, conformite apres" |
| **Donnees communales incompletes** | Haute | Haut | Defaut regles nationales + enrichissement progressif + crowdsource |
| **Supabase outage** | Faible | Critique | Backups quotidiens, RTO 1h (restore depuis backup) |
| **Railway outage** | Faible | Haut | Fallback : deploy NestJS sur Vercel Serverless temporairement |
| **Stripe compte bloque** | Tres faible | Critique | Documenter le business model (conformite ≠ finance), KYC precoce |
| **Concurrent lance avant nous** | Moyenne | Moyen | Avantage : deadline 20 mai = tout le monde est en retard |
| **Changement legislatif** | Faible (apres loi Le Meur) | Moyen | Architecture modulaire = ajout de dimension facile |

#### Risques Business

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Faible conversion free → paid** | Haute | Critique | Optimiser le "aha moment" du diagnostic gratuit |
| **CAC trop eleve** | Moyenne | Haut | SEO long terme + contenu par ville (cout marginal zero) |
| **Churn eleve apres 1 mois** | Haute | Haut | Alertes reglementaires = raison de rester abonne |
| **JD2M lance un module conformite** | Faible | Haut | JD2M = fiscal uniquement (94K clients, 0% conformite reglementaire) |

### Cost Optimization et Resource Management

#### Budget Total Mois 1-6

| Poste | Cout mensuel | Total 6 mois |
|-------|-------------|-------------|
| Vercel Pro | $20 | $120 |
| Railway Starter | ~$7 | ~$42 |
| Supabase Pro | $25 | $150 |
| Plausible | 10 EUR | 60 EUR |
| Domaine conformloc.fr | ~1 EUR/mois | ~6 EUR |
| **TOTAL** | **~60 EUR/mois** | **~360 EUR** |

**Cout d'acquisition** : 0 EUR (pas de pub payante en Phase 1-2, SEO + contenu + communautes)
**Seuil de rentabilite** : 7 abonnes Starter (9,90 EUR/mois) = 69 EUR/mois > 60 EUR couts

#### Optimisation Progressive

- **Mois 1-6** : Stack actuel (~60 EUR/mois)
- **Mois 7-12** : Si > 500 users, upgrade Resend ($20), Railway ($15) = ~85 EUR/mois
- **Mois 12+** : Si > 200 EUR/mois Railway, migrer NestJS sur Hetzner CX22 ($4/mois) + Coolify

---

## Technical Research Recommendations

### Synthese des Decisions Architecturales

| Decision | Choix | Alternative ecartee | Raison |
|----------|-------|-------------------|--------|
| **Architecture** | Monorepo Turborepo (Next.js + NestJS) | Next.js monolithique | Separation logique metier, testabilite, scalabilite code |
| **Frontend** | Next.js App Router (Vercel) | SvelteKit | Ecosysteme React, Server Components, DX Vercel |
| **Backend** | NestJS (Railway) | Hono, Fastify | Modules, DI, Guards, architecture opinionnee |
| **BDD** | Supabase Pro (PostgreSQL) | Neon + services separes | Auth + BDD + Storage unifie, $25/mois tout inclus |
| **ORM** | Drizzle | Prisma | SQL-first, pas de code genere, performance |
| **Auth** | Supabase Auth + JWT | Clerk | Integre a Supabase, 50K MAU gratuit |
| **Paiement** | Stripe | LemonSqueezy, Paddle | 1.5% + 0,25 EUR France domestique (3x moins cher) |
| **Email** | Resend + React Email | Brevo, SendGrid | DX, React Email, 3K/mois gratuit |
| **Jobs** | Inngest | Vercel Cron | Retries, step functions, 50K exec/mois gratuit |
| **Analytics** | Plausible | PostHog | RGPD, pas de cookies, 10 EUR/mois |
| **Testing** | Vitest | Jest | 3-4x plus rapide, ESM natif, config unifiee |
| **Deploy** | Vercel + Railway | Vercel seul | NestJS a besoin d'un vrai serveur, pas de timeout |

### KPIs de Succes

#### KPIs Techniques (Phase 1-2)

| KPI | Cible | Mesure |
|-----|-------|--------|
| Temps de reponse diagnostic | < 3s (p95) | Sentry Performance |
| Uptime | > 99.5% | UptimeRobot |
| Couverture de test | > 70% scoring/compliance | Vitest coverage |
| Temps de build CI | < 5 min | GitHub Actions |
| Erreurs non gerees | < 5/jour | Sentry |

#### KPIs Business (Post-Lancement)

| KPI | Cible Mois 1 | Cible Mois 6 | Benchmark |
|-----|-------------|-------------|-----------|
| Diagnostics gratuits | 500 | 5 000/mois | N/A (nouveau marche) |
| Inscriptions | 100 | 1 000 | 20% conversion visiteur → inscription |
| Conversion free → paid | 3% | 5% | Benchmark freemium B2C : 2-5% |
| MRR | 100 EUR | 2 000 EUR | 7 abonnes = seuil rentabilite |
| Churn mensuel | < 10% | < 7% | Benchmark B2C : 5-8% |
| LTV:CAC | > 3:1 | > 5:1 | Benchmark SaaS sain : 3:1+ |
| NPS | > 30 | > 50 | B2C SaaS median : 30 |

_Sources: [SaaS Freemium Conversion Rates 2026](https://firstpagesage.com/seo-blog/saas-freemium-conversion-rates/), [SaaS Metrics That Matter 2025](https://rampiq.agency/blog/saas-metrics-that-matter/), [SaaS Launch Playbook 2025](https://www.codelevate.com/blog/how-to-launch-a-saas-product-in-2025-the-ultimate-playbook)_

### Prochaines Actions Immediates

1. **Aujourd'hui** : Initialiser le monorepo Turborepo + pnpm
2. **Semaine 1** : Setup complet (Supabase, Vercel, Railway, CI/CD, domaine)
3. **Semaine 2** : Premier endpoint NestJS fonctionnel (geocodage → diagnostic partiel)
4. **Semaine 4** : Diagnostic gratuit en production (lead magnet live)
5. **Semaine 7** : Monetisation live (Stripe, abonnements)
6. **Semaine 10** : Beta privee (50 utilisateurs)
7. **Semaine 14** : Lancement public (avant le 20 mai 2026)

---

**FIN DE LA RECHERCHE TECHNIQUE -- ConformLoc**

_Document genere le 2026-02-06 par le workflow BMAD Technical Research._
_Steps completes : Scope (1), Technology Stack (2), Integration Patterns (3), Architectural Patterns (4), Implementation & Synthese (5)._
