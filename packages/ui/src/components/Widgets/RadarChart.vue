<script setup lang="ts">
/**
 * A radar (spider) chart: several series compared across the same few axes.
 *
 * WHAT IT IS ACTUALLY FOR, and its one real trap: a radar chart implies the
 * axes are COMPARABLE, because they share a centre and a scale. Plotting bytes
 * against a count on one radar draws a shape that means nothing. So the scale
 * here is shared deliberately, and the caller is expected to pass values in the
 * same unit — router health scores, plan mix percentages, and so on.
 *
 * THE GRID IS POLYGONAL, NOT CIRCULAR. Concentric circles look tidier and lie
 * slightly: a value read against a circle appears further from the centre than
 * the same value read against the polygon the data is actually plotted on.
 *
 * FEWER THAN THREE AXES CANNOT MAKE A POLYGON — two axes collapse to a line and
 * one to a point — so it degrades to a message rather than drawing something
 * meaningless.
 */
import { computed } from 'vue'
import type { ChartSeries } from './types'

const props = withDefaults(
    defineProps<{
        series: ChartSeries[]
        height?: number
        format?: (value: number) => string
        showLegend?: boolean
    }>(),
    { height: 240, showLegend: true },
)

const PALETTE = ['var(--primary)', 'var(--chart-2)', 'var(--chart-4)', 'var(--chart-3)', 'var(--chart-5)']

const resolved = computed(() =>
    props.series.map((s, i) => ({ ...s, color: s.color ?? PALETTE[i % PALETTE.length] })),
)

const axes = computed(() => resolved.value[0]?.points.map((p) => p.label) ?? [])
const n = computed(() => axes.value.length)

const size = computed(() => props.height)
const centre = computed(() => size.value / 2)
/** Room for the axis labels around the outside. */
const radius = computed(() => size.value / 2 - 34)

const ceiling = computed(() => {
    const max = Math.max(...resolved.value.flatMap((s) => s.points.map((p) => p.value)), 0)

    if (max <= 0) return 1

    const magnitude = 10 ** Math.floor(Math.log10(max))
    const step = [1, 2, 2.5, 5, 10].find((s) => max <= s * magnitude) ?? 10

    return step * magnitude
})

/** Twelve o'clock is the first axis, as every radar chart draws it. */
function angleAt(i: number): number {
    return (i / n.value) * Math.PI * 2 - Math.PI / 2
}

function pointAt(i: number, fraction: number): { x: number; y: number } {
    const a = angleAt(i)

    return {
        x: centre.value + Math.cos(a) * radius.value * fraction,
        y: centre.value + Math.sin(a) * radius.value * fraction,
    }
}

function polygon(fraction: number): string {
    return Array.from({ length: n.value }, (_, i) => {
        const p = pointAt(i, fraction)

        return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
    }).join(' ')
}

/** Four rings, plus the outer edge. */
const rings = computed(() => [0.25, 0.5, 0.75, 1].map((f) => ({ f, points: polygon(f) })))

/**
 * The drawn shape per series.
 *
 * `outline` and `dots` are NEW keys rather than an overwrite of `points`.
 * Spreading the series and replacing `points` with a coordinate string destroyed
 * the values the tooltip needs, and the tooltip then read them off a string —
 * which yields `undefined` and renders "0" for every vertex without erroring.
 */
const shapes = computed(() =>
    resolved.value.map((s) => {
        const fractions = s.points.map((p) => Math.max(0, p.value) / ceiling.value)

        return {
            name: s.name,
            color: s.color!,
            values: s.points,
            outline: fractions
                .map((f, i) => {
                    const at = pointAt(i, f)

                    return `${at.x.toFixed(2)},${at.y.toFixed(2)}`
                })
                .join(' '),
            dots: fractions.map((f, i) => pointAt(i, f)),
        }
    }),
)

/** Labels sit just outside the outer ring, anchored so they never overlap it. */
const labels = computed(() =>
    axes.value.map((label, i) => {
        const a = angleAt(i)
        const x = centre.value + Math.cos(a) * (radius.value + 14)
        const y = centre.value + Math.sin(a) * (radius.value + 14)
        const cos = Math.cos(a)

        return {
            label,
            x,
            y: y + 3,
            anchor: Math.abs(cos) < 0.2 ? 'middle' : cos > 0 ? 'start' : 'end',
        }
    }),
)

const format = (v: number) => (props.format ? props.format(v) : new Intl.NumberFormat().format(v))
</script>

<template>
    <div
        v-if="n < 3"
        class="text-muted-foreground flex items-center justify-center text-sm"
        :style="{ height: `${height}px` }"
    >
        A radar needs at least three axes
    </div>

    <div v-else class="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
        <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="shrink-0">
            <!-- Rings and spokes. -->
            <polygon
                v-for="ring in rings"
                :key="ring.f"
                :points="ring.points"
                fill="none"
                stroke="var(--border)"
                stroke-width="1"
            />
            <line
                v-for="(_, i) in axes"
                :key="`spoke-${i}`"
                :x1="centre"
                :y1="centre"
                :x2="pointAt(i, 1).x"
                :y2="pointAt(i, 1).y"
                stroke="var(--border)"
                stroke-width="1"
            />

            <g v-for="(s, i) in shapes" :key="`s-${i}`">
                <polygon :points="s.outline" :fill="s.color" fill-opacity="0.16" :stroke="s.color" stroke-width="2" />
                <circle
                    v-for="(d, j) in s.dots"
                    :key="j"
                    :cx="d.x"
                    :cy="d.y"
                    r="3"
                    :fill="s.color"
                    stroke="var(--card)"
                    stroke-width="1.5"
                >
                    <title>{{ s.name }} — {{ axes[j] }}: {{ format(s.values[j]?.value ?? 0) }}</title>
                </circle>
            </g>

            <text
                v-for="(l, i) in labels"
                :key="`l-${i}`"
                :x="l.x"
                :y="l.y"
                :text-anchor="l.anchor"
                class="fill-muted-foreground text-[10px] capitalize"
            >
                {{ l.label }}
            </text>
        </svg>

        <ul v-if="showLegend" class="flex min-w-0 flex-col gap-1.5">
            <li v-for="(s, i) in resolved" :key="i" class="flex items-center gap-2 text-xs">
                <span class="size-2.5 shrink-0 rounded-sm" :style="{ background: s.color }" />
                <span class="truncate">{{ s.name }}</span>
            </li>
        </ul>
    </div>
</template>
