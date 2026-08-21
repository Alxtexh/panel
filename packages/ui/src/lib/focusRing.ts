/**
 * Shared focus-visible ring for inputs, toolbar controls, and chrome that
 * should feel like one kit rather than mixed ring widths.
 *
 * Prefer these over ad-hoc `ring-2` / `ring-[3px]` strings so a focus pass
 * stays one edit.
 */
export const FOCUS_RING =
    'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

/** Same token for containers that wrap an unstyled input (affix rows, editors). */
export const FOCUS_RING_WITHIN =
    'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]'

/** Compact controls (toolbar icons, sidebar items) that already own a border. */
export const FOCUS_RING_SOFT = 'outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]'
