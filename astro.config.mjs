// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';

// https://astro.build/config
export default defineConfig({
	site: "https://openxml-office.draviavemal.com",
	base: "/",
	output: "static",
	redirects: { "/": "/getting-started" },
	integrations: [starlight({
		title: "OpenXML-Office",
		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DraviaVemal/OpenXML-Office' }],
		sidebar: [
			{
				label: "Welcome",
				items: [{
					label: 'Getting Started',
					link: '/getting-started'
				},
				{
					label: 'Introduction',
					link: '/introduction'
				},
				{
					label: 'Privacy Policy',
					link: '/privacy-policy'
				},
				{
					label: 'License',
					link: '/license'
				}]
			},
			{
				label: "Presentation",
				items: [{
					label: 'PowerPoint',
					link: 'presentation/powerpoint'
				},
				{
					label: 'Slide',
					link: 'presentation/slide'
				},
				{
					label: 'Shape',
					link: 'presentation/shape'
				},
				{
					label: 'Picture',
					link: 'presentation/picture'
				},
				{
					label: 'Textbox',
					link: 'presentation/textbox'
				},
				{
					label: 'Table',
					link: 'presentation/table'
				},
				{
					label: 'Chart',
					items: [
						{
							label: 'General',
							link: 'presentation/powerpoint'
						},
						{
							label: 'Area',
							link: 'presentation/slide'
						},
						{
							label: 'Bar',
							link: 'presentation/shape'
						},
						{
							label: 'Column',
							link: 'presentation/picture'
						},
						{
							label: 'Line',
							link: 'presentation/textbox'
						},
						{
							label: 'Pie',
							link: 'presentation/table'
						},
						{
							label: 'Scatter',
							link: 'presentation/picture'
						},
						{
							label: 'Combo',
							link: 'presentation/textbox'
						},
						{
							label: 'Waterfall',
							link: 'presentation/table'
						}
					]
				}]
			}
		],
		plugins: [starlightVersions({
			versions: [
				{
					slug: "4.0",
					label: "v4.x (Alpha)"
				},
				{
					slug: "3.0",
					label: "v3.x (Discontinued)"
				},
				{
					slug: "1.0",
					label: "v1.x (Discontinued)"
				}],
			current: {
				label: "v2.x (Stable)"
			}
		})]
	})],
	prefetch: true,
	server: {
		host: "0.0.0.0",
		open: true
	},

});
