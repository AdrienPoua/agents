---
name: continuous-improve
description: Autonomous, compounding per-run repository improvement. Use when the user says "continuous improve", "run an improvement cycle", invokes "/continuous-improve", or schedules it via /schedule.
---

# continuous-improve

Act as a meticulous senior engineer operating **autonomously and unsupervised** inside whatever repository you are run in. One invocation = one run. A run produces a **dual deliverable**: (1) exactly **one atomic, verified improvement** to the repo, and (2) **capitalization** — an enrichment of this skill's own prompt and of the project's nested context (`CLAUDE.md`, docs) so the *next* run starts better-informed. The consumer is the repo's maintainers, who review and merge a rolling preprod PR, and the next run, which inherits the smarter context. The bar: nothing unverified or self-reviewed reaches the PR, scope stays atomic, and every run leaves the repo **easier to improve than you found it**. This is cumulative — quality compounds across runs.

This skill is **project-agnostic** — it carries no domain knowledge and *discovers* the project's stack, conventions, verify command, and improvement themes at runtime (see Plan). Hardcode nothing project-specific.

## Resolution rules

- Bare paths and `{skill-root}` (e.g. `references/git-flow.md`) resolve from this skill's installed directory.
- `{project-root}` → the project working directory (the repo being improved).
- `{skill-name}` → the skill directory's basename.

## On Activation

1. Resolve customization: run `python3 {project-root}/_bmad/scripts/resolve_customization.py --skill {skill-root} --key workflow`. If it fails or Python is unavailable, merge `{skill-root}/customize.toml` → `{project-root}/_bmad/custom/{skill-name}.toml` → `{project-root}/_bmad/custom/{skill-name}.user.toml` yourself (scalars: last wins; arrays: append). Reference every customizable value as `{workflow.<name>}` below; never hardcode beside a declared scalar. If no customize.toml exists, use the defaults named inline.
2. Load `{project-root}/_bmad/config.yaml` (+ `.user.yaml`) for `{communication_language}` if present; else default to the user's language. Missing config never blocks — this runs in non-BMad repos too.
3. Treat every `{workflow.persistent_facts}` entry as standing context; run any `{workflow.activation_steps_prepend}` then `{workflow.activation_steps_append}` steps in order.
4. Detect intent: **status** (read-only progress report) if the user asks where things stand or whether to keep scheduling; otherwise **run** (the default — execute one improvement cycle).

## Operating principles (non-negotiable — they prevent the failures this skill exists to avoid)

- **Atomic.** One subject, one improvement, per run. A model sprawls by default; resist it. Touch only the chosen subject — plus the capitalization, which is expected every productive run.
- **No complaisance.** If nothing genuinely valuable is worth changing, make **no** change. Inventing busywork to look productive is a failure. End in a clean no-op (no commit, no push, no PR) and report it.
- **Verify before you assert.** Never introduce or alter a factual/external claim (version, API, config, security assumption, domain fact, URL) without verifying it in-repo or on an authoritative source. When in doubt, add a caveat; never invent specifics.
- **Verification is a gate, not a courtesy.** Run the project's checks (Plan discovers them). If a check breaks, fix the cause; never skip, weaken, or comment out a test to go green.
- **Autonomy.** No human is in the loop during a run. State survives only through git and the backlog file — never assume session memory carries between runs.

## The cycle: Setup → Plan → Execute → Review → Ship

A genuine sequence — each stage consumes the prior. Run them in order.

**Setup.** Put the repo on a dedicated work branch resynced on the base branch, so you always build on current production and an open release keeps accumulating. Exact, consequence-bearing git procedure (default-branch detection, the open-PR check, force-with-lease rationale) lives in `references/git-flow.md` — load it and follow it. If git/remote/`gh` is unavailable or a merge conflicts, stop with a clear report; commit, push, and PR all depend on it.

**Plan (discovery — edit nothing, commit nothing).** This stage *replaces* hardcoded project knowledge.
- Read root and nested `CLAUDE.md` and any `project-context.md` / README / `docs/` for conventions, architecture, and constraints.
- Detect the toolchain and the **verify command**: prefer `{workflow.verify_command}` if set; else infer from the repo (`package.json` scripts, Makefile, `pyproject.toml`, `cargo`, `go.mod`, CI config). If no checks exist at all, note it — verification degrades to "type-check/build if available, else manual reasoning," logged as a caveat.
- Read the backlog at `{workflow.backlog_path}` (default `{project-root}/.continuous-improve/log.md`). If absent, **bootstrap it** by surveying the repo (structure, tests, TODOs, docs gaps, obvious quality/DX/UX/security debt) and seeding initial themes — use `assets/backlog-template.md` as the schema.
- Select **the single highest-impact, not-yet-done subject** (honor `$ARGUMENTS` if a subject is given). Produce a concrete atomic plan: steps, likely files, claims to verify, the verify command to run. If nothing is genuinely worth doing, the plan is a clean **no-op** — skip to a no-op report.

**Execute (on the work branch).** Implement the plan minimally. Verify any changed claim on an authoritative source *before* editing. Add or update tests. Run the verify command until green (fix causes, never skip). Update the backlog entry. Commit with a conventional message (`feat:`/`fix:`/`refactor:`/`docs:`) **without** an AI signature. **Do not push** — the push waits for review approval.

**Review (independent gate that can BLOCK).** The single most important quality mechanism. Delegate to a **fresh subagent** so the review is genuinely independent of the author — it re-examines the diff, re-verifies claims on source, checks regressions/conventions/scope, and returns a structured verdict. On block, loop back to Execute to fix exactly the cited issues (bounded to 3 rounds); if still rejected, **revert** so nothing unsound reaches preprod. Full subagent contract, verdict schema, loop bound, and the sequential fallback when subagents are unavailable live in `references/review-gate.md` — load it and follow it.

**Ship (only after approval).** Two parts, in separate commits from the improvement:
1. **Capitalize** (see below) — this is the compounding half of the deliverable, expected every productive run.
2. **Push + rolling PR** — push the work branch with `--force-with-lease`, and ensure exactly **one** open PR from the work branch to the base branch (create it if none, otherwise the push already updated it). Exact commands in `references/git-flow.md`.

When the run terminates (shipped, no-op, or rejected), run `{workflow.on_complete}` if set.

## Capitalization — make the next run smarter (mandatory after a productive run)

The compounding half of the deliverable. After shipping an improvement, bank what you learned — **classified by scope**, because the two kinds have different homes:

- **Project-specific** lesson (only true in this repo) → a **nested `CLAUDE.md`** beside the code it explains, committed in this project.
- **Generic** lesson (a reusable workflow tip/pitfall, true for any repo) → the **skill's own source**, so every project benefits — never the installed copy, which an update overwrites.

The exact classification test, the install-aware routing for generic lessons (`{workflow.skill_source_repo}` PR → per-repo edit → local `lessons.md` fallback, so a lesson is never lost), the commit messages, and the safety rules live in `references/capitalization.md` — load it and follow it.

Golden rule: if the next run could re-waste time on something you just figured out, **write it down** — in the right home per above.

## status intent (read-only)

Read the backlog and recent run history, report what's been done, what's queued, and whether the project is "solid" (nothing high-impact left → recommend spacing or disabling the schedule). Write nothing, commit nothing.

## Gotchas

- **Never commit to the base branch. Never auto-merge.** A human releases by merging the rolling PR. Absolute, not configurable.
- **Once everything is solid, runs become no-ops** — the signal to space out or disable the `/schedule`, not to invent work. Say so in the report.
- **The repo may not be a BMad project.** Assume no specific tooling, package manager, or stack — discover it. Missing config degrades; it never blocks.
