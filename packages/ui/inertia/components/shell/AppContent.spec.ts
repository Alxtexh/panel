import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => ({ props: { panel: { brand: 'Acme' } }, url: '/' }),
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    SidebarInset: {
        inheritAttrs: false,
        template: '<main id="pk-main" data-slot="sidebar-inset" v-bind="$attrs"><slot /></main>',
    },
    useAppearance: () => ({
        appearance: { value: { contentLayout: 'full' } },
    }),
}))

const { default: AppContent } = await import('./AppContent.vue')

describe('AppContent', () => {
    it('keeps the page footer outside the page slot, after the content column', () => {
        const wrapper = mount(AppContent, {
            slots: {
                default:
                    '<div class="grid grid-cols-1 lg:grid-cols-2" data-slot="widget-grid">chart</div>',
            },
        })

        const column = wrapper.get('[data-slot="app-content-column"]')
        const footer = wrapper.get('[data-slot="app-footer"]')
        const grid = wrapper.get('[data-slot="widget-grid"]')

        expect(grid.find('[data-slot="app-footer"]').exists()).toBe(false)
        expect(column.find('[data-slot="widget-grid"]').exists()).toBe(true)
        expect(column.find('[data-slot="app-footer"]').exists()).toBe(true)
        expect(footer.classes()).toContain('shrink-0')

        const columnNodes = column.element.children
        expect(columnNodes[columnNodes.length - 1]).toBe(footer.element)
    })
})
