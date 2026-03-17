# Idee #49 - BioRegistre

## Angle : GENS QUI PERDENT DE L'ARGENT MAINTENANT + LISTES PUBLIQUES DE PROSPECTS

---

## Nom du projet
**BioRegistre** - Registre dechets et tracabilite biodechets pour restaurateurs et commerces alimentaires

## Cible
Restaurateurs (restaurants traditionnels, fast-food, food trucks), boulangers-patissiers, traiteurs, et commerces alimentaires (boucheries, poissonneries, primeurs) qui produisent des biodechets et doivent tenir un registre de dechets non dangereux et obtenir une attestation annuelle de collecte.

**Taille du marche :**
- ~171 000 restaurants en France (source Statista 2024)
- ~43 700 boulangeries-patisseries artisanales (source Cerfrance 2025)
- ~15 000 traiteurs, ~18 000 boucheries, ~5 000 poissonneries
- **Estimation conservatrice : 200 000+ commerces alimentaires concernes**
- Listes scrapables : annuaire CCI, Google Maps API (par code NAF : 5610A restauration traditionnelle, 5610C restauration rapide, 1071C boulangerie-patisserie), PagesJaunes, TripAdvisor, TheFork
- Decideur unique : le gerant/proprietaire

## Douleur
Depuis le 1er janvier 2024 (loi AGEC), TOUS les professionnels alimentaires doivent trier leurs biodechets a la source et organiser une collecte separee. Depuis le 12 fevrier 2025, ils ne peuvent plus confier leurs biodechets au service public de collecte. Ils doivent tenir un registre de dechets non dangereux (conserve 3 ans), obtenir une attestation annuelle de collecte de leur prestataire, et fournir un Document d'Accompagnement Commercial (DAC) pour les sous-produits animaux de categorie 3. La plupart ne font RIEN : pas de registre, pas d'attestation, pas de tracabilite. Le premier controle DDPP les met en infraction immediate.

## Declencheur d'achat
- **Controle DDPP** : la Direction Departementale de la Protection des Populations controle les commerces alimentaires. Le registre dechets est demande systematiquement. Absence = infraction.
- **Attestation manquante** : l'attestation annuelle de collecte/valorisation des biodechets est obligatoire depuis le 1er juillet 2016 et doit etre conservee. La plupart des restaurateurs ne la reclament meme pas a leur prestataire.
- **Amende notifiee** : le restaurateur recoit un PV avec 10 jours pour se mettre en conformite, sinon amende jusqu'a 75 000 EUR et 2 ans d'emprisonnement (articles L.541-46 et suivants du Code de l'environnement).
- **Changement de prestataire dechets** : le restaurateur change de collecteur et doit migrer son historique -- moment de prise de conscience.
- **Passage a la collecte separee (obligation fevrier 2025)** : les restaurateurs qui viennent de perdre l'acces a la collecte publique cherchent une solution pour organiser et documenter leur nouveau circuit.
- **Vente/cession du restaurant** : le repreneur exige une conformite propre, le registre dechets fait partie du dossier.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **Trackdechets** (gouv) | Plateforme officielle gratuite de tracabilite | Gratuit, officiel, BSD dematerialise | **Ne couvre que les dechets DANGEREUX** (amiante, DASRI, gaz fluores). Les biodechets et dechets non dangereux ne sont PAS dans le perimetre. Pas d'attestation de collecte. |
| **Octopus HACCP** | App HACCP + module biodechets | Integre a la gestion hygiene | Module biodechets = mesure du gaspillage alimentaire, PAS un registre de tracabilite reglementaire complet. 89 EUR/mois = cher pour un restaurateur |
| **Axibio** | Logiciel de mesure gaspillage + tracabilite | Edition documents reglementaires, portail web | Cible principalement la restauration collective (cantines, hopitaux), pas la restauration commerciale TPE. Pricing sur devis, complexe. |
| **Take a waste** | Courtier en gestion de dechets | Expertise multi-flux, accompagnement | Service de courtage/conseil, pas un SaaS self-service. Cible ETI/grands comptes. |
| **Excel / classeur papier** | Le "concurrent" reel | Gratuit | Pas d'alertes, pas de generation automatique d'attestation, perte du registre, non-conforme sur la duree de conservation 3 ans |

**Analyse concurrentielle :** Le vide est FLAGRANT. Trackdechets ne couvre pas les biodechets/dechets non dangereux. Octopus HACCP et Axibio sont positionnes sur le gaspillage alimentaire ou la restauration collective, pas sur le registre reglementaire simple pour le restaurateur independant. Aucun SaaS simple, abordable et dedie n'existe pour la tracabilite biodechets des TPE alimentaires.

## Differentiation
1. **Registre dematerialise conforme** : registre de dechets non dangereux au format reglementaire (date d'expedition, nature, quantite, prestataire, mode de valorisation), conserve 3 ans dans le cloud. Conforme aux exigences de l'article R.541-43 du Code de l'environnement.
2. **Generateur d'attestation de collecte** : genere automatiquement le modele d'attestation annuelle a envoyer au prestataire de collecte pour signature, ou importe l'attestation recue. Horodatage + archivage.
3. **Modele DAC integre** : pour les sous-produits animaux de categorie 3 (SPAn3), le Document d'Accompagnement Commercial est pre-rempli et exportable en PDF.
4. **Tableau de bord de conformite** : indicateur vert/rouge/orange. "Votre registre est a jour" / "Il manque l'attestation 2025 de votre collecteur" / "Votre contrat de collecte expire dans 30 jours".
5. **Alertes automatiques** : rappel mensuel de mise a jour du registre, rappel annuel pour demander l'attestation de collecte, alerte expiration contrat collecteur.
6. **Onboarding en 5 minutes** : nom du restaurant, prestataire de collecte actuel, frequence de collecte, types de biodechets. Le registre est pre-configure.
7. **Prix TPE** : 9-15 EUR/mois (vs 89 EUR/mois Octopus HACCP, vs devis sur mesure Axibio).

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Obligation legale recente (janvier 2024, renforcee fevrier 2025). Amendes tres lourdes (75 000 EUR + 2 ans emprisonnement theoriques, 15 000 EUR + mise en demeure 10 jours en pratique). Controles DDPP en cours d'acceleration. Mais la majorite des restaurateurs ne sont pas encore controles = douleur "latente mais imminente". |
| **Facilite acquisition** | 4.5/5 | Listes publiques massives : annuaire CCI par code NAF (5610A, 5610C, 1071C), Google Maps API, PagesJaunes, TheFork. 200 000+ cibles scrapables. SEO sur "registre dechets restaurant obligatoire", "attestation collecte biodechets", "obligation tri biodechets restauration 2025". Cold email cible par code NAF. |
| **Simplicite vente** | 4/5 | "Votre registre de dechets obligatoire, dematerialise et conforme, en 5 minutes." Le concept est immediat. Decideur unique (gerant). Prix ultra-bas (9-15 EUR/mois). Le seul bemol : le mot "registre dechets" n'est pas glamour = besoin d'education marketing ("Evitez 75 000 EUR d'amende pour un registre que vous n'avez pas"). |
| **Faisabilite solo** | 5/5 | CRUD + formulaire + generation PDF + archivage cloud + alertes email. Stack Next.js + Supabase. Aucune API externe complexe requise. MVP 2-3 semaines maximum. Architecture triviale. |

**TOTAL : 17.5/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (outil direct restaurateur)
- Demarchage telephonique : NON (cold email + SEO + partenariats prestataires collecte)
- Cycle de vente > 1 mois : NON (urgence reglementaire, self-service, 9-15 EUR/mois)
- Marche < 500 cibles : NON (200 000+ commerces alimentaires)
- Concurrent dominant : NON (Trackdechets est gratuit MAIS ne couvre pas les biodechets/non-dangereux. Aucun SaaS dedie.)
- Aucun canal acquisition en ligne : NON (listes publiques + SEO + partenariats)
- Architecture complexe : NON (CRUD + PDF + cloud = basique)
- Responsabilite metier : NON (outil de registre et d'archivage. Le contenu du registre est saisi par le restaurateur, pas interprete par le SaaS. Les modeles de documents sont bases sur les textes reglementaires publics.)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE** - Obligation legale massive et recente (loi AGEC 2024, renforcement fevrier 2025), marche gigantesque (200 000+ commerces alimentaires), trou concurrentiel beant (Trackdechets = dechets dangereux uniquement, Octopus/Axibio = gaspillage alimentaire ou restauration collective), MVP ultra-simple (2-3 semaines), acquisition par listes publiques (code NAF + Google Maps). Le timing est ideal : la plupart des restaurateurs ne savent pas qu'ils sont en infraction. Le canal d'acquisition ideal serait un partenariat avec les prestataires de collecte de biodechets (ReFood, Moulinot, Les Alchimistes, etc.) qui pourraient recommander l'outil a leurs clients.

---

### Sources
- [Biodechets : le tri devient obligatoire - info.gouv.fr](https://www.info.gouv.fr/actualite/biodechets-le-tri-devient-obligatoire)
- [Tri a la source des biodechets - Ministere de l'Ecologie](https://www.ecologie.gouv.fr/biodechets)
- [Gestion des dechets de l'entreprise - Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F37825)
- [Les documents obligatoires a la gestion des dechets - Take a waste](https://takeawaste.fr/quels-sont-les-documents-obligatoires-pour-une-bonne-tracabilite-des-dechets/)
- [Trackdechets - plateforme officielle dechets dangereux](https://trackdechets.beta.gouv.fr/)
- [Octopus HACCP - module biodechets](https://octopus-haccp.com/lutte-contre-gaspillage-alimentaire-biodechets/)
- [Statistiques restauration France - Statista 2024](https://independant.io/statistiques-tendances-restauration/)
- [Chiffres boulangeries-patisseries 2025 - Cerfrance](https://www.cerfrance.fr/actualites/les-chiffres-cles-des-boulangeries-et-patisseries-en-2024-2025/)
- [Loi AGEC 2025-2026 obligations nettoyage pro](https://www.france-clean.fr/expertise/loi-agec-2025-2026-obligations-pour-le-nettoyage-professionnel/)
