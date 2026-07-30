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
