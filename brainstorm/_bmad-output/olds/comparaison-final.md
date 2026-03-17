# Comparaison Finale - Criteres d'Election du Meilleur Projet

> **Objectif :** Elire LE projet a lancer en premier
> **Methode :** 6 axes, 18 criteres ponderes, score /100
> **Profil du decideur :** Dev solo, pas commercial, veut du revenu + CV impressionnant
> **Date :** 6 fevrier 2026

---

## Philosophie des Criteres

Les criteres habituels (douleur, declencheur, concurrence) ont deja servi a filtrer 150 idees vers ~15 finalistes. Tous les projets restants scorent 19-20/20 sur ces criteres.

**Ce qui va departager maintenant, c'est autre chose :**
- Est-ce que JE peux le faire seul ?
- Est-ce que les clients viendront A MOI ?
- Est-ce que je gagnerai de l'argent VITE ?
- Est-ce que c'est DEFENSABLE dans le temps ?

---

## Axe A : Vitesse d'Execution (poids : 25/100)

> *"Le meilleur projet est celui qui genere son premier euro le plus vite."*

### A1. Temps jusqu'au premier euro (0-5)

Ce n'est PAS juste le temps MVP. C'est : build + trouver le premier client + le convertir + encaisser.

```
5 = Premier euro en < 6 semaines (MVP simple + client immediat)
4 = Premier euro en 6-10 semaines
3 = Premier euro en 10-16 semaines
2 = Premier euro en 4-6 mois
1 = Premier euro en 6+ mois
0 = Impossible de monetiser rapidement
```

**Pourquoi c'est le critere #1 :** Tu es sans emploi. Chaque semaine compte. Un projet qui rapporte 500 EUR/mois dans 6 semaines vaut mieux qu'un projet qui rapporte 5 000 EUR/mois dans 8 mois.

### A2. Complexite du MVP minimum viable (0-5)

Le VRAI minimum. Pas le produit reve, mais la version qui resout le probleme #1 suffisamment pour que quelqu'un paye.

```
5 = Wizard + generation PDF (features basiques, pas de backend complexe)
4 = CRUD + generation documents + alertes email
3 = Workflow engine + multi-tenant + integrations API simples
2 = Comptabilite specifique, vote electronique, ou ML en production
1 = Crawler distribue, AST analysis, ou infra complexe
0 = Necessite R&D fondamentale
```

**Pourquoi :** Un MVP trop ambitieux = jamais lance. Le but est de vendre, pas de construire une cathedrale.

### A3. Fit avec ta stack (0-5)

Next.js + TypeScript + Supabase + Docker. Est-ce que ta stack actuelle suffit ou faut-il apprendre de nouvelles technos ?

```
5 = 100% dans ta stack, zero apprentissage
4 = 90% ta stack + 1 librairie nouvelle (ex: PDF generation)
3 = Stack OK mais besoin d'integrations API externes
2 = Besoin d'une techno nouvelle significative (ML, crawler, OCR)
1 = Stack inadaptee, apprentissage lourd requis
0 = Necessite une stack completement differente
```

---

## Axe B : Acquisition Sans Vente (poids : 25/100)

> *"Je ne veux pas decrocher un telephone. Les clients doivent venir a moi."*

### B1. Acquisition automatisable par donnees publiques (0-5)

Peut-on identifier les prospects ET les contacter automatiquement a partir de donnees ouvertes ?

```
5 = Base publique avec contact direct + message personnalise generable automatiquement
    (ex: "Vous gerez 72 coproprietes, 23 sont des passoires thermiques")
4 = Base publique avec identification precise mais contact indirect
    (ex: base data.gouv des organismes de formation)
3 = Prospects identifiables via annuaires/registres mais sans donnee de contact directe
2 = Prospects trouvables via groupes/forums mais pas de base structuree
1 = Prospects diffus, acquisition uniquement par SEO/content
0 = Necessitede networking ou demarchage actif
```

**Pourquoi c'est critique :** C'est la difference entre envoyer 1 000 emails personnalises en un apres-midi et passer 6 mois a "se faire connaitre". Pour quelqu'un qui deteste vendre, c'est LE critere decisif.

### B2. Force du SEO naturel (0-5)

Les prospects cherchent-ils activement une solution sur Google ? Volume et intent d'achat.

```
5 = Mots-cles a fort volume + intent d'achat clair
    (ex: "logiciel qualiopi", "calcul revision loyer ILC")
4 = Mots-cles specifiques avec bon volume
    (ex: "conformite LCB-FT agent immobilier")
3 = Mots-cles informationnels qui menent a la solution
    (ex: "obligations 50 salaries")
2 = Mots-cles de niche, faible volume mais zero competition
1 = Pas de recherche active, besoin d'eduquer le marche
0 = Le prospect ne sait pas qu'il a ce probleme
```

### B3. Potentiel de lead magnet / freemium viral (0-5)

Peut-on offrir quelque chose de gratuit qui demontre immediatement la valeur et cree un "aha moment" ?

```
5 = Lead magnet automatisable et personnalise qui revele un probleme inconnu
    (ex: "Voici le bilan energetique de vos coproprietes - 23 ont un probleme")
4 = Diagnostic gratuit en 2 min qui donne un score de conformite
    (ex: "Vous etes conforme a 30%, voici ce qui manque")
3 = Outil gratuit utile mais generique
    (ex: calculateur de revision de loyer)
2 = Version freemium classique (fonctionnalites limitees)
1 = Essai gratuit temporaire (14 jours)
0 = Pas de freemium possible, vente directe requise
```

**Pourquoi :** Le meilleur "commercial" pour quelqu'un qui ne veut pas vendre, c'est un produit qui vend tout seul. Un lead magnet puissant remplace le discours commercial.

### B4. Effet reseau / prescripteurs naturels (0-5)

Y a-t-il des intermediaires qui recommanderont naturellement l'outil a leurs clients ?

```
5 = Prescripteur naturel avec incentive fort + acces au portefeuille clients
    (ex: expert-comptable qui voit les seuils d'effectif de ses clients)
4 = Federation/association sectorielle qui peut labelliser l'outil
3 = Bouche-a-oreille dans une communaute soudee (groupes FB actifs)
2 = Partenariats possibles mais pas naturels
1 = Acquisition 100% directe, pas de prescripteur
0 = Marche atomise, pas de communaute
```

---

## Axe C : Monetisation et Revenus (poids : 20/100)

> *"Est-ce que ca va payer mes factures ?"*

### C1. Willingness to pay demontree (0-5)

Est-ce que la cible a l'habitude de payer pour des outils ? Est-ce que le budget existe ?

```
5 = Budget existant + alternative actuelle plus chere (consultant a 5 000 EUR)
4 = Budget existant mais plus petit (outil a 100-200 EUR/mois deja utilise)
3 = Pas de budget dedie mais ROI evident et calculable
2 = La cible a l'habitude du gratuit mais la douleur justifie un investissement
1 = Cible price-sensitive, marche au plus bas prix
0 = La cible ne payera pas (habitude du gratuit, pas de budget)
```

### C2. Recurrence naturelle du revenu (0-5)

Le client revient-il naturellement ou faut-il le re-convaincre chaque annee ?

```
5 = Usage quotidien/hebdomadaire obligatoire + donnees accumulees = impossible de partir
    (ex: chaque vente immobiliere passe par ConformLCB)
4 = Besoin annuel garanti + historique dans l'outil
    (ex: mise a jour DUERP chaque annee)
3 = Besoin recurrent mais pas a haute frequence
    (ex: revision loyer tous les 3 ans)
2 = Besoin principalement one-shot avec upsell recurrent possible
1 = Besoin purement one-shot (un evenement, un diagnostic)
0 = Aucune recurrence
```

### C3. Objectif MRR a 12 mois (0-5)

Estimation realiste du revenu mensuel recurrent atteignable en 12 mois en solo.

```
5 = > 5 000 EUR MRR realiste (100 clients x 50 EUR ou 20 clients x 250 EUR)
4 = 3 000 - 5 000 EUR MRR realiste
3 = 1 500 - 3 000 EUR MRR realiste
2 = 500 - 1 500 EUR MRR realiste
1 = < 500 EUR MRR realiste
0 = Pas de modele recurrent viable
```

---

## Axe D : Defensabilite et Risques (poids : 15/100)

> *"Est-ce qu'un concurrent peut me copier en 2 mois ?"*

### D1. Moat technique ou data (0-5)

Qu'est-ce qui empeche un concurrent de copier le produit ?

```
5 = Accumulation de donnees uniques au fil du temps + integrations profondes
    (ex: croisement de 4 bases publiques avec enrichissement continu)
4 = Expertise metier codifiee difficile a reproduire
    (ex: regle engine 32 indicateurs Qualiopi avec jurisprudence)
3 = Avantage du premier entrant + cout de switching eleve (donnees client)
2 = Copiable mais necessite un effort significatif (3-6 mois)
1 = Facilement copiable en quelques semaines
0 = Zero barriere a l'entree
```

### D2. Risque reglementaire (0-5)

La reglementation qui cree le besoin peut-elle changer et tuer le produit ?

```
5 = Obligation permanente et ancienne (DUERP depuis 2001, bail 3-6-9 = droit commercial)
4 = Obligation recente mais durable (directive UE transposee, certification Qualiopi)
3 = Obligation en montee en puissance (accessibilite, transparence salariale)
2 = Obligation experimentale ou recente (partage de la valeur = experimentation 5 ans)
1 = Reglementation instable ou politique
0 = Pas d'obligation legale, marche purement volontaire
```

### D3. Risque de dependance externe (0-5)

Le produit depend-il d'APIs, partenaires ou services tiers qui pourraient disparaitre ou changer ?

```
5 = Zero dependance critique (donnees publiques stables, pas d'API tierce)
4 = Dependance a des APIs publiques stables (INSEE, ADEME, data.gouv)
3 = Dependance a des APIs tierces mais avec alternatives
2 = Dependance forte a un partenaire ou une API specifique
1 = Dependance critique a un service tiers payant
0 = Si l'API disparait, le produit meurt
```

---

## Axe E : Impact CV / Portfolio (poids : 10/100)

> *"Est-ce que ca impressionne en entretien ?"*

### E1. Patterns architecturaux avances (0-5)

```
5 = Event Sourcing + CQRS + Multi-tenant + Real-time + ML
4 = 3 patterns avances parmi : Event Sourcing, CQRS, multi-tenant, real-time, distributed
3 = Multi-tenant + workflow engine + integrations API
2 = CRUD avance + generation documents + alertes
1 = CRUD classique
0 = Landing page
```

### E2. Sujet parlant en entretien (0-5)

Le projet raconte-t-il une histoire interessante en entretien technique ?

```
5 = Probleme technique fascinant + impact business mesurable + data pipeline
    ("J'ai croise 4 bases de donnees publiques pour identifier automatiquement les passoires thermiques")
4 = Architecture non-triviale + domain specifique interessant
3 = Bon projet technique avec des choix d'architecture justifiables
2 = Projet correct mais pas de "wow factor"
1 = CRUD standard, rien de memorable
```

---

## Axe F : Scalabilite Operationnelle Solo (poids : 5/100)

> *"Est-ce que je peux gerer 100 clients sans mourir ?"*

### F1. Charge de support client estimee (0-5)

```
5 = Self-service total, le client n'a jamais besoin de support
    (ex: wizard auto-guide, documents generes automatiquement)
4 = Support minimal : FAQ + chatbot suffit pour 90% des questions
3 = Support modere : quelques emails par semaine par client
2 = Support significatif : onboarding necessaire, questions metier frequentes
1 = Support lourd : formation requise, accompagnement continu
0 = Service = consulting deguise, pas scalable
```

---

## Grille de Scoring

### Ponderation

| Axe | Poids | Justification |
|-----|-------|---------------|
| **A. Vitesse d'execution** | 25% | Sans emploi = chaque semaine compte |
| **B. Acquisition sans vente** | 25% | Aversion au demarchage = critere eliminatoire |
| **C. Monetisation** | 20% | Le projet doit payer les factures |
| **D. Defensabilite** | 15% | Construire quelque chose de durable |
| **E. Impact CV** | 10% | Objectif CDI en parallele |
| **F. Scalabilite solo** | 5% | Contrainte operationnelle |

### Formule de calcul

```
Score final = (A1+A2+A3)/15 x 25
            + (B1+B2+B3+B4)/20 x 25
            + (C1+C2+C3)/15 x 20
            + (D1+D2+D3)/15 x 15
            + (E1+E2)/10 x 10
            + F1/5 x 5
```

Score maximum = 100 points.

### Grille vierge

| Critere | Poids dans l'axe | COPRO-ENERGIE | FormaPilot | BAILTRACK | SeuilRH | DUERPilot | ConformLCB | DiagPilot | MicroConform | CourtiConform | TranspariPaie | EventSafe | ACCESAUDIT | PartageValeur |
|---------|-------------------|---------------|------------|-----------|---------|-----------|------------|-----------|--------------|---------------|---------------|-----------|------------|---------------|
| **A. VITESSE (25%)** | | | | | | | | | | | | | | |
| A1. Temps 1er euro | /5 | | | | | | | | | | | | | |
| A2. Complexite MVP | /5 | | | | | | | | | | | | | |
| A3. Fit stack | /5 | | | | | | | | | | | | | |
| **B. ACQUISITION (25%)** | | | | | | | | | | | | | | |
| B1. Donnees publiques | /5 | | | | | | | | | | | | | |
| B2. Force SEO | /5 | | | | | | | | | | | | | |
| B3. Lead magnet | /5 | | | | | | | | | | | | | |
| B4. Prescripteurs | /5 | | | | | | | | | | | | | |
| **C. MONETISATION (20%)** | | | | | | | | | | | | | | |
| C1. Willingness to pay | /5 | | | | | | | | | | | | | |
| C2. Recurrence | /5 | | | | | | | | | | | | | |
| C3. MRR 12 mois | /5 | | | | | | | | | | | | | |
| **D. DEFENSABILITE (15%)** | | | | | | | | | | | | | | |
| D1. Moat | /5 | | | | | | | | | | | | | |
| D2. Risque reglementaire | /5 | | | | | | | | | | | | | |
| D3. Dependance externe | /5 | | | | | | | | | | | | | |
| **E. IMPACT CV (10%)** | | | | | | | | | | | | | | |
| E1. Patterns avances | /5 | | | | | | | | | | | | | |
| E2. Sujet parlant | /5 | | | | | | | | | | | | | |
| **F. SCALABILITE (5%)** | | | | | | | | | | | | | | |
| F1. Support client | /5 | | | | | | | | | | | | | |
| **SCORE FINAL** | **/100** | | | | | | | | | | | | | |

---

## Comment utiliser cette grille

1. **Scorer chaque projet** sur chaque critere (0-5) en utilisant les baremes ci-dessus
2. **Calculer le score pondere** par axe puis le total /100
3. **Identifier le top 3** par score brut
4. **Appliquer le "gut check"** : est-ce que le #1 te donne envie de te lever le matin pour bosser dessus ?
5. **Decision finale** : le projet avec le meilleur score ET qui te motive = le gagnant

---

*Document cree le 6 fevrier 2026*
