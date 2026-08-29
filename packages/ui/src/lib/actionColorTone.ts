/**
 * `RecordAction::color()`'s six-colour palette - `primary | gray | success |
 * warning | danger | info` - as a text-colour class.
 *
 * ONE MAP, USED EVERYWHERE THE PALETTE ARRIVES. `RecordActions.vue` tints a
 * menu item's icon with it; a `RecordAction`'s own modal footer tints an
 * `extraModalFooterActions()` link the same way. Two copies of six Tailwind
 * classes is exactly the kind of duplication that drifts the moment one
 * caller's dark-mode shade gets tuned and the other does not.
 */
const TONES: Record<string, string> = {
    primary: 'text-primary',
    gray: 'text-foreground',
    success: 'text-emerald-600 dark:text-emerald-400',
    warning: 'text-amber-600 dark:text-amber-500',
    danger: 'text-destructive',
    info: 'text-sky-600 dark:text-sky-400',
}

export function actionColorTone(color?: string | null): string {
    return TONES[color ?? 'gray'] ?? TONES.gray!
}
