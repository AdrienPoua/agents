# IDEE SaaS : CourtierConform

## Metadata
- **Date d'analyse** : 2026-02-06
- **Angle** : 2 - Listes publiques de prospects
- **Statut** : RETENUE (avec reserves)

---

## Resume executif

**CourtierConform** est un outil SaaS de suivi de conformite reglementaire pour les courtiers en assurance inscrits a l'ORIAS. L'outil centralise le suivi des obligations DDA (formation continue 15h/an), le stockage des pieces justificatives (RCP, garantie financiere, KYC), et genere les documents de conformite necessaires pour les controles ACPR et les associations professionnelles agreees.

---

## La cible (qui paye)

**Courtiers en assurance independants et petits cabinets de courtage (1-10 personnes) inscrits a l'ORIAS.**

- **~70 000 intermediaires** inscrits a l'ORIAS (chiffre officiel)
  - 74 778 inscriptions en assurance
  - 35 020 inscriptions en operations de banque (IOBSP)
  - 11 510 inscriptions en finance (CIF)
  - Note : une meme personne peut avoir plusieurs inscriptions
- **Nombre reel de professionnels distincts** : estime a ~55 000-65 000
- **Sous-cible prioritaire** : courtiers independants et cabinets < 10 personnes (la majorite)
- **Decideur unique** : le courtier lui-meme ou le dirigeant du cabinet
- **Registre public scrapable** : le registre ORIAS est consultable en ligne avec export CSV/XML par lots de 1 000

---

## La douleur (1 phrase)

Les courtiers en assurance risquent la radiation de l'ORIAS et des amendes ACPR pouvant atteindre 20 000 EUR+ s'ils ne peuvent pas prouver leur conformite (formation DDA, RCP a jour, procedures LCB-FT, devoir de conseil), et la plupart gerent ca avec des fichiers Excel et des dossiers papier.

---

## Le declencheur d'achat

1. **Controle ACPR** : l'Autorite de Controle Prudentiel et de Resolution peut controler n'importe quel courtier a tout moment. Le courtier doit pouvoir presenter ses justificatifs immediatement.
2. **Verification par l'association professionnelle agreee** : depuis la reforme du courtage (2022), tout courtier doit adherer a une association agreee qui verifie la conformite au moins tous les 5 ans.
3. **Renouvellement ORIAS annuel** : chaque annee, le courtier doit prouver qu'il remplit toujours les conditions (RCP valide, formation effectuee, etc.)
4. **Demande d'un assureur partenaire** : les compagnies d'assurance demandent de plus en plus les attestations de conformite DDA dans les conventions de courtage.
5. **Nouveau collaborateur** : quand le cabinet recrute, il faut prouver la conformite de chaque personne distribuant de l'assurance.

---

## Les concurrents

### Concurrents directs (SaaS conformite courtage)

| Concurrent | Modele | Forces | Faiblesses |
|-----------|--------|--------|------------|
| **Lya Courtage** (lyaprotect.com) | SaaS complet courtage | Espace conformite dedie, acces ORIAS/ACPR, bonne notoriete | CRM complet = cher, usine a gaz pour un solo courtier qui veut juste la conformite |
| **ASSUR3D** (assur3d.com) | SaaS CRM courtage | Module "Radar conformite", sans engagement | CRM d'abord, conformite en module secondaire |
| **MAIA Courtage** (maia-logiciels.fr) | SaaS CRM courtage + IA | IA, conformite ACPR integree | Focus CRM/production, conformite pas le coeur |
| **Custy Adhoc** (custy.com) | SaaS gestion cabinet | Collecte pieces, suivi echeances, generation documents | Moins connu, interface datee |
| **Brokin** (brokin.fr) | SaaS courtage | Focus reglementaire | Plus recent, moins de features |

### Analyse concurrentielle CRITIQUE

**Attention** : Lya, ASSUR3D, MAIA et Custy sont des CRM/logiciels de gestion complets pour courtiers. Ils integrent la conformite comme un module parmi d'autres. Aucun n'est un geant a 100M$+, mais le marche est DEJA bien couvert.

**Le probleme** : les courtiers qui veulent un outil de conformite vont plutot prendre un CRM complet (Lya, ASSUR3D) qui inclut la conformite. Se positionner uniquement sur la conformite = marche de niche dans une niche deja servie.

---

## La differentiation (tentative)

### Positionnement : "Le tableau de bord conformite pour courtier en 5 minutes"

1. **Pas un CRM** : uniquement la conformite, zero bruit
2. **Onboarding en 5 minutes** : connecte ton ORIAS, upload tes documents, dashboard vert/rouge
3. **Alertes automatiques** : RCP expire dans 30 jours, formation DDA manquante, renouvellement ORIAS
4. **Generation de documents** : attestation conformite, rapport pour l'association agreee
5. **Prix agressif** : 9-19 EUR/mois vs 50-150 EUR/mois pour un CRM complet

### Avantage unique : liste de prospects quasi-gratuite

- Le registre ORIAS est PUBLIC et exportable en CSV/XML
- On peut scraper les ~70 000 inscrits avec noms, adresses, categories
- Cold email : "Bonjour [Nom], votre RCP ORIAS expire dans 47 jours. Voici votre tableau de bord conformite gratuit."
- Cout d'acquisition quasi-nul si le taux de conversion cold email est correct

---

## Score /20

| Critere | Note | Justification |
|---------|------|---------------|
| **Intensite douleur** | 3/5 | Douleur reelle mais pas insupportable au quotidien. La radiation ORIAS est terrifiante mais rare. La plupart des courtiers se debrouillent avec Excel et un classeur. La douleur est episodique (renouvellement annuel, controle ponctuel), pas permanente. |
| **Facilite acquisition** | 4/5 | Liste ORIAS scrapable = gold. Cold email personnalise possible. SEO sur "conformite courtier ACPR", "formation DDA obligatoire", "renouvellement ORIAS". Mais volume de recherche plus faible que l'accessibilite. |
| **Simplicite vente** | 3/5 | "Ne vous faites plus radier de l'ORIAS" est parlant, mais le courtier moyen ne percoit pas l'urgence au quotidien. Vente moins evidente que l'angle amende 50 000 EUR de l'accessibilite. Il faut eduquer sur le risque. |
| **Faisabilite solo** | 5/5 | Dashboard + upload docs + alertes calendrier + generation PDF. Tres simple techniquement. CRUD basique. Pas de crawler, pas de moteur de regles complexe. MVP en 2-4 semaines. |

### **TOTAL : 15/20**

---

## Verification criteres eliminatoires

| Critere eliminatoire | Passe ? | Commentaire |
|----------------------|---------|-------------|
| Marketplace two-sided | OUI | Outil unilateral |
| Demarchage tel permanent | OUI | Cold email via ORIAS + SEO |
| Cycle vente > 1 mois | OUI | Self-service, petit prix, cycle < 1 semaine |
| Marche < 500 cibles France | OUI | ~70 000 inscrits ORIAS |
| Concurrent dominant 100M$+ | OUI | Aucun concurrent > 100M$ sur ce segment |
| Aucun canal acquisition en ligne | OUI | Cold email + SEO |
| Architecture complexe requise | OUI | CRUD simple, dashboard, alertes |
| Responsabilite metier | OUI | Outil de suivi, pas de conseil reglementaire |

**Tous les criteres eliminatoires sont passes.**

---

## Plan d'acquisition detaille

### Cold email (canal principal)
- Scraper le registre ORIAS : noms, adresses, categories d'inscription
- Enrichir avec des emails via des outils comme Hunter.io, Dropcontact
- Campagne cold email personnalisee : "Votre inscription ORIAS [numero] : votre RCP est-elle a jour ?"
- Volume : 70 000 prospects identifiables, campagne en sequences

### SEO (canal secondaire)
- Mots-cles : "renouvellement ORIAS", "conformite ACPR courtier", "formation DDA obligatoire heures", "controle ACPR que faire"
- Volume plus faible que l'accessibilite mais intent tres eleve
- Content : guides pratiques, checklist conformite, calendrier des echeances

### Partenariats
- Associations agreees (Planete CSCA, Endya, APIC) : integration ou recommandation
- Organismes de formation DDA : referral croise

---

## Risques identifies

1. **Marche deja bien servi** : Lya, ASSUR3D, MAIA offrent la conformite dans leur CRM. Le courtier qui a deja un CRM ne va pas payer un outil de plus juste pour la conformite. **C'est le risque principal.**
2. **Faible willingness to pay** : les courtiers independants sont souvent radins sur les outils. 9-19 EUR/mois peut sembler trop cher pour "un rappel de dates".
3. **Douleur episodique** : la conformite fait mal 1 fois par an (renouvellement ORIAS) et potentiellement lors d'un controle. Le reste du temps, le courtier n'y pense pas. Difficile de justifier un abonnement mensuel.
4. **Scraping ORIAS** : l'ORIAS autorise l'export CSV/XML par lots de 1 000 mais interdit la revente sans autorisation. Cold email a partir de donnees publiques = zone grise RGPD.

---

## Reserves et verdict nuance

Cette idee PASSE les criteres eliminatoires, mais elle est **moins forte que l'idee AccessCheck** pour les raisons suivantes :

- La douleur est moins intense et moins immediate (pas d'amende automatique, pas de loi nouvelle en 2025)
- Le marche est deja couvert par des CRM sectoriel qui incluent la conformite
- Le willingness to pay pour un outil de conformite seul est incertain
- La valeur percue en 10 secondes est moins evidente

**Cependant**, l'angle 2 (liste publique ORIAS) est extremement puissant pour l'acquisition. Si l'idee devait pivoter, la base de prospects ORIAS pourrait servir a vendre un AUTRE produit aux courtiers (lead gen, comparateur, etc.).

---

## Stack technique MVP

- **Frontend** : Next.js (App Router) + Tailwind
- **Backend** : API Routes Next.js
- **Base** : Supabase (PostgreSQL + Auth + Storage pour les documents)
- **Alertes** : Cron jobs Supabase ou Vercel Cron
- **PDF** : react-pdf pour generer attestations
- **Deploiement** : Vercel
- **Cout infra** : < 20 EUR/mois

---

## Alternative exploratoire : pivot possible

Si CourtierConform ne decolle pas, la base de prospects ORIAS peut servir a vendre :
- Un **outil de generation de devis** simplifie
- Un **comparateur de RCP** (assurance responsabilite civile pro)
- Un **outil de formation DDA en ligne** (mais la on entre dans la responsabilite metier = eliminatoire)

---

## Sources

- [ORIAS - Registre officiel](https://www.orias.fr/)
- [Reglementation ACPR et ORIAS - Fincup](https://www.fincup.fr/reglementation-acpr-et-orias-ce-que-tout-courtier-doit-savoir/)
- [Conformite ACPR courtiers - Brokin](https://www.brokin.fr/conformite-reglementaire-acpr-pour-courtiers/)
- [Lya Courtage - Conformite](https://www.lyaprotect.com/logiciels/conformite/suivi-obligations)
- [ASSUR3D - Conformite](https://assur3d.com/conformite/)
- [Wikipedia - ORIAS](https://fr.wikipedia.org/wiki/Organisme_pour_le_registre_unique_des_interm%C3%A9diaires_en_assurance,_banque_et_finance)
- [Reforme du courtage - CGRM](https://www.cgrm.com/actualites/6-points-cles-de-la-reforme-du-courtage)
- [Formation DDA obligatoire - Courtage Academy](https://www.courtage-academy.com/formation-ias-continue-eligible-dda/)
- [CCI - Fichier professionnels immobilier](https://www.cci.fr/ressources/formalites-en-ligne/fichier-des-professionnels-de-limmobilier)
