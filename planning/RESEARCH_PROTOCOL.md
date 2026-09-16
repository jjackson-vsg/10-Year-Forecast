# Evidence and forecasting protocol

## Research cutoff and source discipline

Every report states its actual research date and explicit information cutoff. Start
from 16 September 2026 only when the run genuinely occurs then; later runs must state
their later date. Separate publication date, event date, access date and forecast
horizon. Exclude material later than the chosen cutoff from that snapshot.

Prefer original papers, official statistics, regulators, audited filings, independent
evaluations and primary technical documentation. Use credible reporting for events
when primary evidence is unavailable and label its limits. Vendor roadmaps establish
intent; expert elicitation establishes expert beliefs. Neither establishes delivery.
Check source incentives, denominators, units, geography and revision history.
Seek independent corroboration for headline claims where feasible; two sources quoting
the same study count as one evidence family. Do not manufacture references or rely on
search snippets as full verification. Mark paywalled, unavailable or unverified sources.

## Required report output

Provide a readable Markdown report plus tables suitable for extraction. Each report has:

1. Title, report ID, actual run date/cutoff, research scope, provider/model as displayed
   (unknown if not exposed), method, limitations and incomplete sections.
2. Executive synthesis: 5–8 important conclusions with evidence/uncertainty labels.
3. Current baseline: measured facts distinguished from estimates and targets.
4. Forecast table: ID, resolvable event, geography/population, horizon/deadline,
   central estimate or probability range if justified, evidence confidence, rationale,
   strongest countercase, dependencies, signposts and outcome-resolution source/rule.
5. Central, faster and constrained pathways; high-impact upside and downside surprises.
6. Regional and distributional differences; practical implications for vertical software.
7. Source register: ID, title, publisher, URL/DOI, publication/access dates, type,
   section/page/table locator, supported claim IDs, limitations and verification status.
8. Open questions, disagreements and the most valuable follow-up evidence to obtain.

Use source IDs beside every material number and factual premise. Distinguish sources'
forecasts from your inference. Supply accessible URLs, not private conversation links
or opaque citation tokens alone. Short evidence excerpts are optional; source locators
and faithful paraphrases are preferred. Never fabricate exact model versions or prompts.

## Claim and source registers for synthesis

Claude creates `research/registers/sources.json`, `claims.json`, `conflicts.md`,
`scenarios.md`, `signals.md`, `vesta-implications.md`, `verification-log.md` and
`editorial-decisions.md`. They are research working records; `dist/data.js` remains
the published dataset until an explicit schema migration is documented.

Each claim needs: stable ID; statement; type (observation / estimate / external
projection / target / editorial forecast / scenario); theme; geography; as-of date;
deadline/window; metric, unit and baseline if quantitative; probability and estimation
method or explicit null; evidence confidence and reason; source IDs and support
locators; counterevidence; dependencies; watch signals; resolution rule/source;
status (candidate / accepted / disputed / retired / resolved); report origin; change log.

Each source needs: stable ID, title, publisher, URL, dates, source type, independence
family, locator, check status (verified / partially verified / inaccessible / contradicted),
what it supports and what it does not. A successful HTTP response is not verification.
Register report hashes and keep raw outputs unchanged after intake. Amendments are new
versions with a reason, never silent edits.

## Probabilities, uncertainty and calibration

Define the event and deadline before estimating its chance. Prefer credible forecast
distributions, empirical base rates or transparent structured judgement. State whose
estimate it is, assumptions, reference class and sensitivity. Use ranges when justified;
use 'not quantified' when evidence is inadequate. Never map the seed confidence labels
to percentages. Model agreement is not an ensemble probability or source independence.

Keep likelihood separate from confidence in the estimate and uncertainty about timing.
A narrative year is not a promised date. Widen intervals where justified, consider
correlated drivers, and do not multiply marginal probabilities as though independent.
Alternative scenarios need not sum to 100% unless explicitly mutually exclusive and
exhaustive. Unexpected high-impact developments include upside as well as downside.

When enough resolvable binary forecasts exist, preregister point probabilities for
Brier scoring, eligibility/deadlines, adjudication and treatment of void/unresolved
events. For numeric forecasts, preregister intervals and coverage/error measures.
Do not claim calibration from a small sample or score ambiguous narratives after
rewriting their meaning. Preserve original estimates and every later revision.

## Vesta translation

Link each material implication through an explicit mechanism: external change →
customer/workflow economics → revenue/cost/retention effect → option and trigger.
Include no-regret moves, reversible experiments, contingent bets and activities to
avoid. Give costs, implementation friction and disconfirming signals, not just upside.
Use labelled illustrative sensitivities until internal baselines are supplied. Do not
promise BQR uplift from faster coding alone or double-count savings and redeployed time.
Keep internal strategy material out of externally run research prompts unless Jason
specifically supplies and authorizes it.
