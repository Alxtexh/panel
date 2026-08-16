import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { computed, ref } from 'vue'

const appearance = { value: { sidebarSide: 'left' as string, menuStyle: 'collapsible' } }
const page = {
    props: {
        panel: { sidebarVariant: 'inset' as string },
        panelHome: { href: '/', isDefault: true },
        workspaces: null,
    } as Record<string, unknown>,
    url: '/',
}

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    PkBoundary: { template: '<div><slot /></div>' },
    PkDropdown: { template: '<div><slot /></div>' },
    useAppearance: () => ({ appearance }),
    Sidebar: {
        inheritAttrs: false,
        props: ['collapsible', 'variant', 'side'],
        template:
            '<aside data-slot="kit-sidebar" :data-variant="variant" :data-collapsible="collapsible"><slot /></aside>',
    },
    SidebarContent: { template: '<div><slot /></div>' },
    SidebarFooter: { template: '<div><slot /></div>' },
    SidebarHeader: { template: '<div><slot /></div>' },
    SidebarMenu: { template: '<div><slot /></div>' },
    SidebarMenuButton: { template: '<div><slot /></div>' },
    SidebarMenuItem: { template: '<div><slot /></div>' },
    SidebarGroup: { template: '<div><slot /></div>' },
    SidebarSeparator: { template: '<hr />' },
    useSidebar: () => ({
        state: computed(() => 'expanded'),
        isMobile: computed(() => false),
        setOpenMobile: vi.fn(),
    }),
}))

vi.mock('../../composables/useCurrentUrl', () => ({
    useCurrentUrl: () => ({ isCurrentUrl: () => false }),
}))

vi.mock('../../composables/usePanelNav', () => ({
    usePanelNav: () => ({
        nav: { value: { primary: [], groups: [] } },
        supportItems: { value: [] },
    }),
}))

vi.mock('../../lib/mobileNav', () => ({
    useSidebarOpener: () => ({
        register: vi.fn(),
        unregister: vi.fn(),
        requests: ref(0),
    }),
}))

const { default: AppSidebar } = await import('./AppSidebar.vue')

const stubs = {
    AppLogo: true,
    NavMain: true,
    NavFooter: true,
    NavUser: true,
    NestedNavGroups: true,
    TeamSwitcher: true,
    DefaultAccountMenuItems: true,
}

describe('AppSidebar', () => {
    it('defaults to inset chrome and icon collapse', () => {
        page.props = {
            panel: {},
            panelHome: { href: '/', isDefault: true },
            workspaces: null,
        }

        const wrapper = mount(AppSidebar, { global: { stubs } })
        const sidebar = wrapper.get('[data-slot="kit-sidebar"]')

        expect(sidebar.attributes('data-variant')).toBe('inset')
        expect(sidebar.attributes('data-collapsible')).toBe('icon')
    })

    it('uses the shared floating variant from SharePanelProps', () => {
        page.props = {
            panel: { sidebarVariant: 'floating' },
            panelHome: { href: '/', isDefault: true },
            workspaces: null,
        }

        const wrapper = mount(AppSidebar, { global: { stubs } })

        expect(wrapper.get('[data-slot="kit-sidebar"]').attributes('data-variant')).toBe('floating')
        expect(wrapper.get('[data-slot="kit-sidebar"]').attributes('data-collapsible')).toBe('icon')
    })

    it('lets the variant prop override the shared value', () => {
        page.props = {
            panel: { sidebarVariant: 'inset' },
            panelHome: { href: '/', isDefault: true },
            workspaces: null,
        }

        const wrapper = mount(AppSidebar, {
            props: { variant: 'sidebar' },
            global: { stubs },
        })

        expect(wrapper.get('[data-slot="kit-sidebar"]').attributes('data-variant')).toBe('sidebar')
    })
})
