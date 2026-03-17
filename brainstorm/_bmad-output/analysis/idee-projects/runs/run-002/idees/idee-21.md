# Idee #21 : AttestPro

## Angle d'attaque
**Angle 9 : TEMPS PERDU MASSIVEMENT**

## Nom du projet
**AttestPro** - Attestations reglementaires en 2 clics

## La cible (qui paye)
Chauffagistes, climaticiens et installateurs PAC (pompes a chaleur) independants ou en petites structures (1-5 personnes) en France.

- **Taille du marche** : La France compte environ 35 000 a 40 000 entreprises dans le secteur CVC (chauffage, ventilation, climatisation), dont une majorite de TPE. En ajoutant les installateurs PAC en plein boom (RE2020, fin des chaudieres fioul), le vivier est consequent.
- **Decideur** : Le patron-technicien lui-meme. Il paye et il utilise. Pas de comite d'achat.
- **Budget** : Ces artisans facturent 55-80 EUR/h. Un outil a 29-49 EUR/mois est un non-sujet financier s'il fait gagner du temps.

## La douleur (1 phrase)
Les chauffagistes/climaticiens passent 4 a 8 heures par semaine a remplir manuellement des attestations d'entretien (chaudieres gaz/fioul, PAC, clim), des CERFA 15497/15498 pour les fluides frigorigenes, et a gerer les relances de contrats d'entretien annuel -- du temps non facturable qui les empeche de prendre des chantiers supplementaires.

## Le declencheur d'achat
- **Saison de chauffe (octobre-mars)** : le volume d'entretiens annuels explose, le temps administratif devient intenable
- **Controle prefectoral ou audit de l'organisme certificateur** : le technicien realise qu'il a des trous dans sa tracabilite
- **Nouveau decret novembre 2025** : refonte des attestations de capacite fluides frigorigenes (obligatoire 1er janvier 2027), les artisans doivent adapter leur tracabilite
- **Embauche d'un premier salarie** : la gestion papier ne tient plus a l'echelle

## Les concurrents probables
| Concurrent | Type | Forces | Faiblesses |
|---|---|---|---|
| **Organilog** | SaaS gestion interventions | Complet (planning + factures + CERFA) | Generaliste, complexe pour un artisan seul, 29-99 EUR/mois, courbe d'apprentissage |
| **C'Fluide** | Appli CERFA 15497 | Specialise fluides frigorigenes | Uniquement fluides, pas d'attestations chaudieres, pas de relance contrats |
| **Synchroteam** | SaaS gestion interventions | Module CERFA integre | Cible grandes equipes (>10 techs), prix eleve, surdimensionne pour TPE |
| **Batappli** | Logiciel batiment | Devis/factures + attestations | Desktop-first, pas vraiment SaaS, interface datee |
| **MobilOutils** | Appli terrain | CERFA + attestations | Peu connu, UX basique |
| **Excel/papier** | Statu quo | Gratuit | 4-8h/semaine perdues, erreurs, non-conformite |

## La differentiation
**AttestPro ne fait qu'une seule chose, mais parfaitement** : generer en 2 clics les attestations reglementaires et relancer automatiquement les contrats d'entretien.

- **Ultra-simple** : pas de module devis/factures/planning. Juste attestations + relances. L'artisan l'ouvre sur son telephone apres chaque intervention, remplit 5 champs, et l'attestation conforme part par email au client.
- **100% mobile-first** : concu pour le terrain, pas pour un bureau
- **Templates a jour** : attestations entretien chaudiere gaz/fioul (decret 2009-649), attestations PAC, CERFA 15497/15498 fluides frigorigenes, attestations clim -- tous maintenus conformes reglementairement
- **Relance automatique** : le systeme relance les clients dont le contrat d'entretien annuel arrive a echeance, generant du CA recurrent pour l'artisan sans effort
- **Positionnement prix** : 19-29 EUR/mois (sous les concurrents generalistes) car perimetre fonctionnel restreint

**Acquisition** :
- SEO sur "attestation entretien chaudiere modele", "CERFA 15497 en ligne", "attestation PAC obligatoire" -- requetes a forte intention
- Partenariats avec organismes de formation/certification (Qualibat, QualiPAC, Qualiclimafroid)
- Presence dans les salons pro (Interclima, Mondial du Batiment)

## Score rapide /20

| Critere | Score | Justification |
|---|---|---|
| Intensite douleur | 4/5 | Douleur reelle et quantifiable (4-8h/semaine), mais certains s'en accommodent avec Excel. Pas une urgence vitale, plutot une friction chronique. |
| Facilite acquisition | 4/5 | SEO tres faisable sur des requetes type "modele attestation entretien chaudiere". Les artisans cherchent ces documents en ligne. Partenariats possibles avec organismes de certification. |
| Simplicite vente | 4/5 | "Vous passez 5h/semaine sur vos attestations ? AttestPro les genere en 2 clics. 19 EUR/mois." -- message limpide. ROI immediat. |
| Faisabilite solo | 4/5 | MVP = formulaire mobile + generation PDF + envoi email + cron de relance. Stack classique Next.js + Supabase + Vercel. La veille reglementaire des modeles est le seul point d'attention a long terme. |
| **TOTAL** | **16/20** | |

## Verdict
**RETENUE**

Marche large (>35 000 cibles), douleur quantifiable, acquisition SEO naturelle, MVP faisable en 4-6 semaines, pas de concurrent dominant sur le creneau "attestations only" mobile-first pour TPE CVC. Le risque principal est l'extension de scope (tentation d'ajouter devis/factures et de devenir un Organilog de plus). La discipline produit sera cle.
