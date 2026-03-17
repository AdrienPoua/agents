---
name: 'step-07-polish'
description: 'Apply final polish using impeccable:polish skill and complete the pipeline'
---

# Step 7: Polish Final

## STEP GOAL:

Appliquer le polish final sur le code avec le skill `impeccable:polish`, puis marquer le pipeline comme termine.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator finalisant le livrable
- ✅ You execute prescriptively et autonomously
- ✅ No facilitation, no questions a l'utilisateur

### Step-Specific Rules:

- 🎯 Focus ONLY on le polish final — les details qui font la difference
- 🚫 FORBIDDEN to changer la logique, la structure, ou le responsive
- 🚫 FORBIDDEN to ajouter des fonctionnalites
- 💬 Approach: micro-ajustements de qualite visuelle

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Modifier les fichiers du projet en place
- 🚫 C'est le dernier step — pas de next step

## CONTEXT BOUNDARIES:

- Available: code responsive, accessible et visuellement valide (de step-05/06)
- Focus: alignements, spacings, consistance, details finaux
- Limits: pas de changement fonctionnel, pas de refactoring
- Dependencies: step-06 visual review passee

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Apply `impeccable:polish` Skill

Execute le skill `impeccable:polish` sur le code pour :
- Alignements pixel-perfect
- Spacings coherents (utilisation systematique de l'echelle Tailwind)
- Consistance visuelle (memes patterns partout)
- Transitions et animations subtiles
- Details typographiques (line-height, letter-spacing, font-weight)
- Ombres et bordures coherentes
- Micro-interactions soignees

### 2. Final Verification

Derniere verification du code :
- [ ] Alignements pixel-perfect
- [ ] Spacings coherents a l'echelle Tailwind
- [ ] Consistance visuelle globale
- [ ] Transitions smooth
- [ ] Pas de regression (responsive, a11y, fonctionnel)

### 3. Pipeline Complete

Display:

"**Pipeline Perfect UI termine.**

**Livrable :**
- Interface complete, responsive, accessible et polie
- Code production-ready integre au projet
- Composants React/Next.js avec Shadcn/ui + libs complementaires

**Fichiers crees/modifies :**
[Lister tous les fichiers crees et modifies pendant le pipeline]"

#### EXECUTION RULES:

- This is the final step — no next step to load
- Pipeline is complete after this step

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Polish applique avec `impeccable:polish`
- Alignements, spacings, et consistance verifies
- Pas de regression introduite
- Pipeline complete et livrable pret
- Liste des fichiers crees/modifies presentee

### ❌ FAILURE:

- Sauter le polish
- Introduire des regressions (responsive, a11y, fonctionnel)
- Changer la logique ou ajouter des fonctionnalites
- Ne pas lister les fichiers crees/modifies

**Master Rule:** Le polish est la derniere etape. Apres ca, le code est livre.
