# FICHE ENRICHIE #26 - ConformSecure

> SaaS de conformite CNAPS pour TPE de securite privee (5-50 agents)
> Score filtrage Phase 1b : 13/20 (reserves majeures)
> Date : 2026-02-10 | Recherche web validee

---

## 1. CONTEXTE METIER

### 1.1 La securite privee en France : un secteur massif et fragmente

Le secteur de la securite privee en France represente un ecosysteme considerable :

| Indicateur | Valeur | Source |
|---|---|---|
| Chiffre d'affaires branche | 11,12 Mds EUR HT (2023) | [Panorama Comete 2024](https://www.logiciel-comete.fr/2025/04/02/panorama-2024-de-la-securite-privee-les-chiffres-cles-a-retenir/) |
| Croissance annuelle | +10% vs 2022 | Rapport de branche 2023 |
| Nombre d'entreprises (branche) | 5 012 entreprises recensees | [Panorama Comete 2024](https://www.logiciel-comete.fr/2025/04/02/panorama-2024-de-la-securite-privee-les-chiffres-cles-a-retenir/) |
| Nombre total (toutes structures) | ~25 000 actives dont 3 500 auto-entrepreneurs | [Analyse marche 2025](https://modelesdebusinessplan.com/blogs/infos/marche-securite-privee) |
| Entreprises code NAF 8010Z | ~16 752 (Pappers) | [Pappers](https://www.pappers.fr/code-naf-ape/8010z-activites-de-securite-privee) |
| Salaries | 210 500 fin 2023 (+2,5%) | Panorama 2024 |
| Part TPE (<10 salaries) | 2/3 des entreprises (~67%) | Panorama 2024 |
| Croissance CA des TPE | +21% en un an | Panorama 2024 |
| Marches prives | 86% du CA | Panorama 2024 |
| Concentration Ile-de-France | 43,6% des effectifs, 35,3% des etablissements | Panorama 2024 |

**Activites principales** : Gardiennage/surveillance humaine et intervention/ronde = 66% du CA (7,34 Mds EUR HT). Le code NAF 8010Z ("Activites de securite privee") couvre la surveillance, le gardiennage de sites, la protection de personnes et le controle de surete.

**Structure du marche** : Le secteur est extremement fragmente. Les 2/3 sont des TPE. Les grosses structures (Securitas, Fiducial, etc.) captent l'essentiel du CA mais les petites structures sont en forte croissance (+21% de CA). La sous-traitance represente 9,5% du CA sectoriel.

### 1.2 Le CNAPS : regulateur de plus en plus strict

Le **Conseil National des Activites Privees de Securite** (CNAPS) est l'autorite de regulation du secteur, creee par la loi du 12 mars 2012. Ses missions :

- **Delivrance des titres** : cartes professionnelles (agents), agrements (dirigeants), autorisations (entreprises)
- **Controle de conformite** : inspections sur site, verification documentaire
- **Discipline** : sanctions allant de l'avertissement a l'interdiction d'exercer (jusqu'a 7 ans)
- **Moralite** : verification des antecedents judiciaires

**Chiffres CNAPS 2024** (annee record - [Bilan CNAPS 2024](https://www.83-629.fr/bilan-du-cnaps-2024-lannee-des-records-et-des-responsabilites/)) :

| Indicateur | Valeur 2024 | Evolution |
|---|---|---|
| Decisions rendues | 163 572 | +30% vs 2023 |
| Controles realises | 1 984 | +12% (jusqu'a +34% sur certains secteurs) |
| Sanctions pecuniaires | 3,9 M EUR | +58% en montant |
| Nombre de sanctions | - | +40% |
| Interdictions temporaires d'exercice | 129 | 60% des decisions disciplinaires |
| Penalites financieres (discipline) | 2,1 M EUR | - |
| Cartes pro delivrees | 88 000 | +80% (effet JOP 2024) |

**Taux de non-conformite : 3 entreprises sur 10 controlees n'avaient pas tous leurs agrements a jour** ([CEMA Group](https://cemagroup.fr/reglementation-securite-privee-cadre-legal-metiers/)).

### 1.3 Pourquoi les TPE sont particulierement exposees

1. **Pas de service juridique/conformite** : Le gerant est seul a tout gerer (commercial, planning, RH, conformite).
2. **Forte rotation du personnel** : 193 000 embauches pour 185 000 departs en 2023 ; 70% de CDD ; taux de conversion CDI = 2,5%. Chaque mouvement = verification de carte pro, MAC, documents.
3. **Multiplicite des obligations documentaires** : 5 registres obligatoires minimum (cf. section 2).
4. **Sous-traitance en cascade** : Les TPE sont souvent sous-traitantes des grosses structures. Un defaut de conformite = perte du contrat.
5. **Croissance rapide** : +21% de CA pour les TPE. Croissance = recrutement = plus de cartes a tracker = plus de risque.
6. **Outils inadaptes** : Excel, cahiers papier, ou ERP surdimensionnes. Aucun outil leger et CNAPS-only.
7. **Dracar Ultimate (2026)** : Le nouveau portail CNAPS impose aux entreprises de declarer et mettre a jour electroniquement leurs salaries avant le 1er octobre 2026 ([CNAPS](https://www.cnaps.interieur.gouv.fr/Actualites/Dracar-Ultimate-un-nouveau-portail-usager-pour-moderniser-et-simplifier-les-demarches)). Cela va AUGMENTER la pression de conformite.

---

## 2. LA DOULEUR (precis et chiffre)

### 2.1 Qui souffre ?

**Profil type** : Gerant-fondateur d'une societe de securite privee de 5 a 50 agents.

- Age moyen du secteur : 42 ans
- Souvent ancien agent devenu entrepreneur
- Competences operationnelles fortes, competences administratives faibles
- Jongle entre planning, recrutement, relation client et paperasse reglementaire
- N'a pas les moyens d'un responsable conformite dedie (salaire ~35-45K EUR/an)
- Utilisent Excel ou des classeurs papier pour tracker les echeances

### 2.2 De quoi souffrent-ils ? (Obligations CNAPS detaillees)

#### A. Titres et autorisations a maintenir

| Titre | Duree validite | Renouvellement | Consequence expiration |
|---|---|---|---|
| Autorisation d'exercice (entreprise) | 5 ans | 3 mois avant echeance | Interdiction d'exercer |
| Agrement dirigeant | 5 ans | 3 mois avant echeance | Interdiction de diriger |
| Carte professionnelle (par agent) | 5 ans | 3 mois avant echeance | Agent ne peut plus travailler |
| Formation MAC CQP | Avant renouvellement carte | 24 mois avant echeance carte | Renouvellement refuse |
| SST (Sauveteur Secouriste du Travail) | 2 ans | Recyclage 7h | Partie de la MAC (31h dont 7h SST) |

Sources : [CNAPS](https://www.cnaps.interieur.gouv.fr/Fiches-thematiques/Informations-relatives-au-maintien-et-a-l-actualisation-des-competences-MAC), [CREFOPS](https://www.crefops.com/actualite-43-Renouvellement-de-la-carte-professionnelle-MAC-CQP.html)

**Pour une TPE de 20 agents** : 20 cartes pro avec des dates differentes, 20 MAC a planifier, 20 SST a tracker = **60+ echeances critiques par cycle de 5 ans**.

#### B. Registres et cahiers obligatoires

D'apres [Village Justice](https://www.village-justice.com/articles/entreprises-securite-privee-services-internes-securite-les-cahiers-registres,52523.html) et le Code de la securite interieure :

1. **Registre unique du personnel** (art. L611-2 CSI + art. L1221-13 Code du travail) : identite, nationalite, qualifications, dates entree/sortie de chaque agent.
2. **Memento de consignes de securite** (art. R631-16 CSI) : ordres et consignes clairs, en francais, signes par chaque agent.
3. **Cahier d'utilisation et entretien du materiel** (art. R631-17 CSI) : documentation de l'usage, maintenance et verification des equipements.
4. **Registre de controles internes** (art. R631-16 dernier alinea CSI) : preuve que le dirigeant effectue des controles reguliers sur site.
5. **Main courante** (usage standard) : horaires de prise/fin de service, incidents, instructions, anomalies, interventions.

#### C. Autres obligations reglementaires (depuis 2024-2025)

- **Tenue vestimentaire reglementee** (depuis oct. 2024) : uniforme normalise obligatoire.
- **Clauses de formation dans les contrats** : qualifications requises par agent, formation specifique au site, MAJ competences.
- **Sous-traitance encadree** : clauses specifiques d'ethique et conformite dans les contrats de sous-traitance.
- **Dracar Ultimate** (2026) : declaration electronique des salaries, mise a jour en temps reel, photo d'identite obligatoire avant le 1er oct. 2026.

### 2.3 Combien ca coute ? (Sanctions reelles)

#### Sanctions administratives CNAPS

| Type sanction | Montant/Duree | Qui |
|---|---|---|
| Amende administrative max | 150 000 EUR | Personne morale (entreprise) |
| Amende administrative max | 7 500 EUR | Personne physique (agent) |
| Interdiction temporaire d'exercice | Jusqu'a 7 ans | Entreprise ou agent |
| Suspension/retrait agrement | Immediat | Entreprise |
| Suspension/retrait carte pro | Immediat | Agent |

Source : [Nous Avocats](https://www.nous-avocats.fr/fr/actualites/id-313-sanction-disciplinaire-cnaps)

#### Sanctions penales (Code de la securite interieure)

| Infraction | Peine | Article |
|---|---|---|
| Employer un agent sans carte pro | 1 an prison + 15 000 EUR par agent | L617-8 CSI |
| Exercer sans autorisation | 3 ans prison + 45 000 EUR | L617-1 CSI |
| Travailler sans carte pro (salarie) | 1 an prison + 15 000 EUR | L617-10 CSI |
| Sous-traitance sans autorisation | 2 ans prison + 30 000 EUR | L617-3 CSI |

Sources : [Legifrance L617-8](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025506373), [Global Securit](https://globalsecurit.com/risques-des-societes-de-securite-non-agrees/)

#### Cout reel pour une TPE

| Scenario | Cout direct | Cout indirect |
|---|---|---|
| 1 agent travaille avec carte expiree (detecte au controle) | 15 000 EUR amende penale | Risque suspension agrement |
| 3 agents sans MAC a jour | ~7 500-15 000 EUR amende admin | Perte de contrats clients |
| Agrement non renouvele a temps | Interdiction d'exercer | Perte de 100% du CA |
| Controle CNAPS, registres incomplets | Avertissement a amende | Inscription au casier disciplinaire |

**En 2024, le CNAPS a distribue 3,9M EUR de sanctions** (+58% en montant). Avec 1 984 controles et 30% de non-conformite, le risque est reel et croissant.

#### Cout en temps administratif (estimation)

Pour une TPE de 20 agents geree sur Excel :
- Suivi mensuel des echeances : ~4-6h/mois
- Preparation renouvellements cartes pro : ~2-3h par dossier
- Tenue des registres : ~2-4h/mois
- Preparation controle CNAPS : ~1-2 jours de stress
- **Total estime : 10-15h/mois soit ~1 500-2 500 EUR/mois** en temps gerant (valorise a ~150 EUR/h)

---

## 3. LA SOLUTION (maquette textuelle)

### 3.1 Schema ASCII de l'application

```
+================================================================+
|                    CONFORMSECURE - DASHBOARD                    |
+================================================================+
|                                                                  |
|  +------------------+  +------------------+  +------------------+|
|  | AGENTS     20/20 |  | ALERTES     3    |  | SCORE CONF. 87% ||
|  | Conformes  17    |  | Urgentes    1    |  | [==========-]    ||
|  | A risque    2    |  | A venir     2    |  | Objectif: 100%   ||
|  | Expires     1    |  |                  |  |                  ||
|  +------------------+  +------------------+  +------------------+|
|                                                                  |
|  +-------------------------------------------------------------+|
|  | ALERTES URGENTES                                      [Voir]||
|  |-------------------------------------------------------------|
|  | [!] Karim B. - Carte pro expire dans 12 jours        ACTION ||
|  | [!] Sophie M. - MAC CQP a planifier avant 15/06      ACTION ||
|  | [i] Agrement societe : renouvellement dans 8 mois    OK     ||
|  +-------------------------------------------------------------+|
|                                                                  |
|  +-------------------------------------------------------------+|
|  | TIMELINE ECHEANCES (6 prochains mois)                       ||
|  |-------------------------------------------------------------|
|  | FEV |||||                                                    ||
|  | MAR ||||||||  [Karim: carte pro] [Ali: SST]                 ||
|  | AVR ||                                                       ||
|  | MAI |||||||   [Sophie: MAC] [Youssef: MAC]                  ||
|  | JUN ||||                                                     ||
|  | JUL ||||||    [Agrement societe: renouvellement]            ||
|  +-------------------------------------------------------------+|
|                                                                  |
|  [+ Ajouter agent]  [Exporter PDF]  [Verifier DRACAR]          |
+================================================================+

NAVIGATION :
[Dashboard] [Agents] [Alertes] [Documents] [Controle CNAPS]
```

### 3.2 Fonctionnalites MVP (P0 / P1 / P2)

#### P0 - Must Have (MVP semaine 1-6)

| Fonctionnalite | Description |
|---|---|
| **Fiche agent** | Nom, prenom, n carte pro CNAPS, date emission, date expiration, statut MAC, SST |
| **Alertes automatiques** | Email/SMS a J-90, J-60, J-30, J-15, J-7 avant expiration carte pro |
| **Dashboard conformite** | Score global, agents conformes/a risque/expires, alertes en cours |
| **Timeline echeances** | Vue calendrier des renouvellements a venir sur 12 mois |
| **Fiche entreprise** | N agrement, date expiration agrement, n autorisation, dirigeant |
| **Verification DRACAR** | Lien direct vers teleservice CNAPS pour verifier un titre (manuel) |

#### P1 - Should Have (semaine 7-12)

| Fonctionnalite | Description |
|---|---|
| **Registre du personnel digital** | Conforme art. L611-2 CSI, exportable PDF |
| **Checklist controle CNAPS** | Les 7 points d'audit avec statut vert/orange/rouge |
| **Suivi MAC/SST** | Dates de formation, organisme, attestation uploadee |
| **Export conformite** | Rapport PDF "pret pour controle CNAPS" |
| **Multi-site** | Gestion de plusieurs etablissements |

#### P2 - Nice to Have (post-MVP)

| Fonctionnalite | Description |
|---|---|
| **Registre controles internes** | Saisie digitale des controles sur site (art. R631-16) |
| **Main courante digitale** | Remplacement cahier papier |
| **Integration Dracar Ultimate** | Si API disponible en 2026-2027 |
| **Alerte reglementaire** | Veille automatique sur les evolutions reglementaires CNAPS |
| **Gestion tenues vestimentaires** | Suivi attribution uniformes conformes |

### 3.3 Parcours utilisateur

```
INSCRIPTION (5 min)
  |
  v
ONBOARDING
  1. Saisir infos entreprise (SIRET, n agrement, date)     [2 min]
  2. Ajouter agents un par un OU import CSV                 [1 min/agent]
  3. Pour chaque agent : n carte pro, date expiration, MAC  [30 sec/agent]
  |
  v
UTILISATION QUOTIDIENNE
  - Recevoir alerte email "Carte pro de Karim expire dans 30 jours"
  - Cliquer > voir fiche agent > lancer le renouvellement
  - Uploader attestation MAC une fois formation faite
  - Dashboard toujours vert = tranquillite d'esprit
  |
  v
AVANT CONTROLE CNAPS
  - Cliquer "Rapport conformite" > PDF avec tous les documents
  - Verifier checklist des 7 points d'audit
  - Corriger les points orange/rouge
  - Presenter le rapport au controleur CNAPS
```

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Urgence | Probabilite | Action type |
|---|---|---|---|
| **Recu un controle CNAPS** (ou annonce de controle) | CRITIQUE | Moyenne | Achat immediat, besoin de mise en conformite rapide |
| **Carte pro d'un agent expiree sans s'en rendre compte** | HAUTE | Haute (30% non-conformes) | Recherche Google "suivi carte pro CNAPS" |
| **Recu une sanction/avertissement CNAPS** | CRITIQUE | Faible | Achat immediat, prevention recidive |
| **Embauche de plusieurs agents en meme temps** | MOYENNE | Haute | Besoin d'organiser le suivi |
| **Perte d'un contrat pour defaut de conformite** | HAUTE | Moyenne | Investissement prevention |
| **Renouvellement agrement entreprise approche** | HAUTE | Cyclique (tous les 5 ans) | Preparation du dossier |
| **Decouverte de Dracar Ultimate** (obligation 2026) | MOYENNE | Haute (concerne toutes les entreprises) | Besoin de digitalisation |
| **Passage de seuil (ex: 10 agents)** | MOYENNE | Naturelle avec croissance | Trop complexe pour Excel |
| **Bouche-a-oreille** (autre gerant sanctionne) | BASSE | Moyenne | Achat preventif |

**Declencheur #1 le plus puissant** : Dracar Ultimate impose a TOUTES les entreprises de securite privee de declarer electroniquement leurs salaries avant le 1er octobre 2026. C'est un **declencheur universel et date**. Meme les entreprises "tranquilles" vont devoir se digitaliser.

---

## 5. ACQUISITION CLIENT

### 5.1 Sources de prospection

#### DRACAR / Teleservices CNAPS
- Le teleservice [DRACAR](https://detective-prive-paris.fr/dracar-teleservice-cnaps/) permet de verifier un titre CNAPS via le SIRET de l'entreprise. Ce n'est PAS une base prospectable directement.
- **Dracar Ultimate** (2026) introduit un portail entreprise, mais sans listing public exploitable.
- **Conclusion** : DRACAR n'est PAS une source de prospects. C'est un outil de verification.

#### Codes NAF pour ciblage
| Code NAF | Activite | Entreprises estimees |
|---|---|---|
| 8010Z | Activites de securite privee | ~16 750 (Pappers) |
| 8020Z | Activites liees aux systemes de securite | ~2 974 |
| 8030Z | Activites d'enquete | ~500-1 000 |

Source : [Pappers](https://www.pappers.fr/code-naf-ape/8010z-activites-de-securite-privee), [Convention.fr](https://www.convention.fr/code/8020Z/?naf=633)

**Cible prioritaire** : Code NAF 8010Z, filtrer par taille (5-50 salaries), soit environ **3 000 a 5 000 entreprises** en France.

#### Bases exploitables
- **Pappers.fr** : listing gratuit par code NAF, avec SIRET, effectif, CA
- **Societe.com / Infogreffe** : idem, payant pour export massif
- **LinkedIn Sales Navigator** : cibler "gerant societe securite" ou "dirigeant securite privee"
- **Annuaires professionnels** : GES (Groupement des Entreprises de Securite), USP (Union des entreprises de Securite Privee)

### 5.2 Canaux d'acquisition

| Canal | Cout | Potentiel | Commentaire |
|---|---|---|---|
| **SEO / Blog** | Gratuit (temps) | FORT | Mots-cles : "renouvellement carte pro CNAPS", "controle CNAPS preparation", "obligations entreprise securite privee", "MAC CQP delai". Niche peu disputee. |
| **Google Ads** | ~2-5 EUR/clic | MOYEN | Mots-cles transactionnels : "logiciel conformite securite privee", "suivi carte pro CNAPS" |
| **Forums/Groupes Facebook** | Gratuit | MOYEN | Groupes de gerants securite privee (ex: "Securite Privee France" ~5-10K membres) |
| **LinkedIn organique** | Gratuit | MOYEN | Posts sur actualites CNAPS, retours sanctions, conseils conformite |
| **Partenariats organismes formation** | Gratuit/reciproque | FORT | Les centres de formation MAC (CREFOPS, EESP, etc.) voient TOUS les gerants au moment du renouvellement |
| **Partenariats comptables** | Gratuit/reciproque | MOYEN | Les experts-comptables specialises securite privee |
| **Site 83-629.fr** (reference du secteur) | Sponsoring ? | FORT | Le blog de reference sur la reglementation securite privee |
| **Salons professionnels** | 500-2000 EUR | MOYEN | Milipol, ExpoProtection (mais gros salons) |
| **Emailing froid** | ~50 EUR/mois (outil) | MOYEN | Ciblage NAF 8010Z via Pappers + enrichissement email |

**Strategie recommandee** : SEO content sur les requetes CNAPS/conformite + partenariats organismes de formation MAC. Le blog de contenu reglementaire (modele 83-629.fr mais version outil) est la meilleure porte d'entree.

**Angle SEO puissant pour 2026** : Dracar Ultimate ("dracar ultimate comment faire", "dracar ultimate obligations 2026", "declaration salaries cnaps 2026").

---

## 6. BUSINESS MODEL

### 6.1 Pricing

**Modele recommande : tarification par tranche d'agents**

| Plan | Agents inclus | Prix/mois | Prix/agent/mois |
|---|---|---|---|
| Solo | 1-10 agents | 29 EUR | 2,90 - 5,80 EUR |
| TPE | 11-25 agents | 49 EUR | 1,96 - 4,45 EUR |
| PME | 26-50 agents | 79 EUR | 1,58 - 3,04 EUR |
| Pro | 51-100 agents | 129 EUR | 1,29 - 2,53 EUR |

**Pourquoi pas par agent ?** Un pricing "par agent" (ex: 3 EUR/agent/mois) est plus previsible pour le client mais peu attractif pour les petites structures (5 agents = 15 EUR = trop peu de valeur percue). Le forfait par tranche permet un ARPU minimum viable.

**Comparaison concurrence** :
- Sekur : a partir de 99,99 EUR/mois pour 6 utilisateurs + 9,99 EUR/mois par utilisateur terrain
- Comete : prix sur devis (repute cher, oriente grosses structures)
- Organilog : multi-metier, pas specialise CNAPS

### 6.2 ROI pour le client

| Scenario | Sans ConformSecure | Avec ConformSecure | Economie |
|---|---|---|---|
| 1 agent oublie, carte expiree, controle CNAPS | 15 000 EUR amende | 0 EUR (alerte J-90) | **15 000 EUR** |
| Temps admin mensuel (20 agents) | 10-15h/mois (~1 500-2 250 EUR) | 2-3h/mois (~300-450 EUR) | **1 000-1 800 EUR/mois** |
| Consultant conformite ponctuel | 850-1 700 EUR/audit | 49 EUR/mois continu | **~600-1 400 EUR/an** |
| Perte de contrat (non-conformite) | 5 000-50 000 EUR CA perdu | Prevention | **Inestimable** |

**Argument massue** : "ConformSecure a 49 EUR/mois = le cout de 12 minutes de l'amende minimum pour un seul agent non-conforme."

### 6.3 Objectif de revenus

| Indicateur | Valeur |
|---|---|
| Objectif MRR | 2 500 - 3 000 EUR/mois |
| ARPU moyen cible | 49 EUR/mois (plan TPE) |
| Nombre de clients necessaires | **51 - 62 clients** |
| Marche adressable (TPE 5-50 agents) | ~3 000 - 5 000 entreprises |
| Penetration necessaire | **1,0 - 2,0%** |

Penetration de 1-2% sur un marche de niche = **realiste mais sans marge d'erreur**. Le churn doit etre tres bas.

---

## 7. CONCURRENCE

### 7.1 Mapping detaille

| Concurrent | Type | Cible | Prix | Forces | Faiblesses vs ConformSecure |
|---|---|---|---|---|---|
| **[Sekur](https://sekur.fr/)** | ERP complet securite privee | TPE a grosses PME | 99,99 EUR/mois + 9,99 EUR/user terrain | Solution #1 du marche, toutes fonctionnalites (planning, facturation, RH, paie, rondes) | **Trop lourd et cher pour une TPE qui veut JUSTE la conformite CNAPS**. Overkill fonctionnel. |
| **[Comete](https://www.logiciel-comete.fr/)** | ERP complet securite privee | PME et grosses structures | Sur devis (repute 200+ EUR/mois) | Leader historique, 600 clients, 65% des agents planifies en France | **Cible les grosses structures**. Prix et complexite inadaptes aux TPE de 5-20 agents. |
| **[Trackforce Valiant](https://www.trackforce.com/fr/)** | Workforce management | Grands comptes internationaux | Sur devis (enterprise) | 300 000+ pros dans 45 pays, acquisition de TrackTik (2022) | **Zero pertinence pour les TPE francaises**. Solution enterprise mondiale. |
| **[Organilog](https://fr.organilog.com/logiciel/logiciel-agent-securite/)** | Logiciel gestion multi-metier | TPE tous secteurs | ~30-80 EUR/mois | 20+ modules, app mobile, CRM, planning | **Pas specialise securite privee**. Aucune fonctionnalite CNAPS native. Generique. |
| **Excel / Cahier papier** | DIY | Toutes TPE | 0 EUR | Gratuit, connu | **Aucune alerte, aucune automatisation, risque d'oubli = amende**. C'est l'ennemi principal. |
| **Expert-comptable** | Service humain | TPE | 100-300 EUR/mois | Relation de confiance | **Ne connait pas les specificites CNAPS**. Gere la compta, pas la conformite metier. |
| **Avocat specialise** | Service ponctuel | Apres sanction | 200-500 EUR/h | Expertise juridique | **Curatif, pas preventif**. Intervient apres le probleme. |

### 7.2 Angle differenciateur

```
POSITIONNEMENT :

  SEKUR / COMETE              CONFORMSECURE              EXCEL / PAPIER
  ERP complet                 Conformite CNAPS           Rien
  200+ EUR/mois               29-79 EUR/mois             0 EUR
  100+ fonctionnalites        10 fonctionnalites cles    0 fonctionnalite
  Formation necessaire        Prise en main 15 min       -
  "Tout faire"                "Ne plus avoir d'amende"   "Croiser les doigts"
       |                            |                          |
       v                            v                          v
  [GROSSES PME/ETI]          [TPE 5-50 AGENTS]          [MICRO-ENTREPRISES]
```

**Tagline** : "ConformSecure : le seul outil dedie a la conformite CNAPS. Pas un ERP. Pas un planning. Juste la tranquillite face au controle."

**Risque strategique** : Sekur pourrait facilement ajouter un module "conformite CNAPS light" a prix reduit. La barriere a l'entree technique est faible. L'avantage concurrentiel repose sur la **simplicite** et le **prix**, pas sur la technologie.

---

## 8. TECHNIQUE

### 8.1 Complexite technique

| Critere | Note /5 | Commentaire |
|---|---|---|
| Complexite backend | 1.5/5 | CRUD basique : agents, alertes, documents. Aucune logique metier complexe. |
| Complexite frontend | 2/5 | Dashboard, calendrier, formulaires. UX soignee mais standard. |
| Integrations externes | 1/5 | Aucune API CNAPS disponible. Verification DRACAR = lien sortant. Dracar Ultimate 2026 = incertain. |
| Reglementation metier | 3/5 | Il faut comprendre et encoder les regles CNAPS (delais, MAC, SST, registres). Veille reglementaire necessaire. |
| Notifications | 2/5 | Emails + SMS (via Twilio/Resend). Cron jobs pour les alertes. |
| **Complexite globale** | **2/5** | Projet techniquement simple. La valeur est dans le DOMAINE, pas dans le CODE. |

### 8.2 Stack recommandee (profil fondateur)

| Couche | Technologie | Cout |
|---|---|---|
| Frontend | Next.js (App Router) + Tailwind + shadcn/ui | 0 EUR |
| Backend | Next.js API Routes ou NestJS | 0 EUR |
| Base de donnees | Supabase (PostgreSQL + Auth + Storage) | 0 EUR (free tier) |
| Hebergement | Vercel | 0 EUR (free tier) |
| Emails transactionnels | Resend (3 000/mois gratuit) ou Brevo | 0 EUR |
| SMS alertes | Twilio (~0,07 EUR/SMS) | ~10-30 EUR/mois |
| Paiement | Stripe | 1,4% + 0,25 EUR/transaction |
| Monitoring | Vercel Analytics + Sentry free | 0 EUR |
| **Total infra** | | **~15-40 EUR/mois** |

### 8.3 Temps de developpement MVP

| Phase | Duree | Contenu |
|---|---|---|
| **Semaine 1-2** | Design + DB schema | Tables agents, entreprises, alertes, documents. Maquettes Figma. |
| **Semaine 3-4** | Auth + CRUD agents | Inscription, login, CRUD agents avec toutes les dates CNAPS. |
| **Semaine 5-6** | Dashboard + Alertes | Dashboard conformite, systeme de cron pour alertes email. |
| **Semaine 7-8** | Registres + Export | Registre du personnel digital, export PDF, checklist controle. |
| **Semaine 9-10** | Polish + Beta | Tests, corrections, onboarding, page de landing, SEO initial. |
| **Total MVP** | **8-10 semaines** | Temps plein solo dev |

### 8.4 Schema base de donnees (simplifie)

```sql
-- Tables principales
companies (id, name, siret, cnaps_authorization_number, authorization_expiry,
           manager_approval_number, approval_expiry, plan, stripe_customer_id)

agents (id, company_id, first_name, last_name, cnaps_card_number,
        card_issue_date, card_expiry_date, mac_last_date, mac_next_deadline,
        sst_last_date, sst_next_deadline, status, notes)

alerts (id, company_id, agent_id, type, trigger_date, sent_at, channel,
        acknowledged_at)

documents (id, company_id, agent_id, type, file_url, upload_date, expiry_date)

audit_checklist (id, company_id, check_type, status, last_verified, notes)
```

---

## SYNTHESE ET VERDICT

### Forces
- Douleur reelle et chiffree (3,9M EUR sanctions CNAPS, 30% non-conformes)
- Aucun concurrent direct sur le creneau "conformite CNAPS light pour TPE"
- Declencheur universel en 2026 (Dracar Ultimate)
- Techniquement trivial (MVP 8-10 semaines, <40 EUR/mois d'infra)
- SEO exploitable (requetes CNAPS peu disputees)
- ROI evident (49 EUR/mois vs 15 000 EUR d'amende)

### Faiblesses et reserves (maintenues)
- **Marche etroit** : 3 000-5 000 TPE cibles. Il faut 51-62 clients pour l'objectif. Penetration de 1-2% = faisable mais sans marge.
- **ARPU sous pression** : Les TPE de 5 agents ne paieront probablement pas 49 EUR/mois pour un outil de tracking. Le plan Solo a 29 EUR risque d'etre le plus populaire.
- **Barriere a l'entree quasi nulle** : Sekur peut copier le concept en 2 sprints. Un dev concurrent peut reproduire le MVP.
- **Risque Dracar Ultimate** : Si le portail CNAPS 2026 integre lui-meme des alertes d'expiration et un suivi des salaries, la valeur ajoutee de ConformSecure diminue fortement.
- **Niche sans expansion** : Contrairement a ConformCHR ou ConformLoc, la securite privee est un marche vertical sans passerelle vers d'autres secteurs.
- **Willingness to pay** : Les gerants TPE securite sont dans un secteur a faibles marges (tarif horaire minimum impose ~18 EUR). Chaque euro compte.

### Score final

| Critere | Note /5 |
|---|---|
| Taille du marche | 2/5 |
| Intensite de la douleur | 4/5 |
| Faisabilite technique | 5/5 |
| Defensabilite | 1.5/5 |
| Fit fondateur (solo dev JS/TS) | 4.5/5 |
| Potentiel MRR 3K EUR | 3/5 |
| **MOYENNE** | **3.3/5** |

### Recommandation

**VIABLE MAIS RISQUE.** Le projet fonctionne sur le papier : la douleur est reelle, le MVP est simple, le SEO est exploitable. Mais le marche est etroit, la defensabilite est nulle, et le risque de cannibalisation par Dracar Ultimate ou Sekur est eleve. A ne considerer que si les projets mieux notes (ConformCHR, ConformLoc) sont abandonnes ou si le fondateur a une connexion personnelle avec le secteur de la securite privee.

---

## SOURCES

- [Panorama 2024 de la Securite Privee - Comete](https://www.logiciel-comete.fr/2025/04/02/panorama-2024-de-la-securite-privee-les-chiffres-cles-a-retenir/)
- [Bilan CNAPS 2024 - 83-629.fr](https://www.83-629.fr/bilan-du-cnaps-2024-lannee-des-records-et-des-responsabilites/)
- [Rapport annuel CNAPS 2024 - ANews Securite](https://www.anews-securite.fr/rapport-annuel-2024-du-cnaps-une-annee-olympique/)
- [Reglementation securite privee 2025 - CEMA Group](https://cemagroup.fr/reglementation-securite-privee-cadre-legal-metiers/)
- [Registres obligatoires - Village Justice](https://www.village-justice.com/articles/entreprises-securite-privee-services-internes-securite-les-cahiers-registres,52523.html)
- [Sanctions CNAPS - Nous Avocats](https://www.nous-avocats.fr/fr/actualites/id-313-sanction-disciplinaire-cnaps)
- [Sekur - Tarifs](https://sekur.fr/tarifs/)
- [Comete - Logiciel](https://www.logiciel-comete.fr/comete/)
- [CNAPS - MAC CQP](https://www.cnaps.interieur.gouv.fr/Fiches-thematiques/Informations-relatives-au-maintien-et-a-l-actualisation-des-competences-MAC)
- [Dracar Ultimate - CNAPS](https://www.cnaps.interieur.gouv.fr/Actualites/Dracar-Ultimate-un-nouveau-portail-usager-pour-moderniser-et-simplifier-les-demarches)
- [Dracar Ultimate - Decret 26/12/2025](https://www.cnaps.interieur.gouv.fr/Publications/Fiches-thematiques/Parution-du-decret-du-26-12-2025-les-nouvelles-obligations-liees-au-lancement-de-Dracar-Ultimate)
- [Pappers - Code NAF 8010Z](https://www.pappers.fr/code-naf-ape/8010z-activites-de-securite-privee)
- [Legifrance - Article L617-8 CSI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025506373)
- [Audit conformite CNAPS 2026 - Sekur](https://sekur.fr/audit-de-conformite-cnaps-2026-7-points-cruciaux-pour-les-agences-de-securite-independantes/)
- [Organilog - Securite privee](https://fr.organilog.com/logiciel/logiciel-agent-securite/)
- [Trackforce Valiant - Acquisition TrackTik](https://www.businesswire.com/news/home/20220629005087/fr)
- [Securite Privee 10 chiffres - 83-629.fr](https://www.83-629.fr/securite-privee-10-chiffres-qui-derangent-rapport-de-branche-2025/)
