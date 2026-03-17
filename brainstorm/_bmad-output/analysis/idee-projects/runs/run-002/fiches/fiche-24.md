# Fiche Enrichie Phase 2 - #24 BorneFlow

**Gestion de chantiers IRVE pour installateurs de bornes de recharge**

**Date** : 2026-02-06
**Run** : 002
**Score revise** : 13/20 (survit avec reserves)
**Verdict filtrage** : SURVIT

---

## 1. CONTEXTE METIER

### C'est quoi ce metier ?

L'installateur IRVE (Infrastructure de Recharge pour Vehicules Electriques) est un electricien qualifie qui pose des bornes de recharge pour voitures electriques. C'est un **nouveau metier** ne de la transition energetique : des electriciens traditionnels qui ajoutent une qualification IRVE (niveaux P1, P2 ou P3 selon la puissance) a leur activite existante.

Le secteur compte **5 400 structures** en France (installateurs + maintenance), dont **5 000+ qualifiees Qualifelec**. Ce nombre a plus que double depuis 2022 (+140% en 3 ans) et continue de croitre chaque mois.

La chaine de valeur IRVE se decompose en 3 phases :
- **Pre-installation** (dimensionnement, simulation) : couvert par Homeys, Optimeese
- **Installation** (gestion du chantier, admin, coordination) : **TROU** -- c'est la que BorneFlow se positionne
- **Post-installation** (supervision des bornes, facturation usagers) : couvert par Legrand, Chargekeeper, Greenspot

### Pourquoi il y a un probleme maintenant ?

Le marche **explose** et les installateurs sont submerges :

- **154 694 points de recharge** fin 2024, +36 685 en un an (record). Le nombre de bornes a **triple depuis 2022**, la recharge rapide a ete **multipliee par 6**.
- **Objectif gouvernemental** : 7 millions de points de charge d'ici 2030 (x45 le parc actuel).
- **Obligation parkings > 20 places** depuis janvier 2025 : les entreprises, commerces et coproprietes DOIVENT equiper -- un nouveau reservoir massif de chantiers.
- **Fin du credit d'impot borne** au 31/12/2025 : rush de derniere minute en 2025, puis programme Advenir maintenu en 2026 mais par enveloppes budgetaires.
- Les installateurs passent d'un rythme artisanal (2-3 chantiers/mois) a un flux industriel (10-20+/mois) sans avoir change leurs outils (Excel, email, papier).

### Contexte reglementaire

| Reglementation | Obligation | Impact installateur |
|---------------|-----------|-------------------|
| **Qualification IRVE** (Code de l'energie) | Obligatoire pour toute installation > 3.7 kW | Doit maintenir sa qualification Qualifelec valide (renouvellement tous les 4 ans) |
| **NFC 15-100** | Norme electrique a respecter | Documentation de conformite a fournir pour chaque chantier |
| **Consuel** | Attestation de conformite electrique obligatoire | Dossier a constituer et soumettre au portail Consuel |
| **Programme Advenir** | Prime conditionnee a un dossier admin (7 etapes) | L'installateur gere le dossier pour le client -- Advenir "recommande fortement" que ce soit l'installateur |
| **Loi LOM** (parkings > 20 places) | Equipement obligatoire depuis janvier 2025 | Afflux de chantiers coproprietes et entreprises |
| **Raccordement Enedis** | Necessaire si puissance insuffisante | Portail Enedis Connect, delais variables |

---

## 2. LA DOULEUR (precis et chiffre)

### Qui souffre exactement ?

**Profil** : Gerant-electricien d'une TPE (1-5 salaries) ayant la qualification IRVE, qui gere a la fois la technique ET l'administratif.

**Nombre** : ~5 400 structures en France, dont ~3 200-3 800 "purs IRVE" (hors chevauchement avec installateurs PV). Cible initiale ideale : les 500-1 000 structures qui font 10+ chantiers IRVE/mois et sont donc les plus debordees.

### De quoi souffrent-ils concretement ?

Pour **chaque chantier IRVE**, l'installateur doit gerer 8 etapes administratives sur des portails differents :

```
1. Visite technique + devis IRVE specifique (puissance, type borne, norme NFC 15-100)
2. Verification qualification Qualifelec (bon niveau P1/P2/P3 pour le chantier)
3. Dossier prime Advenir (si eligible) : 7 sous-etapes, portail advenir.mobi
4. Commande materiel (suivi fournisseurs : bornes, cables, protections)
5. Installation + mise en service (rapport d'intervention, parametrage OCPP)
6. Attestation Consuel (portail Consuel, obligatoire > 3.7 kW)
7. Raccordement Enedis (portail Enedis Connect, si necessaire)
8. Facturation + encaissement (facture client + facture prime Advenir separee)
```

**Outils actuels** : Excel + email + portails web differents + papier. Zero workflow, zero alertes, zero checklists specifiques IRVE.

### Combien ca coute ?

| Perte | Estimation | Calcul |
|-------|-----------|--------|
| **Temps administratif** | 2-4h par chantier | 8 etapes x 15-30 min de paperasse, portails, relances |
| **Prime Advenir rejetee** | Jusqu'a 1 660 EUR perdus par dossier | Prime copropriete max 1 660 EUR HT/point. Un dossier incomplet = prime bloquee = client mecontent |
| **Qualification expiree** | Chantiers interdits = CA a zero | Si le certificat Qualifelec expire sans renouvellement, l'installateur ne peut plus travailler |
| **Paiement Advenir retarde** | Tresorerie bloquee 45+ jours | Advenir paye 45 jours apres acceptation du dossier. Dossier incomplet = report |
| **Cout d'opportunite** | 3-6 chantiers perdus/mois | Le temps passe sur l'admin n'est pas passe a installer des bornes |

**Total estime** : un installateur faisant 15 chantiers/mois perd **30-60h/mois en admin** et risque **2 000-5 000 EUR/an** en primes Advenir ratees ou retardees.

**A 39 EUR/mois, BorneFlow se rembourse des le premier dossier Advenir sauve.**

---

## 3. LA SOLUTION (maquette textuelle)

### Ce que fait l'application

```
+------------------------------------------------------------------+
|                        BORNEFLOW                                  |
|                  Dashboard Installateur IRVE                      |
+------------------------------------------------------------------+
|                                                                   |
|  [+ Nouveau Chantier]                                             |
|                                                                   |
|  MES CHANTIERS ACTIFS (12)                 ALERTES (3)            |
|  +----------------------------------+     +--------------------+  |
|  | Copro Rue Voltaire    [####--]   |     | ! Advenir #412     |  |
|  | Etape 5/8 - Consuel en attente   |     |   Doc manquant     |  |
|  |                                   |     |                    |  |
|  | Parking Auchan Melun  [###---]   |     | ! Qualifelec       |  |
|  | Etape 4/8 - Materiel commande    |     |   Expire dans 47j  |  |
|  |                                   |     |                    |  |
|  | Villa Martin          [######]   |     | ! Enedis #389      |  |
|  | Etape 8/8 - Facturation          |     |   Raccordement RDV |  |
|  +----------------------------------+     +--------------------+  |
|                                                                   |
|  PIPELINE ADVENIR                                                 |
|  +--------------------------------------------------------------+ |
|  | En cours: 8 | Soumis: 3 | Acceptes: 14 | Rejetes: 1         | |
|  | Montant en attente: 12 480 EUR                                | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  CHIFFRES DU MOIS                                                 |
|  Chantiers termines: 9 | CA genere: 47 200 EUR | Temps admin: -40%|
+------------------------------------------------------------------+
```

### Fonctionnalites MVP (P0 / P1 / P2)

| Priorite | Fonctionnalite | Description |
|----------|---------------|-------------|
| **P0** | Dashboard multi-chantiers | Vue Kanban des chantiers par etape (1-8), avec statut visuel |
| **P0** | Checklists par type de chantier | Particulier / Copropriete (droit a la prise) / Entreprise (LOM) / Parking public -- chaque contexte a ses etapes et documents specifiques |
| **P0** | Suivi dossier Advenir | Checklist des 7 sous-etapes Advenir, statut de chaque document, montant de prime en attente |
| **P0** | Alertes et notifications | Qualification Qualifelec qui expire, document manquant, delai Consuel depasse |
| **P1** | Templates devis IRVE | Devis pre-configures par type de borne et puissance, conformes NFC 15-100 |
| **P1** | Suivi Consuel + Enedis | Checklist Consuel, statut raccordement Enedis, rappels de relance |
| **P1** | Gestion documents | Upload et classement des pieces par chantier (photos, attestations, PV) |
| **P2** | Reporting mensuel | Tableau de bord : CA, nombre de chantiers, primes Advenir encaissees, temps moyen par etape |
| **P2** | Multi-utilisateurs | Comptes equipe (technicien terrain + gestionnaire admin), attributions de chantiers |
| **P2** | Export comptable | Export CSV/PDF pour le comptable |

### Parcours utilisateur en 5 etapes

```
1. INSCRIPTION (2 min)
   -> Numero Qualifelec -> on recupere automatiquement : nom, qualification,
      niveau (P1/P2/P3), date expiration
   -> "Bienvenue Jean-Marc, votre qualification P2 expire le 14/09/2027"

2. CREATION CHANTIER (3 min)
   -> Type : Particulier | Copropriete | Entreprise | Parking public
   -> Adresse, client, puissance prevue, modele de borne
   -> BorneFlow genere automatiquement la checklist adaptee (6-8 etapes)

3. AVANCEMENT AU QUOTIDIEN (30 sec/chantier)
   -> Coche les etapes au fil du chantier
   -> Upload des documents (photo attestation Consuel, PV reception...)
   -> BorneFlow alerte si un document manque ou un delai est depasse

4. DOSSIER ADVENIR (guide pas-a-pas)
   -> Checklist des 7 pieces requises
   -> Statut : "En preparation" > "Soumis" > "Accepte" > "Paye"
   -> Montant de prime calcule automatiquement selon le type d'installation

5. CLOTURE ET FACTURATION
   -> Recapitulatif du chantier, documents complets
   -> Generation facture client + facture prime Advenir
   -> Archivage automatique (utile en cas de controle Qualifelec)
```

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment precis | Urgence |
|------------|--------------|---------|
| **Premier dossier Advenir rejete** | L'installateur perd 600-1 660 EUR de prime car il manque un document. Il comprend qu'il a besoin de structure. | **TRES HAUTE** -- perte financiere immediate |
| **Passage de 3 a 10+ chantiers/mois** | Le systeme artisanal (Excel + email) ne tient plus. L'installateur perd le fil des etapes. | **HAUTE** -- surcharge quotidienne |
| **Obtention de la qualification IRVE** | L'electricien debute un nouveau pan d'activite et decouvre l'ampleur administrative (Advenir, Consuel, niveaux P1/P2/P3). | **MOYENNE** -- debut d'activite, ouvert aux outils |
| **Obligation parkings > 20 places (LOM 2025)** | Afflux soudain de demandes coproprietes et entreprises. Volume x3 en quelques mois. | **HAUTE** -- mur de volume |
| **Controle ou audit Qualifelec** | L'installateur doit prouver la conformite de ses chantiers. Retrouver les documents dans des emails/dossiers papier = panique. | **PONCTUELLE mais forte** |
| **Fin du credit d'impot borne (31/12/2025)** | Rush de derniere minute, puis report sur Advenir en 2026. L'installateur est submerge. | **SAISONNIERE** |

---

## 5. ACQUISITION CLIENT

### Comment trouver les clients ?

| Canal | Detail | Potentiel |
|-------|--------|-----------|
| **Cartographie Qualifelec** | Base publique et scrapable sur irve.qualifelec.fr : nom, adresse, qualification, niveau, email/tel. 5 000+ entreprises listees. | **EXCELLENT** -- liste de prospection gratuite et exhaustive |
| **SEO** | Mots-cles cibles : "logiciel installateur IRVE", "gestion chantier borne recharge", "suivi dossier Advenir", "checklist IRVE". Concurrence SEO tres faible (marche jeune, aucun SaaS bien positionne). | **EXCELLENT** -- ocean bleu SEO |
| **Groupes Facebook** | Groupes electriciens IRVE actifs (ex: "Electriciens IRVE France", "Installateurs bornes de recharge"). Partage de templates, retours d'experience. | **BON** -- communaute engagee |
| **Organismes de formation IRVE** | Les formateurs IRVE (Qualifelec, AFNOR, centres agrees) voient passer tous les nouveaux installateurs. Partenariat prescripteur naturel : "Pour gerer vos chantiers, utilisez BorneFlow". | **EXCELLENT** -- prescripteur en amont |
| **Grossistes en materiel IRVE** | Rexel, Sonepar, distributeurs de bornes (Hager, Schneider, Legrand). Recommandation croisee. | **MOYEN** -- plus long a mettre en place |
| **Salons professionnels** | Salon EquipHotel, Interclima, EV Charging Summit, Power Days. Stands ou flyers. | **MOYEN** -- ponctuel |

### Message d'accroche

> **"Un dossier Advenir rejete, c'est jusqu'a 1 660 EUR de prime perdue. BorneFlow vous guide etape par etape pour ne plus jamais en rater un."**

### Lead magnet

**"Checklist IRVE complete : les 8 etapes de chaque chantier borne de recharge"** -- PDF telechareable en echange de l'email. Contenu : les 8 etapes detaillees (devis, Qualifelec, Advenir, materiel, installation, Consuel, Enedis, facturation), documents requis a chaque etape, pieges courants.

Variante : **"Simulateur de prime Advenir"** -- mini-outil gratuit : type d'installation + nombre de points de charge -> montant estimatif de la prime. Capture email + intro au produit.

---

## 6. BUSINESS MODEL

### Pricing par segment

| Plan | Prix | Cible | Inclus |
|------|------|-------|--------|
| **Gratuit** | 0 EUR | Installateur debutant (< 5 chantiers/mois) | 3 chantiers actifs simultanement, checklist basique, 1 utilisateur |
| **Pro** | 39 EUR/mois | Installateur installe (5-20 chantiers/mois) | Chantiers illimites, alertes qualification, templates devis IRVE, suivi Advenir complet, stockage documents |
| **Team** | 69 EUR/mois | Structure avec equipe (2-5 techniciens) | Tout Pro + multi-utilisateurs (5 comptes), reporting mensuel, export comptable, attribution de chantiers |

### Objectif revenus

| Jalon | Clients Pro requis | % du marche | Revenu mensuel |
|-------|-------------------|-------------|----------------|
| **Seuil de rentabilite** | 3 clients | 0.06% | ~117 EUR/mois (infra couverte) |
| **Objectif 12 mois** | 65-75 clients | ~1.4% | ~2 500-3 000 EUR/mois |
| **Objectif 18 mois** | 120-150 clients | ~2.8% | ~5 000-6 000 EUR/mois |

### Comparaison avec l'alternative actuelle

| | **Excel + email + papier** | **Batappli/Obat (BTP generique)** | **BorneFlow** |
|---|---|---|---|
| Prix | 0 EUR | 30-50 EUR/mois | 39 EUR/mois |
| Checklists IRVE specifiques | Non | Non | Oui (par type de chantier) |
| Suivi Advenir | Non | Non | Oui (7 etapes guidees) |
| Alerte qualification Qualifelec | Non | Non | Oui |
| Templates devis IRVE | Non | Non | Oui (par puissance/borne) |
| Suivi Consuel + Enedis | Non | Non | Oui |
| Temps admin par chantier | 2-4h | 1-2h | 30 min |
| Risque dossier Advenir rejete | Eleve | Eleve | Faible |

### ROI calcule pour le client

```
COUT BORNEFLOW : 39 EUR/mois = 468 EUR/an

GAINS :
- Temps recupere : 1.5h/chantier x 15 chantiers/mois x 12 mois = 270h/an
  A 50 EUR/h (taux horaire electricien) = 13 500 EUR/an de temps recupere
- Primes Advenir sauvegardees : 1-2 dossiers sauves/an = 1 200-3 320 EUR/an
- Zero chantier manque pour qualification expiree

ROI = (13 500 + 1 200) / 468 = x31 minimum
     = le logiciel se rembourse en 1.4 jour de temps economise
```

---

## 7. CONCURRENCE

| Concurrent | Positionnement | Pricing connu | Faiblesse exploitable |
|-----------|---------------|---------------|----------------------|
| **IRVE Manager** | SaaS dedie installateurs IRVE (certificats, rapports, NFC 15-100) | Inconnu (page "coming soon" encore visible) | Produit apparemment en lancement ou tres jeune. Pas de traction visible, pas de reviews, pas de base clients connue. Fenetre d'opportunite. |
| **Homeys** | Simulation et dimensionnement pre-installation IRVE (donnees Linky) | Inconnu (leve 1.1M EUR en 2021) | Focus pre-installation uniquement. Ne gere pas le chantier ni l'admin Advenir/Consuel. |
| **Optimeese** | Conception d'infrastructure de recharge (dimensionnement) | Inconnu | Meme limite : pre-installation uniquement. |
| **Chargekeeper** | Supervision de bornes post-installation. Vient de lancer "Starter" (jan 2026) pour installateurs | Inconnu (licence "Starter" recente) | Post-installation. Le "Starter" vise a transformer les installateurs en operateurs, pas a gerer leurs chantiers. |
| **Praxedo** | FSM generaliste avec positionnement IRVE | A partir de ~30 EUR/user/mois | Generaliste, aucune specificite IRVE (pas d'Advenir, pas de Consuel, pas de niveaux P1/P2/P3) |
| **ChargeGuru** | Plateforme de mise en relation + outils internes pour partenaires | Reseau ferme, pas un SaaS ouvert | Reserve a leur reseau de partenaires. |
| **Batappli / Obat** | Devis-facture BTP generique | 30-50 EUR/mois | Zero specificite IRVE. |
| **Excel + email** | Le concurrent n°1 en realite | 0 EUR | Pas de workflow, pas d'alertes, erreurs frequentes, temps perdu |

### Menaces emergentes a surveiller

- **Revolt.eco** : Leve 3M EUR (nov 2025), expansion prevue CVC en 2026. L'IRVE pourrait etre le prochain domaine vu le chevauchement PV/IRVE de leur base (30-40% des installateurs font les deux). MAIS leur ADN est pre-installation (simulation, dimensionnement), pas gestion de chantier.
- **IRVE Manager** : Le seul concurrent direct identifie. A surveiller de pres : si leur "coming soon" debouche sur un vrai produit, c'est un face-a-face.

### Angle differenciateur (1 phrase)

> **BorneFlow est le seul outil qui gere le CHANTIER d'installation IRVE (du devis a l'encaissement Advenir), la ou tous les autres gerent soit le dimensionnement AVANT, soit les bornes APRES.**

---

## 8. TECHNIQUE

### Complexite : 2.5/5

Le MVP est essentiellement un **gestionnaire de workflow metier** : checklists, statuts, alertes, documents. Pas d'IA, pas d'integration API complexe au lancement, pas de temps reel.

### Temps MVP estime

| Phase | Duree | Livrable |
|-------|-------|----------|
| **Semaines 1-2** | 2 semaines | Auth, modele de donnees (chantiers, etapes, documents), schema BDD Supabase |
| **Semaines 3-4** | 2 semaines | Dashboard multi-chantiers (Kanban), creation de chantier avec checklists auto-generees |
| **Semaines 5-6** | 2 semaines | Suivi Advenir (7 sous-etapes), alertes (qualification, delais), upload documents |
| **Semaine 7** | 1 semaine | Templates devis IRVE basiques, onboarding via numero Qualifelec |
| **Semaine 8** | 1 semaine | Tests, corrections, deploiement, landing page |

**Total : 8 semaines** pour un MVP fonctionnel et deployable.

### Stack requise

| Couche | Technologie | Justification |
|--------|------------|---------------|
| **Frontend** | Next.js 14+ (App Router) + React | Stack maitrisee, SSR pour SEO, composants UI rapides |
| **Backend** | Supabase (Auth, PostgreSQL, Storage, Edge Functions) | Zero serveur a gerer, cout quasi-nul au MVP, Row Level Security pour multi-tenant |
| **Hebergement** | Vercel | Deploiement automatique, preview branches, domaine custom |
| **Email/Alertes** | Resend ou Supabase Edge Functions + cron | Alertes qualification, relances Advenir, notifications |
| **Stockage documents** | Supabase Storage | Upload photos, attestations, PV -- S3-compatible, pas cher |
| **PDF (devis)** | react-pdf ou @react-pdf/renderer | Generation de devis PDF cote client ou edge function |
| **Monitoring** | Vercel Analytics + Sentry (free tier) | Suivi usage et erreurs |

**Cout infra mensuel estime** :
- Supabase Pro : 25 EUR/mois
- Vercel Pro : 20 EUR/mois
- Resend : 0 EUR (free tier 3 000 emails/mois)
- Domaine : ~1 EUR/mois
- **Total : ~46 EUR/mois** (bien sous le budget de 100 EUR)

### Points impressionnants pour CV

| Element | Pourquoi c'est interessant |
|---------|--------------------------|
| **SaaS B2B verticale transition energetique** | Secteur porteur, montre une capacite a comprendre un metier complexe et a le modeliser en logiciel |
| **Workflow engine metier** | Checklists dynamiques generees selon le type de chantier : montre une architecture flexible et extensible |
| **Multi-tenant avec Row Level Security** | Supabase RLS = securite robuste sans middleware custom. Pattern reproductible. |
| **Onboarding par API publique** | Scraping/API Qualifelec pour pre-remplir le profil installateur : effet "wow" a l'inscription |
| **Domain-driven design IRVE** | Modelisation d'un domaine metier reglementaire (qualifications, normes, primes) en entites logicielles |
| **Pipeline de documents avec stockage S3** | Upload, classement, versioning de pieces administratives par chantier |
| **Systeme d'alertes metier** | Cron jobs + logique metier (expiration qualification, delais Advenir, documents manquants) |

---

## SYNTHESE DECIDEUR

| Critere | Valeur |
|---------|--------|
| **TAM** | 6.5M EUR/an (potentiellement 10M d'ici 2028) |
| **Cible atteignable** | 5 000+ entreprises listees sur cartographie publique Qualifelec |
| **Clients Pro pour objectif** | 65-75 (~1.4% du marche) |
| **Prix** | 39 EUR/mois (Pro) |
| **ROI client** | x31 (1.4 jour pour se rembourser) |
| **Temps MVP** | 8 semaines |
| **Cout infra** | ~46 EUR/mois |
| **Concurrent direct** | 1 seul (IRVE Manager, en "coming soon") |
| **Risque principal** | Preuve de douleur moins documentee (marche jeune), Revolt.eco pourrait s'etendre |
| **Force principale** | Trou beant dans la chaine de valeur (personne ne gere le chantier), marche en hypercroissance, triple declencheur reglementaire |

---

## SOURCES

- [Cartographie Qualifelec IRVE](https://irve.qualifelec.fr/)
- [IRVE Manager - Coming Soon](https://irve-manager.com/coming-soon-3.php)
- [Homeys - Logiciel Installateur IRVE](https://www.homeys.fr/logiciel/installateur-irve)
- [Homeys - Levee 1.1M EUR](https://www.societe.tech/levee-de-fonds-homeys-leve-1-1-millions-d-euros/)
- [Chargekeeper Starter - AVEM](https://www.avem.fr/2026/01/26/chargekeeper-lance-starter-une-licence-de-supervision-pour-les-installateurs-irve/)
- [Programme Advenir 2026](https://advenir.mobi/)
- [Advenir - Primes et montants](https://advenir.mobi/primes-et-montants-daides/)
- [Advenir - FAQ et parcours](https://advenir.mobi/foire-aux-questions-et-cas-particuliers/)
- [Bilan IRVE 2024 - AVEM](https://www.avem.fr/2025/01/20/infrastructures-de-recharge-le-bilan-de-lannee-2024/)
- [5 400 structures IRVE - Automobile Propre](https://www.automobile-propre.com/articles/bonne-nouvelle-le-secteur-des-bornes-de-recharge-genere-de-plus-en-plus-demplois-en-france/)
- [Objectif 7M bornes 2030 - Flotte Auto](https://www.flotauto.com/bornes-recharge-2030-20250519.html)
- [Bornes de recharge - Ministere Economie](https://www.economie.gouv.fr/actualites/les-bornes-de-recharge-se-deploient-sur-le-territoire)
- [Revolt.eco - Levee 3M EUR](https://www.pv-magazine.fr/2025/11/17/interview-les-dessous-de-la-levee-de-fonds-de-3-millions-deuros-de-revolt-eco/)
- [Praxedo - IRVE](https://www.praxedo.fr/notre-blog-specialise/fonctionnalites-gestion-interventions-installation-maintenance-irve/)
- [Optimeese - Logiciel IRVE](https://optimeese.com/logiciel-irve/)
- [Avere France - Ce qui change en 2026](https://www.avere-france.org/ce-qui-change-en-2026-pour-la-mobilite-electrique/)
- [Loi de finances 2026 - Electro-Mob](https://www.electro-mob.com/loi-de-finances-2026-ce-qui-change-pour-les-bornes-de-recharge)

---

*Fiche enrichie Phase 2 generee le 2026-02-06 - Run 002, Idee #24*
