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
export declare const PAGE_SHELL = "w-full min-w-0 px-4 py-6 sm:px-6";
/** Same full-bleed rule with tighter padding (resource-style screens). */
export declare const PAGE_SHELL_COMPACT = "w-full min-w-0 p-3 sm:p-4";
/** Full-bleed stack used by app / portal content pages. */
export declare const PAGE_SHELL_STACK = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6";
/**
 * Optional left-aligned field column inside PAGE_SHELL / PAGE_SHELL_COMPACT.
 * Matches Filament's default max content width (`SevenExtraLarge` / max-w-7xl).
 * No `mx-auto`: the form stays on the leading edge, not floating in empty gutters.
 */
export declare const FORM_MEASURE = "w-full max-w-7xl";
/** Body padding inside PkSlideover when `padded` is true (default). */
export declare const SLIDEOVER_BODY = "px-4 py-4";
/**
 * Field column inside a slide-over or dense modal. Full width of the overlay,
 * never page FORM_MEASURE and never centred.
 */
export declare const OVERLAY_FORM_MEASURE = "w-full min-w-0";
/** Preset widths for PkSlideover `size`. Always `w-full` so mobile is edge-to-edge. */
export declare const SLIDEOVER_WIDTH: {
    /** Filters, short lists (~24rem). */
    readonly sm: "w-full max-w-sm";
    /** Notifications, inspect (~28rem). */
    readonly md: "w-full max-w-md";
    /** Secondary action forms (~36rem). */
    readonly lg: "w-full max-w-xl";
    /** Opt-in CRUD slide-over (~42rem). */
    readonly xl: "w-full max-w-2xl";
};
export type SlideoverSize = keyof typeof SLIDEOVER_WIDTH;
export declare const MODAL_WIDTH: {
    /** Short confirmations with no fields (~24rem). */
    readonly sm: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-md";
    /** The long-standing default: confirmations and short copy (~32rem). */
    readonly confirm: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-lg";
    /** Wider than confirm when an action form needs more room than confirm copy (~36rem). */
    readonly form: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-xl";
    /** A field stack too wide for `form` without becoming a page (~42rem). */
    readonly lg: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-2xl";
    /** The widest dense modal offers - past this, use PkSlideover instead (~56rem). */
    readonly xl: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-4xl";
};
export type ModalSize = keyof typeof MODAL_WIDTH;
/**
 * @deprecated Use `MODAL_WIDTH.confirm`. Kept so an existing import of this
 * exact constant keeps working; `PkModal` itself reads `MODAL_WIDTH` now.
 */
export declare const MODAL_PANEL: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-lg";
/**
 * @deprecated Use `MODAL_WIDTH.form`. Kept so an existing import of this
 * exact constant keeps working; `PkModal` itself reads `MODAL_WIDTH` now.
 */
export declare const MODAL_PANEL_FORM: "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl max-w-xl";
