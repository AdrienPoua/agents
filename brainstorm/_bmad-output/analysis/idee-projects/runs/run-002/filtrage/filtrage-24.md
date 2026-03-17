# Filtrage #24 - BorneFlow
## Gestion chantiers IRVE pour installateurs bornes de recharge

**Date de verification** : 2026-02-06
**Score initial** : 16/20

---

## 1. CONCURRENCE (Score: 3/5) - MODERE

### Concurrents identifies

1. **IRVE Manager** - SaaS dedie aux installateurs IRVE. Gestion d'installations, automatisation des rapports, conformite NFC 15-100. Certificats, rapports, notifications, QR codes. Page "coming soon" encore visible = produit possiblement en cours de lancement ou tres jeune.
   - Source : https://irve-manager.com/coming-soon-3.php

2. **Homeys** - Startup Paris, **1.1M EUR leves** (2021). Outil de collecte donnees energetiques et simulation pour installateurs IRVE. Focus sur le dimensionnement pre-installation (donnees Linky, scenarios bornes).
   - Source : https://www.homeys.fr/logiciel/installateur-irve
   - Source levee : https://www.societe.tech/levee-de-fonds-homeys-leve-1-1-millions-d-euros/

3. **Praxedo** - FSM generaliste avec article dedie "Installation et maintenance IRVE : 3 fonctionnalites cles". Pas specialise IRVE mais positionne.
   - Source : https://www.praxedo.fr/notre-blog-specialise/fonctionnalites-gestion-interventions-installation-maintenance-irve/

4. **Optimeese** - Logiciel IRVE pour conception d'infrastructure de recharge. Focus sur la conception/dimensionnement, pas la gestion de chantier.
   - Source : https://optimeese.com/logiciel-irve/

5. **ChargeGuru** - Plateforme de mise en relation + outils de gestion de projet pour partenaires installateurs. Pas un SaaS ouvert, c'est un reseau ferme.
   - Source : https://chargeguru.com/fr/devenir-partenaire/

### Analyse concurrentielle

**Observation cle** : la plupart des solutions IRVE existantes sont soit :
- **Pre-installation** (dimensionnement, simulation) : Homeys, Optimeese
- **Post-installation** (supervision, gestion de parc de bornes) : Legrand, Greenspot, solutions constructeurs
- **Generalistes** (FSM) : Praxedo

Il y a un **GAP** identifiable sur la **gestion du chantier d'installation lui-meme** : suivi des demarches Advenir, dossier Consuel, coordination Enedis, planning d'intervention, PV de reception. IRVE Manager semble cibler ce gap mais parait encore en phase de lancement.

### Levees de fonds
- Homeys : 1.1M EUR (2021) - modeste, et pas sur le meme positionnement exact.
- Aucun concurrent a 100M$+ sur la gestion de chantier IRVE specifiquement.
- Moins de 5 concurrents SaaS sur le meme besoin EXACT (gestion chantier IRVE). Pas d'elimination immediate.

---

## 2. PREUVE DE DOULEUR (Score: 3/5) - MODEREE

### Preuves trouvees

**Douleur administrative Advenir** :
- Advenir eux-memes decrivent le processus comme "un vrai parcours du combattant" avec pre-validations, documents multiples, delais variables.
- 7 etapes administratives pour chaque dossier de prime.
- Les procedures "relativement techniques peuvent etre lourdes et sujettes a erreurs".
- Advenir "recommande fortement" de laisser l'installateur gerer le dossier = charge administrative sur l'installateur.
- Source : https://advenir.mobi/foire-aux-questions-et-cas-particuliers/

**Obligations reglementaires multiples** :
- Qualification IRVE obligatoire pour puissance > 3.7 kW.
- Dossier Consuel requis.
- Conformite NFC 15-100.
- Depuis janvier 2025 : obligation pour parkings > 20 places = afflux de nouveaux chantiers.
- Source : https://www.economie.gouv.fr/actualites/les-bornes-de-recharge-se-deploient-sur-le-territoire

### Limites des preuves
- Moins de temoignages directs d'installateurs sur forums que pour le PV (le marche IRVE est plus jeune).
- Pas de discussions type "je galere avec mes dossiers IRVE" facilement trouvables.
- La douleur est **deductible** (memes types de demarches que le PV, memes organismes) mais moins **documentee** que pour le solaire.

---

## 3. TAILLE DE MARCHE (Score: 3/5) - CORRECT ET EN CROISSANCE

### Chiffres verifies

- **5 400 structures** dans la filiere IRVE (installateurs + maintenance) selon l'ANFA/Observatoire des metiers de l'automobile.
   - Source : https://www.automobile-propre.com/articles/bonne-nouvelle-le-secteur-des-bornes-de-recharge-genere-de-plus-en-plus-demplois-en-france/
- **~24 000 emplois** dont ~19 500 installateurs/techniciens de maintenance.
- **5 000+ entreprises qualifiees IRVE** chez Qualifelec seul.
   - Source : https://irve.qualifelec.fr/

### Croissance verifiee
- **154 694 points de recharge** fin 2024 (+36 685 nouveaux points en 2024, record > 2023).
   - Source : https://www.avem.fr/2025/01/20/infrastructures-de-recharge-le-bilan-de-lannee-2024/
- Nombre de bornes **triple depuis 2022**, recharge rapide **x6**.
- Objectif gouvernemental : **7 millions de points** d'ici 2030.
- Obligation parkings > 20 places depuis janvier 2025 = nouveau reservoir de chantiers.
- Le "+140% en 3 ans" mentionne dans l'idee initiale est **CONFIRME** par les donnees reelles.

### Calcul TAM
5 400 structures x 100 EUR/mois (prix accessible) x 12 = **6.5M EUR/an**. Avec croissance du marche, possiblement 8-10K structures d'ici 2028 = **~10M EUR TAM**. Viable pour un solodev visant 5-10% de penetration.

### ATTENTION : Chevauchement avec SolAdmin (#23)
Beaucoup d'installateurs PV font aussi de l'IRVE (double qualification QualiPV + IRVE). Si les deux marchés se chevauchent a ~30-40%, le marche "pur IRVE" serait de ~3 200-3 800 structures. Toujours au-dessus du seuil de 500.

---

## 4. DECLENCHEUR VERIFIABLE (Score: 4/5) - FORT

### Cadre reglementaire
1. **Qualification IRVE obligatoire** (> 3.7 kW) - Code de l'energie. Chaque installateur DOIT etre qualifie pour travailler.
2. **Prime Advenir** - Conditionnee a un dossier administratif complexe que l'installateur doit gerer. C'est un declencheur FINANCIER fort : sans dossier = pas de prime pour le client = perte du chantier.
   - Source : https://advenir.mobi/qualification-irve/
3. **Obligation parkings > 20 places** depuis le 1er janvier 2025 - cree une vague massive de nouveaux chantiers.
   - Source : https://www.flotauto.com/bornes-recharge-2030-20250519.html
4. **NFC 15-100** - Norme electrique a respecter, documentation de conformite requise.
5. **Consuel** - Attestation de conformite electrique obligatoire.

### Force du declencheur
Tres forte. L'obligation des parkings > 20 places + la croissance VE + les primes Advenir creent un **triple declencheur** :
- Reglementaire (loi parkings)
- Financier (primes Advenir = parcours du combattant admin)
- Marche (explosion des VE)

C'est un marche en phase d'**acceleration**, pas de maturation.

---

## SCORES REVISES

| Critere | Score |
|---------|-------|
| Concurrence | 3/5 |
| Preuve de douleur | 3/5 |
| Taille de marche | 3/5 |
| Declencheur | 4/5 |
| **TOTAL** | **13/20** |

**Score initial** : 16/20 -> **Score revise** : 13/20 (-3 points)

---

## VERDICT : SURVIT (avec reserves)

### Pourquoi BorneFlow survit

1. **Pas de concurrent dominant sur la gestion de chantier IRVE** : Les solutions existantes couvrent le pre-installation (dimensionnement) ou le post-installation (supervision bornes). Le "milieu" (gestion du chantier lui-meme, dossiers Advenir, Consuel, coordination Enedis) reste un gap exploitable. IRVE Manager cible ce gap mais semble tres jeune/en lancement.

2. **Marche en croissance explosive** : 5 400 structures aujourd'hui, potentiellement 8-10K d'ici 2028. Le gâteau grossit assez vite pour qu'un nouvel entrant puisse prendre des parts.

3. **Triple declencheur fort** : Loi parkings 2025 + primes Advenir (admin lourd) + explosion VE = afflux de chantiers + besoin d'outillage.

4. **Timing favorable** : Le marche IRVE est en phase d'acceleration (comme le PV etait en 2020-2022). C'est le moment d'entrer AVANT qu'un Revolt.eco de l'IRVE ne leve des fonds.

### Reserves et risques

1. **IRVE Manager** : A surveiller de tres pres. Si ce produit se lance correctement, il occupe le meme creneau.
2. **Revolt.eco s'etend** : Revolt a annonce vouloir couvrir d'autres domaines (CVC). L'IRVE pourrait etre leur prochain move etant donne le chevauchement PV/IRVE de leur base clients.
3. **Preuve de douleur moins documentee** : Le marche IRVE etant plus jeune, les forums/temoignages sont moins abondants que pour le PV. Il faudrait valider par des interviews directes.
4. **Chevauchement PV/IRVE** : Si 30-40% des installateurs IRVE sont aussi PV, ils pourraient preferer une solution tout-en-un (OpenFire, Revolt) plutot qu'un outil IRVE-only.

### Recommandation
BorneFlow est l'idee la plus viable des trois, mais necessite une validation terrain URGENTE :
- Interviewer 5-10 installateurs IRVE "purs" (pas PV) pour confirmer la douleur admin.
- Verifier si IRVE Manager est un vrai produit ou un projet abandonne (page "coming soon").
- Evaluer si Revolt.eco a l'IRVE dans sa roadmap.
- Considerer un positionnement hyper-specifique sur la gestion des dossiers Advenir (le point de douleur le plus documente).

---

## Analyse chevauchement SolAdmin (#23) / BorneFlow (#24)

SolAdmin est ELIMINEE, donc la question de fusionner ne se pose plus. Cependant, si BorneFlow avance, il faudrait integrer les dossiers PV (Enedis/Consuel/EDF OA) comme fonctionnalite secondaire pour capter les installateurs double-qualifies PV+IRVE. Mais attention : cela mettrait BorneFlow en face-a-face direct avec Revolt.eco et OpenFire. Le positionnement IRVE-first est plus defensible.

---

## Sources web

- [IRVE Manager](https://irve-manager.com/coming-soon-3.php)
- [Homeys - Installateur IRVE](https://www.homeys.fr/logiciel/installateur-irve)
- [Homeys - Levee 1.1M EUR](https://www.societe.tech/levee-de-fonds-homeys-leve-1-1-millions-d-euros/)
- [Praxedo IRVE](https://www.praxedo.fr/notre-blog-specialise/fonctionnalites-gestion-interventions-installation-maintenance-irve/)
- [Optimeese IRVE](https://optimeese.com/logiciel-irve/)
- [ChargeGuru Partenaires](https://chargeguru.com/fr/devenir-partenaire/)
- [Qualifelec IRVE](https://irve.qualifelec.fr/)
- [IRVE 5400 structures - Automobile Propre](https://www.automobile-propre.com/articles/bonne-nouvelle-le-secteur-des-bornes-de-recharge-genere-de-plus-en-plus-demplois-en-france/)
- [Bilan IRVE 2024 - AVEM](https://www.avem.fr/2025/01/20/infrastructures-de-recharge-le-bilan-de-lannee-2024/)
- [Objectif 7M bornes 2030](https://www.flotauto.com/bornes-recharge-2030-20250519.html)
- [Obligation parkings 2025](https://www.economie.gouv.fr/actualites/les-bornes-de-recharge-se-deploient-sur-le-territoire)
- [Advenir - Programme](https://advenir.mobi/)
- [Advenir - Qualification IRVE](https://advenir.mobi/qualification-irve/)
- [Revolt.eco - Expansion CVC](https://actu.xpair.com/actualites/du-solaire-a-la-pac-comment-revolt-eco-veut-aider-le-passage-a-l-echelle-de-la-transition-energetique)
- [Revolt.eco - Levee 3M EUR](https://www.pv-magazine.fr/2025/11/17/interview-les-dessous-de-la-levee-de-fonds-de-3-millions-deuros-de-revolt-eco/)
- [Legrand IRVE](https://www.legrand.fr/pro/solutions/recharge-vehicules-electriques/piloter-une-borne-ou-un-parc-dirve)
- [Greenspot Supervision](https://www.greenspot.fr/blog/supervision-des-bornes-de-recharge)
- [CAPEB - Marche bornes](https://www.capeb.fr/actualites/le-marche-des-bornes-de-recharge-pour-vehicules-electriques)
- [Avere France - Bilan 2024](https://www.avere-france.org/wp-content/uploads/2025/01/Communique-de-presse-bilan-2024-et-perspectives-2025.pdf)
