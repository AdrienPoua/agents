# Recherche de Domaine BMAD - EcheancImmo (#44)
## Calendrier de conformite pour professionnels de l'immobilier

**Date** : 11 fevrier 2026
**Chercheur** : Agent BMAD Domain Research
**Statut** : COMPLET - 6 etapes executees

---

## ETAPE 1 : INITIALISATION

### 1.1 Scope de la recherche

**Domaine** : Conformite reglementaire des professionnels de l'immobilier en France
**Aspect specifique** : Echeances de renouvellement (carte professionnelle CPI, formation continue ALUR 42h, RC Pro, garantie financiere) et consequences des manquements
**Marche geographique** : France metropolitaine + DOM
**Cible utilisateurs** : TPE et independants du secteur immobilier (agents, mandataires, syndics, diagnostiqueurs)
**Profil fondateur** : Solo dev JS/TS, budget < 100 EUR/mois

### 1.2 Sources cles identifiees

- **Registres officiels** : CCI France (fichier national des professionnels de l'immobilier), ORIAS (intermediaires assurance/banque/finance)
- **Cadre legislatif** : Loi Hoguet (1970), Loi ALUR (2014), Loi Le Meur (2024), decrets formation continue
- **Syndicats professionnels** : FNAIM, UNIS, SNPI
- **Assureurs specialises** : GALIAN-SMABTP (30 000+ professionnels assures)
- **Organismes de formation** : MaFormationImmo, Immo-Formation, Lefebvre Dalloz
- **Donnees marche** : ImmoMatin, Immo2.pro, Journal de l'Agence, MeilleursReseaux.com
- **PropTech** : Observatoires PropTech, BPI France

### 1.3 Questions de recherche

1. Quelle est la taille reelle du marche adressable (nombre de professionnels concernes) ?
2. Existe-t-il un concurrent SaaS direct sur le creneau "calendrier de conformite immobilier" ?
3. Quelles sont les sanctions reelles (pas juste theoriques) en cas de manquement ?
4. Quel est le risque de simplification reglementaire qui eliminerait le besoin ?
5. La faisabilite technique est-elle realiste pour un solo dev a < 100 EUR/mois ?

---

## ETAPE 2 : ANALYSE DE L'INDUSTRIE

### 2.1 Taille et structure du marche immobilier francais

Le marche immobilier francais est l'un des plus structures et reglementes d'Europe. Voici les chiffres actualises au 1er janvier 2025, issus des statistiques CCI France :

**Cartes professionnelles actives (CCI France, 01/01/2025)** :
- **Transaction (carte T)** : 42 221 cartes (-1 611 vs 2024)
- **Gestion (carte G)** : 15 437 cartes (-176 vs 2024)
- **Syndics (carte S)** : 5 088 cartes (-141 vs 2024)
- **Agents commerciaux** : 80 424 attestations (-10 877 vs 2024)
- **Salaries habilites** : 60 750 cartes (-4 947 vs 2024)

Source : [ImmoMatin - Statistiques CCI 2025](https://www.immomatin.com/franchise/reseaux-franchise/immobilier-15-847-cartes-professionnelles-delivrees-par-les-cci-en-2025-par-rapport-a-2024.html), [CNACIM - Statistiques 2025](https://www.cnacim.immo/blog/statistiques-2025-cartes-professionnelles-immobilier-cci-france/)

**Diagnostiqueurs immobiliers** :
- **~12 000 professionnels actifs** dans le diagnostic immobilier
- 3 462 disposant d'une habilitation DPE au 16/12/2024
- 2 995 auditeurs energetiques certifies en mars 2025
- Certification valable 7 ans (6 certifications obligatoires depuis l'arrete du 01/07/2024)

Source : [Diagactu - Ce qui attend les diagnostiqueurs en 2025](https://www.diagnostiqueur-immobilier.fr/profession/diagnostiqueurs-immobiliers-ce-qui-vous-attend-en-2025/), [Ecologie.gouv.fr](https://www.ecologie.gouv.fr/politiques-publiques/diagnostiqueur-immobilier-profession-reglementee)

**Estimation du marche adressable total** :

| Segment | Nombre | Besoin conformite |
|---------|--------|-------------------|
| Titulaires cartes T/G/S | ~62 746 | CPI + ALUR + RC Pro + GF |
| Agents commerciaux | ~80 424 | Attestation + ALUR + RC Pro |
| Salaries habilites | ~60 750 | Attestation + ALUR |
| Diagnostiqueurs | ~12 000 | Certifications + RC Pro + DPE |
| **TOTAL** | **~216 000** | **Echeances multiples** |

> **Note** : L'estimation initiale du projet (135K) est en dessous de la realite. Le marche adressable reel avoisine les 200-216K professionnels, mais la cible prioritaire (titulaires de cartes + mandataires independants) se situe autour de **143K** (62 746 titulaires + 80 424 agents commerciaux).

### 2.2 Dynamiques du marche

**Conjoncture 2024-2025** :
- Marche en crise : seulement 750 000 transactions en 2024 (vs. ~1,1M au pic)
- Baisse de -15 847 cartes professionnelles en un an (-10% sur les agents commerciaux)
- Plus de 1 200 fermetures d'agences en 2024
- Signes timides de reprise debut 2025

Source : [Imop - Panorama agences 2026](https://www.imop.fr/blog/le-marche-de-immobilier-et-ses-tendances/les-agences-immobilieres)

**Structure du marche des agences** :
- Agences independantes : ~45 000 etablissements (45%)
- Reseaux de franchises : ~30 000 agences (30%)
- Reseaux de mandataires : ~20 000 conseillers actifs (20%)
- Agences digitales / hybrides : ~5 000 structures (5%)
- CA total du secteur : ~12,2 milliards EUR en 2025

Source : [Revue-Immo - Nombre agences France 2025](https://revue-immo.com/agences-immobilieres-france/)

**Mandataires - un segment en croissance** :
Les reseaux de mandataires continuent leur progression malgre la crise :
- **IAD France** : 15 315 mandataires (02/2026), leader inconteste
- **SAFTI** : ~5 700 mandataires
- **BSK Immobilier** : ~4 600 mandataires
- **Proprietes-Privees** : ~3 300 mandataires
- **Capifrance** : ~2 700 conseillers
- Pres d'une centaine de reseaux actifs au total

Source : [Immo2.pro - Palmares 2026](https://immo2.pro/tendances-immobilier/classement-chiffres-et-statistiques-immobilier/classement-des-reseaux-de-mandataires-immobiliers-le-palmares-2026/), [MeilleursReseaux](https://meilleursreseaux.com/immobilier/mandataires/)

### 2.3 Tendances macro impactantes

1. **Consolidation en cours** : Le marche traverse une phase de destruction creatrice. La baisse des effectifs pousse les professionnels restants a optimiser leurs couts et a se professionnaliser davantage -- favorable a un outil de conformite.

2. **Montee des mandataires independants** : Ces professionnels, souvent sans back-office, sont les plus vulnerables aux oublis d'echeances. Segment ideal pour EcheancImmo.

3. **Complexification reglementaire** : Loi Le Meur (2024), reforme DPE (2026), plafond honoraires location (2026), obligation DPE collectif coproprietes... Chaque nouvelle reglementation ajoute des echeances a gerer.

4. **Digitalisation CCI** : Le fichier national des professionnels de l'immobilier est en ligne sur professionnels-immobilier.cci.fr, avec export Excel possible. Pas d'API publique identifiee, mais les donnees sont structurees.

---

## ETAPE 3 : PAYSAGE CONCURRENTIEL

### 3.1 Recherche de concurrents directs

**Resultat : AUCUN concurrent SaaS direct identifie** sur le creneau specifique "calendrier de conformite personnalise pour professionnels de l'immobilier en France".

La recherche approfondie confirme un **vide concurrentiel** sur ce positionnement precis.

### 3.2 Solutions adjacentes existantes

#### Logiciels metier immobilier (CRM/ERP)

| Solution | Description | Module conformite |
|----------|-------------|-------------------|
| **Apimo** | Logiciel transaction, site web, multi-formats | RGPD seulement, pas de calendrier conformite |
| **Hektor** (La Boite Immo) | CRM agence, mandats, contacts | Pas de module echeances reglementaires |
| **Netty** | Logiciel transaction, site web | Pas de conformite |
| **AC3** | Logiciel transaction + gestion | Pas de conformite specifique |
| **Consortium Immobilier** | SaaS innovant (depuis 2015), alertes terrain | RGPD, pas d'echeances CPI/ALUR |
| **VILOGI** | Gestion locative + syndic, 1500+ clients | Pas de calendrier conformite pro |

Source : [Apimo](https://apimo.net/fr/logiciel/), [FacileImmo - Hektor](https://www.facileimmo.net/actualites/35-le-logiciel-immobilier-hektor), [Solution.immo - Comparatif](https://solution.immo/conseils-immobiliers/comment-choisir-le-bon-logiciel-dedie-a-limmobilier)

**Constat** : Les logiciels immobiliers majeurs se concentrent sur la transaction (mandats, biens, portails) et la gestion locative. **Aucun ne propose un module de suivi des echeances de conformite personnelle du professionnel** (carte CPI, formation ALUR, RC Pro, garantie financiere).

#### Outils generiques de suivi d'echeances

| Solution | Description | Adaptation immobilier FR |
|----------|-------------|--------------------------|
| **Remindax** | SaaS de tracking d'expirations, rappels email/SMS/WhatsApp | Generique, pas de reglementation FR |
| **RenewalTracker** | Gestion renouvellements licences, permis, compliance | US-centric, pas de loi Hoguet/ALUR |

Source : [Remindax](https://www.remindax.com/industries/real-estate-management-software), [RenewalTracker](https://www.renewaltracker.com/)

**Constat** : Ces outils sont generiques et anglophones. Ils ne connaissent ni la loi Hoguet, ni la formation ALUR, ni les specificites CCI. L'effort d'adaptation pour un agent immobilier francais serait considerable et sans garantie de conformite.

#### Services des syndicats professionnels

| Syndicat | Membres | Services conformite |
|----------|---------|---------------------|
| **FNAIM** | ~30 000 adherents | Veille juridique, outils techno, formations |
| **SNPI** | ~28 000 adherents | Service juridique, formations accreditees, outils web |
| **UNIS** | ~12 000 adherents | Formations, sessions |

Source : [La Presse Immo - SNPI vs FNAIM](https://www.la-presse-immo.fr/snpi-fnaim-quelles-differences-entre-ces-deux-syndicats-immobiliers/), [SNPI.fr](https://www.snpi.fr)

**Constat** : Les syndicats proposent de la veille juridique et des formations, mais **pas de calendrier personnalise de suivi d'echeances individuelles**. Ils informent sur les obligations, mais ne trackent pas les dates specifiques de chaque adherent.

#### Assureurs specialises

**GALIAN-SMABTP** assure 30 000+ professionnels et propose un espace client pour suivre son dossier. Mais ce suivi est limite a leurs propres contrats (RC Pro, garantie financiere), pas a l'ensemble des echeances (CPI, ALUR, etc.).

Source : [GALIAN-SMABTP](https://www.galian-smabtp.fr/)

### 3.3 Analyse de l'avantage concurrentiel

**Positionnement unique d'EcheancImmo** :
- **Verticalisation** : Seul outil 100% dedie a la conformite des pros immobilier FR
- **Personnalisation** : Calendrier adapte au profil (type de carte, date d'obtention, activites)
- **Reglementation embarquee** : Connaissance native de la loi Hoguet, ALUR, DPE, Le Meur
- **Alertes anticipees** : Rappels avant expiration (pas juste du suivi post-facto)
- **Simplification** : Dashboard unique vs. echeances dispersees entre CCI, assureur, organisme de formation

**Risque d'imitation** : MOYEN. Un logiciel metier comme Hektor ou Apimo pourrait ajouter un module conformite, mais cela reste un "nice-to-have" pour eux, pas leur coeur de metier. Le SNPI ou la FNAIM pourraient aussi developper un outil interne pour leurs membres.

---

## ETAPE 4 : CADRE REGLEMENTAIRE

### 4.1 Loi Hoguet (2 janvier 1970) - Cadre fondamental

La loi Hoguet est le socle reglementaire de la profession immobiliere en France depuis plus de 55 ans. Modifiee de nombreuses fois (ALUR 2014, ELAN 2018...), elle impose :

- **Carte professionnelle (CPI)** : Obligatoire pour exercer en transaction (T), gestion (G), syndic (S)
- **Validite** : 3 ans, renouvelable
- **Delivrance** : CCI du siege de l'entreprise
- **Conditions** : Aptitude professionnelle, moralite, garantie financiere, RC Pro

Source : [GALIAN-SMABTP - Loi Hoguet](https://www.galian-smabtp.fr/blog/agent-immobilier-tout-savoir-sur-loi-hoguet), [Assurcore - Loi Hoguet](https://www.assurcore.fr/garantie-financiere/agent-immobilier/loi-hoguet/)

**Sanctions en cas d'exercice sans carte** :
- **6 mois d'emprisonnement + 7 500 EUR d'amende** (exercice sans carte)
- **2 ans d'emprisonnement + 300 000 EUR d'amende** (si perception de fonds sans carte)
- **Interdiction d'exercer** jusqu'a 5 ans
- **Dissolution** possible de la societe
- **Radiation** du fichier national

Source : [Loi Hoguet - Sanctions](https://www.lettredesreseaux.com/P-1369-453-A1-loi-hoguet.html), [Mozart Prestige - Agent sans carte T](https://www.mozartprestigepatrimoine.fr/ressources/agent-immobilier-sans-carte-t/)

### 4.2 Formation continue ALUR (Loi du 24 mars 2014)

**Obligation** : 42 heures de formation sur 3 ans (ou 14h/an minimum)
**Contenu obligatoire** (depuis 01/01/2021) :
- Minimum 2h de deontologie
- Minimum 2h de non-discrimination dans l'acces au logement

**Controle** : Justificatifs a transmettre au president de la CCI territoriale, apres chaque formation ou au plus tard lors du renouvellement de la carte.

**Consequence du non-respect** : Refus de renouvellement de la carte professionnelle = interdiction d'exercer.

Source : [Lefebvre Dalloz - Formation continue immobilier](https://formation.lefebvre-dalloz.fr/actualite/formation-continue-des-professionnels-de-limmobilier-une-obligation-pour-exercer), [MaFormationImmo - Formation ALUR 42h](https://www.maformationimmo.fr/formation-alur-42-heures-pour-renouvellement-de-la-carte-professionnelle-immobilier/), [Decret 2016-173](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032080616)

### 4.3 Carte professionnelle CPI - Processus de renouvellement

**Delai** : Demande a deposer **au moins 2 mois avant la date d'expiration**
**Dossier requis** :
1. Demande ecrite de renouvellement
2. Attestation de garantie financiere (si maniement de fonds)
3. Attestation RC Pro en cours de validite
4. Justificatifs de formation continue ALUR (42h/3 ans)

**Consequence d'un retard** :
- Radiation automatique du fichier national
- Interdiction immediate d'exercer
- Periode de regularisation d'1 an maximum (mais SANS pouvoir travailler)
- Impact juridique sur les mandats en cours

Source : [CCI Paris IDF - Renouvellement CPI](https://www.entreprises.cci-paris-idf.fr/web/formalites/renouvellement-carte-professionnelle-immobilier), [MaFormationImmo - Retard renouvellement](https://www.maformationimmo.fr/renouvellement-de-la-carte-professionnelle-que-se-passe-t-il-en-cas-de-retard/), [SNPI - Renouveler carte](https://www.snpi.fr/actualite/renouveler-sa-carte-professionnelle-dagent-immobilier)

> **Point critique pour EcheancImmo** : "Chaque annee, des agents immobiliers, dirigeants d'agence ou mandataires habilites se retrouvent en difficulte parce qu'ils ont oublie ou tarde a renouveler leur carte professionnelle CPI." Les erreurs courantes : document manquant, attestation de formation non conforme, erreur de periode, depot trop tardif.

### 4.4 RC Pro et garantie financiere

**RC Pro (Responsabilite Civile Professionnelle)** :
- Obligatoire pour TOUS les professionnels immobilier
- Renouvellement annuel
- Cout moyen : ~250 EUR/an
- Attestation requise pour le renouvellement de la carte CPI

**Garantie financiere** :
- Obligatoire si maniement de fonds (acomptes, loyers, charges copro)
- Montant minimum : 110 000 EUR (30 000 EUR les 2 premiers exercices)
- Renouvellement annuel
- Cout : ~200 EUR/an
- Attestation a afficher dans les locaux
- Principaux garants : GALIAN-SMABTP, QBE, CEGC

Source : [Independant.io - RC Pro agent immobilier](https://independant.io/rc-pro-agent-immobilier/), [GALIAN-SMABTP - GF et RCP](https://www.galian-smabtp.fr/assurances-professionnelles/garantie-financiere-responsabilite-civile-professionnelle-galian-smabtp), [Pappers - Garantie financiere](https://services.pappers.fr/blog/assurances/rc-pro/garantie-financiere-agent-immobilier)

### 4.5 Loi Le Meur (19 novembre 2024) - Impact

La loi Le Meur ajoute des obligations specifiques pour les gestionnaires de meubless touristiques :
- **Enregistrement national obligatoire** : Au plus tard le **20 mai 2026**
- **DPE obligatoire** : Classe F minimum en 2026 (zone tendue), E en 2028, D en 2034
- **Information du syndic** obligatoire si copropriete
- **Sanctions** : 10 000 EUR (absence d'enregistrement), 20 000 EUR (faux numero)

Source : [Journal de l'Agence - Loi Le Meur](https://www.journaldelagence.com/1402513-loi-le-meur-echaniz-une-reforme-pour-reguler-la-location-meublee-touristique-impactante-pour-tous-les-professionnels-de-limmobilier), [CAFPI - Loi Le Meur](https://www.cafpi.fr/credit-immobilier/reglementation-credit-immobilier/loi-le-meur-impact-sur-la-location-touristique)

### 4.6 Reforme DPE 2026 - Impact diagnostiqueurs

- **Nouveau coefficient** : Facteur de conversion electricite passe de 2,3 a 1,9 (01/01/2026)
- **Plafond de DPE** : Maximum 1 000 DPE/an par diagnostiqueur, sous peine de suspension
- **Renforcement certifications** : Arrete du 16/06/2025 - controle accru par le Cofrac
- **QR code obligatoire** : Systeme anti-fraude lie a l'ADEME
- **DPE collectif** : Obligatoire pour coproprietes <= 50 lots a partir de 2026

Source : [ViaDiagnostic - 2026 annee charniere](https://www.viadiagnostic.fr/diagnostic-immobilier/2026-une-annee-charniere-pour-le-diagnostic-immobilier-2/), [Notaires.fr - DPE 2026](https://www.immobilier.notaires.fr/fr/articles/conseils-et-actualites/actualites/dpe-2026-impacts-nouvelles-regles-et-consequences-pour-les-passoires-energetiques)

### 4.7 Risque de simplification reglementaire

**Analyse** : L'Autorite de la concurrence a recommande de simplifier la loi Hoguet (assouplissement conditions d'obtention de la carte, reduction experience requise). Le Conseil d'Etat a ordonne (25/02/2025) la publication d'un decret rendant obligatoire la formation initiale des collaborateurs.

**Verdict** : La tendance est au **renforcement** de la reglementation, pas a la simplification. Chaque annee apporte de nouvelles obligations (DPE collectif, loi Le Meur, formation initiale collaborateurs, plafond honoraires 2026). Le risque de simplification radicale qui eliminerait le besoin d'un outil de conformite est **TRES FAIBLE**.

Source : [Immo-Formation - Reforme Hoguet](https://immo-formation.fr/vers-une-reforme-de-la-loi-hoguet-les-professionnels-de-limmobilier-doivent-ils-sinquieter/), [Journal de l'Agence - Changements 2026](https://www.journaldelagence.com/1409180-changements-immobiliers-2026-toutes-les-nouveautes-reglementaires-a-connaitre-en-debut-dannee)

### 4.8 Tableau recapitulatif des echeances

| Echeance | Periodicite | Sanction non-respect | Concernees |
|----------|-------------|---------------------|------------|
| Carte CPI (T/G/S) | 3 ans | 6 mois prison + 7 500 EUR, radiation | Titulaires carte |
| Formation ALUR | 42h / 3 ans | Refus renouvellement carte | Tous (carte + attestation) |
| RC Pro | Annuelle | Carte non renouvelee | Tous |
| Garantie financiere | Annuelle | Carte non renouvelee, interdiction maniement fonds | Si maniement fonds |
| Attestation agent commercial | 3 ans (liee carte employeur) | Interdiction exercer | 80K agents commerciaux |
| Certification diagnostiqueur | 7 ans | Interdiction exercer | ~12K diagnostiqueurs |
| Registre mandats | Continu | 2 ans prison + 30 000 EUR | Tous agents |
| Enregistrement meuble touristique | Ponctuel (avant 20/05/2026) | 10-20K EUR amende | Gestionnaires |

---

## ETAPE 5 : TENDANCES TECHNOLOGIQUES

### 5.1 Digitalisation du secteur immobilier en France

Le secteur immobilier francais est en pleine transition numerique. Les chiffres cles :

- **650+ start-ups PropTech actives** en France (2025)
- **1,2 milliard EUR investis** dans les PropTech francaises en 2024
- **70% des investissements PropTech** concentres sur l'IA en 2026
- **200 entreprises PropTech** representant 3 500 collaborateurs (noyau dur)
- **80% des entreprises** devraient avoir completement adopte le SaaS d'ici 2025 (tous secteurs)

Source : [Immo2.pro - 6 startups PropTech 2026](https://immo2.pro/innovation-immobilier/veille-et-innovation-en-france/6-startups-de-la-proptech-qui-marqueront-2026/), [BPI France - PropTech](https://bigmedia.bpifrance.fr/nos-dossiers/proptech-la-technologie-au-service-de-limmobilier), [RSVR Tech - Innovation France 2025](https://www.rsvrtech.com/blog/innovation-numerique-france-2025/)

### 5.2 PropTech francaises et tendances

Les startups PropTech se concentrent sur :
1. **IA et estimation** : Estimation automatique, analyses predictives, personnalisation
2. **Etats des lieux numeriques** : WeProov (reference), applications mobiles
3. **Signature electronique** : Adoption generalisee
4. **Renovation energetique** : Cosynergy, solutions DPE
5. **Plateformes tout-en-un** : Matchimo (recherche + vente + financement)

**Segment absent** : Aucune PropTech identifiee sur la conformite reglementaire des professionnels. C'est un angle mort de l'ecosysteme.

Source : [Telescop - PropTech 2026](https://www.telescop.com/proptech-les-startups-immobilieres-a-suivre-en-2026/), [MaFormationImmo - Top 12 PropTech 2026](https://www.maformationimmo.fr/top-12-startups-proptech-qui-vont-revolutionner-limmobilier-en-2026/)

### 5.3 Adoption SaaS par les pros immobilier

L'adoption du SaaS est forte chez les professionnels immobilier :
- La quasi-totalite des logiciels immobilier (Apimo, Hektor, Netty, VILOGI) sont desormais en mode SaaS / full web
- Les mandataires (80K+) sont natifs du digital (travaillent depuis chez eux, utilisent apps mobiles)
- Les reseaux comme IAD, SAFTI imposent des outils digitaux a leurs mandataires
- Le SNPI propose gratuitement un logiciel de transaction SaaS a ses adherents (820 EUR/an d'adhesion)

Source : [ImmoMatin - SNPI logiciel transaction](https://www.immomatin.com/articles/logiciels/nous-proposons-gratuitement-un-logiciel-de-transaction-a-nos-adherents-a-duffoux-snpi.htm), [SNPI - Adhesion 2026](https://www.snpi.fr/formulaire-adhesion)

### 5.4 APIs et integrations possibles

| Source de donnees | Disponibilite API | Utilisation potentielle |
|-------------------|-------------------|------------------------|
| CCI France (fichier national) | Excel uniquement (pas d'API) | Verification statut carte, scraping possible |
| ORIAS | API tierce existante (orias.rest) | Verification intermediaires assurance |
| ADEME (DPE) | Base de donnees publique | Verification DPE diagnostiqueurs |
| Qualiopi (formations) | Non identifie | Validation organismes formation |
| Galian-SMABTP | Espace client, pas d'API publique | Pas d'integration directe |

Source : [CCI.fr - Fichier professionnels](https://www.cci.fr/ressources/formalites-en-ligne/fichier-des-professionnels-de-limmobilier), [ORIAS.rest](https://www.orias.rest/)

**Constat technique** : L'absence d'API CCI est une limitation, mais aussi une barriere a l'entree pour les concurrents. L'approche pragmatique serait de demander a l'utilisateur de saisir ses dates manuellement au onboarding, puis d'automatiser les rappels.

### 5.5 Stack technique recommandee (solo dev JS/TS)

Pour un budget < 100 EUR/mois :
- **Frontend** : Next.js / React (PWA mobile-friendly)
- **Backend** : Node.js / API serverless (Vercel, Cloudflare Workers)
- **Base de donnees** : Supabase (plan gratuit genereux) ou PlanetScale
- **Notifications** : Resend (email), Twilio (SMS) ou ntfy.sh (push gratuit)
- **Auth** : Clerk ou Supabase Auth
- **Hebergement** : Vercel (gratuit pour commencer)
- **Cout estimatif** : 0-50 EUR/mois pour < 1000 utilisateurs

---

## ETAPE 6 : SYNTHESE ET SCORE BMAD

### 6.1 Analyse SWOT

#### Forces
- **Vide concurrentiel confirme** : Aucun SaaS direct ni module conformite dans les logiciels metier existants
- **Douleur existentielle** : Sanctions de prison + amende + radiation = le plus haut niveau de douleur possible
- **Marche large** : 143K+ professionnels concernes (cible prioritaire)
- **Complexite croissante** : Chaque nouvelle loi ajoute des echeances (tendance favorable)
- **Faisabilite technique** : Stack JS/TS, pas besoin d'API complexes, < 100 EUR/mois possible
- **Revenus recurrents** : Abonnement mensuel/annuel, retention naturelle (l'outil est utile tant que le pro exerce)

#### Faiblesses
- **Marche en crise** : Baisse de 15K cartes en 1 an, pros avec budgets serres
- **Willingness-to-pay incertain** : Outil de conformite = "assurance" (on ne veut pas payer tant qu'on n'a pas eu de probleme)
- **Simplicite apparente** : "C'est juste un calendrier avec des rappels" - risque de banalisation
- **Solo dev** : Pas de reseau dans l'immobilier, pas de credibilite initiale dans le secteur
- **Pas d'API CCI** : Pas de verification automatique possible, saisie manuelle au onboarding

#### Opportunites
- **Timing loi Le Meur** : Echeance du 20 mai 2026 = urgence pour les gestionnaires meubless touristiques
- **Reforme DPE 2026** : Nouvelles obligations diagnostiqueurs = nouvelles echeances
- **Mandataires en croissance** : Segment digitalement natif, sans back-office, ideal pour le SaaS
- **Partenariats syndicats** : FNAIM, SNPI, UNIS pourraient integrer l'outil pour leurs membres
- **Partenariats assureurs** : GALIAN-SMABTP (30K clients) pourrait proposer l'outil en valeur ajoutee
- **Upsell vers conformite complete** : Documents types, checklist mandats, conformite RGPD

#### Menaces
- **Developpement interne par syndicats** : FNAIM ou SNPI pourraient creer un outil similaire pour fideliser
- **Module ajoute par logiciel metier** : Hektor, Apimo, Netty pourraient ajouter un module conformite
- **Simplification reglementaire** : Peu probable a court terme, mais reste un risque theorique
- **Marche en baisse** : Si la crise immobiliere perdure, les pros ferment et le marche retrecit
- **Gratuit "good enough"** : Un simple Google Calendar + rappels manuels peut suffire aux plus organises

### 6.2 Score BMAD detaille

| Critere | Score /5 | Justification |
|---------|----------|---------------|
| **Taille du marche** | 4.0 | 143K+ pros concernes, mais marche en baisse conjoncturelle. Pas un marche de milliards, mais largement suffisant pour un SaaS de niche. |
| **Intensite de la douleur** | 4.5 | Sanctions penales (prison + amende + radiation) = douleur maximale. Temoignages d'oublis reels chaque annee. Mais certains pros sont organises et n'en ont pas besoin. |
| **Faisabilite technique** | 4.5 | App web/mobile, pas d'IA complexe, pas d'API bloquantes, stack JS/TS maitrise, < 100 EUR/mois. MVP realisable en 2-4 semaines. |
| **Timing** | 4.0 | Loi Le Meur (echeance mai 2026), reforme DPE 2026, complexification continue. Le moment est favorable, mais pas d'urgence critique immediate (pas de deadline unique). |
| **Defensibilite** | 3.0 | Barriere a l'entree faible (techniquement simple). Defensibilite par la verticalisation, la base de donnees reglementaire, et l'effet reseau (recommandations). Mais un gros acteur (FNAIM, Apimo) pourrait reproduire facilement. |

**SCORE BMAD GLOBAL : 4.0 / 5**

### 6.3 Analyse de viabilite economique

**Hypotheses de pricing** :
- Prix : 9-15 EUR/mois (ou 90-150 EUR/an)
- Cible Year 1 : 200-500 clients payants
- CA Year 1 : 24K-90K EUR
- Couts Year 1 : < 5K EUR (hebergement + outils)

**Calcul du potentiel** :
- Si 1% du marche adressable (143K) souscrit = 1 430 clients
- A 12 EUR/mois = 206K EUR de MRR annuel
- Potentiel a 3-5% de penetration = 500K-1M EUR ARR

Le pricing est coherent avec les budgets des independants (qui paient deja 820 EUR/an d'adhesion SNPI, 250 EUR/an de RC Pro, etc.).

### 6.4 Recommandation

## VERDICT : GO CONDITIONNEL

**Conditions de GO** :

1. **Validation du willingness-to-pay** : Avant de coder, lancer une landing page + pre-inscriptions pour valider que les pros sont prets a payer 9-15 EUR/mois pour un outil de rappel de conformite. Objectif : 100 emails en 2 semaines.

2. **Validation de la douleur reelle** : Interviewer 10-15 professionnels (mandataires independants prioritairement) pour confirmer :
   - Ont-ils deja oublie une echeance ?
   - Combien de temps passent-ils a gerer leur conformite ?
   - Utiliseraient-ils un outil dedie ? A quel prix ?

3. **Strategie d'acquisition** : Identifier les canaux d'acquisition avant de construire :
   - Groupes Facebook/LinkedIn de mandataires
   - Partenariat avec un organisme de formation ALUR
   - Content marketing sur les sanctions (SEO "retard renouvellement carte immobilier")

**Raison du "conditionnel"** : Le projet est techniquement faisable et le marche existe, mais le risque principal est la **banalisation** ("je peux faire ca avec un Google Calendar"). Il faut prouver que la valeur ajoutee (reglementation embarquee, personnalisation, tranquillite d'esprit) justifie un abonnement mensuel.

### 6.5 Risques principaux et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| Banalisation ("juste un calendrier") | ELEVE | ELEVE | Ajouter de la valeur : templates documents, checklist conformite, veille reglementaire automatique |
| Module conformite par Hektor/Apimo | MOYEN | ELEVE | Etre premier, construire une communaute, devenir la reference niche |
| Outil gratuit par syndicat (FNAIM) | MOYEN | TRES ELEVE | Cibler les non-adherents (60%+ du marche), proposer plus de fonctionnalites |
| Marche en baisse prolongee | MOYEN | MOYEN | Les pros restants ont encore plus besoin de conformite pour survivre |
| Faible conversion freemium->payant | ELEVE | MOYEN | Modele freemium genereux (1-2 echeances gratuites) + payant pour le tableau complet |
| Pas d'API CCI | FAIBLE | FAIBLE | Saisie manuelle au onboarding, l'experience reste simple |

### 6.6 Comparaison avec les autres projets valides

| Projet | Score /20 | BMAD /5 | Deadline urgente | Note |
|--------|-----------|---------|------------------|------|
| ConformLoc (Run 2) | 18.5 | 4.5 | 20 mai 2026 | Winner Run 2 |
| ConformCHR (Run 1) | 18 | 4.5 | Non | Winner Run 1 |
| ConformGarage (Run 2) | - | 4.5 | Non | Valide |
| **EcheancImmo (#44)** | **16.5** | **4.0** | **Partiel (Le Meur)** | **Solide mais pas exceptionnel** |
| ContratInfluo (Run 3) | 16 | 4.25 | Non | Winner Run 3 |
| AccessiBoard (Run 3) | - | 4.07 | Non | Valide |

**Position relative** : EcheancImmo se situe dans le milieu du classement. Score honorable (4.0/5) mais inferieur aux champions (ConformLoc, ConformCHR a 4.5/5). Le projet est viable mais pas aussi fort que les meilleurs candidats du portfolio.

---

## ANNEXE : Sources principales

1. [ImmoMatin - Cartes professionnelles CCI 2025](https://www.immomatin.com/franchise/reseaux-franchise/immobilier-15-847-cartes-professionnelles-delivrees-par-les-cci-en-2025-par-rapport-a-2024.html)
2. [CNACIM - Statistiques cartes pro 2025](https://www.cnacim.immo/blog/statistiques-2025-cartes-professionnelles-immobilier-cci-france/)
3. [CCI Paris IDF - Renouvellement CPI](https://www.entreprises.cci-paris-idf.fr/web/formalites/renouvellement-carte-professionnelle-immobilier)
4. [MaFormationImmo - Retard renouvellement](https://www.maformationimmo.fr/renouvellement-de-la-carte-professionnelle-que-se-passe-t-il-en-cas-de-retard/)
5. [Lefebvre Dalloz - Formation continue immobilier](https://formation.lefebvre-dalloz.fr/actualite/formation-continue-des-professionnels-de-limmobilier-une-obligation-pour-exercer)
6. [GALIAN-SMABTP - Loi Hoguet](https://www.galian-smabtp.fr/blog/agent-immobilier-tout-savoir-sur-loi-hoguet)
7. [GALIAN-SMABTP - GF et RCP](https://www.galian-smabtp.fr/assurances-professionnelles/garantie-financiere-responsabilite-civile-professionnelle-galian-smabtp)
8. [Immo2.pro - Palmares mandataires 2026](https://immo2.pro/tendances-immobilier/classement-chiffres-et-statistiques-immobilier/classement-des-reseaux-de-mandataires-immobiliers-le-palmares-2026/)
9. [Revue-Immo - Nombre agences France 2025](https://revue-immo.com/agences-immobilieres-france/)
10. [Diagactu - Diagnostiqueurs 2025](https://www.diagnostiqueur-immobilier.fr/profession/diagnostiqueurs-immobiliers-ce-qui-vous-attend-en-2025/)
11. [Journal de l'Agence - Loi Le Meur](https://www.journaldelagence.com/1402513-loi-le-meur-echaniz-une-reforme-pour-reguler-la-location-meublee-touristique-impactante-pour-tous-les-professionnels-de-limmobilier)
12. [ViaDiagnostic - DPE 2026](https://www.viadiagnostic.fr/diagnostic-immobilier/2026-une-annee-charniere-pour-le-diagnostic-immobilier-2/)
13. [Immo-Formation - Reforme Hoguet](https://immo-formation.fr/vers-une-reforme-de-la-loi-hoguet-les-professionnels-de-limmobilier-doivent-ils-sinquieter/)
14. [Remindax - Real Estate](https://www.remindax.com/industries/real-estate-management-software)
15. [RenewalTracker](https://www.renewaltracker.com/)
16. [SNPI.fr](https://www.snpi.fr)
17. [CCI.fr - Fichier professionnels immobilier](https://www.cci.fr/ressources/formalites-en-ligne/fichier-des-professionnels-de-limmobilier)
18. [ORIAS.rest - API](https://www.orias.rest/)
19. [BPI France - PropTech](https://bigmedia.bpifrance.fr/nos-dossiers/proptech-la-technologie-au-service-de-limmobilier)
20. [Imop - Panorama agences 2026](https://www.imop.fr/blog/le-marche-de-immobilier-et-ses-tendances/les-agences-immobilieres)
