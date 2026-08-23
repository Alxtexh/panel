import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ResourceWorkflow from './ResourceWorkflow.vue'

vi.mock('@inertiajs/vue3', () => ({
    Head: { name: 'Head', template: '<div />', props: ['title'] },
    Link: { name: 'Link', template: '<a><slot /></a>', props: ['href'] },
}))

const baseProps = {
    schema: { key: 'tickets', label: 'Ticket', labelPlural: 'Tickets' },
    workflow: {
        column: 'status',
        group: 'Status',
        states: {
            open: { label: 'Open', color: 'warning' },
            resolved: { label: 'Resolved', color: 'success' },
        },
        transitions: [],
    },
    graph: {
        nodes: [
            { id: 'open', label: 'Open', color: 'warning', rank: 0 },
            { id: 'resolved', label: 'Resolved', color: 'success', rank: 1 },
        ],
        edges: [
            {
                id: 'resolve__open',
                key: 'resolve',
                label: 'Mark resolved',
                from: 'open',
                to: 'resolved',
            },
        ],
    },
    indexUrl: '/tickets',
}

describe('ResourceWorkflow', () => {
    it('renders state nodes and transition labels', () => {
        const wrapper = mount(ResourceWorkflow, { props: baseProps })

        expect(wrapper.text()).toContain('Open')
        expect(wrapper.text()).toContain('Resolved')
        expect(wrapper.text()).toContain('Mark resolved')
        expect(wrapper.text()).toContain('2 states, 1 transitions on status')
    })

    it('shows an empty state when there are no nodes', () => {
        const wrapper = mount(ResourceWorkflow, {
            props: {
                ...baseProps,
                graph: { nodes: [], edges: [] },
            },
        })

        expect(wrapper.text()).toContain('No states declared')
    })
})
