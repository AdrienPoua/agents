# Recherche de Domaine : AccessCheck
## Scanner de conformite RGAA pour PME francaises

**Date :** 6 fevrier 2026
**Analyste :** BMAD Domain Research Agent
**Projet :** AccessCheck -- SaaS d'audit d'accessibilite web RGAA
**Fondateur :** Adrien Poua (dev solo, JS/TS, budget < 100 EUR/mois)

---

## Table des matieres

1. [Analyse de l'industrie](#section-1--analyse-de-lindustrie)
2. [Paysage concurrentiel](#section-2--paysage-concurrentiel)
3. [Cadre reglementaire](#section-3--cadre-reglementaire)
4. [Tendances technologiques](#section-4--tendances-technologiques)
5. [Dynamiques de l'ecosysteme](#section-5--dynamiques-de-lecosysteme)
6. [Synthese et recommandations](#section-6--synthese-et-recommandations)

---

## SECTION 1 : Analyse de l'industrie

### 1.1 Taille du marche mondial

Le marche mondial des services d'accessibilite numerique etait estime a **1,2 milliard USD en 2024** et devrait croitre a un taux de croissance annuel compose (TCAC) de **13,8%**, atteignant **4,32 milliards USD d'ici 2033**. [Source : Business Research Insights](https://www.businessresearchinsights.com/market-reports/digital-accessibility-service-market-118130)

Pour les outils d'accessibilite web specifiquement (smart website accessibility tools), le marche etait evalue a **0,43 milliard USD en 2023** et devrait atteindre **1,1 milliard USD d'ici 2032** (TCAC de 10,90%). [Source : Business Research Insights](https://www.businessresearchinsights.com/market-reports/smart-website-accessibility-tools-market-109325)

Le marche des logiciels d'accessibilite numerique est evalue a **0,80 milliard USD en 2025** et projete a **1,08 milliard USD d'ici 2030** (TCAC de 6,31%). [Source : Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/digital-accessibility-software-market)

### 1.2 Marche europeen

L'Europe represente **24,4% du marche mondial** des logiciels d'accessibilite numerique. Le marche europeen a genere un revenu de **175,8 millions USD en 2023** et devrait atteindre **305,6 millions USD d'ici 2030** (TCAC de 8,6% a 15,0% selon les sources). [Source : Grand View Research](https://www.grandviewresearch.com/horizon/outlook/digital-accessibility-software-market/europe)

La croissance europeenne est tiree par l'European Accessibility Act (entree en vigueur en juin 2025) et l'alignement EN 301 549 avec WCAG 2.2.

### 1.3 Marche francais -- Estimation

Il n'existe pas d'etude publique specifique au marche francais de l'accessibilite web SaaS. Cependant, on peut estimer le marche adressable :

- **Nombre d'entreprises concernees :** ~175 000 PME (hors microentreprises) en France selon l'INSEE 2023, dont on estime ~110 000 avec un site web actif. [Source : INSEE](https://www.insee.fr/fr/statistiques/7678534?sommaire=7681078) | [Source : Tool Advisor](https://tool-advisor.fr/blog/tpe-pme-chiffres/)
- **Prix moyen d'un audit RGAA :** 2 000 a 5 000 EUR HT. [Source : DesignGouv](https://design.numerique.gouv.fr/accessibilite-numerique/prestations-accessibilite-numerique/)
- **Taux de conformite actuel :** seulement **3,4% des sites** de grandes entreprises sont accessibles (Observatoire de la Federation des Aveugles, juin 2025). [Source : ApiDV](https://apidv.org/actualites/mise-en-demeure-des-entreprises-auchan-carrefour-e-leclerc-et-picard-surgeles-de-se-conformer-a-leur-obligation-d-accessibilite-numerique-pour-leurs-services-de-course-en-ligne/)
- **Communes :** seules 16,3% atteignent un score technique satisfaisant (barometre 2026). [Source : RGAA Checker](https://rgaa-checker.com/blog/barometre-accessibilite-communes-2026)

**Estimation du marche adressable total (TAM) France :**
- 110 000 PME x 100 EUR/an (SaaS basique) = **~11 M EUR/an** (segment SaaS low-cost)
- 110 000 PME x 50 EUR/mois (SaaS mid-range) = **~66 M EUR/an** (segment SaaS premium)
- Marche des audits manuels : 110 000 x 3 000 EUR = **~330 M EUR** (marche one-shot)

### 1.4 Segmentation du marche

| Segment | Volume estime | Maturite | Willingness to Pay |
|---------|--------------|----------|-------------------|
| Secteur public (collectivites, Etat) | ~36 000 communes + administrations | Moyen (obligations depuis 2012) | Forte (budgets dedies) |
| Grandes entreprises (CA > 250 M EUR) | ~300 entreprises | Faible (3,4% conformes) | Forte (risque reputationnel) |
| ETI (CA 50-250 M EUR) | ~5 800 entreprises | Tres faible | Moderee |
| PME (10+ salaries, CA > 2 M EUR) | ~110 000-175 000 | Quasi-inexistant | Faible mais croissante |
| E-commerce | ~200 000 sites | Tres faible | Moderee (EAA cible ce secteur) |

### 1.5 Tendances et dynamiques

1. **Pression reglementaire croissante :** L'EAA entree en vigueur le 28 juin 2025 elargit massivement le perimetre aux entreprises privees de plus de 10 salaries. [Source : FEVAD](https://www.fevad.com/e-commerce-et-accessibilite-numerique-ce-qui-change-a-partir-de-juin-2025/)

2. **Phase de transition :** Les nouveaux services numeriques doivent etre conformes immediatement (depuis juin 2025) ; les sites existants disposent d'un delai jusqu'au **28 juin 2030**. [Source : Novius](https://www.novius.com/actualites/loi-accessibilite-numerique-2025)

3. **Awareness croissante :** Les actions judiciaires des associations (ApiDV, Droit Pluriel) contre Auchan, Carrefour, E.Leclerc et Picard en 2025 ont mediatise le sujet. [Source : Handicap.fr](https://informations.handicap.fr/a-des-distributeurs-sommes-de-rendre-leur-site-web-accessible-38243.php)

4. **Gap immense :** Le fossile entre l'obligation legale et la realite (< 10% de sites conformes) cree un marche d'urgence. [Source : ecommercemag.fr](https://www.ecommercemag.fr/Thematique/retail-1220/barometre-etude-2168/Breves/accessibilite-numerique-sites-web-france-point-481187.htm)

---

## SECTION 2 : Paysage concurrentiel

### 2.1 Cartographie des acteurs

#### A. Acteurs internationaux majeurs (SaaS)

| Acteur | Revenue/ARR | Positionnement | Couverture RGAA |
|--------|------------|----------------|-----------------|
| **Deque Systems** (axe-core) | Non public, leader open-source | Moteur de tests, B2B enterprise | Indirecte (WCAG) |
| **Level Access** (ex-UserWay) | ~98 M USD (acquisition UserWay) | AI overlay + audit + legal advisory | Faible |
| **AudioEye** | 35,2 M USD FY2024 (ARR 36,6 M) | Partner-channel, CMS plugins | Aucune specifique |
| **Siteimprove** | > 100 M USD ARR | Plateforme complete (SEO + accessibility) | Indirecte |
| **accessiBe** | Amende FTC 1 M USD en 2025 | AI overlay (controverse) | Aucune specifique |

[Sources : Accessible.org Financial Report](https://accessible.org/financial-report-revenue-digital-accessibility-companies/) | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/digital-accessibility-software-market-report)

**Point cle :** Aucun de ces acteurs internationaux ne propose un outil specifiquement aligne sur le referentiel RGAA 4.1.2 et ses 106 criteres. Ils couvrent les WCAG mais pas la methodologie d'audit francaise specifique.

#### B. Acteurs francais specialises

| Acteur | Type | Forces | Faiblesses |
|--------|------|--------|------------|
| **RGAA Checker** (rgaa-checker.com) | SaaS | 100% RGAA, >50% criteres automatises, IA corrective, open-source | Concurrent direct, deja positionne |
| **Tanaguru** | SaaS/Open-source | ~180 tests automatises RGAA/AccessiWeb, historique fort | Interface vieillissante, moins actif |
| **Asqatasun** | Open-source (fork Tanaguru) | Gratuit, RGAA 3 | Non mis a jour RGAA 4.x |
| **Ara** (DINUM) | Outil gouvernemental gratuit | Officiel, conforme methodologie | 100% manuel, pas d'automatisation |
| **Boscop** | Agence + outils | Outils d'aide, expertise humaine | Services manuels, cher |
| **Opquast/Temesis** | Outil + certification | Label qualite reconnu | Plus large que juste accessibilite |

[Sources : RGAA Checker GitHub](https://github.com/EddyDezuraud/rgaa-checker) | [Tanaguru](https://www.tanaguru.com/en/) | [Boscop](https://boscop.fr/audit-rgaa-wcag/)

#### C. Agences d'audit (services humains)

| Agence | Specialite | Tarifs indicatifs |
|--------|-----------|-------------------|
| **Access42** | Audit, conseil, formation certifiante CPF | Non publics (estimation 3 000-6 000 EUR) |
| **Ipedis** | Plateforme IpedisConnect + audit RGAA/WCAG | Non publics |
| **Koena** | Audit RGAA/WCAG/WAI-ARIA, formation | Non publics |
| **Alsacreations** | Audit + grille complete, formation | Non publics |
| **ACCESSPROD** | Audit prestation | 1 400 a 4 200 EUR HT |
| **Agences web generiques** | Audit basique integre aux refontes | 2 000 a 5 000 EUR HT |

[Sources : Access42](https://access42.net/) | [Ipedis](https://www.ipedis.com/) | [ACCESSPROD](https://www.accessprod.com/prestations/accessibilite-numerique/audits/) | [DesignGouv](https://design.numerique.gouv.fr/accessibilite-numerique/prestations-accessibilite-numerique/)

### 2.2 Analyse concurrentielle directe : RGAA Checker

RGAA Checker est le concurrent le plus direct d'AccessCheck. Points cles :

- **Open-source** sur GitHub (EddyDezuraud/rgaa-checker)
- Architecture SaaS multi-tenant avec BullMQ, S3, Playwright
- Plus de 50% des criteres RGAA automatises (vs ~40% standard marche)
- Dashboard intuitif, export grilles (JSON/XLSX/HTML), attestations officielles
- API REST avec documentation OpenAPI
- IA corrective integree
- Blog avec contenu SEO (barometre communes, top 10 outils)

[Source : GitHub RGAA Checker](https://github.com/EddyDezuraud/rgaa-checker)

### 2.3 Barrieres a l'entree

| Barriere | Niveau | Detail |
|----------|--------|--------|
| Technique (dev outil) | Moyen | axe-core open-source facilite le demarrage, mais adaptation RGAA non triviale |
| Expertise RGAA | Eleve | 106 criteres, methodologie specifique, interpretation subjective |
| Cout d'acquisition client | Eleve | PME peu sensibilisees, cycle de vente educatif |
| Reglementation | Faible | Pas de certification obligatoire pour les outils |
| Capital | Faible | Stack JS/TS, infra cloud low-cost possible |
| Marque/reputation | Moyen | Marche naissant, pas de leader installe cote PME |

### 2.4 Parts de marche estimees (France, segment PME)

Le marche est **quasi-vierge** pour les PME. La quasi-totalite des entreprises concernees n'ont pas encore engage de demarche de conformite. RGAA Checker est le premier mover SaaS specifique RGAA mais son adoption reste limitee. Le gros du marche est aujourd'hui capte par les agences d'audit manuelles pour les clients qui agissent.

---

## SECTION 3 : Cadre reglementaire

### 3.1 Directive UE 2019/882 -- European Accessibility Act (EAA)

- **Adoption :** 17 avril 2019 par le Parlement europeen et le Conseil
- **Objectif :** Harmoniser les exigences d'accessibilite pour les produits et services numeriques au sein de l'UE
- **Entree en vigueur :** 28 juin 2025
- **Perimetre :** E-commerce, services bancaires, transports, medias audiovisuels, telephonie, et tout service numerique B2C
- **Exemption :** Microentreprises (< 10 salaries ET CA < 2 M EUR)

[Source : EUR-Lex Directive 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj?locale=fr) | [Source : Friendly Captcha](https://friendlycaptcha.com/wiki/european-accessibility-act/)

### 3.2 Transposition francaise

La directive a ete transposee en droit francais par :

- **Loi n 2023-171 du 9 mars 2023**, article 16
- Modification de la **loi n 2005-102 du 11 fevrier 2005** (article 47-1)
- Integration dans le **Code de la consommation** (articles R. 451-1 a R. 451-4)
- Referentiel technique applicable : **RGAA 4.1.2** (base sur EN 301 549 V2.1.2, elle-meme alignee sur WCAG 2.1 niveaux A et AA)

[Source : Access42 transposition](https://access42.net/transposition-directive-europeenne-ue-2019-882-accessibilite-produits-services/) | [Source : Loi francaise - IBA](https://www.ibanet.org/digital-accessibility-france)

### 3.3 Le referentiel RGAA 4.1.2

- **106 criteres** de conformite repartis en **13 thematiques** (images, cadres, couleurs, multimedia, tableaux, liens, scripts, elements obligatoires, structuration, presentation, formulaires, navigation, consultation)
- Publie le 16 septembre 2021, mis a jour le 18 avril 2023 (corrections mineures)
- Base sur la **norme europeenne harmonisee EN 301 549 V2.1.2** (2018)
- Methodologie d'audit specifique : echantillon representatif de pages, grille d'audit, calcul du taux de conformite
- Outil officiel d'aide a l'audit : **Ara** (DINUM) -- purement manuel

[Source : RGAA officiel](https://accessibilite.numerique.gouv.fr/) | [Source : RGAA v4.1.2 PDF](https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.2.pdf)

### 3.4 Regime de sanctions

Le regime de sanctions en France est **multi-niveaux** :

#### Pour les PME (secteur prive, CA > 2 M EUR) -- via le Code de la consommation :
- **Contravention de 5e classe** : 1 500 EUR par infraction (personnes physiques), 7 500 EUR (personnes morales)
- **Recidive** : 3 000 EUR (personnes physiques), 15 000 EUR (personnes morales)
- Potentiellement cumulable par manquement constate

#### Pour les grandes entreprises et le secteur public (CA > 250 M EUR) -- via la loi de 2005 :
- Amende maximale de **50 000 EUR** par service en ligne non conforme
- Sanctions pouvant aller jusqu'a **300 000 EUR** pour defaut de mise en conformite

#### Mesures correctives :
- Retrait de produits du marche
- Injonctions de mise en conformite
- Procedures de reference (assignation en justice par les associations)

[Source : Onepoint - EAA sanctions](https://www.groupeonepoint.com/fr/publications/leuropean-accessibility-act-des-sanctions-renforcees-et-des-organes-de-controles-designes/) | [Source : De Gaulle Fleurance](https://www.degaullefleurance.com/actualites/accessibilite-numerique-nouvelles-obligations-pour-le-secteur-prive/)

### 3.5 Autorites de controle

| Autorite | Perimetre |
|----------|-----------|
| **DGCCRF** | Produits et services de consommation, e-commerce |
| **ARCOM** | Secteur public, services audiovisuels |
| **ARCEP** | Telecommunications |

[Source : Onepoint](https://www.groupeonepoint.com/fr/publications/leuropean-accessibility-act-des-sanctions-renforcees-et-des-organes-de-controles-designes/)

### 3.6 Calendrier critique

| Date | Evenement |
|------|-----------|
| 17 avril 2019 | Adoption Directive UE 2019/882 |
| 9 mars 2023 | Transposition francaise (Loi 2023-171) |
| **28 juin 2025** | **Entree en vigueur -- nouveaux services numeriques** |
| Novembre 2025 | Premieres assignations judiciaires (Auchan, Carrefour, E.Leclerc, Picard) |
| **28 juin 2030** | **Date limite -- sites existants** |
| ~2028-2030 | WCAG 3.0 attendu (standard W3C) |

### 3.7 Point critique pour AccessCheck

**Clarification importante sur les sanctions :**

L'amende de 50 000 EUR souvent citee concerne les **grandes entreprises (CA > 250 M EUR)** et le secteur public. Pour les PME (cible d'AccessCheck), les sanctions sont plus modestes : **1 500 a 7 500 EUR par infraction** via le Code de la consommation. Neanmoins :
- Les amendes sont **cumulables** par manquement
- Le risque **reputationnel** et les **actions collectives** des associations constituent un levier de pression croissant
- La fenetre jusqu'en 2030 pour les sites existants cree un cycle de vente plus long mais previsible

---

## SECTION 4 : Tendances technologiques

### 4.1 Automatisation des tests d'accessibilite

#### Outils open-source majeurs

| Outil | Editeur | Licence | Criteres couverts | Integration |
|-------|---------|---------|-------------------|-------------|
| **axe-core** | Deque Systems | MPL 2.0 | WCAG 2.0/2.1/2.2 (A, AA, AAA) | Tous browsers, frameworks, CI/CD |
| **Pa11y** | Open-source (communaute) | LGPL 3.0 | Utilise axe-core ou HTML_CodeSniffer | CLI, CI/CD (Pa11y-ci) |
| **Lighthouse** | Google | Apache 2.0 | Sous-ensemble axe-core (~36 regles) | Chrome DevTools, CLI, CI/CD |
| **HTML_CodeSniffer** | Squiz Labs | BSD 3-Clause | WCAG 2.0 | Bookmarklet, CLI |
| **Tanaguru Engine** | Tanaguru | AGPL 3.0 | ~180 tests RGAA/AccessiWeb/WCAG | Serveur, API |

[Source : Deque axe-core](https://www.deque.com/axe/axe-core/) | [Source : GitHub Pa11y](https://github.com/pa11y/pa11y) | [Source : Craig Abbott comparison](https://www.craigabbott.co.uk/blog/axe-core-vs-pa11y/)

#### Limites de l'automatisation

**Point fondamental :** Les outils automatises comme axe-core et Pa11y combines ne detectent qu'environ **30 a 40% des problemes d'accessibilite**. Le reste necessite une verification humaine (structure semantique, pertinence des alternatives textuelles, navigation au clavier, comprehension du contenu).

RGAA Checker revendique **>50% de criteres automatises** grace a une analyse DOM plus poussee avec Playwright. [Source : RGAA Checker](https://rgaa-checker.com/blog/top-10-outils-audit-rgaa-2025)

[Source : DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/best-practice/automated-testing-using-axe-core-and-pa11y)

### 4.2 IA et accessibilite

#### Les overlays IA -- un modele disqualifie

Les "overlays" (widgets JavaScript injectes) ont ete largement **disqualifies** :

- **FTC vs accessiBe** : Amende de 1 M USD en 2025 pour publicite mensongere sur les capacites de leur widget. [Source : EcomBack](https://www.ecomback.com/blogs/ftc-and-accessibe-settle-claims-for-1m-over-ai-accessibility-overlay-widgets)
- **456 poursuites** en H1 2025 ciblaient des sites avec overlays installes (22,6% du total des litiges). [Source : Accessible.org](https://accessible.org/2026-ada-website-compliance-lawsuits-ai/)
- Les overlays ne corrigent que **20-40% des problemes** courants.
- **La Commission europeenne a publiquement declare** que les overlays ne constituent pas un chemin valide vers la conformite WCAG. [Source : NWS Digital](https://www.nwsdigital.com/Blog/Accessibility-Overlays-in-2025-A-Shortcut-Companies-Should-Continue-to-Avoid)

#### IA pour la remediation (approche code-level)

L'IA peut jouer un role dans :
- **Detection avancee** de violations (analyse semantique, reconnaissance d'images)
- **Suggestions de corrections** dans le code source (pull requests automatiques)
- **Assistance a l'audit** : pre-qualification des criteres, priorisation
- **Generation d'alternatives textuelles** pour les images

[Source : Carnegie Mellon](https://www.cmu.edu/computing/news/2025/ai-remediation.html) | [Source : TestParty](https://testparty.ai/blog/best-ai-powered-accessibility-remediation-tool-2025)

**Implication strategique pour AccessCheck :** L'approche overlay est a eviter absolument. L'IA doit etre utilisee en support (suggestions, pre-audit) et non comme solution miracle.

### 4.3 WCAG 3.0 en preparation

- **Statut actuel :** Working Draft (derniere publication septembre 2025)
- **Changements majeurs attendus :** Nouveau systeme de scoring (au lieu de A/AA/AAA), methodes de test plus flexibles, couverture elargie (cognitive, mobile)
- **Calendrier :** Finalisation **pas avant 2028-2030** ; WCAG 2.2 reste le standard de reference legal
- **Impact :** WCAG 2 ne sera pas deprecie pendant **plusieurs annees** apres la finalisation de WCAG 3.0

[Source : W3C WCAG 3 Introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) | [Source : W3C WCAG 3 Timeline](https://www.w3.org/WAI/GL/wiki/WCAG_3_Timeline) | [Source : Medium/Chukreiev](https://medium.com/@chukreiev/new-wcag-3-0-in-september-2025-what-changed-how-it-differs-from-wcag-2-x-and-what-to-do-next-fc13824aa821)

**Implication pour AccessCheck :** Pas d'urgence a integrer WCAG 3.0. Le RGAA 4.1.2 (base sur WCAG 2.1) reste le referentiel legal francais pour les annees a venir.

### 4.4 Integration CI/CD

L'integration de tests d'accessibilite dans les pipelines CI/CD est une tendance forte :

- **Pa11y-ci** : Outil CLI concu pour l'integration CI, facile a configurer dans GitHub Actions, GitLab CI, Jenkins
- **axe-core + Playwright/Cypress** : Integration native dans les frameworks de test end-to-end
- **Lighthouse CI** : Actions GitHub et orbs CircleCI disponibles
- Les developpeurs peuvent tester dans leur **IDE** (axe Linter), **browser** (axe DevTools), et **pipeline** (axe-core CLI)

[Source : CivicActions](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe) | [Source : Abstracta](https://abstracta.us/blog/accessibility-testing/automated-accessibility-testing-comparing-axe-wdio-and-pa11y-ci/)

**Implication pour AccessCheck :** Un outil qui s'integre dans le workflow des developpeurs (CI/CD, IDE) a un avantage competitif sur un simple scanner web one-shot.

---

## SECTION 5 : Dynamiques de l'ecosysteme

### 5.1 Organismes de normalisation

| Organisme | Role | Impact sur AccessCheck |
|-----------|------|----------------------|
| **W3C / WAI** | Cree et maintient les WCAG, norme internationale | Fondation technique du RGAA |
| **CEN/CENELEC** | Norme europeenne EN 301 549 | Base technique du RGAA 4.1.2 |
| **DINUM** (gouv.fr) | Publie et maintient le RGAA, outil Ara | Referentiel obligatoire, source de verite |
| **BrailleNet** | Relais francais du WAI, label AccessiWeb, certification Euracert | Historique, influence sur les normes francaises |

[Source : BrailleNet](https://www.braillenet.org/en/digital-accessibility-2/national-and-international-standards/) | [Source : Wikipedia BrailleNet](https://fr.wikipedia.org/wiki/BrailleNet) | [Source : RGAA officiel](https://accessibilite.numerique.gouv.fr/)

### 5.2 Associations et enforcement

Les associations jouent un role **determinant** dans l'enforcement de la loi :

#### ApiDV (Accompagner, Promouvoir, Integrer les Deficients Visuels)
- Creee en 1949, reconnue d'utilite publique depuis 1959
- 500 benevoles, 21 salaries, 7 implantations
- **Action phare 2025 :** Mise en demeure puis assignation en refere (novembre 2025) d'Auchan, Carrefour, E.Leclerc et Picard pour non-conformite de leurs services de courses en ligne

#### Droit Pluriel
- Fondee en 2009, reference nationale pour les droits des personnes handicapees
- Equipe d'avocats et avocats benevoles
- Co-plaignante avec ApiDV dans les assignations de 2025

#### Interet a Agir
- Collectif d'avocats accompagnant les actions en justice

#### Federation des Aveugles et Amblyopes de France
- Publie l'**Observatoire du respect des obligations d'accessibilite numerique**
- Chiffre cle : seulement 3,4% des sites conformes (juin 2025)

[Source : ApiDV](https://apidv.org/actualites/mise-en-demeure-des-entreprises-auchan-carrefour-e-leclerc-et-picard-surgeles-de-se-conformer-a-leur-obligation-d-accessibilite-numerique-pour-leurs-services-de-course-en-ligne/) | [Source : Droit Pluriel](https://droitpluriel.fr/mise-en-demeure-des-entreprises-auchan-carrefour-e-leclerc-et-picard-surgeles-de-se-conformer-a-leur-obligation-daccessibilite-numerique-pour-leurs-services-de-courses-en-ligne/) | [Source : Collectif Handicap 54](https://collectifhandicap54.org/2025/11/25/laccessibilite-numerique-est-un-droit-des-associations-assignent-en-refere-4-grandes-enseignes/)

**Impact pour AccessCheck :** Les actions judiciaires des associations sont le principal vecteur de prise de conscience. Chaque nouvelle action mediatisee genere une vague de demandes d'audit. AccessCheck peut positionner son offre comme une "assurance" contre ce risque.

### 5.3 Prescripteurs

| Type de prescripteur | Exemples | Mecanisme |
|---------------------|----------|-----------|
| **Agences web** | Alsacreations, Adimeo, agences locales | Integrent l'audit a leurs refontes de sites |
| **ESN** (Entreprises de Services Numeriques) | Capgemini, Atos, Onepoint, Sopra Steria | Offrent des prestations d'accessibilite a leurs clients |
| **Consultants independants** | Freelances accessibilite, UX designers | Recommandent des outils a leurs clients |
| **Experts-comptables / Avocats** | Cabinets de conformite | Alertent leurs clients PME sur les obligations |
| **CCI / Chambres de Commerce** | France Num, CCI locales | Accompagnement a la transformation numerique |

[Source : Boscop ESN](https://boscop.fr/esn-accessibilite-numerique/) | [Source : Onisep metier](https://www.onisep.fr/ressources/univers-metier/metiers/specialiste-de-l-accessibilite-numerique)

### 5.4 Formation et certification

| Formation | Organisme | Detail |
|-----------|-----------|--------|
| Certification professionnelle accessibilite numerique | **Access42** | Finançable CPF, reconnue France Competences |
| Formation RGAA audit | **Orsys** | Formation pro, 2-3 jours |
| Formation accessibilite | **Tanaguru** | RGAA 4.1, tests et audit |
| Formation developpeur accessible | **Alsacreations** | Integrateurs et developpeurs |
| Formation "Cles de l'accessibilite" | **Cegos** | Sensibilisation, 1 jour |
| Formation accessibilite numerique | **Human Coders** | Developpeurs |

[Source : Access42 formations](https://formations.access42.net/) | [Source : Orsys](https://www.orsys.fr/formation-rgaa-audit-accessibilite-site-web-ou-application-mobile.html) | [Source : Human Coders](https://www.humancoders.com/formations/accessibilite-numerique)

Le metier de specialiste en accessibilite numerique est souvent un **consultant en ESN** ou en agence web. La penurie de profils formes constitue un facteur favorable a l'automatisation. [Source : Onisep](https://www.onisep.fr/ressources/univers-metier/metiers/specialiste-de-l-accessibilite-numerique)

---

## SECTION 6 : Synthese et recommandations

### 6.1 Resume executif

1. **Un marche en explosion reglementaire :** L'EAA entree en vigueur en juin 2025 etend l'obligation d'accessibilite a ~110 000 - 175 000 PME francaises. Le taux de conformite actuel est catastrophique (3,4% pour les grandes entreprises, probablement < 1% pour les PME).

2. **Un creneau specifiquement francais :** Aucun acteur international majeur ne couvre le referentiel RGAA 4.1.2 de maniere specifique. Les outils internationaux (axe-core, Lighthouse) couvrent les WCAG mais pas la methodologie d'audit francaise.

3. **Un concurrent direct deja positionne :** RGAA Checker (rgaa-checker.com) est le premier SaaS specifiquement RGAA sur le marche francais, avec une stack technique avancee et un positionnement SEO fort. C'est le concurrent principal a surveiller.

4. **Les overlays sont morts :** La FTC, la Commission europeenne et les tribunaux ont confirme que les overlays IA ne constituent pas une conformite valable. L'approche code-level est la seule viable.

5. **Automatisation limitee mais necessaire :** Les outils automatises ne detectent que 30-50% des problemes. Mais pour les PME qui ne peuvent pas se payer un audit a 3 000-5 000 EUR, un outil automatise a bas cout est la seule entree possible.

6. **L'enforcement s'accelere :** Les associations (ApiDV, Droit Pluriel) ont commence a assigner des entreprises en justice des novembre 2025. Cette jurisprudence va creer un precedent et accelerer les mises en conformite.

7. **Fenetre de 5 ans :** Les sites existants ont jusqu'au 28 juin 2030 pour se conformer. Cette fenetre cree un marche progressif plutot qu'un pic unique.

### 6.2 Opportunites strategiques pour AccessCheck

#### Opportunite 1 : Le "pied dans la porte" PME
- **Proposition :** Scanner automatise a prix ultra-bas (freemium ou < 30 EUR/mois) ciblant les PME qui n'ont pas les moyens d'un audit a 3 000 EUR
- **Valeur :** "Premier diagnostic" + score de conformite + rapport PDF generant la prise de conscience
- **Differenciation :** Prix accessible, specificite RGAA, simplicite d'usage (pas besoin d'expertise)

#### Opportunite 2 : Outil pour agences/consultants
- **Proposition :** White-label ou plan agence permettant aux prescripteurs (agences web, freelances) d'utiliser AccessCheck pour leurs clients
- **Valeur :** Automatiser 50%+ de l'audit pour reduire le temps (et le cout) de l'audit humain
- **Differenciation :** API, marque blanche, integration dans les workflows existants

#### Opportunite 3 : Conformite continue (monitoring)
- **Proposition :** Surveillance automatisee recurrente (hebdomadaire/mensuelle) avec alertes
- **Valeur :** Les PME mettent a jour leurs sites regulierement ; la conformite peut se degrader
- **Differenciation :** Passage de l'audit one-shot au suivi continu, justifiant un abonnement

#### Opportunite 4 : Content marketing / SEO
- **Proposition :** Devenir la reference educative RGAA pour PME (blog, guides, barometre)
- **Valeur :** Le marche est educatif ; les PME doivent d'abord comprendre pourquoi elles sont concernees
- **Differenciation :** RGAA Checker fait deja du content marketing (barometre communes) ; il faut une approche differenciee (par secteur, par region, par CMS)

### 6.3 Risques et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| **RGAA Checker capte tout le marche SaaS RGAA** | Moyenne | Eleve | Se differencier sur le segment PME (prix, simplicite) vs. leur positionnement plus technique/enterprise |
| **Les PME ignorent l'obligation jusqu'en 2030** | Elevee | Eleve | Content marketing, partenariats CCI/France Num, alertes sur les actions judiciaires |
| **L'enforcement reste faible** (amendes basses) | Moyenne | Moyen | Positionner AccessCheck sur la valeur business (SEO, audience) en plus de la conformite |
| **Changement de referentiel** (nouveau RGAA ou WCAG 3) | Faible (3-5 ans) | Moyen | Architecture modulaire, mise a jour des regles de tests |
| **Les grands acteurs internationaux localisent pour la France** | Faible-Moyenne | Eleve | Avance first-mover sur RGAA specifique, communaute francophone, prix PME |
| **Budget fondateur trop limite** (< 100 EUR/mois) | Elevee | Moyen | Utiliser stack gratuite (axe-core, Playwright, Vercel free tier), monetiser rapidement le freemium |
| **Open-source de RGAA Checker** rend la differenciation difficile | Moyenne | Moyen | Forker ou contribuer strategiquement, se differencier par UX/DX, go-to-market, et support |

### 6.4 Recommandations d'implementation

#### Phase 1 : MVP (Mois 1-3) -- Budget : 0-100 EUR/mois

**Objectif :** Scanner RGAA automatise basique, en ligne, gratuit pour les premiers utilisateurs.

- **Stack technique :** Node.js/TypeScript, axe-core comme moteur de base, Playwright pour le rendu, mapping axe-core -> criteres RGAA 4.1.2
- **Features MVP :**
  - Saisie d'URL -> scan automatique
  - Score de conformite RGAA (criteres automatisables uniquement, ~30-50/106)
  - Rapport PDF telechargeable avec liste des non-conformites
  - Mention claire : "audit partiel automatise, un audit complet necessite une verification humaine"
- **Hebergement :** Vercel (gratuit), base de donnees PostgreSQL (Supabase free tier ou Neon)
- **Go-to-market :** Landing page SEO ("audit RGAA gratuit", "conformite accessibilite PME"), LinkedIn du fondateur

#### Phase 2 : Monetisation (Mois 4-6)

- **Freemium -> Premium :**
  - Gratuit : 1 scan/mois, 5 pages max
  - Pro (29 EUR/mois) : Scans illimites, monitoring hebdomadaire, historique, export PDF premium
  - Agence (79 EUR/mois) : Multi-sites, marque blanche, API
- **Enrichissement :** Ajouter des tests RGAA specifiques au-dela d'axe-core (mapping personnalise des 106 criteres)
- **Content marketing :** Blog (guides conformite par secteur, alertes reglementaires), newsletter

#### Phase 3 : Croissance (Mois 7-12)

- **Partenariats :** Agences web, CCI, France Num, consultants accessibilite
- **Features avancees :** Integration CI/CD (GitHub Action), widget de badge conformite, module de remediation assistee par IA
- **Expansion :** Declaration d'accessibilite automatisee (obligation legale), schema pluriannuel template

#### Recommandations transversales

1. **Ne pas faire d'overlay.** Jamais. C'est un risque legal et reputationnel majeur.
2. **Etre transparent** sur les limites de l'automatisation (ne couvre que X% des criteres).
3. **Cibler le content marketing** : les PME ne savent pas encore qu'elles sont concernees. L'education est le premier canal d'acquisition.
4. **Surveiller RGAA Checker** de pres : analyser leur pricing, features, et strategies pour se positionner en complement ou en alternative.
5. **Privilegier la specificite RGAA** plutot que WCAG generique : c'est le seul moat face aux acteurs internationaux.
6. **Construire un reseau de prescripteurs** (agences, freelances) des le debut : le bouche-a-oreille professionnel est le canal le plus efficace en B2B PME.

---

## Annexe : Sources principales

### Marche et industrie
- [Business Research Insights - Digital Accessibility Service Market](https://www.businessresearchinsights.com/market-reports/digital-accessibility-service-market-118130)
- [Grand View Research - Europe Digital Accessibility Software](https://www.grandviewresearch.com/horizon/outlook/digital-accessibility-software-market/europe)
- [Mordor Intelligence - Digital Accessibility Software Market](https://www.mordorintelligence.com/industry-reports/digital-accessibility-software-market)
- [Straits Research - Digital Accessibility Market](https://straitsresearch.com/report/digital-accessibility-market)
- [Fortune Business Insights - Digital Accessibility Software](https://www.fortunebusinessinsights.com/digital-accessibility-software-market-111207)
- [Accessible.org - Financial Report Revenue](https://accessible.org/financial-report-revenue-digital-accessibility-companies/)
- [Level Access - State of Digital Accessibility 2025-2026](https://www.levelaccess.com/resources/state-of-digital-accessibility-report-2025-2026/)

### Reglementation
- [EUR-Lex - Directive 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj?locale=fr)
- [RGAA officiel](https://accessibilite.numerique.gouv.fr/)
- [Access42 - Transposition directive](https://access42.net/transposition-directive-europeenne-ue-2019-882-accessibilite-produits-services/)
- [Onepoint - EAA sanctions et controles](https://www.groupeonepoint.com/fr/publications/leuropean-accessibility-act-des-sanctions-renforcees-et-des-organes-de-controles-designes/)
- [De Gaulle Fleurance - Obligations secteur prive](https://www.degaullefleurance.com/actualites/accessibilite-numerique-nouvelles-obligations-pour-le-secteur-prive/)
- [IBA - Digital accessibility France](https://www.ibanet.org/digital-accessibility-france)
- [FEVAD - E-commerce accessibilite](https://www.fevad.com/e-commerce-et-accessibilite-numerique-ce-qui-change-a-partir-de-juin-2025/)
- [Ideance - Loi accessibilite France](https://ideance.net/blog/en/293/loi-accessibilite-numerique-france/)

### Concurrence
- [RGAA Checker - GitHub](https://github.com/EddyDezuraud/rgaa-checker)
- [RGAA Checker - Blog](https://rgaa-checker.com/blog/top-10-outils-audit-rgaa-2025)
- [Tanaguru](https://www.tanaguru.com/en/)
- [Deque - axe-core](https://www.deque.com/axe/axe-core/)
- [Access42](https://access42.net/)
- [Ipedis](https://www.ipedis.com/)
- [Koena](https://koena.net/en/)
- [Boscop](https://boscop.fr/audit-rgaa-wcag/)

### Technologie
- [GitHub axe-core](https://github.com/dequelabs/axe-core)
- [GitHub Pa11y](https://github.com/pa11y/pa11y)
- [W3C WCAG 3 Introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/)
- [W3C WCAG 3 Timeline](https://www.w3.org/WAI/GL/wiki/WCAG_3_Timeline)
- [NWS Digital - Overlays controversy](https://www.nwsdigital.com/Blog/Accessibility-Overlays-in-2025-A-Shortcut-Companies-Should-Continue-to-Avoid)
- [EcomBack - FTC accessiBe settlement](https://www.ecomback.com/blogs/ftc-and-accessibe-settle-claims-for-1m-over-ai-accessibility-overlay-widgets)
- [Accessible.org - 2026 predictions](https://accessible.org/2026-ada-website-compliance-lawsuits-ai/)

### Ecosysteme
- [BrailleNet](https://www.braillenet.org/en/digital-accessibility-2/national-and-international-standards/)
- [ApiDV - Mise en demeure](https://apidv.org/actualites/mise-en-demeure-des-entreprises-auchan-carrefour-e-leclerc-et-picard-surgeles-de-se-conformer-a-leur-obligation-d-accessibilite-numerique-pour-leurs-services-de-course-en-ligne/)
- [Droit Pluriel - Action judiciaire](https://droitpluriel.fr/mise-en-demeure-des-entreprises-auchan-carrefour-e-leclerc-et-picard-surgeles-de-se-conformer-a-leur-obligation-daccessibilite-numerique-pour-leurs-services-de-courses-en-ligne/)
- [INSEE - PME France](https://www.insee.fr/fr/statistiques/7678534?sommaire=7681078)
- [DesignGouv - Prestations accessibilite](https://design.numerique.gouv.fr/accessibilite-numerique/prestations-accessibilite-numerique/)
- [Access42 - Cout audit](https://access42.net/services/cout-audit-accessibilite-numerique/)

---

*Document genere le 6 fevrier 2026 -- Toutes les donnees sont issues de sources web publiques verifiees.*
