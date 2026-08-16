import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

const appearance = { value: { contentLayout: 'full' as string } }

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
        appearance,
    }),
}))

const { default: AppContent } = await import('./AppContent.vue')

function mountWithWidgets() {
    return mount(AppContent, {
        slots: {
            default: `
                <div data-slot="dashboard-charts">
                    <div data-slot="dashboard-widget-columns">chart</div>
                </div>
            `,
        },
    })
}

describe('AppContent', () => {
    it('keeps the page footer after the widget container, not inside the grid', () => {
        const wrapper = mountWithWidgets()

        const column = wrapper.get('[data-slot="app-content-column"]')
        const footer = wrapper.get('[data-slot="app-footer"]')
        const charts = wrapper.get('[data-slot="dashboard-charts"]')
        const grid = wrapper.get('[data-slot="dashboard-widget-columns"]')

        expect(grid.find('[data-slot="app-footer"]').exists()).toBe(false)
        expect(charts.find('[data-slot="app-footer"]').exists()).toBe(false)
        expect(column.find('[data-slot="dashboard-charts"]').exists()).toBe(true)

        const columnNodes = [...column.element.children]
        expect(columnNodes[columnNodes.length - 1]).toBe(footer.element)
        expect(
            charts.element.compareDocumentPosition(footer.element) & Node.DOCUMENT_POSITION_FOLLOWING,
        ).toBeTruthy()
        expect(
            footer.element.compareDocumentPosition(charts.element) & Node.DOCUMENT_POSITION_FOLLOWING,
        ).toBeFalsy()
    })

    it('does not make the page a flex-1 or h-full sibling of the footer', () => {
        const wrapper = mountWithWidgets()
        const column = wrapper.get('[data-slot="app-content-column"]')
        const footer = wrapper.get('[data-slot="app-footer"]')

        expect(column.classes()).toContain('min-h-full')
        expect(column.classes()).toContain('shrink-0')
        expect(column.classes()).not.toContain('h-full')
        expect(column.classes()).not.toContain('flex-1')

        const page = column.element.children[0] as HTMLElement
        expect(page.getAttribute('data-slot')).toBe('dashboard-charts')
        expect(page.className.split(/\s+/)).not.toContain('flex-1')
        expect(page.className.split(/\s+/)).not.toContain('h-full')
        expect(footer.classes()).toContain('shrink-0')
    })

    it('keeps a centered max-width on the page only, so the footer spans the column', () => {
        appearance.value = { contentLayout: 'centered' }

        const wrapper = mountWithWidgets()
        const column = wrapper.get('[data-slot="app-content-column"]')
        const footer = wrapper.get('[data-slot="app-footer"]')
        const charts = wrapper.get('[data-slot="dashboard-charts"]')

        expect(charts.element.parentElement?.className).toContain('max-w-7xl')
        expect(footer.element.parentElement).toBe(column.element)
        expect(column.element.children[column.element.children.length - 1]).toBe(footer.element)

        appearance.value = { contentLayout: 'full' }
    })
})
