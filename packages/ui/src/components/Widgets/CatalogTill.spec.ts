import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import type { CatalogItem } from './CatalogCard.vue'
import CatalogTill from './CatalogTill.vue'

const mug: CatalogItem = {
    key: 'mug',
    label: 'Mug',
    sku: 'MUG-1',
    price: 'KES 1,200',
    status: 'in-stock',
    facets: { category: 'merch' },
}

describe('CatalogTill', () => {
    it('adds a tile to the cart and formats totals', async () => {
        const wrapper = mount(CatalogTill, {
            props: {
                items: [mug],
                taxRate: 0.16,
                taxLabel: 'VAT 16%',
                formatMoney: (amount: number) => `KES ${amount}`,
            },
        })

        await wrapper.get('[data-slot="catalog-cart"]').trigger('click')

        expect(wrapper.get('[data-slot="cart-panel"]').text()).toContain('Mug')
        expect(wrapper.get('[data-slot="cart-panel"]').text()).toContain('KES 1200')
        expect(wrapper.get('[data-slot="cart-panel"]').text()).toContain('VAT 16%')
    })

    it('emits select without requiring a catalog page', async () => {
        const wrapper = mount(CatalogTill, { props: { items: [mug] } })

        await wrapper.get('[data-slot="catalog-card"]').trigger('click')

        expect(wrapper.emitted('select')?.[0]).toEqual(['mug'])
    })
})
