import { describe, expect, it } from 'vitest'
import {
    FORM_MEASURE,
    OVERLAY_FORM_MEASURE,
    PAGE_SHELL,
    PAGE_SHELL_COMPACT,
    PAGE_SHELL_STACK,
    SLIDEOVER_BODY,
    SLIDEOVER_WIDTH,
} from './pageShell'

describe('pageShell', () => {
    it('is full-bleed with padding and no centred max-width', () => {
        for (const shell of [PAGE_SHELL, PAGE_SHELL_COMPACT, PAGE_SHELL_STACK]) {
            expect(shell).toMatch(/\bw-full\b/)
            expect(shell).not.toMatch(/max-w-/)
            expect(shell).not.toMatch(/mx-auto/)
        }
    })

    it('offers a left-aligned form measure without centering', () => {
        expect(FORM_MEASURE).toBe('w-full max-w-7xl')
        expect(FORM_MEASURE).not.toMatch(/mx-auto/)
    })

    it('offers overlay measure and slideover widths for secondary surfaces', () => {
        expect(OVERLAY_FORM_MEASURE).toBe('w-full min-w-0')
        expect(OVERLAY_FORM_MEASURE).not.toMatch(/max-w-7xl/)
        expect(OVERLAY_FORM_MEASURE).not.toMatch(/mx-auto/)
        expect(SLIDEOVER_BODY).toMatch(/\bpx-4\b/)
        expect(SLIDEOVER_WIDTH.sm).toContain('w-full')
        expect(SLIDEOVER_WIDTH.xl).toContain('max-w-2xl')
    })
})
