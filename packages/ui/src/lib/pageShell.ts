/**
 * Full-bleed panel page chrome: fill the shell content area with padding only.
 *
 * Do not add `max-w-*` + `mx-auto` here. That centres a skinny column and leaves
 * empty gutters beside the main sidebar. Forms that need a content measure may
 * wrap their own field column inside this shell with FORM_MEASURE (left-aligned,
 * never centred).
 *
 * Kit rule: settings, resources (create/edit/view), PanelPage, and
 * `make:panel-page` stubs use these constants. Auth, onboarding, and marketing
 * may still centre themselves. Narrow centering is not the create/edit default.
 */
export const PAGE_SHELL = 'w-full min-w-0 px-4 py-6 sm:px-6'

/** Same full-bleed rule with tighter padding (resource-style screens). */
export const PAGE_SHELL_COMPACT = 'w-full min-w-0 p-3 sm:p-4'

/** Full-bleed stack used by app / portal content pages. */
export const PAGE_SHELL_STACK = 'w-full min-w-0 space-y-6 px-4 py-6 sm:px-6'

/**
 * Optional left-aligned field column inside PAGE_SHELL / PAGE_SHELL_COMPACT.
 * Matches Filament's default max content width (`SevenExtraLarge` / max-w-7xl).
 * No `mx-auto`: the form stays on the leading edge, not floating in empty gutters.
 */
export const FORM_MEASURE = 'w-full max-w-7xl'

/*
 | ---------------------------------------------------------------------------
 | Overlay chrome (slide-overs + dense modals)
 |
 | Create / edit / view stay dedicated pages by default. These tokens are for
 | secondary surfaces only: record action forms, attach-adjacent flows, filter
 | drawers, confirmations, notifications, and opt-in CRUD modals via
 | createUsing/editUsing/viewUsing('modal').
 |
 | Do not put page FORM_MEASURE (max-w-7xl) inside a slide-over. The panel is
 | already the measure; use OVERLAY_FORM_MEASURE instead.
 | ---------------------------------------------------------------------------
 */

/** Body padding inside PkSlideover when `padded` is true (default). */
export const SLIDEOVER_BODY = 'px-4 py-4'

/**
 * Field column inside a slide-over or dense modal. Full width of the overlay,
 * never page FORM_MEASURE and never centred.
 */
export const OVERLAY_FORM_MEASURE = 'w-full min-w-0'

/** Preset widths for PkSlideover `size`. Always `w-full` so mobile is edge-to-edge. */
export const SLIDEOVER_WIDTH = {
    /** Filters, short lists (~24rem). */
    sm: 'w-full max-w-sm',
    /** Notifications, inspect (~28rem). */
    md: 'w-full max-w-md',
    /** Secondary action forms (~36rem). */
    lg: 'w-full max-w-xl',
    /** Opt-in CRUD slide-over (~42rem). */
    xl: 'w-full max-w-2xl',
} as const

export type SlideoverSize = keyof typeof SLIDEOVER_WIDTH

/** Dense centred modal panel (confirmations, short action forms). */
export const MODAL_PANEL =
    'bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl'

/** Wider dense modal when an action form needs more room than confirm copy. */
export const MODAL_PANEL_FORM =
    'bg-popover text-popover-foreground flex w-full max-w-xl max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl'
