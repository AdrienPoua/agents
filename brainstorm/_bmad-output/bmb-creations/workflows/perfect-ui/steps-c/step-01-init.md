---
name: 'step-01-init'
description: 'Receive user brief and explore codebase to gather context for design agents'

nextStepFile: './step-02-design.md'
designRules: '../data/design-rules.md'
---

# Step 1: Exploration

## STEP GOAL:

Recevoir le brief utilisateur et explorer le codebase pour rassembler tout le contexte necessaire aux agents de design (composants existants, data structures, conventions, contraintes).

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator
- ✅ You execute prescriptively and autonomously
- ✅ No facilitation, no questions beyond the brief already received

### Step-Specific Rules:

- 🎯 Focus ONLY on exploration — ne pas commencer le design
- 🚫 FORBIDDEN to generate any UI code or wireframes in ce step
- 🚫 FORBIDDEN to ask des questions a l'utilisateur — le brief a deja ete recu dans workflow.md
- 💬 Approach: execution silencieuse et methodique

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Rassembler le contexte en memoire pour les steps suivants
- 📖 Load {designRules} pour comprendre la hierarchie composants et les regles
- 🚫 Ne pas creer de fichiers — ce step est purement exploratoire

## CONTEXT BOUNDARIES:

- Available: le brief utilisateur (recu dans workflow.md init)
- Focus: comprendre le codebase, les composants existants, les conventions
- Limits: pas de design, pas de code, pas de decisions
- Dependencies: aucune — c'est le premier step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Load Design Rules

Load {designRules} pour comprendre :
- La hierarchie composants (Shadcn > libs tierces > custom)
- Les skills a utiliser dans ce step
- Les regles mobile-first

### 2. Explore Codebase with `explore` Skill

Execute le skill `explore` pour decouvrir :
- La structure du projet (dossiers, conventions de nommage)
- Les composants existants (quels composants Shadcn sont deja installes/utilises)
- Les data structures pertinentes pour la demande utilisateur
- Les patterns de code existants (comment les composants sont structures)
- Les fichiers de configuration (tailwind, next.config, tsconfig)

### 3. Gather Next.js Conventions with `next-best-practices` Skill

Execute le skill `next-best-practices` pour confirmer :
- Les conventions du projet (App Router vs Pages Router)
- Les patterns RSC (Server Components vs Client Components)
- Les conventions de fichiers et dossiers

### 4. Synthesize Exploration Context

Rassembler en memoire un contexte structure :

**Contexte projet :**
- Framework et version
- Router type (App/Pages)
- Composants Shadcn installes
- Libs UI tierces deja presentes
- Patterns de code existants

**Contexte demande :**
- Ce que l'utilisateur veut (brief)
- Les data structures pertinentes
- Les composants existants reutilisables
- Les contraintes techniques identifiees

### 5. Proceed to Design

Display: "**Exploration terminee. Passage au design parallele...**"

#### Menu Handling Logic:

- After exploration complete, immediately load, read entire file, then execute {nextStepFile}

#### EXECUTION RULES:

- This is an auto-proceed init step with no user choices
- Proceed directly to next step after exploration

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Codebase explore avec skill `explore`
- Conventions Next.js confirmees avec skill `next-best-practices`
- Contexte structure rassemble en memoire
- Composants existants identifies
- Pret a passer aux agents de design

### ❌ FAILURE:

- Demander des questions a l'utilisateur
- Commencer a designer ou coder
- Sauter l'exploration du codebase
- Ne pas identifier les composants existants

**Master Rule:** Skipping steps is FORBIDDEN. Explorer d'abord, designer ensuite.
