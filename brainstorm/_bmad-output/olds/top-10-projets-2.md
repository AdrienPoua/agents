# Top 10 Projets SaaS - Vague 2 (Agents 6-10)

> **Date :** 6 fevrier 2026
> **Methode :** 50 idees generees par 5 agents paralleles, filtrees par les criteres stricts
> **Reference :** FormaPilot reste le #1 global (19/20 en vague 1)

---

## Scoring Final

| Rang | Projet | Source | Douleur | Declencheur | Acquisition | Concurrence | Total |
|------|--------|--------|---------|-------------|-------------|-------------|-------|
| 1 | **COPRO-ENERGIE** | Agent 9 | 5/5 | 5/5 | 5/5 | 5/5 | **20/20** |
| 2 | **ConformLCB** | Agent 6 | 5/5 | 5/5 | 5/5 | 4/5 | **19/20** |
| 3 | **DiagPilot** | Agent 7 | 5/5 | 5/5 | 5/5 | 4/5 | **19/20** |
| 4 | **MicroConform** | Agent 7 | 5/5 | 5/5 | 4/5 | 5/5 | **19/20** |
| 5 | **CourtiConform** | Agent 7 | 5/5 | 5/5 | 5/5 | 4/5 | **19/20** |
| 6 | **TranspariPaie** | Agent 8 | 5/5 | 5/5 | 4/5 | 5/5 | **19/20** |
| 7 | **SeuilRH** | Agent 8 | 5/5 | 5/5 | 4/5 | 5/5 | **19/20** |
| 8 | **BAILTRACK** | Agent 9 | 5/5 | 5/5 | 4/5 | 5/5 | **19/20** |
| 9 | **ACCESAUDIT** | Agent 9 | 4/5 | 5/5 | 5/5 | 5/5 | **19/20** |
| 10 | **DUERPilot** | Agent 10 | 5/5 | 5/5 | 5/5 | 4/5 | **19/20** |
| 10 | **PartageValeur.io** | Agent 10 | 4/5 | 5/5 | 5/5 | 5/5 | **19/20** |

---

## 1. COPRO-ENERGIE - Tableau de bord energetique pour syndics de copropriete

**Score : 20/20** | Complexite : 3/5 | MVP : 6 semaines

### Pourquoi c'est le #1 ?
Combinaison unique : obligation legale DPE collectif (derniere echeance 1er janvier 2026), donnees publiques qui permettent de trouver ET convaincre les clients, et ZERO concurrent direct.

### C'est quoi un DPE ? (Explication simple)

Le **DPE (Diagnostic de Performance Energetique)** est une "note" energetique attribuee a un batiment ou un logement, allant de **A** (tres bien isole, peu de consommation) a **G** (passoire thermique, gaspillage massif). C'est l'etiquette coloree qu'on voit sur toutes les annonces immobilieres.

**Pourquoi c'est devenu un sujet brulant :**
- L'Etat francais a decide d'interdire progressivement la location des logements les plus energivores :
  - **Classe G : interdit a la location depuis 2025**
  - **Classe F : interdit a la location en 2028**
  - Classe E : interdit en 2034
- En parallele, le **DPE collectif** (a l'echelle d'un immeuble entier, pas juste un appart) est devenu obligatoire pour TOUTES les coproprietes, echelonne de 2024 a 2026

**Le probleme concret pour un syndic de copropriete :**
Un syndic gere en moyenne 72 coproprietes. Pour chaque immeuble, il doit :
1. Savoir combien de logements sont classes F ou G (= bientot interdits a la location)
2. Presenter un bilan energetique en Assemblee Generale aux coproprietaires
3. Planifier et chiffrer les travaux de renovation (isolation, chauffage...)
4. Informer les bailleurs concernes qu'ils ne pourront plus louer

Aujourd'hui, il fait ca **a la main** en croisant des donnees sur 4-5 sites differents : 15-30h de boulot par copropriete.

### Ce que l'application ferait concretement

```
SANS COPRO-ENERGIE (aujourd'hui) :
1. Aller sur le site ADEME chercher les DPE de chaque lot       → 2h
2. Croiser avec le registre des coproprietes pour les adresses  → 1h
3. Identifier manuellement les passoires thermiques              → 2h
4. Regarder les transactions recentes pour estimer la decote     → 2h
5. Preparer un rapport pour l'AG                                 → 3h
6. Repeter pour les 71 autres coproprietes...                    → x72

AVEC COPRO-ENERGIE :
1. Se connecter → voir le dashboard de ses 72 coproprietes
2. Pour chaque immeuble : nombre de passoires, lots concernes,
   estimation de la decote, priorite de travaux
3. Generer le rapport AG en 1 clic (PDF pret a presenter)
4. Recevoir des alertes quand un nouveau DPE est publie

Temps : 15 minutes au lieu de 15 heures par copropriete
```

L'intelligence du produit : on croise automatiquement 4 bases de donnees publiques (DPE ADEME + registre coproprietes ANAH + transactions immobilieres DVF + cadastre) pour generer un "bulletin de sante energetique" par immeuble, pret a etre presente en AG.

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT MENSUEL RECURRENT**

La vente est recurrente car :
- Les DPE sont publies en continu (~35 000 nouveaux/semaine) → le dashboard se met a jour automatiquement
- Les AG ont lieu chaque annee → besoin du rapport annuellement
- Les interdictions de location avancent (G en 2025, F en 2028, E en 2034) → le suivi est permanent
- Nouveaux coproprietes entrent dans le portefeuille du syndic regulierement

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Starter            │ 99 EUR      │ Jusqu'a 20 coproprietes          │
│ Pro                │ 249 EUR     │ Jusqu'a 80 coproprietes          │
│ Agence             │ 499 EUR     │ Coproprietes illimitees          │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition (sans demarchage commercial) :**
1. **Lead magnet gratuit** : On genere automatiquement un "rapport energetique" pour les coproprietes du syndic a partir des donnees publiques. On l'envoie par email : "Voici le bilan energetique de vos 72 coproprietes. 23 ont un probleme urgent." → Le syndic decouvre un probleme qu'il ne connaissait pas.
2. **Freemium** : Acces gratuit au rapport de 3 coproprietes. Pour voir les 69 autres → abonnement.
3. **SEO** : "DPE collectif copropriete obligatoire", "passoire thermique copropriete" → les syndics cherchent activement.
4. **Partenariats** : Federations de syndics (FNAIM, UNIS) qui peuvent recommander l'outil.

**Pourquoi le syndic ne resilie pas :**
- Les donnees changent chaque semaine (nouveaux DPE) → l'outil reste utile
- L'AG revient chaque annee → besoin du rapport
- Plus le syndic utilise l'outil, plus il a d'historique → cout de switching eleve

### La Douleur
- **Qui souffre ?** ~4 400 syndics professionnels gerant 315 000 coproprietes en France
- **De quoi ?** Obligation de DPE collectif pour TOUTES les coproprietes (echelonne 2024-2026). Identifier les passoires thermiques (F/G), planifier les travaux, informer les coproprietaires. Les syndics croulent sous cette charge.
- **Cout :** 15-30h de travail par copropriete = 750-1 500 EUR/copro. A 72 copros en moyenne par syndic, c'est colossal.

### Le Declencheur
- **Quoi ?** Obligation DPE collectif pour copros de 50 lots max depuis le 1er janvier 2026 (derniere vague). Interdiction de location des logements classes G effective depuis 2025.
- **Urgence :** CRITIQUE - Amendes possibles, responsabilite du syndic engagee

### L'Acquisition Client (le point fort)
Le registre national des coproprietes ANAH contient le nom du syndic pour CHAQUE copropriete. On peut generer la liste de TOUS les syndics avec le nombre exact de copros qu'ils gerent. Message d'accroche : "Vous gerez 72 coproprietes - nous avons deja identifie combien de passoires thermiques vous devez traiter. Voici votre rapport gratuit."

### La Concurrence
- Hellio = courtier en energie, pas SaaS pour syndics
- MeilleureCopro = comparateur, pas d'outil energetique
- **AUCUN outil ne croise registre coproprietes + base DPE ADEME + DVF**

### Donnees Publiques Exploitees
| Source | URL | Usage |
|--------|-----|-------|
| API DPE ADEME | data.ademe.fr | 9M+ DPE, classes energetiques |
| Registre coproprietes ANAH | data.gouv.fr | 528 000 copros, nom du syndic |
| DVF | data.gouv.fr | Transactions immobilieres, decote |
| Cadastre | cadastre.data.gouv.fr | Parcellaire, surfaces |

### Technique
- Stack : Next.js + Supabase + Docker
- Features CV : Data pipeline ETL multi-sources, geocoding, scoring energetique automatise, generation PDF, real-time sync API ADEME

### Comparaison avec FormaPilot
| Critere | FormaPilot | COPRO-ENERGIE |
|---------|------------|---------------|
| Taille marche | 90 000 organismes | 4 400 syndics (mais x72 copros) |
| Ticket moyen | 49-299 EUR/mois | 99-499 EUR/mois |
| Complexite MVP | 4/5 (3-4 mois) | 3/5 (6 semaines) |
| Acquisition | Base publique data.gouv | Base publique + rapport gratuit |
| Concurrence | Digiforma (UX datee) | ZERO concurrent direct |

---

## 2. ConformLCB - Conformite anti-blanchiment pour agents immobiliers

**Score : 19/20** | Complexite : 3/5 | MVP : 8 semaines

### C'est quoi le LCB-FT ? (Explication simple)

**LCB-FT = Lutte Contre le Blanchiment de capitaux et le Financement du Terrorisme.** En gros, l'Etat oblige certains professionnels a verifier que leurs clients ne blanchissent pas d'argent sale a travers leurs transactions.

**Qui est concerne ?** Les banques (evidemment), mais aussi les **agents immobiliers**. Parce que l'immobilier est un des secteurs preferes pour le blanchiment : tu achetes un appart a 500K EUR avec de l'argent sale, tu le revends 3 ans plus tard → argent "propre".

**Ce que l'agent immobilier doit faire a chaque vente :**
1. Verifier l'identite du client (piece d'identite, justificatif domicile)
2. Classer le risque du client (personne politiquement exposee ? pays a risque ?)
3. Verifier que le client n'est pas sur les listes de sanctions internationales (EU, ONU, OFAC)
4. Conserver tous les documents pendant 5 ans
5. Si doute → declarer a TRACFIN (cellule anti-blanchiment de l'Etat)

**Le probleme :** 90% des agences font ca sur un coin de table (papier, Excel). La DGCCRF (les controleurs) fait des campagnes de verification et la majorite des agences sont non conformes. La sanction peut aller jusqu'au **retrait de la carte professionnelle** = fermeture de l'agence.

### Ce que l'application ferait concretement

```
SANS ConformLCB (aujourd'hui) :
- L'agent imprime la CNI du client, la met dans un dossier papier
- Il ne verifie jamais les listes de sanctions (il ne sait pas comment)
- Il n'a aucune procedure ecrite de vigilance
- Le jour du controle DGCCRF → panique, 10 jours pour tout reconstituer
- Resultat : blame, amende, voire retrait de carte

AVEC ConformLCB :
1. Nouvelle vente → l'app guide pas a pas :
   "Scannez la CNI" → "Justificatif de domicile" → "Source des fonds ?"
2. Verification automatique sur les listes de sanctions en 3 secondes
3. Classification du risque automatique (faible/moyen/eleve)
4. Dossier de conformite genere en PDF, archive 5 ans
5. Le jour du controle → "Voici mon dossier" en 10 minutes
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT MENSUEL RECURRENT**

La vente est recurrente car :
- Chaque nouvelle transaction necessite un parcours de vigilance → utilisation continue
- Les listes de sanctions sont mises a jour en permanence → monitoring continu
- La mise a jour annuelle des procedures internes est obligatoire
- Le renouvellement de carte CCI tous les 3 ans exige un dossier de conformite

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Agent solo         │ 49 EUR      │ 1 utilisateur, 20 dossiers/mois  │
│ Agence             │ 99 EUR      │ 5 utilisateurs, illimite         │
│ Reseau/Franchise   │ 199 EUR     │ 20 utilisateurs, multi-agences   │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Peur du controle** : Emailing cible (fichier CCI public) → "La DGCCRF a controle 2 000 agences l'an dernier. 80% etaient non conformes. Testez votre conformite gratuitement."
2. **Audit gratuit en 5 minutes** : Quiz en ligne "Etes-vous conforme LCB-FT ?" → score de conformite → "Vous etes a 30%, voici ce qui manque" → upsell vers l'outil
3. **Partenariats federations** : FNAIM, UNIS peuvent labelliser l'outil
4. **SEO** : "conformite anti-blanchiment agent immobilier", "controle DGCCRF agence immobiliere"

**Pourquoi l'agent ne resilie pas :**
- Chaque vente utilise l'outil → usage continu
- Les dossiers archives pendant 5 ans sont dans l'outil → impossible de partir sans perdre l'historique
- Controles DGCCRF aleatoires → besoin permanent de conformite

### La Douleur
- **Qui souffre ?** ~42 000 cartes pro transaction + ~80 000 mandataires = ~120 000 professionnels
- **De quoi ?** Obligation LCB-FT : identification risques clients, procedures de vigilance, conservation docs 5 ans, declaration TRACFIN. La majorite gere ca sur papier/Excel.
- **Cout :** Cabinet conseil = 2 000-5 000 EUR/agence. Sanction = retrait de carte pro = interdiction d'exercer.

### Le Declencheur
Controles DGCCRF intensifies depuis 2022 (majorite des agences non conformes). Renouvellement carte CCI tous les 3 ans.

### L'Acquisition Client
Fichier public des cartes pro CCI consultable en ligne. Groupes LinkedIn "Agents immobiliers" (+50 000 membres). Federations FNAIM/UNIS/SNPI.

### La Concurrence
- Kanta (~150 EUR/mois) = concu pour experts-comptables, PAS immobilier
- Modelo Legal = module basique
- **Aucun SaaS specifique LCB-FT pour l'immobilier**

### Technique
Workflow engine pour parcours de vigilance, integration API listes sanctions (EU/ONU/OFAC), generation PDF dossiers conformite, Event Sourcing pour audit trail.

---

## 3. DiagPilot - Copilote administratif du diagnostiqueur immobilier

**Score : 19/20** | Complexite : 3/5 | MVP : 8 semaines

### C'est quoi un diagnostiqueur immobilier ? (Explication simple)

C'est le professionnel qui intervient **avant chaque vente ou location d'un bien immobilier** pour realiser les diagnostics obligatoires : DPE (performance energetique), amiante, plomb, gaz, electricite, termites, etc. Sans ces diagnostics, la vente est illegale.

**En France, il y a ~11 500 diagnostiqueurs certifies**, la plupart independants ou en micro-structures (1-3 personnes). Ils passent leurs journees sur le terrain a faire des mesures, puis rentrent chez eux pour rediger les rapports.

**Le probleme :** ils ont des logiciels pour faire les rapports techniques (Liciel, etc.), mais ZERO outil pour gerer le reste de leur activite :
- Transmettre chaque DPE a l'ADEME (obligatoire, amende 1 500 EUR si oublie)
- Suivre les dates d'expiration de leurs 5-6 certifications (amiante, gaz, elec...)
- Renouveler leur assurance RCP a temps
- Planifier leurs tournees sur le terrain
- Respecter la nouvelle limite de 1 000 DPE/an depuis 2025

C'est comme si un Uber Eats avait un super GPS mais aucun outil pour gerer ses factures, ses assurances et ses papiers.

### Ce que l'application ferait concretement

```
SANS DiagPilot (aujourd'hui) :
- Le diagnostiqueur rentre de sa tournee a 19h
- Il doit transmettre manuellement chaque DPE a l'ADEME (1 par 1)
- Il a un tableau Excel pour suivre ses certifications
  → oublie de renouveler l'amiante → perd sa certif → arret d'activite
- Il ne sait pas combien de DPE il a fait cette annee (limite 1000)
- Son assurance expire dans 2 semaines, il ne l'a pas vu

AVEC DiagPilot :
1. Dashboard d'accueil :
   "847/1000 DPE cette annee" | "Certif amiante expire dans 45 jours"
   | "3 DPE non transmis a l'ADEME"
2. Transmission ADEME en 1 clic (batch) au lieu de 1 par 1
3. Alertes automatiques : "Renouvelle ta certif gaz avant le 15 mars"
4. Planning de tournees optimise (geocoding)
5. Historique complet pour les audits Cofrac
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT MENSUEL RECURRENT**

La vente est recurrente car :
- Le diagnostiqueur fait des DPE tous les jours → utilisation quotidienne de l'outil
- Ses certifications expirent a des dates differentes toute l'annee → alertes permanentes
- L'ADEME et le Cofrac peuvent controler a tout moment → besoin continu de conformite
- Son planning de tournees change chaque semaine → utilisation constante

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Independant        │ 39 EUR      │ 1 diagnostiqueur                 │
│ Cabinet (2-5)      │ 79 EUR      │ 5 diagnostiqueurs                │
│ Reseau (5+)        │ 149 EUR     │ Illimite + API Liciel            │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Annuaire public** : Tous les diagnostiqueurs sont sur l'annuaire du Ministere → emailing cible
2. **Groupes Facebook/LinkedIn** : Communaute tres active de diagnostiqueurs independants
3. **Partenariat Liciel** : Le leader technique (52% PDM) n'a pas de module admin → complementaire, pas concurrent
4. **Salon Diagactu** : LE salon du diagnostic immobilier, stand + demo

**Pourquoi le diagnostiqueur ne resilie pas :**
- Son historique de transmissions ADEME est dans l'outil
- Ses alertes de certification sont vitales (oubli = arret d'activite)
- A 39 EUR/mois, ca coute moins cher qu'UNE amende ADEME (1 500 EUR)

### La Douleur
- **Qui souffre ?** ~11 500 diagnostiqueurs certifies (70-80% independants/micro-structures)
- **De quoi ?** Gestion administrative ecrasante : transmission ADEME (amende 1 500 EUR/DPE non transmis), suivi certifications multi-domaines (amiante, gaz, elec, DPE), renouvellement assurances RCP, conformite nouvelles obligations 2025-2026 (QR Code, limite 1 000 DPE/an)
- **Cout :** 8-12h/semaine d'admin pur. Perte de certification = arret d'activite.

### Le Declencheur
Depuis 2025 : QR Code attestant certification, limite 1 000 DPE/an, controles Cofrac renforces. En 2026 : nouveau coefficient electrique, extension DPE copros 50 lots.

### L'Acquisition Client
Annuaire officiel diagnostiqueurs certifies (Ministere), base data.gouv.fr, FIDI, groupes FB/LinkedIn, salon Diagactu.

### La Concurrence
- Liciel (52% PDM, ~100-150 EUR/mois) = logiciel de production technique, PAS de gestion d'activite
- **Aucun outil ne fait le back-office admin/conformite**

### Technique
Integration API ADEME, alertes predictives renouvellement certifications, optimisation tournees geocoding, Event Sourcing audit trail.

---

## 4. MicroConform - Conformite et pilotage pour micro-creches

**Score : 19/20** | Complexite : 3/5 | MVP : 8 semaines

### C'est quoi une micro-creche ? (Explication simple)

Une **micro-creche** est une petite structure d'accueil pour enfants de 0 a 3 ans, limitee a **12 places maximum**. C'est une alternative aux creches classiques (qui sont souvent municipales et surpeuplees) ou aux assistantes maternelles.

**Pourquoi ca explose en France :**
- Les parents galèrent a trouver des places en creche municipale
- Des entrepreneurs ouvrent des micro-creches privees (investissement ~100-200K EUR)
- C'est devenu un vrai business : ~6 800 micro-creches en France, 50% des nouvelles creations

**Le probleme depuis le decret 2025-304 :**
L'Etat a serre la vis apres des scandals dans des creches (maltraitance, conditions d'accueil degradees). Le nouveau decret impose :
- Un projet d'evaluation de la qualite d'accueil (document a rediger)
- Un autodiagnostic batimentaire avant septembre 2026
- Des visites PMI (Protection Maternelle et Infantile) systematiques et renforcees
- Limite de 2 micro-creches par directeur
- Un responsable technique obligatoire

Si la micro-creche n'est pas conforme lors de la visite PMI → **fermeture administrative** = perte de l'agrement = faillite.

### Ce que l'application ferait concretement

```
SANS MicroConform (aujourd'hui) :
- La gestionnaire ne sait pas exactement ce que le decret exige
- Elle demande dans les groupes Facebook "c'est quoi l'autodiagnostic batimentaire ?"
- Elle fait son projet qualite sur Word en copiant un modele trouve en ligne
- La PMI debarque pour une visite → il manque 3 documents → mise en demeure
- Stress permanent

AVEC MicroConform :
1. Dashboard conformite : "Votre structure est conforme a 68%"
   - Projet qualite : OK
   - Autodiagnostic batimentaire : MANQUANT (deadline sept 2026)
   - Ratio personnel/enfants : OK
   - Registre de securite : EXPIRE
2. Generateur de documents : "Generer mon autodiagnostic batimentaire"
   → questionnaire guide → PDF conforme genere automatiquement
3. Preparation visite PMI : checklist interactive de tout ce qui sera verifie
4. Alertes : "La PMI a programme une visite le 15 mars. 2 documents manquent."
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT MENSUEL RECURRENT**

La vente est recurrente car :
- Les ratios personnel/enfants changent chaque semaine (conges, maladies) → suivi continu
- Les visites PMI sont aleatoires → besoin d'etre pret en permanence
- Les renouvellements d'agrement sont tous les 15 ans, mais le suivi qualite est continu
- Les documents de conformite doivent etre a jour en permanence

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ 1 micro-creche     │ 49 EUR      │ 1 etablissement, tous les docs   │
│ Multi-sites (2-5)  │ 99 EUR      │ 5 etablissements                 │
│ Reseau (5+)        │ 199 EUR     │ Illimite + reporting consolide   │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Groupes Facebook** : Les gestionnaires de micro-creches sont TRES actives sur Facebook (+10 000 membres dans les groupes). Post : "Le decret 2025-304 exige un autodiagnostic batimentaire avant sept 2026. Testez votre conformite gratuitement."
2. **CAF departementales** : Elles ont la liste de toutes les structures agreees et peuvent recommander l'outil
3. **Federations** : FFEC, FFMCLA → partenariat/labellisation
4. **SEO** : "decret micro-creche 2025", "visite PMI preparation", "conformite micro-creche"

**Pourquoi la gestionnaire ne resilie pas :**
- La PMI peut venir a tout moment → besoin permanent
- Les documents expirent et doivent etre renouveles → alertes indispensables
- A 49 EUR/mois, c'est 590 EUR/an vs perte d'agrement a 100 000 EUR

### La Douleur
- **Qui souffre ?** ~6 800 micro-creches (50% des creations d'EAJE) + ~10 000 creches classiques
- **De quoi ?** Decret 2025-304 (1er avril 2025) impose : projet evaluation qualite, limite 2 micro-creches/directeur, responsable technique obligatoire, visites PMI systematiques, autodiagnostic batimentaire avant sept. 2026.
- **Cout :** Risque de fermeture administrative = perte 50 000-100 000 EUR (agrement)

### Le Declencheur
Decret 2025-304 applicable progressivement jusqu'au 1er septembre 2026. Visites PMI renforcees.

### L'Acquisition Client
Federations (FFEC, FFMCLA), CAF departementales (listes structures agreees), groupes Facebook gestionnaires micro-creches (+10 000 membres).

### La Concurrence
- Meeko, Kidizz, iNoe = gerent le quotidien (presences, transmissions parents)
- **AUCUN ne couvre la conformite decret 2025-304** : autodiagnostic batimentaire, evaluation qualite, preparation visites PMI

### Technique
Generateur documents reglementaires, workflow audit avec checklists dynamiques, tableau de bord conformite multi-etablissements, export PDF conforme PMI.

---

## 5. CourtiConform - Conformite DDA/DORA pour courtiers assurance TPE

**Score : 19/20** | Complexite : 3/5 | MVP : 10 semaines

### C'est quoi DDA et DORA ? (Explication simple)

Imagine que tu es **courtier en assurance** : ton metier, c'est de conseiller les gens sur quelle assurance choisir (auto, habitation, pro, sante...) et de toucher une commission.

**DDA (Directive Distribution d'Assurances)** : c'est la loi europeenne qui dit "quand tu vends une assurance, tu dois PROUVER que tu as bien conseille le client". Concretement, pour chaque vente, tu dois :
- Remplir une fiche de conseil (pourquoi ce contrat et pas un autre)
- Faire signer une fiche d'information (IPID)
- Suivre 15h de formation obligatoire par an

**DORA (Digital Operational Resilience Act)** : c'est la nouvelle loi europeenne (janvier 2025) qui dit "ton informatique doit etre securisee". Meme le petit courtier solo doit :
- Cartographier ses systemes informatiques
- Avoir un plan de continuite d'activite
- Documenter ses risques cyber

**Le probleme :** Un courtier solo qui fait 200 000 EUR de CA n'a ni le temps ni les competences pour tout ca. Il se fait controler par l'ACPR (le gendarme des assurances) → sanction jusqu'a **100 000 EUR d'amende + radiation**.

### Ce que l'application ferait concretement

```
SANS CourtiConform (aujourd'hui) :
- Le courtier vend un contrat auto → ne remplit pas la fiche conseil
  ("pas le temps, je le ferai plus tard")
- Il n'a aucune idee de ce qu'est DORA
- Son "plan de continuite d'activite" = un post-it
- L'ACPR envoie un courrier de controle → panique totale
- Il paye 8 000 EUR un consultant pour rattraper le retard en urgence

AVEC CourtiConform :
1. Chaque vente : l'app genere automatiquement la fiche conseil + IPID
   "Client : Martin Dupont | Besoin : assurance auto |
    Recommandation : contrat X parce que Y" → PDF signe
2. Onglet DORA : questionnaire guide → plan de continuite genere
3. Suivi formation : "Vous avez fait 8h/15h obligatoires cette annee"
4. Controle ACPR ? → "Telecharger le dossier complet" → 1 clic
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT MENSUEL RECURRENT**

La vente est recurrente car :
- Chaque vente de contrat necessite une fiche de conformite → utilisation quotidienne
- La formation obligatoire (15h/an) doit etre tracee en continu
- Les mises a jour DORA sont annuelles
- Les controles ACPR sont aleatoires → besoin permanent

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Courtier solo      │ 49 EUR      │ 1 utilisateur                    │
│ Cabinet (2-10)     │ 99 EUR      │ 10 utilisateurs                  │
│ Reseau/Franchise   │ 249 EUR     │ Illimite + reporting consolide   │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Registre ORIAS** : Base publique telechargeable de TOUS les courtiers → emailing cible
2. **Webinaire gratuit** : "DORA pour les courtiers : ce que vous devez faire avant votre prochain controle ACPR" → capture de leads
3. **Partenariat CSCA** : La chambre syndicale du courtage peut recommander l'outil
4. **SEO** : "conformite DDA courtier", "DORA courtier assurance", "controle ACPR"

**Pourquoi le courtier ne resilie pas :**
- Chaque vente passe par l'outil → usage quotidien
- L'historique de conformite de toutes ses ventes est dans l'outil → impossible de migrer
- A 49 EUR/mois vs 100 000 EUR d'amende ACPR → le calcul est vite fait

### La Douleur
- **Qui souffre ?** ~37 000 courtiers assurance, dont 90% TPE (<11 salaries)
- **De quoi ?** Accumulation d'obligations : DDA (devoir de conseil renforce), RGPD, LCB-FT, et depuis janvier 2025 DORA (resilience operationnelle numerique). ACPR renforce ses controles (Recommandation 2024-R-03).
- **Cout :** Sanctions ACPR jusqu'a 100 000 EUR + radiation. Consultant = 5 000-15 000 EUR/an.

### Le Declencheur
DORA applicable depuis janvier 2025. Recommandation ACPR 2024-R-03 au 31/12/2025. Controles ACPR en hausse.

### L'Acquisition Client
Registre ORIAS (base publique telechargeable), CSCA, salons AMRAE, groupes LinkedIn courtage.

### La Concurrence
- Custy (~100-200 EUR/mois) = generaliste, pas DORA
- ASSUR3D = CRM + conformite en surcouche, trop complexe pour TPE
- **Aucun ne couvre DORA specifiquement**

### Technique
Generateur auto documents reglementaires (IPID, devoir de conseil), workflow DORA (cartographie SI, plan continuite), CQRS audit trail, chiffrement E2E.

---

## 6. TranspariPaie - Conformite directive transparence salariale UE 2026

**Score : 19/20** | Complexite : 3/5 | MVP : 8 semaines

### C'est quoi la transparence salariale ? (Explication simple)

L'Union Europeenne a vote une directive (2023/970) qui dit : **"les entreprises doivent etre transparentes sur les salaires"**. L'objectif principal est de reduire les ecarts de salaire entre hommes et femmes.

**Concretement, a partir du 7 juin 2026, les entreprises devront :**
1. **Afficher les fourchettes de salaire** dans TOUTES les offres d'emploi (fini le "salaire selon profil")
2. **Permettre a tout salarie** de connaitre le salaire moyen de ses collegues au meme poste, ventile par sexe
3. **Publier un rapport annuel** sur les ecarts de remuneration (pour les 250+ salaries)
4. Si un ecart de **plus de 5%** entre hommes et femmes est constate sans justification → evaluation conjointe obligatoire avec les representants du personnel

**Le probleme :** Les DRH n'ont aucun outil pour ca. Aujourd'hui, calculer les ecarts salariaux par poste et par sexe, c'est des heures de travail sur Excel avec des donnees eparpillees entre la paie, le SIRH et les fiches de poste. Et la deadline est dans 4 mois.

### Ce que l'application ferait concretement

```
SANS TranspariPaie (aujourd'hui) :
- Le DRH exporte les donnees de paie dans Excel
- Il essaye de classer les postes "equivalents" a la main
- Il calcule les moyennes H/F par categorie... et decouvre des ecarts
- Il ne sait pas comment generer le rapport conforme a la directive
- Il paye 30 000 EUR un cabinet de conseil
- Resultat : 200h de travail, rapport approximatif

AVEC TranspariPaie :
1. Import des donnees de paie (CSV ou API Silae/PayFit/Lucca)
2. Classification automatique des postes equivalents (ML clustering)
3. Dashboard : ecarts H/F par categorie, avec alertes si >5%
4. Generation du rapport reglementaire en 1 clic (conforme ESRS)
5. Module "offres d'emploi" : genere les fourchettes salariales
   basees sur les donnees internes
Temps : 2h au lieu de 200h
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT ANNUEL RECURRENT (avec pic de vente au T1)**

La vente est recurrente car :
- Le rapport est annuel (250+ salaries) ou triennal (100-249) → revient chaque annee
- Les offres d'emploi avec fourchettes salariales sont publiees en continu
- Les donnees de paie changent chaque mois → le dashboard se met a jour
- Les ecarts peuvent apparaitre a tout moment → monitoring permanent

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/an     │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ PME (50-249 sal.)  │ 2 990 EUR   │ Rapport triennal + dashboard     │
│ ETI (250-999 sal.) │ 5 990 EUR   │ Rapport annuel + fourchettes     │
│ Grand groupe       │ Sur devis   │ Multi-entites + API + SSO        │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Urgence deadline** : La directive doit etre transposee avant le 7 juin 2026. En fevrier 2026, les DRH commencent a paniquer → timing PARFAIT pour lancer
2. **Webinaires avec cabinets d'avocats** : "Directive transparence salariale : etes-vous pret ?" → co-branding avec des avocats en droit du travail
3. **LinkedIn Ads** : Ciblage DRH/RRH d'entreprises 100+ salaries
4. **Salons RH** : Solutions RH, HR Technologies

**Pourquoi le DRH ne resilie pas :**
- Le rapport revient chaque annee (ou tous les 3 ans) → besoin recurrent
- Les donnees historiques sont dans l'outil → cout de switching
- Les contentieux prud'homaux sur l'egalite salariale explosent → protection juridique

### La Douleur
- **Qui souffre ?** DRH d'entreprises 100+ salaries (~7 000 directement + ~30 000 anticipant)
- **De quoi ?** Directive europeenne 2023/970 impose d'ici le 7 juin 2026 : fourchettes salariales dans les offres, acces aux criteres de remuneration par sexe, rapport ecarts salariaux. Si ecart >5% sans justification = evaluation conjointe obligatoire.
- **Cout :** Audit externe = 15 000-50 000 EUR. Preparation manuelle = 80-200h/an. Risque contentieux prud'homal avec dommages illimites.

### Le Declencheur
**7 juin 2026** = date butoir transposition en droit francais. Premiers rapports des 2027 pour les 250+ salaries.

### L'Acquisition Client
SIRENE filtre par effectif, LinkedIn Sales Navigator (DRH/RRH), salons RH, partenariats cabinets avocats droit du travail.

### La Concurrence
- Figures.hr (~10M EUR leves) = benchmark salaires, PAS conformite directive
- PayFit (>100M$, EXCLU) = paie generaliste
- **ZERO outil dedie directive transparence 2023/970**

### Technique
Data pipeline ETL donnees salariales, ML clustering classification postes, generation rapports ESRS, API SIRH (Lucca, PayFit, Silae), audit trail.

---

## 7. SeuilRH - Copilote reglementaire au franchissement de seuils d'effectif

**Score : 19/20** | Complexite : 3/5 | MVP : 7 semaines

### C'est quoi les seuils d'effectif ? (Explication simple)

En France, chaque fois qu'une entreprise franchit un seuil de nombre de salaries, de **nouvelles obligations legales tombent automatiquement**. C'est un systeme par paliers :

```
 1 salarie  → DUERP obligatoire, visite medicale, registre du personnel
11 salaries → Elections CSE obligatoires (Comite Social et Economique)
20 salaries → Obligation DOETH (employer 6% de travailleurs handicapes)
50 salaries → EXPLOSION D'OBLIGATIONS :
              - CSE avec budget de fonctionnement
              - BDESE (base de donnees economiques)
              - Reglement interieur obligatoire
              - Participation aux benefices
              - Entretiens professionnels avec sanctions (3000 EUR/salarie)
              - Index egalite professionnelle au 1er mars
              - ... au total, +40 nouvelles obligations !
250 salaries → Rapport transparence salariale, bilan social...
```

**Le probleme :** Le dirigeant d'une PME qui passe de 48 a 51 salaries se retrouve submerge de nouvelles obligations qu'il ne connait meme pas. Il n'a pas de service juridique, son expert-comptable n'est pas forcement a jour. Et les sanctions sont lourdes : **delit d'entrave = 1 an de prison + 7 500 EUR**.

### Ce que l'application ferait concretement

```
SANS SeuilRH (aujourd'hui) :
- Le dirigeant embauche son 50e salarie → ne se passe rien
- 6 mois plus tard, un salarie demande "on a un CSE ?"
- Le dirigeant decouvre qu'il aurait du organiser des elections
- Il appelle un avocat → 8 000 EUR d'honoraires
- Il decouvre les 39 autres obligations en cascade
- Il paye 15 000 EUR pour un audit complet de conformite

AVEC SeuilRH :
1. Le dirigeant entre son effectif actuel (ou on le detecte via API DSN)
2. L'app affiche : "Vous etes a 48 salaries. Dans 2 embauches :"
   - 43 nouvelles obligations vous attendent
   - Risque financier total : 215 000 EUR si non-conforme
   - Voici votre plan d'action en 12 etapes prioritaires
3. Pour chaque obligation :
   - Explication simple (pas du jargon juridique)
   - Documents templates pre-remplis (reglement interieur, convocation CSE)
   - Deadline et rappel automatique
4. Dashboard : "Conformite seuil 50 : 67% complete"
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : HYBRIDE (one-shot + abonnement)**

Le business model est special car le franchissement de seuil est un evenement ponctuel, mais la mise en conformite prend 6-12 mois et le maintien est permanent.

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix        │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Diagnostic gratuit │ 0 EUR       │ Scan : quelles obligations vous  │
│                    │             │ attendent + risque financier      │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Plan d'action      │ 99 EUR/mois │ Checklist, documents, alertes,   │
│ (12 mois)          │             │ templates, suivi de conformite   │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Maintien           │ 49 EUR/mois │ Veille juridique, mises a jour,  │
│ (apres 12 mois)    │             │ alertes prochains seuils         │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Pourquoi c'est quand meme recurrent :**
- Le diagnostic gratuit cree un choc ("215 000 EUR de risque !") → conversion vers 99 EUR/mois
- La mise en conformite prend 12 mois → 12 x 99 = 1 188 EUR (vs 15 000 EUR avocat)
- Apres, l'entreprise continue de grandir → prochain seuil a 250 → reste abonnee
- Chaque annee, de nouvelles obligations apparaissent (index egalite, BDESE...) → maintien

**Strategie d'acquisition :**
1. **SIRENE + intelligence** : Identifier les entreprises a 45-55 salaries (proche du seuil 50). Emailing : "Vous avez 48 salaries. Savez-vous ce qui vous attend a 50 ?"
2. **Partenariat experts-comptables** : L'expert-comptable voit l'effectif de ses clients → peut recommander l'outil quand un seuil approche. Commission 20%.
3. **SEO** : "passage 50 salaries obligations", "seuil 11 salaries CSE", "obligations employeur 50 salaries"
4. **Content marketing** : Guide gratuit "Les 43 obligations quand vous passez a 50 salaries" → capture email → nurturing

**Pourquoi le dirigeant ne resilie pas :**
- Il n'a jamais fini de se mettre en conformite (c'est un processus long)
- L'entreprise grandit → prochain seuil → nouvelles obligations
- La veille juridique change chaque annee → besoin permanent

### La Douleur
- **Qui souffre ?** Dirigeants et DRH de PME en croissance (~50 000 entreprises/an franchissent un seuil)
- **De quoi ?** Le passage a 11 salaries = obligation CSE. A 20 = DOETH (6% handicap). A 50 = CSE elargi, BDESE, reglement interieur, participation, entretiens pro avec sanctions, index egalite... **Plus de 40 nouvelles obligations au total.**
- **Cout :** Delit d'entrave CSE = 1 an prison + 7 500 EUR. DOETH = contribution majoree 25%. Index egalite = 1% masse salariale. BDESE absente = 7 500 EUR.

### Le Declencheur
L'embauche du 11e, 20e, 50e ou 250e salarie (12 mois consecutifs depuis loi PACTE 2019). Marche evergreen.

### L'Acquisition Client
SIRENE filtre par tranche effectif (8-12, 17-22, 45-55), partenariats experts-comptables, LinkedIn Ads, clubs dirigeants (CJD, CPME).

### La Concurrence
**AUCUNE solution dediee.** Les cabinets d'avocats facturent 5 000-15 000 EUR pour un audit ponctuel. Les SIRH ne traitent pas ce besoin.

### Technique
Rule engine complexe (Code du travail), CQRS audit trail, generation documentaire (reglement interieur, convocations CSE), API DSN suivi effectif real-time.

---

## 8. BAILTRACK - Gestion intelligente des echeances de baux commerciaux

**Score : 19/20** | Complexite : 2/5 | MVP : 4 semaines

### C'est quoi un bail commercial 3-6-9 ? (Explication simple)

Quand un commercant loue un local (restaurant, boutique, bureau), il signe un **bail commercial**. En France, ce bail a une structure tres specifique dite **"3-6-9"** :

- Le bail dure **9 ans minimum**
- Le locataire peut partir tous les **3 ans** (a la fin de chaque periode triennale)
- Le bailleur (proprietaire) ne peut reprendre le local qu'a la fin des 9 ans
- Le loyer est **revise tous les 3 ans** en fonction d'un indice INSEE (ILC ou ILAT)

**Les pieges qui coutent TRES cher :**

```
PIEGE 1 : L'oubli de conge
Le bailleur veut recuperer son local a la fin des 9 ans.
Il DOIT envoyer un conge 6 mois AVANT la date.
S'il oublie → le bail se prolonge automatiquement (tacite prolongation).
Apres 12 ans de tacite prolongation → le loyer est "deplafonne"
= le bailleur peut augmenter de 100% d'un coup.
OU l'inverse : le locataire subit un deplafonnement qu'il n'avait pas vu venir.

PIEGE 2 : L'oubli de revision
Le loyer doit etre revise tous les 3 ans selon l'indice ILC.
Si le bailleur oublie de demander la revision → il perd l'augmentation.
Sur 3 ans, ca peut representer 10-50K EUR de manque a gagner.

PIEGE 3 : La mauvaise indemnite d'eviction
Si le bailleur donne conge sans respecter les regles → il doit payer
une indemnite d'eviction = 1 a 3 ans de loyer. Sur un bail a 50K/an = 150K EUR.
```

### Ce que l'application ferait concretement

```
SANS BAILTRACK (aujourd'hui) :
- Le proprietaire a un fichier Excel avec la date de debut du bail
- Il ne se souvient plus quel indice est dans le bail (ILC ? ILAT ?)
- L'indice change chaque trimestre, il ne sait pas le nouveau montant
- Il oublie la date de revision → perd 3 ans d'augmentation
- Il oublie de donner conge → tacite prolongation → deplafonnement

AVEC BAILTRACK :
1. Le proprietaire saisit ses baux (adresse, loyer, date debut, indice)
2. L'app calcule AUTOMATIQUEMENT :
   - Prochain loyer revise (a chaque publication INSEE)
   - Date limite de conge (alerte 7 mois avant)
   - Date de revision triennale
3. Alerte email/SMS : "L'ILC T3 2025 vient d'etre publie.
   Votre loyer au 12 rue de la Paix passe de 2 400 a 2 455 EUR/mois.
   Voici la lettre de revision pre-remplie."
4. Estimation valeur locative de marche (via DVF)
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT MENSUEL PAR BAIL**

La vente est recurrente car :
- Les indices INSEE changent chaque trimestre → l'app recalcule automatiquement
- Les echeances reviennent tous les 3 ans → alertes permanentes
- Le proprietaire acquiert de nouveaux baux au fil du temps → paie plus
- Le bail dure 9 ans minimum → relation longue

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/mois   │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ Starter (1-3 baux) │ 19 EUR      │ Alertes, calculs, lettres-types  │
│ Pro (4-10 baux)    │ 49 EUR      │ + estimation valeur locative     │
│ Investisseur (10+) │ 99 EUR      │ + reporting fiscal, API comptable│
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Outil gratuit viral** : "Calculateur de revision de loyer commercial" en ligne gratuit. Le proprietaire entre son loyer et son indice → resultat → "Voulez-vous etre alerte automatiquement pour la prochaine revision ?" → inscription
2. **SEO** : "revision loyer commercial ILC", "calcul indice ILC 2026", "bail 3-6-9 echeance" → enorme volume de recherches
3. **Partenariats** : Experts-comptables (gestion de SCI), gestionnaires de patrimoine
4. **SIRENE** : Cibler les SCI (code APE 6820A/B) par emailing

**Pourquoi le proprietaire ne resilie pas :**
- A 19 EUR/mois, une seule revision oubliee coute 100x plus cher
- L'historique de tous ses baux est dans l'outil
- Les echeances reviennent en permanence → l'outil reste utile tant qu'il possede des murs

### La Douleur
- **Qui souffre ?** ~250 000 SCI immobilieres + ~150 000 commercants en bail commercial
- **De quoi ?** Le bail 3-6-9 est un piege : si pas de conge 6 mois avant echeance = prolongation tacite. Apres 12 ans tacites = deplafonnement du loyer. Revision triennale basee sur indices INSEE (ILC/ILAT) qui changent chaque trimestre.
- **Cout :** Deplafonnement subi = +30-100% de loyer = 10-50K EUR/an. Conge mal donne = indemnite eviction = 1-3 ans de loyer.

### Le Declencheur
Approche de la date triennale. Publication nouvel indice ILC/ILAT. Decouverte d'une tacite prolongation.

### L'Acquisition Client
SIRENE : SCI (code APE 6820A/B). BODACC : ventes fonds de commerce. Message : "L'ILC vient d'etre publie : votre loyer doit etre revise de +2,3%. Si vous ne faites rien dans 30 jours, vous perdez cette revision."

### La Concurrence
- Fox Immobilier / property management = +500 EUR/mois, dimensionne pour foncieres (100+ baux)
- **Pour le proprietaire de 1-10 locaux = RIEN entre Excel et le logiciel a 500 EUR**

### Technique
Sync indices INSEE real-time, moteur calcul revision, alertes calendaires, estimation valeur locative via DVF, generation lettres-types juridiques. **Le plus simple techniquement du top 10.**

---

## 9. ACCESAUDIT - Mise en conformite accessibilite pour commerces

**Score : 19/20** | Complexite : 2/5 | MVP : 5 semaines

### C'est quoi l'accessibilite ERP ? (Explication simple)

**ERP = Etablissement Recevant du Public.** En gros, tout local ou des gens entrent : restaurant, boulangerie, coiffeur, cabinet medical, boutique de vetements...

Depuis 2015, la loi dit : **TOUS les ERP doivent etre accessibles aux personnes handicapees.** Ca veut dire :
- Rampe d'acces ou pas de marche a l'entree
- Portes assez larges pour un fauteuil roulant
- Toilettes accessibles
- Signalisation adaptee (contraste, braille...)
- Comptoir a bonne hauteur

**Le probleme :** Sur 1,2 million de petits commerces en France, **seulement 350 000 sont declares conformes.** Les 700 000+ restants sont en infraction. Pendant des annees, personne ne controlait. Mais en 2025, l'Etat est passe en **"logique contraignante"** : les amendes tombent. Jusqu'a **45 000 EUR** par commerce non conforme.

Le petit boulanger ou le coiffeur de quartier ne sait pas par ou commencer, n'a pas les moyens de payer un bureau d'etudes a 1 500 EUR, et ne connait meme pas ses obligations exactes.

### Ce que l'application ferait concretement

```
SANS ACCESAUDIT (aujourd'hui) :
- Le commercant ne sait pas qu'il est en infraction
- Un client handicape se plaint → la mairie envoie un courrier
- Le commercant panique, appelle un bureau d'etudes → 1 500 EUR pour un audit
- Le bureau dit "il faut 15 000 EUR de travaux"
- Le commercant ne sait pas qu'il existe des subventions (Fonds Territorial)
- Il ne fait rien → amende 45 000 EUR

AVEC ACCESAUDIT :
1. Auto-diagnostic en 15 minutes :
   "Votre entree a-t-elle une marche ? [Oui/Non]"
   "Vos toilettes sont-elles accessibles ? [Oui/Non]"
   → Score : "Vous etes conforme a 40%"

2. Plan d'action personnalise :
   "Priorite 1 : Installer une rampe amovible (200 EUR)"
   "Priorite 2 : Elargir la porte des toilettes (800 EUR)"
   "Cout total estime : 3 200 EUR"

3. Dossier subvention pre-rempli :
   "Fonds Territorial d'Accessibilite : jusqu'a 50% de prise en charge"
   → PDF pret a envoyer

4. Registre d'accessibilite genere (obligatoire) :
   → PDF conforme a afficher dans le commerce
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : HYBRIDE (one-shot + abonnement optionnel)**

Contrairement aux autres projets, l'accessibilite est principalement un besoin ponctuel (mise en conformite) avec un aspect recurrent optionnel (maintien du registre).

```
GRILLE DE PRIX :
┌─────────────────────────┬─────────────┬────────────────────────────┐
│ Formule                 │ Prix        │ Inclus                     │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Auto-diagnostic         │ GRATUIT     │ Score de conformite        │
│ (lead magnet)           │             │ + 3 recommandations        │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Plan d'action complet   │ 99 EUR      │ Diagnostic detaille,       │
│ (one-shot)              │ (unique)    │ plan travaux, estimation   │
│                         │             │ budget, dossier subvention │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Pack conformite         │ 149 EUR     │ Plan d'action + registre   │
│ (one-shot)              │ (unique)    │ accessibilite conforme     │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Abonnement multi-sites  │ 29 EUR/mois │ Chaines, franchises :      │
│ (recurrent)             │             │ suivi conformite parc      │
└─────────────────────────┴─────────────┴────────────────────────────┘
```

**Comment rendre ca recurrent malgre le cote one-shot :**
- **Chaines et franchises** : Un reseau de 50 boulangeries paie 29 EUR/mois pour le suivi de conformite de tout le parc → recurrent
- **Mise a jour annuelle** du registre d'accessibilite → rappel annuel + nouvelle version payante
- **Upsell vers la formation** : "Formez votre equipe a l'accueil handicap" → e-learning a 49 EUR
- **Partenariats artisans** : Commission sur les travaux recommandes (rampes, portes...)

**Strategie d'acquisition (le genie des donnees publiques) :**
1. **Croisement SIRENE x Acceslibre** : On identifie les 700 000 commerces NON presents dans la base Acceslibre → ils sont probablement non conformes. On leur envoie : "Votre boulangerie au 8 rue Victor Hugo n'apparait pas dans le registre national d'accessibilite. Amende possible : 45 000 EUR. Diagnostic gratuit en 15 min."
2. **SEO** : "accessibilite commerce obligatoire", "amende accessibilite handicape", "registre accessibilite ERP"
3. **Partenariats CCI/CMA** : Les chambres de commerce peuvent recommander l'outil a leurs adherents
4. **Reseaux de franchise** : Un seul contrat = 50-500 points de vente

**Volume > marge :** Avec 700 000 commerces non conformes et un prix de 99-149 EUR, meme 1% de conversion = 700-1 050 ventes = 70-150K EUR. C'est un modele de volume, pas de ticket eleve.

### La Douleur
- **Qui souffre ?** ~700 000 ERP de categorie 5 non conformes (petits commerces, restaurants, cabinets, salons)
- **De quoi ?** Depuis 2015, TOUS les ERP doivent etre accessibles handicapes. En 2025 = "logique contraignante" : sanctions tombent. Seulement 350 000 ERP declares conformes sur 1,2M.
- **Cout :** Bureau d'etudes = 800-2 000 EUR. Travaux = 5 000-30 000 EUR. Amende = jusqu'a 45 000 EUR.

### Le Declencheur
Passage en logique contraignante 2025. Controles accrus. Plainte client handicape.

### L'Acquisition Client (genie des donnees)
Croisement SIRENE (tous commerces physiques) x Acceslibre API (ceux references). La DIFFERENCE = commerces probablement non conformes. **On sait exactement qui contacter.**

### La Concurrence
- Acceslibre = annuaire gratuit, pas d'accompagnement
- Bureaux d'etudes = 800-2 000 EUR, prestation physique
- **ZERO SaaS self-service auto-diagnostic + plan d'action**

### Technique
Croisement SIRENE x Acceslibre, questionnaire adaptatif, generation plan d'action, estimation budgetaire, generation PDF registre accessibilite.

---

## 10. DUERPilot - Le Document Unique en 30 minutes

**Score : 19/20** | Complexite : 3/5 | MVP : 8 semaines

### C'est quoi le DUERP ? (Explication simple)

Le **DUERP (Document Unique d'Evaluation des Risques Professionnels)** est un document que **TOUTE entreprise ayant au moins 1 salarie** doit posseder. C'est obligatoire depuis 2001.

**En gros, c'est un document qui liste :**
- Tous les risques auxquels sont exposes les salaries (chute, bruit, ecran, produits chimiques, stress...)
- Pour chaque risque : la gravite, la probabilite, et les mesures de prevention
- Un plan d'action pour reduire les risques

**Exemples concrets par metier :**
- Restaurant : risque de brulure (cuisine), glissade (sol mouille), coupure (couteaux)
- Bureau : troubles musculosquelettiques (ecran), stress, risque electrique
- BTP : chute de hauteur, bruit, vibrations, amiante
- Coiffeur : produits chimiques, station debout, coupures

**Pourquoi c'est important :**
- En cas d'**accident du travail** (650 000/an en France), c'est LE premier document que l'inspection du travail demande
- Si le DUERP n'existe pas → la "faute inexcusable de l'employeur" est quasi-automatique → indemnisation illimitee du salarie
- Depuis 2021, le DUERP doit etre conserve pendant **40 ans** dans ses versions successives

**Le probleme :** 54% des entreprises n'ont PAS de DUERP a jour. Les TPE sont les pires : seulement 41% en conformite. Parce que le dirigeant ne sait pas comment le faire, n'a pas le temps, et trouve ca trop complique.

### Ce que l'application ferait concretement

```
SANS DUERPilot (aujourd'hui) :
- Le dirigeant de TPE sait vaguement qu'il "faut un truc sur les risques"
- Il cherche un modele sur Google, trouve un Word de 15 pages
- Il commence, s'ennuie, abandonne a la page 3
- Ou il paye un consultant QSE : 1 500 EUR pour un document
  que personne ne relira jamais
- L'inspection du travail passe → pas de DUERP → amende 1 500 EUR
- Un salarie se blesse → faute inexcusable → 50 000+ EUR

AVEC DUERPilot :
1. "Quel est votre secteur d'activite ?" → Restaurant (code NAF 5610A)
2. L'IA genere automatiquement la liste des risques typiques
   pour un restaurant :
   - Brulures (cuisine) → Gravite 4/5, Probabilite 3/5
   - Glissade (sol mouille) → Gravite 3/5, Probabilite 4/5
   - Coupures (couteaux) → ...
3. Le dirigeant valide, ajuste, complete si besoin
4. DUERP conforme genere en PDF, signe electroniquement
5. Chaque annee : rappel "Mise a jour annuelle"
   → l'IA montre ce qui a change (nouveau risque, nouvelle reglementation)
6. Conservation 40 ans garantie (stockage immutable)

Temps : 30 minutes au lieu de 15 heures
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : ABONNEMENT ANNUEL RECURRENT**

La vente est recurrente car :
- La mise a jour est obligatoire **chaque annee** (entreprises 11+ salaries)
- Apres chaque accident du travail, le DUERP doit etre mis a jour
- La conservation 40 ans necessite un hebergement permanent
- La reglementation change regulierement → nouvelles alertes

```
GRILLE DE PRIX :
┌────────────────────┬─────────────┬──────────────────────────────────┐
│ Formule            │ Prix/an     │ Inclus                           │
├────────────────────┼─────────────┼──────────────────────────────────┤
│ TPE (1-10 sal.)    │ 149 EUR/an  │ DUERP IA + 1 mise a jour/an     │
│ PME (11-50 sal.)   │ 299 EUR/an  │ + alertes + multi-sites          │
│ ETI (50+ sal.)     │ 599 EUR/an  │ + API, SSO, multi-etablissements │
└────────────────────┴─────────────┴──────────────────────────────────┘
```

**Strategie d'acquisition :**
1. **Volume massif** : 1,3 million d'entreprises non conformes. Meme 0,5% = 6 500 clients = 970K EUR/an
2. **Experts-comptables comme prescripteurs** : Ils voient que leurs clients TPE n'ont pas de DUERP → ils recommandent DUERPilot. Commission 20%.
3. **Google Ads** : "document unique obligatoire", "DUERP modele gratuit", "DUERP en ligne" → enorme volume de recherches
4. **Freemium** : Generation gratuite du DUERP avec filigrane "version non officielle" → pour le vrai document conforme, signe et archive → abonnement

**Pourquoi l'entreprise ne resilie pas :**
- La conservation 40 ans est dans l'outil → impossible de partir sans perdre l'historique
- La mise a jour annuelle revient chaque annee → besoin recurrent
- A 149 EUR/an vs 1 500 EUR de consultant → le choix est evident

### La Douleur
- **Qui souffre ?** ~2,4M d'etablissements employeurs. 54% n'ont PAS de DUERP a jour (rapport IGAS). TPE <10 salaries : seulement 41% en conformite.
- **De quoi ?** DUERP obligatoire depuis 2001 (decret 2001-1016). Mise a jour annuelle + apres chaque accident. Conservation 40 ans (loi 2 aout 2021).
- **Cout :** Consultant = 500-2 000 EUR/an. Amende = 1 500 EUR. Accident sans DUERP = faute inexcusable quasi-automatique.

### Le Declencheur
Controle inspection travail (170 000/an), accident travail (650 000/an), embauche 1er salarie.

### L'Acquisition Client
SIRENE (toutes entreprises employeuses), experts-comptables prescripteurs, CCI, CMA. **Marche le plus large : 1,3M d'entreprises non conformes.**

### La Concurrence
- DigiRisk (open-source, complexe), DUERP.com (~200 EUR/an, UX datee), Previsoft (~150 EUR/mois, grands comptes), OiRA (gratuit INRS, basique)
- **Aucun ne fait IA sectorisee + conservation 40 ans + alertes auto**

### Technique
Generation IA par code NAF/metier, Event Sourcing historique 40 ans, moteur regles par secteur, export PDF signe, alertes intelligentes.

---

## 10 bis. PartageValeur.io - Conformite obligation partage de la valeur PME

**Score : 19/20** | Complexite : 3/5 | MVP : 8 semaines

### C'est quoi le "partage de la valeur" ? (Explication simple)

Depuis le 1er janvier 2025, une nouvelle loi oblige certaines PME a **partager leurs benefices avec les salaries**. Avant, ca ne concernait que les entreprises de 50+ salaries (participation obligatoire). Maintenant, meme les **PME de 11 a 49 salaries** sont concernees.

**La regle :**
- Si ton entreprise a entre 11 et 49 salaries
- ET qu'elle a fait un benefice net >= 1% du chiffre d'affaires
- Pendant **3 annees consecutives**
- → Tu DOIS mettre en place un dispositif de partage de la valeur

**Les dispositifs possibles :**
1. **PPV (Prime de Partage de la Valeur)** : une prime versee aux salaries (jusqu'a 3 000 EUR exoneree)
2. **Interessement** : une prime liee aux resultats de l'entreprise
3. **Participation** : redistribution d'une partie du benefice
4. **Abondement PEE** : l'entreprise abonde un plan d'epargne entreprise

**Le probleme :** La majorite des PME de 11-49 salaries n'ont JAMAIS eu de dispositif d'epargne salariale. Le dirigeant ne sait meme pas :
- S'il est concerne (il faut verifier 3 exercices)
- Quel dispositif choisir (PPV, interessement, participation ?)
- Comment le formaliser juridiquement (accord d'entreprise, decision unilaterale ?)
- Combien ca va lui couter

Et son expert-comptable decouvre la reforme en meme temps que lui.

### Ce que l'application ferait concretement

```
SANS PartageValeur.io (aujourd'hui) :
- Le dirigeant lit un article "nouvelle obligation partage de la valeur"
- Il ne sait pas s'il est concerne → appelle son expert-comptable
- L'expert-comptable ne sait pas non plus → oriente vers un avocat
- L'avocat facture 3 000 EUR pour un accord d'interessement
- Le dirigeant ne sait toujours pas combien ca va couter
- Il ne fait rien → risque de redressement URSSAF

AVEC PartageValeur.io :
1. Diagnostic en 30 secondes :
   "SIRET ?" → pre-remplissage automatique via API Pappers
   "Benefice N-1 : 85 000 EUR, CA : 2,1M EUR → ratio 4%"
   "Benefice N-2 : 62 000 EUR, CA : 1,9M EUR → ratio 3,2%"
   "Benefice N-3 : 41 000 EUR, CA : 1,8M EUR → ratio 2,3%"
   → "RESULTAT : Vous ETES concerne. 3 exercices consecutifs au-dessus de 1%."

2. Simulateur de cout :
   "PPV a 500 EUR/salarie = 15 000 EUR (exonere de charges)"
   "Interessement a 3% du resultat = 2 550 EUR (deductible)"
   → comparatif des options avec cout net pour l'entreprise

3. Generation du document juridique :
   "Decision unilaterale de PPV" → PDF conforme, pret a signer

4. Declaration : guide etape par etape pour la DSN
```

### Business Model : Comment vendre et gagner de l'argent

**Type de revenu : HYBRIDE (diagnostic one-shot + abonnement annuel)**

```
GRILLE DE PRIX :
┌─────────────────────────┬─────────────┬────────────────────────────┐
│ Formule                 │ Prix        │ Inclus                     │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Diagnostic gratuit      │ 0 EUR       │ "Etes-vous concerne ?"     │
│ (lead magnet)           │             │ Oui/Non + simulation cout  │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Pack conformite         │ 299 EUR     │ Document juridique genere  │
│ (one-shot)              │ (unique)    │ + guide DSN + simulateur   │
├─────────────────────────┼─────────────┼────────────────────────────┤
│ Abonnement annuel       │ 199 EUR/an  │ Verification automatique   │
│ (recurrent)             │             │ chaque annee + mises a jour│
│                         │             │ + nouveau document si      │
│                         │             │ changement de dispositif   │
└─────────────────────────┴─────────────┴────────────────────────────┘
```

**Pourquoi c'est quand meme recurrent :**
- La verification "suis-je concerne ?" doit etre refaite CHAQUE ANNEE (les benefices changent)
- Si l'entreprise passe sous le seuil → elle peut arreter le dispositif → besoin du diagnostic
- Si les regles changent (experimentation 5 ans, possible perennisation) → mise a jour
- L'expert-comptable peut revendre l'outil a tous ses clients → canal de distribution B2B2B

**Strategie d'acquisition (la killer feature : les donnees sont publiques) :**
1. **Pappers + intelligence** : Les comptes annuels des entreprises sont PUBLICS. On peut filtrer : effectif 11-49 + benefice/CA > 1% sur 3 ans. On obtient la liste exacte des 60-80K entreprises concernees. Emailing : "Votre PME [nom] a realise un benefice de [X] EUR sur les 3 derniers exercices. Vous etes soumis a l'obligation de partage de la valeur. Verifiez en 30 secondes."
2. **Partenariat experts-comptables** : L'expert-comptable a acces aux comptes de tous ses clients → il peut utiliser l'outil pour diagnostiquer son portefeuille. Commission 30%.
3. **SEO** : "partage de la valeur obligatoire 2025", "PPV obligation PME", "prime partage de la valeur conditions"
4. **Content marketing** : Guide gratuit "Partage de la valeur : 5 minutes pour savoir si vous etes concerne"

**Pourquoi l'entreprise ne resilie pas :**
- La verification revient chaque annee
- Si elle change de dispositif (PPV → interessement), elle a besoin d'un nouveau document
- A 199 EUR/an vs 3 000 EUR d'avocat → evident

### La Douleur
- **Qui souffre ?** 60 000-80 000 PME de 11-49 salaries avec benefice net >= 1% CA pendant 3 ans consecutifs
- **De quoi ?** Nouvelle obligation depuis le 1er janvier 2025 : mettre en place PPV, interessement, participation ou abondement PEE. La plupart n'ont JAMAIS eu de dispositif d'epargne salariale. Ni le dirigeant ni son expert-comptable ne sait si l'entreprise est concernee.
- **Cout :** Avocat = 1 000-5 000 EUR. Risque redressement URSSAF.

### Le Declencheur
Publication des comptes annuels confirmant le 3e exercice au-dessus du seuil (T1-T2 chaque annee).

### L'Acquisition Client
**Pappers** : filtrer effectif 11-49, benefice/CA > 1% sur 3 ans. Les donnees financieres sont publiques = on sait EXACTEMENT qui est concerne. Message : "Votre PME est-elle soumise a l'obligation de partage de la valeur 2025 ? Verifiez en 30 secondes."

### La Concurrence
- Epsens, CIC Epargne Salariale = gerent les flux, PAS le diagnostic/conformite
- **ZERO SaaS "diagnostic + conformite partage de la valeur"**

### Technique
Moteur regles metier (verification 3 exercices), simulateur financier, generation documents juridiques, integration API Pappers, tunnel conversion guide.

---

## Matrice de Decision

### Par temps de developpement MVP

| Duree | Projets |
|-------|---------|
| **4 semaines** | BAILTRACK |
| **5-6 semaines** | ACCESAUDIT, COPRO-ENERGIE |
| **7-8 semaines** | SeuilRH, ConformLCB, DiagPilot, MicroConform, TranspariPaie, DUERPilot, PartageValeur.io |
| **10 semaines** | CourtiConform |

### Par taille de marche (nombre de cibles)

| Taille | Projets |
|--------|---------|
| **Massif (100K+)** | DUERPilot (2,4M), ACCESAUDIT (700K), ConformLCB (120K) |
| **Grand (10K-100K)** | PartageValeur.io (60-80K), SeuilRH (50K/an), TranspariPaie (37K) |
| **Moyen (1K-10K)** | MicroConform (6 800), COPRO-ENERGIE (4 400), DiagPilot (11 500) |
| **Niche (<1K)** | CourtiConform (37K mais TPE), BAILTRACK (250K SCI) |

### Par modele de revenu

| Modele | Projets | Avantage |
|--------|---------|----------|
| **Abonnement mensuel pur** | COPRO-ENERGIE, ConformLCB, DiagPilot, MicroConform, CourtiConform, BAILTRACK | Revenu previsible, retention forte |
| **Abonnement annuel** | TranspariPaie, DUERPilot | Engagement long, cash flow en avance |
| **Hybride (one-shot + abo)** | SeuilRH, PartageValeur.io, ACCESAUDIT | Conversion facile + revenu recurrent |

### Par simplicite technique (MVP le plus rapide)

| Rang | Projet | Complexite | MVP |
|------|--------|------------|-----|
| 1 | **BAILTRACK** | 2/5 | 4 sem |
| 2 | **ACCESAUDIT** | 2/5 | 5 sem |
| 3 | **COPRO-ENERGIE** | 3/5 | 6 sem |
| 4 | **SeuilRH** | 3/5 | 7 sem |
| 5 | **ConformLCB** | 3/5 | 8 sem |

### Par "zero concurrent" (ocean le plus bleu)

| Projet | Concurrent le plus proche | Ecart |
|--------|--------------------------|-------|
| **SeuilRH** | Aucun (cabinets d'avocats a 5-15K EUR) | Enorme |
| **TranspariPaie** | Aucun (directive trop recente) | Enorme |
| **PartageValeur.io** | Aucun (obligation trop recente) | Enorme |
| **COPRO-ENERGIE** | Aucun croisement donnees publiques | Enorme |
| **ACCESAUDIT** | Aucun SaaS self-service | Grand |
| **BAILTRACK** | Excel ou logiciels a 500+ EUR/mois | Grand |

---

## Comparaison avec FormaPilot (Top 1 Vague 1)

| Critere | FormaPilot | Meilleur candidat vague 2 |
|---------|------------|---------------------------|
| **Score** | 19/20 | COPRO-ENERGIE : 20/20 |
| **Marche captif** | 90 000 organismes (Qualiopi obligatoire) | DUERPilot : 2,4M d'employeurs |
| **Zero concurrent** | Digiforma existe (UX datee) | SeuilRH : strictement zero |
| **MVP le plus rapide** | 3-4 mois | BAILTRACK : 4 semaines |
| **Donnees publiques** | Base organismes data.gouv | COPRO-ENERGIE : 4 bases croisees |
| **Urgence deadline** | Audit Qualiopi (cyclique) | TranspariPaie : 7 juin 2026 |

### Verdict

**FormaPilot reste un excellent choix** grace a la combinaison marche captif + base publique + retention 3 ans. Mais plusieurs projets de la vague 2 meritent attention :

1. **COPRO-ENERGIE** si tu veux le projet le plus "data-driven" avec zero concurrent et acquisition client automatisee
2. **SeuilRH** si tu veux le marche evergreen avec zero concurrent et forte viralite (experts-comptables comme prescripteurs)
3. **BAILTRACK** si tu veux le MVP le plus rapide (4 semaines) avec un modele simple et un marche large
4. **DUERPilot** si tu veux le marche le plus large (2,4M d'entreprises, 1,3M non conformes)

---

*Document genere le 6 fevrier 2026 - Analyse basee sur 50 idees issues de 5 agents (vague 2)*
