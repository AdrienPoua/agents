---
workflowName: perfect-ui
stepsCompleted: ['step-01-discovery', 'step-02-classification', 'step-03-requirements', 'step-04-tools', 'step-05-plan-review', 'step-06-design', 'step-07-foundation', 'step-08-build-step-01', 'step-09-build-all-steps', 'step-10-confirmation', 'step-11-completion']
creationDate: 2026-03-02
approvedDate: 2026-03-02
confirmationDate: 2026-03-02
completionDate: 2026-03-02
confirmationType: new_workflow
coverageStatus: complete
validationStatus: PASS
status: COMPLETE
---

# Workflow Creation Plan

## Discovery Notes

**User's Vision:**
Pipeline multi-agents "Perfect UI" qui transforme une demande utilisateur libre en interface complete production-ready. Orchestre 3 agents custom + 7 skills existants + MCP Chrome DevTools en 7 etapes, du brief au code poli.

**Who It's For:**
Le developpeur (solo dev) qui veut generer des interfaces parfaites sans decisions de design manuelles.

**What It Produces:**
Code production-ready React/Next.js avec Shadcn/ui + libs complementaires (Magic UI, Aceternity UI, BadtzUI, Kokonut UI, Hover, Animate UI, Smooth UI). Responsive, accessible, poli.

**Key Insights:**
- 3 agents custom valides : Blueprint (Layout Architect), Scout (UX Pattern Researcher), Forge (Design Synthesizer)
- Parallelisme sur Steps 2A/2B (Layout + UX Research)
- Boucle feedback visuel Step 6 → Step 4 (max 3 iterations)
- Hierarchie composants : Shadcn/ui > libs tierces > custom
- Mobile-first toujours
- impeccable:frontend-design strictement superieur a frontend-design
- MCP Chrome DevTools pour screenshots + audit du rendu reel

## Classification Decisions

**Workflow Name:** perfect-ui
**Target Path:** _bmad/custom/src/workflows/perfect-ui/

**4 Key Decisions:**
1. **Document Output:** false (produit du code integre, pas un document persistant)
2. **Module Affiliation:** standalone (workflow custom de creation UI)
3. **Session Type:** single-session (pipeline concu pour tourner d'un trait par demande)
4. **Lifecycle Support:** create-only (on re-run le workflow, pas besoin d'editer un run precedent)

**Structure Implications:**
- Dossier `steps-c/` uniquement (pas de steps-e/ ni steps-v/)
- Pas de step-01b-continue.md (single-session)
- Pas de template de document output (non-document)
- Init standard sans logique de continuation

## Requirements

**Flow Structure:**
- Pattern: lineaire avec boucle (Step 6 → Step 4, max 3 iterations)
- Phases: Exploration → Design parallele (Layout + UX) → Synthese → Code gen → Responsive/A11y → Visual review → Polish
- Estimated steps: 7 step files (Step 2A/2B parallelises dans un meme step file)

**User Interaction:**
- Style: mostly autonomous
- Decision points: aucun — le pipeline deroule apres le brief initial
- Checkpoint frequency: aucun checkpoint intermediaire

**Inputs Required:**
- Required: une demande utilisateur libre (ex: "cree-moi un dashboard analytics")
- Optional: aucun
- Prerequisites: projet Next.js/React existant avec Shadcn/ui configure

**Output Specifications:**
- Type: action (code genere et integre directement dans l'application)
- Produit: composants React/Next.js, fichiers crees/modifies, imports ajoutes
- Frequency: single (un run = une interface)

**Success Criteria:**
- Interface complete, responsive, accessible
- Code production-ready integre au projet
- Zero decision de design laissee a l'utilisateur
- Validation visuelle passee (screenshots Chrome DevTools)
- Polish final applique

**Instruction Style:**
- Overall: prescriptive
- Notes: chaque step est une sequence precise d'outils/agents a invoquer dans l'ordre exact, pas de place a l'interpretation

## Tools Configuration

**Core BMAD Tools:**
- **Party Mode:** exclu — pas de brainstorming multi-persona dans un pipeline autonome
- **Advanced Elicitation:** exclu — pas de quality gates interactifs
- **Brainstorming:** exclu — la phase creative est geree par les agents custom

**LLM Features:**
- **Web-Browsing:** inclus — Agent Scout (Phase 2B) recherche composants/libs en temps reel
- **File I/O:** inclus — lecture codebase (Phase 1) + ecriture code (Phase 4-7)
- **Sub-Agents:** inclus — Phase 2A/2B en parallele (Blueprint + Scout)
- **Sub-Processes:** exclu — sub-agents suffisent pour le parallelisme

**Memory:**
- Type: single-session
- Tracking: aucun tracking complexe, pas de stepsCompleted

**External Integrations:**
- **MCP Chrome DevTools:** inclus — Phase 6, screenshots + audit visuel du rendu reel
- **Skills existants:** explore, next-best-practices, impeccable:frontend-design, vercel-react-best-practices, impeccable:adapt, impeccable:harden, impeccable:polish
- **Agents custom:** Blueprint (layout-architect), Scout (ux-pattern-researcher), Forge (design-synthesizer)

**Installation Requirements:**
- MCP Chrome DevTools doit etre configure
- User preference: deja installe

## Workflow Structure Design

### File Structure

```
perfect-ui/
├── workflow.md              (entry point, charge config + route vers step 1)
├── data/
│   └── design-rules.md      (hierarchie composants, libs, regles mobile-first)
└── steps-c/
    ├── step-01-init.md       (recevoir brief + exploration codebase)
    ├── step-02-design.md     (lancer 2 sub-agents paralleles : Blueprint + Scout)
    ├── step-03-synthesis.md  (agent Forge fusionne les 2 outputs)
    ├── step-04-codegen.md    (generer code avec skills impeccable + vercel + next)
    ├── step-05-harden.md     (responsive + accessibilite avec impeccable:adapt + harden)
    ├── step-06-review.md     (visual review MCP Chrome DevTools, boucle vers step-04)
    └── step-07-polish.md     (polish final avec impeccable:polish)
```

### Step Details

| Step | Type | Goal | Menu | Subprocess |
|------|------|------|------|------------|
| 01-init | Init (non-continuable) | Recevoir brief, skill `explore` + `next-best-practices`, rassembler contexte | Auto-proceed | — |
| 02-design | Middle (simple) | Lancer 2 sub-agents paralleles (Blueprint DL + Scout RX) | Auto-proceed | Pattern 4 : parallele |
| 03-synthesis | Middle (simple) | Agent Forge SD fusionne specs | Auto-proceed | — |
| 04-codegen | Middle (simple) | Skills `impeccable:frontend-design` + `vercel-react-best-practices` + `next-best-practices` | Auto-proceed | — |
| 05-harden | Middle (simple) | Skills `impeccable:adapt` + `impeccable:harden` | Auto-proceed | — |
| 06-review | Branch (conditionnel) | MCP Chrome DevTools screenshot + audit. OK → step 07. Problemes → retour step 04 (max 3x) | Auto-proceed (conditionnel) | — |
| 07-polish | Final | Skill `impeccable:polish`, completion | Aucun (final) | — |

### Flow Diagram

```
step-01 (brief + explore)
    → step-02 (sub-agents paralleles Blueprint + Scout)
        → step-03 (Forge synthese)
            → step-04 (code gen) ←──┐
                → step-05 (harden)  │
                    → step-06 (review) ──[problemes? max 3x]──┘
                        → step-07 (polish + FIN)
```

### Data Flow

| Step | Input | Output |
|------|-------|--------|
| 01 | Demande utilisateur | Contexte exploration (composants, conventions, data structures) |
| 02 | Contexte exploration + demande | Component Design Spec (Blueprint) + Rapport UX (Scout) |
| 03 | Design Spec + Rapport UX | Specification design finale (wireframe, composants, imports, responsive) |
| 04 | Spec design finale + design-rules.md | Code production-ready (composants React/Next.js) |
| 05 | Code genere | Code responsive + accessible (breakpoints, a11y, edge cases) |
| 06 | Code harden | Screenshots + audit visuel → decision OK/retry |
| 07 | Code valide | Code final poli (alignements, spacings, details) |

### Design Decisions

- **Tous les menus = auto-proceed** : pipeline autonome, zero interaction apres le brief
- **Step 06 = boucle conditionnelle** : compteur d'iterations dans le step, retour vers step-04 si problemes visuels
- **data/design-rules.md** : centralise hierarchie composants pour eviter repetition
- **Pas de stepsCompleted** : single-session
- **Role/Persona** : Pipeline orchestrateur, ton technique et prescriptif
- **Fallback subprocess** : si sub-agents indisponibles, executer Blueprint puis Scout sequentiellement
- **Subprocess Pattern 4** : Step 02 lance 2 sub-agents en parallele, aggrege resultats
