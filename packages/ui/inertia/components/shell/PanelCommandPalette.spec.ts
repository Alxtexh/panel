import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

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
    router: { visit: vi.fn() },
}))

const recentKey = 'alxtexhpanel.command-palette.recent./panel-search'

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
            (el) => el.getAttribute('data-active') === 'true' || el.getAttribute('data-active') === '1',
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
            (el) => el.getAttribute('data-active') === 'true' || el.getAttribute('data-active') === '1',
        )

        expect(typingActive?.textContent).toContain('Page Alpha')
    })
})

