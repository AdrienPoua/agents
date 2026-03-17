# Idee #59 - FroidBoard

## Angle : FRAGMENTATION D'OUTILS

---

## Nom du projet
**FroidBoard** - Cockpit unifie de gestion des fluides frigorigenes pour frigoristes et climaticiens TPE/PME

## Cible
Entreprises de froid et climatisation (frigoristes, climaticiens, chauffagistes-climaticiens) en TPE/PME : installateurs, mainteneurs et depanneurs manipulant des fluides frigorigenes (HFC, HFO, CO2, ammoniac).

**Taille du marche :**
- 13 933 entreprises actives dans le secteur froid/climatisation en France (2022, source : INSEE/Xerfi)
- Majoritairement des TPE : 1 a 10 salaries, souvent un patron-technicien + 2-3 compagnons
- SNEFCCA (syndicat) federe 1 000+ entreprises, mais le gros du marche est hors syndicat
- Toutes doivent detenir une attestation de capacite pour manipuler des fluides frigorigenes
- Liste scrapable : data.gouv.fr publie le jeu de donnees "REP-GF - Liste des operateurs attestes" (ADEME) avec les entreprises attestees, leur SIRET, categorie, organisme certificateur
- Annuaire Qualiclimafroid + annuaires SNEFCCA/CAPEB/FFB section genie climatique

## Douleur
Le frigoriste TPE jongle quotidiennement entre 4-5 outils differents pour gerer ses obligations reglementaires sur les fluides frigorigenes : un fichier Excel pour le suivi de stock de bouteilles, des formulaires CERFA 15497 papier ou PDF remplis a la main sur chantier, la plateforme Trackdechets pour les BSD fluides (obligatoire depuis janvier 2023), des emails/courriers pour la declaration annuelle des mouvements de fluides a l'organisme certificateur, et un agenda/carnet pour le suivi des equipements clients (date prochaine visite, charge de fluide, type de gaz). Resultat : heures perdues, double saisie permanente, stress a l'approche des controles, et risque de non-conformite sur la tracabilite 40 ans.

## Declencheur d'achat
- **Controle de l'organisme certificateur** : l'attestation de capacite est revalidee periodiquement, et l'organisme verifie la coherence des stocks, des interventions et des declarations. Un ecart = retrait potentiel de l'attestation = interdiction d'exercer.
- **Phase-down F-Gas 2024-2026** : le reglement europeen 2024/573 renforce les obligations de tracabilite et reduit les quotas de HFC. Chaque kg de fluide doit etre trace avec precision (entree, sortie, recuperation, destruction). Les controles se durcissent.
- **Declaration annuelle (janvier)** : chaque annee, l'entreprise doit declarer ses mouvements de fluides a son organisme certificateur. C'est la panique annuelle pour ceux qui n'ont pas suivi au fil de l'eau.
- **Passage a Trackdechets obligatoire** (BSFF depuis 2023) : la dematerialisation des bordereaux de suivi de fluides frigorigenes impose une integration numerique que beaucoup de TPE n'ont pas.
- **Entretien bisannuel obligatoire des PAC** (decret 2020-912) : le parc de pompes a chaleur explose (400 000+ installations/an), generant un volume massif de visites d'entretien avec attestation et potentiellement manipulation de fluides.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **C'Fluide** | Application de dematerialisation du CERFA 15497 | Simple, rapide sur le terrain, focus CERFA | Ne fait QUE le CERFA : pas de stock, pas de declaration annuelle, pas d'integration Trackdechets, pas de registre equipements clients |
| **OpenFire** | Logiciel de gestion complet pour entreprises du genie climatique (devis, facture, planning, fluides) | Tres complet, integre la gestion des fluides dans un ERP metier | Prix eleve (non communique, plan Standard+), surdimensionne pour une TPE de 2-3 personnes, complexe a deployer, pas adapte au solo/micro |
| **Organilog Froid** | Suite de gestion d'interventions avec module fluides | Gestion d'interventions complete, mobilite | Module fluides = ajout a une suite generaliste, pas le coeur produit, complexite inutile pour le seul besoin fluides |
| **Kizeo Forms** | Formulaires mobiles personnalisables (dont modele CERFA fluides) | Tres flexible, fonctionne hors ligne | Outil generique a configurer soi-meme, pas de logique metier integree (stock, declaration, Trackdechets), demande du paramettrage |
| **Excel / papier** | Le statu quo de 80%+ des TPE | Gratuit, connu | Double saisie, pas de tracabilite, risque de perte, pas de lien Trackdechets, stress annuel |

**Analyse concurrentielle :** Le marche est coupe en deux. D'un cote, des outils generiques ou trop complets (ERP metier 200-500+ EUR/mois). De l'autre, des micro-outils (C'Fluide = CERFA only). Personne ne propose un SaaS simple, abordable et COMPLET sur le perimetre fluides : stock + CERFA + Trackdechets + declaration annuelle + registre equipements. C'est exactement le "au lieu de 4 outils, juste 1" de l'angle fragmentation.

## Differentiation
1. **Unification 4-en-1** : stock de bouteilles + CERFA 15497 digitalise + integration API Trackdechets (BSFF) + declaration annuelle pre-remplie. Un seul outil, zero double saisie.
2. **Registre equipements clients** : chaque installation client est repertoriee (type de PAC/clim, charge initiale, type de fluide, date derniere visite). Alertes automatiques quand une visite bisannuelle approche.
3. **Declaration annuelle en 1 clic** : en fin d'annee, FroidBoard consolide automatiquement tous les mouvements (achats, charges, recuperations, destructions) et genere le fichier pret a envoyer a l'organisme certificateur.
4. **Mode terrain** : application mobile/PWA utilisable sur chantier, meme avec connexion intermittente. Le technicien scanne le QR code de la bouteille, saisit l'intervention, et tout se synchronise.
5. **Integration Trackdechets** : les BSFF (bordereaux de suivi de fluides frigorigenes) sont generes et transmis automatiquement via l'API Trackdechets, sans aller sur le portail separement.
6. **Prix TPE** : 29-39 EUR/mois (vs ERP metier 200-500+ EUR/mois, vs gratuit mais fragmente Excel+papier).
7. **Base de donnees fluides a jour** : reference automatique des GWP (potentiel de rechauffement global) par type de fluide, calcul automatique des tonnes eq. CO2 pour les declarations F-Gas.

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Obligation reglementaire stricte (attestation de capacite = droit d'exercer), declarations annuelles obligatoires, Trackdechets obligatoire depuis 2023, phase-down F-Gas qui durcit les controles. La perte de l'attestation = arret d'activite. Pas d'amende chiffree unique mais consequences existentielles (perte du droit d'exercer). |
| **Facilite acquisition** | 5/5 | Liste PUBLIQUE sur data.gouv.fr (REP-GF - operateurs attestes) avec SIRET, nom, adresse, categorie. Scrapable. Cold email ultra-cible par code NAF (4322A installation froid/climatisation, 4322B installation thermique). SEO sur "declaration fluides frigorigenes", "CERFA 15497 en ligne", "suivi stock fluides frigorigenes". |
| **Simplicite vente** | 4/5 | "Vos fluides, votre stock, vos CERFA, votre declaration annuelle et Trackdechets : tout dans un seul outil a 29 EUR/mois." Le frigoriste comprend en 10 secondes car il vit cette fragmentation tous les jours. Decideur unique (patron TPE). Seul bemol : le mot "Trackdechets" peut necessiter 10 secondes d'explication pour ceux qui ne l'utilisent pas encore. |
| **Faisabilite solo** | 4/5 | CRUD stock + formulaire CERFA digitalise + API Trackdechets (API publique documentee) + generation de declaration annuelle (agregation). Stack Next.js + Supabase + PWA. MVP 3-4 semaines (stock + CERFA + registre equipements). L'integration Trackdechets ajoute 1-2 semaines mais l'API est ouverte. Pas de complexite architecturale majeure. |

**TOTAL : 17/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (outil direct pour le frigoriste)
- Demarchage telephonique permanent : NON (cold email cible via data.gouv.fr + SEO + partenariats syndicats/organismes certificateurs)
- Cycle de vente > 1 mois : NON (self-service, prix TPE, urgence reglementaire)
- Marche < 500 cibles : NON (13 933 entreprises, dont 10 000+ TPE)
- Concurrent dominant : NON (aucun SaaS dedie et abordable ne couvre le perimetre complet fluides pour les TPE)
- Aucun canal acquisition en ligne : NON (data.gouv.fr + SEO + annuaires professionnels)
- Architecture complexe : NON (CRUD + API Trackdechets + PWA, stack classique)
- Responsabilite metier : NON (outil de saisie, suivi et reporting. Les donnees de fluides sont saisies par le professionnel lui-meme. La base GWP est une donnee publique officielle EU. Pas d'interpretation technique ou juridique.)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE** - Cas d'ecole de fragmentation d'outils : le frigoriste TPE utilise aujourd'hui 4-5 outils separes (Excel, CERFA papier, Trackdechets web, email pour declaration, carnet pour registre) pour UN seul job : gerer ses fluides frigorigenes. Le marche est massif (14 000 entreprises), la liste est publique et scrapable (data.gouv.fr), le prix cible (29-39 EUR/mois) est 5-10x moins cher que les ERP metier, et le durcissement du reglement F-Gas 2024/573 cree une urgence croissante. Le timing est ideal pour un SaaS simple qui unifie tout en un cockpit.

---

### Sources
- [REP-GF - Liste des operateurs attestes (data.gouv.fr)](https://www.data.gouv.fr/datasets/rep-gf-liste-des-operateurs-attestes-1)
- [Reglement F-Gas 2024/573 - CERFA 15497 et conformite fluides (OpenFire)](https://openfire.fr/blog/gestion-des-fluides-frigorigenes-14/reglement-fgas-cerfa-15497-attestation-de-capacite-comment-rester-conforme-sans-complexite-28)
- [Suivi des fluides frigorigenes - Kizeo Forms](https://www.kizeo-forms.com/fr/actualites/suivis-fluides-frigorigenes-gagnez-conformite-et-tracabilite/)
- [Climaticiens, frigoristes : reprendre le controle sur les fluides (Framacold)](https://www.framacold.com/actualite/1545-climaticiens-frigoristes-comment-reprendre-le-controle-sur-la-gestion-de-vos-fluides)
- [C'Fluide - application dematerialisation CERFA 15497](https://www.c-fluide.fr/)
- [FAQ Trackdechets - Fluides frigorigenes](https://faq.trackdechets.fr/fluides-frigorigenes/informations-generales)
- [Decret 2020-912 - Entretien PAC obligatoire (Legifrance)](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042164734)
- [SNEFCCA - Syndicat froid/climatisation](https://www.snefcca.com/)
- [Reglementation fluides frigorigenes (DEKRA)](https://www.dekra-certification.fr/reglementation-fluides-frigorigenes-dekra-certification.html)
- [Logiciel gestion fluides frigorigenes - TOP 8 (Organilog)](https://fr.organilog.com/31537-logiciel-gestion-fluides-frigorigenes/)
