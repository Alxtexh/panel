import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CatalogCard from './CatalogCard.vue'
import CatalogGrid from './CatalogGrid.vue'
import { matchCatalogItem, findExactSku } from './catalogFilter'
import type { CatalogItem } from './CatalogCard.vue'

describe('CatalogCard', () => {
    it('shows the label, price and a dedicated status pill', () => {
        const wrapper = mount(CatalogCard, {
            props: {
                item: {
                    key: 'desk',
                    label: 'Day desk',
                    caption: 'Studio 3',
                    price: '12.00',
                    status: 'available',
                },
            },
        })

        expect(wrapper.text()).toContain('Day desk')
        expect(wrapper.text()).toContain('Studio 3')
        expect(wrapper.text()).toContain('12.00')
        expect(wrapper.get('[data-slot="badge"]').attributes('data-variant')).toBe('success')
    })

    it('renders apartment facts as a joined line', () => {
        const wrapper = mount(CatalogCard, {
            props: {
                item: {
                    key: 'apt',
                    label: '12 Riverside',
                    facts: ['2 bed', '1 bath', 'Westlands'],
                },
            },
        })

        expect(wrapper.text()).toContain('2 bed · 1 bath · Westlands')
    })

    /**
     * ONLY http(s) IMAGES RENDER. A stored `javascript:` URL must not become
     * an img src. The same rule ImageCell already keeps.
     */
    it('refuses a non-http image and falls back to initials', () => {
        const wrapper = mount(CatalogCard, {
            props: {
                item: {
                    key: 'x',
                    label: 'Oak table',
                    image: 'javascript:alert(1)',
                },
            },
        })

        expect(wrapper.find('img').exists()).toBe(false)
        expect(wrapper.text()).toContain('OT')
    })

    it('shows stock count and a cart action on a product tile', async () => {
        const wrapper = mount(CatalogCard, {
            props: {
                item: {
                    key: 'mug',
                    label: 'Stoneware mug',
                    stock: 12,
                    kind: 'product',
                    status: 'in-stock',
                },
            },
        })

        expect(wrapper.text()).toContain('12 in stock')

        await wrapper.get('[data-slot="catalog-cart"]').trigger('click')

        expect(wrapper.emitted('cart')?.[0]).toEqual(['mug'])
        expect(wrapper.emitted('select')).toBeUndefined()
    })

    it('emits the item key when selected', async () => {
        const wrapper = mount(CatalogCard, {
            props: { item: { key: 'desk', label: 'Day desk' } },
        })

        await wrapper.get('[data-slot="catalog-card"]').trigger('click')

        expect(wrapper.emitted('select')?.[0]).toEqual(['desk'])
    })

    it('peeks at a second https photo without a lightbox', () => {
        const wrapper = mount(CatalogCard, {
            props: {
                item: {
                    key: 'mug',
                    label: 'Stoneware mug',
                    image: 'https://example.test/a.jpg',
                    images: ['https://example.test/b.jpg'],
                },
            },
        })

        expect(wrapper.find('[data-slot="catalog-peek"]').exists()).toBe(true)
        expect(wrapper.find('[data-slot="catalog-dots"]').exists()).toBe(true)
        expect(wrapper.findAll('img')).toHaveLength(2)
    })
})

describe('matchCatalogItem', () => {
    const item: CatalogItem = {
        key: 'sku',
        sku: 'SKU-1041',
        label: 'House espresso',
        caption: '250g',
        facts: ['250g'],
        facets: { category: 'coffee', stock: 'in-stock' },
        metrics: { price: 850 },
    }

    it('matches query against label, caption, facts, sku and key', () => {
        expect(matchCatalogItem(item, { query: 'espresso', selected: {}, ranges: {} })).toBe(true)
        expect(matchCatalogItem(item, { query: '250g', selected: {}, ranges: {} })).toBe(true)
        expect(matchCatalogItem(item, { query: 'sku-1041', selected: {}, ranges: {} })).toBe(true)
        expect(matchCatalogItem(item, { query: 'mug', selected: {}, ranges: {} })).toBe(false)
    })

    it('matches selected facets', () => {
        expect(matchCatalogItem(item, { query: '', selected: { category: 'coffee' }, ranges: {} })).toBe(true)
        expect(matchCatalogItem(item, { query: '', selected: { category: 'merch' }, ranges: {} })).toBe(false)
    })

    it('matches numeric from–to ranges', () => {
        expect(
            matchCatalogItem(item, {
                query: '',
                selected: {},
                ranges: { price: { min: 800, max: 900 } },
            }),
        ).toBe(true)
        expect(
            matchCatalogItem(item, {
                query: '',
                selected: {},
                ranges: { price: { min: 900, max: null } },
            }),
        ).toBe(false)
    })

    it('finds an exact SKU for a till scan', () => {
        expect(findExactSku([item], 'SKU-1041')?.key).toBe('sku')
        expect(findExactSku([item], 'sku')?.key).toBe('sku')
        expect(findExactSku([item], '1041')).toBeNull()
    })
})

describe('CatalogGrid', () => {
    it('hides the toolbar on a dashboard strip', () => {
        const wrapper = mount(CatalogGrid, {
            props: { items: [{ key: 'a', label: 'A' }] },
        })

        expect(wrapper.find('[data-slot="catalog-toolbar"]').exists()).toBe(false)
    })

    it('emits chip filters from the toolbar', async () => {
        const wrapper = mount(CatalogGrid, {
            props: {
                items: [{ key: 'a', label: 'A' }],
                searchable: true,
                facets: [
                    {
                        key: 'category',
                        options: [{ value: 'coffee', label: 'Coffee' }],
                    },
                ],
            },
        })

        expect(wrapper.find('[data-slot="catalog-toolbar"]').exists()).toBe(true)

        await wrapper.get('button[aria-pressed]').trigger('click')

        expect(wrapper.emitted('filter')?.[0]).toEqual([
            { query: '', selected: { category: 'coffee' }, ranges: {} },
        ])
    })

    it('toggles compact list rows', async () => {
        const wrapper = mount(CatalogGrid, {
            props: {
                items: [{ key: 'a', label: 'A', price: '1', facts: ['2 bed'] }],
                layoutToggle: true,
            },
        })

        await wrapper.get('[aria-label="List"]').trigger('click')

        expect(wrapper.find('[data-slot="catalog-list"]').exists()).toBe(true)
        expect(wrapper.get('[data-layout="list"]').text()).toContain('2 bed')
    })

    it('pages when pageSize is set', async () => {
        const wrapper = mount(CatalogGrid, {
            props: {
                pageSize: 2,
                items: [
                    { key: 'a', label: 'Alpha' },
                    { key: 'b', label: 'Beta' },
                    { key: 'c', label: 'Gamma' },
                ],
            },
        })

        expect(wrapper.text()).toContain('Alpha')
        expect(wrapper.text()).not.toContain('Gamma')
        expect(wrapper.find('[data-slot="catalog-pagination"]').exists()).toBe(true)

        await wrapper.get('[data-slot="catalog-pagination"] button:last-child').trigger('click')

        expect(wrapper.text()).toContain('Gamma')
    })

    it('emits scan on Enter in the search box', async () => {
        const wrapper = mount(CatalogGrid, {
            props: {
                items: [{ key: 'sku-mug', sku: 'SKU-2210', label: 'Mug' }],
                searchable: true,
            },
        })

        await wrapper.get('input').setValue('SKU-2210')
        await wrapper.get('input').trigger('keydown', { key: 'Enter' })

        expect(wrapper.emitted('scan')?.[0]).toEqual(['SKU-2210'])
    })
})
