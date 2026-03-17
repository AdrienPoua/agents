# Plan Prototype — Dashboard Ligue IDF Basketball

**Date :** 2026-02-16
**Objectif :** Creer un prototype de dashboard fonctionnel demontrant la valeur d'un outil ligue-level branche sur les API FFBB
**Temps estime :** 2-3 jours
**Deploiement :** Vercel (gratuit)

---

## CONTEXTE TECHNIQUE

### Ce qui existe deja

Le monorepo `sports-associations` contient tout ce qu'il faut :

```
sports-associations/
├── apps/
│   ├── argenteuil/          # App Next.js 15 en production (port 3099)
│   │   └── src/app/(dashboard)/admin/  # Dashboard admin existant avec sidebar
│   └── sartrouville/        # Vide (futur club)
├── packages/
│   ├── core/                # Clean Architecture (domain, actions, hooks, infra)
│   ├── ui/                  # 62 composants shadcn/ui + 18 formulaires
│   ├── basketball/          # API FFBB (FFBBserver3 + FBI)
│   └── supabase/            # Config Supabase
```

**Stack :** Next.js 15 (App Router, RSC), React 19, Tailwind 4, shadcn/ui, Drizzle ORM, Supabase, TanStack Query, Zod

**APIs FFBB disponibles :**
| Methode | Endpoint | Donnees |
|---------|----------|---------|
| `getCompetitions()` | FFBBserver3 | Competitions du club + poules |
| `getMatchs()` | FFBBserver3 | Matchs avec scores, dates, salles |
| `getClubs()` | FFBBserver3 | Clubs adverses dans les competitions |
| `getAdherents()` | FFBBserver3 | Licencies du club |
| `findLicence()` | FBI | Recherche licence nationale |
| `createNewLicence()` | FBI | Creation licence |
| `submitFormAndRenewLicence()` | FBI | Renouvellement licence |

---

## STRATEGIE DU PROTOTYPE

### Le probleme : compte club vs scope ligue

Ton compte FFBBserver3 est un **compte club** (Argenteuil). Tu vois les competitions de TON club, pas toutes les competitions IDF.

### La solution : approche hybride

| Source | Donnees | Scope |
|--------|---------|-------|
| **FFBBserver3 (API)** | Competitions, matchs, classements, membres | Club Argenteuil (proof of concept API) |
| **resultats.ffbb.com (scrape)** | Liste competitions IDF, resultats, classements | Toute la ligue IDF (breadth) |
| **Donnees statiques** | Stats aggregees, metriques ligue | Calcules a partir du scrape |

**Message au RDV :** "Ce prototype fonctionne avec un compte club. Avec un acces ligue, tout serait en temps reel et automatique."

---

## ARCHITECTURE DU PROTOTYPE

### Option A : Nouvelle app dans le monorepo (RECOMMANDE)

```
apps/
├── argenteuil/          # Existant — ne pas toucher
├── sartrouville/        # Existant — vide
└── ligue-idf-demo/      # NOUVEAU — prototype dashboard ligue
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                    # Landing / redirect
    │   │   └── (dashboard)/
    │   │       ├── layout.tsx              # Sidebar layout
    │   │       ├── overview/
    │   │       │   └── page.tsx            # Vue d'ensemble ligue
    │   │       ├── competitions/
    │   │       │   ├── page.tsx            # Liste competitions IDF
    │   │       │   └── [id]/
    │   │       │       └── page.tsx        # Detail competition + classements
    │   │       ├── matchs/
    │   │       │   └── page.tsx            # Calendrier + resultats recents
    │   │       ├── clubs/
    │   │       │   └── page.tsx            # Annuaire clubs IDF
    │   │       └── alertes/
    │   │           └── page.tsx            # Alertes et anomalies
    │   ├── components/
    │   │   ├── sidebar.tsx                 # Navigation laterale
    │   │   ├── stats-cards.tsx             # Cartes KPI en haut
    │   │   ├── competition-table.tsx       # Tableau competitions
    │   │   ├── classement-table.tsx        # Tableau classements
    │   │   ├── match-calendar.tsx          # Calendrier matchs
    │   │   ├── recent-results.tsx          # Resultats recents
    │   │   ├── club-directory.tsx          # Annuaire clubs
    │   │   └── alert-list.tsx             # Liste alertes
    │   └── lib/
    │       ├── ffbb-data.ts               # Fetch et cache des donnees FFBB
    │       └── scraper.ts                 # Scraper resultats.ffbb.com (si besoin)
    ├── next.config.js
    ├── tailwind.config.ts
    ├── vercel.json
    └── package.json
```

**Pourquoi une nouvelle app :**
- Isole du code prod Argenteuil (pas de risque de casser)
- URL de demo propre (ligue-idf-demo.vercel.app)
- Reutilise packages/ui et packages/basketball via le monorepo
- Peut evoluer en vrai produit si ca marche

### Option B : Route dans Argenteuil (plus rapide mais plus sale)

Ajouter une route `/admin/ligue-demo/` dans l'app Argenteuil existante. Plus rapide a setup mais melange demo et prod.

**Recommandation :** Option A. Le setup d'une nouvelle app dans un Turborepo c'est 30 min.

---

## PAGES DU PROTOTYPE

### Page 1 : Vue d'ensemble (`/overview`)

**Objectif :** Impressionner en 5 secondes. Le decideur voit la valeur immediatement.

```
┌──────────────────────────────────────────────────┐
│  DASHBOARD LIGUE IDF BASKETBALL                  │
├──────┬──────┬──────┬──────┬──────────────────────┤
│ 73K+ │ 400+ │  42  │  18  │                      │
│licen.│clubs │comp. │ en   │  [Graphe activite    │
│      │      │      │cours │   matchs/semaine]    │
├──────┴──────┴──────┴──────┤                      │
│                           │                      │
│  RESULTATS RECENTS        │                      │
│  ─────────────────        │                      │
│  ABC 78 - 65 XYZ  (U15M) │                      │
│  DEF 92 - 88 GHI  (Sen.) │                      │
│  JKL 45 - 52 MNO  (U13F) │                      │
│                           ├──────────────────────┤
│  PROCHAINS MATCHS         │  ALERTES             │
│  ─────────────────        │  ────────            │
│  Sam 22/02 14h ABC vs XYZ │  ⚠ 3 clubs sans     │
│  Sam 22/02 16h DEF vs GHI │    resultats saisis  │
│  Dim 23/02 10h JKL vs MNO │  ⚠ 12 licences      │
│                           │    expirent ce mois  │
└───────────────────────────┴──────────────────────┘
```

**Composants shadcn/ui a utiliser :**
- `Card` pour les KPI en haut
- `Table` pour les resultats et prochains matchs
- `Badge` pour les categories (U15M, Senior, etc.)
- `Alert` pour les alertes
- `Chart` (Recharts) pour le graphe d'activite

**Donnees :**
- KPI : chiffres statiques ou calcules depuis le scrape (73866 licencies = donne publique)
- Resultats recents : API FFBBserver3 (matchs du club) + scrape pour les autres
- Prochains matchs : idem
- Alertes : simulees (hardcodees) ou calculees depuis les deadlines connues

### Page 2 : Competitions (`/competitions`)

**Objectif :** Montrer la profondeur des donnees accessibles.

```
┌──────────────────────────────────────────────────┐
│  COMPETITIONS IDF 2025-2026                      │
│  [Filtre: categorie] [Filtre: division] [Search] │
├──────────────────────────────────────────────────┤
│  Comp.        │ Cat.  │ Div. │ Equipes │ Matchs  │
│  ─────────────┼───────┼──────┼─────────┼──────── │
│  Champ. IDF   │ SenM  │ D1   │ 12      │ 66/132  │
│  Champ. IDF   │ SenF  │ D1   │ 10      │ 45/90   │
│  Champ. IDF   │ U17M  │ D1   │ 14      │ 72/182  │
│  Champ. IDF   │ U15F  │ D2   │ 8       │ 28/56   │
│  ...          │       │      │         │         │
└──────────────────────────────────────────────────┘
```

**Au clic sur une competition → detail avec classement :**

```
┌──────────────────────────────────────────────────┐
│  ← Retour │ CHAMPIONNAT IDF SENIOR MASCULIN D1   │
├──────────────────────────────────────────────────┤
│  # │ Club              │ V  │ D  │ Pts │ Diff   │
│  ──┼───────────────────┼────┼────┼─────┼──────  │
│  1 │ Club A            │ 12 │ 2  │ 26  │ +148   │
│  2 │ Club B            │ 10 │ 4  │ 24  │ +95    │
│  3 │ Club C            │ 9  │ 5  │ 23  │ +67    │
│  4 │ ARGENTEUIL BC     │ 8  │ 6  │ 22  │ +42    │
│  ...                                             │
├──────────────────────────────────────────────────┤
│  DERNIERS RESULTATS DE CETTE POULE               │
│  J14 : Club A 82-71 Club D │ Club B 65-78 Club C│
└──────────────────────────────────────────────────┘
```

**Donnees :**
- FFBBserver3 `getCompetitions()` + `getRencontresParPoule()` pour les competitions du club
- Scrape resultats.ffbb.com pour les autres competitions IDF

### Page 3 : Calendrier Matchs (`/matchs`)

**Objectif :** Montrer que tout est centralisable sur un ecran.

```
┌──────────────────────────────────────────────────┐
│  CALENDRIER DES MATCHS                           │
│  [< Semaine precedente] Sem. du 17/02 [>]       │
│  [Filtre: tous | a venir | joues | sans resultat]│
├──────────────────────────────────────────────────┤
│  SAM 22/02                                       │
│  ──────────                                      │
│  14:00 │ Gymnase X │ ABC vs XYZ │ U15M D2 │ —   │
│  16:00 │ Gymnase Y │ DEF vs GHI │ Sen. D1 │ —   │
│  18:00 │ Gymnase Z │ JKL vs MNO │ U17F D1 │ —   │
│                                                  │
│  DIM 23/02                                       │
│  ──────────                                      │
│  10:00 │ Gymnase A │ PQR vs STU │ U13M D1 │ —   │
│  14:00 │ Gymnase B │ VWX vs YZA │ Sen. D2 │ —   │
└──────────────────────────────────────────────────┘
```

**Donnees :** `getRencontresParPoule()` pour les matchs avec date, horaire, salle

### Page 4 : Annuaire Clubs (`/clubs`)

**Objectif :** Montrer la capacite de centraliser l'info club.

```
┌──────────────────────────────────────────────────┐
│  ANNUAIRE CLUBS IDF  [Search: ___________]       │
├──────────────────────────────────────────────────┤
│  Club              │ Code    │ Equipes │ Dept.   │
│  ──────────────────┼─────────┼─────────┼──────── │
│  ARGENTEUIL BC     │ 0950042 │ 12      │ 95      │
│  BC SARTROUVILLE   │ 0780xxx │ 8       │ 78      │
│  PARIS BASKET 13   │ 0750xxx │ 15      │ 75      │
│  ...               │         │         │         │
└──────────────────────────────────────────────────┘
```

**Donnees :** `getClubs()` (clubs dans les memes competitions) + scrape pour le reste

### Page 5 : Alertes (`/alertes`)

**Objectif :** Montrer la valeur ajoutee — pas juste afficher des donnees, les ANALYSER.

```
┌──────────────────────────────────────────────────┐
│  ALERTES ET ANOMALIES                            │
├──────────────────────────────────────────────────┤
│  🔴 CRITIQUE                                     │
│  ──────────                                      │
│  3 clubs n'ont pas saisi leurs resultats (J14)   │
│  → Club X, Club Y, Club Z                        │
│  Deadline : dimanche 21h                         │
│                                                  │
│  🟡 ATTENTION                                    │
│  ──────────                                      │
│  12 licences expirent dans les 30 prochains jours│
│  → Voir la liste                                 │
│                                                  │
│  5 matchs sans salle assignee (semaine prochaine)│
│  → Voir les matchs                               │
│                                                  │
│  🟢 INFO                                         │
│  ──────────                                      │
│  Taux de saisie resultats J13 : 94%              │
│  Prochaine commission discipline : 28/02         │
└──────────────────────────────────────────────────┘
```

**Donnees :** Calculees a partir des matchs (resultat null + date passee = non saisi). Certaines alertes peuvent etre simulees pour la demo.

---

## PLAN DE REALISATION — JOUR PAR JOUR

### Jour 1 : Setup + Data Layer (6-8h)

**Matin (3-4h) : Setup app + data fetching**

```bash
# 1. Creer la nouvelle app dans le monorepo
# Copier la structure de base depuis argenteuil (configs, layout)
# Adapter : nom, port (3100), branding "Ligue IDF Demo"
```

- [ ] Creer `apps/ligue-idf-demo/` avec Next.js 15 config
- [ ] Configurer package.json avec les dependances monorepo
  ```json
  {
    "dependencies": {
      "@sports-application/ui": "workspace:*",
      "@sports-application/sport-basketball": "workspace:*"
    }
  }
  ```
- [ ] Configurer tailwind.config.ts (reutiliser le theme existant, changer les couleurs en bleu officiel FFBB)
- [ ] Creer le layout dashboard avec sidebar (reutiliser le pattern d'Argenteuil)
- [ ] Tester que `pnpm dev` fonctionne

**Apres-midi (3-4h) : Data layer**

- [ ] Creer `src/lib/ffbb-data.ts` :
  - Instancier FFBBserver3 client avec les credentials Argenteuil
  - Fonctions : `getCompetitionsIDF()`, `getMatchsRecents()`, `getClassement(pouleId)`, `getClubsIDF()`
  - Cache avec `unstable_cache` de Next.js (revalidation toutes les heures)
- [ ] Creer `src/lib/static-data.ts` :
  - Donnees statiques de la ligue (73866 licencies, 400+ clubs, etc.)
  - Donnees de demo pour les competitions ou l'API club ne suffit pas
- [ ] **Optionnel** : Creer `src/lib/scraper.ts` si tu veux des donnees live de resultats.ffbb.com
  - Route API serverless qui scrape les resultats IDF
  - Parse le HTML avec cheerio
  - Cache les resultats en memoire ou fichier JSON
- [ ] Tester que les donnees remontent correctement

### Jour 2 : Pages principales (6-8h)

**Matin (3-4h) : Overview + Competitions**

- [ ] Page `/overview` :
  - 4 cartes KPI en haut (shadcn `Card`)
  - Section "Resultats recents" (shadcn `Table`)
  - Section "Prochains matchs" (shadcn `Table`)
  - Section "Alertes" (shadcn `Alert`)
  - Graphe activite matchs/semaine (shadcn `Chart` avec Recharts)
- [ ] Page `/competitions` :
  - Tableau filtrable de toutes les competitions (shadcn `Table` + `Input` pour filtre)
  - Filtres par categorie et division (shadcn `Select`)
- [ ] Page `/competitions/[id]` :
  - Classement de la poule (shadcn `Table`)
  - Derniers resultats de la poule

**Apres-midi (3-4h) : Matchs + Clubs + Alertes**

- [ ] Page `/matchs` :
  - Vue calendrier par semaine
  - Filtres (tous / a venir / joues / sans resultat)
  - Navigation semaine precedente/suivante
- [ ] Page `/clubs` :
  - Annuaire avec recherche (shadcn `Input` + `Table`)
  - Donnees clubs depuis l'API
- [ ] Page `/alertes` :
  - Alertes calculees (matchs sans resultat, licences expirantes)
  - Alertes simulees pour la demo (commission discipline, etc.)
  - Badges de severite (rouge/jaune/vert)

### Jour 3 : Polish + Deploy (4-6h)

**Matin (2-3h) : Polish UI**

- [ ] Responsive : verifier que ca marche sur mobile (le decideur montrera peut-etre sur son tel)
- [ ] Loading states : squelettes de chargement (shadcn `Skeleton`)
- [ ] Empty states : messages quand pas de donnees
- [ ] Branding :
  - Logo Ligue IDF (ou placeholder) dans la sidebar
  - Couleurs FFBB (bleu #003DA5, orange #FF6B00)
  - Titre : "Dashboard Ligue IDF — Prototype"
  - Footer : "Prototype realise par Adrien Poua — adrienpoua.fr"
- [ ] Bandeau "PROTOTYPE" visible en haut (pour que ce soit clair que c'est une demo)

**Apres-midi (2-3h) : Deploy + Test**

- [ ] Configurer vercel.json
- [ ] Deployer sur Vercel
  ```bash
  cd apps/ligue-idf-demo && vercel
  ```
- [ ] Tester l'URL publique
- [ ] Verifier que les credentials API ne sont pas exposes (env vars Vercel)
- [ ] Faire 2-3 screenshots haute qualite pour le mail au contact
- [ ] Optionnel : enregistrer un GIF de 30 secondes de navigation dans le dashboard

---

## DONNEES : CE QUI EST REEL vs SIMULE

| Donnee | Source | Reel/Simule |
|--------|--------|-------------|
| Competitions du club | FFBBserver3 API | REEL |
| Matchs du club | FFBBserver3 API | REEL |
| Classements poules du club | FFBBserver3 API | REEL |
| Clubs adverses | FFBBserver3 API | REEL |
| Membres Argenteuil | FFBBserver3 API | REEL |
| KPI ligue (73K licencies, 400+ clubs) | Donnees publiques | REEL (statique) |
| Competitions IDF hors club | Scrape resultats.ffbb.com OU simule | MIXTE |
| Alertes (resultats manquants) | Calcule depuis API | REEL |
| Alertes (licences expirantes) | Calcule depuis adherents | REEL |
| Alertes (commission discipline) | Simule | SIMULE (demo) |

**Regle d'or :** Tout ce qui vient de l'API = badge "LIVE". Tout ce qui est simule = badge "DEMO". Transparence totale au RDV.

---

## DETAILS TECHNIQUES

### Variables d'environnement

```env
# FFBBserver3
FFBB_USERNAME=ton_identifiant
FFBB_PASSWORD=ton_mot_de_passe
FFBB_CLUB_ID=1042
FFBB_CODE_ORGANISME=0950042

# FBI (optionnel pour le prototype)
FBI_USERNAME=ton_identifiant
FBI_PASSWORD=ton_mot_de_passe
FBI_CLUB_ID=xxx
FBI_SAISON_COURANTE=2026
FBI_SAISON_ID=1
```

### Caching strategy

```typescript
// src/lib/ffbb-data.ts
import { unstable_cache } from 'next/cache'
import { FFBBserver3ApiClient } from '@sports-application/sport-basketball/infrastructure/ffbbserver3/client'

const client = new FFBBserver3ApiClient({
  username: process.env.FFBB_USERNAME!,
  password: process.env.FFBB_PASSWORD!,
  clubId: Number(process.env.FFBB_CLUB_ID!),
  codeOrganisme: process.env.FFBB_CODE_ORGANISME!,
})

export const getCompetitions = unstable_cache(
  () => client.getCompetitions(),
  ['competitions'],
  { revalidate: 3600 } // 1h
)

export const getMatchs = unstable_cache(
  () => client.getMatchs(),
  ['matchs'],
  { revalidate: 1800 } // 30min
)

export const getClubs = unstable_cache(
  () => client.getClubs(),
  ['clubs'],
  { revalidate: 86400 } // 24h
)
```

### Composants cles a reutiliser depuis packages/ui

```typescript
// Deja disponibles dans le monorepo :
import { Card, CardContent, CardHeader, CardTitle } from "@sports-application/ui/shadcn/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@sports-application/ui/shadcn/table"
import { Badge } from "@sports-application/ui/shadcn/badge"
import { Alert, AlertDescription, AlertTitle } from "@sports-application/ui/shadcn/alert"
import { Input } from "@sports-application/ui/shadcn/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sports-application/ui/shadcn/select"
import { Skeleton } from "@sports-application/ui/shadcn/skeleton"
import { Sidebar, SidebarContent, SidebarGroup } from "@sports-application/ui/shadcn/sidebar"
import { ChartContainer, ChartTooltip } from "@sports-application/ui/shadcn/chart"
```

---

## CE QUI IMPRESSIONNE AU RDV (par ordre d'impact)

1. **Donnees LIVE de la FFBB** — "Ces classements viennent directement de la federation, mis a jour automatiquement"
2. **Alertes intelligentes** — "Vous voyez en un coup d'oeil quels clubs n'ont pas saisi leurs resultats"
3. **Rapidite** — Le site charge en < 1 seconde (Next.js SSR + cache)
4. **Design propre** — shadcn/ui = pro, pas "fait par un stagiaire"
5. **Mobile** — Montrer sur le telephone "vos salaries peuvent verifier depuis le gymnase"

## CE QU'IL NE FAUT PAS MONTRER

- Le code source (ils s'en foutent)
- L'architecture technique (ils ne comprendront pas)
- Les donnees simulees sans les identifier comme telles
- L'audit de securite du site actuel (pas le moment, garder en reserve)
