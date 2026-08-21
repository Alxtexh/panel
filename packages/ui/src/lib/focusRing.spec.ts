import { describe, expect, it } from 'vitest'
import { FOCUS_RING, FOCUS_RING_SOFT, FOCUS_RING_WITHIN } from './focusRing'

describe('focusRing tokens', () => {
    it('shares one ring width across input and soft chrome', () => {
        expect(FOCUS_RING).toContain('ring-[3px]')
        expect(FOCUS_RING).toContain('ring-ring/50')
        expect(FOCUS_RING_SOFT).toContain('ring-[3px]')
        expect(FOCUS_RING_WITHIN).toContain('ring-[3px]')
        expect(FOCUS_RING).not.toMatch(/ring-2(?!\d)/)
    })
})
