# Workflow Automatisé - Génération Posts LinkedIn

## Vue d'Ensemble

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  PROFIL SOURCE  │ ──▶ │   GÉNÉRATEUR    │ ──▶ │  DESIGN EXPERT  │ ──▶ │  POST PROMPT    │ ──▶ │  POSTS OUTPUT   │
│                 │     │    D'IDÉES      │     │                 │     │                 │     │                 │
│ profil-source.md│     │ ideas-generator │     │ design-expert.md│     │ post-prompt.md  │     │    posts/       │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

---

## Structure du Dossier

```
_bmad-output/linkedin/
├── workflow.md           ← CE FICHIER (mode d'emploi)
├── profil-source.md      ← Tes données personnelles
├── ideas-generator.md    ← Prompt pour générer des idées
├── idees.md              ← Banque d'idées de posts
├── design-expert.md      ← EXPERT DESIGN (consulté avant chaque post)
├── post-prompt.md        ← Prompt pour créer un post
├── calendrier.md         ← Planning de publication
└── posts/
    ├── waiting/          ← Posts créés, en attente de publication
    │   └── post-YYYY-MM-DD-HHmm-titre.md
    └── published/        ← Posts déjà publiés
        └── post-YYYY-MM-DD-HHmm-titre.md
```

### Cycle de Vie d'un Post

```
[Génération] → posts/waiting/ → [Publication LinkedIn] → posts/published/
```

Quand un post est publié sur LinkedIn, déplace-le de `waiting/` vers `published/`.

---

## WORKFLOW COMPLET

### Phase 1 : Génération d'Idées (1x par mois)

**Input :** `profil-source.md`
**Output :** `idees.md`

#### Étapes :

1. Ouvre une nouvelle conversation Claude
2. Copie ce prompt :

```
@_bmad-output/linkedin/profil-source.md
@_bmad-output/linkedin/ideas-generator.md

Lis mon profil source et génère 10 nouvelles idées de posts LinkedIn en suivant les consignes du générateur d'idées.

Assure-toi que les idées :
- Sont basées sur mes expériences RÉELLES
- Couvrent les 4 catégories (IA, Reconversion, Projets, Opinions)
- Ont des accroches percutantes
- Sont différentes des idées déjà présentes dans idees.md
```

3. Copie les idées générées dans `idees.md`

---

### Phase 2 : Génération de Posts (1x par semaine)

**Input :** `idees.md` + `design-expert.md` + `post-prompt.md`
**Output :** `posts/post-[DATE]-[HEURE]-[TITRE].md`

#### ⚠️ IMPORTANT : Le Design Expert

**AVANT chaque génération de post**, le fichier `design-expert.md` DOIT être consulté.
Il contient toutes les règles de formatage visuel pour LinkedIn.

#### Étapes :

1. Ouvre une nouvelle conversation Claude
2. Copie ce prompt :

```
@_bmad-output/linkedin/design-expert.md
@_bmad-output/linkedin/post-prompt.md
@_bmad-output/linkedin/idees.md

Génère 2 posts LinkedIn prêts à publier.

## ÉTAPE 1 : CONSULTER LE DESIGN EXPERT
Lis d'abord design-expert.md et applique TOUTES ses règles de formatage.

## ÉTAPE 2 : SÉLECTIONNER LES IDÉES
Choisis les idées #[NUMÉRO] et #[NUMÉRO] de la banque d'idées.

## ÉTAPE 3 : GÉNÉRER LES POSTS
Pour chaque post :
1. Applique le style LinkedIn 2026 du template
2. Respecte TOUS les sauts de ligne (règle critique)
3. Utilise le formatage Unicode bold pour les mots clés
4. Ajoute les émojis stratégiques (max 6-8)
5. Respecte la limite de 1300 caractères
6. Vérifie avec la checklist du design-expert.md

## ÉTAPE 4 : SAUVEGARDER
Sauvegarde chaque post dans :
_bmad-output/linkedin/posts/waiting/post-[YYYY-MM-DD]-[HHmm]-[titre-court].md

Exemple : post-2026-01-30-1435-workflow-claude-code.md
```

3. Vérifie les posts générés (checklist design-expert.md)
4. Copie dans Buffer pour programmer

---

### Phase 3 : Publication (2x par semaine)

**Input :** Posts générés
**Output :** Posts publiés sur LinkedIn via Buffer

#### Checklist :

- [ ] Ouvrir Buffer
- [ ] Coller le post (texte déjà formaté)
- [ ] Programmer : Mardi 8h30
- [ ] Programmer : Jeudi 8h30
- [ ] Vérifier dans la Queue

---

## PROMPT TOUT-EN-UN (Session Batch)

Pour générer une semaine complète de contenu en une seule session :

```
Je veux générer ma semaine de contenu LinkedIn.

## Fichiers de référence (ORDRE IMPORTANT)
@_bmad-output/linkedin/design-expert.md    ← CONSULTER EN PREMIER
@_bmad-output/linkedin/post-prompt.md
@_bmad-output/linkedin/idees.md

## Instructions

1. DESIGN : Lis d'abord design-expert.md et mémorise TOUTES les règles

2. SÉLECTION : Choisis 2 idées de la banque qui n'ont pas encore été utilisées
   - 1 idée technique (IA/Productivité ou Projet)
   - 1 idée personnelle (Reconversion ou Opinion)

3. GÉNÉRATION : Pour chaque idée, génère un post complet
   - Applique TOUTES les règles du design-expert.md
   - Style LinkedIn 2026 (formatage, émojis, structure)
   - SAUTS DE LIGNE partout (règle critique)
   - Formatage Unicode bold appliqué (3-5 mots max)
   - Maximum 1300 caractères
   - Hook percutant (max 10 mots, pas d'émoji)

4. VALIDATION : Vérifie chaque post avec la checklist du design-expert.md

5. OUTPUT : Crée 2 fichiers markdown dans _bmad-output/linkedin/posts/waiting/
   - Format : post-[YYYY-MM-DD]-[HHmm]-[titre].md
   - Inclus les métriques cibles pour chaque post

6. MISE À JOUR : Marque les idées utilisées dans idees.md
   - Ajoute [UTILISÉ - DATE] à côté de l'idée

Commence maintenant.
```

---

## Format de Nommage des Fichiers

**Pattern :** `post-[YYYY-MM-DD]-[HHmm]-[titre-court].md`

| Élément | Format | Exemple |
|---------|--------|---------|
| Date | YYYY-MM-DD | 2026-01-30 |
| Heure | HHmm | 1435 (14h35) |
| Titre | minuscules-tirets | workflow-claude-code |

**Exemples complets :**
- `post-2026-01-30-1435-workflow-claude-code.md`
- `post-2026-02-04-0912-app-club-basket.md`
- `post-2026-02-11-2048-art-du-prompt.md`

---

## Structure d'un Fichier Post Output

```markdown
# Post LinkedIn - [Titre]

**Date de création :** [YYYY-MM-DD HH:mm]
**Idée source :** #[NUMÉRO] - [Titre idée]
**Catégorie :** [Catégorie]
**Statut :** [ ] Programmé [ ] Publié

---

## Post (Copier-coller dans Buffer)

[CONTENU DU POST FORMATÉ ICI]

---

## Métriques Cibles

| Métrique | Score |
|----------|-------|
| Hook | /10 |
| Valeur ajoutée | /10 |
| Engagement potentiel | /10 |

## Premier Commentaire (Optionnel)

[Lien ou ressource à partager en commentaire]

---

## Post-Publication

**Publié le :** [DATE]
**Impressions :**
**Likes :**
**Commentaires :**
**Apprentissages :**
```

---

## Fréquence Recommandée

| Action | Fréquence | Durée |
|--------|-----------|-------|
| Générer des idées | 1x/mois | 15 min |
| Générer les posts | 1x/semaine (dimanche) | 20 min |
| Programmer Buffer | 1x/semaine | 5 min |
| Répondre aux commentaires | Quotidien | 5 min |
| Analyser les métriques | 1x/mois | 10 min |

**Total : ~45 min/semaine pour une présence LinkedIn consistante**

---

## Checklist Hebdomadaire

### Dimanche (Batch Session)
- [ ] Ouvrir Claude
- [ ] Charger design-expert.md EN PREMIER
- [ ] Lancer le "Prompt Tout-en-Un"
- [ ] Vérifier les 2 posts avec la checklist design
- [ ] Copier dans Buffer
- [ ] Programmer Mardi + Jeudi

### Mardi
- [ ] Vérifier que le post est publié
- [ ] Répondre aux commentaires (soir)

### Jeudi
- [ ] Vérifier que le post est publié
- [ ] Répondre aux commentaires (soir)

### Fin de mois
- [ ] Analyser les métriques (quel post a marché ?)
- [ ] Générer 10 nouvelles idées
- [ ] Ajuster la stratégie si besoin
