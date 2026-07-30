import { describe, expect, it } from 'vitest'
import { contrastRatio, readableShade } from './useContrast'

describe('useContrast', () => {
    it('matches the WCAG reference ratio for black on white', () => {
        expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 1)
    })

    it('returns 1 for a colour against itself', () => {
        expect(contrastRatio('#3366ff', '#3366ff')).toBeCloseTo(1, 2)
    })

    it('is symmetric', () => {
        expect(contrastRatio('#1e90ff', '#ffffff')).toBeCloseTo(
            contrastRatio('#ffffff', '#1e90ff'),
            5,
        )
    })

    it('finds a darker shade that clears the threshold against a light background', () => {
        const shade = readableShade('#dbe9f8', '#ffffff', 4.5)

        expect(contrastRatio(shade, '#ffffff')).toBeGreaterThanOrEqual(4.5)
    })

    it('finds a lighter shade that clears the threshold against a dark background', () => {
        const shade = readableShade('#1a1a2e', '#000000', 4.5)

        expect(contrastRatio(shade, '#000000')).toBeGreaterThanOrEqual(4.5)
    })

    it('leaves an already-passing colour alone', () => {
        expect(readableShade('#0f766e', '#ffffff', 4.5)).toBe('#0f766e')
    })
})
