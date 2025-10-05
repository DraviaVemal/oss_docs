import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: "https://docs.draviavemal.com/tauri-remote-ui",
	base: "/tauri-remote-ui",
	output: "static",
	outDir: "../dist/tauri-remote-ui",
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
			title: 'Tauri Remote UI',
			components: {
				Banner: "../components/Banner.astro",
				Head: "../components/Head.astro",
				PageSidebar: "../components/RightSidebar.astro",
				PageTitle: "../components/PageTitle.astro",
				Sidebar: "../components/Sidebar.astro",
				ThemeSelect: "../components/ThemeSelect.astro",
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DraviaVemal/tauri-remote-ui' }],
			lastUpdated: true,
			logo: {
				src: "../assets/logo.svg",
				alt: "Logo"
			},
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
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				}
			],
			plugins: [starlightVersions({
				versions: [
					{
						slug: "1.0",
						label: "v1.x (Discontinued)",
						redirect: "root"
					}
				],
				current: {
					label: "v2.x (Stable)",
					redirect: "root"
				}
			})]
		}),
	],
});
