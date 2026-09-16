import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {years, models, sources, comparisons, snapshot, repoCommit} from '../dist/data.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFile(path.join(root, file), 'utf8');
const unique = (values, label) => assert.equal(new Set(values).size, values.length, `${label}: duplicate ID`);
unique(years.map(y => y.year), 'Years');
unique(models.map(m => m.id), 'Models');
const events = years.flatMap(y => y.events);
unique(events.map(e => e.id), 'Forecasts');
assert.equal(years.length, 10);
assert.deepEqual(years.map(y => y.year), Array.from({length: 10}, (_, i) => 2027 + i));
for (const y of years) assert.equal(y.takes.length, models.length, `Year ${y.year} model takes`);
for (const entry of [...events, ...comparisons]) {
  assert.ok(entry.refs.length, 'Missing evidence references');
  for (const ref of entry.refs) assert.ok(sources[ref], `Unknown source ${ref}`);
}
for (const e of events) {
  for (const id of e.origin) assert.ok(models.some(m => m.id === id), `Unknown model ${id}`);
  assert.ok(['High', 'Medium', 'Speculative'].includes(e.confidence));
}
for (const c of comparisons) assert.equal(c.takes.length, models.length);
for (const s of Object.values(sources)) assert.ok(['http:', 'https:'].includes(new URL(s.url).protocol));
for (const m of models) {
  assert.ok((await read(m.file)).length > 100);
  assert.ok(m.url.includes('/blob/' + repoCommit + '/'));
}
const exported = JSON.parse(await read('research/forecast-snapshot.json'));
assert.equal(exported.snapshot, snapshot);
assert.equal(exported.originalForecastRevision, repoCommit);
for (const [key, value] of Object.entries({years, models, sources, comparisons})) assert.deepEqual(exported[key], value, `Export drift: ${key}`);
const manifest = JSON.parse(await read('art-provenance/year-manifest.json'));
for (const asset of manifest) {
  const bytes = await readFile(path.join(root, asset.path));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, `Artwork changed: ${asset.path}`);
  assert.equal(bytes.length, asset.bytes);
  assert.ok((await readFile(path.join(root, asset.thumbnail))).length > 0);
}
const reports = JSON.parse(await read('research/manifest.json')).reports;
unique(reports.map(r => r.id), 'Reports');
assert.equal(reports.length, 6);
for (const r of reports) if (r.prompt) assert.ok((await read('research/' + r.prompt)).length > 1000, `Prompt missing: ${r.id}`);
// Construct historical identifiers to avoid retaining them as literal project text.
const forbidden = [new RegExp('machine' + 'komi', 'i'), /https?:\/\/[^\s"<>]*chatgpt\.site/i,
  /https?:\/\/(?:chatgpt\.com|chat\.openai\.com)\/(?:share|c)\//i];
async function scan(dir) {
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    if (['.git', 'node_modules', '.venv'].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (/\.(md|json|js|mjs|html|css)$/.test(entry.name)) {
      const text = await readFile(file, 'utf8');
      for (const pattern of forbidden) assert.ok(!pattern.test(text), `Account reference in ${path.relative(root, file)}`);
    }
  }
}
await scan(root);
console.log(`PASS: ${years.length} years, ${events.length} forecasts, ${models.length} models, ${Object.keys(sources).length} sources, ${comparisons.length} comparisons; export parity; artwork hashes; prompt manifest; account-reference scan.`);
console.log('Structural checks only. External evidence and browser/visual audits are separate gates.');
