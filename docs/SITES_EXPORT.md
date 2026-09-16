# Seed implementation notes

The seed is a portable static HTML, CSS and ES-module site with local WebP artwork.
It includes timeline, comparison, evidence and methodology views, URL state,
Back/Forward navigation, disclosure memory, keyboard focus and reduced-motion styles.
The original implementation notes reported static checks, not a live-browser audit.
Treat those reports as historical claims; current verification is recorded separately.

The seed dataset has 30 forecasts, 40 model/year summaries, nine comparisons and
18 source records. `art-provenance/` contains prompts and an asset manifest; the
image tool's model version was not exposed. Illustrations do not assert facts.

Use `seed-v1` in this repository for the baseline. Follow `START_HERE.md` for the
research refresh, implementation and independent review. Deployment is portable
and has no account-specific hosting requirement.
