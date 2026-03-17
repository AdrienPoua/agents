# 10 Idees de Projets SaaS B2B - Niches Reglementaires Francaises

**Angle de recherche** : Obligations legales, certifications, normes et audits creant un marche captif en France/Europe.

**Exclusions** : Qualiopi, RGAA, NIS2, e-facture 2026, CSRD/ESG, RGPD, ERP evenements, DPE/energie logement.

**Date d'analyse** : Fevrier 2026

---

## 1. ConformLCB - Conformite anti-blanchiment cle en main pour agents immobiliers

### La Douleur
- **Qui souffre ?** Les ~42 000 titulaires de cartes professionnelles de transaction immobiliere en France (source: CCI 2024), plus les mandataires independants (~80 000 agents commerciaux inscrits).
- **De quoi ?** L'obligation LCB-FT (Lutte Contre le Blanchiment de capitaux et le Financement du Terrorisme) impose aux agents immobiliers : identification et classification des risques clients, procedures de vigilance durant toute la relation d'affaires, conservation des documents 5 ans, et declaration de soupcon a TRACFIN. La plupart des agences gerent cela sur papier ou Excel.
- **Combien ca coute ?** Une enquete DGCCRF de 2022 a revele que la majorite des agences controlees etaient non conformes. L'amende peut aller du blame a l'interdiction d'exercer (retrait de carte professionnelle). Un cabinet de conseil LCB-FT facture 2 000 a 5 000 EUR par agence pour une mise en conformite ponctuelle. L'abonnement a un logiciel generaliste type Kanta est ~150 EUR/mois, mais il est concu pour les experts-comptables, pas les agents immobiliers.
- **Frequence ?** Chaque transaction (vigilance), annuel (mise a jour procedures), continu (veille listes sanctions).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle DGCCRF (les agents immobiliers sont dans le viseur depuis 2022, campagnes de controle intensifiees), renouvellement de carte professionnelle CCI (tous les 3 ans), reception d'un courrier TRACFIN, ou sanction d'un confrere mediatisee.
- **Quand ?** Permanent - les controles DGCCRF sont aleatoires et en augmentation. La Commission Nationale des Sanctions a renforce son activite.
- **Quelle urgence ?** Critique - sanctions allant jusqu'a la suspension de carte professionnelle et interdiction d'exercer.

### L'Acquisition Client
- **Ou trouver les prospects ?** Fichier public des cartes professionnelles CCI (consultable en ligne sur cci.fr), groupes LinkedIn "Agents immobiliers France" (+50 000 membres), salons RENT/MIPIM, federations FNAIM/UNIS/SNPI.
- **Combien sont-ils ?** ~42 000 cartes transaction + ~80 000 mandataires = ~120 000 professionnels concernes.
- **Quel message d'accroche ?** "Passez votre prochain controle DGCCRF anti-blanchiment en 10 minutes au lieu de 10 jours."

### La Concurrence
- **Qui existe ?** Kanta (seed 2022, ~150 EUR/mois, concu pour experts-comptables), Modelo Legal (module basique integre dans leur logiciel immobilier), 1stKYC (SaaS KYC generaliste), Essyca (cabinet conseil, pas SaaS). Aucun n'a leve plus de 5M EUR.
- **Pourquoi sont-ils inadaptes ?** Kanta est pense pour les experts-comptables, pas les transactions immobilieres. Les logiciels immobiliers (Modelo, Apimo) ont des modules LCB-FT rudimentaires. Aucun outil ne guide l'agent immobilier pas a pas avec des templates specifiques au secteur.
- **Mon angle differenciant ?** "Le seul SaaS LCB-FT concu exclusivement pour les professionnels de l'immobilier, avec des parcours de vigilance pre-configures par type de transaction."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Workflow engine pour parcours de vigilance, integration API listes de sanctions (EU/ONU/OFAC), generation PDF automatique des dossiers de conformite, audit trail complet (Event Sourcing), dashboard analytics temps reel.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 19/20

---

## 2. DUERPilot - Le Document Unique d'Evaluation des Risques en mode auto-pilote

### La Douleur
- **Qui souffre ?** Toutes les entreprises francaises des le 1er salarie. En France, on compte environ 4,2 millions d'entreprises employeuses (INSEE). Les PME de 1 a 250 salaries representent la grande majorite.
- **De quoi ?** Le DUERP (Document Unique d'Evaluation des Risques Professionnels) est obligatoire depuis le decret n2001-1016 du 5 novembre 2001 (articles L4121-2 et L4121-3 du Code du travail). Il doit etre mis a jour au minimum 1 fois/an, apres chaque accident du travail, et lors de tout changement de situation. Depuis la loi du 2 aout 2021, le DUERP doit etre conserve 40 ans dans ses versions successives.
- **Combien ca coute ?** Un consultant QSE facture 1 500 a 5 000 EUR pour creer un DUERP. En interne, un dirigeant de TPE y passe 15-30 heures. L'amende pour defaut de DUERP est de 1 500 EUR (contravention 5e classe), doublant en recidive. En cas d'accident du travail sans DUERP, la faute inexcusable de l'employeur est quasi systematiquement retenue (cotisation AT majoree, indemnisation illimitee du salarie).
- **Frequence ?** Annuel minimum + declenchements ponctuels (accident, changement d'organisation).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle de l'inspection du travail (170 000 interventions/an en France), accident du travail (650 000/an en France, source CNAM), passage de seuil d'effectif, creation d'entreprise avec embauche du 1er salarie.
- **Quand ?** Permanent - obligation continue. Pic lors de la date anniversaire de mise a jour annuelle.
- **Quelle urgence ?** Haute - l'absence de DUERP est un quasi-automatisme de faute inexcusable en cas d'accident.

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE (INSEE, liste de toutes les entreprises francaises), experts-comptables comme prescripteurs, reseaux de franchise, CCI, CMA (Chambres de Metiers).
- **Combien sont-ils ?** ~4,2 millions d'entreprises employeuses, dont ~3,9 millions de TPE (1-9 salaries) particulierement sous-equipees.
- **Quel message d'accroche ?** "Generez votre DUERP conforme en 15 minutes grace a l'IA, au lieu de 15 heures avec un consultant."

### La Concurrence
- **Qui existe ?** FranceDUERP (startup IA, early stage), BlueKanGo (SaaS QSE generaliste, +2000 clients, pricing entreprise ~200 EUR/mois), Previsoft (~150 EUR/mois), l'outil gratuit de l'Assurance Maladie (basique, UX mediocre). Eurecia propose un module accessoire. Aucun n'a leve plus de 20M EUR.
- **Pourquoi sont-ils inadaptes ?** BlueKanGo et Previsoft sont des suites QSE completes, complexes et cheres pour une TPE. L'outil gratuit AMELI est trop basique et non maintenu. Les templates Word/Excel circulent mais ne gerent pas le versioning 40 ans ni les mises a jour automatiques.
- **Mon angle differenciant ?** "Un DUERP genere par IA sectorise (restaurant, BTP, bureau, commerce) avec conservation 40 ans garantie et alertes de mise a jour automatiques, des 29 EUR/mois."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Generation assistee par IA (LLM fine-tune sur corpus reglementaire), versioning immutable (Event Sourcing pour historique 40 ans), moteur de regles par code NAF/secteur, export PDF signe electroniquement, alertes intelligentes.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 3. VertFlotte - Conformite verdissement de flotte automobile pour ETI/PME

### La Douleur
- **Qui souffre ?** Les entreprises de plus de 50 collaborateurs possedant une flotte de plus de 100 vehicules legers. Estimation : 8 000 a 15 000 entreprises en France (ETI et grandes PME avec flotte).
- **De quoi ?** La Loi d'Orientation des Mobilites (LOM) impose des quotas de vehicules a faible emission lors du renouvellement de flotte : 20% jusqu'a fin 2026, 40% au 1er janvier 2027, 70% au 1er janvier 2030. Les entreprises doivent effectuer un reporting annuel a l'autorite administrative. La plupart gerent leur flotte dans des fichiers Excel sans vision claire de leur taux de conformite.
- **Combien ca coute ?** Amende de 2 000 EUR par vehicule manquant en 2026, 4 000 EUR en 2027, 5 000 EUR en 2028 (plafonnee a 1% du CA HT France). Pour une flotte de 200 vehicules avec un ecart de 20 vehicules, c'est 40 000 EUR d'amende en 2026, 80 000 EUR en 2027.
- **Frequence ?** Annuel (reporting obligatoire) + suivi continu (planification des renouvellements).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Date limite de declaration annuelle, premiere amende 2026, audit interne de conformite, renouvellement du contrat de leasing (70% des flottes sont en LLD).
- **Quand ?** Premiere echeance de sanctions en 2026. Declaration annuelle obligatoire.
- **Quelle urgence ?** Critique - les sanctions financieres sont significatives et croissantes.

### L'Acquisition Client
- **Ou trouver les prospects ?** Annuaires de gestionnaires de flottes (OVE, ARVAL, ALD), salons Fleet Management (Flotauto), groupes LinkedIn "Gestion de flotte automobile", federations sectorielles.
- **Combien sont-ils ?** ~8 000-15 000 entreprises concernees par l'obligation (flottes >100 vehicules).
- **Quel message d'accroche ?** "Calculez votre ecart de conformite LOM en 2 minutes et evitez jusqu'a 5 000 EUR d'amende par vehicule manquant."

### La Concurrence
- **Qui existe ?** GAC Car Fleet (logiciel gestion flotte generaliste), Winflotte (OptiXT), Cegid Notilus (module flotte dans suite), FleetNote (PME), Phoenix. Ce sont tous des logiciels de gestion de flotte generalistes qui ajoutent une brique "verdissement" en accessoire. Aucune startup pure-play sur la conformite LOM.
- **Pourquoi sont-ils inadaptes ?** Les logiciels de gestion de flotte existants sont des suites completes (TCO, sinistres, carburant) a 500-2000 EUR/mois. Aucun ne se concentre sur le calcul de conformite LOM, la simulation de scenarios de renouvellement et la generation du reporting obligatoire.
- **Mon angle differenciant ?** "Le premier SaaS dedie au calcul de conformite LOM : simulation de votre trajectoire de verdissement, alertes proactives et generation automatique de votre declaration administrative."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines
- **Features CV impressionnantes** : Moteur de simulation Monte-Carlo pour trajectoires de renouvellement, dashboard temps reel avec calcul de conformite, integration API avec fichiers SIV (Systeme d'Immatriculation des Vehicules), export reporting conforme, notifications proactives.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 18/20

---

## 4. EntretienPro360 - Gestion automatisee des entretiens professionnels obligatoires

### La Douleur
- **Qui souffre ?** Les entreprises de 50 salaries et plus (environ 40 000 en France, INSEE). Mais aussi toutes les entreprises des 1 salarie pour l'entretien bi-annuel (4,2 millions).
- **De quoi ?** L'entretien professionnel est obligatoire tous les 2 ans (article L6315-1 du Code du travail). Tous les 6 ans, un "bilan recapitulatif" doit verifier que le salarie a eu ses entretiens + au moins 1 formation non obligatoire. En cas de manquement pour les entreprises de 50+ salaries : abondement correctif de 3 000 EUR par salarie au CPF. Beaucoup d'entreprises oublient les echeances ou ne documentent pas correctement.
- **Combien ca coute ?** 3 000 EUR d'abondement CPF par salarie en cas de manquement. Pour une entreprise de 100 salaries avec 20% de non-conformite = 60 000 EUR. De plus, le salarie peut demander des dommages et interets devant les prud'hommes.
- **Frequence ?** Tous les 2 ans par salarie + bilan a 6 ans. Declenchements ponctuels : retour de conge maternite/parental, longue maladie, conge sabbatique.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Echeance du bilan a 6 ans (la premiere vague massive etait en 2020, reportee COVID, la prochaine echeance touche les salaries embauches en 2020-2021), controle URSSAF/inspection du travail, contentieux prud'homal.
- **Quand ?** Le versement de l'abondement correctif a ete reporte plusieurs fois (dernier report au trimestre suivant la date de l'entretien). Les echeances sont continues, liees a la date d'embauche de chaque salarie.
- **Quelle urgence ?** Haute - 3 000 EUR par salarie c'est un risque financier tres concret et immediat.

### L'Acquisition Client
- **Ou trouver les prospects ?** Annuaire URSSAF des entreprises de 50+ salaries, groupes LinkedIn DRH/RH PME, salons RH (Solutions RH, HR Tech), partenariats avec experts-comptables et cabinets RH externalises.
- **Combien sont-ils ?** ~40 000 entreprises de 50+ salaries directement concernees par la sanction financiere.
- **Quel message d'accroche ?** "Ne payez plus 3 000 EUR par salarie oublie : automatisez vos entretiens professionnels et bilans a 6 ans."

### La Concurrence
- **Qui existe ?** Lucca (SIRH, 4.80 EUR/mois/salarie, suite complete), Eurecia (5.40 EUR/mois/salarie, SIRH), Javelo (entretiens performance + pro, ~150 EUR/mois), Skeely (gratuit pour les basiques). Les SIRH generalistes (Lucca, Eurecia, Silae) proposent un module entretien parmi des dizaines de fonctionnalites.
- **Pourquoi sont-ils inadaptes ?** Les SIRH generalistes noient l'entretien professionnel dans une suite de 15 modules. Le cout total est eleve (SIRH complet 10-20 EUR/salarie/mois). Les TPE/PME n'ont pas besoin d'un SIRH complet juste pour gerer leurs entretiens obligatoires. Aucun ne calcule automatiquement le risque d'abondement CPF.
- **Mon angle differenciant ?** "Un outil standalone laser-focus sur l'entretien professionnel obligatoire : calendrier automatique, alertes avant echeance, calcul du risque d'abondement CPF, et rapport de conformite pour l'inspection du travail."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines
- **Features CV impressionnantes** : Moteur de regles temporelles (calcul automatique des echeances par salarie), CQRS pour separation lecture/ecriture sur historique RH, notifications multicanal (email, SMS, Slack), dashboard de risque financier temps reel, export conforme pour inspection.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 15/20

---

## 5. HabilTrack - Suivi des habilitations et certifications obligatoires des salaries

### La Douleur
- **Qui souffre ?** Les entreprises industrielles, BTP, logistique, energie, agroalimentaire : environ 300 000 entreprises en France (secteurs concernes par des habilitations reglementaires). Concerne aussi les sous-traitants intervenant sur sites clients.
- **De quoi ?** Les salaries doivent detenir des habilitations et certifications a jour pour exercer : habilitation electrique (recyclage tous les 3 ans, norme NF C 18-510), CACES (validite 5 ans pour la plupart, 10 ans pour certains), SST (recyclage tous les 2 ans), ATEX, amiante, travail en hauteur, etc. L'employeur est penalement responsable si un salarie intervient avec une habilitation expiree. La gestion se fait souvent dans des fichiers Excel ingérables.
- **Combien ca coute ?** En cas d'accident avec habilitation expiree : faute inexcusable de l'employeur = cotisation AT majoree + indemnisation illimitee du salarie (souvent 100 000 EUR+). Sanctions penales : 1 an d'emprisonnement et 15 000 EUR d'amende par salarie (art. R4544-10 du Code du travail). Cout indirect : arret de chantier lors d'un controle = 5 000-50 000 EUR/jour de perte de CA.
- **Frequence ?** Continue - chaque salarie a un portefeuille de certifications avec des dates de validite differentes. Suivi mensuel necessaire.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Accident du travail impliquant un salarie non habilite, controle de l'inspection du travail sur chantier, audit client/donneur d'ordre (exigence de conformite des sous-traitants), constat qu'un salarie a une habilitation expiree juste avant une intervention critique.
- **Quand ?** Permanent - risque quotidien sur les chantiers et sites industriels.
- **Quelle urgence ?** Critique - responsabilite penale du dirigeant engagee.

### L'Acquisition Client
- **Ou trouver les prospects ?** FFB (Federation Francaise du Batiment), CAPEB, UIMM, annuaires des organismes de formation CACES (AFPA, AFTRAL), salons Preventica/Expoprotection, groupes LinkedIn QSE/HSE.
- **Combien sont-ils ?** ~300 000 entreprises dans les secteurs concernes (BTP ~500 000 entreprises, industrie ~250 000, logistique ~50 000, avec chevauchements).
- **Quel message d'accroche ?** "Plus jamais d'habilitation expiree sur vos chantiers : alertes automatiques, QR code de verification instantanee."

### La Concurrence
- **Qui existe ?** MaSecuPro (SaaS habilitations, pricing non publie), Previsoft (module habilitations dans suite QSE ~150 EUR/mois), Logitio (module habilitations), GesCOF (pour organismes de formation). BlueKanGo (suite QSE complete). Aucun n'a leve de montant significatif.
- **Pourquoi sont-ils inadaptes ?** Les suites QSE sont lourdes et cheres pour le seul suivi des habilitations. MaSecuPro est le plus proche mais reste peu connu et avec une UX datee. Aucun n'offre de verification instantanee par QR code pour les donneurs d'ordre ou la verification sur site.
- **Mon angle differenciant ?** "L'app mobile-first qui scanne le QR code d'un salarie et affiche instantanement toutes ses habilitations valides, avec alertes 3 mois avant expiration et planification automatique des recyclages."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : PWA mobile-first avec scan QR code, verification en temps reel (Real-time Supabase), moteur de regles de recyclage par type d'habilitation, API REST pour integration donneurs d'ordre, notifications push, tableau de bord predictif des recyclages a planifier.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 6. REPAssist - Pilotage de la conformite REP (Responsabilite Elargie du Producteur)

### La Douleur
- **Qui souffre ?** Tout producteur, importateur ou distributeur mettant des produits sur le marche francais dans l'une des 24 filieres REP : emballages, electronique, textile, meubles, jouets, articles de sport, bricolage, etc. La loi AGEC (2020) a massivement etendu le perimetre. Des centaines de milliers d'entreprises sont concernees, y compris les e-commercants importateurs (Amazon sellers, Etsy, Shopify).
- **De quoi ?** Chaque entreprise doit s'enregistrer sur SYDEREP (plateforme ADEME) pour obtenir un identifiant unique (IDU), adherer au(x) bon(s) eco-organisme(s), declarer annuellement les quantites mises sur le marche, afficher l'IDU sur les supports commerciaux, et payer les eco-contributions. Nouvelles filieres en 2025-2026 : emballages professionnels (REP EPRO), articles de sport et loisirs. La complexite explose pour les entreprises multi-filieres.
- **Combien ca coute ?** Amende administrative pouvant aller jusqu'a 30 000 EUR en cas de non-enregistrement REP (article L541-9-1 du Code de l'environnement). Eco-contributions non payees + majorations. Pour un e-commercant importateur, le risque est aussi le retrait des produits du marche. Un consultant REP facture 3 000-10 000 EUR/an.
- **Frequence ?** Annuel (declaration), continu (veille sur les nouvelles filieres, affichage IDU).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Entree en vigueur d'une nouvelle filiere REP (REP emballages pro en janvier 2026), lancement d'un nouveau produit dans une categorie REP, controle ADEME/DGCCRF, reception d'une mise en demeure.
- **Quand ?** Filieres REP en expansion continue : 2025-2026 nouvelles obligations pour emballages pro, articles de sport. Declaration annuelle (date fixee par chaque eco-organisme, generalement T1).
- **Quelle urgence ?** Haute - impossible de vendre legalement sans IDU et adhesion eco-organisme.

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SYDEREP/ADEME (open data des producteurs enregistres, https://data.ademe.fr), marketplaces e-commerce (vendeurs Amazon/CDiscount), Shopify App Store (pour e-commercants), salons Pollutec, syndicats professionnels (MEDEF, CPME).
- **Combien sont-ils ?** Plusieurs centaines de milliers d'entreprises. La base SYDEREP contient deja des dizaines de milliers de producteurs enregistres. Avec l'extension aux emballages pro en 2026, le perimetre s'elargit enormement.
- **Quel message d'accroche ?** "Gerez toutes vos filieres REP en un seul dashboard : enregistrement, declarations, eco-contributions et affichage IDU automatises."

### La Concurrence
- **Qui existe ?** RecycleMe (conseil REP + outils), Enviropass (conformite REACH/SCIP, mais pas REP), les eco-organismes eux-memes (CITEO, ecosystem) qui offrent des interfaces de declaration basiques. Pas de SaaS multi-filieres centralisant toutes les obligations REP.
- **Pourquoi sont-ils inadaptes ?** Chaque eco-organisme a sa propre interface de declaration - une entreprise multi-filieres doit jongler entre 3-5 portails differents. RecycleMe fait du conseil, pas du SaaS. Aucune solution ne centralise toutes les filieres REP dans un seul outil avec alertes et calcul d'eco-contributions.
- **Mon angle differenciant ?** "Le cockpit REP multi-filieres : connecte a SYDEREP et a tous les eco-organismes, il centralise vos declarations, calcule vos eco-contributions et garantit votre conformite loi AGEC."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 10 semaines
- **Features CV impressionnantes** : Integration API SYDEREP/ADEME (Open Data), moteur de regles par filiere REP, calcul automatique des eco-contributions, architecture multi-tenant, workflow de declaration avec validation, tableau de bord de conformite multi-filieres.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 18/20

---

## 7. PlanPrev - Dematerialisation des plans de prevention pour les entreprises utilisatrices

### La Douleur
- **Qui souffre ?** Toute entreprise faisant intervenir des prestataires ou sous-traitants sur son site : industrie, tertiaire, logistique, grande distribution, collectivites. Estimation : ~200 000 entreprises "utilisatrices" en France qui font appel a des intervenants exterieurs.
- **De quoi ?** Le plan de prevention est obligatoire des que l'intervention depasse 400h/an ou implique des travaux dangereux (articles R4512-6 a R4512-12 du Code du travail). Il doit etre redige AVANT le debut des travaux, signe par les deux parties, et mis a jour. Dans la pratique, des milliers de plans de prevention sont geres en PDF/Word/papier, avec des signatures manuscrites, des versions perdues et aucun suivi de la co-activite reelle.
- **Combien ca coute ?** En cas d'accident d'un salarie d'une entreprise exterieure sans plan de prevention : responsabilite solidaire de l'entreprise utilisatrice. Faute inexcusable = indemnisation illimitee. Arret de chantier = 10 000-100 000 EUR/jour. Le temps administratif de gestion des plans de prevention dans une usine = 1 a 2 ETP (40 000-80 000 EUR/an).
- **Frequence ?** Continue - chaque nouvelle intervention necessitant un plan. Mensuel pour les mises a jour.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Accident sur site impliquant un sous-traitant, audit client/donneur d'ordre (aeronautique, automobile, pharma), certification ISO 45001, controle inspection du travail sur site.
- **Quand ?** Permanent - obligation existante depuis 1992, mais le sujet est renforce par les certifications qualite et les donneurs d'ordre qui exigent de plus en plus la dematerialisation.
- **Quelle urgence ?** Haute - la responsabilite penale du chef d'entreprise est directement engagee.

### L'Acquisition Client
- **Ou trouver les prospects ?** Annuaires industriels (Kompass, industrie.gouv.fr), salons Preventica/Expoprotection, groupes LinkedIn QSE/HSE, reseaux de responsables securite (INRS, CARSAT).
- **Combien sont-ils ?** ~200 000 entreprises utilisatrices, dont ~50 000 industriels avec interventions frequentes.
- **Quel message d'accroche ?** "Digitalisez vos plans de prevention en 5 minutes : signature electronique, suivi temps reel des intervenants, zero papier."

### La Concurrence
- **Qui existe ?** Plancile (SaaS dedie plans de prevention, early stage), Trepied.co (web-based), Memory Flow (module dans suite QSE), Previsoft (module co-activite ~150 EUR/mois), BlueKanGo (module dans suite). Aucune levee de fonds significative identifiee.
- **Pourquoi sont-ils inadaptes ?** Les suites QSE (BlueKanGo, Previsoft) integrent le plan de prevention comme un module parmi 20 autres. Plancile est le plus proche mais semble early-stage avec peu de visibilite. Aucun n'offre de portail self-service pour l'entreprise exterieure (le sous-traitant doit pouvoir pre-remplir ses informations).
- **Mon angle differenciant ?** "Le seul outil avec un portail sous-traitant : l'entreprise exterieure pre-remplit son dossier, uploade ses attestations, et le plan de prevention se genere automatiquement avec signature electronique integree."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 7 semaines
- **Features CV impressionnantes** : Architecture multi-tenant (portail entreprise utilisatrice + portail sous-traitant), signature electronique integree (eIDAS), workflow de validation multi-etapes, gestion documentaire versionnee, Real-time notifications, QR code d'acces au plan de prevention sur site.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 3/5
- **Score Concurrence :** 4/5
- **TOTAL :** 16/20

---

## 8. AIComply - Registre et audit de conformite AI Act pour les deployers d'IA

### La Douleur
- **Qui souffre ?** Toute organisation qui deploie des systemes d'IA dans l'Union europeenne, ou dont les systemes sont utilises par des personnes situees dans l'UE. En France, on estime que 30 000 a 50 000 entreprises utilisent deja des systemes d'IA a haut risque (RH/recrutement, credit scoring, assurance, sante, education, justice). Avec la democratisation des LLM, le nombre explose.
- **De quoi ?** Le reglement europeen AI Act (entre en vigueur le 1er aout 2024) impose progressivement : interdiction de certains usages (fevrier 2025), regles GPAI (aout 2025), et application complete aux systemes a haut risque le 2 aout 2026. Les "deployers" (entreprises qui utilisent l'IA) doivent : tenir un registre des systemes d'IA utilises, s'assurer du marquage CE pour les systemes a haut risque, mettre en place un controle humain, documenter la transparence et la tracabilite, et enregistrer les systemes a haut risque dans la base de donnees europeenne.
- **Combien ca coute ?** Sanctions : jusqu'a 6% du CA mondial (soit plus severe que le RGPD). Pour une PME de 10M EUR de CA, c'est 600 000 EUR d'amende potentielle. Les frais d'evaluation de conformite sont reduits pour les PME, mais le travail de cartographie et documentation reste considerable : 50-200h de travail interne estime.
- **Frequence ?** Continue - le registre doit etre maintenu a jour, les evaluations de risques revues regulierement.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Date du 2 aout 2026 (application complete), designation des autorites nationales competentes (aout 2025), premiere sanction mediatisee, integration d'un nouveau systeme IA dans l'entreprise.
- **Quand ?** Application complete le 2 aout 2026 - il reste 6 mois. L'urgence monte.
- **Quelle urgence ?** Critique - deadline imminente avec sanctions majeures.

### L'Acquisition Client
- **Ou trouver les prospects ?** Groupes LinkedIn IA/Data (des dizaines avec +10 000 membres), salons AI Paris/VivaTech, annuaires des DPO (les DPO vont heriter du sujet AI Act), clubs DSI/CTO (CIGREF, CRiP).
- **Combien sont-ils ?** 30 000-50 000 entreprises directement concernees par les obligations "deployer" sur systemes a haut risque. Potentiel plus large avec les obligations de transparence pour tous les systemes d'IA.
- **Quel message d'accroche ?** "2 aout 2026 : votre registre AI Act est-il pret ? Cartographiez et mettez en conformite tous vos systemes d'IA en quelques clics."

### La Concurrence
- **Qui existe ?** Leto.legal (seed 1,2M EUR, RGPD + module AI Act naissant, ~200 EUR/mois), EU AI Act Compliance Checker (outil en ligne gratuit mais basique), cabinets de conseil (PwC, Deloitte, KPMG a 1 000-2 000 EUR/jour). Pas de SaaS pur-play dedie exclusivement a la conformite AI Act.
- **Pourquoi sont-ils inadaptes ?** Leto est avant tout un outil RGPD qui etend au AI Act. Les cabinets de conseil sont inabordables pour les PME. L'outil EU gratuit ne fait qu'un diagnostic sommaire. Aucun ne propose un registre permanent des systemes IA avec evaluation de risque automatisee.
- **Mon angle differenciant ?** "Le premier SaaS dedie exclusivement a la conformite AI Act : registre automatise de vos systemes IA, evaluation du niveau de risque, generation de la documentation technique et suivi continu."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Moteur de classification des risques IA (mapping Annexe III), generation automatisee de documentation technique, integration API avec les registres EU, workflow de validation multi-parties prenantes, audit trail (Event Sourcing), dashboard de conformite avec scoring.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 18/20

---

## 9. BDESEasy - BDESE automatisee pour les entreprises de 50+ salaries

### La Douleur
- **Qui souffre ?** Les entreprises de 50 salaries et plus : environ 40 000 en France. L'obligation s'applique des le franchissement du seuil de 50 salaries.
- **De quoi ?** La Base de Donnees Economiques, Sociales et Environnementales (BDESE) est obligatoire pour toute entreprise de 50+ salaries (articles L2312-18 et suivants du Code du travail). Elle doit etre mise a disposition du CSE (Comite Social et Economique) et contenir des informations sur les 3 dernieres annees et les 3 annees a venir couvrant : investissements, egalite professionnelle, fonds propres, remuneration, activites sociales et culturelles, remuneration des financeurs, flux financiers, et depuis la loi Climat (2021), les consequences environnementales de l'activite. Les entreprises de 300+ salaries doivent la maintenir en format numerique.
- **Combien ca coute ?** L'absence de BDESE constitue un delit d'entrave : amende de 7 500 EUR (article L2317-1 du Code du travail). Le CSE peut bloquer les consultations obligatoires si la BDESE est incomplete, entrainant le report de decisions strategiques (restructurations, plans sociaux). Un cabinet RH facture 3 000-8 000 EUR pour constituer une BDESE. En interne : 40-80h de collecte de donnees.
- **Frequence ?** Annuel (mise a jour des indicateurs), avec consultations ponctuelles du CSE tout au long de l'annee.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Franchissement du seuil de 50 salaries (election du CSE obligatoire), demande formelle du CSE, litige avec les representants du personnel invoquant le delit d'entrave, audit social, certification B Corp.
- **Quand ?** Permanent - obligation continue. Pics lors des consultations annuelles obligatoires du CSE (orientations strategiques, situation economique, politique sociale).
- **Quelle urgence ?** Haute - le CSE peut bloquer des decisions strategiques et l'amende est de 7 500 EUR.

### L'Acquisition Client
- **Ou trouver les prospects ?** Annuaires entreprises 50+ salaries (Societe.com, Pappers.fr), groupes LinkedIn DRH/RH, experts-comptables (qui fournissent les donnees financieres), salons Solutions RH.
- **Combien sont-ils ?** ~40 000 entreprises de 50+ salaries en France.
- **Quel message d'accroche ?** "Generez votre BDESE conforme en 1 heure au lieu de 80 : import automatique depuis votre paie et votre comptabilite."

### La Concurrence
- **Qui existe ?** BDESE by QuickMS (SaaS dedie, ~100-200 EUR/mois), Alcuin BDESE, modules BDESE dans les SIRH (Lucca, Eurecia, PayFit). Aucun n'a leve plus de 10M EUR sur ce segment specifique.
- **Pourquoi sont-ils inadaptes ?** Les SIRH proposent un module BDESE basique qui necessite une saisie manuelle. QuickMS est le plus specialise mais reste peu connu. Aucun ne propose d'import automatique depuis les logiciels de paie (Silae, Sage, PayFit) et de comptabilite pour pre-remplir les indicateurs.
- **Mon angle differenciant ?** "La BDESE qui se remplit toute seule : connecteurs avec vos outils de paie et comptabilite, volet environnemental pre-configure, et interface intuitive pour le CSE."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 7 semaines
- **Features CV impressionnantes** : Connecteurs API vers logiciels de paie (Silae, PayFit, Sage) et comptabilite, generation automatique d'indicateurs legaux, interface dual (direction + CSE), historisation 6 ans (N-3 a N+3), export PDF conforme, audit trail.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 15/20

---

## 10. SafeERP - Registre de securite et conformite reglementaire pour les batiments ERP

### La Douleur
- **Qui souffre ?** Les exploitants d'Etablissements Recevant du Public (ERP) : restaurants, commerces, hotels, salles de sport, cabinets medicaux, ecoles privees, etc. La France compte environ 500 000 ERP dont une grande majorite de categorie 5 (petits etablissements).
- **De quoi ?** Tout ERP doit tenir un registre de securite (article R143-38 du Code de la construction et de l'habitation) documentant : les verifications periodiques obligatoires (installations electriques, gaz, extincteurs, systemes alarme, ascenseurs, desenfumage), les exercices d'evacuation, les formations du personnel, l'entretien des equipements de securite. De plus, depuis 2017, un registre public d'accessibilite est obligatoire. Les petits exploitants (restaurants, commerces) gerent tout cela sur papier ou l'ignorent.
- **Combien ca coute ?** Fermeture administrative par le maire ou le prefet en cas de non-conformite securite. Amende de 45 000 EUR (jusqu'a 225 000 EUR pour personne morale) pour defaut d'accessibilite. 6 mois d'emprisonnement en cas de recidive. En pratique, les commissions de securite visitent les ERP cat 1-4 tous les 2-5 ans, et les cat 5 sur signalement ou plainte.
- **Frequence ?** Continue - les verifications periodiques sont mensuelles (extincteurs), trimestrielles (alarme), annuelles (electricite, gaz), quinquennales (commission de securite pour cat 1-4).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Visite de la commission de securite (avis defavorable = fermeture), incident/sinistre, ouverture d'un nouvel etablissement, changement d'exploitant, assureur qui demande les justificatifs de verification.
- **Quand ?** Permanent - les commissions de securite tournent en continu. Les ERP de cat 1-4 sont visites tous les 2-5 ans.
- **Quelle urgence ?** Critique - fermeture administrative immediate possible apres avis defavorable.

### L'Acquisition Client
- **Ou trouver les prospects ?** Fichier des ERP (consultable via les mairies/prefectures), syndicats de restauration (UMIH, GNI), federations du commerce (CCI), groupes LinkedIn restaurateurs/hoteliers, partenariats avec bureaux de controle (Bureau Veritas, Socotec, Apave).
- **Combien sont-ils ?** ~500 000 ERP en France, dont la grande majorite sont de petits etablissements de categorie 5.
- **Quel message d'accroche ?** "Votre registre de securite et d'accessibilite 100% conforme, accessible en QR code, avec rappels automatiques de vos verifications obligatoires."

### La Concurrence
- **Qui existe ?** Lootibox (rachete par BTP Consultants, a partir de 4 EUR/mois par batiment, le leader du segment), Theo Norme (ERP compliance), Preveris (consulting). Lootibox est le seul acteur SaaS notable mais a ete rachete par un acteur traditionnel (BTP Consultants), ce qui freine potentiellement son innovation startup.
- **Pourquoi sont-ils inadaptes ?** Lootibox vise les gros patrimoines immobiliers (foncières, collectivites) avec une offre multi-site. Les petits ERP (restaurants, commerces) trouvent l'outil trop complexe et le pricing au batiment inadapte. Pas d'offre ultra-simplifiee pour un restaurateur avec un seul etablissement.
- **Mon angle differenciant ?** "Le registre de securite le plus simple du marche : configure en 5 minutes pour votre type d'ERP, avec checklist des verifications a jour et QR code consultable par la commission de securite."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines
- **Features CV impressionnantes** : Moteur de regles par type/categorie d'ERP (auto-configuration des verifications applicables), generation de QR code pour registre public, calendrier de rappels automatises, stockage documents (PV de verification, rapports de controle), PWA accessible mobile, interface bi-face (exploitant + commission de securite en lecture).

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## Tableau recapitulatif

| # | Projet | Douleur | Declencheur | Acquisition | Concurrence | TOTAL |
|---|--------|---------|-------------|-------------|-------------|-------|
| 1 | ConformLCB (LCB-FT immo) | 5 | 5 | 5 | 4 | **19/20** |
| 3 | VertFlotte (LOM flotte) | 4 | 5 | 4 | 5 | **18/20** |
| 6 | REPAssist (REP/AGEC) | 4 | 5 | 4 | 5 | **18/20** |
| 8 | AIComply (AI Act) | 4 | 5 | 4 | 5 | **18/20** |
| 2 | DUERPilot (DUERP) | 5 | 4 | 5 | 3 | **17/20** |
| 5 | HabilTrack (habilitations) | 5 | 5 | 4 | 3 | **17/20** |
| 7 | PlanPrev (plans prevention) | 5 | 4 | 3 | 4 | **16/20** |
| 10 | SafeERP (securite batiments) | 4 | 5 | 4 | 3 | **16/20** |
| 4 | EntretienPro360 (entretiens) | 4 | 4 | 4 | 3 | **15/20** |
| 9 | BDESEasy (BDESE) | 4 | 4 | 4 | 3 | **15/20** |

---

## Top 3 recommandations

1. **ConformLCB** (19/20) - Niche tres specifique (agents immobiliers), douleur aigue (controles DGCCRF intensifies, sanctions lourdes), cible ultra-trouvable (fichier CCI public), pas de concurrent direct adapte au secteur immobilier. Le declencheur est permanent et la vente est evidente.

2. **REPAssist** (18/20) - Marche en pleine expansion avec de nouvelles filieres REP chaque annee (loi AGEC). Aucun SaaS multi-filieres n'existe. La base de prospects est publique (SYDEREP/ADEME open data). Les e-commercants forment un segment massif et grandissant.

3. **AIComply** (18/20) - Timing parfait avec l'application complete de l'AI Act le 2 aout 2026. Marche vierge (pas de SaaS pur-play). Sanctions parmi les plus elevees (6% du CA mondial). Le sujet est stratégique et les entreprises vont chercher des solutions dans les prochains mois.

---

*Analyse realisee en fevrier 2026. Les donnees reglementaires et de marche sont basees sur les textes en vigueur et les informations publiques disponibles a cette date.*
