import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

const page = { props: { auth: { user: { name: 'Admin Example', email: 'admin@example.com' } } } }

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
}))

vi.mock('@alxtexh-enterprise/panel', async () => {
    const vue = await import('vue')

    return {
        useAppearance: () => ({
            appearance: vue.ref({ sidebarSide: 'left' }),
        }),
        DropdownMenu: { template: '<div><slot /></div>' },
        DropdownMenuTrigger: { template: '<div><slot /></div>' },
        DropdownMenuContent: { template: '<div><slot /></div>' },
        SidebarMenu: { template: '<ul><slot /></ul>' },
        SidebarMenuItem: { template: '<li><slot /></li>' },
        SidebarMenuButton: {
            inheritAttrs: false,
            template: '<button data-slot="sidebar-menu-button" v-bind="$attrs"><slot /></button>',
        },
        useSidebar: () => ({
            isMobile: vue.ref(false),
            state: vue.ref('expanded'),
        }),
    }
})

vi.mock('./UserInfo.vue', () => ({
    default: {
        props: ['user', 'showName'],
        template: '<span data-slot="user-info">{{ showName ? user.name : "avatar" }}</span>',
    },
}))

const { default: NavUser } = await import('./NavUser.vue')

describe('NavUser', () => {
    it('uses the sidebar menu button trigger and shows account details when expanded', () => {
        const wrapper = mount(NavUser, {
            slots: {
                menu: '<div data-slot="menu">menu</div>',
            },
        })

        expect(wrapper.find('[data-slot="sidebar-menu-button"]').exists()).toBe(true)
        expect(wrapper.get('[data-slot="user-info"]').text()).toBe('Admin Example')
        expect(wrapper.find('[data-slot="menu"]').exists()).toBe(true)
    })
})
