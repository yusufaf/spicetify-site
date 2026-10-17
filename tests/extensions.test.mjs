import { describe, expect, it } from 'vitest'
import { EXTENSIONS, GUIDES_DIR } from '../src/data/extensions.mjs'
import { markAllCurrent } from '../src/lib/markAllCurrent.mjs'

describe('EXTENSIONS', () => {
    it('never uses the guides folder as an extension slug, which the sync would wipe', () => {
        expect(EXTENSIONS.map(({ slug }) => slug.toLowerCase())).not.toContain(GUIDES_DIR)
    })
})

describe('markAllCurrent', () => {
    const link = (href) => ({ href, isCurrent: false, type: 'link' })
    const group = (entries) => ({ collapsed: true, entries, type: 'group' })

    it('marks every copy of the current page, in any group', () => {
        const guide = '/guides/pin-more-than-20-playlists-spotify/'
        const sidebar = [group([link(guide)]), group([link('/enhanced-pins/'), link(guide)]), group([link('/rym/')])]
        expect(markAllCurrent(sidebar, guide)).toBe(true)
        expect(sidebar[0].entries[0].isCurrent).toBe(true)
        expect(sidebar[1].entries.map((entry) => entry.isCurrent)).toEqual([false, true])
        expect(sidebar[2].entries[0].isCurrent).toBe(false)
    })

    it('leaves the sidebar alone when the page is not in it', () => {
        const sidebar = [group([link('/rym/')])]
        expect(markAllCurrent(sidebar, '/404/')).toBe(false)
        expect(sidebar[0].entries[0].isCurrent).toBe(false)
    })
})
