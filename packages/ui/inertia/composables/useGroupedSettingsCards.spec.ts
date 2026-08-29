import { describe, expect, it, vi } from 'vitest'

const page = vi.hoisted(() => ({ props: {} as Record<string, unknown> }))

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
}))

const { useGroupedSettingsCards } = await import('./useGroupedSettingsCards')

describe('useGroupedSettingsCards', () => {
    it('is grouped when the panel says so', () => {
        page.props = { panel: { groupedSettingsCards: true } }

        const { grouped, sectionClass, wrapClass } = useGroupedSettingsCards()

        expect(grouped.value).toBe(true)
        expect(sectionClass.value).toBe('space-y-6 rounded-lg border p-6')
        expect(wrapClass.value).toBe('rounded-lg border p-6')
    })

    it('falls back to the flat list when the panel opted out', () => {
        page.props = { panel: { groupedSettingsCards: false } }

        const { grouped, sectionClass, wrapClass } = useGroupedSettingsCards()

        expect(grouped.value).toBe(false)
        expect(sectionClass.value).toBe('space-y-6')
        expect(wrapClass.value).toBe('')
    })

    it('falls back to the flat list when the panel prop is missing entirely', () => {
        page.props = {}

        const { grouped } = useGroupedSettingsCards()

        expect(grouped.value).toBe(false)
    })
})
