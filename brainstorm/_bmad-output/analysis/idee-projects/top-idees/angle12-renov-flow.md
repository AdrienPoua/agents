# DOSSIER COMPLET : RenovFlow
## SaaS de gestion de dossiers pour Accompagnateurs Renov' (MAR) agrees Anah

**Date d'analyse approfondie** : 2026-02-06
**Angle** : 12 - Marches en croissance rapide
**Statut** : RETENUE - Analyse approfondie
**Fondateur** : Adrien Poua, 31 ans, dev full-stack JS/TS solo
**Budget** : < 100 EUR/mois | **Objectif** : resultats < 3 mois | **Marche** : France

---

## TABLE DES MATIERES
1. [Contexte metier](#1-contexte-metier)
2. [La douleur (precis et chiffre)](#2-la-douleur-precis-et-chiffre)
3. [La solution (maquette textuelle)](#3-la-solution-maquette-textuelle)
4. [Le declencheur d'achat](#4-le-declencheur-dachat)
5. [Acquisition client](#5-acquisition-client)
6. [Business model](#6-business-model)
7. [Concurrence (analyse critique)](#7-concurrence-analyse-critique)
8. [Technique](#8-technique)
9. [Risques specifiques](#9-risques-specifiques)
10. [Verdict final](#10-verdict-final)

---

## 1. CONTEXTE METIER

### C'est quoi un MAR exactement ?

**MAR = Mon Accompagnateur Renov'.** C'est un professionnel agree par l'Anah (Agence nationale de l'habitat) dont le role est d'accompagner les menages dans leur projet de renovation energetique de A a Z. Pense a un "coach renovation" certifie par l'Etat.

**Analogie simple** : quand tu veux renover ta maison pour la rendre moins energivore (isoler les murs, changer la chaudiere, etc.), l'Etat te donne des aides financieres via MaPrimeRenov'. Mais depuis janvier 2024, pour les renovations d'ampleur (les gros projets), tu es **oblige par la loi** de passer par un MAR. C'est ton tiers de confiance qui va :

1. Faire un audit energetique de ta maison
2. Te proposer des scenarios de travaux
3. T'aider a choisir des artisans certifies RGE
4. Monter ton dossier de demande d'aide
5. Suivre le chantier
6. Verifier la conformite des travaux a la fin
7. Remplir l'attestation finale pour debloquer le paiement

**Qui peut devenir MAR ?** Des architectes, des bureaux d'etudes thermiques, des auditeurs energetiques, des societes de tiers financement, des collectivites territoriales. Ils doivent obtenir un agrement de l'Anah apres examen de leur dossier de candidature.

**Combien sont-ils ?**
- **1 035 structures agreees** representant **~3 500 accompagnateurs** au 30 septembre 2024 (+47% depuis mars 2024)
- **Objectif gouvernemental : 4 000 a 5 000 accompagnateurs** d'ici 2025
- Le marche grossit car la renovation energetique est une priorite nationale (objectif 700 000 renovations/an)

### Comment fonctionne MaPrimeRenov' Parcours Accompagne ?

C'est le dispositif d'aide de l'Etat pour les renovations d'ampleur (gain minimum de 2 classes energetiques sur le DPE). Le MAR est **obligatoire** dans ce parcours.

**Le processus complet pour un dossier type :**

| Etape | Action | Documents produits | Acteur principal |
|-------|--------|-------------------|-----------------|
| 1 | Premier contact menage, qualification eligibilite | Fiche qualification menage | MAR |
| 2 | Signature du contrat d'accompagnement | Contrat MAR signe (signature electronique) | MAR + menage |
| 3 | Visite du logement + diagnostic | Compte-rendu de visite, photos | MAR |
| 4 | Audit energetique reglementaire | Rapport d'audit complet | MAR (ou sous-traitant) |
| 5 | Elaboration des scenarios de travaux | Document scenarii avec chiffrage | MAR |
| 6 | Plan de financement (toutes aides mobilisables) | Plan de financement detaille | MAR |
| 7 | Aide au choix des artisans RGE + analyse des devis | Analyse comparative des devis | MAR |
| 8 | Depot du dossier sur monprojet.anah.gouv.fr | Dossier complet avec toutes les pieces | MAR + menage |
| 9 | Attente validation Anah (aucun travaux avant) | - | Anah |
| 10 | Suivi du chantier (visites intermediaires) | Comptes-rendus de visite chantier | MAR |
| 11 | Reception des travaux + visite finale | PV de reception, attestation de travaux MAR | MAR |
| 12 | Demande de paiement de l'aide | Dossier de solde complet | MAR + menage |
| 13 | Rapport d'activite annuel a l'Anah | Rapport annuel | MAR |

**C'est 12-13 etapes minimum par dossier, avec des dizaines de documents a produire.**

### Pourquoi les MAR galerent ?

1. **Chaque document doit etre parfaitement coherent avec tous les autres.** Le nom sur le contrat MAR, les devis, l'attestation, le compte MaPrimeRenov' doivent etre identiques. La moindre divergence = rejet automatique par le systeme d'instruction de l'Anah.

2. **La reglementation change constamment.** Arrete modificatif du 15 mai 2025, nouvelles dispositions au 1er juillet 2025, encore d'autres au 1er octobre 2025. Le MAR doit se tenir a jour en permanence.

3. **Pas d'outil dedie (ou presque).** La plupart travaillent avec Excel + le portail Anah + des modeles Word. C'est artisanal, source d'erreurs, et chronophage.

4. **Les delais de versement de l'Anah sont longs.** 7 a 11 semaines dans le meilleur cas, plusieurs mois voire un an si le dossier est incomplet.

> **Source cle** : [Regles d'or Mon Accompagnateur Renov' - Anah](https://www.anah.gouv.fr/anatheque/reglesdor-MAR)

---

## 2. LA DOULEUR (PRECIS ET CHIFFRE)

### Qui souffre exactement ?

**Profil type du MAR qui souffre le plus :**

- **Structure independante ou petite equipe (1-5 personnes)**
- Vient du monde du diagnostic immobilier, de l'architecture ou de la thermique
- Nouveau dans le metier MAR (agrement obtenu en 2024-2025)
- Gere entre 10 et 50 dossiers simultanement
- N'a pas de secretaire administrative dediee
- Utilise Excel + portail Anah + modeles Word artisanaux
- Passe **plus de temps sur l'administratif que sur le terrain**

### De quoi souffrent-ils concretement ?

**A. Complexite des documents (10+ par dossier)**

Chaque dossier MaPrimeRenov' Parcours Accompagne necessite :
- Contrat MAR avec clauses financieres et textuelles
- Audit energetique detaille (photos, descriptions etat existant)
- Plan de financement precis (aide par aide, reste a charge)
- Analyse comparative des devis artisans
- Attestation de travaux MAR (document central)
- PV de reception
- Rapport final d'accompagnement
- + les pieces administratives classiques (RIB, taxe fonciere, avis d'imposition...)

**B. Dossiers rejetes = tresorerie bloquee**

Les motifs de rejet les plus frequents (source : [Marius Renov](https://marius-renov.fr/comment-eviter-les-refus-des-dossiers-maprimerenov/)) :

| Motif de rejet | Frequence | Impact |
|---------------|-----------|--------|
| Incoherence entre documents (nom, adresse, montants) | Tres frequent | Rejet automatique |
| Devis incomplets (SIRET manquant, specs insuffisantes) | Frequent | Demande de complement |
| Audit energetique non detaille (photos manquantes) | Frequent | Retard d'instruction |
| Plan de financement flou (aide non ventilee) | Courant | Rejet ou complement |
| Signature electronique non conforme (tapee vs manuscrite) | Courant | Rejet technique |
| PDF modifiable apres signature | Occasionnel | Rejet technique |

**C. L'impact financier est concret et mesurable**

Un MAR facture en moyenne **2 000 a 4 000 EUR par mission**.

| Scenario | Impact financier | Impact temps |
|----------|-----------------|-------------|
| Dossier accepte du premier coup | Paiement en 7-11 semaines | ~15-20h de travail admin |
| Dossier avec demande de complement | Paiement en 3-6 mois | +5-10h de reprise |
| Dossier rejete + recours | Paiement en 6-12 mois (si obtenu) | +15-20h de recours |
| Dossier rejete definitivement | 0 EUR (perte seche) | Tout le temps investi perdu |

**Estimation de la perte :** si un MAR gere 30 dossiers/an et que 20% sont retardes de 3+ mois, ca represente 6 dossiers x 3 000 EUR = **18 000 EUR de tresorerie bloquee** en permanence. Pour une petite structure, c'est potentiellement fatal.

**D. Le temps perdu est enorme**

Selon Marius Renov eux-memes : leurs utilisateurs **gagnent en moyenne 4h par semaine** sur le suivi administratif grace a leur outil. Cela signifie que sans outil, un MAR perd environ **16-20h par mois** sur de l'admin pure qui pourrait etre automatisee. C'est **1/4 de son temps de travail**.

> **Chiffre cle** : 4h/semaine = 200h/an de temps admin evitable. A un taux horaire de 80 EUR, c'est **16 000 EUR/an de productivite perdue**.

---

## 3. LA SOLUTION (MAQUETTE TEXTUELLE)

### Ce que fait RenovFlow

**RenovFlow est un CRM metier specialise MAR** qui automatise le suivi des dossiers MaPrimeRenov' de la premiere prise de contact a la facturation finale. C'est le "pipeline de vente" des MAR, mais adapte a leur processus reglementaire specifique.

### Fonctionnalites MVP (P0/P1/P2)

| Priorite | Fonctionnalite | Description | Justification |
|----------|---------------|-------------|---------------|
| **P0** | Pipeline de dossiers | Tableau Kanban avec les 12 etapes MAR, drag & drop | C'est le coeur du produit. Chaque dossier avance dans le pipeline. |
| **P0** | Fiche dossier complete | Toutes les infos menage + logement + travaux + financements dans une fiche | Centralisation = fin d'Excel |
| **P0** | Rappels automatiques | Alertes par etape (depot avant travaux, echeances, relances) | Raison #1 des dossiers rejetes : oublis |
| **P0** | Generation documents PDF | Contrat MAR, attestation travaux, plan de financement a partir des donnees saisies | Gain de temps massif, coherence garantie |
| **P0** | Checklist de conformite | A chaque etape, verification que toutes les pieces sont presentes et coherentes | Reduit les rejets |
| **P1** | Signature electronique | Envoi des documents pour signature en ligne (integration Yousign ou equivalent) | Fonctionnalite attendue (Marius l'a) |
| **P1** | Tableau de bord tresorerie | Vue sur les aides en attente, factures a emettre, montants bloques | Differentiation vs Marius |
| **P1** | Multi-utilisateurs | Collaboration au sein de la structure (notes, tags, notifications) | Necessaire pour structures 2+ personnes |
| **P1** | Export rapport annuel Anah | Generation automatique du rapport d'activite annuel obligatoire | Pain point majeur annuel |
| **P2** | Annuaire RGE integre | Recherche d'artisans RGE par zone et specialite | Nice to have |
| **P2** | Portail menage | Acces restreint pour le menage (suivi de son dossier) | Differentiation |
| **P2** | API / webhook | Integration avec d'autres outils | Marche enterprise |
| **P2** | Photo reporting | Upload de photos chantier geolocalisees et datees | Preuve conformite |

### Parcours utilisateur en 5 etapes

**Etape 1 : Onboarding (15 min)**
- Le MAR cree son compte, renseigne son agrement Anah, sa structure
- Import optionnel de dossiers existants (CSV/Excel)
- Configuration de ses modeles de documents (logo, mentions legales)

**Etape 2 : Nouveau dossier (5 min)**
- Clic "Nouveau dossier" -> Saisie infos menage (nom, adresse, revenus, DPE actuel)
- Le dossier apparait dans la colonne "Qualification" du pipeline
- RenovFlow calcule automatiquement l'eligibilite et le taux de prise en charge

**Etape 3 : Avancement du dossier (au fil du projet)**
- A chaque etape, le MAR coche les pieces justificatives
- RenovFlow genere les documents (contrat, plan de financement, attestation)
- Alertes si incoherence detectee (ex: montant devis != montant plan de financement)
- Le dossier avance automatiquement dans le pipeline

**Etape 4 : Depot et suivi (en continu)**
- Checklist complete avant depot sur monprojet.anah.gouv.fr
- Suivi du statut du dossier (en attente, valide, complement demande)
- Relances automatiques si delai depasse

**Etape 5 : Cloture et facturation**
- Generation de la facture finale
- Archivage du dossier complet
- Alimentation automatique du rapport d'activite annuel

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment precis | Niveau d'urgence |
|------------|--------------|-----------------|
| **Premier dossier rejete par l'Anah** | Apres 2-3 mois d'activite | EXTREME - Le MAR perd de l'argent concretement |
| **Obtention de l'agrement MAR** | Jour J de l'agrement | FORT - Nouveau MAR cherche ses outils, moment de "setup" |
| **Depassement de 10 dossiers simultanes** | 3-6 mois apres debut d'activite | FORT - Excel ne suffit plus, oublis commencent |
| **Preparation du rapport annuel Anah** | Fevrier-Mars chaque annee | FORT - Panique si pas d'outil, deadline obligatoire |
| **Embauche d'un collaborateur** | Phase de croissance | MOYEN - Besoin de partager les dossiers |
| **Changement reglementaire** | Lors de chaque arrete modificatif | MOYEN - "Mon modele Word est-il encore conforme ?" |
| **Comparaison avec un confrere equipe** | Networking, formation | MOYEN - Effet "je veux le meme outil" |

**Le declencheur #1 est le dossier rejete.** C'est le moment ou le MAR ressent physiquement la douleur (argent bloque) et cherche activement une solution. C'est la que RenovFlow doit etre visible (SEO sur "dossier MaPrimeRenov rejete", "eviter refus Anah", etc.).

---

## 5. ACQUISITION CLIENT

### Comment trouver les MAR ?

**A. L'annuaire France Renov' (CANAL #1 - GRATUIT)**

L'Anah publie un [annuaire public des MAR agrees](https://france-renov.gouv.fr/annuaires-professionnels/accompagnant) sur france-renov.gouv.fr. On peut chercher par localisation (code postal, region). C'est une **base de prospection directe et exhaustive**.

En complement, l'Anah publie des [listes PDF des prestataires agrees](https://www.renovactions42.org/hubfs/liste_prestataires_agrees_mar__7_avril_2025.pdf) mises a jour regulierement. Ces listes contiennent les noms des structures et leur localisation.

**B. La Communaute des MAR (CANAL #2 - COMMUNAUTAIRE)**

Un [groupe Facebook prive "Communaute des MAR"](https://communaute-mar.fr/) reunit **plus de 1 000 professionnels**. C'est devenu une association officielle fin 2024. Les MAR y partagent des questions, problemes administratifs, conseils.

**ATTENTION** : ce groupe a ete cree par... Marius Renov. Les fondateurs de Marius ont cree l'association "Communaute MAR" et animent ce groupe. Promouvoir RenovFlow directement dedans serait delicat.

**C. LinkedIn (CANAL #3 - ORGANIQUE)**

Les MAR sont actifs sur LinkedIn (nouveau metier = personal branding). Beaucoup publient sur leur activite. Le hashtag #MonAccompagnateurRenov et #MAR sont utilises.

**D. Formations MAR (CANAL #4 - PARTENARIAT)**

Colana est le principal organisme de formation MAR, et ils sont **deja partenaires de Marius Renov**. Mais d'autres organismes existent (La Solive, Ordre des Architectes, etc.) et ne sont pas encore "locks" par un outil.

**E. SEO / Content marketing (CANAL #5 - LONG TERME)**

Mots-cles cibles :
- "logiciel accompagnateur renov" (faible concurrence SEO)
- "outil MAR gestion dossiers"
- "eviter refus dossier MaPrimeRenov"
- "alternative Marius Renov"
- "rapport annuel MAR Anah"

### Message d'accroche

> **"Vos dossiers MaPrimeRenov' rejetes vous coutent 16 000 EUR/an en tresorerie bloquee et en temps perdu. RenovFlow automatise le suivi de vos missions MAR du premier contact a la facturation. 39 EUR/mois. Essai gratuit 14 jours."**

Variante courte pour LinkedIn :
> **"MAR : vous passez plus de temps sur Excel que sur le terrain ? RenovFlow = votre pipeline de dossiers MAR en 15 min. 39 EUR/mois."**

### Lead magnet possible

| Lead magnet | Format | Objectif |
|------------|--------|---------|
| "Checklist des 47 pieces justificatives MaPrimeRenov' Parcours Accompagne" | PDF telechargeagle | Capture email, demontre l'expertise metier |
| "Les 7 erreurs qui font rejeter vos dossiers MaPrimeRenov'" | Article blog / PDF | SEO + capture email |
| "Modele Excel de suivi de dossiers MAR" | Google Sheet | Faire toucher la douleur (Excel est penible) puis upsell vers RenovFlow |
| "Guide des changements reglementaires MAR 2026" | PDF actualise | Positionnement expert + email pour mises a jour |

---

## 6. BUSINESS MODEL

### Pricing

| Plan | Prix | Cible | Fonctionnalites |
|------|------|-------|----------------|
| **Solo** | **29 EUR/mois** (ou 290 EUR/an) | MAR independant, 1 utilisateur | Pipeline, generation docs, rappels, checklist, 30 dossiers actifs |
| **Pro** | **49 EUR/mois** (ou 490 EUR/an) | Structure 2-5 personnes | Tout Solo + multi-utilisateurs, signature electronique, portail menage, dossiers illimites |
| **Enterprise** | **Sur devis** | Grandes structures (10+ MAR) | Tout Pro + API, SSO, support dedie |

**Pourquoi ce pricing ?**
- Marius Renov est a **150 EUR/mois** (information confirmee via leur page pricing : 20 missions MAR incluses + 50 EUR par tranche de 10 missions supplementaires)
- Se positionner a 29-49 EUR/mois = **3 a 5 fois moins cher** que Marius
- Un MAR gagne 2 000-4 000 EUR par mission. A 30 missions/an = 60 000-120 000 EUR de CA. Un abonnement a 39 EUR/mois = 468 EUR/an, soit **< 1% de leur CA**
- Le ROI est evident : si l'outil evite ne serait-ce qu'un seul dossier rejete, le MAR economise 3 000 EUR minimum

### TAM realiste et viabilite

**Scenario conservateur : 1 035 structures (situation actuelle)**

| Metrique | Calcul | Resultat |
|----------|--------|---------|
| TAM (marche total adressable) | 1 035 structures x 39 EUR/mois | **40 365 EUR/mois = 484 380 EUR/an** |
| Objectif Adrien (2 500 EUR/mois) | 2 500 / 39 | **65 clients** |
| Taux de penetration requis | 65 / 1 035 | **6,3%** |
| Objectif Adrien (3 000 EUR/mois) | 3 000 / 39 | **77 clients** |
| Taux de penetration requis | 77 / 1 035 | **7,4%** |

**VERDICT** : Atteindre 65-77 clients sur 1 035 structures = **6-7% de penetration**. C'est ambitieux mais faisable en 6-12 mois avec une bonne execution. Le vrai defi est le delai (< 3 mois pour les premiers resultats signifie les premiers clients payants, pas les 65).

**Scenario optimiste : 5 000 MAR (objectif gouvernemental)**

| Metrique | Calcul | Resultat |
|----------|--------|---------|
| TAM | ~2 000 structures x 39 EUR/mois | **78 000 EUR/mois = 936 000 EUR/an** |
| Objectif 2 500 EUR/mois | 65 clients | **3,25% de penetration** |
| Plafond si 10% penetration | 200 clients x 39 EUR | **7 800 EUR/mois** |
| Plafond si 20% penetration | 400 clients x 39 EUR | **15 600 EUR/mois** |

**Scenario Plan Pro a 49 EUR/mois (mix de plans)**

Si on atteint 100 clients avec un ARPU moyen de 42 EUR/mois (mix Solo + Pro) :
- **4 200 EUR/mois = 50 400 EUR/an**
- C'est un beau side project, mais pas un SaaS qui fait vivre confortablement sans complementer.

### Projection de croissance

| Mois | Clients | MRR | Cumul | Actions |
|------|---------|-----|-------|---------|
| M1-M2 | 0 | 0 | 0 | Developpement MVP |
| M3 | 5 (beta gratuite) | 0 | 0 | Beta test avec 5 MAR, feedback |
| M4 | 10 | 390 EUR | 390 EUR | Lancement payant, premiers retours |
| M6 | 25 | 975 EUR | 2 730 EUR | SEO commence a porter, bouche-a-oreille |
| M9 | 50 | 1 950 EUR | 8 775 EUR | Content marketing + LinkedIn actif |
| M12 | 80 | 3 120 EUR | 20 475 EUR | Objectif atteint |

**REALITE** : atteindre 2 500-3 000 EUR/mois en < 3 mois est **tres improbable** avec ce marche. Le delai realiste est **6-12 mois**. Les premiers clients payants peuvent arriver en 3 mois si le MVP est pret en 8 semaines.

---

## 7. CONCURRENCE (ANALYSE CRITIQUE)

### 7.1 Marius Renov - Analyse detaillee

**Fiche d'identite :**

| Info | Detail |
|------|--------|
| Nom legal | MARIUS RENOV SAS |
| SIREN | 983559790 |
| Date de creation | 11 janvier 2024 |
| Capital social | 1 500 EUR |
| Siege | 75 bis Chemin du Ruisseau de Fontbazi, 31450 Donneville (Toulouse) |
| Activite NAF | 5829C - Edition de logiciels applicatifs |
| President | Benjamin Laffont (ne en 1983) |
| Directeurs generaux | Sebastian Ruiz (ne en 1984), Simon Hulin (ne en 1990) |
| Equipe visible | + Jeremy Mohariry (dev), Alexis Camacho (design), Pauline Leroy (growth) |
| CA publie | **Aucun compte depose** (confidentialite ou trop recent) |

**Ce que fait Marius Renov :**

| Fonctionnalite | Statut |
|----------------|--------|
| Pipeline de suivi des missions MAR | Oui |
| Generation de documents (contrat, attestation) | Oui |
| Signature electronique certifiee | Oui |
| Multi-utilisateurs avec collaboration | Oui |
| Rappels automatiques par etape | Oui |
| Portail menage + portail artisan | Oui |
| Annuaire RGE integre | Oui |
| Verification des devis (Check devis) | Oui |
| Calendrier de rendez-vous | Oui |
| Photo reporting | Oui |
| Suivi consommation post-travaux (Watt Watchers) | Oui (partenariat) |
| Rapport d'activite annuel | "Coming soon" |
| Stockage donnees en France, RGPD | Oui |
| API | Oui (plan Enterprise) |
| Essai gratuit | 7 jours |

**Pricing Marius Renov (confirme) :**

| Plan | Prix | Details |
|------|------|---------|
| Standard | **150 EUR/mois** | 20 missions MAR incluses, +50 EUR par tranche de 10 missions supplementaires, formulaires illimites, multi-utilisateurs, contrats avec clauses |
| Enterprise | **Sur devis** | Customisation + API |

**Forces de Marius :**
1. **First mover avantage** - Present depuis debut 2024 sur un marche naissant
2. **Communaute** - A cree et anime "La Communaute des MAR" (1 000+ membres Facebook, devenu association)
3. **Partenariat formation** - Integre dans la formation Colana (principal organisme de formation MAR)
4. **Fonctionnalites avancees** - Signature electronique, portail menage/artisan, Watt Watchers
5. **Credibilite metier** - Fondateurs issus de l'architecture et du dev, connaissance terrain
6. **Contenu educatif** - Blog avec articles sur les erreurs de dossiers, webinaires reguliers (Livestorm)

**Faiblesses de Marius :**
1. **Prix eleve** - 150 EUR/mois est cher pour un MAR independant qui fait 30-50 dossiers/an. C'est 1 800 EUR/an.
2. **Pricing a l'usage** - +50 EUR par tranche de 10 missions au-dela de 20 = cout impredictible et potentiellement plus eleve
3. **Transparence tarifaire limitee** - Le prix n'est pas directement visible sur le site (page pricing redirige vers contact)
4. **Pas de rapport d'activite annuel** - Fonctionnalite "coming soon" alors que c'est une obligation legale
5. **Societe tres jeune** - Creee en janvier 2024, capital de 1 500 EUR. Fragilite potentielle.
6. **Equipe reduite** - ~6 personnes visibles. Capacite limitee d'evolution rapide.
7. **Pas d'avis utilisateurs publics** - Aucun temoignage client verifiable en ligne (pas sur Trustpilot, G2, Capterra)
8. **Position de monopole sans pression** - Pas d'incentive a innover rapidement

### 7.2 Concurrents indirects

| Concurrent | Type | Limite pour les MAR |
|-----------|------|-------------------|
| **Excel + portail Anah** | Solution "maison" | C'est l'alternative #1 par defaut. Chronophage, erreurs, pas d'automatisation. |
| **monprojet.anah.gouv.fr** | Plateforme de depot Anah | Interface de l'Etat pour deposer les dossiers. Pas un outil de gestion. Le MAR doit toujours preparer ses dossiers ailleurs. |
| **Consoneo** | Plateforme digitalisation aides renovation | Cible plutot les operateurs CEE et energeticiens, pas specifiquement les MAR. |
| **CAP RENOV+** | Logiciel simulation energetique | Outil d'audit, pas de gestion de dossiers. Complementaire. |
| **Renolib** | SaaS pour artisans RGE | Cible les installateurs (CEE/MPR mono-geste), pas les MAR. Workflow different. |
| **Axonaut, Henrri** | CRM/facturation generique | Aucune connaissance metier MAR, pas de templates reglementaires. |

### 7.3 Risque : l'Anah pourrait-elle developper son propre outil ?

**Analyse :**
- L'Anah a deja monprojet.anah.gouv.fr pour le depot de dossiers. C'est une plateforme de depot, pas un CRM.
- L'Anah est une agence publique avec des contraintes budgetaires et des delais de developpement longs (typiquement 2-5 ans pour un outil interne).
- L'Anah a **explicitement choisi** de ne pas developper d'outil de gestion pour les MAR. Elle fournit les regles, les guides, les formulaires, mais laisse le marche prive fournir les outils.
- Les plateformes beta.gouv.fr montrent que l'Etat sous-traite souvent ce type de besoin a des startups ou des outils existants.

**Verdict** : Le risque que l'Anah developpe un outil concurrent est **faible a court terme (2-3 ans)**. A long terme, c'est possible mais improbable vu la culture de l'agence.

**Risque plus credible** : que l'Anah **s'associe officiellement avec Marius Renov** (ou un autre) comme outil recommande. Cela donnerait un avantage concurrentiel enorme au partenaire choisi.

---

## 8. TECHNIQUE

### Complexite : 3/5

| Aspect | Complexite | Detail |
|--------|-----------|--------|
| Modele de donnees | 2/5 | CRUD classique : menages, dossiers, documents, etapes, utilisateurs |
| Pipeline / Kanban | 2/5 | Librairies existantes (react-beautiful-dnd, @hello-pangea/dnd) |
| Generation PDF | 3/5 | Templates complexes avec donnees dynamiques. Librairies : @react-pdf/renderer, puppeteer |
| Signature electronique | 4/5 | Integration API tierce (Yousign, DocuSign). Cout supplementaire. |
| Rappels / notifications | 2/5 | Cron jobs Supabase ou Vercel cron + emails (Resend) |
| Multi-tenant | 2/5 | Row Level Security Supabase |
| Auth + roles | 2/5 | Supabase Auth + roles |
| Conformite reglementaire | 4/5 | Pas technique mais metier : il faut connaitre les regles MAR en detail |

### Temps MVP estime

| Phase | Duree | Livrable |
|-------|-------|---------|
| Semaine 1-2 | Recherche metier + UX | Wireframes, modele de donnees, templates documents |
| Semaine 3-5 | Dev core (pipeline, fiches, auth) | App fonctionnelle avec pipeline et fiches dossier |
| Semaine 6-7 | Dev docs (generation PDF, checklist) | Generation contrat MAR + attestation + plan de financement |
| Semaine 8 | Dev rappels + dashboard | Rappels automatiques + tableau de bord |
| Semaine 9-10 | Beta test avec 3-5 MAR reels | Feedback, corrections, ajustements |

**Total : 8-10 semaines pour un MVP fonctionnel.**

La signature electronique (P1) peut attendre la V2 et ajouter 2-3 semaines supplementaires.

### Stack requise

| Composant | Techno | Cout |
|-----------|--------|------|
| Frontend | Next.js 14+ (App Router) + React | Gratuit |
| Backend / API | Next.js API Routes ou NestJS | Gratuit |
| Base de donnees | Supabase (Postgres + Auth + Storage) | Gratuit (plan Free) puis 25 EUR/mois (Pro) |
| Hebergement | Vercel | Gratuit (Hobby) puis 20 EUR/mois (Pro) |
| Generation PDF | @react-pdf/renderer ou Puppeteer | Gratuit |
| Emails transactionnels | Resend | Gratuit (100/jour) |
| Cron jobs | Vercel Cron ou Supabase Edge Functions | Inclus |
| Signature electronique (P1) | Yousign API | ~49 EUR/mois (a repercuter sur plan Pro) |
| **TOTAL** | | **< 50 EUR/mois en production** |

### Points impressionnants pour CV

| Point | Detail technique |
|-------|-----------------|
| **Generation dynamique de documents PDF conformes** | Templates PDF avec injection de donnees, signature, conformite reglementaire Anah |
| **Pipeline metier avec workflow engine** | Machine a etats (state machine) pour gerer les transitions de dossier avec validations |
| **Multi-tenant SaaS avec RLS** | Row Level Security Supabase pour isolation des donnees par structure |
| **Integration signature electronique** | API Yousign avec webhooks pour suivi des signatures |
| **Architecture event-driven** | Notifications, rappels, alertes basees sur des evenements metier |
| **Domain-Driven Design** | Modelisation d'un domaine metier complexe (renovation energetique, reglementation Anah) |

---

## 9. RISQUES SPECIFIQUES

### RISQUE 1 : Dependance reglementaire (CRITIQUE)

**Le risque s'est DEJA materialise.**

MaPrimeRenov' a ete **suspendu au 1er janvier 2026** faute de budget vote. Pendant 6 semaines, aucun nouveau dossier n'a pu etre depose. Le guichet a rouvert le **12 fevrier 2026** apres adoption du budget (3,6 milliards EUR pour MaPrimeRenov' en 2026).

**Impact sur les MAR** : pendant la suspension, les MAR ne pouvaient plus deposer de nouveaux dossiers. Pas de nouveaux dossiers = pas de nouvelles missions = pas de revenus. Certains MAR ont du mettre leur activite en pause.

**Impact sur RenovFlow** : si les MAR ne gagnent pas d'argent, ils annulent leurs abonnements. Un SaaS a 39 EUR/mois est le premier poste de depense a couper en periode de vaches maigres.

**Attenuation** :
- La tendance de fond est structurelle : objectif national 700 000 renovations/an, directives europeennes
- Le budget 2026 a ete vote et le guichet est rouvert
- MaPrimeRenov' existe depuis 2020 et a survecu a plusieurs crises budgetaires
- Meme si MPR change de forme, le besoin d'accompagnement restera (c'est inscrit dans la loi)
- Mais **les suspensions ponctuelles sont un risque reel et recurrent**

**Probabilite** : MOYENNE (tous les 1-2 ans, risque de suspension temporaire)
**Impact** : FORT (churn temporaire, pas de nouveaux clients pendant la suspension)
**Verdict** : Ce risque ne tue pas le projet mais impose une **tresorerie saine** et la capacite a survivre a des creux de 1-2 mois.

### RISQUE 2 : Marche trop petit pour 2 500-3 000 EUR/mois ? (SERIEUX)

**Les chiffres honnetes :**

| Metrique | Valeur |
|----------|--------|
| Structures agreees actuelles | ~1 035 |
| Dont deja clientes Marius Renov (estimation) | 50-200 (inconnu, aucun chiffre public) |
| Marche adressable net | ~835-985 structures |
| Clients necessaires pour 2 500 EUR/mois | 65 clients a 39 EUR |
| Penetration requise | ~7% du marche net |

**Le probleme** : avec seulement ~1 000 structures, si Marius en a deja 100-200, il reste peut-etre 800 structures adressables. En capter 65 = 8% de penetration. C'est faisable mais **pas en 3 mois**.

**L'espoir** : le nombre de structures croit rapidement (+47% en 6 mois en 2024). Si la tendance continue, le marche sera a 1 500-2 000 structures fin 2026. Avec l'objectif de 5 000 MAR, le TAM double ou triple a terme.

**Verdict** : Le marche est **juste suffisant** pour atteindre 2 500-3 000 EUR/mois, mais il faut une execution impeccable et de la patience. Ce n'est pas un marche ou on peut se permettre un produit mediocre ou une acquisition lente.

### RISQUE 3 : Concurrent unique avec avantage Anah - est-ce un mur ? (MODERE)

**Analyse froide :**

Marius Renov a des avantages structurels reels :
1. **La Communaute des MAR** (1 000+ membres) est leur creation. Ils controlent le principal lieu de discussion des MAR.
2. **Partenariat Colana** : les nouveaux MAR formes par Colana decouvrent Marius pendant leur formation.
3. **First mover** : ceux qui ont deja Marius ne changeront pas facilement (switching cost).

**Mais ce n'est PAS un mur infranchissable :**
1. **Le prix est 3-5x plus eleve** (150 EUR vs 29-49 EUR). Pour un MAR independant qui fait 20-30 dossiers/an, 1 800 EUR/an c'est beaucoup.
2. **Pas de lock-in technique** : les donnees d'un MAR (noms, adresses, montants) sont facilement re-saisissables. Pas d'effet reseau.
3. **Les nouveaux MAR sont le marche** : chaque nouveau MAR agree n'a pas encore choisi d'outil. C'est la que RenovFlow peut intercepter.
4. **D'autres formations existent** : La Solive, Ordre des Architectes, etc. Marius n'est pas partout.
5. **L'absence d'avis publics** de Marius est une faiblesse exploitable : un prospect qui compare et ne trouve aucun avis vs un RenovFlow avec des temoignages reels...

**Verdict** : Le concurrent est serieux mais pas dominant. La fenetre d'opportunite est ouverte tant que le marche croit et que Marius ne baisse pas ses prix.

### RISQUE 4 : Suspension MaPrimeRenov' (NOUVEAU - 2026)

Comme detaille au Risque 1, la suspension de janvier-fevrier 2026 est un **signal d'alarme concret**. Mais le guichet est rouvert depuis le 12 fevrier 2026 avec un budget de 3,6 milliards EUR et un objectif de 120 000 renovations d'ampleur.

**Point positif inattendu** : la suspension a cree de l'incertitude chez les MAR, et ceux qui n'avaient pas d'outil structure ont souffert davantage (impossibilite de savoir ou en etaient leurs dossiers en cours). C'est un argument de vente : "Ne vous faites plus surprendre. Avec RenovFlow, vous savez exactement ou en est chaque dossier meme quand le guichet ferme."

---

## 10. VERDICT FINAL

### Score actualise /20

| Critere | Note | Justification |
|---------|------|---------------|
| Intensite douleur | **5/5** | Maximale et verifiee : obligation legale, dossiers rejetes = tresorerie bloquee, 4h/semaine perdues en admin, reglementation qui change constamment |
| Facilite acquisition | **3.5/5** | Annuaire public des MAR = prospection directe possible. Mais Marius controle la communaute et la formation principale. LinkedIn et SEO sont des alternatives viables mais plus lentes. |
| Simplicite vente | **4/5** | ROI evident (39 EUR/mois vs 16 000 EUR/an de productivite perdue). Prix 3-5x moins cher que Marius. Mais il faut convaincre des gens qui ont deja un outil ou qui utilisent Excel "gratuitement". |
| Faisabilite solo | **4/5** | Stack maitrisee, MVP en 8-10 semaines. La complexite est metier, pas technique. Il faut investir du temps pour comprendre le processus MAR en detail. |
| **TOTAL** | **16.5/20** | |

### Matrice de decision

| Question | Reponse | Signal |
|----------|---------|--------|
| La douleur est-elle reelle et verifiee ? | OUI - documentee, chiffree, confirmee par Marius eux-memes | GO |
| Le marche est-il assez grand ? | JUSTE - 1 035 structures aujourd'hui, en croissance | PRUDENT |
| Le concurrent est-il battable ? | OUI - prix 3-5x plus eleve, pas d'avis publics, marche en croissance | GO |
| L'objectif financier est-il atteignable en < 3 mois ? | NON - premiers clients payants possibles en 3 mois, mais 2 500 EUR/mois en 6-12 mois | PRUDENT |
| Le risque reglementaire est-il acceptable ? | OUI AVEC RESERVES - suspension ponctuelle possible mais tendance de fond solide | PRUDENT |
| La tech est-elle dans les cordes d'Adrien ? | OUI - stack exacte (Next.js, Supabase, Vercel) | GO |

### Recommandation finale

**VERDICT : GO AVEC RESERVES**

RenovFlow est une idee solide avec une douleur verifiee, un concurrent battable sur le prix, et un timing favorable (marche en croissance, afflux de nouveaux MAR). C'est probablement **la meilleure idee du lot pour Adrien** en termes de rapport douleur/faisabilite.

**Les 3 reserves majeures :**

1. **Le marche est etroit.** 1 035 structures aujourd'hui. Il faut viser 7% de penetration pour atteindre l'objectif financier. Pas de marge d'erreur sur l'execution.

2. **L'objectif "< 3 mois" est irrealiste** pour ce marche. Compter 2 mois de dev + 1 mois de beta + 3-6 mois d'acquisition = **premiers 2 500 EUR/mois en 6-9 mois** si tout va bien.

3. **Le risque reglementaire est reel.** La suspension de janvier 2026 le prouve. Il faut avoir une tresorerie tampon et ne pas dependre a 100% de ce SaaS pour vivre.

**Action plan si GO :**

| Semaine | Action |
|---------|--------|
| S1 | Contacter 10 MAR via l'annuaire France Renov' pour valider la douleur (entretiens de 20 min) |
| S2 | Si validation, commencer le dev MVP (pipeline + fiches + generation PDF) |
| S3-S8 | Dev MVP en continu |
| S8-S10 | Beta gratuite avec 3-5 MAR reels, iterer sur le feedback |
| S10+ | Lancement payant, SEO + LinkedIn + prospection annuaire |

---

## SOURCES

### Reglementation et fonctionnement MAR
- [Mon Accompagnateur Renov' - France Renov](https://france-renov.gouv.fr/mon-accompagnateur-renov)
- [Regles d'or MAR Edition 2024 - Anah](https://www.anah.gouv.fr/anatheque/reglesdor-MAR)
- [Guide candidat MAR - Anah](https://www.anah.gouv.fr/anatheque/guide-du-candidat-mar)
- [MaPrimeRenov' Parcours Accompagne - ANIL](https://www.anil.org/aj-maprimerenov-parcours-accompagne/)
- [Etapes du Parcours Accompagne - Ithaque](https://www.ithaque-renovation.fr/post/les-etapes-du-parcours-accompagne-maprimerenov)
- [MaPrimeRenov' renovation d'ampleur - Economie.gouv.fr](https://www.economie.gouv.fr/particuliers/maprimerenov-parcours-accompagne-tout-savoir-sur-cette-aide)

### Taille du marche et statistiques
- [Bilan MaPrimeRenov' T3 2024 - Anah](https://www.anah.gouv.fr/anatheque/bilan-maprimerenov-T32024)
- [Annuaire MAR agrees - France Renov](https://france-renov.gouv.fr/annuaires-professionnels/accompagnant)
- [Liste prestataires agrees MAR avril 2025](https://www.renovactions42.org/hubfs/liste_prestataires_agrees_mar__7_avril_2025.pdf)
- [Ouverture plateforme agrement MAR - Anah](https://www.anah.gouv.fr/presse/mon-accompagnateur-renov-ouverture-de-la-plateforme-d-agrement-pour-les-nouveaux-acteurs)

### Concurrent Marius Renov
- [Marius Renov - Site officiel](https://marius-renov.fr/)
- [Fonctionnalites Marius Renov](https://marius-renov.fr/fonctionnalites/)
- [Qui sommes-nous - Marius Renov](https://marius-renov.fr/qui-sommes-nous/)
- [Logiciel de suivi des dossiers - Marius Renov](https://marius-renov.fr/logiciel-de-suivi-des-dossiers/)
- [Comment eviter les refus - Marius Renov](https://marius-renov.fr/comment-eviter-les-refus-des-dossiers-maprimerenov/)
- [Marius Renov - Societe.com (SIREN 983559790)](https://www.societe.com/societe/marius-renov-983559790.html)
- [Marius Renov - Annuaire Entreprises](https://annuaire-entreprises.data.gouv.fr/entreprise/marius-renov-983559790)

### Communaute et ecosysteme MAR
- [Communaute des MAR - Association](https://communaute-mar.fr/)
- [Formation MAR - Colana](https://colana.fr/mar/)
- [Contentieux MaPrimeRenov' - Village Justice](https://www.village-justice.com/articles/contentieux-maprimerenov-que-faire-face-aux-refus-aux-retards-paiement-anah,53369.html)

### Suspension MaPrimeRenov' 2026
- [Suspension MaPrimeRenov janvier 2026 - Mon Atout Energie](https://www.monatoutenergie.fr/actualites/suspension-maprimerenov-janvier-2026)
- [Reouverture MaPrimeRenov' - Service Public](https://www.service-public.gouv.fr/particuliers/actualites/A18332)
- [Budget 2026 Anah 4,6 Mds - Synasav](https://synasav.fr/actualites-synasav/detail/budget-2026-de-l-anah-4-6-mds-d-euros-pour-massifier-la-renovation)
- [MaPrimeRenov' rouvrira apres vote budget - Effy](https://www.effy.fr/magazine/actualite/maprimerenov-guichet-ferme-budget-2026)
- [Reouverture calendrier - Hellowatt](https://www.hellowatt.fr/blog/reouverture-maprimerenov-calendrier/)

### Tarification MAR
- [Prix Mon Accompagnateur Renov' - Ithaque](https://www.ithaque-renovation.fr/post/prix-mon-accompagnateur-renov)
- [Prix Mon Accompagnateur Renov' - Hellio](https://particulier.hellio.com/blog/conseils/prix-mon-accompagnateur-renov)
- [Mon Accompagnateur Renov prix 2026 - Thermiconseil](https://thermiconseil.fr/actualites/mon-accompagnateur-renov-prix/)
