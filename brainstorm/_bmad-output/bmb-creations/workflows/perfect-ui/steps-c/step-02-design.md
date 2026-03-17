---
name: 'step-02-design'
description: 'Launch parallel sub-agents Blueprint and Scout for layout architecture and UX pattern research'

nextStepFile: './step-03-synthesis.md'
designRules: '../data/design-rules.md'
layoutArchitectAgent: '{project-root}/_bmad-output/bmb-creations/layout-architect.agent.yaml'
uxPatternResearcherAgent: '{project-root}/_bmad-output/bmb-creations/ux-pattern-researcher.agent.yaml'
---

# Step 2: Design Parallele

## STEP GOAL:

Lancer 2 sub-agents en parallele — Blueprint (Layout Architect) et Scout (UX Pattern Researcher) — pour produire simultanement le Component Design Spec et le Rapport de recherche UX.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator
- ✅ You execute prescriptively and autonomously
- ✅ No facilitation, no questions a l'utilisateur

### Step-Specific Rules:

- 🎯 Focus ONLY on lancer les 2 agents et collecter leurs outputs
- 🚫 FORBIDDEN to fusionner ou synthetiser les outputs — c'est le role de step-03
- 🚫 FORBIDDEN to generer du code — c'est le role de step-04
- 💬 Approach: lancement parallele, aggregation des resultats
- ⚙️ Pattern 4 (Parallel Execution): lancer 2 sub-agents en parallele, aggreger les resultats
- ⚙️ If sub-agents unavailable: executer Blueprint PUIS Scout sequentiellement dans le thread principal

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Conserver les 2 outputs en memoire pour step-03
- 📖 Load {designRules} pour les regles de design
- 🚫 Ne pas modifier les outputs des agents

## CONTEXT BOUNDARIES:

- Available: contexte d'exploration de step-01 (composants existants, conventions, data structures)
- Available: brief utilisateur
- Focus: produire 2 specs de design complementaires en parallele
- Limits: pas de synthese, pas de code
- Dependencies: step-01 exploration complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Load Design Rules

Load {designRules} pour rappeler :
- La hierarchie composants (Shadcn > libs tierces > custom)
- Les commandes des agents (Blueprint: DL, Scout: RX)
- Les regles mobile-first

### 2. Prepare Agent Context

Preparer le contexte a transmettre aux 2 agents :
- Le brief utilisateur (demande originale)
- Le contexte d'exploration de step-01 (composants existants, conventions, data structures)
- Les design rules (hierarchie composants, mobile-first)

### 3. Launch Parallel Sub-Agents

**Launch 2 sub-agents in parallel:**

**Sub-Agent A — Blueprint (Layout Architect):**
- Load agent from {layoutArchitectAgent}
- Execute command: `DL` (Design Layout)
- Input: contexte d'exploration + brief utilisateur + design rules
- Expected output: Component Design Spec comprenant :
  - Wireframe ASCII mobile-first + desktop
  - Arbre composants
  - Decisions pattern avec justification UX
  - Mapping donnees → UI
  - Responsive strategy

**Sub-Agent B — Scout (UX Pattern Researcher):**
- Load agent from {uxPatternResearcherAgent}
- Execute command: `RX` (Research UX)
- Input: contexte d'exploration + brief utilisateur + design rules
- Expected output: Rapport de recherche UX comprenant :
  - Composants Shadcn existants utilisables
  - Composants libs tierces recommandes
  - Patterns inspiration
  - Best practices
  - Recommandations avec imports exacts

**FALLBACK (if sub-agents unavailable):**
Execute sequentiellement dans le thread principal :
1. Jouer le role de Blueprint — produire le Component Design Spec
2. Jouer le role de Scout — produire le Rapport de recherche UX

### 4. Aggregate Results

Collecter les 2 outputs :
- **Component Design Spec** (de Blueprint)
- **Rapport UX** (de Scout)

Verifier que les 2 outputs sont complets. Si un output est incomplet, noter les lacunes.

### 5. Proceed to Synthesis

Display: "**Design parallele termine. 2 specs produites. Passage a la synthese...**"

#### Menu Handling Logic:

- After both agent outputs collected, immediately load, read entire file, then execute {nextStepFile}

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after aggregation

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- 2 sub-agents lances en parallele (ou sequentiellement en fallback)
- Component Design Spec produit par Blueprint
- Rapport UX produit par Scout
- Les 2 outputs conserves en memoire pour step-03
- Aucune synthese prematuree

### ❌ FAILURE:

- Lancer un seul agent
- Fusionner les outputs (c'est le job de step-03)
- Generer du code
- Demander des questions a l'utilisateur

**Master Rule:** Skipping steps is FORBIDDEN. Les 2 agents doivent produire leurs outputs avant de passer a la synthese.
