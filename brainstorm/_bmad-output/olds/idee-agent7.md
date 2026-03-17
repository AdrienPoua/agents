# 10 Idees de Projets SaaS B2B - Verticaux Metiers Francais Peu Digitalises

**Agent 7 - Angle de recherche : Professions et secteurs specifiques en France manquant d'outils SaaS modernes adaptes**

**Date :** 2026-02-06

---

Ce document presente 10 opportunites SaaS B2B identifiees dans des niches professionnelles francaises sous-digitalisees. Chaque idee a ete validee par une recherche de marche approfondie couvrant la taille du secteur, la concurrence existante, les contraintes reglementaires et les declencheurs d'achat concrets. Les secteurs exclus (formation/Qualiopi, syndic copropriete, BTP/artisans, avocats, restaurants, agriculture, pharmacies, medecine esthetique, veterinaires, notaires, wedding planners, salles de sport, gestion locative, transport/logistique, cliniques medicales) ne figurent pas dans cette selection.

---

## 1. DiagPilot - Le copilote administratif du diagnostiqueur immobilier

### La Douleur
- **Qui souffre ?** Les ~11 500 diagnostiqueurs immobiliers certifies en France (dont beaucoup sont independants ou en micro-structures de 1 a 3 personnes)
- **De quoi ?** Gestion administrative ecrasante entre la planification des tournees, la transmission obligatoire a l'ADEME (sous peine d'amende de 1 500EUR par DPE non transmis), le suivi des certifications multi-domaines (amiante, gaz, electricite, DPE...), le renouvellement des assurances RCP, et la conformite aux nouvelles obligations 2025-2026 (QR Code de certification, limite de 1 000 DPE/an, controles renforces par le Cofrac)
- **Combien ca coute ?** 8-12h/semaine de travail administratif pur. Risque d'amende de 1 500EUR par DPE non transmis. Perte de certification = arret d'activite
- **Frequence ?** Quotidien (planification, transmission ADEME), mensuel (suivi certifications), annuel (renouvellement assurance, audits)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Depuis 2025 : obligation de QR Code attestant la certification en cours, limite de 1 000 DPE/an, controles renforces. En 2026 : nouveau coefficient electrique DPE (passage de 2,3 a 1,9), extension DPE obligatoire aux coproprietes de 50 lots et moins, renforcement des parcours de certification
- **Quand ?** Progressif 2025-2026, avec echeances precises au 1er janvier 2026
- **Quelle urgence ?** Critique - Non-conformite = perte de certification = arret d'activite

### L'Acquisition Client
- **Ou trouver les prospects ?** Annuaire officiel des diagnostiqueurs certifies sur le site du Ministere (diagnostiqueurs.din.developpement-durable.gouv.fr), base de donnees publique data.gouv.fr, Federation Interprofessionnelle du Diagnostic Immobilier (FIDI), groupes Facebook et LinkedIn de diagnostiqueurs, salons Diagactu
- **Combien sont-ils ?** ~11 500 certifies, ~81 700 certificats actifs (multi-domaines). Marche adressable : les independants et petites structures (70-80% du total)
- **Quel message d'accroche ?** "Fini les amendes ADEME et les oublis de renouvellement : DiagPilot automatise 100% de votre administratif reglementaire."

### La Concurrence
- **Qui existe ?** Liciel (52% de PDM, ~100-150EUR/mois), Atlibitum (15%), OBBC (10%), ITGA/Imm'PACT (8%). Ces logiciels se concentrent sur la realisation technique des diagnostics (calcul DPE, rapports amiante...)
- **Pourquoi sont-ils inadaptes ?** Liciel et ses concurrents sont des logiciels de production de rapports techniques, pas des outils de gestion d'activite. La planification de tournee est basique, le suivi de conformite reglementaire (certifications, assurances, transmission ADEME) est quasi-inexistant ou manual. Notes moyennes de 6 a 7,5/10 seulement
- **Mon angle differenciant ?** "Pas un logiciel de diagnostic de plus, mais le back-office intelligent qui gere tout le reste : conformite, planning, alertes, et admin."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Integration API ADEME pour verification automatique des transmissions, systeme d'alertes predictives (renouvellement certifications, assurances), optimisation de tournees avec geocoding, Event Sourcing pour audit trail complet de conformite

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 19/20

---

## 2. MicroConform - Conformite et pilotage pour gestionnaires de micro-creches

### La Douleur
- **Qui souffre ?** Les gestionnaires de ~6 800 micro-creches en France (en croissance constante, representant 50% des creations d'EAJE)
- **De quoi ?** Le decret n 2025-304 (1er avril 2025) impose de nouvelles obligations majeures : projet d'evaluation de la qualite d'accueil obligatoire, limitation a 2 micro-creches par directeur, designation obligatoire d'un responsable technique, visites de conformite PMI systematiques, autodiagnostic batimentaire obligatoire avant sept. 2026, autorisations a renouveler tous les 15 ans
- **Combien ca coute ?** 15-20h/mois de paperasse administrative supplementaire. Risque de fermeture en cas de non-conformite lors des visites PMI. Cout de non-conformite : 50 000-100 000EUR (perte de l'agrement)
- **Frequence ?** Hebdomadaire (suivi qualite, presences, ratios), trimestriel (reporting PMI), annuel (renouvellements)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Decret 2025-304 applicable progressivement jusqu'au 1er septembre 2026. Referentiel batimentaire national a respecter. Visites PMI renforcees et systematiques
- **Quand ?** Application progressive, echeance finale le 1er septembre 2026
- **Quelle urgence ?** Critique - Fermeture administrative possible en cas de non-conformite

### L'Acquisition Client
- **Ou trouver les prospects ?** Federations (FFEC, FFMCLA), CAF departementales (listes des structures agreees), salons Creches&Co, groupes Facebook de gestionnaires de micro-creches (tres actifs, >10 000 membres), LinkedIn, annuaire CAF des EAJE
- **Combien sont-ils ?** ~6 800 micro-creches + ~10 000 creches classiques = ~16 700 EAJE. Cible principale : les 6 800 micro-creches privees, souvent gerees par des gestionnaires independants ou petits reseaux
- **Quel message d'accroche ?** "Decret 2025-304 : generez votre dossier de conformite PMI en 1 clic et evitez la fermeture administrative."

### La Concurrence
- **Qui existe ?** Meeko (leader design, ~50-80EUR/mois), Kidizz (~20% des creches, 4,5/5 sur stores), iNoe/Aiga (historique, secteur public), Helios (SaaS), optiCreche. Aucun n'a leve 100M$+
- **Pourquoi sont-ils inadaptes ?** Ces logiciels gerent le quotidien (presences, transmissions parents, facturation). AUCUN ne propose un module de conformite reglementaire specifique au decret 2025-304 : autodiagnostic batimentaire, suivi du projet d'evaluation qualite, preparation des visites PMI, alertes de renouvellement d'agrement
- **Mon angle differenciant ?** "Le seul outil concu POUR le decret 2025-304 : conformite PMI, autodiagnostic batimentaire et evaluation qualite integres."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Generateur de documents reglementaires (projet d'evaluation qualite, autodiagnostic), workflow d'audit avec checklist dynamiques, tableau de bord de conformite multi-etablissements, export PDF conforme PMI, Real-time notifications

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 3. CourtiConform - Conformite DDA/DORA pour courtiers en assurance TPE

### La Douleur
- **Qui souffre ?** Les ~37 000 courtiers en assurance en France, dont 90% sont des TPE (moins de 11 salaries)
- **De quoi ?** Accumulation d'obligations reglementaires : DDA (Directive Distribution d'Assurances) avec devoir de conseil renforce, RGPD, LCB-FT (lutte contre le blanchiment), et depuis janvier 2025, le reglement DORA (resilience operationnelle numerique) qui impose des exigences de cybersecurite et de continuite d'activite. L'ACPR renforce ses controles avec la Recommandation 2024-R-03 (entree en vigueur 31 decembre 2025)
- **Combien ca coute ?** 6-10h/semaine pour un courtier solo a gerer la conformite manuellement. Sanctions ACPR : jusqu'a 100 000EUR d'amende + radiation. Cout d'un consultant conformite : 5 000-15 000EUR/an
- **Frequence ?** Quotidien (devoir de conseil a chaque vente), trimestriel (reporting), annuel (formation DDA 15h obligatoire, audit interne)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Reglement DORA applicable depuis le 17 janvier 2025. Recommandation ACPR 2024-R-03 (renforcement devoir de conseil assurance-vie) au 31 decembre 2025. Controles ACPR en hausse
- **Quand ?** Janvier 2025 (DORA), decembre 2025 (recommandation ACPR), continu (controles)
- **Quelle urgence ?** Haute - Controles ACPR avec sanctions financieres lourdes

### L'Acquisition Client
- **Ou trouver les prospects ?** Registre ORIAS (Organisme pour le Registre des Intermediaires en Assurance, base publique et telechargeable), associations professionnelles (CSCA, Planete CSCA), salons AMRAE, groupes LinkedIn courtage assurance, listes des chambres syndicales regionales
- **Combien sont-ils ?** ~37 000 courtiers inscrits a l'ORIAS, cible prioritaire : les ~33 000 TPE
- **Quel message d'accroche ?** "Controle ACPR imminent ? Generez votre dossier de conformite DDA/DORA complet en 30 minutes au lieu de 30 heures."

### La Concurrence
- **Qui existe ?** Custy (conformite courtage, ~100-200EUR/mois), ASSUR3D (CRM + conformite, prix sur devis), Lya Protect (marketplace + outils). Aucun acteur dominant avec levee 100M$+
- **Pourquoi sont-ils inadaptes ?** Custy et ASSUR3D sont des outils generalistes CRM avec module conformite ajoute en surcouche. Aucun ne couvre DORA (trop recent). Les TPE trouvent ces solutions trop complexes et trop cheres pour un courtier solo
- **Mon angle differenciant ?** "Conformite DDA + DORA cle-en-main pour le courtier solo : 0 jargon juridique, 100% actionnable, a partir de 49EUR/mois."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 10 semaines
- **Features CV impressionnantes** : Generateur automatique de documents reglementaires (IPID, devoir de conseil, fiche information), workflow DORA (cartographie SI, plan de continuite), CQRS pour audit trail reglementaire, chiffrement bout-en-bout pour conformite RGPD

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 19/20

---

## 4. GeoDesk - Gestion d'activite et facturation pour geometres-experts

### La Douleur
- **Qui souffre ?** Les ~1 106 cabinets de geometres-experts en France (1 878 inscrits a l'Ordre, 10 000 salaries, CA sectoriel de 1 050MEUR en 2024)
- **De quoi ?** Gestion d'activite archaique : les geometres utilisent des logiciels techniques (CAO, DAO, SIG) excellents pour la production, mais la gestion commerciale, la facturation, le suivi de chantier et le time-tracking restent sur Excel ou des outils generiques inadaptes. Difficulte a suivre la rentabilite par affaire, les relances clients, et a respecter les obligations ordinales (baremes, assurances)
- **Combien ca coute ?** 5-8h/semaine de gestion administrative par cabinet. Sous-facturation estimee a 10-15% du CA (temps non suivi = temps non facture). Pour un cabinet moyen a ~950 000EUR de CA, cela represente 95 000-140 000EUR/an de manque a gagner
- **Frequence ?** Quotidien (saisie temps), hebdomadaire (suivi affaires), mensuel (facturation, relances)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Facturation electronique obligatoire au 1er septembre 2026 (ETI) et 1er septembre 2027 (PME/TPE). Les cabinets devront emettre et recevoir des factures au format electronique via une plateforme agreee. Obligation de e-reporting a l'administration fiscale
- **Quand ?** 1er septembre 2026 / 1er septembre 2027 selon la taille
- **Quelle urgence ?** Haute - Echeance legale ferme, non-respect = sanctions fiscales

### L'Acquisition Client
- **Ou trouver les prospects ?** Ordre des Geometres-Experts (annuaire public avec tous les cabinets), UNGE (Union Nationale des Geometres-Experts), salons professionnels (Intergeo France), revue Geometre (publication professionnelle), LinkedIn (communaute active)
- **Combien sont-ils ?** 1 106 cabinets, marche concentre et identifiable a 100%
- **Quel message d'accroche ?** "Facture electronique 2026 obligatoire : passez a GeoDesk et transformez votre suivi d'affaires en machine a facturer."

### La Concurrence
- **Qui existe ?** Solutions generiques : Sage, EBP, QuickBooks. Solutions BTP : Batappli, Obat. Aucune solution SaaS specifique geometre-expert identifiee
- **Pourquoi sont-ils inadaptes ?** Pas de gestion d'affaires specifique (bornage, copropriete, topographie), pas d'integration avec les logiciels CAO/DAO metier, pas de suivi du temps par type d'intervention geomtrique, pas de conformite aux obligations ordinales
- **Mon angle differenciant ?** "Le seul ERP SaaS concu PAR et POUR les geometres : suivi d'affaires, time-tracking terrain, facturation electronique et conformite ordinale."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 10 semaines
- **Features CV impressionnantes** : Integration API Chorus Pro pour facturation electronique, time-tracking mobile avec geolocalisation terrain, tableau de bord de rentabilite par affaire en temps reel, export comptable automatique, API ouverte pour integration CAO/DAO

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 5. AutoPilot.ecole - Gestion tout-en-un pour auto-ecoles independantes

### La Douleur
- **Qui souffre ?** Les ~10 000 auto-ecoles independantes (80% des 12 500 etablissements francais), CA sectoriel de 2,1 milliards EUR
- **De quoi ?** Jonglage entre planning moniteurs, suivi pedagogique des eleves, gestion des places d'examen (attribution opaque par la prefecture), facturation CPF/financement, et pression concurrentielle des plateformes en ligne (Ornikar, En Voiture Simone) qui captent 12% du marche avec des tarifs 15-20% inferieurs. Les independants perdent des eleves faute d'experience digitale comparable (reservation en ligne, suivi de progression, paiement en ligne)
- **Combien ca coute ?** Perte estimee de 3-5 eleves/mois par auto-ecole faute d'experience digitale moderne (soit 3 000-5 000EUR/mois). 8h/semaine de gestion administrative manuelle
- **Frequence ?** Quotidien (planning, reservations), hebdomadaire (suivi progression), mensuel (facturation)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Facturation electronique obligatoire (sept. 2026/2027). Concurrence des plateformes en ligne en hausse constante. Penurie de moniteurs qui oblige a optimiser chaque creneau. Reforme du permis de conduire en cours (abaissement de l'age)
- **Quand ?** Pression concurrentielle continue, echeance facturation electronique 2026-2027
- **Quelle urgence ?** Haute - Risque de fermeture pour les independants non digitalises (le secteur perd des etablissements chaque annee)

### L'Acquisition Client
- **Ou trouver les prospects ?** Base de donnees des auto-ecoles agreees par les prefectures (publique), Codes Rousseau (partenaire fournisseur de contenu pedagogique, acces au reseau), salons professionnels CNPA, groupes Facebook d'auto-ecoles (tres actifs), annuaire toutsurmesfinances.com
- **Combien sont-ils ?** ~10 000 auto-ecoles independantes
- **Quel message d'accroche ?** "L'experience Ornikar pour vos eleves, avec le controle d'une auto-ecole traditionnelle : reservation en ligne, suivi de progression et paiement en 1 clic."

### La Concurrence
- **Qui existe ?** Klaxo (6 000+ utilisateurs, leader, ~50-100EUR/mois), AGX/Harmobil', rdv360, Drivup. Aucun n'a leve 100M$+
- **Pourquoi sont-ils inadaptes ?** Klaxo est solide mais se concentre sur le planning/facturation. Aucune solution ne propose un portail eleve moderne comparable aux plateformes en ligne (reservation en temps reel, suivi gamifie de la progression, paiement fractionne integre, simulateur code en ligne). Les auto-ecoles independantes veulent "l'experience Ornikar" sans abandonner leur independance
- **Mon angle differenciant ?** "Le portail eleve qui fait revenir les clients chez les independants : reservation instantanee, progression gamifiee, et zero commission contrairement aux plateformes."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 12 semaines
- **Features CV impressionnantes** : Application mobile eleve avec progression gamifiee (React Native/Expo), systeme de reservation en temps reel avec WebSockets, algorithme d'optimisation de planning moniteurs, integration API CPF/ANTS, paiement fractionne avec Stripe

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## 6. PatriConform - Assistant conformite pour Conseillers en Gestion de Patrimoine independants

### La Douleur
- **Qui souffre ?** Les ~5 500 Conseillers en Investissements Financiers (CIF) / CGP independants enregistres aupres de l'AMF en France
- **De quoi ?** Mille-feuille reglementaire intenable pour un independant : MIF2 (adequation des conseils en investissement), DDA (distribution d'assurance), LCB-FT (anti-blanchiment), RGPD, obligations CIF aupres de l'AMF, formation continue obligatoire. Chaque recommandation client necessite un parcours reglementaire complet (KYC, profil de risque, product governance, reporting) qui peut prendre 2-3h manuellement
- **Combien ca coute ?** 10-15h/semaine de travail de conformite. Cout d'un RCCI externalise : 8 000-20 000EUR/an. Sanctions AMF : jusqu'a 100 000EUR d'amende + radiation
- **Frequence ?** A chaque recommandation client (quotidien), reporting trimestriel AMF, audit annuel par l'association CIF

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controles AMF/ACPR en hausse constante. Audits annuels obligatoires par les associations CIF (CNCGP, Anacofi, CNCEF). Facturation electronique 2026-2027. 69% des experts-comptables recommanderont une plateforme agreee a leurs clients CGP
- **Quand ?** Audits annuels (dates fixes par association), controles AMF aleatoires
- **Quelle urgence ?** Haute - Radiation = fin d'activite. 60% des clients CGP prets a investir dans l'accompagnement conformite

### L'Acquisition Client
- **Ou trouver les prospects ?** Registre ORIAS (public), listes des associations CIF (CNCGP : 1 800+ membres, Anacofi, CNCEF), salon Patrimonia (le plus grand salon CGP en France, ~10 000 visiteurs), groupes LinkedIn CGP, presse specialisee (Gestion de Fortune, Investissement Conseils)
- **Combien sont-ils ?** ~5 500 CIF, dont ~3 500 independants ou petits cabinets
- **Quel message d'accroche ?** "Audit CIF dans 3 mois ? Generez votre dossier de conformite MIF2/DDA complet en 20 minutes au lieu de 20 heures."

### La Concurrence
- **Qui existe ?** Harvest/O2S (~200-300EUR/mois, leader historique, 1 500 cabinets equipes), Karanext (ERP CGP), MustCompliance (conformite), Mozart Prestige Patrimoine (205EUR/mois)
- **Pourquoi sont-ils inadaptes ?** Harvest/O2S est puissant mais complexe et cher pour un CGP solo. Karanext est un ERP generaliste. MustCompliance est recente et limitee. Aucune solution ne propose un parcours de conformite "guide" pas-a-pas, comprehensible sans formation juridique, avec generation automatique de tous les documents reglementaires
- **Mon angle differenciant ?** "La conformite CGP en pilote automatique : parcours guide pas-a-pas, documents pre-remplis, a 79EUR/mois au lieu de 300EUR pour les solutions lourdes."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 10 semaines
- **Features CV impressionnantes** : Moteur de regles reglementaires (DDA/MIF2/LCB-FT) configurable, generateur de documents PDF conformes, CQRS + Event Sourcing pour piste d'audit complete, chiffrement zero-knowledge pour donnees clients sensibles, API integration avec les agreagateurs patrimoniaux

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 7. PropretePlus - Pilotage d'interventions et conformite sociale pour entreprises de proprete

### La Douleur
- **Qui souffre ?** Les ~15 500 entreprises de proprete en France (600 000 employes, 21 Mds EUR de CA), dont la majorite sont des TPE/PME
- **De quoi ?** Gestion de planning ultra-complexe (equipes de nettoyage multi-sites, horaires decales 5h-8h et 18h-22h, forte rotation du personnel), suivi des heures et pointage terrain imprecis (source de litiges prud'homaux), conformite convention collective Proprete (majorations nuit, jours feries, anciennete), et surtout l'annexe 7 de la convention collective qui impose la reprise du personnel en cas de changement de prestataire (un cauchemar administratif)
- **Combien ca coute ?** 10-20h/semaine de gestion planning/RH. Litiges prud'homaux lies au pointage : 5 000-30 000EUR par litige. Non-conformite convention collective : risque penal
- **Frequence ?** Quotidien (planning, pointage), mensuel (paie, declarations sociales), a chaque changement de marche (annexe 7)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Facturation electronique obligatoire 2026-2027. Annexe 7 (reprise de personnel lors de perte/gain de marche) : chaque changement de contrat declenche une obligation legale complexe. Contentieux prud'homaux en hausse dans le secteur. Durcissement des controles URSSAF sur le travail detache
- **Quand ?** A chaque gain/perte de marche (recurrent), facturation electronique sept. 2026-2027
- **Quelle urgence ?** Haute - L'annexe 7 est une obligation legale immediate a chaque changement de marche

### L'Acquisition Client
- **Ou trouver les prospects ?** Federation des Entreprises de Proprete (FEP), annuaire monde-proprete.com, salons Europropre/ISSA, groupes LinkedIn "proprete et multiservice", CCI regionales, base SIRENE (codes NAF 8121Z, 8122Z, 8129A, 8129B)
- **Combien sont-ils ?** ~15 500 entreprises avec au moins 1 salarie. Cible prioritaire : les 5 000-8 000 PME (10-250 salaries)
- **Quel message d'accroche ?** "Annexe 7, pointage terrain, paie complexe : PropretePlus gere automatiquement les casse-tetes RH qui paralysent votre croissance."

### La Concurrence
- **Qui existe ?** Organilog (~30-80EUR/mois, generaliste interventions), Sevensoft Proprete (historique, on-premise), 2BePragma (SaaS PME), Econeto (gestion commerciale). Aucun acteur dominant avec levee 100M$+
- **Pourquoi sont-ils inadaptes ?** Sevensoft est vieillissant et on-premise. Organilog est generaliste (pas specifique proprete). Aucun ne gere l'annexe 7 (transfert de personnel entre prestataires) ni la convention collective Proprete de maniere native. Le pointage mobile terrain est basique ou absent
- **Mon angle differenciant ?** "Le seul SaaS qui integre l'annexe 7, la convention collective Proprete et le pointage mobile terrain : zero litige, zero paperasse."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 12 semaines
- **Features CV impressionnantes** : Application mobile de pointage avec geofencing (validation presence sur site), moteur de calcul paie convention collective Proprete, workflow automatise annexe 7 (transfert personnel), planning multi-sites drag-and-drop en temps reel (WebSockets), integration API DSN

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 17/20

---

## 8. CTManager - Gestion et conformite pour centres de controle technique independants

### La Douleur
- **Qui souffre ?** Les ~6 800 centres de controle technique automobile agrees en France (26,65 millions de controles/an), dont une part significative sont des centres independants non-rattaches a un reseau
- **De quoi ?** Les centres independants doivent gerer : planning de rendez-vous avec pics de demande (avant les vacances, les periodes d'echeance), conformite reglementaire stricte (agrement prefectoral, equipements calibres, formation des controleurs), relation avec l'OTC (Organisme Technique Central), gestion commerciale (relances clients pour contre-visites), et bientot la facturation electronique. Les reseaux (Dekra, Securitest, Autovision) ont des outils maison ; les independants non
- **Combien ca coute ?** 5-8h/semaine de gestion admin. Perte de clients par mauvaise relance des contre-visites (10-15% de no-show = 50-100EUR perdus par oubli). Non-conformite equipement = suspension d'agrement
- **Frequence ?** Quotidien (planning, accueil), mensuel (reporting OTC, calibration), annuel (renouvellement agrement)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Facturation electronique obligatoire 2026-2027. Controles reguliers de l'OTC sur la conformite des centres. Pression concurrentielle des reseaux franchises qui offrent des services digitaux (prise de RDV en ligne, rappels automatiques)
- **Quand ?** Facturation electronique sept. 2026-2027, controles OTC reguliers
- **Quelle urgence ?** Moyenne-Haute - Perte de competitivite face aux reseaux + echeance facturation electronique

### L'Acquisition Client
- **Ou trouver les prospects ?** Liste des centres agrees disponible sur le site du Ministere de l'Ecologie, annuaire UTAC-OTC, syndicat professionnel SNCTA, groupes Facebook de controleurs techniques independants, salons Equip Auto
- **Combien sont-ils ?** ~6 800 centres, dont ~2 000-2 500 independants (hors reseaux Dekra, Securitest, Autovision, Autosur)
- **Quel message d'accroche ?** "Offrez a vos clients la meme experience que Dekra ou Securitest : prise de RDV en ligne, rappels automatiques, et conformite OTC en 1 clic."

### La Concurrence
- **Qui existe ?** ProTechnologies/AutoSoft Explorer (62% de PDM sur les independants, logiciel reglementaire + gestion), CTonline (planning en ligne). ProTechnologies est le leader inconteste
- **Pourquoi sont-ils inadaptes ?** AutoSoft Explorer est le standard reglementaire mais c'est un logiciel ancien (interface datee) centre sur la production du PV de controle, pas sur l'experience client ou le marketing. Pas de CRM, pas de relance automatique des contre-visites, pas de portail client moderne, pas de gestion de la reputation en ligne
- **Mon angle differenciant ?** "Le complement d'AutoSoft qui transforme votre centre en machine commerciale : CRM, relances automatiques, avis Google, et portail client moderne."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Integration API avec AutoSoft Explorer (import/export PV), systeme de relance automatique multi-canal (SMS/email) pour contre-visites, collecte d'avis Google automatisee, portail client de prise de RDV en temps reel, analytics de taux de retour et de conversion

### Verdict
- **Score Douleur :** 3/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 15/20

---

## 9. PaysaPilot - ERP leger de gestion d'activite pour entreprises du paysage

### La Douleur
- **Qui souffre ?** Les ~33 550 entreprises du paysage en France (140 300 actifs, 8,5 Mds EUR de CA), dont 90%+ sont des TPE de 1 a 5 salaries
- **De quoi ?** Chiffrage imprecis des chantiers (le paysagiste estime "au feeling"), absence de suivi de rentabilite par chantier (on decouvre qu'on a perdu de l'argent... apres), gestion des plannings d'equipes multi-chantiers sur papier ou WhatsApp, facturation tardive (30-60 jours apres fin de chantier car "on n'a pas le temps"), et perte de contrats d'entretien annuels faute de suivi commercial
- **Combien ca coute ?** Sous-facturation moyenne estimee a 15-20% du CA (temps de trajet, imprevus non chiffres). Pour une TPE a 250 000EUR de CA, cela represente 37 500-50 000EUR/an de manque a gagner. 6-10h/semaine de gestion administrative
- **Frequence ?** Quotidien (planning equipes), hebdomadaire (suivi chantiers), mensuel (facturation, relances)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Facturation electronique obligatoire sept. 2026-2027. Saison haute (mars-octobre) qui expose les lacunes de gestion quand l'activite s'accelere. Pression sur les marges (hausse des couts vegetaux et main-d'oeuvre)
- **Quand ?** Facturation electronique sept. 2027 pour les TPE. Chaque debut de saison (fevrier-mars) est un moment de decision
- **Quelle urgence ?** Moyenne-Haute - Pression economique continue + echeance facturation electronique

### L'Acquisition Client
- **Ou trouver les prospects ?** UNEP (Union Nationale des Entreprises du Paysage, federation professionnelle), VALHOR (interprofession du vegetal), salons Paysalia (Lyon, 25 000+ visiteurs), Pepinieres d'entreprises du paysage, groupes Facebook "paysagistes professionnels" (>20 000 membres), Cerfrance (partenaire comptable du secteur)
- **Combien sont-ils ?** ~33 550 entreprises, cible prioritaire : les ~25 000 TPE sans outil de gestion adapte
- **Quel message d'accroche ?** "Savez-vous si votre dernier chantier etait rentable ? PaysaPilot vous le dit en temps reel, et facture pour vous des la fin du chantier."

### La Concurrence
- **Qui existe ?** JardiContacts/JardiSoft (ERP paysagiste, prix non public), Extrabat (ERP BTP adaptable, ~50-150EUR/mois), Organilog Chantier (generaliste, ~30-80EUR/mois), Paysagiste Moderne (SaaS dedie, recente)
- **Pourquoi sont-ils inadaptes ?** JardiSoft est vieillissant (interface datee, pas mobile-first). Extrabat est un outil BTP generaliste pas specifique paysage. Organilog est trop generic. Paysagiste Moderne est recente et limitee en fonctionnalites. Aucun ne propose de chiffrage intelligent base sur un catalogue vegetaux/materiaux integre ni de suivi de rentabilite en temps reel par chantier
- **Mon angle differenciant ?** "L'ERP mobile-first qui parle paysagiste : chiffrage avec catalogue vegetaux integre, suivi de rentabilite en temps reel, et facturation en 1 tap depuis le chantier."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 12 semaines
- **Features CV impressionnantes** : Application mobile-first (PWA) avec mode hors-ligne pour les chantiers, catalogue vegetaux/materiaux avec tarifs actualises, calcul de rentabilite en temps reel (temps passe vs temps chiffre), geolocalisation des equipes multi-chantiers, facturation electronique integree Chorus Pro

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## 10. EFacture.pro - Mise en conformite facturation electronique pour TPE de sante liberale

### La Douleur
- **Qui souffre ?** Les ~300 000+ professionnels de sante liberaux en France : osteopathes (~30 000), kinesitherapeutes (~90 000), orthophonistes (~25 000), infirmiers liberaux (~130 000), psychologues, etc. Focus sur les non-conventionnes ou partiellement conventionnes qui facturent hors Securite sociale (osteopathes, psychologues, naturopathes = ~80 000 praticiens)
- **De quoi ?** Ces professionnels utilisent des logiciels metier (Doctolib pour les RDV, logiciels de facturation SESAM-Vitale pour les conventionnes) mais les non-conventionnes facturent souvent avec Word/Excel ou des outils minimalistes. L'obligation de facturation electronique (sept. 2027 pour les micro-entreprises/TPE) va les forcer a changer d'outil. Ils ne comprennent ni le e-invoicing, ni le e-reporting, ni les PDP (Plateformes de Dematerialisation Partenaires)
- **Combien ca coute ?** 3-5h/mois de facturation manuelle actuelle. Risque de sanctions fiscales en cas de non-conformite post-2027. Cout d'un expert-comptable pour la mise en conformite : 500-2 000EUR
- **Frequence ?** Quotidien (facturation patients), mensuel (declarations), annuel (bilan fiscal)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Obligation de facturation electronique au 1er septembre 2026 (reception) et 1er septembre 2027 (emission pour TPE/micro-entreprises). Ces praticiens, souvent en micro-entreprise ou BNC, seront obliges de passer a un logiciel conforme
- **Quand ?** 1er septembre 2026 (reception obligatoire), 1er septembre 2027 (emission obligatoire)
- **Quelle urgence ?** Critique - Obligation legale avec echeance ferme, sanctions fiscales

### L'Acquisition Client
- **Ou trouver les prospects ?** Registre ADELI et RPPS (bases publiques de tous les professionnels de sante), syndicats professionnels (SFDO pour osteopathes, SNP pour psychologues, FFMKR pour kines), Doctolib (partenariat potentiel), groupes Facebook de praticiens liberaux (tres actifs, 5 000-30 000 membres par specialite)
- **Combien sont-ils ?** ~80 000 praticiens non-conventionnes ou partiellement conventionnes qui facturent hors SESAM-Vitale. Marche elargi : 300 000+ liberaux de sante
- **Quel message d'accroche ?** "Facturation electronique obligatoire en septembre 2027 : EFacture.pro rend votre cabinet conforme en 10 minutes, pas en 10 jours."

### La Concurrence
- **Qui existe ?** Logiciels metier existants : Doctolib (RDV, pas facturation avancee), Osteo2ls/Oxteo (osteopathes, ~30-50EUR/mois), PerfActive (~10 000 praticiens), Milou. Solutions generiques : Pennylane, Tiime, Evoliz pour la facturation electronique
- **Pourquoi sont-ils inadaptes ?** Les logiciels metier sante se concentrent sur le RDV et le dossier patient, pas sur la conformite facturation electronique (PDP, e-reporting). Les solutions generiques de facturation (Pennylane, Evoliz) ne parlent pas le langage du praticien liberal (pas de gestion des notes d'honoraires, de la TVA exoneree art. 261-4-1 CGI, ni de l'interface avec les mutuelles)
- **Mon angle differenciant ?** "La facturation electronique qui parle sante : notes d'honoraires conformes, TVA exoneree automatique, envoi mutuelle integre, et conformite PDP sans jargon."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Integration PDP (Plateforme de Dematerialisation Partenaire) agreee, generation automatique de factures au format Factur-X, gestion des exonerations TVA sante, API Doctolib/agenda pour pre-remplissage des factures, tableau de bord fiscal en temps reel

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## Tableau Recapitulatif

| # | Projet | Secteur | Cible (nombre) | Total /20 |
|---|--------|---------|-----------------|-----------|
| 1 | DiagPilot | Diagnostiqueurs immobiliers | ~11 500 | 19/20 |
| 2 | MicroConform | Micro-creches | ~6 800 | 19/20 |
| 3 | CourtiConform | Courtiers en assurance | ~37 000 | 19/20 |
| 4 | GeoDesk | Geometres-experts | ~1 106 cabinets | 19/20 |
| 5 | AutoPilot.ecole | Auto-ecoles independantes | ~10 000 | 16/20 |
| 6 | PatriConform | CGP independants | ~5 500 | 17/20 |
| 7 | PropretePlus | Entreprises de proprete | ~15 500 | 17/20 |
| 8 | CTManager | Centres de controle technique | ~2 500 independants | 15/20 |
| 9 | PaysaPilot | Entreprises du paysage | ~33 550 | 16/20 |
| 10 | EFacture.pro | Professionnels sante liberaux | ~80 000 | 17/20 |

## Top 3 Recommandations

1. **DiagPilot** (19/20) - Douleur maximale, declencheur reglementaire 2025-2026 immediat, marche concentre et identifiable, concurrence focalisee sur la technique et pas sur l'administratif. Excellent timing avec le durcissement des obligations ADEME et Cofrac.

2. **MicroConform** (19/20) - Le decret 2025-304 cree une urgence immediate pour 6 800+ micro-creches. Aucun concurrent ne couvre la conformite reglementaire specifique. Marche en forte croissance (50% des creations d'EAJE). Les gestionnaires sont actifs sur les reseaux sociaux et facilement atteignables.

3. **CourtiConform** (19/20) - Marche gigantesque (37 000 courtiers), 90% de TPE sous-equipees, accumulation de reglementations (DDA + DORA + ACPR), base ORIAS publique pour l'acquisition, et sanctions financieres lourdes qui motivent l'achat.

---

*Document genere le 2026-02-06 par Agent 7 - Recherche de niches SaaS B2B dans les verticaux metiers francais peu digitalises.*
