import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkStatusBadge from './PkStatusBadge.vue'
import { statusTone } from './statusTone'

/**
 * Status colour must not follow the tenant accent. These cases pin the lookup
 * that POS stock, rental occupancy and payment flags all share.
 */
describe('statusTone', () => {
    it('maps common statuses onto dedicated tones', () => {
        expect(statusTone('paid')).toBe('success')
        expect(statusTone('in stock')).toBe('success')
        expect(statusTone('occupied')).toBe('success')
        expect(statusTone('unpaid')).toBe('danger')
        expect(statusTone('out-of-stock')).toBe('danger')
        expect(statusTone('offline')).toBe('danger')
        expect(statusTone('vacant')).toBe('info')
        expect(statusTone('pending')).toBe('warning')
        expect(statusTone('ending')).toBe('warning')
        expect(statusTone('connected')).toBe('success')
    })

    it('lets an explicit tone win over the map', () => {
        expect(statusTone('paid', 'warning')).toBe('warning')
    })
})

describe('PkStatusBadge', () => {
    it('renders paid as the success variant, not the branded default', () => {
        const wrapper = mount(PkStatusBadge, { props: { status: 'paid' } })

        expect(wrapper.get('[data-slot="badge"]').attributes('data-variant')).toBe('success')
        expect(wrapper.text()).toBe('paid')
    })

    it('renders vacant as info, so occupancy is not a brand colour', () => {
        const wrapper = mount(PkStatusBadge, { props: { status: 'vacant' } })

        expect(wrapper.get('[data-slot="badge"]').attributes('data-variant')).toBe('info')
    })
})
