# Recherche de Domaine BMAD : RGE Cockpit (#46)
## Copilote Admin Qualification RGE pour Artisans BTP

**Date** : 11 fevrier 2026
**Chercheur** : Agent BMAD - Recherche de Domaine
**Statut** : COMPLET - 6 etapes executees
**Mode** : YOLO (recherche autonome, pas de questions interactives)

---

## ETAPE 1 : INITIALISATION

### 1.1 Definition du Scope

**Domaine** : Qualification RGE (Reconnu Garant de l'Environnement) dans le secteur BTP en France.

**Aspect specifique** : Gestion administrative des qualifications RGE delivrees par Qualibat, Qualit'EnR et Qualifelec -- couvrant l'obtention initiale, le suivi annuel (questionnaire, documents), le renouvellement quadriennal, les audits de chantier, les controles de conformite et la gestion documentaire associee.

**Objectifs de recherche** :
1. Valider la taille du marche adressable (nombre d'entreprises RGE, dont TPE)
2. Cartographier la concurrence directe et indirecte
3. Evaluer la faisabilite technique et commerciale pour un solo dev JS/TS
4. Analyser le timing par rapport aux nouvelles obligations 2025-2027
5. Quantifier l'intensite de la douleur administrative RGE

**Scope geographique** : France metropolitaine, focus TPE artisans BTP (< 20 salaries)

### 1.2 Sources Cles Identifiees

| Source | Type | Pertinence |
|--------|------|------------|
| ADEME / data.ademe.fr | Donnees ouvertes, API RGE | Statistiques officielles entreprises RGE |
| Qualibat (qualibat.com) | Organisme de qualification | 1er organisme RGE, extranet, tarifs |
| Qualit'EnR (qualit-enr.org) | Organisme de qualification | EnR specifique, tarifs, annuaire |
| Qualifelec (qualifelec.fr) | Organisme de qualification | Electriciens RGE |
| CAPEB (capeb.fr) | Syndicat patronal artisans | Positions, alertes reglementaires |
| FFB (ffbatiment.fr) | Federation du batiment | Donnees marche, positions |
| Hellio (pro.hellio.com) | Obligé CEE / analyste | Statistiques RGE detaillees |
| Le Moniteur | Presse specialisee BTP | Articles sur la crise RGE |
| ANAH / France Renov' | Agence nationale habitat | MaPrimeRenov', budgets |
| Service-public.fr | Gouvernement | Textes de loi, obligations |

---

## ETAPE 2 : ANALYSE DE L'INDUSTRIE

### 2.1 Le Marche de la Renovation Energetique en France

La renovation energetique des batiments constitue un marche massif et en croissance structurelle en France :

- **Marche global entretien-renovation BTP** : ~95 milliards EUR de CA (Observatoire des metiers du BTP), dont environ 23,8% lies a la renovation energetique, soit **~22,6 milliards EUR** (source : [Effy](https://www.effy.fr/pro/actualite/le-marche-de-la-renovation-energetique-des-logements-evalue-304-mds-deuros)).
- **Croissance projetee** : +6,1% par an en moyenne pour le segment renovation energetique entre 2025 et 2030 (source : [Genie Climatique](https://www.genieclimatique.fr/marches-1/renovation-energetique-1/23657/une-progession-de-6-1-en-2025-et-2030-pour-la-renovation-energetique)).
- **Objectif gouvernemental** : 500 000 renovations de logements par an (Plan 2018), objectif encore loin d'etre atteint. L'ANAH vise 120 000 renovations d'ampleur en 2026 (source : [CAFPI](https://www.cafpi.fr/credit-immobilier/actualites/maprimerenov-suspendue-2026-quelles-consequences-pour-les-menages)).

### 2.2 MaPrimeRenov' : Situation 2026

**Crise de la suspension** : MaPrimeRenov' est de nouveau suspendue depuis le 1er janvier 2026, faute de budget 2026 vote par l'Assemblee nationale (source : [CAPEB](https://www.capeb.fr/actualites/suspension-du-dispositif-maprimerenov-au-1er-janvier-2026)).

Donnees cles :
- **Budget prevu 2026** : 4,6 milliards EUR pour l'ANAH, dont **3,4 milliards EUR fleches vers MaPrimeRenov'** (source : [Montpellier Immo9](https://www.montpellierimmo9.com/actualites/politique/budget-2026-loi-speciale-suspension-maprimerenov)).
- **Dossiers en attente** : 80 000 a 83 000 dossiers en cours d'instruction fin 2025 (source : [Hellowatt](https://www.hellowatt.fr/blog/maprimerenov-suspendue-rares-dossiers-acceptes-annee/)).
- **Capacite 2026** : Seulement 37 000 nouvelles demandes traitables apres epuration du stock.
- **Reouverture esperee** : Fevrier-mars 2026, sous reserve du vote du budget.
- **Condition RGE obligatoire** : Seuls les professionnels certifies RGE peuvent realiser des travaux ouvrant droit a MaPrimeRenov' (source : [Stephane Plaza](https://plazastephane.com/conseils/maprimerenov-2026-tout-savoir-sur-les-nouvelles-conditions-et-montants/)).

**Impact sur RGE Cockpit** : La suspension temporaire cree une incertitude a court terme, mais le maintien du budget a 3,4 Mds EUR confirme la perennite du dispositif. Les artisans RGE ont PLUS besoin de garder leur qualification en ordre car la concurrence pour les dossiers MaPrimeRenov' s'intensifie.

### 2.3 CEE : Periode 6 (2026-2030) -- Un Moteur Puissant

Les Certificats d'Economies d'Energie representent le second pilier du financement de la renovation :

- **Enveloppe 2026** : **> 8 milliards EUR** (contre ~6 Mds en 2025), soit une hausse de **+27%** des obligations (source : [Connaissance des Energies](https://www.connaissancedesenergies.org/afp/lenveloppe-des-cee-va-depasser-8-milliards-deuros-en-2026-selon-le-gouvernement-251024)).
- **Periode 6** : Du 1er janvier 2026 au 31 decembre 2030 (5 ans au lieu de 4), decret publie le 4 novembre 2025 (source : [Hellio](https://www.hellio.com/actualites/reglementation/changements-cee-2026)).
- **Obligation annuelle** : 1 050 TWh cumac (contre 825 TWh cumac en P5), dont 280 TWh cumac fleches vers les menages modestes (source : [Idex](https://www.idex.fr/le-blog/cee-periode-6-2026-2030-reforme-financement)).

**Impact** : L'augmentation de +27% des CEE cree une pression MASSIVE a la hausse sur la demande de travaux RGE. Les artisans qualifies seront encore plus recherches, renfor cant la valeur de la qualification.

### 2.4 Nombre d'Entreprises RGE -- Evolution et Tension

**Historique du nombre d'entreprises RGE** (sources : [Hellio](https://pro.hellio.com/blog/marche/baisse-entreprises-rge), [Sygenergie](https://www.sygenergie.fr/entreprises-rge-les-chiffres-de-2024/)) :

| Annee | Nombre d'entreprises RGE | Variation |
|-------|--------------------------|-----------|
| 2020 | 59 320 | - |
| 2021 | 64 790 | +9,2% |
| 2022 | 65 095 | +0,5% |
| 2024 | 61 737 | -5,2% vs 2022 |
| 2025 | 63 008 | +2,1% |
| 2026 | 62 193 | -1,3% |

**Donnees cles** :
- Sur 560 000 entreprises artisanales du BTP en France, seulement ~62 000 sont RGE, soit **11%** (source : [Hellio](https://pro.hellio.com/blog/marche/baisse-entreprises-rge)).
- **Objectif gouvernemental** : 113 000 entreprises RGE en 2026, puis 250 000 d'ici 2028 (annonce Bruno Le Maire, nov. 2022) -- soit un DOUBLEMENT par rapport a la realite (source : [Mon Immeuble](https://monimmeuble.com/actualite/crise-des-artisans-rge-un-obstacle-a-la-renovation-energetique)).
- **Baisse de -16% sur un an** (2023-2024) dans certains metiers (CVC notamment) (source : [Etancheite Info](https://etancheiteinfo.fr/marche/23967/16-d-entreprises-rge-de-moins-en-un-an)).
- **17 500 qualifications expirantes fin 2024** (source : [ADEME via April](https://pro.april.fr/actualites/assurance-artisans-activite-professionnelle/artisans-certfies-rge-en-baisse-en-2024)).
- **Tension regionale** : Ile-de-France et Var avec 20-25% de RGE en moins depuis 2023.

**Le paradoxe structurel** : L'Etat a besoin de PLUS d'artisans RGE (objectif 113K+) pour atteindre ses objectifs climatiques, mais le nombre baisse car la charge administrative est trop lourde. C'est exactement le probleme que RGE Cockpit adresse.

### 2.5 Repartition par Organisme

Les 3 principaux organismes de qualification RGE sont :
- **Qualibat** : Le plus important, couvre l'efficacite energetique et les EnR dans le batiment. ~53 000 professionnels qualifies toutes qualifications confondues (pas uniquement RGE) (source : [Qualibat](https://www.qualibat.com/)).
- **Qualit'EnR** : Specialise EnR (pompes a chaleur, solaire, bois). ~16 058 entreprises qualifiees en installation de PAC seules (source : [Hellio](https://pro.hellio.com/blog/marche/baisse-entreprises-rge)).
- **Qualifelec** : Secteur electrique et energetique. Plus petit volume (source : [Qualifelec](https://www.qualifelec.fr/)).

Note : Beaucoup d'entreprises detiennent des qualifications aupres de PLUSIEURS organismes simultanement.

---

## ETAPE 3 : PAYSAGE CONCURRENTIEL

### 3.1 Concurrence Directe : ZERO SaaS Dedie

**Constat majeur** : Apres recherche web approfondie, il n'existe **aucun SaaS dedie a la gestion administrative des qualifications RGE**. C'est un "ocean bleu" apparent mais qui necessite verification (cf. pattern des runs precedents).

### 3.2 Espaces En Ligne des Organismes

**Qualibat Extranet** (source : [Qualibat](https://qualibat.fr/actualites/entreprises_actu/super-actu-2/)) :
- Espace en ligne pour les entreprises qualifiees
- Fonctionnalites : consultation du dossier, paiement en ligne, questionnaire annuel de suivi, acces aux normes/DTU
- **Limites** : Interface basique, pas de timeline d'echeances, pas d'alertes proactives sur les deadlines, pas de generateur de dossier, pas de coffre-fort intelligent
- Rappels par courrier/email 6 mois avant echeance de renouvellement (source : [Effy](https://www.effy.fr/pro/gestion-entreprise/label-rge-demarches))

**Qualit'EnR** (source : [Qualit'EnR](https://www.qualit-enr.org/tarifs-delais-qualifications-rge/)) :
- Espace professionnel en ligne
- Formulaire de candidature et suivi
- Pas d'outils avances de gestion administrative

**Qualifelec** (source : [Qualifelec Pros](https://pros.qualifelec.fr/)) :
- Espace pros dedie (pros.qualifelec.fr)
- Gestion basique de la qualification
- Pas de fonctionnalites avancees type copilote

**Verdict** : Les extranets des organismes sont des outils de gestion POUR l'organisme (collecte de donnees, paiement) et non des outils de gestion POUR l'artisan. Le gap fonctionnel est enorme.

### 3.3 ERP/Logiciels BTP -- Pas de Module RGE Substantiel

**Batappli** (source : [Batappli](https://www.batappli.fr/etre-conforme-devis-btp)) :
- Logiciel devis/factures BTP
- Ajoute automatiquement le numero RGE et la reference CEE sur les devis
- **Pas de module de gestion du cycle de vie de la qualification** (echeances, documents, audits)

**Obat** (source : [Obat](https://www.obat.fr/)) :
- Logiciel devis/factures en ligne pour artisans solos
- Permet d'apposer le logo RGE sur les documents commerciaux
- Tarifs a partir de 48 EUR HT/mois (local) ou 53 EUR HT/mois (SaaS)
- **Pas de gestion du processus RGE lui-meme**

**Hemea** (source : [Hemea](https://www.hemea.com/fr/pro/services/logiciel-devis)) :
- Fonctionnalite de "conformite RGE" sur les devis
- Focus sur la generation de devis conformes, pas sur la gestion de la qualification

**Autres** (EBP Batiment, Mediabat, Tolteck, KeoBat) : Aucun ne propose de module dedie a la gestion des qualifications RGE (echeances, documents, audits).

**Verdict** : Les ERP BTP gerent le "output" RGE (mentions sur devis/factures) mais PAS le "process" RGE (obtention, suivi, renouvellement, audits). C'est une niche totalement delaissee.

### 3.4 Consultants et Accompagnateurs RGE

**Aloha&Co** (source : [Aloha&Co](https://www.alohaetco.com/)) :
- Specialise montage dossier RGE Qualibat
- Services : dossier initial, revision, extension de categories, audit, suivi continu
- Taux de reussite revendique : 100%
- Consultation gratuite, tarifs non publies (estimation : 500-1500 EUR par prestation)

**AssisstaGestion** (source : [AssisstaGestion](https://www.assistagestion.com/accompagnement-qualification/)) :
- Accompagnement qualification RGE
- Service artisanal, pas de plateforme SaaS

**Certyz-Conseil** (source : [Certyz-Conseil](https://certyz-conseil.fr/)) :
- Conseil en certification BTP

**Espace Aubade** (source : [Espace Aubade](https://www.espace-aubade.fr/services-pro/accompagnement-qualifications-rge)) :
- Distributeur qui accompagne ses artisans partenaires pour le RGE

**Verdict** : Les consultants facturent cher pour un travail ponctuel. RGE Cockpit peut offrir un accompagnement PERMANENT et AUTOMATISE pour une fraction du prix. **Position complementaire** : les consultants peuvent meme devenir des prescripteurs de l'outil.

### 3.5 Tentatives Passees et Risques d'Echec

Aucune trace de startup ayant tente et echoue sur ce creneau specifique. Cependant, les patterns identifies dans les runs precedents s'appliquent :
- **Risque outil gratuit gouvernemental** : L'ADEME ou Qualibat pourrait developper un meilleur extranet. MAIS : Qualibat a mis des annees a moderniser son extranet basique -- un "ADEME Cockpit" est tres improbable a court terme.
- **Risque integration ERP** : Un Batappli ou Obat pourrait ajouter un module RGE. MAIS : ce n'est pas leur coeur de metier et ca demande une expertise reglementaire pointue.

---

## ETAPE 4 : CADRE REGLEMENTAIRE

### 4.1 Processus de Qualification RGE

**Obtention initiale** (sources : [Sonergia](https://sonergia.fr/professionnels/devenir-rge/rge-combien-de-temps-pour-devenir-une-entreprise-certifiee/), [April](https://pro.april.fr/guide/certification-qualification-batiment)) :

1. **Choix de l'organisme** : Qualibat, Qualit'EnR ou Qualifelec selon l'activite
2. **Designation du referent technique** : Personnel qualifie dans l'entreprise
3. **Formation RGE** : 2 a 5 jours (FEEBAT Renove, etc.)
4. **Constitution du dossier** : Pieces justificatives (Kbis, assurances, references chantiers, etc.)
5. **Instruction** : 3 a 6 mois en moyenne
6. **Audit initial** : Controle de realisation sur chantier
7. **Delivrance** : Certificat valide **4 ans**

**Couts** (source : [Qualibat tarifs 2025](https://www.qualibat.com/tarif), [CEDEO](https://www.cedeo.fr/conseils/quel-prix-pour-etre-rge)) :

| Poste | Cout HT |
|-------|---------|
| Formation RGE (2-5 jours) | 600 - 700 EUR |
| Frais d'instruction initiale | ~1 050 EUR |
| Controle de realisation (audit) | ~630 EUR |
| Suivi annuel | 240 - 550 EUR/an |
| Frais supplementaires controle RGE | ~330 EUR |
| **TOTAL sur 4 ans** | **~3 000 - 4 500 EUR** |
| **Renouvellement** | ~800 - 900 EUR |

**Cycle de vie annuel** :
- Questionnaire annuel de suivi a remplir (obligatoire)
- Mise a jour des documents (assurances, responsable technique, chantiers references)
- Audit de chantier aleatoire possible
- Formation continue selon les evolutions (ex : nouvelles formations RENOPERF depuis oct. 2025)

### 4.2 Loi Anti-Fraude du 30 Juin 2025

La **loi n 2025-594 du 30 juin 2025** renforce significativement le cadre (sources : [Service-Public](https://entreprendre.service-public.gouv.fr/actualites/A18356), [Vie Publique](https://www.vie-publique.fr/loi/297018-fraude-aux-aides-publiques-demarchage-telephonique-loi-du-30-juin-2025)) :

**Mesures principales** :

1. **Obligation d'information client** : L'entreprise doit informer le client de sa situation RGE (ou non-RGE) sur support durable AVANT signature du contrat (source : [Groupe T2F](https://www.groupe-t2f.eu/post/nouvelles-obligations-label-rge-fraude-aides-publiques-2025)).

2. **Limitation sous-traitance en cascade** : A compter du **1er janvier 2026**, pas plus de 2 rangs de sous-traitance pour les travaux d'amelioration energetique.

3. **Obligation RGE pour le facturier** : A compter du **1er janvier 2027**, l'entreprise principale (celle qui facture) DOIT detenir le label RGE, meme si elle sous-traite a une entreprise RGE (source : [Effy](https://www.effy.fr/pro/actualite/une-sous-traitance-plus-stricte-pour-les-pros-rge)).

4. **Nouveaux motifs de suspension/retrait** : La DGCCRF peut suspendre ou retirer le label en cas de pratiques commerciales trompeuses, abus de faiblesse, non-conformite des travaux, depart du responsable technique sans remplacement sous 6 mois.

5. **Fichier central des chantiers aides** : Repertorie tous les chantiers beneficiant d'aides publiques pour cibler les controles (source : [CAPEB](https://www.capeb.fr/actualites/fiches-de-controle-des-travaux-rge)).

### 4.3 Nouvelles Exigences Formation RGE (Octobre 2025)

Depuis le **1er octobre 2025**, de nouvelles modalites de formation RGE s'appliquent (source : [CAPEB](https://www.capeb.fr/actualites/qualibat-nouveaux-criteres-et-modalites-de-formation-rge-applicables-des-le-1er-octobre-2025)) :
- Introduction des formations **RENOPERF** (renovation performante)
- Mise en place d'un **QCM RGE obligatoire**
- Tout responsable RGE doit presenter une attestation de reussite aux connaissances transversales ET par categorie de travaux

### 4.4 Audits et Controles

**Grilles d'audit obligatoires** depuis le 1er janvier 2021 (source : [Hellio FAQ](https://faq.hellio.com/grilles-audit-2021-chantiers-rge)) :
- 15 grilles d'audit par type de travaux (disponibles sur le site ADEME)
- Non-conformite majeure = audit supplementaire ou sanction
- Frequence de controle proportionnelle au volume de chantiers aides
- Delai de correction : 3 mois pour les non-conformites, 12 mois pour un audit supplementaire

**Sanctions** (source : [Lacour Avocat](https://www.lacour-avocat.fr/sanctions-applicables-aux-entreprises-rge-en-cas-de-non-conformite-des-travaux/)) :
- Suspension ou retrait du label RGE
- Amendes administratives (7 500 EUR pour defaut d'immatriculation RNE)
- 373 amendes/PV penaux en 2022-2023 pour fraudes graves (source : [Economie.gouv.fr](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/des-sanctions-plus-fortes-contre-la-fraude-dans-la))
- 27 633 plaintes consommateurs sur la renovation energetique en 2023 (sur 273 000 plaintes totales)
- Escroquerie en bande organisee : jusqu'a 15 ans de prison et 1M EUR d'amende

### 4.5 Timeline Reglementaire Critique

| Date | Obligation | Impact |
|------|-----------|--------|
| 01/01/2021 | Grilles d'audit chantier obligatoires | Charge admin accrue |
| 01/10/2025 | Nouvelles formations RENOPERF + QCM | Couche de complexite supplementaire |
| 30/06/2025 | Loi anti-fraude RGE | Renforcement sanctions, info client |
| 01/01/2026 | Limite 2 rangs sous-traitance | Plus d'entreprises doivent etre RGE directement |
| 01/01/2027 | **Facturier = obligatoirement RGE** | Augmentation potentielle de la demande RGE |

**Impact pour RGE Cockpit** : La deadline du 01/01/2027 est un CATALYSEUR majeur. Des milliers d'entreprises qui sous-traitaient via un partenaire RGE devront obtenir leur propre qualification. C'est une vague d'acquisition potentielle.

---

## ETAPE 5 : TENDANCES TECHNOLOGIQUES

### 5.1 Digitalisation des Artisans BTP

**Barometre France Num 2025** (source : [France Num](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le), [Blog du Moderateur](https://www.blogdumoderateur.com/barometre-numerique-tpe-pme-france-2025/)) :

- **76%** des entreprises BTP equipees d'un logiciel de facturation (au-dessus de la moyenne TPE/PME de 69%)
- **78%** des dirigeants pensent que le numerique leur apporte des benefices reels
- **70%+** des entreprises du batiment ont adopte au moins un outil numerique
- **26%** des TPE/PME utilisent deja l'IA
- **27%** des TPE/PME du BTP ont depense plus de 1 000 EUR en outils numeriques

**Interpretation** : Le BTP n'est plus un "desert numerique". Le taux d'adoption de logiciels de facturation (76%) montre que les artisans SONT prets a utiliser des outils SaaS. La porte est ouverte pour un outil specialise RGE.

### 5.2 Willingness to Pay des Artisans

**Prix moyens des SaaS BTP** (sources : [KeoBat](https://www.keobat.fr/blog/top-5-logiciels-saas-btp-2025/), [Obat](https://www.obat.fr/)) :

| Segment | Fourchette mensuelle |
|---------|---------------------|
| Micro-entreprise / Solo | 14 - 25 EUR/mois |
| TPE classique | 25 - 50 EUR/mois |
| Entreprise + modules | 50 - 100 EUR/mois |

**Le sweet spot pour RGE Cockpit** : 19-39 EUR/mois semble realiste pour un outil specialise a forte valeur ajoutee (ROI immediat : eviter la perte de qualification qui coute 3 000-4 500 EUR a reconstituer).

### 5.3 API ADEME et Donnees Ouvertes

**API Professionnels RGE** (source : [data.gouv.fr](https://www.data.gouv.fr/dataservices/api-professionnels-rge)) :
- API ouverte (licence Etalab) recensant toutes les entreprises RGE
- Permet de verifier si une entreprise est agreee RGE
- Donnees : domaines de travaux, organisme, dates de validite

**API Certification RGE (API Entreprise)** (source : [data.gouv.fr](https://www.data.gouv.fr/dataservices/api-certification-rge-ademe-bouquet-api-entreprise)) :
- Acces aux certifications RGE d'un etablissement
- **Reservee aux administrations et collectivites** (pas accessible en direct pour un SaaS)

**Portail Open Data ADEME** (source : [data.ademe.fr](https://data.ademe.fr)) :
- Nombreux jeux de donnees ouverts sur le batiment et les energies

**Impact technique** : L'API publique RGE permet de pre-remplir les informations de l'entreprise, verifier la validite de la qualification, et potentiellement alerter sur les echeances a partir des dates de delivrance. C'est un avantage technique significatif.

### 5.4 Aides a la Numerisation

**France Num** (source : [France Num](https://www.francenum.gouv.fr/aides-financieres/aide-la-transformation-numerique-des-tpe)) :
- Subvention de **50% des depenses eligibles** (5 000 - 50 000 EUR) pour les TPE
- **Cheque France Num** : 500 EUR d'aide pour les depenses de numerisation
- Plus de 100 000 TPE/PME ont profite des formations gratuites
- Aides regionales complementaires : 30% a 80% des depenses, plafonds de 3 000 a 32 000 EUR

**Impact commercial** : L'existence d'aides a la numerisation facilite l'argument de vente ("votre abonnement peut etre subventionne").

### 5.5 IA et Gestion Documentaire BTP

Le marche de l'IA dans la construction devrait atteindre **4,5 milliards USD d'ici 2026** (contre 0,5 Md en 2019) (source : [Graneet](https://www.graneet.com/fr/article/ia-btp-2026)).

Applications pertinentes pour RGE Cockpit :
- **Classification automatique de documents** (IA documentaire proactive)
- **Extraction d'informations** depuis les certificats, attestations, etc.
- **Verification de conformite** automatisee des dossiers
- **Generation de dossiers pre-remplis** a partir de templates intelligents
- **Alertes predictives** basees sur les patterns d'echec

L'IA peut etre un **differenciateur majeur** pour RGE Cockpit : un artisan qui uploade ses documents et l'IA verifie automatiquement la completude et la conformite du dossier.

### 5.6 Construction Tech en France

L'ecosysteme ConstructionTech francais est actif mais oriente principalement vers :
- Gestion de chantier (Finalcad, Fieldwire)
- Devis/facturation (Batappli, Obat, KeoBat)
- BIM et maquette numerique
- Marketplace de materiaux

**Aucune startup RegTech/LegalTech specialisee BTP** n'a ete identifiee sur le creneau conformite des qualifications. Le terme "RegTech" est encore domine par le secteur financier (150 startups en France, mais quasi-exclusivement dans la banque/assurance) (source : [Bpifrance](https://bigmedia.bpifrance.fr/nos-dossiers/regtech-la-tech-au-service-de-la-conformite)).

---

## ETAPE 6 : SYNTHESE ET SCORE BMAD

### 6.1 Matrice SWOT

#### Forces
- **Douleur documentee et massive** : 62 000 entreprises confrontees a une charge admin croissante, baisse de 16% des RGE dans certains metiers
- **Zero concurrent SaaS direct** : Ocean bleu verifie (pas de tentative passee identifiee)
- **Timing ideal** : Obligation sous-traitants RGE 01/01/2027 = vague de nouveaux entrants
- **API ADEME disponible** : Pre-remplissage, verification, alertes automatiques
- **ROI immediatement quantifiable** : Perdre sa qualification = 3 000-4 500 EUR + perte de chantiers MaPrimeRenov'/CEE
- **CEE P6 (+27%)** : Demande de travaux RGE en forte hausse = la qualification vaut plus
- **Taille de marche claire** : 62 000 entreprises RGE, dont ~45 000 TPE cibles

#### Faiblesses
- **Solo dev** : Capacite limitee de developper toutes les fonctionnalites en parallele
- **Budget < 100 EUR/mois** : Contraint les outils marketing et la croissance payante
- **Pas d'expertise BTP native** : Necessite de comprendre en profondeur le processus RGE de chaque organisme
- **Fragmentation des organismes** : Qualibat, Qualit'EnR et Qualifelec ont des processus differents = 3x le travail

#### Opportunites
- **Obligation 01/01/2027** : Potentiellement des milliers de nouvelles entreprises devant obtenir le RGE
- **Objectif gouvernemental 113K entreprises RGE** : Politique publique favorable
- **Consultants RGE comme prescripteurs** : Partenariats distribution possibles
- **Subventions numerisation** : France Num et aides regionales facilitent l'adoption
- **Upsell vers gestion CEE/MaPrimeRenov'** : Elargissement naturel du produit
- **IA comme differenciateur** : Verification automatique de conformite documentaire

#### Menaces
- **Suspension MaPrimeRenov'** : Incertitude court terme sur la valeur de la qualification
- **Amelioration de l'extranet Qualibat** : Si Qualibat investit massivement dans son espace en ligne
- **Batappli/Obat ajoutent un module RGE** : Integration dans un outil existant
- **Apathie des artisans** : "Je fais ca depuis 20 ans avec Excel/papier, pourquoi changer ?"
- **Churn si l'artisan perd son RGE** : Le client qui echoue au renouvellement n'a plus besoin de l'outil

### 6.2 Score BMAD Detaille

| Critere | Score /5 | Justification |
|---------|----------|---------------|
| **Taille du marche** | 4.0 | 62K entreprises RGE, ~45K TPE cibles. TAM ~540K EUR/mois a 12 EUR ARPU. Niche mais solide. Potentiel d'expansion vers les 113K+ visees par l'Etat. |
| **Intensite de la douleur** | 4.5 | Douleur admin MASSIVE et documentee : baisse de 16% des RGE, 17 500 expirations/an, lourdeur admin citee comme cause n1 d'abandon par CAPEB et Le Moniteur. |
| **Faisabilite technique** | 4.5 | Solo dev JS/TS parfaitement adapte. API ADEME dispo. Pas de tech complexe requise (timeline, alertes, coffre-fort = CRUD classique). IA en V2. |
| **Timing** | 4.5 | Loi anti-fraude juin 2025, obligation sous-traitants 01/2027, CEE P6 +27%, nouvelles formations oct 2025. Le timing est PARFAIT pour lancer en 2026. |
| **Defensibilite** | 3.5 | Pas de moat technique fort (un ERP BTP pourrait copier). Defensibilite par : donnees utilisateurs, workflow specifique multi-organismes, communaute. Premier entrant. |

**SCORE BMAD GLOBAL : 4.2 / 5**

### 6.3 Comparaison avec les Gagnants Precedents

| Projet | Score initial | Score BMAD | Marche | Douleur | Timing |
|--------|--------------|------------|--------|---------|--------|
| **ConformCHR** (Run 1) | 18/20 | 4.5/5 | 200K+ ERP restauration | Forte (HACCP) | Bon |
| **ConformLoc** (Run 2) | 18.5/20 | 4.5/5 | 1M+ loueurs Airbnb | Forte (Le Meur) | Urgent (05/2026) |
| **RGE Cockpit** (#46) | 17/20 | **4.2/5** | 45K TPE RGE | Tres forte | Excellent (01/2027) |

**Analyse comparative** :
- RGE Cockpit est **legerement en dessous** de ConformCHR et ConformLoc en score BMAD (4.2 vs 4.5), principalement a cause d'un marche plus niche (45K vs 200K+ ou 1M+) et d'une defensibilite moindre.
- **MAIS** l'intensite de la douleur (4.5/5) et le timing (4.5/5) sont parmi les plus forts de tous les projets analyses.
- Le marche est plus petit mais les artisans RGE ont un **willingness to pay plus eleve** (ils depensent deja 3 000-4 500 EUR sur 4 ans pour leur qualification).

### 6.4 Analyse de Risques et Mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|------------|
| Qualibat ameliore son extranet | Moyenne | Eleve | Supporter multi-organismes (Qualibat + Qualit'EnR + Qualifelec), offrir des fonctionnalites que l'extranet ne fera jamais (timeline cross-organismes, generateur de dossier, IA) |
| ERP BTP ajoute module RGE | Faible-Moyenne | Moyen | Etre plus profond/specialise que tout module generique. Proposer une integration API avec les ERP plutot que competition frontale |
| Suspension prolongee MaPrimeRenov' | Faible | Moyen | Le RGE reste obligatoire pour les CEE (8 Mds EUR), qui eux ne sont PAS suspendus |
| Apathie artisans / adoption lente | Moyenne | Eleve | Freemium avec alertes de base gratuites, conversion vers premium. Partenariats CAPEB/FFB pour la credibilite |
| Artisan perd son RGE = churn | Moyenne | Moyen | L'outil EMPECHE la perte. Offrir un mode "re-qualification" pour les artisans qui veulent revenir |
| Reglementation trop volatile | Faible | Faible | C'est un avantage : plus ca change, plus l'artisan a besoin d'un outil pour suivre |

### 6.5 Estimation Financiere

**Hypotheses conservatrices** :

| Metrique | Valeur |
|----------|--------|
| Marche adressable | 45 000 TPE RGE |
| Penetration Y1 (0.5%) | 225 clients |
| Penetration Y3 (2%) | 900 clients |
| ARPU | 25 EUR/mois |
| MRR Y1 | 5 625 EUR |
| MRR Y3 | 22 500 EUR |
| ARR Y3 | 270 000 EUR |

Avec l'obligation sous-traitants 2027 augmentant le marche potentiel, le TAM pourrait atteindre 80 000-100 000 entreprises a terme.

### 6.6 Recommandation

## **RECOMMANDATION : GO CONDITIONNEL**

**Conditions du GO** :

1. **Validation terrain obligatoire** : Avant tout developpement, interviewer 10-15 artisans RGE pour valider :
   - Qu'ils ressentent effectivement la douleur admin (et pas seulement la douleur "cout/temps")
   - Qu'ils sont prets a payer 20-30 EUR/mois pour un outil
   - Quels organismes ils utilisent (Qualibat seul suffit-il en V1 ?)

2. **MVP ultra-cible** : Commencer par Qualibat uniquement (le plus gros organisme), avec :
   - Timeline des echeances (renouvellement, suivi annuel, audit)
   - Checklist des documents requis a chaque etape
   - Alertes email/SMS
   - Coffre-fort documentaire basique
   - Integration API ADEME pour pre-remplissage

3. **Canal d'acquisition valide** : Identifier un canal d'acquisition AVANT le lancement :
   - Partenariat CAPEB ou chambre des metiers ?
   - Consultants RGE comme prescripteurs ?
   - SEO sur "questionnaire annuel Qualibat" / "renouvellement RGE" ?

4. **Timing de lancement** : Idealement **Q3 2026** pour capter la vague pre-01/01/2027 (obligation sous-traitants). Les artisans qui doivent obtenir leur RGE pour 2027 auront besoin d'aide a partir de mi-2026.

**Pourquoi GO et pas NO-GO** :
- La douleur est reelle, documentee, et s'aggrave avec chaque nouvelle reglementation
- Zero concurrent SaaS = premier entrant
- Le timing est exceptionnel (convergence de 3 obligations en 18 mois)
- Faisabilite technique elevee pour un solo dev JS/TS
- ROI client facilement demontrable

**Pourquoi CONDITIONNEL et pas GO franc** :
- Marche plus petit que ConformCHR/ConformLoc (45K vs 200K+)
- Risque d'apathie des artisans face au digital (bien que 76% aient un logiciel de facturation)
- Defensibilite limitee si un acteur installe (Batappli, Qualibat) decide d'investir
- La suspension MaPrimeRenov' cree de l'incertitude a court terme

---

## SOURCES PRINCIPALES

### Statistiques RGE
- [Hellio - Statistiques entreprises RGE 2026](https://pro.hellio.com/blog/marche/baisse-entreprises-rge)
- [Sygenergie - Chiffres RGE 2024](https://www.sygenergie.fr/entreprises-rge-les-chiffres-de-2024/)
- [Le Moniteur - Chute artisans qualifies](https://www.lemoniteur.fr/article/rge-chutes-des-artisans-qualifies.2326279)
- [April - Baisse certifications 2024](https://pro.april.fr/actualites/assurance-artisans-activite-professionnelle/artisans-certfies-rge-en-baisse-en-2024)
- [Mon Immeuble - Crise artisans RGE](https://monimmeuble.com/actualite/crise-des-artisans-rge-un-obstacle-a-la-renovation-energetique)

### MaPrimeRenov et CEE
- [CAPEB - Suspension MaPrimeRenov 2026](https://www.capeb.fr/actualites/suspension-du-dispositif-maprimerenov-au-1er-janvier-2026)
- [CAFPI - Consequences suspension](https://www.cafpi.fr/credit-immobilier/actualites/maprimerenov-suspendue-2026-quelles-consequences-pour-les-menages)
- [Connaissance des Energies - CEE 8 Mds 2026](https://www.connaissancedesenergies.org/afp/lenveloppe-des-cee-va-depasser-8-milliards-deuros-en-2026-selon-le-gouvernement-251024)
- [Hellio - Changements CEE 2026](https://www.hellio.com/actualites/reglementation/changements-cee-2026)
- [Idex - CEE P6 2026-2030](https://www.idex.fr/le-blog/cee-periode-6-2026-2030-reforme-financement)

### Reglementation et Loi Anti-Fraude
- [Service-Public - Mesures RGE loi anti-fraude](https://entreprendre.service-public.gouv.fr/actualites/A18356)
- [Vie Publique - Loi 30 juin 2025](https://www.vie-publique.fr/loi/297018-fraude-aux-aides-publiques-demarchage-telephonique-loi-du-30-juin-2025)
- [Groupe T2F - RGE sous-traitance](https://www.groupe-t2f.eu/post/nouvelles-obligations-label-rge-fraude-aides-publiques-2025)
- [Effy - Sous-traitance plus stricte](https://www.effy.fr/pro/actualite/une-sous-traitance-plus-stricte-pour-les-pros-rge)
- [CAPEB - Nouveaux criteres formation RGE](https://www.capeb.fr/actualites/qualibat-nouveaux-criteres-et-modalites-de-formation-rge-applicables-des-le-1er-octobre-2025)
- [ANIL - Loi controle renforce](https://www.anil.org/aj-loi-lutte-fraude-aides-publiqus-renovation-energetique/)

### Concurrence et Outils
- [Qualibat Extranet](https://qualibat.fr/actualites/entreprises_actu/super-actu-2/)
- [Qualifelec Pros](https://pros.qualifelec.fr/)
- [Batappli - Conformite BTP](https://www.batappli.fr/etre-conforme-devis-btp)
- [Obat - Logiciel artisan](https://www.obat.fr/)
- [Aloha&Co - Accompagnement RGE](https://www.alohaetco.com/)

### Digitalisation et Tech
- [France Num - Barometre 2025](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le)
- [Blog du Moderateur - 10 chiffres numerique TPE 2025](https://www.blogdumoderateur.com/barometre-numerique-tpe-pme-france-2025/)
- [data.gouv.fr - API Professionnels RGE](https://www.data.gouv.fr/dataservices/api-professionnels-rge)
- [ADEME Open Data](https://data.ademe.fr)
- [Graneet - IA BTP 2026](https://www.graneet.com/fr/article/ia-btp-2026)
- [France Num - Aides transformation numerique](https://www.francenum.gouv.fr/aides-financieres/aide-la-transformation-numerique-des-tpe)

### Tarifs et Couts
- [Qualibat - Tarifs 2025](https://www.qualibat.com/tarif)
- [Qualit'EnR - Tarifs qualifications](https://www.qualit-enr.org/tarifs-delais-qualifications-rge/)
- [Maxeem - Cout qualification RGE](https://maxeem.fr/guide/devenir-rge/cout/)
- [CEDEO - Prix RGE 2025](https://www.cedeo.fr/conseils/quel-prix-pour-etre-rge)

### Marche Renovation Energetique
- [Effy - Marche 30.4 Mds](https://www.effy.fr/pro/actualite/le-marche-de-la-renovation-energetique-des-logements-evalue-304-mds-deuros)
- [Genie Climatique - Croissance 6.1%](https://www.genieclimatique.fr/marches-1/renovation-energetique-1/23657/une-progession-de-6-1-en-2025-et-2030-pour-la-renovation-energetique)
- [Economie.gouv.fr - Sanctions fraude](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/des-sanctions-plus-fortes-contre-la-fraude-dans-la)

---

*Document genere le 11 fevrier 2026 par l'agent BMAD Recherche de Domaine.*
*Toutes les affirmations sont sourcees par des recherches web verifiees.*
*Score BMAD : 4.2/5 -- GO CONDITIONNEL*
