<script setup lang="ts">
import { computed, ref } from 'vue'
import PkSkeleton from '../primitives/PkSkeleton.vue'
/**
 * One card, split into metric segments.
 *
 * WHY THIS IS NOT A ROW OF CARDS. Four separate cards say "four things"; one
 * card split by hairlines says "one thing, measured four ways" - which is what
 * a set of windows over the same metric actually is. The segments here are
 * meant to share a subject, and the container is what asserts that.
 *
 * THE DIVIDERS ARE GAPS, NOT BORDERS, and that is what makes it work on a
 * phone. A bordered variant has to know which edge to draw on, which changes
 * with the column count, so every breakpoint needs its own set of rules and a
 * `last:` exception to stop a trailing line. A `gap-px` grid over a coloured
 * background draws the hairlines wherever cells happen to meet - four across on
 * a desktop, two-by-two on a phone - with no per-breakpoint rules at all and no
 * edge line to suppress.
 *
 * ONE SWITCH FOR THE WHOLE STRIP, and it starts CLOSED.
 *
 * A per-segment eye was the wrong model twice over. These segments are one
 * metric over four windows, so revealing "this month" while "last 7 days" stays
 * dotted hides nothing - the sensitive thing is the magnitude, and any one
 * window gives it away. And four toggles means four clicks to put the strip
 * back the way it was, which is the state anyone who wanted it hidden wants
 * again a minute later.
 *
 * Starting hidden is the same argument from the other end: a strip that opens
 * revealed has already shown the number by the time you decide you did not want
 * it shown.
 *
 * THE MASK IS PRESENTATIONAL, NOT A SECURITY BOUNDARY. The value is in the DOM
 * either way; this is shoulder-surfing courtesy. Anything that must not reach
 * the browser must not be sent to it.
 */

export interface StatSegment {
    key: string
    label: string
    value: string | number
    /** Small muted line under the value. */
    caption?: string | null
}

const props = withDefaults(
    defineProps<{
        segments: StatSegment[]
        /**
         * Columns at the widest breakpoint.
         *
         * It never falls below TWO. A strip is a comparison, and a single
         * column stops being one - four stacked cells read as four unrelated
         * numbers you have to scroll between, which is the row of separate
         * cards this exists to avoid. Two-by-two keeps every value on screen
         * together on a phone.
         */
        columns?: 2 | 3 | 4 | 5 | 6
        /** Offer the reveal control at all. */
        maskable?: boolean
        /** Whether the strip starts masked. Hidden unless told otherwise. */
        hidden?: boolean
        loading?: boolean
    }>(),
    { columns: 4, maskable: true, hidden: true, loading: false },
)

const emit = defineEmits<{ (e: 'toggle', hidden: boolean): void }>()

/*
 * Local state seeded once, deliberately NOT synced to the prop afterwards.
 *
 * The values refresh - a poll, a filter change, a partial reload - and a strip
 * that re-hid itself every time fresh numbers arrived would fight whoever just
 * chose to look at them.
 */
const masked = ref(props.maskable ? props.hidden : false)

/*
 * Tailwind resolves class names at build time from source text, so the column
 * count cannot be interpolated - `grid-cols-${n}` produces a class that was
 * never generated and silently renders one column. The map keeps every variant
 * spelled out where the compiler can see it.
 */
const COLUMNS: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
}

const grid = computed(() => COLUMNS[props.columns] ?? COLUMNS[4])

function toggle() {
    masked.value = !masked.value
    emit('toggle', masked.value)
}

function display(value: string | number): string {
    return typeof value === 'number' ? new Intl.NumberFormat().format(value) : value
}
</script>

<template>
    <!--
        `shrink-0` is load-bearing, not decoration.

        `overflow-hidden` is needed to keep the cells inside the rounded corners,
        but it also changes this element's automatic minimum size from `auto` to
        zero - that is the flexbox rule, not a quirk. Dropped into a flex column
        the strip was therefore squashed to its two border pixels and rendered as
        a hairline. It is fixed-height content and must never be the thing that
        gives way.

        The container also carries the divider colour; the cells sit on top of it
        in the card colour, and the 1px gaps between them are what shows through.
    -->
    <div class="bg-border relative shrink-0 overflow-hidden rounded-xl border">
        <!--
            One control, floated over the corner rather than given a header row
            of its own - a header would push the strip taller for a single
            button and break the flush, four-across look the whole component is
            for.
        -->
        <button
            v-if="maskable"
            type="button"
            class="text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors"
            :aria-pressed="masked"
            :aria-label="masked ? 'Show values' : 'Hide values'"
            :title="masked ? 'Show values' : 'Hide values'"
            @click="toggle"
        >
            <!--
                Drawn inline rather than imported. This package carries no icon
                dependency on purpose (§4): it is the rendering layer, and
                pulling a whole icon set in for two glyphs would make every
                consumer install it.
            -->
            <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <template v-if="masked">
                    <path d="M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" />
                    <path d="M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" />
                    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                    <path d="m3 3 18 18" />
                </template>
                <template v-else>
                    <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" />
                    <circle cx="12" cy="12" r="3" />
                </template>
            </svg>
        </button>

        <div class="grid gap-px" :class="grid">
            <div
                v-for="segment in segments"
                :key="segment.key"
                class="bg-card flex flex-col gap-2 p-4"
            >
                <p class="text-muted-foreground text-[11px] font-semibold tracking-wider uppercase">
                    {{ segment.label }}
                </p>

                <!--
                    The skeleton, the mask and the value all occupy the same
                    height, so a strip does not reflow as data lands or as it is
                    revealed - a row that jumps under the pointer is how you
                    click the wrong thing.
                -->
                <div class="flex h-8 items-center">
                    <PkSkeleton v-if="loading" variant="number" />

                    <!--
                        `role="img"` IS LOAD-BEARING, not decoration. A plain
                        `<span>` has no accessible-name-supporting role, so
                        `aria-label` on it is dropped by assistive tech - the
                        five dots would announce as nothing at all rather than
                        "Active hidden". `role="img"` is what makes this one
                        thing with a text alternative, the same contract an
                        `<img alt="...">` has.
                    -->
                    <span
                        v-else-if="masked"
                        class="flex items-center gap-1.5"
                        role="img"
                        :aria-label="`${segment.label} hidden`"
                    >
                        <span
                            v-for="dot in 5"
                            :key="dot"
                            class="bg-muted-foreground/70 size-1.5 rounded-full"
                        ></span>
                    </span>

                    <span v-else class="truncate text-2xl font-semibold tabular-nums">
                        {{ display(segment.value) }}
                    </span>
                </div>

                <p v-if="segment.caption" class="text-muted-foreground truncate text-xs">
                    {{ segment.caption }}
                </p>
            </div>
        </div>
    </div>
</template>
