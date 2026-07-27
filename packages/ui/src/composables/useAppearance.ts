import { computed, onMounted, ref, watch } from 'vue'

/**
 * Per-user appearance: theme, density, font size, sidebar side.
 *
 * TWO OF THESE GO BEYOND FILAMENT. There, font and sidebar behaviour are
 * developer panel-config — decided once for everyone. Here they are per-user
 * preferences, which is what an operator staring at a table for eight hours
 * actually wants, and costs almost nothing: every one is a CSS custom property
 * on :root, the same mechanism per-tenant branding already uses.
 *
 * Stored in localStorage rather than on the server. It is a display preference,
 * not data — a round trip to change font size would be absurd, and it must apply
 * before first paint or the page visibly reflows.
 */
export type Theme = 'light' | 'dark' | 'system'
export type Density = 'comfortable' | 'compact'
export type FontSize = 'small' | 'normal' | 'large'
export type SidebarSide = 'left' | 'right'

export interface Appearance {
    theme: Theme
    density: Density
    fontSize: FontSize
    sidebarSide: SidebarSide
}

const STORAGE_KEY = 'panelkit.appearance'

const DEFAULTS: Appearance = {
    theme: 'system',
    density: 'comfortable',
    fontSize: 'normal',
    sidebarSide: 'left',
}

/** Root font size. Everything else is in rem, so one value scales the panel. */
const FONT_SIZES: Record<FontSize, string> = {
    small: '14px',
    normal: '16px',
    large: '18px',
}

/** Vertical padding for table rows and list items. */
const DENSITIES: Record<Density, string> = {
    comfortable: '0.5rem',
    compact: '0.25rem',
}

/**
 * Module-level so every consumer shares one source of truth.
 *
 * A per-component ref would let the topbar menu and the layout disagree about
 * the current theme — the menu would show one thing and the page render another.
 */
const state = ref<Appearance>({ ...DEFAULTS })
let initialised = false

export function useAppearance() {
    function apply(next: Appearance) {
        if (typeof document === 'undefined') return

        const root = document.documentElement

        const dark =
            next.theme === 'dark' ||
            (next.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

        root.classList.toggle('dark', dark)
        root.style.setProperty('--pk-font-size', FONT_SIZES[next.fontSize])
        root.style.setProperty('--pk-row-padding', DENSITIES[next.density])
        root.dataset.sidebar = next.sidebarSide
    }

    function set(patch: Partial<Appearance>) {
        state.value = { ...state.value, ...patch }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.value))
        } catch {
            // Private mode or quota. The preference still applies for this
            // session; only persistence is lost, which is not worth failing on.
        }

        apply(state.value)
    }

    onMounted(() => {
        if (initialised) return
        initialised = true

        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) state.value = { ...DEFAULTS, ...JSON.parse(saved) }
        } catch {
            // Corrupt storage falls back to defaults rather than breaking the
            // page — an unreadable preference is not an error worth showing.
        }

        apply(state.value)

        // Follow the OS only while the user has actually chosen "system".
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', () => state.value.theme === 'system' && apply(state.value))
    })

    return {
        appearance: computed(() => state.value),
        set,
        FONT_SIZES,
    }
}
