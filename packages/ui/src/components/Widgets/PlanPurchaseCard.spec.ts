import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PlanPurchaseCard, { type PurchasablePlan } from './PlanPurchaseCard.vue'

const starter: PurchasablePlan = {
    id: 'starter',
    name: 'Starter',
    price: 9,
    priceFormatted: '$9',
    description: 'For a small team.',
    features: ['5 seats', 'Email support'],
}

describe('PlanPurchaseCard', () => {
    it('shows name, price, interval and features', () => {
        const wrapper = mount(PlanPurchaseCard, { props: { plan: starter } })

        expect(wrapper.text()).toContain('Starter')
        expect(wrapper.text()).toContain('$9')
        expect(wrapper.text()).toContain('/ month')
        expect(wrapper.text()).toContain('For a small team.')
        expect(wrapper.text()).toContain('5 seats')
        expect(wrapper.text()).toContain('Email support')
    })

    it('emits choose when the button is clicked', async () => {
        const wrapper = mount(PlanPurchaseCard, { props: { plan: starter } })

        await wrapper.get('button').trigger('click')

        expect(wrapper.emitted('choose')?.[0]).toEqual(['starter'])
    })

    it('shows a disabled Current plan button instead of Choose plan, and never both', () => {
        const wrapper = mount(PlanPurchaseCard, { props: { plan: { ...starter, current: true } } })

        const buttons = wrapper.findAll('button')

        expect(buttons).toHaveLength(1)
        expect(buttons[0]!.text()).toBe('Current plan')
        expect(buttons[0]!.attributes('disabled')).toBeDefined()
    })

    it('does not emit choose for the current plan even if clicked', async () => {
        const wrapper = mount(PlanPurchaseCard, { props: { plan: { ...starter, current: true } } })

        await wrapper.get('button').trigger('click')

        expect(wrapper.emitted('choose')).toBeUndefined()
    })

    it('highlights a recommended plan, unless it is also the current one', () => {
        const recommended = mount(PlanPurchaseCard, {
            props: { plan: { ...starter, recommended: true } },
        })

        expect(recommended.classes()).toContain('border-primary')
        expect(recommended.text()).toContain('Recommended')

        const currentAndRecommended = mount(PlanPurchaseCard, {
            props: { plan: { ...starter, recommended: true, current: true } },
        })

        expect(currentAndRecommended.classes()).not.toContain('border-primary')
    })

    it('switches to the annual price and period when annual is true and the plan has one', () => {
        const plan: PurchasablePlan = {
            ...starter,
            annualPrice: 90,
            annualPriceFormatted: '$90',
        }

        const monthly = mount(PlanPurchaseCard, { props: { plan, annual: false } })
        expect(monthly.text()).toContain('$9')
        expect(monthly.text()).toContain('/ month')

        const annual = mount(PlanPurchaseCard, { props: { plan, annual: true } })
        expect(annual.text()).toContain('$90')
        expect(annual.text()).toContain('/ year')
    })

    it('falls back to the monthly price when annual is requested but the plan has none', () => {
        const wrapper = mount(PlanPurchaseCard, { props: { plan: starter, annual: true } })

        expect(wrapper.text()).toContain('$9')
        expect(wrapper.text()).toContain('/ month')
    })

    it('disables the choose button and shows a redirecting label while processing', () => {
        const wrapper = mount(PlanPurchaseCard, { props: { plan: starter, processing: true } })

        const button = wrapper.get('button')

        expect(button.attributes('disabled')).toBeDefined()
        expect(button.text()).toBe('Redirecting…')
    })
})
