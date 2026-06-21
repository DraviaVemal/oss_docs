import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import tailwindcss from '@tailwindcss/vite';
import { sidebar } from "./sidebar";

export default defineConfig({
    site: "https://docs.draviavemal.com/openxml-office",
    base: "/openxml-office",
    output: "static",
    outDir: "../dist/openxml-office",
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
            title: "OpenXML-Office",
            components: {
                Banner: "../components/Banner.astro",
                Head: "../components/Head.astro",
                PageSidebar: "../components/RightSidebar.astro",
                PageTitle: "../components/PageTitle.astro",
                Sidebar: "../components/Sidebar.astro",
                ThemeSelect: "../components/ThemeSelect.astro",
            },
            lastUpdated: true,
            social: [
                {
                    icon: 'document',
                    label: 'Documentation',
                    href: '/'
                }, {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/DraviaVemal/OpenXML-Office'
                }],
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
        })]
});