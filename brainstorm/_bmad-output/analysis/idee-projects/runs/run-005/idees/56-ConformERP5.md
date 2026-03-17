# Idee #56 - ConformERP5

## Angle : DECLENCHEURS CALENDAIRES (Angle 8)

---

## Declencheur calendaire identifie
Le **decret du 1er decembre 2025** (publie au Journal Officiel le 14 decembre 2025) renforce massivement les obligations de controle des installations techniques des ERP de 5eme categorie (petits commerces, restaurants, cafes, salons de coiffure, cabinets liberaux, etc.). Entree en vigueur : **1er janvier 2026** (gaz : 1er juillet 2026). C'est une obligation NOUVELLE qui touche des centaines de milliers d'etablissements qui etaient jusqu'ici largement exemptes de verifications periodiques formalisees.

### Nouvelles obligations cles (decret 1er decembre 2025) :
- **Verification periodique des installations electriques** : obligatoire tous les **3 ans** maximum (avant : obligation vague "en cours d'exploitation")
- **Verification periodique des installations gaz** : NOUVELLE obligation pour les ERP cat.5 (avant : seuls les ERP cat.1 a 4 etaient concernes). Tous les **3 ans** maximum. Applicable au 1er juillet 2026.
- **Plan d'intervention obligatoire** : NOUVEAU - tous les ERP cat.5 doivent afficher un plan d'intervention (localisation extincteurs, issues de secours, coupures gaz/electricite). Applicable au 1er janvier 2026.
- **Tenue du registre de securite** : obligations renforcees de documentation de toutes les verifications, travaux et interventions

## Nom du projet
**ConformERP5** - Copilote de conformite technique pour les petits commerces et restaurants (ERP categorie 5)

## Cible
Exploitants d'ERP de 5eme categorie en France : commercants, restaurateurs, cafetiers, coiffeurs, estheticiennes, cabinets medicaux/paramedicaux, bureaux d'avocats/comptables recevant du public, boutiques, etc.

**Taille du marche :**
- **80% des ERP en France sont de categorie 5** (moins de 300 personnes) - source : Ministere du Developpement Durable
- Estimation : **600 000 a 800 000 ERP de categorie 5** en France (commerces de proximite, restaurants, salons, cabinets)
- Sous-cible prioritaire : les **independants et petites structures (1-10 personnes)** qui n'ont pas de service technique interne = 400 000 a 600 000 decideurs uniques
- Listes scrapables : annuaires CCI/CMA, pages jaunes par code NAF, registre du commerce (societe.com), listes des chambres de metiers

## Douleur
Les exploitants de petits ERP (commerces, restaurants, salons) doivent desormais gerer un empilement de **verifications techniques obligatoires** qu'ils ne connaissent pour la plupart meme pas :

1. **Verification electrique** : tous les 3 ans par un organisme agree (APAVE, SOCOTEC, DEKRA, Bureau Veritas)
2. **Verification gaz** : tous les 3 ans par un organisme agree (NOUVEAU pour cat.5 depuis juillet 2026)
3. **Verification extincteurs** : annuelle + revision decennale
4. **Verification alarme incendie (BAAS)** : controle periodique
5. **Verification eclairage de securite** : controle periodique
6. **Plan d'intervention** : a afficher (NOUVEAU au 1er janvier 2026)
7. **Registre de securite** : tenue obligatoire avec toutes les dates de verification, observations, travaux

Aujourd'hui, la GRANDE MAJORITE des ERP cat.5 gere ca avec **rien du tout** ou un classeur papier perdu dans un tiroir. Beaucoup ne savent meme pas que ces obligations existent. Les consequences :
- **Amende penale** : jusqu'a **45 000 EUR** (Article R123-52 du Code de la Construction et de l'Habitation) + 6 mois d'emprisonnement en cas de recidive
- **Fermeture administrative** : le maire ou le prefet peut ordonner la **fermeture de l'etablissement** en cas de non-conformite constatee lors d'un controle
- **Responsabilite penale aggravee en cas d'accident** : si un incendie survient dans un ERP non conforme, l'exploitant engage sa responsabilite penale personnelle (homicide involontaire aggrave, mise en danger deliberee d'autrui)
- **Controles en hausse** : la circulaire interministerielle du 25 juin 2025 annonce le **lancement de controles dans les ERP** avec une logique desormais "contraignante" (fini la tolerance)

## Declencheur d'achat
- **1er janvier 2026** : entree en vigueur du decret. Les exploitants vont progressivement decouvrir les nouvelles obligations via les medias professionnels, les CCI, les federations de commercants.
- **1er juillet 2026** : entree en vigueur de la verification gaz obligatoire. Deuxieme vague de sensibilisation.
- **Premieres campagnes de controles** : la circulaire du 25 juin 2025 annonce des controles. Les premiers PV de non-conformite vont creer un effet de panique dans le secteur.
- **Visite de l'organisme de verification** : quand l'electricien ou le verificateur vient pour le controle periodique, il genere un rapport d'observations. L'exploitant decouvre qu'il a plein de choses a corriger et qu'il doit tout documenter dans un registre.
- **Renouvellement de bail commercial** : certains bailleurs commencent a exiger la preuve de conformite technique de leurs locataires.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **Registresecurite.com** | Registre de securite dematerialise pour tous types d'ERP/ERT | Expert historique (depuis 2014), complet | Cible principalement les ERP de grandes categories (1-4), les gestionnaires de patrimoine et les grands groupes. Interface et pricing non adaptes aux TPE/independants. Pas de focus cat.5. |
| **Deemply** | Suivi des registres de securite dematerialise | Interface moderne, multi-sites | Positionne sur les ERP avec gestionnaire technique (groupes immobiliers, collectivites). Pas de simplification pour le petit commercant qui ne comprend pas le jargon technique. |
| **Classeur papier / rien** | La grande majorite des ERP cat.5 | Gratuit | Non conforme, risque de perte, pas d'alertes, pas de suivi dans le temps, pas de preuve en cas de controle |
| **Expert-comptable / CCI** | Accompagnement generaliste | Relation de confiance existante | Pas d'outil dedie, pas de suivi automatise des echeances, conseils ponctuels pas permanents |
| **ConformCHR (run 1)** | Conformite globale restaurants/bars | Large couverture (HACCP, hygiene, affichages, etc.) | Cible uniquement CHR, englobe trop de sujets (alimentaire, social, hygiene). ConformERP5 cible specifiquement les INSTALLATIONS TECHNIQUES (gaz, electricite, incendie) suite au nouveau decret, pour TOUS les types de commerces. |

**Analyse concurrentielle :** Il n'existe PAS de SaaS simple, abordable et dedie aux ERP de 5eme categorie pour le suivi de la conformite des installations techniques. Les solutions existantes (Registresecurite.com, Deemply) ciblent les grands ERP et les gestionnaires de patrimoine. Le petit commercant ou restaurateur qui doit se conformer au nouveau decret n'a aucun outil adapte a son niveau de comprehension et a son budget.

## Differentiation
1. **Focus ERP cat.5** : interface ultra-simplifiee pour des non-techniciens. Pas de jargon (on dit "verification de votre installation electrique", pas "controle de conformite NF C 15-100"). Questions simples a l'inscription : type d'activite, date d'ouverture, installations presentes (gaz oui/non, extincteurs combien, etc.).
2. **Calendrier de conformite auto-genere** : en 5 minutes, l'exploitant obtient TOUTES ses echeances de verification pour les 3 prochaines annees, avec la periodicite exacte de chaque controle.
3. **Alertes multi-niveaux** : notification 90/60/30/15/7 jours avant chaque echeance de verification, par email et SMS. "Votre verification electrique est due dans 30 jours - voici 3 organismes agrees pres de chez vous."
4. **Generateur de plan d'intervention** : saisie simplifiee (plan de l'etablissement, localisation des extincteurs, sorties de secours, coupures gaz/electricite) et generation automatique d'un plan PDF conforme a afficher. Repond directement a la NOUVELLE obligation du 1er janvier 2026.
5. **Registre de securite dematerialise** : saisie des dates de verification, telechargement des rapports de verification, historique complet. Le registre est pret en cas de controle.
6. **Annuaire d'organismes de verification agrees** : par departement, l'exploitant trouve directement APAVE, SOCOTEC, DEKRA, Bureau Veritas, ou les verificateurs locaux. Possibilite de demande de devis integree.
7. **Prix TPE** : 9,99-19,99 EUR/mois (vs 45 000 EUR d'amende ou fermeture administrative). Le prix d'un verre de vin par mois pour proteger son commerce.

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4.5/5 | Amende jusqu'a 45 000 EUR + fermeture administrative possible + responsabilite penale aggravee en cas d'accident. La circulaire du 25 juin 2025 annonce des controles "contraignants". Le decret du 1er dec 2025 est une obligation NOUVELLE : la plupart des ERP cat.5 ne sont PAS conformes et ne le savent meme pas. La douleur est latente mais le declencheur (premier controle, premier PV) la rend instantanement aigue. |
| **Facilite acquisition** | 3.5/5 | Listes scrapables (CCI, CMA, societe.com, pages jaunes par codes NAF). SEO sur "obligation ERP categorie 5 2026", "verification electrique commerce obligatoire", "plan intervention ERP 2026". Partenariats CCI/chambres de metiers qui vont relayer le nouveau decret. Le frein : public tres heterogene (restaurateur, coiffeur, avocat) = messaging a adapter par segment. |
| **Simplicite vente** | 4/5 | "Votre commerce est-il conforme au nouveau decret 2026 ? Verifiez en 5 minutes, 9.99 EUR/mois." Le declencheur calendaire (nouveau decret) cree l'urgence. Decideur unique (l'exploitant). Le frein : le mot "ERP" est inconnu du grand public (il faut dire "votre commerce" ou "votre restaurant"). |
| **Faisabilite solo** | 5/5 | Calendrier + alertes cron (email/SMS) + generateur de plan PDF (canvas/SVG simple) + stockage documents + annuaire statique verificateurs. Stack Next.js + Supabase + SendGrid/Twilio. MVP 3-4 semaines. Le generateur de plan d'intervention est le feature le plus complexe mais reste un formulaire + rendu PDF. |

**TOTAL : 17/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (outil direct pour l'exploitant)
- Demarchage telephonique : NON (SEO + partenariats CCI/CMA + cold email cible)
- Cycle de vente > 1 mois : NON (urgence reglementaire, self-service, prix faible)
- Marche < 500 cibles : NON (600 000 a 800 000 ERP cat.5 en France)
- Concurrent dominant : NON (aucun SaaS dedie aux ERP cat.5 pour la conformite technique)
- Aucun canal acquisition en ligne : NON (listes scrapables CCI/CMA + SEO + partenariats)
- Architecture complexe : NON (calendrier + alertes + PDF + stockage)
- Responsabilite metier : NON (outil de rappel, planification et documentation. Les periodicites de verification sont fixees par le decret public. Le plan d'intervention est genere a partir des informations saisies par l'exploitant, pas interprete par le logiciel. Pas de conseil juridique ou technique.)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE** - Le decret du 1er decembre 2025 est un declencheur calendaire ideal : des obligations NOUVELLES (verification gaz, plan d'intervention) entrent en vigueur au 1er janvier et 1er juillet 2026 pour 600K+ etablissements qui ne sont pour la plupart PAS conformes. La circulaire du 25 juin 2025 annonce la fin de la tolerance et le debut des controles "contraignants". Les sanctions sont lourdes (45 000 EUR + fermeture). Les solutions existantes (Registresecurite.com, Deemply) ciblent les grands ERP et les gestionnaires de patrimoine, pas le petit commercant. Le MVP est simple (3-4 semaines), le prix est derisoire (10-20 EUR/mois vs 45 000 EUR d'amende), et le timing est PARFAIT : le decret vient d'entrer en vigueur, les commercants vont commencer a chercher des solutions dans les prochains mois.

Le risque principal : les ERP cat.5 ont historiquement ete tres peu controles (d'ou le non-respect generalise). Si les controles annonces ne se materialisent pas, la douleur reste theorique. La reponse : la circulaire du 25 juin 2025 est un signal fort du gouvernement, et les premiers PV creeront un effet domino dans les federations de commercants.

---

### Sources
- [Decret 1er decembre 2025 - ERP 5eme categorie controles installations techniques](https://batela-solutions.com/fr/article-blog/erp-de-5e-categorie-nouvelles-obligations-de-controle-des-installations-techniques-a-compter-de-2026)
- [ERP cat.5 controle installations gaz obligatoire - Le Batiment Performant](https://lebatimentperformant.fr/actualites/erp-de-5e-categorie-le-controle-des-installations-gaz-desormais-obligatoire/1/6830)
- [ERP 5eme categorie renforcement controles electriques et gaz - Espace Droit Prevention](https://www.espace-droit-prevention.com/actualites/textes-nouveaux/erp-5eme-categorie-renforcement-des-modalites-de-controle-des-installations-techniques-electriques)
- [Normes et obligations ERP categorie 5 - AkorD](https://www.akord-securite.fr/erp-5-normes/)
- [Plan d'intervention obligatoire ERP cat.5 au 1er janvier 2026 - AF SST 56](https://www.afsst56.fr/erp-de-5e-categorie-une-obligation-de-plan-dintervention-au-1er-janvier-2026/)
- [Circulaire interministerielle 25 juin 2025 - controles ERP - Maire-Info](https://www.maire-info.com/handicap/mise-en-accessibilite-des-erp-le-temps-de-la-sanction-est-il-venu--article-29851)
- [Regles de securite incendie ERP - Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F31684)
- [Registresecurite.com - solution historique](https://www.appvizer.fr/operations/gestion-maintenance/registresecuritecom)
- [Deemply - dematerialisation registres securite](https://deemply.com/en/)
- [Reglementation technique construction - ce qui change au 1er janvier 2026 - Le Moniteur](https://www.lemoniteur.fr/reglementation/reglementation-technique-et-droit-de-la-construction-ce-qui-a-change-au-1er-janvier-2026.RH3CWT7QPNBE3JRIT5FK6Z2RFM.html)
