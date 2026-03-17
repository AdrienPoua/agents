# Claude Code - Agents & Commandes locaux

Inventaire complet des agents, commandes et workflows configures dans `~/.claude/`.

---

## Agents (`~/.claude/agents/`)

| Agent | Fichier | Model | Description |
|-------|---------|-------|-------------|
| **debug-detective** | `bug-detective.md` | sonnet | Debuggage universel. Analyse erreurs, identifie causes racines, applique fixes auto. Stack traces, runtime, compilation, TypeScript, tests. |
| **explore-codebase** | `explore-codebase.md` | haiku | Exploration de codebase. Recherche fichiers, patterns, conventions, deps. Output structure avec paths et code cles. |
| **explore-docs** | `explore-docs.md` | haiku | Documentation de librairies. Utilise Context7 + WebFetch pour recuperer docs, exemples de code, API references. |
| **ux-designer** | `ux.md` | sonnet | Optimisation UX/UI. Améliore intuitivité, accessibilité, feedback et parcours des pages existantes. |
| **websearch** | `websearch.md` | haiku | Recherche web rapide. WebSearch + WebFetch, sources autoritaires, output concis avec sources. |

---

## Commandes (`~/.claude/commands/`)

### `/commit`
- **But** : Commit + push automatique avec versioning SemVer
- **Flow** : Stage all -> Analyse diff -> Verification (format + lint + typecheck) -> Version bump -> Commit `Vx.y.z type: description` -> Push
- **Format** : `V1.3.0 feat: add user authentication` (< 50 chars, present tense, no period)
- **Option** : `--ci` pour lancer `/watch-ci` apres le push

### `/create-pull-request`
- **But** : Creation de PR automatique avec titre et description
- **Flow** : Verify branch -> Push -> Analyse diff -> Generate PR -> Submit via `gh pr create`
- **Securite** : Ne commit jamais sur main/master directement

### `/epct`
- **But** : Implementation systematique en 4 phases (Explore-Plan-Code-Test)
- **Phases** :
  1. **EXPLORE** : Sous-agents paralleles pour fouiller le codebase + web
  2. **PLAN** : Strategie detaillee, stop si questions
  3. **CODE** : Implementation strictement en scope, pas de commentaires inutiles
  4. **TEST** : Lint + typecheck + tests cibles + verification visuelle (Chrome DevTools)

### `/explore`
- **But** : Exploration approfondie du codebase pour repondre a une question
- **Usage** : `/explore <question>`
- **Flow** : Parse question -> Sous-agents paralleles (codebase + docs + web) -> Analyse -> Reponse avec references fichier:ligne

### `/feature`
- **But** : Implementation complete d'une feature en Clean Architecture
- **Usage** : `/feature <name> <description>`
- **Layers** : Domain -> Infrastructure -> Application -> Presentation -> UI
- **Stack** : Entities, Repositories, Use Cases, Server Actions, React Query hooks, Pages

### `/fix-pr-comments`
- **But** : Resoudre tous les commentaires de review PR non-resolus
- **Flow** : Fetch comments (gh api) -> Analyse par fichier -> Implementation fixes -> Commit + push
- **Regle** : Reste strictement dans le scope des commentaires reviewers

### `/perfect-ui`
- **But** : Pipeline multi-agents pour créer des interfaces production-ready
- **Usage** : `/perfect-ui <description de l'interface>`
- **Flow** : 7 étapes — Explore → Design → Synthèse → Code → Responsive → Review → Polish
- **Workflow** : Charge `~/.claude/workflows/perfect-ui/workflow.md`

### `/oneshot`
- **But** : Implementation ultra-rapide (Explore -> Code -> Test, sans phase Plan)
- **Usage** : `/oneshot <feature-description>`
- **Flow** : Exploration rapide (max 2 agents) -> Code immediat -> Lint + typecheck
- **Priorite** : Vitesse > Completude

### `/refactor`
- **But** : Refactoring sûr en Clean Architecture
- **Usage** : `/refactor <target> <reason>`
- **Flow** : Analyse → Identification améliorations → Plan par couches → Préservation compatibilité → Update dépendances
- **Patterns** : Extract component, extract hook, consolidate duplicates, improve types, extract constants

### `/run-tasks`
- **But** : Executer des GitHub issues ou fichiers de taches avec workflow EPCT + creation PR
- **Usage** : `/run-tasks <issue-number|issue-url|file-path>`
- **Flow** : Get task -> Check branch -> EPCT -> Create PR -> Update issue
- **Integration** : Labels GitHub, commentaires automatiques, lien PR-issue

### `/watch-ci`
- **But** : Surveiller CI (GitHub Actions) + deploiement Vercel, fixer auto les echecs
- **Flow** : Wait -> Monitor GH Actions -> Fix failures (debug-detective) -> Monitor Vercel -> Report
- **Limites** : Max 3 tentatives de fix, commit auto des corrections

---

## Skills

| Skill | Description |
|-------|-------------|
| `update-config` | Configurer Claude Code (settings, hooks, permissions) |
| `keybindings-help` | Personnaliser les raccourcis clavier |
| `simplify` | Review du code pour qualite et reuse |
| `loop` | Executer une commande sur un intervalle recurrent |
| `claude-api` | Construire des apps avec l'API Claude / Anthropic SDK |
| `find-skills` | Decouvrir et installer de nouveaux skills |
| `systematic-debugging` | Debugging systematique avant de proposer des fixes. 4 phases : Root Cause → Pattern Analysis → Hypothesis → Implementation. Inclut techniques de tracing, defense-in-depth, condition-based waiting. |

---

## Arborescence

```
~/.claude/
  agents/
    bug-detective.md          # debug-detective
    explore-codebase.md       # exploration codebase
    explore-docs.md           # documentation librairies
    ux.md                     # ux-designer
    websearch.md              # recherche web
  commands/
    commit.md                 # /commit
    create-pull-request.md    # /create-pull-request
    epct.md                   # /epct
    explore.md                # /explore
    feature.md                # /feature
    fix-pr-comments.md        # /fix-pr-comments
    oneshot.md                # /oneshot
    perfect-ui.md             # /perfect-ui
    refactor.md               # /refactor
    run-tasks.md              # /run-tasks
    watch-ci.md               # /watch-ci
  skills/
    systematic-debugging/
      SKILL.md                # Point d'entree du skill
      root-cause-tracing.md   # Trace bugs backward dans la call stack
      defense-in-depth.md     # Validation multi-couches apres fix
      condition-based-waiting.md  # Remplacer timeouts par condition polling
      find-polluter.sh        # Script pour trouver les tests pollueurs
```
