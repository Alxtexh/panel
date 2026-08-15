import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CatalogBrowser from './CatalogBrowser.vue'

describe('CatalogBrowser', () => {
    it('switches tabs and emits select', async () => {
        const wrapper = mount(CatalogBrowser, {
            props: {
                title: 'Catalog',
                tabs: [
                    {
                        key: 'products',
                        label: 'Products',
                        items: [{ key: 'mug', label: 'Mug', status: 'in-stock' }],
                    },
                    {
                        key: 'units',
                        label: 'Units',
                        items: [{ key: 'apt', label: 'Studio', kind: 'unit', status: 'vacant' }],
                    },
                ],
            },
        })

        expect(wrapper.text()).toContain('Mug')
        expect(wrapper.text()).not.toContain('Studio')

        await wrapper.get('[role="tab"][aria-selected="false"]').trigger('click')

        expect(wrapper.text()).toContain('Studio')
    })
})
