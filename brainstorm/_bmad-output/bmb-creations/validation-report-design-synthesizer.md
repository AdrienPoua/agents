---
agentName: 'design-synthesizer'
hasSidecar: false
module: 'stand-alone'
agentFile: '_bmad-output/bmb-creations/design-synthesizer.agent.yaml'
validationDate: '2026-03-02'
stepsCompleted:
  - v-01-load-review.md
  - v-02a-validate-metadata.md
  - v-02b-validate-persona.md
  - v-02c-validate-menu.md
  - v-02d-validate-structure.md
  - v-02e-validate-sidecar.md
  - v-03-summary.md
---

# Validation Report: design-synthesizer

## Agent Overview

**Name:** Forge
**Title:** Design Synthesizer
**hasSidecar:** false
**module:** stand-alone
**File:** `_bmad-output/bmb-creations/design-synthesizer.agent.yaml`

---

## Validation Findings

### Metadata Validation

**Status:** ✅ PASS

**Checks:**
- [x] id: `_bmad/agents/design-synthesizer/design-synthesizer.md` — kebab-case, unique
- [x] name: `Forge` — persona name, distinct from title
- [x] title: `Design Synthesizer` — concise functional description
- [x] icon: `🔀` — single emoji, represents merging/synthesis
- [x] module: `stand-alone` — correct format
- [x] hasSidecar: `false` — matches stateless design

*PASSING:* All 6 metadata fields present, correctly formatted, content quality verified.
*WARNINGS:* None
*FAILURES:* None

---

### Persona Validation

**Status:** ✅ PASS

**Checks:**
- [x] role: specific (Design Synthesis Specialist), not generic
- [x] identity: defines who agent is (methodical craftsman), no capability leakage
- [x] communication_style: speech patterns only (direct, sharp, forge metaphors), no forbidden words
- [x] principles: first principle activates domain knowledge ("Channel expert design systems knowledge...")

**Field Purity:**
- [x] role: WHAT only — no personality, no beliefs, no speech patterns
- [x] identity: WHO only — no capabilities, no speech patterns
- [x] communication_style: HOW only — no capabilities, no identity, no beliefs
- [x] principles: WHY only — 5 beliefs, not tasks, not obvious

**Principles Quality:**
- [x] Principle 1: Expert activator pattern ✅
- [x] Principle 2: Unique belief (existing > custom) ✅
- [x] Principle 3: Unique belief (conflicts = decisions) ✅
- [x] Principle 4: Unique belief (actionability = quality) ✅
- [x] Principle 5: Unique belief (simplicity = feature) ✅
- [x] 5 principles — within 3-7 range ✅
- [x] None would be obvious to someone in the role ✅

*PASSING:* All 4 persona fields present, distinct, quality verified, principles follow crafting guide.
*WARNINGS:* None
*FAILURES:* None

---

### Menu Validation

**Status:** ✅ PASS

**hasSidecar:** false

**Checks:**
- [x] Triggers follow `XX or fuzzy match on command` format
- [x] Descriptions start with `[XX]` code matching trigger
- [x] No reserved codes (MH, CH, PM, DA)
- [x] Action handlers valid — all 3 reference existing prompt IDs

**Menu Items:**

| Trigger | Description | Action | Prompt Exists? |
|---------|-------------|--------|----------------|
| SD | [SD] Synthesize Design | #synthesize-design | ✅ |
| RC | [RC] Resolve Conflicts | #resolve-conflicts | ✅ |
| AC | [AC] Audit Components | #audit-components | ✅ |

**Configuration Check:**
- [x] hasSidecar: false — no sidecar references in menu handlers
- [x] All handlers use internal prompt references (#) only

*PASSING:* 3 menu items, all correctly formatted, all actions reference existing prompts, no reserved codes.
*WARNINGS:* None
*FAILURES:* None

---

### Structure Validation

**Status:** ✅ PASS

**Configuration:** Agent WITHOUT sidecar

**Checks:**
- [x] Valid YAML syntax — parses without errors
- [x] 2-space indentation consistent throughout
- [x] No duplicate keys
- [x] Required sections present: metadata, persona, prompts, menu
- [x] No frontmatter (compiler adds it)
- [x] No XML activation block (compiler adds it)
- [x] No MH/CH/PM/DA menu items (compiler adds them)
- [x] No rules section (compiler adds it)
- [x] Boolean fields are actual booleans
- [x] Arrays properly formatted with dashes

**Size Check:**
- [x] ~145 lines — well under 250 line limit for hasSidecar: false

**No-Sidecar Specific:**
- [x] No sidecar-folder path in metadata
- [x] No critical_actions section (correct — no activation behavior needed)
- [x] No sidecar file references anywhere

*PASSING:* YAML valid, structure complete, compiler-generated sections correctly omitted, size within limits.
*WARNINGS:* None
*FAILURES:* None

---

### Sidecar Validation

**Status:** N/A

**hasSidecar:** false

- [x] No sidecar-folder in metadata — correct
- [x] No sidecar references in critical_actions — correct (none present)
- [x] No sidecar references in menu handlers — correct

*N/A — Agent has hasSidecar: false, no sidecar required*

---

## Overall Result

| Check | Status |
|-------|--------|
| Metadata | ✅ PASS |
| Persona | ✅ PASS |
| Menu | ✅ PASS |
| Structure | ✅ PASS |
| Sidecar | N/A |
| **OVERALL** | **✅ PASS (0 fail, 0 warning)** |
