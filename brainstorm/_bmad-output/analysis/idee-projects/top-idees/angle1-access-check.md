# DOSSIER COMPLET : AccessCheck

## Metadata
- **Date d'analyse** : 2026-02-06
- **Angle** : 1 - Gens qui perdent de l'argent maintenant
- **Statut** : RETENUE - APPROFONDIE
- **Score** : 17/20

---

## Resume executif

**AccessCheck** est un SaaS de pre-audit automatise d'accessibilite numerique (RGAA 4.1.2) destine aux PME francaises. Depuis le 28 juin 2025, la directive europeenne sur l'accessibilite (European Accessibility Act) oblige toute entreprise de 10+ salaries ou 2M+ EUR de CA a rendre ses services numeriques accessibles. L'amende : 50 000 EUR par service non conforme, renouvelable tous les 6 mois. Seulement 3,4% des sites de grandes entreprises sont conformes. Le marche est naissant, sans dominant. AccessCheck se positionne entre l'audit expert a 4 000 EUR et les outils open-source gratuits mais complexes.

---

## 1. CONTEXTE METIER

### C'est quoi le RGAA ? (explication simple)

Le **RGAA** (Referentiel General d'Amelioration de l'Accessibilite) est la "norme francaise" qui dit comment un site web doit etre construit pour etre utilisable par tout le monde, y compris les personnes en situation de handicap (aveugles, malvoyants, sourds, handicap moteur, cognitif...).

**En pratique, ca veut dire :**
- Les images doivent avoir un texte alternatif (pour les lecteurs d'ecran)
- Les videos doivent avoir des sous-titres
- Le site doit etre navigable au clavier (pas juste a la souris)
- Les couleurs doivent avoir un contraste suffisant
- Les formulaires doivent avoir des labels clairs
- La structure HTML doit etre semantique (titres, listes, tableaux...)

Le RGAA comporte **106 criteres de controle** repartis en **13 themes** (images, cadres, couleurs, multimedia, tableaux, liens, scripts, elements obligatoires, structuration, presentation, formulaires, navigation, consultation). Chaque critere contient en moyenne 2,5 tests, soit environ 265 tests au total.

C'est la transposition francaise de la norme internationale **WCAG 2.1 niveau AA** (Web Content Accessibility Guidelines), adaptee au contexte juridique francais. La version opposable depuis le 28 juin 2025 est le **RGAA 4.1.2**.

### Pourquoi il y a un probleme MAINTENANT ?

**Avant juin 2025 :** le RGAA ne s'appliquait qu'au secteur public (sites de l'Etat, collectivites). Les entreprises privees n'etaient pas concernees. Personne dans le prive ne s'en occupait.

**Depuis le 28 juin 2025 :** la directive europeenne EAA (European Accessibility Act, Directive 2019/882) est entree en vigueur. Transposee en droit francais par le **Decret n. 2023-931**, elle etend les obligations d'accessibilite au **secteur prive**. Du jour au lendemain, ~110 000 PME avec un site web sont concernees.

**Resultat concret :**
- Seulement **3,4%** des sites internet des grandes entreprises francaises sont accessibles (Observatoire des aveugles de France, juin 2025)
- Seulement **0,4%** des sites sont entierement conformes aux normes d'accessibilite (etude sur 7 300 sites)
- Les entreprises n'ont aucune competence interne sur le sujet
- Il n'existe quasiment aucun outil self-service en francais pour se mettre en conformite

**Premiers cas concrets :** Le 7 juillet 2025, les associations ApiDV et Droit Pluriel ont mis en demeure **Auchan, Carrefour, E.Leclerc et Picard** pour inaccessibilite de leurs sites de courses en ligne. Faute de reaction, ces 4 enseignes ont ete **assignees en refere devant le Tribunal judiciaire le 12 novembre 2025**. C'est le signal fort : les poursuites ont commence.

### Contexte reglementaire precis

| Element | Detail |
|---------|--------|
| **Directive UE** | European Accessibility Act (EAA) - Directive 2019/882 du 17 avril 2019 |
| **Transposition francaise** | Decret n. 2023-931, codifie dans le Code de la consommation |
| **Date d'entree en vigueur** | 28 juin 2025 |
| **Referentiel technique** | RGAA 4.1.2 (seule version opposable depuis le 28/06/2025) |
| **Entreprises concernees** | Toute entreprise de 10+ salaries OU CA > 2M EUR |
| **Exemptes** | Micro-entreprises (< 10 salaries ET CA < 2M EUR) |
| **Delai de grace (sites existants)** | Jusqu'au 28 juin 2030 pour les services mis en ligne AVANT le 28/06/2025 |
| **Nouveaux services** | Conformes immediatement des le 28/06/2025 |
| **Obligations declaratives** | Immediates : declaration d'accessibilite + schema pluriannuel + mention en page d'accueil |
| **Autorite de controle** | DGCCRF (e-commerce), Arcom (medias), ARCEP (telecoms) |
| **Sanction non-conformite** | **50 000 EUR** par service non conforme, renouvelable tous les 6 mois |
| **Sanction obligations declaratives** | **25 000 EUR** pour absence de declaration, schema ou mention |
| **Sanction discrimination** | Jusqu'a **300 000 EUR** en cas de plainte pour discrimination |

---

## 2. LA DOULEUR (precis et chiffre)

### Qui souffre exactement ?

**Profil type : Marie, 45 ans, dirigeante d'une PME de 30 salaries (CA 4M EUR)**

Marie dirige une entreprise de vente de materiel de bureau avec un site e-commerce. Elle a entendu parler de "l'accessibilite numerique" lors d'un webinaire de sa CCI en octobre 2025. Elle n'a aucune idee de ce que c'est concretement, ni de son niveau de conformite. Son "responsable digital" est en fait le stagiaire marketing qui gere le WordPress.

**Profil secondaire : Thomas, 35 ans, responsable marketing/digital d'une PME de 80 salaries**

Thomas a recu un email de son directeur qui a lu un article sur l'amende de 50 000 EUR. Le directeur lui a dit "regarde ca, on risque quoi ?". Thomas n'a aucune competence en accessibilite. Il a googlise "audit RGAA" et a trouve des devis a 3 000-6 000 EUR avec des delais de plusieurs semaines. Il cherche une solution rapide et pas chere pour au moins savoir ou ils en sont.

**Le marche en chiffres :**

| Segment | Nombre | Source |
|---------|--------|--------|
| PME (10-249 salaries) en France | ~159 000 | INSEE / BPI France 2024 |
| dont celles avec un site web (69%) | ~110 000 | Barometre France Num 2024 |
| dont e-commerce (17%) | ~27 000 | France Num |
| Sites conformes RGAA | ~3,4% | Observatoire juin 2025 |
| **Sites NON conformes = clients potentiels** | **~106 000** | Calcul |

### De quoi souffrent-ils ? (probleme concret quotidien)

1. **Ignorance totale** : 95%+ des dirigeants de PME ne savent pas ce qu'est le RGAA ni qu'ils sont concernes
2. **Panique a la decouverte** : quand ils apprennent l'obligation et l'amende, ils ne savent pas par ou commencer
3. **Cout prohibitif** : un audit expert = 2 000 - 8 000 EUR, hors budget pour une PME qui ne voit pas le ROI
4. **Complexite technique** : 106 criteres, 265 tests, jargon technique (ARIA, DOM, alt, landmarks...)
5. **Obligation documentaire immediate** : meme si le site a un delai jusqu'en 2030, la declaration d'accessibilite et le schema pluriannuel sont exiges MAINTENANT (amende 25 000 EUR)
6. **Aucun referent interne** : pas de competence accessibilite dans l'equipe

### Combien ca coute ? (le prix de l'inaction)

| Cout | Montant | Frequence |
|------|---------|-----------|
| Amende non-conformite | 50 000 EUR | Par service, renouvelable / 6 mois |
| Amende absence declaration | 25 000 EUR | Par service |
| Amende discrimination | Jusqu'a 300 000 EUR | Par plainte |
| Audit expert ponctuel | 2 000 - 8 000 EUR | A chaque audit |
| Consultant accessibilite | 600 - 1 200 EUR/jour | Ponctuel |
| **Total risque annuel (1 site)** | **75 000 - 375 000 EUR** | - |
| **Cout AccessCheck** | **348 - 948 EUR/an** | - |

**Le ratio risque/cout est de 80x a 400x.** C'est un no-brainer pour le client.

---

## 3. LA SOLUTION (maquette textuelle)

### Ce que fait l'application

```
+------------------------------------------------------------------+
|                        ACCESSCHECK                                |
|                                                                   |
|  [1. SCANNER]  -->  [2. ANALYSER]  -->  [3. DOCUMENTER]          |
|                                                                   |
|  L'utilisateur       Le moteur          Generation auto           |
|  entre son URL       scanne toutes      des documents             |
|                      les pages avec     legaux obligatoires       |
|                      axe-core/pa11y                               |
|                      et mappe les       - Declaration             |
|                      resultats sur        d'accessibilite         |
|                      les 106 criteres   - Schema pluriannuel      |
|                      RGAA               - Plan d'actions          |
|                                           prioritise              |
|                                                                   |
|  [4. MONITORER]  -->  [5. CORRIGER]                              |
|                                                                   |
|  Scan hebdo auto      Guide de           Alertes email si         |
|  + historique         correction         regression detectee       |
|  d'evolution du       pas-a-pas pour                              |
|  score RGAA           chaque probleme                             |
|                       (code snippets                              |
|                       inclus)                                     |
+------------------------------------------------------------------+
```

### Fonctionnalites MVP (tableau P0/P1/P2)

| Priorite | Fonctionnalite | Description | Effort |
|----------|---------------|-------------|--------|
| **P0** | Scan 1 page gratuit | Hook d'acquisition. URL > score RGAA en 30 sec | 1 semaine |
| **P0** | Scan site complet | Crawler qui scanne toutes les pages (axe-core + pa11y) | 2 semaines |
| **P0** | Dashboard resultats | Score global + detail par critere RGAA (106 criteres) | 1 semaine |
| **P0** | Generation declaration d'accessibilite | PDF/HTML conforme au modele officiel RGAA | 3 jours |
| **P0** | Auth + paiement | Inscription, login, Stripe checkout | 3 jours |
| **P1** | Schema pluriannuel auto | Document de plan 3 ans genere a partir des resultats | 3 jours |
| **P1** | Plan d'actions prioritise | Liste des corrections a faire, triees par impact | 1 semaine |
| **P1** | Guide de correction | Pour chaque erreur, snippet de code correctif | 1 semaine |
| **P1** | Monitoring hebdomadaire | Re-scan automatique + alerte email si regression | 3 jours |
| **P1** | Export PDF rapport complet | Rapport d'audit telechargeaable en PDF | 3 jours |
| **P2** | Historique d'evolution | Graphique du score dans le temps | 2 jours |
| **P2** | Multi-sites | Gerer plusieurs domaines depuis un compte | 2 jours |
| **P2** | Badge accessibilite | Widget de confiance a afficher sur le site client | 1 jour |
| **P2** | API | Pour integrer dans les CI/CD des agences web | 1 semaine |
| **P2** | Marque blanche | Pour les agences web qui revendent le service | 1 semaine |

**Effort MVP (P0) : ~4-5 semaines de dev solo**

### Parcours utilisateur en 5 etapes

```
ETAPE 1 : DECOUVERTE (gratuit)
+-------------------------------------------------------+
| "Votre site est-il conforme RGAA ?"                  |
| [__________ Entrez votre URL __________] [SCANNER]   |
| Scan gratuit en 30 secondes. Aucune inscription.      |
+-------------------------------------------------------+
          |
          v
ETAPE 2 : PRISE DE CONSCIENCE (gratuit)
+-------------------------------------------------------+
| Score RGAA : 23/100                                   |
| 47 erreurs critiques detectees                        |
| >> Risque : amende 50 000 EUR possible <<             |
|                                                       |
| Erreurs detectees (apercu, 5 sur 47) :                |
| [x] 12 images sans texte alternatif                   |
| [x] 6 formulaires sans labels                         |
| [x] Contraste insuffisant sur 34 elements             |
| [x] Navigation clavier impossible sur le menu         |
| [x] Aucune structure de titres coherente              |
|                                                       |
| [ VOIR LE RAPPORT COMPLET --> inscription gratuite ]  |
+-------------------------------------------------------+
          |
          v
ETAPE 3 : RAPPORT COMPLET (inscription gratuite / essai 7 jours)
+-------------------------------------------------------+
| Rapport d'audit RGAA complet                          |
| 106 criteres analyses | 23 pages scannees            |
|                                                       |
| [Conforme: 24] [Non conforme: 47] [N/A: 35]         |
|                                                       |
| Par theme :                                           |
| Images ........... 2/13 [==--------] 15%             |
| Couleurs ......... 1/4  [==--------] 25%             |
| Formulaires ...... 3/11 [===-------] 27%             |
| Navigation ....... 5/12 [====------] 42%             |
| ...                                                   |
|                                                       |
| [ GENERER MA DECLARATION D'ACCESSIBILITE ]            |
| [ TELECHARGER LE PLAN D'ACTIONS ]                     |
+-------------------------------------------------------+
          |
          v
ETAPE 4 : CONVERSION (payant - 29/49/79 EUR/mois)
+-------------------------------------------------------+
| Pour debloquer :                                      |
| [v] Declaration d'accessibilite officielle (PDF)      |
| [v] Schema pluriannuel de mise en accessibilite       |
| [v] Plan d'actions prioritise avec code correctif     |
| [v] Monitoring hebdomadaire + alertes                 |
| [v] Re-scans illimites                                |
|                                                       |
| STARTER 29 EUR/mois | PRO 49 EUR/mois | AGENCE 79 EUR|
| [ COMMENCER MAINTENANT ]                              |
+-------------------------------------------------------+
          |
          v
ETAPE 5 : FIDELISATION (usage continu)
+-------------------------------------------------------+
| Dashboard AccessCheck                                 |
|                                                       |
| Score RGAA : 23 --> 41 --> 58 --> 72 (progression)   |
| Prochain scan auto : dans 3 jours                     |
| Declaration mise a jour : 15/01/2026                  |
|                                                       |
| [!] 2 nouvelles regressions detectees                 |
|     > Alt manquant sur hero-image.jpg (page /promo)   |
|     > Contraste insuffisant (nouveau bandeau rouge)   |
|                                                       |
| [ VOIR LES CORRECTIONS SUGGEREES ]                    |
+-------------------------------------------------------+
```

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment precis | Urgence (1-5) |
|-------------|--------------|---------------|
| **Article de presse / webinaire CCI** sur l'obligation RGAA et l'amende 50 000 EUR | Le dirigeant decouvre qu'il est concerne | 3/5 |
| **Email de l'avocat / comptable** qui alerte sur le risque legal | Le professionnel recommande de se mettre en conformite | 4/5 |
| **Controle DGCCRF** annonce ou visite de la repression des fraudes | L'entreprise doit prouver sa bonne foi rapidement | 5/5 |
| **Plainte d'un utilisateur handicape** ou d'une association (type ApiDV) | L'entreprise recoit une mise en demeure | 5/5 |
| **Appel d'offres public** qui exige la conformite RGAA du prestataire | L'entreprise risque de perdre un marche | 4/5 |
| **Concurrent affiche un badge accessibilite** ou communique dessus | Le dirigeant se sent en retard, peur de l'image | 2/5 |
| **Redesign du site web** prevu, l'agence mentionne le RGAA | Moment de decision, budget deja alloue | 3/5 |
| **Actualite medias** : Auchan/Carrefour/Leclerc assignes en justice (nov 2025) | Prise de conscience collective, "si les gros sont attaques..." | 4/5 |
| **Reception du cold email AccessCheck** : "Score RGAA de votre site : 23/100" | Choc, prise de conscience immediate et personnalisee | 4/5 |

**Declencheur le plus puissant et actionnable :** le cold email avec le score du site. C'est nous qui creons l'urgence.

---

## 5. ACQUISITION CLIENT

### Strategie multi-canal

#### Canal 1 : SEO (moyen terme, 2-4 mois)

**Mots-cles cibles a fort intent d'achat :**

| Mot-cle | Intent | Priorite |
|---------|--------|----------|
| "audit RGAA gratuit" | Transactionnel | P0 |
| "declaration accessibilite obligatoire" | Informationnel > conversion | P0 |
| "RGAA conformite PME" | Informationnel > conversion | P0 |
| "amende accessibilite numerique 50 000" | Informationnel (peur) | P0 |
| "accessibilite site web obligatoire 2025" | Informationnel | P1 |
| "schema pluriannuel accessibilite modele" | Transactionnel | P1 |
| "RGAA e-commerce obligation" | Transactionnel (niche) | P1 |
| "test accessibilite site web" | Transactionnel | P0 |
| "verifier conformite RGAA" | Transactionnel | P0 |

**Strategie content :**
- Page d'accueil = outil de scan gratuit (SEO + conversion)
- Blog : 1 article/semaine sur les obligations, sanctions, corrections
- Templates gratuits : modele de declaration d'accessibilite, schema pluriannuel
- Glossaire RGAA (pages longue traine)

#### Canal 2 : Scan proactif + Cold Email (court terme, semaine 1)

**Le scanner EST le generateur de leads.**

1. Scraper les sites des PME francaises via l'API annuaire-entreprises.data.gouv.fr
2. Scanner automatiquement leur page d'accueil (gratuit, pas besoin de leur accord)
3. Envoyer un cold email personnalise :

```
Objet : Score accessibilite de [nom-du-site.fr] : 23/100

Bonjour [Prenom],

Depuis juin 2025, votre site [nom-du-site.fr] doit etre conforme
au RGAA (accessibilite numerique). L'amende : 50 000 EUR par
service non conforme.

Nous avons scanne votre page d'accueil : votre score est de 23/100.
47 erreurs critiques detectees.

>> Voir votre rapport gratuit : [lien personnalise]

La bonne nouvelle : la plupart des corrections sont simples.
Et votre declaration d'accessibilite obligatoire peut etre
generee en 5 minutes.

[Prenom], fondateur d'AccessCheck
```

**Volume :** 100-200 emails/jour (via Lemlist ou Instantly) = 3 000-6 000 contacts/mois

#### Canal 3 : Freemium viral (moyen terme)

- Le scan gratuit 1 page est accessible sans inscription
- Le rapport complet demande un email
- Le rapport contient un lien "Faites tester le site de vos partenaires"
- Les agences web qui utilisent l'outil gratuit deviennent des ambassadeurs potentiels

#### Canal 4 : Partenariats (moyen terme)

- **CCI / chambres de commerce** : proposer des webinaires gratuits "Votre PME est-elle conforme RGAA ?"
- **Experts-comptables / avocats d'affaires** : le recommander a leurs clients (programme d'affiliation)
- **Agences web** : plan marque blanche (P2) pour qu'elles integrent AccessCheck dans leur offre

### Message d'accroche (1 phrase)

> **"Votre site est-il conforme RGAA ? Scan gratuit en 30 secondes. Amende possible : 50 000 EUR."**

### Lead magnet

| Lead magnet | Format | Canal |
|-------------|--------|-------|
| Scan gratuit 1 page | Outil en ligne | Site web |
| "Guide PME : se mettre en conformite RGAA en 10 etapes" | PDF 15 pages | Blog + cold email |
| "Modele de declaration d'accessibilite 2026" | DOCX / PDF | Blog SEO |
| "Checklist : les 20 erreurs RGAA les plus courantes" | PDF 1 page | Linkedin + email |
| Webinaire "Accessibilite : ce qui change pour les PME" | Live 45 min | CCI + Linkedin |

---

## 6. BUSINESS MODEL

### Pricing par segment

| Plan | Prix | Cible | Inclus |
|------|------|-------|--------|
| **GRATUIT** | 0 EUR | Tout le monde | 1 scan / 1 page / score + 5 erreurs |
| **STARTER** | 29 EUR/mois | TPE / petits sites (< 50 pages) | Scan complet illimite, dashboard, declaration d'accessibilite, plan d'actions, 1 scan auto/semaine |
| **PRO** | 49 EUR/mois | PME / sites moyens (< 200 pages) | Tout Starter + schema pluriannuel, guides de correction avec code, historique, export PDF, 3 scans auto/semaine |
| **AGENCE** | 79 EUR/mois | Agences web / multi-sites | Tout Pro + 5 sites, marque blanche, API, rapport client personnalise |
| **ENTREPRISE** | Sur devis (149-299 EUR/mois) | ETI / grands sites (500+ pages) | Illimite, SLA, support dedie, scan quotidien |

### Comparaison avec les alternatives

| Solution | Cout | Delai | Couverture | Self-service ? |
|----------|------|-------|------------|----------------|
| **Audit expert (Access42, Boscop...)** | 2 000 - 8 000 EUR (ponctuel) | 3-6 semaines | 100% des 106 criteres (manuel) | Non |
| **Consultant accessibilite** | 600 - 1 200 EUR/jour | Variable | 100% | Non |
| **RGAA Checker** | 4,99 - 14,99 EUR (credits) | Instantane | ~60% (automatise) | Oui |
| **Helplee** | Variable (basee sur trafic) | Instantane | Widget + monitoring | Oui |
| **AccessiWay / accessiBe** | 30 - 100 EUR/mois | Instantane | Widget overlay (critique, controverse) | Oui |
| **Outils gratuits (axe, pa11y, WAVE)** | 0 EUR | Instantane | ~30-57% (WCAG, pas RGAA) | Technique |
| **Ara (outil Dinum)** | 0 EUR | Manuel | 100% (mais expert requis) | Non |
| **AccessCheck** | **29 - 79 EUR/mois** | **Instantane** | **~57% automatise + documents legaux** | **Oui** |

### ROI calcule pour le client

```
SCENARIO : PME avec 1 site web, plan PRO a 49 EUR/mois

Cout annuel AccessCheck :              588 EUR
Cout alternative (audit expert) :    4 000 EUR  (x1/an minimum)
Economie vs audit expert :          3 412 EUR/an

Risque sans rien faire :
- Amende non-conformite :           50 000 EUR  (renouvelable/6 mois)
- Amende absence declaration :      25 000 EUR
- Total risque annuel :            125 000 EUR

ROI = (risque evite - cout AccessCheck) / cout AccessCheck
ROI = (125 000 - 588) / 588 = 21 155%

Meme en ne comptant que l'economie vs audit expert :
ROI = 3 412 / 588 = 580%
```

### Projections de revenus (scenario conservateur)

| Mois | Clients payants | MRR | ARR |
|------|----------------|-----|-----|
| M3 (lancement) | 20 | 980 EUR | 11 760 EUR |
| M6 | 80 | 3 920 EUR | 47 040 EUR |
| M9 | 180 | 8 820 EUR | 105 840 EUR |
| M12 | 350 | 17 150 EUR | 205 800 EUR |

**Hypothese :** mix 40% Starter (29 EUR), 40% Pro (49 EUR), 20% Agence (79 EUR) = ARPU moyen ~49 EUR/mois.
**Taux de conversion freemium --> payant :** 2-3% (standard SaaS).
**Pour atteindre 350 clients payants en 12 mois, il faut ~12 000 scans gratuits.** A 200 cold emails/jour + SEO, c'est atteignable.

---

## 7. CONCURRENCE (analyse approfondie)

### Mapping concurrentiel

| Concurrent | Type | Prix | Forces | Faiblesses | Menace |
|-----------|------|------|--------|------------|--------|
| **RGAA Checker** (rgaa-checker.com) | SaaS freemium | Gratuit (2 scans/mois) puis credits 4,99-14,99 EUR | Focus RGAA, 106 criteres, interface FR, IA, blog SEO actif | Pas de monitoring continu, pas de generation de documents legaux, modele a credits (pas recurrent) | ELEVEE |
| **Helplee** (helplee.fr) | SaaS + widget | Variable (base sur trafic) | Audit + widget, monitoring continu, reference FranceNum | Widget (meme critique que les overlays), prix opaque | MOYENNE |
| **AccessiWay** (accessiway.fr) | Widget overlay | ~30-100 EUR/mois | 1 500+ clients FR, notoriete, partenariats | Widget overlay = fausse accessibilite, critique par experts, risque juridique accru pour les clients | FAIBLE |
| **accessiBe** (accessibe.com) | Widget IA overlay | ~49-299 USD/mois | Leader mondial, leve 50M$+ | **Amende 1M$ de la FTC** (janvier 2025) pour publicite mensongere. 25% des proces ADA visent des sites avec overlays. Pas RGAA. | FAIBLE |
| **UserWay** (userway.org) | Widget overlay | ~49-299 USD/mois | Grande base clients | Focus US/ADA, pas RGAA, meme probleme overlay | FAIBLE |
| **Tanaguru** (tanaguru.com) | Open source + services | Open source (outil), services payants | Historique FR, reference technique | Plus maintenu activement, complexe, pas self-service PME | FAIBLE |
| **Asqatasun** (asqatasun.org) | Open source | Gratuit | Complet, supporte RGAA | Technique, pas d'interface PME-friendly, projet communautaire | FAIBLE |
| **Ara** (ara.numerique.gouv.fr) | Outil gratuit (Dinum) | Gratuit | Officiel, exhaustif | Outil expert, 100% manuel, pas pour PME | FAIBLE |
| **Audits manuels** (Access42, Boscop, Akse, Ipedis...) | Service expert | 2 000 - 8 000 EUR | 100% des criteres, certification | Cher, lent, ponctuel, pas de monitoring | COMPLEMENTAIRE |
| **axe-core / pa11y / WAVE** | Outils gratuits open source | 0 EUR | Puissants, fiables | WCAG pas RGAA, technique, pas de documents legaux, pas de monitoring | COMPLEMENTAIRE |

### Le paysage concurrentiel en 1 image

```
                    PRIX
                    ^
            Cher    |   Access42, Boscop     (audit expert complet)
          4000+ EUR |        Ipedis
                    |
                    |
           100 EUR  |   accessiBe, AccessiWay  (overlays controverses)
                    |       Helplee
                    |
            49 EUR  |   >>> AccessCheck <<<     (le sweet spot)
                    |   RGAA Checker (credits)
                    |
          Gratuit   |   axe-core, pa11y, WAVE, Ara  (techniques/experts)
                    +----------------------------------------->
                      Technique/Expert          Self-service PME
                      (dev requis)              (clic et c'est fait)
```

### Angle differenciateur (1 phrase)

> **"Le seul outil qui scanne votre site ET genere automatiquement vos documents legaux RGAA obligatoires (declaration + schema pluriannuel) en 5 minutes, pour 29 EUR/mois au lieu de 4 000 EUR d'audit."**

### Avantages concurrentiels vs RGAA Checker (menace principale)

| Critere | RGAA Checker | AccessCheck |
|---------|-------------|-------------|
| Modele de prix | Credits (ponctuel) | Abonnement (recurrent, monitoring) |
| Declaration d'accessibilite | Non | Oui, generation automatique |
| Schema pluriannuel | Non | Oui, generation automatique |
| Monitoring continu | Non | Oui, scan hebdo + alertes |
| Guide de correction | Partiel | Oui, avec snippets de code |
| Historique d'evolution | Non | Oui, graphique de progression |
| Plan agence / multi-sites | Non | Oui |

**RGAA Checker est un bon outil de scan, mais pas une solution de conformite.** AccessCheck est une solution complete : scan + documents + monitoring + correction.

---

## 8. TECHNIQUE

### Complexite : 3.5/5

**Pourquoi pas 5/5 :** les librairies open source (axe-core, pa11y) font 80% du travail technique. Le mapping WCAG -> RGAA est documentable. La generation de PDF est un probleme resolu.

**Pourquoi pas 2/5 :** le crawler doit etre robuste (sites WordPress, SPA React, sites avec login, sites lents...). Le mapping axe-core -> criteres RGAA 4.1.2 necessite un travail de correspondance serieux (106 criteres, ~265 tests). Le monitoring continu necessite une infra de workers asynchrones.

### Temps MVP estime

| Phase | Duree | Livrable |
|-------|-------|----------|
| **Semaine 1-2** | 2 semaines | Moteur de scan (Playwright + axe-core + mapping RGAA) |
| **Semaine 3** | 1 semaine | Frontend : landing page + formulaire scan + dashboard resultats |
| **Semaine 4** | 1 semaine | Generation declaration d'accessibilite + schema pluriannuel (PDF) |
| **Semaine 5** | 1 semaine | Auth (Supabase) + Paiement (Stripe) + deploiement |
| **Semaine 6** | 1 semaine | Tests, polish, cold email setup, lancement beta |

**Total MVP : 6 semaines** (dev solo, temps plein)
**Total MVP : 8-10 semaines** (dev solo, temps partiel / side project)

### Stack technique detaillee

```
FRONTEND (Vercel)
+------------------------------------------+
| Next.js 14+ (App Router)                 |
| React + TypeScript                       |
| Tailwind CSS + shadcn/ui                 |
| react-pdf (generation documents)         |
| Recharts (graphiques evolution)          |
+------------------------------------------+
         |
         | API Routes / Server Actions
         v
BACKEND (Vercel + Workers)
+------------------------------------------+
| Next.js API Routes (REST)                |
| Supabase (PostgreSQL + Auth + Storage)   |
| Stripe (paiement)                        |
| Bull/BullMQ (file d'attente de scans)    |
| Redis (cache + queue)                    |
+------------------------------------------+
         |
         v
WORKERS DE SCAN (Railway ou Fly.io)
+------------------------------------------+
| Node.js worker process                   |
| Playwright (headless Chromium)           |
| @axe-core/playwright                     |
| Crawler maison (discovery des pages)     |
| Mapping RGAA 4.1.2 (JSON de regles)     |
+------------------------------------------+
         |
         v
STOCKAGE
+------------------------------------------+
| Supabase PostgreSQL : comptes, scans,    |
|   resultats, historique                  |
| Supabase Storage : rapports PDF generes  |
| Redis (Upstash) : cache + job queue      |
+------------------------------------------+
```

### Cout infrastructure mensuel

| Service | Cout | Usage |
|---------|------|-------|
| Vercel (Pro) | 20 EUR/mois | Frontend + API |
| Supabase (Free puis Pro) | 0 - 25 EUR/mois | BDD + Auth + Storage |
| Railway ou Fly.io | 5 - 20 EUR/mois | Workers Playwright |
| Upstash Redis | 0 - 10 EUR/mois | Cache + Queue |
| Domaine + DNS | 1 EUR/mois | accesscheck.fr |
| Lemlist ou Instantly | 30 - 50 EUR/mois | Cold email (optionnel, peut demarrer gratuit) |
| **TOTAL** | **26 - 76 EUR/mois** | **Dans le budget < 100 EUR** |

### Architecture du moteur de scan

```
1. Utilisateur entre URL
         |
2. API cree un job dans la queue (BullMQ/Redis)
         |
3. Worker prend le job :
   a. Lance Playwright (headless Chromium)
   b. Navigue vers l'URL
   c. Decouvre les liens internes (crawler)
   d. Pour chaque page (max 50 en Starter, 200 en Pro) :
      - Injecte axe-core via @axe-core/playwright
      - Execute l'analyse axe-core
      - Recupere les violations, passes, incomplete
   e. Mappe chaque violation axe-core vers le critere RGAA 4.1.2
      correspondant (via table de correspondance JSON)
   f. Calcule le score RGAA (criteres conformes / criteres applicables)
         |
4. Resultat stocke en PostgreSQL (Supabase)
         |
5. Webhook notifie le frontend (ou polling)
         |
6. Dashboard affiche les resultats en temps reel
```

### Mapping axe-core -> RGAA (le coeur technique)

Le RGAA 4.1.2 definit 106 criteres. Axe-core teste des regles WCAG. Il faut creer une **table de correspondance** :

```json
{
  "rgaa_criterion": "1.1",
  "rgaa_description": "Chaque image porteuse d'information a-t-elle une alternative textuelle ?",
  "axe_rules": ["image-alt", "input-image-alt", "area-alt"],
  "auto_testable": true,
  "coverage": "full"
}
```

Environ **50-60% des criteres RGAA** sont testables automatiquement via axe-core. Les 40-50% restants necessitent un audit manuel (sens des alternatives textuelles, pertinence des descriptions, coherence editoriale...).

**Strategie :** pour les criteres non testables automatiquement, afficher "Verification manuelle recommandee" avec un guide explicatif et, en upsell, proposer un partenaire expert.

### Points impressionnants pour le CV

| Point | Impact CV |
|-------|-----------|
| **Crawler web distribue** avec Playwright + queue de jobs | Architecture backend avancee |
| **Moteur de regles metier** (mapping axe-core -> RGAA, 106 criteres) | Logique metier complexe, RegTech |
| **Generation de documents legaux** automatisee (PDF) | Automatisation, conformite |
| **Systeme de monitoring continu** avec alertes | Architecture event-driven |
| **SaaS complet solo** : auth, paiement, dashboard, workers | Full-stack end-to-end |
| **Sujet reglementaire EU** (EAA, RGAA) | Connaissance du domaine LegalTech/RegTech |
| **Cold email + scraping** comme canal d'acquisition | Growth hacking, marketing technique |
| **Freemium avec conversion** mesuree | Product-led growth, SaaS metrics |

---

## 9. RISQUES ET MITIGATIONS

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|------------|
| **Peu de controles DGCCRF en 2026** (l'urgence percue baisse) | Moyenne | Eleve | L'obligation de declaration est immediate (25 000 EUR). Les associations attaquent deja (Auchan, Carrefour). Cold email avec score = on cree l'urgence. |
| **Les PME s'en foutent** ("ca fait 10 ans que...") | Moyenne | Eleve | C'est NOUVEAU pour le prive (avant c'etait que le public). Les premieres poursuites sont la. Le cold email avec score personnalise casse l'indifference. |
| **axe-core ne couvre que ~57%** des criteres | Certaine | Moyen | Se positionner comme PRE-audit + documents legaux. Afficher clairement "X criteres testes automatiquement, Y necessitent un audit manuel". Partenariat avec des experts pour upsell. |
| **RGAA Checker prend le marche** | Moyenne | Eleve | Differenciation par les documents legaux + monitoring continu + modele abo. RGAA Checker est sur un modele credits, pas recurrent. Se differencier sur la "solution complete" pas juste le scan. |
| **Un gros acteur (Google, Deque) lance un outil gratuit** | Faible | Tres eleve | Serait un outil WCAG generique, pas RGAA specifique. La generation de documents legaux francais est notre moat. Se diversifier vers l'upsell agences/experts. |
| **Complexite technique du crawler** (sites SPA, CMS divers) | Moyenne | Moyen | Playwright gere les SPA. Commencer par les CMS courants (WordPress = 60% des sites). Iterer sur les cas edge. |
| **RGPD / cold email** (limites legales) | Faible | Moyen | Utiliser l'interet legitime (B2B). Respecter les regles : opt-out facile, pas plus de 3 relances. Privileger le SEO a moyen terme. |

---

## 10. PLAN DE LANCEMENT (12 premieres semaines)

| Semaine | Action | Objectif |
|---------|--------|----------|
| S1 | Setup projet, design DB, prototype moteur de scan | Scan 1 page fonctionnel |
| S2 | Crawler + scan multi-pages + mapping RGAA | Scan complet d'un site |
| S3 | Landing page + formulaire scan gratuit + dashboard | Outil utilisable |
| S4 | Generation PDF (declaration + schema pluriannuel) | Documents legaux auto |
| S5 | Auth Supabase + Stripe + plans tarifaires | Monetisation prete |
| S6 | Tests, bugs, polish, deploiement production | **LANCEMENT BETA** |
| S7 | Cold email : scraper 1 000 sites de PME, envoyer les scores | Premiers leads |
| S8 | SEO : publier 5 articles (obligations, sanctions, guide) | Trafic organique |
| S9 | Iterer sur les retours beta, corriger bugs | Product-market fit |
| S10 | Cold email batch 2 : 2 000 sites supplementaires | Premiers clients payants |
| S11 | Monitoring hebdo + alertes email | Retention / stickiness |
| S12 | Bilan : MRR, churn, NPS, ajustement pricing | **Objectif : 20 clients payants, ~1 000 EUR MRR** |

---

## 11. METRIQUES DE SUCCES

| Metrique | M3 | M6 | M12 |
|----------|----|----|-----|
| Scans gratuits realises | 500 | 3 000 | 15 000 |
| Comptes crees (email) | 150 | 900 | 4 500 |
| Clients payants | 20 | 80 | 350 |
| MRR | 980 EUR | 3 920 EUR | 17 150 EUR |
| Churn mensuel | < 8% | < 5% | < 4% |
| Cout acquisition client (CAC) | < 50 EUR | < 30 EUR | < 20 EUR |
| Lifetime Value (LTV, 12 mois) | ~530 EUR | ~530 EUR | ~530 EUR |
| LTV/CAC | > 10 | > 17 | > 26 |

---

## 12. VERDICT FINAL

### Score /20 (actualise)

| Critere | Note | Justification |
|---------|------|---------------|
| **Intensite douleur** | 4/5 | Amende 50 000 EUR en vigueur. Premieres poursuites (Auchan, Carrefour, nov 2025). Obligation declarative immediate. Mais delai de grace 2030 pour sites existants reduit l'urgence percue. |
| **Facilite acquisition** | 5/5 | SEO massif (intent "RGAA obligatoire"). Cold email avec score personnalise = taux d'ouverture eleve. Freemium = conversion naturelle. |
| **Simplicite vente** | 4/5 | "Scan gratuit en 30 sec, amende 50 000 EUR." Valeur comprise instantanement. Prix PME (29-79 EUR) vs audit (4 000 EUR). |
| **Faisabilite solo** | 4/5 | 6 semaines de dev avec les librairies existantes. Stack Next.js + Supabase + Playwright. Infra < 100 EUR/mois. Le mapping RGAA est le vrai travail. |

### **TOTAL : 17/20 -- FAISABLE, RENTABLE, URGENT**

### Pourquoi AccessCheck va marcher

1. **Le timing est parfait** : l'obligation est active depuis 7 mois, les premieres poursuites sont la, mais 96,6% des sites ne sont pas conformes. Le marche est immense et vierge.
2. **Le canal d'acquisition est unique** : l'outil LUI-MEME scanne les sites des prospects. Le cold email contient leur score reel. C'est la demo la plus puissante possible.
3. **La concurrence est faible** : pas de dominant RGAA en France. RGAA Checker est sur un modele credits, pas de documents legaux. Les overlays sont controverses. Les experts sont chers.
4. **Le business model est sain** : SaaS recurrent, faible churn (obligation legale permanente), cout marginal quasi nul par client additionnel.
5. **C'est faisable seul** : les briques techniques existent (axe-core, Playwright). Le mapping RGAA est un one-time effort. L'infra est economique.

---

## SOURCES

### Reglementaire
- [Directive EAA - economie.gouv.fr](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/la-nouvelle-directive-europeenne-accessibilite-pour-des-produits-et-des-services-accessibles-aux-personnes-en-situation)
- [RGAA officiel - accessibilite.numerique.gouv.fr](https://accessibilite.numerique.gouv.fr/)
- [Declaration d'accessibilite - modele officiel](https://accessibilite.numerique.gouv.fr/obligations/declaration-accessibilite/)
- [Loi accessibilite juin 2025 - Novius](https://www.novius.com/actualites/loi-accessibilite-numerique-2025)
- [RGAA 2025 nouvelles regles - Agence Churchill](https://www.agence-churchill.fr/blog/rgaa-accessibilite/)
- [Obligations e-commerce - FEVAD](https://www.fevad.com/e-commerce-et-accessibilite-numerique-ce-qui-change-a-partir-de-juin-2025/)
- [EAA impact France - Inclusive Web](https://www.inclusiveweb.co/accessibility-resources/eaa-wakeup-call)

### Marche et statistiques
- [INSEE - Entreprises et numerique](https://www.insee.fr/fr/statistiques/8616863?sommaire=8616883)
- [Barometre France Num 2024](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2024-perception)
- [PME en France - chiffres cles](https://tool-advisor.fr/blog/tpe-pme-chiffres/)
- [Digital Accessibility Software Market](https://www.marketgrowthreports.com/market-reports/digital-accessibility-software-market-105034)

### Actualites et jurisprudence
- [Mise en demeure Auchan, Carrefour, Leclerc, Picard - Droit Pluriel](https://droitpluriel.fr/mise-en-demeure-des-entreprises-auchan-carrefour-e-leclerc-et-picard-surgeles-de-se-conformer-a-leur-obligation-daccessibilite-numerique-pour-leurs-services-de-courses-en-ligne/)
- [Assignation en justice 4 distributeurs - ecommercemag.fr](https://www.ecommercemag.fr/retail-1220/distribution-4-geants-assignes-en-justice-pour-manquement-a-laccessibilite-54010)
- [accessiBe amende 1M$ FTC](https://www.lflegal.com/2025/01/ftc-accessibe-million-dollar-fine/)
- [Overlays attirent les proces](https://www.accessibility.works/blog/avoid-accessibility-overlay-tools-toolbar-plugins/)

### Concurrence
- [RGAA Checker](https://rgaa-checker.com/)
- [Helplee](https://helplee.fr/)
- [AccessiWay](https://www.accessiway.fr/)
- [accessiBe](https://accessibe.com/)
- [Tanaguru](https://www.tanaguru.com/en/)
- [Asqatasun](https://asqatasun.org/)
- [Access42](https://access42.net/)
- [Boscop](https://boscop.fr/audit-rgaa-wcag/)
- [Top 10 outils audit RGAA 2025](https://rgaa-checker.com/blog/top-10-outils-audit-rgaa-2025)

### Technique
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [axe-core/playwright npm](https://www.npmjs.com/package/axe-playwright)
- [axe-core automated coverage report](https://www.deque.com/automated-accessibility-testing-coverage/)
- [axe-core vs pa11y](https://www.craigabbott.co.uk/blog/axe-core-vs-pa11y/)
- [Barometre accessibilite communes 2026](https://rgaa-checker.com/blog/barometre-accessibilite-communes-2026)
