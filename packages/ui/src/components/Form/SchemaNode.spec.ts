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

/**
 * The layout components that closed the Filament gap: flex, fieldset, callout.
 *
 * THESE ASSERT MARKUP, NOT THAT IT MOUNTS. A `component` string no branch in
 * SchemaNode claims falls through every `v-else-if` and renders NOTHING - with
 * the children it was handed, silently. "It mounted" passes that; "it produced
 * a `<fieldset>`" does not.
 */
function layout(node: Record<string, unknown>) {
    return mount(SchemaNode, {
        props: { node: node as never, values: {} },
    }).html()
}

describe('SchemaNode - flex', () => {
    it('is a wrapping row by default', () => {
        const html = layout({ component: 'flex', children: [] })

        expect(html).toContain('flex')
        expect(html).toContain('flex-wrap')
    })

    it('maps align and gap onto real classes', () => {
        const html = layout({ component: 'flex', align: 'end', gap: 'lg', children: [] })

        expect(html).toContain('items-end')
        expect(html).toContain('gap-6')
    })

    /**
     * THE LOOKUP MAP IS THE POINT. `items-${align}` compiles and then emits a
     * class Tailwind never generated - it scans for literal strings and cannot
     * see one built at runtime - so the row loses its alignment with nothing
     * reporting it. An unknown value must fall back to a class that exists.
     */
    it('falls back to a real class for an alignment it does not know', () => {
        const html = layout({ component: 'flex', align: 'nonsense', children: [] })

        expect(html).toContain('items-start')
        expect(html).not.toContain('items-nonsense')
    })

    it('stops wrapping when asked', () => {
        expect(layout({ component: 'flex', wrap: false, children: [] })).toContain('flex-nowrap')
    })
})

describe('SchemaNode - fieldset', () => {
    /**
     * A REAL `<fieldset>` AND `<legend>`, which is most of why it exists. A
     * screen reader announces the legend before every control inside, so
     * "Line 1" is heard as "Billing address, Line 1". A styled div groups it
     * visually and tells a blind user nothing.
     */
    it('renders a fieldset with a legend, not a styled div', () => {
        const html = layout({ component: 'fieldset', label: 'Billing address', children: [] })

        expect(html).toContain('<fieldset')
        expect(html).toContain('<legend')
        expect(html).toContain('Billing address')
    })

    it('shows a description when given one', () => {
        const html = layout({
            component: 'fieldset',
            label: 'Billing address',
            description: 'Where invoices are sent.',
            children: [],
        })

        expect(html).toContain('Where invoices are sent.')
    })
})

describe('SchemaNode - callout', () => {
    it('renders its body and title', () => {
        const html = layout({
            component: 'callout',
            title: 'Heads up',
            body: 'Saving this emails every customer on the plan.',
        })

        expect(html).toContain('Heads up')
        expect(html).toContain('Saving this emails every customer on the plan.')
    })

    /**
     * `role="note"`, NOT `alert`. An alert interrupts a screen reader
     * mid-sentence - right for something that just went wrong, wrong for text
     * that has been on the page since it loaded.
     */
    it('is a note rather than an alert', () => {
        const html = layout({ component: 'callout', body: 'Heads up.' })

        expect(html).toContain('role="note"')
        expect(html).not.toContain('role="alert"')
    })

    /**
     * DANGER DOES NOT BORROW THE VALIDATION-ERROR LOOK. An authored warning
     * wearing the same bare red as an invalid field teaches people to read red
     * as "I typed something wrong" and dismiss it - and the one time it means
     * "this cannot be undone" it reads like the other twelve.
     */
    it('gives danger its own surface', () => {
        const html = layout({ component: 'callout', body: 'Deletes everything.', tone: 'danger' })

        expect(html).toContain('bg-destructive/10')
        expect(html).toContain('border-destructive/30')
    })

    it('falls back to info for a tone it does not know', () => {
        expect(layout({ component: 'callout', body: 'Hm.', tone: 'chartreuse' })).toContain(
            'bg-muted/50',
        )
    })
})
