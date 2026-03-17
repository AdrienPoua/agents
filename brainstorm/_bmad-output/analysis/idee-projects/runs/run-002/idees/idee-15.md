# Idee #15 : ConformEmployeur

## Metadata
- **Angle d'attaque** : 3 - Budgets deja alloues
- **Score** : 15/20
- **Statut** : RETENUE
- **Date** : 2026-02-06

---

## Resume en 1 phrase

SaaS de checklist de conformite legale pour les TPE/PME de 1 a 49 salaries sans DRH, qui remplace le recours ponctuel (et cher) a l'expert-comptable ou au consultant RH pour verifier que toutes les obligations employeur sont respectees.

---

## La cible (qui paye)

**Le dirigeant de TPE/PME de 1 a 49 salaries, sans service RH interne.**

| Caracteristique | Detail |
|---|---|
| **Qui** | Gerant/dirigeant, ou "la secretaire qui fait un peu de tout" |
| **Taille entreprise** | 1 a 49 salaries (pas de CSE, pas de DRH) |
| **Secteur** | Tous secteurs : commerce, artisanat, services, petite industrie |
| **Profil** | Non-juriste, non-RH. Gere "au feeling" ou delègue a l'expert-comptable |
| **Nombre en France** | ~1 400 000 TPE/PME de 1 a 49 salaries (source INSEE) |
| **Budget RH actuel** | Expert-comptable (inclus dans le forfait ou en extra), consultant ponctuel (500-1 200 EUR/jour), ou rien du tout |

---

## La douleur (1 phrase)

**Le dirigeant de TPE ne sait pas ce qu'il doit faire legalement des qu'il embauche, et chaque oubli (DUERP, entretien professionnel, visite medicale, registre du personnel, affichages) peut lui couter 750 a 7 500 EUR d'amende par infraction, sans qu'il ait jamais ete prevenu.**

### Le probleme concret

```
SCENARIO TYPE : Marc, 38 ans, patron d'une PME de 12 salaries (menuiserie)

- A embauche son 1er salarie il y a 5 ans
- Son expert-comptable fait la paie et les declarations sociales
- Marc n'a AUCUNE idee qu'il doit :
  * Mettre a jour son DUERP chaque annee (amende 1 500 EUR)
  * Organiser un entretien professionnel tous les 2 ans (amende 3 000 EUR/salarie si > 50)
  * Tenir un registre unique du personnel (amende 750 EUR/salarie)
  * Afficher 23 informations obligatoires dans ses locaux (amende 750-1 500 EUR)
  * Organiser une visite medicale d'embauche dans les 3 mois
  * Souscrire a une mutuelle d'entreprise obligatoire
  * Mettre en place un entretien de parcours professionnel (reforme oct 2026)
  * Se preparer a la transparence salariale (directive UE, juin 2026)
  * Avoir un referent harcelement (des 1 salarie depuis 2019)

- Son expert-comptable NE FAIT PAS ce suivi (ce n'est pas dans son mandat standard)
- Un jour, l'inspection du travail passe...
- Marc decouvre 8 non-conformites d'un coup
- Total amendes potentielles : 5 000 a 15 000 EUR
```

### Les obligations qui s'empilent par seuil d'effectif

```
1 salarie : DPAE, contrat, registre personnel, DUERP, visite medicale,
            mutuelle, affichages, referent harcelement
6 salaries : + participation transport
11 salaries : + reglement interieur, elections CSE
20 salaries : + obligation emploi travailleurs handicapes (OETH, 6%)
25 salaries : + aide au logement (1%)
50 salaries : + CSE obligatoire, bilan social, DUERP avec programme annuel,
              participation, entretien professionnel sanctionne
```

**La complexite augmente avec chaque embauche, mais personne ne previent le dirigeant.**

---

## Le declencheur d'achat

| Declencheur | Moment exact | Urgence |
|---|---|---|
| **Controle de l'inspection du travail** | Le jour du controle -- panique | MAXIMALE |
| **Embauche du 1er salarie** | Le dirigeant decouvre un mur d'obligations | HAUTE |
| **Passage d'un seuil d'effectif** (11, 20, 50 salaries) | Nouvelles obligations inconnues | HAUTE |
| **Confrere qui s'est fait sanctionner** | Discussion, bouche-a-oreille | MOYENNE-HAUTE |
| **Reforme reglementaire** (transparence salariale 2026, entretien parcours pro oct 2026) | Article de presse, email CCI | MOYENNE |
| **Question d'un salarie** ("Je n'ai jamais eu d'entretien professionnel...") | Prise de conscience du risque | MOYENNE |
| **Sollicitation de l'expert-comptable** ("Vous avez pense a mettre a jour votre DUERP ?") | Rappel indirect | MOYENNE |

---

## Les concurrents probables

| Concurrent | Type | Prix | Ce qu'il fait | Ce qu'il ne fait PAS |
|---|---|---|---|---|
| **PayFit** | SIRH + Paie | 29-149 EUR/mois/salarie | Paie, conges, contrats | Pas de checklist conformite globale. Focus paie. Prix x nombre de salaries = cher. |
| **Factorial** | SIRH | 5-9 EUR/mois/salarie | RH complet, documents, entretiens | Generaliste, pas de scoring conformite, pas de rappels reglementaires cibles TPE |
| **Combo (ex-Snapshift)** | Planning CHR | 3-5 EUR/mois/salarie | Planning, temps, paie simplifiee | Niche CHR, pas de conformite globale |
| **Expert-comptable** | Prestataire humain | 150-500 EUR/mois (forfait global) | Paie + declarations. Parfois un peu de RH | Ne fait pas le suivi proactif des obligations. Repond quand on demande. |
| **Consultant RH ponctuel** | Prestataire humain | 500-1 200 EUR/jour | Audit ponctuel, mise en conformite | Ponctuel, cher, pas de suivi continu |
| **One RH / Aoria RH** | Conseil RH en ligne | Variable | Guides, check-ups, accompagnement | Accompagnement humain, pas self-service SaaS |
| **Service-Public.fr** | Site gouvernemental | Gratuit | Information exhaustive | Disperse, pas actionnable, pas de rappels, pas de suivi |

### L'ocean bleu

**AUCUN outil SaaS ne propose un "score de conformite employeur" avec checklist personnalisee par taille d'effectif + rappels d'echeances + documents generables, pour 19-39 EUR/mois tout compris (pas par salarie).**

Les SIRH facturent PAR SALARIE (donc 12 salaries x 29 EUR = 348 EUR/mois chez PayFit). ConformEmployeur facture un FORFAIT (29 EUR/mois, quel que soit l'effectif). Pour une TPE de 12 salaries, c'est 12x moins cher.

---

## La differenciation

**ConformEmployeur n'est PAS un SIRH. C'est la "checklist de conformite legale de l'employeur".**

```
PayFit / Factorial     = "Gerez votre paie et vos conges"  (outil operationnel)
Expert-comptable       = "On fait votre paie, le reste     (pas proactif)
                          c'est pas notre job"
Consultant RH          = "On audite une fois, voila le     (ponctuel, cher)
                          rapport"
Service-Public.fr      = "Voici vos 47 obligations, bonne  (disperse, pas actionnable)
                          chance"

ConformEmployeur       = "Etes-vous en regle sur TOUTES    (checklist personnalisee,
                          vos obligations employeur ?        rappels, documents,
                          Score, plan d'actions, rappels."   29 EUR/mois forfait)
```

**La proposition de valeur tient en une phrase :** "29 EUR/mois pour ne plus jamais avoir peur d'un controle de l'inspection du travail."

---

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Amendes reelles (750-7 500 EUR par infraction, cumulables). Risque penal en cas d'accident du travail sans DUERP. Mais beaucoup de dirigeants ne SAVENT PAS qu'ils sont en infraction (douleur latente). |
| **Facilite acquisition** | 4/5 | SEO fort sur "obligations employeur", "DUERP obligatoire", "entretien professionnel obligation", "affichage obligatoire entreprise". Partenariats experts-comptables. CCI/CMA. Lead magnet = score gratuit. -1 car cible large = concurrence SEO. |
| **Simplicite vente** | 4/5 | "Score de conformite gratuit en 5 min" = hook immediat. 29 EUR/mois forfait vs 500 EUR/jour de consultant. ROI evident. Decideur unique (le patron). -1 car education necessaire (beaucoup ne savent pas qu'ils risquent qqch). |
| **Faisabilite solo** | 3/5 | MVP en 8-10 semaines. Base reglementaire a compiler (Code du travail, conventions collectives). La logique conditionnelle par seuil d'effectif est plus complexe que ConformCHR (toutes les TPE ne sont pas dans le meme cas). -2 pour la complexite du droit du travail. |
| **TOTAL** | **15/20** | |

---

## Verification criteres eliminatoires

| Critere | Passe ? | Commentaire |
|---|---|---|
| Marketplace two-sided | OUI | SaaS pur, B2B |
| Demarchage tel permanent | OUI | SEO + partenariats experts-comptables + CCI. Pas de cold call. |
| Cycle vente > 1 mois | OUI | Self-service. Score gratuit -> conversion immediate. |
| Marche < 500 cibles France | OUI | 1 400 000+ TPE/PME de 1 a 49 salaries |
| Concurrent dominant 100M$+ | ATTENTION | PayFit a leve 254M EUR mais ne fait PAS de conformite globale (fait la paie). Pas un concurrent direct sur le positionnement "checklist conformite". |
| Aucun canal acquisition en ligne | OUI | SEO massif, partenariats prescripteurs |
| Architecture complexe pour MVP | OUI | CRUD + questionnaire + logique conditionnelle + PDF. Stack standard. |
| Responsabilite metier | OUI | Outil de checklist/suivi, pas de conseil juridique. Memes disclaimers que ConformCHR. |

---

## Business model esquisse

| Plan | Prix | Cible | Contenu |
|---|---|---|---|
| **GRATUIT** | 0 EUR | Tous | Score de conformite rapide (10 questions), 3 non-conformites revelees |
| **ESSENTIEL** | 19 EUR/mois | TPE 1-10 salaries | Checklist complete, plan d'actions, 5 documents generables, rappels email |
| **PRO** | 39 EUR/mois | PME 11-49 salaries | Tout Essentiel + obligations par seuil, veille reglementaire, modeles entretiens, DUERP simplifie |

### Pourquoi le pricing forfaitaire est decisif

- PayFit a 29 EUR/salarie/mois = **348 EUR/mois** pour 12 salaries (et PayFit fait la paie, pas la conformite)
- ConformEmployeur a 39 EUR/mois forfaitaire = **39 EUR/mois** pour 12 salaries
- L'expert-comptable qui fait un "audit RH" ponctuel = **500-1 200 EUR** une fois, sans suivi

---

## Risques et mitigations

| Risque | Mitigation |
|---|---|
| PayFit ajoute un module "conformite" | PayFit est un SIRH/paie, pas un outil de conformite legale. Leur business model est "par salarie", pas compatible avec le forfait. Et leur complexite rebutera les TPE qui ne veulent pas un SIRH complet. |
| Le droit du travail est complexe et variable (conventions collectives) | MVP sans conventions collectives (obligations Code du travail generales). Les CC en V2 comme extension payante. |
| Le dirigeant TPE ne cherche pas proactivement | Lead magnet + partenariats experts-comptables qui recommandent l'outil a leurs clients. |
| Responsabilite metier | Memes protections que ConformCHR : outil de checklist, jamais "vous etes en regle", toujours "voici ce que nous avons identifie". |

---

## VERDICT : RETENUE

**Pourquoi :** Marche massif (1.4M+ TPE/PME), douleur reelle mais latente (amendes cumulables), budget deja alloue (expert-comptable / consultant RH), positionnement unique ("checklist conformite employeur" forfaitaire), canal SEO fort, meme modele que ConformCHR applique aux obligations employeur.

**Point faible principal :** La complexite du droit du travail (seuils, conventions collectives, cas particuliers) est plus elevee que la conformite CHR. Le MVP devra etre scope au strict minimum (obligations generales Code du travail, sans conventions collectives).

---

## Sources

- [Obligations RH 2025-2026 PME - Apogea](https://www.apogea.fr/obligations-rh/)
- [Obligations legales RH TPE PME - Aoria RH](https://aoriarh.fr/veille-juridique/obligations-legales-rh-tpe-pme-guide-securiser-pratiques/)
- [Obligations entreprise par effectif - Octime](https://www.octime.com/quelles-sont-les-obligations-dune-entreprise-en-fonction-de-son-effectif/)
- [Embauche premier salarie - Baker Tilly](https://www.bakertilly.fr/actualites/erhs-obligations-legales-employeurs-premiere-embauche)
- [Documents obligatoires entreprise - PayFit](https://payfit.com/fr/fiches-pratiques/documents-obligatoires-entreprise/)
- [Registres obligatoires - Service-Public.fr](https://entreprendre.service-public.gouv.fr/vosdroits/F1784)
- [Transparence salariale 2026 - Mentor RH](https://www.mentor-rh.fr/transparence-salariale-directive-2026-pme/)
- [Entretien parcours professionnel - CCI](https://www.cci.fr/actualites/comment-se-preparer-la-nouvelle-reforme-de-lentretien-professionnel)
- [Mise en conformite RH - One RH](https://www.onerh.fr/mettre-conformite-rh-entreprise/)
