import { describe, expect, it, vi } from 'vitest'
import { SIDEBAR_LAYOUTS, useSidebarLayout } from './useSidebarLayout'

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => ({
        props: {},
    }),
}))

describe('useSidebarLayout', () => {
    it('lists every supported layout family', () => {
        expect(SIDEBAR_LAYOUTS).toEqual([
            'inset',
            'sidebar',
            'floating',
            'icon',
            'header',
            'accordion',
            'file-tree',
            'calendar',
            'dialog',
        ])
    })

    it('defaults to inset when nothing is forced', () => {
        const { layout, chrome } = useSidebarLayout()

        expect(layout.value).toBe('inset')
        expect(chrome.value.variant).toBe('inset')
        expect(chrome.value.collapsible).toBe('icon')
        expect(chrome.value.siteHeader).toBe(false)
        expect(chrome.value.accordionNav).toBe(false)
    })

    it('honours a force argument over page props', () => {
        const { layout, chrome } = useSidebarLayout('floating')

        expect(layout.value).toBe('floating')
        expect(chrome.value.variant).toBe('floating')
    })

    it('maps header family to site header chrome', () => {
        const { chrome } = useSidebarLayout('header')

        expect(chrome.value.siteHeader).toBe(true)
        expect(chrome.value.sidebarSearch).toBe(false)
        expect(chrome.value.topNavUser).toBe(true)
        expect(chrome.value.hideSidebarBrand).toBe(true)
        expect(chrome.value.compactFooterSupport).toBe(true)
        expect(chrome.value.variant).toBe('inset')
    })

    it('keeps the account menu in the sidebar footer for inset', () => {
        const { chrome } = useSidebarLayout('inset')

        expect(chrome.value.topNavUser).toBe(false)
        expect(chrome.value.headerUser).toBe(false)
        expect(chrome.value.compactFooterSupport).toBe(false)
    })

    it('maps icon family to collapsed rail defaults', () => {
        const { chrome } = useSidebarLayout('icon')

        expect(chrome.value.preferCollapsed).toBe(true)
        expect(chrome.value.variant).toBe('inset')
    })

    it('maps accordion family to plus/minus nav and search', () => {
        const { chrome } = useSidebarLayout('accordion')

        expect(chrome.value.accordionNav).toBe(true)
        expect(chrome.value.sidebarSearch).toBe(true)
        expect(chrome.value.variant).toBe('inset')
    })

    it('maps file-tree family to tree nav on an edge rail', () => {
        const { chrome } = useSidebarLayout('file-tree')

        expect(chrome.value.treeNav).toBe(true)
        expect(chrome.value.variant).toBe('sidebar')
    })

    it('maps calendar family to calendar chrome and header user', () => {
        const { chrome } = useSidebarLayout('calendar')

        expect(chrome.value.calendarChrome).toBe(true)
        expect(chrome.value.headerUser).toBe(true)
        expect(chrome.value.hideSidebarBrand).toBe(true)
        expect(chrome.value.compactFooterSupport).toBe(true)
        expect(chrome.value.topNavUser).toBe(false)
    })

    it('maps dialog family to offcanvas overlay defaults', () => {
        const { chrome } = useSidebarLayout('dialog')

        expect(chrome.value.dialogMode).toBe(true)
        expect(chrome.value.collapsible).toBe('offcanvas')
        expect(chrome.value.preferCollapsed).toBe(true)
    })

    it('falls back to inset for unknown names', () => {
        const { layout } = useSidebarLayout('sidebar-99')

        expect(layout.value).toBe('inset')
    })
})
