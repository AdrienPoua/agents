# Husky - Documentation Complète

## Table des Matières

1. [Qu'est-ce que Husky ?](#quest-ce-que-husky-)
2. [Pourquoi utiliser Husky ?](#pourquoi-utiliser-husky-)
3. [Installation et Configuration](#installation-et-configuration)
4. [Utilisation Quotidienne](#utilisation-quotidienne)
5. [Hooks Actuels du Projet](#hooks-actuels-du-projet)
6. [Top 10 des Hooks Git les Plus Utilisés](#top-10-des-hooks-git-les-plus-utilisés)
7. [Créer un Hook Personnalisé](#créer-un-hook-personnalisé)
8. [Bonnes Pratiques](#bonnes-pratiques)
9. [Ressources](#ressources)

---

## Qu'est-ce que Husky ?

**Husky** est un outil populaire dans l'écosystème Node.js qui facilite la gestion des **Git hooks** (crochets Git). Un Git hook est un script qui s'exécute automatiquement lorsqu'un événement Git spécifique se produit (commit, push, merge, etc.).

### Le Problème Résolu

Sans Husky, les Git hooks sont :

- Stockés dans `.git/hooks/` (non versionné)
- Difficiles à partager avec l'équipe
- Nécessitent une configuration manuelle pour chaque développeur
- Peuvent être oubliés ou mal configurés

### La Solution Husky

Husky permet de :

- **Versionner les hooks** : Les hooks sont stockés dans le repository (dossier `.husky/`)
- **Partager automatiquement** : Tous les développeurs reçoivent les mêmes hooks
- **Configurer facilement** : Installation simple via npm/pnpm/yarn
- **Automatiser les vérifications** : Garantir la qualité du code avant commit/push

### Concepts Clés

```
┌─────────────────────────────────────────────────────────────┐
│                     Workflow Git                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  git add .                                                  │
│     ↓                                                       │
│  git commit -m "message"                                    │
│     ↓                                                       │
│  🪝 pre-commit hook    ← Husky exécute votre script       │
│     ↓                                                       │
│  🪝 commit-msg hook    ← Validation du message             │
│     ↓                                                       │
│  ✅ Commit créé                                             │
│     ↓                                                       │
│  git push                                                   │
│     ↓                                                       │
│  🪝 pre-push hook      ← Tests, audits, etc.               │
│     ↓                                                       │
│  ✅ Push effectué                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Pourquoi utiliser Husky ?

### 1. Automatisation des Vérifications

Husky permet d'automatiser des tâches importantes sans intervention manuelle :

- **Linting et formatage** : S'assurer que le code respecte les standards avant commit
- **Tests unitaires** : Exécuter les tests avant push
- **Validation des messages** : Garantir des messages de commit cohérents
- **Audit de sécurité** : Vérifier les vulnérabilités avant push
- **Vérification des secrets** : Empêcher le commit de fichiers sensibles

### 2. Amélioration de la Qualité du Code

En bloquant les commits/pushes problématiques, Husky :

- Réduit les bugs introduits dans la codebase
- Maintient un style de code uniforme
- Force l'utilisation des bonnes pratiques
- Améliore la lisibilité de l'historique Git

### 3. Cohérence d'Équipe

Tous les développeurs partagent les mêmes règles :

- Pas de "ça fonctionne sur ma machine"
- Standards appliqués uniformément
- Onboarding simplifié pour les nouveaux membres
- Moins de débats sur le style de code

### 4. Prévention des Erreurs

Husky agit comme un filet de sécurité :

- Empêche les commits de code cassé
- Bloque le push de code non testé
- Détecte les problèmes tôt dans le cycle de développement
- Réduit les rejets en code review

### 5. Intégration Continue Plus Propre

- Moins d'échecs CI/CD car les problèmes sont détectés localement
- Temps de build réduit (pas besoin de relancer pour des erreurs de lint)
- Historique Git plus propre et professionnel

---

## Installation et Configuration

### Prérequis

- **Node.js** : Version 14 ou supérieure
- **Git** : Version 2.9 ou supérieure
- **Gestionnaire de paquets** : npm, pnpm ou yarn
- **Repository Git initialisé** : `git init` déjà exécuté

### Installation

#### Avec npm

```bash
npm install --save-dev husky
```

#### Avec pnpm

```bash
pnpm add -D husky
```

#### Avec yarn

```bash
yarn add --dev husky
```

### Initialisation

Une fois installé, initialisez Husky :

```bash
npx husky init
```

Cette commande :

1. Crée le dossier `.husky/` à la racine du projet
2. Ajoute un exemple de hook `pre-commit`
3. Configure le script `prepare` dans `package.json`

**Résultat dans package.json** :

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

Le script `prepare` s'exécute automatiquement après `npm install`, garantissant que Husky est toujours configuré.

### Créer un Hook

Pour créer un nouveau hook, utilisez :

```bash
npx husky add .husky/pre-commit "npm test"
```

Ou créez manuellement le fichier :

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm test
```

**Important** : Rendez le fichier exécutable sur Unix/Linux/Mac :

```bash
chmod +x .husky/pre-commit
```

### Structure du Projet

Après installation, votre projet ressemble à :

```
mon-projet/
├── .husky/
│   ├── _/
│   │   └── husky.sh        # Script interne Husky
│   ├── pre-commit          # Votre hook pre-commit
│   ├── commit-msg          # Votre hook commit-msg
│   └── pre-push            # Votre hook pre-push
├── .git/
├── package.json
└── ...
```

### Configuration Avancée

#### Désactiver Husky en CI/CD

Ajoutez dans votre pipeline CI :

```bash
export HUSKY=0
npm install
```

Ou dans `package.json` :

```json
{
  "scripts": {
    "postinstall": "husky install || exit 0"
  }
}
```

#### Ignorer les Hooks Temporairement

Utilisez la variable d'environnement :

```bash
HUSKY=0 git commit -m "message"
```

### Désinstallation

Pour supprimer Husky :

```bash
npm uninstall husky
git config --unset core.hooksPath
rm -rf .husky
```

---

## Utilisation Quotidienne

### Workflow Normal

Lorsque Husky est configuré, votre workflow reste identique :

```bash
# 1. Modifier des fichiers
vim src/app.js

# 2. Stager les changements
git add .

# 3. Commiter (les hooks s'exécutent automatiquement)
git commit -m "feat: ajouter nouvelle fonctionnalité"
# → Husky exécute pre-commit
# → Husky exécute commit-msg
# → Commit créé si tout est OK

# 4. Pusher (le hook pre-push s'exécute)
git push
# → Husky exécute pre-push
# → Push effectué si tout est OK
```

### Bypass des Hooks

**Attention** : À utiliser avec précaution !

#### Bypass avec --no-verify

```bash
# Bypass tous les hooks pour ce commit
git commit -m "fix: correction urgente" --no-verify

# Alias court
git commit -m "fix: correction urgente" -n
```

#### Bypass pour un push

```bash
git push --no-verify
```

#### Quand bypasser ?

- **Urgence de production** : Bug critique à corriger immédiatement
- **Hooks cassés** : Les hooks eux-mêmes ont un problème
- **Travail en cours** : Commit temporaire sur une branche de développement
- **Performance** : Éviter des hooks lents pour des commits rapides

**Règle d'or** : Ne JAMAIS bypasser sur la branche principale (main/master) !

### Debugging des Hooks

#### Voir les logs d'exécution

Les hooks affichent normalement leurs sorties. Pour plus de détails :

```bash
# Activer le mode debug Git
GIT_TRACE=1 git commit -m "test"
```

#### Exécuter un hook manuellement

```bash
# Tester le hook pre-commit
.husky/pre-commit

# Sur Windows avec Git Bash
sh .husky/pre-commit
```

#### Vérifier la configuration Husky

```bash
# Voir où Git cherche les hooks
git config core.hooksPath

# Devrait afficher : .husky
```

#### Problèmes courants

**Hook ne s'exécute pas** :

```bash
# Vérifier que le fichier est exécutable
ls -la .husky/pre-commit

# Le rendre exécutable
chmod +x .husky/pre-commit
```

**Erreur "command not found"** :

```bash
# Vérifier que le shebang est correct
head -1 .husky/pre-commit
# Devrait afficher : #!/usr/bin/env sh

# Vérifier que husky.sh est chargé
grep "husky.sh" .husky/pre-commit
```

### Commandes Utiles

```bash
# Réinstaller les hooks
npx husky install

# Créer un nouveau hook
npx husky add .husky/pre-push "npm run test:e2e"

# Lister tous les hooks Git disponibles
ls -la .git/hooks/

# Voir l'historique des commits avec format
git log --oneline --graph --decorate

# Amender le dernier commit (déclenche commit-msg à nouveau)
git commit --amend
```

---

## Hooks Actuels du Projet

Ce projet utilise actuellement **3 hooks Husky** pour garantir la qualité et la sécurité du code :

### 1. pre-commit

**Fichier** : `.husky/pre-commit`

**Rôle** : Vérifie le code avant chaque commit

**Actions** :

- Exécute le linting et le formatage automatique (`pnpm fix`)
- Vérifie qu'aucun fichier `.env` ou `.env.local` n'est staged
- Bloque le commit si un fichier d'environnement est détecté

**Code du hook** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🎨 Formatage et linting du code..."
pnpm fix

echo "🔍 Vérification rapide des secrets dans les fichiers staged..."

# Vérifier si des fichiers .env sont staged
if git diff --cached --name-only | grep -E "\.env$|\.env\.local$" > /dev/null; then
  echo "⚠️  ATTENTION: Un fichier .env est sur le point d'être commité!"
  echo "❌ Commit bloqué pour éviter l'exposition de secrets."
  echo "Utilisez --no-verify pour forcer (NON RECOMMANDÉ)"
  exit 1
fi

echo "✅ Pré-commit validé!"
```

### 2. commit-msg

**Fichier** : `.husky/commit-msg`

**Rôle** : Valide le format des messages de commit

**Actions** :

- Utilise `commitlint` avec la convention conventionnelle
- Garantit que les messages suivent le format : `type(scope): description`
- Exemples valides : `feat: ajout login`, `fix(api): correction bug`

**Code du hook** :

```bash
npx --no-install commitlint --edit "$1"
```

**Configuration** (fichier `commitlint.config.js`) :

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

**Types de commits acceptés** :

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage (pas de changement de code)
- `refactor`: Refactorisation
- `perf`: Amélioration de performance
- `test`: Ajout/modification de tests
- `chore`: Tâches de maintenance

### 3. pre-push

**Fichier** : `.husky/pre-push`

**Rôle** : Effectue un audit de sécurité avant chaque push

**Actions** :

- Exécute `pnpm audit` pour détecter les vulnérabilités
- Utilise un script personnalisé pour vérifier les vulnérabilités critiques
- Bloque le push si des problèmes de sécurité sont trouvés

**Code du hook** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔒 Exécution de l'audit de sécurité avant push..."

# Vérifier les vulnérabilités critiques et high
pnpm audit --json 2>/dev/null | node scripts/check-vulnerabilities.js

if [ $? -ne 0 ]; then
  echo "❌ Push bloqué en raison de vulnérabilités de sécurité critiques."
  exit 1
fi

echo "✅ Audit de sécurité réussi. Poursuite du push..."
```

---

## Top 10 des Hooks Git les Plus Utilisés

Voici les 10 hooks Git les plus couramment utilisés avec Husky, classés par popularité et utilité.

### 1. pre-commit

**Quand il s'exécute** : Juste avant la création du commit

**Cas d'usage** :

- Linting du code (ESLint, Prettier)
- Formatage automatique
- Vérification des secrets
- Tests unitaires rapides
- Vérification des fichiers staged

**Exemple - Linting et formatage** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Linting et formatage du code..."

# Lint et format uniquement les fichiers staged
npx lint-staged

echo "✅ Pre-commit validé!"
```

**Exemple - Vérification des secrets** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔒 Vérification des secrets..."

# Bloquer les fichiers sensibles
FORBIDDEN_FILES=".env .env.local secrets.json credentials.json"
for file in $FORBIDDEN_FILES; do
  if git diff --cached --name-only | grep -q "$file"; then
    echo "❌ Fichier sensible détecté: $file"
    echo "💡 Retirez-le avec: git reset HEAD $file"
    exit 1
  fi
done

# Détecter des patterns de secrets
if git diff --cached -p | grep -E "(API_KEY|SECRET|PASSWORD|TOKEN)" | grep -E "^\\+"; then
  echo "⚠️  Possible secret détecté dans le code!"
  echo "Vérifiez avant de commiter."
  read -p "Continuer quand même? (y/N): " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

echo "✅ Aucun secret détecté!"
```

**Exemple - Tests rapides** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🧪 Exécution des tests unitaires..."

# Tests uniquement sur les fichiers modifiés
npm run test:changed

if [ $? -ne 0 ]; then
  echo "❌ Tests échoués. Corrigez avant de commiter."
  exit 1
fi

echo "✅ Tests réussis!"
```

---

### 2. commit-msg

**Quand il s'exécute** : Après l'écriture du message de commit, avant la création du commit

**Cas d'usage** :

- Valider le format des messages (Conventional Commits)
- Vérifier la longueur du message
- Ajouter automatiquement un numéro de ticket
- Bloquer certains mots

**Exemple - Conventional Commits** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Utiliser commitlint
npx --no-install commitlint --edit "$1"
```

**Exemple - Validation personnalisée** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG=$(cat "$1")

# Vérifier le format: type(scope): description
PATTERN="^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,}"

if ! echo "$COMMIT_MSG" | grep -qE "$PATTERN"; then
  echo "❌ Message de commit invalide!"
  echo ""
  echo "Format attendu: type(scope): description"
  echo "Types acceptés: feat, fix, docs, style, refactor, test, chore"
  echo ""
  echo "Exemples:"
  echo "  feat: ajouter page de login"
  echo "  fix(api): corriger bug authentification"
  echo "  docs: mettre à jour README"
  exit 1
fi

# Vérifier la longueur (max 100 caractères pour la première ligne)
FIRST_LINE=$(echo "$COMMIT_MSG" | head -n1)
if [ ${#FIRST_LINE} -gt 100 ]; then
  echo "❌ Message trop long (${#FIRST_LINE} caractères, max 100)"
  exit 1
fi

echo "✅ Message de commit valide!"
```

**Exemple - Ajout automatique de ticket** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG_FILE=$1
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Extraire le numéro de ticket de la branche (ex: feature/ABC-123-description)
TICKET=$(echo "$BRANCH_NAME" | grep -oE '[A-Z]+-[0-9]+')

if [ -n "$TICKET" ]; then
  # Vérifier si le ticket n'est pas déjà dans le message
  if ! grep -q "$TICKET" "$COMMIT_MSG_FILE"; then
    # Ajouter le ticket au début du message
    sed -i.bak "1s/^/[$TICKET] /" "$COMMIT_MSG_FILE"
    echo "✅ Ticket $TICKET ajouté au message de commit"
  fi
fi
```

---

### 3. pre-push

**Quand il s'exécute** : Avant d'envoyer les commits vers le serveur distant

**Cas d'usage** :

- Tests unitaires complets
- Tests d'intégration
- Audit de sécurité
- Vérification de la couverture de tests
- Build de production

**Exemple - Tests complets** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🧪 Exécution de la suite de tests complète..."

npm run test

if [ $? -ne 0 ]; then
  echo "❌ Tests échoués. Push bloqué."
  exit 1
fi

echo "✅ Tous les tests passent!"
```

**Exemple - Audit de sécurité** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔒 Audit de sécurité des dépendances..."

# Vérifier les vulnérabilités critiques et high
npm audit --audit-level=moderate

if [ $? -ne 0 ]; then
  echo "❌ Vulnérabilités détectées!"
  echo "💡 Exécutez 'npm audit fix' pour corriger."
  exit 1
fi

echo "✅ Aucune vulnérabilité critique!"
```

**Exemple - Build et tests** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🏗️  Build du projet..."

npm run build

if [ $? -ne 0 ]; then
  echo "❌ Le build a échoué. Push bloqué."
  exit 1
fi

echo "🧪 Exécution des tests..."

npm run test:coverage

if [ $? -ne 0 ]; then
  echo "❌ Tests échoués. Push bloqué."
  exit 1
fi

echo "✅ Build et tests réussis!"
```

---

### 4. post-checkout

**Quand il s'exécute** : Après un `git checkout` (changement de branche)

**Cas d'usage** :

- Réinstaller les dépendances si `package.json` a changé
- Nettoyer les fichiers temporaires
- Afficher des rappels (ex: branche protégée)
- Mettre à jour la base de données locale

**Exemple - Réinstallation automatique** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

PREV_COMMIT=$1
NEW_COMMIT=$2
BRANCH_CHECKOUT=$3

# Uniquement lors d'un changement de branche (pas un checkout de fichier)
if [ "$BRANCH_CHECKOUT" = "1" ]; then
  # Vérifier si package.json a changé
  CHANGED_FILES=$(git diff --name-only $PREV_COMMIT $NEW_COMMIT)

  if echo "$CHANGED_FILES" | grep -q "package.json"; then
    echo "📦 package.json a changé. Réinstallation des dépendances..."
    npm install
  fi

  if echo "$CHANGED_FILES" | grep -q "package-lock.json"; then
    echo "📦 package-lock.json a changé. Réinstallation..."
    npm ci
  fi
fi
```

**Exemple - Rappel branche protégée** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)

if [ "$BRANCH_NAME" = "main" ] || [ "$BRANCH_NAME" = "master" ]; then
  echo "⚠️  ATTENTION: Vous êtes sur la branche $BRANCH_NAME"
  echo "💡 Créez une branche pour vos modifications:"
  echo "   git checkout -b feature/ma-fonctionnalite"
fi
```

---

### 5. post-merge

**Quand il s'exécute** : Après un `git merge` ou `git pull` réussi

**Cas d'usage** :

- Réinstaller les dépendances après un merge
- Exécuter les migrations de base de données
- Nettoyer les fichiers de build
- Afficher un changelog

**Exemple - Réinstallation après merge** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Vérifier si package.json a changé dans le merge
CHANGED_FILES=$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)

if echo "$CHANGED_FILES" | grep -q "package.json"; then
  echo "📦 package.json modifié par le merge. Réinstallation..."
  npm install
fi

if echo "$CHANGED_FILES" | grep -q "package-lock.json"; then
  echo "📦 package-lock.json modifié. Installation propre..."
  npm ci
fi

# Exécuter les migrations si nécessaire
if echo "$CHANGED_FILES" | grep -q "migrations/"; then
  echo "🗄️  Nouvelles migrations détectées. Exécution..."
  npm run migrate
fi
```

**Exemple - Nettoyage automatique** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🧹 Nettoyage après merge..."

# Supprimer les fichiers de build
rm -rf dist/ build/

# Supprimer les caches
rm -rf .next/ .cache/

echo "✅ Nettoyage terminé!"
```

---

### 6. prepare-commit-msg

**Quand il s'exécute** : Avant l'ouverture de l'éditeur de message de commit

**Cas d'usage** :

- Pré-remplir le message de commit
- Ajouter un template de message
- Insérer automatiquement le numéro de ticket
- Ajouter des informations contextuelles

**Exemple - Template de commit** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2

# Uniquement pour les commits normaux (pas amend, merge, etc.)
if [ -z "$COMMIT_SOURCE" ]; then
  # Insérer un template si le fichier est vide
  if [ ! -s "$COMMIT_MSG_FILE" ]; then
    cat > "$COMMIT_MSG_FILE" << EOF
# type(scope): description courte

# Description détaillée (optionnelle)

# Footer (optionnelle)
# Ex: Closes #123, Refs #456

# Types acceptés:
# - feat: Nouvelle fonctionnalité
# - fix: Correction de bug
# - docs: Documentation
# - style: Formatage
# - refactor: Refactorisation
# - test: Tests
# - chore: Maintenance
EOF
  fi
fi
```

**Exemple - Numéro de ticket depuis la branche** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)

# Extraire le numéro de ticket (ex: feature/PROJ-123-description)
TICKET=$(echo "$BRANCH_NAME" | grep -oE '[A-Z]+-[0-9]+')

if [ -n "$TICKET" ] && [ -z "$COMMIT_SOURCE" ]; then
  # Créer un message par défaut avec le ticket
  echo "[$TICKET] " > "$COMMIT_MSG_FILE.tmp"
  cat "$COMMIT_MSG_FILE" >> "$COMMIT_MSG_FILE.tmp"
  mv "$COMMIT_MSG_FILE.tmp" "$COMMIT_MSG_FILE"
fi
```

---

### 7. pre-rebase

**Quand il s'exécute** : Avant un `git rebase`

**Cas d'usage** :

- Empêcher le rebase sur certaines branches (main/master)
- Vérifier que le working directory est propre
- Sauvegarder l'état actuel
- Afficher des avertissements

**Exemple - Bloquer rebase sur main** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)

# Bloquer le rebase sur les branches protégées
if [ "$BRANCH_NAME" = "main" ] || [ "$BRANCH_NAME" = "master" ]; then
  echo "❌ Rebase interdit sur la branche $BRANCH_NAME"
  echo "💡 Créez une branche pour travailler:"
  echo "   git checkout -b feature/ma-branche"
  exit 1
fi

# Vérifier que le working directory est propre
if ! git diff-index --quiet HEAD --; then
  echo "❌ Working directory non propre!"
  echo "💡 Commitez ou stash vos changements avant de rebase:"
  echo "   git stash"
  exit 1
fi

echo "✅ Rebase autorisé!"
```

**Exemple - Sauvegarde automatique** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)
BACKUP_BRANCH="backup/$BRANCH_NAME-$(date +%Y%m%d-%H%M%S)"

echo "💾 Création d'une branche de sauvegarde: $BACKUP_BRANCH"
git branch "$BACKUP_BRANCH"

echo "✅ Sauvegarde créée. Continuez le rebase."
```

---

### 8. post-commit

**Quand il s'exécute** : Après la création réussie d'un commit

**Cas d'usage** :

- Notifications (Slack, Discord, etc.)
- Mise à jour de documentation
- Logging personnalisé
- Synchronisation avec des outils externes

**Exemple - Notification** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG=$(git log -1 --pretty=%B)
COMMIT_HASH=$(git log -1 --pretty=%h)
AUTHOR=$(git log -1 --pretty=%an)
BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)

echo "✅ Commit créé: $COMMIT_HASH sur $BRANCH_NAME"

# Afficher un résumé
echo ""
echo "📝 Résumé:"
echo "   Auteur: $AUTHOR"
echo "   Message: $COMMIT_MSG"
echo ""
```

**Exemple - Webhook Slack** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG=$(git log -1 --pretty=%B)
COMMIT_HASH=$(git log -1 --pretty=%h)
AUTHOR=$(git log -1 --pretty=%an)
BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)

# Webhook Slack (remplacer par votre URL)
SLACK_WEBHOOK="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

# Uniquement sur certaines branches
if [ "$BRANCH_NAME" = "main" ] || [ "$BRANCH_NAME" = "develop" ]; then
  curl -X POST -H 'Content-type: application/json' \
    --data "{\"text\":\"Nouveau commit sur $BRANCH_NAME par $AUTHOR: $COMMIT_MSG ($COMMIT_HASH)\"}" \
    "$SLACK_WEBHOOK"
fi
```

---

### 9. pre-receive (côté serveur)

**Quand il s'exécute** : Sur le serveur, avant d'accepter un push

**Cas d'usage** :

- Vérifications de sécurité centralisées
- Validation des commits (politique d'entreprise)
- Bloquer les push forcés sur certaines branches
- Vérifier les autorisations

**Note** : Ce hook s'exécute sur le serveur Git, pas localement. Nécessite un accès au serveur.

**Exemple - Bloquer force push sur main** :

```bash
#!/usr/bin/env sh

while read oldrev newrev refname; do
  BRANCH_NAME=$(echo $refname | sed 's/refs\/heads\///')

  # Bloquer les force push sur main/master
  if [ "$BRANCH_NAME" = "main" ] || [ "$BRANCH_NAME" = "master" ]; then
    if [ "$oldrev" != "0000000000000000000000000000000000000000" ]; then
      # Vérifier si c'est un force push
      if ! git merge-base --is-ancestor $oldrev $newrev; then
        echo "❌ Force push interdit sur $BRANCH_NAME"
        exit 1
      fi
    fi
  fi
done

echo "✅ Push autorisé"
```

**Exemple - Validation des commits** :

```bash
#!/usr/bin/env sh

while read oldrev newrev refname; do
  # Liste des commits à vérifier
  if [ "$oldrev" = "0000000000000000000000000000000000000000" ]; then
    # Nouvelle branche
    COMMITS=$(git rev-list $newrev)
  else
    # Branche existante
    COMMITS=$(git rev-list $oldrev..$newrev)
  fi

  # Vérifier chaque commit
  for commit in $COMMITS; do
    MESSAGE=$(git log -1 --pretty=%B $commit)

    # Vérifier le format Conventional Commits
    if ! echo "$MESSAGE" | grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .+"; then
      echo "❌ Commit $commit a un message invalide"
      echo "Message: $MESSAGE"
      exit 1
    fi
  done
done

echo "✅ Tous les commits sont valides"
```

---

### 10. post-receive (côté serveur)

**Quand il s'exécute** : Sur le serveur, après avoir accepté un push

**Cas d'usage** :

- Déploiement automatique
- Notifications d'équipe
- Mise à jour de documentation
- Déclenchement de CI/CD

**Note** : Ce hook s'exécute sur le serveur Git, pas localement.

**Exemple - Déploiement automatique** :

```bash
#!/usr/bin/env sh

while read oldrev newrev refname; do
  BRANCH_NAME=$(echo $refname | sed 's/refs\/heads\///')

  # Déployer automatiquement la branche main
  if [ "$BRANCH_NAME" = "main" ]; then
    echo "🚀 Déploiement de la branche main..."

    # Aller dans le répertoire de déploiement
    cd /var/www/production

    # Pull des derniers changements
    git pull origin main

    # Installer les dépendances
    npm ci

    # Build
    npm run build

    # Redémarrer le service
    pm2 restart app

    echo "✅ Déploiement terminé!"
  fi
done
```

**Exemple - Notification Discord** :

```bash
#!/usr/bin/env sh

while read oldrev newrev refname; do
  BRANCH_NAME=$(echo $refname | sed 's/refs\/heads\///')

  # Récupérer les infos du push
  AUTHOR=$(git log -1 --pretty=%an $newrev)
  COMMIT_MSG=$(git log -1 --pretty=%B $newrev)
  COMMIT_COUNT=$(git rev-list --count $oldrev..$newrev)

  # Webhook Discord
  DISCORD_WEBHOOK="https://discord.com/api/webhooks/YOUR/WEBHOOK"

  curl -X POST -H 'Content-Type: application/json' \
    --data "{
      \"content\": \"📦 **Push sur $BRANCH_NAME**\",
      \"embeds\": [{
        \"title\": \"$COMMIT_COUNT commit(s) par $AUTHOR\",
        \"description\": \"$COMMIT_MSG\",
        \"color\": 5814783
      }]
    }" \
    "$DISCORD_WEBHOOK"
done
```

---

## Créer un Hook Personnalisé

### Structure d'un Hook

Tous les hooks Husky suivent la même structure de base :

```bash
#!/usr/bin/env sh
# ↑ Shebang obligatoire (indique qu'il s'agit d'un script shell)

. "$(dirname -- "$0")/_/husky.sh"
# ↑ Charge les fonctions internes de Husky

# Votre code ici
echo "🚀 Exécution du hook..."

# Effectuer des vérifications
if [ condition ]; then
  echo "❌ Erreur détectée"
  exit 1  # Code de sortie non-zéro = bloquer l'action Git
fi

echo "✅ Hook validé"
exit 0  # Code de sortie zéro = autoriser l'action Git
```

### Éléments Clés

1. **Shebang** : `#!/usr/bin/env sh`
   - Indique que c'est un script shell
   - Obligatoire pour que Git puisse exécuter le hook

2. **Source husky.sh** : `. "$(dirname -- "$0")/_/husky.sh"`
   - Charge les utilitaires Husky
   - Permet à Husky de gérer correctement les hooks

3. **Code de sortie** :
   - `exit 0` : Succès, autoriser l'action Git
   - `exit 1` (ou tout code non-zéro) : Échec, bloquer l'action Git

4. **Messages clairs** :
   - Utilisez des emojis pour la lisibilité (🔍 🚀 ✅ ❌ ⚠️)
   - Expliquez ce qui se passe
   - Donnez des instructions en cas d'erreur

### Exemples Pratiques

#### Exemple 1 : Vérification de la taille des fichiers

Empêcher le commit de fichiers trop volumineux :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "📏 Vérification de la taille des fichiers..."

MAX_SIZE=5242880  # 5 Mo en octets

# Parcourir tous les fichiers staged
for file in $(git diff --cached --name-only); do
  if [ -f "$file" ]; then
    FILE_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")

    if [ "$FILE_SIZE" -gt "$MAX_SIZE" ]; then
      echo "❌ Fichier trop volumineux: $file ($(($FILE_SIZE / 1024 / 1024)) Mo)"
      echo "💡 Taille maximale autorisée: 5 Mo"
      echo "💡 Utilisez Git LFS pour les gros fichiers:"
      echo "   git lfs track '$file'"
      exit 1
    fi
  fi
done

echo "✅ Taille des fichiers OK"
```

#### Exemple 2 : Vérification des TODO avant push

S'assurer qu'il n'y a pas de TODO non résolus :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "📝 Vérification des TODO..."

# Chercher les TODO dans les fichiers modifiés
TODO_COUNT=$(git diff origin/main...HEAD | grep -c "TODO" || true)

if [ "$TODO_COUNT" -gt 0 ]; then
  echo "⚠️  $TODO_COUNT TODO trouvés dans vos modifications"
  echo ""
  git diff origin/main...HEAD | grep "TODO" | head -5
  echo ""
  read -p "Voulez-vous continuer le push? (y/N): " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

echo "✅ Vérification TODO terminée"
```

#### Exemple 3 : Vérification des images optimisées

S'assurer que les images sont optimisées avant commit :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🖼️  Vérification des images..."

# Liste des extensions d'images à vérifier
IMAGE_EXTENSIONS="jpg jpeg png gif"

for ext in $IMAGE_EXTENSIONS; do
  for file in $(git diff --cached --name-only --diff-filter=A | grep "\\.$ext$"); do
    if [ -f "$file" ]; then
      FILE_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")

      # Avertir si l'image fait plus de 500 Ko
      if [ "$FILE_SIZE" -gt 512000 ]; then
        echo "⚠️  Image volumineuse détectée: $file ($(($FILE_SIZE / 1024)) Ko)"
        echo "💡 Optimisez l'image avec:"
        echo "   npx @squoosh/cli --webp auto $file"
      fi
    fi
  done
done

echo "✅ Vérification des images terminée"
```

#### Exemple 4 : Exécuter des tests sur les fichiers modifiés uniquement

Gagner du temps en testant seulement ce qui a changé :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🧪 Tests des fichiers modifiés..."

# Récupérer les fichiers TypeScript/JavaScript modifiés
CHANGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx)$' || true)

if [ -z "$CHANGED_FILES" ]; then
  echo "ℹ️  Aucun fichier à tester"
  exit 0
fi

# Trouver les fichiers de tests correspondants
for file in $CHANGED_FILES; do
  # Convertir src/components/Button.tsx en src/components/Button.test.tsx
  TEST_FILE="${file%.*}.test.${file##*.}"

  if [ -f "$TEST_FILE" ]; then
    echo "🔍 Test de $TEST_FILE"
    npm test -- "$TEST_FILE"

    if [ $? -ne 0 ]; then
      echo "❌ Tests échoués pour $file"
      exit 1
    fi
  fi
done

echo "✅ Tous les tests passent"
```

### Conseils de Développement

#### 1. Tester votre hook

Avant de commiter votre hook, testez-le :

```bash
# Exécuter directement le hook
sh .husky/pre-commit

# Ou avec un commit de test
git add .
git commit -m "test" --no-verify  # Créer sans exécuter les hooks
git reset HEAD~1                   # Annuler le commit
git commit -m "test"               # Tester avec les hooks
```

#### 2. Gérer les différences Unix/Windows

Pour la compatibilité cross-platform :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Détecter l'OS
OS=$(uname -s)

case "$OS" in
  Linux*)
    # Commandes Linux
    FILE_SIZE=$(stat -c%s "$file")
    ;;
  Darwin*)
    # Commandes macOS
    FILE_SIZE=$(stat -f%z "$file")
    ;;
  MINGW*|MSYS*|CYGWIN*)
    # Commandes Windows (Git Bash)
    FILE_SIZE=$(stat -c%s "$file")
    ;;
esac
```

#### 3. Logging et debugging

Ajouter des options de debug :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Activer le debug avec une variable d'environnement
DEBUG=${DEBUG:-0}

if [ "$DEBUG" = "1" ]; then
  set -x  # Afficher toutes les commandes exécutées
fi

# Votre code...

if [ "$DEBUG" = "1" ]; then
  set +x
fi
```

Utilisation :

```bash
DEBUG=1 git commit -m "test"
```

#### 4. Performances

Pour des hooks rapides :

```bash
# ✅ Bon : Uniquement les fichiers staged
git diff --cached --name-only

# ❌ Lent : Tous les fichiers du projet
find . -name "*.js"

# ✅ Bon : Lint seulement ce qui a changé
npx lint-staged

# ❌ Lent : Lint tout le projet
npm run lint
```

#### 5. Gestion des erreurs

Toujours gérer les cas d'erreur :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Vérification..."

# Vérifier qu'une commande existe
if ! command -v eslint &> /dev/null; then
  echo "❌ ESLint n'est pas installé"
  echo "💡 Installez-le avec: npm install -D eslint"
  exit 1
fi

# Exécuter avec gestion d'erreur
if ! npm run lint; then
  echo "❌ Linting échoué"
  exit 1
fi

echo "✅ Vérification réussie"
```

---

## Bonnes Pratiques

### 1. Garder les Hooks Rapides

Les hooks s'exécutent à chaque commit/push. Ils doivent être **rapides** pour ne pas frustrer les développeurs.

**Recommandations** :

- ✅ Lint uniquement les fichiers modifiés (pas tout le projet)
- ✅ Tests unitaires rapides en pre-commit
- ✅ Tests e2e complets en pre-push (moins fréquent)
- ❌ Éviter les opérations longues en pre-commit

**Exemple avec lint-staged** :

```json
{
  "lint-staged": {
    "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

```bash
# .husky/pre-commit
npx lint-staged
```

### 2. Messages d'Erreur Clairs

Les développeurs doivent comprendre **pourquoi** le hook a échoué et **comment** corriger.

**Bon exemple** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Vérification du code..."

if ! npm run lint; then
  echo "❌ Erreur de linting détectée."
  echo "💡 Exécutez 'npm run lint:fix' pour corriger automatiquement."
  exit 1
fi

echo "✅ Code validé !"
```

**Mauvais exemple** :

```bash
npm run lint || exit 1
```

### 3. Permettre le Bypass Documenté

Les hooks doivent être contournables en cas d'urgence, mais avec **documentation claire**.

**Documentation** :

```markdown
## Bypass des hooks

En cas d'urgence uniquement :
\`\`\`bash
git commit --no-verify
\`\`\`

⚠️ À n'utiliser QUE si :

- Bug critique en production
- Les hooks eux-mêmes sont cassés
- Commit de travail en cours sur une branche de dev
```

### 4. Tester les Hooks

Les hooks sont du code. Ils doivent être testés.

**Comment tester** :

```bash
# 1. Créer un commit de test
git add .
git commit -m "test: vérifier hooks"

# 2. Vérifier que le hook s'exécute
# Les logs devraient apparaître

# 3. Tester un cas d'échec volontaire
# Ajouter du code invalide et commiter

# 4. Vérifier que le commit est bloqué
```

### 5. Documenter les Hooks

Chaque hook devrait avoir :

- Un commentaire expliquant son rôle
- Des messages informatifs pendant l'exécution
- Une documentation dans le README du projet

**Exemple** :

```bash
#!/usr/bin/env sh
# Hook pre-commit : Vérifie le linting et empêche le commit de secrets
. "$(dirname -- "$0")/_/husky.sh"

echo "🎨 Formatage et linting du code..."
npm run lint:fix

echo "🔒 Vérification des secrets..."
if git diff --cached --name-only | grep -E "\.env$"; then
  echo "❌ Fichier .env détecté dans les fichiers staged !"
  echo "💡 Les fichiers .env ne doivent jamais être commités."
  exit 1
fi

echo "✅ Pre-commit validé !"
```

### 6. Versionner les Hooks

- ✅ Commitez le dossier `.husky/` dans Git
- ✅ Documentez les changements de hooks dans les commits
- ✅ Communiquez les nouveaux hooks à l'équipe
- ❌ Ne modifiez pas `.git/hooks/` directement

### 7. Synchronisation d'Équipe

Lorsqu'un nouveau hook est ajouté :

1. **Commitez le hook** dans le repository
2. **Documentez-le** dans le README ou un fichier dédié
3. **Communiquez** via Slack/email : "Nouveau hook ajouté, exécutez `npm install`"
4. **Testez ensemble** que tout fonctionne

### 8. Optimisation des Performances

**Stratégie par couches** :

- **pre-commit** : Checks rapides (lint des fichiers modifiés uniquement)
- **pre-push** : Checks moyens (tests unitaires complets)
- **CI/CD** : Checks longs (tests e2e, build de production, déploiement)

```bash
# pre-commit : ~5 secondes
npx lint-staged

# pre-push : ~30 secondes
npm run test:unit

# CI/CD : ~5 minutes
npm run test:e2e && npm run build
```

### 9. Gestion des Erreurs

Les hooks doivent retourner le bon code de sortie :

```bash
# ✅ Succès
exit 0

# ❌ Échec (bloque le commit/push)
exit 1
```

**Gestion multiple** :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Exécuter plusieurs checks
npm run lint || exit 1
npm run type-check || exit 1
npm run test:quick || exit 1

echo "✅ Tous les checks passés !"
```

### 10. Sécurité

**Ne jamais commiter de secrets** :

```bash
# .husky/pre-commit
# Vérifier les patterns de secrets
if git diff --cached -p | grep -E "(API_KEY|SECRET|PASSWORD|TOKEN)" | grep -v "^-"; then
  echo "⚠️  Possible secret détecté dans le code !"
  echo "Vérifiez avant de commiter."
  exit 1
fi
```

**Utiliser des outils dédiés** :

- `gitleaks` : Détection de secrets
- `trufflehog` : Scan de l'historique Git
- `detect-secrets` : Prévention de commits de secrets

---

## Ressources

### Documentation Officielle

- **Site officiel** : [https://typicode.github.io/husky](https://typicode.github.io/husky)
- **GitHub** : [https://github.com/typicode/husky](https://github.com/typicode/husky)
- **Git Hooks** : [https://git-scm.com/docs/githooks](https://git-scm.com/docs/githooks)

### Outils Complémentaires

- **lint-staged** : Lint uniquement les fichiers staged
- **commitlint** : Validation des messages de commit
- **prettier** : Formatage automatique du code
- **eslint** : Linting JavaScript/TypeScript

### Guides Avancés

- [Conventional Commits](https://www.conventionalcommits.org/) : Format de messages de commit
- [Git Hooks Documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) : Guide complet des hooks Git

### Support

En cas de problème :

1. Consultez la [documentation officielle](https://typicode.github.io/husky)
2. Recherchez sur [GitHub Issues](https://github.com/typicode/husky/issues)
3. Posez une question sur [Stack Overflow](https://stackoverflow.com/questions/tagged/husky) avec le tag `husky`

---

**Dernière mise à jour** : 2025-10-30
