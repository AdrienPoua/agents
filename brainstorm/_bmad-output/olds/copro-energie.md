# COPRO-ENERGIE - Fiche Projet Complete

> **Statut :** Projet gagnant (86.5/100)
> **Tagline :** Le tableau de bord energetique qui identifie les passoires thermiques de vos coproprietes
> **Date :** 6 fevrier 2026

---

## En Une Phrase

COPRO-ENERGIE croise automatiquement 4 bases de donnees publiques (DPE ADEME, registre ANAH, transactions DVF, cadastre) pour generer un bulletin de sante energetique par immeuble, directement exploitable par les syndics en Assemblee Generale.

---

## Le Contexte : Pourquoi Maintenant ?

### La loi Climat et Resilience (2021)

L'Etat francais a decide d'eradiquer les passoires thermiques. Le calendrier est inscrit dans la loi :

```
2025 → Logements classe G interdits a la location
2028 → Logements classe F interdits a la location
2034 → Logements classe E interdits a la location
```

En parallele, le **DPE collectif** (a l'echelle d'un immeuble entier) est devenu obligatoire pour toutes les coproprietes :

```
2024 → Coproprietes de 200+ lots
2025 → Coproprietes de 50 a 199 lots
1er janvier 2026 → Coproprietes de moins de 50 lots (derniere vague)
```

### Ce que ca signifie concretement

Un syndic qui gere 72 coproprietes doit maintenant, pour CHAQUE immeuble :

1. Savoir combien de logements sont classes F ou G (bientot interdits a la location)
2. Presenter un bilan energetique en Assemblee Generale aux coproprietaires
3. Planifier et chiffrer les travaux de renovation (isolation, chauffage...)
4. Informer les bailleurs concernes qu'ils ne pourront plus louer

**Aujourd'hui, il fait tout ca a la main** en croisant des donnees sur 4-5 sites differents.

---

## La Douleur

### Qui souffre ?

~4 400 syndics professionnels gerant au total 315 000 coproprietes en France. En moyenne 72 coproprietes par syndic.

### De quoi ?

```
SANS OUTIL (situation actuelle) :

Pour UNE copropriete :
1. Aller sur le site ADEME chercher les DPE lot par lot        → 2h
2. Croiser avec le registre ANAH pour verifier les adresses     → 1h
3. Identifier manuellement les passoires (F et G)               → 2h
4. Consulter DVF pour estimer la decote de valeur               → 2h
5. Preparer un rapport presentable en AG                        → 3h
                                                        Total : ~10h

Pour 72 coproprietes : 10h x 72 = 720 heures de travail
A 50 EUR/h de cout salarial : 36 000 EUR de charge
```

### Combien ca coute de ne rien faire ?

| Risque | Consequence |
|--------|------------|
| Pas de DPE collectif | Amende, responsabilite du syndic engagee |
| Passoire thermique non identifiee | Bailleur en infraction, poursuite possible |
| Pas de plan de travaux en AG | Copropriete en retard, valeur immobiliere en baisse |
| Syndic non informe | Perte de confiance, non-reelection |

---

## La Solution

### Ce que fait COPRO-ENERGIE

```
AVEC COPRO-ENERGIE :

1. Le syndic se connecte
   → Voit le dashboard de ses 72 coproprietes

2. Pour chaque immeuble, en un coup d'oeil :
   ┌─────────────────────────────────────────────────┐
   │  12 rue de la Paix, 75002 Paris                 │
   │  24 lots │ DPE collectif : D                    │
   │                                                  │
   │  Repartition energetique :                       │
   │  A ░░          0 lots                            │
   │  B ██          2 lots                            │
   │  C ████████    8 lots                            │
   │  D ██████      6 lots                            │
   │  E ████        4 lots                            │
   │  F ███         3 lots  ⚠️ Interdits en 2028     │
   │  G █           1 lot   🔴 Interdit MAINTENANT   │
   │                                                  │
   │  Passoires thermiques : 4/24 lots (17%)          │
   │  Decote estimee parc : -45 000 EUR               │
   │  Priorite travaux : HAUTE                        │
   │                                                  │
   │  [📄 Generer rapport AG]  [📊 Detail par lot]   │
   └─────────────────────────────────────────────────┘

3. Generer le rapport AG en 1 clic
   → PDF pret a presenter aux coproprietaires
   → Inclut : repartition energetique, lots concernes,
     estimation decote, recommandations travaux

4. Recevoir des alertes
   → "3 nouveaux DPE publies pour vos coproprietes cette semaine"
   → "L'interdiction classe F entre en vigueur dans 23 mois"

Temps : 15 minutes au lieu de 10 heures par copropriete
```

### Fonctionnalites MVP

| Fonctionnalite | Description | Priorite |
|----------------|-------------|----------|
| **Dashboard multi-coproprietes** | Vue d'ensemble des 72 copros avec code couleur (vert/orange/rouge) | P0 |
| **Fiche immeuble** | Repartition energetique par lot, passoires identifiees, decote estimee | P0 |
| **Rapport AG PDF** | Document pret a presenter en AG, genere en 1 clic | P0 |
| **Alertes email** | Nouveau DPE publie, echeance qui approche | P0 |
| **Import portefeuille** | Saisie des coproprietes du syndic (SIRET ou adresses) | P0 |
| Estimation cout travaux | Fourchette de prix par type de renovation | P1 |
| Suivi des decisions AG | Historique des votes et decisions par copropriete | P1 |
| Comparaison temporelle | Evolution energetique d'une copro dans le temps | P2 |
| Export comptable | Provisions travaux energetiques | P2 |

---

## Le Marche

### Taille

| Segment | Nombre | Description |
|---------|--------|-------------|
| **Syndics professionnels** | ~4 400 | Cabinets gerant en moyenne 72 copros |
| **Coproprietes** | ~315 000 | Immeubles geres par des syndics pros |
| **Lots en copropriete** | ~8 000 000 | Logements concernes |
| **Passoires thermiques** | ~1 700 000 | Logements F et G en copropriete (estimation) |

### Marche adressable

```
4 400 syndics x 249 EUR/mois (plan Pro) = 13.1M EUR ARR theorique

Objectif realiste :
- Annee 1 : 20-40 clients  →  5-10K EUR MRR  →  60-120K EUR ARR
- Annee 2 : 100-200 clients → 25-50K EUR MRR  → 300-600K EUR ARR
- Annee 3 : 400-600 clients → 100-150K EUR MRR → 1.2-1.8M EUR ARR
```

### Extensions possibles (apres le MVP)

| Segment | Taille | Pourquoi |
|---------|--------|----------|
| Bailleurs sociaux | ~700 organismes | Meme problematique energetique, plus gros volumes |
| Gestionnaires de patrimoine | ~2 000 | Suivi de portefeuilles immobiliers |
| Collectivites locales | ~35 000 communes | Obligation PCAET (plan climat) |
| Diagnostiqueurs immobiliers | ~11 500 | Prospection de missions DPE collectif |

---

## Business Model

### Pricing

```
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Starter            │ 99 EUR      │ Jusqu'a 20 coproprietes          │
│ Pro                │ 249 EUR     │ Jusqu'a 80 coproprietes          │
│ Agence             │ 499 EUR     │ Coproprietes illimitees          │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

### Pourquoi le syndic paye

| Argument | Chiffre |
|----------|---------|
| Travail manuel remplace | 720h/an → 15 min/copro |
| Cout salarial economise | 36 000 EUR/an |
| Prix de l'outil | 2 988 EUR/an (plan Pro) |
| **ROI** | **12x** |

### Pourquoi le syndic ne resilie pas

1. **Donnees mises a jour en continu** - 35 000 nouveaux DPE par semaine, le dashboard evolue
2. **AG annuelles** - Le rapport est necessaire chaque annee
3. **Interdictions progressives** - Calendrier jusqu'en 2034, besoin permanent
4. **Historique accumule** - Evolution energetique dans le temps, cout de switching eleve

---

## Acquisition Client

### Strategie principale : le rapport gratuit automatise

C'est LA killer feature d'acquisition. Aucun demarchage humain necessaire.

```
ETAPE 1 : Generer les rapports
- Telecharger le registre ANAH (528 000 coproprietes avec nom du syndic)
- Croiser avec la base DPE ADEME (9M+ DPE)
- Pour chaque syndic : calculer le nombre de passoires thermiques

ETAPE 2 : Envoyer les rapports
- Email automatise et personnalise :

  Objet : "[Nom du cabinet] - 23 de vos 72 coproprietes ont des passoires thermiques"

  Bonjour,

  Nous avons croise les donnees publiques du registre des coproprietes
  et de la base DPE de l'ADEME pour votre cabinet.

  Resultat :
  - 72 coproprietes identifiees dans votre portefeuille
  - 23 contiennent des logements classes F ou G
  - 147 lots concernes (dont 38 deja interdits a la location)

  → Consultez votre rapport gratuit : [lien]

  Ce rapport est genere automatiquement a partir de donnees publiques.
  La version complete avec detail par lot et rapport AG est disponible
  dans COPRO-ENERGIE.

ETAPE 3 : Convertir
- Le syndic clique, decouvre un probleme qu'il ne connaissait pas
- Freemium : 3 coproprietes gratuites
- Pour voir les 69 autres → abonnement
```

### Canaux complementaires

| Canal | Action | Cout |
|-------|--------|------|
| **SEO** | Pages "DPE collectif obligatoire [ville]", "passoire thermique copropriete" | Gratuit (temps) |
| **Federations** | Partenariat FNAIM, UNIS pour labellisation | Gratuit |
| **Salons** | RENT (salon immobilier), congres FNAIM | 500-2 000 EUR |
| **LinkedIn** | Articles sur la transition energetique des coproprietes | Gratuit |
| **Referral** | Syndic satisfait recommande a ses confreres (marche concentre) | Gratuit |

---

## Concurrence

### Etat des lieux

| Acteur | Ce qu'il fait | Pourquoi il n'est pas concurrent |
|--------|---------------|----------------------------------|
| **Hellio** | Courtier en energie/renovation | Vend des travaux, pas un outil de pilotage pour syndics |
| **MeilleureCopro** | Comparateur de syndics | Aide les copros a changer de syndic, pas de DPE |
| **Liesse** | Logiciel de gestion de copropriete | Comptabilite/AG, pas d'energetique |
| **Thegreen.place** | Bilan carbone entreprise | Pas immobilier |
| **DPE ADEME (site)** | Consultation DPE individuel | Pas de croisement, pas de dashboard, pas de rapport AG |

### Le vide

**Aucun outil ne croise registre des coproprietes ANAH + base DPE ADEME + transactions DVF + cadastre** pour generer un dashboard energetique par syndic.

Le marche est occupe par :
- Des consultants en energie a 5 000+ EUR la mission
- Du travail manuel sur Excel
- Rien d'autre

---

## Donnees Publiques Exploitees

### Les 4 sources

| Source | API/URL | Contenu | Volume |
|--------|---------|---------|--------|
| **DPE ADEME** | data.ademe.fr/datasets/dpe-v2-logements-existants | Classe energetique, consommation, emissions CO2 par logement | 9M+ DPE |
| **Registre coproprietes ANAH** | data.gouv.fr (registre national des coproprietes) | Adresse, nombre de lots, nom du syndic, date d'immatriculation | 528 000 copros |
| **DVF (Demandes de Valeurs Foncieres)** | data.gouv.fr (DVF) | Transactions immobilieres (prix, date, adresse) | Toutes transactions depuis 2014 |
| **Cadastre** | cadastre.data.gouv.fr | Parcellaire, surfaces, references cadastrales | Tout le territoire |

### Comment elles se croisent

```
                    ANAH (coproprietes)
                    "12 rue de la Paix = copro de 24 lots, syndic = Cabinet Martin"
                           │
                           ▼
    ADEME (DPE) ──────► MATCHING PAR ADRESSE ◄────── Cadastre (parcelles)
    "Lot 3 = classe F"     │                          "Parcelle AB-1234"
    "Lot 7 = classe G"     │                          "Surface : 2 400 m2"
                           │
                           ▼
                    DVF (transactions)
                    "Lot 3 vendu 280K en 2023, comparable classe C vendu 340K"
                    "Decote estimee : -60K par lot F/G"
                           │
                           ▼
                    RAPPORT COPRO-ENERGIE
                    "Copro 12 rue de la Paix : 4 passoires, decote -240K,
                     priorite travaux HAUTE, cout renovation estime 180K"
```

### Difficultes techniques du croisement

| Defi | Solution |
|------|----------|
| **Adresses non normalisees** | API BAN (Base Adresse Nationale) pour geocoding + normalisation |
| **DPE par lot vs copro par immeuble** | Aggregation par adresse geocodee (latitude/longitude avec tolerance) |
| **DPE anciens (avant 2021)** | Filtrer sur DPE methode 3CL-2021 (fiables), flag les anciens |
| **Donnees manquantes** | Afficher "DPE non disponible pour X lots" plutot qu'inventer |
| **Volume de donnees** | Ingestion bulk initiale + sync incrementale hebdomadaire |

---

## Architecture Technique

### Stack

| Couche | Technologie | Justification |
|--------|-------------|---------------|
| **Frontend** | Next.js 15 + TypeScript | Stack maitrisee, SSR pour SEO, App Router |
| **Backend** | Next.js API Routes + Supabase Edge Functions | Pas de serveur separe, simplicite |
| **Base de donnees** | Supabase (PostgreSQL) | RLS multi-tenant, PostGIS pour geospatial, full-text search |
| **Auth** | Supabase Auth | Email/password, magic link |
| **Storage** | Supabase Storage | PDFs generes, logos syndics |
| **PDF** | React-PDF ou Puppeteer | Generation rapports AG |
| **Geocoding** | API BAN (adresse.data.gouv.fr) | Gratuit, francais, precis |
| **Emails** | Resend ou Brevo | Alertes + lead magnet |
| **Deploiement** | Vercel + Docker (ETL) | Frontend sur Vercel, pipeline ETL en Docker |
| **CI/CD** | GitHub Actions | Tests + deploy automatique |

### Schema de donnees (simplifie)

```sql
-- Syndics (clients)
syndics
  id, name, email, siret, plan, stripe_customer_id

-- Coproprietes (liees a un syndic)
coproprietes
  id, syndic_id, address, city, postal_code, lat, lng,
  nb_lots, anah_id, dpe_collectif_class

-- Lots (logements dans une copropriete)
lots
  id, copropriete_id, floor, area_m2,
  dpe_class, dpe_date, dpe_id_ademe,
  energy_consumption_kwh, co2_emissions

-- Transactions (DVF)
transactions
  id, copropriete_id, lot_id, date, price, price_m2

-- Rapports generes
rapports
  id, copropriete_id, type (ag, synthese), generated_at, pdf_url

-- Alertes
alerts
  id, syndic_id, type, message, read, created_at
```

### Pipeline ETL

```
┌──────────────────────────────────────────────────────────────┐
│                    PIPELINE ETL (Docker cron)                 │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  1. INGESTION (hebdomadaire)                                  │
│     ├── Fetch nouveaux DPE depuis API ADEME (delta sync)      │
│     ├── Fetch registre ANAH (mise a jour trimestrielle)       │
│     └── Fetch DVF (mise a jour semestrielle)                  │
│                                                               │
│  2. NORMALISATION                                             │
│     ├── Normaliser adresses via API BAN                       │
│     ├── Geocoder (lat/lng)                                    │
│     └── Deduplication                                         │
│                                                               │
│  3. CROISEMENT                                                │
│     ├── Matcher DPE ↔ Copropriete (adresse geocodee)          │
│     ├── Matcher DVF ↔ Lots (adresse + surface)                │
│     └── Calculer metriques (% passoires, decote, priorite)    │
│                                                               │
│  4. ENRICHISSEMENT                                            │
│     ├── Scoring priorite travaux                              │
│     ├── Estimation decote par comparaison DVF                 │
│     └── Detection changements (nouveau DPE, nouvelle vente)   │
│                                                               │
│  5. NOTIFICATION                                              │
│     └── Alertes syndics si changement sur leur portefeuille   │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### Points techniques impressionnants (pour le CV)

| Pattern | Implementation | Pourquoi c'est impressionnant |
|---------|----------------|-------------------------------|
| **Data Pipeline ETL** | Ingestion multi-sources, normalisation, croisement | Architecture data a grande echelle (9M+ records) |
| **Geospatial** | PostGIS, geocoding, matching par proximite | Competence rare et recherchee |
| **Multi-tenant** | RLS Supabase, isolation par syndic | Pattern enterprise SaaS |
| **Real-time sync** | Delta sync hebdomadaire API ADEME | Gestion de donnees vivantes |
| **Scoring algorithmique** | Priorite travaux, estimation decote | Logique metier non-triviale |
| **Generation PDF** | Rapports AG dynamiques avec graphiques | Full-stack complet |

---

## Roadmap

### Phase 1 : MVP (semaines 1-6)

```
Semaine 1-2 : Data Pipeline
├── Connecter API ADEME (DPE)
├── Connecter registre ANAH (coproprietes)
├── Geocoding via API BAN
├── Croisement DPE ↔ coproprietes par adresse
└── Stocker en base Supabase avec PostGIS

Semaine 3-4 : Application
├── Auth (inscription/login syndic)
├── Dashboard multi-coproprietes (vue d'ensemble)
├── Fiche immeuble (repartition energetique, passoires)
├── Import portefeuille syndic (saisie adresses ou SIRET)
└── Alertes email (nouveau DPE, echeance)

Semaine 5-6 : Monetisation + Acquisition
├── Generation rapport AG en PDF
├── Integration Stripe (paiement)
├── Landing page
├── Lead magnet : script de generation de rapports gratuits
└── Premier envoi d'emails personnalises (100 syndics test)
```

### Phase 2 : Croissance (semaines 7-16)

```
├── Integration DVF (transactions, estimation decote)
├── Integration cadastre (surfaces, parcelles)
├── Scoring priorite travaux (algorithme)
├── Comparaison temporelle (evolution DPE dans le temps)
├── Amelioration du rapport AG (graphiques, recommandations)
├── Onboarding guide pour syndics
├── SEO : pages par ville ("DPE collectif Paris", "passoires thermiques Lyon")
└── Partenariats federations (FNAIM, UNIS)
```

### Phase 3 : Expansion (mois 5+)

```
├── Estimation cout travaux (isolation, chauffage)
├── Module suivi decisions AG
├── API pour logiciels de gestion copropriete (Liesse, Thetrawin)
├── Extension bailleurs sociaux
├── Extension gestionnaires de patrimoine
└── App mobile (consultation dashboard sur le terrain)
```

---

## Risques et Mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Qualite donnees DPE** (adresses mal formatees, DPE manquants) | Moyenne | Moyen | Geocoding tolerant, afficher "X lots sans DPE" plutot qu'omettre |
| **API ADEME change** | Faible | Haut | Donnees aussi dispo en bulk download, pas de dependance unique |
| **Syndics conservateurs** (reticence a adopter) | Moyenne | Moyen | Lead magnet gratuit contourne la resistance, le rapport fait la vente |
| **Concurrent copie le modele** | Faible a moyen terme | Moyen | First-mover, accumulation de donnees enrichies, relation client |
| **Marche plus petit que prevu** | Faible | Moyen | Extensions vers bailleurs sociaux, collectivites, diagnostiqueurs |
| **Reglementation assouplie** | Tres faible | Haut | Inscrit dans la loi Climat, calendrier jusqu'en 2034, aucun signal politique |

---

## Metriques de Succes

### Objectifs a 3 mois (post-lancement)

| Metrique | Objectif | Comment mesurer |
|----------|----------|-----------------|
| Rapports gratuits envoyes | 500+ | Emails envoyes via le script |
| Taux d'ouverture email | > 30% | Tracking Resend/Brevo |
| Inscriptions freemium | 50+ | Supabase Auth |
| Clients payants | 5-10 | Stripe |
| MRR | 1 000-2 500 EUR | Stripe dashboard |
| Churn mensuel | < 5% | Stripe |

### Objectifs a 12 mois

| Metrique | Objectif |
|----------|----------|
| Clients payants | 20-40 |
| MRR | 5 000-10 000 EUR |
| ARR | 60 000-120 000 EUR |
| NPS | > 40 |

---

## Budget et Couts

### Couts mensuels estimes (Phase 1)

| Poste | Cout/mois | Detail |
|-------|-----------|--------|
| **Vercel** | 0 EUR | Plan gratuit suffit pour le debut |
| **Supabase** | 25 EUR | Plan Pro (8 GB, 500 MB storage) |
| **Domaine** | ~1 EUR | copro-energie.fr |
| **Resend** | 0 EUR | 3 000 emails/mois gratuit |
| **API BAN** | 0 EUR | Gratuit (service public) |
| **API ADEME** | 0 EUR | Gratuit (donnees publiques) |
| **Stripe** | ~2.9% + 0.25 EUR | Par transaction |
| **Total** | **~30 EUR/mois** | Quasi gratuit au lancement |

### Break-even

```
Couts fixes : ~30 EUR/mois
1 client Starter (99 EUR) = rentable
```

---

## Resume Executif

```
COPRO-ENERGIE
├── Quoi : Dashboard energetique pour syndics de copropriete
├── Pour qui : 4 400 syndics professionnels (72 copros en moyenne)
├── Probleme : 720h/an de travail manuel pour croiser les donnees energetiques
├── Solution : Croisement automatique de 4 bases publiques + rapport AG en 1 clic
├── Differentiation : ZERO concurrent, donnees publiques croisees de maniere unique
├── Monetisation : 99-499 EUR/mois, abonnement recurrent
├── Acquisition : Lead magnet automatise (rapport gratuit personnalise par syndic)
├── MVP : 6 semaines
├── Premier euro : 8-10 semaines
├── Stack : Next.js + Supabase + PostGIS + Docker
├── Cout lancement : ~30 EUR/mois
└── Score election : 86.5/100 (#1 sur 150 idees evaluees)
```

---

*Document genere le 6 fevrier 2026*
