---
name: 'step-03-synthesis'
description: 'Agent Forge synthesizes Blueprint and Scout outputs into a final design specification'

nextStepFile: './step-04-codegen.md'
designRules: '../data/design-rules.md'
designSynthesizerAgent: '{project-root}/_bmad-output/bmb-creations/design-synthesizer.agent.yaml'
---

# Step 3: Synthese Design

## STEP GOAL:

Lancer l'agent Forge (Design Synthesizer) pour fusionner le Component Design Spec (Blueprint) et le Rapport UX (Scout) en une specification de design finale, prete pour la generation de code.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator
- ✅ You execute prescriptively et autonomously
- ✅ No facilitation, no questions a l'utilisateur

### Step-Specific Rules:

- 🎯 Focus ONLY on la synthese des 2 specs en 1 spec finale
- 🚫 FORBIDDEN to generer du code — c'est le role de step-04
- 🚫 FORBIDDEN to ignorer les conflits entre les 2 specs — les resoudre explicitement
- 💬 Approach: fusion methodique, resolution de conflits, spec finale complete
- ⚙️ If Forge agent unavailable: executer la synthese dans le thread principal

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Conserver la spec finale en memoire pour step-04
- 📖 Load {designRules} pour la hierarchie composants
- 🚫 Ne pas commencer la generation de code

## CONTEXT BOUNDARIES:

- Available: Component Design Spec (de Blueprint, step-02)
- Available: Rapport UX (de Scout, step-02)
- Available: brief utilisateur, contexte d'exploration
- Focus: produire UNE spec de design finale coherente
- Limits: pas de code, pas de fichiers
- Dependencies: step-02 outputs complets

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Load Design Rules

Load {designRules} pour rappeler la hierarchie composants :
1. Shadcn/ui (toujours premier choix)
2. Libs tierces (Magic UI, Aceternity UI, BadtzUI, Kokonut UI, Hover, Animate UI, Smooth UI)
3. Custom (uniquement si rien n'existe)

### 2. Launch Forge Agent

**Launch sub-agent — Forge (Design Synthesizer):**
- Load agent from {designSynthesizerAgent}
- Execute command: `SD` (Synthesize Design)
- Input: Component Design Spec (Blueprint) + Rapport UX (Scout) + design rules
- Expected output: Specification de design finale comprenant :
  - Wireframe ASCII definitif (mobile + desktop)
  - Composants exacts avec imports
  - Props et data mapping
  - Responsive strategy
  - Conflits resolus entre Blueprint et Scout
  - Notes implementation

**FALLBACK (if Forge agent unavailable):**
Executer la synthese dans le thread principal :
1. Comparer les 2 specs section par section
2. Identifier les conflits (composant different pour le meme element)
3. Resoudre en appliquant la hierarchie : Shadcn > lib tierce > custom
4. Produire la spec finale

### 3. Validate Specification

Verifier que la spec finale contient :
- [ ] Wireframe ASCII (mobile + desktop)
- [ ] Liste complete des composants avec imports exacts
- [ ] Props definies pour chaque composant
- [ ] Data mapping (quelles donnees alimentent quels composants)
- [ ] Responsive strategy (breakpoints, layout changes)
- [ ] Aucun conflit non resolu

Si des elements manquent, les completer avant de passer au step suivant.

### 4. Proceed to Code Generation

Display: "**Synthese terminee. Spec de design finale prete. Passage a la generation de code...**"

#### Menu Handling Logic:

- After specification validated, immediately load, read entire file, then execute {nextStepFile}

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after validation

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Agent Forge a produit la spec finale (ou fallback execute)
- Conflits entre Blueprint et Scout resolus
- Spec complete avec wireframes, composants, imports, props, data mapping
- Hierarchie composants respectee (Shadcn > tierces > custom)
- Spec conservee en memoire pour step-04

### ❌ FAILURE:

- Ignorer les conflits entre les 2 specs
- Spec incomplete (manque wireframes, imports, ou responsive)
- Generer du code
- Demander des questions a l'utilisateur

**Master Rule:** Skipping steps is FORBIDDEN. La synthese doit etre complete et validee avant la generation de code.
