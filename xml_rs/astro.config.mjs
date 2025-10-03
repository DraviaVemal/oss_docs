import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: "https://docs.draviavemal.com/xml_rs",
	base: "/xml_rs",
	output: "static",
	outDir: "../dist/xml_rs",
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
	integrations: [
		sitemap(),
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	head: [
		{
			tag: "meta",
			attrs: {
				name: "google-adsense-account",
				content: "ca-pub-2944495108494397"
			}
		},
		{
			tag: "script",
			attrs: {
				src: "https://www.googletagmanager.com/gtag/js?id=G-EZW1WCYLT4",
			}
		},
		{
			tag: "script",
			attrs: {
				crossorigin: "anonymous",
				src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2944495108494397",
			}
		}
	],
});
