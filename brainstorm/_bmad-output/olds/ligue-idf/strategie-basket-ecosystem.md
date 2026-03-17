# Strategie Infiltration Ecosysteme Basketball FFBB

**Date:** 2026-02-16
**Auteur:** Brainstorming Session avec Claude
**Objectif:** Plan d'action pour penetrer l'ecosysteme FFBB via la Ligue IDF Basketball

---

## RESUME EXECUTIF

Adrien Poua, dev full-stack Next.js/TS et dirigeant de club basket depuis 10 ans, dispose d'un contact haut place a la FFBB capable de le recommander officiellement et de le mettre en relation avec un decideur a la Ligue IDF Basketball. Il a deja reverse-enginee 2 API FFBB (FFBBserver3 + FBI Extranet) avec du code production-ready (75+ tests). L'objectif est d'utiliser la Ligue IDF comme point d'entree pour s'incruster dans l'ecosysteme FFBB (33 ligues, 107 comites, 3777 clubs, 680K+ licencies).

---

## 1. CARTOGRAPHIE COMPLETE DE L'ECOSYSTEME

### Structure organisationnelle

```
FFBB (Federation Nationale)
  ├── Equipe dev interne (Symfony/PHP + Vue.js) → HOSTILE (protegent leur place)
  ├── Budget: ~30M EUR/an
  ├── 680,000+ licencies
  │
  ├── 33 Ligues Regionales
  │   ├── Ligue IDF: 14 salaries + 60 benevoles, 73,866 licencies, budget 2.6M EUR
  │   ├── Pas d'equipe dev interne → PAS DE RESISTANCE
  │   └── Site WordPress obsolete (basketidf.com)
  │
  ├── 107 Comites Departementaux
  │   └── Structures similaires, plus petites
  │
  └── 3,777 Clubs
      └── Geres par des benevoles, peu de moyens tech
```

### Outils numeriques FFBB existants

| Outil | Fonction | Tech | Pain Points |
|-------|----------|------|-------------|
| **FBI V2** (extranet.ffbb.com) | Gestion licences, competitions, engagements | Symfony + API Platform + Vue.js | Interface complexe, silos de donnees |
| **e-Licence** (elicence.ffbb.com) | Inscription/renouvellement licences dematerialise | Web + HelloAsso paiement | Process complexe, 3 mois pour completer, bugs noms |
| **e-Marque V2** | Feuille de match electronique | PC-based (pas mobile natif) | Obligatoire depuis 2021-22, formation insuffisante |
| **FFBBserver3** | API REST JSON moderne | JWT auth, JSON | API non-documentee, utilisee par l'app mobile |
| **Formations** (formations.ffbb.com) | E-learning + catalogues | Web | Formation payante 400EUR/personne (!!) |
| **Resultats** (resultats.ffbb.com) | Affichage resultats/classements | HTML pur | Pas d'API publique pour le 5x5 |
| **App Mobile FFBB** | Recherche clubs, resultats, 3x3 | iOS/Android native | Integration FBI V2 + FFBBserver3 + Genius Sport |

### Partenaires officiels FFBB

| Partenaire | Role | Integration |
|-----------|------|-------------|
| **Kalisport** | Gestion club (recommande FFBB, Passion Club) | Connecteur FBI, sync quotidienne 15h |
| **Score'n'co** | Affichage resultats/calendriers | Acces API FBI |
| **HelloAsso** | Paiement e-licences | Integration e-Licence |
| **AssoConnect** | Gestion asso (comptabilite) | Recommande FFBB |
| **Genius Sport** | Data provider sport | Integration app mobile |
| **SKWEEK** | Streaming matchs | Diffusion |
| **Be Sport** | Outils gratuits clubs amateurs | Live scoring, convocations |

### Concurrents sur le marche federation sport

| Concurrent | Couverture | Menace |
|-----------|-----------|--------|
| **E-Licence (Exalto)** | 40+ federations, 3M+ licences/an | Enterprise, pas basket-specifique |
| **Heva** | Gestion federale multi-sport | Generaliste |
| **Kalisport** | Clubs basket (recommande FFBB) | Deja installe, sync FBI |
| **AssoConnect** | 40K+ assos | Generaliste, pas sport-specifique |
| **Oval-e (FFR)** | Rugby uniquement | Modele a observer (modernise vers V2) |

---

## 2. AVANTAGES COMPETITIFS D'ADRIEN

### Ce que personne d'autre n'a

| Avantage | Detail |
|---------|--------|
| **Code API FFBB production-ready** | 2 API reverse-engineees, 7 endpoints, 75+ tests, Zod validation |
| **10 ans dans le basket** | Dirigeant club + arbitre N3 = comprehension metier |
| **Contact FFBB** | Recommandation officielle + mise en relation decideur |
| **Info insider** | Sait que la Ligue a des problemes maintenance/couts |
| **Stack moderne** | Next.js/TS vs FBI en Symfony/PHP/Vue.js |
| **Apps en production** | Argenteuil Basketball + BC Sartrouville |
| **Profil unique** | Dev qui comprend le metier basket = zero traduction |

### Projets GitHub existants (tous abandonnes)

| Projet | Status | Comparaison avec code Adrien |
|--------|--------|------------------------------|
| alexduros/fbi-api | Archive nov 2024 | Adrien: actif, production-ready |
| defeo/ffbb-api | 5 commits, 2 stars | Adrien: 75+ tests, Zod validation |
| bb-ffbb/eMarque-eXtract | PDF extraction seulement | Adrien: API complete |
| Rinzler78/FFBBApiClient_Python | Python, doc minimale | Adrien: TypeScript, teste |

---

## 3. PAIN POINTS CONFIRMES PAR LA RECHERCHE

### Pour les salaries de Ligue (cible principale)

1. **Silos de donnees** — FBI, e-Licence, e-Marque, Excel, PDF ne communiquent pas
2. **Coordination manuelle clubs** — Relances par email, suivi Excel des 400+ clubs
3. **Process disciplinaire papier** — PV arbitres -> commission -> notification = tout manuel
4. **Rapports pour la FFBB** — Compilation manuelle de donnees multi-sources
5. **Communications non-pertinentes** — Clubs noyes d'emails, pas de ciblage intelligent
6. **Pas d'analytics** — Donnees collectees mais jamais analysees

### Pour les benevoles de club

7. **Formation payante 400EUR/personne** — Enorme frein a l'adoption des outils FFBB
8. **e-Licence complexe** — Fenetre 3 mois, problemes de noms, relances manuelles
9. **Paiement non-trace** — Licencies peuvent reactiver sans payer, clubs debites automatiquement
10. **Fragmentation outils** — FBI + e-Licence + Kalisport + Excel = cauchemar admin
11. **30% de benevoles perdus post-COVID** — Crise de retention, surcharge des restants

### Pour la FFBB (opportunite long terme)

12. **Cybersecurite** — Ransomware 2019 + 19 federations hackees jan 2025
13. **84% faible maturite digitale** — Auto-evaluation des assos sportives
14. **Stack legacy** — Symfony/PHP vs ecosysteme moderne JS/TS
15. **Strategie digitale annoncee mai 2023** — "Data Hub" + "FFBB Connect" = intention sans execution visible

---

## 4. PLAN D'ACTION STRATEGIQUE

### Phase 0 : Preparation (cette semaine)

**Objectif : Avoir un prototype demo + message pour le contact**

**Actions :**
- [ ] Creer un dashboard prototype "Ligue IDF" avec les donnees FFBBserver3
  - Competitions IDF en temps reel
  - Classements automatiques
  - Calendrier matchs
  - Stats basiques
- [ ] Preparer une demo de l'app Argenteuil Basketball
- [ ] Rediger le message pour le contact FFBB

**Le message au contact :**

> "[Prenom du contact],
>
> Je t'ecris parce que j'ai developpe des outils qui se branchent sur les systemes de la federation pour automatiser la gestion de mon club a Argenteuil. Inscriptions, renouvellements de licences, suivi des matchs et classements... tout est automatise.
>
> Je sais que la Ligue IDF a des problemes avec la maintenance de leurs outils numeriques et les couts qui vont avec. Je suis convaincu que je peux les aider a simplifier pas mal de choses.
>
> Est-ce que tu pourrais me mettre en relation avec [nom du decideur a la Ligue] pour que je lui montre ce que ca donne ? 30 minutes suffisent.
>
> Merci,
> Adrien"

### Phase 1 : Le RDV (semaine 1-2)

**Objectif : Impressionner et comprendre les vrais besoins**

**Ce que tu montres en 30 min :**

1. **Demo Argenteuil Basketball** (10 min)
   - App en production
   - Dashboard avec donnees FFBB temps reel
   - Renouvellement licences automatise (1 clic vs 15 min sur FBI)

2. **Prototype "Dashboard Ligue IDF"** (10 min)
   - Toutes les competitions IDF sur un ecran
   - Classements live, resultats, alertes automatiques
   - "Imaginez ca pour vos 14 salaries au lieu d'aller sur FBI manuellement"

3. **Questions strategiques** (10 min)
   - "Qu'est-ce qui prend le plus de temps a vos salaries ?"
   - "Comment communiquez-vous avec les 400+ clubs ?"
   - "Quels rapports devez-vous envoyer a la FFBB ?"
   - "Quel budget annuel pour vos outils numeriques ?"

### Phase 2 : La Proposition (semaine 3-4)

**Scenarios de proposition (a adapter selon le RDV) :**

#### Scenario A : "Quick Win" — Outil specifique
Resoudre UN probleme identifie pendant le RDV.
- **Exemple :** Automatisation des relances clubs pour resultats manquants
- **Prix :** 2000-3000 EUR
- **Duree :** 2-4 semaines
- **Objectif reel :** Mettre le pied dans la porte, prouver la valeur

#### Scenario B : "Dashboard Ligue" — Abonnement
Tableau de bord centralise pour les salaries de la Ligue.
- **Fonctionnalites :** Vue competitions, alertes, exports rapports FFBB, annuaire clubs
- **Prix :** 500-800 EUR/mois en abonnement
- **Pour eux :** 0.3% du budget annuel = moins cher qu'un mi-temps
- **Objectif reel :** Revenu recurrent + presence continue

#### Scenario C : "Pack Complet" — Site + Dashboard + Automatisations
Refonte site + dashboard + automatisations.
- **Prix :** 12-15K EUR + 800 EUR/mois maintenance
- **Financement :** Region IDF (30%) + potentiel ANS si mutualise
- **Objectif reel :** Contrat annuel significatif

### Phase 3 : Expansion (mois 3-12)

```
Ligue IDF (client #1, reference)
    ↓ "Regardez ce qu'on a fait pour la Ligue IDF"
    ↓
8 Comites Departementaux IDF
    ↓ Meme outil adapte, 200-400 EUR/mois chacun
    ↓
Autres Ligues Regionales (32 ligues)
    ↓ Demande financement ANS (projet mutualise)
    ↓
FFBB voit les resultats
    ↓
Embauche ou contrat cadre FFBB
```

### Phase 4 : Le Graal (12-24 mois)

**Option A : Embauche FFBB**
- Tu deviens dev interne a la FFBB
- Salaire + stabilite + acces total aux systemes
- Tu modernises de l'interieur (Next.js/TS vs leur Symfony/PHP)

**Option B : SaaS Federation Sport**
- Tu generalises ton outil pour d'autres federations
- Financement ANS (8M EUR budget, projets multi-federations prioritaires)
- Marche : 119 federations, 360K clubs, 16.5M licencies
- Marche francais du logiciel sport : 250M+ EUR

---

## 5. FINANCEMENT DISPONIBLE

| Programme | Status | Montant | Pertinence |
|-----------|--------|---------|------------|
| **Region IDF** | OUVERT en continu | Jusqu'a 200K EUR (30%) | HAUTE - site + outils digitaux |
| **ANS Transformation Numerique** | A surveiller 2026 | 37-50K EUR/projet | HAUTE - si mutualise multi-ligues |
| **FDVA 2** | Ferme jusqu'a fev 2027 | Variable | MOYENNE |

**Point cle ANS :** Depuis 2024, seuls les projets **partages entre plusieurs federations/ligues** sont eligibles. Strategie : presenter comme "plateforme modulaire Next.js pour ligues regionales sportives" — pilote avec Basket IDF, deployable sur autres ligues.

---

## 6. RISQUES ET MITIGATIONS

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|-----------|
| Ligue lente a decider (asso loi 1901) | Haute | Moyen | Contact qui pousse + quick win pas cher |
| Equipe dev FFBB hostile | Haute | Faible (si reste a la Ligue) | Ne pas cibler la FFBB directement |
| Kalisport/Score'n'co deja installes | Moyenne | Moyen | Se positionner en complement, pas concurrent |
| API FFBB change et casse le code | Moyenne | Haut | Tests de contrat + monitoring + relation officielle |
| Budget insuffisant cote Ligue | Faible | Haut | Financement Region IDF + tarif adapte asso |
| Contact perd son influence | Faible | Haut | Agir vite, ne pas trainer |

---

## 7. COMPARAISON AVEC IDEES SAAS PRECEDENTES

| Critere | SaaS Conformite (runs 1-5) | Operation Basket |
|---------|---------------------------|------------------|
| **Acces marche** | Cold outreach (point faible) | Contact interne qui recommande |
| **Connaissance domaine** | Recherche web | 10 ans dans le milieu |
| **Barriere entree** | Concurrents, outils gratuits gov | Zero concurrent, API reverse-engineee |
| **Premier client** | A trouver | Quasi-acquis via contact |
| **Scalabilite** | Marche niche, diminishing returns | 119 feds, 33 ligues, 107 comites, 3777 clubs |
| **Embauche possible** | Non | Oui (FFBB, LNB) |
| **Financement public** | Region IDF max | ANS + Region IDF |
| **Avantage unique** | Aucun specifique | Dev + 10 ans basket + API |

---

## 8. STRATEGIE DIGITALE FFBB 2023 (A ALIGNER)

En mai 2023, la FFBB a annonce :
- **FFBB Data Hub** — Gestion centralisee des donnees
- **FFBB Connect** — Plateforme de connectivite
- **App Mobile renforcee** — Integrations FBI V2 + FFBBserver3 + Genius Sport

**Implication pour Adrien :** Se positionner AVEC la strategie FFBB, pas contre. Dire "je construis des outils qui s'integrent avec votre Data Hub" est beaucoup plus puissant que "je remplace vos outils".

---

## 9. NEXT STEPS IMMEDIATS

1. **Cette semaine :** Envoyer le message au contact
2. **En parallele :** Construire le prototype dashboard Ligue IDF
3. **Au RDV :** Ecouter plus que parler, comprendre les vrais besoins
4. **Apres le RDV :** Proposition adaptee (quick win ou dashboard)
5. **En continu :** Documenter tout pour le dossier Region IDF

---

**VERDICT FINAL :** C'est la meilleure opportunite identifiee depuis 5 runs de brainstorming. Pas a cause du site web, mais parce que c'est le seul scenario ou Adrien a simultanement : un acces privilegie, un avantage technique unique, un premier client quasi-acquis, et un chemin credible vers l'embauche ou un SaaS scalable.
