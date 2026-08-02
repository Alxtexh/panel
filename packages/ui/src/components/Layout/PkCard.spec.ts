import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PkCard from './PkCard.vue'

describe('PkCard', () => {
    /**
     * A CARD WITH NOTHING IN ITS HEADER IS A STRAY LINE ACROSS THE TOP. Both
     * the element and its bottom border depend on there being something to put
     * there, which is why the absence is asserted rather than the presence.
     */
    it('has no header when there is nothing to head it', () => {
        const wrapper = mount(PkCard, { slots: { default: 'Body' } })

        expect(wrapper.find('header').exists()).toBe(false)
        expect(wrapper.text()).toContain('Body')
    })

    it('renders a title, a description and actions', () => {
        const wrapper = mount(PkCard, {
            props: { title: 'Routers', description: 'Every device on the network' },
            slots: { actions: '<button>Add</button>' },
        })

        expect(wrapper.find('header').text()).toContain('Routers')
        expect(wrapper.find('header').text()).toContain('Every device on the network')
        expect(wrapper.find('header button').text()).toBe('Add')
    })

    /**
     * PADDING IS ON UNLESS TURNED OFF, and the exception is a table - which
     * fills its card edge to edge. A default of "no padding" would make every
     * ordinary card look broken until somebody remembered the prop.
     */
    it('pads its body by default and stops when told', () => {
        expect(mount(PkCard).find('.p-4').exists()).toBe(true)

        expect(
            mount(PkCard, { props: { padded: false } })
                .find('.p-4')
                .exists(),
        ).toBe(false)
    })

    it('renders a footer only when given one', () => {
        expect(mount(PkCard).find('footer').exists()).toBe(false)

        expect(
            mount(PkCard, { slots: { footer: 'Totals' } })
                .find('footer')
                .text(),
        ).toBe('Totals')
    })

    /**
     * AND `class` STILL MERGES. The component deliberately ships no tone or
     * variant props - a card that needs a red border takes one this way, and
     * the alternative is a styling language growing one prop at a time.
     */
    it('merges a class onto the card', () => {
        const wrapper = mount(PkCard, { attrs: { class: 'border-destructive' } })

        expect(wrapper.find('section').classes()).toContain('border-destructive')
        expect(wrapper.find('section').classes()).toContain('rounded-lg')
    })
})
