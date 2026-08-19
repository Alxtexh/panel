import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TableToolbar from './TableToolbar.vue'

describe('TableToolbar filter chips', () => {
    function mountToolbar() {
        return mount(TableToolbar, {
            props: {
                search: '',
                filterSchema: [{ key: 'status', label: 'Status', type: 'select' }],
                filters: { status: 'published' },
                columns: [{ key: 'name', label: 'Name' }],
                hidden: new Set<string>(),
                indicators: [
                    { key: 'status', label: 'Status: published', removable: true },
                    { key: 'active', label: 'Active: Yes', removable: true },
                ],
            },
        })
    }

    it('renders a chip per indicator and clears one filter', async () => {
        const wrapper = mountToolbar()

        expect(wrapper.text()).toContain('Status: published')
        expect(wrapper.text()).toContain('Active: Yes')
        expect(wrapper.text()).toContain('Clear all')

        await wrapper.get('[dusk="filter-indicator-status"] button').trigger('click')

        expect(wrapper.emitted('clear-filter')).toEqual([['status']])
    })

    it('clears every filter from the chip row', async () => {
        const wrapper = mountToolbar()

        await wrapper.get('[dusk="clear-all-filters"]').trigger('click')

        expect(wrapper.emitted('clear-filters')).toHaveLength(1)
    })

    it('shows a mobile tools trigger below the md breakpoint', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: (query: string) => ({
                matches: query.includes('max-width'),
                media: query,
                addEventListener: () => {},
                removeEventListener: () => {},
            }),
        })

        const wrapper = mountToolbar()

        expect(wrapper.find('[dusk="mobile-table-tools"]').exists()).toBe(true)
        expect(wrapper.find('.hidden.md\\:flex').exists()).toBe(true)
    })
})
