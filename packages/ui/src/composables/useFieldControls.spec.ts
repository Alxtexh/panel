import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import {
    fieldControl,
    hasFieldControl,
    registeredFieldTypes,
    registerFieldControl,
    resetFieldControls,
} from './useFieldControls'

const Slider = defineComponent({ name: 'Slider', template: '<i />' })
const ColourPicker = defineComponent({ name: 'ColourPicker', template: '<i />' })

describe('useFieldControls', () => {
    beforeEach(() => {
        resetFieldControls()
    })

    it('hands back what was registered', () => {
        registerFieldControl('slider', Slider)

        expect(fieldControl('slider')).toBe(Slider)
        expect(hasFieldControl('slider')).toBe(true)
    })

    /**
     * Mirrors useOptionPreviews' own distinction: `undefined` means no control
     * claimed this type, which is a wiring bug the caller should surface loudly -
     * not the same as a built-in type the component draws itself.
     */
    it('returns undefined for a type nothing claimed', () => {
        expect(fieldControl('nope')).toBeUndefined()
        expect(hasFieldControl('nope')).toBe(false)
    })

    /**
     * Registering twice replaces, without warning - the override mechanism an
     * application uses to swap out a built-in, and what makes HMR survivable
     * when a plugin's entry point re-runs on every save.
     */
    it('lets a later registration replace an earlier one', () => {
        registerFieldControl('colour', Slider)
        registerFieldControl('colour', ColourPicker)

        expect(fieldControl('colour')).toBe(ColourPicker)
        expect(registeredFieldTypes()).toEqual(['colour'])
    })

    /** Sorted, because this list is read out in a "no control for X" error message. */
    it('lists registered types in a stable order', () => {
        registerFieldControl('slider', Slider)
        registerFieldControl('colour', ColourPicker)

        expect(registeredFieldTypes()).toEqual(['colour', 'slider'])
    })

    /**
     * A module-level map outlives a test. Without a reset, one test registering
     * a control changes what the next one resolves - the shared-state failure
     * where the suite passes in order and fails alone.
     */
    it('forgets everything on reset', () => {
        registerFieldControl('slider', Slider)
        resetFieldControls()

        expect(registeredFieldTypes()).toEqual([])
    })
})
