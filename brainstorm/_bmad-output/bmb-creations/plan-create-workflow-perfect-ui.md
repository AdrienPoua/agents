# Plan : Creer le Workflow Perfect UI

## Instructions

Lance `bmad-bmb-create-workflow` puis skip le brainstorming et donne le contexte ci-dessous.

---

## Contexte complet pour la Discovery

Ce workflow orchestre le pipeline complet "Perfect UI" — un systeme multi-agents pour creer des interfaces utilisateur parfaites, de la demande libre au code production-ready.

### Purpose

Orchestrer un pipeline en 7 etapes qui transforme une demande utilisateur libre (ex: "cree-moi un dashboard analytics") en une interface complete, responsive, accessible et polie, en coordonnant 3 agents custom et plusieurs skills existants.

### Architecture du pipeline

```
INPUT (demande libre)
    |
    v
STEP 1: EXPLORATION (skills existants)
    |
    +-------+-------+
    v               v
STEP 2A:        STEP 2B:
Layout          UX Pattern
Architect       Research
(PARALLELE)     (PARALLELE)
    +-------+-------+
            v
STEP 3: DESIGN SYNTHESIS (agent Forge)
            v
STEP 4: CODE GENERATION (skills existants)
            v
STEP 5: RESPONSIVE + ACCESSIBILITE (skills existants)
            v
STEP 6: VISUAL REVIEW (MCP Chrome DevTools) → boucle vers Step 4 si problemes
            v
STEP 7: POLISH FINAL (skill existant)
            v
OUTPUT (code production-ready integre a l'application)
```

### Detail de chaque step

#### Step 1 : Exploration
- **Type** : Skills existants
- **Outils** : skill `explore` + skill `next-best-practices`
- **Input** : La demande utilisateur libre
- **Output** : Contexte complet — data structures, composants existants du projet, conventions, contraintes
- **But** : Comprendre la demande, explorer le codebase, rassembler le contexte necessaire pour les agents

#### Step 2A : Layout Architect (EN PARALLELE avec 2B)
- **Type** : Agent custom
- **Agent** : Blueprint (layout-architect.agent.yaml)
- **Commande a invoquer** : `DL` (Design Layout)
- **Input** : Le contexte d'exploration (Step 1) + la demande utilisateur
- **Output** : Component Design Spec (wireframe ASCII mobile-first + desktop, arbre composants, decisions pattern avec justification UX, mapping donnees→UI, responsive strategy)
- **YAML** : `_bmad-output/bmb-creations/layout-architect.agent.yaml`

#### Step 2B : UX Pattern Researcher (EN PARALLELE avec 2A)
- **Type** : Agent custom
- **Agent** : Scout (ux-pattern-researcher.agent.yaml)
- **Commande a invoquer** : `RX` (Research UX)
- **Input** : Le contexte d'exploration (Step 1) + la demande utilisateur
- **Output** : Rapport de recherche UX (composants Shadcn existants, composants libs tierces, patterns inspiration, best practices, recommandations avec imports)
- **YAML** : `_bmad-output/bmb-creations/ux-pattern-researcher.agent.yaml`

#### Step 3 : Design Synthesis
- **Type** : Agent custom
- **Agent** : Forge (design-synthesizer.agent.yaml)
- **Commande a invoquer** : `SD` (Synthesize Design)
- **Input** : Component Design Spec (de Step 2A) + Rapport UX (de Step 2B)
- **Output** : Specification de design finale (wireframe ASCII definitif, composants exacts avec imports, props et data mapping, responsive strategy, conflits resolus, notes implementation)
- **Hierarchie composants** : Shadcn/ui > libs tierces (Magic UI, Aceternity UI, BadtzUI, Kokonut UI, Hover, Animate UI, Smooth UI) > custom uniquement si rien n'existe
- **YAML** : `_bmad-output/bmb-creations/design-synthesizer.agent.yaml`

#### Step 4 : Code Generation
- **Type** : Skills existants
- **Outils** : skill `impeccable:frontend-design` + skill `vercel-react-best-practices` + skill `next-best-practices`
- **Input** : La specification de design finale (de Step 3)
- **Output** : Code production-ready (composants React/Next.js, imports, styling)
- **Regle** : impeccable:frontend-design est strictement superieur a frontend-design — toujours utiliser impeccable

#### Step 5 : Responsive + Accessibilite
- **Type** : Skills existants
- **Outils** : skill `impeccable:adapt` + skill `impeccable:harden`
- **Input** : Le code genere (de Step 4)
- **Output** : Code responsive et accessible (breakpoints, a11y, error handling, edge cases)

#### Step 6 : Visual Review
- **Type** : MCP Tool
- **Outil** : MCP Chrome DevTools (screenshot + audit du rendu reel)
- **Input** : Le code responsive (de Step 5), rendu dans le navigateur
- **Output** : Screenshots + rapport d'audit visuel
- **BOUCLE** : Si des problemes visuels sont detectes → retour a Step 4 avec les corrections necessaires. Boucle max 3 iterations.

#### Step 7 : Polish Final
- **Type** : Skill existant
- **Outil** : skill `impeccable:polish`
- **Input** : Le code valide visuellement (de Step 6)
- **Output** : Code final poli (alignements, spacings, consistance, details)

### Decisions cles du pipeline
- **Librairie principale** : Shadcn/ui (toujours premier choix)
- **Librairies complementaires** : Magic UI, Aceternity UI, BadtzUI, Kokonut UI, Hover, Animate UI, Smooth UI
- **Approche** : Mobile-first toujours
- **Code gen** : impeccable:frontend-design > frontend-design (strictement superieur)
- **Boucle feedback** : Step 6 peut renvoyer vers Step 4 si problemes visuels (max 3 iterations)
- **Parallelisme** : Steps 2A et 2B s'executent en parallele

### Agents custom (tous valides, 0 fail, 0 warning)

| Agent | Persona | Icon | Commandes | YAML |
|-------|---------|------|-----------|------|
| Layout Architect | Blueprint | 📐 | DL, AP, CP | layout-architect.agent.yaml |
| UX Pattern Researcher | Scout | 🔎 | RX, CS, SL | ux-pattern-researcher.agent.yaml |
| Design Synthesizer | Forge | 🔀 | SD, RC, AC | design-synthesizer.agent.yaml |

### Skills existants utilises

| Skill | Step | Role |
|-------|------|------|
| explore | 1 | Exploration codebase |
| next-best-practices | 1, 4 | Conventions Next.js |
| impeccable:frontend-design | 4 | Code generation UI |
| vercel-react-best-practices | 4 | Perf React/Next.js |
| impeccable:adapt | 5 | Responsive design |
| impeccable:harden | 5 | Accessibilite + robustesse |
| impeccable:polish | 7 | Polish final |

### MCP Tools utilises

| Tool | Step | Role |
|------|------|------|
| Chrome DevTools (MCP) | 6 | Screenshot + audit visuel du rendu reel |

### Output final du workflow
- Code production-ready integre a l'application
- Composants React/Next.js avec Shadcn + libs complementaires
- Responsive, accessible, poli
- Zero decision de design laissee a l'utilisateur

### Fichiers de reference
- Pipeline v3 : `_bmad-output/brainstorming/brainstorming-session-2026-03-02-001.md`
- Agent 1 : `_bmad-output/bmb-creations/layout-architect.agent.yaml`
- Agent 2 : `_bmad-output/bmb-creations/ux-pattern-researcher.agent.yaml`
- Agent 3 : `_bmad-output/bmb-creations/design-synthesizer.agent.yaml`
- Ce plan : `_bmad-output/bmb-creations/plan-create-workflow-perfect-ui.md`
