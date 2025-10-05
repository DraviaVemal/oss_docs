import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightVersions from 'starlight-versions';
import { sidebar } from "./sidebar";

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
			title: 'xml_rs',
			components: {
				Banner: "../components/Banner.astro",
				Head: "../components/Head.astro",
				PageSidebar: "../components/RightSidebar.astro",
				PageTitle: "../components/PageTitle.astro",
				Sidebar: "../components/Sidebar.astro",
				ThemeSelect: "../components/ThemeSelect.astro",
			},
			social: [
				{
					icon: 'document',
					label: 'Documentation',
					href: '/'
				}, {
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/DraviaVemal/xml_rs'
				}],
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
			sidebar: sidebar,
			plugins: [starlightVersions({
				versions: [{
					slug: "2.0",
					label: "v2.x (Alpha)",
					redirect: "root"
				}],
				current: {
					label: "v1.x (Stable)",
					redirect: "root"
				}
			})],
			customCss: ["./src/styles/global.css"]
		}),
	]
});
