import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ResourceWorkflow from './ResourceWorkflow.vue'

const put = vi.fn()

vi.mock('@inertiajs/vue3', () => ({
    Head: { name: 'Head', template: '<div />', props: ['title'] },
    Link: { name: 'Link', template: '<a><slot /></a>', props: ['href'] },
    router: {
        put: (...args: unknown[]) => put(...args),
    },
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
        transitions: [
            {
                key: 'resolve',
                label: 'Mark resolved',
                to: 'resolved',
                from: ['open'],
                ability: 'update',
            },
        ],
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
    positions: {
        open: { x: 40, y: 80 },
        resolved: { x: 320, y: 80 },
    },
    indexUrl: '/tickets',
    canEdit: true,
    saveUrl: '/tickets/workflow',
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

    it('places nodes using persisted positions', () => {
        const wrapper = mount(ResourceWorkflow, { props: baseProps })
        const open = wrapper.get('[data-node-id="open"]')

        expect(open.attributes('style')).toContain('left: 40px')
        expect(open.attributes('style')).toContain('top: 80px')
    })

    it('saves layout positions through the workflow PUT', async () => {
        put.mockClear()
        const wrapper = mount(ResourceWorkflow, { props: baseProps })
        const open = wrapper.get('[data-node-id="open"]')

        await open.trigger('pointerdown', { button: 0, clientX: 40, clientY: 80 })
        await open.trigger('pointermove', { clientX: 100, clientY: 140 })
        await open.trigger('pointerup', {})

        expect(wrapper.text()).toContain('Save layout')

        await wrapper.get('[data-testid="save-layout"]').trigger('click')

        expect(put).toHaveBeenCalled()
        const [, payload] = put.mock.calls[0]
        expect(payload.positions.open).toEqual({ x: 100, y: 140 })
        expect(payload.states.open.label).toBe('Open')
        expect(payload.transitions).toHaveLength(1)
    })
})
