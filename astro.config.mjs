// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://openxml-office.draviavemal.com",
    base: "/",
    output: "static",
    redirects: {
        "/1.0/": "/1.0/getting-started",
        "/3.0/": "/3.0/getting-started"
    },
    integrations: [starlight({
        title: "OpenXML-Office",
        components: {
            Head: "./src/components/Head.astro",
            PageTitle: "./src/components/PageTitle.astro",
            PageSidebar: "./src/components/RightSidebar.astro"
        },
        logo: {
            src: "./src/assets/logo.svg",
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
        lastUpdated: true,
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
                label: "Global",
                collapsed: true,
                items: [{
                    label: 'Chart',
                    items: [
                        {
                            label: 'Area',
                            link: 'global/chart/area'
                        },
                        {
                            label: 'Bar',
                            link: 'global/chart/bar'
                        },
                        {
                            label: 'Column',
                            link: 'global/chart/column'
                        },
                        {
                            label: 'Line',
                            link: 'global/chart/line'
                        },
                        {
                            label: 'Pie',
                            link: 'global/chart/pie'
                        },
                        {
                            label: 'Scatter',
                            link: 'global/chart/scatter'
                        },
                        {
                            label: 'Combo',
                            link: 'global/chart/combo'
                        },
                        {
                            label: 'Waterfall',
                            link: 'global/chart/waterfall'
                        }
                    ]
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
                    link: 'presentation/chart'
                }]
            },
            {
                label: "Spreadsheet",
                items: [{
                    label: 'Excel',
                    link: 'spreadsheet/excel'
                },
                {
                    label: 'Worksheet',
                    link: 'spreadsheet/worksheet'
                },
                {
                    label: 'Shape',
                    link: 'spreadsheet/shape'
                },
                {
                    label: 'Picture',
                    link: 'spreadsheet/picture'
                },
                {
                    label: 'Table',
                    link: 'spreadsheet/table'
                },
                {
                    label: 'Style',
                    link: 'spreadsheet/style'
                },
                {
                    label: 'Chart',
                    link: 'spreadsheet/chart'
                }]
            }
        ],
        plugins: [
            starlightVersions({
                versions: [
                    {
                        slug: "4.0",
                        label: "v4.x (Alpha)",
                        redirect: "root"
                    },
                    {
                        slug: "3.0",
                        label: "v3.x (Discontinued)",
                        redirect: "root"
                    },
                    {
                        slug: "1.0",
                        label: "v1.x (Discontinued)",
                        redirect: "root"
                    }],
                current: {
                    label: "v2.x (Stable)",
                    redirect: "root"
                }
            })],
        customCss: ["./src/styles/global.css"]
    })],

    prefetch: true,

    server: {
        host: "0.0.0.0",
    },

    vite: {
        plugins: [tailwindcss()],
    },
});