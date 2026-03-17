# Pre-Commit Hook Configuration

This hook runs before each commit to ensure code quality.

## What it does

- Runs ESLint with auto-fix
- Formats code with Prettier
- Checks TypeScript types
- Validates commit message format

## Setup

Already configured in your project with Husky and commitlint.

## Hook Behavior

When you run `git commit`:

1. **Lint & Format** (`pnpm fix`)
   - ESLint checks and auto-fixes issues
   - Prettier formats all files
   - Fails if unfixable errors exist

2. **Commit Message Validation**
   - Follows Conventional Commits format
   - Format: `type(scope): message`
   - Types: feat, fix, docs, style, refactor, test, chore

## Commit Message Format

```bash
# ✅ Good commit messages
git commit -m "feat: add player management feature"
git commit -m "fix: resolve match date parsing bug"
git commit -m "docs: update README with setup instructions"
git commit -m "refactor(components): extract MatchCard subcomponents"
git commit -m "chore: update dependencies"

# ❌ Bad commit messages
git commit -m "update stuff"
git commit -m "fix bug"
git commit -m "WIP"
```

### Commit Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only
- **style**: Code style (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Add/update tests
- **chore**: Build process, dependencies, etc.
- **perf**: Performance improvement
- **ci**: CI/CD changes

### Optional Scope

```bash
feat(auth): add login functionality
fix(match-card): correct date display
refactor(hooks): simplify useMatches logic
```

## Bypassing Hooks (Not Recommended)

```bash
# Skip hooks (only in emergencies)
git commit --no-verify -m "message"
```

## Troubleshooting

### Hook fails on linting

```bash
# Fix manually
pnpm fix

# Check specific errors
npx eslint . --ext .ts,.tsx

# Stage fixed files
git add .

# Commit again
git commit -m "your message"
```

### Hook fails on commit message

```bash
# Use correct format
git commit -m "feat: your feature description"
```

## Files

Hook configuration:

- `.husky/pre-commit` - Runs before commit
- `.husky/commit-msg` - Validates commit message
- `commitlint.config.js` - Commit message rules
