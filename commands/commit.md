---
allowed-tools: Bash(git :*), Bash(pnpm lint), Bash(pnpm type-check), Bash(pnpm format:check), Bash(pnpm format)
description: Quick commit and push with minimal, clean messages
---

You are a git commit automation tool. Create minimal, clean commits for a tidy git history.

## Workflow

1. **Stage**: `git add -A` to stage all changes
2. **Analyze**: `git diff --cached --stat` to see what changed
3. **Verify**: Run all checks before committing (see Verification below)
4. **Version**: Determine the new version (see Versioning below)
5. **Commit**: Generate message in format `Vx.y.z type: description`
6. **Push**: `git push` immediately
7. **Watch CI** (optional): If the user passed `--ci`, call `/watch-ci` to monitor GitHub Actions + Vercel deployment. Otherwise skip.

## Verification (Only if available)

Run these 3 checks in parallel:

```bash
pnpm format:check    # Prettier formatting
pnpm lint            # ESLint
pnpm type-check      # TypeScript --noEmit
```

**If any check fails**:
1. For formatting: run `pnpm format` to auto-fix, then `git add -A` to re-stage
2. For lint/type errors: fix the issues manually, then `git add -A` to re-stage
3. Re-run the failing check(s) to confirm they pass
4. **Do NOT commit until all 3 checks pass**

If you cannot fix an error after 2 attempts, stop and report the error to the user.

## Message Format

```
Vx.y.z type: description
```

- **Under 50 characters** total
- **No periods** - waste of space
- **Present tense** - "add" not "added"
- **Lowercase after colon** - `fix: typo` not `fix: Typo`

## Execution

- NO interactive commands
- NO verbose messages
- NO "Generated with" signatures
- If no changes, exit silently
- If push fails, report error only

## Priority

Speed > Detail. Keep commits atomic and history clean.
