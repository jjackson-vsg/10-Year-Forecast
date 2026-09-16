# HORIZON — The Next Ten Years

An illustrated exploration of 2027–2036: what seems likely, what remains uncertain,
and which less likely developments could change the trajectory. A research project
for curious readers and strategic context for Vesta, with evidence available beneath
the story. The current website is a seed edition, not the completed research programme.

## Continue the project

**Start at [START_HERE.md](START_HERE.md).** Codex and Claude use the same saved plan
and [project state](planning/STATE.json). Tell either agent: “Read START_HERE.md and
proceed with your next eligible stage.” Research runs take place in Jason's work
ChatGPT and Claude chats; their outputs return to this repository for integration.

- [Mission and delivery plan](planning/DELIVERY_PLAN.md)
- [Seed review and research gaps](planning/SEED_REVIEW.md)
- [Research briefs, prompts and intake](research/README.md)
- [Evidence and forecasting method](planning/RESEARCH_PROTOCOL.md)
- [Experience brief](planning/EXPERIENCE_BRIEF.md)
- [Quality and accuracy gates](planning/QA_PLAN.md)

## Run locally

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. No installation, build, API key or backend is required.
Google Fonts is optional and has system fallbacks. The authored source is in `dist/`;
keep it committed. Do not treat it as generated output or replace the stack without
a concrete benefit. See [deployment notes](docs/DEPLOYMENT.md).

```sh
npm run export:data
npm run validate
```

`dist/data.js` is currently canonical; `research/forecast-snapshot.json` is its
deterministic export. The seed contains ten annual chapters, 30 editorial forecasts,
40 model/year summaries, nine thematic comparisons, 18 source records and ten
illustrations with thumbnails. The baseline is labelled 16 September 2026.

The four root-level forecast documents are historical seed inputs. Their model
labels are unverified; they are not independent calibrated forecasts. Preserve their
substantive content and distinguish it from newly verified evidence. The `seed-v1`
tag identifies this repository's baseline. Images are imagined scenes, not evidence.

The [Apache 2.0 licence](LICENSE) is retained. Third-party research citations and
asset-generation information remain where useful. No personal hosting connection
or personal-account Git history is required. Hosting and later publication are
separate actions; this repository starts private.
