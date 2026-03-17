# File Write Hook

Automatically run checks after writing files.

## Configuration

In `.claude/settings.local.json`, you can configure hooks that run after file operations:

```json
{
  "hooks": {
    "onFileWrite": {
      "enabled": true,
      "commands": [
        {
          "name": "Lint TypeScript/TSX files",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm eslint {{file}} --fix"
        },
        {
          "name": "Format with Prettier",
          "pattern": "**/*.{ts,tsx,js,jsx,json,md}",
          "command": "pnpm prettier --write {{file}}"
        },
        {
          "name": "Type check",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm tsc --noEmit {{file}}"
        }
      ]
    }
  }
}
```

## Available Hooks

### onFileWrite

Runs after creating or modifying files.

**Use cases:**

- Auto-format on save
- Lint new/modified files
- Type check immediately
- Generate related files

**Variables:**

- `{{file}}` - The file that was written
- `{{files}}` - All files written (comma-separated)

### onFileDelete

Runs after deleting files.

**Use cases:**

- Clean up related files
- Update imports
- Log deletions

### onToolUse

Runs after using specific tools.

**Use cases:**

- Run tests after code changes
- Rebuild after config changes
- Invalidate caches

## Patterns

### File Patterns (glob)

```
**/*.ts          # All TypeScript files
**/*.tsx         # All TSX files
src/**/*         # All files in src/
*.test.ts        # Test files
core/domain/**/* # Domain layer files
```

### Command Patterns

```bash
# Lint specific file
pnpm eslint {{file}} --fix

# Format specific file
pnpm prettier --write {{file}}

# Type check specific file
pnpm tsc --noEmit {{file}}

# Run related tests
pnpm test {{file}}

# Custom script
pnpm run custom-check {{file}}
```

## Example Configurations

### Minimal (Recommended)

```json
{
  "hooks": {
    "onFileWrite": {
      "enabled": true,
      "commands": [
        {
          "name": "Fix code style",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm fix"
        }
      ]
    }
  }
}
```

### Comprehensive

```json
{
  "hooks": {
    "PostToolUse": {
      "enabled": true,
      "commands": [
        {
          "name": "Lint",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm eslint {{file}} --fix"
        },
        {
          "name": "Format",
          "pattern": "**/*.{ts,tsx,js,jsx,json,md}",
          "command": "pnpm prettier --write {{file}}"
        },
        {
          "name": "Type check",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm tsc --noEmit"
        },
        {
          "name": "Test",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm test --findRelatedTests {{file}}"
        }
      ]
    },
    "onFileDelete": {
      "enabled": true,
      "commands": [
        {
          "name": "Clean up imports",
          "pattern": "**/*.{ts,tsx}",
          "command": "pnpm eslint . --fix"
        }
      ]
    }
  }
}
```

### Layer-Specific

```json
{
  "hooks": {
    "onFileWrite": {
      "enabled": true,
      "commands": [
        {
          "name": "Validate domain layer",
          "pattern": "core/domain/**/*.ts",
          "command": "echo 'Checking domain layer...' && pnpm tsc --noEmit"
        },
        {
          "name": "Validate repository",
          "pattern": "core/infrastructure/supabase/repositories/**/*.ts",
          "command": "echo 'Checking repository...' && pnpm eslint {{file}} --fix"
        },
        {
          "name": "Validate components",
          "pattern": "src/components/**/*.tsx",
          "command": "pnpm eslint {{file}} --fix && pnpm prettier --write {{file}}"
        }
      ]
    }
  }
}
```

## Performance Tips

1. **Use file-specific patterns** rather than running on all files
2. **Combine commands** when possible (e.g., `pnpm fix` does both lint and format)
3. **Disable during bulk operations** if hooks slow down workflow
4. **Use incremental checks** like `--findRelatedTests` for tests

## Disabling Hooks Temporarily

```json
{
  "hooks": {
    "onFileWrite": {
      "enabled": false // Disable all write hooks
    }
  }
}
```

## Debugging Hooks

If hooks aren't working:

1. Check `.claude/settings.local.json` syntax (valid JSON)
2. Verify commands work in terminal
3. Check file patterns match your files
4. Look for command errors in terminal output

## Best Practices

1. **Keep hooks fast** - Slow hooks hurt productivity
2. **Use specific patterns** - Don't run on every file
3. **Combine related checks** - `pnpm fix` instead of separate lint + format
4. **Make hooks optional** - Easy to disable when needed
5. **Test hook commands** - Verify they work in terminal first
