import { describe, expect, it } from 'vitest'
import { INPUT_COPY, INPUT_PLACEHOLDER, INPUT_TEXT } from './inputClasses'

describe('inputClasses', () => {
    it('pins input value text to normal weight foreground', () => {
        expect(INPUT_TEXT).toContain('font-normal')
        expect(INPUT_TEXT).toContain('text-foreground')
    })

    it('pins placeholders to muted normal weight copy', () => {
        expect(INPUT_PLACEHOLDER).toContain('placeholder:font-normal')
        expect(INPUT_PLACEHOLDER).toContain('placeholder:text-muted-foreground')
    })

    it('combines value and placeholder tokens', () => {
        expect(INPUT_COPY).toContain(INPUT_TEXT)
        expect(INPUT_COPY).toContain(INPUT_PLACEHOLDER)
    })
})
