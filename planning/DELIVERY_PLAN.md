# Delivery plan

## Product intent and scope

HORIZON is a living research atlas for 2027–2036, with an explicit current baseline
and near-term 2027–2029, medium-term 2030–2032 and longer-term 2033–2036 views.
Preserve the existing decade for continuity; a rolling horizon requires an explicit
editorial decision and migration, not silent relabelling of years.

Readers should leave with a memorable view of what is likely, what could change it,
what the evidence can and cannot establish, and which signals deserve attention.
Cover AI, software, work, robotics, energy, climate, health, science, demography,
institutions and geopolitics. Include benefits, distributional effects and downside
risks. Retain wonder without manufactured precision or catastrophe theatre.

Vesta's optional lens translates developments into product, pricing, customer,
delivery, capability and resilience decisions for a decentralised vertical-software
group. Distinguish generally applicable analysis from facts about particular BUs.
No private Vesta figures are supplied by this plan. Any numerical business case needs
an approved baseline and labelled assumptions. Revenue, cost and cash outcomes matter
more than usage: connect hypotheses to BQR (EBITA / Net Revenue + Net Revenue Growth),
maintenance economics, PS delivery, R&D costs, S&M value creation and retention.
Keep CSI norms and Vesta-specific goals separate and verify them before use.

## Sequence, owners and completion evidence

| Stage | Owner | Depends on | Work and exit evidence |
|---|---|---|---|
| S0 Independent seed | Codex | Jason's migration instruction | Fresh work-account repository; account references removed; assets intact; initial validation and `seed-v1` tag |
| S1 Research commissioning | Codex + Claude, sequential | S0 | Three prompts authored by each; six briefs cover scope; common output contract; report manifest ready |
| S2 Research runs | Jason in work research chats | Corresponding S1 prompt | Six complete outputs with dates, sources, model label if known and run metadata; no fabricated missing runs |
| S3 Intake and verification | Claude; Codex may assist intake | Available S2 outputs | File hashes, source register, claim extraction, coverage assessment and blocked-source list; all six accepted or gaps explicitly recorded |
| S4 Synthesis | Claude | S3 | Forecast register, source support, conflicts, scenarios, signals, Vesta implications and editorial decisions; evidence gate passes |
| S5 Experience/content build | Claude | S4, experience brief | Revised narrative and site; canonical-data/export parity; browsing, accessibility and performance evidence; implementation handoff |
| S6 Independent audit and polish | Codex | S5 | Source and accuracy audit, functional QA, visual inspection, fixes and focused retest; no open blocking findings |
| S7 Acceptance/release | Jason; agents prepare release packet | S6 | Readable release summary, known limitations, deployment steps and explicit acceptance/publication decision |
| S8 Refresh | Assigned per session | S7 | Triggered or quarterly review; changed claims and reasons, resolved outcomes, new snapshot and audit evidence |

S2 can proceed for finished prompts while others are being authored. S3 can process
reports incrementally. Do not finalise S4 or describe coverage as complete with
unacknowledged missing domains. If a report is weak, commission a focused follow-up
with its exact evidence gap rather than rerunning everything. Any deferred research
must be recorded as a limitation, and affected claims cannot be promoted as verified.

## Research commissioning: six primary reports

| ID | Prompt author / research chat | Focus |
|---|---|---|
| C01 | Codex / ChatGPT deep research | AI capability, agents, compute economics and vertical software |
| C02 | Codex / ChatGPT deep research | Energy, physical infrastructure, robotics and climate constraints |
| C03 | Codex / ChatGPT deep research | Work, productivity, demography, diffusion and distribution |
| L01 | Claude / Claude research | Geopolitics, institutions, cyber risk and high-impact disruptions |
| L02 | Claude / Claude research | Health, biotech, science, quantum, space and breakthrough timelines |
| L03 | Claude / Claude research | Independent challenge to AI/software assumptions and Vesta strategic options |

L03 deliberately overlaps C01/C03: disagreement is useful; it is not a third-party
validation just because another model produced it. Run its first pass independently
of the other new reports; then perform a documented reconciliation after all return.
Reports should prioritise decision-relevant depth, roughly 12–20 operational forecasts
each. These are targets, not a reason to fill gaps with weak claims. Consolidate into
roughly 35–60 well-supported public-facing forecasts, retaining a fuller research
register. Do not force three events per year or equal counts per theme.

## Synthesis procedure

1. Preserve raw outputs and register metadata; normalise separately.
2. Extract observations, institutional projections, targets, model judgements and
   scenarios into distinct records. Deduplicate syndicated/derivative sources.
3. Verify all candidate headline numbers and decisive factual premises against
   original publications. Maintain a support matrix and explicit contradictions.
4. Resolve apparent disagreements in definitions, geography, horizon and units
   before debating probabilities. Record genuine disagreement without averaging it away.
5. Build a central path, faster-diffusion path, constrained path and a separate
   high-impact surprise register. State shared drivers and dependencies; scenarios
   may overlap and are not automatically an exhaustive probability distribution.
6. Write forecast cards, timeframe ranges, signals and Vesta options. Show the
   mechanism from capability through adoption and economics to realised outcomes.
7. Record retained, revised, retired and newly added claims versus the seed. Preserve
   prior versions so later outcome scoring cannot silently rewrite predictions.

## Release and continuity

Use a local dated release candidate and checklist; no deployment is implied by the
research plan. Jason transfers the private repository to the Vesta organisation.
After transfer, update `origin`, README/deployment links, model-document URLs in
`dist/data.js`, `scripts/export-data.mjs`, regenerate the snapshot and rerun checks.
Keep `seed-v1` and future release tags in the new organisation. Do not add a connection
to another account. No schedule or unattended workflow is created by this plan.
