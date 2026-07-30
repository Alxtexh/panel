/**
 * PkButton's classes, callable without PkButton.
 *
 * WHY THIS IS ITS OWN FUNCTION. `PkButton` only renders as an HTML tag name
 * (`as="a"`) - it never merges its classes onto a child, deliberately, per
 * the component's own note: "Inertia's `Link` renders its own element, so
 * the pattern that matters is 'give me these classes on an `<a>`', which is
 * a prop, not a slot-merging primitive." That works for a plain link. It does
 * not work for `@inertiajs/vue3`'s `<Link>`, which is a component, not a tag
 * name `as` can name - so a caller that wanted an Inertia-navigable button
 * reached for `as-child`, a prop `PkButton` has never declared. Vue's
 * fallthrough attributes rendered it anyway, as a literal `as-child=""`
 * attribute on the real `<button>`, while the `<Link>` in the default slot
 * rendered as an `<a>` INSIDE it - a button containing a link, which is what
 * an accessibility sweep of the resource list and record pages found under
 * `nested-interactive`: "Element has focusable descendants".
 *
 * THE FIX IS THIS EXPORT, not a slot-merging primitive. `<Link :class=
 * "buttonClasses({ size: 'sm' })">` is one real element with button styling,
 * not two elements pretending to be one - and it costs no new dependency,
 * which is the same trade `PkButton` itself already made.
 */
export interface ButtonClassesOptions {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
    class?: string
}

const BASE =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ' +
    'transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none ' +
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 " +
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const VARIANTS: Record<string, string> = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive:
        'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 ' +
        'dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
    outline:
        'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground ' +
        'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
    link: 'text-primary underline-offset-4 hover:underline',
}

const SIZES: Record<string, string> = {
    default: 'h-9 px-4 py-2 has-[>svg]:px-3',
    sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
    lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
    icon: 'size-9',
    'icon-sm': 'size-8',
    'icon-lg': 'size-10',
}

export function buttonClasses(options: ButtonClassesOptions = {}): string {
    const variant = options.variant ?? 'default'
    const size = options.size ?? 'default'

    return [BASE, VARIANTS[variant], SIZES[size], options.class].filter(Boolean).join(' ')
}
