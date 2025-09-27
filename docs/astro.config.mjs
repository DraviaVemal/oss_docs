import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: "https://docs.draviavemal.com",
	base: "/",
	output: "static",
	outDir: "../dist",
	integrations: [mdx(), sitemap()],
	prefetch: true,
	server: {
		host: "0.0.0.0",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
