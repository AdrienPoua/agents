# Continuous-improve backlog

> State that survives across runs (git-committed). The skill reads this at Plan to pick the next subject, and updates it at Execute. Keep it terse and factual — it is a working ledger, not prose. One run = one subject moved forward.

## Themes

High-level areas this repo wants improved, in rough priority order. Seeded on the first run by surveying the repo; refined over time. Examples of theme kinds (replace with what THIS repo actually needs): correctness/bugs, test coverage, type safety, performance, security, accessibility, DX/tooling, documentation, UX, dependency hygiene.

| Theme | Why it matters here | Priority |
|---|---|---|
| _e.g. test coverage_ | _critical paths untested_ | high |

## Backlog (candidate subjects)

| Subject | Theme | Status | Notes |
|---|---|---|---|
| _short id, e.g. `tests:auth-flow`_ | test coverage | todo | _scope hint_ |

Status values: `todo` → `in-progress` → `done` (or `validated ✓` if audited and already optimal, no change needed).

## Run history

Append one line per run (newest last). This is the audit trail and the signal for when to stop scheduling.

| Date | Subject | Outcome | PR |
|---|---|---|---|
| _YYYY-MM-DD_ | _subject_ | shipped \| no-op \| rejected | _link_ |

> When several consecutive runs are no-ops and no high-impact subject remains, the repo is "solid" — recommend spacing out or disabling the schedule rather than inventing work.
