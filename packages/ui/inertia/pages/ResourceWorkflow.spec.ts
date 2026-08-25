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

    it('creates a transition by dragging from an out-handle to another node', async () => {
        put.mockClear()
        const wrapper = mount(ResourceWorkflow, {
            props: {
                ...baseProps,
                workflow: {
                    ...baseProps.workflow,
                    transitions: [],
                },
                graph: {
                    ...baseProps.graph,
                    edges: [],
                },
            },
        })

        const handle = wrapper.get('[data-testid="out-handle-open"]')
        await handle.trigger('pointerdown', { button: 0, clientX: 240, clientY: 128 })

        const resolved = wrapper.get('[data-node-id="resolved"]')
        await resolved.trigger('pointerenter')
        await resolved.trigger('pointerup', { button: 0, clientX: 400, clientY: 128 })

        expect(wrapper.text()).toContain('Save layout')
        expect(wrapper.text()).toContain('Open to Resolved')

        await wrapper.get('[data-testid="save-layout"]').trigger('click')

        expect(put).toHaveBeenCalled()
        const [, payload] = put.mock.calls[0]
        expect(payload.transitions).toHaveLength(1)
        expect(payload.transitions[0].to).toBe('resolved')
        expect(payload.transitions[0].from).toEqual(['open'])
        expect(payload.transitions[0].label).toBe('Open to Resolved')
        expect(payload.positions.open).toEqual({ x: 40, y: 80 })
    })

    it('reconnects an edge target by dragging the target handle', async () => {
        put.mockClear()
        const wrapper = mount(ResourceWorkflow, {
            props: {
                ...baseProps,
                workflow: {
                    ...baseProps.workflow,
                    states: {
                        open: { label: 'Open', color: 'warning' },
                        pending: { label: 'Pending', color: 'info' },
                        resolved: { label: 'Resolved', color: 'success' },
                    },
                },
                graph: {
                    nodes: [
                        { id: 'open', label: 'Open', color: 'warning', rank: 0 },
                        { id: 'pending', label: 'Pending', color: 'info', rank: 1 },
                        { id: 'resolved', label: 'Resolved', color: 'success', rank: 2 },
                    ],
                    edges: baseProps.graph.edges,
                },
                positions: {
                    open: { x: 40, y: 80 },
                    pending: { x: 320, y: 200 },
                    resolved: { x: 320, y: 80 },
                },
            },
        })

        const target = wrapper.get('[data-testid="edge-target-resolve__open"]')
        await target.trigger('pointerdown', { button: 0, clientX: 320, clientY: 128 })

        const pending = wrapper.get('[data-node-id="pending"]')
        await pending.trigger('pointerenter')
        await pending.trigger('pointerup', { button: 0, clientX: 320, clientY: 248 })

        await wrapper.get('[data-testid="save-layout"]').trigger('click')

        const [, payload] = put.mock.calls[0]
        expect(payload.transitions[0].key).toBe('resolve')
        expect(payload.transitions[0].to).toBe('pending')
        expect(payload.transitions[0].from).toEqual(['open'])
    })

    it('deletes a selected edge from the canvas', async () => {
        put.mockClear()
        const wrapper = mount(ResourceWorkflow, { props: baseProps })

        await wrapper.get('[data-testid="edge-hit-resolve__open"]').trigger('click')
        expect(wrapper.find('[data-testid="delete-edge"]').exists()).toBe(true)

        await wrapper.get('[data-testid="delete-edge"]').trigger('click')
        expect(wrapper.text()).toContain('Save layout')
        expect(wrapper.text()).not.toContain('Mark resolved')

        await wrapper.get('[data-testid="save-layout"]').trigger('click')
        const [, payload] = put.mock.calls[0]
        expect(payload.transitions).toHaveLength(0)
    })

    it('undoes a canvas edge delete', async () => {
        const wrapper = mount(ResourceWorkflow, { props: baseProps })

        await wrapper.get('[data-testid="edge-hit-resolve__open"]').trigger('click')
        await wrapper.get('[data-testid="delete-edge"]').trigger('click')
        expect(wrapper.text()).not.toContain('Mark resolved')

        await wrapper.get('[data-testid="undo-canvas"]').trigger('click')
        expect(wrapper.text()).toContain('Mark resolved')
    })

    it('deletes a selected state from the canvas and keeps at least one', async () => {
        put.mockClear()
        const wrapper = mount(ResourceWorkflow, { props: baseProps })

        await wrapper.get('[data-node-id="resolved"]').trigger('click')
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete' }))
        await wrapper.vm.$nextTick()

        expect(wrapper.find('[data-node-id="resolved"]').exists()).toBe(false)
        expect(wrapper.find('[data-node-id="open"]').exists()).toBe(true)
        expect(wrapper.text()).toContain('1 states')

        await wrapper.get('[data-testid="save-layout"]').trigger('click')
        const [, payload] = put.mock.calls[0]
        expect(payload.states).toEqual({ open: { label: 'Open', color: 'warning' } })
        expect(payload.transitions).toHaveLength(0)
    })

    it('fans parallel edges between the same pair', () => {
        const wrapper = mount(ResourceWorkflow, {
            props: {
                ...baseProps,
                workflow: {
                    ...baseProps.workflow,
                    transitions: [
                        {
                            key: 'a',
                            label: 'Path A',
                            to: 'resolved',
                            from: ['open'],
                            ability: 'update',
                        },
                        {
                            key: 'b',
                            label: 'Path B',
                            to: 'resolved',
                            from: ['open'],
                            ability: 'update',
                        },
                    ],
                },
                graph: {
                    ...baseProps.graph,
                    edges: [
                        {
                            id: 'a__open',
                            key: 'a',
                            label: 'Path A',
                            from: 'open',
                            to: 'resolved',
                        },
                        {
                            id: 'b__open',
                            key: 'b',
                            label: 'Path B',
                            from: 'open',
                            to: 'resolved',
                        },
                    ],
                },
            },
        })

        const paths = wrapper.findAll('path').filter((p) => p.attributes('d')?.startsWith('M '))
        const routed = paths.filter((p) => (p.attributes('d') ?? '').includes('C'))
        expect(routed.length).toBeGreaterThanOrEqual(2)
        const d1 = routed[0].attributes('d')
        const d2 = routed[1].attributes('d')
        expect(d1).not.toBe(d2)
    })
})
