# Workflow : De Zero a Projet SaaS Valide

> **Usage :** Donne ce fichier a une IA avec ton profil. Elle executera toutes les phases et produira un projet SaaS valide avec fiche complete, validation marche et plan d'action.
>
> **Prerequis :** Acces web (recherche + fetch), capacite a generer des fichiers markdown.

---

## PHILOSOPHIE : WORKFLOW ITERATIF

Ce workflow est concu pour etre **execute plusieurs fois**. Chaque execution est un **"run"** qui genere de nouvelles idees SaaS sans interferer avec les runs precedents.

**Principes :**
- **Fichiers permanents** : `profil-fondateur.md`, `criteres-filtrage.md` et ce `workflow.md` ne changent pas entre les runs.
- **Fichiers cumulatifs** : `suivi-idees.md` et `idee-worth-it.md` **grandissent** a chaque run. On APPEND les nouvelles donnees, on n'ecrase jamais.
- **Fichiers de run** : Chaque run stocke ses artefacts intermediaires dans `runs/run-NNN/` (idees, filtrage, fiches, decision). Ainsi, rien n'est ecrase d'un run a l'autre.

**Arborescence :**
```
_bmad-output/analysis/idee-projects/
├── profil-fondateur.md          (permanent)
├── criteres-filtrage.md         (permanent)
├── workflow.md                  (permanent)
├── suivi-idees.md               (cumulatif entre runs, colonne Run)
├── idee-worth-it.md             (cumulatif, append a chaque run)
├── runs/
│   ├── run-001/
│   │   ├── idees/               (Phase 1 : les 12 idees generees)
│   │   ├── filtrage/            (Phase 1b : resultats de filtrage web)
│   │   ├── fiches/              (Phase 2 : fiches enrichies des survivantes)
│   │   └── decision.md          (Phase 4 : decision de ce run)
│   └── run-002/
│       └── ...
```

---

## INSTRUCTIONS POUR L'IA

Tu es un analyste strategique SaaS. L'utilisateur te donne son profil (competences, contraintes, objectifs). Tu vas executer les 5 phases ci-dessous **sequentiellement**, en produisant un fichier de sortie a chaque phase. Chaque phase s'appuie sur les resultats de la precedente.

**Regles :**
- Sois brutal dans les eliminations. Mieux vaut 3 excellentes idees que 20 mediocres.
- Chaque affirmation de marche doit etre verifiable (taille, concurrents, reglementation).
- Ne jamais inventer de donnees. Si tu ne sais pas, dis-le.
- Privilegier les niches sous-servies aux marches sexy mais satures.

**Fichier de suivi : `suivi-idees.md`**

Ce fichier est le **registre central** de toutes les idees. Il DOIT etre mis a jour a chaque phase. Format :

```markdown
| # | Nom du projet | Run | Statut | Phase | Score /20 | Commentaire |
|---|--------------|-----|--------|-------|-----------|-------------|
| 1 | Exemple Projet | 1 | en cours d'etude | Phase 2 | 16 | En attente d'approfondissement |
| 2 | Autre Projet | 1 | rejetee | Phase 1b | 8 | Concurrent dominant : Doctolib (levee 500M$+) |
| 3 | Bon Projet | 1 | validee | Phase 3 | 18 | Recherche BMAD concluante, marche confirme |
```

**Statuts possibles :**
- **en cours d'etude** → le workflow de decision est encore en cours pour cette idee
- **rejetee** → le projet est abandonne (le commentaire DOIT contenir la raison precise)
- **validee** → le projet a passe l'etape BMAD avec succes

**Regle critique :** A chaque phase, LIRE `suivi-idees.md` en premier. Ne JAMAIS generer une idee deja presente (meme rejetee). Ne JAMAIS re-analyser un projet deja rejete.

---

## PHASE 0 : Chargement du contexte et detection du run

**Action :** Charger les artefacts existants et determiner le numero de run.

### Etape 1 : Charger les fichiers permanents

1. Lire `profil-fondateur.md` — le profil complet du fondateur (competences, contraintes, objectifs)
2. Lire `criteres-filtrage.md` — les criteres obligatoires, eliminatoires, et la grille /20
3. Lire `suivi-idees.md` — le registre de toutes les idees deja explorees, avec leur statut

**Si `suivi-idees.md` existe deja :** analyser les idees deja presentes. Ne PAS regenerer ou re-analyser les idees deja listees (qu'elles soient rejetees, en cours ou validees). Reprendre le workflow la ou il s'est arrete.

**Si `suivi-idees.md` n'existe pas :** le creer vide avec l'en-tete du tableau (incluant la colonne Run).

### Etape 2 : Determiner le numero de run

1. Compter les dossiers existants dans `runs/` pour determiner le prochain numero de run.
   - Si `runs/` n'existe pas ou est vide → c'est le **Run 1**.
   - Si `runs/` contient `run-001/`, `run-002/` → le prochain est **Run 3** (`run-003/`).
2. Creer le dossier du run : `runs/run-NNN/` avec les sous-dossiers `idees/`, `filtrage/`, `fiches/`.
3. Si ce n'est pas le premier run, lire `suivi-idees.md` pour determiner le **dernier # d'idee** utilise. Les nouvelles idees continueront la numerotation a partir de ce numero.
4. Annoncer clairement : **"Demarrage du Run NNN"** avec le numero du dernier # d'idee connu.

---

## PHASE 1 : Generation d'Idees

**Input :** `profil-fondateur.md` + `criteres-filtrage.md`
**Output :** `runs/run-NNN/idees/` (un fichier par idee)

### IMPORTANT : Contexte neuf obligatoire

**Avant de commencer cette phase, tu DOIS lancer un nouvel agent via l'outil Task.** L'objectif est de repartir avec un contexte vierge, sans biais lies aux phases precedentes. Le nouvel agent :
1. Charge `profil-fondateur.md` et `criteres-filtrage.md` comme seul contexte
2. Lit les instructions de cette Phase 1 (ci-dessous)
3. Execute la generation d'idees avec un regard frais

Cela evite que l'IA soit "enfermee" dans les reflexions des phases precedentes et garantit une exploration plus large et creative.

### Instructions

Generer **12 idees de projets SaaS** en utilisant ces angles d'attaque. Pour ce faire, tu utilisera 12 agents qui tournent en parallele sans rentrer en conflit :

```
ANGLES D'ATTAQUE :

1. GENS QUI PERDENT DE L'ARGENT MAINTENANT
   - Amendes, penalites, sanctions imminentes
   - Le prospect perd deja du fric, tu lui vends la solution

2. LISTES PUBLIQUES DE PROSPECTS
   - Registres professionnels (ORIAS, Ordres, CCI, annuaires sectoriels)
   - Si tu peux scraper la liste complete de tes prospects, l'acquisition est quasi-gratuite

3. BUDGETS DEJA ALLOUES
   - Le prospect paye DEJA un consultant, un comptable ou un prestataire pour ce probleme
   - Tu remplaces un humain cher par un SaaS pas cher. Pas besoin de creer le budget, il existe

4. SOLUTIONS ACTUELLES RIDICULES
   - Excel, papier, Word, copier-coller
   - La barre est tellement basse que n'importe quel SaaS a l'air magique

5. DECIDEUR UNIQUE
   - Un seul mec decide et paye. Pas de comite d'achat, pas de process en 6 mois
   - TPE, independants, artisans, professions liberales

6. DOULEUR VISIBLE EN LIGNE
   - Gens qui se plaignent sur Reddit, forums, Facebook, LinkedIn
   - Preuve que le probleme est reel ET que tu peux les atteindre sur ces canaux

7. PATTERNS QUI MARCHENT AILLEURS
   - Probleme resolu aux US/UK par un SaaS mais pas en France
   - Ou resolu dans un secteur mais pas dans un secteur similaire

8. DECLENCHEURS CALENDAIRES
   - Dates butoirs connues (fin d'annee fiscale, renouvellements, deadlines reglementaires)
   - Tu sais QUAND le prospect va avoir mal, tu peux timer ton acquisition

9. TEMPS PERDU MASSIVEMENT
   - Le client passe des heures/jours sur une tache faute de solution adaptee
   - Facile a quantifier : "vous passez 10h/semaine la-dessus, mon outil le fait en 20 minutes"

10. RISQUE PERSONNEL DU DECIDEUR
    - Pas juste "l'entreprise risque une amende" : le decideur LUI-MEME risque de perdre
      sa licence, son agrement, sa responsabilite personnelle
    - Quand c'est personnel, le portefeuille s'ouvre instantanement

11. FRAGMENTATION D'OUTILS
    - Le prospect jongle entre 3-4 outils, Excel, emails, un vieux logiciel desktop pour UN seul job
    - Celui qui unifie tout dans un SaaS propre gagne. Argument visuel : "au lieu de ca, ca, ca et ca → juste ca"

12. MARCHES EN CROISSANCE RAPIDE
    - Nouveaux metiers ou secteurs qui explosent avec zero outillage dedie
    - Ex: gestionnaires de bornes de recharge, consultants RSE, auditeurs energetiques
    - Ils sont de plus en plus nombreux, ils galerent, et personne ne leur fait d'outil encore
```

Pour chaque idee, fournir :
- Nom du projet (2-3 mots)
- La cible (qui paye)
- La douleur (1 phrase)
- Le declencheur d'achat (quel evenement force l'action)
- Les concurrents
- La differentiation
- Score rapide /20 (grille de `criteres-filtrage.md`)

**Filtrage :** Eliminer immediatement celles qui violent un critere eliminatoire. Garder les meilleures.

**Numerotation des idees :** Continuer depuis le dernier # dans `suivi-idees.md` (determine en Phase 0). Si le dernier # est 12 (Run 1), les nouvelles idees commencent a 13.

**Mise a jour `suivi-idees.md` :** Ajouter chaque idee generee au registre avec le numero de run actuel :
- Idees retenues → statut `en cours d'etude`, phase `Phase 1`, **run = NNN**, commentaire vide
- Idees eliminees → statut `rejetee`, phase `Phase 1`, **run = NNN**, commentaire = raison d'elimination (critere eliminatoire viole)

---

## PHASE 1b : Filtrage par recherche web

**Input :** `runs/run-NNN/idees/` (idees survivantes de la Phase 1)
**Output :** `runs/run-NNN/filtrage/` (resultats de recherche) + `runs/run-NNN/idees/` mis a jour (5-7 survivantes)

### Instructions

Pour chaque idee survivante de la Phase 1, faire une **recherche web** pour verifier. Stocker les resultats de recherche dans `runs/run-NNN/filtrage/` (un fichier par idee) :

```
POUR CHAQUE IDEE :
1. CONCURRENCE
   - Rechercher "[nom du besoin] + logiciel/SaaS/outil/app" en francais ET anglais
   - Identifier les 3-5 premiers resultats
   - Verifier les levees de fonds (Crunchbase, articles presse)
   - Scorer : 5 = zero concurrent | 4 = concurrents faibles | 3 = existe mais inadapte | 2 = competition moderee | 1 = sature

2. PREUVE DE DOULEUR
   - Rechercher "[metier/cible] + galere/probleme/aide/difficulte" sur forums, Facebook, Reddit
   - Verifier les avis negatifs des solutions existantes
   - Scorer : 5 = plaintes quotidiennes | 3 = quelques temoignages | 1 = silence

3. TAILLE DE MARCHE
   - Rechercher le nombre de cibles (bases publiques, statistiques sectorielles)
   - Scorer : 5 = 100K+ cibles | 4 = 10-100K | 3 = 1-10K | 2 = 100-1K | 1 = <100

4. DECLENCHEUR VERIFIABLE
   - Trouver la source legale (Legifrance, Journal Officiel, directive UE)
   - Verifier que des sanctions existent reellement
   - Scorer : 5 = deadline imminente + sanctions reelles | 3 = obligation sans sanctions | 1 = pas d'obligation
```

**Eliminer brutalement** toute idee qui :
- A un concurrent avec 100M$+ de levees
- A plus de 5 concurrents SaaS etablis sur le meme besoin
- N'a aucune preuve de douleur trouvable en ligne
- A un marche < 500 cibles

**Garder 5-7 survivantes.** Documenter chaque elimination avec la raison.

**Mise a jour `suivi-idees.md` :**
- Idees eliminees → passer le statut a `rejetee`, phase `Phase 1b`, commentaire = raison precise (ex: "concurrent dominant : X, levee 200M$")
- Idees survivantes → garder `en cours d'etude`, mettre a jour la phase a `Phase 1b`

---

## PHASE 2 : Approfondissement

**Input :** `runs/run-NNN/idees/` (5-7 survivantes de la Phase 1b)
**Output :** `runs/run-NNN/fiches/` (une fiche enrichie par projet)

### Instructions

Pour chaque projet survivant, creer une fiche enrichie dans `runs/run-NNN/fiches/` :

```
POUR CHAQUE PROJET, ENRICHIR LA FICHE :

1. CONTEXTE METIER (expliquer comme a un non-expert)
   - C'est quoi ce metier/secteur ?
   - Pourquoi il y a un probleme maintenant ?
   - Quel est le contexte reglementaire ?

2. LA DOULEUR (precis et chiffre)
   - Qui souffre exactement ? (profil, nombre)
   - De quoi ? (probleme concret, quotidien)
   - Combien ca coute ? (EUR perdus, heures gaspillees, risque)

3. LA SOLUTION (maquette textuelle)
   - Ce que fait l'application (schema ASCII)
   - Fonctionnalites MVP (tableau P0/P1/P2)
   - Parcours utilisateur en 4-5 etapes

4. LE DECLENCHEUR D'ACHAT
   - Quel evenement force l'action ? (tableau : declencheur | moment | urgence)

5. ACQUISITION CLIENT
   - Comment trouver les clients ? (bases publiques, SEO, groupes, prescripteurs)
   - Message d'accroche (1 phrase)
   - Lead magnet possible ?

6. BUSINESS MODEL
   - Pricing (tableau par segment)
   - Comparaison avec l'alternative actuelle (consultant, Excel, rien)
   - ROI calcule pour le client

7. CONCURRENCE
   - Qui existe ? (noms + pricing + faiblesses)
   - Angle differenciateur (1 phrase)

8. TECHNIQUE
   - Complexite /5
   - Temps MVP estime
   - Stack requise
   - Points impressionnants pour CV
```

**Mise a jour `suivi-idees.md` :** Mettre a jour la phase a `Phase 2` pour les idees enrichies. Le statut reste `en cours d'etude`.

---

## PHASE 3 : Recherche BMAD approfondie

**Input :** `runs/run-NNN/fiches/` (projets enrichis de la Phase 2)
**Output :** Un dossier de recherche par projet dans `_bmad-output/planning-artifacts/research/`

### IMPORTANT : Agents paralleles avec contexte neuf

Pour chaque projet survivant dans `runs/run-NNN/fiches/`, tu DOIS lancer **un agent Task en parallele** avec un contexte neuf. Chaque agent :

1. Charge le fichier du projet dans `runs/run-NNN/fiches/` et lit UNIQUEMENT la fiche du projet qui lui est assigne
2. Charge `profil-fondateur.md` pour le contexte fondateur
3. Execute le workflow `bmad-bmm-domain-research` en mode YOLO (pas de questions interactives)

### Mode YOLO : reponses automatiques

Les workflows BMAD research sont interactifs par defaut (ils posent des questions). En mode YOLO, l'agent doit **repondre automatiquement** en extrayant les informations de la fiche dans `runs/run-NNN/fiches/` :

- **"Quel domaine ?"** → Le secteur/metier de la cible du projet
- **"Quel aspect specifique ?"** → La douleur identifiee dans la fiche projet
- **"Quels objectifs de recherche ?"** → Valider la taille du marche, la concurrence, la reglementation, et la faisabilite technique
- **"Quel scope ?"** → Focus sur le marche francais, recherche approfondie

### Workflows a executer par projet

Pour chaque projet, lancer le workflow :
- `_bmad/bmm/workflows/1-analysis/research/workflow-domain-research.md`

Les fichiers de sortie seront generes dans `_bmad-output/planning-artifacts/research/` avec le nom du projet.

### Resultat attendu

A la fin de cette phase, chaque projet survivant dispose d'un dossier de recherche BMAD complet couvrant :
- Analyse du domaine/industrie
- Paysage concurrentiel
- Cadre reglementaire
- Tendances technologiques
- Dynamiques de l'ecosysteme

Chaque agent DOIT produire un fichier de sortie dans `_bmad-output/planning-artifacts/research/` meme si la recherche revele des red flags. Ce fichier est l'artefact de progression — il sauvegarde le travail fait et evite de le refaire.

**Mise a jour `suivi-idees.md` :**
- Projets dont la recherche BMAD est concluante → passer le statut a `validee`, phase `Phase 3`, commentaire = resume des conclusions positives
- Projets dont la recherche BMAD revele des red flags majeurs → passer le statut a `rejetee`, phase `Phase 3`, commentaire = raison precise (ex: "recherche BMAD : marche reel < 200 cibles, reglementation non applicable")
- Projets dont la recherche BMAD est mitigee → garder `en cours d'etude`, phase `Phase 3`, commentaire = points a clarifier

---

## PHASE 4 : Decision finale

**Input :** `runs/run-NNN/fiches/` + dossiers de recherche BMAD de la Phase 3
**Output :** `runs/run-NNN/decision.md` + `idee-worth-it.md` (append)

### Instructions

1. **Synthese par projet** : Pour chaque projet survivant, produire un resume de 10 lignes max integrant :
   - Les donnees de la fiche projet (Phase 2)
   - Les decouvertes de la recherche BMAD (Phase 3)
   - Les signaux positifs et les red flags

2. **Tableau comparatif** : Scorer chaque projet sur la grille /20 de `criteres-filtrage.md`, MISE A JOUR avec les donnees reelles trouvees en Phase 1b et Phase 3 (remplacer les estimations par des faits verifies)

3. **Analyse des ecarts** :
   - Qui gagne sur chaque critere ?
   - Le #1 a-t-il un point faible majeur ?
   - Le #2 a-t-il un avantage decisif quelque part ?

4. **Verdict** : Declarer le projet gagnant avec argumentation claire :
   - Pourquoi celui-la et pas les autres
   - Les 3 forces decisives
   - Les risques principaux et comment les mitiger
   - La premiere action concrete a faire demain matin

5. **Archivage des idees validees** : **APPEND** dans `idee-worth-it.md` les nouvelles idees de ce run ayant passe la Phase 3 BMAD avec le statut `validee`. Ne jamais ecraser le contenu existant. Pour chaque idee ajoutee, inclure :
   - Nom du projet
   - Run d'origine
   - Cible
   - Douleur (1 phrase)
   - Score final /20
   - Pourquoi elle a ete validee (1-2 phrases)
   - Lien vers le dossier BMAD

   Si `idee-worth-it.md` n'existe pas, le creer avec un en-tete. S'il existe deja, ajouter les nouvelles idees a la suite.

   Ce fichier sert de **banque d'idees validees cumulative** reutilisable pour les prochaines iterations du workflow. Meme si une idee n'est pas le projet gagnant, elle reste une piste solide pour plus tard.

---

## SYNTHESE DES FICHIERS PRODUITS

### Fichiers permanents (ne changent pas entre runs)
```
profil-fondateur.md
criteres-filtrage.md
workflow.md
```

### Fichiers cumulatifs (grandissent a chaque run)
```
suivi-idees.md          → registre central, colonne Run pour identifier l'origine
idee-worth-it.md        → banque d'idees validees par BMAD (append uniquement)
```

### Fichiers de run (dans runs/run-NNN/)
```
Phase 0  → Creation de runs/run-NNN/ + sous-dossiers (idees/, filtrage/, fiches/)
         → suivi-idees.md (cree ou charge, detection du dernier # d'idee)
Phase 1  → runs/run-NNN/idees/ (12 idees generees, filtrees)
         → suivi-idees.md (mis a jour : toutes les idees ajoutees avec Run = NNN)
Phase 1b → runs/run-NNN/filtrage/ (resultats de recherche web)
         → runs/run-NNN/idees/ (5-7 survivantes mises a jour)
         → suivi-idees.md (mis a jour : eliminees = rejetee + raison)
Phase 2  → runs/run-NNN/fiches/ (fiches enrichies)
         → suivi-idees.md (mis a jour : phase = Phase 2)
Phase 3  → _bmad-output/planning-artifacts/research/ (1 dossier BMAD par projet)
         → suivi-idees.md (mis a jour : validee / rejetee / en cours d'etude)
Phase 4  → runs/run-NNN/decision.md (decision de ce run)
         → idee-worth-it.md (APPEND des idees validees de ce run)
         → suivi-idees.md (mis a jour : projet gagnant identifie)
```

---

*Workflow v3.0 - Runs iteratifs - Mis a jour le 6 fevrier 2026*
