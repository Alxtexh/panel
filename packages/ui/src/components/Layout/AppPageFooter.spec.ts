import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const page = { props: {} as Record<string, unknown>, url: '/' }

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
}))

const { default: AppPageFooter } = await import('./AppPageFooter.vue')

describe('AppPageFooter', () => {
    beforeEach(() => {
        page.props = {}
        page.url = '/'
    })

    it('uses the panel brand, then app.name', () => {
        page.props = { panel: { brand: 'Lakeside Fibre' }, name: 'Ignored' }

        expect(mount(AppPageFooter).get('[data-slot="app-footer"]').text()).toContain(
            'Lakeside Fibre',
        )
    })

    it('falls back to the shared application name', () => {
        page.props = { name: 'Acme Portal' }

        expect(mount(AppPageFooter).text()).toContain('Acme Portal')
    })

    it('renders optional links once, from the panel payload', () => {
        page.props = {
            panel: {
                brand: 'Acme',
                footerLinks: [{ label: 'Privacy', href: '/privacy' }],
            },
        }

        const wrapper = mount(AppPageFooter)

        expect(wrapper.findAll('[data-slot="app-footer"]')).toHaveLength(1)
        expect(wrapper.get('a[href="/privacy"]').text()).toBe('Privacy')
    })

    it('renders on a page when the panel did not opt into a shell footer', () => {
        page.props = { panel: { brand: 'Acme', pageFooter: false } }

        expect(mount(AppPageFooter).findAll('[data-slot="app-footer"]')).toHaveLength(1)
    })
})
