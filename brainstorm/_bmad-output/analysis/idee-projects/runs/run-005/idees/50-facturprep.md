# Idee #50 - FacturPrep

## Angle : GENS QUI PERDENT DE L'ARGENT MAINTENANT + LISTES PUBLIQUES DE PROSPECTS

---

## Nom du projet
**FacturPrep** - Diagnostic de readiness et assistant de preparation a la facturation electronique obligatoire pour TPE et micro-entreprises

## Cible
Auto-entrepreneurs, micro-entreprises et TPE (0-10 salaries) qui doivent se conformer a l'obligation de facturation electronique avant le 1er septembre 2027 (emission obligatoire) et des le 1er septembre 2026 (reception obligatoire). Le decideur est le gerant lui-meme, souvent seul, non-expert en comptabilite numerique.

**Taille du marche :**
- ~2,7 millions d'auto-entrepreneurs actifs en France (source INSEE 2025)
- ~1,4 million de TPE employeuses (1-10 salaries)
- **Total : 4+ millions d'entreprises concernees par la deadline septembre 2026 (reception) et septembre 2027 (emission)**
- Listes scrapables : API annuaire-entreprises.data.gouv.fr (filtre par tranche effectif 0-10, statut actif), registres CMA, annuaires CCI par departement, PagesJaunes
- Decideur unique : le gerant/auto-entrepreneur

## Douleur
La reforme de la facturation electronique impose a TOUTES les entreprises francaises de pouvoir recevoir des factures electroniques des septembre 2026 et d'en emettre des septembre 2027. L'auto-entrepreneur ou le dirigeant de TPE ne sait meme pas par ou commencer : quelle plateforme de dematerialisation partenaire (PDP) choisir parmi les 101 agreees ? Son logiciel de facturation actuel est-il compatible ? Doit-il changer d'outil ? Combien ca va couter ? Quels formats (Factur-X, UBL, CII) ? Qu'est-ce que le e-reporting ? L'immense majorite des TPE n'a rien fait et decouvrira le probleme 3-6 mois avant la deadline, dans la panique.

## Declencheur d'achat
- **Reception de la premiere facture electronique** (septembre 2026) : l'auto-entrepreneur recoit une facture au format UBL/CII via une PDP et ne sait pas quoi en faire. Panique.
- **Alerte de son expert-comptable** : "Vous devez choisir une PDP avant septembre, sinon vous ne pourrez plus recevoir de factures." Le gerant cherche un outil pour comprendre.
- **Sanctions annoncees** : 15 EUR/facture non conforme (plafond 15 000 EUR/an) + 250 EUR/facture non transmise en e-reporting (plafond 15 000 EUR/an) + 500 EUR/manquement de transmission (plafond 15 000 EUR/an).
- **Media/reseaux sociaux** : les articles "facturation electronique obligatoire 2026" vont exploser en volume SEO courant 2026. Les groupes Facebook d'auto-entrepreneurs (100K+ membres) vont bruler de questions.
- **Rejet d'une facture** : un client grand compte rejette une facture parce qu'elle n'est pas au format structure requis. Le TPE perd du temps et de l'argent.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **PDP agreees (101 plateformes)** | Plateformes de dematerialisation partenaires | Agreees par l'Etat, solutions de bout en bout | Chacune vend SA solution. Aucune n'aide le TPE a CHOISIR. Pas de diagnostic neutre. Comme demander a un vendeur de voitures quel vendeur choisir. |
| **Pennylane, Tiime, Indy, etc.** | Logiciels de comptabilite/facturation pour TPE | Outils de facturation complets, integres | Ils proposent leur PDP integree. Pas de comparatif neutre, pas de diagnostic "suis-je pret ?", pas d'accompagnement a la migration. |
| **EBP, Sage, Cegid** | Editeurs logiciels de gestion | Marques reconnues, bases de clients existantes | Ciblent PME/ETI, complexes, chers, pas adaptes aux AE/micro. |
| **Articles/blogs/webinaires** | Content marketing des PDP et experts-comptables | Information gratuite | Pas d'outil interactif. Pas de diagnostic personnalise. Le TPE lit 10 articles et ne sait toujours pas quoi faire. |
| **Expert-comptable** | Accompagnement personnalise | Relation de confiance | Cher (100-300 EUR/heure), ne couvre pas toujours la partie technique PDP. Beaucoup de cabinets sont eux-memes en retard. |

**Analyse concurrentielle :** Le marche de la facturation electronique est SATURE en solutions (PDP, logiciels). Mais le marche de la PREPARATION, du DIAGNOSTIC et de l'ACCOMPAGNEMENT au choix est un desert. Les PDP vendent, elles n'aident pas a choisir. Les logiciels existants integrent leur propre solution, pas un comparatif neutre. L'auto-entrepreneur est perdu. FacturPrep se positionne AVANT l'achat d'une PDP : "Suis-je pret ? Que dois-je faire ? Quelle solution est adaptee a mon profil ?"

## Differentiation
1. **Diagnostic de readiness en 3 minutes** : questionnaire interactif. "Combien de factures emettez-vous par mois ?", "Quel logiciel utilisez-vous actuellement ?", "Avez-vous un expert-comptable ?", "Faites-vous du B2B, du B2C, ou les deux ?". Score de readiness : pret / partiellement pret / pas pret.
2. **Comparateur de PDP neutre** : en fonction du profil (volume de factures, secteur, logiciel actuel, budget), recommandation de 3-5 PDP adaptees parmi les 101 agreees. Avec prix, features, compatibilite avec l'outil existant. FacturPrep est un COMPARATEUR, pas une PDP -- il est neutre.
3. **Checklist personnalisee de migration** : etapes claires, datees, avec deadlines. "Etape 1 : choisir votre PDP avant mars 2027. Etape 2 : creer votre compte. Etape 3 : importer vos clients. Etape 4 : tester l'emission. Etape 5 : basculer."
4. **Simulateur de cout** : "Combien va me couter la facturation electronique ?" Calcul base sur le volume de factures et le profil. Comparaison des PDP sur le critere prix.
5. **Alertes deadlines** : rappel automatique des echeances (septembre 2026 = reception, septembre 2027 = emission). Timeline personnalisee.
6. **Lead magnet massif** : le diagnostic gratuit de readiness est le hook d'acquisition. Le TPE fait le test, decouvre qu'il n'est pas pret, et s'abonne pour le plan d'action + comparateur + alertes.
7. **Modele economique** : freemium (diagnostic gratuit) + abonnement 5-9 EUR/mois pour le plan d'action complet + commissions d'affiliation sur les PDP recommandees (revenus complementaires). Double monetisation : B2C (abonnement TPE) + B2B (affiliation PDP).

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 3.5/5 | Obligation legale certaine avec deadline ferme (sept 2026/2027). Sanctions reelles (15 EUR/facture, plafond 15K EUR/an). Mais la douleur est FUTURE, pas presente : la plupart des TPE n'ont pas encore senti l'urgence. La douleur va monter en fleche courant 2026. Score amene a evoluer avec le temps. |
| **Facilite acquisition** | 5/5 | SEO EXPLOSIF a venir : "facturation electronique obligatoire 2026", "quelle PDP choisir auto-entrepreneur", "comment se preparer facturation electronique". Volume de recherche deja en forte croissance. Groupes Facebook AE (100K+ membres). API annuaire-entreprises = liste complete des TPE/AE en France. Lead magnet naturel (diagnostic gratuit). |
| **Simplicite vente** | 4/5 | "Faites votre diagnostic gratuit en 3 minutes. Decouvrez si vous etes pret pour septembre 2026." Hook ultra-simple. Decideur unique. Freemium = zero friction. Le comparateur neutre de PDP est un argument de confiance fort ("on ne vous vend rien, on vous aide a choisir"). |
| **Faisabilite solo** | 4.5/5 | Questionnaire interactif + scoring + base de donnees des 101 PDP (features, prix, compatibilites) + generation de checklist PDF + alertes email. Stack Next.js + Supabase. La complexite est dans la constitution de la base de donnees des PDP (recherche manuelle initiale, puis mise a jour). MVP 3-4 semaines. |

**TOTAL : 17/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (outil direct TPE/AE, pas une PDP)
- Demarchage telephonique : NON (SEO + lead magnet diagnostic gratuit + groupes sociaux)
- Cycle de vente > 1 mois : NON (freemium, self-service, 5-9 EUR/mois)
- Marche < 500 cibles : NON (4+ millions de TPE/AE en France)
- Concurrent dominant : NON (les PDP sont les concurrents entre elles, pas un concurrent pour le diagnostic/comparaison. Aucun comparateur neutre dedie n'existe. Les comparatifs sont des articles de blog, pas des outils interactifs.)
- Aucun canal acquisition en ligne : NON (SEO massif a venir, groupes FB, lead magnet)
- Architecture complexe : NON (questionnaire + BDD PDP + scoring + PDF + emails)
- Responsabilite metier : NON (outil de diagnostic et de comparaison. Le SaaS ne produit pas de factures, ne fait pas de comptabilite, ne donne pas de conseil fiscal. Il aide a choisir une plateforme et a se preparer.)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE (avec reserves)** - Le marche est ENORME (4M+ entreprises) et la deadline est certaine (loi + decrets publies). Le positionnement en "comparateur/preparateur" est unique et evite la concurrence frontale avec les PDP. Le lead magnet (diagnostic gratuit) est un hook d'acquisition puissant. MAIS : la douleur est encore future (pas de perte d'argent MAINTENANT -- l'urgence monte en 2026). Le risque principal est le timing : lancer trop tot = pas assez d'urgence ressentie. Lancer trop tard = les TPE ont deja choisi. Le sweet spot est Q1-Q2 2026 pour le MVP. Autre reserve : la base des 101 PDP doit etre maintenue a jour (effort redactionnel, pas technique). Le modele d'affiliation PDP est un bonus significatif qui peut compenser un faible taux d'abonnement.

**Fenetre de tir optimale : Q1 2026 (lancement MVP) - Q3 2027 (fin de la vague).**

---

### Sources
- [Facturation electronique obligatoire - economie.gouv.fr](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)
- [Calendrier facture electronique 2026-2027 - Cegid](https://www.cegid.com/fr/facture-electronique-obligatoire/calendrier-facture-electronique/)
- [Facture electronique : c'est pour bientot - Service Public](https://entreprendre.service-public.gouv.fr/actualites/A15683)
- [101 plateformes agreees - impots.gouv.fr](https://www.economie.gouv.fr/cedef/les-fiches-pratiques/la-facturation-electronique-entre-entreprises)
- [TPE/PME facturation electronique 2026 - CCI Lyon](https://www.lyon-metropole.cci.fr/actualites/la-facture-electronique-bientot-une-obligation-pour-les-tpe-et-pme)
- [PLF 2026 durcit sanctions facturation electronique - DAF Mag](https://www.daf-mag.fr/reglementation-1243/fiscalite-2115/facturation-electronique-le-plf-2026-renforce-les-sanctions-pour-les-entreprises-22974)
- [Facturation electronique 2026-2027 guide PME TPE - Excelco](https://www.excelco.fr/post/facturation-electronique-2026-2027)
- [Facture electronique 2026 pour TPE/PME - EBP](https://www.ebp.com/reforme-facturation-electronique)
