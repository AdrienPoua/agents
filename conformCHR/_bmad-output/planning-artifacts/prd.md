---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
inputDocuments:
  - product-brief-conformCHR-2026-02-10.md
  - competitive-landscape-conformchr-2026-02-10.md
  - conformchr-pain-points.md
  - domain-conformchr-research.md
  - market-conformchr-research.md
documentCounts:
  briefs: 1
  research: 3
  brainstorming: 0
  projectDocs: 0
classification:
  projectType: 'SaaS B2B / Web App (PWA mobile-first)'
  domain: 'Conformite reglementaire CHR (legaltech-adjacent)'
  complexity: 'high'
  projectContext: 'greenfield'
workflowType: 'prd'
lastEdited: '2026-02-10'
editHistory:
  - date: '2026-02-10'
    changes: 'Validation fixes (13 leakage/measurability) + Edit workflow (KPIs partenariats, justification hors-ligne, decomposition FR39/FR43/FR45, FR chat support)'
---

# Product Requirements Document - ConformCHR

**Author:** Boss
**Date:** 2026-02-10

## Executive Summary

**Vision :** ConformCHR est le premier outil qui integre les 6 dimensions de conformite reglementaire CHR (HACCP, affichage obligatoire, securite incendie/ERP, accessibilite PMR, droit du travail/DUERP, licences/permis) dans une interface unique avec un score de preparation transversal.

**Differenciateur :** Aucun concurrent ne couvre plus de 2 dimensions sur 6. Le marche est fragmente en silos. ConformCHR passe de "je gere chaque reglementation separement" a "je vois ma preparation globale en un coup d'oeil".

**Cible :** ~246 000 etablissements CHR independants en France, dont 67% sans outil numerique de gestion de conformite. Gerants non-experts, debordement operationnel, angoisse du controle.

**Modele :** SaaS B2B, essai gratuit 14 jours sans CB. Plans : Essentiel 19 EUR/mois, Professionnel 39 EUR/mois, Multi-Sites 29 EUR/mois par site.

**Contrainte fondatrice :** Dev solo (JS/TS full-stack), budget infra < 100 EUR/mois. Architecture modulaire imperative.

**Bouclier de responsabilite :** 4 regles non-negociables pour operer sur un marche que d'autres evitent -- sources officielles obligatoires, vocabulaire UX sans "conforme", l'utilisateur verifie (pas l'outil), disclaimer visible + CGU solides.

## Success Criteria

### User Success

| Critere | Definition | Cible | Methode |
|---------|-----------|-------|---------|
| **"Aha! moment"** | Le gerant voit son premier score de preparation avec les points a verifier identifies | < 5 minutes apres inscription | Analytics onboarding |
| **Score de preparation** | Pourcentage de points verifies par l'utilisateur | > 70% a M+3 d'usage | Dashboard produit |
| **Frequence d'utilisation** | Sessions par semaine par utilisateur actif | 3+ sessions/semaine | Analytics |
| **Duree par session** | Micro-interactions quotidiennes sur smartphone | 5-10 minutes | Analytics |
| **Completion checklists** | Taux de completion des checklists commencees | > 80% | Analytics |
| **Echeances respectees** | Actions realisees avant la date limite d'une echeance | > 90% | Suivi alertes |

### Business Success

| Horizon | Clients payants | MRR | Churn mensuel | Autres |
|---------|----------------|-----|---------------|--------|
| **M+1** | 15 | 450 EUR | < 10% | - |
| **M+3** | 100 | 3 500 EUR | < 8% | NPS > 30 |
| **M+6** | 400 | 14 000 EUR | < 5% | NPS > 40 |
| **M+12** | 2 000 | ~50 000 EUR | < 5% | Partenariat UMIH ou GHR |

**Metriques d'acquisition :**
- Taux de conversion visiteur -> essai : 5% a 7% (M+1 a M+6)
- Taux de conversion essai -> payant : 30% a 40%
- CAC < 50 EUR (M+1), < 30 EUR (M+6)
- LTV/CAC > 3 (M+1), > 8 (M+6)

**Metriques partenariats :**
- 20 cabinets comptables partenaires a M+6 (prescripteurs actifs)
- 5 organismes de formation CHR partenaires a M+12 (co-marketing, referral)
- 10% des nouveaux clients proviennent du canal partenaires a M+12

### Technical Success

| Critere | Cible |
|---------|-------|
| **Architecture modulaire** | Chaque dimension = module independant, ajout/retrait sans impact |
| **Code propre et maintenable** | Codebase comprehensible et modifiable par un dev solo sur le long terme |
| **Evolutivite** | Ajout d'une nouvelle dimension en jours, pas en semaines |
| **Budget infrastructure** | < 100 EUR/mois (Vercel + Supabase + Resend + domaine) |
| **Performance mobile** | Temps de chargement < 3s sur 4G, interface fluide sur smartphones milieu de gamme |

### Measurable Outcomes

**Signal de product-market fit (M+6) :**
- 40% des utilisateurs essai se convertissent en payants
- 50%+ des clients payants utilisent l'outil 3x/semaine minimum
- 20%+ des nouveaux clients viennent par parrainage
- NPS > 40

## User Journeys

### Journey 1 : Marc, le coup de stress du mardi (Parcours succes primaire)

**Opening Scene.** Mardi 14h, Marc ferme la porte de son restaurant apres le service du midi. Son voisin boulanger lui annonce qu'il vient de recevoir un controle DDPP -- avertissement pour PMS pas a jour, 2 affichages manquants. Marc sent l'angoisse monter. Son propre PMS date de 3 ans. Ses extincteurs ? Il ne sait plus quand ils ont ete verifies. Son permis d'exploitation ? Aucune idee de la date d'expiration. Il sort son smartphone et tape "preparer controle hygiene restaurant".

**Rising Action.** Marc tombe sur ConformCHR. Il s'inscrit en 90 secondes : email, "restaurant traditionnel", "69000". 5 questions rapides. En 4 minutes, il voit son premier score de preparation : **23/87 points verifies**. Le rouge domine. Mais pour la premiere fois, il a une vue claire de tout ce qu'il doit verifier -- pas juste l'hygiene, mais aussi ses affichages, ses extincteurs, son permis. Il ne savait meme pas que l'affichage de l'origine des viandes etait obligatoire depuis 2022.

**Climax.** Marc ouvre le module Affichage Obligatoire. En 3 taps, il genere la liste des 14 affiches qu'il devrait avoir. Il en a 8. L'outil lui genere les 6 manquantes en PDF, pretes a imprimer, avec le lien vers le texte officiel pour chaque obligation. Il imprime tout le soir meme. Le lendemain matin, il coche ses 5 premieres verifications HACCP en 3 minutes avant le service. Son score passe a 31/87. Orange, mais en progression.

**Resolution.** 3 semaines plus tard, Marc a pris le rythme : 5 minutes chaque matin pour ses checklists HACCP, une alerte recue pour la verification extincteurs (dans 28 jours). Son score est a 61/87. Quand il croise son voisin boulanger, il lui dit : "Tu devrais essayer ConformCHR, ca m'a remis les idees en place." Il souscrit au plan Professionnel a 39 EUR/mois sans hesiter -- c'est moins qu'un plat du jour.

**Capabilities revelees :**
- Onboarding < 2 min avec score instantane
- Dashboard score de preparation visuel (vert/orange/rouge)
- Module Affichage : generateur PDF personnalise
- Checklists HACCP quotidiennes en 3 taps
- Systeme d'alertes echeances (email)
- Liens vers sources officielles pour chaque obligation

### Journey 2 : Sarah, la fondatrice organisee (Parcours early adopter)

**Opening Scene.** Sarah a ouvert son coffee shop fast-casual il y a 18 mois. Elle a investi ses economies. Elle utilise deja Zelty pour la caisse, Skello pour le planning, Instagram pour le marketing. Elle fait les choses bien. Mais un article sur les 1 750 fermetures administratives en 2024 la fait tiquer. Elle a suivi la formation HACCP, mais le PMS ? Pas mis a jour depuis l'ouverture. L'accessibilite PMR ? Elle sait qu'elle devrait regarder mais n'a jamais eu le temps. Elle cherche "logiciel conformite restaurant" sur Google.

**Rising Action.** Sarah compare 3 solutions en 20 minutes. Traqfood : que le HACCP, 40 EUR/mois. Octopus : pareil. ConformCHR : 6 dimensions, 39 EUR/mois, essai gratuit 14 jours sans carte bancaire. Elle s'inscrit. Score de preparation : 34/87. Mieux que Marc, mais l'orange domine sur l'accessibilite PMR et les licences. Elle decouvre que son permis d'exploitation expire dans 14 mois et qu'elle devra suivre une formation de renouvellement.

**Climax.** Sarah configure ses alertes : rappel J-180 pour le permis d'exploitation (le temps de trouver une formation), rappel annuel pour la verification extincteurs. En une semaine, elle a complete toutes les checklists HACCP et genere ses affiches obligatoires. Son score monte a 68/87. Elle exporte un PDF recapitulatif avec la liste des points verifies et les echeances a venir.

**Resolution.** Sarah est l'utilisatrice ideale : elle utilise l'outil 4 fois par semaine, 7 minutes en moyenne. Son score est a 79/87 -- les points restants sont des verifications periodiques pas encore echues. Quand un controle DDPP arrive 4 mois plus tard, elle sort son telephone, montre son export PDF, et le controle se passe "comme une simple formalite administrative".

**Capabilities revelees :**
- Essai gratuit sans carte bancaire
- Comparaison implicite avec concurrents (6 dimensions vs 1)
- Configuration d'alertes personnalisees (delais variables)
- Export PDF recapitulatif
- Gestion des verifications periodiques (pas encore echues vs completees)

### Journey 3 : Adrien, le fondateur/admin (Parcours ops)

**Opening Scene.** Adrien est dev solo. Il vient de deployer ConformCHR en production. Les premiers utilisateurs arrivent via les articles SEO. Il doit surveiller la plateforme, gerer le support, et maintenir le contenu reglementaire a jour -- tout en continuant a developper.

**Rising Action.** Adrien consulte son dashboard admin chaque matin. Il voit : 12 nouveaux inscrits cette semaine, 4 conversions essai -> payant, 0 ticket support critique. Une alerte lui signale qu'un decret modifiant l'affichage de l'origine des viandes a ete publie la veille sur Legifrance. Il met a jour le contenu reglementaire dans le module Affichage et declenche une notification email vers tous les utilisateurs concernes : "Mise a jour reglementaire : nouveau decret sur l'origine des viandes."

**Climax.** Un utilisateur signale via le chat support qu'il ne retrouve pas son export PDF. Adrien identifie un bug dans la generation PDF sur certains navigateurs mobiles. Il corrige en 2 heures grace a l'architecture modulaire -- le fix touche uniquement le module d'export sans risque de regression sur les checklists ou le dashboard.

**Resolution.** Adrien a trouve son rythme : 30 minutes de support/ops par jour, une veille reglementaire hebdomadaire (flux RSS Legifrance + newsletters syndicats), et du temps de dev pour les nouvelles fonctionnalites. L'architecture modulaire lui permet d'avancer dimension par dimension sans tout casser.

**Capabilities revelees :**
- Dashboard admin (metriques, inscriptions, conversions)
- Systeme de gestion du contenu reglementaire (CMS interne)
- Notification email ciblee par type d'etablissement
- Chat support integre ou accessible
- Architecture modulaire permettant des fixes isoles
- Flux de veille reglementaire (alertes admin)

### Journey Requirements Summary

| Capability | Marc | Sarah | Adrien | Priorite MVP |
|-----------|------|-------|--------|-------------|
| Onboarding < 2 min + score instantane | x | x | | Critique |
| Dashboard score de preparation | x | x | | Critique |
| Checklists HACCP quotidiennes | x | x | | Critique |
| Generateur affiches PDF | x | x | | Critique |
| Alertes echeances (email) | x | x | | Critique |
| Liens sources officielles | x | x | | Critique |
| Export PDF recapitulatif | x | x | | Haute |
| Dashboard admin/metriques | | | x | Haute |
| CMS contenu reglementaire | | | x | Haute |
| Notifications email ciblees | | | x | Haute |
| Chat support | x | | x | Moyenne (Phase 2) |

## Domain-Specific Requirements

### Compliance & Regulatory

**Bouclier de responsabilite (4 regles non-negociables) :**
1. **Sources officielles obligatoires** : Chaque obligation affichee renvoie vers le texte officiel (Legifrance, service-public.fr, agriculture.gouv.fr). ConformCHR est un relais d'information, pas une source primaire.
2. **Vocabulaire UX sans "conforme"** : "Score de preparation" (jamais "score de conformite"), "points a verifier" (jamais "non-conforme"), "bien prepare" (jamais "conforme").
3. **Le client verifie, pas l'outil** : L'utilisateur coche lui-meme les items. L'outil organise, rappelle, suit -- ne certifie jamais.
4. **Disclaimer visible + CGU solides** : Mention permanente dans l'interface + clause CGU limitant la responsabilite a hauteur de l'abonnement annuel.

**Cadre reglementaire multi-niveaux :**
- Europeen (CE 852/2004, reglement INCO 1169/2011)
- National (6+ codes juridiques : sante publique, travail, construction, commerce, consommation, environnement)
- Departemental (prefectures, arretes locaux)
- Communal (mairies, licences)
- MVP : cadre national uniquement, avec mention "verifiez les specificites locales aupres de votre mairie/prefecture"

**Pas de conseil juridique :**
- Distinction claire information vs conseil dans les CGU et l'interface
- Renvoi systematique vers les professionnels pour les cas complexes (derogation PMR, contentieux URSSAF)
- Formulation neutre : "la reglementation prevoit que..." avec lien, jamais "vous devez..."

### Technical Constraints

**RGPD et protection des donnees :**
- Donnees collectees : email, nom, type d'etablissement, code postal, licence, scores de preparation
- Score de preparation = donnee potentiellement sensible (exploitable contre le gerant en cas de fuite)
- Hebergement des donnees en region UE (Supabase region eu-west, Vercel region Europe)
- Consentement explicite a l'inscription
- Droit de suppression complete (RGPD art. 17)
- Pas de partage de donnees individuelles a des tiers

**Securite :**
- Authentification securisee (email + mot de passe)
- Chiffrement des donnees en transit (HTTPS) et au repos (Supabase encryption)
- Isolation des donnees entre utilisateurs (Row Level Security Supabase)
- Pas d'acces admin aux donnees individuelles sauf support explicite

### Veille Reglementaire Automatisee (Phase 2 : 6 agents IA)

**Architecture :**
- 6 agents IA specialises, un par dimension de conformite :
  1. Agent HACCP / Hygiene alimentaire
  2. Agent Affichage obligatoire
  3. Agent Securite incendie / ERP
  4. Agent Accessibilite PMR
  5. Agent Social / Droit du travail
  6. Agent Licences et permis

**Fonctionnement :**
- Execution hebdomadaire (cron workflow)
- Chaque agent consulte ses sources officielles dediees (Legifrance, Journal Officiel, service-public.fr, agriculture.gouv.fr, sites ministeriels)
- En cas de changement detecte : notification a l'admin avec resume, diff, et lien source
- **Validation humaine obligatoire** : l'agent propose, l'admin valide et publie
- Apres validation : mise a jour du contenu + notification email ciblee aux utilisateurs concernes

**Garde-fous :**
- Les agents ne publient jamais directement aux utilisateurs (toujours validation humaine)
- Chaque suggestion inclut le lien source verifiable en 2 minutes
- Cout API IA integre au budget infra (< 100 EUR/mois pour l'ensemble)
- Log de toutes les mises a jour avec date, source, et validateur

**MVP : veille manuelle** (RSS Legifrance + newsletters UMIH/GHR + verification hebdomadaire par l'admin)

## Innovation & Novel Patterns

### Innovation 1 : Integration 6-en-1 (positionnement marche)

Aucun concurrent ne couvre plus de 2 dimensions sur 6. ConformCHR integre les 6 dimensions reglementaires dans une interface unique avec un score de preparation transversal. La couverture multi-dimensionnelle cree un effet de verrouillage naturel -- une fois que le gerant a configure ses 6 dimensions, le cout de migration vers N outils separes est prohibitif.

### Innovation 2 : 6 agents IA de veille reglementaire (innovation technique)

6 workflows cron hebdomadaires, chacun pilote par un agent IA specialise dans sa dimension, qui scrute les sources officielles et signale les changements avec diff et lien source. Validation humaine obligatoire. Permet a un dev solo de maintenir 6 dimensions a jour sans y consacrer des jours par semaine. C'est l'enabler technique qui rend le modele 6-en-1 viable operationnellement.

### Innovation 3 : Bouclier de responsabilite (innovation juridique/business)

Un cadre de protection juridique structure en 4 regles non-negociables, integre dans chaque couche du produit (UX, contenu, technique, legal). Ce cadre permet d'operer sur un marche que d'autres evitent. C'est une barriere a l'entree pour les concurrents qui n'auraient pas reflechi a cette dimension.

## SaaS B2B / Web App (PWA mobile-first) - Exigences Specifiques

### Architecture technique

**Stack :**
- Next.js (App Router) : SSR/SSG pour le SEO + SPA pour l'app
- Supabase : Auth (email/password), PostgreSQL, Storage, Row Level Security
- Vercel Pro : Hosting, edge functions, preview deployments
- Resend : Emails transactionnels + notifications
- Stripe : Gestion abonnements

**Modele multi-tenant :**
- Schema partage avec Row Level Security (RLS) Supabase
- Chaque gerant ne voit que ses donnees via policies RLS
- Admin : acces via role service_role pour le CMS reglementaire et le dashboard metriques
- Multi-Sites (Phase 3) : un compte gerant gere N etablissements, chaque etablissement = une ligne dans la table `establishments`

**Modele de permissions (RBAC) :**

| Role | Acces | Creation |
|------|-------|----------|
| **Gerant** | CRUD sur ses propres donnees (etablissements, checklists, scores, alertes) | Inscription libre |
| **Gerant Multi-Sites** | Meme que Gerant mais sur N etablissements + dashboard centralise | Upgrade plan Multi-Sites (Phase 3) |
| **Admin** | Dashboard metriques, CMS reglementaire, validation veille IA, support | Unique (Adrien) |

### Navigateurs et cibles

- Chrome Mobile (Android) -- priorite #1 (majorite du public CHR)
- Safari Mobile (iOS)
- Chrome Desktop et Safari Desktop (usage secondaire)

### Strategie SEO

**Pages SSR/SSG (acquisition) :**
- Landing pages par dimension ("checklist HACCP restaurant", "affichage obligatoire restaurant")
- Articles blog educatifs sur la reglementation CHR
- Pages par type d'etablissement ("conformite cafe", "conformite hotel")
- Sitemap dynamique, meta tags structures, schema.org

**App SPA (apres login) :**
- Pas d'indexation (noindex, nofollow)
- Routes protegees par auth middleware Next.js

### PWA

**MVP (online-only) :**
- Manifest pour l'installation sur l'ecran d'accueil
- Interface mobile-first responsive

**Phase 2 (mode hors-ligne) :**
- Service Worker + cache-first pour les checklists HACCP
- Queue de synchronisation pour les checklists completees hors-ligne
- Notifications push via Web Push API

### Integrations MVP

| Service | Usage | Priorite |
|---------|-------|----------|
| **Supabase** | Auth, DB PostgreSQL, Storage, RLS | Critique |
| **Stripe** | Abonnements, essai gratuit 14j, webhooks | Critique |
| **Resend** | Emails transactionnels (verification, reset password, alertes echeances) | Critique |
| **Vercel** | Hosting, CI/CD, preview deployments | Critique |

### Architecture modulaire

- Chaque dimension de conformite (HACCP, Affichage, etc.) = un module isole
- Ajout/retrait d'un module sans impact sur les autres
- Structure Next.js : `app/(dashboard)/[dimension]/` pour chaque module

### Gestion des abonnements

- Essai gratuit 14 jours sans carte bancaire
- 3 plans Stripe avec feature flags par plan
- Webhooks Stripe pour activation/desactivation automatique
- Gestion gracieuse de l'expiration (acces lecture seule, pas de suppression de donnees)

## Project Scoping & Phased Development

### MVP Strategy

**Approche :** Problem-solving MVP -- livrer la valeur minimale qui fait dire a Marc "c'est utile" et qui valide le positionnement 6-en-1.

**Principe directeur :** Tout ce qui peut etre fait manuellement au debut (veille reglementaire, support) reste manuel. L'automatisation vient quand le volume le justifie.

**Ressources :** 1 dev solo (JS/TS full-stack), budget infra < 100 EUR/mois.

### Phase 1 : MVP (M+0 a M+3)

**Journeys supportees :** Marc (gerant stresse) et Sarah (early adopter organisee)

| Feature | Justification | Complexite |
|---------|--------------|------------|
| Onboarding < 2 min (email + type + code postal) | Premier contact, conversion | Faible |
| Score de preparation instantane (5 questions) | "Aha! moment", retention | Moyenne |
| Dashboard score global (vert/orange/rouge) | Valeur percue quotidienne | Moyenne |
| Module HACCP : 5 checklists quotidiennes en 3 taps | Usage quotidien, coeur produit | Moyenne |
| Module HACCP : PMS pre-rempli par type d'etablissement | Valeur immediate, differenciateur | Haute |
| Module Affichage : liste des affichages requis selon type/licence | Quick win differenciateur | Moyenne |
| Module Affichage : generateur PDF affiches conformes | Valeur tangible et immediate | Haute |
| Alertes echeances (email J-30, J-7, J-1) | Retention, valeur passive | Moyenne |
| Suivi licences avec dates de renouvellement | Valeur passive, completude | Faible |
| Auth (email/password) + essai gratuit 14j sans CB | Acquisition, friction minimale | Faible |
| Stripe : 3 plans d'abonnement | Monetisation | Moyenne |
| Liens sources officielles pour chaque obligation | Bouclier de responsabilite | Faible |
| Disclaimer permanent dans l'interface | Bouclier de responsabilite | Faible |
| Pages SEO SSR/SSG (landing + blog) | Acquisition organique | Moyenne |
| PWA installable (online-only) | Usage mobile natif | Faible |
| Export PDF recapitulatif | Valeur tangible | Moyenne |

**Hors MVP (decide explicitement) :**
- Mode hors-ligne / Service Worker / cache / sync -> Phase 2 (le MVP valide d'abord l'adoption de l'outil en conditions normales ; le mode hors-ligne sera priorise en Phase 2 si les retours terrain confirment un usage en cuisine sans couverture reseau fiable)
- 6 agents IA de veille reglementaire -> Phase 2
- Notifications push navigateur -> Phase 2
- Programme de parrainage -> Phase 2
- Dashboard expert-comptable -> Retire (a reevaluer si demande utilisateurs)
- Multi-sites -> Phase 3

### Phase 2 : Growth (M+3 a M+6)

| Feature | Declencheur |
|---------|------------|
| Mode hors-ligne checklists HACCP | Retours utilisateurs cuisine |
| 6 agents IA veille reglementaire | Volume > 100 utilisateurs, charge veille manuelle insoutenable |
| Module Securite incendie / ERP | Roadmap, retours utilisateurs |
| Module Accessibilite PMR | Roadmap, retours utilisateurs |
| Notifications push navigateur | Base utilisateurs suffisante |
| Programme de parrainage | Traction organique validee |
| Magic link auth | Retours UX |

### Phase 3 : Expansion (M+6 a M+12)

| Feature | Declencheur |
|---------|------------|
| Module Social / DUERP | Couverture 6/6 dimensions |
| Fonctionnalites multi-sites + dashboard centralise | Demande clients chaines |
| Integration API logiciels de caisse (Zelty, Lightspeed, SumUp) | Partenariats valides |
| Rapport annuel exportable | Demande clients/partenaires |
| Marketplace prestataires certifies | Volume et reseau suffisants |
| Expansion sectorielle / international | PMF confirme sur CHR France |

### Risk Mitigation Strategy

**Risques techniques :**
- Generateur PDF affiches = piece la plus complexe du MVP -> prototyper en premier
- PMS pre-rempli = contenu reglementaire a produire manuellement -> commencer par les 3 types les plus courants (restaurant traditionnel, cafe/bar, hotel-restaurant)

**Risques marche :**
- Validation de la willingness-to-pay -> essai gratuit 14j sans CB, mesurer conversion des M+1
- Contenu obsolete en veille manuelle -> RSS Legifrance + newsletters UMIH/GHR + verification hebdomadaire

**Risques ressources :**
- Dev solo = bus factor 1 -> architecture modulaire, code propre, documentation minimale mais suffisante
- Si MVP > 3 mois -> couper PMS pre-rempli (templates vides) et generateur PDF (liens sources a la place)

**Risques juridiques :**
- Responsabilite editeur en cas de sanction utilisateur -> bouclier de responsabilite 4 regles + CGU relues par avocat avant lancement
- Hallucination IA dans la veille (Phase 2) -> validation humaine obligatoire + lien source exige
- Variations locales non couvertes -> mention explicite "cadre national, verifiez localement"
- Interpretation juridique par l'utilisateur -> formulation neutre + renvoi texte officiel + "consultez un professionnel"

## Functional Requirements

### Gestion de compte et onboarding

- FR1: Gerant peut creer un compte avec email, type d'etablissement et code postal
- FR2: Gerant peut s'authentifier avec email et mot de passe
- FR3: Gerant peut reinitialiser son mot de passe par email
- FR4: Gerant peut acceder a un essai gratuit de 14 jours sans carte bancaire
- FR5: Gerant peut souscrire a un plan d'abonnement (Essentiel, Professionnel, Multi-Sites)
- FR6: Gerant peut gerer son abonnement (upgrade, downgrade, annulation)
- FR7: Gerant peut supprimer son compte et toutes ses donnees
- FR8: Gerant peut modifier les informations de son etablissement

### Score de preparation

- FR9: Gerant peut repondre a un questionnaire initial pour obtenir un score de preparation en moins de 5 minutes apres inscription
- FR10: Gerant peut consulter son score de preparation global avec indicateur visuel par niveau
- FR11: Gerant peut voir le detail de son score par dimension de conformite
- FR12: Gerant peut exporter un recapitulatif PDF de son score et de ses points verifies

### Module HACCP

- FR13: Gerant peut acceder a un PMS pre-rempli adapte a son type d'etablissement
- FR14: Gerant peut completer des checklists HACCP quotidiennes (temperatures, nettoyage, reception, tracabilite, DLC)
- FR15: Gerant peut consulter l'historique de ses checklists completees
- FR16: Gerant peut exporter son PMS et historique HACCP en PDF

### Module Affichage obligatoire

- FR17: Gerant peut consulter la liste complete des affichages obligatoires selon son type d'etablissement et sa licence
- FR18: Gerant peut generer des affiches conformes personnalisees en PDF
- FR19: Gerant peut marquer un affichage comme present ou absent dans son etablissement
- FR20: Gerant peut consulter le lien vers le texte officiel pour chaque obligation d'affichage

### Alertes et echeances

- FR21: Gerant peut configurer des echeances pour ses obligations periodiques
- FR22: Gerant recoit des alertes email avant les echeances (J-30, J-7, J-1)
- FR23: Gerant peut consulter un calendrier de ses echeances a venir
- FR24: Gerant peut suivre ses licences (II/III/IV) avec dates de renouvellement

### Contenu reglementaire et responsabilite

- FR25: Le systeme affiche un disclaimer permanent indiquant que l'outil ne remplace pas un audit professionnel
- FR26: Le systeme renvoie vers la source officielle pour chaque obligation affichee
- FR27: Le systeme utilise un vocabulaire de "preparation" (jamais "conformite") dans toute l'interface
- FR28: Gerant peut consulter les textes officiels sources pour chaque point de verification

### Administration

- FR29: Admin peut consulter un dashboard de metriques (inscriptions, conversions, churn)
- FR30: Admin peut gerer le contenu reglementaire (creation, modification, publication)
- FR31: Admin peut envoyer des notifications ciblees par type d'etablissement
- FR32: Admin peut consulter les logs de mise a jour du contenu reglementaire

### Acquisition et marketing

- FR33: Visiteur peut consulter des pages marketing presentant le produit par dimension
- FR34: Visiteur peut lire des articles educatifs sur la reglementation CHR
- FR35: Visiteur peut installer l'application sur l'ecran d'accueil de son smartphone depuis le navigateur

### Phase 2 (Post-MVP)

- FR36: Gerant peut utiliser les checklists HACCP en mode hors-ligne avec synchronisation au retour en ligne
- FR37: Les agents IA de veille detectent les changements reglementaires et proposent des mises a jour a l'admin
- FR38: Admin peut valider ou rejeter les suggestions de mise a jour des agents IA
- FR39: Gerant peut consulter la liste des obligations de securite incendie selon sa categorie ERP et sa capacite d'accueil
- FR39b: Gerant peut suivre les dates de verification des equipements de securite (extincteurs, alarmes, eclairage de securite, desenfumage)
- FR39c: Gerant peut generer un registre de securite PDF avec l'historique des verifications
- FR39d: Gerant peut consulter le lien vers le texte officiel pour chaque obligation de securite incendie
- FR40: Gerant peut consulter un module Accessibilite PMR avec auto-diagnostic
- FR41: Gerant recoit des notifications push navigateur pour les alertes echeances
- FR42: Gerant peut parrainer d'autres gerants via un lien personnalise
- FR43x: Gerant peut contacter le support via un chat integre a l'application

### Phase 3 (Expansion)

- FR43: Gerant peut creer et mettre a jour son DUERP a partir d'un modele adapte a son type d'etablissement et nombre de salaries
- FR43b: Gerant peut consulter la liste des obligations sociales selon son effectif (registre du personnel, affichage obligatoire employeur, elections CSE)
- FR43c: Gerant peut suivre les echeances des obligations sociales periodiques (visite medicale, formation securite, mise a jour DUERP annuelle)
- FR43d: Gerant peut consulter le lien vers le texte officiel pour chaque obligation sociale et droit du travail
- FR44: Gerant Multi-Sites peut gerer N etablissements depuis un dashboard centralise
- FR45: Le systeme peut importer les donnees d'etablissement (nom, SIRET, type, effectif) depuis les logiciels de caisse partenaires (Zelty, Lightspeed, SumUp) via API
- FR45b: Le systeme peut exporter les donnees de tracabilite HACCP (temperatures, DLC, fournisseurs) vers les logiciels de caisse partenaires via API
- FR46: Gerant peut generer un rapport annuel de preparation exportable

## Non-Functional Requirements

### Performance

- NFR1: Les pages marketing se chargent en moins de 1.5 secondes sur connexion 4G
- NFR2: Les interactions utilisateur dans le dashboard repondent en moins de 2 secondes
- NFR3: La completion d'une checklist HACCP prend moins de 3 taps par item
- NFR4: La generation d'un PDF se complete en moins de 5 secondes
- NFR5: Le score de preparation se recalcule en moins de 1 seconde apres une action utilisateur
- NFR6: Les pages marketing obtiennent un score Lighthouse Performance > 90

### Securite

- NFR7: Toutes les communications sont chiffrees en transit (HTTPS/TLS)
- NFR8: Les donnees sont chiffrees au repos par le fournisseur de base de donnees
- NFR9: L'isolation des donnees entre utilisateurs est garantie au niveau de la couche de persistance
- NFR10: Les mots de passe sont hashes avec un algorithme adaptatif conforme aux standards OWASP (bcrypt/argon2)
- NFR11: Les tokens d'authentification expirent apres 24 heures et sont renouveles automatiquement via un refresh token (validite 7 jours)
- NFR12: Les paiements sont traites exclusivement par un processeur certifie PCI-DSS (aucune donnee de carte bancaire ne transite par l'application)
- NFR13: Un utilisateur peut supprimer l'integralite de ses donnees personnelles dans un delai de 72 heures (RGPD art. 17)
- NFR14: Les scores de preparation ne sont jamais exposes a des tiers sans consentement explicite

### Scalabilite

- NFR15: Le systeme supporte 2 000 utilisateurs concurrents avec un temps de reponse inferieur a 2 secondes
- NFR16: L'ajout d'une nouvelle dimension de conformite ne necessite pas de refactoring de l'existant (architecture modulaire)
- NFR17: Le budget infrastructure reste inferieur a 100 EUR/mois jusqu'a 2 000 utilisateurs

### Accessibilite

- NFR18: L'interface respecte WCAG 2.1 niveau AA (contraste, navigation clavier, labels)
- NFR19: Les zones tactiles mesurent au minimum 44x44 pixels (utilisation en cuisine avec mains mouillees ou gantees)
- NFR20: L'interface maintient un ratio de contraste minimum de 4.5:1 (WCAG AA) pour une lisibilite sous eclairage variable (cuisine, terrasse, cave)
- NFR21: Les textes et labels ont une taille minimale de 16px et sont lisibles sans zoom sur un ecran de 5 pouces minimum
