# 10 Idees de Projets SaaS B2B - Exploitation de Donnees Publiques Francaises

> **Agent 9** - Angle : Transformation de donnees publiques francaises en outils SaaS a forte valeur ajoutee
> Date : 2026-02-06

---

## 1. COPRO-ENERGIE - Le tableau de bord energetique pour syndics de copropriete

### La Douleur
- **Qui souffre ?** Les ~4 400 syndics professionnels gerant 315 000 coproprietes en France
- **De quoi ?** Obligation legale de realiser un DPE collectif pour TOUTES les coproprietes (echelonne 2024-2026), identifier les passoires thermiques (classes F/G), planifier les travaux de renovation et informer les coproprietaires. Les syndics croulent sous cette charge reglementaire massive.
- **Combien ca coute ?** 15-30h de travail administratif par copropriete pour compiler les donnees, croiser les DPE individuels, le DPE collectif, identifier les lots concernes par l'interdiction de location. A 50EUR/h, soit 750-1 500EUR par copropriete.
- **Frequence ?** Annuel (obligation) + continu (suivi des travaux, AG)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - API DPE ADEME (https://data.ademe.fr) - 9M+ DPE individuels, ~35 000 nouveaux/semaine
  - Registre national des coproprietes ANAH (https://www.data.gouv.fr/datasets/registre-national-dimmatriculation-des-coproprietes) - 528 000 coproprietes, 11,4M logements
  - DVF data.gouv.fr (https://www.data.gouv.fr/datasets/demandes-de-valeurs-foncieres) - transactions immobilieres
  - Cadastre / parcellaire (https://cadastre.data.gouv.fr)
- **Que contiennent-elles ?** Les DPE contiennent la classe energetique (A-G), classe GES, adresse, surface, date de construction. Le registre des coproprietes donne le nombre de lots, le syndic, les donnees financieres. Le DVF donne les prix de transaction.
- **Comment on les transforme en valeur ?** On croise automatiquement le registre des coproprietes avec la base DPE pour generer un "bulletin de sante energetique" par copropriete : nombre de passoires thermiques, lots concernes par l'interdiction de location (G depuis 2025, F en 2028), estimation de la decote immobiliere, priorite de travaux. Le syndic recoit un dashboard pret-a-presenter en AG.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Obligation DPE collectif : coproprietes de 50 lots max depuis le 1er janvier 2026 (derniere vague). Interdiction de location des logements classes G effective depuis 2025. Les syndics DOIVENT agir.
- **Quand ?** MAINTENANT - la derniere echeance est le 1er janvier 2026 pour les petites coproprietes
- **Quelle urgence ?** Critique - Amendes possibles, responsabilite du syndic engagee, pression des coproprietaires bailleurs

### L'Acquisition Client
- **Ou trouver les prospects ?** Dans le registre national des coproprietes lui-meme ! Il contient le nom du syndic pour chaque copropriete. On peut donc generer une liste de TOUS les syndics professionnels avec le nombre exact de coproprietes qu'ils gerent.
- **Combien sont-ils ?** ~4 400 syndics professionnels (source ANAH T1 2025)
- **Quel message d'accroche ?** "Vous gerez 72 coproprietes en moyenne - nous avons deja identifie combien de passoires thermiques vous devez traiter. Voici votre rapport gratuit."

### La Concurrence
- **Qui existe ?**
  - Hellio (courtier en energie, pas SaaS pour syndics)
  - MeilleureCopro (comparateur de syndics, pas d'outil energetique)
  - Outils DPE pour diagnostiqueurs (pas pour syndics)
- **Pourquoi sont-ils inadaptes ?** Aucun outil ne croise automatiquement registre coproprietes + base DPE ADEME + DVF pour offrir une vue consolidee par syndic. Les outils existants sont soit destines aux diagnostiqueurs, soit aux particuliers.
- **Mon angle differenciant ?** Le seul outil qui dit au syndic "sur vos 72 coproprietes, voici les 23 qui ont un probleme urgent, classees par priorite".

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Data pipeline ETL multi-sources (ADEME + ANAH + DVF), geocoding, scoring energetique automatise, generation de rapports PDF, real-time sync avec API ADEME

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 5/5
- **TOTAL :** 20/20

---

## 2. MARCHERADAR - L'intelligence marchés publics pour PME du BTP

### La Douleur
- **Qui souffre ?** Les ~400 000 PME et artisans du BTP en France (37 000 dans le transport routier, 600 000+ dans le BTP au total)
- **De quoi ?** Elles passent a cote de marches publics qu'elles pourraient gagner car : (1) elles ne savent pas quel acheteur public achete quoi dans leur zone, (2) elles ne connaissent pas les prix habituellement attribues, (3) elles ne savent pas a quel concurrent le marche a ete attribue precedemment. Les DECP (Donnees Essentielles de la Commande Publique) contiennent TOUT cela mais sont inexploitables en l'etat.
- **Combien ca coute ?** Un marche public moyen = 50-200K EUR. Rater 2-3 marches/an par manque d'intelligence = 100-600K EUR de CA perdu. Preparer une reponse inutile (pas de chance de gagner) = 20-40h perdues.
- **Frequence ?** Hebdomadaire (nouveaux appels d'offres permanents)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - DECP - Donnees Essentielles de la Commande Publique (https://www.data.gouv.fr/datasets/donnees-essentielles-de-la-commande-publique-fichiers-consolides) - ~1M d'attributions depuis 2018
  - API BOAMP (https://www.boamp.fr/pages/donnees-ouvertes-et-api/) - appels d'offres en cours
  - Base SIRENE INSEE (https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret) - enrichissement des titulaires
  - BODACC (https://www.bodacc.fr/pages/donnees-ouvertes-et-api/) - sante financiere des concurrents
- **Que contiennent-elles ?** Les DECP contiennent : acheteur (SIRET), titulaire (SIRET), montant, code CPV (categorie), date. Le BOAMP contient les appels en cours. SIRENE permet d'enrichir avec taille, CA, localisation.
- **Comment on les transforme en valeur ?** On reconstruit l'historique d'achat de chaque acheteur public par code CPV : qui achete quoi, a quel prix, a qui, a quelle frequence. Pour chaque PME, on genere un "radar" : quels acheteurs pres de chez elle achetent ses services, a quel prix moyen, qui a gagne avant, et quand le marche sera renouvele. Scoring de probabilite de gagner.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Publication d'un nouvel appel d'offres correspondant au profil de la PME + donnees montrant que le marche precedent arrive a echeance. Le decret du 30/12/2024 augmente la part reservee aux PME de 10% a 20%.
- **Quand ?** En continu - les DECP sont publiees au fil de l'eau
- **Quelle urgence ?** Haute - les delais de reponse aux AO sont courts (21-40 jours)

### L'Acquisition Client
- **Ou trouver les prospects ?** Dans les DECP elles-memes ! On identifie toutes les PME qui ont deja repondu (et gagne) des marches publics = entreprises deja actives sur ce canal. + Base SIRENE pour les entreprises BTP qui n'ont jamais repondu mais sont dans la bonne zone/le bon secteur.
- **Combien sont-ils ?** ~150 000 PME BTP potentiellement concernees (62% des marches sont attribues a des PME)
- **Quel message d'accroche ?** "La mairie de [ville] va renouveler son marche de voirie (85K EUR) dans 3 mois. Le titulaire actuel a un score de solvabilite en baisse. C'est votre fenetre."

### La Concurrence
- **Qui existe ?**
  - Vecteur Plus (historique, pricing opaque, generalement 300-800EUR/mois)
  - France Marches (alertes basiques, ~100EUR/mois)
  - Marches Online (~150EUR/mois)
  - Wanao (monitoring, pricing non communique)
- **Pourquoi sont-ils inadaptes ?** Ils se concentrent sur la VEILLE (alerter sur les nouveaux AO) mais PAS sur l'INTELLIGENCE (qui a gagne avant, a quel prix, quand le renouvellement). Aucun n'exploite les DECP pour du scoring predictif.
- **Mon angle differenciant ?** Pas un outil de veille mais un outil d'intelligence : "Voici les 5 marches que vous avez le plus de chances de gagner ce trimestre, avec les prix historiques et l'analyse des titulaires sortants."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Pipeline ETL DECP/BOAMP/SIRENE, matching semantique par code CPV, scoring predictif ML, cartographie geo des opportunites, alertes real-time

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 18/20

---

## 3. RISKLENS - Surveillance du risque fournisseur via donnees legales pour directeurs achats

### La Douleur
- **Qui souffre ?** Les ~30 000 directeurs achats et credit managers d'ETI/PME (50-500 salaries) en France
- **De quoi ?** 67 830 entreprises sont entrees en procedure collective en 2024. 25% des procedures collectives sont liees a des impayes en cascade. Un fournisseur ou client qui fait defaillance = rupture d'approvisionnement, creances irrecouvrables, effet domino. Les outils existants (Altares, Ellisphere, Infolegale) sont chers (500-2000EUR/mois) et complexes, inadaptes aux PME.
- **Combien ca coute ?** Creance moyenne irrecouvrable sur un fournisseur defaillant = 15-50K EUR. Une rupture d'approvisionnement imprevue = 2-10 jours d'arret = 10-100K EUR.
- **Frequence ?** Quotidien (surveillance continue du portefeuille)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - API BODACC (https://www.bodacc.fr/pages/api-bodacc/) - procedures collectives, modifications, ventes
  - API INPI/RNE (https://data.inpi.fr) - comptes annuels, actes, modifications de statuts
  - Base SIRENE (https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret) - donnees d'identification
  - DECP (https://data.economie.gouv.fr) - pour croiser avec les marches publics perdus/gagnes
- **Que contiennent-elles ?** Le BODACC publie en temps reel : ouvertures de redressement/liquidation, plans de sauvegarde, cessions, modifications (changement de dirigeant, transfert de siege). L'INPI fournit les comptes annuels (bilan, resultat) pour 1,8M d'entreprises. SIRENE donne la date de creation, les effectifs, le code APE.
- **Comment on les transforme en valeur ?** On cree un "score de risque" composite en temps reel pour chaque entreprise du portefeuille : evolution du CA et du resultat (comptes annuels INPI), signaux faibles (changement de dirigeant, transfert de siege = BODACC B), alertes critiques (ouverture de procedure collective = BODACC A). Dashboard simple : vert/orange/rouge par fournisseur.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Un fournisseur cle qui publie des comptes en perte au BODACC/INPI, ou un concurrent qui tombe en redressement. Avec 67 830 defaillances en 2024 (record), CHAQUE PME connait un cas dans son entourage.
- **Quand ?** Permanent - les defaillances sont publiees tous les jours au BODACC
- **Quelle urgence ?** Haute - une fois la liquidation publiee, il est trop tard

### L'Acquisition Client
- **Ou trouver les prospects ?** Dans la base SIRENE : on filtre les ETI/PME (50-500 salaries) avec un code APE correspondant a des activites B2B (industrie, negoce, services). On peut aussi cibler les entreprises dont un fournisseur vient d'entrer en procedure collective (via BODACC).
- **Combien sont-ils ?** ~35 000 ETI et ~150 000 PME de 50+ salaries (source INSEE)
- **Quel message d'accroche ?** "3 de vos fournisseurs affichent des signaux faibles de defaillance. Voici le rapport gratuit de votre portefeuille."

### La Concurrence
- **Qui existe ?**
  - Altares (filiale D&B, pricing 500-2000EUR/mois, cible grands comptes)
  - Ellisphere (39 000 utilisateurs, cible grands comptes)
  - Infolegale (leve 790KEUR, scoring + alertes, 200-800EUR/mois)
  - Societe.com (info gratuite mais sans scoring ni alertes)
- **Pourquoi sont-ils inadaptes ?** Trop chers et trop complexes pour les PME de 50-200 salaries. Interface "annees 2000", pas de self-serve, necessitent un commercial. Pas de vision "portefeuille" simple.
- **Mon angle differenciant ?** "L'anti-Altares : surveillez 100 fournisseurs pour 99EUR/mois avec un dashboard vert/orange/rouge, sans commercial ni formation."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Pipeline BODACC real-time, ETL comptes annuels INPI, scoring de risque composite, alertes push, API webhook pour ERP

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 4. CONFORMEO - Le pilote automatique des obligations conventionnelles pour TPE/PME

### La Douleur
- **Qui souffre ?** Les ~170 000 TPE/PME de 10 a 50 salaries sans DRH ni service juridique dedie
- **De quoi ?** Chaque entreprise depend d'une convention collective (identifiee par l'IDCC), qui impose des dizaines d'obligations specifiques : grilles de salaires, primes, jours de conge supplementaires, prevoyance obligatoire, mutuelle, formation. Les textes changent regulierement (avenants). Les dirigeants ne lisent JAMAIS leur convention collective et risquent des redressements URSSAF ou des actions prud'homales.
- **Combien ca coute ?** Un redressement URSSAF moyen = 8 000EUR pour une TPE. Une action prud'homale = 15-30K EUR. Un avocat en droit social = 250EUR/h.
- **Frequence ?** Continue - les conventions evoluent par avenants (2-5 avenants/an en moyenne)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - API Conventions collectives SIRET > IDCC (https://github.com/SocialGouv/siret2idcc) - mapping entreprise > convention
  - Base KALI (https://www.data.gouv.fr/datasets/kali-conventions-collectives-nationales) - texte integral des conventions collectives
  - BOCC - Bulletin officiel des conventions collectives (https://www.data.gouv.fr/datasets/bocc-bulletin-officiel-des-conventions-collectives) - avenants et modifications
  - API Legifrance (https://www.legifrance.gouv.fr/contenu/pied-de-page/open-data-et-api) - textes consolides
  - Base SIRENE - pour identifier et contacter les entreprises
- **Que contiennent-elles ?** L'API siret2idcc fait le lien SIRET > IDCC (via les DSN). KALI contient le texte integral des ~300 conventions actives. Le BOCC publie tous les avenants (salaires, conditions de travail). Legifrance fournit les textes consolides.
- **Comment on les transforme en valeur ?** On prend le SIRET d'une entreprise, on identifie sa convention (IDCC), on extrait automatiquement les obligations-cles (grille de salaires minimum, prevoyance obligatoire, jours de conge speciaux, primes obligatoires) et on genere une "checklist de conformite" personnalisee. A chaque avenant publie au BOCC, on alerte l'entreprise et met a jour la checklist.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Publication d'un avenant a la convention collective (nouvelle grille de salaire, nouvelle obligation de prevoyance). Ou reception d'un avis de controle URSSAF (30 jours de delai). Ou embauche d'un premier salarie.
- **Quand ?** 2-5 fois par an par convention (avenants) + en continu (embauches)
- **Quelle urgence ?** Haute - les avenants salariaux sont retroactifs, un retard = rappels de salaire

### L'Acquisition Client
- **Ou trouver les prospects ?** Via SIRENE : filtrer les entreprises de 10-50 salaries par code APE + croiser avec siret2idcc pour identifier celles sous les conventions les plus complexes (BTP IDCC 1596/1597, HCR IDCC 1979, metallurgie IDCC 3248). On peut aussi cibler les entreprises nouvellement creees (date de creation SIRENE).
- **Combien sont-ils ?** ~170 000 entreprises de 10-50 salaries (source INSEE)
- **Quel message d'accroche ?** "Votre convention collective HCR a ete modifiee il y a 3 semaines. Voici les 4 obligations que vous devez mettre a jour avant le [date]."

### La Concurrence
- **Qui existe ?**
  - LegalStart, Captain Contrat (juridique generaliste, pas de suivi convention)
  - PayFit, Silae (paie, integrent partiellement les conventions mais pas de conformite proactive)
  - Convention.fr (editeur papier/PDF, pas de SaaS de conformite)
- **Pourquoi sont-ils inadaptes ?** Les logiciels de paie appliquent les conventions pour le calcul des bulletins mais n'alertent pas sur les obligations non-paie (prevoyance, formation, conge). Les services juridiques sont reactifs (on pose une question) et pas proactifs.
- **Mon angle differenciant ?** "Le seul outil qui surveille votre convention collective 24/7 et vous dit exactement quoi faire quand elle change - en langage humain, pas juridique."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 8 semaines (commencer avec 10 conventions les plus courantes)
- **Features CV impressionnantes** : NLP/parsing juridique sur textes Legifrance, pipeline BOCC en real-time, extraction automatique d'obligations, generation de checklists dynamiques, API siret2idcc

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 18/20

---

## 5. FONCIER-SCORE - L'analyse de faisabilite fonciere pour promoteurs independants

### La Douleur
- **Qui souffre ?** Les ~2 500 promoteurs immobiliers independants et ~5 000 marchands de biens en France
- **De quoi ?** Avant d'acheter un terrain, un promoteur doit verifier : le PLU (zone, CES, COS, hauteur max), les risques (inondation, PPRI, CATNAT), le DPE du bati existant, les transactions recentes (DVF), le cadastre. Aujourd'hui, il doit consulter 6-8 sites differents, faire des calculs manuels, et ca prend 2-4h par parcelle analysee. Il en analyse 20-50 par mois.
- **Combien ca coute ?** 2-4h x 30 parcelles/mois = 60-120h/mois. A 80EUR/h (cout charge d'un developpeur foncier) = 4 800-9 600EUR/mois en temps perdu.
- **Frequence ?** Quotidien (analyse de nouvelles parcelles chaque jour)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - API Geoportail de l'Urbanisme / GPU (https://www.geoportail-urbanisme.gouv.fr/api/) - PLU, zonage, reglement
  - API Georisques (https://www.georisques.gouv.fr/doc-api) - risques naturels, CATNAT, PPR
  - DVF geolocalise (https://www.data.gouv.fr/datasets/demandes-de-valeurs-foncieres-geolocalisees) - prix de transaction
  - API DPE ADEME (https://data.ademe.fr) - DPE du bati existant
  - Cadastre (https://cadastre.data.gouv.fr) - parcellaire, surfaces
  - Sitadel2 (https://www.data.gouv.fr/datasets/base-des-permis-de-construire-et-autres-autorisations-durbanisme) - permis de construire accordes
- **Que contiennent-elles ?** GPU = zone du PLU, regle d'urbanisme (hauteur, emprise, recul). Georisques = PPRI, CATNAT, ICPE a proximite. DVF = toutes les transactions des 5 dernieres annees. ADEME = DPE de tout batiment. Sitadel2 = tous les permis de construire depuis 2013.
- **Comment on les transforme en valeur ?** Pour une adresse ou parcelle donnee, on genere en 30 secondes une fiche complete : zone PLU + regles, surface constructible estimee, risques identifies, prix au m2 du quartier (DVF), DPE existant, permis accordes a proximite (Sitadel2). Score de faisabilite automatique.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Nouveau permis de construire accorde dans une zone (signal qu'un concurrent investit), modification du PLU, ou simplement pression concurrentielle : le promoteur qui analyse plus vite gagne la course au foncier.
- **Quand ?** Permanent
- **Quelle urgence ?** Haute - le foncier se rarefie, la rapidite d'analyse = avantage competitif

### L'Acquisition Client
- **Ou trouver les prospects ?** Via SIRENE (code APE 4110A - Promotion immobiliere de logements, 4110B, 4110C, 4110D + 6810Z marchands de biens). Via Sitadel2 : les entreprises qui deposent des permis de construire = promoteurs actifs.
- **Combien sont-ils ?** ~7 500 entreprises (promoteurs + marchands de biens actifs)
- **Quel message d'accroche ?** "Analysez n'importe quelle parcelle en 30 secondes : PLU, risques, prix, DPE, permis voisins. Tout ce qui vous prend 3h, consolide en un clic."

### La Concurrence
- **Qui existe ?**
  - Urbanease/PriceHubble (racheté, oriente estimation, pas faisabilite)
  - KelFoncier (PLU + proprietaires, ~200EUR/mois)
  - ORUS App / 1Spatial (prospection fonciere, oriente grands groupes)
  - Realtys (DVF + DPE, 79EUR/mois, oriente agents immobiliers)
  - Telescop (procedurés collectives + immobilier, oriente marchands de biens)
- **Pourquoi sont-ils inadaptes ?** Chacun couvre 1-2 sources mais AUCUN ne croise GPU + Georisques + DVF + DPE + Sitadel2 + Cadastre en une seule fiche. Les promoteurs independants utilisent 3-4 outils differents.
- **Mon angle differenciant ?** "La SEULE fiche fonciere qui croise 6 bases publiques en 30 secondes - tout ce dont un promoteur a besoin sur UNE seule page."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 8 semaines
- **Features CV impressionnantes** : Integration 6 APIs publiques, cartographie Mapbox/Leaflet, geocoding, scoring de faisabilite multi-criteres, cache geospatial, PDF generation

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## 6. REPRISE-ALERT - Detection automatique d'entreprises a reprendre pour les repreneurs

### La Douleur
- **Qui souffre ?** Les ~50 000 porteurs de projet de reprise d'entreprise en France (source CRA - Cedants et Repreneurs d'Affaires) + ~3 000 fonds de retournement et cabinets de conseil en restructuration
- **De quoi ?** 67 830 procedures collectives en 2024. Des milliers d'entreprises viables sont en redressement ou en plan de cession, mais les repreneurs potentiels l'apprennent trop tard ou ne trouvent pas les bonnes cibles. Les annonces du BODACC sont noyees dans un flux quotidien massif et non structurees par secteur/taille/localisation.
- **Combien ca coute ?** Un repreneur passe 6-18 mois a chercher. Un cabinet de conseil en restructuration facture 5-15K EUR de veille. Un fonds rate une opportunite de reprise = 50-500K EUR de marge potentielle.
- **Frequence ?** Quotidien (nouvelles publications BODACC chaque jour ouvre)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - API BODACC A (https://www.bodacc.fr/pages/api-bodacc/) - procedures collectives (redressement, liquidation, sauvegarde, plans de cession)
  - API INPI/RNE (https://data.inpi.fr) - comptes annuels, actes, effectifs
  - Base SIRENE (https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret) - secteur, taille, localisation
  - DVF (https://www.data.gouv.fr/datasets/demandes-de-valeurs-foncieres) - valeur des actifs immobiliers eventuels
- **Que contiennent-elles ?** BODACC A publie chaque jour : type de procedure, tribunal, date d'ouverture, mandataire judiciaire. L'INPI fournit le dernier bilan (CA, resultat, endettement). SIRENE donne le secteur, la tranche d'effectif, l'adresse.
- **Comment on les transforme en valeur ?** On cree un flux d'opportunites de reprise enrichi et filtre : chaque procedure collective est enrichie avec CA, effectif, secteur, localisation, actifs immobiliers (DVF). Le repreneur definit ses criteres (secteur, taille, zone geo, CA min/max) et recoit des alertes qualifiees avec une fiche complete.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Record de defaillances en 2024 (67 830). Chaque ouverture de redressement est une fenetre limitee (delai de presentation des offres = quelques semaines).
- **Quand ?** Permanent, mais accentue en periode de crise economique
- **Quelle urgence ?** Critique - les offres de reprise doivent etre deposees dans un delai fixe par le tribunal

### L'Acquisition Client
- **Ou trouver les prospects ?** Cabinets de conseil en restructuration (identifiables via SIRENE, code APE 7022Z). Repreneurs individuels via les chambres de commerce (CCI). Fonds de retournement via des listes publiques.
- **Combien sont-ils ?** ~50 000 repreneurs actifs + ~500 cabinets de restructuration + ~200 fonds specialises
- **Quel message d'accroche ?** "Cette PME industrielle de 45 salaries (CA 3,2M EUR) est en redressement depuis hier dans votre departement. Voici sa fiche complete."

### La Concurrence
- **Qui existe ?**
  - Storybee (liste d'entreprises en difficulte, gratuit/freemium, donnees basiques)
  - CRA/BPI Reprise (places de marche, annonces manuelles)
  - Altares (monitoring, mais pas oriente reprise)
- **Pourquoi sont-ils inadaptes ?** Storybee est basique (pas d'enrichissement financier). CRA est une marketplace (annonces voluntaires). Altares est trop cher et generaliste. Aucun ne croise BODACC + INPI (bilans) + DVF (actifs immobiliers) pour qualifier l'opportunite.
- **Mon angle differenciant ?** "Le seul outil qui transforme le flux brut du BODACC en opportunites de reprise qualifiees : CA, marge, actifs, effectif, tout en une fiche."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 5 semaines
- **Features CV impressionnantes** : Pipeline BODACC real-time, enrichissement INPI (bilans) + SIRENE + DVF, filtrage multi-criteres, alertes personnalisees, fiche d'opportunite PDF

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 17/20

---

## 7. BAILTRACK - Gestion intelligente des echeances de baux commerciaux

### La Douleur
- **Qui souffre ?** Les ~150 000 proprietaires de locaux commerciaux (SCI, foncières, investisseurs) et les ~60 000 commercants locataires en France
- **De quoi ?** Le bail commercial est un contrat complexe de 3-6-9 ans avec des pieges redoutables : si le bailleur ne donne pas conge 6 mois avant l'echeance, le bail se prolonge tacitement. Apres 12 ans de tacite prolongation, le loyer est "deplafonne" (= explosion). La revision triennale est basee sur les indices INSEE (ILC, ILAT) qui changent chaque trimestre. Les erreurs coutent des dizaines de milliers d'euros.
- **Combien ca coute ?** Un deplafonnement subi = augmentation de loyer de 30-100% = 10-50K EUR/an. Un conge mal donne = indemnite d'eviction = 1 a 3 ans de loyer. Une revision oubliee = manque a gagner de 5-15K EUR/an.
- **Frequence ?** Trimestriel (indices) + triennal/novenal (echeances)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - Indices ILC et ILAT de l'INSEE (https://www.insee.fr/fr/information/1300602) - publies chaque trimestre
  - BODACC (https://www.bodacc.fr) - publications de ventes de fonds de commerce, cessions de baux
  - DVF (https://www.data.gouv.fr/datasets/demandes-de-valeurs-foncieres) - valeurs locatives de reference par zone
  - Base SIRENE - identification des commercants et des SCI
  - Fiscalite locale DGFiP (https://www.data.gouv.fr/datasets/impots-locaux) - taux de taxe fonciere par commune
- **Que contiennent-elles ?** L'INSEE publie l'ILC et l'ILAT chaque trimestre (avec 2 trimestres de decalage). Le BODACC publie les cessions de baux et ventes de fonds de commerce. Le DVF donne les transactions immobilieres pour estimer les valeurs locatives. La DGFiP donne les taux de taxe fonciere.
- **Comment on les transforme en valeur ?** On cree un coffre-fort numerique pour baux commerciaux : l'utilisateur saisit les parametres de son bail (date de debut, loyer, indice de reference, echeances), et le systeme calcule automatiquement les revisions a chaque publication INSEE, alerte 7 mois avant chaque echeance critique, et estime la valeur locative de marche via DVF. Plus de mauvaise surprise.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Approche de la date triennale (3-6-9 ans). Publication d'un nouvel indice ILC/ILAT par l'INSEE. Ou decouverte qu'un bail est en tacite prolongation depuis des annees.
- **Quand ?** Trimestriel (indices) + tous les 3 ans (echeances)
- **Quelle urgence ?** Critique - les delais sont imperatifs (6 mois avant echeance pour le conge)

### L'Acquisition Client
- **Ou trouver les prospects ?** Via SIRENE : les SCI (code APE 6820A/B) sont les bailleurs. Les entreprises avec un SIRET physique (pas domiciliation) en centre-ville sont locataires. Via BODACC : les ventes de fonds de commerce revelent des baux actifs.
- **Combien sont-ils ?** ~250 000 SCI immobilieres + ~150 000 commercants en bail commercial
- **Quel message d'accroche ?** "L'ILC vient d'etre publie : votre loyer doit etre revise de +2,3%. Si vous ne faites rien dans 30 jours, vous perdez cette revision."

### La Concurrence
- **Qui existe ?**
  - Geolocaux (estimation de loyers, pas de gestion de bail)
  - Fox Immobilier / property management software (gros logiciels pour foncières, 500EUR+/mois)
  - Excel/tableur (la realite de 90% des proprietaires)
- **Pourquoi sont-ils inadaptes ?** Les logiciels de property management sont dimensionnes pour les foncières institutionnelles (100+ baux). Pour le proprietaire de 1-10 locaux commerciaux, il n'existe rien entre le tableur et le logiciel a 500EUR/mois.
- **Mon angle differenciant ?** "Le pilote automatique de votre bail commercial : alertes echeances, revisions calculees, valeur locative estimee - pour 29EUR/bail/mois."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 4 semaines
- **Features CV impressionnantes** : Synchronisation indices INSEE real-time, moteur de calcul de revision, alertes calendaires, estimation valeur locative via DVF, generation de lettres-types juridiques

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 8. ACCESAUDIT - Mise en conformite accessibilite pour commerces et restaurants

### La Douleur
- **Qui souffre ?** Les ~1 000 000 d'ERP de categorie 5 (petits commerces, restaurants, cabinets medicaux, salons de coiffure) qui ne sont PAS encore aux normes d'accessibilite
- **De quoi ?** Depuis 2015, TOUS les ERP doivent etre accessibles aux personnes handicapees. Les Ad'AP (agendas de programmation) sont termines depuis mars 2019. En 2025, le gouvernement est passe en "logique contraignante" : les sanctions tombent (jusqu'a 45 000EUR d'amende). Or, seulement 350 000 ERP se sont declares conformes sur 1,2M. Le commerce de quartier ne sait pas par ou commencer.
- **Combien ca coute ?** Audit d'accessibilite par un bureau d'etudes = 800-2000EUR. Travaux de mise en conformite = 5 000-30 000EUR. Amende en cas de controle = jusqu'a 45 000EUR.
- **Frequence ?** Ponctuel (mise en conformite) puis annuel (registre d'accessibilite)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - API Acceslibre (https://acceslibre.beta.gouv.fr/api/docs/) - 530 000+ ERP references, niveaux d'accessibilite
  - Base SIRENE - tous les etablissements physiques (= potentiellement ERP)
  - Cadastre / parcellaire - pour l'adresse et la configuration du local
  - Base DPE ADEME - pour croiser avec les travaux energetiques
- **Que contiennent-elles ?** Acceslibre recense l'etat d'accessibilite de 530 000+ lieux (entree, interieur, sanitaires, stationnement). SIRENE identifie tous les etablissements commerciaux physiques. Le croisement Acceslibre x SIRENE revele les ERP NON references = probablement non conformes.
- **Comment on les transforme en valeur ?** On croise SIRENE (tous les commerces physiques) avec Acceslibre (ceux qui sont references/conformes). La DIFFERENCE = les commerces potentiellement non conformes. On leur propose un auto-diagnostic en ligne guide (questionnaire simple), puis un plan d'action personnalise avec estimation budgetaire et acces au Fonds Territorial d'Accessibilite (300M EUR mobilises).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Passage du gouvernement en "logique contraignante" en 2025. Fin du Fonds Territorial d'Accessibilite (date limite de depot = 7 janvier 2026 DEPASSE). Controles accrus. Plainte d'un client handicape.
- **Quand ?** MAINTENANT - les sanctions sont actives, les controles commencent
- **Quelle urgence ?** Haute - amende de 45 000EUR en cas de non-conformite

### L'Acquisition Client
- **Ou trouver les prospects ?** Croisement SIRENE (code APE restauration 5610A, commerce 47xx, sante 8621Z...) x Acceslibre (absents = non conformes). On a la liste exacte des commerces physiques NON presents dans Acceslibre.
- **Combien sont-ils ?** ~700 000 ERP non encore declares conformes (1,2M total - 530K dans Acceslibre dont une partie non conforme)
- **Quel message d'accroche ?** "Votre restaurant au 12 rue de la Paix n'apparait pas dans le registre d'accessibilite. L'amende peut aller jusqu'a 45 000EUR. En 15 minutes, faites votre diagnostic gratuit."

### La Concurrence
- **Qui existe ?**
  - Acceslibre (gratuit, mais juste un annuaire, pas d'accompagnement)
  - Bureaux d'etudes accessibilite (prestation physique, 800-2000EUR)
  - Pas de SaaS specialise dans l'auto-diagnostic + plan d'action
- **Pourquoi sont-ils inadaptes ?** Acceslibre est un annuaire collaboratif, pas un outil de conformite. Les bureaux d'etudes sont trop chers pour un petit commerce. Il n'existe pas d'outil self-service entre "rien faire" et "payer 1500EUR un audit".
- **Mon angle differenciant ?** "L'auto-diagnostic accessibilite en 15 minutes pour les petits commerces : plan d'action personnalise, estimation budgetaire, et dossier de subvention pre-rempli."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines
- **Features CV impressionnantes** : Croisement SIRENE x Acceslibre, questionnaire adaptatif, generation de plans d'action, estimation budgetaire algorithmique, generation PDF registre accessibilite

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 9. SIGNAL-BIZ - Detection de signaux d'achat B2B via evenements legaux

### La Douleur
- **Qui souffre ?** Les ~25 000 commerciaux B2B (ESN, agences, editeurs SaaS, cabinets de conseil) qui font de la prospection en France
- **De quoi ?** La prospection a froid (cold calling, cold emailing) a un taux de conversion < 2%. Les commerciaux perdent 70% de leur temps a contacter des entreprises au MAUVAIS moment. Or, des evenements publics predisent un besoin d'achat : demenagement (= besoin IT, amenagement), levee de fonds (= recrutement, outils), nouveau dirigeant (= remise a plat des fournisseurs), forte croissance (nouveaux effectifs SIRENE).
- **Combien ca coute ?** Un commercial coute 50-80K EUR/an. S'il passe 70% du temps en prospection non qualifiee = 35-56K EUR gaspilles.
- **Frequence ?** Quotidien (prospection continue)

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - BODACC B (https://www.bodacc.fr/pages/api-bodacc/) - transferts de siege social, changements de dirigeants, modifications de capital
  - Base SIRENE mises a jour quotidiennes (https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret) - nouvelles immatriculations, changements d'effectifs
  - INPI/RNE (https://data.inpi.fr) - augmentations de capital, PV d'AG
  - DECP (https://data.economie.gouv.fr) - marches publics gagnes (= entreprise en croissance)
  - Sitadel2 - permis de construire/amenager (= projets en cours)
- **Que contiennent-elles ?** BODACC B = tout changement statutaire (demenagement, nouveau dirigeant, changement de capital). SIRENE = creation d'etablissement, changement de tranche d'effectif. INPI = augmentations de capital. DECP = marches publics gagnes.
- **Comment on les transforme en valeur ?** On categorise chaque evenement en "signal d'achat" par type de vendeur : demenagement = signal pour deménageurs, agenceurs, IT. Augmentation de capital = signal pour cabinets de recrutement. Nouveau dirigeant = signal pour prestataires de conseil. L'utilisateur definit ses criteres cibles (secteur, taille, zone) et ses signaux, et recoit chaque matin une liste de prospects "chauds" avec le contexte.

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Le commercial vient de rater un deal parce qu'il a contacte l'entreprise 3 mois trop tard. Ou il decouvre qu'un concurrent a deja pris position.
- **Quand ?** Permanent
- **Quelle urgence ?** Moyenne a haute - la fenetre d'opportunite apres un evenement est de 1-3 mois

### L'Acquisition Client
- **Ou trouver les prospects ?** Via SIRENE : les ESN (code APE 6202A), agences (7311Z, 7312Z), cabinets de conseil (7022Z), editeurs de logiciels (5829C). On peut aussi cibler via LinkedIn Sales Navigator en parallele.
- **Combien sont-ils ?** ~80 000 entreprises de services B2B en France
- **Quel message d'accroche ?** "ACME SAS vient de transferer son siege de Lyon a Paris et d'augmenter son capital de 500K EUR. Si vous vendez du mobilier de bureau, c'est maintenant."

### La Concurrence
- **Qui existe ?**
  - Pharow (150EUR/mois, signaux business, leader en France)
  - Societeinfo (enrichissement SIRENE, 49-299EUR/mois)
  - Decidento (signaux business, pricing non communique)
  - Pappers (gratuit, donnees brutes sans signaux)
- **Pourquoi sont-ils inadaptes ?** Pharow est bon mais ne croise pas BODACC + DECP + Sitadel2. Societeinfo est un enrichisseur, pas un detecteur de signaux. Decidento est oriente grands comptes. Aucun ne fait le lien "signal d'evenement = besoin specifique pour votre metier".
- **Mon angle differenciant ?** "Pas juste les donnees, mais le CONTEXTE : chaque prospect vient avec le signal qui explique POURQUOI il a besoin de vous maintenant."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 6 semaines
- **Features CV impressionnantes** : Pipeline multi-sources real-time (BODACC + SIRENE + INPI + DECP), classification de signaux par ML, scoring de "chaleur" prospect, integration CRM (HubSpot, Pipedrive), API webhook

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## 10. HYGIENE-PRO - Tableau de bord conformite sanitaire pour restaurateurs

### La Douleur
- **Qui souffre ?** Les ~175 000 restaurants et debits de boisson + ~60 000 commerces alimentaires (boucheries, traiteurs, boulangeries) en France
- **De quoi ?** Les resultats des controles sanitaires sont publics depuis 2017 via Alim'confiance. Un resultat "a corriger" ou "a corriger de maniere urgente" est visible par TOUS les clients pendant 1 an. Les restaurateurs ne savent pas ce qui est controle, comment se preparer, ni comment suivre leur plan de mise en conformite apres un mauvais resultat. Le secteur HCR est le plus controle par la DGAL.
- **Combien ca coute ?** Fermeture administrative temporaire = 2 000-10 000EUR de perte de CA. Resultat "a corriger" visible 1 an = baisse de frequentation estimee a 10-20%. Amende = jusqu'a 1 500EUR par infraction.
- **Frequence ?** Les controles sont imprevisibles (1 tous les 2-5 ans en moyenne), mais la preparation doit etre continue

### Les Donnees Publiques Exploitees
- **Source(s)** :
  - Alim'confiance (https://www.data.gouv.fr/datasets/resultats-des-controles-officiels-sanitaires-dispositif-dinformation-alimconfiance) - resultats des controles sanitaires (4 niveaux)
  - Base SIRENE - identification de tous les restaurants/commerces alimentaires
  - API Conventions collectives - pour les obligations specifiques HCR (IDCC 1979)
  - Formation HACCP data (Carif-Oref) - pour verifier les certifications
- **Que contiennent-elles ?** Alim'confiance publie : nom de l'etablissement, adresse, date du controle, niveau d'hygiene (4 niveaux de "tres satisfaisant" a "a corriger de maniere urgente"). Les resultats restent visibles 1 an. SIRENE identifie tous les restaurants.
- **Comment on les transforme en valeur ?** On croise SIRENE (tous les restaurants) avec Alim'confiance (ceux controles). Pour chaque restaurateur : historique de ses controles, benchmark par rapport a son quartier/ville, checklist de preparation au prochain controle (basee sur les non-conformites les plus frequentes du secteur), suivi du plan de mise en conformite, alerte quand un nouveau controle est publie dans sa zone (= les inspecteurs sont dans le quartier).

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Publication d'un mauvais resultat Alim'confiance (visible par tous les clients). Ou controles dans le quartier (signal que les inspecteurs sont actifs). Ou renouvellement de l'assurance qui demande les resultats.
- **Quand ?** En continu - les controles sont publies quotidiennement sur Alim'confiance
- **Quelle urgence ?** Haute - un mauvais resultat est visible pendant 1 an, impact direct sur le CA

### L'Acquisition Client
- **Ou trouver les prospects ?** (1) Dans Alim'confiance : les restaurants ayant un resultat "a corriger" sont les prospects les plus chauds. (2) Dans SIRENE : tous les restaurants (code APE 5610A) n'ayant PAS de resultat dans Alim'confiance = jamais controles = pas prepares.
- **Combien sont-ils ?** ~175 000 restaurants + ~60 000 commerces alimentaires
- **Quel message d'accroche ?** "Votre dernier controle sanitaire du 15/01 affiche 'a ameliorer'. Vos clients peuvent le voir. En 20 minutes, preparez votre plan de correction."

### La Concurrence
- **Qui existe ?**
  - Traqfood (~50EUR/mois, tracabilite HACCP, pas de lien Alim'confiance)
  - Epack Hygiene (~30-60EUR/mois, checklists hygiene)
  - Excellences (formation HACCP)
- **Pourquoi sont-ils inadaptes ?** Ce sont des outils de tracabilite HACCP (suivi des temperatures, fiches produits) mais AUCUN n'exploite les donnees Alim'confiance pour : (1) alerter sur les controles dans la zone, (2) benchmarker par rapport aux voisins, (3) generer un plan de correction cible sur les non-conformites du secteur.
- **Mon angle differenciant ?** "Le seul outil qui utilise les VRAIS resultats de controle de votre zone pour vous preparer au prochain - pas une checklist generique."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 4 semaines
- **Features CV impressionnantes** : Pipeline Alim'confiance real-time, geolocalisation des controles, benchmarking par zone, generation de checklists dynamiques, alertes geographiques push

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 18/20

---

## RECAPITULATIF ET CLASSEMENT

| # | Projet | Douleur | Declencheur | Acquisition | Concurrence | TOTAL |
|---|--------|---------|-------------|-------------|-------------|-------|
| 1 | COPRO-ENERGIE | 5 | 5 | 5 | 5 | **20/20** |
| 7 | BAILTRACK | 5 | 5 | 4 | 5 | **19/20** |
| 8 | ACCESAUDIT | 4 | 5 | 5 | 5 | **19/20** |
| 2 | MARCHERADAR | 4 | 5 | 5 | 4 | **18/20** |
| 4 | CONFORMEO | 5 | 4 | 4 | 5 | **18/20** |
| 10 | HYGIENE-PRO | 4 | 5 | 5 | 4 | **18/20** |
| 3 | RISKLENS | 5 | 5 | 4 | 3 | **17/20** |
| 6 | REPRISE-ALERT | 4 | 5 | 4 | 4 | **17/20** |
| 5 | FONCIER-SCORE | 4 | 4 | 5 | 3 | **16/20** |
| 9 | SIGNAL-BIZ | 4 | 4 | 5 | 3 | **16/20** |

---

## SYNTHESE DES DONNEES PUBLIQUES EXPLOITEES

| Source de donnees | URL | Projets qui l'utilisent |
|---|---|---|
| API DPE ADEME | https://data.ademe.fr | COPRO-ENERGIE, FONCIER-SCORE |
| Registre coproprietes ANAH | https://www.data.gouv.fr/datasets/registre-national-dimmatriculation-des-coproprietes | COPRO-ENERGIE |
| DVF (valeurs foncieres) | https://www.data.gouv.fr/datasets/demandes-de-valeurs-foncieres-geolocalisees | COPRO-ENERGIE, FONCIER-SCORE, BAILTRACK, REPRISE-ALERT |
| API BODACC | https://www.bodacc.fr/pages/api-bodacc/ | RISKLENS, REPRISE-ALERT, SIGNAL-BIZ, BAILTRACK |
| DECP (commande publique) | https://www.data.gouv.fr/datasets/donnees-essentielles-de-la-commande-publique-fichiers-consolides | MARCHERADAR, RISKLENS, SIGNAL-BIZ |
| API BOAMP | https://www.boamp.fr/pages/donnees-ouvertes-et-api/ | MARCHERADAR |
| Base SIRENE INSEE | https://www.data.gouv.fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret | TOUS les projets |
| API INPI/RNE | https://data.inpi.fr | RISKLENS, REPRISE-ALERT, CONFORMEO, SIGNAL-BIZ |
| Base KALI (conventions) | https://www.data.gouv.fr/datasets/kali-conventions-collectives-nationales | CONFORMEO |
| API siret2idcc | https://github.com/SocialGouv/siret2idcc | CONFORMEO |
| BOCC (bulletin conventions) | https://www.data.gouv.fr/datasets/bocc-bulletin-officiel-des-conventions-collectives | CONFORMEO |
| Geoportail Urbanisme (GPU) | https://www.geoportail-urbanisme.gouv.fr/api/ | FONCIER-SCORE |
| API Georisques | https://www.georisques.gouv.fr/doc-api | FONCIER-SCORE |
| Sitadel2 (permis construire) | https://www.data.gouv.fr/datasets/base-des-permis-de-construire-et-autres-autorisations-durbanisme | FONCIER-SCORE, SIGNAL-BIZ |
| Cadastre | https://cadastre.data.gouv.fr | COPRO-ENERGIE, FONCIER-SCORE |
| Indices ILC/ILAT INSEE | https://www.insee.fr/fr/information/1300602 | BAILTRACK |
| Fiscalite locale DGFiP | https://www.data.gouv.fr/datasets/impots-locaux | BAILTRACK |
| API Acceslibre | https://acceslibre.beta.gouv.fr/api/docs/ | ACCESAUDIT |
| Alim'confiance | https://www.data.gouv.fr/datasets/resultats-des-controles-officiels-sanitaires-dispositif-dinformation-alimconfiance | HYGIENE-PRO |
| API Legifrance | https://www.legifrance.gouv.fr/contenu/pied-de-page/open-data-et-api | CONFORMEO |

---

## NOTES METHODOLOGIQUES

- **Toutes les sources de donnees citees existent** et ont ete verifiees via les portails officiels (data.gouv.fr, api.gouv.fr, sites ministerels).
- **Les URLs sont les pages officielles** des jeux de donnees ou des API.
- **Les chiffres de marche** proviennent de sources publiques (INSEE, ANAH, BODACC, ministeres).
- **Les concurrents cites** ont ete verifies par recherche web.
- **Les idees exclues** (Qualiopi, e-facture, ESG/CSRD) ne figurent pas dans cette liste.
- **Chaque idee exploite des donnees DIFFERENTES** ou pour un usage fondamentalement different.
- **Le stack technique** (Next.js, TypeScript, Supabase, Docker) est commun a toutes les idees pour la coherence.
