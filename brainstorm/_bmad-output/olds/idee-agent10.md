# 10 Idees de Micro-SaaS d'Automatisation Administrative pour TPE/PME Francaises

**Angle de recherche** : Processus administratifs penibles, repetitifs et souvent lies a des obligations legales que les TPE/PME francaises gerent encore a la main (Excel, Word, papier) et qui pourraient etre automatises par un SaaS simple et vertical.

**Date de recherche** : Fevrier 2026

**Methodologie** : Recherche croisee entre obligations legales francaises (Code du travail, Code de commerce, reglementations sectorielles), statistiques INSEE sur les entreprises, et analyse concurrentielle des solutions existantes. Chaque idee a ete verifiee sur le plan reglementaire, le nombre de cibles, les sanctions encourues et les concurrents existants.

---

## 1. DUERPilot - Le Document Unique en 30 minutes, pas en 30 jours

### La Douleur
- **Qui souffre ?** Toutes les entreprises employant au moins 1 salarie. Environ 2,4 millions d'etablissements en France (source INSEE).
- **De quoi ?** La redaction et la mise a jour annuelle du Document Unique d'Evaluation des Risques Professionnels (DUERP). 54% des etablissements n'ont PAS de DUERP a jour selon le rapport IGAS. Les TPE de moins de 10 salaries sont les plus en retard : seulement 41% en conformite. Le processus implique d'identifier les risques par unite de travail, de les coter, de definir des actions preventives, et de consigner le tout dans un document structure. La plupart le font sur Word/Excel ou paient un consultant 500-2000 EUR.
- **Combien ca coute ?** 500 a 2000 EUR par an en consultant externe, OU 8 a 20 heures de travail interne pour une TPE qui le fait seule. Sans compter l'amende de 1500 EUR (personne physique) a 7500 EUR (personne morale) par infraction, doublable en cas de recidive.
- **Frequence ?** Mise a jour annuelle obligatoire (entreprises 11+ salaries). Pour les TPE <11, mise a jour lors de changement significatif.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle de l'inspection du travail, accident du travail (le DUERP est le premier document demande), nouvelle embauche, changement d'activite, demenagement, ou pression de l'assureur/mutuelle.
- **Quand ?** Toute l'annee, avec des pics lors des controles CARSAT et des campagnes de l'INRS.
- **Quelle urgence ?** Haute -- En cas d'accident du travail sans DUERP, la responsabilite penale du dirigeant est engagee (faute inexcusable de l'employeur).

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE/Pappers (filtrer par effectif > 0), groupes Facebook "Dirigeants de TPE/PME", LinkedIn, chambres de metiers, CPME, federations professionnelles, Google Ads sur "document unique obligatoire".
- **Combien sont-ils ?** ~2,4 millions d'etablissements employeurs en France, dont 1,3 million n'ont PAS de DUERP a jour.
- **Quel message d'accroche ?** "54% des entreprises sont en infraction sur le DUERP. Creez le votre en 30 minutes avec un assistant guide par metier, sans consultant."

### La Concurrence
- **Qui existe ?** DigiRisk (open-source, gratuit mais complexe), DUERP.com (SaaS, ~200 EUR/an), Evarisk (solution historique), Previsoft (module dans suite QSE). L'outil OiRA de l'INRS est gratuit mais generique et non sauvegarde dans le cloud.
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** DigiRisk necessite une installation technique et un parametrage complexe. DUERP.com est fonctionnel mais l'UX est datee. Previsoft est trop cher et oriente grands comptes. OiRA est un outil institutionnel sans suivi ni alertes.
- **Mon angle differenciant ?** Un assistant conversationnel guide par code NAF/metier qui genere un DUERP conforme en 30 minutes avec une experience "wizard" intuitive et des rappels automatiques de mise a jour.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Workflow engine guide par metier, generation PDF conforme, moteur de cotation des risques, alertes et rappels automatiques, base de donnees des risques par code NAF, API INRS/CARSAT.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 19/20

---

## 2. EntretienPro360 - Entretiens professionnels conformes, sans prise de tete

### La Douleur
- **Qui souffre ?** Toutes les entreprises ayant au moins 1 salarie (obligation d'entretien tous les 2 ans), et plus particulierement les entreprises de 50+ salaries (~30 000 entreprises en France) exposees a l'abondement correctif CPF de 3000 EUR par salarie.
- **De quoi ?** L'organisation, le suivi et l'archivage des entretiens professionnels obligatoires tous les 2 ans + le bilan recapitulatif a 6 ans. La plupart des TPE/PME gerent ca sur des fichiers Word envoyes par email, sans suivi centralise, sans alertes de relance, et perdent la trace des entretiens realises. Au bout de 6 ans, impossible de prouver la conformite.
- **Combien ca coute ?** Pour une entreprise de 50+ salaries : 3000 EUR d'abondement par salarie en cas de non-conformite au bilan 6 ans. Pour une entreprise de 80 salaries, ca represente potentiellement 240 000 EUR de penalites. En temps : 2-4 heures par entretien (preparation, convocation, conduite, compte-rendu, archivage).
- **Frequence ?** Tous les 2 ans par salarie + bilan recapitulatif tous les 6 ans.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Approche de la date butoir du bilan 6 ans, controle URSSAF/inspection du travail, contentieux prud'homal (l'entretien est un element de preuve cle), franchise de seuil des 50 salaries.
- **Quand ?** Tout au long de l'annee, avec des pics a chaque "vague" d'echeances 6 ans (2026 = 6 ans apres 2020, annee covid ou beaucoup d'entretiens ont ete rates).
- **Quelle urgence ?** Critique -- 3000 EUR par salarie si non-conforme au bilan 6 ans pour les entreprises de 50+.

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE filtre effectif 11+, LinkedIn (DRH, responsables RH, dirigeants PME), groupes Facebook RH PME, partenariats avec experts-comptables et avocats en droit social, salons RH.
- **Combien sont-ils ?** ~175 000 PME (10-249 salaries) + ~2 millions de TPE (1-9 salaries) potentiellement concernees, mais le coeur de cible avec urgence financiere = les ~30 000 entreprises de 50+ salaries.
- **Quel message d'accroche ?** "Bilan 6 ans en 2026 : votre entreprise risque 3000 EUR par salarie. Automatisez vos entretiens professionnels et prouvez votre conformite en 2 clics."

### La Concurrence
- **Qui existe ?** Lucca/Poplee (a partir de ~8 EUR/mois/salarie, soit 400 EUR/mois pour 50 salaries), Eurecia, Zola, Foederis. Ce sont des SIRH complets dont l'entretien n'est qu'un module parmi d'autres.
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Trop chers, trop riches fonctionnellement (obligation d'acheter toute la suite RH), courbe d'adoption longue, pas de focus specifique sur la conformite legale de l'entretien professionnel et le bilan 6 ans.
- **Mon angle differenciant ?** Un outil 100% dedie a l'entretien professionnel et au bilan 6 ans : trames conformes au Code du travail pre-remplies, workflow de convocation/relance automatique, signature electronique, tableau de bord de conformite, et export du bilan 6 ans pret a presenter a l'inspection du travail.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Workflow engine de campagnes d'entretiens, signature electronique integree, generation PDF conformes, tableau de bord de conformite avec alertes, calendrier de relances automatiques, API export vers logiciels de paie.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 3. VigiSousTrait - Conformite sous-traitants en autopilote

### La Douleur
- **Qui souffre ?** Toute entreprise faisant appel a des sous-traitants ou prestataires pour des contrats de 5000 EUR+ HT. Concerne massivement l'industrie, les services, le commerce, et toutes les PME donneurs d'ordres. Environ 500 000 entreprises en France ont recours regulierement a la sous-traitance.
- **De quoi ?** L'obligation de vigilance (art. L8222-1 Code du travail) impose de collecter tous les 6 mois : Kbis <3 mois, attestation de vigilance URSSAF <6 mois, attestation d'assurance RC Pro en cours, liste des travailleurs etrangers. La plupart des PME font ca par email : relance manuelle, verification manuelle de la validite, archivage dans des dossiers Windows desorganises. Un fournisseur qui ne repond pas = des dizaines de relances.
- **Combien ca coute ?** 2-5 heures par mois pour une PME avec 10-20 sous-traitants. En cas de non-conformite : responsabilite solidaire des cotisations impayees, amende jusqu'a 45 000 EUR (personne physique) et 225 000 EUR (personne morale) pour travail dissimule par association.
- **Frequence ?** Tous les 6 mois par contrat, plus a chaque nouveau contrat.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle URSSAF, nouveau marche imposant une conformite documentaire (BTP, industrie), accident impliquant un sous-traitant, audit client grands comptes.
- **Quand ?** Toute l'annee, avec des pics en debut de marche/chantier.
- **Quelle urgence ?** Haute -- Responsabilite solidaire en cas de defaillance du sous-traitant.

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE (filtrer par secteurs fortement sous-traitants : industrie, services aux entreprises, logistique), LinkedIn (directeurs achats, DAF, dirigeants PME), salons professionnels, partenariats experts-comptables.
- **Combien sont-ils ?** ~500 000 entreprises donneurs d'ordres reguliers.
- **Quel message d'accroche ?** "Vous relancez vos sous-traitants par email pour les Kbis et attestations URSSAF ? Notre plateforme collecte et verifie leurs documents automatiquement, tous les 6 mois."

### La Concurrence
- **Qui existe ?** Provigis (CA ~4,2 M EUR, oriente grands comptes), OnceForAll/Attestation Legale (rachete par Warburg Pincus via Fortius -- oriente BTP/grands donneurs d'ordres), e-Attestations (Aprovall, oriente ETI/grands groupes).
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Provigis et OnceForAll ciblent les grands groupes avec des contrats de 5000 a 50 000 EUR/an. Pas d'offre self-service accessible a une PME de 20 salaries qui gere 10-30 sous-traitants. Interface complexe, onboarding long, pricing opaque.
- **Mon angle differenciant ?** Un outil self-service a 49-99 EUR/mois pour les PME : le sous-traitant recoit un lien, depose ses documents, le systeme verifie les dates de validite et relance automatiquement. Dashboard clair "vert/orange/rouge" par fournisseur.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 10 semaines
- **Features CV impressionnantes** : Portail fournisseur self-service, verification automatique de validite des documents (OCR + regles metier), workflow de relance automatique (email/SMS), dashboard de conformite temps reel, API Pappers/URSSAF, archivage securise avec tracabilite.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 4. RegistrePro - Tous vos registres obligatoires dematerialises en un seul endroit

### La Douleur
- **Qui souffre ?** Toute entreprise avec au moins 1 salarie. Selon le Code du travail, plusieurs registres sont obligatoires : registre unique du personnel, registre des alertes en matiere de sante publique et d'environnement, registre des accidents du travail benins, registre des delegues du personnel (avant CSE), registre de securite incendie, etc. Environ 2,4 millions d'etablissements employeurs.
- **De quoi ?** La tenue a jour de multiples registres obligatoires, chacun avec ses propres regles de contenu, de mise a jour et de conservation. La plupart des TPE/PME gerent ca sur des registres papier achetes en librairie ou des fichiers Excel eparpilles. En cas de controle de l'inspection du travail, ils ne savent meme pas quels registres ils doivent detenir. Le registre unique du personnel a lui seul impose de consigner pour chaque salarie : nom, prenom, nationalite, date de naissance, emploi, qualification, date d'entree/sortie, type de contrat, etc.
- **Combien ca coute ?** Amende de 750 EUR par salarie concerne en cas de registre unique du personnel absent ou incomplet. Pour 10 salaries = 7500 EUR. En temps : 1-3 heures par mois de mise a jour manuelle selon la taille.
- **Frequence ?** Continue (a chaque embauche, depart, modification) + consultable a tout moment en cas de controle.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Premiere embauche, controle de l'inspection du travail, demenagement/nouveau local, passage d'un seuil d'effectif (11 ou 50 salaries), rachat/cession d'entreprise.
- **Quand ?** Toute l'annee.
- **Quelle urgence ?** Haute -- Le registre unique du personnel doit etre disponible IMMEDIATEMENT lors d'un controle. Son absence est un delit d'entrave (7500 EUR d'amende + 1 an d'emprisonnement).

### L'Acquisition Client
- **Ou trouver les prospects ?** SIRENE (entreprises avec salaries), Google Ads ("registre du personnel obligatoire", "registre unique du personnel Excel"), groupes dirigeants TPE, CMA (chambres de metiers), experts-comptables.
- **Combien sont-ils ?** ~2,4 millions d'etablissements employeurs.
- **Quel message d'accroche ?** "Registre du personnel sur Excel ou papier ? En cas de controle, c'est 750 EUR d'amende PAR salarie. Passez au digital en 5 minutes."

### La Concurrence
- **Qui existe ?** Regunel/registredupersonnel.com (~4 EUR/mois), Axiocap (oriente registres juridiques/AG), PayFit/Lucca (module integre au SIRH). Les registres papier pre-imprimes a 15-30 EUR pieces.
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Regunel ne couvre que le registre du personnel (pas les autres registres obligatoires). Axiocap est oriente juridique/AG, pas travail. PayFit/Lucca sont des SIRH complets (overkill + cher pour une TPE de 3 salaries). Aucune solution ne regroupe TOUS les registres obligatoires dans un seul outil simple.
- **Mon angle differenciant ?** Une plateforme unique "tous registres obligatoires" : registre du personnel, registre des accidents benins, registre de securite, registre des alertes, avec un diagnostic de conformite initial ("quels registres devez-vous tenir ?") et des alertes de mise a jour.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Diagnostic de conformite automatise par effectif/secteur, generation PDF des registres, historique versionne et horodate (valeur probante), systeme d'alertes multi-canal, import CSV depuis logiciel de paie existant, portail consultation pour inspection du travail.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 18/20

---

## 5. PartageValeur.io - Simulateur et mise en conformite "Partage de la Valeur"

### La Douleur
- **Qui souffre ?** Les entreprises de 11 a 49 salaries ayant realise un benefice net >= 1% de leur CA pendant 3 annees consecutives. Nouvelle obligation depuis le 1er janvier 2025 (experimentation 5 ans). Environ 60 000 a 80 000 entreprises potentiellement concernees.
- **De quoi ?** Elles doivent mettre en place un dispositif de partage de la valeur : PPV (Prime de Partage de la Valeur), interessement, participation ou abondement PEE. La plupart de ces PME n'ont JAMAIS eu de dispositif d'epargne salariale. Elles ne savent pas si elles sont concernees (il faut verifier 3 exercices consecutifs), quel dispositif choisir, comment le formaliser juridiquement, ni comment declarer les sommes. Leur expert-comptable decouvre la reforme en meme temps qu'eux.
- **Combien ca coute ?** 1000 a 5000 EUR chez un avocat/conseil pour mettre en place un accord d'interessement. Plusieurs jours de travail pour le dirigeant. Sans mise en conformite : pas de sanction directe definie a ce stade (experimentation), mais risque de contentieux salarie et redressement URSSAF.
- **Frequence ?** Annuelle (verification chaque annee si les criteres sont remplis) + mise en place ponctuelle du dispositif.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Publication des comptes annuels qui confirme le 3e exercice consecutif au-dessus du seuil, questions des salaries, article dans la presse economique, alerte de l'expert-comptable.
- **Quand ?** Principalement au T1-T2 de chaque annee (cloture des comptes N-1).
- **Quelle urgence ?** Moyenne a Haute -- Obligation legale nouvelle, meconnue, avec effet retro possible si verification URSSAF.

### L'Acquisition Client
- **Ou trouver les prospects ?** Pappers (filtrer par effectif 11-49, benefice net/CA > 1% sur 3 ans -- les donnees financieres sont publiques), partenariats experts-comptables, LinkedIn (dirigeants PME), Google Ads "partage de la valeur obligation 2025".
- **Combien sont-ils ?** ~60 000 a 80 000 entreprises potentiellement concernees des 2025 (estimation basee sur les stats de rentabilite des PME francaises).
- **Quel message d'accroche ?** "Votre PME de 11-49 salaries est-elle soumise a l'obligation de partage de la valeur 2025 ? Verifiez en 30 secondes et mettez-vous en conformite sans avocat."

### La Concurrence
- **Qui existe ?** Les plateformes d'epargne salariale (Epsens, CIC Epargne Salariale, Amundi) qui gerent les PEE/PERCO mais ne font pas le diagnostic d'eligibilite ni la mise en conformite legale. Aucun SaaS dedie "diagnostic + mise en conformite partage de la valeur pour PME 11-49".
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Les plateformes d'epargne salariale sont concues pour gerer les flux financiers, pas pour faire le diagnostic d'obligation et la generation des documents juridiques. Elles necessitent un intermediaire (conseiller) et des frais de gestion.
- **Mon angle differenciant ?** Un outil de diagnostic automatique ("etes-vous concerne ?") + un generateur de documents conformes (decision unilaterale de PPV, accord d'interessement simplifie) + un simulateur de cout pour le dirigeant, le tout en self-service.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Moteur de regles metier (verification 3 exercices, seuils), simulateur financier interactif, generation de documents juridiques (templates valides par avocat), integration API Pappers pour pre-remplissage, tunnel de conversion guide, dashboard de suivi des obligations.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 6. HabiliTrack - Suivi des habilitations et certifications salaries sans tableur

### La Douleur
- **Qui souffre ?** Les entreprises de l'industrie, du BTP (exclus du scope mais l'industrie ne l'est pas), de la logistique, de la maintenance, de l'agroalimentaire, de la chimie... tout secteur ou les salaries detiennent des habilitations obligatoires a duree limitee : habilitations electriques (renouvellement annuel), CACES (5 ans), SST (2 ans), ATEX, travail en hauteur, etc. Environ 300 000 a 500 000 entreprises industrielles et de services techniques en France.
- **De quoi ?** Le suivi des dates d'expiration des habilitations de chaque salarie. La plupart des PME utilisent un tableau Excel avec des colonnes par habilitation et des dates. Quand une habilitation expire, personne ne le voit jusqu'au controle. Un salarie qui travaille avec une habilitation expiree = responsabilite penale du dirigeant en cas d'accident. Les recyclages doivent etre planifies des mois a l'avance (les organismes de formation sont satures).
- **Combien ca coute ?** Un accident avec habilitation expiree = poursuites penales (faute inexcusable), arret de chantier/production. En temps : 2-8 heures par mois pour un responsable QSE/RH qui gere 50-200 habilitations sur Excel. Un recyclage CACES oublie = salarie immobilise + perte de production de 500-2000 EUR/jour.
- **Frequence ?** Suivi continu, avec des echeances mensuelles (les habilitations expirent de facon desynchronisee).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle inspection du travail/CARSAT, accident du travail, audit client (ISO, grands donneurs d'ordres), habilitation expiree decouverte trop tard, arrivee d'un nouveau responsable QSE/RH.
- **Quand ?** Toute l'annee.
- **Quelle urgence ?** Critique -- Un salarie sans habilitation valide ne peut PAS travailler. Impact immediat sur la production.

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE filtre par codes NAF industrie/logistique/maintenance, LinkedIn (responsables QSE, HSE, RH industriel), salons Preventica, groupes QHSE sur LinkedIn/Facebook, partenariats avec organismes de formation CACES/habilitation electrique.
- **Combien sont-ils ?** ~300 000 entreprises avec salaries detenteurs d'habilitations obligatoires.
- **Quel message d'accroche ?** "Vos habilitations CACES et electriques sont suivies sur Excel ? Notre outil vous alerte 3 mois avant expiration et planifie les recyclages automatiquement."

### La Concurrence
- **Qui existe ?** Previsoft (module dans suite QSE, ~150+ EUR/mois), MaSecuPro (SaaS QSE ~50-100 EUR/mois), Lucca (SIRH generaliste), tableurs Excel maison.
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Previsoft et les suites QSE sont concues pour les ETI/grands groupes avec des process lourds. MaSecuPro est correct mais l'UX est ancienne et le produit melange trop de fonctionnalites QSE. Lucca ne gere pas specifiquement les habilitations. Aucun outil simple et dedie au suivi des habilitations avec planification des recyclages.
- **Mon angle differenciant ?** Un outil ultra-simple dedie au suivi des habilitations : import CSV de la liste des salaries et de leurs certifications, alertes automatiques 3/2/1 mois avant expiration, integration avec les catalogues de formation CACES/SST pour reserver les recyclages, dashboard "qui peut travailler sur quoi aujourd'hui ?".

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Calendrier d'expiration avec alertes multi-canal (email, SMS, push), dashboard de conformite en temps reel, import/export CSV, generation d'attestations PDF, integration API organismes de formation, module de planification des recyclages.

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 7. AffichLegal - Conformite affichage obligatoire digital pour entreprises multi-sites

### La Douleur
- **Qui souffre ?** Toutes les entreprises avec au moins 1 salarie (~2,4 millions d'etablissements). Plus specifiquement, les entreprises multi-sites (commerces, franchises, agences, cabinets...) qui doivent maintenir l'affichage obligatoire a jour dans CHAQUE etablissement. Environ 200 000 entreprises multi-sites en France.
- **De quoi ?** L'obligation d'affichage reglementaire : coordonnees de l'inspection du travail, medecin du travail, services d'urgence, horaires collectifs, convention collective applicable, interdiction de fumer, consignes de securite incendie, egalite professionnelle, harcelement, etc. Plus de 20 informations obligatoires dont la liste change selon l'effectif (1+, 11+, 20+, 50+). Le contenu est mis a jour regulierement (nouvelles lois, changement d'adresse de l'inspection du travail, etc.). La plupart achetent un panneau plastifie a 30-50 EUR... qui devient obsolete en quelques mois. Pour les multi-sites, c'est un cauchemar de verification.
- **Combien ca coute ?** Amende de 750 EUR par infraction, applicable par salarie concerne (ex: pas d'affichage des horaires = 750 EUR x nombre de salaries). Peut monter a 10 000 EUR et 30 000 EUR en recidive. En temps : verification/mise a jour de l'affichage = 1-2 heures par site par trimestre.
- **Frequence ?** Mise a jour a chaque changement reglementaire + verification continue.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle de l'inspection du travail (premier reflexe = verifier l'affichage), ouverture d'un nouveau site, embauche du 11e ou 50e salarie (nouvelles obligations), changement reglementaire annonce dans la presse.
- **Quand ?** Toute l'annee, avec des pics en janvier (nouvelles reglementations) et a l'ouverture de nouveaux etablissements.
- **Quelle urgence ?** Moyenne a Haute -- Verifiable en 30 secondes par un inspecteur du travail, amende immediate.

### L'Acquisition Client
- **Ou trouver les prospects ?** Reseaux de franchises (annuaires FFF), chaines de commerce, groupements d'agences (immobilier, interim, assurance), LinkedIn, Google Ads "affichage obligatoire entreprise 2026 mise a jour".
- **Combien sont-ils ?** ~200 000 entreprises multi-sites, ~2,4 millions d'etablissements au total.
- **Quel message d'accroche ?** "Votre affichage obligatoire est-il a jour dans tous vos sites ? Avec AffichLegal, chaque changement reglementaire est deploye automatiquement dans toute votre entreprise."

### La Concurrence
- **Qui existe ?** Panneaux plastifies (convention.fr, legiest.fr : 30-80 EUR), sites d'information (affichage-obligatoire.net), modules SIRH generalistes (Adequasys), Neotess (dematerialisation RH).
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Les panneaux plastifies deviennent obsoletes et ne sont pas mis a jour. Les SIRH generalistes integrent l'affichage comme une annexe, pas comme une fonctionnalite principale. Aucune solution ne propose un audit de conformite par site + mise a jour automatique du contenu reglementaire.
- **Mon angle differenciant ?** Une plateforme qui genere un espace d'affichage digital par site (ecran/tablette ou QR code), met a jour automatiquement le contenu a chaque changement reglementaire, et fournit un audit de conformite par effectif/secteur/localisation.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Moteur de regles par effectif/secteur/localisation, generation dynamique de contenus reglementaires, gestion multi-sites avec dashboard central, audit de conformite automatise, QR code par etablissement, veille reglementaire integree avec alertes.

### Verdict
- **Score Douleur :** 3/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 15/20

---

## 8. VisiteMedPilot - Planning et suivi des visites medicales du travail sans oubli

### La Douleur
- **Qui souffre ?** Toutes les entreprises avec salaries (~2,4 millions d'etablissements). Particulierement les PME de 20 a 200 salaries qui n'ont pas de service RH dedie mais assez de salaries pour que le suivi soit complexe. Environ 150 000 entreprises dans cette tranche.
- **De quoi ?** Le suivi du calendrier des visites medicales obligatoires : visite d'information et de prevention (VIP) a l'embauche, renouvellements (tous les 5 ans max, 3 ans pour les postes a risque, 2 ans pour les travailleurs de nuit/handicapes), visite de mi-carriere a 45 ans, visite de pre-reprise/reprise apres arret. Chaque salarie a un calendrier different selon son poste, son age, ses risques. La plupart des PME gerent ca sur un tableur que personne ne met a jour. Resultat : des visites oubliees, des convocations du service de sante au travail qui tombent dans le vide, et en cas d'accident = absence de suivi medical = faute de l'employeur.
- **Combien ca coute ?** En cas d'accident sans visite medicale a jour : faute inexcusable potentielle (indemnisation majoree). En termes administratifs : 2-4 heures par mois pour une PME de 50 salaries (gestion des plannings, relances, suivi des avis d'aptitude). Une visite oubliee pour un poste a risque = interdiction de travailler jusqu'a regularisation.
- **Frequence ?** Continue -- des visites a planifier chaque mois selon le calendrier de chaque salarie.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle de l'inspection du travail qui demande les fiches d'aptitude, accident du travail (l'aptitude medicale est le 2e document verifie apres le DUERP), lettre de mise en demeure du SPST (Service de Prevention et de Sante au Travail), embauche massive, contentieux prud'homal.
- **Quand ?** Toute l'annee.
- **Quelle urgence ?** Haute -- Un salarie sans visite de reprise ne peut pas reprendre le travail. Un salarie sans VIP initiale = infraction immediate.

### L'Acquisition Client
- **Ou trouver les prospects ?** SIRENE (entreprises 20-200 salaries), partenariats avec les SPST (Services de Prevention et Sante au Travail) eux-memes, LinkedIn (RH, office managers PME), Google Ads "suivi visites medicales salaries", experts-comptables.
- **Combien sont-ils ?** ~150 000 entreprises dans le coeur de cible (20-200 salaries sans SIRH complet).
- **Quel message d'accroche ?** "Vous gerez les visites medicales de vos salaries sur Excel ? Notre outil calcule automatiquement les echeances et vous alerte avant chaque retard."

### La Concurrence
- **Qui existe ?** Modules integres aux SIRH (Lucca, PayFit, Eurecia) qui proposent un rappel basique, Azuneed (~1,8 EUR/utilisateur/mois), logiciels de medecine du travail (cote SPST, pas cote employeur).
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Les SIRH generalistes ne calculent pas automatiquement les periodicites legales selon le profil du salarie (poste a risque, age, handicap, etc.). Azuneed est basique. Les logiciels des SPST ne sont pas accessibles aux employeurs. Aucun outil ne fait le calcul intelligent des echeances selon les regles du Code du travail.
- **Mon angle differenciant ?** Un moteur de calcul automatique des echeances de visites medicales selon le profil de chaque salarie (poste, risques, age, handicap, temps de travail), avec generation des convocations et suivi des avis d'aptitude en un seul endroit.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Moteur de regles metier complexe (periodicites variables selon profil salarie), calendrier intelligent avec alertes multi-niveau, integration avec les portails des SPST, generation de convocations PDF, archivage des avis d'aptitude, reporting de conformite.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 16/20

---

## 9. DechetConform - Registre dechets et conformite tri en pilote automatique

### La Douleur
- **Qui souffre ?** Toutes les entreprises productrices de dechets (c'est-a-dire quasiment toutes) sont soumises a l'obligation de tri 5 flux (papier, metal, plastique, verre, bois) depuis 2016, elargie a 9 flux en 2025 (ajout textiles, biodechets, platre, fraction minerale). Les entreprises produisant des dechets dangereux (~300 000 en France) doivent en plus tenir un registre des dechets et utiliser des bordereaux de suivi (BSD). Cible primaire : PME industrielles, ateliers, garages, laboratoires, commerces de gros -- environ 400 000 entreprises.
- **De quoi ?** La tenue du registre chronologique des dechets (obligatoire depuis 2005 pour les dechets dangereux, 2012 pour tous), la tracabilite des BSD (obligatoire sur Trackdechets pour les dechets dangereux depuis 2022), et la preuve de conformite au tri 9 flux (caracterisation annuelle). La plupart des PME ne tiennent aucun registre, ne savent pas qu'elles sont concernees par Trackdechets, et recoivent des BSD papier qu'elles perdent. Les obligations se sont empilees sans qu'un outil simple n'existe pour les PME.
- **Combien ca coute ?** Amende administrative jusqu'a 150 000 EUR pour non-conformite au tri. Contravention de 4e classe (750 EUR) pour absence de registre. Amende penale jusqu'a 75 000 EUR + 2 ans de prison pour les cas graves. En temps : 3-8 heures par mois pour un responsable environnement/QSE qui gere ca manuellement.
- **Frequence ?** Continue (registre a mettre a jour a chaque enlevement de dechets) + rapport annuel de caracterisation des dechets.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Controle DREAL (Direction Regionale de l'Environnement), audit client grands comptes (ISO 14001), extension de l'obligation aux biodechets (2024) et textiles (2025), lettre de mise en demeure, nouveau marche exigeant une conformite environnementale.
- **Quand ?** Toute l'annee, avec des pics a chaque nouvelle extension reglementaire.
- **Quelle urgence ?** Haute -- 150 000 EUR d'amende administrative + fermeture administrative possible.

### L'Acquisition Client
- **Ou trouver les prospects ?** SIRENE filtre par codes NAF industriels/artisanaux, base des ICPE (installations classees), LinkedIn (responsables QSE/environnement), salons Pollutec, groupes QHSE, partenariats avec collecteurs de dechets.
- **Combien sont-ils ?** ~400 000 PME produisant des dechets significatifs (dangereux et/ou en quantite soumise au tri 9 flux).
- **Quel message d'accroche ?** "Registre dechets, BSD, tri 9 flux : etes-vous conforme ? Notre outil centralise vos obligations dechets et vous met en conformite en 1 heure."

### La Concurrence
- **Qui existe ?** Trackdechets (plateforme gratuite de l'Etat, obligatoire pour les BSD dangereux, mais limitee a la tracabilite), Take A Waste (conseil + plateforme, oriente grands comptes), solutions QSE generiques (BlueKanGo, Previsoft).
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Trackdechets est obligatoire mais ne gere que les BSD dangereux, pas le registre global ni la conformite tri 9 flux. Take A Waste est un service de conseil premium (>500 EUR/mois). Les suites QSE sont trop complexes et cheres. Aucun outil ne propose un "tout-en-un dechets" accessible aux PME.
- **Mon angle differenciant ?** Un outil qui unifie registre dechets + connexion API Trackdechets + conformite tri 9 flux + rapport annuel de caracterisation, avec un diagnostic initial "quelles sont vos obligations ?" par secteur et un tableau de bord visuel.

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 10 semaines
- **Features CV impressionnantes** : Integration API Trackdechets, moteur de regles par type de dechets/secteur, generation automatique du registre chronologique, dashboard de conformite 9 flux, rapport annuel de caracterisation auto-genere, OCR pour scan des BSD papier, alertes de non-conformite.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 17/20

---

## 10. VGPCalendar - Suivi des verifications periodiques obligatoires pour PME

### La Douleur
- **Qui souffre ?** Toute entreprise possedant des equipements soumis a des verifications generales periodiques (VGP) : installations electriques (tous les ans), ascenseurs (tous les 5 ans + visites semestrielles), extincteurs (tous les 2 ans + verification annuelle), portes automatiques, appareils de levage, equipements sous pression, rayonnages metalliques, etc. Cela concerne environ 500 000 a 800 000 entreprises en France (toute entreprise avec un local professionnel).
- **De quoi ?** Le suivi du calendrier des dizaines de verifications periodiques obligatoires sur les equipements et installations. Chaque type d'equipement a sa propre periodicite, son propre organisme de controle, et son propre registre. La plupart des PME n'ont aucun suivi centralise : les rapports de Bureau Veritas, Apave, Socotec arrivent par courrier, sont classes dans un dossier, et personne ne suit si le prochain controle est planifie. Resultat : des controles rates, des equipements non conformes, et des rapports avec reserves non traitees.
- **Combien ca coute ?** En cas de non-conformite constatee lors d'un accident : responsabilite penale du dirigeant, fermeture administrative de l'etablissement (ERP). Un ascenseur non controle = 150 EUR d'amende par infraction + responsabilite civile illimitee en cas d'accident. En temps : 2-5 heures par mois pour un gestionnaire de patrimoine/responsable technique qui compile les echeances de 15-50 equipements.
- **Frequence ?** Continue -- des verifications a planifier chaque mois sur des equipements differents.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Passage de la commission de securite (ERP), controle de l'inspection du travail, accident sur un equipement non verifie, rapport de controle avec reserves graves, changement de gestionnaire technique, demenagement dans de nouveaux locaux.
- **Quand ?** Toute l'annee, avec des pics lors des passages de commissions de securite (ERP).
- **Quelle urgence ?** Haute -- Un ERP peut etre ferme administrativement en cas de non-conformite aux verifications periodiques.

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE (entreprises avec locaux), base des ERP (prefectures), LinkedIn (responsables techniques, facility managers, gestionnaires de patrimoine), Google Ads "verifications periodiques obligatoires", partenariats avec bureaux de controle (Apave, Bureau Veritas, Socotec -- qui ont interet a ce que les controles soient planifies a temps).
- **Combien sont-ils ?** ~500 000 a 800 000 entreprises avec equipements soumis a VGP.
- **Quel message d'accroche ?** "Controles electriques, extincteurs, ascenseurs... vos verifications periodiques sont-elles a jour ? Notre outil centralise toutes vos echeances et vous alerte automatiquement."

### La Concurrence
- **Qui existe ?** Cloud-VGP (~0,20-0,60 EUR/machine/mois, oriente controle terrain), MemoryFlow (suite QSE ~100+ EUR/mois), Registresecurite.com (registre digital), BlueKanGo (suite QSE grands comptes).
- **Pourquoi sont-ils inadaptes pour les TPE/PME ?** Cloud-VGP est concu pour les controleurs terrain (ceux qui FONT la verification), pas pour les entreprises qui doivent SUIVRE les echeances. MemoryFlow et BlueKanGo sont des suites QSE lourdes et cheres. Registresecurite.com est limite a la securite incendie. Aucun outil simple ne propose un "calendrier de maintenance reglementaire" multi-equipements pour PME.
- **Mon angle differenciant ?** Un outil de type "calendrier intelligent de maintenance reglementaire" : on declare ses equipements, le systeme connait les periodicites legales, genere le calendrier, alerte avant chaque echeance, et stocke les rapports de controle avec suivi des reserves (levee ou non levee).

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Base de donnees des periodicites reglementaires par type d'equipement, calendrier intelligent avec alertes multi-niveau, stockage et OCR des rapports de controle PDF, suivi des reserves avec workflow de levee, dashboard multi-sites, generation du registre de securite.

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## Synthese et Classement

| Rang | Projet | Total | Douleur | Declencheur | Acquisition | Concurrence |
|------|--------|-------|---------|-------------|-------------|-------------|
| 1 | **DUERPilot** (Document Unique) | **19/20** | 5 | 5 | 5 | 4 |
| 2 | **PartageValeur.io** (Partage de la valeur 11-49) | **19/20** | 4 | 5 | 5 | 5 |
| 3 | **RegistrePro** (Registres obligatoires) | **18/20** | 4 | 5 | 5 | 4 |
| 4 | **EntretienPro360** (Entretiens professionnels) | **17/20** | 5 | 5 | 4 | 3 |
| 5 | **VigiSousTrait** (Conformite sous-traitants) | **17/20** | 5 | 5 | 4 | 3 |
| 6 | **HabiliTrack** (Habilitations salaries) | **17/20** | 5 | 5 | 4 | 3 |
| 7 | **DechetConform** (Dechets & tri) | **17/20** | 4 | 5 | 4 | 4 |
| 8 | **VGPCalendar** (Verifications periodiques) | **16/20** | 4 | 5 | 4 | 3 |
| 9 | **VisiteMedPilot** (Visites medicales) | **16/20** | 4 | 4 | 4 | 4 |
| 10 | **AffichLegal** (Affichage obligatoire) | **15/20** | 3 | 4 | 4 | 4 |

### Observations cles

1. **Le trio de tete (DUERPilot, PartageValeur.io, RegistrePro)** combine une obligation legale claire, des sanctions financieres dissuasives, un marche adressable massif, et une absence de concurrent dominant adapte aux TPE/PME. Ce sont les projets a lancer en priorite.

2. **PartageValeur.io est l'opportunite la plus "time-sensitive"** : l'obligation est NOUVELLE (2025), les entreprises la decouvrent, aucun SaaS dedie n'existe encore. Fenetre de tir de 12-18 mois avant que les SIRH generalistes n'integrent la fonctionnalite.

3. **DUERPilot a le plus gros marche potentiel** (2,4 millions d'etablissements, dont 54% non conformes), mais la concurrence open-source (DigiRisk) et l'outil gratuit de l'INRS (OiRA) limitent le pricing.

4. **Tous ces projets partagent la meme stack technique** (Next.js + Supabase + generation PDF + workflow engine), ce qui permet de construire une plateforme modulaire et de proposer a terme une "suite de conformite TPE/PME".

5. **La strategie d'acquisition ideale est commune** : SEO sur les termes de recherche lies aux obligations ("DUERP obligatoire", "registre unique du personnel amende", "partage de la valeur obligation 2025"), partenariats avec les experts-comptables (qui sont le premier interlocuteur des TPE/PME pour les questions de conformite), et prospection ciblée via les donnees SIRENE/Pappers.
