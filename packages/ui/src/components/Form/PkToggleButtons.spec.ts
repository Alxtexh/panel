import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkToggleButtons from './PkToggleButtons.vue'

const OPTIONS = [
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
]

describe('PkToggleButtons', () => {
    it('renders a radiogroup for single select', () => {
        const wrapper = mount(PkToggleButtons, {
            props: { field: { key: 'status' }, modelValue: null, options: OPTIONS },
        })

        expect(wrapper.find('[data-test="toggle-buttons-field"]').attributes('role')).toBe('radiogroup')
        expect(wrapper.findAll('input[type="radio"]')).toHaveLength(2)
    })

    it('emits the clicked option value', async () => {
        const wrapper = mount(PkToggleButtons, {
            props: { field: { key: 'status' }, modelValue: null, options: OPTIONS },
        })

        await wrapper.find('input[value="published"]').setValue()

        expect(wrapper.emitted('update:modelValue')).toEqual([['published']])
    })

    it('toggles membership when multiple', async () => {
        const wrapper = mount(PkToggleButtons, {
            props: {
                field: { key: 'channels', multiple: true },
                modelValue: ['draft'],
                options: OPTIONS,
            },
        })

        expect(wrapper.find('[data-test="toggle-buttons-field"]').attributes('role')).toBe('group')
        await wrapper.find('input[value="published"]').setValue()

        expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toEqual(['draft', 'published'])
    })

    it('marks selected when values match loosely', () => {
        const wrapper = mount(PkToggleButtons, {
            props: {
                field: { key: 'n', options: undefined },
                modelValue: '3',
                options: [{ value: 3, label: 'Three' }],
            },
        })

        expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true)
    })

    it('hides labels when asked but keeps aria-label', () => {
        const wrapper = mount(PkToggleButtons, {
            props: {
                field: { key: 'status', hiddenLabels: true, icons: { draft: 'pencil' } },
                modelValue: null,
                options: OPTIONS,
            },
        })

        expect(wrapper.text()).not.toContain('Draft')
        expect(wrapper.find('input').attributes('aria-label')).toBe('Draft')
    })
})
