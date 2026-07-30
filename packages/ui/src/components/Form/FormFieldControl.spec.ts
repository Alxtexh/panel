import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import FormFieldControl from './FormFieldControl.vue'
import type { FormField } from './types'

const daysField: FormField = {
    key: 'days',
    label: 'Valid for',
    type: 'number',
    presets: [1, 7, 30],
} as FormField

describe('FormFieldControl - number presets', () => {
    /**
     * BESIDE THE INPUT, NOT INSTEAD OF IT. The presets are shortcuts that write
     * into the same field the bare input edits - not a separate control - so a
     * number field's presence alone must not conjure them out of nothing.
     */
    it('renders no preset chips for a number field that declares none', () => {
        const wrapper = mount(FormFieldControl, {
            props: { field: { key: 'x', label: 'X', type: 'number' } as FormField, value: null },
        })

        expect(wrapper.findAll('button[type="button"]').length).toBe(0)
    })

    it('renders no preset chips for a non-number field, even with presets set', () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: { key: 'x', label: 'X', type: 'text', presets: [1, 2] } as FormField,
                value: null,
            },
        })

        expect(wrapper.findAll('button[type="button"]').length).toBe(0)
    })

    it('renders one chip per preset, labelled with the number', () => {
        const wrapper = mount(FormFieldControl, { props: { field: daysField, value: null } })

        const chips = wrapper.findAll('button[type="button"]')
        expect(chips.map((c) => c.text())).toEqual(['1', '7', '30'])
    })

    /**
     * `type="button"`, PINNED. The component's own comment calls this
     * load-bearing: the default inside a form is `submit`, so a regression here
     * would make every chip save the form instead of filling the input.
     */
    it('gives every preset chip an explicit type="button"', () => {
        const wrapper = mount(FormFieldControl, { props: { field: daysField, value: null } })

        for (const chip of wrapper.findAll('.flex.flex-wrap.gap-1\\.5 button')) {
            expect(chip.attributes('type')).toBe('button')
        }
    })

    /**
     * CLICKING WRITES THE VALUE, as a string - the same shape the bare number
     * input emits on `@input`, so a preset click and a typed value are
     * indistinguishable to whatever handles `change`.
     */
    it('emits change with the preset value, as a string, when clicked', async () => {
        const wrapper = mount(FormFieldControl, { props: { field: daysField, value: null } })

        await wrapper.findAll('button[type="button"]')[1].trigger('click')

        expect(wrapper.emitted('change')).toEqual([['7']])
    })

    /**
     * COMPARED LOOSELY, ON PURPOSE - mirrors PkVisualSelect's own note. The
     * input's value arrives as the string `"7"` after a round trip; strict
     * equality against the preset number `7` would show nothing pressed on a
     * field that has a perfectly good matching value.
     */
    it('marks the matching preset pressed, comparing loosely', () => {
        const wrapper = mount(FormFieldControl, { props: { field: daysField, value: '7' } })

        const chips = wrapper.findAll('button[type="button"]')
        expect(chips[1].attributes('aria-pressed')).toBe('true')
        expect(chips[0].attributes('aria-pressed')).toBe('false')
        expect(chips[2].attributes('aria-pressed')).toBe('false')
    })

    it('marks no preset pressed when the value matches none of them', () => {
        const wrapper = mount(FormFieldControl, { props: { field: daysField, value: '47' } })

        for (const chip of wrapper.findAll('button[type="button"]')) {
            expect(chip.attributes('aria-pressed')).toBe('false')
        }
    })
})
