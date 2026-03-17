# Clean Architecture Agent

You are a specialized agent for implementing features following Clean Architecture principles in this Next.js project.

## Your Role

Help implement new features respecting the strict layered architecture with **CQRS pattern**:

- **Domain Layer**: Entities, Value Objects, Aggregates, Repository interfaces, Domain Services, Events, Specifications
- **Application Layer**: Commands/Queries (CQRS), Command/Query Handlers, Validators, Event Handlers
- **Infrastructure Layer**: Database, CMS, Email, External APIs implementations
- **Adapters Layer**: Server Actions, React Query hooks, REST controllers, GraphQL resolvers
- **UI Layer**: Next.js pages, React components

## Stack Context

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Database**: Supabase (PostgreSQL)
- **State**: TanStack Query (React Query)
- **Validation**: Zod
- **Forms**: React Hook Form + Zod

---

## ⚠️ PRAGMATIC CLEAN ARCHITECTURE

### When NOT to Over-Engineer

This document presents the **complete** Clean Architecture toolkit with all DDD patterns.

**However, DO NOT implement all patterns systematically!** This leads to over-engineering.

#### Start Simple, Add Complexity When Needed

**Small Project (< 10 entities):**

- ✅ **Use**: Simple interfaces, Commands/Queries, Repositories, Mappers
- ❌ **Skip**: Aggregates, Specifications, Domain Events, Value Objects, Domain Services

**Medium Project (10-50 entities):**

- ✅ **Add**: Entity classes (with business logic), Domain Services
- ⚠️ **Use sparingly**: Specifications (only if complex filtering), Domain Events (only if decoupling needed)
- ❌ **Still skip**: Aggregates (unless strong transactional consistency needed), Value Objects (unless complex validation)

**Large Project (> 50 entities):**

- ✅ **Add**: Aggregates (for transactional boundaries), Specifications (for reusable rules), Domain Events, Event Bus
- ✅ **Add**: Value Objects (for complex validation logic like Email, PhoneNumber)

#### Decision Matrix: When to Use Each Pattern

| Pattern             | Use When                                      | Skip When                             | Example                                                                                      |
| ------------------- | --------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Entity Classes**  | Has business logic methods                    | Just data (read-only)                 | ✅ `TeamEntity.canAddPlayer()` <br> ❌ `GymnaseEntity` (no logic)                            |
| **Aggregates**      | Multiple entities MUST be consistent together | Single entity or independent entities | ✅ `TeamAggregate` (team + players + coach max 12) <br> ❌ `GymnaseAggregate` (just data)    |
| **Specifications**  | Complex, reusable filtering logic             | Simple filters                        | ✅ `EligiblePlayerSpec` (age + active + team) <br> ❌ `NameEqualsSpec` (use simple filter)   |
| **Domain Events**   | Need decoupling between modules               | Direct calls are fine                 | ✅ `PlayerTransferred` (notify coach, update stats) <br> ❌ `PlayerViewed` (no side effects) |
| **Value Objects**   | Complex validation logic                      | Simple types                          | ✅ `Email`, `PhoneNumber` <br> ❌ `Name` (just string)                                       |
| **Domain Services** | Logic involves multiple entities              | Fits in one entity                    | ✅ `TeamMatchingService` (teams + matches) <br> ❌ `TeamNameValidator` (use entity method)   |

#### Rule of Thumb

**For most features, you only need:**

1. Simple interfaces (DTOs)
2. Commands/Queries (CQRS)
3. Handlers
4. Repositories
5. Mappers

**Add advanced patterns ONLY when you have a real need.**

#### Example: Gymnase (Gymnasium)

```typescript
// ❌ DON'T: Over-engineered
class GymnaseEntity {
  constructor(private data: Gymnase) {}

  hasAddress(): boolean {
    // ❌ No real business logic
    return !!this.data.address
  }
}

class GymnaseAggregate {
  // ❌ No transactional consistency needed
  // ...
}

// ✅ DO: Simple and effective
export interface Gymnase {
  id: string
  name: string
  address: string
  city: string
}
```

---

## 🏗️ Complete Clean Architecture Folder Structure

This is the **optimal Clean Architecture** structure with all DDD (Domain-Driven Design) concepts and **CQRS pattern**:

```
core/
│
├─── domain/                              # 🎯 DOMAIN LAYER (Pure business logic)
│    │
│    ├─── entities/                       # Entities with identity
│    │    │                              # Objects with a unique ID and lifecycle
│    │    │                              # Contain business logic methods
│    │    ├─── team.entity.ts
│    │    ├─── player.entity.ts
│    │    └─── match.entity.ts
│    │
│    ├─── value-objects/                  # Value Objects (no identity)
│    │    │                              # Immutable objects defined by their value
│    │    │                              # Contain validation logic
│    │    ├─── email.vo.ts               # Email with format validation
│    │    ├─── phone-number.vo.ts        # Phone with 10-digit validation
│    │    ├─── address.vo.ts             # Complete address
│    │    ├─── category.vo.ts            # Basketball category (U7, U9, U11...)
│    │    └─── licence-number.vo.ts      # FFBB licence number
│    │
│    ├─── aggregates/                     # Aggregates (cluster of entities)
│    │    │                              # Ensure transactional consistency
│    │    │                              # Have an Aggregate Root (single entry point)
│    │    ├─── team.aggregate.ts         # Team (root) + Players + Coach (max 12 players)
│    │    ├─── match.aggregate.ts        # Match (root) + Teams + Gymnase + Score
│    │    └─── inscription.aggregate.ts  # Inscription (root) + Documents + Payment
│    │
│    ├─── repositories/                   # Repository interfaces (contracts)
│    │    │                              # Define WHAT data operations exist
│    │    │                              # No implementation details (data persistence)
│    │    ├─── base.repository.ts        # Base interface (CRUD)
│    │    ├─── team.repository.ts
│    │    └─── player.repository.ts
│    │
│    ├─── services/                       # Domain Services
│    │    │                              # Business logic involving multiple entities
│    │    │                              # Logic that doesn't fit in a single entity
│    │    │                              # Stateless operations
│    │    ├─── team-matching.service.ts  # Match scraped data with teams
│    │    ├─── eligibility.service.ts    # Check player eligibility for category
│    │    └─── scoring.service.ts        # Calculate match scores and rankings
│    │
│    ├─── events/                         # Domain Events
│    │    │                              # Significant business events (past tense)
│    │    │                              # Enable decoupling between modules
│    │    ├─── player.events.ts          # PlayerCreated, PlayerTransferred
│    │    ├─── match.events.ts           # MatchScheduled, MatchCancelled
│    │    ├─── team.events.ts            # TeamCreated, TeamDisbanded
│    │    └─── event-bus.ts              # IEventBus interface
│    │
│    ├─── specifications/                 # Specifications (business rules)
│    │    │                              # Reusable business rules for filtering
│    │    │                              # Composable with AND, OR, NOT
│    │    ├─── player.specifications.ts  # MinorPlayerSpec, ActivePlayerSpec
│    │    ├─── team.specifications.ts    # FullTeamSpec, HasCoachSpec
│    │    └─── base.specification.ts     # Specification<T> interface + composites
│    │
│    ├─── exceptions/                     # Domain Exceptions
│    │    │                              # Business rule violations
│    │    │                              # More specific than generic errors
│    │    ├─── domain.exception.ts       # Base DomainException
│    │    ├─── player-not-found.exception.ts
│    │    ├─── team-full.exception.ts
│    │    └─── invalid-category.exception.ts
│    │
│    └─── types/                          # Shared domain types
│         │                              # Enums, unions, type aliases
│         │                              # Used across all layers
│         ├─── category.type.ts          # 'U7' | 'U9' | 'U11' | ...
│         ├─── role.type.ts              # 'player' | 'coach' | 'admin'
│         └─── match-status.type.ts      # 'scheduled' | 'in_progress' | 'finished'
│
├─── application/                         # 🎯 APPLICATION LAYER (CQRS orchestration)
│    │
│    ├─── commands/                       # Commands (CQRS - Write operations)
│    │    │                              # Represent intentions to change state
│    │    │                              # Contain data needed for the operation
│    │    ├─── create-team.command.ts
│    │    ├─── update-player.command.ts
│    │    ├─── delete-match.command.ts
│    │    └─── transfer-player.command.ts
│    │
│    ├─── queries/                        # Queries (CQRS - Read operations)
│    │    │                              # Optimized for reading
│    │    │                              # Can bypass domain layer for performance
│    │    ├─── get-team-by-id.query.ts
│    │    ├─── get-players-paginated.query.ts
│    │    ├─── get-upcoming-matches.query.ts
│    │    └─── get-team-statistics.query.ts
│    │
│    ├─── handlers/                       # Command & Query Handlers
│    │    │                              # Execute commands and queries
│    │    │                              # Orchestrate domain objects
│    │    ├─── commands/
│    │    │    ├─── create-team.handler.ts
│    │    │    └─── update-player.handler.ts
│    │    └─── queries/
│    │         ├─── get-team-by-id.handler.ts
│    │         └─── get-players-paginated.handler.ts
│    │
│    ├─── dtos/                           # Application DTOs (Input/Output)
│    │    │                              # INPUT: Data coming from UI (Create, Update)
│    │    │                              # OUTPUT: Data going to UI (Response, Display)
│    │    ├─── inputs/
│    │    │    ├─── create-team.input.ts
│    │    │    └─── update-player.input.ts
│    │    ├─── responses/
│    │    │    ├─── team.response.ts
│    │    │    └─── player.response.ts
│    │    └─── pagination.dto.ts
│    │
│    ├─── validators/                     # Validators (Zod schemas)
│    │    │                              # Separated from DTOs
│    │    │                              # Reusable validation logic
│    │    ├─── team.validators.ts
│    │    ├─── player.validators.ts
│    │    └─── common.validators.ts      # Shared validators (UUID, email, etc.)
│    │
│    ├─── event-handlers/                 # Domain Event Handlers
│    │    │                              # React to domain events
│    │    │                              # Side effects (email, notifications, logs)
│    │    ├─── send-welcome-email.handler.ts
│    │    ├─── notify-coach.handler.ts
│    │    └─── log-team-creation.handler.ts
│    │
│    └─── ports/                          # Ports (Hexagonal Architecture)
│         │                              # Interfaces for external services
│         │                              # Implemented in infrastructure layer
│         │                              # Different from repositories (data access)
│         ├─── email.port.ts             # Send emails (not data persistence)
│         ├─── sms.port.ts               # Send SMS (not data persistence)
│         └─── storage.port.ts           # Store files (not data persistence)
│
├─── infrastructure/                      # 🎯 INFRASTRUCTURE LAYER (External implementations)
│    │
│    ├─── supabase/                       # Supabase implementation
│    │    ├─── repositories/              # Repository implementations
│    │    │    │                         # Implement domain repository interfaces
│    │    │    │                         # Convert DB data to domain entities
│    │    │    ├─── base.repository.ts   # Abstract base with common CRUD (DRY)
│    │    │    ├─── team.repository.ts
│    │    │    └─── player.repository.ts
│    │    ├─── mappers/                   # Mappers (DB ↔ Domain)
│    │    │    │                         # Transform between layers
│    │    │    ├─── team.mapper.ts       # toDomain(), toPersistence()
│    │    │    └─── player.mapper.ts
│    │    ├─── dtos/                      # Supabase DTOs (DB structure)
│    │    │    │                         # Match database schema (snake_case)
│    │    │    │                         # NOT used outside infrastructure layer
│    │    │    ├─── team.dto.ts          # snake_case fields
│    │    │    └─── player.dto.ts
│    │    ├─── clients/                   # Supabase clients
│    │    │    ├─── server.ts            # Server-side client
│    │    │    └─── browser.ts           # Client-side client
│    │    ├─── migrations/                # SQL migrations (optional)
│    │    │    └─── 001_create_players.sql
│    │    └─── seeds/                     # Seed data (optional)
│    │         └─── teams.seed.ts
│    │
│    ├─── sanity/                         # Sanity CMS implementation
│    │    ├─── repositories/
│    │    ├─── mappers/
│    │    └─── schemas/
│    │
│    ├─── resend/                         # Email service implementation
│    │    ├─── repositories/
│    │    │    └─── email.repository.ts  # Implements IEmailPort
│    │    └─── templates/                # React Email templates
│    │         ├─── welcome.tsx
│    │         └─── match-reminder.tsx
│    │
│    ├─── puppeteer/                      # Web scraping
│    │    └─── scrapers/
│    │         └─── ffbb-scraper.ts
│    │
│    └─── event-bus/                      # Event Bus implementations
│         ├─── in-memory-event-bus.ts    # Simple in-memory (dev/test)
│         └─── supabase-event-bus.ts     # Persistent in DB (production)
│
├─── adapters/                            # 🎯 ADAPTERS LAYER (Interface to outside world)
│    │                                   # Formerly called "Presentation"
│    │                                   # Adapts external requests to application
│    │
│    ├─── actions/                        # Server Actions (Next.js)
│    │    │                              # Next.js 14 Server Actions
│    │    │                              # 'use server' directive
│    │    ├─── teams/
│    │    │    ├─── create.ts            # createTeam()
│    │    │    ├─── read.ts              # readTeams(), readTeam()
│    │    │    ├─── update.ts            # updateTeam()
│    │    │    └─── delete.ts            # deleteTeam()
│    │    └─── players/
│    │
│    ├─── hooks/                          # React Query Hooks
│    │    │                              # Client-side data fetching
│    │    │                              # 'use client' directive
│    │    ├─── teams/
│    │    │    ├─── useTeams.ts          # useQuery for list
│    │    │    ├─── useTeam.ts           # useQuery for single item
│    │    │    ├─── useCreateTeam.ts     # useMutation for create
│    │    │    └─── useUpdateTeam.ts     # useMutation for update
│    │    └─── players/
│    │
│    ├─── controllers/                    # REST API Controllers (optional)
│    │    │                              # If you have a REST API
│    │    ├─── team.controller.ts
│    │    └─── player.controller.ts
│    │
│    ├─── graphql/                        # GraphQL Resolvers (optional)
│    │    │                              # If you use GraphQL
│    │    ├─── team.resolver.ts
│    │    └─── player.resolver.ts
│    │
│    └─── websockets/                     # WebSocket Handlers (optional)
│         │                              # If you use real-time features
│         └─── match-updates.handler.ts
│
└─── shared/                              # 🎯 SHARED LAYER (Utilities)
     │                                   # Cross-cutting concerns
     │                                   # Used by all layers
     │
     ├─── types/                          # Global shared types
     │    ├─── pagination.types.ts
     │    ├─── result.types.ts           # Result<T, E> type
     │    └─── api-response.types.ts
     │
     ├─── decorators/                     # Decorators / HOF
     │    ├─── with-error-handling.ts    # Wrap async functions with error handling
     │    ├─── with-logging.ts           # Add logging to functions
     │    └─── with-retry.ts             # Retry failed operations
     │
     ├─── utils/                          # Utility functions
     │    ├─── date.utils.ts
     │    ├─── string.utils.ts
     │    └─── array.utils.ts
     │
     ├─── error/                          # Error handling
     │    ├─── ErrorHandler.ts           # Centralized error handler
     │    ├─── AppError.ts               # Base application error
     │    └─── typeguards/               # Error type guards
     │
     ├─── config/                         # Configuration
     │    ├─── constants.ts
     │    └─── env.ts                    # Environment variables
     │
     └─── guards/                         # TypeScript type guards
          ├─── is-string.guard.ts
          └─── is-uuid.guard.ts
```

---

## 📚 Detailed Explanation of Each Folder

### 1. Domain Layer (`core/domain/`)

The **heart of your application**. Contains pure business logic with zero dependencies on frameworks or external libraries.

#### `entities/` - Entities with Identity

**What**: Objects with a unique identifier and lifecycle.

**When to use**:

- Object has an ID
- Object has business logic methods
- Object state changes over time

**Example**:

```typescript
// team.entity.ts
export class TeamEntity {
  constructor(private data: Team) {}

  hasCoach(): boolean {
    return this.coachs.length > 0
  }

  canAddPlayer(): boolean {
    return this.players.length < 12
  }

  toObject(): Team {
    return { ...this.data }
  }
}
```

#### `value-objects/` - Value Objects

**What**: Immutable objects defined by their value, not identity.

**When to use**:

- No unique ID needed
- Defined by its attributes
- Contains validation logic
- Two objects with same values are equal

**Examples**:

- `Email` - email validation
- `PhoneNumber` - phone format validation
- `Address` - complete address
- `Category` - basketball category (U7, U9, etc.)

**Example**:

```typescript
// email.vo.ts
export class Email {
  private readonly value: string

  constructor(email: string) {
    if (!this.isValid(email)) {
      throw new Error('Invalid email')
    }
    this.value = email.toLowerCase().trim()
  }

  private isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  toString(): string {
    return this.value
  }

  equals(other: Email): boolean {
    return this.value === other.value
  }
}
```

#### `aggregates/` - Aggregates (Aggregate Root Pattern)

**What**: Cluster of entities treated as a single unit with transactional consistency. Has an **Aggregate Root** (single entry point).

**When to use**:

- Multiple entities MUST be consistent together
- Need to enforce business rules across entities
- Need a transactional boundary

**Why Aggregate Root?**

- **Prevents direct access** to child entities
- **Enforces business rules** at the boundary
- **Guarantees consistency** within the aggregate

**Example**:

```typescript
// team.aggregate.ts
export class TeamAggregate {
  private readonly team: TeamEntity
  private players: PlayerEntity[]
  private readonly coach: MemberEntity

  constructor(team: TeamEntity, players: PlayerEntity[], coach: MemberEntity) {
    this.team = team
    this.players = players
    this.coach = coach
  }

  // ✅ Aggregate Root = Entry point for all operations
  addPlayer(player: PlayerEntity): void {
    // ✅ Enforce business rule: max 12 players
    if (this.players.length >= 12) {
      throw new TeamFullException(this.team.name)
    }

    // ✅ Enforce business rule: must have coach
    if (!this.coach) {
      throw new Error('Cannot add player without a coach')
    }

    this.players.push(player)
  }

  removePlayer(playerId: string): void {
    const index = this.players.findIndex((p) => p.id === playerId)
    if (index === -1) {
      throw new PlayerNotFoundException(playerId)
    }
    this.players.splice(index, 1)
  }

  transferPlayerTo(playerId: string, targetTeam: TeamAggregate): void {
    const player = this.players.find((p) => p.id === playerId)
    if (!player) throw new PlayerNotFoundException(playerId)

    // Remove from current team
    this.removePlayer(playerId)

    // Add to target team (through its Aggregate Root!)
    targetTeam.addPlayer(player)
  }

  // Getters
  getTeam(): TeamEntity {
    return this.team
  }

  getPlayers(): PlayerEntity[] {
    return [...this.players] // Return copy
  }
}

// ❌ WRONG: Direct access bypasses business rules
playerRepository.add(player) // No validation!

// ✅ RIGHT: Go through Aggregate Root
teamAggregate.addPlayer(player) // Enforces max 12 players + has coach
```

#### `repositories/` - Repository Interfaces

**What**: Contracts defining data operations (no implementation).

**Why**: Decouple domain from infrastructure.

**Purpose**: Data persistence operations only.

**Example**:

```typescript
// team.repository.ts
export interface ITeamRepository {
  findAll(): Promise<TeamEntity[]>
  findById(id: string): Promise<TeamEntity | null>
  create(team: CreateTeamInput): Promise<TeamEntity>
  update(id: string, team: UpdateTeamInput): Promise<TeamEntity>
  delete(id: string): Promise<void>
}
```

#### `services/` - Domain Services

**What**: Business logic that doesn't belong to a single entity.

**When to use**:

- Operation involves multiple entities
- Logic doesn't fit naturally in one entity
- Stateless operations

**Example**:

```typescript
// team-matching.service.ts
export class TeamMatchingService {
  matchTeamsToMatches(scrapedMatches: ScrapedMatch[], teams: TeamEntity[]): MatchWithTeam[] {
    return scrapedMatches.map((match) => {
      // Complex matching algorithm using:
      // - Fuzzy string matching on team names
      // - Category matching (U11, U13, etc.)
      // - Division matching
      const matchedTeam = this.findBestMatch(match, teams)

      return {
        ...match,
        teamId: matchedTeam?.id || null,
      }
    })
  }

  private findBestMatch(match: ScrapedMatch, teams: TeamEntity[]): TeamEntity | null {
    // Fuzzy matching algorithm
    // ...
  }
}
```

#### `events/` - Domain Events

**What**: Significant business events that happened (past tense).

**When to use**:

- Decouple modules
- Trigger side effects
- Audit trail

**Example**:

```typescript
// player.events.ts
export interface DomainEvent {
  occurredAt: Date
  aggregateId: string
}

export interface PlayerCreatedEvent extends DomainEvent {
  type: 'PLAYER_CREATED'
  playerId: string
  playerName: string
  teamId: string
  email: string
}

export interface PlayerTransferredEvent extends DomainEvent {
  type: 'PLAYER_TRANSFERRED'
  playerId: string
  playerName: string
  fromTeamId: string
  toTeamId: string
}
```

#### `specifications/` - Specifications

**What**: Reusable business rules for filtering/validation.

**When to use**:

- Complex filtering logic
- Reusable business rules
- Composable rules (AND, OR, NOT)

**Example**:

```typescript
// base.specification.ts
export interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean
}

// Composite Specifications
export class AndSpecification<T> implements Specification<T> {
  constructor(
    private left: Specification<T>,
    private right: Specification<T>,
  ) {}

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate)
  }
}

export class OrSpecification<T> implements Specification<T> {
  constructor(
    private left: Specification<T>,
    private right: Specification<T>,
  ) {}

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate)
  }
}

export class NotSpecification<T> implements Specification<T> {
  constructor(private spec: Specification<T>) {}

  isSatisfiedBy(candidate: T): boolean {
    return !this.spec.isSatisfiedBy(candidate)
  }
}

// player.specifications.ts
export class MinorPlayerSpec implements Specification<Player> {
  isSatisfiedBy(player: Player): boolean {
    return player.age < 18
  }
}

export class ActivePlayerSpec implements Specification<Player> {
  isSatisfiedBy(player: Player): boolean {
    return !player.isDeleted
  }
}

export class TeamPlayerSpec implements Specification<Player> {
  constructor(private teamId: string) {}

  isSatisfiedBy(player: Player): boolean {
    return player.teamId === this.teamId
  }
}

// Usage with composition
const eligiblePlayers = new AndSpecification(
  new AndSpecification(new MinorPlayerSpec(), new TeamPlayerSpec('team-123')),
  new ActivePlayerSpec(),
)

const filtered = players.filter((p) => eligiblePlayers.isSatisfiedBy(p))
// Returns: active minors in team-123
```

#### `exceptions/` - Domain Exceptions

**What**: Business rule violation exceptions.

**When to use**:

- Specific business errors
- Better than generic Error

**Example**:

```typescript
// domain.exception.ts
export class DomainException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DomainException'
  }
}

// team-full.exception.ts
export class TeamFullException extends DomainException {
  constructor(teamName: string) {
    super(`Team ${teamName} is full (max 12 players)`)
    this.name = 'TeamFullException'
  }
}
```

#### `types/` - Domain Types

**What**: Shared types, enums, type aliases used across all layers.

**Example**:

```typescript
// category.type.ts
export type Category = 'U7' | 'U9' | 'U11' | 'U13' | 'U15' | 'U17' | 'SENIOR'
```

---

### 2. Application Layer (`core/application/`)

Orchestrates domain objects using **CQRS pattern**. Contains application-specific business rules.

#### `commands/` - Commands (CQRS Write)

**What**: Represent intent to change state (write operations).

**Contains**: Data needed for the operation.

**Example**:

```typescript
// create-team.command.ts
export class CreateTeamCommand {
  constructor(
    public readonly name: string,
    public readonly category: Category,
    public readonly coachIds: string[],
  ) {}
}
```

#### `queries/` - Queries (CQRS Read)

**What**: Read operations optimized for display.

**Can bypass domain layer** for performance.

**Example**:

```typescript
// get-teams-with-stats.query.ts
export class GetTeamsWithStatsQuery {
  constructor(
    public readonly category?: Category,
    public readonly page: number = 1,
    public readonly pageSize: number = 20,
  ) {}
}
```

#### `handlers/` - Command & Query Handlers

**What**: Execute commands and queries. Orchestrate domain objects.

**Example**:

```typescript
// handlers/commands/create-team.handler.ts
export class CreateTeamHandler {
  constructor(
    private teamRepo: ITeamRepository,
    private eventBus: IEventBus,
  ) {}

  async handle(command: CreateTeamCommand): Promise<TeamEntity> {
    // 1. Business validation
    if (command.coachIds.length === 0) {
      throw new Error('Team must have at least one coach')
    }

    // 2. Create entity
    const team = await this.teamRepo.create({
      name: command.name,
      category: command.category,
      coachIds: command.coachIds,
    })

    // 3. Publish domain event
    await this.eventBus.publish({
      type: 'TEAM_CREATED',
      teamId: team.id,
      teamName: team.name,
      occurredAt: new Date(),
    })

    return team
  }
}

// handlers/queries/get-teams-with-stats.handler.ts
export class GetTeamsWithStatsHandler {
  constructor(private supabase: SupabaseClient) {}

  async handle(query: GetTeamsWithStatsQuery): Promise<TeamStatsResponse[]> {
    // ✅ Bypass domain layer for read optimization
    const { data } = await this.supabase.rpc('get_teams_with_stats', {
      category_filter: query.category,
      page_num: query.page,
      page_size: query.pageSize,
    })

    return data as TeamStatsResponse[]
  }
}
```

#### `dtos/` - Application DTOs (Input/Output)

**CRITICAL**: Understand the flow of DTOs across layers.

**The 3 Types of DTOs in Clean Architecture:**

```
┌─────────────────────────────────────────────────┐
│  1. APPLICATION DTOs (Input/Output)            │
│     Location: core/application/dtos/            │
│     Purpose: API contract (UI ↔ Application)   │
├─────────────────────────────────────────────────┤
│  2. DOMAIN ENTITIES                             │
│     Location: core/domain/entities/             │
│     Purpose: Business objects                   │
├─────────────────────────────────────────────────┤
│  3. INFRASTRUCTURE DTOs (Database)              │
│     Location: core/infrastructure/supabase/dtos/│
│     Purpose: DB schema (snake_case)             │
└─────────────────────────────────────────────────┘
```

**INPUT DTOs** (`dtos/inputs/`): Data coming FROM the UI (Create, Update operations)
**OUTPUT DTOs** (`dtos/responses/`): Data going TO the UI (Response, Display)

**Rule**: Application DTOs **use** Domain Types (Category, Role, etc.)

**Example**:

```typescript
// ============================================
// 1. APPLICATION DTOs - INPUT (from UI)
// ============================================
// core/application/dtos/inputs/create-team.input.ts
import { Category } from '@/core/domain/types/category.type'

export interface CreateTeamInput {
  name: string
  category: Category // ✅ Uses Domain Type
  coachIds: string[]
}

// ============================================
// 2. APPLICATION DTOs - OUTPUT (to UI)
// ============================================
// core/application/dtos/responses/team.response.ts
export interface TeamResponse {
  id: string
  name: string
  category: string
  coachName: string
  playerCount: number
  createdAt: string // ISO string for JSON serialization
}

// ============================================
// 3. DOMAIN ENTITY (Business logic)
// ============================================
// core/domain/entities/team.entity.ts
export class TeamEntity {
  constructor(private data: Team) {}

  hasCoach(): boolean {
    return this.coachs.length > 0
  }

  canAddPlayer(): boolean {
    return this.players.length < 12
  }
}

// ============================================
// 4. INFRASTRUCTURE DTO (Database)
// ============================================
// core/infrastructure/supabase/dtos/team.dto.ts
export interface SupabaseTeamDTO {
  id: string
  name: string
  category: string
  coach_id: string // ⚠️ snake_case (DB format)
  created_at: string
  updated_at: string
}

// ============================================
// dtos/pagination.dto.ts
// ============================================
export interface PaginationParams {
  page: number
  pageSize: number
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  totalPages: number
  hasMore: boolean
}
```

**Data Flow - Complete Picture**:

```
UI (React)
  ↓ CreateTeamInput (Application DTO - INPUT)
Adapters (Server Actions)
  ↓ CreateTeamInput
Application (Command Handler)
  ↓ TeamEntity (Domain)
Infrastructure (Repository)
  ↓ SupabaseTeamDTO (DB structure)
DATABASE

DATABASE
  ↑ SupabaseTeamDTO (DB structure)
Infrastructure (Mapper)
  ↑ TeamEntity (Domain)
Application (Query Handler)
  ↑ TeamResponse (Application DTO - OUTPUT)
Adapters (Server Actions)
  ↑ TeamResponse
UI (React)
```

#### `validators/` - Validators

**What**: Zod schemas for input validation.

**Example**:

```typescript
export const CreateTeamSchema = z.object({
  name: z.string().min(2),
  category: z.enum(['U7', 'U9', 'U11']),
  coachIds: z.array(z.string().uuid()).min(1),
})
```

#### `event-handlers/` - Event Handlers

**What**: React to domain events with side effects.

**Example**:

```typescript
export class SendWelcomeEmailHandler {
  async handle(event: PlayerCreatedEvent): Promise<void> {
    await emailService.send({
      to: event.email,
      subject: 'Welcome!',
      template: 'player-welcome',
      data: { playerName: event.playerName },
    })
  }
}
```

#### `ports/` - Ports (Hexagonal)

**What**: Interfaces for external services (NOT data persistence).

**Difference from Repositories**:

- **Repositories**: Data persistence (save, find entities)
- **Ports**: External services (email, SMS, storage)

**Example**:

```typescript
// email.port.ts
export interface IEmailPort {
  send(to: string, subject: string, body: string): Promise<void>
}

// sms.port.ts
export interface ISMSPort {
  send(phone: string, message: string): Promise<void>
}
```

---

### 3. Infrastructure Layer (`core/infrastructure/`)

Concrete implementations of domain interfaces. Depends on external libraries.

#### `supabase/repositories/` - Repository Implementations

**What**: Concrete implementations of repository interfaces.

**Key concept**: Extends an **abstract base repository** with common CRUD operations (DRY principle).

**Why Abstract Base Repository?**

**Problem without base**:

```typescript
// ❌ Duplication in EVERY repository
class TeamRepository {
  async findAll() {
    /* same code everywhere */
  }
  async findById() {
    /* same code everywhere */
  }
  async create() {
    /* same code everywhere */
  }
}

class PlayerRepository {
  async findAll() {
    /* DUPLICATED! */
  }
  async findById() {
    /* DUPLICATED! */
  }
  async create() {
    /* DUPLICATED! */
  }
}
```

**Solution: Abstract base with common CRUD**:

```typescript
// ✅ DRY: Write once, inherit everywhere
export abstract class SupabaseBaseRepository<Entity, DTO extends { id: string }> {
  constructor(
    protected tableName: string,
    protected client: SupabaseClient,
    protected toDomain: (dto: DTO) => Entity,
  ) {}

  async findAll(): Promise<Entity[]> {
    const { data, error } = await this.client.from(this.tableName).select('*')

    if (error) throw this.handleError(error)
    return (data as DTO[]).map(this.toDomain)
  }

  async findById(id: string): Promise<Entity | null> {
    const { data, error } = await this.client.from(this.tableName).select('*').eq('id', id).single()

    if (error) {
      if (error.code === 'PGRST116') return null // Not found
      throw this.handleError(error)
    }

    return this.toDomain(data as DTO)
  }

  async create(input: Partial<DTO>): Promise<Entity> {
    const { data, error } = await this.client.from(this.tableName).insert(input).select().single()

    if (error) throw this.handleError(error)
    return this.toDomain(data as DTO)
  }

  // ... update, delete, etc.

  protected handleError(error: any): Error {
    // Centralized error handling
    return new Error(`Database error: ${error.message}`)
  }
}

// Concrete repository only adds specific methods
export class SupabaseTeamRepository
  extends SupabaseBaseRepository<TeamEntity, SupabaseTeamDTO>
  implements ITeamRepository
{
  constructor(client: SupabaseClient) {
    super('teams', client, toDomain)
  }

  // ✅ Add team-specific methods only
  async findByCategory(category: Category): Promise<TeamEntity[]> {
    const { data, error } = await this.client.from('teams').select('*').eq('category', category)

    if (error) throw this.handleError(error)
    return (data as SupabaseTeamDTO[]).map(this.toDomain)
  }
}
```

#### `supabase/mappers/` - Mappers

**What**: Transform between database DTOs and domain entities.

**Example**:

```typescript
// team.mapper.ts
import { TeamEntity } from '@/core/domain/entities/team.entity'
import { SupabaseTeamDTO } from '../dtos/team.dto'
import { Category } from '@/core/domain/types/category.type'

export const toDomain = (dto: SupabaseTeamDTO): TeamEntity => {
  return new TeamEntity({
    id: dto.id,
    name: dto.name,
    category: dto.category as Category,
    coachId: dto.coach_id, // snake_case → camelCase
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  })
}

export const toPersistence = (entity: TeamEntity): Partial<SupabaseTeamDTO> => {
  return {
    name: entity.name,
    category: entity.category,
    coach_id: entity.coachId, // camelCase → snake_case
  }
}
```

#### `supabase/dtos/` - Database DTOs

**What**: Match database schema (snake_case). NEVER used outside infrastructure layer.

**Example**:

```typescript
export interface SupabaseTeamDTO {
  id: string
  name: string
  category: string
  coach_id: string // ⚠️ snake_case (DB format)
  created_at: string
  updated_at: string
}
```

#### `event-bus/` - Event Bus Implementations

**What**: Publish/subscribe system for domain events.

**Two implementations**:

1. **In-memory** (simple, for dev/test)
2. **Database-backed** (persistent, for production)

---

### 4. Adapters Layer (`core/adapters/`)

**Formerly called "Presentation"**. Adapts external requests to application layer.

**Why "Adapters"?**

- More accurate term from Hexagonal Architecture
- Shows it **adapts** external protocols to internal use cases
- Common in DDD literature

#### `actions/` - Server Actions

**What**: Next.js Server Actions ('use server').

**Example**:

```typescript
'use server'

import { createClient } from '@/core/infrastructure/supabase/clients/server'
import { SupabaseTeamRepository } from '@/core/infrastructure/supabase/repositories/team.repository'
import { CreateTeamCommand } from '@/core/application/commands/create-team.command'
import { CreateTeamHandler } from '@/core/application/handlers/commands/create-team.handler'
import { CreateTeamInput, CreateTeamSchema } from '@/core/application/dtos/inputs/create-team.input'
import { ErrorHandler } from '@/core/shared/error/ErrorHandler'
import { revalidatePath } from 'next/cache'

export async function createTeam(input: CreateTeamInput) {
  try {
    // 1. Validate input
    const validated = CreateTeamSchema.parse(input)

    // 2. Create command
    const command = new CreateTeamCommand(validated.name, validated.category, validated.coachIds)

    // 3. Get dependencies
    const supabase = await createClient()
    const repository = new SupabaseTeamRepository(supabase)
    const handler = new CreateTeamHandler(repository, eventBus)

    // 4. Execute command
    const result = await handler.handle(command)

    // 5. Revalidate
    revalidatePath('/teams')

    return result
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

#### `hooks/` - React Query Hooks

**What**: Client-side data fetching hooks ('use client').

**Example**:

```typescript
'use client'

import { useQuery } from '@tanstack/react-query'
import { getTeams } from '@/actions/teams/read'
import { toast } from 'sonner'

export function useTeams() {
  return useQuery({
    queryKey: ['teams'],
    queryFn: () => getTeams(),
    staleTime: 5 * 60 * 1000,
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })
}
```

---

### 5. Shared Layer (`core/shared/`)

Cross-cutting concerns used by all layers.

#### `decorators/` - Decorators/HOF

**What**: Higher-order functions for common behaviors.

**Example**:

```typescript
export function withErrorHandling<T extends (...args: any[]) => Promise<any>>(fn: T): T {
  return (async (...args) => {
    try {
      return await fn(...args)
    } catch (error) {
      const normalized = ErrorHandler.normalize(error)
      ErrorHandler.log(normalized)
      throw normalized
    }
  }) as T
}
```

---

## 🔄 CQRS Pattern - Command Query Responsibility Segregation

### The Simple Concept

**CQRS = Separate read operations (Queries) from write operations (Commands)**

### The Library Analogy

Imagine a library:

```
📚 TRADITIONAL LIBRARY (without CQRS)
├─ Same system for:
│  ├─ Borrow a book (Write)
│  └─ Browse catalog (Read)
└─ Problem: Slow, not optimized

📚 MODERN LIBRARY (with CQRS)
├─ Borrow Desk (Commands)
│  ├─ Borrow book
│  ├─ Return book
│  └─ Reserve book
│  └─ Optimized for WRITE
│
└─ Online Catalog (Queries)
   ├─ Search books
   ├─ Check availability
   └─ Read summaries
   └─ Optimized for READ
```

### In Your Code

**With CQRS**:

```typescript
// ✅ COMMANDS (Write - Change state)
class CreateTeamCommand {
  constructor(
    public readonly name: string,
    public readonly category: Category,
  ) {}
}

class UpdateTeamCommand {
  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}
}

// ✅ QUERIES (Read - No state change)
class GetTeamByIdQuery {
  constructor(public readonly id: string) {}
}

class GetTeamsWithStatsQuery {
  constructor(
    public readonly category?: Category,
    public readonly includeStats: boolean = true,
  ) {}
}
```

### Why It's Powerful

#### 1. **Separate Optimization**

**Commands** can:

- Strictly validate
- Manage transactions
- Publish events
- Be asynchronous

**Queries** can:

- Use optimized SQL views
- Bypass domain layer
- Use aggressive caching
- Return flat DTOs

```typescript
// Query optimized - bypass domain layer
class GetTeamsWithStatsHandler {
  async handle(query: GetTeamsWithStatsQuery): Promise<TeamStatsResponse[]> {
    // ✅ Direct SQL query optimized
    const { data } = await supabase.rpc('get_teams_with_stats')
    return data // No need to map to entities
  }
}

// Command strict - goes through domain
class CreateTeamHandler {
  async handle(command: CreateTeamCommand): Promise<TeamEntity> {
    // ✅ Full validation
    const team = await this.teamRepo.create(command)
    // ✅ Publish event
    await this.eventBus.publish(new TeamCreatedEvent(team))
    return team
  }
}
```

#### 2. **Different Data Models**

```typescript
// Write Model (normalized, domain-driven)
interface Team {
  id: string
  name: string
  categoryId: string // Foreign key
  coachId: string // Foreign key
}

// Read Model (denormalized, optimized for display)
interface TeamStatsResponse {
  id: string
  name: string
  category: string // ✅ Denormalized (no join)
  coachName: string // ✅ Denormalized
  coachEmail: string // ✅ Denormalized
  playerCount: number // ✅ Pre-calculated
  avgPlayerAge: number // ✅ Pre-calculated
  winRate: number // ✅ Pre-calculated
}
```

#### 3. **Scalability**

```
┌────────────────────────────────────┐
│  Application with CQRS             │
├────────────────────────────────────┤
│  Commands (Write)                  │
│  ├─ Write DB (Master)              │
│  └─ 10% of traffic                 │
├────────────────────────────────────┤
│  Queries (Read)                    │
│  ├─ Read Replica (Redis cache)    │
│  └─ 90% of traffic                 │
└────────────────────────────────────┘
```

### Complete Example

```typescript
// ============================================
// APPLICATION LAYER - Commands
// ============================================

// commands/create-team.command.ts
export class CreateTeamCommand {
  constructor(
    public readonly name: string,
    public readonly category: Category,
    public readonly coachIds: string[],
  ) {}
}

// handlers/commands/create-team.handler.ts
export class CreateTeamHandler {
  constructor(
    private teamRepo: ITeamRepository,
    private eventBus: IEventBus,
  ) {}

  async handle(command: CreateTeamCommand): Promise<TeamEntity> {
    // 1. Business validation
    if (command.coachIds.length === 0) {
      throw new Error('Team must have at least one coach')
    }

    // 2. Create entity
    const team = await this.teamRepo.create({
      name: command.name,
      category: command.category,
      coachIds: command.coachIds,
    })

    // 3. Publish event
    await this.eventBus.publish({
      type: 'TEAM_CREATED',
      teamId: team.id,
      teamName: team.name,
    })

    return team
  }
}

// ============================================
// APPLICATION LAYER - Queries
// ============================================

// queries/get-teams-with-stats.query.ts
export class GetTeamsWithStatsQuery {
  constructor(
    public readonly category?: Category,
    public readonly page: number = 1,
    public readonly pageSize: number = 20,
  ) {}
}

// handlers/queries/get-teams-with-stats.handler.ts
export class GetTeamsWithStatsHandler {
  constructor(private supabase: SupabaseClient) {}

  async handle(query: GetTeamsWithStatsQuery): Promise<TeamStatsResponse[]> {
    // ✅ Optimized SQL query (bypass domain)
    const { data } = await this.supabase.rpc('get_teams_with_stats', {
      category_filter: query.category,
      page_num: query.page,
      page_size: query.pageSize,
    })

    return data as TeamStatsResponse[]
  }
}

// ============================================
// ADAPTERS LAYER - Server Actions
// ============================================

// actions/teams/create.ts
;('use server')

export async function createTeam(input: CreateTeamInput) {
  const command = new CreateTeamCommand(input.name, input.category, input.coachIds)

  const handler = new CreateTeamHandler(teamRepo, eventBus)
  return handler.handle(command)
}

// actions/teams/read.ts
;('use server')

export async function getTeamsWithStats(category?: Category) {
  const query = new GetTeamsWithStatsQuery(category)
  const handler = new GetTeamsWithStatsHandler(supabase)
  return handler.handle(query)
}
```

### When to Use CQRS?

✅ **YES** if:

- Complex application with many reads
- Different optimization needs for read vs write
- Complex reporting needs
- High scalability requirements

❌ **NO** if:

- Simple CRUD application
- Low traffic
- No need for separate optimizations

---

## 📊 Summary: Repositories vs Ports

| Aspect         | Repositories                                    | Ports                            |
| -------------- | ----------------------------------------------- | -------------------------------- |
| **Purpose**    | Data persistence                                | External services                |
| **Layer**      | Domain (interface)                              | Application (interface)          |
| **Examples**   | `ITeamRepository`, `IPlayerRepository`          | `IEmailPort`, `ISMSPort`         |
| **Operations** | `findAll()`, `create()`, `update()`, `delete()` | `send()`, `upload()`, `notify()` |
| **Implements** | Infrastructure repositories                     | Infrastructure services          |

## 📊 Summary: The 3 Types of DTOs

| Aspect         | Application DTOs (Input/Output)   | Domain Entities              | Infrastructure DTOs (Database)         |
| -------------- | --------------------------------- | ---------------------------- | -------------------------------------- |
| **Location**   | `core/application/dtos/`          | `core/domain/entities/`      | `core/infrastructure/supabase/dtos/`   |
| **Purpose**    | API contract (UI ↔ Application)  | Business logic objects       | Database schema mapping                |
| **Format**     | `camelCase`                       | `camelCase`                  | `snake_case` (DB format)               |
| **Examples**   | `CreateTeamInput`, `TeamResponse` | `TeamEntity`, `PlayerEntity` | `SupabaseTeamDTO`, `SupabasePlayerDTO` |
| **Used by**    | Adapters + Application layers     | All layers                   | Infrastructure layer only              |
| **Direction**  | INPUT (from UI) / OUTPUT (to UI)  | Bidirectional (domain logic) | Database persistence only              |
| **Validation** | Zod schemas                       | Business rules (methods)     | None (raw DB data)                     |

**The Golden Rules:**

1. **Application DTOs** use **Domain Types** (`Category`, `Role`, etc.)
2. **Infrastructure DTOs** NEVER leave the infrastructure layer
3. **Mappers** transform between Infrastructure DTOs ↔ Domain Entities
4. **Domain Entities** contain business logic, not just data

## 📊 Summary: Domain Types vs Application DTOs

| Aspect       | Domain Types                      | Application DTOs                  |
| ------------ | --------------------------------- | --------------------------------- |
| **Location** | `core/domain/types/`              | `core/application/dtos/`          |
| **Purpose**  | Core business types               | Input/Output formats              |
| **Examples** | `Category`, `Role`, `MatchStatus` | `CreateTeamInput`, `TeamResponse` |
| **Used by**  | All layers                        | Application + Adapters            |
| **Contains** | Type aliases, enums               | Complex objects with validation   |

**Rule**: Application DTOs **use** Domain Types for consistency.

---

## ⚡ Performance Considerations

### Avoid N+1 Queries

**The N+1 Problem**: Making 1 initial query + N additional queries for each record, instead of fetching efficiently.

#### ❌ BAD: N+1 Query (Multiple Round-trips)

```typescript
// Query Handler - BAD
export class GetTeamsWithCoachsHandler {
  async handle(query: GetTeamsQuery): Promise<TeamResponse[]> {
    // 1. Fetch teams
    const teams = await supabase.from('teams').select('*')

    // 2. For EACH team, fetch coach (N+1 problem!)
    for (const team of teams.data) {
      const { data: coach } = await supabase.from('members').eq('id', team.coach_id).single()

      team.coach = coach // ❌ N queries for N teams!
    }

    return teams.data
  }
}
```

**Result**: 1 + N queries = If 100 teams → **101 queries**

#### ✅ GOOD: Single Query with Joins

```typescript
// Query Handler - GOOD
export class GetTeamsWithCoachsHandler {
  async handle(query: GetTeamsQuery): Promise<TeamResponse[]> {
    // ✅ Single query with nested select
    const { data, error } = await supabase.from('teams').select(`
        *,
        coachs:members!coach_id (
          id,
          name,
          email
        ),
        players:members!team_id (
          id,
          name
        )
      `)

    if (error) throw error
    return data // ✅ 1 query total!
  }
}
```

**Result**: **1 query** for everything (100x faster!)

#### Supabase Nested Queries (Automatic Joins)

Supabase automatically detects foreign keys and performs efficient JOINs:

```typescript
// ✅ Many-to-many relationships (automatic detection)
const { data } = await supabase.from('teams').select(`
    *,
    sessions:sessions_teams (
      sessions (
        day,
        start,
        end,
        gymnase:gymnases (
          name,
          address
        )
      )
    )
  `)
```

**Supabase handles**:

- Automatic foreign key detection
- Join table resolution
- Optimized SQL generation

#### Add Indexes for Foreign Keys

```sql
-- Improve JOIN performance
CREATE INDEX ix_teams_coach_id ON teams(coach_id);
CREATE INDEX ix_sessions_teams_team_id ON sessions_teams(team_id);
CREATE INDEX ix_sessions_teams_session_id ON sessions_teams(session_id);
```

**Performance Impact**:

- 100K records: ~50ms → ~2ms (25x faster)
- 1M records: ~500ms → ~2ms (250x faster)

---

### Caching Strategy

#### React Query (Client-side)

**staleTime**: Controls data freshness ("This data is fresh for X time")
**gcTime**: Controls memory (how long unused data stays in cache)

```typescript
// core/adapters/hooks/teams/useTeams.ts
'use client'

import { useQuery } from '@tanstack/react-query'
import { getTeams } from '@/actions/teams/read'

export function useTeams() {
  return useQuery({
    queryKey: ['teams'],
    queryFn: () => getTeams(),

    // ✅ Data considered fresh for 5 minutes (no refetch)
    staleTime: 5 * 60 * 1000,

    // ✅ Cache kept in memory for 10 minutes after last use
    gcTime: 10 * 60 * 1000,
  })
}
```

#### staleTime Recommendations by Data Type

| Data Type                              | staleTime                 | Rationale                     |
| -------------------------------------- | ------------------------- | ----------------------------- |
| **Real-time data** (live scores)       | `0`                       | Always fetch latest           |
| **Frequently updated** (matches)       | `1 * 60 * 1000` (1 min)   | Balance freshness/performance |
| **Moderate updates** (teams, players)  | `5 * 60 * 1000` (5 min)   | Good for most CRUD            |
| **Rarely updated** (documents, config) | `15 * 60 * 1000` (15 min) | Reduce network calls          |
| **Static data** (gymnases, categories) | `Infinity`                | Never refetch                 |

#### Example: Different staleTime per Data Type

```typescript
// Real-time scores (always fresh)
export function useMatchScore(matchId: string) {
  return useQuery({
    queryKey: ['match-score', matchId],
    queryFn: () => getMatchScore(matchId),
    staleTime: 0, // ✅ Always refetch
    refetchInterval: 30000, // ✅ Poll every 30s
  })
}

// Static data (never changes)
export function useGymnases() {
  return useQuery({
    queryKey: ['gymnases'],
    queryFn: () => getGymnases(),
    staleTime: Infinity, // ✅ Never refetch
    gcTime: Infinity, // ✅ Keep forever
  })
}
```

#### Memory Management with gcTime

```typescript
export function useTeams() {
  return useQuery({
    queryKey: ['teams'],
    queryFn: () => getTeams(),
    staleTime: 5 * 60 * 1000,

    // ✅ After 10 min of no usage → garbage collected
    gcTime: 10 * 60 * 1000,
  })
}
```

**Rule**: `staleTime <= gcTime` (always)

---

### Pagination

#### Cursor-based vs Offset-based

**Performance Comparison** (1M records):

| Method           | Page 1 | Page 1000 | Page 10000 |
| ---------------- | ------ | --------- | ---------- |
| **Offset-based** | ~2ms   | ~500ms    | ~5000ms ⚠️ |
| **Cursor-based** | ~2ms   | ~2ms ✅   | ~2ms ✅    |

#### ❌ Offset-based Pagination (Slow for Large Datasets)

```typescript
// Query Handler - Offset-based
export class GetTeamsPaginatedHandler {
  async handle(query: GetTeamsPaginatedQuery): Promise<PaginatedResponse<Team>> {
    const { page = 1, pageSize = 20 } = query

    // ❌ PostgreSQL must skip (page-1)*pageSize rows
    const { data, error, count } = await supabase
      .from('teams')
      .select('*', { count: 'exact' })
      .range((page - 1) * pageSize, page * pageSize - 1)

    return {
      items: data,
      total: count,
      page,
      totalPages: Math.ceil(count / pageSize),
    }
  }
}
```

**Problem**:

- Page 1000 → PostgreSQL walks 20,000 rows before returning 20
- Slow for large datasets
- Inconsistent results if data changes during pagination

#### ✅ Cursor-based Pagination (Fast & Consistent)

```typescript
// Query Handler - Cursor-based
export class GetTeamsPaginatedHandler {
  async handle(query: GetTeamsPaginatedQuery): Promise<CursorPaginatedResponse<Team>> {
    const { cursor, pageSize = 20 } = query

    // ✅ Use WHERE clause (indexed column)
    let queryBuilder = supabase
      .from('teams')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(pageSize + 1) // Fetch 1 extra to detect "hasMore"

    if (cursor) {
      // ✅ Start after cursor (fast with index)
      queryBuilder = queryBuilder.lt('created_at', cursor)
    }

    const { data, error } = await queryBuilder

    const hasMore = data.length > pageSize
    const items = hasMore ? data.slice(0, -1) : data
    const nextCursor = hasMore ? items[items.length - 1].created_at : null

    return {
      items,
      nextCursor,
      hasMore,
    }
  }
}
```

**Advantages**:

- ✅ Constant performance (~2ms regardless of page)
- ✅ No missing/duplicate items
- ✅ Works with infinite scroll

#### Pagination DTOs

```typescript
// core/application/dtos/pagination.dto.ts

// Offset-based (simple, but slow for large datasets)
export interface OffsetPaginationParams {
  page: number
  pageSize: number
}

export interface OffsetPaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  totalPages: number
  hasMore: boolean
}

// Cursor-based (fast, scalable)
export interface CursorPaginationParams {
  cursor?: string // Timestamp or ID of last item
  pageSize: number
}

export interface CursorPaginatedResponse<T> {
  items: T[]
  nextCursor: string | null
  hasMore: boolean
}
```

#### React Hook with Cursor Pagination

```typescript
// core/adapters/hooks/teams/useTeamsInfinite.ts
'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { getTeamsPaginated } from '@/actions/teams/read'

export function useTeamsInfinite(pageSize = 20) {
  return useInfiniteQuery({
    queryKey: ['teams', 'infinite'],
    queryFn: ({ pageParam }) =>
      getTeamsPaginated({
        cursor: pageParam,
        pageSize,
      }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 5 * 60 * 1000,
  })
}
```

---

### Additional Performance Tips

#### 1. Specific Field Selection (Reduce Payload)

```typescript
// ❌ BAD: Fetch everything
const { data } = await supabase.from('teams').select('*')

// ✅ GOOD: Only needed fields
const { data } = await supabase.from('teams').select('id, name, category')
```

#### 2. Database Views for Complex Queries

```sql
-- Create materialized view for expensive aggregations
CREATE MATERIALIZED VIEW teams_with_stats AS
SELECT
  t.id,
  t.name,
  t.category,
  COUNT(DISTINCT p.id) as player_count,
  COUNT(DISTINCT m.id) as match_count,
  AVG(m.score_for) as avg_score
FROM teams t
LEFT JOIN members p ON p.team_id = t.id
LEFT JOIN matchs m ON m.team_id = t.id
GROUP BY t.id;

-- Refresh periodically (cron job)
REFRESH MATERIALIZED VIEW teams_with_stats;
```

```typescript
// Query Handler - Use materialized view
const { data } = await supabase.from('teams_with_stats').select('*')
// ✅ 10x faster than computing on-the-fly
```

#### 3. React Query Prefetching

```typescript
// Prefetch on hover (predictive loading)
export function TeamCard({ teamId }: { teamId: string }) {
  const queryClient = useQueryClient()

  const prefetchTeam = () => {
    queryClient.prefetchQuery({
      queryKey: ['team', teamId],
      queryFn: () => getTeam(teamId),
    })
  }

  return (
    <div onMouseEnter={prefetchTeam}>
      {/* ✅ Data ready before click */}
    </div>
  )
}
```

#### 4. Query Cancellation (Search)

```typescript
export function useTeamSearch(searchTerm: string) {
  return useQuery({
    queryKey: ['teams', 'search', searchTerm],
    queryFn: ({ signal }) =>
      // ✅ Pass abort signal
      fetch(`/api/teams/search?q=${searchTerm}`, { signal }),
    enabled: searchTerm.length >= 3,
  })
}
```

---

### Performance Checklist

- [ ] No N+1 queries (use Supabase nested selects)
- [ ] Foreign key indexes created
- [ ] staleTime configured per data type
- [ ] Cursor-based pagination for large lists
- [ ] Materialized views for expensive aggregations
- [ ] Prefetching on hover for common navigation
- [ ] Query cancellation for search
- [ ] Select only needed fields (avoid `select('*')`)
- [ ] gcTime configured to prevent memory leaks
