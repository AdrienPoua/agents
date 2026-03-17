# Refactor Command

Refactor code while maintaining Clean Architecture principles and project conventions.

## Usage

```
/refactor [target] [reason]
```

## Examples

```
/refactor components/match-card Improve performance and readability
/refactor core/domain/entities/team Add new fields and update relationships
/refactor app/(dashboard)/admin Split into smaller components
```

## What This Command Does

This command helps you refactor code safely:

1. **Analyze** current implementation
2. **Identify** improvements
3. **Plan** refactoring steps
4. **Preserve** architecture integrity
5. **Maintain** backward compatibility
6. **Update** dependent code

## Refactoring Principles

### 1. Preserve Architecture Layers

✅ **Good**:

- Keep domain entities pure
- Maintain repository interfaces
- Don't break layer dependencies

❌ **Bad**:

- Skip layers (UI → Repository directly)
- Mix concerns (UI logic in use cases)
- Create circular dependencies

### 2. Update All Layers

When refactoring an entity:

1. Update domain entity
2. Update repository interface
3. Update infrastructure DTOs
4. Update mappers
5. Update use cases
6. Update server actions
7. Update hooks
8. Update UI components

### 3. Maintain Tests

- Update tests to match new implementation
- Add tests for new functionality
- Ensure existing tests still pass

## Common Refactoring Patterns

### Extract Component

**Before** (monolithic component):

```typescript
export function MatchCard({ match }) {
  return (
    <div className="card">
      <div className="header">
        <h3>{match.title}</h3>
        <span>{format(match.date)}</span>
      </div>
      <div className="body">
        <div className="teams">
          <div>{match.homeTeam}</div>
          <div>{match.score}</div>
          <div>{match.awayTeam}</div>
        </div>
        <div className="location">{match.location}</div>
      </div>
      <div className="footer">
        <button>View Details</button>
        <button>Edit</button>
      </div>
    </div>
  )
}
```

**After** (extracted subcomponents):

```typescript
export function MatchCard({ match }) {
  return (
    <Card>
      <MatchCardHeader match={match} />
      <MatchCardBody match={match} />
      <MatchCardFooter match={match} />
    </Card>
  )
}

function MatchCardHeader({ match }) {
  return (
    <CardHeader>
      <CardTitle>{match.title}</CardTitle>
      <CardDescription>{formatDate(match.date)}</CardDescription>
    </CardHeader>
  )
}

function MatchCardBody({ match }) {
  return (
    <CardContent>
      <MatchScore match={match} />
      <MatchLocation location={match.location} />
    </CardContent>
  )
}

function MatchCardFooter({ match }) {
  return (
    <CardFooter>
      <Button asChild>
        <Link href={`/matches/${match.id}`}>View Details</Link>
      </Button>
      <Button variant="outline">Edit</Button>
    </CardFooter>
  )
}
```

### Extract Hook

**Before** (logic in component):

```typescript
export function PlayerList() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/players')
      .then(res => res.json())
      .then(setPlayers)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Spinner />
  if (error) return <Error message={error} />

  return <div>{players.map(...)}</div>
}
```

**After** (custom hook):

```typescript
// hooks/use-players.ts
export function usePlayers() {
  return useQuery({
    queryKey: ['players'],
    queryFn: () => getPlayers(),
  })
}

// component
export function PlayerList() {
  const { data: players, isLoading, error } = usePlayers()

  if (isLoading) return <Spinner />
  if (error) return <Error message={error.message} />

  return <div>{players.map(...)}</div>
}
```

### Consolidate Duplicate Code

**Before** (duplicated logic):

```typescript
// In multiple files
const formattedDate = new Date(match.date).toLocaleDateString('fr-FR')
const formattedDate = new Date(session.date).toLocaleDateString('fr-FR')
const formattedDate = new Date(event.date).toLocaleDateString('fr-FR')
```

**After** (utility function):

```typescript
// core/shared/utils/date.ts
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('fr-FR')
}

// Usage
const formattedDate = formatDate(match.date)
```

### Improve Type Safety

**Before** (loose types):

```typescript
function createPlayer(data: any) {
  return fetch('/api/players', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
```

**After** (strict types):

```typescript
import { CreatePlayerInput, CreatePlayerSchema } from '@/core/application/dtos/player.dto'

export async function createPlayer(input: CreatePlayerInput) {
  const validated = CreatePlayerSchema.parse(input)
  const repository = RepositoryFactory.getPlayerRepository('server')
  const useCase = new CreatePlayerUseCase(repository)
  return await useCase.execute(validated)
}
```

### Extract Constants

**Before** (magic numbers/strings):

```typescript
if (players.length > 25) {
  return 'Too many players'
}

const color = match.status === 'completed' ? 'green' : 'blue'
```

**After** (named constants):

```typescript
const MAX_PLAYERS_PER_TEAM = 25
const MATCH_STATUS_COLORS = {
  completed: 'green',
  upcoming: 'blue',
  canceled: 'red',
} as const

if (players.length > MAX_PLAYERS_PER_TEAM) {
  return 'Too many players'
}

const color = MATCH_STATUS_COLORS[match.status]
```

## Refactoring Checklist

### Before Refactoring

- [ ] Understand current implementation fully
- [ ] Identify all usages/dependencies
- [ ] Plan changes across all layers
- [ ] Consider backward compatibility
- [ ] Back up current code (git commit)

### During Refactoring

- [ ] Follow layer-by-layer approach
- [ ] Update all affected files
- [ ] Maintain consistent naming
- [ ] Use TypeScript strict mode
- [ ] Add/update comments for complex logic

### After Refactoring

- [ ] Run `pnpm fix` (linting)
- [ ] Test functionality manually
- [ ] Verify no regressions
- [ ] Update documentation if needed
- [ ] Commit with descriptive message

## Safety Measures

### 1. Git Workflow

```bash
# Create feature branch
git checkout -b refactor/component-name

# Make incremental commits
git add .
git commit -m "refactor: extract PlayerCard subcomponents"

# Push and create PR
git push origin refactor/component-name
```

### 2. Incremental Changes

Don't refactor everything at once:

1. Start with smallest unit
2. Test after each change
3. Commit working states
4. Gradually expand scope

### 3. Preserve Functionality

Always ensure:

- Same inputs → same outputs
- Same user experience
- Same performance (or better)
- No breaking changes

## Template Response

When this command is invoked, respond with:

"I'll help you refactor [target].

### Current Analysis:

[Analysis of current code]

### Proposed Changes:

1. [Change 1 with rationale]
2. [Change 2 with rationale]
3. [...]

### Impact Assessment:

- Files to modify: [list]
- Backward compatibility: [yes/no, details]
- Performance impact: [positive/negative/neutral]

### Refactoring Steps:

[Detailed step-by-step plan]

Ready to proceed?"

## Notes

- Preserve existing behavior unless explicitly changing it
- Update all dependent code
- Follow project conventions strictly
- Document non-obvious changes
- Test thoroughly before committing
