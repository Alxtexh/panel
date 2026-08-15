import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ShortcutsWidget from './ShortcutsWidget.vue'

const catalog = [
    { id: 'clients', label: 'Add customer', href: '/clients/create', icon: 'users' },
    { id: 'tickets', label: 'Add ticket', href: '/tickets', icon: 'chat' },
    { id: 'settings', label: 'Configure system', href: '/settings', icon: 'sliders' },
]

describe('ShortcutsWidget', () => {
    it('shows an empty state with add', () => {
        const wrapper = mount(ShortcutsWidget, { props: { items: [], catalog } })

        expect(wrapper.get('[data-slot="shortcuts-empty"]').text()).toContain('No shortcuts yet')
        expect(wrapper.text()).toContain('Add shortcut')
    })

    it('wraps icon links and removes one while editing', async () => {
        const wrapper = mount(ShortcutsWidget, {
            props: { items: catalog.slice(0, 2), catalog },
        })

        expect(wrapper.text()).toContain('Add customer')
        expect(wrapper.get('a[href="/clients/create"]').exists()).toBe(true)

        await wrapper.get('[aria-label="Edit shortcuts"]').trigger('click')
        await wrapper.get('[aria-label="Remove Add customer"]').trigger('click')

        expect(wrapper.emitted('update:items')?.[0]?.[0]).toEqual([catalog[1]])
    })
})
