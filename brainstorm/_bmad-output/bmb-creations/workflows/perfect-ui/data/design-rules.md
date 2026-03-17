# Design Rules — Perfect UI Pipeline

## Component Hierarchy (STRICT ORDER)

1. **Shadcn/ui** — toujours premier choix
2. **Libs tierces** — Magic UI, Aceternity UI, BadtzUI, Kokonut UI, Hover, Animate UI, Smooth UI
3. **Custom** — uniquement si rien n'existe dans 1 ou 2

## Approach

- **Mobile-first** toujours — designer d'abord pour mobile, puis etendre vers desktop
- **Responsive strategy** — utiliser les breakpoints Tailwind standards (sm, md, lg, xl, 2xl)

## Code Generation Rules

- **impeccable:frontend-design** est strictement superieur a **frontend-design** — toujours utiliser impeccable
- Production-ready : pas de placeholder, pas de TODO, pas de mock data
- Imports explicites pour chaque composant utilise
- TypeScript strict

## Visual Review Loop

- Maximum 3 iterations de boucle step-06 → step-04
- Si 3 iterations atteintes sans resolution : livrer le code avec un commentaire sur les problemes restants

## Agent Commands

| Agent | Persona | Command | Description |
|-------|---------|---------|-------------|
| Blueprint (Layout Architect) | 📐 | DL | Design Layout — wireframe ASCII mobile-first + desktop, arbre composants, responsive strategy |
| Scout (UX Pattern Researcher) | 🔎 | RX | Research UX — composants existants, libs tierces, patterns, best practices |
| Forge (Design Synthesizer) | 🔀 | SD | Synthesize Design — fusion des specs, conflits resolus, composants exacts avec imports |

## Skills Pipeline

| Step | Skills | Role |
|------|--------|------|
| 1 | explore, next-best-practices | Exploration codebase + conventions |
| 4 | impeccable:frontend-design, vercel-react-best-practices, next-best-practices | Code generation |
| 5 | impeccable:adapt, impeccable:harden | Responsive + accessibilite |
| 7 | impeccable:polish | Polish final |
