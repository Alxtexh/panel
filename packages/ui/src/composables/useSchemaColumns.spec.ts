import { describe, expect, it } from 'vitest'
import { hasBadgeValue } from './useSchemaColumns'

describe('hasBadgeValue', () => {
    /**
     * THE "NULL" PILL REGRESSION, pinned. A nullable badge column once
     * rendered String(null) inside a capitalize pill, so an unanswered
     * question read as a value called "Null". Empty is empty - all three
     * empty shapes render the em dash every other column uses.
     */
    it('refuses every empty shape', () => {
        expect(hasBadgeValue(null)).toBe(false)
        expect(hasBadgeValue(undefined)).toBe(false)
        expect(hasBadgeValue('')).toBe(false)
    })

    /** Real values badge - including falsy ones that are genuine answers. */
    it('accepts real values, including falsy ones', () => {
        expect(hasBadgeValue('gold')).toBe(true)
        expect(hasBadgeValue('active')).toBe(true)
        expect(hasBadgeValue(0)).toBe(true)
        expect(hasBadgeValue(false)).toBe(true)
    })
})
