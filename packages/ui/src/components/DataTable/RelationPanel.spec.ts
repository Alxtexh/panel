import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RelationPanel from './RelationPanel.vue'
import type { SchemaColumn } from '../../composables/useSchemaColumns'

const columns: SchemaColumn[] = [
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'note', label: 'Note', type: 'text' },
]

describe('RelationPanel', () => {
    it('wraps content in TableShell with a title band and actions', () => {
        const wrapper = mount(RelationPanel, {
            props: {
                title: 'Comments',
                columns,
                rows: [{ id: 1, title: 'Hello', note: null }],
                loaded: true,
            },
            slots: {
                actions: '<button type="button">Add</button>',
            },
        })

        expect(wrapper.text()).toContain('Comments')
        expect(wrapper.text()).toContain('Add')
        expect(wrapper.text()).toContain('Hello')
        expect(wrapper.text()).toContain('None')
        expect(wrapper.find('.rounded-xl').exists()).toBe(true)
    })

    it('renders PkEmptyState when loaded with no rows', () => {
        const wrapper = mount(RelationPanel, {
            props: {
                title: 'Tags',
                columns,
                rows: [],
                loaded: true,
                emptyTitle: 'No tags yet',
                emptyText: 'Nothing linked.',
            },
        })

        expect(wrapper.find('[data-slot="empty-state"]').exists()).toBe(true)
        expect(wrapper.text()).toContain('No tags yet')
        expect(wrapper.text()).toContain('Nothing linked.')
    })

    it('keeps load-more in the pagination band', async () => {
        const wrapper = mount(RelationPanel, {
            props: {
                columns,
                rows: [{ id: 1, title: 'One', note: 'a' }],
                loaded: true,
                nextCursor: 'cursor-2',
            },
        })

        await wrapper.get('button').trigger('click')

        expect(wrapper.emitted('load')?.[0]).toEqual(['cursor-2'])
    })

    it('mounts TableToolbar when the relation declares filters', () => {
        const wrapper = mount(RelationPanel, {
            props: {
                title: 'Sessions',
                columns,
                rows: [{ id: 1, title: 'One', note: 'a' }],
                loaded: true,
                filterSchema: [{ key: 'status', label: 'Status', type: 'select', options: ['online'] }],
                filters: { status: null },
            },
        })

        expect(wrapper.find('input[type="search"], input[placeholder*="Search"]').exists()).toBe(true)
        expect(wrapper.text()).toMatch(/Filters|Tools/)
    })
})
