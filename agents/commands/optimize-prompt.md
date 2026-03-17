---
name: 'optimize-prompt'
description: 'Takes a raw prompt and optimizes it by enriching it with full project context (docs, codebase, memory, git state). Use when the user says "optimize this prompt" or "enhance this prompt".'
---

# Optimize Prompt

You are a meta-prompt engineer. Your job is to take the user's raw prompt and transform it into a highly effective, context-rich prompt optimized for the current project.

## Input

The user's raw prompt:

> $ARGUMENTS

## Process

Follow these steps sequentially:

### 1. Understand Intent

Analyze the raw prompt to identify:
- **Goal**: What the user wants to accomplish
- **Domain**: Which part of the project this relates to (frontend, backend, infra, docs, etc.)
- **Action type**: Creation, modification, debugging, research, review, etc.
- **Implicit assumptions**: What the user assumes you already know

### 2. Gather Context

Based on the identified domain, collect relevant context by exploring:

- **CLAUDE.md files**: Read `{project-root}/CLAUDE.md` and any nested `CLAUDE.md` files in relevant directories
- **Memory**: Check `~/.claude/projects/` for relevant project memory files
- **Project structure**: Glob key directories related to the domain to understand file organization
- **Existing code**: Read key files that the prompt will likely need to reference or modify
- **Git state**: Check current branch, recent commits, and uncommitted changes if relevant
- **Dependencies**: Check package.json, config files if the prompt involves tech decisions
- **Documentation**: Look for any docs/ folder or README files related to the domain

### 3. Build Optimized Prompt

Reconstruct the prompt with the following structure:

```
## Contexte

[Relevant project context gathered in step 2 — architecture, conventions, existing patterns, key files, current state]

## Objectif

[Clear, precise reformulation of what the user wants to achieve]

## Contraintes

[Technical constraints derived from context: stack, conventions, patterns to follow, files to modify]

## Instructions

[Step-by-step instructions derived from the original intent, enriched with specific file paths, function names, patterns to follow, and edge cases to handle]
```

### 4. Quality Checks

Before outputting, verify the optimized prompt:
- [ ] Is self-contained — an AI reading it has everything needed without extra exploration
- [ ] References specific file paths, not vague descriptions
- [ ] Follows existing project conventions discovered in context
- [ ] Does not over-engineer beyond the original intent
- [ ] Is in the same language as the original prompt

## Output

Display the optimized prompt in a clean markdown code block so the user can copy-paste it directly. Then briefly explain what context you added and why.
