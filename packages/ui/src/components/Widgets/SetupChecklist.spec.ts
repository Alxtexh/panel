import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SetupChecklist from './SetupChecklist.vue'

describe('SetupChecklist', () => {
    /**
     * NOTHING RENDERS FOR AN EMPTY LIST. A fresh installation with no
     * history and nothing currently wrong has no checklist to show - an
     * empty card would be a permanent fixture answering a question nobody
     * is asking.
     */
    it('renders nothing when there are no items', () => {
        const wrapper = mount(SetupChecklist, { props: { items: [] } })

        expect(wrapper.find('section').exists()).toBe(false)
    })

    it('highlights the first undone item, separately from the rest', () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                items: [
                    { key: 'a', title: 'First problem', detail: 'Fix this first.', done: false },
                    { key: 'b', title: 'Second problem', detail: 'Fix this next.', done: false },
                ],
            },
        })

        const text = wrapper.text()
        expect(text).toContain('First problem')
        expect(text).toContain('Fix this first.')
        // The second item is in the list, not the highlighted slot.
        expect(text).toContain('Second problem')
    })

    /**
     * DONE ITEMS ARE STRUCK THROUGH, NOT REMOVED - the whole point of the
     * "finished ones stay visible" design. This is a regression pin for
     * that specific rendering choice, not just "the title appears".
     */
    it('shows a done item struck through rather than dropping it', () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                items: [{ key: 'a', title: 'Fixed already', detail: '', done: true }],
            },
        })

        expect(wrapper.text()).toContain('Fixed already')
        expect(wrapper.find('.line-through').exists()).toBe(true)
    })

    it('does not show a highlighted next step when everything is done', () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                items: [{ key: 'a', title: 'Fixed already', detail: '', done: true }],
            },
        })

        expect(wrapper.find('.border-amber-500\\/30').exists()).toBe(false)
    })

    it('puts a primary button on the next step when it has an href', () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                items: [
                    {
                        key: 'organisation',
                        title: 'Organisation',
                        detail: 'Name and logo.',
                        done: false,
                        href: '/settings/organisation',
                        actionLabel: 'Open',
                    },
                    {
                        key: 'settings',
                        title: 'Settings',
                        detail: '',
                        done: false,
                        href: '/settings',
                        actionLabel: 'Open',
                    },
                ],
            },
        })

        expect(wrapper.find('a[href="/settings/organisation"]').exists()).toBe(true)
        expect(wrapper.find('a[href="/settings"]').exists()).toBe(true)
        expect(wrapper.find('a[href="/settings/organisation"]').text()).toContain('Open')
    })

    it('emits skip when Skip remaining is clicked', async () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                items: [{ key: 'a', title: 'X', detail: '', done: false, href: '/x' }],
                skipLabel: 'Skip remaining',
            },
        })

        await wrapper.get('button').trigger('click')

        expect(wrapper.emitted('skip')).toHaveLength(1)
    })

    it('links to the full report only when a reportHref is given', () => {
        const withHref = mount(SetupChecklist, {
            props: {
                items: [{ key: 'a', title: 'X', detail: '', done: false }],
                reportHref: '/operations/monitoring',
            },
        })
        const withoutHref = mount(SetupChecklist, {
            props: { items: [{ key: 'a', title: 'X', detail: '', done: false }] },
        })

        expect(withHref.find('a[href="/operations/monitoring"]').exists()).toBe(true)
        expect(withoutHref.find('a').exists()).toBe(false)
    })

    it('onboarding variant is a compact card with segmented progress, not a stacked list', () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                variant: 'onboarding',
                heading: 'Get started',
                items: [
                    { key: 'a', title: 'First', detail: 'Do first.', done: true },
                    {
                        key: 'b',
                        title: 'Second',
                        detail: 'Do second.',
                        href: '/second',
                        actionLabel: 'Open',
                        done: false,
                    },
                    { key: 'c', title: 'Third', detail: 'Do third.', done: false },
                ],
            },
        })

        const text = wrapper.text()
        // No bare "Step X of Y" count - DESIGN_RULES.md rule 5 calls that a
        // dead control. Progress is a segment per step instead, checked below
        // via aria-valuenow, and via the segment count matching the items.
        expect(text).not.toContain('Step 2 of 3')
        expect(text).toContain('Second')
        expect(text).toContain('Do second.')
        expect(text).not.toContain('Do third.')
        expect(text).not.toContain('1 complete')
        expect(wrapper.find('h2').exists()).toBe(false)
        expect(wrapper.find('ul').exists()).toBe(false)
        expect(wrapper.findAll('section')).toHaveLength(1)
        expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toBe('33')
        expect(wrapper.find('[role="progressbar"]').findAll('span')).toHaveLength(3)
        expect(wrapper.find('a[href="/second"]').exists()).toBe(true)
        expect(wrapper.find('.rounded-full').exists()).toBe(false)
    })

    it('onboarding variant does not list ghost buttons for future steps', () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                variant: 'onboarding',
                items: [
                    {
                        key: 'a',
                        title: 'Current',
                        detail: '',
                        done: false,
                        href: '/current',
                    },
                    {
                        key: 'b',
                        title: 'Future',
                        detail: '',
                        done: false,
                        href: '/future',
                    },
                ],
            },
        })

        expect(wrapper.find('a[href="/current"]').exists()).toBe(true)
        expect(wrapper.find('a[href="/future"]').exists()).toBe(false)
        expect(wrapper.text()).not.toContain('Future')
    })

    it('onboarding variant keeps skip remaining on the same row', async () => {
        const wrapper = mount(SetupChecklist, {
            props: {
                variant: 'onboarding',
                skipLabel: 'Skip remaining',
                items: [{ key: 'a', title: 'X', detail: 'Hover detail.', href: '/x', done: false }],
            },
        })

        expect(wrapper.find('h2').exists()).toBe(false)
        await wrapper.get('button').trigger('click')
        expect(wrapper.emitted('skip')).toHaveLength(1)
    })
})
