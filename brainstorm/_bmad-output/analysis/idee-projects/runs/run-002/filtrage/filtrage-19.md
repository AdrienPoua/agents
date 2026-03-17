# Filtrage #19 - PermisBoard

## Idee initiale
Dashboard de suivi echeances reglementaires pour TPE/PME. Pattern Harbor Compliance (US). 1.4M cibles.
**Score initial : 16/20**

---

## 1. CONCURRENCE (Score : 2/5)

### Concurrents identifies

| Concurrent | Type | Cible | Levee/Taille | Position |
|---|---|---|---|---|
| **Legisway (Wolters Kluwer)** | SaaS legal & compliance | Grandes entreprises, ETI | Filiale de Wolters Kluwer (**CA 5.6Mds EUR**) | >1000 departements juridiques clients |
| **NathysLog / Conforlog** | SaaS obligations reglementaires | Multi-sites, PME-ETI | PME, pas de levee connue | 140+ types de controles, multilingue |
| **Amadeo (Bureau Veritas)** | SaaS veille HSE reglementaire | Grandes entreprises | Filiale Bureau Veritas (**CA 5.8Mds EUR**) | Offre premium integree |
| **Quentic** | SaaS compliance & legal | ETI-Grandes entreprises | Rachete par Wolters Kluwer | Marche europeen |
| **Cloud VGP** | SaaS controles reglementaires | Multi-sites | PME | Niche equipements/batiments |
| **Pennylane / Indy** | Compta + echeances fiscales | TPE/PME | Pennylane : 100M EUR+ levees | Ne couvrent que les echeances fiscales/comptables |

### Analyse

**PROBLEME MAJEUR** : Le marche se segmente en deux :
1. **Haut de gamme** : Legisway, Amadeo, Quentic -- solutions 100-2000 EUR/mois, pour grandes entreprises. Adossees a des groupes a **milliards de CA**. Inaccessibles aux TPE/PME en termes de prix.
2. **Bas de gamme** : Pennylane/Indy couvrent les echeances fiscales. Les TPE/PME n'identifient pas les echeances "non-fiscales" comme un probleme prioritaire.

**Harbor Compliance** : Revenue verifiee = **8M$ ARR** en juin 2024, pas 17M$. Le chiffre initial etait surestime. Le modele existe mais il n'a pas explose meme aux US.

Le vrai probleme : **les echeances non-fiscales pour TPE/PME, c'est quoi exactement ?**
- DUERP ? -> OiRA (gratuit, gouvernement)
- Registre unique du personnel ? -> Templates gratuits
- Conformite RGPD ? -> Marche sature
- Controles periodiques equipements ? -> Cloud VGP, Conforlog
- Affichages obligatoires ? -> Produits physiques a 30 EUR

Le besoin est **trop diffus et heterogene** pour un dashboard generique.

---

## 2. PREUVE DE DOULEUR (Score : 2/5)

### Recherche
- **Tres peu de plaintes en ligne** specifiquement sur "je ne sais pas quelles echeances reglementaires non-fiscales je dois respecter".
- Les TPE/PME se plaignent des **impots**, de la **paperasse administrative**, mais pas specifiquement d'un "manque de dashboard d'echeances reglementaires".
- Les recherches "suivi obligations reglementaires TPE PME" ramenent surtout vers la facturation electronique 2026 et les obligations comptables -- pas vers un besoin de dashboard global.
- Le pattern US (Harbor Compliance) fonctionne car les US ont 50 etats avec des reglementations differentes. En France, la reglementation est nationale = le probleme est structurellement different.

**La douleur est diffuse, non articulee, et difficile a monetiser.**

---

## 3. TAILLE DE MARCHE (Score : 3/5)

### Chiffres verifies
- 1.4M TPE/PME en France = chiffre plausible (INSEE recense ~4M entreprises dont ~3.9M TPE/PME, mais le segment "entreprises avec obligations non-fiscales significatives" est plus restreint).
- Le TAM theorique est enorme, mais le **SAM** (marche reellement adressable) est beaucoup plus petit : combien de TPE/PME paieraient 20-50 EUR/mois pour un dashboard d'echeances ?
- Harbor Compliance a 8M$ ARR apres 12 ans d'existence aux US = le marche ne decolle pas.

---

## 4. DECLENCHEUR VERIFIABLE (Score : 2/5)

### Verification
- **Pas de declencheur unique** : Pas de nouvelle loi forcant toutes les PME a utiliser un outil de suivi.
- La facturation electronique (sept 2026) est un declencheur, mais les acteurs comptables (Pennylane, Indy, Sage) le couvrent deja.
- Les obligations changent lentement et de maniere fragmentee -- pas d'urgence ponctuelle.
- Pas de sanctions unifiees pour "non-respect d'echeances reglementaires non-fiscales" : chaque domaine a ses propres sanctions, souvent faibles pour les TPE.

---

## SYNTHESE

| Critere | Score |
|---|---|
| Concurrence | 2/5 |
| Preuve de douleur | 2/5 |
| Taille de marche | 3/5 |
| Declencheur | 2/5 |
| **TOTAL REVISE** | **9/20** |

---

## VERDICT : ELIMINEE

### Raisons principales
1. **Besoin trop diffus** : Les echeances reglementaires non-fiscales sont heterogenes, sectorielles, et ne constituent pas un "pain point" identifie par les TPE/PME elles-memes.
2. **Concurrence ecrasante en haut** : Wolters Kluwer (Legisway, Quentic), Bureau Veritas (Amadeo) -- des groupes a milliards de CA.
3. **Concurrence en bas** : Pennylane/Indy captent deja les echeances fiscales. Pour le reste, des solutions gratuites ou peu cheres existent.
4. **Pattern US non transposable** : Harbor Compliance (8M$ ARR apres 12 ans) fonctionne grace a la complexite inter-etats US. En France, reglementation nationale = besoin structurellement plus faible.
5. **Pas de preuve de douleur** : Les forums et recherches ne montrent pas de demande pour un "dashboard d'echeances reglementaires PME".

### Lecon
Le marche "trop large" est souvent un piege : 1.4M de cibles potentielles mais aucune qui a un besoin urgent, specifique et monetisable.

---

## Sources web

- [Harbor Compliance - 8M$ revenue (GetLatka)](https://getlatka.com/companies/Harbor_Compliance)
- [Harbor Compliance - Crunchbase](https://www.crunchbase.com/organization/harbor-business-compliance)
- [NathysLog / Conforlog](https://nathyslog.com/)
- [Conforlog - obligations entreprise](https://www.nathyslog.com/qui-sommes-nous.html)
- [Legisway - Wolters Kluwer](https://www.wolterskluwer.com/en/solutions/legisway)
- [Legisway alternatives - Capterra](https://www.capterra.com/p/134788/Effacts/alternatives/)
- [Amadeo - Bureau Veritas](https://www.bureauveritas.fr/digital/amadeo)
- [Quentic - Legal compliance](https://www.quentic.com/software/legal-compliance/)
- [Cloud VGP - Preventica](https://www.preventica.com/annuaire/entreprises/cloud-vgp/produits/logiciel-application-saas-pour-la-gestion-de-la-conformite-et-des-controles-reglementaires)
- [Pennylane echeances declarations](https://help.pennylane.com/fr/articles/18706-suivre-les-echeances-des-declarations-et-de-cloture)
- [Comparatif logiciels Legal & Compliance France (SaaSK)](https://saask.fr/software/legal-compliance/)
- [Nathyslog article Le Periscope](https://le-periscope.info/le-journal/numerique/nathyslog-veille-sur-la-conformite-de-votre-entreprise/)
