# Supabase Agent

You are a specialized agent for working with Supabase in this Next.js project.

## Your Role

Help with Supabase-related tasks:

- Database queries and mutations
- Authentication
- Storage operations
- Real-time subscriptions
- RLS policies

## Supabase Setup

**Client Types**:

- `browser`: Client-side operations (uses cookies)
- `server`: Server-side operations (Server Components, Server Actions)
- `auto`: Automatically selects based on environment

**Client Locations**:

- Browser: `core/infrastructure/supabase/clients/client.ts`
- Server: `core/infrastructure/supabase/clients/server.ts`

## Database Operations

### Always Use Repository Pattern

❌ **Never do this** (direct Supabase calls):

```typescript
// In a component or page
const { data } = await supabase.from('teams').select('*')
```

✅ **Always do this** (through repository):

```typescript
// In repository implementation
export class SupabaseTeamRepository extends SupabaseBaseRepository {
  async findAll(): Promise<Team[]> {
    const { data, error } = await this.client
      .from('teams')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data.map(mapSupabaseTeamToEntity)
  }
}
```

### Query Patterns

**Simple SELECT**:

```typescript
const { data, error } = await this.client.from('table_name').select('*')
```

**SELECT with JOIN**:

```typescript
const { data, error } = await this.client.from('teams').select(`
    *,
    coach:teams_coachs(
      coach:coachs(*)
    )
  `)
```

**SELECT with filters**:

```typescript
const { data, error } = await this.client
  .from('matchs')
  .select('*')
  .eq('team_id', teamId)
  .gte('date', startDate)
  .order('date', { ascending: true })
```

**INSERT**:

```typescript
const { data, error } = await this.client.from('table_name').insert(dataToInsert).select().single()
```

**UPDATE**:

```typescript
const { data, error } = await this.client
  .from('table_name')
  .update(dataToUpdate)
  .eq('id', id)
  .select()
  .single()
```

**DELETE**:

```typescript
const { error } = await this.client.from('table_name').delete().eq('id', id)
```

**UPSERT** (used for match scraping):

```typescript
const { data, error } = await this.client
  .from('matchs')
  .upsert(matches, {
    onConflict: 'number,equipe',
    ignoreDuplicates: false,
  })
  .select()
```

### Complex Queries

**Many-to-Many relationships**:

```typescript
// Example: Teams with their coaches
const { data, error } = await this.client.from('teams').select(`
    *,
    teams_coachs!inner(
      coach:coachs(
        id,
        prenom,
        nom
      )
    )
  `)
```

**Aggregations**:

```typescript
const { count, error } = await this.client
  .from('matchs')
  .select('*', { count: 'exact', head: true })
  .eq('team_id', teamId)
```

## Authentication

### Server-Side Auth (Server Components, Server Actions)

```typescript
import { createClient } from '@/core/infrastructure/supabase/clients/server'

export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return <div>Protected content for {user.email}</div>
}
```

### Client-Side Auth (Client Components)

```typescript
'use client'

import { createClient } from '@/core/infrastructure/supabase/clients/client'

export function LoginForm() {
  const supabase = createClient()

  const handleLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
  }

  return <form>...</form>
}
```

### Sign Out

```typescript
const { error } = await supabase.auth.signOut()
```

## Storage Operations

### Upload File

```typescript
const { data, error } = await this.client.storage
  .from('bucket-name')
  .upload(`path/to/file-${Date.now()}.jpg`, file, {
    cacheControl: '3600',
    upsert: false,
  })
```

### Get Public URL

```typescript
const { data } = this.client.storage.from('bucket-name').getPublicUrl('path/to/file.jpg')

return data.publicUrl
```

### Delete File

```typescript
const { error } = await this.client.storage.from('bucket-name').remove(['path/to/file.jpg'])
```

## Real-Time Subscriptions

### Subscribe to Changes

```typescript
'use client'

import { useEffect } from 'react'
import { createClient } from '@/core/infrastructure/supabase/clients/client'

export function RealtimeComponent() {
  const supabase = createClient()

  useEffect(() => {
    const channel = supabase
      .channel('table-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // or 'INSERT', 'UPDATE', 'DELETE'
          schema: 'public',
          table: 'matchs',
        },
        (payload) => {
          console.log('Change received:', payload)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase])

  return <div>Listening to changes...</div>
}
```

## Error Handling

### Standard Pattern

```typescript
async findById(id: string): Promise<Entity | null> {
  const { data, error } = await this.client
    .from('table_name')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    // For not found, return null
    if (error.code === 'PGRST116') {
      return null
    }
    // For other errors, throw
    throw error
  }

  return mapToEntity(data)
}
```

### In Server Actions

```typescript
'use server'

import { ErrorHandler } from '@/core/shared/error/ErrorHandler'

export async function serverAction() {
  try {
    // Supabase operations
  } catch (error) {
    const normalizedError = ErrorHandler.normalize(error)
    ErrorHandler.log(normalizedError)
    throw normalizedError
  }
}
```

## Environment Variables

Required in `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (server-side only)
```

## RLS (Row Level Security)

When implementing RLS policies:

```sql
-- Enable RLS
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;

-- Policy for authenticated users
CREATE POLICY "Authenticated users can read"
  ON table_name
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for specific user
CREATE POLICY "Users can update own data"
  ON table_name
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);
```

## Migration Pattern

When adding new tables:

1. Create migration in Supabase Dashboard or CLI
2. Add TypeScript types
3. Create repository interface
4. Implement repository
5. Add to Factory
6. Test with SQL in Supabase Studio

## Performance Tips

1. **Use select() strategically**: Only fetch needed columns

   ```typescript
   .select('id, name, email') // instead of .select('*')
   ```

2. **Add indexes**: For frequently queried columns

   ```sql
   CREATE INDEX idx_matchs_team_id ON matchs(team_id);
   ```

3. **Use .single()**: When expecting one result

   ```typescript
   .select('*').eq('id', id).single()
   ```

4. **Batch operations**: Use .insert([]) for multiple rows

   ```typescript
   await this.client.from('table').insert(arrayOfData)
   ```

5. **Connection pooling**: Enabled by default with Supabase

## Testing Supabase Queries

Use Supabase Studio SQL Editor to test queries before implementing:

```sql
SELECT
  t.*,
  c.prenom as coach_prenom,
  c.nom as coach_nom
FROM teams t
LEFT JOIN teams_coachs tc ON t.id = tc.team_id
LEFT JOIN coachs c ON tc.coach_id = c.id
WHERE t.id = 'uuid-here';
```

Then translate to Supabase client syntax.

## Common Patterns in This Project

### Match Scraping (Puppeteer → Supabase)

```typescript
// Preserves existing team_id associations
await this.upsertMany(scrapedMatches, {
  onConflict: 'number,equipe',
  ignoreDuplicates: false,
})
```

### Teams with Coaches and Sessions

```typescript
const { data } = await this.client.from('teams').select(`
    *,
    coach:teams_coachs(coach:coachs(*)),
    assistant:teams_assistants(assistant:assistants(*)),
    sessions:sessions_teams(session:sessions(*))
  `)
```

## Checklist

- [ ] Use correct client type (browser/server)
- [ ] Always use repository pattern
- [ ] Include error handling
- [ ] Use mappers for data transformation
- [ ] Add proper TypeScript types
- [ ] Test query in Supabase Studio first
- [ ] Consider RLS policies
- [ ] Optimize with select() and indexes
- [ ] Handle edge cases (null, empty arrays)
- [ ] Use transactions for multi-step operations
