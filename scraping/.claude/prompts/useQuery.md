# React Query (TanStack Query) Best Practices

This document outlines the best practices for implementing React Query hooks in this project.

## Core Concepts

### Query Keys

Query keys are used for caching, refetching, and invalidation. Use hierarchical keys for better organization:

```typescript
// ✅ Good: Hierarchical keys
;['players'][('players', 'paginated', page, pageSize)][('players', playerId)][ // All players // Paginated players // Single player
  ('players', playerId, 'stats')
][('teams', teamId, 'players')][ // Player stats // Players by team
  // ❌ Bad: Flat keys
  'allPlayers'
]['playerById']
```

### StaleTime vs CacheTime (gcTime)

- **staleTime**: How long data is considered "fresh" (default: 0ms)
- **gcTime** (formerly cacheTime): How long inactive data stays in cache (default: 5 minutes)

```typescript
// ✅ Recommended staleTime values
staleTime: 0 // Real-time data (default)
staleTime: 30 * 1000 // 30 seconds - Frequently changing data
staleTime: 2 * 60 * 1000 // 2 minutes - Moderately changing data
staleTime: 5 * 60 * 1000 // 5 minutes - Stable data
staleTime: Infinity // Static data (never refetch automatically)
```

---

## Basic Patterns

### 1. Simple Query Hook

```typescript
import { useQuery } from '@tanstack/react-query'
import { readPlayers } from '@/actions/players/read'

export function usePlayers() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}
```

### 2. Parameterized Query Hook

```typescript
export function usePlayer(playerId: string) {
  return useQuery({
    queryKey: ['players', playerId],
    queryFn: () => readPlayer(playerId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!playerId, // Only run if playerId exists
  })
}
```

### 3. Paginated Query Hook

```typescript
export function usePlayersPaginated(page: number, pageSize = 20) {
  return useQuery({
    queryKey: ['players', 'paginated', page, pageSize],
    queryFn: () => getPlayersPaginated({ page, pageSize }),
    placeholderData: (previousData) => previousData, // Keep previous page data while loading new page (replaces keepPreviousData)
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}
```

### 4. Infinite Query Hook (Infinite Scrolling)

```typescript
import { useInfiniteQuery } from '@tanstack/react-query'

export function usePlayersInfinite(pageSize = 20) {
  return useInfiniteQuery({
    queryKey: ['players', 'infinite'],
    queryFn: ({ pageParam = 0 }) => getPlayersPaginated({ page: pageParam, pageSize }),
    getNextPageParam: (lastPage, allPages) => {
      // Return next page number or undefined if no more pages
      return lastPage.hasMore ? allPages.length : undefined
    },
    getPreviousPageParam: (firstPage, allPages) => {
      return allPages.length > 1 ? allPages.length - 2 : undefined
    },
    staleTime: 2 * 60 * 1000,
  })
}

// Usage in component
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePlayersInfinite()
```

---

## Advanced Patterns

### 5. Dependent Queries

Execute queries sequentially when one depends on another:

```typescript
export function useTeamPlayers(teamId: string) {
  // First query: Get team
  const { data: team } = useQuery({
    queryKey: ['teams', teamId],
    queryFn: () => readTeam(teamId),
    enabled: !!teamId,
  })

  // Second query: Get players (depends on team)
  const { data: players } = useQuery({
    queryKey: ['teams', teamId, 'players'],
    queryFn: () => readPlayersByTeam(teamId),
    enabled: !!team, // Only run if team exists
  })

  return { team, players }
}
```

### 6. Parallel Queries

Fetch multiple independent queries simultaneously:

```typescript
export function useTeamDetails(teamId: string) {
  const teamQuery = useQuery({
    queryKey: ['teams', teamId],
    queryFn: () => readTeam(teamId),
  })

  const playersQuery = useQuery({
    queryKey: ['teams', teamId, 'players'],
    queryFn: () => readPlayersByTeam(teamId),
  })

  const matchesQuery = useQuery({
    queryKey: ['teams', teamId, 'matches'],
    queryFn: () => readMatchesByTeam(teamId),
  })

  return {
    team: teamQuery.data,
    players: playersQuery.data,
    matches: matchesQuery.data,
    isLoading: teamQuery.isLoading || playersQuery.isLoading || matchesQuery.isLoading,
  }
}
```

Or use `useQueries` for dynamic parallel queries:

```typescript
import { useQueries } from '@tanstack/react-query'

export function useMultiplePlayers(playerIds: string[]) {
  return useQueries({
    queries: playerIds.map((id) => ({
      queryKey: ['players', id],
      queryFn: () => readPlayer(id),
      staleTime: 5 * 60 * 1000,
    })),
  })
}
```

### 7. Prefetching Data

Prefetch data before it's needed for instant loading:

```typescript
import { useQueryClient } from '@tanstack/react-query'

export function useTeamPrefetch() {
  const queryClient = useQueryClient()

  const prefetchTeam = async (teamId: string) => {
    await queryClient.prefetchQuery({
      queryKey: ['teams', teamId],
      queryFn: () => readTeam(teamId),
      staleTime: 5 * 60 * 1000,
    })
  }

  return { prefetchTeam }
}

// Usage in component
const { prefetchTeam } = useTeamPrefetch()

<Link
  href={`/teams/${team.id}`}
  onMouseEnter={() => prefetchTeam(team.id)} // Prefetch on hover
>
  {team.name}
</Link>
```

### 8. Optimistic Updates

Update UI immediately before server response:

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdatePlayer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updatePlayer,

    // Optimistic update
    onMutate: async (updatedPlayer) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['players', updatedPlayer.id] })

      // Snapshot previous value
      const previousPlayer = queryClient.getQueryData(['players', updatedPlayer.id])

      // Optimistically update
      queryClient.setQueryData(['players', updatedPlayer.id], updatedPlayer)

      // Return context with snapshot
      return { previousPlayer }
    },

    // On error, rollback
    onError: (err, updatedPlayer, context) => {
      queryClient.setQueryData(['players', updatedPlayer.id], context?.previousPlayer)
    },

    // Always refetch after success or error
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries({ queryKey: ['players', variables.id] })
    },
  })
}
```

### 9. Cache Manipulation

Manually update cache without refetching:

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreatePlayer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createPlayer,

    onSuccess: (newPlayer) => {
      // Option 1: Invalidate to trigger refetch
      queryClient.invalidateQueries({ queryKey: ['players'] })

      // Option 2: Manually add to cache (avoids refetch)
      queryClient.setQueryData(['players'], (old: Player[] | undefined) => {
        return old ? [...old, newPlayer] : [newPlayer]
      })

      // Option 3: Set individual item cache
      queryClient.setQueryData(['players', newPlayer.id], newPlayer)
    },
  })
}
```

### 10. Retry Logic

Configure retry behavior for failed queries:

```typescript
export function usePlayersWithRetry() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    retry: 3, // Retry 3 times on failure
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })
}

// Or disable retry
export function usePlayersNoRetry() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    retry: false, // Don't retry on failure
  })
}
```

### 11. Background Refetching

Control when queries refetch in the background:

```typescript
export function usePlayersWithRefetch() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    refetchOnWindowFocus: true, // Refetch when window regains focus (default: true)
    refetchOnReconnect: true, // Refetch on network reconnect (default: true)
    refetchOnMount: true, // Refetch on component mount (default: true)
  })
}

// For real-time data
export function useMatchLiveScore(matchId: string) {
  return useQuery({
    queryKey: ['matches', matchId, 'score'],
    queryFn: () => readMatchScore(matchId),
    refetchInterval: 10 * 1000, // Refetch every 10 seconds
    staleTime: 0, // Always consider stale
  })
}
```

### 12. Select Data Transformation

Transform or select subset of data:

```typescript
export function usePlayerNames() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    select: (data) => data.map((player) => player.name), // Transform data
    staleTime: 5 * 60 * 1000,
  })
}

export function useActivePlayer(playerId: string) {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    select: (data) => data.find((player) => player.id === playerId), // Select single item
  })
}
```

---

## Mutation Patterns

### Basic Mutation

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useDeletePlayer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deletePlayer,
    onSuccess: (data, playerId) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['players'] })
      queryClient.invalidateQueries({ queryKey: ['players', playerId] })
    },
  })
}

// Usage
const { mutate, isPending, isError, error } = useDeletePlayer()
mutate(playerId)
```

### Mutation with Loading States

```typescript
export function useCreateTeam() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTeam,
    onMutate: () => {
      // Can show loading indicator
    },
    onSuccess: (newTeam) => {
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      // Show success toast
    },
    onError: (error) => {
      // Show error toast
    },
    onSettled: () => {
      // Always runs, can hide loading indicator
    },
  })
}
```

---

## Performance Optimization

### 1. Structural Sharing

React Query automatically uses structural sharing to prevent unnecessary re-renders:

```typescript
// No configuration needed, automatic by default
export function usePlayers() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    // structuralSharing: true (default)
  })
}
```

### 2. Query Cancellation

Cancel ongoing queries when component unmounts:

```typescript
export function useSearchPlayers(searchTerm: string) {
  return useQuery({
    queryKey: ['players', 'search', searchTerm],
    queryFn: async ({ signal }) => {
      // Pass AbortSignal to fetch
      const response = await fetch(`/api/players?search=${searchTerm}`, { signal })
      return response.json()
    },
    enabled: searchTerm.length > 2,
  })
}
```

### 3. Initial Data

Provide initial data to avoid loading states:

```typescript
export function usePlayer(playerId: string) {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['players', playerId],
    queryFn: () => readPlayer(playerId),
    initialData: () => {
      // Use data from 'players' list cache if available
      const players = queryClient.getQueryData<Player[]>(['players'])
      return players?.find((p) => p.id === playerId)
    },
  })
}
```

---

## Error Handling

### Query Error Boundaries

```typescript
import { useQuery } from '@tanstack/react-query'

export function usePlayersWithError() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    throwOnError: true, // Throw error to Error Boundary
  })
}
```

### Custom Error Handling

```typescript
export function usePlayersWithCustomError() {
  return useQuery({
    queryKey: ['players'],
    queryFn: readPlayers,
    retry: (failureCount, error) => {
      // Don't retry on 404
      if (error.status === 404) return false
      return failureCount < 3
    },
  })
}
```

---

## Common Pitfalls to Avoid

### ❌ Don't use object query keys incorrectly

```typescript
// ❌ Bad: Objects with different references
queryKey: [{ status: 'active' }] // Creates new object each render

// ✅ Good: Primitives or stable references
queryKey: ['players', 'active']
```

### ❌ Don't forget to enable/disable queries

```typescript
// ❌ Bad: Query runs even without required data
useQuery({
  queryKey: ['players', playerId],
  queryFn: () => readPlayer(playerId),
})

// ✅ Good: Query only runs when playerId exists
useQuery({
  queryKey: ['players', playerId],
  queryFn: () => readPlayer(playerId),
  enabled: !!playerId,
})
```

### ❌ Don't invalidate too broadly

```typescript
// ❌ Bad: Invalidates ALL queries
queryClient.invalidateQueries()

// ✅ Good: Specific invalidation
queryClient.invalidateQueries({ queryKey: ['players'] })
```

---

## Summary Cheat Sheet

| Use Case        | Pattern               | Example                                                     |
| --------------- | --------------------- | ----------------------------------------------------------- |
| Basic fetch     | `useQuery`            | `useQuery({ queryKey: ['players'], queryFn: readPlayers })` |
| With params     | `useQuery` + enabled  | `enabled: !!playerId`                                       |
| Pagination      | `placeholderData`     | `placeholderData: (prev) => prev`                           |
| Infinite scroll | `useInfiniteQuery`    | `getNextPageParam: (lastPage) => ...`                       |
| Real-time       | `refetchInterval`     | `refetchInterval: 10000`                                    |
| Prefetch        | `prefetchQuery`       | `queryClient.prefetchQuery(...)`                            |
| Optimistic      | `onMutate` + rollback | See example #8                                              |
| Parallel        | Multiple `useQuery`   | See example #6                                              |
| Dependent       | `enabled` chain       | See example #5                                              |
| Transform       | `select`              | `select: (data) => data.map(...)`                           |

---

## Project-Specific Recommendations

### StaleTime by Entity Type

```typescript
// Real-time data (scores, live stats)
staleTime: 0

// Frequently updated (matches, news)
staleTime: 1 * 60 * 1000 // 1 minute

// Moderate updates (players, teams, coaches)
staleTime: 5 * 60 * 1000 // 5 minutes

// Rarely updated (gymnases, categories, documents)
staleTime: 15 * 60 * 1000 // 15 minutes

// Static data (archived seasons, historical data)
staleTime: Infinity
```

### Common Query Keys

```typescript
// Follow this hierarchical structure
;['players'][('players', playerId)][('players', 'team', teamId)]['teams'][('teams', teamId)][ // All players // Single player // Players by team // All teams // Single team
  'matches'
][('matches', matchId)][('matches', 'team', teamId)][('matches', 'upcoming')]['documents'][ // All matches // Single match // Matches by team // Upcoming matches // All documents
  ('documents', 'category', category)
]['news'][('news', slug)] // Documents by category // All news (from Sanity) // Single news article
```
