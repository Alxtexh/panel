<script setup lang="ts">
/**
 * A placeholder shaped like the thing that has not arrived yet.
 *
 * A CONTRACT, NOT A CONVENIENCE. There were six different skeletons in this
 * package - `bg-muted animate-pulse rounded`, `bg-muted-foreground/15 …`, one
 * with `my-1` and one without - written independently at the six places
 * something loads. Individually each was fine; together they were six different
 * greys pulsing at the same time on one screen, which reads as a rendering fault
 * rather than as loading.
 *
 * THE SHAPE IS THE POINT, and it is why this takes a `variant` rather than a
 * class. A skeleton exists to hold the space the real content will occupy: get
 * the size wrong and the page jumps when the data lands, which is the layout
 * shift the spec puts at zero. The variants below are the shapes this panel
 * actually loads - a number, a line of text, a chart body, a row of a table -
 * and adding a seventh should mean naming a seventh shape rather than typing
 * dimensions inline again.
 *
 * IT ANNOUNCES ITSELF TO A SCREEN READER ONCE, at the container, not per bar.
 * A dozen `aria-busy` elements is a dozen interruptions describing the same
 * wait; `role="status"` with a single label says "loading" and stops.
 *
 * MOTION IS OPTIONAL AND RESPECTS THE SYSTEM SETTING. A pulsing rectangle is a
 * reasonable loading cue and a genuine problem for anybody with a vestibular
 * disorder, so `prefers-reduced-motion` turns it into a flat block rather than
 * removing the placeholder.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        /**
         * The shape being stood in for.
         *
         * Named rather than measured, so the six call sites cannot each choose a
         * different height for the same kind of content.
         */
        variant?: 'text' | 'number' | 'badge' | 'block' | 'row' | 'circle'
        /** How many, for the shapes that repeat. */
        count?: number
        /** Overrides the variant's height, for a block that must match a chart. */
        height?: number
        /** What a screen reader is told, once, for the whole group. */
        label?: string
    }>(),
    { variant: 'text', count: 1, label: 'Loading' },
)

/**
 * The shapes, as classes rather than inline styles.
 *
 * WIDTHS VARY BY VARIANT ON PURPOSE. A text placeholder that is exactly as wide
 * as its container reads as a filled bar; the slightly short last line is what
 * makes a block of grey read as "text is coming".
 */
const SHAPES: Record<string, string> = {
    text: 'h-4 w-full',
    number: 'h-6 w-24',
    badge: 'h-4 w-7',
    block: 'h-full w-full',
    row: 'h-9 w-full',
    circle: 'size-8 rounded-full',
}

const shape = computed(() => SHAPES[props.variant] ?? SHAPES.text)

const repeated = computed(() => Math.max(1, Math.min(props.count, 50)))

/**
 * The last line of a multi-line text block is short.
 *
 * Without it a stack of identical bars looks like a table, not a paragraph -
 * and the whole job of a skeleton is to be recognisable as the thing it stands
 * in for before the thing arrives.
 */
function widthFor(index: number): string | undefined {
    if (props.variant !== 'text' || repeated.value === 1) {
        return undefined
    }

    return index === repeated.value - 1 ? '60%' : undefined
}
</script>

<template>
    <!--
        ONE `role="status"` FOR THE GROUP. A dozen busy elements is a dozen
        interruptions describing the same wait.
    -->
    <div
        role="status"
        :aria-label="label"
        aria-live="polite"
        class="flex flex-col gap-2"
        :style="height ? { height: `${height}px` } : undefined"
    >
        <span
            v-for="i in repeated"
            :key="i"
            aria-hidden="true"
            class="bg-muted motion-safe:animate-pulse rounded"
            :class="shape"
            :style="{
                width: widthFor(i - 1),
                height: height && variant === 'block' ? `${height}px` : undefined,
            }"
        />
    </div>
</template>
