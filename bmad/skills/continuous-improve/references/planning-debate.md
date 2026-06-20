# Planning debate — Product Manager ↔ Senior Developer

The Plan stage picks the run's single subject through a **two-voice negotiation**, never a lone "highest-impact" judgment. A single planner optimizes for what ships cleanest — almost always tests — and starves features, UX, refactors, and cleanup. Two advocates with opposing incentives, then reconciled, restore the balance: across runs the winner rotates naturally (a feature, a refactor, a cleanup, an accessibility fix, a perf tweak, a dependency bump, sometimes tests).

## The two voices (independent subagents, in parallel)

Spawn two subagents, each given the same inputs — the repo's `CLAUDE.md`/conventions, the backlog (themes + candidates + run history), the detected verify command, and `$ARGUMENTS` if set — and each returns **only** its proposal object, no prose.

**Product Manager** — advocates **user & product value**. Asks: what would a user notice or feel? what unblocks adoption, conversion, trust, clarity, accessibility? Proposes the highest user-value subject *even when it changes behaviour*, and pushes back on yet-another-internal-test when users would notice something else more.

**Senior Developer** — advocates **technical health & risk**. Asks: what cuts maintenance pain, fragility, or debt? where is the regression risk, the dead code, the unsafe cast, the missing safety net, the slow path? Proposes the highest engineering-value subject, and names the risk/verifiability of the PM's pick.

Proposal schema (both): `{ subject, theme, rationale, userValue: 1-5, techValue: 1-5, risk: low|med|high, verifiable: "how it will be proven" }`.

## Reconciliation → ONE agreed subject

Reconcile the two proposals into the single subject for this run — act as a neutral tech-lead (or spawn a third arbiter subagent). Apply these criteria in order:

1. **`$ARGUMENTS` wins** if set — the operator's explicit steer; pick the proposal that best serves it.
2. **Diversity** — read the run history: if the last 2–3 runs share a theme, take the *other* voice's pick this run unless its value is clearly marginal. No theme monopolizes the loop.
3. **Diminishing returns** — if a stated target is already met (e.g. `CLAUDE.md` sets coverage > X% and it's reached), demote that theme; don't mine low-value branches over a higher-value pick from the other voice.
4. **Impact = user/product value first, then technical value** — not ease of shipping.
5. **Atomic** — the agreed subject is ONE shippable change.

Output: the agreed `subject` + `theme`, a one-line **decision rationale** (which voice won and why), and the atomic plan (steps, likely files, claims to verify, verify command). If **both** voices conclude nothing is genuinely worth doing → `skip` (no complaisance).

## Verifiability is broader than "tests pass"

Do not let a feature/UX/refactor lose the debate just because it can't run in a headless browser — that is the exact bias that produces an all-tests loop. A change is **verifiable** when the diff review + `type-check`/build pass **and**, for a behaviour change, a **regression test locks the new behaviour**. So:

- statically-reviewable changes (accessibility attributes, copy, dead-code removal, type-safety, dependency bumps) → ship as-is.
- behaviour-changing UI / feature / refactor → ship **with its locking test**; that test is the safety net that replaces the live browser.
- truly visual/pixel work that only a browser can confirm stays weak in headless runs — surface it for a human or a local run rather than forcing it.

## Degraded path (no subagents available)

Run the debate in one context: write the **PM case** and the **Senior Dev case** explicitly — steelman both, do not collapse to one — then reconcile by the same criteria. The discipline of writing both cases out is what breaks the single-planner test-bias even without separate agents.
