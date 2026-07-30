import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkCodeBox from './PkCodeBox.vue'

describe('PkCodeBox', () => {
    it('renders the code, unbroken', () => {
        const wrapper = mount(PkCodeBox, { props: { code: 'ABCD-1234-EFGH' } })

        expect(wrapper.text()).toContain('ABCD-1234-EFGH')
    })

    /**
     * TICKET IS SOLID, NOT DASHED. It was dashed first, and at picker-tile size
     * the notch is a couple of pixels while the border is the only thing the eye
     * reads - so Ticket and Dashed were indistinguishable. This pins the fix:
     * whatever the frame looks like, it must not carry `border-dashed`.
     */
    it('draws the ticket framing with a solid border, not dashed', () => {
        const wrapper = mount(PkCodeBox, { props: { code: 'AB-1234', style: 'ticket' } })

        const box = wrapper.find('.font-mono')
        expect(box.classes()).toContain('border-solid')
        expect(box.classes()).not.toContain('border-dashed')
    })

    it('draws the dashed framing as dashed', () => {
        const wrapper = mount(PkCodeBox, { props: { code: 'AB-1234', style: 'dashed' } })

        expect(wrapper.find('.font-mono').classes()).toContain('border-dashed')
    })

    it('falls back to the dashed framing for an unrecognised style', () => {
        const wrapper = mount(PkCodeBox, { props: { code: 'AB-1234', style: 'not-a-real-style' } })

        expect(wrapper.find('.font-mono').classes()).toContain('border-dashed')
    })

    /**
     * `mono` FORCES BLACK, REGARDLESS OF THE ACCENT PASSED IN. The component's
     * own note is explicit that this is not a colour to lighten - it is what an
     * operator chose when they said the office prints without colour, and the
     * honest way to show that is literal black.
     */
    it('ignores the accent and draws black when mono is set', () => {
        const wrapper = mount(PkCodeBox, {
            props: { code: 'AB-1234', accent: '#c2410c', mono: true },
        })

        const box = wrapper.find('.font-mono')
        expect(box.attributes('style')).toContain('color: rgb(0, 0, 0)')
        expect(box.attributes('style')).toContain('border-color: rgb(0, 0, 0)')
    })

    it('uses the accent when mono is off', () => {
        const wrapper = mount(PkCodeBox, {
            props: { code: 'AB-1234', accent: '#c2410c', mono: false },
        })

        expect(wrapper.find('.font-mono').attributes('style')).toContain('color: rgb(194, 65, 12)')
    })

    /**
     * COMPACT DROPS THE CAPTION AND THE LETTER-SPACING. A picker tile shows the
     * framing, not the copy underneath it - and tracking that makes a real code
     * readable makes a short one overflow a 40px tile, so it is off at that size.
     */
    it('hides the caption when compact', () => {
        const wrapper = mount(PkCodeBox, {
            props: { code: 'AB-1234', caption: 'Worth KES 100', compact: true },
        })

        expect(wrapper.text()).not.toContain('Worth KES 100')
    })

    it('shows the caption at full size', () => {
        const wrapper = mount(PkCodeBox, {
            props: { code: 'AB-1234', caption: 'Worth KES 100', compact: false },
        })

        expect(wrapper.text()).toContain('Worth KES 100')
    })
})
