# Server Action Prompt

Template for creating Next.js Server Actions following project patterns.

## Usage

Use this prompt when creating server actions.

## Server Action Template

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseEntityRepository } from '@/core/infrastructure/supabase/repositories/entity.repository'
import { UseCaseClass } from '@/core/application/usecases/Entity/UseCaseClass'
import { InputSchema } from '@/core/application/dtos/entity.dto'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function actionName(input: InputType) {
  try {
    // 1. Validate input
    const validated = InputSchema.parse(input)

    // 2. Get Supabase client and instantiate repository
    const supabase = await createClient()
    const repository = new SupabaseEntityRepository(supabase)

    // 3. Create and execute use case
    const useCase = new UseCaseClass(repository)
    const result = await useCase.execute(validated)

    // 4. Return result
    return result
  } catch (error) {
    // 5. Handle errors
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

## Conventions

### File Organization

```
core/presentation/actions/
├── teams/
│   ├── create.ts          # createTeam
│   ├── read.ts            # readTeams, readTeam
│   ├── update.ts          # updateTeam
│   └── delete.ts          # deleteTeam
├── matches/
│   ├── read.ts
│   └── update.ts
└── [entity]/
    ├── create.ts
    ├── read.ts
    ├── update.ts
    └── delete.ts
```

### Naming Conventions

**Action names**: `verbEntity` (camelCase)

**CRUD Actions**: Use explicit CRUD verbs: `create`, `read`, `update`, `delete`

```typescript
// ✅ CRUD actions
export async function createTeam(input: CreateTeamInput) {}
export async function readTeams() {}
export async function readTeam(id: string) {}
export async function updateTeam(id: string, input: UpdateTeamInput) {}
export async function deleteTeam(id: string) {}

// ✅ Business actions (use descriptive verbs)
export async function scrapeMatches() {}
export async function publishTeam() {}
export async function archiveTeam() {}
```

## CRUD Patterns

### Create (POST)

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { CreateTeamUseCase } from '@/core/application/usecases/Team/CreateTeamUseCase'
import { CreateTeamInput, CreateTeamSchema } from '@/core/application/dtos/team.dto'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function createTeam(input: CreateTeamInput) {
  try {
    const validated = CreateTeamSchema.parse(input)
    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new CreateTeamUseCase(repository)
    return await useCase.execute(validated)
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### Read (GET)

**Read all**:

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { GetAllTeamsUseCase } from '@/core/application/usecases/Team/GetAllTeamsUseCase'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function readTeams() {
  try {
    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new GetAllTeamsUseCase(repository)
    return await useCase.execute()
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

**Read by ID**:

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { GetTeamByIdUseCase } from '@/core/application/usecases/Team/GetTeamByIdUseCase'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function readTeam(id: string) {
  try {
    if (!id) {
      throw new Error('Team ID is required')
    }

    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new GetTeamByIdUseCase(repository)
    return await useCase.execute(id)
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### Update (PATCH/PUT)

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { UpdateTeamUseCase } from '@/core/application/usecases/Team/UpdateTeamUseCase'
import { UpdateTeamInput, UpdateTeamSchema } from '@/core/application/dtos/team.dto'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function updateTeam(input: UpdateTeamInput) {
  try {
    const validated = UpdateTeamSchema.parse(input)
    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new UpdateTeamUseCase(repository)
    return await useCase.execute(validated)
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### Delete (DELETE)

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { DeleteTeamUseCase } from '@/core/application/usecases/Team/DeleteTeamUseCase'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function deleteTeam(id: string) {
  try {
    if (!id) {
      throw new Error('Team ID is required')
    }

    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new DeleteTeamUseCase(repository)
    await useCase.execute(id)
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

## Advanced Patterns

### Action with Authentication

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { CreateTeamUseCase } from '@/core/application/usecases/Team/CreateTeamUseCase'
import { CreateTeamInput, CreateTeamSchema } from '@/core/application/dtos/team.dto'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function createTeam(input: CreateTeamInput) {
  try {
    // Check authentication
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      throw new Error('Unauthorized')
    }

    // Validate and execute
    const validated = CreateTeamSchema.parse(input)
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new CreateTeamUseCase(repository)
    return await useCase.execute(validated)
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### Action with File Upload

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseStorageRepository } from '@/core/infrastructure/supabase/repositories/storage.repository'
import { UploadImageUseCase } from '@/core/application/usecases/Image/UploadImageUseCase'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get('file') as File

    if (!file) {
      throw new Error('No file provided')
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type')
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File too large')
    }

    const supabase = await createClient()
    const repository = new SupabaseStorageRepository(supabase)
    const useCase = new UploadImageUseCase(repository)
    return await useCase.execute(file)
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### Action with Complex Logic

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseMatchRepository } from '@/core/infrastructure/supabase/repositories/match.repository'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { SupabaseGymnaseRepository } from '@/core/infrastructure/supabase/repositories/gymnase.repository'
import { ScrapeMatchesUseCase } from '@/core/application/usecases/Match/ScrapeMatchesUseCase'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function scrapeMatches() {
  try {
    const supabase = await createClient()

    const matchRepository = new SupabaseMatchRepository(supabase)
    const teamRepository = new SupabaseTeamRepository(supabase)
    const gymnaseRepository = new SupabaseGymnaseRepository(supabase)

    const useCase = new ScrapeMatchesUseCase(matchRepository, teamRepository, gymnaseRepository)

    const result = await useCase.execute()

    return {
      success: true,
      scrapedCount: result.length,
      matches: result,
    }
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### Action with Revalidation

**Helper function for revalidation** (`core/shared/utils/revalidation.ts`):

```typescript
import { revalidatePath } from 'next/cache'

const REVALIDATION_PATHS = {
  teams: ['/teams', '/admin/teams', '/dashboard/teams'],
  matches: ['/matches', '/admin/matches', '/calendrier'],
  members: ['/membres', '/admin/membres'],
  inscriptions: ['/inscription', '/admin/inscriptions'],
  // Add other entities as needed
} as const

export type RevalidationEntity = keyof typeof REVALIDATION_PATHS

/**
 * Revalidate all paths associated with an entity
 * @param entity - The entity to revalidate paths for
 */
export function revalidateEntity(entity: RevalidationEntity) {
  const paths = REVALIDATION_PATHS[entity]
  if (!paths) {
    console.warn(`No revalidation paths defined for entity: ${entity}`)
    return
  }
  paths.forEach((path) => revalidatePath(path))
}
```

**Usage in actions**:

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { CreateTeamUseCase } from '@/core/application/usecases/Team/CreateTeamUseCase'
import { CreateTeamInput, CreateTeamSchema } from '@/core/application/dtos/team.dto'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'
import { revalidateEntity } from '@/core/shared/utils/revalidation'

export async function createTeam(input: CreateTeamInput) {
  try {
    const validated = CreateTeamSchema.parse(input)
    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const useCase = new CreateTeamUseCase(repository)
    const result = await useCase.execute(validated)

    // Revalidate all pages that show teams
    revalidateEntity('teams')

    return result
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

**When to revalidate**:

- ✅ After CREATE operations
- ✅ After UPDATE operations
- ✅ After DELETE operations
- ❌ Not needed for READ operations

## Error Handling

### Standard Error Pattern

```typescript
try {
  // Action logic
} catch (error) {
  const normalizedError = ErrorHandler.normalize(error)
  ErrorHandler.log(normalizedError)
  throw normalizedError
}
```

### Custom Error Messages

```typescript
try {
  // Logic
} catch (error) {
  if (error instanceof ZodError) {
    throw new Error('Validation failed: ' + error.errors[0].message)
  }

  const normalizedError = ErrorHandler.normalize(error)
  ErrorHandler.log(normalizedError)
  throw normalizedError
}
```

## Input Validation

**Always validate with Zod**:

```typescript
import { z } from 'zod'

const InputSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  age: z.number().min(18, 'Must be 18 or older').optional(),
})

export async function myAction(input: z.infer<typeof InputSchema>) {
  const validated = InputSchema.parse(input) // Throws if invalid
  // ...
}
```

## Return Values

### Success Response

```typescript
return {
  success: true,
  data: result,
}
```

### With Metadata

```typescript
return {
  success: true,
  data: result,
  count: result.length,
  timestamp: new Date(),
}
```

### Void Actions (Delete)

```typescript
// No return needed for delete
await useCase.execute(id)
```

## Testing Server Actions

### Manual Test in Component

```typescript
'use client'

import { createTeam } from '@/core/presentation/actions/teams/create'
import { readTeams } from '@/core/presentation/actions/teams/read'
import { Button } from '@/components/ui/button'

export function TestButton() {
  const handleTest = async () => {
    try {
      // Test create
      const result = await createTeam({ name: 'Test Team' })
      console.log('Created:', result)

      // Test read
      const teams = await readTeams()
      console.log('Teams:', teams)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return <Button onClick={handleTest}>Test Team Actions</Button>
}
```

## Checklist

- [ ] File starts with 'use server'
- [ ] Descriptive action name (CRUD: create/read/update/delete, Business: descriptive verb)
- [ ] Input validation with Zod (for create/update)
- [ ] Supabase client created with `createClient()`
- [ ] Repository instantiated with Supabase client (e.g., `new SupabaseTeamRepository(supabase)`)
- [ ] Use case instantiation and execution
- [ ] Error handling with ErrorHandler
- [ ] Proper TypeScript types (no 'any')
- [ ] Authentication check if needed
- [ ] Revalidate entity paths after mutations (create/update/delete)
- [ ] Return appropriate data structure
