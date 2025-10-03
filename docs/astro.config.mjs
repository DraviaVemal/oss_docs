import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
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
		css: {
			postcss: "../postcss.config.js"
		},
		plugins: [tailwindcss()],
	},
});
