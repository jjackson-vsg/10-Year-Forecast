# Quality gates and final audit

## S0 migration gate

Run `npm run validate`, JS syntax checks and deterministic export parity. Scan all
tracked text for account identifiers, personal hosting/chat links and obsolete source
revisions; inspect image metadata and manifests. Confirm a fresh work-account author,
only the intended work remote, no fork relationship and private visibility. Verify
asset hashes against the seed manifest and the remote branch/tag against local Git.
Do not call this a completed forecast or browser audit.

## S3/S4 evidence gate — Claude

- All six reports registered, or explicit gaps and affected claims documented.
- Every public forecast traces to accepted claim records and checked sources or is
  clearly presented as unverified speculation outside the central outlook.
- All headline statistics and decision-critical premises verified at primary sources;
  exact definition, date, geography, denominator, units and table/page captured.
- Counterevidence and source dependence assessed; targets are not delivery evidence.
- Dates and probability ranges reflect the defined events; unsupported precision removed.
- Regional coverage, tail risks, upside opportunities and Vesta options reviewed.
- A dated verification log supports any “checked” or “verified” wording in the UI.

## S5 implementation gate — Claude

Provide runnable scripts for schema/ID/reference validation, export parity and
meaningful browser flows. Test overview, every year, theme/time filters, scenarios,
evidence links, details/dialogs, Back/Forward, refresh/deep links and invalid parameters.
Test keyboard, focus restoration, screen-reader semantics, reduced motion, zoom,
no-script fallback, missing image and unavailable external-font conditions. Check
plain-text escaping and invalid-link handling with adversarial fixture content.
Record screenshots and performance/a11y results with environment and commands.

## S6 independent review — Codex

Read Claude's handoff and test results, then inspect the implementation and original
sources independently. Treat prior verification as a lead, not proof. Recheck **all
headline numbers, high-impact claims and Vesta decision-driving premises**, plus a
stratified sample of at least 20% of other published claims across themes, dates and
confidence levels. Expand to all claims in an affected class if a material error occurs.
Record exact sample IDs and numerator/denominator; never label sampling a full fact audit.

For each audited claim record: wording, evidence locator, support strength, currentness,
unit/date/geography consistency, counterevidence, verdict and correction. Check whether
the cited document actually supports the inference, not just whether the link opens.
AI agreement, attractive presentation and plausible prose are not evidence.

Render representative screens and every distinct component state at the viewport
matrix in the experience brief. Inspect screenshots directly. Check text wrapping,
density, image crops, legibility, chart semantics, empty states and navigation.
Make the final visual polish and refinement; rerun affected checks after changes.
No need to repeat unrelated green checks unless the change could affect them.

Create `qa/FINAL_AUDIT.md` with tested revision, environment, commands, claim sample,
screenshots, results, fixes, skipped checks and residual limits. Store supporting
evidence under `qa/`; exclude bulky temporary browser output. Classify findings:

- P0: exposed secrets, unauthorized action, serious security failure — block release.
- P1: material unsupported/misleading headline, broken core journey, inaccessible
  key workflow or wrong strategic arithmetic — block release.
- P2: substantive local content/UX issue — fix, or explicit Jason acceptance to defer.
- P3: minor polish — resolve where useful and record any deferral.

Release requires zero open P0/P1, no fabricated or falsely verified evidence,
passing required checks (or explicit acceptance of a named limitation), and a clean
handoff. Never issue an accuracy guarantee about future outcomes. Certify the evidence
handling and presentation, with the limits of the audit clearly stated.

## Refresh

Review after a material signal changes and propose a quarterly review cadence; this
does not create an automation. Check stale sources, resolve matured claims using
predefined rules, log changes and preserve old snapshots. Distinguish forecast error
from changed evidence. Update UI freshness dates only after the relevant checks.
