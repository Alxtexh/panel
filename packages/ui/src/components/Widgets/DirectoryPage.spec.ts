import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DirectoryPage from './DirectoryPage.vue'
import type { DirectorySection } from './DirectoryPage.vue'

const sections: DirectorySection[] = [
    {
        key: 'people',
        title: 'People',
        accent: '#2563eb',
        links: [
            { label: 'Administrators', href: '/user-management', icon: 'users' },
            { label: 'Roles', href: '/settings/roles', icon: 'shield-alert' },
        ],
    },
    {
        key: 'network',
        title: 'Network',
        accent: '#0d9488',
        links: [{ label: 'Routers', href: '/routers', icon: 'router' }],
    },
]

describe('DirectoryPage', () => {
    it('renders the heading, search, and section cards without a wrapper card', () => {
        const wrapper = mount(DirectoryPage, {
            props: { title: 'Administration', sections },
        })

        expect(wrapper.get('h1').text()).toBe('Administration')
        expect(wrapper.get('input[type="search"]').exists()).toBe(true)
        expect(wrapper.text()).toContain('Administrators')
        const item = wrapper.get('a[href="/user-management"]')
        expect(item.exists()).toBe(true)
        expect(item.attributes('data-inertia-link')).toBeUndefined()
        expect(item.classes()).toContain('no-underline')
        expect(item.classes()).toContain('hover:bg-accent')
        expect(item.classes()).not.toContain('hover:underline')
        expect(wrapper.get('[data-slot="directory-section-people"]').exists()).toBe(true)
        expect(wrapper.get('[data-slot="directory-section-network"]').exists()).toBe(true)
        expect(wrapper.classes()).not.toContain('bg-card')
        expect(wrapper.find('[data-slot="directory-section-people"] .absolute').exists()).toBe(
            false,
        )
        expect(wrapper.html()).not.toContain('background-color')
    })

    it('uses a custom link component when the host is Inertia', () => {
        const wrapper = mount(DirectoryPage, {
            props: {
                title: 'Administration',
                sections,
                linkComponent: {
                    name: 'InertiaLink',
                    props: ['href'],
                    template: '<a :href="href" data-inertia-link="true"><slot /></a>',
                },
            },
        })

        expect(wrapper.get('a[href="/user-management"]').attributes('data-inertia-link')).toBe(
            'true',
        )
    })

    it('filters by link title and hides empty sections', async () => {
        const wrapper = mount(DirectoryPage, {
            props: { title: 'Administration', sections },
        })

        await wrapper.get('input[type="search"]').setValue('role')

        expect(wrapper.text()).toContain('Roles')
        expect(wrapper.text()).not.toContain('Administrators')
        expect(wrapper.find('[data-slot="directory-section-network"]').exists()).toBe(false)
        expect(wrapper.find('[data-slot="directory-section-people"]').exists()).toBe(true)
    })

    it('shows an empty state when nothing matches', async () => {
        const wrapper = mount(DirectoryPage, {
            props: { title: 'Administration', sections },
        })

        await wrapper.get('input[type="search"]').setValue('zzzz')

        expect(wrapper.get('[data-slot="directory-empty"]').text()).toContain('Nothing matches')
    })

    it('renders external hrefs as a plain anchor with the same button classes', () => {
        const wrapper = mount(DirectoryPage, {
            props: {
                title: 'Administration',
                sections: [
                    {
                        key: 'support',
                        title: 'Support',
                        links: [
                            { label: 'Help', href: '/help', icon: 'book-open' },
                            {
                                label: 'Docs',
                                href: 'https://example.com/docs',
                                icon: 'book-open',
                            },
                        ],
                    },
                ],
            },
        })

        const internal = wrapper.get('a[href="/help"]')
        const external = wrapper.get('a[href="https://example.com/docs"]')

        expect(internal.attributes('data-inertia-link')).toBeUndefined()
        expect(external.attributes('data-inertia-link')).toBeUndefined()
        expect(external.attributes('target')).toBe('_blank')
        expect(external.classes()).toContain('no-underline')
        expect(external.classes()).toEqual(internal.classes())
    })

    it('has no page padding by default so it can drop onto any screen', () => {
        const wrapper = mount(DirectoryPage, {
            props: { title: 'Shortcuts', sections },
        })

        expect(wrapper.classes().join(' ')).not.toContain('max-w-5xl')
        expect(wrapper.classes().join(' ')).not.toContain('px-4')
    })

    it('opts into page chrome when embedded is false', () => {
        const wrapper = mount(DirectoryPage, {
            props: { title: 'Shortcuts', sections, embedded: false },
        })

        expect(wrapper.classes().join(' ')).toContain('max-w-5xl')
        expect(wrapper.classes().join(' ')).toContain('px-4')
    })
})
