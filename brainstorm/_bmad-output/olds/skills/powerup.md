# Plan de Montée en Compétences - Adrien Poua

**Objectif :** Devenir un dev full stack crédible en entretien CDI et efficace avec l'IA
**Durée :** 8 semaines (2 mois) - 1h30/jour minimum
**Principe :** Apprendre en construisant, pas en regardant des tutos

---

## Structure du Plan

```
Semaines 1-2 : Fondations (comprendre ce qu'on utilise)
Semaines 3-4 : Architecture & Sécurité (penser comme un senior)
Semaines 5-6 : Collaboration & DevOps (être prêt pour l'équipe)
Semaines 7-8 : IA & Synthèse (formaliser ton edge)
```

---

## PHASE 1 - Fondations (Semaines 1-2)

> **But :** Comprendre comment fonctionnent les outils que tu utilises déjà. Passer de "ça marche" à "je sais pourquoi ça marche".

### Semaine 1 : JavaScript & Node.js en profondeur

#### Objectifs
- [ ] Comprendre l'event loop Node.js (call stack, callback queue, microtasks)
- [ ] Comprendre les Promises en profondeur (pas juste async/await)
- [ ] Comprendre la différence entre CommonJS et ESM
- [ ] Savoir expliquer le hoisting, les closures, le `this`

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Regarder "What the heck is the event loop anyway?" (Philip Roberts) | 30min | YouTube |
| Lire la doc Node.js sur l'event loop | 45min | nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick |
| Coder un mini-serveur HTTP **sans Express** (juste `http` natif) | 2h | Depuis zéro |
| Implémenter ta propre version simplifiée de `Promise` | 2h | Exercice |

#### Checkpoint
> **Tu dois pouvoir répondre à :** "Explique-moi ce qui se passe quand Node.js reçoit 1000 requêtes simultanées alors qu'il est single-threaded."

---

### Semaine 2 : React & Next.js sous le capot

#### Objectifs
- [ ] Comprendre le Virtual DOM et la reconciliation React
- [ ] Comprendre la différence entre SSR, SSG, ISR, et RSC (React Server Components)
- [ ] Savoir quand utiliser `use client` vs composant serveur et pourquoi
- [ ] Comprendre l'hydration et ses pièges

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Lire "How React Works" (blog officiel React) | 1h | react.dev/learn |
| Lire la doc Next.js sur le rendering (App Router) | 1h | nextjs.org/docs/app/building-your-application/rendering |
| Refactorer une page de ton projet Argenteuil Basketball : identifier ce qui devrait être Server Component vs Client Component et pourquoi | 2h | Ton projet |
| Créer un schéma (draw.io ou papier) du cycle de vie d'une requête Next.js App Router : requête → serveur → RSC → client → hydration | 1h | Exercice |

#### Checkpoint
> **Tu dois pouvoir répondre à :** "Pourquoi les React Server Components existent ? Quel problème ils résolvent par rapport au SSR classique ?"

---

## PHASE 2 - Architecture & Sécurité (Semaines 3-4)

> **But :** Penser en architecte. Savoir justifier chaque choix technique. C'est ce qui sépare un junior d'un mid-level en entretien.

### Semaine 3 : System Design & Base de données

#### Objectifs
- [ ] Savoir designer un schéma de base de données relationnelle correctement normalisé
- [ ] Comprendre les indexes SQL (quand, pourquoi, impact sur les perfs)
- [ ] Comprendre les concepts : N+1 queries, connection pooling, transactions
- [ ] Connaître les patterns : Repository, Service Layer, Clean Architecture appliquée

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Lire "SQL Indexing and Tuning" (chapitres gratuits) | 2h | use-the-index-luke.com |
| Analyser les requêtes Supabase de ton projet Argenteuil : lister les N+1 queries potentielles | 1h30 | Ton projet |
| Dessiner le schéma de données complet d'un projet type "Uber Eats simplifié" (users, restaurants, orders, delivery) | 2h | Exercice |
| Lire et comprendre le `EXPLAIN ANALYZE` de tes requêtes Supabase les plus lourdes | 1h | Dashboard Supabase |

#### Ressources complémentaires
- **"Designing Data-Intensive Applications"** (Martin Kleppmann) - Chapitres 1-3 seulement. LE livre de référence.
- **Neon.tech blog** - Articles courts sur PostgreSQL

#### Checkpoint
> **Tu dois pouvoir répondre à :** "Tu as une table `orders` avec 10M de lignes. La requête `SELECT * FROM orders WHERE user_id = 123 AND status = 'pending'` est lente. Que fais-tu ?"

---

### Semaine 4 : Sécurité Web & Auth

#### Objectifs
- [ ] Connaître le OWASP Top 10 (au moins les 5 premiers)
- [ ] Comprendre XSS, CSRF, SQL Injection : comment ça marche ET comment s'en protéger
- [ ] Comprendre les flows OAuth2 (Authorization Code, PKCE)
- [ ] Comprendre JWT vs Sessions : trade-offs réels
- [ ] Comprendre le RLS (Row Level Security) Supabase en profondeur

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Parcourir le OWASP Top 10 (version 2021) | 1h30 | owasp.org/Top10 |
| Faire les challenges "XSS Game" de Google | 1h | xss-game.appspot.com |
| Auditer la sécurité de ton projet Argenteuil Basketball : vérifier les policies RLS Supabase, les validations d'input, les headers de sécurité | 2h | Ton projet |
| Implémenter un flow OAuth2 complet (Google login) dans un mini-projet Next.js avec Supabase Auth | 3h | Exercice pratique |

#### Checkpoint
> **Tu dois pouvoir répondre à :** "Un utilisateur envoie `<script>alert('hack')</script>` dans un formulaire. Que se passe-t-il dans ton app ? À quel(s) niveau(x) tu te protèges ?"

---

## PHASE 3 - Collaboration & DevOps (Semaines 5-6)

> **But :** Être opérationnel en équipe dès le jour 1. C'est souvent ce qui manque aux devs autodidactes/freelance.

### Semaine 5 : Git avancé & Workflow d'équipe

#### Objectifs
- [ ] Maîtriser git rebase vs merge (et savoir quand utiliser lequel)
- [ ] Savoir résoudre des conflits de merge proprement
- [ ] Comprendre trunk-based development vs git flow
- [ ] Savoir écrire une bonne PR (description, scope, tests)
- [ ] Savoir faire une code review constructive

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Lire "How to Write a Git Commit Message" (Chris Beams) | 30min | cbea.ms/git-commit |
| Pratiquer sur learngitbranching.js.org (sections rebase, cherry-pick, interactive rebase) | 2h | learngitbranching.js.org |
| Sur un de tes projets : créer 3 branches, faire des modifications conflictuelles, résoudre les merges | 1h30 | Exercice |
| Lire 10 PRs sur un repo open source que tu utilises (Next.js, Supabase, Shadcn) : observer le format, les discussions | 1h | GitHub |
| Écrire une PR "modèle" sur un de tes projets avec : description, screenshots, test plan | 1h | Ton projet |

#### Checkpoint
> **Tu dois pouvoir répondre à :** "Tu travailles sur une feature branch depuis 3 jours. Main a avancé. Comment tu intègres les changements ?"

---

### Semaine 6 : CI/CD & DevOps fondamental

#### Objectifs
- [ ] Savoir écrire un pipeline GitHub Actions (lint, test, build, deploy)
- [ ] Comprendre Docker en profondeur (Dockerfile, multi-stage builds, volumes, networks)
- [ ] Comprendre les bases du monitoring (logs structurés, error tracking)
- [ ] Savoir configurer des environnements (dev, staging, prod)

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Créer un pipeline GitHub Actions complet pour Argenteuil Basketball : lint → test → build → deploy preview Vercel | 3h | GitHub Actions docs |
| Dockeriser ton projet Amazon Monitor proprement : multi-stage build, .dockerignore, health checks | 2h | Ton projet |
| Ajouter Sentry (error tracking) à un de tes projets Next.js | 1h30 | sentry.io/for/nextjs |
| Créer un fichier `.env.example` + documenter les variables d'environnement de tes projets | 1h | Tes projets |

#### Checkpoint
> **Tu dois pouvoir répondre à :** "Explique-moi ton pipeline de déploiement. Que se passe-t-il entre ton `git push` et le moment où l'utilisateur voit la nouvelle version ?"

---

## PHASE 4 - IA & Synthèse (Semaines 7-8)

> **But :** Formaliser ton avantage compétitif IA et consolider tout ce que tu as appris.

### Semaine 7 : Orchestration IA (ton edge compétitif)

#### Objectifs
- [ ] Formaliser ton workflow Claude Code + BMAD en un process documenté et reproductible
- [ ] Savoir utiliser les MCP servers pour connecter l'IA à des outils externes
- [ ] Comprendre les limites de l'IA (hallucinations, sécurité, biais)
- [ ] Savoir créer des prompts système efficaces pour des cas d'usage dev

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Documenter ton workflow complet : de l'idée au déploiement avec IA. Chaque étape, chaque outil, chaque prompt type | 3h | Document personnel |
| Créer 3 templates de prompts réutilisables : (1) debug, (2) code review, (3) architecture decision | 2h | Exercice |
| Configurer un MCP server custom pour un de tes projets (ex: connecter Claude à ta base Supabase en lecture seule) | 2h | Docs MCP |
| Créer un mini-article/post LinkedIn : "Comment j'utilise l'IA pour développer 5x plus vite" avec des exemples concrets | 2h | Contenu |

#### Checkpoint
> **Tu dois pouvoir montrer :** un workflow documenté, reproductible, avec des exemples de résultats avant/après IA.

---

### Semaine 8 : Consolidation & Préparation entretiens

#### Objectifs
- [ ] Savoir pitcher chaque projet de ton portfolio en 2 minutes (problème → solution → stack → résultat)
- [ ] Avoir des réponses préparées aux questions techniques classiques
- [ ] Avoir un "système design" de référence que tu peux dérouler
- [ ] Identifier et combler les derniers trous

#### Actions concrètes
| Action | Temps | Ressource |
|--------|-------|-----------|
| Préparer le pitch de tes 5 projets portfolio (écrit + oral) | 2h | Tes projets |
| Faire 3 exercices system design : (1) URL shortener, (2) Chat en temps réel, (3) E-commerce checkout | 3h | Dessiner sur papier/Excalidraw |
| Créer une liste de 20 questions techniques probables en entretien et écrire tes réponses | 3h | Document personnel |
| Faire un mock interview avec Claude : lui demander de te poser des questions techniques et évaluer tes réponses | 2h | Claude |

#### Questions techniques à préparer (minimum)
1. Différence entre SSR et SSG ? Quand utiliser lequel ?
2. Comment fonctionne l'event loop Node.js ?
3. Qu'est-ce qu'un index en SQL ? Quand en créer un ?
4. Comment tu gères l'authentification dans tes projets ?
5. Explique ta Clean Architecture - pourquoi ces choix ?
6. Comment tu gères les erreurs dans une API REST ?
7. Qu'est-ce qu'un N+1 query ? Comment le détecter et le corriger ?
8. Différence entre JWT et session cookies ?
9. Comment tu testes ton code ? Quelle stratégie ?
10. Décris ton workflow de développement avec l'IA.

#### Checkpoint
> **Tu dois pouvoir tenir 45 minutes d'entretien technique sans être bloqué sur une question fondamentale.**

---

## Routine Quotidienne Recommandée

```
Matin (focus profond - 1h30)
├── 30min : Lecture/théorie (docs, articles, livre)
├── 45min : Pratique (exercice, code, projet)
└── 15min : Notes - écrire ce que tu as appris dans tes propres mots

Soir (optionnel - 30min)
└── Revue rapide des notes du matin + veille IA
```

**Règle d'or :** Chaque concept appris doit être appliqué sur un de tes vrais projets dans les 48h. Pas de théorie sans pratique.

---

## Ressources Centrales

### Livres (les 3 qui suffisent)
| Livre | Pourquoi | Priorité |
|-------|----------|----------|
| **Designing Data-Intensive Applications** (Kleppmann) | System design, bases de données, architecture distribuée | Chapitres 1-3 minimum |
| **The Pragmatic Programmer** (Hunt & Thomas) | Mindset de développeur professionnel | Lecture rapide |
| **Clean Code** (Robert C. Martin) | Écrire du code lisible par une équipe | Chapitres clés |

### Sites de pratique
| Site | Usage |
|------|-------|
| **leetcode.com** (easy/medium seulement) | Garder l'algo frais, 2-3 par semaine max |
| **learngitbranching.js.org** | Git avancé |
| **use-the-index-luke.com** | SQL & indexing |
| **exercism.org** (track TypeScript) | Patterns TypeScript |

### Veille hebdo (30min/semaine max)
- **Bytes.dev** (newsletter JS/TS)
- **Next.js blog** (annonces officielles)
- **Supabase blog** (mises à jour)

---

## Métriques de Progression

### Après 2 semaines
- [ ] Tu sais expliquer l'event loop sans regarder de notes
- [ ] Tu sais la différence entre RSC et SSR de mémoire
- [ ] Tu as identifié 3 améliorations concrètes dans tes projets existants

### Après 4 semaines
- [ ] Tu as un schéma de données que tu peux défendre en entretien
- [ ] Tu as corrigé au moins 2 failles de sécurité dans tes projets
- [ ] Tu comprends les indexes SQL et tu sais quand en ajouter

### Après 6 semaines
- [ ] Tu as un pipeline CI/CD fonctionnel sur au moins un projet
- [ ] Tu sais faire un rebase propre sans stress
- [ ] Tu as écrit au moins une vraie PR avec description complète

### Après 8 semaines
- [ ] Tu peux pitcher chaque projet en 2 minutes chrono
- [ ] Tu as un workflow IA documenté et reproductible
- [ ] Tu tiens un mock interview technique de 45 minutes
- [ ] Tu postules avec confiance

---

## Lien avec tes Projets Existants

Chaque semaine s'appuie sur tes vrais projets :

| Projet | Utilisé pour |
|--------|-------------|
| **Argenteuil Basketball** | Audit sécurité RLS, refactor RSC, CI/CD, pitch portfolio |
| **Amazon Monitor** | Docker multi-stage, optimisation requêtes, system design |
| **Ekiboost** | Performance (Core Web Vitals), cache strategy |
| **Vizir Marrakech** | Auth flow (Stripe + OAuth), gestion d'erreurs |

---

**Dernière mise à jour :** 2026-02-06
**Basé sur :** profil.md + analyse des compétences essentielles 2026
