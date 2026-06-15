// Generates a master sitemap index at dist/sitemap-index.xml that references the
// per-site sitemaps produced by each independent Astro build (root landing site
// plus the openxml-office, tauri-remote-ui and xml_rs Starlight sites).
//
// Each site is built separately with its own @astrojs/sitemap output, so without
// this step the root sitemap index only lists the landing pages and crawlers
// never discover the project routes. Run this after all site builds complete.

import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://docs.draviavemal.com';
const distDir = fileURLToPath(new URL('../dist', import.meta.url));

/** Recursively collect every `sitemap-N.xml` urlset file (skip index files). */
function findSitemapFiles(dir) {
	const out = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			out.push(...findSitemapFiles(full));
		} else if (/^sitemap-\d+\.xml$/.test(entry)) {
			out.push(full);
		}
	}
	return out;
}

const files = findSitemapFiles(distDir).sort();

if (files.length === 0) {
	console.warn('[sitemap] No per-site sitemap files found in dist; skipping.');
	process.exit(0);
}

const locs = files.map((file) => {
	// Convert the absolute dist path to a public URL under the site origin.
	const rel = relative(distDir, file).split(/[\\/]/).join('/');
	return `${SITE_ORIGIN}/${rel}`;
});

const xml = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...locs.map((loc) => `\t<sitemap><loc>${loc}</loc></sitemap>`),
	'</sitemapindex>',
	'',
].join('\n');

writeFileSync(join(distDir, 'sitemap-index.xml'), xml, 'utf8');
console.log(`[sitemap] Master sitemap-index.xml written with ${locs.length} sitemap(s):`);
for (const loc of locs) console.log(`  - ${loc}`);
