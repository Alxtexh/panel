import { computed, onMounted, ref } from 'vue'

/**
 * Per-user appearance: colour, scheme, density, font size, sidebar side.
 *
 * MOST OF THIS GOES BEYOND FILAMENT, where font and sidebar behaviour are
 * developer panel-config decided once for everyone. Per-user costs almost
 * nothing — every value is a CSS custom property on :root, the same mechanism
 * per-tenant branding uses — and an operator staring at a table for eight hours
 * has opinions a developer cannot pre-empt.
 *
 * Stored in localStorage rather than on the server. It is a display preference,
 * not data: a round trip to change font size would be absurd, and it has to
 * apply before first paint or the page visibly reflows.
 */
export type Theme = 'light' | 'dark' | 'system'
export type Density = 'comfortable' | 'compact'
/**
 * Where the navigation lives.
 *
 * `horizontal` is a different LAYOUT, not a different side — the nav becomes a
 * top bar with dropdown groups and there is no vertical rail at all. It shares
 * this setting because to the person choosing it, all three are the same
 * question: "where do I want the menu".
 */
export type SidebarSide = 'left' | 'right' | 'horizontal'
export type CardStyle = 'transparent' | 'filled'

export interface Appearance {
    theme: Theme
    density: Density
    /** Root font size in PIXELS. Everything else is rem, so one value scales the panel. */
    fontSize: number
    sidebarSide: SidebarSide
    cardStyle: CardStyle
    /** Key into PRIMARY_COLORS. */
    primary: string
    /** Key into SURFACE_TINTS. */
    surface: string
}

/**
 * Accent palette, in oklch.
 *
 * oklch because it is perceptually uniform: the same lightness value looks
 * equally light across hues, so a generated hover or muted variant stays legible
 * on every colour. The same reason the spec picked it for tenant branding.
 *
 * Each entry carries its own foreground, because contrast is not derivable from
 * the accent alone — yellow needs dark text where indigo needs light, and
 * getting that wrong produces unreadable buttons rather than ugly ones.
 */
export const PRIMARY_COLORS: Record<string, { label: string; value: string; foreground: string }> = {
    slate: { label: 'Slate', value: 'oklch(0.32 0.02 260)', foreground: 'oklch(0.98 0 0)' },
    emerald: { label: 'Emerald', value: 'oklch(0.60 0.14 163)', foreground: 'oklch(0.99 0 0)' },
    green: { label: 'Green', value: 'oklch(0.63 0.17 145)', foreground: 'oklch(0.99 0 0)' },
    lime: { label: 'Lime', value: 'oklch(0.72 0.18 130)', foreground: 'oklch(0.20 0 0)' },
    orange: { label: 'Orange', value: 'oklch(0.68 0.18 45)', foreground: 'oklch(0.99 0 0)' },
    amber: { label: 'Amber', value: 'oklch(0.75 0.15 75)', foreground: 'oklch(0.20 0 0)' },
    yellow: { label: 'Yellow', value: 'oklch(0.82 0.16 95)', foreground: 'oklch(0.20 0 0)' },
    teal: { label: 'Teal', value: 'oklch(0.62 0.11 190)', foreground: 'oklch(0.99 0 0)' },
    cyan: { label: 'Cyan', value: 'oklch(0.68 0.12 215)', foreground: 'oklch(0.20 0 0)' },
    sky: { label: 'Sky', value: 'oklch(0.63 0.15 240)', foreground: 'oklch(0.99 0 0)' },
    blue: { label: 'Blue', value: 'oklch(0.55 0.20 262)', foreground: 'oklch(0.99 0 0)' },
    indigo: { label: 'Indigo', value: 'oklch(0.51 0.22 277)', foreground: 'oklch(0.99 0 0)' },
    violet: { label: 'Violet', value: 'oklch(0.56 0.24 295)', foreground: 'oklch(0.99 0 0)' },
    fuchsia: { label: 'Fuchsia', value: 'oklch(0.63 0.26 320)', foreground: 'oklch(0.99 0 0)' },
    pink: { label: 'Pink', value: 'oklch(0.63 0.22 355)', foreground: 'oklch(0.99 0 0)' },
    rose: { label: 'Rose', value: 'oklch(0.62 0.22 15)', foreground: 'oklch(0.99 0 0)' },
}

/**
 * Surface tint — the hue of greys, not their lightness.
 *
 * A neutral grey next to a warm accent reads as slightly wrong in a way people
 * notice without being able to name. Tinting the surface toward the accent hue
 * fixes it, which is why this is a separate choice rather than derived.
 */
export const SURFACE_TINTS: Record<string, { label: string; hue: number; chroma: number }> = {
    neutral: { label: 'Neutral', hue: 0, chroma: 0 },
    slate: { label: 'Slate', hue: 260, chroma: 0.012 },
    gray: { label: 'Gray', hue: 250, chroma: 0.006 },
    zinc: { label: 'Zinc', hue: 280, chroma: 0.006 },
    stone: { label: 'Stone', hue: 60, chroma: 0.008 },
    warm: { label: 'Warm', hue: 40, chroma: 0.014 },
    cool: { label: 'Cool', hue: 220, chroma: 0.014 },
    sand: { label: 'Sand', hue: 80, chroma: 0.016 },
}

export const FONT_SIZE_MIN = 12
export const FONT_SIZE_MAX = 20

const STORAGE_KEY = 'panelkit.appearance'

const DEFAULTS: Appearance = {
    theme: 'system',
    density: 'comfortable',
    fontSize: 16,
    sidebarSide: 'left',
    cardStyle: 'transparent',
    primary: 'slate',
    surface: 'neutral',
}

/**
 * Module-level, so every consumer shares one source of truth.
 *
 * A per-component ref would let the drawer and the layout disagree about the
 * current theme — the control showing one thing and the page rendering another.
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

        const accent = PRIMARY_COLORS[next.primary] ?? PRIMARY_COLORS.slate
        root.style.setProperty('--primary', accent.value)
        root.style.setProperty('--primary-foreground', accent.foreground)
        root.style.setProperty('--ring', accent.value)

        // Surfaces are rebuilt from the tint so background, card and border stay
        // in the same hue family. Lightness flips with the scheme; hue does not.
        const tint = SURFACE_TINTS[next.surface] ?? SURFACE_TINTS.neutral
        const c = tint.chroma
        const h = tint.hue

        if (dark) {
            root.style.setProperty('--background', `oklch(0.15 ${c} ${h})`)
            root.style.setProperty('--card', `oklch(${next.cardStyle === 'filled' ? 0.19 : 0.15} ${c} ${h})`)
            root.style.setProperty('--popover', `oklch(0.18 ${c} ${h})`)
            root.style.setProperty('--muted', `oklch(0.24 ${c} ${h})`)
            root.style.setProperty('--accent', `oklch(0.24 ${c} ${h})`)
            root.style.setProperty('--border', `oklch(0.27 ${c} ${h})`)
            root.style.setProperty('--input', `oklch(0.27 ${c} ${h})`)
        } else {
            root.style.setProperty('--background', `oklch(1 0 0)`)
            root.style.setProperty('--card', `oklch(${next.cardStyle === 'filled' ? 0.985 : 1} ${c} ${h})`)
            root.style.setProperty('--popover', `oklch(1 0 0)`)
            root.style.setProperty('--muted', `oklch(0.965 ${c} ${h})`)
            root.style.setProperty('--accent', `oklch(0.965 ${c} ${h})`)
            root.style.setProperty('--border', `oklch(0.925 ${c} ${h})`)
            root.style.setProperty('--input', `oklch(0.90 ${c} ${h})`)
        }

        root.style.setProperty('--pk-font-size', `${next.fontSize}px`)
        root.style.setProperty('--pk-row-padding', next.density === 'compact' ? '0.25rem' : '0.5rem')
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

    function reset() {
        set({ ...DEFAULTS })
    }

    onMounted(() => {
        if (initialised) return
        initialised = true

        try {
            const saved = localStorage.getItem(STORAGE_KEY)

            if (saved) {
                const parsed = { ...DEFAULTS, ...JSON.parse(saved) } as Appearance

                /*
                 * MIGRATION. An earlier version stored fontSize as a NAME
                 * ('small' | 'normal' | 'large'); it is a pixel number now.
                 * A stored string sailed straight through and rendered
                 * "smallpx" as the label and an invalid CSS value, so the panel
                 * silently fell back to the browser default size.
                 *
                 * Anything not a number in range is discarded rather than
                 * coerced — a stale preference is not worth a broken layout.
                 */
                const legacy: Record<string, number> = { small: 14, normal: 16, large: 18 }

                if (typeof parsed.fontSize === 'string') {
                    parsed.fontSize = legacy[parsed.fontSize] ?? DEFAULTS.fontSize
                }

                if (
                    typeof parsed.fontSize !== 'number' ||
                    Number.isNaN(parsed.fontSize) ||
                    parsed.fontSize < FONT_SIZE_MIN ||
                    parsed.fontSize > FONT_SIZE_MAX
                ) {
                    parsed.fontSize = DEFAULTS.fontSize
                }

                state.value = parsed
            }
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
        reset,
        PRIMARY_COLORS,
        SURFACE_TINTS,
        FONT_SIZE_MIN,
        FONT_SIZE_MAX,
    }
}
