import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkEmptyState from './PkEmptyState.vue'

describe('PkEmptyState', () => {
    it('renders title, description, icon and actions', () => {
        const wrapper = mount(PkEmptyState, {
            props: {
                title: 'No clients yet',
                description: 'Add one to get started.',
                icon: 'users',
            },
            slots: {
                actions: '<button type="button">New Client</button>',
            },
        })

        expect(wrapper.attributes('data-slot')).toBe('empty-state')
        expect(wrapper.text()).toContain('No clients yet')
        expect(wrapper.text()).toContain('Add one to get started.')
        expect(wrapper.text()).toContain('New Client')
        expect(wrapper.find('svg path').exists()).toBe(true)
    })

    it('uses compact padding for the filtered variant', () => {
        const wrapper = mount(PkEmptyState, {
            props: { title: 'Nothing matches these filters', compact: true },
        })

        expect(wrapper.classes()).toContain('py-8')
        expect(wrapper.classes()).not.toContain('py-12')
    })
})
