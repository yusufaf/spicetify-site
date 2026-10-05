// Source list for scripts/sync-extensions.mjs and the sidebar in astro.config.mjs.
// `slug` is also the URL segment: spicetify.yusufaf.dev/<slug>/. `label` is only
// the sidebar fallback; the page title comes from each repo's manifest.json.
export const EXTENSIONS = [
    { label: 'Album Length', order: 1, repo: 'spicetify-album-length', slug: 'album-length' },
    { label: 'Enhanced Folders', order: 2, repo: 'spicetify-enhanced-folders', slug: 'enhanced-folders' },
    { label: 'Enhanced Pins', order: 3, repo: 'spicetify-enhanced-pins', slug: 'enhanced-pins' },
    { label: 'Listening List', order: 4, repo: 'spicetify-listening-list', slug: 'listening-list' },
    { label: 'Local Files+', order: 5, repo: 'spicetify-local-files-plus', slug: 'local-files-plus' },
    { label: 'RateYourMusic Integration', order: 6, repo: 'spicetify-rym', slug: 'rym' },
]

export const GITHUB_OWNER = 'yusufaf'
export const SITE = 'https://spicetify.yusufaf.dev'
