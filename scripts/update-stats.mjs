import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'stats');
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const login = 'Pranith-Jain';
const auth = token ? { Authorization: `Bearer ${token}` } : {};
const UA = { 'User-Agent': 'profile-stats-bot' };

mkdirSync(out, { recursive: true });

const PALETTES = {
  dark: {
    bg: '#0B0E16', card: '#11182B', border: '#232C4A', title: '#F8FAFC',
    accent: '#2C3EE5', accentText: '#7C8CF8', value: '#F8FAFC',
    label: '#94A3B8', track: '#1E2A4A',
  },
  light: {
    bg: '#F8FAFF', card: '#FFFFFF', border: '#DDE2F5', title: '#10163B',
    accent: '#2C3EE5', accentText: '#3B4FE0', value: '#1E293B',
    label: '#64748B', track: '#E5E9FB',
  },
};

const CARD_W = 500;

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function shell(title, body, theme, h) {
  const p = PALETTES[theme];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W}" height="${h}" viewBox="0 0 ${CARD_W} ${h}" role="img" aria-label="${title}">
<rect width="${CARD_W}" height="${h}" rx="14" fill="${p.bg}"/>
<rect x="1" y="1" width="${CARD_W - 2}" height="${h - 2}" rx="13" fill="${p.card}" stroke="${p.border}" stroke-width="1.5"/>
<text x="24" y="32" fill="${p.title}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="15" font-weight="700" letter-spacing="0.5">${title}</text>
<line x1="24" y1="46" x2="${CARD_W - 24}" y2="46" stroke="${p.border}" stroke-width="1"/>
${body}
</svg>`;
}

function statTile(x, value, label, theme) {
  const p = PALETTES[theme];
  return `<g>
<text x="${x}" y="118" fill="${p.accent}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="24" font-weight="700">${value}</text>
<text x="${x}" y="140" fill="${p.label}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11" letter-spacing="1.5">${label}</text>
</g>`;
}

function renderOverviewSvg(u, theme) {
  const name = escapeXml(u.name || u.login);
  const html =
    statTile(42, u.totalStars.toLocaleString('en-US'), 'TOTAL STARS', theme) +
    statTile(164, u.publicRepos.toLocaleString('en-US'), 'REPOSITORIES', theme) +
    statTile(286, u.followers.toLocaleString('en-US'), 'FOLLOWERS', theme) +
    statTile(408, u.following.toLocaleString('en-US'), 'FOLLOWING', theme);
  return shell(`${name}'s GitHub Stats`, html, theme, 170);
}

function langRow(y, lang, pct, theme) {
  const p = PALETTES[theme];
  const barW = Math.max(24, Math.round(300 * pct));
  return `<g>
<text x="24" y="${y - 6}" fill="${p.label}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="12">${escapeXml(lang.name)}</text>
<rect x="24" y="${y}" width="300" height="8" rx="4" fill="${p.track}"/>
<rect x="24" y="${y}" width="${barW}" height="8" rx="4" fill="${p.accent}"/>
<text x="334" y="${y - 2}" fill="${p.label}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="12">${Math.round(pct * 100)}%</text>
</g>`;
}

function renderLangsSvg(langs, theme) {
  const rows = langs.slice(0, 8);
  const total = rows.reduce((s, l) => s + l.bytes, 0);
  const body = rows.map((l, i) => langRow(72 + i * 22, l, total > 0 ? l.bytes / total : 0, theme)).join('\n');
  return shell('Top Languages', body, theme, 62 + rows.length * 22 + 10);
}

const DAY_MS = 86_400_000;

function computeStreak(days) {
  const total = Object.values(days).reduce((s, n) => s + n, 0);
  const dates = Object.keys(days).sort();
  const withCount = dates.filter((d) => (days[d] ?? 0) > 0);

  let longest = 0;
  let run = 0;
  for (let i = 0; i < withCount.length; i++) {
    if (i === 0) {
      run = 1;
    } else {
      const prev = Date.parse(withCount[i - 1]);
      const cur = Date.parse(withCount[i]);
      run = cur - prev === DAY_MS ? run + 1 : 1;
    }
    if (run > longest) longest = run;
  }

  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const todayCount = days[today] ?? 0;
  let current = 0;
  if (todayCount > 0) {
    current = 1;
    for (let i = withCount.length - 1; i > 0; i--) {
      const prev = Date.parse(withCount[i - 1]);
      const cur = Date.parse(withCount[i]);
      if (cur - prev !== DAY_MS) break;
      current++;
    }
  } else {
    const yesterday = new Date(Date.parse(today) - DAY_MS).toISOString().slice(0, 10);
    if ((days[yesterday] ?? 0) > 0) {
      current = 1;
      for (let i = withCount.length - 1; i > 0; i--) {
        const prev = Date.parse(withCount[i - 1]);
        const cur = Date.parse(withCount[i]);
        if (cur - prev !== DAY_MS) break;
        current++;
      }
    }
  }

  return { current, longest, total };
}

function renderStreakSvg(stats, label, theme) {
  const p = PALETTES[theme];
  const body = `<g>
<text x="24" y="110" fill="${p.accentText}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11" letter-spacing="1.5">CURRENT STREAK</text>
<text x="24" y="146" fill="${p.value}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="34" font-weight="700">${stats.current} day${stats.current === 1 ? '' : 's'}</text>
<line x1="${CARD_W / 2}" y1="62" x2="${CARD_W / 2}" y2="150" stroke="${p.border}" stroke-width="1"/>
<text x="${CARD_W / 2 + 24}" y="110" fill="${p.accentText}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11" letter-spacing="1.5">TOTAL CONTRIBUTIONS</text>
<text x="${CARD_W / 2 + 24}" y="146" fill="${p.value}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="34" font-weight="700">${stats.total.toLocaleString('en-US')}</text>
<text x="24" y="165" fill="${p.label}" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="11">longest streak: ${stats.longest} day${stats.longest === 1 ? '' : 's'}</text>
</g>`;
  return shell(`${escapeXml(label)}'s Contribution Streak`, body, theme, 185);
}

function parseContributions(html) {
  const days = {};

  const attrDates = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-count="(\d+)"/g)];
  const attrCounts = [...html.matchAll(/data-count="(\d+)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"/g)];
  if (attrDates.length > 0 || attrCounts.length > 0) {
    for (const m of attrDates) days[m[1]] = Number(m[2]);
    for (const m of attrCounts) days[m[2]] = Number(m[1]);
    return days;
  }

  const cells = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="\d"/g)].map((m) => m[1]);
  const tips = [...html.matchAll(/(?:No|(\d+)) contributions? on/g)].map((m) =>
    m[1] === undefined ? 0 : Number(m[1])
  );
  if (cells.length > 0 && cells.length === tips.length) {
    for (let i = 0; i < cells.length; i++) days[cells[i]] = tips[i];
    return days;
  }

  for (const m of html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([1-4])"/g)) {
    days[m[1]] = 1;
  }
  return days;
}

async function gh(path) {
  const r = await fetch(`https://api.github.com${path}`, {
    headers: { ...UA, ...auth, Accept: 'application/vnd.github+json' },
    signal: AbortSignal.timeout(20000),
  });
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.json();
}

const u = await gh(`/users/${login}`);
const userStats = {
  name: u.name || u.login,
  login,
  publicRepos: u.public_repos,
  totalStars: 0,
  followers: u.followers,
  following: u.following,
};

const repos = [];
for (let page = 1; page <= 3; page++) {
  const list = await gh(`/users/${login}/repos?per_page=100&page=${page}&sort=updated`);
  repos.push(...list);
  if (list.length < 100) break;
}
userStats.totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);

const langBytes = {};
for (const r of repos) {
  if (r.fork) continue;
  const langs = await gh(`/repos/${login}/${r.name}/languages`);
  for (const [lang, bytes] of Object.entries(langs)) langBytes[lang] = (langBytes[lang] ?? 0) + bytes;
}
const langs = Object.entries(langBytes)
  .map(([name, bytes]) => ({ name, bytes }))
  .sort((a, b) => b.bytes - a.bytes);

const cr = await fetch(`https://github.com/users/${login}/contributions`, {
  headers: { ...UA, ...auth },
  signal: AbortSignal.timeout(20000),
});
if (!cr.ok) throw new Error(`contributions: HTTP ${cr.status}`);
const days = parseContributions(await cr.text());
const streak = computeStreak(days);

const cards = {
  'overview-dark': renderOverviewSvg(userStats, 'dark'),
  'overview-light': renderOverviewSvg(userStats, 'light'),
  'langs-dark': renderLangsSvg(langs, 'dark'),
  'langs-light': renderLangsSvg(langs, 'light'),
  'streak-dark': renderStreakSvg(streak, u.name || login, 'dark'),
  'streak-light': renderStreakSvg(streak, u.name || login, 'light'),
};

for (const [name, svg] of Object.entries(cards)) {
  const file = join(out, `${name}.svg`);
  writeFileSync(file, svg);
  console.log(`wrote ${file} (${svg.length} bytes)`);
}
