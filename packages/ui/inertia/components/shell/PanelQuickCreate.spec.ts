import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

const page = {
    props: {
        quickCreate: [
            {
                key: 'announcements',
                title: 'Announcement',
                href: '/announcements/create',
                icon: 'mail',
                group: 'Apps',
            },
            {
                key: 'clients',
                title: 'Client',
                href: '/clients/create',
                icon: 'users',
                group: 'Subscribers',
            },
            {
                key: 'plans',
                title: 'Plan',
                href: '/plans/create',
                icon: 'package',
                group: null,
            },
        ],
    },
}

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    Link: {
        props: ['href'],
        template: '<a :href="href" v-bind="$attrs"><slot /></a>',
    },
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    DropdownMenu: { template: '<div data-slot="dropdown-menu"><slot /></div>' },
    DropdownMenuTrigger: { template: '<div data-slot="dropdown-trigger"><slot /></div>' },
    DropdownMenuContent: {
        template: '<div data-slot="dropdown-content"><slot /></div>',
    },
    DropdownMenuGroup: { template: '<div data-slot="dropdown-group"><slot /></div>' },
    DropdownMenuLabel: { template: '<div data-slot="dropdown-label"><slot /></div>' },
    DropdownMenuSeparator: { template: '<hr data-slot="dropdown-separator" />' },
    DropdownMenuItem: { template: '<div data-slot="dropdown-item"><slot /></div>' },
    PkButton: {
        inheritAttrs: false,
        template: '<button type="button" v-bind="$attrs"><slot /></button>',
    },
}))

const { default: PanelQuickCreate } = await import('./PanelQuickCreate.vue')

describe('PanelQuickCreate', () => {
    it('renders icons, titles, and group labels for creatable resources', () => {
        const wrapper = mount(PanelQuickCreate)

        expect(wrapper.get('[data-test="quick-create"]').attributes('aria-label')).toBe(
            'Quick create',
        )

        const links = wrapper.findAll('a')
        expect(links.map((link) => link.text().trim())).toEqual([
            'Plan',
            'Announcement',
            'Client',
        ])
        expect(links.map((link) => link.attributes('href'))).toEqual([
            '/plans/create',
            '/announcements/create',
            '/clients/create',
        ])

        expect(wrapper.findAll('svg').length).toBeGreaterThanOrEqual(3)
        expect(wrapper.text()).toContain('Apps')
        expect(wrapper.text()).toContain('Subscribers')
    })

    it('renders nothing when quick create is empty', () => {
        page.props.quickCreate = []

        const wrapper = mount(PanelQuickCreate)

        expect(wrapper.find('[data-test="quick-create"]').exists()).toBe(false)
    })
})
