# Review gate — independent, adversarial, can block

The **Review** stage's full contract. Self-contained. This gate is the reason the skill ships verified work and not plausible-looking work: a single context reviewing its own diff is not independent, so the review runs in a **fresh subagent** that never saw the implementation reasoning.

## The subagent contract

Delegate the review to a subagent (Task / Agent tool). Give it only: the subject, the project's verify command, the conventions sources to honor (`CLAUDE.md` etc.), and an instruction to examine the diff itself (`git show`, `git diff origin/<base>...<work>`, or `git diff HEAD~1`). Prompt it to be **adversarial — it is not the author**, and to default to blocking when uncertain. Require it to return **only** the verdict object, no prose.

It must check, without complaisance:
- **Claim accuracy** — re-verify every changed factual/external claim itself (versions, APIs, config, security, domain facts, URLs) against an authoritative source. Unverifiable or doubtful = blocker.
- **Correctness / regressions** — is the logic right, do the tests cover the change? Run the verify command to confirm green.
- **Conventions** — honor the project's `CLAUDE.md` and house style.
- **Scope** — is the change genuinely atomic (one subject)?

Verdict schema the subagent returns:

```json
{
  "approved": true,
  "claimsVerified": true,
  "blockingIssues": [
    { "severity": "blocker|major", "issue": "...", "file": "...", "fix": "how to fix" }
  ],
  "suggestions": ["non-blocking ideas — feed these into capitalization"],
  "summary": "one line"
}
```

`approved` is true **only** when there are zero blocker/major issues.

In addition to this built-in adversarial gate, run any review lenses listed in `{workflow.finalize_reviewers}` (e.g. a project may add `skill:bmad-code-review`); fold their blockers into the same loop below.

## The bounded correction loop

```
round = 1
verdict = review(round)
while not verdict.approved and round < 3:
    round += 1
    Execute again — fix EXACTLY verdict.blockingIssues (amend or add a commit on the work branch)
    if not committed: break
    verdict = review(round)
```

- Cap at **3 rounds**. Each fix round re-runs the gate.
- If still not approved after the loop → **revert** per `references/git-flow.md` (Revert) and end the run as `rejected`. Nothing unsound reaches preprod.
- On approval, carry `verdict.suggestions` into the Ship capitalization step.

## Graceful degradation

If subagents are unavailable in the run environment, do **not** skip the gate. Run a fresh-context self-review instead: re-read the diff from scratch as if you were a hostile reviewer, re-verify claims on source, run the verify command, and apply the same block/fix/revert logic. State in the report that the review was self-administered (weaker independence) so the human reviewer weights it accordingly.
