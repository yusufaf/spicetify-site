// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightPageActions from 'starlight-page-actions'
import { EXTENSIONS, SITE } from './src/data/extensions.mjs'

export default defineConfig({
    base: '/',
    integrations: [
        starlight({
            components: {
                Footer: './src/components/Footer.astro',
                Head: './src/components/Head.astro',
            },
            customCss: ['@fontsource-variable/figtree', './src/styles/custom.css'],
            description:
                'Docs for a set of Spicetify extensions that add album lengths, folder and pin management, listening lists, local-file tags and RateYourMusic ratings to the Spotify desktop client.',
            favicon: '/favicon.svg',
            logo: { alt: '', src: './src/assets/logo.svg' },
            plugins: [
                // `baseUrl` is deliberately omitted: setting it makes this plugin
                // emit its own URL-list llms.txt, which would collide with the
                // content-bearing one from starlight-llms-txt below.
                starlightPageActions({
                    actions: {
                        chatgpt: true,
                        claude: true,
                        cursor: true,
                        githubCopilot: true,
                        markdown: true,
                        perplexity: false,
                        t3chat: false,
                        v0: false,
                    },
                    position: 'page-title',
                    prompt:
                        'Read {url} — documentation for a Spicetify extension. Use it to answer my questions about this page.',
                    share: false,
                }),
                starlightLlmsTxt({
                    description:
                        'Spicetify extensions that add album lengths, folder and pin management, listening lists, local-file tags and RateYourMusic ratings to the Spotify desktop client.',
                    details:
                        'Each extension is a single JavaScript file installed through Spicetify Marketplace or by hand. Pages are generated from each extension repository README and changelog.',
                    optionalLinks: [
                        {
                            description: 'Source, issues, and releases for every extension.',
                            label: 'GitHub profile',
                            url: 'https://github.com/yusufaf',
                        },
                    ],
                    projectName: 'Spicetify extensions',
                    promote: ['getting-started', 'troubleshooting'],
                }),
            ],
            sidebar: [
                {
                    items: [
                        { label: 'Install Spicetify and extensions', slug: 'getting-started' },
                        { label: 'Troubleshooting', slug: 'troubleshooting' },
                    ],
                    label: 'Getting started',
                },
                {
                    items: [{ autogenerate: { directory: 'guides' } }],
                    label: 'Guides',
                },
                ...EXTENSIONS.map(({ label, slug }) => ({
                    collapsed: true,
                    items: [{ autogenerate: { directory: slug } }],
                    label,
                })),
                {
                    items: [{ label: 'For developers', slug: 'developers' }],
                    label: 'Developers',
                },
            ],
            social: [
                {
                    href: 'https://github.com/yusufaf',
                    icon: 'github',
                    label: 'GitHub',
                },
            ],
            title: 'Spicetify extensions',
        }),
    ],
    site: SITE,
})
