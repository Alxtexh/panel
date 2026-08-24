import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
    applyAppearance,
    bootstrapAppearance,
    initializeAppearance,
    readServerAppearance,
    resetAppearanceBootstrapForTests,
    syncAppearanceFromInertiaPage,
} from './useAppearance'

const STORAGE_KEY = 'alxtexhpanel.appearance'

describe('useAppearance server hydration', () => {
    beforeEach(() => {
        resetAppearanceBootstrapForTests()
        localStorage.clear()
        document.documentElement.className = ''
        document.documentElement.removeAttribute('style')
        document.documentElement.removeAttribute('data-sidebar')
        document.documentElement.removeAttribute('data-content-layout')
        ;(window as unknown as { __panelAppearance?: unknown }).__panelAppearance = undefined
        ;(window as unknown as { __panelAppearanceApplied?: boolean }).__panelAppearanceApplied =
            false
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

    it('does not re-apply CSS when the Blade prepaint script already ran', () => {
        ;(window as unknown as { __panelAppearance?: Record<string, string> }).__panelAppearance =
            {
                theme: 'dark',
                primary: 'rose',
            }
        ;(window as unknown as { __panelAppearanceApplied?: boolean }).__panelAppearanceApplied =
            true

        document.documentElement.classList.add('dark')
        document.documentElement.style.setProperty('--primary', 'oklch(0.62 0.22 15)')

        const setProperty = vi.spyOn(CSSStyleDeclaration.prototype, 'setProperty')

        bootstrapAppearance()

        expect(setProperty).not.toHaveBeenCalled()
        expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}').primary).toBe('rose')
    })

    it('still applies after login when prepaint had only guest defaults', () => {
        ;(window as unknown as { __panelAppearanceApplied?: boolean }).__panelAppearanceApplied =
            true

        initializeAppearance({ theme: 'light', primary: 'slate' })
        expect(document.documentElement.classList.contains('dark')).toBe(false)

        syncAppearanceFromInertiaPage({
            props: {
                appearance: { theme: 'dark', primary: 'emerald' },
            },
        })

        expect(document.documentElement.classList.contains('dark')).toBe(true)
        expect(document.documentElement.style.getPropertyValue('--primary')).toContain('oklch')
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

    it('applyAppearance is exported for hosts that paint without bootstrap', () => {
        applyAppearance({
            theme: 'dark',
            density: 'comfortable',
            fontSize: 16,
            sidebarSide: 'left',
            cardStyle: 'transparent',
            radius: 0.5,
            contentLayout: 'full',
            menuStyle: 'collapsible',
            primary: 'blue',
            surface: 'neutral',
        })

        expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
})
