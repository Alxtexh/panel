/**
 * Capture every screen, one browser, one session.
 *
 * WHY CDP AND NOT `chrome --screenshot`. One-shot Chrome needs a profile
 * directory to carry the session cookie between invocations, and headless
 * Chrome given a fresh `--user-data-dir` on this machine starts GCM sync
 * against it, crashes its own network service and hangs past every budget -
 * 174 missing screenshots, zero error messages, twice. A single browser driven
 * over CDP holds the cookie in memory, so the profile - and everything that
 * hung - never exists.
 *
 * WHY IT IS NOT DUSK. ChromeDriver renders this app as a blank page on
 * Windows; the same Chrome over CDP renders it correctly. See STARTER_PLAN.md.
 *
 * Usage:
 *   node scripts/shots.mjs <chrome> <baseUrl> <userId> <outDir> <theme>
 *
 * The theme is set on the ACCOUNT by the caller (scripts/shots.sh) before this
 * runs - `useAppearance` treats the server value as authoritative, so a fresh
 * browser context renders exactly what the column says.
 */
import { mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * RESOLVED FROM THE PLAYGROUND, NOT FROM THIS FILE. ESM resolution walks up
 * from the importing file, and this file lives in `scripts/` - a directory
 * with no node_modules above it. The dependency is installed where every
 * other JS dependency lives, so the require is anchored there.
 */
const require = createRequire(
    fileURLToPath(new URL('../apps/playground/package.json', import.meta.url)),
);
const puppeteer = require('puppeteer-core');

const [chromePath, baseUrl, userId, outDir, theme] = process.argv.slice(2);

if (!chromePath || !baseUrl || !userId || !outDir || !theme) {
    console.error('usage: node shots.mjs <chrome> <baseUrl> <userId> <outDir> <theme>');
    process.exit(2);
}

/**
 * WIDTHS, NOT ONE WIDTH. Both real design bugs this project shipped were
 * layout at a size nobody looked at. 1400 is the desktop the tests use, 768
 * is where the sidebar folds, 375 is where the bottom bar takes over.
 */
const VIEWPORTS = [
    { w: 1400, h: 1000 },
    { w: 768, h: 1024 },
    { w: 375, h: 812 },
];

/** Screens as name -> path. A screen absent here can break unobserved. */
const SCREENS = {
    'dashboard': '/dashboard',
    'resource-index': '/clients',
    'resource-create': '/clients/create',
    'resource-second': '/routers',
    'resource-third': '/plans',
    'users': '/users',
    'tickets': '/tickets',
    'tickets-analysis': '/tickets/analysis',
    'trash': '/trash',
    'sitemap': '/sitemap',
    'environment': '/environment',
    'whats-new': '/whats-new',
    'notifications': '/notifications',
    'user-management': '/user-management',
    'documents': '/documents',
    'settings-index': '/settings',
    'settings-profile': '/settings/profile',
    'settings-security': '/settings/security',
    'settings-roles': '/settings/roles',
    'settings-workspaces': '/settings/workspaces',
    'operations-backups': '/operations/backups',
    'operations-logs': '/operations/logs',
    'operations-monitoring': '/operations/monitoring',
    'docs': '/docs',
    'about': '/about',
    'help': '/help',
    'shell-preview': '/shell-preview',
    'landing': '/',
    'login': '/login',
};

/*
 * `SHOTS_ONLY=landing,login` restricts the run - for re-shooting the screens
 * a fix touched without paying for the other hundred and sixty.
 */
const only = (process.env.SHOTS_ONLY ?? '').split(',').filter(Boolean);

const screens = Object.entries(SCREENS).filter(
    ([name]) => only.length === 0 || only.includes(name),
);

const out = resolve(outDir);
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--lang=en-GB'],
});

let missing = 0;

try {
    const page = await browser.newPage();

    /*
     * SIGN IN ONCE. Dusk's provider registers this route in local
     * environments; the cookie it sets lives in this browser for the rest of
     * the run. `/login` at the end still shows the form because Fortify's
     * guest middleware is what redirects, and the screenshot of a redirect
     * is the dashboard - acceptable, and labelled by URL either way.
     */
    await page.goto(`${baseUrl}/_dusk/login/${userId}`, { waitUntil: 'networkidle2', timeout: 30_000 });

    for (const [name, path] of screens) {
        for (const { w, h } of VIEWPORTS) {
            const file = join(out, `${name}__${theme}__${w}x${h}.png`);

            try {
                await page.setViewport({ width: w, height: h });

                /*
                 * A NETWORK-IDLE TIMEOUT IS NOT A FAILED PAGE. The app opens a
                 * websocket to Reverb and retries it forever when nothing is
                 * listening, so pages with live updates never go idle - the
                 * navigation itself committed long ago. Swallow the timeout
                 * and shoot what rendered; a genuinely broken page still fails
                 * at the screenshot call.
                 */
                await page
                    .goto(`${baseUrl}${path}`, { waitUntil: 'networkidle2', timeout: 15_000 })
                    .catch((err) => {
                        if (!String(err.message).includes('timeout')) {
                            throw err;
                        }
                    });

                /*
                 * Charts animate in and fonts swap; a settle beats a lie.
                 * 600ms was chosen by looking at the dashboard's chart
                 * easing, which is the slowest thing in the suite.
                 */
                await new Promise((r) => setTimeout(r, 600));
                await page.screenshot({ path: file });

                console.log(`  ok      ${name} ${theme} ${w}x${h}`);
            } catch (err) {
                missing += 1;
                console.log(`  MISSING ${name} ${theme} ${w}x${h}  (${err.message.split('\n')[0]})`);
            }
        }
    }
} finally {
    await browser.close();
}

/*
 * A MISSING SHOT IS A FAILED RUN. A baseline with holes compares clean
 * against a starter with the same holes.
 */
process.exit(missing > 0 ? 1 : 0);
