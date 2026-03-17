# Component Prompt

Template for creating React components following project conventions.

## Core Principles

1. **Each component handles its own types** - Define `PropsType` in each component (prefer duplication for decoupling)
2. **NO early returns** - Null or error handling is OUTSIDE the component using conditional rendering (separation of concerns) EXEPCT in data fetching component
3. **Named exports only** - One named export per file
4. **File co-location**:
   - Custom hooks with state logic → `page.hooks.ts` (except library hooks like useQuery)
   - Actions used in component → `page.actions.ts`
   - Complex sub-components used only here → `page.componentName.tsx`
5. **Main component = Layout + Composition** - No logic or complexity, use compound component pattern for complex cases

## Component Template

```typescript
// Imports
import { useCustomHook } from './page.hooks'
import { handleAction } from './page.actions'
import { Button } from '@/components/ui/button'

// Each component defines its own PropsType for decoupling
type PropsType = {
  prop1: string
  prop2?: number
}

// Named export - one per file
export function ComponentName({ prop1, prop2 }: Readonly<PropsType>) {
  const { data } = useCustomHook()

  // Main component is just layout + composition
  // No complex logic here
  return (
    <div className="container">
      <Button onClick={handleAction}>
        <SubComponent data={data} />
      </Button>
    </div>
  )
}

// Other components in file compose the main component
function SubComponent({ data }: { data: string }) {
  return <div>{data}</div>
}
```

## File Organization

### Structure

```
features/team-list/
├── page.tsx              # Main component (layout + composition)
├── page.hooks.ts         # Custom hooks (not library hooks like useQuery)
├── page.actions.ts       # Server actions
└── page.card.tsx         # Complex sub-component
```

### When to create separate files

1. **`page.hooks.ts`** - When you have custom hooks with state logic (NOT for library hooks like useQuery)
2. **`page.actions.ts`** - When you have actions used in the component
3. **`page.componentName.tsx`** - When you have a complex sub-component used only in this page

## Conventions

### File Naming

- **File**: `kebab-case.tsx` (e.g., `match-card.tsx`)
- **Component**: `PascalCase` (e.g., `MatchCard`)
- **Location**: Nearest to use. Reusable components in `/components/ui` (shadcn)

### Type Definition

```typescript
// Each component defines its own PropsType
type PropsType = {
  title: string
  onAction?: () => void
  variant?: 'default' | 'outline'
  children?: React.ReactNode
}

export function ComponentName({ title, onAction, variant = 'default' }: PropsType) {
  // Component logic
}
```

### Client vs Server Components

**Server Component (default)**:

```typescript
// No 'use client'
// Can use async/await
// No hooks, no browser APIs

export default async function TeamPage({ params }: Props) {
  const team = await getTeam(params.id)
  return <div>{team.name}</div>
}
```

**Client Component** (only when needed):

```typescript
'use client'

// Can use hooks, browser APIs
// No async function

export function InteractiveForm() {
  const [value, setValue] = useState('')
  return <input value={value} onChange={(e) => setValue(e.target.value)} />
}
```

**Use 'use client' only for**:

- State (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser APIs (`localStorage`, `window`)
- Event handlers requiring client state
- Third-party libraries requiring client

### Error Handling - NO Early Returns

**Component handles its own states with conditional rendering (NO early returns)**:

```typescript
'use client'

export function DataComponent() {
  const { data, isLoading, error } = useQuery(...)

  // NO early returns - use conditional rendering
  if (isLoading) return <LoadingSpin />
  if (error) return <ErrorComponent error={error} />
  if (!data?.length) return <EmptyComponent />

  return <DataDisplay data={data} />
}

// Sub-components for each state (in same file)
function LoadingSpin() {
  return (
    <div className="flex justify-center p-8">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  )
}

function ErrorComponent({ error }: { error: Error }) {
  return <div className="text-destructive">Error: {error.message}</div>
}

function EmptyComponent() {
  return <div className="text-muted-foreground text-center p-8">No data found</div>
}

function DataDisplay({ data }: { data: any[] }) {
  return <div>{data.map((item) => <div key={item.id}>{item.name}</div>)}</div>
}
```

### Styling

**Tailwind - Mobile First**:

```typescript
// ✅ Mobile-first
<div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-6">

// ✅ Use shadcn/ui components
import { Button } from '@/components/ui/button'

// ✅ Conditional classes with cn()
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  variant === 'primary' && "primary-classes",
  isActive && "active-classes"
)}>
```

### Props Pattern

**Destructure with defaults**:

```typescript
// ✅ Good
export function Card({ title, description = '', children }: PropsType) {

// ✅ Optional callbacks
type PropsType = {
  onClick?: () => void
  onSubmit?: (data: FormData) => void
}

// Usage
onClick?.() // Safe optional call
```

### Composition

**Main component = Simple layout + Composition**:

```typescript
export function TeamCard({ team }: PropsType) {
  // Main component should be simple: just layout + composition
  // NO complex logic here
  return (
    <Card>
      <CardHeader>
        <TeamLogo logo={team.logo} />
        <TeamName name={team.name} />
      </CardHeader>
      <CardBody>
        <TeamStats stats={team.stats} />
      </CardBody>
    </Card>
  )
}

// Sub-components compose the main one
function TeamLogo({ logo }: { logo: string }) {
  return <Image src={logo} alt="Logo" width={50} height={50} />
}

function TeamName({ name }: { name: string }) {
  return <CardTitle>{name}</CardTitle>
}

function TeamStats({ stats }: { stats: any }) {
  return <div>Stats: {stats.players} players</div>
}
```

**Compound Components** (for complex cases):

```typescript
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>
}

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>
}

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

### Forms

**Each form handles its own validation and action - Totally independent**:

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Each form has its own validation schema
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

type FormData = z.infer<typeof schema>

export function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  // Form has its own action - totally independent
  const onSubmit = async (data: FormData) => {
    await submitAction(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}
```

### Lists & Keys

```typescript
// ✅ Use stable IDs as keys
{items.map((item) => (
  <ItemCard key={item.id} item={item} />
))}

// ❌ Don't use index as key
{items.map((item, index) => (
  <ItemCard key={index} item={item} />
))}
```

### Memoization (only when necessary)

```typescript
import { memo, useMemo, useCallback } from 'react'

// Memoize expensive calculations
const sortedItems = useMemo(() => items.sort((a, b) => a.date - b.date), [items])

// Memoize callbacks passed to memoized children
const handleClick = useCallback(() => {
  console.log('clicked')
}, [])

// Memoize components receiving same props often
export const ExpensiveComponent = memo(function ExpensiveComponent({ data }: PropsType) {
  // Expensive rendering
  return <div>{data}</div>
})
```

## Accessibility

```typescript
// Labels for inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Alt text for images
<Image src={src} alt="Descriptive text" />

// ARIA attributes
<button aria-label="Close dialog" onClick={onClose}>
  <X className="h-4 w-4" />
</button>

// Keyboard navigation
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleAction()}
  onClick={handleAction}
>
```

## Complete Examples

### Simple Display Component

```typescript
import { Match } from '@/core/domain/entities/match.entity'
import { formatDate } from '@/utils/date'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type PropsType = {
  match: Match
}

export function MatchCard({ match }: PropsType) {
  // Main component = simple layout
  return (
    <Card>
      <CardHeader>
        <CardTitle>{match.equipe}</CardTitle>
      </CardHeader>
      <CardContent>
        <MatchDate date={match.date} />
        <MatchScore score={match.score} />
      </CardContent>
    </Card>
  )
}

// Sub-components
function MatchDate({ date }: { date: Date }) {
  return <p className="text-sm text-muted-foreground">{formatDate(date)}</p>
}

function MatchScore({ score }: { score: string | null }) {
  return <p className="font-semibold">{score || 'À venir'}</p>
}
```

### Component with Data Fetching

```typescript
'use client'

import { useTeams } from '@/hooks/teams/useTeams'
import { TeamCard } from './page.card'
import { Loader2 } from 'lucide-react'

type PropsType = {
  filter?: string
}

export function TeamList({ filter }: PropsType) {
  const { data: teams, isLoading, error } = useTeams()

  // NO early returns - conditional rendering
  if (isLoading) return <LoadingState />
  if (error) return <ErrorState error={error} />
  if (!teams?.length) return <EmptyState />

  return <TeamGrid teams={teams} />
}

// State components
function LoadingState() {
  return (
    <div className="flex justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

function ErrorState({ error }: { error: Error }) {
  return <div className="text-destructive p-4">Error: {error.message}</div>
}

function EmptyState() {
  return <div className="text-center text-muted-foreground p-8">No teams found</div>
}

function TeamGrid({ teams }: { teams: any[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  )
}
```

### Component with Custom Hook and Action

```typescript
// page.tsx
'use client'

import { useTeamForm } from './page.hooks'
import { submitTeam } from './page.actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type PropsType = {
  teamId?: string
}

export function TeamForm({ teamId }: PropsType) {
  const { name, setName, isValid } = useTeamForm(teamId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitTeam({ name })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Team name" />
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>
    </form>
  )
}
```

```typescript
// page.hooks.ts
import { useState, useEffect } from 'react'

export function useTeamForm(teamId?: string) {
  const [name, setName] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(name.length >= 2)
  }, [name])

  return { name, setName, isValid }
}
```

```typescript
// page.actions.ts
'use server'

import { createTeam } from '@/actions/teams/create'

export async function submitTeam(data: { name: string }) {
  return await createTeam(data)
}
```

## Checklist

- [ ] File named in kebab-case
- [ ] Component named in PascalCase (named export)
- [ ] **One named export per file**
- [ ] **Each component defines own `PropsType`** (duplication for decoupling)
- [ ] 'use client' only if needed
- [ ] **NO early returns** - conditional rendering outside
- [ ] **Error/loading states as separate components**
- [ ] **Main component = layout + composition** (no complex logic)
- [ ] **Custom hooks in `page.hooks.ts`** (not library hooks)
- [ ] **Actions in `page.actions.ts`**
- [ ] **Complex sub-components in `page.componentName.tsx`**
- [ ] Mobile-first Tailwind classes
- [ ] Accessibility attributes (aria, alt, labels)
- [ ] TypeScript strict mode (no 'any')
- [ ] Path aliases for imports (@/)
