---
description: EPCT Workflow - Explore, Plan, Code, Test - A structured approach to feature implementation
argument-hint: [feature description]
allowed-tools: '*'
---

# EPCT Workflow: Explore → Plan → Code → Test

You are executing the EPCT (Explore, Plan, Code, Test) workflow for implementing: **$ARGUMENTS**

This is a structured 4-phase workflow that ensures thorough research, careful planning, complete implementation, and quality validation. Follow each phase sequentially and wait for user approval before proceeding to the next phase.

---

## Phase 1: EXPLORE 🔍

**Objective**: Gather comprehensive information about the feature to implement.

**Your tasks**:

1. **Understand the requirement**: Analyze the feature description "$ARGUMENTS" and identify:
   - Core functionality needed
   - Integration points with existing codebase
   - Potential edge cases and constraints

2. **Research the codebase**: Use ALL available tools to explore:
   - Search for similar existing implementations (Grep, Glob)
   - Read relevant files to understand current architecture (Read)
   - Identify affected components and modules
   - Review CLAUDE.md for architectural patterns to follow

3. **External research** (if needed): Use WebSearch and WebFetch to:
   - Find best practices for this type of feature
   - Research relevant libraries or patterns
   - Understand modern implementation approaches

4. **Document findings**: Create a clear summary including:
   - Current state analysis
   - Technical requirements
   - Dependencies and affected files
   - Potential challenges or unknowns
   - Questions that need clarification

**Output format**:

```
## EXPLORATION RESULTS

### Understanding
[Clear explanation of what needs to be built]

### Current State
[What already exists in the codebase]

### Technical Requirements
- [Requirement 1]
- [Requirement 2]
...

### Affected Files/Components
- [File 1]: [Why it's affected]
- [File 2]: [Why it's affected]
...

### External Research Findings
[Relevant best practices, patterns, or libraries discovered]

### Open Questions
1. [Question 1]
2. [Question 2]
...

### Potential Challenges
- [Challenge 1]
- [Challenge 2]
...
```

**After completing exploration**: Present your findings and ask:

- "Are these findings correct and complete?"
- "Do you have answers to the open questions?"
- "Should I proceed to the PLAN phase?"

**IMPORTANT**: Do NOT proceed to Phase 2 until the user explicitly approves.

---

## Phase 2: PLAN 📋

**Objective**: Create a detailed, step-by-step implementation plan.

**Your tasks**:

1. **Architecture decisions**: Based on exploration, determine:
   - Which architectural pattern to follow (refer to CLAUDE.md)
   - Where new files should be created
   - How to integrate with existing code
   - What abstractions or interfaces are needed

2. **Break down the work**: Create a detailed task list using TodoWrite:
   - Order tasks logically (dependencies first)
   - Be specific about what each task accomplishes
   - Include file paths and component names
   - Estimate complexity (simple/medium/complex)

3. **Identify implementation approach**:
   - Repository layer changes (if any)
   - Use case creation/modification
   - Server actions needed
   - React hooks required (follow React Query best practices from `.claude/prompts/use-query.md`)
   - UI components to create/modify
   - Validation schemas (Zod)

4. **Plan for error handling**:
   - What errors might occur?
   - How should they be handled?
   - User feedback mechanisms

5. **Consider testing strategy**:
   - What will be validated with linting?
   - Are there type safety concerns?
   - What edge cases need attention?

**Output format**:

```
## IMPLEMENTATION PLAN

### Architecture Decisions
- [Decision 1 with rationale]
- [Decision 2 with rationale]
...

### Files to Create
1. `path/to/file1.ts` - [Purpose]
2. `path/to/file2.tsx` - [Purpose]
...

### Files to Modify
1. `path/to/existing1.ts` - [Changes needed]
2. `path/to/existing2.tsx` - [Changes needed]
...

### Implementation Steps (in order)
[Use TodoWrite tool to create structured task list]

### Error Handling Strategy
[How errors will be managed]

### Validation Approach
- Linting checks: [What will be validated]
- Type safety: [TypeScript considerations]
- Edge cases: [List of edge cases to handle]

### Potential Risks
- [Risk 1]: [Mitigation strategy]
- [Risk 2]: [Mitigation strategy]
```

**After completing the plan**:

- Present the complete plan with TodoWrite task list
- Ask specific clarifying questions about uncertainties
- Request explicit approval: "Does this plan look good? Should I proceed to the CODE phase?"
- Be open to plan modifications based on feedback

**IMPORTANT**: Do NOT proceed to Phase 3 until the user explicitly validates the plan.

---

## Phase 3: CODE 💻

**Objective**: Implement the complete feature according to the approved plan.

**Your tasks**:

1. **Follow the plan exactly**: Implement each task from the TodoWrite list in order

2. **Maintain architectural consistency**:
   - Follow patterns established in CLAUDE.md
   - Use existing utilities and helpers
   - Respect the Clean Architecture layers
   - Use path aliases correctly (@/actions, @/components, etc.)

3. **Write quality code**:
   - Use TypeScript strict mode compliance
   - Follow the coding guidelines from .cursor/rules/nextjs.mdc
   - Add JSDoc comments for complex logic
   - Use descriptive variable names (isLoading, hasError, etc.)
   - Favor functional and declarative patterns
   - Minimize 'use client' directives
   - Implement proper error handling with ErrorHandler

4. **Implement React Query hooks properly**:
   - Follow best practices from `.claude/prompts/use-query.md`
   - Use appropriate `staleTime` based on data type (see project-specific recommendations)
   - Use hierarchical query keys: `['entity', id]` or `['entity', 'filter', value]`
   - Implement optimistic updates for mutations when appropriate
   - Add prefetching for improved UX (e.g., on hover)
   - Use `enabled` option to prevent unnecessary queries
   - Consider `placeholderData` for pagination
   - Implement proper error handling and retry logic

5. **Update TodoWrite in real-time**:
   - Mark tasks as "in_progress" when starting
   - Mark tasks as "completed" immediately after finishing each one
   - Keep only ONE task in_progress at a time

6. **Handle edge cases**: Address all edge cases identified in the plan

7. **Add necessary validations**: Implement Zod schemas for form validation

**Implementation order** (following Clean Architecture):

1. Domain layer (entities, repository interfaces, domain DTOs)
2. Infrastructure layer (repository implementations, mappers, infrastructure DTOs)
3. Application layer (use cases, application DTOs)
4. Presentation layer (server actions, hooks)
5. UI layer (components, pages)

**After completing implementation**:

- Provide a summary of what was implemented
- List all files created/modified
- Note any deviations from the original plan (with justification)
- Ask: "Implementation is complete. Should I proceed to the TEST phase?"

**IMPORTANT**: Do NOT proceed to Phase 4 until the user acknowledges completion.

---

## Phase 4: TEST ✅

**Objective**: Validate the implementation through linting and type checking.

**Your tasks**:

1. **Run linting and formatting**:

   ```bash
   pnpm fix
   ```

   - This runs ESLint with auto-fix and Prettier
   - Review any errors that cannot be auto-fixed
   - Fix all linting errors manually if needed

2. **Verify TypeScript compilation**:

   Never build to verify
   - Ensure no TypeScript errors

3. **Check for common issues**:
   - Unused imports
   - Missing dependencies
   - Type errors
   - Accessibility issues (if applicable)
   - Missing 'use server' or 'use client' directives

4. **Review error output**:
   - If errors exist, categorize them by severity
   - Fix critical errors immediately
   - Document any warnings that are intentional

5. **Validate against requirements**:
   - Confirm all planned tasks are completed
   - Verify edge cases are handled
   - Check error handling is implemented
   - Ensure code follows project conventions

**Output format**:

```
## TEST RESULTS

### Linting & Formatting
✅ ESLint: [Status]
✅ Prettier: [Status]
[List any issues found and how they were resolved]

### TypeScript Compilation
✅ Build: [Status]
[List any type errors and resolutions]

### Code Quality Checks
- ✅ No unused imports
- ✅ All dependencies declared
- ✅ Type safety maintained
- ✅ Error handling present
- ✅ Follows architectural patterns

### Requirements Validation
- ✅ [Requirement 1]: Implemented
- ✅ [Requirement 2]: Implemented
...

### Summary
[Brief summary of test results and overall quality]

### Recommendations
[Any suggestions for future improvements or considerations]
```

**After completing tests**:

- Present comprehensive test results
- If issues were found and fixed, explain what was done
- Provide final summary: "EPCT workflow complete! Feature '$ARGUMENTS' has been successfully implemented and validated."

---

## Workflow Principles

Throughout all phases:

1. **Be explicit and thorough**: Go beyond basics to create fully-featured implementations
2. **Use tools in parallel**: When possible, execute multiple independent tool calls simultaneously
3. **Maintain communication**: Provide clear updates at each phase transition
4. **Track progress**: Use TodoWrite extensively during planning and coding
5. **Ask questions**: If something is unclear, ask before making assumptions
6. **Document decisions**: Explain the "why" behind architectural choices
7. **Respect approval gates**: NEVER skip ahead without user validation
8. **Handle errors gracefully**: Use the project's ErrorHandler pattern consistently
9. **Implement React Query correctly**: Always consult `.claude/prompts/use-query.md` when creating hooks

---

## React Query Implementation Checklist

When creating React Query hooks in the presentation layer, ensure you:

### Queries

- [ ] Use hierarchical query keys: `['entity']`, `['entity', id]`, `['entity', 'filter', value]`
- [ ] Set appropriate `staleTime` based on data freshness requirements:
  - Real-time data (scores): `staleTime: 0`
  - Frequently updated (matches): `staleTime: 1 * 60 * 1000` (1 min)
  - Moderate updates (players, teams): `staleTime: 5 * 60 * 1000` (5 min)
  - Rarely updated (documents): `staleTime: 15 * 60 * 1000` (15 min)
  - Static data: `staleTime: Infinity`
- [ ] Use `enabled` option when query depends on parameters: `enabled: !!playerId`
- [ ] Consider `placeholderData` for pagination to keep previous data visible
- [ ] Add `refetchInterval` for real-time data that needs polling
- [ ] Implement proper error handling with `retry` configuration
- [ ] Use `select` for data transformation when needed

### Mutations

- [ ] Always get `queryClient` via `useQueryClient()`
- [ ] Invalidate relevant queries in `onSuccess`: `queryClient.invalidateQueries({ queryKey: ['entity'] })`
- [ ] Implement optimistic updates for instant UI feedback:
  - Use `onMutate` to update cache immediately
  - Save snapshot in context for rollback
  - Use `onError` to restore snapshot if mutation fails
  - Use `onSettled` to refetch after completion
- [ ] Handle loading and error states properly
- [ ] Consider cache manipulation with `setQueryData` to avoid unnecessary refetches

### Advanced Patterns

- [ ] Use `prefetchQuery` for predictive data loading (e.g., on hover)
- [ ] Implement dependent queries with `enabled` chaining
- [ ] Use `useInfiniteQuery` for infinite scroll patterns
- [ ] Use `useQueries` for parallel dynamic queries
- [ ] Consider initial data from cache to eliminate loading states
- [ ] Implement query cancellation for search queries

### Performance

- [ ] Leverage structural sharing (automatic)
- [ ] Pass `signal` to fetch for query cancellation
- [ ] Avoid object literals in query keys (use primitives)
- [ ] Use specific invalidation instead of broad invalidation
- [ ] Consider `gcTime` (cache time) for memory management

---

## Getting Started

Beginning EPCT workflow for: **$ARGUMENTS**

Starting with **Phase 1: EXPLORE** 🔍

[Proceed with exploration tasks...]
