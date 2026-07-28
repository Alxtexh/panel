<script setup lang="ts">
/**
 * A polar area chart: equal angles, radius carries the value.
 *
 * HOW IT DIFFERS FROM A PIE, and why that matters when choosing one: a pie
 * varies the ANGLE and keeps the radius fixed, so its slices always sum to a
 * whole. A polar area keeps the angle fixed and varies the RADIUS, so the
 * categories need not be parts of anything - it compares magnitudes that happen
 * to share a unit, which is the wrong job for a pie.
 *
 * THE RADIUS IS SCALED BY THE SQUARE ROOT of the value. Area grows with the
 * square of the radius, so mapping the value straight to the radius makes a
 * segment worth twice another look FOUR times bigger. That is the single most
 * common way this chart type is drawn wrong, and it exaggerates every
 * difference on the chart.
 */
import { computed } from 'vue'
import type { ChartPoint } from './types'

const props = withDefaults(
    defineProps<{
        data: ChartPoint[]
        height?: number
        format?: (value: number) => string
        showLegend?: boolean
    }>(),
    { height: 240, showLegend: true },
)

const PALETTE = [
    'var(--primary)',
    'var(--chart-2)',
    'var(--chart-4)',
    'var(--chart-3)',
    'var(--chart-5)',
    'var(--chart-1)',
]

const size = computed(() => props.height)
const centre = computed(() => size.value / 2)
const radius = computed(() => size.value / 2 - 6)

const max = computed(() => Math.max(...props.data.map((d) => Math.max(0, d.value)), 0))

const segments = computed(() => {
    const n = props.data.length

    if (n === 0 || max.value <= 0) {
        return []
    }

    const step = (Math.PI * 2) / n

    return props.data.map((d, i) => {
        // sqrt, so AREA is proportional to value rather than radius being.
        const fraction = Math.sqrt(Math.max(0, d.value) / max.value)
        const r = radius.value * fraction
        const start = i * step - Math.PI / 2
        const end = start + step

        return {
            ...d,
            color: PALETTE[i % PALETTE.length],
            share: max.value === 0 ? 0 : d.value / max.value,
            path: sector(centre.value, start, end, r),
        }
    })
})

/**
 * One wedge from the centre.
 *
 * A single-category chart is a full circle, and an arc whose start and end
 * coincide draws NOTHING - the same degenerate case the pie chart handles.
 */
function sector(c: number, start: number, end: number, r: number): string {
    if (r <= 0) {
        return ''
    }

    if (end - start >= Math.PI * 2 - 1e-6) {
        return `M${c - r},${c} A${r},${r} 0 1 1 ${c + r},${c} A${r},${r} 0 1 1 ${c - r},${c} Z`
    }

    const large = end - start > Math.PI ? 1 : 0
    const x1 = c + Math.cos(start) * r
    const y1 = c + Math.sin(start) * r
    const x2 = c + Math.cos(end) * r
    const y2 = c + Math.sin(end) * r

    return `M${c},${c} L${x1.toFixed(2)},${y1.toFixed(2)} A${r.toFixed(2)},${r.toFixed(2)} 0 ${large} 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z`
}

/** Reference rings, so a radius can actually be read off the chart. */
const rings = computed(() => [0.5, 0.75, 1].map((f) => radius.value * f))

const format = (v: number) => (props.format ? props.format(v) : new Intl.NumberFormat().format(v))
</script>

<template>
    <div
        v-if="segments.length === 0"
        class="text-muted-foreground flex items-center justify-center text-sm"
        :style="{ height: `${height}px` }"
    >
        No data
    </div>

    <div v-else class="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
        <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="shrink-0">
            <circle
                v-for="r in rings"
                :key="r"
                :cx="centre"
                :cy="centre"
                :r="r"
                fill="none"
                stroke="var(--border)"
                stroke-width="1"
            />

            <path
                v-for="(s, i) in segments"
                :key="i"
                :d="s.path"
                :fill="s.color"
                fill-opacity="0.75"
                stroke="var(--card)"
                stroke-width="1.5"
                class="transition-opacity hover:opacity-80"
            >
                <title>{{ s.label }}: {{ format(s.value) }}</title>
            </path>
        </svg>

        <ul v-if="showLegend" class="flex min-w-0 flex-col gap-1.5">
            <li v-for="(s, i) in segments" :key="i" class="flex items-center gap-2 text-xs">
                <span class="size-2.5 shrink-0 rounded-sm" :style="{ background: s.color }" />
                <span class="min-w-0 flex-1 truncate capitalize">{{ s.label }}</span>
                <span class="font-medium tabular-nums">{{ format(s.value) }}</span>
            </li>
        </ul>
    </div>
</template>
