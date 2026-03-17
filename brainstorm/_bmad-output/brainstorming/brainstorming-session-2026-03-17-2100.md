---
stepsCompleted: [1]
inputDocuments: []
session_topic: 'Méta-prompteur contextuel'
session_goals: 'Créer une commande qui optimise un prompt en le chargeant de contexte projet'
selected_approach: 'commande (pas agent)'
techniques_used: [agent-vs-command-analysis]
ideas_generated: [meta-prompter-command]
context_file: 'brainstorm-context.md'
---

# Brainstorming Session Results

**Facilitator:** Boss
**Date:** 2026-03-17

## Session Overview

**Topic:** Méta-prompteur contextuel — une commande qui prend un prompt brut et le transforme en prompt optimisé chargé de contexte projet.

**Goals:** Créer un outil one-shot qui enrichit automatiquement un prompt avec le contexte disponible (docs, codebase, mémoire Claude, état du projet).

### Décision clé

**Format retenu : Commande** (pas agent) — le besoin est one-shot, utilitaire, pas conversationnel.

### Concept

- Input : un prompt brut de l'utilisateur
- Contexte collecté : documentation projet, exploration codebase, mémoire Claude, CLAUDE.md, état git
- Output : un prompt restructuré, enrichi et optimisé pour le contexte
