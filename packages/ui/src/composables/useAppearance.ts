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

/** Where the COMPUTED custom properties are cached for the pre-paint script. */
const VARS_KEY = 'panelkit.appearance.vars'

export function isDark(next: Appearance): boolean {
    return (
        next.theme === 'dark' ||
        (next.theme === 'system' &&
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
}

/**
 * The CSS custom properties a preference resolves to.
 *
 * SEPARATED FROM APPLYING THEM so the same mapping can be cached for the inline
 * script that runs before Vue boots. The alternative — reimplementing the
 * palette in Blade — would be two copies of the colour tables that drift the
 * first time one is edited.
 */
export function appearanceVars(next: Appearance): Record<string, string> {
    const accent = PRIMARY_COLORS[next.primary] ?? PRIMARY_COLORS.slate
    const tint = SURFACE_TINTS[next.surface] ?? SURFACE_TINTS.neutral
    const c = tint.chroma
    const h = tint.hue
    const dark = isDark(next)

    const surfaces = dark
        ? {
              '--background': `oklch(0.15 ${c} ${h})`,
              '--card': `oklch(${next.cardStyle === 'filled' ? 0.19 : 0.15} ${c} ${h})`,
              '--popover': `oklch(0.18 ${c} ${h})`,
              '--muted': `oklch(0.24 ${c} ${h})`,
              '--accent': `oklch(0.24 ${c} ${h})`,
              '--border': `oklch(0.27 ${c} ${h})`,
              '--input': `oklch(0.27 ${c} ${h})`,
          }
        : {
              '--background': 'oklch(1 0 0)',
              '--card': `oklch(${next.cardStyle === 'filled' ? 0.985 : 1} ${c} ${h})`,
              '--popover': 'oklch(1 0 0)',
              '--muted': `oklch(0.965 ${c} ${h})`,
              '--accent': `oklch(0.965 ${c} ${h})`,
              '--border': `oklch(0.925 ${c} ${h})`,
              '--input': `oklch(0.90 ${c} ${h})`,
          }

    return {
        '--primary': accent.value,
        '--primary-foreground': accent.foreground,
        '--ring': accent.value,
        ...surfaces,
        '--pk-font-size': `${next.fontSize}px`,
        '--pk-row-padding': next.density === 'compact' ? '0.25rem' : '0.5rem',
    }
}

/**
 * Read the stored preference, migrating anything an older version wrote.
 *
 * Exported and callable OUTSIDE a component, because the appearance has to be
 * applied on pages that mount no panel component at all — the sign-in screen
 * being the one people notice.
 */
export function readAppearance(): Appearance {
    if (typeof window === 'undefined') return { ...DEFAULTS }

    try {
        const saved = localStorage.getItem(STORAGE_KEY)

        if (!saved) return { ...DEFAULTS }

        const parsed = { ...DEFAULTS, ...JSON.parse(saved) } as Appearance

        /*
         * MIGRATION. An earlier version stored fontSize as a NAME
         * ('small' | 'normal' | 'large'); it is a pixel number now. A stored
         * string sailed straight through and rendered "smallpx" as the label
         * and an invalid CSS value.
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

        return parsed
    } catch {
        // Corrupt storage falls back to defaults rather than breaking the page.
        return { ...DEFAULTS }
    }
}

/**
 * Apply the stored appearance at APP BOOT, before any component mounts.
 *
 * This is the fix for two related bugs. The preference used to be applied in
 * `onMounted` of a component that only exists in the authenticated shell, so
 * (a) the sign-in and registration screens rendered with no theme at all, and
 * (b) signing out and back in appeared to lose the settings — nothing had been
 * lost, but nothing re-applied them until a panel page mounted.
 *
 * It also fights nothing: this is now the ONLY writer of the theme class.
 */
export function initializeAppearance(): void {
    state.value = readAppearance()
    applyAppearance(state.value)
}

/** Apply a preference to the document, and cache it for the next first paint. */
export function applyAppearance(next: Appearance): void {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    const vars = appearanceVars(next)

    root.classList.toggle('dark', isDark(next))

    for (const [property, value] of Object.entries(vars)) {
        root.style.setProperty(property, value)
    }

    root.dataset.sidebar = next.sidebarSide

    try {
        // Cached so the pre-paint script can replay it without knowing the
        // palette — which is what removes the flash of default theme.
        localStorage.setItem(VARS_KEY, JSON.stringify({ dark: isDark(next), vars }))
    } catch {
        // Private mode. Only the flash-prevention is lost.
    }
}

export function useAppearance() {
    function apply(next: Appearance) {
        applyAppearance(next)
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

    /*
     * Applied at APP BOOT by initializeAppearance(), not here.
     *
     * The load used to live in onMounted, so it only ran once a component
     * calling this composable mounted — and no such component exists on the
     * sign-in screen. A first mount still re-reads storage, in case another tab
     * changed it while this one was open.
     */
    onMounted(() => {
        if (initialised) return
        initialised = true

        state.value = readAppearance()
        applyAppearance(state.value)
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
