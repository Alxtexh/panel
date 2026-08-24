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
