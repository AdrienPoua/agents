# Fiche Enrichie Phase 2 - #22 CertiControl

**Projet :** CertiControl - Conformite centres de controle technique automobile
**Score revise :** 14/20 (survit avec reserve)
**Date :** 2026-02-06

---

## 1. CONTEXTE METIER

### C'est quoi ce metier/secteur ?

Le **controle technique automobile** est une obligation legale en France : tout vehicule de plus de 4 ans doit passer un controle technique periodique (tous les 2 ans) dans un centre agree par la prefecture. La France compte **6 790 centres agrees** (2024), operes par :

- **Reseaux franchises** (~82%) : Dekra, Securitest (groupe SGS), Autovision, Autosur, etc. Ces reseaux fournissent a leurs affilies un cadre qualite, une veille reglementaire et des outils de conformite.
- **Centres independants** (~18%) : **1 236 centres** non affilies, souvent des TPE de 1 a 5 employes, CA moyen de 150 000 a 300 000 EUR/an.

Les independants sont parfois regroupes en cooperatives (Auto'Nome ~225 centres VL + 30 PL, A-3S, Auto Bilan System) mais ces cooperatives ne fournissent **pas** d'outil de conformite reglementaire structure.

Le **decideur cle** est le **titulaire de l'agrement prefectoral**. C'est une personne physique, personnellement responsable devant la prefecture. Son agrement est sa licence pour exercer.

### Pourquoi il y a un probleme maintenant ?

Trois facteurs convergent en 2026 :

1. **Arrete du 8 decembre 2025** (JORFTEXT000053000977) : entree en vigueur au 01/01/2026 avec de nouvelles obligations (verification des rappels vehicules, transmission des coordonnees proprietaires a l'UTAC, cadre disciplinaire renforce, delai minimum 1 minute entre validation et remise).

2. **Intensification des controles prefectoraux** : en Pays de la Loire seule, 60 sanctions prononcees en 3 ans (2022-2025), dont 21 suspensions immediates, 22 controleurs suspendus (jusqu'a 10 mois), 9 retraits definitifs d'agrement, 9 centres fermes (jusqu'a 16 mois). En Centre-Val de Loire en 2024 : 17 avertissements + 10 suspensions.

3. **Controle technique moto** (depuis avril 2024) : 930 375 controles realises en 2024, 1,2 million en 2025. Les centres qui ajoutent cette activite ont de nouvelles obligations reglementaires specifiques a gerer (arrete du 19 decembre 2025).

### Contexte reglementaire

| Texte | Contenu | Impact |
|---|---|---|
| Code de la route R323-6 a R323-21 | Cadre general agrement, suspension, retrait | Fondement juridique des sanctions |
| Arrete 18 juin 1991 (modifie) | Organisation du controle technique VL | Obligations operationnelles du centre |
| Arrete 8 decembre 2025 | Nouvelles obligations 01/01/2026 | Rappels vehicules, transmission donnees, cadre disciplinaire |
| Arrete 19 decembre 2025 | Controle technique deux-roues | Nouvelles obligations categorie L |
| Cahier des charges OTC/UTAC | Specifications techniques logicielles | Conformite du systeme informatique |

---

## 2. LA DOULEUR (precis et chiffre)

### Qui souffre exactement ?

**Profil type :** Titulaire d'agrement d'un centre de controle technique independant.
- Homme, 40-55 ans, ancien mecanicien ou controleur devenu patron
- Gere 1 a 3 centres, 1 a 5 employes
- CA : 150 000-300 000 EUR/an, marge nette ~15-20%
- Pas de service juridique, pas de responsable qualite dedie
- Utilise ProTechnologies (CTonline/AutoSoft Explorer) pour la production des controles

**Nombre :** 1 236 centres independants + ~300-400 petits reseaux (2-3 centres) = **~1 500 decideurs**.

### De quoi souffrent-ils ?

Le titulaire d'agrement doit gerer **simultanement** :

| Obligation | Frequence | Risque si oubli |
|---|---|---|
| Renouvellement agrement controleurs | Tous les 5 ans par controleur | Controleur non habilite = controles invalides |
| Etalonnage equipements de mesure | Annuel (analyseur gaz, opacimetre, freinometre...) | Defaut metrologique = sanctions |
| Audit periodique (organisme agree) | Minimum 1 fois/an | Non-conformites = avertissement a suspension |
| Transmission donnees OTC | Continue | Defaut = sanction administrative |
| Mise a jour logiciel inspection | A chaque evolution OTC | Non-conformite protocole |
| Formation continue controleurs | Periodique | Controleur non qualifie |
| Affichage reglementaire | Permanent | Infraction constatee lors d'audit |
| Verification rappels vehicules (NOUVEAU 2026) | A chaque controle | Amende 1 500 EUR par infraction |
| Collecte/transmission coordonnees (NOUVEAU 2026) | A chaque controle | Amende 1 500 EUR par infraction |

**Aujourd'hui, tout cela est gere avec :** des classeurs papier, des tableurs Excel, la memoire du patron, et des post-it sur le mur.

### Combien ca coute ?

| Type de cout | Montant |
|---|---|
| Amende par infraction | 1 500 EUR (3 000 EUR en recidive) |
| Suspension d'agrement | 1 semaine a 16 mois de fermeture = 3 000 a 400 000 EUR de CA perdu |
| Retrait definitif d'agrement | **5 ans d'interdiction** de redemander = mort economique |
| Heures perdues en preparation d'audit | 10 a 20h/an a rassembler les preuves manuellement |
| Stress permanent | Non quantifiable mais reel : le titulaire est personnellement responsable |

**Calcul du risque :** En Pays de la Loire, sur 3 ans, 60 sanctions pour ~500-600 centres dans la region = **~10% des centres sanctionnes sur 3 ans**, soit ~3-4% par an. Ce n'est pas un risque theorique.

---

## 3. LA SOLUTION (maquette textuelle)

### Ce que fait l'application

```
+------------------------------------------------------------------+
|                        CERTICONTROL                               |
|                  Dashboard du titulaire                           |
+------------------------------------------------------------------+
|                                                                    |
|  SCORE DE CONFORMITE : 78/100          [!] 3 alertes actives      |
|  ================================                                  |
|                                                                    |
|  +------------------+  +------------------+  +------------------+ |
|  | EQUIPEMENTS      |  | CONTROLEURS      |  | REGLEMENTAIRE    | |
|  | 6/8 conformes    |  | 3/3 a jour       |  | 12/15 obligations| |
|  | [!] Opacimetre   |  | OK               |  | [!] Affichage    | |
|  |   etalonnage J-12|  |                  |  | [!] Rappels 2026 | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                    |
|  PROCHAIN AUDIT : dans 47 jours                                   |
|  Dossier audit : 85% pret  [Generer PDF]                         |
|                                                                    |
|  TIMELINE ECHEANCES                                                |
|  -----+--------+--------+--------+--------+------->              |
|       J-12     J-30     J-47     J-90     J-180                   |
|    Opacimetre  Form.   Audit   Agrement  Etalon.                 |
|    etalonnage  J.Dupont annuel  P.Martin  freino.                |
|                                                                    |
|  VEILLE REGLEMENTAIRE                                             |
|  [NEW] Arrete 8 dec 2025 : obligations rappels vehicules         |
|        -> Impact sur votre centre : 2 actions requises            |
+------------------------------------------------------------------+
```

### Fonctionnalites MVP (tableau P0/P1/P2)

| Priorite | Fonctionnalite | Description | Effort |
|---|---|---|---|
| **P0** | Checklist de conformite | Liste interactive de toutes les obligations reglementaires du centre (equipements, affichage, formation, transmission OTC, registres). Cochable avec preuve jointe. | 2 sem |
| **P0** | Alertes echeances | Emails/SMS automatiques avant chaque echeance critique (etalonnage, renouvellement agrement, audit). Configurable J-7, J-30, J-90. | 1 sem |
| **P0** | Tableau de bord score | Vue synthetique "score de conformite" avec code couleur (vert/orange/rouge) par categorie. | 1 sem |
| **P1** | Generateur dossier audit | Export PDF structure avec toutes les preuves de conformite organisees par rubrique, pret a presenter a l'auditeur. | 1.5 sem |
| **P1** | Fiche controleur | Suivi des agrements, formations, qualifications de chaque controleur du centre. Alertes renouvellement. | 1 sem |
| **P1** | Fiche equipement | Suivi metrologique de chaque equipement (freinometre, analyseur gaz, etc.). Dates etalonnage, certificats. | 1 sem |
| **P2** | Veille reglementaire | Notifications quand un nouveau texte impacte le centre, avec traduction en actions concretes. | Continu |
| **P2** | Multi-centres | Gestion de 2-3 centres depuis un seul compte (pour les petits reseaux). | 0.5 sem |
| **P2** | Module moto/PL | Obligations specifiques aux centres ayant l'agrement categorie L ou PL. | 1 sem |

**Total MVP (P0) : 4 semaines.** Avec P1 : 7-8 semaines.

### Parcours utilisateur en 5 etapes

1. **Inscription** : Le titulaire cree son compte, renseigne son numero d'agrement, le nombre de controleurs, et les categories de vehicules controles (VL, PL, moto).
2. **Configuration initiale** : CertiControl genere automatiquement la checklist personnalisee (obligations VL + moto si applicable). Le titulaire remplit l'etat actuel (dates d'etalonnage, agrements controleurs, etc.) = 30 minutes.
3. **Utilisation quotidienne** : Le titulaire recoit des alertes email quand une echeance approche. Il coche les obligations remplies et uploade les justificatifs (certificat etalonnage, attestation formation...).
4. **Preparation audit** : 30 jours avant l'audit annuel, CertiControl genere le dossier PDF complet. Le titulaire voit les manques (rouge) et a le temps de les corriger.
5. **Veille continue** : Quand un nouveau texte reglementaire sort, CertiControl notifie le titulaire et traduit l'impact en actions concretes ("Nouveau : vous devez verifier les rappels constructeur a chaque controle. Voici comment.").

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment | Urgence |
|---|---|---|
| **Arrete 8 decembre 2025** : nouvelles obligations au 01/01/2026 | Maintenant (deja en vigueur) | MAXIMALE - le titulaire decouvre des obligations qu'il ne gere pas encore |
| **Audit annuel qui approche** | 1-2 mois avant l'audit | HAUTE - panique de preparation, peur de la non-conformite |
| **Sanction d'un confrere** | A tout moment (quand ca fait le buzz local) | HAUTE - "et si c'etait moi ?" |
| **Controle inopin de la prefecture/DREAL** | Imprevisible | MAXIMALE - trop tard pour cet audit, mais pousse a s'equiper pour le suivant |
| **Embauche d'un nouveau controleur** | Ponctuel | MOYENNE - obligations de formation/qualification a gerer |
| **Ajout activite moto/PL** | Ponctuel | HAUTE - nouvelles obligations specifiques a decouvrir |
| **Renouvellement agrement controleur** | Tous les 5 ans | HAUTE - oubli = controleur non habilite = tous ses controles invalides |

---

## 5. ACQUISITION CLIENT

### Comment trouver les clients ?

| Canal | Detail | Cout | Potentiel |
|---|---|---|---|
| **Base publique data.gouv.fr** | Annuaire des 6 790 centres CT avec adresses, mis a jour le 27/01/2026. Filtrer les independants (hors reseaux). | Gratuit | Mailing direct aux 1 236 cibles |
| **SEO** | Mots-cles : "obligations centre controle technique 2026", "audit controle technique preparation", "sanction agrement controle technique", "rappels vehicules obligation 2026" | ~0 EUR (temps) | Volume faible mais intention forte |
| **Cooperatives d'independants** | Partenariat avec Auto'Nome (225 centres VL + 30 PL), A-3S, Auto Bilan System. Proposer un tarif groupe. | 0 EUR (win-win) | 300-400 centres d'un coup |
| **Salons professionnels** | Equip'Auto (Paris), salons regionaux CT | 500-2000 EUR | Contact direct, demo en live |
| **Groupes Facebook/forums** | Groupes de controleurs techniques independants | Gratuit | Bouche-a-oreille, preuve sociale |
| **Prescripteurs** | Organismes d'audit (Bureau Veritas, Dekra en tant qu'auditeur), formateurs CT, cabinets comptables de TPE | 0 EUR | Recommandation a forte credibilite |
| **ProTechnologies** | Partenariat ou integration avec CTonline (62% des independants). Si ProTechnologies ne veut pas = menace, si accepte = distribution massive. | A negocier | Canal decisif |

### Message d'accroche

> **"60 sanctions en 3 ans dans une seule region. Votre agrement, c'est votre gagne-pain. CertiControl vous previent AVANT que l'auditeur ne trouve un probleme."**

### Lead magnet possible

- **Audit flash gratuit** : "Repondez a 10 questions en 3 minutes, recevez votre score de conformite par email." Capture email + demontre la valeur instantanement.
- **Guide PDF** : "Les 7 nouvelles obligations du 1er janvier 2026 pour votre centre CT - checklist gratuite"
- **Simulateur de risque** : "Calculez le cout d'une suspension d'agrement pour votre centre" (CA/jour x duree moyenne de suspension = montant choc)

---

## 6. BUSINESS MODEL

### Pricing par segment

| Plan | Cible | Prix | Inclus |
|---|---|---|---|
| **Essentiel** | 1 centre, 1-2 controleurs | **49 EUR/mois** (588 EUR/an) | Checklist conformite, alertes echeances, tableau de bord, support email |
| **Pro** | 1 centre, 3-5 controleurs | **79 EUR/mois** (948 EUR/an) | Essentiel + generateur dossier audit PDF, fiches controleurs, fiches equipements, veille reglementaire |
| **Multi-centres** | 2-3 centres | **129 EUR/mois** (1 548 EUR/an) | Pro + gestion multi-centres, tableau de bord consolide |
| **Annuel** | Tous | **-20%** | 470 / 758 / 1 032 EUR/an |

### Comparaison avec l'alternative actuelle

| Critere | Statu quo (Excel + papier) | CertiControl |
|---|---|---|
| Cout direct | 0 EUR | 49-79 EUR/mois |
| Temps preparation audit | 10-20h/an | 1-2h/an (dossier auto-genere) |
| Risque d'oubli echeance | Eleve (memoire humaine) | Quasi nul (alertes automatiques) |
| Veille reglementaire | Aucune (decouvre au moment du controle) | Continue (notifications) |
| Cout d'une sanction evitee | 1 500-400 000 EUR | - |

### ROI calcule pour le client

**Scenario conservateur :**
- Cout CertiControl : 588 EUR/an (plan Essentiel)
- Temps economise : 15h/an x 40 EUR/h (cout horaire patron TPE) = 600 EUR
- **ROI temps seul : positif des la 1ere annee**

**Scenario avec evitement de sanction :**
- 1 amende evitee (1 500 EUR) = ROI de **+155%** sur un an
- 1 semaine de suspension evitee (CA perdu ~3 000-6 000 EUR) = ROI de **+410 a 920%**

**Argument massue :** "49 EUR/mois, c'est 1.6 EUR par jour. Une seule amende evitee rembourse 2.5 ans d'abonnement."

---

## 7. CONCURRENCE

| Concurrent | Type | Pricing estime | Ce qu'il fait | Ce qu'il ne fait PAS |
|---|---|---|---|---|
| **ProTechnologies (CTonline + AutoSoft)** | Logiciel de production CT | Non public (estimee 80-150 EUR/mois) | Saisie des controles techniques, planning, facturation, CRM client | Conformite reglementaire globale du centre (hors production) |
| **CTonline Qualite** | Module qualite ProTechnologies | Inclus dans CTonline (?) | Suivi equipements, rappels echeances basiques, dashboard SMQ | Veille reglementaire proactive, dossier audit complet, checklist conformite exhaustive, module obligations 2026 |
| **Conforlog (NathysLog)** | SaaS conformite generique | A partir de 55 EUR HT/mois | Suivi obligations multi-secteurs (BTP, logistique, hotellerie), alertes echeances, stockage documents | Specifique controle technique : ne connait pas les obligations CT, l'arrete du 8 dec 2025, les categories d'agrement, le protocole OTC |
| **Reseaux (Dekra, Securitest, Autovision)** | Support interne reseau | Inclus dans la franchise | Cadre qualite complet pour leurs affilies | Non accessible aux independants |
| **Excel / papier** | Statu quo | 0 EUR | Flexible, familier | Aucune alerte, aucune veille, aucune generation de dossier, risque d'oubli maximal |

### Angle differenciateur (1 phrase)

> **"CertiControl est le SEUL outil SaaS concu specifiquement pour la conformite reglementaire des centres de controle technique independants -- la ou CTonline gere vos controles et ou Conforlog ne connait pas votre metier."**

### Menace principale

**ProTechnologies** (62% du marche independant) pourrait ajouter un module conformite avance a CTonline Qualite. CTonline Qualite existe deja et fait du suivi equipement/echeances basique. Le risque de commoditisation est **reel mais pas immediat** :
- ProTechnologies est un editeur de logiciel de production, pas de conformite reglementaire
- Leur roadmap semble orientee vers les fonctionnalites de production (reservation en ligne, SMS, planning multi-centres)
- Ajouter une veille reglementaire + checklist exhaustive + dossier audit est un changement de metier pour eux
- **Strategie defensive** : se positionner comme complementaire a CTonline (pas concurrent), voire proposer une integration

---

## 8. TECHNIQUE

### Complexite : 2/5

Le MVP est un CRUD classique avec un systeme d'alertes temporelles. Pas d'IA, pas d'API externe complexe, pas de calcul temps reel.

### Temps MVP estime

| Phase | Contenu | Duree |
|---|---|---|
| P0 - MVP | Checklist conformite + alertes email + dashboard score | 4 semaines |
| P1 - Enrichissement | Generateur dossier PDF + fiches controleurs/equipements | 3-4 semaines |
| P2 - Differenciation | Veille reglementaire + multi-centres + modules moto/PL | Continu |
| **Total lancement** | **P0 + P1** | **7-8 semaines** |

### Stack requise

| Composant | Technologie | Cout/mois |
|---|---|---|
| Frontend | Next.js + Tailwind + Shadcn/ui | 0 EUR |
| Backend/BDD | Supabase (auth, postgres, storage, cron) | 25 EUR |
| Hosting | Vercel | 20 EUR |
| Emails transactionnels | Resend | 0-20 EUR |
| SMS (alertes critiques) | Twilio ou OVH SMS | 10-30 EUR |
| PDF generation | @react-pdf/renderer ou Puppeteer | 0 EUR |
| Paiement | Stripe | 1.4% + 0.25 EUR/tx |
| **Total infra** | | **~55-95 EUR/mois** |

Tout est dans la stack maitrisee par Adrien (Next.js, React, Supabase, Vercel).

### Architecture simplifiee

```
[Next.js App]  -->  [Supabase]
     |                  |
     |-- Pages          |-- Auth (inscription titulaire)
     |-- API Routes     |-- Postgres (checklists, echeances, controleurs, equipements)
     |-- PDF Gen        |-- Storage (certificats, justificatifs uploades)
     |                  |-- Cron (declencheur alertes quotidien)
     |
     +-- [Resend] --> Emails alertes
     +-- [Twilio] --> SMS alertes critiques
     +-- [Stripe] --> Paiement abonnement
```

### Points impressionnants pour CV

| Point | Pourquoi c'est interessant |
|---|---|
| **SaaS B2B vertical (niche reglementaire)** | Montre la capacite a comprendre un domaine metier complexe et a le traduire en produit |
| **Systeme d'alertes temporelles multi-canaux** | Cron jobs Supabase + email + SMS avec logique d'escalade |
| **Generation PDF dynamique** | Dossier d'audit structure genere a partir des donnees du centre |
| **Data pipeline open data** | Import et enrichissement depuis data.gouv.fr (annuaire centres CT) |
| **Architecture multi-tenant** | Un seul deploiement, multiples centres isoles (RLS Supabase) |
| **Domain-driven design** | Modelisation d'un domaine reglementaire complexe avec des entites metier (agrement, controleur, equipement, echeance) |

---

## SYNTHESE DECISION

| Critere | Evaluation |
|---|---|
| **Douleur** | FORTE -- risque personnel existentiel (perte agrement = mort economique) |
| **Timing** | EXCELLENT -- nouvelles obligations 01/01/2026 en vigueur depuis 37 jours |
| **Concurrence** | OCEAN BLEU -- aucun SaaS dedie conformite CT independants |
| **Marche** | TRES PETIT -- 1 236 cibles primaires, TAM 1.5M EUR max |
| **Viabilite objectif** | POSSIBLE MAIS SERRE -- 50 clients x 49 EUR = 2 450 EUR/mois = 4% penetration |
| **Risque #1** | ProTechnologies ajoute un module conformite a CTonline |
| **Risque #2** | Willingness-to-pay : TPE a budget logiciel limite |
| **Expansion** | PL (~600 centres) + moto (centres existants) + cooperatives |

### Verdict

**Projet viable pour atteindre l'objectif de 2 500-3 000 EUR/mois**, a condition de :
1. Capturer 4-5% du marche independant (50-60 clients a 49 EUR/mois)
2. Se positionner comme **complementaire** a ProTechnologies, pas concurrent
3. Verrouiller les cooperatives (Auto'Nome, A-3S) comme canal d'acquisition
4. Planifier l'expansion PL + moto des le MVP

**Reserve majeure :** le plafond de marche est bas. A 20% de penetration (250 clients x 65 EUR/mois moyen), le MRR max realiste est de ~16 000 EUR/mois. C'est un micro-SaaS rentable, pas une startup scalable.
