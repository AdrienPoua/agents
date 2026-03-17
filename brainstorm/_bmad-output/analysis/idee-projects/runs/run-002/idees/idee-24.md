# Idee #24 - BorneFlow

**Date :** 2026-02-06
**Run :** 002
**Angle :** 12 - Marches en croissance rapide

---

## Resume

**Nom :** BorneFlow
**Pitch :** Outil de gestion de chantiers IRVE pour installateurs de bornes de recharge electrique. Le metier explose, les obligations administratives s'empilent, et personne ne leur fait d'outil dedie.

---

## La cible (qui paye)

Electriciens et installateurs independants qualifies **IRVE** (Infrastructure de Recharge pour Vehicules Electriques) en France.

- **~4 800+ entreprises qualifiees IRVE** via Qualifelec (estimation basee sur la croissance du secteur)
- De ~2 000 qualifies en 2022 a ~4 800+ en 2025 : **+140% en 3 ans**
- Marche tire par l'objectif gouvernemental de **7 millions de points de charge d'ici 2030** (vs 1.7M aujourd'hui)
- Principalement des **electriciens independants ou TPE** qui ajoutent la qualification IRVE a leur activite existante
- **Decideur unique** : le gerant-electricien

## La douleur (1 phrase)

L'installateur IRVE doit gerer un **parcours administratif specifique** pour chaque chantier (devis technique IRVE, qualification Qualifelec, prime Advenir, Consuel, raccordement Enedis si necessaire, contrats de maintenance) avec **zero outil dedie** -- il utilise Excel, des emails, et des portails web differents pour chaque etape.

## Le declencheur d'achat

- **Obtention de la qualification IRVE** : l'electricien debute un nouveau pan d'activite et realise l'ampleur administrative
- **Premier dossier Advenir rejete** : la prime est bloquee, le gerant comprend qu'il a besoin de structure
- **Passage de 3 a 10+ chantiers IRVE/mois** : le systeme artisanal (Excel + email) ne tient plus
- **Loi LOM et obligations coproprietes** : l'afflux de demandes de coproprietes cree un volume de dossiers sans precedent

## Pourquoi c'est un marche en croissance rapide (Angle 12)

1. **Objectif gouvernemental** : 7 millions de points de charge d'ici 2030 (4x le parc actuel)
2. **Obligation LOM** : depuis janvier 2025, les entreprises doivent equiper 5% de leurs places de parking
3. **Fin du credit d'impot borne** au 31/12/2025 = rush de derniere minute en 2025, puis renouvellement probable
4. **Coproprietes** : pre-equipement obligatoire, afflux de demandes
5. **Croissance des qualifies** : +140% en 3 ans, et ca continue -- nouveaux electriciens qui se qualifient IRVE chaque mois
6. **Zero outillage dedie** : les logiciels IRVE existants (IRVE Manager, Chargekeeper, MobilyWeb) sont des outils de **supervision de bornes APRES installation** -- pas de gestion du **chantier d'installation** lui-meme

## Le parcours administratif (la douleur detaillee)

Pour chaque chantier IRVE, l'installateur doit gerer :

1. **Visite technique + devis** --> devis specifique IRVE (puissance, type de borne, norme NFC 15-100)
2. **Verification qualification** --> certificat Qualifelec valide pour le bon niveau (P1/P2/P3)
3. **Dossier prime Advenir** (si eligible) --> portail Advenir (jusqu'a 50-60% du cout subventionne)
4. **Commande materiel** --> suivi fournisseurs (bornes, cables, protections)
5. **Installation + mise en service** --> rapport d'intervention, parametrage OCPP si supervision
6. **Attestation Consuel** --> portail Consuel (obligatoire pour les installations > 3.7 kW)
7. **Raccordement Enedis** (si necessaire) --> portail Enedis Connect
8. **Facturation + suivi encaissement** --> facture client + facture prime Advenir separee

Soit **8 etapes** avec des delais, des documents, des portails differents. Tout est gere en Excel + email + papier.

## Les concurrents probables

| Concurrent | Ce qu'il fait | Ce qu'il ne fait PAS |
|-----------|---------------|---------------------|
| **IRVE Manager** | Logiciel de gestion de parc de bornes (supervision post-install) | Zero gestion du chantier d'installation |
| **Chargekeeper** | Supervision et exploitation de bornes pour CPO | Destine aux operateurs, pas aux installateurs |
| **MobilyWeb** | Supervision a distance des bornes | Post-installation uniquement |
| **Wizzimmo** (nouveau 2025) | CRM courtiers en travaux | Pas specifique IRVE du tout |
| **Batappli / Obat** | Devis-facture BTP generique | Aucune specificite IRVE (Advenir, Consuel, niveaux qualification) |
| **Excel** | Tout et rien | Pas de workflow, pas d'alertes, pas de checklists IRVE |

**Constat : Les logiciels IRVE existants gerent les bornes APRES installation. AUCUN ne gere le CHANTIER d'installation.** C'est un trou beant dans la chaine de valeur.

## La differentiation

- **Seul outil dedie au workflow d'installation IRVE** : du devis technique a l'encaissement de la prime Advenir
- **Checklists par type de chantier** : copropriete (droit a la prise), entreprise (LOM), particulier, parking public -- chaque contexte a ses propres etapes et documents
- **Suivi des qualifications** : alerte quand le certificat Qualifelec arrive a expiration (renouvellement tous les 4 ans)
- **Gestion Advenir integree** : checklist des pieces du dossier, suivi du statut de la prime, relance automatique
- **Devis intelligent IRVE** : templates pre-configures par type de borne et puissance, conformes NFC 15-100
- **Tableau de bord multi-chantiers** : statut visuel de chaque chantier a chaque etape

## Score rapide /20

| Critere | Score | Justification |
|---------|-------|---------------|
| **Intensite douleur** | **4/5** | L'admin mange 2-4h par chantier. Dossier Advenir rejete = prime bloquee (jusqu'a 1 800 EUR). Qualification expiree = chantiers interdits. Reel mais pas mortel. |
| **Facilite acquisition** | **4/5** | SEO : "logiciel installateur IRVE", "gestion chantier borne recharge". Cartographie Qualifelec publique (scrapable). Groupes FB electriciens/IRVE actifs. Partenariats organismes de formation IRVE (prescripteurs naturels). |
| **Simplicite vente** | **4/5** | Argument immediat : "Gerez tous vos chantiers IRVE au meme endroit". Scan gratuit de qualification = hook. Decideur unique (gerant-electricien). |
| **Faisabilite solo** | **4/5** | MVP en 6-8 semaines : dashboard + checklists IRVE + alertes. Stack maitrisee (Next.js + Supabase). Pas d'integration API complexe au MVP. Bon projet portfolio mobilite verte. |
| **TOTAL** | **16/20** | |

## Modele economique envisage

- **Gratuit** : jusqu'a 3 chantiers actifs, checklist basique
- **Pro** : 29-39 EUR/mois -- chantiers illimites, alertes qualification, templates devis IRVE, suivi Advenir
- **Team** : 59-79 EUR/mois -- multi-utilisateurs, reporting, export comptable

**Objectif 2 500 EUR/mois** : 65-85 clients Pro = ~1.5% du marche cible

## Risques et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|------------|
| Programme Advenir reduit ou arrete | Faible-Moyenne | Moyen | L'outil reste utile sans Advenir (devis, Consuel, Enedis). La prime est un bonus, pas le coeur. |
| OpenFire ou Revolt ajoutent un module IRVE | Faible | Haut | Specialisation = profondeur. Un generique ne couvrira jamais les specificites IRVE (niveaux P1/P2/P3, types copro vs entreprise vs particulier). |
| Marche IRVE ralentit | Tres faible | Haut | Objectif 7M points de charge 2030 = croissance structurelle. Meme si le rythme baisse, le volume reste enorme. |
| Installateurs ne veulent pas payer pour de l'admin | Moyenne | Moyen | Freemium + ROI direct : "1 prime Advenir ratee = 1 800 EUR perdu, l'outil coute 39 EUR/mois" |
| Confusion avec les logiciels de supervision | Moyenne | Faible | Positionnement clair : "BorneFlow gere VOS chantiers, pas les bornes de vos clients" |

## Synergies potentielles avec SolAdmin (#23)

Les installateurs PV et IRVE sont souvent les **memes entreprises** : 43.6% des qualifies QualiPV ont aussi la qualification PAC, et beaucoup ajoutent IRVE. A terme, SolAdmin et BorneFlow pourraient fusionner en un outil unique de gestion de chantiers transition energetique, couvrant PV + IRVE + PAC.

## Verdict

**RETENUE**

Score 16/20 = idee prioritaire. Ocean bleu confirme sur la gestion de chantiers d'installation IRVE (vs supervision post-installation). Marche en hypercroissance (+140% en 3 ans). Nouveau metier = nouveaux pros qui cherchent des outils. Cible identifiable (cartographie Qualifelec). Decideur unique. Argument de vente immediat. MVP faisable en 6-8 semaines.

---

*Generee le 2026-02-06 - Run 002, Angle 12*
