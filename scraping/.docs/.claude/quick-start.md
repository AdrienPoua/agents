# Quick Start Guide

Guide rapide pour utiliser efficacement la configuration `.claude` de ce projet.

## Installation

La configuration `.claude` est déjà en place. Aucune installation nécessaire.

## Premiers Pas

### 1. Commande la plus utile : /epct

Pour implémenter une feature complète :

```
/epct Ajouter la gestion des sponsors avec logo, nom et lien
```

**Ce qui se passe** :

1. Claude explore le code existant
2. Crée un plan détaillé avec TodoWrite
3. Implémente toutes les couches (Domain → UI)
4. Valide avec linting

### 2. Utiliser un agent spécialisé

Pour une tâche spécifique :

```
Utilise l'agent Clean Architecture pour m'aider à implémenter l'entité Player
```

```
Utilise l'agent Supabase pour créer une query avec JOIN entre teams et coaches
```

```
Utilise l'agent Sanity pour ajouter un type de contenu "Newsletter"
```

### 3. Créer un composant

```
Crée un composant TeamCard qui affiche le nom, logo et nombre de joueurs, en suivant prompts/component.md
```

### 4. Créer une server action

```
Crée une server action pour créer un sponsor, en suivant prompts/server-action.md
```

## Workflows Communs

### Feature Complète (Recommandé)

```bash
/epct [Description de votre feature]
```

**Exemples** :

```
/epct Ajouter les statistiques de matchs pour chaque équipe
/epct Créer un calendrier interactif des entraînements
/epct Implémenter la newsletter avec emails automatiques
```

### Feature Standard

```bash
/feature [nom] [description]
```

**Exemple** :

```
/feature match-stats Afficher les statistiques détaillées d'un match
```

### Refactoring

```bash
/refactor [cible] [raison]
```

**Exemple** :

```
/refactor components/match-card Améliorer les performances et la lisibilité
```

## Agents Disponibles

### Clean Architecture

**Quand l'utiliser** : Nouvelle entité ou feature complexe

```
Utilise l'agent Clean Architecture pour [tâche]
```

### Supabase

**Quand l'utiliser** : Queries DB, auth, storage, realtime

```
Utilise l'agent Supabase pour [tâche]
```

### Sanity

**Quand l'utiliser** : CMS, blog, contenu

```
Utilise l'agent Sanity pour [tâche]
```

## Exemples Concrets

### Exemple 1 : Nouvelle Entité "Sponsor"

```
/epct Implémenter la gestion des sponsors avec :
- Nom, logo (upload), URL, niveau (Or, Argent, Bronze)
- CRUD complet dans l'admin
- Affichage public sur la page d'accueil
```

**Résultat** : Claude crée toute l'architecture (entité, repository, use cases, actions, hooks, components, pages).

### Exemple 2 : Query Complexe

```
Utilise l'agent Supabase pour créer une query qui récupère :
- Tous les matchs d'une équipe
- Avec le gymnase associé
- Triés par date
- Uniquement les matchs à venir
```

**Résultat** : Claude fournit la query Supabase optimisée avec les bonnes projections.

### Exemple 3 : Nouveau Type Sanity

```
Utilise l'agent Sanity pour créer un type "Event" avec :
- Titre, date, description
- Image avec hotspot
- Catégorie (référence)
- Portable Text pour le contenu
```

**Résultat** : Claude crée le schéma Sanity complet avec validation.

### Exemple 4 : Refactoring de Composant

```
/refactor src/components/match-card
Extraire les sous-composants, améliorer le responsive, ajouter skeleton loading
```

**Résultat** : Claude analyse, planifie et refactorise le composant proprement.

## Configuration Recommandée

### settings.local.json

Créez ou modifiez `.claude/settings.local.json` :

```json
{
  "model": "sonnet",
  "autoRun": false,
  "hooks": {
    "onFileWrite": {
      "enabled": true,
      "commands": [
        {
          "name": "Auto-fix code style",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm fix"
        }
      ]
    }
  }
}
```

**Explications** :

- `model: "sonnet"` : Modèle Claude Sonnet (recommandé)
- `autoRun: false` : Demande confirmation avant d'exécuter des commandes
- `hooks.onFileWrite` : Auto-format après modification de fichiers

## Tips & Astuces

### 1. Soyez spécifique

❌ Mauvais :

```
Ajoute une nouvelle page
```

✅ Bon :

```
/epct Créer une page /admin/sponsors avec :
- Liste des sponsors dans un tableau
- Formulaire de création avec upload de logo
- Actions de modification et suppression
- Filtres par niveau (Or, Argent, Bronze)
```

### 2. Mentionnez les patterns

```
Crée un composant SponsorCard en suivant prompts/component.md avec :
- Image responsive
- Lien externe
- Badge pour le niveau
```

### 3. Référencez l'existant

```
Crée une entité Sponsor similaire à l'entité Team existante, en suivant l'agent Clean Architecture
```

### 4. Utilisez TodoWrite

Claude utilise TodoWrite automatiquement avec `/epct`, mais vous pouvez demander :

```
Crée un plan détaillé avec TodoWrite pour implémenter la gestion des sponsors
```

### 5. Combinez agents et commandes

```
/feature sponsor-management
Utilise l'agent Clean Architecture pour l'implémentation
```

## Commandes Git

### Format de Commit

```bash
# Respectez le format conventionnel
git commit -m "feat(sponsors): add sponsor management feature"
git commit -m "fix(match-card): resolve date display bug"
git commit -m "refactor(hooks): extract useMatches logic"
git commit -m "docs(.claude): update quick start guide"
```

### Hook Pre-Commit

Le hook pre-commit s'exécute automatiquement :

- Lint & format avec `pnpm fix`
- Valide le message de commit

## Debugging

### Les hooks ne fonctionnent pas

1. Vérifiez `.claude/settings.local.json` (JSON valide)
2. Testez la commande dans le terminal
3. Vérifiez que `pnpm fix` fonctionne

### Claude ne suit pas l'architecture

Mentionnez explicitement :

```
IMPORTANT : Suis STRICTEMENT l'agent Clean Architecture
```

### Résultat inattendu

Soyez plus précis dans votre demande, donnez des exemples.

## Checklist Avant de Commencer

- [ ] `.claude/settings.local.json` configuré
- [ ] `pnpm fix` fonctionne
- [ ] Git configuré avec Husky
- [ ] Lecture de `CLAUDE.md` (architecture du projet)
- [ ] Compréhension des agents disponibles

## Prochaines Étapes

1. **Lire** : `CLAUDE.md` pour comprendre l'architecture
2. **Essayer** : `/epct` avec une petite feature
3. **Explorer** : Les agents dans `.claude/agents/`
4. **Personnaliser** : Votre `settings.local.json`

## Ressources

- **Documentation complète** : `.claude/docs/README.md`
- **Architecture du projet** : `CLAUDE.md`
- **Règles de code** : `.cursor/rules/nextjs.mdc`

---

**Prêt à coder ? Commencez par** :

```
/epct Ajouter [votre feature]
```

Bonne chance ! 🚀
