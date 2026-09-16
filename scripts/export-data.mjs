import {mkdir, writeFile} from 'node:fs/promises';
import {years,models,sources,comparisons,snapshot,repoCommit} from '../dist/data.js';
const output=new URL('../research/forecast-snapshot.json',import.meta.url);
await mkdir(new URL('../research/',import.meta.url),{recursive:true});
await writeFile(output,JSON.stringify({
  schemaVersion:1,
  snapshot,
  originalForecastRevision:repoCommit,
  originalForecastRepository:'https://github.com/jjackson-vsg/10-Year-Forecast',
  methodology:'Dated editorial synthesis. Confidence labels concern direction, not measured probabilities. Model identities follow repository labels and are not independently authenticated. See docs/RESEARCH.md.',
  models,sources,years,comparisons
},null,2)+'\n');
console.log('Exported research/forecast-snapshot.json');
