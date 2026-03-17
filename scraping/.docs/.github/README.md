# 📁 Guide Complet du Dossier `.github`

Ce guide explique en détail le rôle, la structure et les possibilités du dossier `.github` dans un dépôt GitHub.

**Dernière mise à jour** : 31 octobre 2025
**Version du document** : 1.0.0

---

## 📚 Table des Matières

1. [Introduction](#-introduction)
2. [GitHub Actions / Workflows](#-github-actions--workflows)
3. [Templates d'Issues](#-templates-dissues)
4. [Templates de Pull Requests](#-templates-de-pull-requests)
5. [Dependabot](#-dependabot)
6. [CODEOWNERS](#-codeowners)
7. [Fichiers de Communauté](#-fichiers-de-communauté)
8. [Configuration Avancée](#-configuration-avancée)
9. [Meilleures Pratiques](#-meilleures-pratiques)
10. [Ressources](#-ressources)

---

## 🎯 Introduction

### Qu'est-ce que le dossier `.github` ?

Le dossier `.github` est un répertoire spécial reconnu par GitHub qui permet de configurer et personnaliser le comportement de votre dépôt. Il contient des fichiers de configuration qui contrôlent :

- **L'automatisation** : Workflows CI/CD, tests automatiques, déploiements
- **La collaboration** : Templates d'issues et de pull requests
- **La maintenance** : Mise à jour automatique des dépendances
- **La gouvernance** : Propriétaires de code, règles de contribution
- **La communauté** : Code de conduite, guide de contribution, sécurité

### Pourquoi est-il important ?

Un dossier `.github` bien configuré permet de :

- ✅ **Automatiser** les tâches répétitives (tests, déploiements, audits)
- ✅ **Standardiser** les contributions (templates, conventions)
- ✅ **Sécuriser** le projet (audits automatiques, revue de code)
- ✅ **Améliorer** la qualité du code (linting, tests)
- ✅ **Faciliter** la collaboration (documentation, processus clairs)

### Structure Complète Recommandée

```
.github/
├── workflows/                    # GitHub Actions (CI/CD)
│   ├── tests.yml                # Tests automatiques
│   ├── deploy.yml               # Déploiement
│   └── security-audit.yml       # Audit de sécurité
│
├── ISSUE_TEMPLATE/              # Templates d'issues
│   ├── config.yml               # Configuration du chooser
│   ├── bug_report.yml           # Rapport de bug (formulaire YAML)
│   ├── feature_request.yml      # Demande de fonctionnalité
│   └── question.md              # Question (Markdown)
│
├── PULL_REQUEST_TEMPLATE/       # Templates de PR
│   ├── pull_request_template.md # Template par défaut
│   └── hotfix.md                # Template pour hotfix
│
├── dependabot.yml               # Configuration Dependabot
├── CODEOWNERS                   # Propriétaires du code
├── CONTRIBUTING.md              # Guide de contribution
├── CODE_OF_CONDUCT.md           # Code de conduite
├── SECURITY.md                  # Politique de sécurité
├── SUPPORT.md                   # Guide de support
└── FUNDING.yml                  # Informations de financement
```

---

## ⚙️ GitHub Actions / Workflows

### Qu'est-ce que GitHub Actions ?

GitHub Actions est une plateforme d'intégration continue et de déploiement continu (CI/CD) qui permet d'automatiser les workflows directement depuis votre dépôt GitHub.

### Structure d'un Workflow

Les workflows sont définis dans des fichiers YAML dans `.github/workflows/`.

**Anatomie d'un workflow** :

```yaml
name: Nom du Workflow # Nom affiché dans l'interface GitHub

on: # Déclencheurs (triggers)
  push: # Sur push
    branches: [main]
  pull_request: # Sur pull request
    branches: [main]
  schedule: # Planifié (cron)
    - cron: '0 0 * * 1' # Chaque lundi à minuit
  workflow_dispatch: # Manuel (bouton dans l'UI)

jobs: # Jobs à exécuter
  nom-du-job:
    runs-on: ubuntu-latest # Environnement d'exécution
    steps: # Étapes du job
      - uses: actions/checkout@v4 # Action réutilisable
      - name: Installer les dépendances
        run: npm install # Commande shell
      - name: Lancer les tests
        run: npm test
```

### Déclencheurs (Triggers)

#### 1. `push` - Événement de push

```yaml
on:
  push:
    branches:
      - main
      - develop
    paths: # Déclencher uniquement si ces fichiers changent
      - 'src/**'
      - 'package.json'
```

#### 2. `pull_request` - Événement de PR

```yaml
on:
  pull_request:
    types: # Types d'événements PR
      - opened # PR ouverte
      - synchronize # Nouveau commit
      - reopened # PR rouverte
    branches:
      - main
```

#### 3. `schedule` - Planification cron

```yaml
on:
  schedule:
    - cron: '0 9 * * 1' # Chaque lundi à 9h UTC
    - cron: '0 0 1 * *' # Le 1er de chaque mois à minuit
```

**Syntaxe cron** :

```
┌───────────── minute (0 - 59)
│ ┌───────────── heure (0 - 23)
│ │ ┌───────────── jour du mois (1 - 31)
│ │ │ ┌───────────── mois (1 - 12)
│ │ │ │ ┌───────────── jour de la semaine (0 - 6) (dimanche = 0)
│ │ │ │ │
* * * * *
```

#### 4. `workflow_dispatch` - Déclenchement manuel

```yaml
on:
  workflow_dispatch:
    inputs: # Paramètres personnalisés
      environment:
        description: 'Environment to deploy to'
        required: true
        type: choice
        options:
          - development
          - staging
          - production
```

### Jobs et Steps

#### Jobs Parallèles

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm test
```

#### Jobs Séquentiels (avec dépendances)

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run build

  test:
    needs: build # Attend que 'build' soit terminé
    runs-on: ubuntu-latest
    steps:
      - run: npm test

  deploy:
    needs: [build, test] # Attend 'build' ET 'test'
    runs-on: ubuntu-latest
    steps:
      - run: npm run deploy
```

### Secrets et Variables d'Environnement

#### Utiliser des Secrets

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      # Secrets GitHub (Settings > Secrets)
      API_KEY: ${{ secrets.API_KEY }}
      DATABASE_URL: ${{ secrets.DATABASE_URL }}
    steps:
      - run: echo "Deploying with API key..."
```

**Configurer les secrets** :

1. Aller dans `Settings` > `Secrets and variables` > `Actions`
2. Cliquer sur `New repository secret`
3. Ajouter le nom et la valeur

#### Variables d'Environnement

```yaml
env:
  NODE_VERSION: '20'
  CACHE_NAME: 'node-modules'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
```

### Exemples de Workflows

#### Exemple 1 : Tests et Linting

```yaml
name: Tests et Qualité du Code

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  lint:
    name: Linting
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Installer pnpm
        uses: pnpm/action-setup@v4

      - name: Installer les dépendances
        run: pnpm install --frozen-lockfile

      - name: Linter le code
        run: pnpm run lint

  test:
    name: Tests Unitaires
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - uses: pnpm/action-setup@v4

      - run: pnpm install --frozen-lockfile

      - name: Lancer les tests
        run: pnpm test

      - name: Upload du rapport de couverture
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: coverage-report
          path: coverage/
          retention-days: 30
```

#### Exemple 2 : Build et Déploiement

```yaml
name: Build et Déploiement

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    name: Build de Production
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - uses: pnpm/action-setup@v4

      - name: Installer les dépendances
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}

      - name: Upload des artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build-files
          path: .next/

  deploy:
    name: Déploiement Vercel
    needs: build
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

#### Exemple 3 : Matrice de Build (Tests sur Plusieurs Versions)

```yaml
name: Tests Multi-Versions

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [18, 20, 22]

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

      - run: npm install
      - run: npm test
```

### Workflows Existants du Projet

Le projet Argenteuil Basketball utilise actuellement 3 workflows :

#### 1. [playwright.yml](.github/workflows/playwright.yml) - Tests E2E

Tests end-to-end avec Playwright incluant tests Jest et Playwright.

**Points clés** :

- Déclenché sur push et PR vers `main`/`master`
- Tests Jest + Playwright E2E
- Upload des rapports en artifacts
- Utilise les secrets Supabase, Sanity, et FFBB

#### 2. [security-audit.yml](.github/workflows/security-audit.yml) - Audit de Sécurité

Audit automatique des vulnérabilités npm.

**Points clés** :

- Déclenché tous les lundis à 9h
- Audit npm avec plusieurs niveaux (critical, high)
- Génération de rapports JSON et TXT
- Commentaire automatique sur les PRs si vulnérabilités détectées
- Échec du workflow si vulnérabilités CRITICAL

#### 3. [sonarcloud.yml](.github/workflows/sonarcloud.yml) - Analyse de Code

Analyse statique du code avec SonarCloud.

---

## 📝 Templates d'Issues

### Pourquoi Utiliser des Templates d'Issues ?

Les templates d'issues permettent de :

- ✅ Standardiser les rapports de bugs
- ✅ Collecter des informations essentielles
- ✅ Réduire les allers-retours avec les contributeurs
- ✅ Faciliter le triage des issues

### Types de Templates

#### 1. Templates Markdown (Simple)

Fichier : `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Bug Report
about: Signaler un bug dans l'application
title: '[BUG] '
labels: bug
assignees: ''
---

## 🐛 Description du Bug

Une description claire et concise du bug.

## 🔄 Étapes pour Reproduire

1. Aller sur '...'
2. Cliquer sur '...'
3. Scroller jusqu'à '...'
4. Voir l'erreur

## ✅ Comportement Attendu

Description de ce qui devrait se passer.

## ❌ Comportement Actuel

Description de ce qui se passe réellement.

## 📸 Captures d'Écran

Si applicable, ajouter des captures d'écran.

## 🖥️ Environnement

- OS: [ex: Windows 11]
- Navigateur: [ex: Chrome 120]
- Version: [ex: 1.2.3]

## ℹ️ Informations Supplémentaires

Tout autre contexte pertinent.
```

#### 2. Formulaires YAML (Recommandé)

Fichier : `.github/ISSUE_TEMPLATE/bug_report.yml`

```yaml
name: 🐛 Rapport de Bug
description: Signaler un bug dans l'application
title: '[BUG] '
labels: ['bug', 'needs-triage']
assignees:
  - username

body:
  - type: markdown
    attributes:
      value: |
        Merci de prendre le temps de remplir ce rapport de bug !

  - type: textarea
    id: description
    attributes:
      label: Description du Bug
      description: Une description claire et concise du bug
      placeholder: Décrivez le bug ici...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Étapes pour Reproduire
      description: Étapes pour reproduire le comportement
      placeholder: |
        1. Aller sur '...'
        2. Cliquer sur '...'
        3. Voir l'erreur
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Comportement Attendu
      description: Description de ce qui devrait se passer
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Comportement Actuel
      description: Description de ce qui se passe réellement
    validations:
      required: true

  - type: dropdown
    id: browser
    attributes:
      label: Navigateur
      description: Quel navigateur utilisez-vous ?
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Autre
    validations:
      required: true

  - type: dropdown
    id: severity
    attributes:
      label: Sévérité
      description: Quel est l'impact du bug ?
      options:
        - Critique (Bloque l'utilisation)
        - Majeur (Fonctionnalité cassée)
        - Mineur (Gêne mineure)
        - Cosmétique (Problème visuel)
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Captures d'Écran
      description: Si applicable, ajouter des captures d'écran

  - type: textarea
    id: additional
    attributes:
      label: Informations Supplémentaires
      description: Tout autre contexte pertinent

  - type: checkboxes
    id: terms
    attributes:
      label: Vérifications
      options:
        - label: J'ai vérifié que ce bug n'a pas déjà été signalé
          required: true
        - label: J'ai testé sur la dernière version
          required: true
```

#### 3. Template de Demande de Fonctionnalité

Fichier : `.github/ISSUE_TEMPLATE/feature_request.yml`

```yaml
name: ✨ Demande de Fonctionnalité
description: Proposer une nouvelle fonctionnalité
title: '[FEATURE] '
labels: ['enhancement', 'needs-discussion']

body:
  - type: markdown
    attributes:
      value: |
        ## 💡 Proposer une Nouvelle Fonctionnalité
        Merci de prendre le temps de proposer cette amélioration !

  - type: textarea
    id: problem
    attributes:
      label: Problème à Résoudre
      description: Quel problème cette fonctionnalité résout-elle ?
      placeholder: 'Je suis frustré quand...'
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Solution Proposée
      description: Comment imaginez-vous cette fonctionnalité ?
      placeholder: 'Il serait utile de pouvoir...'
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considérées
      description: Avez-vous pensé à d'autres solutions ?

  - type: dropdown
    id: priority
    attributes:
      label: Priorité
      options:
        - Haute (Critique pour mon usage)
        - Moyenne (Important mais pas bloquant)
        - Basse (Nice-to-have)
    validations:
      required: true

  - type: textarea
    id: additional
    attributes:
      label: Contexte Additionnel
      description: Mockups, exemples, références...
```

### Configuration du Chooser

Fichier : `.github/ISSUE_TEMPLATE/config.yml`

```yaml
blank_issues_enabled: false # Désactiver les issues vierges
contact_links:
  - name: 📚 Documentation
    url: https://argenteuilbasketball.com/docs
    about: Consultez d'abord la documentation

  - name: 💬 Discord
    url: https://discord.gg/votre-serveur
    about: Posez vos questions sur Discord

  - name: 🔒 Signaler une Vulnérabilité
    url: https://github.com/owner/repo/security/advisories/new
    about: Signalement confidentiel de vulnérabilité de sécurité
```

### Types de Champs Disponibles (YAML)

| Type         | Description       | Exemple                        |
| ------------ | ----------------- | ------------------------------ |
| `markdown`   | Texte statique    | Instructions, titre de section |
| `textarea`   | Zone de texte     | Description, commentaires      |
| `input`      | Champ texte court | Titre, version                 |
| `dropdown`   | Liste déroulante  | OS, navigateur, priorité       |
| `checkboxes` | Cases à cocher    | Conditions, vérifications      |

---

## 🔀 Templates de Pull Requests

### Template Simple

Fichier : `.github/pull_request_template.md`

```markdown
## 📋 Description

<!-- Décrivez les changements apportés -->

## 🎯 Type de Changement

<!-- Cochez la case appropriée -->

- [ ] 🐛 Bug fix (changement non-breaking qui corrige un bug)
- [ ] ✨ Nouvelle fonctionnalité (changement non-breaking qui ajoute une fonctionnalité)
- [ ] 💥 Breaking change (correction ou fonctionnalité qui cause un breaking change)
- [ ] 📝 Documentation (mise à jour de documentation uniquement)
- [ ] 🎨 Style (formatage, point-virgule manquant, etc.)
- [ ] ♻️ Refactoring (ni correction ni ajout de fonctionnalité)
- [ ] ⚡️ Performance (amélioration des performances)
- [ ] ✅ Tests (ajout ou correction de tests)
- [ ] 🔧 Configuration (changement de configuration)

## 🔗 Issue Liée

<!-- Référencez l'issue liée (ex: #123, closes #456) -->

Fixes #

## 🧪 Tests Effectués

<!-- Décrivez les tests que vous avez effectués -->

- [ ] Tests unitaires
- [ ] Tests d'intégration
- [ ] Tests E2E
- [ ] Tests manuels

## 📸 Captures d'Écran (si UI)

<!-- Ajoutez des captures d'écran si la PR modifie l'interface -->

| Avant | Après |
| ----- | ----- |
|       |       |

## ✅ Checklist

<!-- Vérifiez que vous avez bien complété ces étapes -->

- [ ] Mon code suit les conventions du projet
- [ ] J'ai effectué une auto-revue de mon code
- [ ] J'ai commenté mon code, notamment dans les zones difficiles
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes changements ne génèrent aucun nouveau warning
- [ ] J'ai ajouté des tests qui prouvent que ma correction/fonctionnalité fonctionne
- [ ] Les tests unitaires passent localement
- [ ] Les tests E2E passent localement
- [ ] J'ai vérifié que le build fonctionne (`pnpm build`)

## 📝 Notes pour les Reviewers

<!-- Informations additionnelles pour les reviewers -->

## 🔄 Migrations/Breaking Changes

<!-- Si applicable, décrivez les migrations nécessaires ou les breaking changes -->

---

**🤖 Généré avec [Claude Code](https://claude.com/claude-code)**

**Co-Authored-By: Claude <noreply@anthropic.com>**
```

### Templates Multiples

Pour avoir plusieurs templates, créez un dossier :

```
.github/PULL_REQUEST_TEMPLATE/
├── pull_request_template.md  # Template par défaut
├── hotfix.md                  # Template pour hotfix
└── release.md                 # Template pour release
```

**Utilisation** :

- Par défaut : Le template par défaut est utilisé
- Spécifique : Ajoutez `?template=hotfix.md` à l'URL de création de PR

**Exemple de template hotfix** :

Fichier : `.github/PULL_REQUEST_TEMPLATE/hotfix.md`

```markdown
## 🚨 HOTFIX

**⚠️ Cette PR est un hotfix critique**

## 🐛 Bug Critique

<!-- Décrivez le bug critique -->

## 🔥 Impact

<!-- Décrivez l'impact du bug -->

- [ ] Affecte la production
- [ ] Bloque des utilisateurs
- [ ] Perte de données
- [ ] Faille de sécurité

## 🔧 Correction Appliquée

<!-- Décrivez la correction -->

## ✅ Tests de Non-Régression

- [ ] Testé localement
- [ ] Testé en staging
- [ ] Vérifié qu'aucun autre feature n'est cassé

## 📅 Timeline

- Détection :
- Correction :
- Tests :
- Déploiement prévu :

## 👥 Reviewers Requis

<!-- Tagguez les personnes qui DOIVENT review -->

@maintainer1 @maintainer2

---

**MERGE IMMÉDIAT REQUIS APRÈS REVIEW**
```

---

## 🤖 Dependabot

### Qu'est-ce que Dependabot ?

Dependabot est un outil GitHub qui surveille automatiquement vos dépendances et crée des pull requests pour les mettre à jour quand de nouvelles versions sont disponibles.

**Avantages** :

- ✅ Sécurité : Mise à jour automatique des vulnérabilités
- ✅ Maintenance : Garde les dépendances à jour
- ✅ Automatisation : Moins de travail manuel
- ✅ Transparence : Changelogs inclus dans les PRs

### Configuration de Base

Fichier : `.github/dependabot.yml`

```yaml
version: 2
updates:
  # Dépendances npm
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
      day: 'monday'
      time: '09:00'
      timezone: 'Europe/Paris'
    open-pull-requests-limit: 5
    labels:
      - 'dependencies'
      - 'automated'
    reviewers:
      - 'username'
    assignees:
      - 'username'
    commit-message:
      prefix: 'chore(deps)'
      prefix-development: 'chore(deps-dev)'
      include: 'scope'
```

### Ecosystèmes Supportés

| Ecosystem        | Description                |
| ---------------- | -------------------------- |
| `npm`            | JavaScript (package.json)  |
| `pip`            | Python (requirements.txt)  |
| `bundler`        | Ruby (Gemfile)             |
| `docker`         | Docker (Dockerfile)        |
| `github-actions` | GitHub Actions (workflows) |
| `composer`       | PHP (composer.json)        |
| `nuget`          | .NET (\*.csproj)           |
| `gradle`         | Java (build.gradle)        |
| `maven`          | Java (pom.xml)             |
| `cargo`          | Rust (Cargo.toml)          |
| `gomod`          | Go (go.mod)                |

### Configuration Avancée

```yaml
version: 2
updates:
  # Dépendances npm de production
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'daily'
    open-pull-requests-limit: 10

    # Versionning sémantique
    versioning-strategy: increase

    # Grouper les mises à jour
    groups:
      react:
        patterns:
          - 'react*'
      testing:
        patterns:
          - '*jest*'
          - '@testing-library/*'

    # Ignorer certains packages
    ignore:
      - dependency-name: 'eslint'
        versions: ['8.x']

      - dependency-name: 'next'
        update-types: ['version-update:semver-major']

    # Labels personnalisés
    labels:
      - 'dependencies'
      - 'npm'
      - 'automated'

    # Commit message personnalisé
    commit-message:
      prefix: 'chore'
      prefix-development: 'chore'
      include: 'scope'

    # Reviewers et assignees
    reviewers:
      - 'octocat'
    assignees:
      - 'octocat'

    # Milestone
    milestone: 4

  # GitHub Actions
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'weekly'
    labels:
      - 'github-actions'
      - 'dependencies'
    commit-message:
      prefix: 'ci'

  # Docker
  - package-ecosystem: 'docker'
    directory: '/'
    schedule:
      interval: 'weekly'
    labels:
      - 'docker'
      - 'dependencies'
```

### Options de Planification

```yaml
schedule:
  interval: 'daily' # daily, weekly, monthly
  day: 'monday' # Pour weekly : monday, tuesday, etc.
  time: '09:00' # Heure au format HH:MM
  timezone: 'Europe/Paris'
```

### Limiter le Nombre de PRs

```yaml
open-pull-requests-limit: 5 # Max 5 PRs ouvertes en même temps
# Mettre à 0 pour désactiver temporairement
```

### Grouper les Mises à Jour

```yaml
groups:
  # Grouper toutes les dépendances React ensemble
  react-ecosystem:
    patterns:
      - 'react'
      - 'react-dom'
      - 'react-*'

  # Grouper les outils de développement
  dev-dependencies:
    dependency-type: 'development'
    update-types:
      - 'minor'
      - 'patch'
```

### Exemple de Configuration pour ce Projet

```yaml
version: 2
updates:
  # Dépendances npm
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
      day: 'monday'
      time: '09:00'
      timezone: 'Europe/Paris'
    open-pull-requests-limit: 10

    groups:
      # Grouper Next.js et ses dépendances
      nextjs:
        patterns:
          - 'next'
          - 'eslint-config-next'

      # Grouper React
      react:
        patterns:
          - 'react'
          - 'react-dom'

      # Grouper les outils de test
      testing:
        patterns:
          - '@playwright/*'
          - 'playwright'
          - '@testing-library/*'

      # Grouper Supabase
      supabase:
        patterns:
          - '@supabase/*'

      # Grouper Sanity
      sanity:
        patterns:
          - '@sanity/*'
          - 'next-sanity'
          - 'sanity'

      # Grouper les minor/patch des dev dependencies
      dev-dependencies:
        dependency-type: 'development'
        update-types:
          - 'minor'
          - 'patch'

    ignore:
      # Ne pas mettre à jour les majors de certains packages
      - dependency-name: 'next'
        update-types: ['version-update:semver-major']

    labels:
      - 'dependencies'
      - 'automated'

    commit-message:
      prefix: 'chore(deps)'
      prefix-development: 'chore(deps-dev)'
      include: 'scope'

  # GitHub Actions
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'monthly'
    labels:
      - 'github-actions'
      - 'dependencies'
    commit-message:
      prefix: 'ci'
```

### Auto-Merge des PRs Dependabot

Pour automatiser l'approbation et le merge des PRs Dependabot, créez un workflow :

Fichier : `.github/workflows/dependabot-auto-merge.yml`

```yaml
name: Dependabot Auto-Merge

on: pull_request

permissions:
  pull-requests: write
  contents: write

jobs:
  auto-merge:
    runs-on: ubuntu-latest
    if: github.actor == 'dependabot[bot]'
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1
        with:
          github-token: '${{ secrets.GITHUB_TOKEN }}'

      - name: Auto-approve
        if: steps.metadata.outputs.update-type == 'version-update:semver-patch' || steps.metadata.outputs.update-type == 'version-update:semver-minor'
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Enable auto-merge
        if: steps.metadata.outputs.update-type == 'version-update:semver-patch' || steps.metadata.outputs.update-type == 'version-update:semver-minor'
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 👥 CODEOWNERS

### Qu'est-ce que CODEOWNERS ?

Le fichier `CODEOWNERS` définit quels utilisateurs ou équipes sont responsables de parties spécifiques du code. Quand une PR modifie ces fichiers, les propriétaires sont automatiquement demandés en review.

### Syntaxe de Base

Fichier : `.github/CODEOWNERS`

```
# Syntaxe : pattern utilisateur/équipe

# Pattern peut être :
# - Un fichier : /path/to/file.js
# - Un dossier : /path/to/folder/
# - Un pattern glob : *.js, **/*.ts
# - Wildcards : /docs/**/*.md

# Utilisateurs : @username
# Équipes : @org/team-name
# Emails : email@example.com

# Tout le dépôt par défaut
* @username @org/core-team

# Documentation
/docs/ @username @org/docs-team
*.md @username

# Code source
/src/ @org/developers
/core/ @org/backend-team

# Tests
/tests/ @org/qa-team
*.test.ts @org/qa-team

# CI/CD
/.github/ @org/devops
/.github/workflows/ @org/devops @username

# Configuration
/package.json @org/core-team
/tsconfig.json @org/core-team
/.env.example @org/core-team

# Sécurité
/SECURITY.md @org/security-team
/docs/SECURITY*.md @org/security-team
```

### Patterns Avancés

```
# Wildcards
*.js @js-team
*.ts @ts-team

# Tous les fichiers dans un dossier (récursif)
/src/** @dev-team

# Tous les fichiers d'un type dans un dossier
/docs/**/*.md @docs-team

# Fichiers spécifiques
/package.json @maintainers
/pnpm-lock.yaml @maintainers
/.github/workflows/*.yml @devops

# Priorité : Le dernier match l'emporte
* @default-team
/src/admin/ @admin-team  # Écrase le default pour /src/admin/

# Plusieurs propriétaires
/src/core/ @backend-team @lead-dev @security-team

# Négation (non supportée directement, utiliser l'ordre)
# Pour tout sauf les tests :
* @dev-team
/tests/ @qa-team  # Écrase pour les tests
```

### Exemple pour ce Projet

```
# Default owners pour tout le dépôt
* @argenteuilbasketball/core-team

# Documentation
/docs/ @argenteuilbasketball/docs-team
*.md @argenteuilbasketball/docs-team

# Core business logic
/core/domain/ @argenteuilbasketball/architects
/core/application/usecases/ @argenteuilbasketball/backend-team

# Infrastructure
/core/infrastructure/ @argenteuilbasketball/backend-team
/core/infrastructure/supabase/ @argenteuilbasketball/database-team

# Presentation layer
/core/presentation/ @argenteuilbasketball/fullstack-team
/src/ @argenteuilbasketball/frontend-team

# Components
/src/components/ @argenteuilbasketball/frontend-team

# Tests
/tests/ @argenteuilbasketball/qa-team
*.test.ts @argenteuilbasketball/qa-team
*.spec.ts @argenteuilbasketball/qa-team

# CI/CD et DevOps
/.github/workflows/ @argenteuilbasketball/devops
/playwright.config.ts @argenteuilbasketball/qa-team

# Configuration critique
/package.json @argenteuilbasketball/lead-dev
/tsconfig.json @argenteuilbasketball/lead-dev
/next.config.js @argenteuilbasketball/lead-dev

# Sécurité
/SECURITY.md @argenteuilbasketball/security-team
/docs/SECURITY*.md @argenteuilbasketball/security-team
/.github/workflows/security-audit.yml @argenteuilbasketball/security-team

# Base de données
/supabase/ @argenteuilbasketball/database-team
```

### Comportement

**Revue Obligatoire** :

- Si vous activez "Require review from Code Owners" dans les branch protection rules, les PRs ne pourront pas être mergées sans approbation des code owners

**Configuration** :

1. Aller dans `Settings` > `Branches`
2. Modifier la rule de protection de `main`
3. Cocher `Require review from Code Owners`

**Notifications** :

- Les code owners sont automatiquement notifiés
- Ils apparaissent dans la section "Reviewers" de la PR

---

## 🌐 Fichiers de Communauté

### 1. CONTRIBUTING.md

Guide pour les contributeurs externes.

Fichier : `.github/CONTRIBUTING.md`

````markdown
# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer à Argenteuil Basketball !

## 📋 Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Standards de Code](#standards-de-code)
- [Workflow Git](#workflow-git)
- [Conventions de Commit](#conventions-de-commit)

## 📜 Code de Conduite

En participant à ce projet, vous acceptez de respecter notre [Code de Conduite](CODE_OF_CONDUCT.md).

## 🚀 Comment Contribuer

### Signaler un Bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/owner/repo/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Décrivez le bug de manière détaillée
4. Incluez les étapes pour reproduire
5. Ajoutez des captures d'écran si pertinent

### Proposer une Fonctionnalité

1. Créez une issue avec le template "Feature Request"
2. Décrivez la fonctionnalité et son utilité
3. Attendez la discussion et l'approbation avant de commencer

### Soumettre une Pull Request

1. **Fork** le projet
2. **Créez une branche** : `git checkout -b feature/ma-fonctionnalite`
3. **Développez** votre fonctionnalité
4. **Testez** : Assurez-vous que tous les tests passent
5. **Commitez** : Suivez nos conventions de commit
6. **Pushez** : `git push origin feature/ma-fonctionnalite`
7. **Ouvrez une PR** vers `main`

## 💻 Standards de Code

### Architecture

Ce projet suit **Clean Architecture**. Consultez [CLAUDE.md](../CLAUDE.md) pour les détails.

**Règles importantes** :

- Respecter la séparation des couches (domain, application, infrastructure, presentation)
- Utiliser le pattern Repository
- Implémenter les use cases
- Mapper entre les DTOs

### Style de Code

```bash
# Linter et formatter
pnpm fix
```
````

**Conventions** :

- Utiliser TypeScript strict mode
- Privilégier la programmation fonctionnelle
- Utiliser les path aliases (@/, @/core/, etc.)
- Documenter avec JSDoc les fonctions complexes
- Variables : camelCase, `isLoading`, `hasError`
- Composants React : PascalCase
- Fichiers : kebab-case

### Tests

```bash
# Tests unitaires
pnpm test

# Tests E2E
pnpm exec playwright test
```

**Exigences** :

- Tous les tests doivent passer
- Ajouter des tests pour les nouvelles fonctionnalités
- Maintenir une couverture > 80%

## 🌿 Workflow Git

### Branches

- `main` : Production stable
- `develop` : Développement actif (si applicable)
- `feature/*` : Nouvelles fonctionnalités
- `fix/*` : Corrections de bugs
- `hotfix/*` : Corrections urgentes
- `chore/*` : Maintenance, refactoring

### Protection

- ❌ Pas de push direct sur `main`
- ✅ Toujours passer par une PR
- ✅ Review obligatoire
- ✅ Tests CI doivent passer

## 📝 Conventions de Commit

Nous suivons [Conventional Commits](https://www.conventionalcommits.org/).

**Format** :

```
<type>(<scope>): <description>

[corps optionnel]

[footer optionnel]
```

**Types** :

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, point-virgule, etc.
- `refactor`: Refactoring (ni feat ni fix)
- `perf`: Amélioration de performance
- `test`: Ajout/correction de tests
- `chore`: Maintenance, dépendances, config

**Exemples** :

```
feat(auth): add Google OAuth login
fix(match): correct date display in calendar
docs(readme): update installation instructions
chore(deps): update next to 14.0.0
```

## 🔍 Review Process

### Pour les Contributeurs

- Répondez rapidement aux commentaires
- Effectuez les modifications demandées
- Résolvez les conflits de merge
- Gardez votre branche à jour avec `main`

### Pour les Reviewers

- Soyez constructif et respectueux
- Expliquez les raisons de vos demandes
- Approuvez si le code respecte les standards
- Testez la PR si possible

## ❓ Questions

Si vous avez des questions, n'hésitez pas à :

- Ouvrir une issue avec le label `question`
- Nous contacter sur [Discord](https://discord.gg/...)
- Envoyer un email à dev@argenteuilbasketball.com

## 📄 Licence

En contribuant, vous acceptez que vos contributions soient sous la même licence que le projet.

---

Merci de contribuer à Argenteuil Basketball ! 🏀

````

### 2. CODE_OF_CONDUCT.md

Code de conduite pour la communauté.

Fichier : `.github/CODE_OF_CONDUCT.md`

```markdown
# Code de Conduite

## Notre Engagement

Dans l'intérêt de favoriser un environnement ouvert et accueillant, nous nous engageons, en tant que contributeurs et mainteneurs, à faire de la participation à notre projet et à notre communauté une expérience exempte de harcèlement pour tous, indépendamment de l'âge, de la taille corporelle, du handicap, de l'ethnicité, de l'identité et de l'expression de genre, du niveau d'expérience, de la nationalité, de l'apparence personnelle, de la race, de la religion ou de l'identité et de l'orientation sexuelles.

## Nos Standards

Exemples de comportements qui contribuent à créer un environnement positif :

- Utiliser un langage accueillant et inclusif
- Être respectueux des points de vue et des expériences différents
- Accepter gracieusement les critiques constructives
- Se concentrer sur ce qui est le mieux pour la communauté
- Faire preuve d'empathie envers les autres membres de la communauté

Exemples de comportements inacceptables :

- L'utilisation de langage ou d'imagerie sexualisés
- Les commentaires trolls, insultants ou dérogatoires, et les attaques personnelles ou politiques
- Le harcèlement public ou privé
- La publication d'informations privées d'autrui sans permission explicite
- Tout autre comportement qui pourrait raisonnablement être considéré comme inapproprié

## Nos Responsabilités

Les mainteneurs du projet sont responsables de clarifier les standards de comportement acceptable et sont censés prendre des mesures correctives appropriées et justes en réponse à tout comportement inacceptable.

## Portée

Ce code de conduite s'applique à la fois au sein des espaces du projet ainsi que dans les espaces publics lorsqu'un individu représente le projet ou sa communauté.

## Application

Les cas de comportement abusif, harcelant ou autrement inacceptable peuvent être signalés en contactant l'équipe du projet à conduct@argenteuilbasketball.com. Toutes les plaintes seront examinées et étudiées et donneront lieu à une réponse jugée nécessaire et appropriée aux circonstances.

## Attribution

Ce Code de Conduite est adapté du [Contributor Covenant](https://www.contributor-covenant.org), version 2.1.
````

### 3. SECURITY.md

Politique de sécurité (déjà existant dans le projet).

Le projet possède déjà un excellent fichier [SECURITY.md](../SECURITY.md). Il devrait être déplacé dans `.github/SECURITY.md` pour être automatiquement reconnu par GitHub.

### 4. SUPPORT.md

Guide de support pour les utilisateurs.

Fichier : `.github/SUPPORT.md`

```markdown
# 🆘 Support

Besoin d'aide avec Argenteuil Basketball ? Voici comment obtenir de l'assistance.

## 📚 Documentation

Consultez d'abord notre documentation :

- [README](../README.md)
- [Guide d'installation](../docs/INSTALLATION.md)
- [Documentation technique](../CLAUDE.md)

## 💬 Canaux de Communication

### Pour les Bugs

Si vous avez trouvé un bug :

1. Vérifiez les [issues existantes](https://github.com/owner/repo/issues)
2. Si le bug n'existe pas, [créez une nouvelle issue](https://github.com/owner/repo/issues/new/choose)
3. Utilisez le template "Bug Report"

### Pour les Questions

- **Discord** : [Rejoignez notre serveur](https://discord.gg/...)
- **Email** : support@argenteuilbasketball.com
- **GitHub Discussions** : [Posez une question](https://github.com/owner/repo/discussions)

### Pour les Demandes de Fonctionnalités

1. Vérifiez que la fonctionnalité n'a pas déjà été demandée
2. [Créez une issue](https://github.com/owner/repo/issues/new/choose) avec le template "Feature Request"

## 🚨 Problèmes de Sécurité

**NE PAS** créer d'issue publique pour les vulnérabilités de sécurité.

À la place :

- Envoyez un email à security@argenteuilbasketball.com
- Ou utilisez [GitHub Security Advisories](https://github.com/owner/repo/security/advisories/new)

Consultez notre [Politique de Sécurité](SECURITY.md) pour plus de détails.

## ⏱️ Temps de Réponse

- **Bugs critiques** : < 24h
- **Bugs standards** : < 7 jours
- **Questions** : < 3 jours
- **Demandes de fonctionnalités** : Variable

## 🌍 Langues

Nous offrons du support en :

- 🇫🇷 Français (langue principale)
- 🇬🇧 Anglais

---

Merci d'utiliser Argenteuil Basketball ! 🏀
```

### 5. FUNDING.yml

Configuration du financement/sponsoring.

Fichier : `.github/FUNDING.yml`

```yaml
# Configuration du financement GitHub Sponsors

github: [username] # Utilisateurs GitHub Sponsors
patreon: username # Patreon
open_collective: project-name # Open Collective
ko_fi: username # Ko-fi
tidelift: npm/package-name # Tidelift
community_bridge: project-name # Community Bridge
liberapay: username # Liberapay
issuehunt: username # IssueHunt
custom:
  - https://argenteuilbasketball.com/donate
  - https://paypal.me/username
```

---

## 🚀 Configuration Avancée

### 1. Réutiliser des Workflows

Créez des workflows réutilisables pour éviter la duplication.

**Workflow réutilisable** : `.github/workflows/reusable-test.yml`

```yaml
name: Reusable Test Workflow

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string
      working-directory:
        required: false
        type: string
        default: '.'
    secrets:
      SUPABASE_URL:
        required: true
      SUPABASE_KEY:
        required: true

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}

      - run: npm install
        working-directory: ${{ inputs.working-directory }}

      - run: npm test
        working-directory: ${{ inputs.working-directory }}
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_KEY: ${{ secrets.SUPABASE_KEY }}
```

**Appeler le workflow** : `.github/workflows/ci.yml`

```yaml
name: CI

on: [push, pull_request]

jobs:
  test-node-18:
    uses: ./.github/workflows/reusable-test.yml
    with:
      node-version: '18'
    secrets:
      SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
      SUPABASE_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}

  test-node-20:
    uses: ./.github/workflows/reusable-test.yml
    with:
      node-version: '20'
    secrets:
      SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
      SUPABASE_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
```

### 2. Matrices de Build Avancées

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false # Continue même si un job échoue
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [18, 20, 22]
        include:
          # Ajouter des configurations spécifiques
          - os: ubuntu-latest
            node-version: 20
            experimental: true
        exclude:
          # Exclure des combinaisons
          - os: macos-latest
            node-version: 18

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm test
```

### 3. Cache et Artifacts

**Cache des dépendances** :

```yaml
steps:
  - uses: actions/checkout@v4

  - name: Cache pnpm modules
    uses: actions/cache@v4
    with:
      path: ~/.pnpm-store
      key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
      restore-keys: |
        ${{ runner.os }}-pnpm-

  - uses: pnpm/action-setup@v4

  - run: pnpm install --frozen-lockfile
```

**Upload d'artifacts** :

```yaml
steps:
  - run: pnpm build

  - name: Upload build artifacts
    uses: actions/upload-artifact@v4
    with:
      name: build-${{ github.sha }}
      path: .next/
      retention-days: 7
      compression-level: 9
```

**Download d'artifacts** :

```yaml
steps:
  - name: Download build artifacts
    uses: actions/download-artifact@v4
    with:
      name: build-${{ github.sha }}
      path: .next/
```

### 4. Composite Actions

Créez des actions personnalisées réutilisables.

Fichier : `.github/actions/setup-project/action.yml`

```yaml
name: 'Setup Project'
description: 'Setup Node.js, pnpm, and install dependencies'

inputs:
  node-version:
    description: 'Node.js version'
    required: false
    default: '20'

runs:
  using: 'composite'
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}

    - name: Setup pnpm
      uses: pnpm/action-setup@v4
      with:
        version: 8

    - name: Get pnpm store directory
      shell: bash
      id: pnpm-cache
      run: echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

    - name: Setup pnpm cache
      uses: actions/cache@v4
      with:
        path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
        key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
        restore-keys: |
          ${{ runner.os }}-pnpm-store-

    - name: Install dependencies
      shell: bash
      run: pnpm install --frozen-lockfile
```

**Utilisation** :

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup project
        uses: ./.github/actions/setup-project
        with:
          node-version: '20'

      - run: pnpm build
```

### 5. Environments et Déploiements

**Définir des environments** :

Dans `Settings` > `Environments`, créez des environments (staging, production) avec :

- Protection rules
- Secrets spécifiques à l'environment
- Reviewers requis

**Utilisation dans les workflows** :

```yaml
jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: actions/checkout@v4
      - run: npm run deploy
        env:
          DEPLOY_URL: ${{ vars.DEPLOY_URL }}
          API_KEY: ${{ secrets.API_KEY }}

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://argenteuilbasketball.com
    steps:
      - uses: actions/checkout@v4
      - run: npm run deploy:production
```

### 6. Conditional Execution

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    # Exécuter uniquement sur main et si pas de [skip ci]
    if: github.ref == 'refs/heads/main' && !contains(github.event.head_commit.message, '[skip ci]')
    steps:
      - run: echo "Deploying..."

  notify:
    runs-on: ubuntu-latest
    # Exécuter uniquement si le job précédent a échoué
    if: failure()
    steps:
      - run: echo "Tests failed!"
```

### 7. Repository Templates

Pour créer un template de projet réutilisable :

1. **Créez un nouveau dépôt** avec la structure souhaitée
2. **Incluez** :
   - README.md
   - LICENSE
   - .gitignore
   - .github/ (workflows, templates, etc.)
   - Structure de base du projet
3. **Activez** "Template repository" dans `Settings`
4. **Utilisez** le template via "Use this template" sur GitHub

---

## ✨ Meilleures Pratiques

### Sécurité

#### 1. Épingler les Actions par SHA

❌ **Éviter** :

```yaml
- uses: actions/checkout@v4
```

✅ **Préférer** :

```yaml
- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1
```

**Pourquoi ?** : Protège contre les supply chain attacks si le tag `v4` est déplacé.

#### 2. Limiter les Permissions

```yaml
name: Secure Workflow

# Permissions minimales par défaut
permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    # Permissions spécifiques au job
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - run: npm test
```

#### 3. Utiliser des Secrets au Niveau Environment

Plutôt que des secrets repository-wide, utilisez des secrets au niveau environment :

- Plus de contrôle
- Reviewers requis
- Traçabilité

#### 4. Ne Jamais Logger les Secrets

❌ **Éviter** :

```yaml
- run: echo "API Key: ${{ secrets.API_KEY }}"
```

✅ **Utiliser** :

```yaml
- run: |
    if [ -z "$API_KEY" ]; then
      echo "API Key not set"
      exit 1
    fi
    echo "API Key is configured"
  env:
    API_KEY: ${{ secrets.API_KEY }}
```

#### 5. Valider les Inputs

Pour les `workflow_dispatch` avec inputs :

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        type: choice
        options:
          - staging
          - production

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Validate input
        run: |
          if [[ ! "${{ inputs.environment }}" =~ ^(staging|production)$ ]]; then
            echo "Invalid environment"
            exit 1
          fi
```

### Performance

#### 1. Paralléliser les Jobs

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test

  build:
    runs-on: ubuntu-latest
    steps:
      - run: npm run build
```

#### 2. Utiliser le Cache

```yaml
- uses: actions/cache@v4
  with:
    path: |
      ~/.pnpm-store
      .next/cache
    key: ${{ runner.os }}-nextjs-${{ hashFiles('**/pnpm-lock.yaml') }}
```

#### 3. Limiter les Runs Inutiles

```yaml
on:
  push:
    paths:
      - 'src/**'
      - 'package.json'
      - '.github/workflows/**'
  pull_request:
    paths:
      - 'src/**'
```

#### 4. Fail Fast (ou pas)

```yaml
strategy:
  fail-fast: true  # Arrêter tous les jobs si un échoue (défaut)
  # OU
  fail-fast: false  # Continuer même si un job échoue
```

### Organisation

#### 1. Nommer Clairement

```yaml
name: 'Tests et Déploiement' # Nom clair et descriptif

jobs:
  unit-tests: # Nom de job descriptif
    name: 'Tests Unitaires (Node ${{ matrix.node }})'
```

#### 2. Structurer les Steps

```yaml
steps:
  # 1. Setup
  - name: Checkout code
    uses: actions/checkout@v4

  - name: Setup Node.js
    uses: actions/setup-node@v4

  # 2. Install
  - name: Install dependencies
    run: pnpm install

  # 3. Build
  - name: Build project
    run: pnpm build

  # 4. Test
  - name: Run tests
    run: pnpm test

  # 5. Report
  - name: Upload coverage
    uses: actions/upload-artifact@v4
```

#### 3. Documenter les Workflows

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  # Déclenché sur push vers main pour déployer automatiquement

jobs:
  test:
    # Teste l'application sur Node 20
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Clone le dépôt pour accéder au code

      - run: npm test
      # Lance les tests unitaires
```

#### 4. Utiliser des Job Outputs

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.get-version.outputs.version }}
    steps:
      - id: get-version
        run: echo "version=$(node -p "require('./package.json').version")" >> $GITHUB_OUTPUT

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying version ${{ needs.build.outputs.version }}"
```

### Maintenance

#### 1. Nettoyer les Anciens Artifacts

Les artifacts consomment du stockage. Configurez une rétention appropriée :

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: build
    path: dist/
    retention-days: 7 # Supprimer après 7 jours
```

#### 2. Désactiver les Workflows Obsolètes

Dans l'UI GitHub : `Actions` > Sélectionner le workflow > `...` > `Disable workflow`

Ou supprimez simplement le fichier YAML.

#### 3. Monitorer les Coûts

- GitHub Actions est gratuit pour les repos publics
- Pour les repos privés : 2000 minutes/mois gratuites
- Optimisez pour réduire les minutes utilisées

#### 4. Revoir Régulièrement

- Mettre à jour les versions des actions
- Supprimer les workflows inutilisés
- Optimiser les temps d'exécution

---

## 🎓 Exemples Complets pour ce Projet

### Workflow CI Complet

```yaml
name: CI - Tests et Qualité

on:
  push:
    branches: [main, master, develop]
    paths:
      - 'src/**'
      - 'core/**'
      - 'package.json'
      - 'pnpm-lock.yaml'
      - '.github/workflows/**'
  pull_request:
    branches: [main, master]

permissions:
  contents: read
  pull-requests: write

env:
  NODE_VERSION: '20'
  PNPM_VERSION: '8'

jobs:
  lint:
    name: Linting
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1

      - name: Setup Node.js
        uses: actions/setup-node@60edb5dd545a775178f52524783378180af0d1f8 # v4.0.2
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Setup pnpm
        uses: pnpm/action-setup@a3252b78c470c02df07e9d59298aecedc3ccdd6d # v3.0.0
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Get pnpm store directory
        id: pnpm-cache
        shell: bash
        run: echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

      - name: Setup pnpm cache
        uses: actions/cache@ab5e6d0c87105b4c9c2047343972218f562e4319 # v4.0.1
        with:
          path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run linter
        run: pnpm run lint

      - name: Check TypeScript
        run: pnpm run type-check

  test:
    name: Tests Unitaires
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11

      - uses: actions/setup-node@60edb5dd545a775178f52524783378180af0d1f8
        with:
          node-version: ${{ env.NODE_VERSION }}

      - uses: pnpm/action-setup@a3252b78c470c02df07e9d59298aecedc3ccdd6d
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Cache pnpm
        uses: actions/cache@ab5e6d0c87105b4c9c2047343972218f562e4319
        with:
          path: ~/.pnpm-store
          key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}

      - run: pnpm install --frozen-lockfile

      - name: Run tests
        run: pnpm test

      - name: Upload coverage
        if: always()
        uses: actions/upload-artifact@5d5d22a31266ced268874388b861e4b58bb5c2f3 # v4.3.1
        with:
          name: coverage-report
          path: coverage/
          retention-days: 30

  e2e:
    name: Tests E2E
    runs-on: ubuntu-latest
    timeout-minutes: 60
    env:
      NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
      NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
      NEXT_PUBLIC_SANITY_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_SANITY_PROJECT_ID }}
      NEXT_PUBLIC_SANITY_DATASET: ${{ secrets.NEXT_PUBLIC_SANITY_DATASET }}
    steps:
      - uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11

      - uses: actions/setup-node@60edb5dd545a775178f52524783378180af0d1f8
        with:
          node-version: ${{ env.NODE_VERSION }}

      - uses: pnpm/action-setup@a3252b78c470c02df07e9d59298aecedc3ccdd6d
        with:
          version: ${{ env.PNPM_VERSION }}

      - run: pnpm install --frozen-lockfile

      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps

      - name: Build
        run: pnpm build

      - name: Run Playwright tests
        run: pnpm exec playwright test

      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@5d5d22a31266ced268874388b861e4b58bb5c2f3
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

---

## 📚 Ressources

### Documentation Officielle

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- [Dependabot](https://docs.github.com/en/code-security/dependabot)
- [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)

### Outils et Extensions

- [act](https://github.com/nektos/act) - Tester GitHub Actions localement
- [GitHub CLI](https://cli.github.com/) - Gérer GitHub depuis le terminal
- [VS Code GitHub Actions Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)

### Articles et Guides

- [Awesome GitHub Actions](https://github.com/sdras/awesome-actions)
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

### Exemples de Projets

- [Next.js Repository](https://github.com/vercel/next.js)
- [React Repository](https://github.com/facebook/react)
- [TypeScript Repository](https://github.com/microsoft/TypeScript)

---

## 🎯 Prochaines Étapes

Maintenant que vous comprenez le dossier `.github`, voici les étapes recommandées :

### Pour ce Projet

1. **✅ Workflows existants** : Les workflows actuels sont bien configurés

2. **📝 Ajouter des Issue Templates** :
   - Créer `.github/ISSUE_TEMPLATE/bug_report.yml`
   - Créer `.github/ISSUE_TEMPLATE/feature_request.yml`
   - Créer `.github/ISSUE_TEMPLATE/config.yml`

3. **🔀 Ajouter un PR Template** :
   - Créer `.github/pull_request_template.md`

4. **🤖 Configurer Dependabot** :
   - Créer `.github/dependabot.yml`
   - Configurer pour npm et GitHub Actions

5. **👥 Définir CODEOWNERS** :
   - Créer `.github/CODEOWNERS`
   - Définir les propriétaires par zone du code

6. **🌐 Ajouter les fichiers de communauté** :
   - Créer `.github/CONTRIBUTING.md`
   - Créer `.github/CODE_OF_CONDUCT.md`
   - Déplacer `docs/SECURITY.md` vers `.github/SECURITY.md`

7. **⚙️ Optimiser les workflows** :
   - Ajouter du cache pour accélérer les builds
   - Créer des workflows réutilisables
   - Configurer des environments (staging, production)

### Actions Concrètes

```bash
# Créer la structure de base
mkdir -p .github/ISSUE_TEMPLATE
mkdir -p .github/PULL_REQUEST_TEMPLATE

# Copier les templates depuis cette documentation
# (Voir les exemples plus haut)

# Commiter les changements
git add .github/
git commit -m "chore: add GitHub templates and configuration"
git push
```

---

## 📊 Récapitulatif

| Composant           | Fichier                            | Rôle                    | Priorité                    |
| ------------------- | ---------------------------------- | ----------------------- | --------------------------- |
| **Workflows**       | `.github/workflows/*.yml`          | Automatisation CI/CD    | ⭐⭐⭐ Essentiel            |
| **Issue Templates** | `.github/ISSUE_TEMPLATE/`          | Standardiser les issues | ⭐⭐⭐ Recommandé           |
| **PR Templates**    | `.github/pull_request_template.md` | Standardiser les PRs    | ⭐⭐⭐ Recommandé           |
| **Dependabot**      | `.github/dependabot.yml`           | Mise à jour automatique | ⭐⭐⭐ Fortement recommandé |
| **CODEOWNERS**      | `.github/CODEOWNERS`               | Propriété du code       | ⭐⭐ Utile                  |
| **CONTRIBUTING**    | `.github/CONTRIBUTING.md`          | Guide de contribution   | ⭐⭐ Utile                  |
| **CODE_OF_CONDUCT** | `.github/CODE_OF_CONDUCT.md`       | Règles de la communauté | ⭐ Optionnel                |
| **SECURITY**        | `.github/SECURITY.md`              | Politique de sécurité   | ⭐⭐⭐ Essentiel            |
| **SUPPORT**         | `.github/SUPPORT.md`               | Guide de support        | ⭐ Optionnel                |
| **FUNDING**         | `.github/FUNDING.yml`              | Financement             | ⭐ Optionnel                |

---

**Dernière mise à jour** : 31 octobre 2025
**Maintenu par** : Équipe Argenteuil Basketball
**Questions ?** : Ouvrez une issue ou contactez dev@argenteuilbasketball.com

**🤖 Documentation générée avec [Claude Code](https://claude.com/claude-code)**
