export const SITE_TITLE = 'Dravia Vemal — Open Source Docs';
export const SITE_DESCRIPTION =
	'Open source projects by Dravia Vemal — a way of giving back to the community that taught me. openxml-office, tauri-remote-ui and xml_rs: built and improved in the open, with commercial sponsorship options.';

/** Site author / brand. */
export const SITE_AUTHOR = 'Dravia Vemal';

/** Canonical production origin (no trailing slash). */
export const SITE_ORIGIN = 'https://docs.draviavemal.com';

/** Default social-share image (absolute path under the site origin). */
export const SITE_OG_IMAGE = '/favicon.svg';

/** Default keywords used for indexing the hub pages. */
export const SITE_KEYWORDS = [
	'Dravia Vemal',
	'open source',
	'Rust',
	'documentation',
	'openxml-office',
	'tauri-remote-ui',
	'xml_rs',
	'OpenXML',
	'docx',
	'xlsx',
	'pptx',
	'Tauri plugin',
	'XML parser',
	'AGPL-3.0',
];

/** Project registry shared by the hub pages (landing, releases, etc.). */
export const PROJECTS = [
	{
		slug: 'openxml-office',
		name: 'openxml-office',
		tagline:
			'Create and edit Excel (.xlsx), PowerPoint (.pptx) and Word (.docx) documents — a Rust core delivered to multiple languages.',
		docs: '/openxml-office',
		repo: 'https://github.com/DraviaVemal/openxml-office',
		packages: [
			{ label: 'crates.io', href: 'https://crates.io/crates/draviavemal-openxml_office' },
			{ label: 'NuGet', href: 'https://www.nuget.org/packages/draviavemal.openxml-office' },
		],
	},
	{
		slug: 'tauri-remote-ui',
		name: 'tauri-remote-ui',
		tagline:
			'Drive a Tauri app from any browser — live, while the native window keeps running.',
		docs: '/tauri-remote-ui',
		repo: 'https://github.com/DraviaVemal/tauri-remote-ui',
		packages: [
			{ label: 'crates.io', href: 'https://crates.io/crates/tauri-remote-ui' },
			{ label: 'npm', href: 'https://www.npmjs.com/package/tauri-remote-ui' },
		],
	},
	{
		slug: 'xml_rs',
		name: 'xml_rs',
		tagline:
			'A fast, low-memory, namespace-aware XML DOM parser & serializer for Rust.',
		docs: '/xml_rs',
		repo: 'https://github.com/DraviaVemal/xml_rs',
		packages: [
			{ label: 'crates.io', href: 'https://crates.io/crates/draviavemal-xml_rs' },
		],
	},
] as const;
