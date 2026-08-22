import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
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

const messageField: FormField = {
    key: 'body',
    label: 'Body',
    type: 'textarea',
    chips: { '@user': "The reader's name", '@organisation': 'The organisation name' },
} as FormField

describe('FormFieldControl - message chips', () => {
    /** Mirrors the number-preset tests above: nothing renders without a declared token map. */
    it('renders no chips for a textarea with no chips declared', () => {
        const wrapper = mount(FormFieldControl, {
            props: { field: { key: 'x', label: 'X', type: 'textarea' } as FormField, value: null },
        })

        expect(wrapper.findAll('button[type="button"]').length).toBe(0)
    })

    it('renders no chips for a non-textarea field, even with chips set', () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: { key: 'x', label: 'X', type: 'text', chips: { '@a': 'A' } } as FormField,
                value: null,
            },
        })

        expect(wrapper.findAll('button[type="button"]').length).toBe(0)
    })

    it('renders one chip per token', () => {
        const wrapper = mount(FormFieldControl, { props: { field: messageField, value: '' } })

        const chips = wrapper.findAll('button[type="button"]')
        expect(chips.map((c) => c.text())).toEqual(['@user', '@organisation'])
    })

    /**
     * ATTACHED TO THE REAL DOCUMENT, deliberately - `insertChip` finds this
     * field's own textarea by `document.getElementById`, which only resolves
     * against elements actually in the document. A detached mount (Vue Test
     * Utils' default) would make the lookup fail silently and this test would
     * pass for the wrong reason: nothing to insert into, nothing asserted.
     */
    it('inserts the token at the cursor and emits the new value', async () => {
        const wrapper = mount(FormFieldControl, {
            props: { field: messageField, value: 'Hi , welcome.' },
            attachTo: document.body,
        })

        const textarea = wrapper.find('textarea').element as HTMLTextAreaElement
        textarea.setSelectionRange(3, 3) // "Hi |, welcome." - cursor after "Hi "

        await wrapper.find('button[type="button"]').trigger('click')

        expect(wrapper.emitted('change')?.[0]).toEqual(['Hi @user, welcome.'])

        wrapper.unmount()
    })
})

describe('FormFieldControl - affixes', () => {
    it('renders prefix and suffix text in the schema chrome', () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'price',
                    label: 'Price',
                    type: 'text',
                    prefix: 'KES',
                    suffix: '.00',
                } as FormField,
                value: '10',
            },
        })

        expect(wrapper.text()).toContain('KES')
        expect(wrapper.text()).toContain('.00')
    })

    it('renders a copy suffix action as a button', () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'slug',
                    label: 'Slug',
                    type: 'text',
                    suffixAction: { label: 'Copy', copy: true },
                } as FormField,
                value: 'acme',
            },
        })

        const copy = wrapper.find('button[aria-label="Copy"]')
        expect(copy.exists()).toBe(true)
        expect(copy.attributes('type')).toBe('button')
    })

    it('does not emit affix-action for a copy suffix', async () => {
        const writeText = vi.fn().mockResolvedValue(undefined)
        Object.assign(navigator, { clipboard: { writeText } })

        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'slug',
                    label: 'Slug',
                    type: 'text',
                    suffixAction: { label: 'Copy', copy: true },
                } as FormField,
                value: 'acme',
            },
        })

        await wrapper.find('button[aria-label="Copy"]').trigger('click')

        expect(wrapper.emitted('affix-action')).toBeUndefined()
        expect(writeText).toHaveBeenCalledWith('acme')
    })

    it('emits affix-action for a named POST suffix', async () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'slug',
                    label: 'Slug',
                    type: 'text',
                    suffixAction: { key: 'generate', label: 'Generate', post: true },
                } as FormField,
                value: '',
            },
        })

        await wrapper.find('button[aria-label="Generate"]').trigger('click')

        expect(wrapper.emitted('affix-action')).toEqual([['generate']])
    })

    it('emits affix-action for a named POST prefix', async () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'slug',
                    label: 'Slug',
                    type: 'text',
                    prefixAction: { key: 'upper', label: 'Upper', post: true },
                } as FormField,
                value: 'hello',
            },
        })

        await wrapper.find('button[aria-label="Upper"]').trigger('click')

        expect(wrapper.emitted('affix-action')).toEqual([['upper']])
    })

    it('renders field help with normal weight muted copy', () => {
        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'bio',
                    label: 'Bio',
                    type: 'textarea',
                    help: 'A short public summary.',
                } as FormField,
                value: '',
            },
        })

        const help = wrapper.find('p.text-xs')
        expect(help.text()).toBe('A short public summary.')
        expect(help.classes()).toContain('font-normal')
        expect(help.classes()).toContain('text-muted-foreground')
    })
})
