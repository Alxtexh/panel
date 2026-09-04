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
 * one. `@alxtexh-enterprise/panel/theme/tokens.css` defines them for an application that has
 * none.
 *
 * `as` RATHER THAN `asChild`. Inertia's `Link` renders its own element, so the
 * pattern that matters is "give me these classes on an `<a>`" - which is a prop,
 * not a slot-merging primitive. Anything more elaborate belongs to the
 * application, which can always pass `class` and get out of the way.
 *
 * `as-child` IS NOT A PROP HERE, ON PURPOSE - and that omission is worth
 * stating because it was passed anyway at three call sites in
 * `@alxtexh-enterprise/panel/inertia`, expecting reka-ui's slot-merging behaviour this
 * component does not have. Vue's attribute fallthrough rendered it as an
 * inert `as-child=""` attribute on a real `<button>`, with the `<Link>` in
 * the default slot rendering as an `<a>` INSIDE it - two interactive elements
 * where a screen reader or a keyboard user expects one. `buttonClasses()`,
 * exported alongside this component, is the fix: it hands the same classes
 * to a caller's own single element instead of asking this one to wrap it.
 */
import { computed } from 'vue'
import { buttonClasses } from './buttonClasses'

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

const classes = computed(() =>
    buttonClasses({ variant: props.variant, size: props.size, class: props.class }),
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
        class="pk-focus-ring"
        :class="classes"
    >
        <slot />
    </component>
</template>
