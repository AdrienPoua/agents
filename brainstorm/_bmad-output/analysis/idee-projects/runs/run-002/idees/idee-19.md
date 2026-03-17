# Idee #19 : PermisBoard

## Tableau de suivi des autorisations, licences et echeances reglementaires pour TPE/PME

**Angle d'attaque** : 7 -- Patterns qui marchent ailleurs (US/UK)
**Date** : 2026-02-06
**Run** : 002

---

## Le pattern US/UK qui n'existe pas en France

### Harbor Compliance (US) -- le modele

Aux Etats-Unis, **Harbor Compliance** est un SaaS de suivi de licences et autorisations qui aide les entreprises a tracker, renouveler et gerer toutes leurs obligations administratives (state permits, business licenses, professional certifications, annual reports). Le produit est un **dashboard de suivi d'echeances** avec rappels automatiques et base de donnees des obligations par etat et par secteur.

- **Chiffre d'affaires estime** : 17M$+ ARR (source : Growjo, LinkedIn data)
- **Modele** : SaaS + services (recherche d'obligations, depot pour le client)
- **Clients** : dizaines de milliers de PME et nonprofit aux US
- **Pourquoi ca marche** : aux US, chaque etat a ses propres permits (business license, sales tax permit, professional license, etc.). Les entreprises oublient des renouvellements et prennent des amendes. Harbor centralise tout.

Au UK, des outils similaires existent pour le suivi des licences reglementees (alcool, food hygiene, fire safety certificates). Aucun equivalent generaliste n'existe en France.

### Pourquoi ca se transpose en France

En France, les TPE/PME (surtout celles avec un **local commercial** : commerces, restaurants, salons, garages, agences, cabinets...) doivent gerer un nombre considerable d'autorisations et echeances reglementaires, SANS AUCUN OUTIL de suivi :

| Type d'autorisation/echeance | Frequence | Qui est concerne | Sanction si oubli |
|---|---|---|---|
| **Permis d'exploitation** (debits de boissons) | Tous les 10 ans (formation 6h) | 200 000+ debits de boissons | Fermeture administrative |
| **Verification extincteurs** | Annuelle | Tout ERP (~1M de locaux commerciaux) | Amende + fermeture si controle |
| **Verification installations electriques** | Annuelle (ERP) ou tous les 5 ans (code du travail) | Tout local avec salaries | Amende 1 500-3 000 EUR |
| **Assurance RC Pro** | Annuelle (renouvellement tacite) | Toute entreprise | Exercice illegal sans couverture |
| **Assurance decennale** (BTP) | Annuelle | 550 000+ entreprises BTP | Jusqu'a 75 000 EUR amende + 6 mois prison |
| **Controle technique vehicules** | Tous les 2 ans | Toute entreprise avec vehicules | Amende 135 EUR + immobilisation |
| **DUERP** (document unique) | Annuel (< 11 salaries) ou a chaque modification | Toute entreprise avec salaries | 1 500 EUR amende |
| **Registre de securite ERP** | Continu, verification annuelle commissaire securite | Tout ERP categorie 1 a 5 | Fermeture administrative |
| **Commission de securite ERP** | Tous les 2, 3 ou 5 ans selon categorie | ERP categorie 1 a 4 | Fermeture si avis defavorable |
| **Certification/qualification professionnelle** (RGE, Qualibat, OPQIBI...) | Tous les 4 ans (RGE) | 70 000+ entreprises RGE | Perte du label, impossibilite facturer |
| **Kbis a jour** | A chaque changement (mais souvent demande par partenaires) | 4M+ entreprises | Blocage administratif |
| **Medecine du travail** | Visite periodique tous les 2 a 5 ans selon poste | Toute entreprise avec salaries | Amende 1 500 EUR |
| **Taxe fonciere / CFE** | Annuelle (decembre) | Tout local commercial | Majorations 10% + penalites |
| **Carte professionnelle** (immobilier, securite privee...) | Tous les 3 ans (immobilier) | 30 000 agents immo, 180 000 agents securite | Exercice illegal |
| **Agrements sanitaires** (alimentaire) | Variable, controles inopines | 500 000+ etablissements alimentaires | Fermeture + amende |

**Le probleme** : aucun outil SaaS en France ne propose un **dashboard centralise** de suivi de TOUTES ces echeances. Chaque entreprise gere ca avec :
- Des post-its
- Un Google Calendar eparpille
- La memoire du gerant
- Un classeur papier
- L'expert-comptable qui rappelle (parfois)

---

## La cible

### Qui paye ?

**Le gerant/proprietaire de TPE/PME avec local commercial en France.**

| Segment prioritaire | Nombre en France | Pourquoi eux en premier |
|---|---|---|
| **Commerces alimentaires** (restaurants, boulangeries, epiceries) | 300 000+ | Cumulent le plus d'obligations (hygiene + ERP + alcool + social) |
| **Artisans du BTP** | 550 000+ | Decennale + RGE + Qualibat + vehicules |
| **Commerces de detail** (boutiques, salons) | 400 000+ | ERP + securite + assurances |
| **Professions reglementees** (immobilier, securite) | 200 000+ | Cartes pro + formations obligatoires |
| **TOTAL segment primaire** | **~1 450 000 entreprises** | |

Le segment initial ideal est **l'artisan BTP** (550K cibles, assurance decennale = douleur aigue, renouvellement RGE = survie economique) ou le **commerce avec local** (ERP + multiples obligations).

---

## La douleur

**"Je dois gerer 8 a 15 echeances reglementaires differentes par an et je n'ai aucun outil pour les suivre. J'oublie, je prends des amendes, je perds mon label, et je decouvre le probleme quand il est trop tard."**

### Cout de l'oubli (cas reels)

| Oubli | Consequence | Cout |
|---|---|---|
| Oubli renouvellement assurance decennale | Exercice illegal, chantiers non assures | Jusqu'a 75 000 EUR + 6 mois prison |
| Oubli renouvellement RGE | Perte du label, clients perdent leurs aides MaPrimeRenov' | Perte de CA immediate (clients vont ailleurs) |
| Oubli verification extincteurs avant controle ERP | Non-conformite, potentielle fermeture | 1 500+ EUR amende + travaux urgents |
| Oubli renouvellement carte pro immobilier | Exercice illegal (delit) | 6 mois prison + 7 500 EUR |
| Oubli DUERP apres embauche | Amende si controle inspection du travail | 1 500 EUR (7 500 EUR personne morale) |

### Le temps perdu

Un gerant de TPE passe en moyenne **15-25h/an** a gerer ses echeances reglementaires (recherche, rappels, prise de RDV, classement des attestations). A 30 EUR/h de valeur, c'est **450-750 EUR/an** en temps perdu.

---

## Le declencheur d'achat

| Declencheur | Moment | Urgence |
|---|---|---|
| **Amende ou sanction recue pour echeance oubliee** | Le jour meme | MAXIMALE (panique, regret, action immediate) |
| **Controle inopine (DDPP, inspection du travail, commission securite)** | Le jour du controle | TRES HAUTE |
| **Renouvellement de label/certification (RGE, Qualibat)** | 3-6 mois avant expiration | HAUTE |
| **Premiere embauche** (decouverte DUERP, medecine du travail) | Mois de l'embauche | HAUTE |
| **Ouverture/reprise d'un commerce** | Phase de creation | HAUTE |
| **Changement de reglementation** | Publication au JO | MOYENNE |
| **Rappel de l'expert-comptable** | Rendez-vous annuel | MOYENNE |

**Le declencheur #1 est l'amende ou la sanction recue.** Le gerant decouvre qu'il a oublie quelque chose, il prend une amende, et il Google "suivi echeances reglementaires entreprise" ou "comment ne plus oublier mes obligations".

---

## Les concurrents probables

| Concurrent | Type | Forces | Faiblesses pour notre cas |
|---|---|---|---|
| **Expert-comptable** | Service humain | Relation de confiance, connait le dossier | Ne suit pas les echeances non-fiscales (ERP, securite, labels). Focus fiscal uniquement. |
| **Google Calendar** | Outil generique | Gratuit, familier | Pas de base de donnees des obligations, pas de rappels intelligents par secteur, pas de stockage documents |
| **Notion / Trello** | Outil generique | Flexible | Aucune connaissance metier, tout a configurer manuellement |
| **Logiciels metier** (Traqfood, PayFit...) | SaaS vertical | Excellents dans leur domaine | Chacun ne couvre QU'UN type d'echeance (HACCP ou paie). Pas de vision transversale. |
| **Pennylane / Indy** | Comptabilite | Dashboard entreprise | Focus comptable et fiscal. Pas d'echeances reglementaires non-fiscales. |
| **Aucun concurrent direct** | -- | -- | **Personne ne fait le suivi transversal des echeances reglementaires non-fiscales** |

### Pourquoi c'est un ocean bleu en France

Le marche est segmente par domaine : les outils HACCP gerent la tracabilite alimentaire, PayFit gere la paie, l'expert-comptable gere le fiscal. **Personne ne repond a la question : "Quelles sont TOUTES mes echeances reglementaires et lesquelles arrivent bientot ?"**

C'est exactement le pattern Harbor Compliance aux US, adapte au cadre reglementaire francais.

---

## La differenciation

**PermisBoard est le PREMIER dashboard de suivi d'echeances reglementaires transversal pour TPE/PME en France.**

1. **Base de donnees des obligations par secteur** : le gerant indique son activite (NAF), sa taille, son type de local, et PermisBoard lui genere automatiquement la liste de ses obligations avec les echeances.
2. **Rappels intelligents** : J-90, J-60, J-30, J-7 avant chaque echeance. Par email et/ou SMS.
3. **Stockage des attestations** : upload du certificat, de l'attestation, de la facture. Tout au meme endroit.
4. **Conformite globale** : un score de conformite sur l'ensemble des obligations (vert/orange/rouge).
5. **Pas un expert, un OUTIL** : PermisBoard ne dit pas "vous etes conforme", il dit "voici vos echeances, voici les prochaines, voici ce qui est en retard".

### Positionnement

```
Expert-comptable   = "Je gere votre fiscal"           (1 dimension)
Traqfood           = "Je gere votre HACCP"            (1 dimension)
PayFit             = "Je gere votre paie"             (1 dimension)
Google Calendar    = "Debrouillez-vous"                (0 dimension)

PermisBoard        = "Toutes vos echeances            (N dimensions,
                      reglementaires, un seul          rappels automatiques,
                      tableau de bord, 0 oubli."       19 EUR/mois)
```

---

## Fonctionnalites MVP

| Priorite | Fonctionnalite | Description | Effort |
|---|---|---|---|
| **P0** | Questionnaire de profil | Secteur NAF, type local, nb salaries, vehicules, labels -> generation auto des obligations | 1.5 sem |
| **P0** | Base des obligations | ~50-80 obligations reglementaires structurees par secteur avec echeances et sources legales | 3 sem |
| **P0** | Dashboard d'echeances | Vue calendrier + liste, code couleur (a jour / bientot / en retard / critique) | 1.5 sem |
| **P0** | Rappels email | Notifications automatiques J-90, J-60, J-30, J-7 avant echeance | 1 sem |
| **P1** | Stockage attestations | Upload PDF/photo des certificats et attestations, lies a chaque obligation | 1 sem |
| **P1** | Score de conformite | Indicateur global avec detail par categorie | 0.5 sem |
| **P1** | Fiche obligation | Pour chaque obligation : texte de loi, sanction, prestataire type, guide "comment renouveler" | 1 sem |
| **P2** | Multi-etablissement | Pour les gerants de 2+ locaux | 0.5 sem |
| **P2** | Export PDF rapport | Rapport annuel des conformites (utile pour banque/assureur/bailleur) | 0.5 sem |
| **P2** | Rappels SMS | En complement des emails | 0.5 sem |

**Total MVP (P0 + P1)** : ~9.5 semaines

---

## Business model

| Plan | Prix | Cible |
|---|---|---|
| **GRATUIT** | 0 EUR | Diagnostic initial : "Decouvrez vos 12 echeances reglementaires" (capture email, score approximatif) |
| **SOLO** | **12 EUR/mois** (ou 120 EUR/an) | Auto-entrepreneur, artisan sans salarie : 1 local, rappels email, 5 obligations suivies |
| **PRO** | **19 EUR/mois** (ou 190 EUR/an) | TPE 1-10 salaries : obligations illimitees, stockage attestations, score, fiche obligation |
| **MULTI** | **29 EUR/mois** (ou 290 EUR/an) | Multi-locaux (2-5 etablissements) : tout PRO + consolidation multi-sites |

### Justification du pricing

- **12-19 EUR/mois** = 1 a 2 cafes. Imbattable.
- **vs une amende de 1 500 EUR** pour DUERP oublie : ROI de +650% la premiere annee
- **vs 75 000 EUR d'amende** pour decennale oubliee (BTP) : ROI absurde
- **vs le temps perdu** (15-25h/an x 30 EUR = 450-750 EUR) : ROI de +100-200%

### Projections

| Mois | Clients | MRR | Hypothese |
|---|---|---|---|
| M3 | 30 | 570 EUR | Lancement, early adopters SEO |
| M6 | 150 | 2 850 EUR | SEO ranke, premiers articles positionnables |
| M9 | 400 | 7 600 EUR | Bouche-a-oreille + prescripteurs (experts-comptables) |
| M12 | 800 | 15 200 EUR | Maturite SEO + partenariats |

Objectif 2 500 EUR/mois atteint vers M5-M6.

---

## Acquisition

### Canal 1 : SEO (PRIORITE)

Requetes cibles :
- "echeances reglementaires entreprise" / "obligations legales TPE"
- "oubli renouvellement assurance decennale"
- "verification extincteurs obligatoire frequence"
- "controle ERP commission securite quand"
- "renouvellement RGE delai"
- "DUERP mise a jour obligatoire quand"
- "carte professionnelle immobilier renouvellement"

Chaque obligation = un article SEO qui finit par "Ne ratez plus jamais une echeance. Diagnostic gratuit en 3 min."

### Canal 2 : Experts-comptables (PRESCRIPTEURS)

Les experts-comptables recoivent regulierement des appels paniques de clients pour des echeances oubliees. PermisBoard est l'outil qu'ils peuvent recommander pour ne plus gerer ca eux-memes.

### Canal 3 : Federations et CCI

Les CMA (Chambres de Metiers et de l'Artisanat) accompagnent les artisans. PermisBoard peut etre recommande dans les parcours d'accompagnement.

### Lead magnet

> **"Combien d'echeances reglementaires oubliez-vous ? Faites le diagnostic gratuit en 3 minutes."**

---

## Technique

| Aspect | Complexite | Detail |
|---|---|---|
| Code / dev | 2/5 | Dashboard, rappels, CRUD. Stack standard. |
| Base reglementaire | 4/5 | Compiler 50-80 obligations par secteur depuis les textes officiels. C'est le vrai travail (et la barriere a l'entree). |
| Infrastructure | 1/5 | Vercel + Supabase. Zero complexite infra. |
| Maintenance | 2/5 | 5-10 changements reglementaires/an a integrer. |

### Stack

```
Frontend :    Next.js 14+ (App Router) + TypeScript + Tailwind
Backend :     Supabase (PostgreSQL + Auth + Storage + Edge Functions)
Hebergement : Vercel + Supabase
Emails :      Resend
Paiement :    Stripe
Cout :        ~50 EUR/mois
```

---

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Amendes reelles (1 500 a 75 000 EUR), perte de labels, fermeture administrative. Douleur forte mais diffuse (pas un moment unique de panique comme un controle DDPP). |
| **Facilite acquisition** | 4/5 | SEO excellent : des dizaines de requetes a fort intent ("renouvellement X obligatoire quand"). Prescripteurs naturels (experts-comptables, CCI). |
| **Simplicite vente** | 4/5 | "19 EUR/mois pour ne plus jamais oublier une echeance = 0 amende" est limpide. Le diagnostic gratuit est un funnel puissant. |
| **Faisabilite solo** | 4/5 | Tech simple (CRUD + rappels). Le challenge est la base reglementaire (~3 semaines de recherche), mais c'est aussi le moat. |
| **TOTAL** | **16/20** | |

---

## Verification criteres eliminatoires

| Critere | Passe ? | Commentaire |
|---|---|---|
| Marketplace two-sided | OUI | Outil SaaS pur |
| Demarchage tel permanent | OUI | SEO + prescripteurs |
| Cycle vente > 1 mois | OUI | Self-service, diagnostic gratuit, achat impulsif post-amende |
| Marche < 500 cibles France | OUI | 1 450 000+ entreprises avec local commercial |
| Concurrent dominant 100M$+ | OUI | Aucun concurrent sur le suivi transversal des echeances reglementaires |
| Aucun canal acquisition en ligne | OUI | SEO tres fort sur les requetes d'echeances |
| Architecture complexe pour MVP | OUI | CRUD standard |
| Responsabilite metier | OUI | Outil de rappel, pas de certification. "PermisBoard vous rappelle vos echeances, il ne garantit pas votre conformite." |

---

## VERDICT : RETENUE

**Pourquoi :**
- Pattern valide aux US (Harbor Compliance, 17M$+ ARR)
- Ocean bleu en France : aucun outil ne fait le suivi transversal
- Marche massif (1.4M+ entreprises avec local)
- Douleur reelle (amendes, pertes de labels, fermeture)
- Acquisition SEO naturelle (des dizaines de requetes sectorielles)
- Tech simple, faisable solo, budget < 100 EUR/mois
- Prix accessible (12-19 EUR/mois) avec ROI evident

**Risques identifies :**
- La base reglementaire initiale est un investissement temps (~3 semaines). Mais c'est la barriere a l'entree.
- La douleur est diffuse (pas un moment unique de panique). Il faut bien timer le SEO sur les moments de renouvellement.
- Un acteur comptabilite (Pennylane, Indy) pourrait ajouter cette feature. Mais leur focus est fiscal, pas reglementaire non-fiscal.
- Il faut demarrer par UN segment (ex: artisans BTP) pour concentrer la base reglementaire et le SEO, puis elargir.

---

## SOURCES

- [Harbor Compliance - License Manager Software](https://www.harborcompliance.com/license-manager-software)
- [Verification installations electriques - Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018532124/)
- [Assurance decennale obligatoire - Service-Public.fr](https://www.service-public.fr/professionnels-entreprises/vosdroits/F31425)
- [DUERP obligations - Code du travail Art. R.4121-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828)
- [ERP commission de securite - Ministere Interieur](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Documentation-technique/Prevention-des-risques-d-incendie)
- [Carte professionnelle immobilier - CCI](https://www.cci.fr/ressources/commerce-et-tourisme/reglementation/carte-professionnelle)
- [Permis d'exploitation debit de boissons - Service-Public.fr](https://entreprendre.service-public.gouv.fr/vosdroits/F22379)
- [Qualification RGE - France Renov](https://france-renov.gouv.fr/annuaires-professionnels/artisan-rge)

*Analyse generee le 2026-02-06 -- Run 002, Angle 7*
