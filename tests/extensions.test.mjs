import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { EXTENSIONS, GUIDES_DIR } from '../src/data/extensions.mjs'

const guidePath = (guide, ext) => new URL(`../src/content/docs/${GUIDES_DIR}/${guide}.${ext}`, import.meta.url)

describe('EXTENSIONS', () => {
    it('never uses the guides folder as an extension slug, which the sync would wipe', () => {
        expect(EXTENSIONS.map(({ slug }) => slug)).not.toContain(GUIDES_DIR)
    })

    it('only lists guides that exist, so the sidebar never links to a missing page', () => {
        for (const { guides = [], slug } of EXTENSIONS) {
            for (const guide of guides) {
                expect(existsSync(guidePath(guide, 'md')) || existsSync(guidePath(guide, 'mdx')), `${slug}: ${guide}`).toBe(true)
            }
        }
    })
})
