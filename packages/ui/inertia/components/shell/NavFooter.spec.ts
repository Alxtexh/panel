import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@inertiajs/vue3', () => ({
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
}))

vi.mock('../../composables/useCurrentUrl', () => ({
    useCurrentUrl: () => ({
        isCurrentUrl: (href: string) => href === '/help',
    }),
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    toUrl: (href: string) => href,
    SidebarGroup: { template: '<div data-slot="sidebar-group"><slot /></div>' },
    SidebarGroupLabel: { template: '<div data-slot="sidebar-group-label"><slot /></div>' },
    SidebarGroupContent: { template: '<div><slot /></div>' },
    SidebarMenu: { template: '<ul><slot /></ul>' },
    SidebarMenuItem: { template: '<li><slot /></li>' },
    SidebarMenuButton: {
        props: ['isActive', 'tooltip'],
        template:
            '<a data-slot="sidebar-menu-button" :data-active="isActive" :data-tooltip="tooltip"><slot /></a>',
    },
}))

const { HelpCircle, Info } = await import('@lucide/vue')

const { default: NavFooter } = await import('./NavFooter.vue')

describe('NavFooter', () => {
    it('renders every support link with active state and tooltips', () => {
        const wrapper = mount(NavFooter, {
            props: {
                items: [
                    { title: 'Help', href: '/help', icon: HelpCircle },
                    { title: 'About', href: '/about', icon: Info },
                ],
            },
        })

        const buttons = wrapper.findAll('[data-slot="sidebar-menu-button"]')

        expect(buttons).toHaveLength(2)
        expect(buttons[0]?.attributes('data-tooltip')).toBe('Help')
        expect(buttons[0]?.attributes('data-active')).toBe('true')
        expect(buttons[1]?.attributes('data-active')).toBe('false')
        expect(wrapper.get('[data-slot="sidebar-group-label"]').text()).toBe('Support')
    })
})
