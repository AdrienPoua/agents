# 10 Idees de SaaS B2B - Declencheur d'Achat Evenementiel ou Saisonnier
## Marche Francais - Analyse Agent 8

**Angle de recherche** : SaaS dont l'achat est declenche par un EVENEMENT precis (changement de statut, echeance annuelle, obligation ponctuelle, saison, evenement de vie).

**Exclusions respectees** : Qualiopi, e-facture, evenements ERP (au sens logiciel), accessibilite RGAA, NIS2, syndic copropriete, gestion locative DPE.

---

## 1. TranspariPaie - Conformite transparence salariale directive UE 2026

### La Douleur
- **Qui souffre ?** DRH et dirigeants d'entreprises de 100+ salaries en France (~7 000 entreprises directement concernees par la directive, + ~30 000 entreprises de 50-99 salaries qui anticiperont)
- **De quoi ?** La directive europeenne 2023/970 impose d'ici le 7 juin 2026 la publication de fourchettes salariales dans les offres d'emploi, l'acces aux criteres de remuneration ventiles par sexe, et un rapport sur les ecarts salariaux (annuel pour les +250 salaries, tous les 3 ans pour 100-249). Si un ecart >5% est constate sans justification, une evaluation conjointe avec les representants du personnel est obligatoire.
- **Combien ca coute ?** Risque de sanctions financieres + contentieux prud'homaux (dommages-interets illimites). Le cout d'un audit remuneration par un cabinet externe : 15 000 a 50 000 EUR. Temps de preparation manuelle : 80-200h/an pour une DRH.
- **Frequence ?** Annuel (rapport) + continu (offres d'emploi, demandes salaries)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Transposition de la directive europeenne 2023/970 en droit francais, date butoir le 7 juin 2026
- **Quand ?** Preparation des 2025, obligation effective juin 2026, premiers rapports des 2027
- **Quelle urgence ?** Critique - les entreprises de 250+ salaries doivent publier un rapport annuel des la premiere annee

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE filtree par effectif, LinkedIn Sales Navigator (titre DRH/RRH + taille entreprise), salons RH (solutions RH, HR Technologies), webinaires droit social, partenariats cabinets d'avocats droit du travail
- **Combien sont-ils ?** ~7 000 entreprises de 100+ salaries directement concernees, ~30 000 si on inclut les 50-99 qui anticipent ou sont soumises a l'index egalite
- **Quel message d'accroche ?** "Directive transparence salariale juin 2026 : generez votre rapport de conformite en 1 clic au lieu de 200 heures de travail."

### La Concurrence
- **Qui existe ?** Figures.hr (levee totale ~10M EUR - donnees benchmark salaires, pas conformite directive), PayFit (levee 433M EUR, paie generaliste - EXCLUS car >100M$), Silae (index egalite mais pas directive transparence), Neobrain (gestion competences)
- **Pourquoi sont-ils inadaptes ?** Figures.hr fait du benchmark salarial entre startups, pas de la conformite reglementaire. Aucun acteur ne propose un outil dedie a la directive 2023/970 : generation automatique du rapport ESRS, detection des ecarts >5%, fourchettes salariales automatiques pour les offres d'emploi, registre des demandes salaries.
- **Mon angle differenciant ?** "Le seul outil 100% dedie a la conformite directive transparence salariale 2026, avec generation automatique du rapport reglementaire."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 8 semaines (import donnees paie CSV/API, calcul ecarts, generation rapport PDF, dashboard conformite)
- **Features CV impressionnantes** : Data pipeline ETL pour donnees salariales, algorithmes de classification de postes (ML clustering), generation de rapports conformes ESRS, API integration SIRH (Lucca, Payfit, Silae), audit trail complet

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 2. EntretienPilot - Gestion des entretiens professionnels obligatoires et prevention des sanctions CPF

### La Douleur
- **Qui souffre ?** DRH et dirigeants de PME de 50+ salaries (~35 000 entreprises en France)
- **De quoi ?** L'entretien professionnel est obligatoire tous les 2 ans + un bilan recapitulatif tous les 6 ans (art. L6315-1 du Code du travail). Pour les entreprises de 50+ salaries, le non-respect entraine un abondement correctif de 3 000 EUR par salarie sur son CPF. En cas de non-versement, l'entreprise verse au Tresor public le montant + 100% de majoration.
- **Combien ca coute ?** 3 000 EUR x nombre de salaries concernes. Pour une PME de 80 salaries avec 50% de retard : 120 000 EUR de penalite. Premiere vague de sanctions constatees en 2024-2025.
- **Frequence ?** Biennal (entretien) + sexennal (bilan) + continu (tracking)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Arrivee de l'echeance des 6 ans d'un salarie (date d'embauche + 6 ans), ou controle DREETS/URSSAF, ou decouverte de la sanction CPF par le DRH
- **Quand ?** Cycles de 2 ans et 6 ans a partir de la date d'embauche de chaque salarie - les premieres echeances des 6 ans massives ont eu lieu en 2020 (loi de 2014) et se renouvellent en continu
- **Quelle urgence ?** Critique - Les premieres sanctions tombent effectivement (arrets jurisprudentiels en 2024-2025)

### L'Acquisition Client
- **Ou trouver les prospects ?** LinkedIn (DRH PME 50-500 salaries), ANDRH (Association Nationale des DRH), salons RH, partenariats experts-comptables, webinaires gratuits "Evitez 3 000 EUR/salarie de penalite"
- **Combien sont-ils ?** ~35 000 entreprises de 50+ salaries (source INSEE : 140 000 PME dont ~25% ont 50+ salaries) + ~100 000 entreprises de 11-49 salaries sensibilisees
- **Quel message d'accroche ?** "Vos entretiens professionnels sont-ils a jour ? Chaque salarie oublie vous coute 3 000 EUR. Verifiez en 2 minutes."

### La Concurrence
- **Qui existe ?** Empowill (~350 clients, pricing non public), Javelo/Tellent (rachat par Tellent), Eurecia (module entretiens dans suite SIRH, ~30 EUR/mois/salarie), Poplee/Lucca (suite RH complete)
- **Pourquoi sont-ils inadaptes ?** Ce sont des SIRH generalistes qui incluent un module entretien parmi 20 modules. Aucun ne se specialise sur le risque legal et le calcul automatique de l'exposition financiere. Le DRH doit configurer lui-meme les alertes et comprendre la reglementation.
- **Mon angle differenciant ?** "Dashboard de risque financier en temps reel : combien vous devez a l'URSSAF si vous ne faites rien, avec plan d'action prioritaire par salarie."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines (import salaries, calcul echeances, alertes, trames entretien, signature electronique, calcul penalite)
- **Features CV impressionnantes** : Event-driven architecture (echeances declenchent alertes), moteur de regles metier (Code du travail), signature electronique integree, generation PDF conforme, API integration paie

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 3. SeuilRH - Assistant conformite lors du passage de seuils d'effectif (11, 20, 50, 250 salaries)

### La Douleur
- **Qui souffre ?** Dirigeants et DRH de PME en croissance qui franchissent un seuil d'effectif (~50 000 entreprises par an franchissent ou approchent un seuil)
- **De quoi ?** Le passage de 10 a 11 salaries declenche l'obligation CSE. Le passage a 20 salaries declenche la DOETH (6% de travailleurs handicapes, contribution AGEFIPH). Le passage a 50 salaries declenche : CSE elargi, BDESE obligatoire, reglement interieur, participation, plan de sauvegarde de l'emploi, entretiens professionnels avec sanctions, index egalite professionnelle au 1er mars... Plus de 40 nouvelles obligations au total.
- **Combien ca coute ?** Non-conformite CSE : delit d'entrave (1 an prison + 7 500 EUR amende). DOETH non respectee : contribution majoree de 25% + 5% par annee. Index egalite non publie : jusqu'a 1% de la masse salariale. BDESE absente : 7 500 EUR.
- **Frequence ?** Evenementiel (le franchissement du seuil) puis annuel (maintien de conformite)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** L'embauche du 11e, 20e, 50e ou 250e salarie (le seuil doit etre atteint pendant 12 mois consecutifs depuis la loi PACTE 2019)
- **Quand ?** A chaque embauche qui fait franchir un seuil, avec 12 mois de delai de grace puis 1 an pour se mettre en conformite
- **Quelle urgence ?** Haute - le non-respect est sanctionne penalement (delit d'entrave) et financierement

### L'Acquisition Client
- **Ou trouver les prospects ?** Base SIRENE (filtrer entreprises par tranche d'effectif 8-12, 17-22, 45-55), partenariats experts-comptables et cabinets RH, LinkedIn Ads ciblees, clubs dirigeants (CJD, CPME), Google Ads "passage 50 salaries obligations"
- **Combien sont-ils ?** ~140 000 PME en France dont une proportion significative approche un seuil. Chaque annee, des dizaines de milliers d'entreprises franchissent le seuil des 11 ou 50 salaries.
- **Quel message d'accroche ?** "Vous passez a 50 salaries ? 43 nouvelles obligations vous attendent. Notre checklist interactive vous evite 200 000 EUR de sanctions."

### La Concurrence
- **Qui existe ?** Pas de solution dediee. Les cabinets d'avocats facturent 5 000-15 000 EUR pour un audit de conformite au seuil. Les sites d'information (LegalPlace, Legalstart) donnent des listes mais pas d'outil de suivi.
- **Pourquoi sont-ils inadaptes ?** Il n'existe aucun logiciel SaaS dedie au suivi des obligations liees aux seuils. Les SIRH generalistes ne traitent pas ce besoin specifique. Les cabinets d'avocats sont chers et ponctuels.
- **Mon angle differenciant ?** "Le copilote reglementaire qui detecte automatiquement vos seuils et vous guide pas a pas dans chaque obligation - comme un avocat RH automatise."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 7 semaines (import effectif DSN/manuel, moteur de regles par seuil, checklist interactive, alertes, generation documents types)
- **Features CV impressionnantes** : Rule engine complexe (Code du travail), CQRS pour audit trail des obligations, generation documentaire automatisee (reglement interieur, convocations elections CSE), API DSN pour suivi effectif en temps reel

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 5/5
- **TOTAL :** 19/20

---

## 4. FormaComply - Bilan Pedagogique et Financier (BPF) automatise pour organismes de formation

### La Douleur
- **Qui souffre ?** Les ~17 000 organismes de formation declares en France (sur ~93 000 NDA actifs, 17 000 ont une activite significative)
- **De quoi ?** Chaque organisme de formation doit transmettre chaque annee son Bilan Pedagogique et Financier (BPF) a la DREETS entre avril et mai. C'est un formulaire complexe (Cerfa 10443) qui croise donnees financieres, pedagogiques, stagiaires, heures... Le remplissage prend 1 a 3 jours pour un petit OF. Sans transmission, la declaration d'activite devient CADUQUE = l'organisme ne peut plus former.
- **Combien ca coute ?** Perte de la declaration d'activite = arret total de l'activite. Pour un OF moyen (300K EUR CA), c'est la mort de l'entreprise. Temps de preparation : 8 a 24h de travail administratif fastidieux.
- **Frequence ?** Annuel strict (avril-mai)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Ouverture de la campagne BPF (7 avril - 31 mai chaque annee). L'OF recoit un email de la DREETS et doit agir sous 8 semaines.
- **Quand ?** Chaque annee entre le 7 avril et le 31 mai (campagne 2026 confirmee)
- **Quelle urgence ?** Critique - sans BPF, la declaration d'activite est annulee. L'OF meurt administrativement.

### L'Acquisition Client
- **Ou trouver les prospects ?** Liste publique des OF sur data.gouv.fr (base officielle avec NDA), groupes Facebook/LinkedIn d'organismes de formation, FFP (Federation de la Formation Professionnelle), salons Learning Technologies
- **Combien sont-ils ?** ~93 000 organismes avec un NDA, dont ~17 000 actifs significatifs et ~5 000 avec Qualiopi
- **Quel message d'accroche ?** "BPF en 15 minutes au lieu de 3 jours : importez vos donnees, on genere votre Cerfa pre-rempli."

### La Concurrence
- **Qui existe ?** Dendreo (a partir de 299 EUR/mois, rachete par Septeo en 2024 - pas de levee >100M$), Digiforma (19 a 699 EUR/mois, gestion complete d'OF), Ypareo, Queoval. Aucun n'a leve plus de 100M$.
- **Pourquoi sont-ils inadaptes ?** Dendreo et Digiforma sont des suites completes de gestion d'OF (CRM, planning, facturation, Qualiopi). Le BPF n'est qu'une feature secondaire. Les petits OF (formateurs independants, micro-OF) ne veulent pas payer 300 EUR/mois pour un logiciel complet quand ils n'ont besoin que du BPF + quelques automatisations.
- **Mon angle differenciant ?** "Le seul outil low-cost dedie au BPF : 29 EUR/mois, import automatique depuis vos outils existants, generation du BPF en 15 minutes."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 4 semaines (import donnees CSV, formulaire guide, calculs automatiques, export Cerfa, rappels calendaires)
- **Features CV impressionnantes** : OCR/parsing de documents comptables, pre-remplissage intelligent (ML sur donnees historiques), API integration comptabilite, generation Cerfa conforme, event scheduling

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 5. HabiliTrack - Gestion des habilitations et certifications reglementaires des salaries

### La Douleur
- **Qui souffre ?** Responsables QSE/RH d'entreprises industrielles, BTP, logistique, maintenance (~150 000 entreprises en France dans ces secteurs)
- **De quoi ?** Les salaries detiennent des dizaines d'habilitations a validite limitee : CACES (5 ans), habilitation electrique (3 ans), SST Sauveteur Secouriste du Travail (2 ans), AIPR (5 ans), travail en hauteur (3 ans), amiante SS3/SS4 (3 ans)... Un salarie BTP peut avoir 5-8 habilitations simultanees. Oublier un renouvellement = salarie qui travaille illegalement = responsabilite penale du dirigeant en cas d'accident + arret de chantier.
- **Combien ca coute ?** Accident avec habilitation perimee : faute inexcusable de l'employeur = indemnisation integrale + sanctions penales (jusqu'a 3 ans de prison). Arret de chantier par l'inspection du travail : 10 000 a 50 000 EUR/jour. Suivi manuel sur Excel : 2-5h/semaine pour un responsable QSE.
- **Frequence ?** Continu (chaque mois, des habilitations expirent dans l'entreprise)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Expiration imminente d'une habilitation critique (CACES, electrique), controle de l'inspection du travail, accident du travail, audit client/donneur d'ordres qui exige la conformite
- **Quand ?** Continu - mais pics lors des audits annuels de certification ISO ou audits clients
- **Quelle urgence ?** Critique - responsabilite penale du dirigeant, arret immediat du chantier/activite

### L'Acquisition Client
- **Ou trouver les prospects ?** Annuaires BTP (FFB, CAPEB), salons Preventica/Expoprotection, LinkedIn (titre QSE/HSE + secteur industrie/BTP), partenariats organismes de formation CACES, groupes LinkedIn HSE France
- **Combien sont-ils ?** ~150 000 entreprises BTP + ~50 000 industrielles + ~30 000 logistique = 230 000 entreprises potentielles
- **Quel message d'accroche ?** "Un CACES expire demain, votre salarie conduit illegalement. HabiliTrack vous alerte 90 jours avant chaque echeance."

### La Concurrence
- **Qui existe ?** BlueKanGo (2 000+ clients, suite QSE complete, pricing entreprise), MaSecuPro (startup, specialisee habilitations), Meeror (startup, gestion habilitations), TDC Securite (logiciel bureau classique). Aucun n'a leve >100M$.
- **Pourquoi sont-ils inadaptes ?** BlueKanGo est une plateforme QSE generaliste complexe et chere (>500 EUR/mois). MaSecuPro et Meeror sont petits et peu connus. TDC Securite est un logiciel on-premise vieillissant. Aucun ne propose un onboarding en 10 minutes avec scan des certificats par photo.
- **Mon angle differenciant ?** "Scannez les certificats avec votre telephone, HabiliTrack extrait les dates et vous alerte automatiquement - setup en 10 minutes, pas en 3 mois."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 6 semaines (scan OCR certificats, base salaries, moteur d'alertes, tableau de bord conformite, export PDF pour audits)
- **Features CV impressionnantes** : OCR/Computer Vision pour extraction de dates sur certificats, event-driven notifications (multi-canal : email, SMS, push), dashboard real-time conformite, API integration avec organismes de formation, PWA pour utilisation terrain

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 4/5
- **TOTAL :** 17/20

---

## 6. VendangesPro - Declaration de recolte et comptabilite matieres automatisee pour viticulteurs

### La Douleur
- **Qui souffre ?** ~59 000 exploitations viticoles en France (source : Ministere de l'Agriculture)
- **De quoi ?** Chaque viticulteur doit obligatoirement deposer aupres des Douanes : une declaration de recolte avant le 10 decembre, une DRM (Declaration Recapitulative Mensuelle) via le teleservice CIEL chaque mois, une declaration annuelle d'inventaire, et tenir une comptabilite matieres. Depuis 2022, tout passe par le nouveau portail VENDANGES (fusion de 3 anciens services). L'interface des Douanes est penible, le format DTI+ (JSON) est technique, et les petits viticulteurs se perdent entre parcelles, cepages, rendements AOP et volumes.
- **Combien ca coute ?** Amende pour declaration tardive/absente : 750 a 3 750 EUR. Perte d'agrement AOP/IGP si erreur. Temps de saisie : 4 a 15h par declaration pour un domaine moyen (30-50 parcelles).
- **Frequence ?** Mensuel (DRM) + annuel (recolte en decembre, inventaire)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Les vendanges (septembre-octobre) suivies de l'echeance de la declaration de recolte le 10 decembre. Le viticulteur DOIT declarer ou il est en infraction.
- **Quand ?** Chaque annee : vendanges (sept-oct), declaration recolte (avant 10 dec), DRM mensuelle
- **Quelle urgence ?** Haute - echeance reglementaire stricte, sanctions financieres et perte d'agrement

### L'Acquisition Client
- **Ou trouver les prospects ?** Chambres d'Agriculture, syndicats viticoles (Cotes du Rhone, Bordeaux, Bourgogne...), salons Vinitech-Sifel et Wine Paris, groupes Facebook de vignerons, base data.gouv (registre CVI - Casier Viticole Informatise)
- **Combien sont-ils ?** 59 000 exploitations viticoles, dont ~40 000 actives en vinification
- **Quel message d'accroche ?** "Declaration de recolte en 20 minutes au lieu de 2 jours : importez vos parcelles CVI, on genere votre declaration VENDANGES."

### La Concurrence
- **Qui existe ?** ISAGRI/ISAVIGNE (leader historique, suite complete, prix >200 EUR/mois), Cap Vignes (SaaS ERP viticole), Vitisoft (1 600 domaines, licence ou SaaS), SuperG (gestion cave + declarations). Aucun n'a leve >100M$.
- **Pourquoi sont-ils inadaptes ?** ISAGRI est un mastodonte agricole generaliste, complexe et cher. Cap Vignes et Vitisoft sont des ERP complets. Les petits vignerons (<20ha) n'ont pas besoin d'un ERP a 300 EUR/mois, ils veulent juste remplir correctement leur declaration et leur DRM sans prise de tete.
- **Mon angle differenciant ?** "Le Turbo-Impot des viticulteurs : connectez votre CVI, repondez a 10 questions, on genere votre declaration au format DTI+ et on la transmet directement."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 3/5
- **Temps MVP** : 7 semaines (import CVI, saisie parcelles/cepages/volumes, calcul rendements AOP, generation fichier DTI+ JSON, rappels echeances, DRM mensuelle guidee)
- **Features CV impressionnantes** : Parser JSON DTI+ (format Douanes), moteur de regles AOP/IGP (rendements max, cepages autorises), API integration portail VENDANGES, calcul automatique des rendements par appellation, event scheduling pour DRM mensuelles

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

## 7. IndexEgaPro+ - Calcul et publication automatisee de l'Index Egalite Professionnelle

### La Douleur
- **Qui souffre ?** DRH et dirigeants de toutes les entreprises de 50+ salaries (~35 000 entreprises en France)
- **De quoi ?** Chaque annee, avant le 1er mars, les entreprises de 50+ salaries doivent calculer et publier leur Index Egalite Professionnelle (note /100 basee sur 5 indicateurs : ecart de remuneration, ecart de taux d'augmentation, ecart de taux de promotion, % de salariees augmentees au retour de conge maternite, nombre de salaries du sexe sous-represente dans les 10 plus hautes remunerations). La non-publication est sanctionnee jusqu'a 1% de la masse salariale (soit 50 000-500 000 EUR pour une PME). Un index <75/100 oblige a des mesures correctives sous 3 ans.
- **Combien ca coute ?** Sanction : 1% masse salariale = 50 000 a 500 000 EUR pour une PME de 100-500 salaries. Temps de calcul : 10-40h de travail (extraction paie, categorisation, calcul indicateurs, saisie Egapro).
- **Frequence ?** Annuel strict (avant le 1er mars)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** L'arrivee du mois de janvier-fevrier chaque annee (echeance 1er mars). L'entreprise recoit des rappels de la DREETS et voit les publications des concurrents sur data.gouv.fr.
- **Quand ?** Chaque annee, publication obligatoire au plus tard le 1er mars
- **Quelle urgence ?** Critique - sanction financiere severe (1% de la masse salariale) + publication en ligne des resultats (reputation)

### L'Acquisition Client
- **Ou trouver les prospects ?** data.gouv.fr (jeu de donnees public avec toutes les entreprises de 50+ salaries et leur index publie - GOLD MINE pour l'acquisition), LinkedIn DRH, partenariats experts-comptables, webinaires en janvier "Preparez votre index en 1h"
- **Combien sont-ils ?** ~35 000 entreprises de 50+ salaries obligees. La base publique sur data.gouv.fr permet d'identifier les retardataires et ceux avec un index <75.
- **Quel message d'accroche ?** "Calculez votre index Egapro en 30 minutes au lieu de 3 jours. Import direct depuis votre logiciel de paie."

### La Concurrence
- **Qui existe ?** Index Egapro (outil gratuit du gouvernement - basique, saisie manuelle), modules integres dans SIRH (Lucca, PayFit, Silae), QuickMS (plateforme RH), quelques cabinets qui font le calcul a la main (500-2 000 EUR/an).
- **Pourquoi sont-ils inadaptes ?** L'outil gouvernemental est gratuit mais impose une saisie 100% manuelle sans import, sans historique, sans simulation. Les SIRH integrent l'index comme une feature mineure sans accompagnement. Les cabinets sont chers.
- **Mon angle differenciant ?** "Import automatique depuis votre logiciel de paie, calcul instantane, simulation avant publication, et plan d'action si votre note est <75 - pour 49 EUR/mois au lieu de 2 000 EUR de cabinet."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 4 semaines (import CSV paie, algorithme 5 indicateurs, simulation, generation declaration Egapro, historique, plan d'action)
- **Features CV impressionnantes** : Algorithmes statistiques de classification par CSP/age/sexe, simulation Monte-Carlo (impact d'augmentations sur l'index), API integration logiciels de paie (Silae, Sage, Cegid), data visualization D3.js, scraping data.gouv.fr pour benchmark sectoriel

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 3/5
- **TOTAL :** 17/20

---

## 8. SafetyCalendar - Pilotage des verifications reglementaires periodiques pour commerces et ERP de 5e categorie

### La Douleur
- **Qui souffre ?** Proprietaires et gerants de commerces, restaurants, hotels, salles de sport, creches... classes ERP de 5e categorie (petits ERP, <300 personnes). On estime a ~500 000 le nombre d'ERP de 5e categorie en France.
- **De quoi ?** Un ERP meme petit doit respecter des dizaines de verifications periodiques obligatoires : extincteurs (annuel), installations electriques (annuel pour 1er groupe, 3 ans pour 5e cat.), installation gaz (annuel), chauffage (annuel), desenfumage, alarme incendie, BAES... Le gerant de restaurant ou de boutique n'a aucune competence en securite incendie. Il empile des factures de bureaux de controle sans savoir s'il est conforme. Lors du passage de la commission de securite, c'est la panique.
- **Combien ca coute ?** Fermeture administrative en cas de non-conformite (perte CA totale), amende penale, refus d'assurance sinistre. Cout des verifications non planifiees (urgence) : +30-50% par rapport au tarif normal. Un restaurant ferme 1 jour = 2 000-5 000 EUR de CA perdu.
- **Frequence ?** Multiple (mensuel, trimestriel, annuel, triennal selon les equipements)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Visite de la commission de securite (tous les 3-5 ans, ou lors d'une ouverture/amenagement), mise en demeure de la prefectures, sinistre avec refus d'assurance, ouverture d'un nouvel etablissement
- **Quand ?** Regulier mais imprevisible (la commission peut venir a tout moment), ou lors de l'ouverture du commerce
- **Quelle urgence ?** Haute - fermeture administrative immediate possible

### L'Acquisition Client
- **Ou trouver les prospects ?** CCI locales (accompagnement createurs de commerce), syndicats de restaurateurs (UMIH, GHR), groupements de commercants, Facebook groupes restaurateurs/commercants, Google Ads "commission securite ERP restaurant"
- **Combien sont-ils ?** ~500 000 ERP de 5e categorie (estimation), dont ~175 000 restaurants, ~300 000 commerces
- **Quel message d'accroche ?** "La commission de securite passe bientot. Etes-vous pret ? SafetyCalendar vous dit exactement quoi faire et quand."

### La Concurrence
- **Qui existe ?** Registresecurite.com (startup, registre de securite numerique), DI'PREV (SaaS suivi ERP), Kare/AkorD (SaaS batiment). Aucun n'a leve >100M$.
- **Pourquoi sont-ils inadaptes ?** Ces solutions ciblent les gestionnaires de patrimoine immobilier et les grandes entreprises multi-sites. Elles sont complexes et cheres (>100 EUR/mois). Le petit restaurateur ou commercant n'a ni le temps ni le budget pour un logiciel complexe.
- **Mon angle differenciant ?** "L'assistant securite incendie pour les petits commerces : repondez a 5 questions sur votre etablissement, on vous genere votre calendrier de verifications avec rappels automatiques - 19 EUR/mois."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines (questionnaire type ERP, generation calendrier verifications selon arrete du 25 juin 1980, rappels automatiques, registre de securite numerique, stockage PV controles)
- **Features CV impressionnantes** : Moteur de regles reglementaire (arrete du 25 juin 1980, types ERP), calendrier intelligent avec recurrence complexe, stockage documentaire (PV de verification), PWA mobile pour acces terrain, notifications multi-canal

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 17/20

---

## 9. PremierSalarie - Assistant juridique pour l'embauche du premier salarie en TPE

### La Douleur
- **Qui souffre ?** Les createurs d'entreprise et dirigeants de TPE qui embauchent leur premier salarie (~200 000 premieres embauches par an en France, sur 4,3 millions de TPE)
- **De quoi ?** L'embauche du premier salarie declenche une cascade d'obligations : DPAE (8 jours avant), choix et adhesion mutuelle obligatoire, adhesion medecine du travail + visite dans les 3 mois, convention collective a identifier et appliquer, registre unique du personnel, affichages obligatoires, contrat de travail conforme, premier bulletin de paie, DSN mensuelle... Le createur qui a fait son auto-entreprise seul se retrouve submerge par 15+ demarches en parallele. L'erreur coute cher (prud'hommes, URSSAF, inspection du travail).
- **Combien ca coute ?** Oubli DPAE : amende de 1 056 EUR par salarie. Absence mutuelle : 7 500 EUR amende. Contrat non conforme : requalification prud'homale (6 mois de salaire minimum). Expert-comptable pour accompagnement premiere embauche : 500-2 000 EUR. Avocat droit social : 200-400 EUR/h.
- **Frequence ?** Evenementiel (une seule fois, mais avec urgence)

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** La decision d'embaucher le premier salarie. Le dirigeant a signe une promesse d'embauche ou a un besoin urgent (premier contrat client important, surcharge de travail).
- **Quand ?** A tout moment, mais concentration a la creation d'entreprise (1 069 000 creations en 2024 selon INSEE, dont 4% embauchent immediatement)
- **Quelle urgence ?** Haute - la DPAE doit etre faite 8 jours avant l'embauche, tout le reste dans les 3 premiers mois

### L'Acquisition Client
- **Ou trouver les prospects ?** CCI (parcours createur), BPI France Creation, Pole Emploi (porteurs de projets ACRE), Google Ads "embaucher premier salarie", groupes Facebook entrepreneurs/freelances, partenariats experts-comptables
- **Combien sont-ils ?** ~200 000 premieres embauches par an (estimation basee sur le flux de creation + passage TPE a employeur)
- **Quel message d'accroche ?** "Vous embauchcez votre premier salarie ? 15 obligations legales en 30 jours. Notre assistant vous guide pas a pas - DPAE en 2 clics."

### La Concurrence
- **Qui existe ?** LegalPlace/Legalstart (generation de documents juridiques, 49-199 EUR ponctuels), Payfit (paie SaaS mais overkill pour 1 salarie, ~49 EUR/mois minimum), experts-comptables (500-2 000 EUR).
- **Pourquoi sont-ils inadaptes ?** LegalPlace genere des contrats mais ne gere pas la DPAE, la mutuelle, la medecine du travail, les affichages. Payfit est un logiciel de paie mensuel, pas un guide d'onboarding employeur. L'expert-comptable facture cher et ne couvre pas tout.
- **Mon angle differenciant ?** "Le parcours guide de A a Z pour votre premiere embauche : DPAE, contrat, mutuelle, medecine du travail - 15 obligations, 1 seul outil, 99 EUR tout compris."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 2/5
- **Temps MVP** : 5 semaines (parcours guide multi-etapes, generation DPAE, templates contrat par convention collective, checklist obligations, rappels delais, generation affichages obligatoires PDF)
- **Features CV impressionnantes** : Workflow engine (state machine pour parcours multi-etapes), generation documentaire conditionnelle (convention collective detectee automatiquement via code NAF), integration API URSSAF (DPAE), AI-assisted contract generation, real-time progress tracking

### Verdict
- **Score Douleur :** 4/5
- **Score Declencheur :** 5/5
- **Score Acquisition :** 5/5
- **Score Concurrence :** 4/5
- **TOTAL :** 18/20

---

## 10. BEGES Express - Bilan carbone simplifie pour entreprises nouvellement assujetties

### La Douleur
- **Qui souffre ?** Les ~5 000 organisations soumises a l'obligation BEGES en France (entreprises de 500+ salaries, collectivites de 50 000+ habitants), + les nouvelles entreprises concernees par la CSRD (extension en 2026 aux entreprises de 250+ salaries depassant 2 des 3 seuils : 250 salaries, 50M EUR CA, 25M EUR bilan), soit ~7 000 entreprises au total
- **De quoi ?** Le BEGES (Bilan d'Emissions de Gaz a Effet de Serre) est obligatoire tous les 4 ans (3 ans pour collectivites) avec depot sur la plateforme de l'ADEME. En 2025, seuls 31% des entreprises concernees sont en conformite. Le nouveau seuil de consommation energetique (2,7 GWh/an, arrete d'avril 2025) elargit le perimetre. L'audit doit couvrir 80% de la consommation et etre conforme a la norme NF EN 16247.
- **Combien ca coute ?** Amende : 50 000 EUR (premiere infraction), 100 000 EUR (recidive). Cout d'un bilan carbone par un cabinet : 10 000 a 80 000 EUR selon la taille. Temps interne de collecte de donnees : 100-500h.
- **Frequence ?** Tous les 4 ans + mise a jour annuelle dans le cadre CSRD

### Le Declencheur d'Achat
- **Quel evenement force l'action ?** Arrivee de l'echeance de renouvellement du BEGES (4 ans apres le dernier), ou nouveau franchissement d'un seuil (250 salaries, 2,7 GWh/an de consommation), ou premiere obligation CSRD (exercice 2025, publication 2026)
- **Quand ?** Echeance BEGES quadriennale + nouvelle obligation CSRD des 2026 pour les grandes entreprises + nouveau seuil energetique avec echeance 11 octobre 2026
- **Quelle urgence ?** Haute - 50 000 EUR d'amende + 69% des entreprises en non-conformite = pression reglementaire croissante

### L'Acquisition Client
- **Ou trouver les prospects ?** Plateforme ADEME (bilans publies = identifier les retardataires et ceux dont le bilan expire), DREETS, LinkedIn (titre RSE/HSE/DAF + taille entreprise 250+), salons Pollutec/ChangeNow, CCI
- **Combien sont-ils ?** ~5 000 actuellement obligees, ~7 000 avec CSRD 2026, potentiellement 10 000+ avec nouveau seuil energetique
- **Quel message d'accroche ?** "69% des entreprises ne sont pas conformes au BEGES. Passez de 80 000 EUR de cabinet a 5 000 EUR de SaaS, avec un bilan conforme en 3 semaines."

### La Concurrence
- **Qui existe ?** Greenly (leve 21M EUR - < 100M$), Sami (leve ~4M EUR), Sweep (leve 100M$+ - A SURVEILLER), Carbo/HelloCarbo, Plan A, Watershed. Sweep a potentiellement depasse les 100M$.
- **Pourquoi sont-ils inadaptes ?** Greenly et Sami ciblent les PME volontaires (demarche RSE), pas les entreprises nouvellement assujetties par obligation legale. Ils vendent de la "demarche carbone" et du "plan d'action climat", pas de la conformite reglementaire pure. Le prospect assujetti cherche avant tout a eviter l'amende de 50 000 EUR.
- **Mon angle differenciant ?** "BEGES Express : pas une demarche RSE, un outil de conformite. Collecte guidee des donnees, calcul automatique scope 1-2-3, depot ADEME en 1 clic - conforme NF EN 16247."

### Technique
- **Stack** : Next.js, TypeScript, Supabase, Docker
- **Complexite** : 4/5
- **Temps MVP** : 10 semaines (questionnaire sectoriel, facteurs d'emission ADEME, calcul scopes 1-2-3, generation rapport BEGES conforme, export plateforme ADEME)
- **Features CV impressionnantes** : Moteur de calcul GES avec base de donnees facteurs d'emission (ADEME Base Carbone API), ML pour estimation des emissions manquantes, data pipeline multi-source (factures energie, flotte, deplacement), generation rapport NF EN 16247, API integration ERP/comptabilite

### Verdict
- **Score Douleur :** 5/5
- **Score Declencheur :** 4/5
- **Score Acquisition :** 4/5
- **Score Concurrence :** 3/5
- **TOTAL :** 16/20

---

# Tableau Recapitulatif

| # | Projet | Declencheur | Cible | Total |
|---|--------|-------------|-------|-------|
| 1 | **TranspariPaie** | Directive transparence salariale juin 2026 | DRH entreprises 100+ salaries | **19/20** |
| 3 | **SeuilRH** | Passage seuil effectif (11/20/50/250) | PME en croissance | **19/20** |
| 9 | **PremierSalarie** | Embauche du 1er salarie | Createurs TPE | **18/20** |
| 2 | **EntretienPilot** | Echeance 2 ans / 6 ans entretien pro | DRH PME 50+ salaries | **17/20** |
| 4 | **FormaComply** | Campagne BPF avril-mai | Organismes de formation | **17/20** |
| 5 | **HabiliTrack** | Expiration habilitation (CACES, elec...) | Responsables QSE BTP/industrie | **17/20** |
| 7 | **IndexEgaPro+** | Echeance 1er mars publication index | DRH entreprises 50+ salaries | **17/20** |
| 8 | **SafetyCalendar** | Commission securite / ouverture commerce | Commercants, restaurateurs | **17/20** |
| 6 | **VendangesPro** | Vendanges + declaration 10 decembre | Viticulteurs (59 000 exploitations) | **16/20** |
| 10 | **BEGES Express** | Echeance BEGES quadriennale / CSRD 2026 | Entreprises 250+ salaries | **16/20** |

---

# TOP 3 recommandations

## 1er : TranspariPaie (19/20)
**Pourquoi** : Deadline europeenne imminent (juin 2026), ZERO solution dediee sur le marche, 7 000+ entreprises directement concernees, douleur quantifiable, base de prospects identifiable. Le timing est PARFAIT pour lancer maintenant (18 mois avant l'echeance).

## 2e : SeuilRH (19/20)
**Pourquoi** : Marche 100% evergreen (chaque annee des milliers d'entreprises franchissent un seuil), AUCUN concurrent direct, valeur immediatement comprehensible, potentiel de viralite (l'expert-comptable recommande a tous ses clients en croissance).

## 3e : PremierSalarie (18/20)
**Pourquoi** : 200 000 premieres embauches par an = flux constant de prospects, moment de vie ultra-stressant pour le dirigeant (pret a payer), modele one-shot + upsell vers outil de paie, acquisition via CCI et experts-comptables tres efficace.
