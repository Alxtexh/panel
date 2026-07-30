import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { registerOptionPreview, resetOptionPreviews } from '../../composables/useOptionPreviews'
import PkVisualSelect from './PkVisualSelect.vue'

const OPTIONS = [
    { value: 'dashed', label: 'Dashed' },
    { value: 'solid', label: 'Solid' },
]

describe('PkVisualSelect', () => {
    beforeEach(() => {
        resetOptionPreviews()
    })

    /**
     * TILES BY DEFAULT, SEGMENTED ONLY WHEN ASKED. `layout` is a schema value
     * from PHP - `->segmented()` sets it - and this is the one place that value
     * turns into markup. Get the mapping backwards and every two-option field in
     * the panel renders as six-tile grids again.
     */
    it('renders tiles when no layout is given', () => {
        const wrapper = mount(PkVisualSelect, {
            props: { field: { key: 'x' }, modelValue: null, options: OPTIONS },
        })

        expect(wrapper.find('[role="radiogroup"]').classes()).toContain('grid')
    })

    it('renders a segmented control when the field asks for one', () => {
        const wrapper = mount(PkVisualSelect, {
            props: { field: { key: 'x', layout: 'segmented' }, modelValue: null, options: OPTIONS },
        })

        expect(wrapper.find('[role="radiogroup"]').classes()).toContain('rounded-full')
        expect(wrapper.find('[role="radiogroup"]').classes()).not.toContain('grid')
    })

    /**
     * COMPARED LOOSELY, ON PURPOSE. An option value arrives from JSON as the
     * number `3`; a value that has been through a form round trip comes back as
     * the string `"3"`. Strict equality would show nothing selected on a form
     * that has a perfectly good value - this is the test for the loose
     * comparison the component's own note explains.
     */
    it('marks an option selected when the value matches loosely', () => {
        const wrapper = mount(PkVisualSelect, {
            props: {
                field: { key: 'x' },
                modelValue: 'dashed', // string, matching a string option value
                options: OPTIONS,
            },
        })

        const dashed = wrapper.find('input[value="dashed"]')
        expect((dashed.element as HTMLInputElement).checked).toBe(true)
    })

    it('emits update:modelValue with the clicked option value', async () => {
        const wrapper = mount(PkVisualSelect, {
            props: { field: { key: 'x' }, modelValue: null, options: OPTIONS },
        })

        await wrapper.find('input[value="solid"]').setValue()

        expect(wrapper.emitted('update:modelValue')).toEqual([['solid']])
    })

    /**
     * NAMED A RENDERER, GOT NOTHING - distinguished from naming none at all.
     * Declaring no `preview` is a legitimate mode (a plain labelled grid);
     * naming one nothing registered is a wiring bug, and the component says so
     * rather than silently falling back to plain tiles, which would make a typo
     * look like a deliberate design choice.
     */
    it('reports a missing renderer by name, and lists what is registered', () => {
        registerOptionPreview('swatch', { template: '<i/>' })

        const wrapper = mount(PkVisualSelect, {
            props: { field: { key: 'x', preview: 'nope' }, modelValue: null, options: OPTIONS },
        })

        expect(wrapper.text()).toContain('nope')
        expect(wrapper.text()).toContain('swatch')
    })

    it('draws no missing-renderer warning when no renderer was requested', () => {
        const wrapper = mount(PkVisualSelect, {
            props: { field: { key: 'x' }, modelValue: null, options: OPTIONS },
        })

        expect(wrapper.text()).not.toContain('No preview registered')
    })

    /** An option list that resolves empty is a real state, not an empty grid. */
    it('says there is nothing to choose from when the option list is empty', () => {
        const wrapper = mount(PkVisualSelect, {
            props: { field: { key: 'x' }, modelValue: null, options: [] },
        })

        expect(wrapper.text()).toContain('Nothing to choose from yet.')
    })
})
