# ANGLE 9 : FormaTrack

## Temps perdu massivement sur l'administratif formation

---

## Nom du projet

**FormaTrack** -- Pilotage administratif pour micro-organismes de formation

## Angle utilise

**Angle 9 : Temps perdu massivement**

---

## La cible

**Formateurs independants et micro-organismes de formation (1-3 personnes) certifies Qualiopi ou en cours de certification.**

- Plus de 15 000 micro-OF certifies Qualiopi en France (source : Certifopac, fevrier 2025)
- 42 892 organismes certifies au total, dont une majorite de petites structures
- Marche addressable France : 15 000 a 25 000 structures de 1 a 5 personnes
- Decideur unique : le formateur lui-meme ou le gerant du micro-OF

## La douleur (1 phrase)

**Les formateurs independants passent 8 a 15 heures par semaine sur de l'administratif repetitif (conventions, feuilles d'emargement, attestations, suivi indicateurs Qualiopi, BPF) au lieu de former -- et chaque erreur documentaire menace leur certification.**

### Detail de la douleur

Le formateur independant doit, pour chaque session de formation :

1. **Avant** : rediger la convention de formation, le programme, le devis, les CGV, envoyer la convocation
2. **Pendant** : faire signer les feuilles d'emargement (papier ou digital), collecter les evaluations a chaud
3. **Apres** : generer l'attestation de fin de formation, envoyer la facture, suivre le paiement, archiver les preuves Qualiopi
4. **Annuellement** : remplir le Bilan Pedagogique et Financier (BPF) avant le 31 mai, preparer l'audit Qualiopi (32 indicateurs avec preuves)

La plupart gerent ca avec un melange de Word, Excel, Google Drive, e-mails et papier. Le risque d'oubli ou d'erreur est permanent. Lors de l'audit Qualiopi, une preuve manquante = non-conformite = risque de perte de certification = perte d'acces aux financements publics (CPF, OPCO).

## Le declencheur d'achat

- **Audit Qualiopi imminent** (initial ou surveillance) : le formateur realise qu'il n'a pas toutes ses preuves en ordre
- **Premier financement OPCO/CPF** : le formateur doit structurer sa documentation pour acceder aux fonds
- **Echec audit** : une non-conformite mineure pousse a s'outiller serieusement
- **Croissance** : passage de 5 a 20+ sessions/an rend le bricolage Excel intenable
- **BPF annuel** (deadline 31 mai) : le formateur se rend compte qu'il lui manque des donnees

## Les concurrents

### Concurrents directs (logiciels de gestion d'OF)

| Concurrent | Prix | Positionnement | Faiblesse pour la cible |
|---|---|---|---|
| **Digiforma** | 79-149 EUR/mois | OF moyens/grands, 5500+ clients | Trop cher et complexe pour un micro-OF solo |
| **SmartOF** | 49-99 EUR/mois | OF petits/moyens | Interface dense, courbe d'apprentissage |
| **Dendreo** | ~100+ EUR/mois | Gros OF, CFA | Totalement surdimensionne |
| **TousQuali** | ~30-50 EUR/mois | Petits OF | Le plus proche concurrent, mais UX basique |
| **Filnorme** | ~40-60 EUR/mois | Petits OF | Relativement recent, peu de notoriete |
| **Certipilot** | ~20-40 EUR/mois | Preparation Qualiopi | Focus audit, pas gestion complete |

### Concurrents indirects

- **Tableurs Excel + Drive** : solution gratuite mais fragile, zero automatisation
- **Templates Qualiopi Excel** (digi-certif.com, SmartOF) : aide ponctuelle, pas un outil quotidien

### Analyse concurrentielle

Le marche est **segmente** : les solutions existantes ciblent soit les gros OF (Digiforma, Dendreo) a 80-150 EUR/mois, soit proposent des outils partiels. **Aucun acteur dominant a 100M$+** ne verrouille le segment micro-OF. Digiforma est le plus gros (~5500 clients, probable CA <10M EUR). Le segment des micro-OF solvables mais sous-equipes (15 000+) est sous-servi.

Sources :
- [Certifopac - Evolution du nombre de certifies Qualiopi](https://certifopac.fr/qualiopi/certification/liste-publique-organisme-formation/nombre-combien-de-certifies/)
- [Digi-certif - Qualiopi pour les micro OF](https://www.digi-certif.com/qualiopi-pour-les-micro-of/)
- [Top 13 logiciels OF pour Qualiopi](https://certifopac.fr/qualiopi/ressources/applications-web/)
- [PGM Learning - 45 000 certifies Qualiopi](https://www.pgmlearning.fr/choisir-un-organisme-de-formation/)

## La differentiation

### Positionnement : "Le copilote Qualiopi pour formateurs solos"

1. **Prix agressif** : 19-29 EUR/mois (vs 50-150 EUR chez les concurrents). Le micro-OF a un CA moyen modeste, il faut un prix frictionless.

2. **Onboarding en 10 minutes** : pas de formation necessaire. Le formateur entre ses infos, le systeme genere automatiquement convention + programme + emargement + attestation pour chaque session.

3. **Tableau de bord Qualiopi natif** : visualisation des 32 indicateurs avec un systeme feu vert/orange/rouge. "Votre indicateur 11 est rouge : il vous manque les evaluations a chaud pour 3 sessions."

4. **Generation automatique du BPF** : a partir des donnees saisies dans l'annee, un clic genere le BPF pre-rempli (formulaire Cerfa).

5. **Stack technique legere** : Next.js + Supabase + Vercel. Pas de complexite architecturale. Le MVP est un CRUD avec generation PDF et un dashboard.

6. **SEO/Inbound natif** : articles cibles sur "preparer audit Qualiopi formateur independant", "modele convention formation gratuit", "BPF auto-remplissage". Ces requetes sont cherchees massivement chaque annee autour de mars-mai.

### Ce que FormaTrack ne fait PAS (pour rester simple)

- Pas de LMS / e-learning integre
- Pas de gestion comptable complete
- Pas de marketplace de formateurs
- Pas de gestion RH multi-salaries

## Score /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Forte : le formateur perd 8-15h/semaine et risque sa certification Qualiopi (= son business). Mais pas "insupportable" au quotidien, c'est un irritant cumulatif. |
| **Facilite acquisition** | 5/5 | Excellente : SEO tres efficace (requetes "Qualiopi formateur independant", "convention formation modele", "BPF 2026"). Communaute active sur LinkedIn/Facebook. Le BPF annuel cree un pic de recherche previsible. |
| **Simplicite vente** | 4/5 | Tres bonne : "Generez vos documents Qualiopi en 2 clics au lieu de 2 heures. 29 EUR/mois." La valeur est comprise en 10 secondes. Le freemium (modeles gratuits) attire puis convertit. |
| **Faisabilite solo** | 5/5 | Parfaite : CRUD + generation PDF + dashboard. Stack Next.js + Supabase + Vercel. MVP realisable en 4-6 semaines. Pas d'integration tierce complexe. Domaine connu (pas de responsabilite metier). |
| **TOTAL** | **18/20** | |

## Verification criteres eliminatoires

| Critere eliminatoire | Passe ? | Commentaire |
|---|---|---|
| Marketplace two-sided | OUI | Outil pur, pas de marketplace |
| Demarchage tel permanent | OUI | SEO/inbound + communautes en ligne |
| Cycle vente > 1 mois | OUI | Self-service, freemium -> payant en quelques jours |
| Marche < 500 cibles France | OUI | 15 000+ micro-OF certifies Qualiopi |
| Concurrent dominant 100M$+ | OUI | Aucun acteur dominant. Digiforma est le plus gros mais <10M EUR CA et cible un segment different |
| Aucun canal acquisition en ligne | OUI | SEO, LinkedIn, Facebook groups formateurs |
| Architecture complexe pour MVP | OUI | CRUD + PDF generation, tres simple |
| Responsabilite metier | OUI | Outil documentaire, pas de conseil juridique/pedagogique |

## Verdict

### RETENUE

FormaTrack coche toutes les cases. Le marche est large (15 000+ cibles), la douleur est reelle et quantifiable ("vous passez 10h/semaine, mon outil le fait en 30 minutes par session"), l'acquisition SEO est naturelle (pics saisonniers BPF + audits Qualiopi), le MVP est simple a construire, et aucun concurrent dominant ne verrouille le segment micro-OF a bas prix. Le double objectif (revenus OU projet CV) est atteint : meme sans revenus massifs, un SaaS de conformite reglementaire avec generation documentaire automatisee est un projet impressionnant pour un portfolio dev.

---

*Analyse realisee le 2026-02-06*
*Sources web consultees entre le 06/02/2026*
