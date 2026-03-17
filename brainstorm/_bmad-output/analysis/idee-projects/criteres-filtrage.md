# Criteres de Filtrage - Adrien Poua

**Date :** 2026-02-06
**Phase :** 1 - Definition des Criteres de Filtrage
**Input :** `profil-fondateur.md`

---

## Criteres Obligatoires

Une idee doit cocher **TOUS** ces criteres pour survivre au filtrage.

| # | Critere | Description | Justification profil |
|---|---------|-------------|---------------------|
| 1 | **Douleur insupportable** | Le client perd de l'argent, perd un temps fou, ou risque personnellement (licence, amende perso). Quantifiable en EUR ou en heures. | Adrien ne veut pas convaincre. La douleur doit etre tellement forte que le client dit "oui" en 10 secondes. |
| 2 | **Acquisition scalable sans telephone** | Les prospects sont trouvables et contactables sans telephone : liste publique, SEO, cold email, LinkedIn, forums. Quelques appels pour les 10-20 premiers clients c'est OK, mais le canal principal doit scaler sans. | Introverti, blocage psychologique sur le cold call. Peut le faire au lancement mais pas comme canal permanent. Lecon apprise avec l'app basket. |
| 3 | **Vente evidente** | Le client comprend la valeur en 10 secondes. Pas besoin de 3 rendez-vous et d'un PowerPoint de 40 slides. | Pas de commercial, pas d'equipe sales. Le produit doit se vendre par sa valeur evidente. |
| 4 | **Decideur unique** | Une seule personne decide et paye. Pas de comite d'achat, pas de cycle de vente en 6 mois. | Solo fondateur, urgence psychologique, besoin de resultats < 3 mois. Pas le temps pour des cycles longs. |

---

## Criteres Eliminatoires

**Un seul suffit pour virer l'idee immediatement.**

| # | Critere eliminatoire | Seuil |
|---|---------------------|-------|
| 1 | **Marketplace two-sided** | Probleme oeuf/poule = mort immediate |
| 2 | **Demarchage telephonique permanent** | Si le canal principal d'acquisition repose sur le telephone de facon permanente → eliminer |
| 3 | **Cycle de vente > 1 mois** | Si le prospect met plus d'un mois entre decouverte et paiement → eliminer |
| 4 | **Marche < 500 cibles** | Moins de 500 cibles identifiables en France → trop petit pour atteindre 2500-3000 EUR/mois |
| 5 | **Concurrent dominant** | Un acteur a leve 100M$+ ou GAFAM present sur le creneau → eliminer |
| 6 | **Aucun canal d'acquisition en ligne** | Si impossible de trouver/contacter les prospects en ligne → eliminer |
| 7 | **Architecture complexe requise des le MVP** | Le produit DOIT pouvoir se lancer sur une architecture simple (monolithe, Vercel, PaaS classique). Si le MVP necessite Kubernetes, multi-region, ou systemes distribues pour fonctionner → eliminer. Le scaling viendra apres si ca marche. Pas de limite de stack : le fondateur apprend n'importe quelle techno avec l'IA (Claude Code), la limite c'est l'architecture au lancement, pas le langage. |
| 8 | **Responsabilite metier** | Le SaaS engage la responsabilite du fondateur sur l'exactitude du contenu sectoriel (legal, medical, financier) → eliminer. Le SaaS doit etre un outil, pas un expert. |

---

## Grille d'Evaluation Rapide /20

Chaque idee est scoree sur 4 criteres, chacun note de 0 a 5.

### 1. Intensite de la douleur /5

| Score | Description |
|-------|-------------|
| **5** | Le client perd de l'argent MAINTENANT ou risque personnellement (amende, perte de licence). Urgence immediate. |
| **4** | Le client perd des heures chaque semaine sur une tache penible. Quantifiable en temps. |
| **3** | Le client a un probleme reconnu mais qui ne le reveille pas la nuit. "Ca serait bien d'avoir un truc." |
| **2** | Le probleme existe mais le client s'en accommode. Nice-to-have. |
| **1** | Pas de preuve de douleur reelle. Probleme theorique. |
| **0** | Pas de probleme identifie. |

### 2. Facilite d'acquisition /5

| Score | Description |
|-------|-------------|
| **5** | Liste publique complete des prospects scrapable + canal de contact direct (email/LinkedIn). Acquisition quasi-gratuite. |
| **4** | Prospects trouvables via SEO fort (volume de recherche + intent d'achat) ou communautes en ligne identifiees. |
| **3** | Prospects identifiables via prescripteurs (comptables, avocats, federations) qui peuvent recommander. |
| **2** | Prospects trouvables mais necessite du cold outreach cible ou quelques appels reguliers. |
| **1** | Pas de canal clair. Faut aller les chercher un par un. |
| **0** | Aucune idee de comment atteindre la cible. |

### 3. Simplicite de la vente /5

| Score | Description |
|-------|-------------|
| **5** | Le client comprend la valeur en 10 secondes. Decideur unique. Freemium ou essai gratuit possible. Self-service. |
| **4** | Le client comprend vite. Un email ou une demo de 5 min suffit. Decideur unique. |
| **3** | Le client comprend mais necessite une explication. Un call de 15 min ou un lead magnet educatif. |
| **2** | Necessite de la pedagogie. Plusieurs points de contact avant conversion. |
| **1** | Vente complexe, multi-decideurs, cycle long. |
| **0** | Personne ne comprend ce que tu vends. |

### 4. Faisabilite solo /5

| Score | Description |
|-------|-------------|
| **5** | MVP en 2-4 semaines. Architecture simple (monolithe, API + front, BDD classique). Pas de dependance externe critique. Valorise le CV. |
| **4** | MVP en 1-2 mois. Architecture standard. Quelques APIs tierces stables. Bon projet portfolio. |
| **3** | MVP en 2-3 mois. Architecture un peu plus ambitieuse (pipeline de donnees, integrations multiples). Projet correct pour CV. |
| **2** | MVP en 3+ mois. Architecture significativement complexe ou forte dependance a des systemes externes fragiles. |
| **1** | Necessite une equipe ou une expertise sectorielle profonde. Architecture distribuee. |
| **0** | Infaisable solo. Necessite Kubernetes, multi-region, ou une equipe de devs experimentes. |

---

## Seuils de Decision

| Score /20 | Decision |
|-----------|----------|
| **16-20** | Idee prioritaire - approfondir immediatement |
| **12-15** | Idee prometteuse - garder pour le filtrage Blue Ocean |
| **8-11** | Idee faible - eliminer sauf angle original |
| **0-7** | Idee morte - eliminer sans appel |

---

*Genere le 2026-02-06 - Phase 1 du workflow SaaS*
