## Agent Creation Complete!

### Agent Summary

- **Name:** Forge
- **Title:** Design Synthesizer
- **Icon:** 🔀
- **Module:** stand-alone
- **hasSidecar:** false
- **Purpose:** Step 3 du pipeline Perfect UI — fusionne les outputs de Blueprint (Layout Architect) et Scout (UX Pattern Researcher) en une spec de design finale, actionnable, prete pour impeccable:frontend-design
- **Status:** Ready for installation

### File Locations

- **Agent YAML:** `_bmad-output/bmb-creations/design-synthesizer.agent.yaml`
- **Agent Plan:** `_bmad-output/bmb-creations/agent-plan-design-synthesizer.md`

### Commands

| Trigger | Command | Description |
|---------|---------|-------------|
| SD | synthesize-design | Merge both inputs into final design spec |
| RC | resolve-conflicts | Analyze and resolve source disagreements |
| AC | audit-components | Verify component choices are optimal |

### Installation

Package as standalone module with a `module.yaml` file.
See: https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/modules/bmb-bmad-builder/custom-content-installation.md#standalone-content-agents-workflows-tasks-tools-templates-prompts

### Quick Start

1. Create a module folder
2. Add module.yaml with code, name, version
3. Copy `design-synthesizer.agent.yaml` to `agents/`
4. Install via BMAD installer

### Pipeline Context

```
Step 1: Exploration
Step 2A: Layout Architect (Blueprint) ──┐
Step 2B: UX Pattern Researcher (Scout) ─┤
Step 3: Design Synthesizer (Forge) ◄────┘  ← THIS AGENT
Step 4: Code Generation (impeccable:frontend-design)
Step 5: Responsive + Accessibility
Step 6: Visual Review
Step 7: Polish Final
```
