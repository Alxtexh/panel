import { describe, expect, it } from 'vitest'
import { actionColorTone } from './actionColorTone'

describe('actionColorTone', () => {
    it('maps each declared colour to its own text class', () => {
        expect(actionColorTone('primary')).toBe('text-primary')
        expect(actionColorTone('success')).toContain('emerald')
        expect(actionColorTone('warning')).toContain('amber')
        expect(actionColorTone('danger')).toBe('text-destructive')
        expect(actionColorTone('info')).toContain('sky')
    })

    it('falls back to gray for an unset colour', () => {
        expect(actionColorTone(undefined)).toBe(actionColorTone('gray'))
        expect(actionColorTone(null)).toBe(actionColorTone('gray'))
    })

    it('falls back to gray for a colour it does not know', () => {
        expect(actionColorTone('chartreuse')).toBe(actionColorTone('gray'))
    })
})
