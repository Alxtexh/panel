import { describe, expect, it, vi } from 'vitest'
import { SIDEBAR_LAYOUTS, useSidebarLayout } from './useSidebarLayout'

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => ({
        props: {},
    }),
}))

describe('useSidebarLayout', () => {
    it('lists every supported layout family', () => {
        expect(SIDEBAR_LAYOUTS).toEqual(['inset', 'sidebar', 'floating', 'icon', 'header'])
    })

    it('defaults to inset when nothing is forced', () => {
        const { layout, chrome } = useSidebarLayout()

        expect(layout.value).toBe('inset')
        expect(chrome.value.variant).toBe('inset')
        expect(chrome.value.collapsible).toBe('icon')
        expect(chrome.value.siteHeader).toBe(false)
    })

    it('honours a force argument over page props', () => {
        const { layout, chrome } = useSidebarLayout('floating')

        expect(layout.value).toBe('floating')
        expect(chrome.value.variant).toBe('floating')
    })

    it('maps header family to site header chrome', () => {
        const { chrome } = useSidebarLayout('header')

        expect(chrome.value.siteHeader).toBe(true)
        expect(chrome.value.sidebarSearch).toBe(true)
        expect(chrome.value.variant).toBe('inset')
    })

    it('maps icon family to collapsed rail defaults', () => {
        const { chrome } = useSidebarLayout('icon')

        expect(chrome.value.preferCollapsed).toBe(true)
        expect(chrome.value.variant).toBe('inset')
    })

    it('falls back to inset for unknown names', () => {
        const { layout } = useSidebarLayout('sidebar-99')

        expect(layout.value).toBe('inset')
    })
})
