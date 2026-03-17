---
name: 'step-06-review'
description: 'Visual review using MCP Chrome DevTools with conditional loop back to codegen if issues found'

nextStepFile: './step-07-polish.md'
loopBackStepFile: './step-04-codegen.md'
---

# Step 6: Visual Review

## STEP GOAL:

Effectuer une review visuelle du rendu reel via MCP Chrome DevTools (screenshots + audit), et boucler vers step-04 si des problemes visuels sont detectes (max 3 iterations).

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator et visual QA reviewer
- ✅ You execute prescriptively et autonomously
- ✅ No facilitation, no questions a l'utilisateur

### Step-Specific Rules:

- 🎯 Focus ONLY on la review visuelle du rendu reel
- 🚫 FORBIDDEN to modifier le code directement — si problemes, boucler vers step-04
- 💬 Approach: screenshot, audit, decision (pass/fail), boucle si necessaire
- 📋 LOOP CONTROL: Tracker le compteur d'iterations. Max 3 boucles step-06 → step-04.
- ⚙️ If MCP Chrome DevTools unavailable: analyser le code visuellement dans le thread principal

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Tracker le numero d'iteration courant
- 🚫 Ne pas modifier le code — seulement auditer et router

## CONTEXT BOUNDARIES:

- Available: code responsive et accessible de step-05 (ou step-04/05 en iteration de boucle)
- Focus: valider le rendu visuel reel
- Limits: pas de modification de code, seulement audit et decision
- Dependencies: step-05 hardening complete (ou boucle precedente)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Check Iteration Count

Verifier le numero d'iteration courante :
- **Iteration 1** : premiere review (venant de step-05)
- **Iteration 2** : deuxieme review (apres premier fix)
- **Iteration 3** : derniere chance (apres deuxieme fix)

Si iteration > 3 : forcer le passage a step-07 avec un commentaire sur les problemes restants.

### 2. Take Screenshots with MCP Chrome DevTools

Utiliser MCP Chrome DevTools pour :
- Ouvrir l'application dans le navigateur
- Prendre des screenshots a plusieurs tailles :
  - Mobile (375px)
  - Tablet (768px)
  - Desktop (1280px)
  - Large desktop (1920px)
- Capturer les etats interactifs si applicable (hover, focus, open)

**FALLBACK (if MCP Chrome DevTools unavailable):**
Analyser le code visuellement dans le thread principal :
- Lire les fichiers generes
- Verifier la logique responsive (classes Tailwind)
- Verifier la coherence des styles
- Identifier les problemes potentiels

### 3. Audit Visual Output

Evaluer les screenshots/code pour :
- [ ] Layout correct a chaque breakpoint
- [ ] Alignements et spacings coherents
- [ ] Typographie lisible a chaque taille
- [ ] Images et medias correctement dimensionnes
- [ ] Pas d'overflow ou de contenu coupe
- [ ] Couleurs et contrastes corrects
- [ ] Etats interactifs fonctionnels (hover, focus)
- [ ] Coherence visuelle globale

### 4. Decision: Pass or Fail

**IF audit PASS (tous les criteres valides) :**
→ Proceeder vers step-07 (polish final)

**IF audit FAIL (problemes detectes) ET iteration < 3 :**
→ Documenter les problemes trouves en memoire
→ Boucler vers step-04 pour corriger
→ Incrementer le compteur d'iteration

**IF audit FAIL ET iteration >= 3 :**
→ Documenter les problemes restants comme commentaires dans le code
→ Proceeder vers step-07 malgre les problemes

### 5. Route Based on Decision

**IF PASS or iteration >= 3 :**

Display: "**Review visuelle terminee. Passage au polish final...**"

Load, read entire file, then execute {nextStepFile}

**IF FAIL and iteration < 3 :**

Display: "**Problemes visuels detectes (iteration {N}/3). Retour a la generation de code avec corrections...**"

Les problemes documentes en memoire seront utilises par step-04 pour corriger le code.

Load, read entire file, then execute {loopBackStepFile}

#### EXECUTION RULES:

- This is a conditional routing step with no user choices
- Route automatically based on audit result and iteration count

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Screenshots pris a toutes les tailles (ou fallback execute)
- Audit visuel complet sur tous les criteres
- Decision pass/fail claire et justifiee
- Routing correct (polish si pass, codegen si fail + iterations restantes)
- Compteur d'iterations respecte (max 3)

### ❌ FAILURE:

- Sauter l'audit visuel
- Modifier le code directement (au lieu de boucler vers step-04)
- Depasser 3 iterations sans forcer le passage
- Ne pas documenter les problemes trouves
- Demander des questions a l'utilisateur

**Master Rule:** Skipping steps is FORBIDDEN. L'audit visuel est obligatoire, la boucle est limitee a 3 iterations.
