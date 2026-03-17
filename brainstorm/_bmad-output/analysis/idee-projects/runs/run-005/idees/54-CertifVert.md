# Idee #54 - CertifVert

## Angle : DOULEUR VISIBLE EN LIGNE

---

## Nom du projet
**CertifVert** - Tableau de bord certiphyto et registre phytosanitaire pour entreprises du paysage

## Cible
Entreprises du paysage (paysagistes, jardiniers, entretien d'espaces verts) qui utilisent des produits phytopharmaceutiques dans le cadre de leurs prestations pour des clients tiers.

**Taille du marche :**
- 33 550 entreprises du paysage en France en 2024 (source : CERFRANCE/UNEP), en croissance de 3,5% par an
- 62% n'ont aucun salarie = decideur unique (le patron paysagiste)
- 7,7 milliards EUR de CA global du secteur
- Parmi elles, estimation de 15 000 a 20 000 entreprises utilisent des produits phytopharmaceutiques (hors celles 100% creation/maconnerie paysagere)
- Listes scrapables : annuaire UNEP (lesentreprisesdupaysage.fr), registre CMA (Chambre des Metiers), codes NAF 81.30Z (services d'amenagement paysager), pages jaunes, annuaires professionnels FFP
- Forums et groupes actifs : Facebook "Paysagistes de France", forums agriavis.com, groupes LinkedIn paysagistes

## Douleur
Chaque entreprise du paysage qui applique des produits phytopharmaceutiques pour ses clients doit gerer un empilement d'obligations reglementaires : (1) **Certiphyto individuel** obligatoire pour chaque operateur, a renouveler tous les 5 ans via une formation payante (7-14h, ~300 EUR), (2) **Agrement phytosanitaire DRAAF/DREAL** obligatoire pour l'entreprise elle-meme, a renouveler aussi, (3) **Registre phytosanitaire** detaillant chaque traitement (date, parcelle, produit, dose, conditions meteo, delai de rentre), qui deviendra **obligatoirement numerique en janvier 2027**, (4) **Stockage conforme** des produits (local ferme a cle, retention, signalisation), (5) **Fiches de securite (FDS)** de chaque produit a conserver et rendre accessibles. En pratique, le patron paysagiste gere tout ca dans un classeur papier ou un Excel, ne sait pas quand les certiphytos de ses ouvriers expirent, et decouvre les non-conformites le jour du controle DREAL.

## Declencheur d'achat
- **Controle DREAL/DRAAF** : une inspection constate que le registre phytosanitaire est incomplet ou que le certiphyto d'un operateur est expire. Sanctions : retrait d'agrement (= interdiction d'exercer l'activite phyto, perte de clients), amende de 5e classe (1 500 EUR par infraction), et surtout **responsabilite civile** en cas de contamination (un produit mal dose dans le jardin d'un particulier = mise en cause directe).
- **Obligation registre numerique en janvier 2027** : toutes les exploitations et entreprises du paysage devront passer du registre papier/Excel au registre numerique. C'est une deadline nationale connue. Les paysagistes n'ont PAS d'outil adapte a leur metier (les outils existants - MesParcelles, Easyphyt - sont concus pour les agriculteurs/grandes cultures, pas pour un paysagiste qui traite 15 jardins differents par semaine).
- **Renouvellement certiphyto imminent** : le patron decouvre que le certiphyto de son ouvrier expire dans 2 semaines, mais les formations sont completes pour les 3 prochains mois. Ouvrier non certifie = interdit de traiter = perte de CA sur les chantiers phyto.
- **Nouveau salarie** : un paysagiste embauche et doit s'assurer que le nouveau a son certiphyto valide, sinon organiser sa formation avant de le mettre sur les chantiers.
- **Appel d'offres public** : les collectivites demandent la preuve de l'agrement phyto et la conformite du registre. Pas de registre = pas de marche public.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **MesParcelles** (Chambres d'agriculture) | Registre phytosanitaire pour exploitations agricoles | Reference institutionnelle, conforme DREAL, integre PAC | Concu pour grandes cultures (ble, mais, vigne), PAS adapte au paysagiste qui traite des jardins de particuliers. Interface complexe, logique parcellaire agricole. |
| **Easyphyt** (Uneal) | Registre phytosanitaire simplifie pour agriculteurs | Simple, digital | Meme probleme : concu pour agriculteurs, pas pour prestations multi-clients paysagistes. Pas de suivi certiphyto equipe. |
| **Smag/Agreo** | Suite logicielle agronomique | Puissant, big data | Prix entreprise (500+ EUR/mois), complexite ETI/grandes structures. Surdimensionne pour un paysagiste. |
| **Classeur papier / Excel** | Solution actuelle de 95% des paysagistes | Gratuit | Non conforme 2027, aucune alerte, perte de donnees, non presentable en cas de controle DREAL |

**Analyse concurrentielle :** Il n'existe PAS de SaaS dedie au registre phytosanitaire des PAYSAGISTES. Les outils existants sont tous concus pour l'agriculture (parcelles fixes, cultures annuelles), pas pour un prestataire qui intervient chez 10-20 clients differents par semaine. La logique est fondamentalement differente : le paysagiste a des "chantiers clients" (adresses, type de jardin) et non des "parcelles". C'est un angle mort du marche.

## Differentiation
1. **Registre phyto par client/chantier** (et non par parcelle agricole) : le paysagiste saisit sur son telephone le traitement effectue chez M. Dupont, 12 rue des Lilas, pelouse 200m2, produit X, dose Y, conditions meteo. Conforme a l'obligation 2027 de registre numerique.
2. **Tableau de bord certiphyto equipe** : date d'obtention, date d'expiration, alerte automatique 6 mois puis 3 mois avant expiration pour chaque operateur. Plus jamais de surprise le jour du controle.
3. **Suivi agrement entreprise** : date de validite, documents lies, alerte de renouvellement.
4. **Bibliotheque produits phyto** : base de donnees des produits autorises (donnees publiques e-phy ANSES), avec FDS et conditions d'emploi. Le paysagiste choisit dans une liste au lieu de saisir a la main.
5. **Mode terrain mobile** : saisie du registre directement sur le chantier depuis un smartphone, meme hors connexion (sync quand reseau disponible). C'est le facteur cle : le paysagiste est DEHORS, pas devant un PC.
6. **Export conforme DREAL** : PDF du registre, attestation certiphyto equipe, listing agrement. Pret pour le controle en un clic.
7. **Prix TPE** : 19-29 EUR/mois (vs 500+ EUR/mois pour les suites agronomiques).
8. **Acquisition ciblage laser** : code NAF 81.30Z scrapable, annuaire UNEP, groupes Facebook paysagistes, SEO "registre phytosanitaire paysagiste 2027", "certiphyto paysagiste renouvellement".

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Deadline nationale (registre numerique obligatoire janvier 2027) = urgence croissante. Controle DREAL = retrait d'agrement (interdiction d'exercer) + amende. Certiphyto expire = operateur interdit de traiter. Douleur financiere reelle et immediate en cas de non-conformite, mais pas encore "je perds de l'argent aujourd'hui" pour ceux qui n'ont pas encore ete controles. |
| **Facilite acquisition** | 4/5 | Code NAF 81.30Z scrapable, annuaire UNEP, registre CMA, pages jaunes "paysagiste". Cold email cible possible. SEO naturel sur "registre phytosanitaire paysagiste 2027". Groupes Facebook et forums tres actifs. |
| **Simplicite vente** | 4/5 | "Votre registre phyto numerique conforme 2027 + alertes certiphyto equipe, pret en 10 minutes." Comprehension immediate pour le paysagiste qui sait qu'il doit le faire. Decideur unique (patron paysagiste). Seul bemol : les non-utilisateurs de produits phyto ne sont pas concernes (il faut segmenter). |
| **Faisabilite solo** | 5/5 | Formulaires de saisie + base produits phyto (donnees publiques ANSES e-phy) + calendrier alertes + generation PDF + mode offline (PWA). Stack Next.js + Supabase. MVP 3-4 semaines. Aucune complexite technique majeure. |

**TOTAL : 17/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (outil direct pour le paysagiste)
- Demarchage telephonique : NON (cold email + SEO + communautes)
- Cycle de vente > 1 mois : NON (urgence reglementaire, self-service, prix bas)
- Marche < 500 cibles : NON (15 000 a 20 000 entreprises du paysage utilisant des produits phyto)
- Concurrent dominant : NON (aucun SaaS dedie aux paysagistes, les outils existants sont pour l'agriculture)
- Aucun canal acquisition en ligne : NON (NAF scrapable + UNEP + SEO + groupes Facebook)
- Architecture complexe : NON (CRUD + base produits + alertes + PDF + PWA mode offline)
- Responsabilite metier : NON (outil de saisie et de suivi, les donnees produits viennent de la base officielle ANSES e-phy. Pas de conseil d'application ni de dosage.)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE** - Timing exceptionnel avec la deadline nationale du registre phytosanitaire numerique obligatoire en janvier 2027, un marche de 15 000 a 20 000 paysagistes utilisant des produits phyto, et ZERO concurrent SaaS adapte au metier de paysagiste (les outils existants sont tous concus pour l'agriculture). La logique "chantier client" vs "parcelle agricole" est une differentiation structurelle forte. MVP faisable en 3-4 semaines. L'acquisition est facilitee par le code NAF scrapable et les communautes en ligne actives. La seule incertitude : le registre numerique 2027 concerne-t-il bien les paysagistes prestataires ou uniquement les exploitants agricoles ? A verifier lors du deep research, mais les textes actuels mentionnent "tous les utilisateurs professionnels de produits phytopharmaceutiques".

---

### Sources
- [Chiffres cles entreprises du paysage 2024-2025 - CERFRANCE](https://www.cerfrance.fr/actualites/les-chiffres-cles-des-entreprises-du-paysage-en-2024-2025)
- [Chiffres filiere paysage - VALHOR](https://www.valhor.fr/nous-connaitre/la-filiere-en-chiffres/paysage)
- [Paysagiste reglementation phytosanitaire - Bpifrance Creation](https://bpifrance-creation.fr/activites-reglementees/paysagiste-entretien-despaces-verts-utilisation-produits)
- [Certiphyto CI-phyto - Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F31192)
- [Reglementation produits phytosanitaires - UNEP](https://www.lesentreprisesdupaysage.fr/base-documentaire/reglementation-des-produits-phytopharmaceutiques/)
- [Obtenir agrement phytosanitaire - UNEP](https://www.lesentreprisesdupaysage.fr/base-documentaire/obtenir-l%C2%92agrement-phytosanitaire/)
- [Registre phytosanitaire numerique 2027 - Chambres d'agriculture Hauts-de-France](https://hautsdefrance.chambres-agriculture.fr/actualites/actualite/dematerialisation-du-registre-phytosanitaire-simplifiez-vos-obligations-avec-mes-parcelles)
- [Base publique e-phy ANSES](https://ephy.anses.fr/)
- [Nouvelle reglementation phytosanitaire paysagistes](https://www.jardiniers-professionnels.fr/nouvelle-reglementation-sur-les-produits-phytosanitaires/)
- [Certiphyto agrement entreprises - Ecophyto PRO](https://www.ecophyto-pro.fr/fiches/fiche/12/certiphyto_agrement_des_entreprises)
