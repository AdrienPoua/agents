# .claude Documentation

Bienvenue dans la documentation du dossier `.claude` pour ce projet.

## Structure

```
.claude/
├── agents/          # Agents spécialisés
├── commands/        # Slash commands personnalisés
├── prompts/         # Prompts réutilisables
├── hooks/           # Hooks d'automatisation
├── docs/            # Cette documentation
└── settings.local.json  # Configuration locale
```

## Agents Spécialisés

Les agents sont des assistants spécialisés pour des tâches spécifiques :

### agents/clean-architecture.md

**Rôle** : Implémentation de features suivant Clean Architecture

**Utilisation** : Demandez à Claude d'utiliser l'agent Clean Architecture quand vous ajoutez une nouvelle entité ou feature complexe.

**Exemple** :

```
Utilise l'agent Clean Architecture pour m'aider à implémenter la gestion des joueurs
```

**Ce qu'il fait** :

- Guide à travers toutes les couches (Domain → Infrastructure → Application → Presentation → UI)
- Respecte les patterns Repository, Use Case, Factory
- Assure la cohérence avec l'architecture existante

### agents/supabase.md

**Rôle** : Opérations Supabase (DB, Auth, Storage, Realtime)

**Utilisation** : Pour toute opération liée à Supabase.

**Exemple** :

```
Utilise l'agent Supabase pour m'aider à créer une query avec JOIN
```

**Ce qu'il fait** :

- Patterns de queries Supabase
- Gestion d'authentification
- Opérations de storage
- Abonnements real-time
- RLS policies

### agents/sanity.md

**Rôle** : Intégration CMS Sanity

**Utilisation** : Pour gérer le contenu blog/news avec Sanity.

**Exemple** :

```
Utilise l'agent Sanity pour m'aider à créer un nouveau type de contenu
```

**Ce qu'il fait** :

- Queries GROQ
- Schémas Sanity
- Optimisation d'images
- Portable Text rendering
- Webhooks et revalidation

## Slash Commands

Les commandes slash sont des workflows prédéfinis :

### /epct

**Workflow complet** : Explore → Plan → Code → Test

**Usage** : `/epct [description de la feature]`

**Exemple** :

```
/epct Ajouter la gestion des statistiques de joueurs
```

**Phases** :

1. **Explore** : Recherche et analyse du code existant
2. **Plan** : Plan détaillé avec TodoWrite
3. **Code** : Implémentation complète
4. **Test** : Validation avec linting et tests

### /feature

**Création de feature complète** suivant Clean Architecture

**Usage** : `/feature [nom] [description]`

**Exemple** :

```
/feature player-stats Afficher les statistiques des joueurs
```

**Ce qu'il fait** :

- Pose des questions de clarification
- Crée le plan d'implémentation
- Implémente toutes les couches
- Vérifie la cohérence

### /refactor

**Refactoring de code** en préservant l'architecture

**Usage** : `/refactor [cible] [raison]`

**Exemple** :

```
/refactor components/match-card Améliorer les performances
```

**Ce qu'il fait** :

- Analyse le code actuel
- Identifie les améliorations
- Planifie le refactoring
- Met à jour tous les fichiers dépendants

## Prompts Réutilisables

Les prompts sont des templates pour des tâches communes :

### prompts/component.md

**Template pour créer des composants React**

**Utilisation** : Référencez ce prompt quand vous créez un composant.

**Contenu** :

- Structure de fichier
- Conventions de nommage
- Client vs Server Components
- Patterns de styling
- Gestion d'état
- Accessibility

### prompts/server-action.md

**Template pour créer des Server Actions**

**Utilisation** : Référencez ce prompt quand vous créez une action serveur.

**Contenu** :

- Structure standard
- Patterns CRUD
- Validation avec Zod
- Gestion d'erreurs
- Authentication
- Revalidation

## Hooks d'Automatisation

Les hooks s'exécutent automatiquement sur certains événements :

### hooks/pre-commit.md

**Documentation du hook Git pre-commit**

**Ce qu'il fait** :

- Lint avec ESLint (auto-fix)
- Format avec Prettier
- Valide le message de commit

**Format de commit** :

```bash
type(scope): message

# Types: feat, fix, docs, style, refactor, test, chore
```

### hooks/file-write.md

**Configuration des hooks Claude Code**

**Ce qu'il fait** :

- Auto-format après écriture de fichier
- Lint automatique
- Type check optionnel

**Configuration** : Voir `settings.local.json`

## Configuration

### settings.local.json

Fichier de configuration locale (gitignored).

**Structure recommandée** :

```json
{
  "model": "sonnet",
  "autoRun": false,
  "hooks": {
    "onFileWrite": {
      "enabled": true,
      "commands": [
        {
          "name": "Fix code style",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm fix"
        }
      ]
    }
  }
}
```

## Workflows Courants

### 1. Ajouter une nouvelle feature

```bash
# Option 1 : EPCT complet
/epct Ajouter la gestion des événements

# Option 2 : Feature command
/feature event-management CRUD pour les événements du club
```

### 2. Refactorer du code existant

```bash
/refactor src/components/team-card Extraire sous-composants
```

### 3. Requête Supabase complexe

```bash
Utilise l'agent Supabase pour m'aider à créer une query qui récupère les équipes avec leurs coachs et leurs prochains matchs
```

### 4. Intégration Sanity

```bash
Utilise l'agent Sanity pour créer un nouveau type "Event" avec date, titre, description et image
```

### 5. Implémenter une entité complète

```bash
Utilise l'agent Clean Architecture pour implémenter l'entité "Sponsor" avec logo, nom, URL et niveau de sponsoring
```

## Bonnes Pratiques

### 1. Utiliser les agents appropriés

- **Clean Architecture** : Nouvelles features, nouvelles entités
- **Supabase** : Queries DB, auth, storage
- **Sanity** : Contenu CMS, blog, news

### 2. Préférer les slash commands

- `/epct` : Features complexes
- `/feature` : Features standard
- `/refactor` : Refactoring

### 3. Référencer les prompts

Quand Claude crée un composant ou une action, mentionnez le prompt approprié :

```
Crée un nouveau composant MatchList en suivant prompts/component.md
```

### 4. Activer les hooks utiles

Dans `settings.local.json`, activez les hooks qui vous aident :

```json
{
  "hooks": {
    "onFileWrite": {
      "enabled": true,
      "commands": [
        {
          "name": "Auto-fix",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm fix"
        }
      ]
    }
  }
}
```

### 5. Commits conventionnels

Respectez le format de commit :

```bash
feat(teams): add team statistics page
fix(match-card): correct date display format
docs(.claude): update agent documentation
refactor(hooks): simplify useMatches logic
```

## FAQ

### Comment savoir quel agent utiliser ?

- **Nouvelle feature complète** → Clean Architecture
- **Query ou auth Supabase** → Supabase
- **Contenu blog/CMS** → Sanity
- **Pas sûr** → `/epct` qui guidera

### Différence entre /epct et /feature ?

- **/epct** : Workflow complet avec phase d'exploration approfondie
- **/feature** : Plus direct, pour features bien définies

### Les hooks ralentissent mon workflow

Désactivez temporairement dans `settings.local.json` :

```json
{
  "hooks": {
    "onFileWrite": {
      "enabled": false
    }
  }
}
```

### Comment ajouter mon propre agent ?

Créez un fichier `.claude/agents/mon-agent.md` :

```markdown
# Mon Agent

## Your Role

[Description du rôle]

## Stack Context

[Contexte technique]

## Process

[Processus détaillé]
```

Puis référencez-le :

```
Utilise l'agent mon-agent pour...
```

## Ressources

### Documentation Officielle

- **Claude Code** : https://docs.anthropic.com/claude/docs/claude-code
- **Next.js 14** : https://nextjs.org/docs
- **Supabase** : https://supabase.com/docs
- **Sanity** : https://www.sanity.io/docs

### Fichiers Clés du Projet

- `CLAUDE.md` : Documentation principale du projet
- `.cursor/rules/nextjs.mdc` : Règles de code Next.js
- `README.md` : Setup et utilisation

### Support

- Issues GitHub du projet
- Documentation dans `docs/`
- CLAUDE.md pour l'architecture

## Mise à Jour

Pour mettre à jour cette configuration :

1. Modifier les fichiers dans `.claude/`
2. Tester avec Claude Code
3. Committer les changements :
   ```bash
   git add .claude/
   git commit -m "docs(.claude): update agent configuration"
   ```

---

**Version** : 1.0.0
**Dernière mise à jour** : 2025-10-30
