# Deploying HORIZON

The complete website is in `dist/`. It is ordinary HTML, CSS, JavaScript modules and WebP artwork. All forecast data is bundled locally. There are no server functions, environment variables, API calls to models or required OpenAI services.

## Vercel

1. Import the GitHub repository `jjackson-vsg/10-Year-Forecast` as a Vercel project.
2. Leave **Root Directory** at the repository root (not `dist`).
3. Use **Framework Preset: Other**. The committed `vercel.json` sets `framework` to `null`, `outputDirectory` to `dist`, and empty install/build commands.
4. Deploy. No environment variables are required.

These settings follow Vercel's [static configuration reference](https://vercel.com/docs/project-configuration/vercel-json) and [build configuration guide](https://vercel.com/docs/builds/configure-a-build), checked on 16 September 2026.

Vercel deployment itself has not been performed as part of this export. After deploying, check the landing page, the 2036 illustration, the decade picker and a deep link such as `/?year=2033#timeline` or `/?year=2030&mode=year#compare`.

Views use URL hashes and years use query parameters, so no SPA rewrite is necessary. Asset URLs start at `/`; deploy at a domain root. A subdirectory deployment, such as default GitHub project Pages, requires adjusting these root-relative paths.

## Other static hosts

Serve the contents of `dist/` as the website root with normal `.js`, `.css` and `.webp` MIME types. Keep all files and the `art/` subdirectory together. Do not serve the repository root as the site root. Google Fonts is the only externally fetched presentation dependency and falls back to system fonts.

## Editing and updating

- Edit the authored files in `dist/`; there is no compilation step.
- Keep forecasts and source records in `dist/data.js`, annual art metadata in `dist/visuals.js`, and image assets in `dist/art/`.
- Run `npm run export:data` after data changes to refresh the research JSON.
- Push changes to the branch connected to your chosen hosting project.
- After a repository transfer, update the Git remote and the hosting integration to the new organisation. No hosting deployment is included in the migration.

## Verification

Run `npm run validate` and follow `planning/QA_PLAN.md`. Migration checks do not establish forecast accuracy or production hosting readiness.
