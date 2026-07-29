<script setup lang="ts">
/**
 * A button, with no dependency behind it.
 *
 * WHY THIS EXISTS AT ALL, given that every Laravel starter kit ships one. The
 * panel's own screens - the resource list, the form, the record page - now live
 * in a package that an application installs. Those screens were written against
 * the playground's shadcn `Button`, which is `reka-ui` plus
 * `class-variance-authority` plus a `cn()` from the application's own `lib`.
 * Shipping that meant either vendoring three dependencies into this package or
 * requiring every consumer to have run shadcn's installer with the same
 * component names - a requirement that fails at RUNTIME, in the browser, as a
 * missing import in a screen the consumer did not write.
 *
 * SO THE VARIANTS ARE A PLAIN MAP. It is the same set of names and the same
 * Tailwind classes as shadcn's, deliberately: an application that HAS shadcn
 * sees a button identical to its own, and one that does not sees a button.
 * `cva` buys ordering and type inference over an object literal, neither of
 * which is worth a dependency in a package whose whole job is to install
 * cleanly.
 *
 * THE COLOURS ARE TOKENS, not values - `bg-primary`, `text-destructive` - so
 * the button takes the consuming application's theme rather than imposing this
 * one. `@panelkit/ui/theme/tokens.css` defines them for an application that has
 * none.
 *
 * `as` RATHER THAN `asChild`. Inertia's `Link` renders its own element, so the
 * pattern that matters is "give me these classes on an `<a>`" - which is a prop,
 * not a slot-merging primitive. Anything more elaborate belongs to the
 * application, which can always pass `class` and get out of the way.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
        size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
        /** The element to render. `a` for a link that looks like a button. */
        as?: string
        class?: string
        disabled?: boolean
        type?: 'button' | 'submit' | 'reset'
    }>(),
    { variant: 'default', size: 'default', as: 'button', type: 'button' },
)

const BASE =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium '
    + 'transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none '
    + "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 "
    + 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const VARIANTS: Record<string, string> = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive:
        'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 '
        + 'dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
    outline:
        'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground '
        + 'dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
    link: 'text-primary underline-offset-4 hover:underline',
}

const SIZES: Record<string, string> = {
    default: 'h-9 px-4 py-2 has-[>svg]:px-3',
    sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
    lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
    'icon': 'size-9',
    'icon-sm': 'size-8',
    'icon-lg': 'size-10',
}

const classes = computed(() =>
    [BASE, VARIANTS[props.variant], SIZES[props.size], props.class].filter(Boolean).join(' '),
)

/*
 * `type` BELONGS TO A `<button>` AND NOTHING ELSE. Rendered on an anchor it is
 * a MIME type - `<a type="button">` is valid HTML that means something entirely
 * different - so it is dropped rather than passed through.
 */
const nativeType = computed(() => (props.as === 'button' ? props.type : undefined))
</script>

<template>
    <component
        :is="as"
        data-slot="button"
        :data-variant="variant"
        :data-size="size"
        :type="nativeType"
        :disabled="as === 'button' ? disabled : undefined"
        :aria-disabled="as !== 'button' && disabled ? 'true' : undefined"
        :class="classes"
    >
        <slot />
    </component>
</template>
