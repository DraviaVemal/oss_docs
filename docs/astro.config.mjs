// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: "https://docs.draviavemal.com",
	base: "/",
	output: "static",
	outDir: "../dist",
	integrations: [mdx(), sitemap()],
});
