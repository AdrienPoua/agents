# Fiche Enrichie Phase 2 - #16 ConformLoc

**Conformite reglementaire loueurs meubles de tourisme (Airbnb) - Loi Le Meur**
**Score revise : 18/20** | Date : 2026-02-06 | Statut : RETENUE (meilleur score run-002)

---

## 1. CONTEXTE METIER

### C'est quoi ce metier/secteur ?

La location meublee de tourisme (type Airbnb, Booking, Abritel) est un marche massif en France : **1,31 million d'annonces actives par mois**, present dans **81% des communes francaises** (29 000 communes). Le revenu moyen annuel d'un hote est de **11 200 EUR** (118 EUR/nuit en moyenne). L'impact economique total du secteur atteint **43 milliards d'euros** (etude Deloitte 2024), soutenant 360 000 emplois.

Le loueur type est un particulier ou petit investisseur (1-5 logements) qui loue son bien via les plateformes en ligne. Il est digitalement a l'aise (utilise Airbnb/Booking au quotidien), souvent CSP+ de 35-55 ans, actif a cote de son activite de location.

### Pourquoi il y a un probleme maintenant ?

**La loi Le Meur (n 2024-1039 du 19 novembre 2024) a tout change.** Avant 2024, louer sur Airbnb etait simple : creer une annonce, toucher les revenus, peu de controles. En 18 mois, le legislateur a empile 8 dimensions d'obligations avec des sanctions allant de 5 000 a 50 000 EUR par infraction.

Le declencheur immediat : **le teleservice national d'enregistrement ouvre avec une deadline au 20 mai 2026** -- soit dans 3 mois. Tout loueur qui n'a pas son numero d'enregistrement verra son annonce **retiree des plateformes**. C'est l'equivalent d'un "arret de mort" commercial pour le loueur.

### Quel est le contexte reglementaire ?

La loi Le Meur cree un **mur d'obligations cumulees** :

| Obligation | Detail | Sanction |
|---|---|---|
| **Enregistrement national** | Teleservice national, deadline 20 mai 2026 | 10 000 EUR absence, 20 000 EUR fausse declaration |
| **Declaration mairie** | Obligatoire dans toutes les communes | 5 000 EUR si absence |
| **DPE obligatoire** | Classe G interdite depuis jan. 2025, F en 2028, E en 2034 | 5 000 EUR/logement + 100 EUR/jour astreinte |
| **Taxe de sejour** | Collecte obligatoire, reversement a la commune | 750 - 12 500 EUR si non-collecte |
| **Assurance** | RC Pro ou extension habitation, attestation pour enregistrement | Risque sinistre non couvert |
| **Quotas locaux** | 90 jours/an (res. principale), quotas par quartier possibles | 50 000 EUR si depassement |
| **Fiscalite durcie** | Micro-BIC : abattement 30% (non-classe) vs 71% avant, TVA 10% si CA > 37 500 EUR en 2026 | Redressement fiscal |
| **Affichages** | Numero enregistrement sur annonces, classement, securite | Retrait d'annonce par la plateforme |

La complexite est **demultipliee par le local** : 36 000 communes avec chacune ses regles de taxe de sejour, quotas, autorisations de changement d'usage. Un loueur a Lyon n'a pas les memes obligations qu'a Biarritz ou a la campagne.

---

## 2. LA DOULEUR (precis et chiffre)

### Qui souffre exactement ?

| Critere | Detail |
|---|---|
| **Profil** | Proprietaire particulier ou petit investisseur LMNP, 1-5 logements |
| **Age** | 35-55 ans, CSP+, actif en parallele de la location |
| **Nombre en France** | **800 000 - 1 000 000+ loueurs actifs** (1,31M annonces, certains multi-biens) |
| **Digitalisation** | 100% (utilise Airbnb/Booking/smartphone) |
| **Comportement actuel** | Gere la conformite sur papier, post-it, Google, ou "je ne savais pas" |

### De quoi souffrent-ils concretement ?

**Le loueur decouvre ses obligations au hasard -- article de presse, voisin qui menace, controle surprise.** Il n'a aucune vue consolidee de toutes ses obligations.

Scenario reel (Marie, 42 ans, 2 appartements Airbnb a Lyon) :

```
Lundi    : Lit un article "Loi Le Meur : ce qui change". Panique.
Mardi    : Google pendant 3h. 15 articles contradictoires.
Mercredi : Appelle sa mairie. "Revenez demain, le service est ferme."
Jeudi    : Decouvre qu'il lui faut un DPE. Jamais fait. Cout : 150-250 EUR/logement.
Vendredi : Decouvre que Booking ne collecte PAS la taxe de sejour automatiquement.
           Elle doit 2 ans d'arrieres a sa commune.
Samedi   : Son assurance habitation ne couvre pas la location saisonniere.

Bilan d'UNE semaine de decouvertes :
- 10 000 EUR d'amende potentielle (enregistrement)
-  5 000 EUR d'amende (DPE manquant)
- ~2 000 EUR d'arrieres de taxe de sejour
- 50 000 EUR si depassement du quota Lyon
- 0 EUR de couverture sinistre
= 67 000 EUR de risque cumule... et Marie pensait "louer c'est simple".
```

### Combien ca coute ?

| Type de cout | Montant | Frequence |
|---|---|---|
| **Amendes** (risque cumule) | 5 000 - 67 000+ EUR | Par controle |
| **Temps perdu** | 10-20h de recherche par loueur | A chaque changement reglementaire |
| **Expert-comptable LMNP** | 149-599 EUR/an (JD2M) a 500-1 500 EUR/an (cabinet) | Annuel, fiscal uniquement |
| **DPE oublie** | 150-250 EUR/logement + 5 000 EUR d'amende | Ponctuel |
| **Annonce retiree** (pas de numero) | Perte de 100% du revenu locatif | A partir de mai 2026 |
| **Stress / charge mentale** | Inquantifiable | Permanent |

**Perte maximale reelle : 100% du revenu locatif** si l'annonce est retiree faute de numero d'enregistrement. Pour un loueur moyen, c'est **11 200 EUR/an** qui disparaissent du jour au lendemain.

---

## 3. LA SOLUTION (maquette textuelle)

### Ce que fait l'application

```
+------------------------------------------------------------------+
|                        ConformLoc                                 |
|           "Etes-vous en regle ? Reponse en 5 minutes."           |
+------------------------------------------------------------------+
|                                                                   |
|  [1] QUESTIONNAIRE RAPIDE                                        |
|      Commune + Type de bien + Nb logements + Res. principale ?   |
|      --> 5 questions, 2 minutes                                   |
|                                                                   |
|  [2] SCORE DE CONFORMITE                                         |
|      +-------------------------------------------------+         |
|      | Votre score : 4/8 obligations remplies   [50%]  |         |
|      |                                                  |         |
|      | [x] Declaration mairie          CONFORME         |         |
|      | [ ] Enregistrement national      A FAIRE          |         |
|      | [ ] DPE                          MANQUANT          |         |
|      | [x] Taxe de sejour              CONFORME          |         |
|      | [ ] Assurance                   A VERIFIER         |         |
|      | [x] Quotas locaux              CONFORME           |         |
|      | [x] Fiscalite                  CONFORME            |         |
|      | [ ] Affichages                 INCOMPLET           |         |
|      +-------------------------------------------------+         |
|                                                                   |
|  [3] PLAN D'ACTIONS PERSONNALISE                                 |
|      1. Obtenir votre DPE --> Guide + prestataires locaux        |
|      2. Enregistrement national --> Lien teleservice + docs      |
|      3. Verifier assurance --> Checklist points a verifier        |
|      4. Mettre a jour annonces --> Numero a afficher             |
|                                                                   |
|  [4] RAPPELS & ALERTES                                           |
|      - "Deadline enregistrement : J-87" (email)                  |
|      - "Nouvelle regle taxe de sejour a Lyon" (alerte)           |
|      - "DPE expire dans 3 mois" (rappel)                         |
|                                                                   |
|  [5] VEILLE REGLEMENTAIRE                                        |
|      - Changements dans votre commune                            |
|      - Nouvelles obligations nationales                          |
|      - Jurisprudence / controles recents                         |
+------------------------------------------------------------------+
```

### Fonctionnalites MVP (tableau P0/P1/P2)

| Priorite | Fonctionnalite | Detail | Effort |
|---|---|---|---|
| **P0 (MVP)** | Questionnaire + Score gratuit | 5 questions, score /8, 3 obligations revelees en gratuit | 2 sem |
| **P0 (MVP)** | Base reglementaire 50 communes | Les 50 plus grandes villes + destinations touristiques top | 2 sem |
| **P0 (MVP)** | Dashboard conformite | Score, non-conformites, plan d'actions pas-a-pas | 1 sem |
| **P0 (MVP)** | Auth + Paiement | Supabase Auth, Stripe, gestion abonnement | 1 sem |
| **P0 (MVP)** | Landing page + SEO | Page de vente, 5 articles SEO, meta tags | 1 sem |
| **P1 (M2-M3)** | Rappels email | Cron emails : deadlines, expirations DPE, echeances | 1 sem |
| **P1 (M2-M3)** | Multi-biens | Dashboard consolide pour 2-5 logements | 1 sem |
| **P1 (M2-M3)** | Generateur de courriers | Declaration mairie, demande d'autorisation (pre-rempli) | 1 sem |
| **P1 (M2-M3)** | Base 200 communes | Extension aux communes touristiques (stations, littoral) | 2 sem |
| **P2 (M4-M6)** | Veille reglementaire | Alertes changements reglementaires par commune | 2 sem |
| **P2 (M4-M6)** | API taxe de sejour | Integration data.gouv.fr (donnees DELTA) pour tarifs auto | 1 sem |
| **P2 (M4-M6)** | Simulateur fiscal | Impact loi Le Meur sur les revenus du loueur | 2 sem |
| **P2 (M4-M6)** | Crowdsourcing communes | Contribution utilisateurs pour completer la base locale | 2 sem |

### Parcours utilisateur en 5 etapes

```
ETAPE 1 : DECOUVERTE (SEO / Facebook / bouche-a-oreille)
  Le loueur cherche "loi Le Meur obligations" ou "enregistrement Airbnb 2026"
  --> Arrive sur la landing page : "Etes-vous en regle ? Score gratuit en 2 min."

ETAPE 2 : SCORE GRATUIT (conversion top-funnel)
  5 questions : commune, type de bien, nb logements, residence principale, annee de debut
  --> Resultat : score /8 + 3 obligations revelees gratuitement
  --> Les 5 autres sont floutees : "Debloquez votre diagnostic complet"

ETAPE 3 : INSCRIPTION + PAIEMENT (conversion payante)
  "9 EUR/mois = le prix d'un cafe par semaine. Vs 10 000 EUR d'amende."
  --> Acces au dashboard complet, plan d'actions, guides pas-a-pas

ETAPE 4 : MISE EN CONFORMITE (valeur delivree)
  Le loueur coche chaque obligation au fur et a mesure
  Score passe de 4/8 a 7/8... puis 8/8 "Vous etes en regle !"
  --> Gamification : progression visible, sentiment d'accomplissement

ETAPE 5 : RETENTION (valeur continue)
  Rappels deadlines (enregistrement, DPE, taxe de sejour)
  Alertes changements reglementaires dans sa commune
  Renouvellement annuel : "Votre DPE expire dans 3 mois"
  --> Le loueur reste abonne tant qu'il loue
```

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment exact | Urgence |
|---|---|---|
| **Deadline enregistrement national (20 mai 2026)** | J-87. Pas de numero = annonce retiree des plateformes. | **MAXIMALE** |
| **Article de presse / video YouTube sur la loi Le Meur** | Chaque publication genere une vague de panique et de recherches Google. | **TRES HAUTE** |
| **Email de la plateforme : "Fournissez votre numero d'enregistrement"** | Airbnb/Booking envoient des rappels avant la deadline. | **TRES HAUTE** |
| **Controle municipal / amende recue** | Le jour meme. Le loueur passe en mode panique. | **MAXIMALE** |
| **Changement fiscal (declaration impots 2026)** | Decouverte du nouvel abattement 30% vs 71%. Choc. | **HAUTE** |
| **Voisin ou copropriete qui menace de signaler** | Conflit de voisinage --> urgence de se mettre en regle. | **HAUTE** |
| **Achat d'un nouveau bien a louer** | Phase de setup. Le loueur veut "bien faire des le depart". | **HAUTE** |
| **Discussion entre loueurs (groupes Facebook)** | "T'as fait ton enregistrement ?" --> effet de comparaison sociale. | **MOYENNE** |

**Le declencheur #1 est la deadline du 20 mai 2026.** C'est un "forcing function" naturel : tous les loueurs DEVRONT s'enregistrer ou perdre 100% de leur revenu locatif. ConformLoc se positionne comme **"l'outil qui vous prepare a l'enregistrement en 10 minutes"**.

Le timing actuel (fevrier 2026 = J-100) est **ideal** pour lancer : assez tot pour capter la vague de panique, assez tard pour que l'urgence soit palpable.

---

## 5. ACQUISITION CLIENT

### Comment trouver les clients ?

| Canal | Detail | Cout | Potentiel |
|---|---|---|---|
| **SEO (canal principal)** | "loi Le Meur obligations", "enregistrement Airbnb 2026", "taxe de sejour location meublee", "DPE meuble tourisme", "declaration mairie Airbnb" | 0 EUR (temps) | TRES FORT -- chaque article de presse genere des pics de recherche |
| **Groupes Facebook** | "Toi Toi Mon Toit" (17 000+ membres), groupes LMNP, groupes conciergeries, groupes proprietaires par ville | 0 EUR | FORT -- communautes actives, virales quand l'outil apporte de la valeur |
| **Partenariats comptables LMNP** | JD2M (149-599 EUR/an, 50 000+ clients estimes), experts-comptables LMNP, Decla.fr | Commission/affiliation | FORT -- prescripteurs naturels ("pour la conformite, allez sur ConformLoc") |
| **Partenariats conciergeries** | HostnFly, Welkeys, GuestReady, conciergeries locales | Commission/affiliation | MOYEN -- les conciergeries pourraient recommander l'outil a leurs clients |
| **Presse / media** | Articles sur la loi Le Meur = occasion de se positionner comme expert | 0 EUR (RP) | FORT -- sujet mediatique brulant |
| **Bases publiques** | data.gouv.fr reference les communes avec taxe de sejour. Pas de liste de loueurs en open data, mais les annonces Airbnb sont scrapables. | Temps | MOYEN -- utile pour enrichir la base, pas pour prospecter |

### Message d'accroche (1 phrase)

> **"Deadline 20 mai 2026 : votre annonce Airbnb sera retiree sans numero d'enregistrement. Verifiez votre conformite en 2 minutes -- gratuit."**

### Lead magnet

**Score de conformite gratuit en 5 questions.** Le loueur repond a 5 questions (commune, type de bien, nb logements, residence principale, annee de debut) et obtient immediatement :
- Son score /8 obligations
- 3 obligations detaillees (les plus urgentes)
- Les 5 autres floutees avec CTA "Debloquez votre diagnostic complet - 9 EUR/mois"

Ce lead magnet est **viral** : le loueur partage naturellement son score dans les groupes Facebook ("Je suis a 4/8, et vous ?"), ce qui genere du trafic organique.

---

## 6. BUSINESS MODEL

### Pricing par segment

| Plan | Prix mensuel | Prix annuel | Cible | Contenu |
|---|---|---|---|---|
| **GRATUIT** | 0 EUR | 0 EUR | Tous les loueurs | Score rapide /8, 3 obligations revelees, diagnostic teaser |
| **STARTER** | 9 EUR/mois | 90 EUR/an | 1 logement | Diagnostic complet, plan d'actions, guides pas-a-pas, rappels deadlines |
| **MULTI** | 19 EUR/mois | 190 EUR/an | 2-5 logements | Tout Starter + multi-biens, dashboard consolide, generateur de courriers pre-remplis |
| **PRO** | 39 EUR/mois | 390 EUR/an | 6+ logements ou conciergerie | Tout Multi + illimite, veille reglementaire, alertes changements locaux, support prioritaire |

### Comparaison avec l'alternative actuelle

| Alternative | Prix | Ce qu'elle couvre | Ce qu'elle ne couvre PAS |
|---|---|---|---|
| **Google + articles** | 0 EUR (10-20h de temps) | Information dispersee, contradictoire | Pas de personnalisation, pas de rappels, pas de plan d'action |
| **Expert-comptable LMNP** | 500-1 500 EUR/an | Fiscalite, declarations | PAS la conformite reglementaire (DPE, mairie, assurance, quotas) |
| **JD2M** | 149-599 EUR/an | Comptabilite LMNP | PAS la conformite non-fiscale |
| **Conciergerie** | 15-25% du CA (~1 680-2 800 EUR/an pour 11 200 EUR de revenus) | Gestion operationnelle + aide ponctuelle | Pas de suivi systematique, service humain cher |
| **ConformLoc STARTER** | **108 EUR/an** | **8 dimensions de conformite, personnalise par commune, rappels, guides** | Pas de comptabilite (complementaire a JD2M) |

### ROI calcule pour le client

```
COUT ConformLoc Starter : 108 EUR/an (9 EUR x 12)

RISQUES EVITES :
- Amende enregistrement manquant :         10 000 EUR
- Amende DPE manquant :                     5 000 EUR
- Amende taxe de sejour :                     750 EUR (minimum)
- Amende depassement quota :                50 000 EUR
- Perte revenu si annonce retiree :         11 200 EUR/an

RISQUE MOYEN EVITE (estimation conservatrice) : 5 000 EUR
ROI = (5 000 - 108) / 108 = 4 529%

EN TEMPS :
- 10-20h de recherche economisees --> valeur a 30 EUR/h = 300-600 EUR
- ROI temps seul = 278-555%

ARGUMENT MASSUE :
"108 EUR/an pour eviter 10 000 EUR d'amende.
C'est le prix d'UNE nuit de location."
```

### Projections (conservatrices)

| Mois | Clients payants | ARPU | MRR | Hypothese |
|---|---|---|---|---|
| M1-M2 | 0 | - | 0 EUR | Developpement MVP |
| M3 | 50 | 13 EUR | 650 EUR | Early adopters groupes FB + SEO debut |
| M6 | 300 | 13 EUR | 3 900 EUR | SEO qui ranke, deadline mai 2026 = vague de panique |
| M9 | 600 | 13 EUR | 7 800 EUR | Post-deadline, bouche-a-oreille, partenariats |
| M12 | 1 200 | 13 EUR | 15 600 EUR | SEO mature, partenariats JD2M/conciergeries |
| M18 | 2 000 | 15 EUR | 30 000 EUR | Elargissement base communes, simulateur fiscal |

**Objectif 2 500-3 000 EUR MRR atteint entre M5 et M6** (200-230 clients payants), grace a l'urgence de la deadline mai 2026.

---

## 7. CONCURRENCE

### Qui existe ?

| Concurrent | Type | Prix | Forces | Faiblesses |
|---|---|---|---|---|
| **JD2M** | Comptabilite LMNP en ligne | 149-599 EUR/an | 50K+ clients, confiance etablie, SEO fort | **Fiscal uniquement.** Ne couvre PAS enregistrement, DPE, taxe de sejour, assurance, quotas. |
| **Lodgify** | Channel manager (SaaS, 36.9M$ leves) | A partir de 13 EUR/mois | Gestion reservations, calendrier, site web | **Operations uniquement.** Guide conformite = contenu marketing, pas un produit. |
| **Hospitable (ex-Smartbnb)** | Automatisation Airbnb | 20-50 EUR/mois | Messages auto, prix dynamique | **Operations uniquement.** Zero conformite. |
| **Key To Check** | Etats des lieux location saisonniere | Freemium | Check-in/out, etat des lieux | **Operationnel uniquement.** Pas de conformite reglementaire. |
| **Eldorado Immobilier** | Blog + calculateur conformite Paris | Gratuit (blog) | Bon contenu SEO, simulateur 120 jours Paris | **Paris uniquement**, pas un SaaS, pas de suivi, pas de rappels. |
| **Conciergeries** (HostnFly, Welkeys, GuestReady) | Service physique | 15-25% du CA | Gestion cles, menage, accueil | **Service humain cher**, pas de suivi systematique conformite, pas scalable. |
| **Groupes Facebook LMNP** | Communaute gratuite | 0 EUR | Conseils entre pairs, retours d'experience | **Contradictoire, pas fiable, pas actionnable, pas personnalise.** |
| **Service-Public.fr / mairies** | Sites officiels | 0 EUR | Information exhaustive et officielle | **Disperse sur 36 000 mairies.** Pas de vision globale, pas de rappels. |

### Angle differenciateur (1 phrase)

> **ConformLoc est le SEUL outil qui croise les 8 obligations NATIONALES (loi Le Meur, DPE, fiscalite) avec les regles LOCALES (36 000 communes : taxe de sejour, quotas, changement d'usage) dans un diagnostic personnalise avec plan d'actions et rappels -- pour 9 EUR/mois.**

### Carte de positionnement

```
                    CONFORMITE REGLEMENTAIRE
                           ^
                           |
                ConformLoc |
                    *      |
                           |
   FISCAL <----------------+----------------> OPERATIONNEL
                           |
              JD2M *       |        * Lodgify
              Decla.fr *   |        * Hospitable
                           |        * Key To Check
                           |
                           |
                    GESTION/COMPTA

Aucun acteur dans le quadrant "Conformite reglementaire + outil digital".
ConformLoc est seul sur sa case.
```

---

## 8. TECHNIQUE

### Complexite : 2.5/5

La complexite est **moyenne-basse**. Le coeur du produit est un CRUD + questionnaire + base de donnees par commune. Pas de ML, pas de temps reel, pas d'API complexe. La vraie difficulte est **editoriale** (compiler les regles par commune), pas technique.

### Temps MVP estime : 7-8 semaines

| Phase | Duree | Contenu |
|---|---|---|
| **Sem 1-2** | Base reglementaire | Compilation des 8 dimensions d'obligations + base de 50 communes (les 50 plus grandes villes couvrent ~60% du marche) |
| **Sem 3-4** | Questionnaire + scoring | Wizard 5 questions : commune, type bien, nb logements, residence principale, annee. Moteur de scoring. |
| **Sem 5** | Dashboard + plan d'actions | Score /8, non-conformites, guide pas-a-pas par obligation, liens utiles |
| **Sem 6** | Auth + paiement + emails | Supabase Auth, Stripe Checkout, Resend pour les rappels |
| **Sem 7-8** | Landing page + SEO + launch | Page de vente, 5 articles SEO ("loi Le Meur obligations", "enregistrement Airbnb 2026", "DPE location meublee", etc.), groupes Facebook |

### Stack requise

```
Frontend :     Next.js 15 (App Router) + TypeScript + Tailwind CSS + Shadcn/ui
Backend :      Supabase (PostgreSQL + Auth + Edge Functions + Cron)
Hebergement :  Vercel (frontend) + Supabase (backend)
Emails :       Resend (rappels, alertes)
Paiement :     Stripe (abonnements mensuels/annuels)
Analytics :    Plausible
SEO :          Next.js metadata + sitemap + articles MDX

Cout mensuel :
- Vercel Pro : 20 EUR
- Supabase Pro : 25 EUR
- Resend : 0-20 EUR
- Stripe : 1.4% + 0.25 EUR/transaction
- Plausible : 9 EUR
- Domaine : ~1 EUR/mois amortis
TOTAL : ~75-80 EUR/mois (dans le budget < 100 EUR)
```

### Base de donnees par commune (coeur du produit)

```json
{
  "commune": "Lyon",
  "code_insee": "69123",
  "declaration_obligatoire": true,
  "autorisation_changement_usage": true,
  "quota_jours_residence_principale": 120,
  "compensation_obligatoire": true,
  "taxe_sejour": {
    "source": "data.gouv.fr/DELTA",
    "non_classe": 2.53,
    "1_etoile": 0.88,
    "2_etoiles": 1.10,
    "3_etoiles": 1.65,
    "4_etoiles": 2.53,
    "5_etoiles": 3.30
  },
  "dpe_minimum": "E",
  "contact_service": "https://www.lyon.fr/...",
  "derniere_maj": "2026-02-06"
}
```

**Strategie d'enrichissement :**
- Phase 1 (MVP) : 50 communes saisies manuellement (top villes + destinations touristiques)
- Phase 2 (M3) : 200 communes via scraping arretes municipaux + API data.gouv.fr (donnees DELTA pour taxe de sejour)
- Phase 3 (M6+) : Crowdsourcing utilisateurs + flux automatises data.gouv.fr

La donnee de taxe de sejour est deja disponible en **open data** sur data.economie.gouv.fr (application DELTA de la DGFiP) avec API accessible -- c'est un raccourci majeur pour la Phase 2.

### Points impressionnants pour CV

| Point | Detail |
|---|---|
| **Produit complet SaaS** | Auth, paiement, abonnements, CRUD, scoring, emails transactionnels -- le pipeline complet |
| **Moteur de regles metier** | Systeme de scoring multi-dimension avec regles conditionnelles par commune -- logique metier non triviale |
| **Integration open data gouvernemental** | API data.gouv.fr (DELTA) pour taxe de sejour, scraping arretes municipaux -- ETL reel |
| **SEO technique** | Sitemap dynamique, pages par commune, articles MDX, metadata optimisees -- SEO programmatique |
| **Stripe Billing** | Abonnements mensuels/annuels, upgrade/downgrade, webhooks -- gestion complete |
| **Architecture scalable** | Edge Functions Supabase, ISR Next.js, PostgreSQL avec RLS -- patterns production |
| **Marche reel avec traction** | Pas un projet fictif : vrais utilisateurs, vrai revenu, vrai probleme reglementaire |

---

## SYNTHESE

| Critere | Valeur |
|---|---|
| **Score** | 18/20 |
| **Marche** | 800K-1M+ loueurs actifs en France |
| **Douleur** | Amendes 5 000-50 000 EUR, annonces retirees, 8 obligations cumulees |
| **Timing** | J-100 avant deadline 20 mai 2026 = urgence maximale |
| **Concurrence** | Ocean bleu : aucun SaaS de conformite reglementaire (non-fiscale) des loueurs |
| **MVP** | 7-8 semaines, stack 100% maitrisee |
| **Objectif MRR** | 2 500-3 000 EUR atteignable en M5-M6 |
| **Budget infra** | ~75-80 EUR/mois |
| **ROI client** | 4 529% (108 EUR/an vs 5 000 EUR d'amende evitee) |

**Verdict : Projet a fort potentiel avec timing ideal. Le declencheur reglementaire du 20 mai 2026 est un accelerateur de conversion sans equivalent.**

---

*Fiche enrichie Phase 2 generee le 2026-02-06*
*Sources : Legifrance, Service-Public.fr, data.gouv.fr, JD2M, Lodgify, Institut Terram, Vie Publique, economie.gouv.fr*
