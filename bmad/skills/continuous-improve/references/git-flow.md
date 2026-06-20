# Git flow — preprod branch + rolling PR (generalized)

Exact, consequence-bearing procedure for the **Setup** and **Ship** stages. Self-contained: assumes only that you are in a git repo with a remote and that `git` (and ideally `gh`) is available. This file carries real-world side effects (force-push, PR creation) — follow it literally; do not improvise the commands.

## Conventions used here

- `{workflow.base_branch}` — the production branch a human merges into. If empty, **auto-detect** it: `git remote show origin | sed -n 's/.*HEAD branch: //p'` (fallback to `main`, then `master`). Call the result `BASE`.
- `{workflow.work_branch}` — the dedicated improvement branch (default `improve/auto`). Call it `WORK`.
- The bot is the **sole writer** of `WORK`. A human only ever touches `BASE` (by merging the PR).

## Setup — land on a fresh, current work branch

Resync `WORK` on `BASE` so every run builds on current production, and an in-flight release keeps accumulating until merged:

```bash
git fetch origin --prune
BASE="${WORK_BASE:-$(git remote show origin | sed -n 's/.*HEAD branch: //p')}"; BASE="${BASE:-main}"
OPEN_PR=$(gh pr list --head "$WORK" --base "$BASE" --state open --json number --jq 'length' 2>/dev/null || echo 0)
if [ "${OPEN_PR:-0}" = "0" ]; then
  git checkout -B "$WORK" "origin/$BASE"        # no release pending → restart from production
else
  git checkout -B "$WORK" "origin/$WORK"        # release pending → keep accumulating
  git merge "origin/$BASE" --no-edit || { echo "Conflict $WORK <- $BASE: manual resolution required"; exit 1; }
fi
```

Auto-repairing regardless of merge mode (squash or merge commit): once the PR is merged/closed, the next run sees `OPEN_PR=0` and restarts cleanly from `BASE`.

Stop the run with a clear report if: no remote, `git push`/`gh` not authenticated, or the merge conflicts. Commit/push/PR all depend on this stage succeeding.

## Ship — push and maintain exactly one rolling PR

Run only after the review gate approved. Push the work branch, then guarantee a single open PR (never a duplicate):

```bash
git push --force-with-lease -u origin "$WORK"   # --force-with-lease, never plain --force: WORK is resynced on BASE each run
if [ "$(gh pr list --head "$WORK" --base "$BASE" --state open --json number --jq 'length' 2>/dev/null || echo 0)" = "0" ]; then
  gh pr create --base "$BASE" --head "$WORK" \
    --title "chore: continuous improvements → $BASE" \
    --body "Preprod fed by /continuous-improve (one atomic, reviewed commit per run). Review and merge to release. Never auto-merged."
fi
# If a PR was already open, the push above updated it — create nothing more.
```

## Revert — when the review gate definitively rejects

Leave nothing unsound on the work branch: `git reset --hard origin/$WORK` if a PR already existed (preserve prior accumulated work), else `git reset --hard origin/$BASE`. Do not push. Confirm the clean state in the report.
