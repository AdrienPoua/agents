---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - competitive-landscape-conformchr-2026-02-10.md
  - conformchr-pain-points.md
  - domain-conformchr-research.md
  - market-conformchr-research.md
date: 2026-02-10
author: Boss
---

# Product Brief: ConformCHR

## Executive Summary

**ConformCHR** est un outil SaaS de preparation aux controles et d'organisation reglementaire tout-en-un destine aux gerants CHR (Cafes, Hotels, Restaurants) independants en France.

Le secteur CHR francais compte **~280 000 etablissements** dont **88% d'independants** (~246 000 gerants) qui font face a un mille-feuille reglementaire couvrant **6 dimensions** distinctes (hygiene HACCP, affichage obligatoire, securite incendie/ERP, accessibilite PMR, social/droit du travail, licences et permis). Ces obligations relevent de **6+ codes juridiques differents** et exposent les gerants a des sanctions cumulees pouvant depasser **225 000 EUR + fermeture administrative + prison**.

Aujourd'hui, **aucun outil SaaS n'aide les gerants a s'organiser et se preparer sur ces 6 dimensions simultanement**. Le marche est structure en silos : HACCP d'un cote (Traqfood, ePackPro), RH de l'autre (Combo, Skello), et diagnostics ponctuels couteux pour le reste (DEKRA, Bureau Veritas). 4 des 6 dimensions sont des **deserts numeriques absolus** (affichage, securite ERP, PMR, licences).

ConformCHR se positionne comme **"l'assistant de preparation aux controles du restaurateur independant"** -- un outil qui centralise, rappelle et organise les obligations reglementaires, ou le gerant verifie lui-meme ses points de conformite. A **19-39 EUR/mois** pour les 6 dimensions vs 130-200 EUR/mois pour des solutions fragmentees, le ratio cout/amendes evitees est de **1:50**.

Le contexte est particulierement favorable : hausse de 80% des controles sanitaires (51 990 inspections en restauration en 2024, 1 750 fermetures administratives), fin de la periode Ad'AP accessibilite (sept. 2024), et 8 647 defaillances annuelles dans le secteur.

---

## Core Vision

### Problem Statement

Les gerants CHR independants en France (~246 000 etablissements) font face a un cadre reglementaire fragmentaire, complexe et en constante evolution, couvrant 6 dimensions de conformite relevant de codes juridiques differents. Ils doivent gerer ces obligations **seuls, sans service juridique ni responsable conformite**, dans un contexte ou :

- Ils consacrent **au minimum 2 heures par jour** a des taches administratives et de conformite (700+ heures/an)
- Les controles sanitaires ont augmente de **80%** en 2024 pour atteindre 100 000 inspections/an
- Les sanctions cumulees peuvent depasser **600 000 EUR** d'amendes + prison + fermeture administrative
- Les marges sont de **3 a 5%** et **25 etablissements ferment chaque jour** en France
- **67% des gerants n'utilisent aucun outil digital** de gestion interne

Le probleme n'est pas l'absence de solutions -- c'est leur **fragmentation**. Le gerant doit jongler entre 5 a 10 outils/prestataires differents pour couvrir l'ensemble de ses obligations, ce qui genere oublis, stress et un cout cumule eleve.

### Problem Impact

**Impact financier :**
- Amendes cumulees theoriques : 190 500 EUR (personne physique) a 270 000+ EUR (personne morale)
- Cout d'un controle URSSAF defavorable : 201 804 EUR en moyenne par entreprise
- Cout des solutions fragmentees : 130-200 EUR/mois pour 3 dimensions sur 6
- Prestations ponctuelles (DEKRA, Bureau Veritas) : plusieurs milliers d'euros par diagnostic

**Impact operationnel :**
- 700+ heures/an de paperasse administrative detournees du coeur de metier
- Gestion au papier (classeurs, Excel, post-it) sans suivi ni rappels
- Oublis d'echeances critiques (renouvellement permis, verification extincteurs, mise a jour DUERP)

**Impact emotionnel :**
- Stress et anxiete face aux controles inopines (qualifies de "moment redoute par les restaurateurs")
- Peur de la fermeture administrative ("veritable desastre" : perte de CA, reputation endommagee)
- Sentiment d'injustice face a des obligations concues pour les grandes structures
- Burn-out et fatigue decisionnelle (journees de 12h+ en cuisine/salle + 2h+ d'administratif)

### Why Existing Solutions Fall Short

**1. Fragmentation par dimension :** Chaque acteur ne couvre qu'une seule dimension sur 6. Traqfood, ePackPro, Octopus = HACCP uniquement. Combo, Skello = RH/planning uniquement. Securylog = registre securite uniquement. Aucun concurrent ne couvre plus de 2 dimensions.

**2. Cible grands comptes :** Les solutions les plus completes (ePackPro a 100+ EUR/mois, Mapal OS, Kooklin) ciblent les chaines et grands groupes, pas les independants au budget de 25-83 EUR/mois.

**3. Prestations ponctuelles :** DEKRA, Bureau Veritas proposent des diagnostics a plusieurs milliers d'euros -- inaccessibles pour un independant avec 3-5% de marge.

**4. Outils gratuits fragmentes :** OiRA (DUERP), auto-diagnostic PMR (Handinorme) sont ponctuels, sans suivi dans le temps, sans integration entre dimensions, sans rappels automatiques.

**5. Deserts numeriques absolus :** Aucun logiciel SaaS ne gere dynamiquement les affichages obligatoires, l'accessibilite PMR en suivi continu, ni les alertes de renouvellement de licences/permis.

**Le vrai ocean bleu n'est pas chaque dimension individuellement, mais leur INTEGRATION dans un seul outil accessible aux independants.**

### Proposed Solution

ConformCHR est un outil de **preparation aux controles et d'organisation reglementaire** qui couvre les 6 dimensions de conformite CHR dans une seule interface mobile-first a 19-39 EUR/mois.

**Fonctionnement fondamental :**
- L'outil **organise** les obligations par dimension et par priorite
- L'outil **rappelle** les echeances et verifications periodiques (notifications push/email)
- L'outil **suit** les points verifies par le gerant via un score de preparation (vert/orange/rouge)
- L'outil **informe** en fournissant les liens vers les textes officiels (Legifrance, service-public.fr)
- **C'est le gerant qui verifie et coche** -- l'outil ne certifie pas la conformite

**Les 6 dimensions couvertes :**
1. **Hygiene HACCP** : Checklists quotidiennes, PMS simplifie, tracabilite, export PDF pour controles
2. **Affichage obligatoire** : Generateur d'affiches conformes personnalisees, alertes de mise a jour
3. **Securite incendie/ERP** : Suivi du registre de securite, rappels verifications periodiques
4. **Accessibilite PMR** : Auto-diagnostic guide, checklist des points a verifier, plan d'action
5. **Social/Droit du travail** : Aide au DUERP, alertes convention HCR, echeances sociales
6. **Licences et permis** : Calendrier des echeances, rappels de renouvellement automatiques

**Bouclier de responsabilite (4 regles) :**
1. Toujours citer les sources officielles (Legifrance, service-public.fr)
2. Ne jamais utiliser "conforme" dans l'UX ("score de preparation", pas "score de conformite")
3. C'est le client qui verifie, pas l'outil
4. Disclaimer visible + CGU solides ("Outil d'aide a l'organisation. Ne remplace pas un audit professionnel.")

### Key Differentiators

**1. Seul outil 6-en-1 du marche :** Aucun concurrent ne couvre plus de 2 dimensions. ConformCHR est le premier et seul outil SaaS a organiser les 6 dimensions dans une interface unifiee.

**2. Prix imbattable :** 19-39 EUR/mois pour 6 dimensions vs 130-200 EUR/mois pour 3 dimensions via des solutions fragmentees. Ratio amende evitee / cout abonnement = 50:1.

**3. Concu pour les independants :** Interface mobile-first, micro-interactions de 5-10 min/jour, onboarding en 2 minutes, concu pour un gerant de 50 ans qui travaille 50-70h/semaine et utilise principalement son smartphone.

**4. Positionnement "outil, pas expert" :** Pas de responsabilite sur le contenu reglementaire. Le gerant verifie lui-meme, l'outil organise et rappelle. Permet a un dev solo de lancer sans expertise juridique.

**5. Timing optimal :** Hausse de 80% des controles + fin Ad'AP + defaillances record = le marche est pret. 67% des gerants n'ont aucun outil de gestion interne = 67% de marche vierge.

---

## Target Users

### Primary Users

#### Segment A : "Le Traditionnel Deborde" (cible primaire -- ~55 000-65 000 etablissements)

**Persona : Marc, 52 ans, gerant de restaurant traditionnel a Lyon**

- **Profil** : Ancien cuisinier devenu patron il y a 12 ans. Restaurant de 45 couverts, 5 salaries. CA : 320 000 EUR/an, marge nette 4%.
- **Quotidien** : Travaille 60h/semaine, 6 jours sur 7. Arrive a 7h pour les courses, service du midi et du soir, ferme a 23h.
- **Maturite numerique** : Faible a moyenne. Utilise Facebook et WhatsApp, a un logiciel de caisse (L'Addition), mais gere sa conformite avec des classeurs papier et des post-it.
- **Budget outils** : 30-60 EUR/mois maximum. Tres sensible au prix.
- **Rapport a la conformite** : Sait qu'il n'est "pas tout a fait aux normes" mais repousse le sujet. Son PMS n'a pas ete mis a jour depuis 3 ans. N'a jamais fait d'auto-diagnostic PMR. Son permis d'exploitation expire dans 2 ans et il ne le sait pas.
- **Declencheur d'achat** : Un confrere du quartier a recu un avertissement DDPP la semaine derniere. Marc a eu un coup de stress et a cherche "preparer controle hygiene restaurant" sur Google.
- **Ce qui le convainc** : Temoignage d'un pair, essai gratuit sans carte bancaire, score de preparation visible en 5 minutes, prix inferieur a 40 EUR/mois.

#### Segment B : "Le Jeune Entrepreneur Numerique" (early adopter -- ~15 000-20 000 etablissements)

**Persona : Sarah, 34 ans, fondatrice d'un coffee shop fast-casual a Bordeaux**

- **Profil** : Reconversion apres 8 ans dans le marketing digital. A ouvert son etablissement il y a 18 mois. 3 salaries. CA : 220 000 EUR/an.
- **Quotidien** : Travaille 55h/semaine mais organise. Utilise deja Zelty (caisse), Skello (planning), Instagram (marketing), UberEats (livraison).
- **Maturite numerique** : Haute. Compare les outils en ligne, lit les avis, teste les essais gratuits.
- **Budget outils** : 50-100 EUR/mois, prete a investir si ROI visible.
- **Rapport a la conformite** : Proactive mais debordee. A suivi la formation HACCP, connait les obligations mais n'a pas le temps de tout suivre. A investi ses economies dans l'affaire et ne peut pas se permettre une fermeture.
- **Declencheur d'achat** : Recherche Google "logiciel conformite restaurant" apres avoir lu un article sur les 1 750 fermetures administratives en 2024.
- **Ce qui la convainc** : Design moderne, UX intuitive, couverture des 6 dimensions dans un seul outil, integration possible avec ses outils existants.

### Secondary Users

#### Segment C : "Le Multi-Sites en Structuration" (~8 000-12 000 groupes)

- Gerant de 2-5 etablissements, besoin de standardiser les pratiques entre sites
- Budget 100-200 EUR/mois cumule, recherche centralisation
- Approche plus structuree, consulte l'expert-comptable

#### Segment D : "Le Cafe-Bar Compliance-Leger" (~25 000-30 000 etablissements)

- Gerant de cafe/bar, 0-2 salaries, budget 15-30 EUR/mois
- Obligations moins nombreuses (pas de cuisine complexe) mais licences et affichages restes exiges
- Tres passif, achete uniquement sous contrainte reglementaire directe
- A adresser avec le plan Essentiel a 19 EUR/mois

#### Prescripteurs (non-utilisateurs directs mais influents)

- **Experts-comptables specialises CHR** : Conseiller de confiance n.1 du gerant, premier a detecter les risques de non-conformite
- **Organismes de formation** (permis d'exploitation, HACCP) : Touchent les gerants au moment ou ils sont le plus receptifs
- **Syndicats professionnels** (UMIH, GHR) : Prescripteurs institutionnels, 35 000+ adherents UMIH

### User Journey

**1. Decouverte (J0)** : Evenement declencheur (controle d'un confrere, article de presse, remarque de l'expert-comptable) → recherche Google ("preparer controle restaurant") → landing page ConformCHR avec calculateur d'amendes evitees.

**2. Evaluation (J0-J3)** : Inscription en < 2 minutes (email + type d'etablissement + code postal) → 5 questions rapides → score de preparation instantane (X/Y points verifies, zones a risque identifiees) → acces essai gratuit 14 jours sans carte bancaire.

**3. "Aha! Moment" (J1-J3)** : Le gerant voit en 5 minutes l'etendue de ses obligations sur les 6 dimensions, identifie les echeances qu'il avait oubliees (permis d'exploitation, verification extincteurs), et complete sa premiere checklist HACCP en 3 taps sur son smartphone.

**4. Usage quotidien (J3-J30)** : 5-10 minutes/jour sur smartphone pendant un service calme ou le soir. Cocher les checklists HACCP, generer un affichage obligatoire, recevoir un rappel de verification extincteur. Score de preparation qui progresse visuellement.

**5. Conversion (J7-J14)** : La valeur est demontree → passage au plan payant (19 ou 39 EUR/mois sans engagement).

**6. Retention long terme** : Alertes pertinentes (pas de spam), progression du score de preparation, rapport annuel PDF exportable pour l'expert-comptable, veille reglementaire lors de changements legislatifs.

---

## Success Metrics

### User Success Metrics

| Metrique | Definition | Cible |
|----------|-----------|-------|
| **Score de preparation moyen** | Pourcentage de points verifies par l'utilisateur sur les 6 dimensions | > 70% a M+3 d'usage |
| **Time to First Value** | Temps entre l'inscription et le premier score de preparation affiche | < 5 minutes |
| **Frequence d'utilisation** | Sessions par semaine par utilisateur actif | 3+ sessions/semaine |
| **Temps moyen par session** | Duree d'une session sur l'outil | 5-10 minutes |
| **Checklist completion rate** | Taux de completion des checklists commencees | > 80% |
| **Echeances respectees** | Pourcentage d'echeances ou le gerant a agi avant la date limite | > 90% |

### Business Objectives

**Objectif a 6 mois :** Valider le product-market fit avec 400 clients payants et un MRR de 14 000 EUR.

**Objectif a 12 mois :** Atteindre 2 000 clients payants et un MRR de ~50 000 EUR, avec un churn < 5%/mois.

**Objectif a 24 mois :** Devenir la reference en preparation reglementaire CHR pour les independants en France, avec 5 000+ clients et un partenariat institutionnel UMIH ou GHR.

### Key Performance Indicators

#### Acquisition (6 premiers mois)

| KPI | M+1 | M+3 | M+6 |
|-----|-----|-----|-----|
| Visiteurs uniques site web | 1 000 | 5 000 | 15 000 |
| Leads qualifies (inscriptions essai) | 50 | 300 | 1 000 |
| Taux de conversion visiteur → essai | 5% | 6% | 7% |
| Clients payants cumules | 15 | 100 | 400 |
| Taux de conversion essai → payant | 30% | 33% | 40% |

#### Retention

| KPI | M+1 | M+3 | M+6 |
|-----|-----|-----|-----|
| Churn mensuel | < 10% | < 8% | < 5% |
| DAU/MAU (engagement) | 30% | 40% | 50% |
| NPS (Net Promoter Score) | N/A | > 30 | > 40 |

#### Revenus

| KPI | M+1 | M+3 | M+6 |
|-----|-----|-----|-----|
| MRR | 450 EUR | 3 500 EUR | 14 000 EUR |
| ARPU | 30 EUR | 35 EUR | 35 EUR |
| CAC | < 50 EUR | < 40 EUR | < 30 EUR |
| LTV/CAC ratio | > 3 | > 5 | > 8 |

#### Partenariats

| KPI | M+1 | M+3 | M+6 |
|-----|-----|-----|-----|
| Cabinets comptables partenaires | 2 | 10 | 20 |
| Organismes de formation partenaires | 1 | 3 | 5 |
| Clients acquis via prescription | 5 | 30 | 100 |

---

## MVP Scope

### Core Features (Phase 1 -- M+0 a M+3)

#### Module HACCP (porte d'entree credible)
- PMS pre-rempli par type d'etablissement (restaurant traditionnel, rapide, cafe, hotel)
- 5 checklists quotidiennes en 3 taps (temperatures, nettoyage, reception marchandises, tracabilite, DLC)
- Mode hors-ligne + synchronisation
- Export PDF pour controle DDPP
- Lien vers chaque texte officiel (Reglement CE 852/2004, arrete du 21 dec. 2009)

#### Module Affichage Obligatoire (quick win differenciateur)
- Generateur d'affiches conformes personnalisees (allergenes, prix, origine viandes, interdiction de fumer, licence)
- Liste complete des affichages requis selon le type d'etablissement et la licence
- Alerte lors de changement reglementaire affectant un affichage
- Export PDF/impression A4

#### Module Alertes et Licences (valeur immediate)
- Calendrier des echeances (permis d'exploitation, verification extincteurs, controle ERP, mise a jour DUERP)
- Notifications push et email J-30, J-7, J-1
- Tableau de bord "score de preparation" global (vert/orange/rouge)
- Suivi des licences II/III/IV avec dates de renouvellement

#### Transversal
- Inscription en < 2 minutes (email + type d'etablissement + code postal)
- Score de preparation instantane apres 5 questions (nombre de points a verifier identifies)
- Interface 100% mobile-first (PWA responsive)
- Support chat en francais
- Disclaimer permanent : "Outil d'aide a l'organisation. Ne remplace pas un audit professionnel."

### Out of Scope for MVP

**Report a la Phase 2 (M+3 a M+6) :**
- Module accessibilite PMR (auto-diagnostic guide + plan d'action)
- Module securite incendie/ERP (registre digital + rappels verifications periodiques)

**Report a la Phase 3 (M+6 a M+9) :**
- Module social/DUERP (aide a la redaction + alertes convention HCR)
- Fonctionnalites multi-sites (dashboard centralise)
- Integration API avec logiciels de caisse (Zelty, Lightspeed, SumUp)
- Marketplace de prestataires certifies (diagnostiqueurs accessibilite, formateurs HACCP)

**Explicitement hors scope :**
- Certification ou garantie de conformite (le positionnement est "preparation", pas "certification")
- Capteurs IoT ou materiel physique (pure SaaS, pas de hardware)
- Fonctionnalites de comptabilite, paie ou gestion des stocks (pas de duplication avec Combo, PayFit, logiciels de caisse)
- Couverture hors France (reglementation 100% francaise au lancement)

### MVP Success Criteria

| Critere | Seuil de validation | Methode de mesure |
|---------|--------------------|--------------------|
| **Product-market fit signal** | 40% des utilisateurs essai se convertissent en payants | Stripe / CRM |
| **Engagement** | 50%+ des clients payants utilisent l'outil au moins 3x/semaine | Analytics produit |
| **Retention M+3** | Churn mensuel < 8% | Stripe |
| **NPS** | > 30 a M+3 | Enquete in-app |
| **Bouche-a-oreille** | 20%+ des nouveaux clients viennent par parrainage | CRM (source tracking) |
| **Revenue** | 100 clients payants a M+3 (3 500 EUR MRR) | Stripe |

**Decision go/no-go Phase 2 :** Si 4/6 criteres sont atteints a M+3, passage en Phase 2. Sinon, pivoter sur les dimensions ou ajuster le pricing.

### Future Vision

**A 12 mois :** ConformCHR couvre les 6 dimensions avec une profondeur suffisante. 2 000+ clients payants. Partenariat officiel avec l'UMIH ou le GHR. Newsletter de veille reglementaire gratuite avec 15 000 inscrits. Coefficient viral de 1.2.

**A 24 mois :** Plateforme de reference pour la preparation reglementaire CHR en France. Integration avec les principaux logiciels de caisse. Marketplace de prestataires certifies (diagnostiqueurs, formateurs, installateurs). Plan Multi-Sites pour les petites chaines. Rapport annuel de preparation exportable pour les assurances et bailleurs.

**A 36 mois :** Expansion vers d'autres secteurs ERP a forte reglementation (coiffure, esthetique, commerce alimentaire). Exploration de l'international (Belgique, Suisse romande -- meme langue, reglementation differente). Module IA pour la veille reglementaire predictive.

---

## Technical Constraints and Stack

**Fondateur :** Adrien Poua, developpeur solo JS/TS, budget infrastructure < 100 EUR/mois.

**Stack recommande :**
- **Frontend** : Next.js / React, PWA mobile-first
- **Backend** : Supabase (auth, database, storage -- gratuit jusqu'a 50K MAU)
- **Hebergement** : Vercel Pro (20 EUR/mois)
- **Emails transactionnels** : Resend (0-20 EUR/mois)
- **Paiement** : Stripe
- **Domaine** : ~1 EUR/mois

**Budget mensuel estimatif :** 21-66 EUR/mois, compatible avec la contrainte < 100 EUR.

---

## Go-to-Market Strategy

### Canal 1 : SEO Content Marketing (organique)
- Articles SEO sur les requetes reglementaires CHR ("affichage obligatoire restaurant 2026", "controle DDPP preparation")
- Checklists telechargables gratuites (lead magnets)
- Simulateur gratuit "Calculez votre exposition aux amendes" (outil viral)
- Objectif : 5 000 visites/mois a M+6

### Canal 2 : Prescription par experts-comptables et formateurs
- Programme "Partenaire ConformCHR" : acces gratuit au dashboard client + commission 20%
- Partenariat avec organismes de formation : flyer post-formation + offre 1er mois gratuit
- Objectif : 20 cabinets partenaires a M+6

### Canal 3 : Communaute et bouche-a-oreille
- Programme de parrainage : 1 mois gratuit pour parrain et filleul
- Presence active dans les groupes Facebook pro
- 10 temoignages video de restaurateurs pilotes
- Newsletter mensuelle de veille reglementaire gratuite

### Pricing

| Plan | Prix | Contenu | Cible |
|------|------|---------|-------|
| **Essentiel** | 19 EUR/mois (190 EUR/an) | HACCP basique + Affichage obligatoire + Alertes echeances licences | Segment D (cafes/bars) |
| **Professionnel** | 39 EUR/mois (390 EUR/an) | 6 dimensions completes + Simulation de controle + Veille reglementaire | Segments A et B (coeur de cible) |
| **Multi-Sites** | 29 EUR/mois par site (min. 2) | Professionnel + Dashboard multi-sites + Gestion centralisee | Segment C (upsell) |
| **Essai gratuit** | 0 EUR / 14 jours | Plan Professionnel complet | Tous segments |

---

## Risks and Mitigations

| Rang | Risque | Probabilite | Impact | Mitigation |
|------|--------|-------------|--------|------------|
| 1 | **Perception "fait tout, rien de bien"** | Haute | Eleve | Exceller sur HACCP d'abord (credibilite), puis deployer les dimensions progressivement. Temoignages specifiques par dimension. |
| 2 | **Elargissement de scope d'un leader** (ePackPro, Combo) | Moyenne | Eleve | Avantage first-mover sur 4 dimensions desertees. Vitesse d'execution. Partenariat UMIH. |
| 3 | **Churn lie aux defaillances du secteur** (36 746 fermetures/an) | Moyenne | Moyen | Cibler aussi les createurs (29 801 ouvertures/an). Partenariat CCI/France Num. |
| 4 | **Outils gratuits gouvernementaux** (OiRA, auto-diagnostic PMR) | Moyenne | Moyen | Se positionner sur le suivi continu et l'integration. "OiRA genere votre DUERP, ConformCHR le maintient a jour." |
| 5 | **Resistance culturelle du "systeme D"** | Haute | Moyen | Onboarding ultra-simplifie, valeur demontree en 5 min, temoignages de pairs, essai gratuit 14 jours. |
| 6 | **Responsabilite juridique** | Faible (mitigee) | Eleve | Bouclier de responsabilite (4 regles), CGU solides, jamais "conforme" dans l'UX, renvoi systematique aux sources officielles. |

---

*Product Brief genere le 10 fevrier 2026 a partir de 4 documents de recherche : domain research, market research, competitive landscape, et pain points analysis.*
*Methodologie BMAD -- Workflow create-product-brief -- Steps 1-6 completes.*
