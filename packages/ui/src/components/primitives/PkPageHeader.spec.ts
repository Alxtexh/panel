import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkPageHeader from './PkPageHeader.vue'

describe('PkPageHeader', () => {
    it('renders a large title and muted purpose', () => {
        const wrapper = mount(PkPageHeader, {
            props: {
                title: 'Clients',
                purpose: 'People and organisations you bill.',
            },
            slots: {
                actions: '<button type="button">New Client</button>',
            },
        })

        const heading = wrapper.find('h1')

        expect(wrapper.attributes('data-slot')).toBe('page-header')
        expect(heading.text()).toBe('Clients')
        expect(heading.classes()).toContain('text-2xl')
        expect(heading.classes()).toContain('font-semibold')
        expect(heading.classes()).toContain('tracking-tight')
        expect(wrapper.text()).toContain('People and organisations you bill.')
        expect(wrapper.text()).toContain('New Client')
    })

    it('omits purpose and actions when absent', () => {
        const wrapper = mount(PkPageHeader, {
            props: { title: 'Clients' },
        })

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.text()).toBe('Clients')
    })
})

