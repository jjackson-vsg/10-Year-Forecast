# Experience brief

## Reading journeys

1. **Five-minute orientation:** a striking but readable opening, the strongest shifts,
   near-term versus decade view, a few major uncertainties and clear routes deeper.
2. **Curious exploration:** browse time windows and themes, open forecast cards,
   compare genuinely different scenarios and inspect the evidence behind a claim.
3. **Strategic use:** optional Vesta lens with implications, options and signals;
   distinguish external research from internal assumptions.
4. **Sceptical review:** inspect sources, methods, counterarguments, freshness and
   what changed. Original model comparison becomes supporting context, not authority.

## Information architecture

Evolve the existing site toward Overview, Explore, Scenarios & surprises, Evidence &
methods, and Vesta implications. Keep small-screen navigation usable; combine sections
where needed rather than squeezing many tabs into the bottom bar. Preserve useful
deep links or document route migration. Add theme, timeframe and confidence filters
only if they help readers find answers; expose empty states and reset controls.

A forecast card progressively reveals: plain-English claim; timing window and
geography; likelihood if justified; separate evidence confidence; why it matters;
supporting and conflicting evidence; what would change the view; signal to watch.
Detailed methodology belongs one step away. Do not expose internal file paths,
ingestion statuses or implementation terminology in the normal reader journey.

Use the existing warm illustrated-atlas identity as a starting point. Preserve good
art, hierarchy and restraint. Label imagined scenes visibly. Avoid generic AI imagery,
decorative dashboards, pseudo-precise gauges and animation that competes with reading.
Graphs must show units, baseline, source date, actual/forecast distinction and uncertainty.
Interactive scenarios may show documented assumptions; never imply a causal simulation
when they merely select editorial narratives. Include a text/table alternative.

## Implementation approach

First create representative overview, forecast-detail and scenario layouts using real
accepted content. Check them on mobile and desktop before applying across the site.
Use CSS and the existing static architecture unless a documented requirement justifies
change. Centralise chart data; separate presentation from evidence records; format the
compressed source for maintainability as part of purposeful editing, not an unrelated rewrite.
Escape imported text and restrict outbound URL schemes to valid HTTP(S) research links.

## Acceptance targets

- Reader can identify the central outlook, one uncertainty and its evidence without
  knowing the methodology. Test with at least three representative readers if available;
  report agent walkthroughs as such, never as human user research.
- Full keyboard operation, visible focus, named controls, predictable dialogs and
  screen-reader headings; WCAG 2.2 AA target verified by automated plus manual checks.
- No clipped content or unwanted horizontal page scrolling at 320, 390, 768, 1280
  and 1440 pixels; usable at 200% zoom; check reflow at 400% and reduced motion.
- Accessible contrast and touch targets; meaning never conveyed by colour alone.
- Test current Chromium and a second available browser engine; disclose missing coverage.
- Aim for LCP ≤2.5s, CLS ≤0.1, INP ≤200ms in representative conditions. Lab proxies
  are not field data; record device/throttle/setup. Budget the first load around ≤1MB
  compressed where practical, lazy-loading noncritical artwork and avoiding ten full images.
- Provide a useful print/export reading path and stable links for sharing internally.
  Do not publish externally to satisfy sharing requirements without authorization.
