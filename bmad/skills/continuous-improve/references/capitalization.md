# Capitalization — where each lesson goes

The **Ship** stage's capitalization detail. Self-contained. After a productive run, you hold one or two lessons; this file decides where each one lives so it survives — and so a *generic* lesson reaches every project while a *project-specific* one stays put. Run only after the review gate approved and the improvement is committed.

## Step 1 — classify each lesson by scope

For every lesson worth banking, ask one question: **would this be true in a different repo too?**

- **Project-specific** — only true here: how *this* module works, a gotcha in *this* codebase, a path/convention/source that matters to *this* project. → **Destination A**.
- **Generic to the skill** — a reusable improvement technique, a discovery tip, a pitfall in the workflow itself, a better default — true for *any* repo this skill runs in. → **Destination B**.

A run may produce one, both, or neither. Most runs produce a project-specific lesson; generic lessons are rarer and more valuable. When unsure, treat it as project-specific (Destination A is always safe and always persists).

## Destination A — project-specific → the project's own context

Create or enrich a **nested `CLAUDE.md`** beside the code it explains (short, factual, actionable — not a paraphrase of the code). Claude Code auto-loads the nearest `CLAUDE.md` and its parents, so localized context belongs next to its zone. Commit it in the project's work branch, separate from the improvement: `docs: enrich context (<zone>)`. This always works, including in scheduled runs — the file is in the repo being improved.

## Destination B — generic → the skill's source (install-aware routing)

A generic lesson must reach the skill's *source*, not the running copy — editing an installed plugin's cache is wiped on the next `/plugin update`. Route in this order; take the first that applies:

1. **`{workflow.skill_source_repo}` is set** (the marketplace/source repo). This is the preferred channel and works regardless of how the skill was installed. Clone it to a scratch dir, apply the lesson, and maintain a single rolling PR you review — never auto-merged:

   ```bash
   SRC="$WORKFLOW_SKILL_SOURCE_REPO"                 # e.g. AdrienPoua/claude-marketplace
   TMP="$(mktemp -d)/skill-src"
   gh repo clone "$SRC" "$TMP" -- --depth 1 || git clone "$SRC" "$TMP"
   cd "$TMP"
   DEF="$(git remote show origin | sed -n 's/.*HEAD branch: //p')"; DEF="${DEF:-main}"
   git checkout -B continuous-improve/self-improve "origin/$DEF"
   # locate this skill inside the source repo (path varies: plugins/*/skills/, skills/, …) and
   # append the lesson to its SKILL.md or a references/ file. Keep it atomic; never rewrite.
   git commit -am "docs: self-improve continuous-improve skill"
   git push --force-with-lease -u origin continuous-improve/self-improve
   if [ "$(gh pr list --head continuous-improve/self-improve --base "$DEF" --state open --json number --jq 'length' 2>/dev/null || echo 0)" = "0" ]; then
     gh pr create --base "$DEF" --head continuous-improve/self-improve \
       --title "skill: continuous-improve self-improvements" \
       --body "Generic lessons banked by /continuous-improve runs across repos. Review and merge to roll out everywhere. Never auto-merged."
   fi
   ```

   If the clone or auth fails, fall through to step 3 rather than losing the lesson.

2. **No source repo set, but the skill lives inside this project** (per-repo install: `{skill-root}` is under `{project-root}` and git-tracked — check with `git -C {project-root} ls-files --error-unmatch` on the skill path). Edit the skill files in place and commit in the project's work branch: `docs: self-improve continuous-improve skill`.

3. **Otherwise** (global install, no source repo, not in the project) — do not lose the lesson. Append it to `{project-root}/.continuous-improve/lessons.md` (committed in the project work branch), tagged `generic — port to skill source`, so it surfaces for manual porting later.

## Periodic meta-reflection — self-diagnose the method

Per-run capitalization catches *local* lessons; it misses *systemic* ones — a single run never notices "the last 11 runs were all tests." So periodically step back. On a productive run, when the run history (in the backlog) is worth examining — roughly every ~5 productive runs, or sooner if the last 3+ runs share a theme, the review gate keeps flagging the same class of issue, or the same friction recurs — ask one question:

> Looking across recent runs, is there a pattern suggesting **the skill's own method** should change? — a recurring bias in what gets picked, a step that repeatedly wastes effort, a missing default, a rule that keeps getting worked around.

If yes, that is a **generic lesson** → route it through Destination B (a self-improve PR to `{workflow.skill_source_repo}`), atomic, for human review, never a rewrite. If no clear pattern, note that the reflection ran and move on. This is the beat that lets the loop improve *how it works*, not just the repo it works on.

## Safety (all destinations)

- One atomic lesson per destination per run — an addition, an edit, or the deletion of a now-obsolete line. Never a rewrite.
- **Never degrade a safety or verification rule** when self-editing. When in doubt, add rather than remove.
- Each capitalization is its own commit, separate from the improvement, so history stays legible.
- Generic self-improvement is always a **PR a human reviews**, never an auto-merge — consistent with the skill's release philosophy.
