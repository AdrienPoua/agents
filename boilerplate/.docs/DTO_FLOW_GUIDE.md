# Guide Complet des DTOs - Clean Architecture

## 📋 Les 3 Types de DTOs

### Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLEAN ARCHITECTURE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🎯 1. APPLICATION DTOs (Input/Output)                          │
│     📁 Location: core/application/dtos/                          │
│     📝 Purpose: API contract between UI and Application          │
│     🔤 Format: camelCase                                         │
│     ✅ Examples:                                                 │
│        - CreateTeamInput (INPUT from UI)                         │
│        - TeamResponse (OUTPUT to UI)                             │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🎯 2. DOMAIN ENTITIES (Business Logic)                         │
│     📁 Location: core/domain/entities/                           │
│     📝 Purpose: Business objects with logic                      │
│     🔤 Format: camelCase                                         │
│     ✅ Examples:                                                 │
│        - TeamEntity (with methods: hasCoach(), canAddPlayer())   │
│        - PlayerEntity                                            │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🎯 3. INFRASTRUCTURE DTOs (Database)                           │
│     📁 Location: core/infrastructure/supabase/dtos/              │
│     📝 Purpose: Database schema mapping                          │
│     🔤 Format: snake_case (database format)                      │
│     ✅ Examples:                                                 │
│        - SupabaseTeamDTO (matches DB schema exactly)             │
│        - SupabasePlayerDTO                                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Le Flow Complet des Données

### Écriture (CREATE / UPDATE)

```
┌──────────────────────────────────────────────────────────────────┐
│  USER ACTION: Créer une nouvelle équipe                          │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 1: UI (React Component)                                   │
│                                                                   │
│  const formData = {                                               │
│    name: "U13 Garçons",                                          │
│    category: "U13",                                               │
│    coachIds: ["uuid-123"]                                         │
│  }                                                                │
│                                                                   │
│  await createTeam(formData)  // Call Server Action                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    CreateTeamInput (Application DTO - INPUT)
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 2: ADAPTERS (Server Action)                               │
│  📄 File: core/adapters/actions/teams/create.ts                  │
│                                                                   │
│  'use server'                                                     │
│                                                                   │
│  export async function createTeam(input: CreateTeamInput) {      │
│    // 1. Validate with Zod                                       │
│    const validated = CreateTeamSchema.parse(input)                │
│                                                                   │
│    // 2. Create Command                                          │
│    const command = new CreateTeamCommand(                         │
│      validated.name,                                              │
│      validated.category,                                          │
│      validated.coachIds                                           │
│    )                                                              │
│                                                                   │
│    // 3. Execute via Handler                                     │
│    const handler = new CreateTeamHandler(repo, eventBus)          │
│    return handler.handle(command)                                 │
│  }                                                                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    CreateTeamCommand (CQRS)
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 3: APPLICATION (Command Handler)                          │
│  📄 File: core/application/handlers/commands/create-team.handler │
│                                                                   │
│  export class CreateTeamHandler {                                │
│    async handle(command: CreateTeamCommand): Promise<TeamEntity> │
│      // Business validation                                      │
│      if (command.coachIds.length === 0) {                        │
│        throw new Error('Team needs a coach')                     │
│      }                                                            │
│                                                                   │
│      // Create via repository                                    │
│      const team = await this.teamRepo.create({                   │
│        name: command.name,                                        │
│        category: command.category,                                │
│        coachIds: command.coachIds                                 │
│      })                                                           │
│                                                                   │
│      // Publish domain event                                     │
│      await this.eventBus.publish(new TeamCreatedEvent(team))      │
│                                                                   │
│      return team  // Returns TeamEntity                           │
│    }                                                              │
│  }                                                                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                          TeamEntity (Domain)
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 4: INFRASTRUCTURE (Repository)                            │
│  📄 File: core/infrastructure/supabase/repositories/team.repo    │
│                                                                   │
│  export class SupabaseTeamRepository {                           │
│    async create(input: CreateTeamInput): Promise<TeamEntity> {   │
│      // 1. Transform to DB format (via Mapper)                   │
│      const dbData = toPersistence(input)                          │
│                                                                   │
│      // 2. Insert to database                                    │
│      const { data, error } = await this.client                   │
│        .from('teams')                                             │
│        .insert(dbData)                                            │
│        .select()                                                  │
│        .single()                                                  │
│                                                                   │
│      // 3. Transform back to Domain Entity                       │
│      return toDomain(data as SupabaseTeamDTO)                     │
│    }                                                              │
│  }                                                                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    SupabaseTeamDTO (Infrastructure DTO)
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 5: DATABASE (PostgreSQL via Supabase)                     │
│                                                                   │
│  INSERT INTO teams (                                              │
│    name,                                                          │
│    category,                                                      │
│    coach_id,          -- ⚠️ snake_case                           │
│    created_at,                                                    │
│    updated_at                                                     │
│  ) VALUES (...)                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

### Lecture (READ)

```
┌──────────────────────────────────────────────────────────────────┐
│  USER ACTION: Voir la liste des équipes                          │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 1: UI (React Component)                                   │
│                                                                   │
│  const { data } = useTeams()  // React Query hook                 │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 2: ADAPTERS (React Query Hook)                            │
│  📄 File: core/adapters/hooks/teams/useTeams.ts                  │
│                                                                   │
│  'use client'                                                     │
│                                                                   │
│  export function useTeams() {                                     │
│    return useQuery({                                              │
│      queryKey: ['teams'],                                         │
│      queryFn: () => getTeams()  // Server Action                  │
│    })                                                             │
│  }                                                                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 3: ADAPTERS (Server Action)                               │
│  📄 File: core/adapters/actions/teams/read.ts                    │
│                                                                   │
│  'use server'                                                     │
│                                                                   │
│  export async function getTeams() {                               │
│    const query = new GetTeamsQuery()                              │
│    const handler = new GetTeamsHandler(supabase)                  │
│    return handler.handle(query)                                   │
│  }                                                                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    GetTeamsQuery (CQRS)
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 4: APPLICATION (Query Handler)                            │
│  📄 File: core/application/handlers/queries/get-teams.handler    │
│                                                                   │
│  export class GetTeamsHandler {                                  │
│    async handle(query: GetTeamsQuery): Promise<TeamResponse[]> { │
│      // ✅ CAN bypass domain layer for performance               │
│      const { data } = await this.supabase                         │
│        .from('teams')                                             │
│        .select(`                                                  │
│          *,                                                       │
│          coachs(name),                                            │
│          players(count)                                           │
│        `)                                                         │
│                                                                   │
│      // Transform to Response DTO                                │
│      return data.map(team => ({                                   │
│        id: team.id,                                               │
│        name: team.name,                                           │
│        category: team.category,                                   │
│        coachName: team.coachs[0]?.name,                           │
│        playerCount: team.players.length                           │
│      }))                                                          │
│    }                                                              │
│  }                                                                │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    TeamResponse[] (Application DTO - OUTPUT)
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 5: UI (React Component)                                   │
│                                                                   │
│  {data?.map(team => (                                             │
│    <TeamCard                                                      │
│      key={team.id}                                                │
│      name={team.name}                                             │
│      category={team.category}                                     │
│      coachName={team.coachName}                                   │
│      playerCount={team.playerCount}                               │
│    />                                                             │
│  ))}                                                              │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📊 Tableau Comparatif Complet

| Critère | Application DTOs | Domain Entities | Infrastructure DTOs |
|---------|-----------------|-----------------|-------------------|
| **📁 Location** | `core/application/dtos/` | `core/domain/entities/` | `core/infrastructure/supabase/dtos/` |
| **🎯 Rôle** | Contract UI ↔ Application | Business logic | Database schema |
| **🔤 Format** | `camelCase` | `camelCase` | `snake_case` |
| **📂 Sous-dossiers** | `inputs/` + `responses/` | Pas de sous-dossiers | Pas de sous-dossiers |
| **✅ Exemples** | `CreateTeamInput`, `TeamResponse` | `TeamEntity`, `PlayerEntity` | `SupabaseTeamDTO` |
| **🔄 Direction** | INPUT (from UI) / OUTPUT (to UI) | Bidirectional | Database only |
| **✔️ Validation** | Zod schemas | Business rules (methods) | None (raw data) |
| **🎓 Contenu** | Interfaces simples | Classes avec méthodes | Interfaces simples |
| **🌍 Portée** | Adapters + Application | All layers | Infrastructure only |
| **🔗 Dépendances** | Use Domain Types (`Category`, etc.) | No dependencies | No dependencies |

---

## 🎯 Les Règles d'Or

### Règle #1 : Les Application DTOs utilisent les Domain Types

```typescript
// ✅ CORRECT
// core/application/dtos/inputs/create-team.input.ts
import { Category } from '@/core/domain/types/category.type'

export interface CreateTeamInput {
  name: string
  category: Category  // ✅ Uses Domain Type
  coachIds: string[]
}

// ❌ INCORRECT
export interface CreateTeamInput {
  name: string
  category: string  // ❌ Should use Category type
  coachIds: string[]
}
```

### Règle #2 : Les Infrastructure DTOs ne sortent JAMAIS de la couche Infrastructure

```typescript
// ✅ CORRECT
// core/infrastructure/supabase/repositories/team.repository.ts
export class SupabaseTeamRepository {
  async create(input: CreateTeamInput): Promise<TeamEntity> {
    const dbData = toPersistence(input)  // Convert to SupabaseTeamDTO

    const { data } = await this.client
      .from('teams')
      .insert(dbData)
      .select()
      .single()

    return toDomain(data as SupabaseTeamDTO)  // Convert back to TeamEntity
  }
}

// ❌ INCORRECT
export class SupabaseTeamRepository {
  async create(input: CreateTeamInput): Promise<SupabaseTeamDTO> {
    // ❌ Never return Infrastructure DTO outside infrastructure layer!
    return data as SupabaseTeamDTO
  }
}
```

### Règle #3 : Les Mappers font le pont entre Infrastructure et Domain

```typescript
// ✅ CORRECT
// core/infrastructure/supabase/mappers/team.mapper.ts

export const toDomain = (dto: SupabaseTeamDTO): TeamEntity => {
  return new TeamEntity({
    id: dto.id,
    name: dto.name,
    category: dto.category as Category,
    coachId: dto.coach_id,  // snake_case → camelCase
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at)
  })
}

export const toPersistence = (entity: TeamEntity): Partial<SupabaseTeamDTO> => {
  return {
    name: entity.name,
    category: entity.category,
    coach_id: entity.coachId  // camelCase → snake_case
  }
}
```

### Règle #4 : Les Domain Entities contiennent la logique métier

```typescript
// ✅ CORRECT
// core/domain/entities/team.entity.ts
export class TeamEntity {
  constructor(private data: Team) {}

  // ✅ Business logic methods
  hasCoach(): boolean {
    return this.coachs.length > 0
  }

  canAddPlayer(): boolean {
    return this.players.length < 12
  }

  addPlayer(player: PlayerEntity): void {
    if (!this.canAddPlayer()) {
      throw new TeamFullException(this.data.name)
    }
    this.data.players.push(player)
  }

  toObject(): Team {
    return { ...this.data }
  }
}

// ❌ INCORRECT
export interface TeamEntity {
  // ❌ Just data, no business logic
  id: string
  name: string
  category: Category
}
```

---

## 🚀 Exemple Complet : Feature "Créer une Équipe"

### 1. Application DTOs

```typescript
// core/application/dtos/inputs/create-team.input.ts
import { Category } from '@/core/domain/types/category.type'

export interface CreateTeamInput {
  name: string
  category: Category
  coachIds: string[]
}

// core/application/dtos/responses/team.response.ts
export interface TeamResponse {
  id: string
  name: string
  category: string
  coachName: string
  playerCount: number
  createdAt: string
}
```

### 2. Domain Entity

```typescript
// core/domain/entities/team.entity.ts
export class TeamEntity {
  constructor(private data: Team) {}

  hasCoach(): boolean {
    return this.data.coachs.length > 0
  }

  canAddPlayer(): boolean {
    return this.data.players.length < 12
  }

  toObject(): Team {
    return { ...this.data }
  }
}
```

### 3. Infrastructure DTO

```typescript
// core/infrastructure/supabase/dtos/team.dto.ts
export interface SupabaseTeamDTO {
  id: string
  name: string
  category: string
  coach_id: string  // ⚠️ snake_case
  created_at: string
  updated_at: string
}
```

### 4. Mapper

```typescript
// core/infrastructure/supabase/mappers/team.mapper.ts
export const toDomain = (dto: SupabaseTeamDTO): TeamEntity => {
  return new TeamEntity({
    id: dto.id,
    name: dto.name,
    category: dto.category as Category,
    coachId: dto.coach_id,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at)
  })
}
```

### 5. Repository

```typescript
// core/infrastructure/supabase/repositories/team.repository.ts
export class SupabaseTeamRepository {
  async create(input: CreateTeamInput): Promise<TeamEntity> {
    const { data, error } = await this.client
      .from('teams')
      .insert({
        name: input.name,
        category: input.category,
        coach_id: input.coachIds[0]
      })
      .select()
      .single()

    if (error) throw this.handleError(error)

    return toDomain(data as SupabaseTeamDTO)
  }
}
```

### 6. Command + Handler

```typescript
// core/application/commands/create-team.command.ts
export class CreateTeamCommand {
  constructor(
    public readonly name: string,
    public readonly category: Category,
    public readonly coachIds: string[]
  ) {}
}

// core/application/handlers/commands/create-team.handler.ts
export class CreateTeamHandler {
  constructor(
    private teamRepo: ITeamRepository,
    private eventBus: IEventBus
  ) {}

  async handle(command: CreateTeamCommand): Promise<TeamEntity> {
    if (command.coachIds.length === 0) {
      throw new Error('Team must have at least one coach')
    }

    const team = await this.teamRepo.create({
      name: command.name,
      category: command.category,
      coachIds: command.coachIds
    })

    await this.eventBus.publish({
      type: 'TEAM_CREATED',
      teamId: team.id,
      teamName: team.name,
      occurredAt: new Date()
    })

    return team
  }
}
```

### 7. Server Action

```typescript
// core/adapters/actions/teams/create.ts
'use server'

import { CreateTeamInput } from '@/core/application/dtos/inputs/create-team.input'
import { CreateTeamCommand } from '@/core/application/commands/create-team.command'
import { CreateTeamHandler } from '@/core/application/handlers/commands/create-team.handler'

export async function createTeam(input: CreateTeamInput) {
  try {
    const command = new CreateTeamCommand(
      input.name,
      input.category,
      input.coachIds
    )

    const handler = new CreateTeamHandler(teamRepo, eventBus)
    const team = await handler.handle(command)

    return team
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

### 8. UI Component

```typescript
// src/components/CreateTeamForm.tsx
'use client'

import { useCreateTeam } from '@/hooks/teams/useCreateTeam'

export function CreateTeamForm() {
  const createTeam = useCreateTeam()

  const onSubmit = async (data: CreateTeamInput) => {
    await createTeam.mutateAsync(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  )
}
```

---

## ✅ Checklist de Validation

Avant de créer un nouveau DTO, posez-vous ces questions :

- [ ] **Est-ce un INPUT (de l'UI) ?** → `core/application/dtos/inputs/`
- [ ] **Est-ce un OUTPUT (vers l'UI) ?** → `core/application/dtos/responses/`
- [ ] **Est-ce une entité avec logique métier ?** → `core/domain/entities/`
- [ ] **Est-ce pour mapper la DB ?** → `core/infrastructure/supabase/dtos/`
- [ ] **Ai-je utilisé les Domain Types ?** (`Category`, `Role`, etc.)
- [ ] **Ai-je créé le Mapper correspondant ?** (si Infrastructure DTO)
- [ ] **Ai-je ajouté la validation Zod ?** (si Application DTO Input)

---

**Dernière mise à jour :** 2025-01-15
