import { flushPromises, mount } from '@vue/test-utils'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

const visitMock = vi.fn()
const fetchMock = vi.fn()

const page = {
    props: {
        panelNav: [{ key: 'alpha', title: 'Page Alpha', href: '/alpha' }],
        panelPages: [],
        panel: { path: '/' },
        notificationCount: 0,
    },
}

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    router: { visit: visitMock },
}))

const recentKey = 'alxtexhpanel.command-palette.recent./panel-search'
const pinnedKey = 'alxtexhpanel.command-palette.pinned./panel-search'

beforeAll(() => {
    // JSDOM does not implement layout APIs used by the palette.

    ;(Element.prototype as any).scrollIntoView = vi.fn()
})

beforeEach(() => {
    visitMock.mockClear()
    fetchMock.mockClear()
    window.sessionStorage.clear()
    document.body.innerHTML = ''
})

describe('PanelCommandPalette', () => {
    it('shows recent records and resets selection on typing', async () => {
        window.sessionStorage.setItem(
            recentKey,
            JSON.stringify([
                {
                    id: 'r1',
                    title: 'Recent Record',
                    href: '/records/1',
                    kind: 'record',
                    subtitle: null,
                },
            ]),
        )

        const { default: PanelCommandPalette } = await import('./PanelCommandPalette.vue')

        const wrapper = mount(PanelCommandPalette, { attachTo: document.body })

        await wrapper.get('button[aria-label="Search"]').trigger('click')
        await nextTick()
        await flushPromises()

        const openCandidates = Array.from(document.querySelectorAll('button[data-active]'))
        expect(openCandidates.length).toBeGreaterThan(0)

        const openActive = openCandidates.find(
            (el) =>
                el.getAttribute('data-active') === 'true' || el.getAttribute('data-active') === '1',
        )

        expect(openActive?.textContent).toContain('Recent Record')

        const input = document.querySelector('[data-palette-input]') as HTMLInputElement
        input.value = 'p'
        input.dispatchEvent(new Event('input'))
        await flushPromises()
        await nextTick()

        const typingCandidates = Array.from(document.querySelectorAll('button[data-active]'))
        expect(typingCandidates.length).toBeGreaterThan(0)

        const typingActive = typingCandidates.find(
            (el) =>
                el.getAttribute('data-active') === 'true' || el.getAttribute('data-active') === '1',
        )

        expect(typingActive?.textContent).toContain('Page Alpha')

        wrapper.unmount()
    })

    it('pins and unpins a recent record in sessionStorage', async () => {
        window.sessionStorage.setItem(
            recentKey,
            JSON.stringify([
                {
                    id: 'r1',
                    title: 'Recent Record',
                    href: '/records/1',
                    kind: 'record',
                    subtitle: null,
                },
            ]),
        )

        const { default: PanelCommandPalette } = await import('./PanelCommandPalette.vue')

        const wrapper = mount(PanelCommandPalette, { attachTo: document.body })

        await wrapper.get('button[aria-label="Search"]').trigger('click')
        await nextTick()
        await flushPromises()

        const pin = document.querySelector('[aria-label="Pin"]') as HTMLElement | null
        expect(pin).not.toBeNull()

        pin?.click()
        await nextTick()

        const pinnedRaw = window.sessionStorage.getItem(pinnedKey)
        expect(pinnedRaw).not.toBeNull()

        const pinned = JSON.parse(pinnedRaw ?? '[]') as Array<{ href: string }>
        expect(pinned.some((i) => i.href === '/records/1')).toBe(true)

        // Palette stays open when pinning.
        expect(document.querySelector('[data-palette-input]')).not.toBeNull()

        const unpin = document.querySelector('[aria-label="Unpin"]') as HTMLElement | null
        expect(unpin).not.toBeNull()

        unpin?.click()
        await nextTick()

        const pinnedAfterRaw = window.sessionStorage.getItem(pinnedKey)
        expect(pinnedAfterRaw).toBe('[]')

        wrapper.unmount()
    })

    it('navigates remote results with Arrow keys and selects with Enter', async () => {
        vi.useFakeTimers()

        global.fetch = fetchMock.mockResolvedValue({
            ok: true,
            json: async () => ({
                groups: [
                    {
                        label: 'Posts',
                        items: [
                            { title: 'Zeta One', subtitle: null, href: '/posts/1' },
                            { title: 'Zeta Two', subtitle: null, href: '/posts/2' },
                        ],
                    },
                ],
            }),
        }) as unknown as typeof fetch

        const { default: PanelCommandPalette } = await import('./PanelCommandPalette.vue')

        const wrapper = mount(PanelCommandPalette, { attachTo: document.body })

        await wrapper.get('button[aria-label="Search"]').trigger('click')
        await nextTick()

        const input = document.querySelector('[data-palette-input]') as HTMLInputElement
        input.value = 'zz'
        input.dispatchEvent(new Event('input'))

        await vi.advanceTimersByTimeAsync(250)
        await flushPromises()
        await nextTick()

        expect(fetchMock).toHaveBeenCalled()

        const openCandidates = Array.from(document.querySelectorAll('button[data-active]'))
        expect(openCandidates.length).toBeGreaterThanOrEqual(2)

        const active1 = openCandidates.find(
            (el) =>
                el.getAttribute('data-active') === 'true' || el.getAttribute('data-active') === '1',
        )
        expect(active1?.textContent).toContain('Zeta One')

        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
        await nextTick()

        const active2 = Array.from(document.querySelectorAll('button[data-active]')).find(
            (el) =>
                el.getAttribute('data-active') === 'true' || el.getAttribute('data-active') === '1',
        )
        expect(active2?.textContent).toContain('Zeta Two')

        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
        await nextTick()

        expect(visitMock).toHaveBeenCalledWith('/posts/2')

        vi.useRealTimers()

        wrapper.unmount()
    })

    it('closes on Escape', async () => {
        const { default: PanelCommandPalette } = await import('./PanelCommandPalette.vue')

        const wrapper = mount(PanelCommandPalette, { attachTo: document.body })

        await nextTick()

        const searchButton = document.querySelector(
            'button[aria-label="Search"]',
        ) as HTMLButtonElement
        searchButton.click()
        await nextTick()

        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
        await nextTick()

        expect(document.querySelector('[data-palette-input]')).toBeNull()

        wrapper.unmount()
    })
})
