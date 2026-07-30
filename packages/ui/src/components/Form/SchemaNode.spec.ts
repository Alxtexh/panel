import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SchemaNode from './SchemaNode.vue'
import type { SchemaNode as SchemaNodeType } from './SchemaNode.vue'

const conditionalSection: SchemaNodeType = {
    component: 'section',
    label: 'Refund details',
    visibleWhen: { field: 'kind', value: 'refund' },
    children: [{ component: 'field', key: 'refund_reason', label: 'Reason', type: 'text' }],
}

describe('SchemaNode - conditional sections', () => {
    /**
     * THE SAME CHOICE ALREADY MADE FOR A CONDITIONAL FIELD, restated for a
     * whole section - see the note in SchemaNode.vue. A disabled-but-present
     * section still occupies the page and still submits whatever is typed
     * into it, so this asserts the section is genuinely absent from the DOM,
     * not merely styled invisible.
     */
    it('does not render a section whose condition is unmet', () => {
        const wrapper = mount(SchemaNode, {
            props: { node: conditionalSection, values: { kind: 'purchase' } },
        })

        expect(wrapper.find('section').exists()).toBe(false)
        expect(wrapper.text()).not.toContain('Refund details')
    })

    it('renders the section once its condition is met', () => {
        const wrapper = mount(SchemaNode, {
            props: { node: conditionalSection, values: { kind: 'refund' } },
        })

        expect(wrapper.find('section').exists()).toBe(true)
        expect(wrapper.text()).toContain('Refund details')
    })

    /**
     * LOOSE COMPARISON, matching the field-level condition and the server's
     * own `Component::isVisible()`. A value round-tripped through a form is
     * a string; a condition declared in PHP as a boolean serialises as the
     * literal `true` - strict equality would leave the section permanently
     * hidden even when the operator's own selection says otherwise.
     */
    it('compares the condition loosely', () => {
        const node: SchemaNodeType = {
            component: 'section',
            label: 'Business details',
            visibleWhen: { field: 'is_business', value: true },
            children: [],
        }

        const wrapper = mount(SchemaNode, { props: { node, values: { is_business: '1' } } })

        expect(wrapper.find('section').exists()).toBe(true)
    })

    it('renders a section with no condition unconditionally, as before', () => {
        const node: SchemaNodeType = {
            component: 'section',
            label: 'Always here',
            children: [],
        }

        const wrapper = mount(SchemaNode, { props: { node, values: {} } })

        expect(wrapper.find('section').exists()).toBe(true)
    })
})

describe('SchemaNode - wizard', () => {
    const wizard: SchemaNodeType = {
        component: 'wizard',
        children: [
            {
                component: 'step',
                label: 'Basics',
                children: [{ component: 'field', key: 'name', label: 'Name', type: 'text' }],
            },
            {
                component: 'step',
                label: 'Details',
                children: [{ component: 'field', key: 'notes', label: 'Notes', type: 'text' }],
            },
        ],
    }

    /**
     * THE STEP STRIP IS `PkStepIndicator` NOW, not a second copy of it - this
     * only re-asserts the behaviour that component already covers on its
     * own, to catch the wizard branch wiring the wrong prop rather than the
     * indicator itself breaking.
     */
    it('shows only the active step and advances on Next', async () => {
        const wrapper = mount(SchemaNode, { props: { node: wizard, values: {} } })

        // Every step stays mounted (v-show, not v-if) - see the wizard
        // branch's own note - so visibility, not presence, is what "only
        // the active step shows" actually means. `v-show` writes a plain
        // inline style, which is what this checks directly rather than
        // `isVisible()` - that helper reads computed style, and jsdom does
        // not resolve an inline `display: none` through it here.
        const panels = wrapper.findAll('.flex.flex-col.gap-5')
        const hidden = (el: (typeof panels)[number]) =>
            (el.attributes('style') ?? '').includes('display: none')
        expect(hidden(panels[0])).toBe(false)
        expect(hidden(panels[1])).toBe(true)
        expect(wrapper.find('[aria-label="has errors"]').exists()).toBe(false)

        await wrapper
            .findAll('button')
            .find((b) => b.text() === 'Next')
            ?.trigger('click')

        expect(hidden(panels[0])).toBe(true)
        expect(hidden(panels[1])).toBe(false)
    })

    it('flags the step containing the errored field', () => {
        const wrapper = mount(SchemaNode, {
            props: { node: wizard, values: {}, errors: { notes: 'Required' } },
        })

        expect(wrapper.find('[aria-label="has errors"]').exists()).toBe(true)
    })
})
