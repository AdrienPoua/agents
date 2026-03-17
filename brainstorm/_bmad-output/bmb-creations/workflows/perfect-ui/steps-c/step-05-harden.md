---
name: 'step-05-harden'
description: 'Apply responsive design and accessibility hardening using impeccable:adapt and impeccable:harden skills'

nextStepFile: './step-06-review.md'
---

# Step 5: Responsive + Accessibilite

## STEP GOAL:

Appliquer le responsive design et le hardening accessibilite sur le code genere, en utilisant les skills `impeccable:adapt` et `impeccable:harden`.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are a UI pipeline orchestrator specialise responsive et a11y
- ✅ You execute prescriptively et autonomously
- ✅ No facilitation, no questions a l'utilisateur

### Step-Specific Rules:

- 🎯 Focus ONLY on responsive et accessibilite
- 🚫 FORBIDDEN to changer la logique ou la structure des composants
- 🚫 FORBIDDEN to ajouter des fonctionnalites — seulement adapter et hardener
- 💬 Approach: mobile-first, breakpoints progressifs, a11y complete

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Modifier les fichiers du projet en place
- 🚫 Ne pas toucher au polish visuel — c'est step-07

## CONTEXT BOUNDARIES:

- Available: code genere de step-04 (fichiers du projet)
- Available: specification de design (responsive strategy)
- Focus: rendre le code responsive et accessible
- Limits: pas de refactoring fonctionnel, pas de polish visuel
- Dependencies: step-04 code generation complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise.

### 1. Apply `impeccable:adapt` Skill

Execute le skill `impeccable:adapt` sur le code genere pour :
- Adapter a tous les breakpoints (sm, md, lg, xl, 2xl)
- Assurer le mobile-first (styles de base = mobile)
- Gerer les changements de layout entre breakpoints
- Verifier le comportement responsive des composants
- Adapter les images et medias (responsive sizing)
- Verifier la lisibilite a chaque taille d'ecran

### 2. Apply `impeccable:harden` Skill

Execute le skill `impeccable:harden` sur le code pour :
- Accessibilite (a11y) :
  - ARIA labels et roles
  - Focus management et keyboard navigation
  - Color contrast (WCAG AA minimum)
  - Screen reader compatibility
  - Alt text pour images
- Error handling :
  - Loading states
  - Error states
  - Empty states
  - Edge cases (texte long, overflow, donnees manquantes)
- Robustesse :
  - i18n readiness (text overflow, RTL awareness)
  - Graceful degradation

### 3. Verify Hardening

Verifier que le code modifie :
- [ ] Responsive sur tous les breakpoints standard
- [ ] Mobile-first (styles de base = mobile)
- [ ] ARIA labels sur tous les elements interactifs
- [ ] Keyboard navigation fonctionnelle
- [ ] Loading, error, et empty states geres
- [ ] Pas de regression fonctionnelle

### 4. Proceed to Visual Review

Display: "**Hardening termine. Code responsive et accessible. Passage a la review visuelle...**"

#### Menu Handling Logic:

- After hardening verified, immediately load, read entire file, then execute {nextStepFile}

#### EXECUTION RULES:

- This is an auto-proceed step with no user choices
- Proceed directly to next step after verification

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Responsive applique sur tous les breakpoints
- Mobile-first respecte
- Accessibilite complete (ARIA, focus, contrast, screen reader)
- Error/loading/empty states geres
- Pas de regression fonctionnelle

### ❌ FAILURE:

- Oublier des breakpoints
- Desktop-first au lieu de mobile-first
- ARIA labels manquants
- Pas de gestion d'erreurs
- Changer la logique fonctionnelle des composants

**Master Rule:** Skipping steps is FORBIDDEN. Le code doit etre responsive et accessible avant la review visuelle.
