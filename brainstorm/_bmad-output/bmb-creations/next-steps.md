# Next Steps — Pipeline Perfect UI

## Contexte

On construit un workflow multi-agents pour creer des interfaces utilisateur parfaites.
Le pipeline complet est documente dans : `_bmad-output/brainstorming/brainstorming-session-2026-03-02-001.md`

## Agent 1 : Layout Architect ✅ FAIT

- YAML : `_bmad-output/bmb-creations/layout-architect.agent.yaml`
- Plan : `_bmad-output/bmb-creations/agent-plan-layout-architect.md`
- Validation : PASS (0 fail, 0 warning)
- Nom de persona : Blueprint
- Commandes : DL (Design Layout), AP (Analyze Patterns), CP (Compare Patterns)
- Output : Component Design Spec (wireframe ASCII + arbre composants + decisions pattern + mapping donnees→UI + responsive)

---

## Agent 2 : UX Pattern Researcher ✅ FAIT

- YAML : `_bmad-output/bmb-creations/ux-pattern-researcher.agent.yaml`
- Plan : `_bmad-output/bmb-creations/agent-plan-ux-pattern-researcher.md`
- Validation : PASS (0 fail, 0 warning)
- Nom de persona : Scout
- Commandes : RX (Research UX), CS (Check Shadcn), SL (Scan Libraries)
- Output : Rapport de recherche UX (composants existants + patterns inspiration + best practices + recommandations)

---

## Agent 3 : Design Synthesizer ✅ FAIT

### Lancement
Dis : `bmad-bmb-create-agent` puis skip le brainstorming et donne ce contexte :

### Description pour la Discovery
Cet agent est le Step 3 du pipeline Perfect UI. Il recoit les outputs des Steps 2A et 2B et produit la spec finale.

**Purpose :** Fusionner les resultats du Layout Architect (Component Design Spec) et du UX Pattern Researcher (rapport de recherche UX) pour produire une specification de design finale, complete et actionnable, prete a etre implementee par impeccable:frontend-design.

**Goals :**
- Fusionner le Component Design Spec (wireframe, arbre, patterns) avec le rapport UX (composants existants, best practices)
- Resoudre les conflits entre les deux sources (si le Layout Architect propose un pattern custom mais qu'un composant Shadcn existe deja)
- Produire une spec finale qui inclut : le layout exact, les composants specifiques a utiliser (avec imports), les props, le responsive
- Etre directement exploitable par impeccable:frontend-design pour generer le code

**Capabilities :**
- Fusion intelligente des outputs de 2 agents
- Resolution de conflits (composant existant vs design custom)
- Production de spec finale actionnable
- Decision composant Shadcn vs custom vs lib complementaire

**Output attendu :** Une spec de design finale avec :
- Layout definitif (wireframe ASCII final)
- Liste exacte des composants a utiliser (Shadcn, Magic UI, etc.) avec imports
- Props et data mapping definitif
- Responsive strategy finale
- Notes pour l'implementation (contraintes, edge cases)

**Context :**
- Recoit en entree : Component Design Spec (de Layout Architect) + Rapport UX (de UX Pattern Researcher)
- Son output va directement a impeccable:frontend-design (Step 4) pour code generation
- Doit privilegier les composants existants (Shadcn d'abord) plutot que du custom

**hasSidecar :** false (stateless)

---

## Workflow orchestrateur — A CREER

### Lancement
1. Lance `bmad-bmb-create-workflow`
2. Skip le brainstorming
3. Donne le contexte du plan : `_bmad-output/bmb-creations/plan-create-workflow-perfect-ui.md`

### Plan complet
Tout le contexte necessaire est dans : `_bmad-output/bmb-creations/plan-create-workflow-perfect-ui.md`

---

## Installation globale — A FAIRE EN TOUT DERNIER

### Prerequis
Tous les agents et le workflow doivent etre crees et valides :
- [x] Agent 1 : Layout Architect (Blueprint) ✅
- [x] Agent 2 : UX Pattern Researcher (Scout) ✅
- [x] Agent 3 : Design Synthesizer (Forge) ✅
- [ ] Workflow : Perfect UI

### Procedure d'installation

1. **Creer un dossier module** dans un emplacement de ton choix :
   ```
   perfect-ui/
   ├── module.yaml
   ├── agents/
   │   ├── layout-architect.agent.yaml
   │   ├── ux-pattern-researcher.agent.yaml
   │   └── design-synthesizer.agent.yaml
   └── workflows/
       └── perfect-ui/
           └── workflow.md (+ steps/)
   ```

2. **Creer le module.yaml** :
   ```yaml
   code: perfect-ui
   name: Perfect UI Pipeline
   version: 1.0.0
   description: Multi-agent workflow for creating perfect user interfaces
   ```

3. **Copier les agents** depuis `_bmad-output/bmb-creations/` vers `agents/`

4. **Copier le workflow** depuis `_bmad-output/bmb-creations/` vers `workflows/`

5. **Installer via BMAD installer** :
   - Nouveau projet : l'installer demandera les modules custom
   - Projet existant : "Modify BMAD Installation" pour ajouter le module

### Documentation officielle
https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/modules/bmb-bmad-builder/custom-content-installation.md#standalone-content-agents-workflows-tasks-tools-templates-prompts
