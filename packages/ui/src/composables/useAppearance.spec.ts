import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
    bootstrapAppearance,
    initializeAppearance,
    readServerAppearance,
    syncAppearanceFromInertiaPage,
} from './useAppearance'

const STORAGE_KEY = 'alxtexhpanel.appearance'

describe('useAppearance server hydration', () => {
    beforeEach(() => {
        localStorage.clear()
        document.documentElement.className = ''
        document.documentElement.removeAttribute('data-sidebar')
        document.documentElement.removeAttribute('data-content-layout')
        ;(window as unknown as { __panelAppearance?: unknown }).__panelAppearance = undefined
        document.getElementById('app')?.remove()
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('readServerAppearance prefers the inline account payload', () => {
        ;(window as unknown as { __panelAppearance?: Record<string, string> }).__panelAppearance =
            {
                theme: 'dark',
                primary: 'rose',
            }

        expect(readServerAppearance()).toEqual({ theme: 'dark', primary: 'rose' })
    })

    it('readServerAppearance falls back to the initial Inertia payload', () => {
        const app = document.createElement('div')
        app.id = 'app'
        app.dataset.page = JSON.stringify({
            props: {
                appearance: { theme: 'dark', density: 'compact' },
            },
        })
        document.body.appendChild(app)

        expect(readServerAppearance()).toEqual({ theme: 'dark', density: 'compact' })
    })

    it('initializeAppearance writes the server theme into localStorage', () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: 'light', primary: 'slate' }))

        initializeAppearance({ theme: 'dark', primary: 'rose' })

        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')

        expect(saved.theme).toBe('dark')
        expect(saved.primary).toBe('rose')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('bootstrapAppearance hydrates from the inline script', () => {
        ;(window as unknown as { __panelAppearance?: Record<string, string> }).__panelAppearance =
            {
                theme: 'dark',
            }

        bootstrapAppearance()

        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')

        expect(saved.theme).toBe('dark')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('syncAppearanceFromInertiaPage applies appearance after login navigation', () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: 'light' }))

        syncAppearanceFromInertiaPage({
            props: {
                appearance: { theme: 'dark', primary: 'emerald' },
            },
        })

        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')

        expect(saved.theme).toBe('dark')
        expect(saved.primary).toBe('emerald')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('syncAppearanceFromInertiaPage ignores a null appearance prop', () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: 'light' }))

        syncAppearanceFromInertiaPage({ props: { appearance: null } })

        expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}').theme).toBe('light')
        expect(document.documentElement.classList.contains('dark')).toBe(false)
    })
})
