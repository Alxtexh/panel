import { describe, expect, it } from 'vitest'
import { MUTED_COPY, MUTED_COPY_SNUG, MUTED_COPY_XS } from './copyClasses'

describe('copyClasses', () => {
    it('pins helper and description copy to normal weight', () => {
        for (const classes of [MUTED_COPY, MUTED_COPY_XS, MUTED_COPY_SNUG]) {
            expect(classes).toContain('font-normal')
            expect(classes).toContain('text-muted-foreground')
        }
    })
})
