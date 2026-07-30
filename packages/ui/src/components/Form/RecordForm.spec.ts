import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RecordForm from './RecordForm.vue'
import type { FormField } from './types'

/**
 * The contract that broke.
 *
 * The document designer bound `@update:model-value` on this component. It
 * emits `change(key, value)`. That mismatch type-checked, built, and shipped -
 * clicking a radio flipped it in the DOM, the DOM reported `checked`, and the
 * form never heard about it. Nothing here caught it, because nothing here
 * existed; a browser test since has, but a browser test is minutes and this is
 * milliseconds. Both are worth having: the browser test proves the designer
 * page wires it correctly, this proves the component's half of the contract
 * cannot silently change again.
 */
describe('RecordForm', () => {
    const titleField: FormField = { key: 'title', label: 'Title', type: 'text' }

    it('emits change with the field key and the new value, from the flat fallback', async () => {
        const wrapper = mount(RecordForm, {
            props: { fields: [titleField], modelValue: { title: '' } },
        })

        await wrapper.find('#f-title').setValue('Hotspot voucher')

        expect(wrapper.emitted('change')).toEqual([['title', 'Hotspot voucher']])
    })

    /**
     * NEVER `update:modelValue`. This is the assertion that would have failed
     * the moment the designer's binding was written, without needing a browser
     * at all - `emitted('update:model-value')` would have been undefined and a
     * reviewer or a CI run would have seen it before it shipped.
     */
    it('never emits update:model-value', async () => {
        const wrapper = mount(RecordForm, {
            props: { fields: [titleField], modelValue: { title: '' } },
        })

        await wrapper.find('#f-title').setValue('x')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        expect(wrapper.emitted('update:model-value')).toBeUndefined()
    })

    /**
     * The layout-tree path is a SEPARATE code path from the flat fallback - see
     * `hasLayout` in the component - and re-emits through `SchemaNode`. A
     * contract that held for one path and not the other would still look
     * correct in whichever path somebody happened to test by hand.
     */
    it('emits change through a layout tree the same way it does through the flat fallback', async () => {
        const wrapper = mount(RecordForm, {
            props: {
                nodes: [
                    {
                        component: 'section',
                        label: 'Details',
                        children: [{ component: 'field', ...titleField }],
                    },
                ],
                modelValue: { title: '' },
            },
        })

        await wrapper.find('#f-title').setValue('Hotspot voucher')

        expect(wrapper.emitted('change')).toEqual([['title', 'Hotspot voucher']])
    })

    /**
     * ONE FIELD AT A TIME, not a merged replacement object.
     *
     * The component's own comment explains why: emitting a full
     * `{ ...modelValue, [key]: value }` reads the parent's value before it has
     * updated, so two fields changing in the same tick lose all but the last.
     * This asserts the emitted payload IS a bare key and value, which is the
     * shape that avoids the bug rather than merely working around it once.
     */
    it('emits a bare key and value, not a merged object', async () => {
        const wrapper = mount(RecordForm, {
            props: { fields: [titleField], modelValue: { title: 'old' } },
        })

        await wrapper.find('#f-title').setValue('new')

        const [key, value] = wrapper.emitted('change')![0]
        expect(key).toBe('title')
        expect(value).toBe('new')
        expect(typeof value).not.toBe('object')
    })

    /** A field-level conflict (antipatterns §2.2) surfaces inline rather than freezing the page. */
    it('shows the conflict message from errors._conflict', () => {
        const wrapper = mount(RecordForm, {
            props: {
                fields: [titleField],
                modelValue: { title: '' },
                errors: { _conflict: 'This record changed since you opened it.' },
            },
        })

        expect(wrapper.text()).toContain('This record changed since you opened it.')
    })

    it('renders nothing about a conflict when there is none', () => {
        const wrapper = mount(RecordForm, {
            props: { fields: [titleField], modelValue: { title: '' } },
        })

        expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    })
})
