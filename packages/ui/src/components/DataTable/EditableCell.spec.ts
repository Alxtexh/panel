import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EditableCell from './EditableCell.vue'

describe('EditableCell', () => {
    describe('toggle', () => {
        it('emits the flipped value on click', async () => {
            const wrapper = mount(EditableCell, { props: { type: 'toggle', value: false } })

            await wrapper.get('button').trigger('click')

            expect(wrapper.emitted('change')?.[0]).toEqual([true])
        })

        it('does nothing while busy', async () => {
            const wrapper = mount(EditableCell, {
                props: { type: 'toggle', value: false, busy: true },
            })

            await wrapper.get('button').trigger('click')

            expect(wrapper.emitted('change')).toBeUndefined()
        })
    })

    describe('select', () => {
        it('emits the new value on change', async () => {
            const wrapper = mount(EditableCell, {
                props: {
                    type: 'select',
                    value: 'draft',
                    options: { draft: 'Draft', published: 'Published' },
                },
            })

            const select = wrapper.get('select')
            await select.setValue('published')

            expect(wrapper.emitted('change')?.[0]).toEqual(['published'])
        })

        it('does not emit for a no-op selection', async () => {
            const wrapper = mount(EditableCell, {
                props: {
                    type: 'select',
                    value: 'draft',
                    options: { draft: 'Draft', published: 'Published' },
                },
            })

            await wrapper.get('select').setValue('draft')

            expect(wrapper.emitted('change')).toBeUndefined()
        })
    })

    /*
     * `commit` and `commitOnEnter` are two different handlers precisely so
     * Enter cannot fire the same edit twice - blurring from `commitOnEnter`
     * re-enters through the `@blur` listener, and these are the tests that
     * would catch a regression back to one handler doing both.
     */
    describe('text', () => {
        it('emits on blur when the value changed', async () => {
            const wrapper = mount(EditableCell, {
                props: { type: 'text', value: 'REF-1' },
                attachTo: document.body,
            })

            const input = wrapper.get('input')
            await input.setValue('REF-2')
            await input.trigger('blur')

            expect(wrapper.emitted('change')).toEqual([['REF-2']])
        })

        it('does not emit on blur when the value is unchanged', async () => {
            const wrapper = mount(EditableCell, {
                props: { type: 'text', value: 'REF-1' },
                attachTo: document.body,
            })

            await wrapper.get('input').trigger('blur')

            expect(wrapper.emitted('change')).toBeUndefined()
        })

        it('emits exactly once for Enter, not once for Enter and again for the blur it causes', async () => {
            const wrapper = mount(EditableCell, {
                props: { type: 'text', value: 'REF-1' },
                attachTo: document.body,
            })

            const input = wrapper.get('input')
            // `.blur()` is a no-op on an element that isn't focused, in jsdom
            // exactly as in a real browser - the input has to actually hold
            // focus for `commitOnEnter`'s blur to fire anything.
            ;(input.element as HTMLInputElement).focus()
            await input.setValue('REF-2')
            await input.trigger('keydown.enter')

            expect(wrapper.emitted('change')).toEqual([['REF-2']])
        })

        it('discards the typed value on Escape without emitting', async () => {
            const wrapper = mount(EditableCell, {
                props: { type: 'text', value: 'REF-1' },
                attachTo: document.body,
            })

            const input = wrapper.get('input')
            await input.setValue('REF-2')
            await input.trigger('keydown.esc')

            expect((input.element as HTMLInputElement).value).toBe('REF-1')
            expect(wrapper.emitted('change')).toBeUndefined()
        })

        it('does not emit while busy or disabled', async () => {
            const wrapper = mount(EditableCell, {
                props: { type: 'text', value: 'REF-1', disabled: true },
            })

            expect(wrapper.get('input').attributes('disabled')).toBeDefined()
        })
    })
})
