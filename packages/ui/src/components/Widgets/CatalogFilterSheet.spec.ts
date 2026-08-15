import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CatalogFilterSheet from './CatalogFilterSheet.vue'
import { emptyCatalogFilters } from './catalogFilter'

describe('CatalogFilterSheet', () => {
    it('applies staged chips on Apply', async () => {
        const wrapper = mount(CatalogFilterSheet, {
            props: {
                open: true,
                facets: [
                    {
                        key: 'stock',
                        label: 'Stock',
                        options: [
                            { value: 'low', label: 'Low' },
                            { value: 'in-stock', label: 'In stock' },
                        ],
                    },
                ],
                applied: emptyCatalogFilters(),
            },
            global: {
                stubs: {
                    PkSlideover: {
                        template: '<div><slot /><slot name="footer" /></div>',
                    },
                },
            },
        })

        await wrapper.get('button[aria-pressed="false"]').trigger('click')
        const apply = wrapper.findAll('button').find((button) => button.text().startsWith('Apply'))
        await apply?.trigger('click')

        expect(wrapper.emitted('apply')?.[0]?.[0]).toMatchObject({
            selected: { stock: 'low' },
        })
    })
})
