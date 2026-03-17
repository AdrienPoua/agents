---
name: 'step-04-codegen'
description: 'Generate production-ready code from the final design specification using impeccable and best-practices skills'

nextStepFile: './step-05-harden.md'
designRules: '../data/design-rules.md'
---

# Step 4: Code Generation

## STEP GOAL:

Generer le code production-ready a partir de la specification de design finale, en utilisant les skills `impeccable:frontend-design`, `vercel-react-best-practices` et `next-best-practices`.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator et code generator
- ✅ You execute prescriptively et autonomously
- ✅ No facilitation, no questions a l'utilisateur

### Step-Specific Rules:

- 🎯 Focus ONLY on la generation de code a partir de la spec
- 🚫 FORBIDDEN to modifier le design — la spec de step-03 est definitive
- 🚫 FORBIDDEN to generer du code placeholder, TODO, ou mock data
- 💬 Approach: generation methodique composant par composant
- 📋 ALWAYS use `impeccable:frontend-design` (NOT `frontend-design`)

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Creer/modifier les fichiers dans le projet
- 📖 Load {designRules} pour confirmer les regles de code generation
- 🚫 Ne pas toucher au responsive/a11y — c'est step-05

## CONTEXT BOUNDARIES:

- Available: specification de design finale (de step-03)
- Available: contexte d'exploration (de step-01)
- Available: brief utilisateur
- Focus: transformer la spec en code production-ready
- Limits: pas de responsive, pas d'a11y, pas de polish — seulement la structure et le fonctionnel
- Dependencies: step-03 spec finale complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Load Design Rules

Load {designRules} pour confirmer :
- `impeccable:frontend-design` est strictement superieur a `frontend-design`
- TypeScript strict
- Imports explicites pour chaque composant
- Production-ready : pas de placeholder, TODO, mock data

### 2. Apply `impeccable:frontend-design` Skill

Execute le skill `impeccable:frontend-design` avec :
- La specification de design finale comme input
- Les wireframes ASCII comme reference visuelle
- La liste des composants avec imports exacts
- Le data mapping (props et donnees)

Ce skill genere :
- Les fichiers composants React/Next.js
- Les imports Shadcn/ui et libs tierces
- Le styling Tailwind
- La structure des fichiers

### 3. Apply `vercel-react-best-practices` Skill

Execute le skill `vercel-react-best-practices` pour verifier et optimiser :
- Performance React (memo, useMemo, useCallback si necessaire)
- Rendering patterns (Server Components vs Client Components)
- Bundle optimization
- Data fetching patterns

### 4. Apply `next-best-practices` Skill

Execute le skill `next-best-practices` pour verifier et optimiser :
- File conventions (page.tsx, layout.tsx, loading.tsx)
- RSC boundaries (use client directives)
- Metadata et SEO
- Image/font optimization
- Route handlers si applicable

### 5. Verify Code Output

Verifier que le code genere :
- [ ] Tous les composants de la spec sont implementes
- [ ] Imports exacts (Shadcn/ui, libs tierces, custom)
- [ ] TypeScript strict (pas de any, types definis)
- [ ] Pas de placeholder, TODO, mock data
- [ ] Structure de fichiers coherente avec le projet
- [ ] Data mapping correct (props, types)

### 6. Proceed to Hardening

Display: "**Code generation terminee. Passage au responsive et accessibilite...**"

#### Menu Handling Logic:

- After code verified, immediately load, read entire file, then execute {nextStepFile}

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after verification

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Code production-ready genere avec `impeccable:frontend-design`
- Best practices React/Next.js appliquees
- Tous les composants de la spec implementes
- TypeScript strict, imports exacts
- Fichiers crees/modifies dans le projet

### ❌ FAILURE:

- Utiliser `frontend-design` au lieu de `impeccable:frontend-design`
- Code placeholder, TODO, mock data
- Composants manquants par rapport a la spec
- Modifier le design (la spec est definitive)
- S'occuper du responsive/a11y (c'est step-05)

**Master Rule:** Skipping steps is FORBIDDEN. Le code doit etre complet et fonctionnel avant le hardening.
