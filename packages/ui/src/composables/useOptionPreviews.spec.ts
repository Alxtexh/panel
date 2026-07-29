import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import {
    hasOptionPreview,
    optionPreview,
    registerOptionPreview,
    registeredOptionPreviews,
    resetOptionPreviews,
} from './useOptionPreviews'

const Dashed = defineComponent({ name: 'Dashed', template: '<i />' })
const Solid = defineComponent({ name: 'Solid', template: '<i />' })

describe('useOptionPreviews', () => {
    beforeEach(() => {
        resetOptionPreviews()
    })

    it('hands back what was registered', () => {
        registerOptionPreview('dashed', Dashed)

        expect(optionPreview('dashed')).toBe(Dashed)
        expect(hasOptionPreview('dashed')).toBe(true)
    })

    /**
     * The distinction the whole design rests on. `undefined` means nothing
     * claimed the name, which the control reports as a wiring bug; it must not
     * be confused with a field that declared no renderer at all, which is a
     * legitimate mode. A registry that returned a placeholder here would erase
     * that difference and make a typo look deliberate.
     */
    it('returns undefined for a name nothing claimed', () => {
        expect(optionPreview('nope')).toBeUndefined()
        expect(hasOptionPreview('nope')).toBe(false)
    })

    /**
     * Registering twice replaces, and this is the override mechanism rather
     * than an accident: an application that wants its own code-box drawing
     * registers after us and wins. It is also what makes hot module replacement
     * survivable - a plugin's entry point re-runs on every save.
     */
    it('lets a later registration replace an earlier one', () => {
        registerOptionPreview('code-box', Dashed)
        registerOptionPreview('code-box', Solid)

        expect(optionPreview('code-box')).toBe(Solid)
        expect(registeredOptionPreviews()).toEqual(['code-box'])
    })

    /**
     * Sorted, because this list is read out in an error message. "registered:
     * swatch, ticket, voucher-code-box" is scannable; insertion order is
     * whatever the import graph happened to do that day.
     */
    it('lists registered names in a stable order', () => {
        registerOptionPreview('ticket', Dashed)
        registerOptionPreview('swatch', Dashed)

        expect(registeredOptionPreviews()).toEqual(['swatch', 'ticket'])
    })

    /**
     * A module-level map outlives a test. Without a reset, one test registering
     * a renderer changes what the next one resolves - the shared-state failure
     * where the suite passes in order and fails alone.
     */
    it('forgets everything on reset', () => {
        registerOptionPreview('swatch', Dashed)
        resetOptionPreviews()

        expect(registeredOptionPreviews()).toEqual([])
    })
})
