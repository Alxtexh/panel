<script setup lang="ts">
/**
 * A panel of content: a border, a surface, and somewhere to put a heading.
 *
 * REPORTED FROM A REAL PORT: `StatCard` and `ChartCard` cover the dashboard,
 * and a page wanting an ordinary block of content had nothing - so every screen
 * hand-rolled `rounded-lg border bg-card` on a div. Fifteen copies of that
 * string exist in the reference app, which is the measurement that decided this
 * was worth a component rather than a line in the design rules.
 *
 * WHAT IT IS NOT is a layout system. There is no `variant`, no tone, no
 * elevation scale: those grow one prop at a time until the component is a
 * styling language nobody can read, and a card that needs a red border can take
 * one through `class`, which merges. What it standardises is the SHAPE - the
 * radius, the border, the surface and the padding rhythm - because those are
 * what drift apart across screens and what nobody notices drifting.
 *
 * PADDING IS OPTIONAL AND ON BY DEFAULT, because the exception is specific and
 * obvious: a table fills its card edge to edge, and every other kind of content
 * wants breathing room. `:padded="false"` and the body is yours.
 *
 * THE HEADER APPEARS ONLY IF ASKED FOR. A card with an empty header row is a
 * card with a stray line across the top of it, so both the element and its
 * bottom border depend on there being something to put there.
 */
/*
 * `padded` IS DEFAULTED EXPLICITLY, and it has to be. Vue casts an absent
 * BOOLEAN prop to `false` rather than leaving it undefined, so a component
 * checking `padded === false` reads every card that never mentioned the prop as
 * asking for no padding - which is how this shipped for exactly one test run,
 * with every default card rendering flush to its border.
 */
withDefaults(
    defineProps<{
        /** Heading text. Use the `header` slot instead when it is not just text. */
        title?: string
        /** A line under the title - what this block is, when that is not obvious. */
        description?: string
        /** Off for content that fills the card, a table above all. */
        padded?: boolean
    }>(),
    { padded: true },
)

defineSlots<{
    default(): unknown
    /** Replaces title/description entirely. */
    header(): unknown
    /** Trailing controls on the header row. */
    actions(): unknown
    /** A footer with its own top border - totals, a save button, a count. */
    footer(): unknown
}>()
</script>

<template>
    <section class="pk-surface rounded-lg">
        <header
            v-if="title || description || $slots.header || $slots.actions"
            class="flex items-start justify-between gap-4 border-b px-4 py-3"
        >
            <div class="min-w-0">
                <slot name="header">
                    <h2 v-if="title" class="truncate text-sm font-medium">{{ title }}</h2>
                    <p v-if="description" class="text-muted-foreground mt-0.5 text-sm">
                        {{ description }}
                    </p>
                </slot>
            </div>

            <div v-if="$slots.actions" class="flex shrink-0 items-center gap-2">
                <slot name="actions" />
            </div>
        </header>

        <div :class="padded ? 'p-4' : ''">
            <slot />
        </div>

        <footer v-if="$slots.footer" class="flex items-center gap-2 border-t px-4 py-3">
            <slot name="footer" />
        </footer>
    </section>
</template>
