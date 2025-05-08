// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';

// https://astro.build/config
export default defineConfig({
	site: "https://openxml-office.draviavemal.com",
	base: "/",
	output: "static",
	integrations: [starlight({
		title: "OpenXML-Office",
		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DraviaVemal/OpenXML-Office' }],
		sidebar: [
			{
				label: "Welcome",
				items: [{ label: 'Getting Started', link: '/getting-started/' },]
			}
		],
		plugins: [starlightVersions({
			versions: [
				{
					slug: "1.0",
					label: "v1.x"
				}],
		})]
	})],
	prefetch: true,
	server: {
		host: "0.0.0.0",
		open: true
	},

});
