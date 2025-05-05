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
		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
		plugins: [starlightVersions({
			versions: [
				{
					slug: "1.0",
					label: "v1.x"
				}],
			current: {
				label: "v2.x",
			}
		})]
	})],
	prefetch: true,
	redirects: {
		"/[version]": "/[version]/getting started"
	},
	server: {
		host: "0.0.0.0",
		open: true
	},

});
