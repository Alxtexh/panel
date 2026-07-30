import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkRepeater from './PkRepeater.vue'
import type { FormField } from './types'

const instruction: FormField = {
    key: 'text',
    label: 'Instruction',
    type: 'text',
} as FormField

const contactChildren: FormField[] = [
    { key: 'name', label: 'Name', type: 'text' } as FormField,
    { key: 'phone', label: 'Phone', type: 'text' } as FormField,
]

function mountSingle(value: Record<string, unknown>[] | null, extra: Record<string, unknown> = {}) {
    return mount(PkRepeater, {
        props: {
            modelValue: value,
            children: [instruction],
            fieldKey: 'steps',
            itemLabel: 'Step',
            ...extra,
        },
    })
}

describe('PkRepeater - rows, not cards', () => {
    /**
     * DESIGN_RULES rule 6: an item is one row - ordinal badge, input,
     * controls - never a bordered card with its own heading. The heading
     * ("Step 1") is what made three short entries taller than the rest of
     * the form; the badge carries the number now.
     */
    it('renders one row per item with an ordinal badge and no per-item heading', () => {
        const wrapper = mountSingle([{ text: 'Connect.' }, { text: 'Open.' }, { text: 'Enter.' }])

        const badges = wrapper.findAll('span[aria-hidden="true"].rounded-full')
        expect(badges.map((b) => b.text())).toEqual(['1', '2', '3'])

        // No "Step 1" heading anywhere - the words appear only in aria-labels.
        expect(wrapper.text()).not.toContain('Step 1')
    })

    /**
     * A single-child repeater hides the repeated label VISUALLY ONLY. The
     * label stays in the DOM as `sr-only`, because it is the input's
     * accessible name - dropping it entirely would trade visual noise for a
     * nameless field.
     */
    it('hides a single child label visually but keeps it for screen readers', () => {
        const wrapper = mountSingle([{ text: 'Connect.' }])

        const label = wrapper.find('label')
        expect(label.exists()).toBe(true)
        expect(label.text()).toContain('Instruction')
        expect(label.classes()).toContain('sr-only')
    })

    it('keeps visible labels when a row has two or more children', () => {
        const wrapper = mount(PkRepeater, {
            props: {
                modelValue: [{ name: 'Amina', phone: '0700' }],
                children: contactChildren,
                fieldKey: 'contacts',
                itemLabel: 'Contact',
            },
        })

        const labels = wrapper.findAll('label').filter((l) => !l.classes().includes('sr-only'))
        expect(labels.map((l) => l.text())).toEqual(['Name', 'Phone'])
    })

    /**
     * DESIGN_RULES rule 5: at the limit, Add disappears rather than sitting
     * disabled next to a live counter. The counter is gone entirely - it
     * described a state instead of offering an action.
     */
    it('hides the add button at maxItems and never shows a counter', () => {
        const below = mountSingle([{ text: 'One.' }], { maxItems: 2 })
        expect(below.text()).toContain('Add step')
        expect(below.text()).not.toContain('of 2')

        const at = mountSingle([{ text: 'One.' }, { text: 'Two.' }], { maxItems: 2 })
        expect(at.text()).not.toContain('Add step')
    })

    it('still moves and removes rows from the inline controls', async () => {
        const wrapper = mountSingle([{ text: 'First.' }, { text: 'Second.' }])

        await wrapper.find('button[aria-label="Move Step 2 up"]').trigger('click')

        let emitted = wrapper.emitted('update:modelValue')
        expect(emitted?.at(-1)?.[0]).toEqual([{ text: 'Second.' }, { text: 'First.' }])

        await wrapper.find('button[aria-label="Remove Step 1"]').trigger('click')

        emitted = wrapper.emitted('update:modelValue')
        expect(emitted?.at(-1)?.[0]).toEqual([{ text: 'First.' }])
    })

    it('shows the empty state when there are no rows', () => {
        const wrapper = mountSingle(null)

        expect(wrapper.text()).toContain('No steps yet.')
    })
})
