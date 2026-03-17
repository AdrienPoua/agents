---
agentName: 'ux-pattern-researcher'
hasSidecar: false
module: 'stand-alone'
agentFile: '_bmad-output/bmb-creations/ux-pattern-researcher.agent.yaml'
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

# Validation Report: UX Pattern Researcher (Scout)

## Agent Overview

**Name:** Scout
**Title:** UX Pattern Researcher
**Icon:** 🔎
**hasSidecar:** false
**module:** stand-alone
**File:** `_bmad-output/bmb-creations/ux-pattern-researcher.agent.yaml`

---

## Validation Findings

### Metadata Validation

**Status:** PASS

**Checks:**
- [x] id: `_bmad/agents/ux-pattern-researcher/ux-pattern-researcher.md` — kebab-case, unique
- [x] name: `Scout` — persona name distinct from title
- [x] title: `UX Pattern Researcher` — concise functional description
- [x] icon: `🔎` — single emoji, representative
- [x] module: `stand-alone` — correct format with hyphen
- [x] hasSidecar: `false` — boolean, matches actual structure

---

### Persona Validation

**Status:** PASS

**Checks:**
- [x] role: Specific (UX Pattern Researcher), aligned with commands, no personality leak
- [x] identity: Clear character (methodical scout, pragmatic, treasure hunter), no capabilities
- [x] communication_style: Speech patterns only (direct, structured, field report), no forbidden words
- [x] principles: 5 principles, first activates domain knowledge, all actionable, no platitudes
- [x] Field purity: No overlap between role/identity/communication_style/principles

---

### Menu Validation

**Status:** PASS

**hasSidecar:** false

**Checks:**
- [x] Triggers: `XX or fuzzy match on command` format — RX, CS, SL
- [x] Descriptions: Start with `[XX]` code matching trigger
- [x] No reserved codes (MH, CH, PM, DA)
- [x] Action handlers: All `#prompt-id` references match existing prompts
- [x] No sidecar references in handlers (hasSidecar: false)
- [x] Codes unique within agent

---

### Structure Validation

**Status:** PASS

**Configuration:** Agent WITHOUT sidecar

**Checks:**
- [x] Valid YAML syntax, parses without errors
- [x] Consistent 2-space indentation
- [x] All required sections present (metadata, persona, prompts, menu)
- [x] Field types correct (boolean, arrays, strings)
- [x] No sidecar-folder in metadata
- [x] No critical_actions (appropriate for stateless agent)
- [x] Size: ~150 lines (under ~250 limit)

---

### Sidecar Validation

**Status:** N/A

**hasSidecar:** false

N/A — Agent has hasSidecar: false, no sidecar required.
- [x] No sidecar-folder path in metadata
- [x] No sidecar references in critical_actions
- [x] No sidecar references in menu handlers

---

## Overall Result

| Section | Status |
|---------|--------|
| Metadata | PASS |
| Persona | PASS |
| Menu | PASS |
| Structure | PASS |
| Sidecar | N/A |

**RESULT: PASS — 0 fail, 0 warning**
