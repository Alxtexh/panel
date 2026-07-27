<script setup lang="ts">
/**
 * A pie or doughnut chart with a legend.
 *
 * TWO ARC CASES, and the second one is the trap: an arc whose start and end
 * points are identical draws NOTHING. A single-category result — every client
 * on one plan, which is the normal state of a new tenant — is exactly 100%, so
 * the naive path renders an empty card on the most ordinary data there is. A
 * full circle is drawn as a circle, not as an arc.
 *
 * SLICE COLOURS COME FROM THEME TOKENS, so a tenant brand or a user's chosen
 * primary applies without recompiling. Beyond the palette length, slices reuse
 * colours at reduced opacity rather than repeating them outright — a repeated
 * colour makes two legend rows indistinguishable.
 */
import { computed } from 'vue'

interface Slice {
    label: string
    value: number
}

const props = withDefaults(
    defineProps<{
        data: Slice[]
        height?: number
        /** A doughnut leaves room for the total in the middle. */
        type?: 'pie' | 'doughnut'
        format?: (value: number) => string
    }>(),
    { height: 220, type: 'doughnut' },
)

const PALETTE = [
    'var(--primary)',
    'var(--chart-2)',
    'var(--chart-4)',
    'var(--chart-3)',
    'var(--chart-5)',
    'var(--chart-1)',
]

const total = computed(() => props.data.reduce((sum, d) => sum + d.value, 0))

const size = computed(() => props.height)
const radius = computed(() => size.value / 2 - 4)
const inner = computed(() => (props.type === 'doughnut' ? radius.value * 0.62 : 0))

function colour(index: number): string {
    return PALETTE[index % PALETTE.length]
}

/** Later cycles fade, so a reused hue is still distinguishable. */
function opacity(index: number): number {
    return 1 - Math.min(0.55, Math.floor(index / PALETTE.length) * 0.28)
}

const slices = computed(() => {
    if (total.value <= 0) return []

    const c = size.value / 2
    let angle = -Math.PI / 2 // Start at twelve o'clock, as every pie chart does.

    return props.data.map((slice, i) => {
        const share = slice.value / total.value
        const sweep = share * Math.PI * 2
        const start = angle
        const end = angle + sweep

        angle = end

        return {
            ...slice,
            share,
            colour: colour(i),
            opacity: opacity(i),
            /*
             * The 100% case. An arc from a point back to itself is degenerate
             * and SVG draws nothing, so it is expressed as two half circles.
             */
            path:
                share >= 0.9999
                    ? fullRing(c)
                    : wedge(c, start, end, radius.value, inner.value),
        }
    })
})

function point(c: number, angle: number, r: number): string {
    return `${(c + Math.cos(angle) * r).toFixed(2)},${(c + Math.sin(angle) * r).toFixed(2)}`
}

function wedge(c: number, start: number, end: number, outer: number, hole: number): string {
    const large = end - start > Math.PI ? 1 : 0

    if (hole <= 0) {
        return `M${c},${c} L${point(c, start, outer)} A${outer},${outer} 0 ${large} 1 ${point(c, end, outer)} Z`
    }

    return [
        `M${point(c, start, outer)}`,
        `A${outer},${outer} 0 ${large} 1 ${point(c, end, outer)}`,
        `L${point(c, end, hole)}`,
        `A${hole},${hole} 0 ${large} 0 ${point(c, start, hole)}`,
        'Z',
    ].join(' ')
}

/** Two half-arcs, because one full arc collapses to a point. */
function fullRing(c: number): string {
    const o = radius.value
    const h = inner.value
    const ring = [
        `M${c - o},${c}`,
        `A${o},${o} 0 1 1 ${c + o},${c}`,
        `A${o},${o} 0 1 1 ${c - o},${c}`,
        'Z',
    ]

    if (h <= 0) return ring.join(' ')

    return [
        ...ring,
        `M${c - h},${c}`,
        `A${h},${h} 0 1 0 ${c + h},${c}`,
        `A${h},${h} 0 1 0 ${c - h},${c}`,
        'Z',
    ].join(' ')
}

const format = (v: number) => (props.format ? props.format(v) : new Intl.NumberFormat().format(v))

const percent = (share: number) => `${(share * 100).toFixed(share < 0.01 ? 2 : 0)}%`
</script>

<template>
    <div
        v-if="total <= 0"
        class="text-muted-foreground flex items-center justify-center text-sm"
        :style="{ height: `${height}px` }"
    >
        No data
    </div>

    <div v-else class="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <svg
            :width="size"
            :height="size"
            :viewBox="`0 0 ${size} ${size}`"
            class="shrink-0"
            role="img"
            :aria-label="`Total ${format(total)}`"
        >
            <path
                v-for="(slice, i) in slices"
                :key="i"
                :d="slice.path"
                :fill="slice.colour"
                :fill-opacity="slice.opacity"
                fill-rule="evenodd"
                stroke="var(--card)"
                stroke-width="2"
                class="transition-opacity hover:opacity-80"
            >
                <title>{{ slice.label }}: {{ format(slice.value) }} ({{ percent(slice.share) }})</title>
            </path>

            <template v-if="type === 'doughnut'">
                <text
                    :x="size / 2"
                    :y="size / 2 - 2"
                    text-anchor="middle"
                    class="fill-foreground text-base font-semibold tabular-nums"
                >
                    {{ format(total) }}
                </text>
                <text
                    :x="size / 2"
                    :y="size / 2 + 14"
                    text-anchor="middle"
                    class="fill-muted-foreground text-[10px]"
                >
                    Total
                </text>
            </template>
        </svg>

        <ul class="flex min-w-0 flex-1 flex-col gap-1.5">
            <li v-for="(slice, i) in slices" :key="i" class="flex items-center gap-2 text-xs">
                <span
                    class="size-2.5 shrink-0 rounded-sm"
                    :style="{ background: slice.colour, opacity: slice.opacity }"
                />
                <span class="min-w-0 flex-1 truncate capitalize">{{ slice.label }}</span>
                <span class="tabular-nums font-medium">{{ format(slice.value) }}</span>
                <span class="text-muted-foreground w-9 text-right tabular-nums">{{ percent(slice.share) }}</span>
            </li>
        </ul>
    </div>
</template>
