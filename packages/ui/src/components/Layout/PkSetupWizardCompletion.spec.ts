import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkSetupWizardCompletion from './PkSetupWizardCompletion.vue'

describe('PkSetupWizardCompletion', () => {
    it('renders the heading and summary items', () => {
        const wrapper = mount(PkSetupWizardCompletion, {
            props: {
                heading: 'Initial setup completed',
                summary: [{ label: 'Location', detail: 'Nairobi Fibre' }],
            },
        })

        expect(wrapper.text()).toContain('Initial setup completed')
        expect(wrapper.text()).toContain('Location')
        expect(wrapper.text()).toContain('Nairobi Fibre')
    })

    it('omits the next-steps and actions sections when they resolve empty', () => {
        const wrapper = mount(PkSetupWizardCompletion, {
            props: { heading: 'Done', summary: [] },
        })

        expect(wrapper.text()).not.toContain('Next steps')
        expect(wrapper.findAll('a').length).toBe(0)
    })

    it('renders the primary action after outline actions', () => {
        const wrapper = mount(PkSetupWizardCompletion, {
            props: {
                heading: 'Done',
                actions: [
                    { label: 'Create hotspot', href: '/clients/create' },
                    { label: 'Go to dashboard', href: '/dashboard', primary: true },
                ],
            },
        })

        const links = wrapper.findAll('a')

        expect(links).toHaveLength(2)
        expect(links[0].text()).toBe('Create hotspot')
        expect(links[1].text()).toBe('Go to dashboard')
    })

    it('renders next-step links with the given href', () => {
        const wrapper = mount(PkSetupWizardCompletion, {
            props: {
                heading: 'Done',
                nextSteps: [{ label: 'Create a router', href: '/routers/create' }],
            },
        })

        expect(wrapper.text()).toContain('Next steps')
        const link = wrapper.find('a[href="/routers/create"]')
        expect(link.exists()).toBe(true)
        expect(link.text()).toBe('Create a router')
    })
})
