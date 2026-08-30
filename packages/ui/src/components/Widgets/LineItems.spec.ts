import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CartPanel from './CartPanel.vue'
import LineItems from './LineItems.vue'

describe('LineItems', () => {
    it('shows quantity, amount and a dedicated payment pill', () => {
        const wrapper = mount(LineItems, {
            props: {
                items: [
                    {
                        key: '1',
                        label: 'Flat white',
                        detail: 'Takeaway',
                        qty: 2,
                        amount: '8.00',
                        status: 'paid',
                    },
                ],
            },
        })

        expect(wrapper.text()).toContain('Flat white')
        expect(wrapper.text()).toContain('Takeaway')
        expect(wrapper.text()).toContain('×2')
        expect(wrapper.text()).toContain('8.00')
        expect(wrapper.get('[data-slot="badge"]').attributes('data-variant')).toBe('success')
    })

    it('colours an unpaid line as danger, not the tenant accent', () => {
        const wrapper = mount(LineItems, {
            props: {
                items: [{ key: '1', label: 'Lease', amount: '400.00', status: 'unpaid' }],
            },
        })

        expect(wrapper.get('[data-slot="badge"]').attributes('data-variant')).toBe('destructive')
    })

    it('emits qty and remove when editable', async () => {
        const wrapper = mount(LineItems, {
            props: {
                editable: true,
                items: [{ key: '1', label: 'Flat white', qty: 1, amount: '4.00' }],
            },
        })

        await wrapper.get('[aria-label="Increase quantity"]').trigger('click')
        expect(wrapper.emitted('qty')?.[0]).toEqual(['1', 2])

        await wrapper.get('[aria-label="Remove Flat white"]').trigger('click')
        expect(wrapper.emitted('remove')?.[0]).toEqual(['1'])
    })
})

describe('CartPanel', () => {
    it('shows an empty state when there are no lines', () => {
        const wrapper = mount(CartPanel, { props: { items: [] } })

        expect(wrapper.get('[data-slot="cart-empty"]').text()).toContain('Cart is empty')
        expect(wrapper.text()).not.toContain('Total')
    })

    it('renders formatted totals and the pay slot', () => {
        const wrapper = mount(CartPanel, {
            props: {
                items: [{ key: '1', label: 'Mug', qty: 1, amount: 'KES 1,200' }],
                subtotal: 'KES 1,200',
                tax: 'KES 192',
                total: 'KES 1,392',
            },
            slots: { pay: '<button type="button">Pay</button>' },
        })

        expect(wrapper.text()).toContain('Subtotal')
        expect(wrapper.text()).toContain('KES 1,200')
        expect(wrapper.text()).toContain('KES 192')
        expect(wrapper.text()).toContain('KES 1,392')
        expect(wrapper.text()).toContain('Pay')
    })

    it('renders a formatted discount line', () => {
        const wrapper = mount(CartPanel, {
            props: {
                items: [{ key: '1', label: 'Mug', qty: 1, amount: 'KES 1,200' }],
                subtotal: 'KES 1,200',
                discount: '−KES 120',
                total: 'KES 1,080',
            },
        })

        expect(wrapper.get('[data-slot="cart-discount"]').text()).toContain('−KES 120')
    })
})
