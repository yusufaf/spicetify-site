import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { changedUrls, pageFile, sitemapUrls } from '../scripts/indexnow.mjs'

describe('sitemapUrls', () => {
    it('reads every <loc> from a sitemap', () => {
        const xml =
            '<urlset><url><loc>https://spicetify.yusufaf.dev/</loc></url>' +
            '<url><loc>https://spicetify.yusufaf.dev/rym/</loc><lastmod>2026-10-01</lastmod></url></urlset>'
        expect(sitemapUrls(xml)).toEqual(['https://spicetify.yusufaf.dev/', 'https://spicetify.yusufaf.dev/rym/'])
    })
})

describe('pageFile', () => {
    it('maps a directory URL to its index.html', () => {
        expect(pageFile('dist', 'https://spicetify.yusufaf.dev/rym/changelog/')).toBe(
            path.join('dist', 'rym', 'changelog', 'index.html'),
        )
        expect(pageFile('dist', 'https://spicetify.yusufaf.dev/')).toBe(path.join('dist', 'index.html'))
    })

    it('keeps a file URL as is and decodes it', () => {
        expect(pageFile('dist', 'https://spicetify.yusufaf.dev/a%20b.html')).toBe(path.join('dist', 'a b.html'))
    })
})

describe('changedUrls', () => {
    it('lists new pages and pages whose hash changed, not unchanged or removed ones', () => {
        const previous = { '/same': 'a', '/edited': 'b', '/removed': 'c' }
        const current = { '/same': 'a', '/edited': 'B', '/new': 'd' }
        expect(changedUrls(current, previous)).toEqual(['/edited', '/new'])
    })

    it('lists every page when nothing was deployed before', () => {
        expect(changedUrls({ '/a': '1', '/b': '2' }, {})).toEqual(['/a', '/b'])
    })
})
