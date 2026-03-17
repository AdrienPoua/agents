# Recherche de Domaine BMAD : BorneFlow

**Projet** : BorneFlow -- SaaS de gestion de chantiers IRVE pour installateurs de bornes de recharge electrique en France
**Date** : 2026-02-06
**Chercheur** : Agent BMAD
**Porteur** : Adrien Poua, solo dev JS/TS

---

## SECTION 1 : Analyse Industrie

### 1.1 Etat du marche IRVE en France (2025-2026)

Le marche des infrastructures de recharge pour vehicules electriques (IRVE) en France connait une croissance soutenue :

- **185 501 points de recharge publics** au 31 decembre 2025, soit une progression de **+20%** par rapport a 2024 ([IZI by EDF](https://izi-by-edf.fr/blog/nombre-bornes-recharge-france/))
- **+30 000 nouveaux points publics** installes en 2025 ([HelloWatt](https://www.hellowatt.fr/blog/barometre-infrastructures-vehicules-electriques-2025/))
- **Plus de 2 millions de bornes privees** (residentielles + entreprises) ([FFB](https://www.ffbatiment.fr/actualites-batiment/actualite-bam/irve-marche-porteur))
- **1,5 million de vehicules zero emission** en circulation ([Journal Auto](https://journalauto.com/journal-des-flottes/une-annee-2025-record-pour-la-mobilite-electrique/))
- Le nombre de bornes a **triple** et la recharge rapide a ete **multipliee par six** depuis 2022 ([Filiere 3e](https://www.filiere-3e.fr/2025/04/02/le-deploiement-des-bornes-de-recharge-se-poursuit-avec-une-montee-en-puissance-des-solutions/))

**Objectifs gouvernementaux** :
- **400 000 points de recharge publics** d'ici 2030 ([Ministere de l'Economie](https://www.economie.gouv.fr/actualites/les-bornes-de-recharge-se-deploient-sur-le-territoire))
- **7 millions de points de recharge** (public + prive) d'ici 2030, objectif fixe par l'Etat ([Flot Auto](https://www.flotauto.com/bornes-recharge-2030-20250519.html))

### 1.2 Nombre d'installateurs qualifies IRVE

- **Plus de 5 000 entreprises** qualifiees IRVE chez Qualifelec ([Qualifelec IRVE](https://irve.qualifelec.fr/))
- Qualification delivree par **4 organismes** : AFNOR Certification, Qualifelec, OPQBI, Qualit'EnR ([Avere-France](https://www.avere-france.org/qualification-pour-linstallation-des-irve-quels-sont-les-organismes-de-formation-agrees/))
- Le marche est qualifie de **"marche porteur pour les electriciens"** par la FFB ([FFB](https://www.ffbatiment.fr/actualites-batiment/actualite-bam/irve-marche-porteur))

### 1.3 Repartition par type d'installation

| Segment | Volume / Indicateur | Source |
|---|---|---|
| **Residentiel collectif (coproprietes)** | 35 072 immeubles ont vote l'installation IRVE (+22% vs Q1 2024), 15 135 immeubles equipes (+43% sur un an) | [Avere-France Barometre](https://www.avere-france.org/publication/lavere-france-lafor-et-enedis-publient-le-cinquieme-barometre-national-sur-la-recharge-en-residentiel-collectif/) |
| **Residentiel individuel** | Non couvert par ADVENIR (pas de donnees centralisees) | [ECOinfos](https://www.les-energies-renouvelables.eu/conseils/borne-de-recharge-irve/programme-prime-advenir/) |
| **Entreprises / Tertiaire** | Obligation LOM active depuis jan 2025 (parkings > 400 places) | [Wattpark](https://www.wattpark.eu/borne-de-recharge/loi-lom/) |
| **Recharge publique** | 185 501 points, dont 22 858 haute puissance (>150 kW) | [Rouleur Electrique](https://rouleur-electrique.fr/plus-de-185-000-bornes-electriques-en-france-fiabilite-en-question/) |

**Fait notable** : Pres d'un immeuble sur six a acte l'installation d'une IRVE, avec un potentiel total de 269 000 immeubles collectifs avec parking en France.

### 1.4 Financements et aides

- **Programme ADVENIR** : budget de **520 millions EUR**, objectif de financer 250 000 points de recharge d'ici 2027 ([ADVENIR](https://advenir.mobi/))
- **Credit d'impot borne de recharge** : termine le 31 decembre 2025, **non reconduit en 2026** ([IZI by EDF](https://izi-by-edf.fr/blog/fin-dispositif-credit-impot-borne-recharge/))
- **TVA a 5,5%** pour les installations en habitat residentielles ([Ohm Energie](https://ohm-energie.com/blog/aides-installation-borne-electrique-credit-impot-2026))
- **Prime ADVENIR copropriete** : 50% des couts eligibles, plafond 8 000 EUR HT pour 100 places ([ADVENIR](https://advenir.mobi/primes-et-montants-daides/))
- **Prime ADVENIR entreprise** : 25% des couts, plafond 750 EUR HT par point de recharge ([ADVENIR](https://advenir.mobi/primes-et-montants-daides/))

---

## SECTION 2 : Paysage Concurrentiel

### 2.1 IRVE Manager -- Statut : "Coming Soon" (probablement abandonne)

- **URL** : irve-manager.com (redirige vers cmoderne.com)
- **Statut** : La page affiche toujours "coming soon" en fevrier 2026. Le site cmoderne.com **ne repond plus** (ECONNREFUSED lors de notre test).
- **Promesses non tenues** : "Le logiciel SaaS pour gerer vos chantiers et installations IRVE facilement, avec certificats, rapports, notifications, QR codes"
- **Verdict** : Projet **vraisemblablement abandonne**. Aucune evidence de produit lance, aucune mention dans la presse specialisee, site hors ligne.

**Impact pour BorneFlow** : Ce n'est pas un concurrent actif. Cela confirme que le creneau "gestion de chantier IRVE" n'a pas encore de solution operationnelle.

### 2.2 Homeys -- Focus simulation pre-installation, pas gestion chantier

- **Levee de fonds** : 1,1M EUR (juin 2021, Sonergia + Saint-Gobain) ([Societe.Tech](https://www.societe.tech/levee-de-fonds-homeys-leve-1-1-millions-d-euros/))
- **Prix** : a partir de **99 EUR HT/mois** ([Homeys IRVE](https://www.homeys.fr/logiciel/installateur-irve))
- **Fonctionnalites IRVE** :
  - Collecte de donnees energetiques via compteurs Linky (API Enedis/Data Connect)
  - Simulation d'impact de bornes sur les compteurs C2/C4
  - Detection de risques de depassement de puissance (penalites CMDS)
  - Export de rapports d'analyse
  - Dematerialisation des mandats clients
- **Ce qu'il ne fait PAS** : Aucune gestion de chantier, suivi d'avancement, generation de dossier ADVENIR, conformite Consuel, planification d'interventions
- **Positionnement** : Outil de **pre-vente et dimensionnement**, complementaire a BorneFlow

**Impact pour BorneFlow** : Homeys est un **partenaire potentiel**, pas un concurrent direct. Integration possible via API.

### 2.3 Chargekeeper Starter -- Focus supervision post-installation

- **Lancement** : Janvier 2026, licence "Starter" pour installateurs IRVE ([AVEM](https://www.avem.fr/2026/01/26/chargekeeper-lance-starter-une-licence-de-supervision-pour-les-installateurs-irve/))
- **Fonctionnalites** :
  - Supervision de bornes installees
  - Facturation usagers
  - Gestion des acces (badges, QR codes)
  - Compatible sites publics et prives
  - Connectivite par carte SIM
- **Offre Pro** : Pour operateurs de recharge, depots logistiques, flottes
- **Ce qu'il ne fait PAS** : Gestion de chantier, dossier ADVENIR, suivi d'installation
- **Positionnement** : Outil d'**exploitation post-installation**

**Impact pour BorneFlow** : Complementaire. Chargekeeper gere l'APRES, BorneFlow gererait le PENDANT.

### 2.4 Revolt.eco -- Pas de menace IRVE reelle

- **Levee de fonds** : **3M EUR** (novembre 2025) ([PV Magazine](https://www.pv-magazine.fr/2025/11/17/interview-les-dessous-de-la-levee-de-fonds-de-3-millions-deuros-de-revolt-eco/))
- **Focus actuel** : 100% photovoltaique (dimensionnement 3D, devis automatises, CRM)
- **Roadmap verifiee** :
  - **Decembre 2025** : Beta CVC (pompes a chaleur) aupres de 30 installateurs ([Journal du Net](https://www.journaldunet.com/start-up/1546037-revolt-eco-leve-pres-de-3-millions-d-euros-pour-son-saas-dedie-a-la-renovation-energetique/))
  - **Q1 2026** : Commande de materiel aupres de distributeurs
  - **S1 2026** : Lancement commercial CVC
  - **S2 2026** : Module ventilation
  - **2026** : Expansion internationale (Belgique)
- **IRVE** : Mention marginale sur le site -- "voiture electrique" comme parametre de simulation dans les projets PV, **aucun module dedie IRVE**
- **Verdict** : L'expansion annoncee concerne PAC/ventilation, **pas l'IRVE**. Aucune preuve de roadmap IRVE.

**Impact pour BorneFlow** : Menace faible a moyen terme. Revolt est concentre sur l'extension PV -> PAC, pas PV -> IRVE. Le chevauchement installateur PV/IRVE (30-40%) pourrait a terme les amener sur le sujet, mais pas avant 2027 au plus tot.

### 2.5 Optimeese -- Focus conception d'infrastructure

- **Prix** : a partir de **109 EUR HT/mois** ([Capterra](https://www.capterra.fr/software/1056200/optimeese))
- **Fonctionnalites** :
  - Digitalisation de plans de parking
  - Positionnement optimal des bornes
  - Algorithmes d'optimisation des trajets de cables
  - Generation de synoptiques
  - Calcul de foisonnement
  - Mode hors ligne
  - Photos geolocalisees
- **Editeur** : Mobileese (bureau d'etudes IRVE)
- **Positionnement** : Outil d'**avant-projet sommaire** (APS), pas de gestion chantier

**Impact pour BorneFlow** : Complementaire. Optimeese fait la CONCEPTION, BorneFlow ferait l'EXECUTION.

### 2.6 Praxedo -- Generique, cher, pas IRVE-specifique

- **Type** : Logiciel de gestion d'interventions generique (multi-secteur)
- **Marketing IRVE** : Pages dediees IRVE sur leur site, mais le produit est generique
- **Prix** : Non communique publiquement, mais Praxedo cible les ETI (estimation 50-100 EUR/utilisateur/mois)
- **Fonctionnalites pertinentes** : Planification d'interventions, geolocalisation, formulaires mobiles, IA photo
- **Limitations pour installateurs IRVE** :
  - Pas de gestion de dossier ADVENIR
  - Pas de generation de documents Consuel
  - Pas de workflow specifique IRVE (P1/P2/P3)
  - Sur-dimensionne pour une TPE d'electricien

**Impact pour BorneFlow** : Concurrent indirect. Son caractere generique et son prix le rendent peu adapte aux TPE IRVE.

### 2.7 Batappli / Obat -- Logiciels batiment generiques

- **Batappli** : Logiciel de devis/factures pour artisans du batiment, avec modules mobilite ([Batappli](https://www.batappli.fr/))
- **Obat** : Logiciel de devis/factures pour electriciens, generique ([Obat](https://www.obat.fr/devis-factures/electricien/))
- **Ni l'un ni l'autre** ne proposent de workflow IRVE specifique (ADVENIR, Consuel, Qualifelec)
- **Positionnement** : Outils de gestion administrative (devis/factures), pas de gestion de chantier IRVE

**Impact pour BorneFlow** : Concurrence peripherique. Un installateur pourrait utiliser Batappli PLUS BorneFlow.

### 2.8 Autres acteurs identifies

| Acteur | Type | Menace |
|---|---|---|
| **elec calc IRVE** (Trace Software) | Calcul electrique dimensionnement | Aucune (conception technique) |
| **Lise IRVE** (BBS Logiciels) | Calcul electrique | Aucune (outil d'ingenierie) |
| **Schneider EcoStruxure EV Charging Expert** | Supervision grands comptes | Faible (segment different) |
| **Legrand Green'UP** | Supervision | Aucune (post-installation) |
| **Greenspot** | Supervision | Aucune (post-installation) |

### 2.9 Carte du paysage concurrentiel

```
PRE-INSTALLATION          INSTALLATION/CHANTIER       POST-INSTALLATION
(Conception/Simulation)   (Execution/Admin)            (Supervision/Maintenance)

Homeys (simulation)       >>> BorneFlow <<<            Chargekeeper (supervision)
Optimeese (conception)    IRVE Manager (mort)          Praxedo (interventions)
elec calc (calcul)                                     Legrand/Schneider
                                                       Greenspot
```

**CONCLUSION CONCURRENTIELLE** : Le segment "gestion de chantier IRVE" (entre conception et supervision) reste un **trou beant** dans l'ecosysteme. C'est exactement le positionnement de BorneFlow. IRVE Manager a tente de le combler mais a echoue. Aucun autre acteur ne l'adresse specifiquement.

---

## SECTION 3 : Cadre Reglementaire

### 3.1 Qualification IRVE obligatoire

La qualification IRVE est **obligatoire depuis le decret du 12 janvier 2017** (modifie par le decret n2021-546 du 4 mai 2021) pour toute installation de puissance superieure a 3,7 kW ([Legifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044287258)).

**Trois niveaux de qualification** ([Car2plug](https://car2plug.com/p1-p2-p3-c-est-quoi/)) :

| Niveau | Perimetre | Puissance | Contexte type |
|---|---|---|---|
| **P1** | Installation simple AC | <= 22 kW monophasé/triphase | Habitat individuel, borne murale |
| **P2** | Expert communicant | <= 22 kW avec supervision | Copropriete, tertiaire, parkings partages |
| **P3** | Haute puissance DC | > 22 kW courant continu | Stations de recharge rapide, autoroutes |

**Conditions** :
- Formation agreee obligatoire (Qualifelec, AFNOR, Qualit'EnR) ([Qualifelec Pros](https://pros.qualifelec.fr/page/formations-irve-agreees))
- Qualification probatoire ou definitive requise
- Sans qualification = pas d'acces aux aides (ADVENIR, credit d'impot)
- Depuis le decret du 4 mai 2021, des qualifications supplementaires existent pour **Maintenance** et **Etudes de conception** ([Avere-France](https://www.avere-france.org/referentiels-irve/))

**Pertinence BorneFlow** : Le logiciel pourrait integrer la verification automatique du niveau de qualification requis par type de chantier.

### 3.2 Programme ADVENIR 2026

**Budget global** : 520M EUR, objectif 250 000 points d'ici 2027 ([ADVENIR](https://advenir.mobi/))

**Procedure de demande (7 etapes verifiees)** ([ADVENIR](https://advenir.mobi/demande-de-prime/)) :

1. **Inscription** sur mon.advenir.mobi
2. **Depot de la demande** en ligne (formulaire + justificatifs)
3. **Validation prealable** par ADVENIR -- AUCUN travaux ne doit commencer avant
4. **Realisation des travaux** par installateur qualifie IRVE
5. **Constitution du dossier post-travaux** : facture, PV de reception, photo, attestation sur l'honneur, justificatif qualification installateur, RIB
6. **Verification** par ADVENIR (delai ~10 jours)
7. **Versement** de la prime sous 45 jours apres acceptation

**Montants 2026** ([ADVENIR](https://advenir.mobi/primes-et-montants-daides/)) :
- Copropriete : **50% des couts, plafond 8 000 EUR HT / 100 places**
- Entreprise : **25% des couts, plafond 750 EUR HT / point de recharge**
- Individuel en immeuble collectif : aide disponible
- Maison individuelle : **non eligible**

**Pertinence BorneFlow** : L'automatisation du dossier ADVENIR (generation des documents requis, suivi du statut, rappels de delais) est un **argument de vente majeur**. La validite de 6 mois de la demande et l'interdiction de commencer les travaux avant validation creent une complexite administrative que BorneFlow peut resoudre.

### 3.3 Obligation parkings (Loi LOM)

**Calendrier progressif** ([Wattpark](https://www.wattpark.eu/borne-de-recharge/loi-lom/), [Freshmile](https://www.freshmile.com/articles/loi-lom-bornes-de-recharge-electriques/)) :

| Echeance | Parkings concernes | Obligation |
|---|---|---|
| **1er janvier 2025** | > 400 places (existants non-resid.) | 1 point de recharge min. + 1/20 places |
| **1er janvier 2027** | 100 a 400 places (existants) | Idem |
| **1er janvier 2029** | 20 a 100 places (existants) | Idem |

**Pre-equipement** : 20% des places doivent etre pre-cablees pour les parkings > 20 places dans les batiments neufs.

**Sanctions** ([Mob-Energy](https://www.mob-energy.com/ressource/bornes-recharge-parking-entreprise-obligations/)) :
- Pas de sanctions explicites au 1er janvier 2025
- Non-conformite peut entrainer des **amendes administratives proportionnelles**
- Violations du Code de la construction : amendes jusqu'a **45 000 EUR** (penal)

**Pertinence BorneFlow** : Les echeances de 2027 et 2029 vont generer une **vague massive de chantiers** pour les parkings de 20 a 400 places. C'est le segment de marche ideal pour BorneFlow.

### 3.4 Attestation Consuel IRVE

**Obligation** ([Consuel](https://www.consuel.com/ac-irve/), [Promotelec](https://www.promotelec.com/professionnels/fiche/la-reglementation-evolue-lattestation-de-conformite-visee-par-le-consuel-desormais-obligatoire-pour-linstallation-dune-irve/)) :

| Contexte | Obligation Consuel |
|---|---|
| **Immeuble collectif** | Obligatoire pour **toute IRVE** quelle que soit la puissance |
| **Autre (individuel, tertiaire, public)** | Obligatoire pour IRVE **> 36 kW** |

**Types d'attestations** :
- **Jaune** : IRVE en batiment d'habitation (collectif ou individuel)
- **Verte** : IRVE en batiment recevant travailleurs/public

**Documents requis** :
- Plan de calepinage (localisation des bornes)
- Dossier technique SC 143_IRVE (risques de court-circuit) pour PDL/PRM a puissance surveillee
- Visite d'inspection par organisme accredite

**Pertinence BorneFlow** : Generation automatisee du dossier Consuel (plans, schemas, checklist pre-visite) = forte valeur ajoutee.

### 3.5 NFC 15-100 (section 7-722 specifique IRVE)

**Nouvelle norme** : Depuis le **1er septembre 2025**, la NF C 15-100-7-722 est la seule reference applicable pour les installations IRVE ([Bornetik IDF](https://bornetik-idf.fr/guides/reglementation/norme-nfc-15-100-722-irve-2025)).

**Exigences principales** ([Installation-Renovation-Electrique](https://www.installation-renovation-electrique.com/consommation-electrique/mobilite-electrique/borne-irve-norme-nf-c-15-100/)) :
- **Circuit dedie** obligatoire par point de recharge
- **Protection differentielle** 30 mA par point de recharge (DDR type A ou F en monophase, type B en triphase)
- **Obturateurs d'alvéoles** obligatoires sur les prises
- Qualification IRVE requise au-dela de 3,7 kW

**Pertinence BorneFlow** : Checklist de conformite NFC 15-100-7-722 integree au workflow de chantier.

### 3.6 Raccordement Enedis

**Procedure** ([Enedis](https://www.enedis.fr/demarches-borne-recharge-electrique-copropriete)) :
1. Demande sur le portail **Connect Racco** (selectionner "Nouveau raccordement")
2. Enedis cree le point de livraison (PDL), tire le cable, pose le compteur
3. Raccordement au reseau electrique

**Delais verifies** ([Enedis](https://www.enedis.fr/delais-installation-bornes-recharge-copropriete)) :
- Simple tirage cable : **1 mois**
- Creation PDL avec renforcement reseau : **3 mois**
- Droit a la prise : **3 a 6 mois**
- Projet collectif complexe : **> 6 mois**

**Pertinence BorneFlow** : Suivi des delais Enedis dans le planning de chantier, alertes sur les jalons.

---

## SECTION 4 : Tendances Technologiques

### 4.1 OCPP (Open Charge Point Protocol)

- **OCPP 2.1** publie en janvier 2025, integrant V2G, ISO 15118-20, Plug & Charge ([Open Charge Alliance](https://openchargealliance.org/protocols/open-charge-point-protocol/))
- **OCPP 1.6** reste dominant mais la migration vers 2.0.1/2.1 s'accelere ([AMPECO](https://www.ampeco.com/guides/complete-ocpp-guide/))
- **EU AFIR** impose le support ISO 15118 pour les bornes V2G-capable a partir de **janvier 2026** ; conformite Plug & Charge obligatoire pour les bornes publiques neuves d'ici **2027** ([Lemberg Solutions](https://lembergsolutions.com/blog/ocpp-16-vs-20-vs-21-comparing-benefits-limitations-and-adoption-trends))

**Pertinence BorneFlow** : Connaitre la version OCPP des bornes installees peut etre un champ utile dans la fiche chantier. Pas de necessite d'implementer OCPP directement (c'est de la supervision, pas de la gestion chantier).

### 4.2 Smart Charging et V2G

- **V2G (Vehicle-to-Grid)** : encore au stade de pilotes/demonstrateurs en France ([Avere-France Livre Blanc V2X](https://www.avere-france.org/wp-content/uploads/2023/11/202311-Livre-Blanc-pilotage-de-la-recharge-et-V2X.pdf))
- Revenus pilotes DREEV : jusqu'a **240 EUR/an maximum** (usage intensif)
- **Mercedes-Benz** lancera la recharge bidirectionnelle a domicile en 2026 ([Auto Infos](https://www.auto-infos.fr/article/mercedes-benz-inaugurera-la-recharge-bidirectionnelle-a-domicile-en-2026.288840))
- Le cadre reglementaire pour l'injection V2G est **encore en cours** en France

**Pertinence BorneFlow** : Tendance a surveiller mais **pas prioritaire** pour un MVP. Le V2G ne changera pas le besoin de gestion de chantier d'installation.

### 4.3 Evolution AC vs DC

- **12% des bornes publiques** depassent 150 kW (contre 10% fin 2024) ([HelloWatt](https://www.hellowatt.fr/blog/barometre-infrastructures-vehicules-electriques-2025/))
- **350 kW** devient la norme sur les grands axes, prototypes a 600-1000 kW ([Driveco](https://driveco.com/recharge-rapide-vehicules-electriques/))
- Le segment **AC 7-22 kW** reste dominant en volume (coproprietes, entreprises, residentiels) -- c'est le segment P1/P2 que ciblerait BorneFlow

### 4.4 APIs disponibles

| Service | API | Acces | Pertinence BorneFlow |
|---|---|---|---|
| **Enedis Data Connect** | REST, OAuth 2.0 | Gratuit, inscription SIRET, delai setup | Haute -- donnees consommation pre-chantier |
| **Enedis Connect Racco** | Portail web | Pas d'API publique | Faible -- suivi manuel |
| **Qualifelec** | Annuaire public | Scraping possible, pas d'API officielle | Moyenne -- verification qualification |
| **ADVENIR** | mon.advenir.mobi | Pas d'API publique | Faible -- integration manuelle |
| **Consuel** | Portail web | Pas d'API publique | Faible -- integration manuelle |
| **Homeys** | API collecte donnees energetiques | Payant (offre partenaire) | Haute -- alternative a Data Connect |

**Conclusion API** : L'ecosysteme IRVE est **pauvre en API ouvertes**. Enedis Data Connect est la seule API vraiment exploitable. Pour le reste (ADVENIR, Consuel, Qualifelec), il faudra generer des documents et guider l'utilisateur dans les portails manuels.

---

## SECTION 5 : Dynamiques Ecosysteme

### 5.1 Relations installateurs - constructeurs bornes - Enedis

- **Installateurs** : TPE d'electriciens (2-15 salaries typiquement), qualifies P1/P2/P3
- **Constructeurs de bornes** : Schneider, Legrand, Hager, ABB, Wallbox, etc. -- fournissent le materiel mais pas la gestion chantier
- **Enedis** : Intervient pour le raccordement, pas pour l'installation. Perimetro = jusqu'au compteur ([Enedis](https://www.enedis.fr/demarches-borne-recharge-electrique-copropriete))
- **Operateurs de recharge** (Chargekeeper, Izivia, etc.) : Gerent l'exploitation post-installation
- **Bureaux d'etudes** (Mobileese/Optimeese) : Font la conception, pas la realisation

### 5.2 Organismes de formation IRVE (prescripteurs potentiels)

Les formations IRVE doivent etre agreees par Qualifelec depuis le 14 janvier 2018 ([Qualifelec Pros](https://pros.qualifelec.fr/page/formations-irve-agreees)).

**Principaux centres de formation agrees** :
- **AFPA** : Formation continue IRVE P1+P2+P3 ([AFPA](https://www.afpa.fr/formation-continue/infrastructure-de-recharge-pour-vehicules-electriques-irve-niveau-1-formation-de-base-p1-niveau-2-formation-expert-p2-niveau-charge-rapide-p3-))
- **Apricom** : Agree Qualifelec pour P1/P2/P3, Maintenance et Etudes de conception ([Apricom](https://sas-apricom.fr/))
- **Apave** : Formations P1/P2/P3 ([Apave](https://france.apave.com/formation/irve-p1-p2-p3-installer-des-bornes-de-recharge-ac-ou-dc-avec-configuration-specifique))
- **Groupe Cahors** : Formation qualifiante IRVE ([Groupe Cahors](https://www.groupe-cahors.com/fr-france/formation-qualifiante-irve.html))
- **Institec** : Formation IRVE ([Institec](https://institec.fr/formation-infrastructure-de-recharge-pour-vehicules-electrique-irve-niveau-1-et-2-v2/))

**Strategie prescripteur** : Approcher les centres de formation pour **recommander BorneFlow** a leurs stagiaires. Un stagiaire qui obtient sa qualification IRVE et lance son activite est un prospect ideal.

### 5.3 Syndicats et federations

- **FFIE** (Federation Francaise des Integrateurs Electriciens) : 7 500 entreprises adherentes, 150 000 salaries, 50% du secteur electrique francais ([FFIE](https://www.ffie.fr/)). Position active sur l'IRVE, lobbying pour l'egalite de traitement entre operateurs prives et Enedis.
- **SERCE** (Syndicat des Entreprises de Genie Electrique et Climatique) : Federe les grandes entreprises du secteur
- **CAPEB** : Confederation de l'Artisanat et des Petites Entreprises du Batiment, article dedie au marche IRVE ([CAPEB](https://www.capeb.fr/actualites/le-marche-des-bornes-de-recharge-pour-vehicules-electriques))

**Strategie BorneFlow** : La FFIE et la CAPEB sont des canaux de distribution potentiels (newsletters, partenariats, stands salons).

### 5.4 Communautes d'installateurs IRVE

- **Pas de groupe Facebook dedie** identifie pour les installateurs IRVE (marche jeune)
- **Qualifelec IRVE** : Cartographie interactive des installateurs ([Qualifelec IRVE](https://irve.qualifelec.fr/))
- **Forums** : Discussions sporadiques sur les forums d'electriciens generalistes
- **LinkedIn** : Groupes professionnels IRVE naissants
- **Salons** : Energaia, Electric-Road, Solaire Expo

**Conclusion communaute** : La communaute des installateurs IRVE est **fragmentee et immature**. C'est un risque (difficulte d'acquisition) mais aussi une opportunite (premier arrivant pour federer la communaute).

---

## SECTION 6 : Synthese et Recommandation

### 6.1 Forces du projet

1. **Gap concurrentiel confirme** : Le segment "gestion de chantier IRVE" est un veritable trou entre la conception (Homeys/Optimeese) et la supervision (Chargekeeper/Praxedo). IRVE Manager a echoue, personne d'autre ne l'occupe.

2. **Cadre reglementaire favorable** :
   - Loi LOM creant des vagues d'obligation (2025, 2027, 2029)
   - Programme ADVENIR dote de 520M EUR
   - Norme NFC 15-100-7-722 renouvelee (sept 2025) creant un besoin de conformite
   - Obligation Consuel renforcee en collectif

3. **Marche en croissance explosive** :
   - +20% de bornes publiques par an
   - +43% d'immeubles equipes en un an
   - Objectif x20 (de 185K a 7M points) d'ici 2030

4. **Complexite administrative reelle** :
   - Dossier ADVENIR en 7 etapes avec delais stricts
   - Attestation Consuel avec documents specifiques
   - Qualification IRVE a verifier
   - Raccordement Enedis avec delais variables (1-6 mois)

5. **Taille de marche suffisante** :
   - 5 000+ entreprises qualifiees IRVE
   - TAM : 5 400 x 100 EUR/mois x 12 = **6,5M EUR/an**
   - Objectif de 3 000 EUR/mois = 30 clients payants (0,6% du marche)

6. **Complementarite ecosysteme** : Homeys (avant), BorneFlow (pendant), Chargekeeper (apres) forment une chaine logique. Partenariats possibles.

### 6.2 Faiblesses et risques

1. **Preuve de douleur faible** :
   - Le marche est jeune, les installateurs IRVE gerent aujourd'hui avec Excel, WhatsApp et des classeurs
   - Peu de temoignages publics de "douleur" liee a la gestion administrative IRVE
   - Risque que les installateurs ne percoivent pas encore le besoin d'un outil dedie

2. **Marche de TPE** :
   - Les installateurs IRVE sont des TPE (2-15 salaries)
   - Faible appétit technologique (electriciens de terrain)
   - Budget logiciel limite
   - CAC (cout d'acquisition client) potentiellement eleve

3. **Pauvrete de l'ecosysteme API** :
   - ADVENIR, Consuel, Qualifelec n'ont pas d'API
   - Le logiciel devra generer des documents a soumettre manuellement
   - Valeur ajoutee limitee par rapport a des templates Excel bien faits

4. **Revolt.eco (menace a moyen terme)** :
   - 3M EUR leves, expansion en cours (PV -> PAC -> ?)
   - 30-40% de chevauchement installateurs PV/IRVE
   - Si Revolt decide de pivoter vers l'IRVE, ils ont les moyens et la base clients
   - **Estimation** : 18-24 mois avant une menace reelle (S2 2027 au plus tot)

5. **Complexite metier** :
   - Solo dev = devra maitriser les subtilites reglementaires (Consuel, ADVENIR, NFC 15-100-7-722, P1/P2/P3)
   - Risque d'erreurs dans les documents generes
   - Responsabilite importante si un installateur se fie au logiciel pour la conformite

### 6.3 Red Flags identifies

| Red Flag | Severite | Mitigation |
|---|---|---|
| **Preuve de douleur non documentee** | HAUTE | Valider avec 10-15 installateurs avant de coder |
| **Pas d'API ADVENIR/Consuel** | MOYENNE | Generer des documents PDF pre-remplis, guider l'utilisateur |
| **Revolt.eco (menace future)** | MOYENNE | Etre installe avant leur eventuelle arrivee (18-24 mois) |
| **Marche de TPE peu tech-savvy** | HAUTE | UX ultra-simple, mobile-first, onboarding guide |
| **Solo dev vs complexite reglementaire** | MOYENNE | Partenariat avec un electricien IRVE pour la validation metier |
| **Credit d'impot borne supprime en 2026** | FAIBLE | ADVENIR reste en place, LOM continue |

### 6.4 Opportunites confirmees

1. **Vague 2027** : Obligation pour les parkings de 100-400 places -- generera des milliers de chantiers
2. **Vague 2029** : Obligation pour les parkings de 20-100 places -- encore plus massif
3. **Coproprietes** : +43% d'immeubles equipes par an, 269 000 immeubles potentiels
4. **First mover advantage** : Aucun concurrent actif sur ce creneau exact
5. **Prescripteurs identifies** : Centres de formation IRVE (AFPA, Apricom, Apave) = canal d'acquisition
6. **Partenariats** : Homeys (pre-installation), Chargekeeper (post-installation)

### 6.5 Recommandations strategiques

1. **VALIDER LA DOULEUR AVANT TOUT** : Contacter 15 installateurs IRVE (via Qualifelec ou LinkedIn), leur montrer un prototype Figma. Question cle : "Combien de temps passez-vous sur l'administratif ADVENIR par chantier ?"

2. **MVP minimal** : Commencer par UN seul workflow -- le dossier ADVENIR. Si les installateurs payent pour ca, elargir.

3. **Mobile-first** : Les electriciens sont sur le terrain, pas derriere un bureau.

4. **Prix agressif** : 49-79 EUR/mois, pas 100+. Les TPE comparent a la gratuité (Excel).

5. **Canal d'acquisition** : Centres de formation IRVE > LinkedIn > salons. Offrir une licence gratuite 3 mois aux nouveaux qualifies IRVE.

6. **Partenariat Homeys** : Proposer une integration pour transferer les donnees pre-chantier (simulation -> fiche chantier).

### 6.6 Verdict final

**Le projet BorneFlow est viable mais a haut risque d'execution.**

**Points positifs** :
- Gap concurrentiel reel et confirme
- Marche en croissance explosive avec des drivers reglementaires puissants
- TAM suffisant pour l'objectif de revenus (30 clients = 3 000 EUR/mois)
- Aucun concurrent direct actif

**Points negatifs** :
- Preuve de douleur non validee (risque #1)
- Marche de TPE peu tech-savvy avec faible budget logiciel
- Ecosysteme API pauvre limitant l'automatisation
- Complexite reglementaire forte pour un solo dev

La viabilite depend entierement de la **validation terrain** : si les installateurs confirment que l'administratif IRVE (ADVENIR surtout) est un cauchemar, le produit a de l'avenir. Si la douleur n'est pas assez forte, le projet risque de ne pas trouver de traction.

### 6.7 Score de confiance

| Critere | Score /5 | Commentaire |
|---|---|---|
| Taille de marche | 4/5 | 5 000+ installateurs, croissance forte |
| Gap concurrentiel | 5/5 | Aucun concurrent direct actif |
| Faisabilite technique (solo dev) | 3/5 | Possible en JS/TS, mais complexite metier |
| Preuve de douleur | 2/5 | Non validee, marche jeune |
| Risque concurrentiel | 3/5 | Revolt.eco = menace a 18-24 mois |
| Potentiel de revenus | 3/5 | TPE = budget faible, mais volume suffisant |

**SCORE GLOBAL : 3.3 / 5**

Le projet merite une phase de validation terrain (interviews installateurs) avant engagement. Ne pas coder avant d'avoir 5+ installateurs qui disent "je paierais pour ca".

---

*Recherche realisee le 2026-02-06 par l'agent BMAD. Toutes les URLs ont ete verifiees a cette date.*
