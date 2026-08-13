import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'stats');
const base = 'https://pranithjain.qzz.io/api/v1/profile/gh-stats';
const cards = ['overview', 'langs', 'streak'];
const themes = ['dark', 'light'];

mkdirSync(out, { recursive: true });

for (const theme of themes) {
  for (const type of cards) {
    const r = await fetch(`${base}?type=${type}&theme=${theme}`, {
      headers: { 'User-Agent': 'profile-stats-bot' },
      signal: AbortSignal.timeout(15000),
    });
    if (!r.ok) throw new Error(`${type}-${theme}: HTTP ${r.status}`);
    const svg = await r.text();
    const file = join(out, `${type}-${theme}.svg`);
    writeFileSync(file, svg);
    console.log(`wrote ${file} (${svg.length} bytes)`);
  }
}