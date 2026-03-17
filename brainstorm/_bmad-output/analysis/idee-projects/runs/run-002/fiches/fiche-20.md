# Fiche Enrichie Phase 2 -- #20 CopropCheck

**Pilotage DPE collectif + PPPT pour syndics benevoles et petites coproprietes**

| Metadata | Valeur |
|---|---|
| Run | 002 |
| Score filtre | 17/20 |
| Date | 2026-02-06 |
| Statut | SURVIT -- Phase 2 |

---

## 1. CONTEXTE METIER

### C'est quoi ce metier/secteur ?

La **copropriete** en France concerne **600 000 immeubles immatricules** (RNIC 2024). Chaque copropriete est administree par un **syndic** -- soit un professionnel (cabinet), soit un **benevole** (coproprietaire elu en AG). Le syndic benevole est un particulier sans formation juridique ni outil professionnel, qui gere l'immeuble gratuitement ou contre une indemnite symbolique.

**52 839 syndics benevoles** (ANAH 2024) gerent environ **90 000 coproprietes** en France. Ils ont les **memes obligations legales** qu'un syndic professionnel, mais aucun moyen comparable pour les remplir.

### Pourquoi il y a un probleme MAINTENANT ?

Deux deadlines reglementaires majeures viennent de tomber pour les petites coproprietes (<50 lots = **89% du parc**, soit ~534 000 coproprietes) :

| Obligation | Deadline | Statut au 06/02/2026 |
|---|---|---|
| **PPPT** (Plan Pluriannuel de Travaux) -- coproprietes <50 lots, >15 ans | 01/01/2025 | **EN RETARD DE 13 MOIS** |
| **DPE collectif** -- coproprietes <50 lots | 01/01/2026 | **EN RETARD DE 37 JOURS** |

La majorite des syndics benevoles n'ont rien fait. Ils decouvrent ces obligations au moment de preparer leur AG annuelle (pic mars-juin 2026). L'urgence est maximale.

### Contexte reglementaire

- **Loi Climat et Resilience** du 22 aout 2021, articles 158 (DPE collectif) et 171 (PPPT).
- **Decret n.2024-34** : calendrier progressif DPE collectif (>200 lots en 2024, 50-200 en 2025, <50 en 2026).
- **Code de la construction et de l'habitation**, article L.126-26 (DPE collectif) et articles L.126-6 a L.126-11 (PPPT).
- **Methode 3CL-DPE** obligatoire depuis l'arrete du 27/03/2025 (remplacement de la methode facture).
- **Fonds de travaux** obligatoire : minimum 2,5% du budget previsionnel annuel (loi ALUR + loi Climat).
- Pas de sanction penale directe MAIS : perte subventions MaPrimeRenov'/CEE, mise en demeure prefectorale, realisation d'office aux frais du syndicat, responsabilite civile personnelle du syndic.

---

## 2. LA DOULEUR (precis et chiffre)

### Qui souffre exactement ?

**Profil primaire : le syndic benevole de petite copropriete**

| Donnee | Chiffre | Source |
|---|---|---|
| Syndics benevoles en France | 52 839 | ANAH 2024 |
| Coproprietes gerees par des benevoles | ~90 000 | ANAH 2024 |
| Dont <50 lots (concernees par les deadlines) | ~80 000 (89%) | Calcul depuis RNIC |
| Age moyen du syndic benevole | 55-65 ans | Estimation secteur |
| Formation juridique/immo | Aucune | Par definition |
| Outils numeriques utilises | Excel, Word, emails | Pas de logiciel dedie |

**Profil type** : Marie, 52 ans, cadre dans l'industrie, elue syndic benevole d'une copropriete de 18 lots en Ile-de-France. Elle gere la copro "comme elle peut" depuis 3 ans. Elle vient de decouvrir que le DPE collectif est obligatoire depuis le 1er janvier et que le PPPT aurait du etre fait l'an dernier.

**Profil secondaire** : petit syndic professionnel (<100 lots, ~2 500-3 000 cabinets) sous-equipe par rapport aux grands groupes.

### De quoi souffrent-ils concretement ?

1. **Incomprehension reglementaire** : "C'est quoi un DPE collectif ? C'est different du DPE de mon appartement ? Et le PPPT, c'est quoi ? Le PPT et le PPPT c'est la meme chose ?"
2. **Pas de processus clair** : "Par ou je commence ? Qu'est-ce que je dois faire en premier ? Il faut un vote en AG ?"
3. **Pas de modeles** : "Comment je redige la resolution AG pour voter le budget du DPE ? Comment je compare les devis de diagnostiqueurs ?"
4. **Peur de la responsabilite** : "Si je ne fais rien, est-ce que je risque quelque chose personnellement ?"
5. **Isolement** : "Je suis tout seul, je n'ai personne a qui demander, les syndics pros ne me repondent pas."

### Combien ca coute ?

| Impact | Cout |
|---|---|
| Temps perdu (recherches, forums, comprehension) | **20 a 40h/an** x 25 EUR/h (valeur du temps) = **500 a 1 000 EUR perdus** |
| Prix DPE collectif (<50 lots) | **1 500 a 4 000 EUR** selon nb lots et complexite |
| Prix elaboration PPPT par un professionnel | **3 000 a 8 000 EUR** |
| Surpaiement diagnostiqueur (pas de benchmark) | **+20 a 40%** sans grille de comparaison (estimation) |
| Perte subventions MaPrimeRenov'/CEE si non-conforme | **10 000 a 50 000 EUR** selon travaux prevus |
| Risque responsabilite civile du syndic | Revocation + action en justice par coproprietaires mecontents |
| Risque mise en demeure prefectorale | Realisation d'office aux frais du syndicat (cout x2-3) |

**Synthese** : un syndic benevole qui ne fait rien risque de faire perdre des dizaines de milliers d'euros de subventions a sa copropriete, engage sa responsabilite personnelle, et gaspille 20-40h de son temps libre a chercher des reponses sur internet.

---

## 3. LA SOLUTION (maquette textuelle)

### Ce que fait l'application

```
+------------------------------------------------------------------+
|                     COPROPCHECK                                   |
|           "Votre copro est en regle en 3 clics"                   |
+------------------------------------------------------------------+
|                                                                    |
|  [1. DIAGNOSTIC]     [2. ROADMAP]     [3. DOCUMENTS]              |
|   Questionnaire       Timeline         Modeles prets              |
|   3 min               pas-a-pas        a telecharger              |
|                                                                    |
|  [4. SUIVI]          [5. COMPARATEUR]  [6. ARCHIVAGE]             |
|   Rappels             Diagnostiqueurs   Documents                  |
|   echeances           DPE/PPPT          centralises               |
|                                                                    |
+------------------------------------------------------------------+
|                                                                    |
|  PARCOURS PRINCIPAL :                                              |
|                                                                    |
|  Questionnaire  -->  Obligations  -->  Etapes    -->  Documents   |
|  (3 min)             identifiees       ordonnees      generes     |
|                                                                    |
|                          |                                         |
|                          v                                         |
|                   [DASHBOARD COPROPRIETE]                          |
|                   - Statut DPE : A FAIRE (rouge)                   |
|                   - Statut PPPT : A FAIRE (rouge)                  |
|                   - Fonds travaux : A VERIFIER (orange)            |
|                   - Prochaine AG : 15/04/2026 (dans 68j)          |
|                   - Prochaine echeance : Devis DPE (dans 14j)     |
|                                                                    |
+------------------------------------------------------------------+
```

### Fonctionnalites MVP

| Priorite | Fonctionnalite | Description | Effort |
|---|---|---|---|
| **P0** | Diagnostic copropriete (GRATUIT) | Questionnaire : nb lots, date construction, type chauffage, syndic pro/benevole. Resultat : liste des obligations applicables avec statut (fait/pas fait). | 1 sem |
| **P0** | Roadmap reglementaire | Timeline interactive : DPE collectif -> PPPT -> fonds de travaux -> AG, avec deadlines, dependances et statuts. | 1,5 sem |
| **P0** | Guide pas-a-pas DPE collectif | 8 etapes : obligation legale -> budget -> vote AG -> devis -> selection diagnostiqueur -> realisation -> resultats -> archivage. Chaque etape = explication + document modele + checklist. | 1,5 sem |
| **P0** | Guide pas-a-pas PPPT | 6 etapes : base DPE -> identification travaux -> chiffrage -> planification 10 ans -> vote AG -> suivi annuel. | 1,5 sem |
| **P0** | Modeles de documents (5 essentiels) | Resolution AG vote DPE, resolution AG vote PPPT, cahier des charges diagnostiqueur, grille comparaison devis, modele convocation AG. | 2 sem |
| **P1** | Rappels echeances | Notifications email : prochaine AG, devis a demander, vote a preparer, expiration DPE (10 ans), mise a jour PPPT. | 1 sem |
| **P1** | Comparateur diagnostiqueurs | Grille d'aide a la comparaison : certifications, methode 3CL, prix, delais, avis. Pas de marketplace, juste un outil de comparaison. | 1 sem |
| **P1** | Stockage documents | Upload et archivage securise : DPE, PV d'AG, devis, PPPT, attestations. Espace 500 Mo par copropriete. | 0,5 sem |
| **P2** | Simulateur fonds de travaux | Calcul automatique du montant minimum (2,5% budget previsionnel) et plan de provisionnement sur 10 ans. | 0,5 sem |
| **P2** | Modeles supplementaires (10+) | Mise en demeure, lettre diagnostiqueur, PV AG type, appel de fonds travaux, courrier prefet, etc. | 1 sem |
| **P2** | Veille reglementaire | Notifications lors de changements de loi impactant les coproprietes (arretes, decrets). | 0,5 sem |

**Total P0** : ~7,5 semaines
**Total P0 + P1** : ~11 semaines
**Total complet** : ~13 semaines

### Parcours utilisateur en 5 etapes

```
ETAPE 1 -- DIAGNOSTIC GRATUIT (3 min)
   Le syndic benevole arrive sur copropcheck.fr
   -> Questionnaire : combien de lots ? Annee de construction ? Type de chauffage ?
      Syndic benevole ou pro ? DPE collectif deja fait ? PPPT deja fait ?
   -> Resultat instantane :
      "Votre copropriete de 18 lots (construite en 1975) doit avoir :
       [X] DPE collectif -- OBLIGATOIRE depuis le 01/01/2026 -- NON REALISE
       [X] PPPT -- OBLIGATOIRE depuis le 01/01/2025 -- NON REALISE
       [X] Fonds de travaux -- OBLIGATOIRE -- A VERIFIER
       Vous etes en retard sur 2 obligations. Voici votre plan d'action."
   -> CTA : "Debloquer votre roadmap personnalisee -- 9 EUR/mois"

ETAPE 2 -- ROADMAP PERSONNALISEE (inscription payante)
   Le syndic voit sa timeline :
   -> Semaine 1-2 : Preparer le cahier des charges DPE (modele fourni)
   -> Semaine 2-4 : Demander 3 devis diagnostiqueurs (grille comparaison fournie)
   -> Semaine 4 : Preparer la resolution AG (modele fourni)
   -> Date AG : Faire voter le DPE et le PPPT
   -> Post-AG : Commander le DPE, lancer le PPPT
   -> 6-12 mois : Reception DPE, elaboration PPPT, vote final

ETAPE 3 -- EXECUTION GUIDEE
   A chaque etape, le syndic a :
   -> Une explication simple (pas de jargon juridique)
   -> Le document modele pre-rempli a telecharger (PDF/Word)
   -> Une checklist "J'ai bien fait ca"
   -> Un lien vers le texte de loi si besoin

ETAPE 4 -- SUIVI ET RAPPELS
   Le dashboard montre l'avancement :
   -> DPE collectif : [=====>-----] 50% -- Devis recus, en attente vote AG
   -> PPPT : [=>---------] 10% -- En attente du DPE
   -> Fonds travaux : [=========>-] 90% -- OK, cotisation en cours
   -> Emails de rappel : "Votre AG est dans 3 semaines, avez-vous finalise
      la resolution pour le vote DPE ?"

ETAPE 5 -- ARCHIVAGE ET RENOUVELLEMENT
   Les documents sont stockes :
   -> DPE collectif (valable 10 ans -- rappel en 2036)
   -> PV d'AG avec vote
   -> PPPT vote (mise a jour dans 10 ans -- rappel en 2035)
   -> Alertes automatiques pour les renouvellements
```

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment precis | Urgence |
|---|---|---|
| **Preparation de l'AG annuelle** (obligation d'inscrire DPE + PPPT a l'ordre du jour) | 2-3 mois avant l'AG (typiquement fevrier-avril pour une AG en mai-juin) | **MAXIMALE** -- deadline fixe, panique organisationnelle, documents a preparer |
| **Decouverte de l'obligation via un article de presse / Google** | Courant 2026 (pics en Q1-Q2) | **HAUTE** -- prise de conscience brutale, recherche de solution immediate |
| **Demande d'un coproprietaire** ("On doit faire le DPE, c'est obligatoire") | N'importe quand | **HAUTE** -- pression sociale, peur de la mise en cause |
| **Vente d'un lot dans la copropriete** (le notaire reclame le DPE collectif) | Moment de la vente | **HAUTE** -- bloquant pour la transaction, urgence financiere |
| **Election comme syndic benevole** (decouverte des obligations) | Jour de l'AG | **HAUTE** -- "C'est quoi toutes ces obligations ? Comment je fais ?" |
| **Courrier de la mairie / prefecture** (mise en demeure de realiser le PPPT) | Apres signalement | **MAXIMALE** -- contrainte administrative, realisation d'office possible |
| **Refus de subvention MaPrimeRenov' / CEE** (DPE/PPPT requis pour le dossier) | Lors du depot de dossier | **HAUTE** -- perte financiere directe (10K-50K EUR de subventions) |

**Le declencheur #1 est la preparation de l'AG.** La majorite des AG de coproprietes ont lieu entre mars et juin. Le syndic benevole realise 1 a 3 mois avant qu'il doit inscrire le DPE collectif et le PPPT a l'ordre du jour, et panique. C'est a ce moment precis qu'il Google "DPE collectif copropriete obligatoire 2026" et qu'il doit trouver CopropCheck.

**Saisonnalite previsible :**

```
Janv-Fev : Prise de conscience post-deadline --> premiers pics de recherche
Mars-Avril : Preparation massive des AG --> PIC D'ACQUISITION MAXIMAL
Mai-Juin : AG en cours, achats d'urgence --> fin du pic
Juil-Aout : Creux estival
Sept-Oct : Relance des dossiers non traites, retardataires
Nov-Dec : Creux, preparation cycle suivant
```

---

## 5. ACQUISITION CLIENT

### Canal 1 : SEO (PRIORITE ABSOLUE -- 70% de l'acquisition)

Les syndics benevoles Google TOUT. C'est leur premier reflexe face a une obligation qu'ils ne comprennent pas. Les requetes sont precises et a forte intention :

| Requete cible | Volume estime/mois | Intent | Difficulte SEO |
|---|---|---|---|
| "DPE collectif copropriete obligatoire 2026" | 2 000-5 000 (pic Q1) | Informatif -> conversion | Moyenne (Service-Public + articles generiques) |
| "PPPT copropriete obligatoire" | 1 000-2 000 | Informatif -> conversion | Moyenne |
| "syndic benevole obligations 2026" | 500-1 000 | Recherche -> conversion | Faible (peu de contenu cible) |
| "modele resolution AG DPE collectif" | 500-1 000 | Pratique -> conversion immediate | Faible (ocean bleu) |
| "combien coute DPE collectif copropriete" | 1 000-2 000 | Comparaison -> conversion | Moyenne |
| "PPT copropriete comment faire" | 500-1 000 | Pratique -> conversion | Faible |
| "fonds de travaux copropriete obligatoire montant" | 500-1 000 | Pratique -> conversion | Moyenne |
| "comment choisir diagnostiqueur DPE copropriete" | 200-500 | Pratique -> conversion | Faible |

**Strategie** : 10-15 articles de blog optimises SEO publies en rafale (fevrier-mars 2026). Chaque article repond a une requete precise et se termine par le CTA vers le diagnostic gratuit.

### Canal 2 : Forums et communautes (15% de l'acquisition)

| Communaute | Taille estimee | Approche |
|---|---|---|
| Forum CoproprieteLibre | ~10 000 membres actifs | Reponses utiles + lien diagnostic gratuit |
| Groupes Facebook syndics benevoles | 5 000-15 000 membres (plusieurs groupes) | Partage de guides, pas de spam |
| ARC (Association des Responsables de Copropriete) | ~25 000 adherents | Partenariat contenu ou publicite |
| CLCV (asso consommateurs) | Antennes locales | Prescription |
| Reddit r/france, r/immo | Threads ponctuels | Reponses contextuelles |

### Canal 3 : Prescripteurs (15% de l'acquisition)

| Prescripteur | Interet pour eux | Mecanisme |
|---|---|---|
| Diagnostiqueurs DPE | CopropCheck leur envoie des clients | Recommandation reciproque, pas de commission (MVP) |
| Notaires | Leurs clients vendeurs ont besoin du DPE collectif | Fiche info a distribuer |
| Agents immobiliers | Ventes bloquees par l'absence de DPE collectif | Orientation vers CopropCheck |
| Comptables de copropriete | Leurs clients syndics benevoles posent des questions | Recommandation |

### Message d'accroche

> **"Votre copropriete est-elle en regle depuis le 1er janvier 2026 ? DPE collectif, PPPT, fonds de travaux : faites le diagnostic gratuit en 3 minutes."**

### Lead magnet

**Le diagnostic gratuit EST le lead magnet.** Le syndic repond a 5 questions, obtient instantanement la liste de ses obligations avec un statut rouge/vert. Pour debloquer la roadmap et les modeles de documents, il passe en payant.

Alternatives complementaires :
- **Checklist PDF** : "Les 12 obligations du syndic benevole en 2026" (telechargeable contre email)
- **Simulateur** : "Combien devrait couter le DPE collectif de votre copropriete ?" (estimation par nb lots/region)

---

## 6. BUSINESS MODEL

### Pricing par segment

| Plan | Prix/mois | Prix/an | Cible | Inclus |
|---|---|---|---|---|
| **GRATUIT** | 0 EUR | 0 EUR | Tous | Diagnostic copropriete (5 questions -> obligations identifiees). Resultat : liste obligations avec statut. Pas de roadmap ni modeles. |
| **ESSENTIEL** | 9 EUR | 90 EUR | Syndic benevole, 1 copro | Roadmap personnalisee, guides pas-a-pas DPE + PPPT, 5 modeles de documents essentiels, rappels email basiques. |
| **PRO** | 19 EUR | 190 EUR | Syndic benevole actif / petit syndic pro | Tout Essentiel + tous les modeles (15+), comparateur diagnostiqueurs, stockage documents 500 Mo, rappels avances, simulateur fonds travaux. |
| **MULTI** | 39 EUR | 390 EUR | Petit syndic pro (5-20 copros) | Tout Pro + multi-coproprietes (jusqu'a 20), tableau de bord consolide, export rapports PDF. |

### Comparaison avec les alternatives actuelles

| Alternative | Cout annuel | Ce qu'elle fait | Ce qu'elle ne fait PAS |
|---|---|---|---|
| **Ne rien faire** (statu quo) | 0 EUR + 20-40h de temps + risques | Le syndic cherche seul sur internet | Pas de suivi, pas de modeles, erreurs probables, responsabilite engagee |
| **ARC** (adhesion association) | ~150 EUR/an | Guides papier, assistance telephonique, modeles basiques | Pas d'outil numerique, pas de suivi automatise, pas de roadmap personnalisee |
| **Matera** (syndic cooperatif) | 350 EUR/an + 5 EUR/lot/mois (= ~1 400 EUR/an pour 18 lots) | Service complet de syndic en ligne | C'est un remplacement du syndic, pas un outil pour le syndic benevole. Le benevole perd son role. |
| **Copromatic** (logiciel) | 99-199 EUR/an | Comptabilite copropriete, AG | Pas de module DPE/PPPT, pas de pilotage reglementaire |
| **Syndic professionnel** | 2 000-5 000 EUR/an | Gestion complete | Prix x10-50 par rapport a CopropCheck |
| **CopropCheck Essentiel** | **90 EUR/an** | Pilotage DPE + PPPT, modeles, roadmap, rappels | Pas de comptabilite, pas de gestion locative |

### ROI calcule pour le client

**Scenario : syndic benevole, copropriete 18 lots, plan Essentiel a 90 EUR/an**

| Poste | Sans CopropCheck | Avec CopropCheck | Economie |
|---|---|---|---|
| Temps de recherche/comprehension | 30h x 25 EUR = 750 EUR | 5h x 25 EUR = 125 EUR | **625 EUR** |
| Surpaiement diagnostiqueur (pas de benchmark) | +30% sur 3 000 EUR = 900 EUR | Prix negocie avec grille = 0 EUR | **900 EUR** |
| Risque perte subventions (probabilite 20%) | 20% x 30 000 EUR = 6 000 EUR | 0 EUR (en regle) | **6 000 EUR** |
| Cout CopropCheck | 0 EUR | 90 EUR | -90 EUR |
| **TOTAL** | **7 650 EUR de cout/risque** | **215 EUR** | **ROI = x35** |

Meme sans compter le risque subventions : 625 + 900 = 1 525 EUR economies vs 90 EUR depenses = **ROI x17**.

---

## 7. CONCURRENCE

| Concurrent | Type | Pricing | Forces | Faiblesses |
|---|---|---|---|---|
| **Matera** | Syndic cooperatif en ligne | 350 EUR/an + 5 EUR/lot/mois | Interface moderne, service complet, notoriete | C'est un SERVICE qui remplace le syndic benevole. Pas un outil self-service. 10x plus cher. Segment different. |
| **Copromatic** | Logiciel comptabilite copro | 99-199 EUR/an | Simple, reconnu, prix accessible | Focus comptabilite et AG. Aucun module DPE/PPPT. Pas de pilotage reglementaire. |
| **Comptacop** | Logiciel syndic | A partir de 99 EUR | Fonctionnel, cible benevoles | Meme lacune : comptabilite, pas de compliance. |
| **Copriciel / Coprolib'** | Logiciels gestion copro | Variable | Communaute, forums | Gestion generale, pas de DPE/PPPT dedie. |
| **CoproSolutions (Hellio)** | Plateforme renovation copro | Sur devis | Adosse a Hellio (CEE) | Cible syndics pros et BET, pas les benevoles. |
| **PROGE COPRO (Ekopolis)** | Plateforme numerique renovation | Sur devis | Outil technique serieux | Pour bureaux d'etudes et AMO, inaccessible aux benevoles. |
| **ARC** | Association d'aide aux copros | ~150 EUR/an | Guides, assistance juridique, legitimite | Pas d'outil numerique, pas de suivi automatise, pas de roadmap. |
| **Service-Public.fr** | Information officielle | Gratuit | Fiable, exhaustif | Dense, pas actionnable, pas de suivi, pas de modeles pre-remplis. |

### Angle differenciateur (1 phrase)

> **CopropCheck est le seul outil SaaS self-service qui transforme les obligations reglementaires DPE/PPPT en un plan d'action pas-a-pas avec modeles de documents prets a l'emploi, specifiquement concu pour les syndics benevoles qui n'ont ni le temps, ni les connaissances, ni les outils des professionnels.**

### Carte de positionnement

```
                    CHER (>500 EUR/an)
                         |
          Matera         |       Syndics professionnels
          (service)      |       (2 000-5 000 EUR)
                         |
  GENERALISTE -----------+----------- SPECIALISE DPE/PPPT
                         |
          Copromatic     |       *** CopropCheck ***
          Comptacop      |       (90-190 EUR/an)
          (compta)       |
                         |
                    ABORDABLE (<200 EUR/an)
```

**CopropCheck occupe le quadrant "abordable + specialise DPE/PPPT" qui est aujourd'hui VIDE.**

---

## 8. TECHNIQUE

### Complexite globale : 2/5

| Composant | Complexite | Justification |
|---|---|---|
| Frontend (dashboard, questionnaire, timeline) | 2/5 | CRUD standard, UI reactive, pas de temps reel |
| Backend (auth, data, logique metier) | 2/5 | Supabase couvre 90% des besoins (auth, DB, storage, RLS) |
| Generation PDF (modeles documents) | 2/5 | @react-pdf/renderer ou puppeteer, templates statiques |
| Contenu reglementaire | 3/5 | Compilation des obligations, redaction des modeles de documents (resolutions AG, cahier des charges, PPPT). Un seul domaine (copropriete) = moins complexe que multi-reglementations. |
| Emails transactionnels | 1/5 | Resend, templates simples, cron pour rappels |
| Paiement | 1/5 | Stripe Checkout + Customer Portal, 3 plans |
| Infrastructure | 1/5 | Vercel (frontend) + Supabase (backend). Pas de serveur a gerer. |

### Temps MVP estime

| Phase | Contenu | Duree |
|---|---|---|
| Semaine 1 | Setup projet, auth, modele de donnees, CI/CD | 1 sem |
| Semaines 2-3 | Diagnostic gratuit (questionnaire + resultats) + landing page SEO | 2 sem |
| Semaines 4-5 | Roadmap reglementaire + guides pas-a-pas (DPE + PPPT) | 2 sem |
| Semaines 6-7 | Modeles de documents (5 essentiels) + generation PDF | 2 sem |
| Semaine 8 | Stripe integration + onboarding payant | 1 sem |
| Semaine 9 | Rappels email + dashboard de suivi | 1 sem |
| Semaine 10 | Tests, polish, SEO articles (5 articles) | 1 sem |
| **TOTAL MVP** | **P0 + P1 minimal** | **10 semaines** |

**Lancement cible : mi-avril 2026** (en pleine saison des AG).

### Stack requise

```
FRONTEND
  - Next.js 14+ (App Router) -- SSR pour le SEO, RSC pour la performance
  - TypeScript
  - Tailwind CSS + shadcn/ui
  - @react-pdf/renderer (generation modeles documents)

BACKEND
  - Supabase (PostgreSQL + Auth + Storage + Row Level Security)
  - Edge Functions Supabase (logique metier, cron rappels)

HEBERGEMENT
  - Vercel (frontend) -- plan gratuit puis Pro si besoin
  - Supabase (backend) -- plan gratuit puis Pro (25 EUR/mois)

SERVICES TIERS
  - Stripe (paiement) -- commission uniquement
  - Resend (emails transactionnels) -- gratuit jusqu'a 3 000/mois
  - Plausible ou Umami (analytics) -- ~9 EUR/mois ou self-hosted

COUT INFRASTRUCTURE MENSUEL
  - Supabase Pro : 25 EUR
  - Vercel : 0-20 EUR
  - Resend : 0 EUR (puis 20 EUR si >3K emails)
  - Analytics : 0-9 EUR
  - Domaine : ~1 EUR/mois (lisse)
  - TOTAL : ~30-55 EUR/mois (bien sous le budget de 100 EUR)
```

### Points impressionnants pour le CV

| Point | Pourquoi c'est valorisant |
|---|---|
| **SaaS RegTech / LegalTech** | Domaine en forte croissance, montre la capacite a traduire du droit en produit logiciel |
| **Generation de documents PDF dynamiques** | Templates parametrables, fusion de donnees, mise en page professionnelle |
| **Moteur de regles reglementaires** | Systeme de decision (nb lots x date construction x type syndic -> obligations applicables) = logique metier non triviale |
| **SEO-first architecture** | SSR Next.js, structured data, content strategy pilotee par les donnees de recherche |
| **Systeme de notifications programmatiques** | Cron jobs, calcul de deadlines, emails contextuels -- pattern reutilisable partout |
| **Multi-tenant SaaS** | RLS Supabase, isolation des donnees par copropriete, gestion des plans/limites |
| **Funnel freemium avec conversion** | Diagnostic gratuit -> plan payant, analytics de conversion, A/B testing potentiel |
| **Full-stack TypeScript end-to-end** | Next.js + Supabase + Stripe + Resend, deploye sur Vercel, CI/CD complet |

---

## SYNTHESE DECISION

| Critere | Valeur |
|---|---|
| Score global | **17/20** |
| TAM | 7,8 - 15,6M EUR/an |
| Cible primaire | 52 839 syndics benevoles |
| Objectif MRR 2 500 EUR | Atteignable vers **M5-M6** (saison AG) |
| Objectif MRR 3 000 EUR | Atteignable vers **M6-M7** |
| Temps au MVP | **10 semaines** |
| Cout infra | **30-55 EUR/mois** |
| Risque principal | Absence de sanctions financieres directes (levier = responsabilite civile + perte subventions) |
| Avantage principal | **Timing parfait** (deadlines passees, saison AG imminente, aucun concurrent direct) |

---

*Fiche enrichie Phase 2 -- Generee le 2026-02-06 -- Run 002, Projet #20*
