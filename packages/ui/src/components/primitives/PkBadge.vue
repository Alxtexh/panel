<script setup lang="ts">
/**
 * A small piece of state, rendered as a pill.
 *
 * HERE FOR THE SAME REASON AS `PkButton` - the packaged resource screens show a
 * record's status and a trashed row's origin as badges, and those screens must
 * render in an application that has never run shadcn's installer. Same variant
 * names, same classes, no dependency.
 *
 * IT IS NOT A STATUS COLOUR MAP. A schema emits a colour INTENT - `success`,
 * `danger` - and the table's own badge column resolves that; this is the plain
 * pill used by hand-written markup around the table, and conflating the two
 * would put presentation decisions back inside the schema.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        variant?: 'default' | 'secondary' | 'destructive' | 'outline'
        class?: string
    }>(),
    { variant: 'default' },
)

const BASE =
    'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium '
    + 'w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none'

const VARIANTS: Record<string, string> = {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-white dark:bg-destructive/60',
    outline: 'text-foreground',
}

const classes = computed(() =>
    [BASE, VARIANTS[props.variant], props.class].filter(Boolean).join(' '),
)
</script>

<template>
    <span data-slot="badge" :data-variant="variant" :class="classes">
        <slot />
    </span>
</template>
