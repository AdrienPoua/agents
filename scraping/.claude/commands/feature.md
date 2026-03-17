# Feature Command

Implement a complete feature following Clean Architecture principles.

## Usage

```
/feature [feature name] [description]
```

## Examples

```
/feature player-management Add CRUD operations for players
/feature match-calendar Display upcoming matches in a calendar view
/feature team-stats Show team statistics with charts
```

## What This Command Does

This command guides you through implementing a complete feature with:

1. **Domain Layer**: Entities, repository interfaces, domain DTOs
2. **Infrastructure Layer**: Supabase implementation, mappers, infrastructure DTOs
3. **Application Layer**: Use cases, application DTOs with Zod validation
4. **Presentation Layer**: Server Actions, React Query hooks
5. **UI Layer**: Next.js pages and React components

## Process

### Step 1: Understand the Feature

Ask clarifying questions:

- What entities are involved?
- What CRUD operations are needed?
- Is this for public or admin area?
- Any special business rules?
- Integration with existing features?

### Step 2: Plan the Implementation

Create a detailed plan using TodoWrite with tasks for:

- Domain layer creation
- Infrastructure implementation
- Application layer with use cases
- Presentation layer (actions + hooks)
- UI components and pages
- Testing considerations

### Step 3: Implement Layer by Layer

Follow the Clean Architecture agent guidelines:

**Domain Layer** (core/domain/):

- Create entity in `entities/[name].entity.ts`
- Define repository interface in `repositories/[name].repository.ts`
- Create domain DTOs in `dtos/[name].dto.ts`

**Infrastructure Layer** (core/infrastructure/supabase/):

- Create Supabase DTOs in `dtos/[name].dto.ts`
- Implement mappers in `mappers/[name].mapper.ts`
- Create repository in `repositories/[name].repository.ts`
- Register in `repositories/factory.repository.ts`

**Application Layer** (core/application/):

- Create DTOs with Zod in `dtos/[name].dto.ts`
- Implement use cases in `usecases/[Name]/`

**Presentation Layer** (core/presentation/):

- Create server actions in `actions/[names]/`
- Create React Query hooks in `hooks/[names]/`

**UI Layer** (src/):

- Create page in `app/(site|dashboard|blog)/[route]/page.tsx`
- Create components in `components/[feature]/`

### Step 4: Review and Test

- Verify all layers are properly connected
- Check error handling
- Ensure TypeScript types are correct
- Test with pnpm fix (linting)
- Verify paths use aliases (@/)

## Template Response

When this command is invoked, respond with:

"I'll help you implement the [feature name] feature following Clean Architecture.

Let me clarify a few things first:

1. [Question about entities]
2. [Question about operations]
3. [Question about user access]
4. [Any other clarifications]

Once confirmed, I'll create a complete implementation plan with all layers."

## Example Implementation

For `/feature player-management Add CRUD for players`:

```
I'll implement a complete player management feature with CRUD operations.

### Clarifications:
1. Player entity fields: name, team, position, jersey number?
2. Operations needed: Create, Read, Update, Delete, List all?
3. Access: Admin only or public viewing?
4. Relationships: Link to existing teams?

### Implementation Plan:

**Domain Layer:**
- Player entity with fields
- IPlayerRepository interface
- Player domain DTOs

**Infrastructure Layer:**
- SupabasePlayerDTO (snake_case mapping)
- Player mappers (entity ↔ Supabase)
- SupabasePlayerRepository implementation
- Register in RepositoryFactory

**Application Layer:**
- CreatePlayerInput/UpdatePlayerInput with Zod
- Use cases: GetAllPlayers, GetPlayer, CreatePlayer, UpdatePlayer, DeletePlayer

**Presentation Layer:**
- Server actions: getPlayers, getPlayer, createPlayer, updatePlayer, deletePlayer
- Hooks: usePlayers, usePlayer, useCreatePlayer, useUpdatePlayer, useDeletePlayer

**UI Layer:**
- Admin page: /admin/players
- Components: PlayerList, PlayerForm, PlayerCard
- Forms with react-hook-form + Zod

Ready to proceed?
```

## Notes

- Always follow the existing patterns in the codebase
- Use path aliases (@/) for imports
- Include proper error handling
- Add loading and error states
- Use shadcn/ui components
- Follow mobile-first responsive design
- Validate all inputs with Zod
- Use Server Components where possible
