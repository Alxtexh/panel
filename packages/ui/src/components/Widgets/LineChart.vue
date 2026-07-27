<script setup lang="ts">
/**
 * A smooth multi-series line or area chart with a shared crosshair tooltip.
 *
 * NO CHARTING LIBRARY, for the reason BarChart gives: deferring a 200 KB
 * dependency is strictly worse than not having one.
 *
 * THE CURVE IS A MONOTONE CUBIC HERMITE SPLINE, not a plain Bézier smoothing.
 * The distinction matters for correctness rather than looks: an ordinary
 * smoothing spline OVERSHOOTS between points, so a series that dips to 0 gets
 * drawn dipping BELOW zero, and one that plateaus grows bumps that are not in
 * the data. A monotone spline is constrained to stay within the values it
 * connects, so the curve never invents a reading the series does not contain.
 *
 * COORDINATES ARE MEASURED, NOT SCALED. The obvious shortcut is a fixed
 * `viewBox` plus `preserveAspectRatio="none"`, which stretches the drawing to
 * the card — and stretches the STROKES and TEXT with it, so the line is thicker
 * horizontally than vertically and the labels come out condensed. A
 * ResizeObserver gives real pixel widths.
 *
 * THE TOOLTIP IS SHARED ACROSS SERIES. Hovering shows every dataset at that
 * moment, because the question a multi-series chart is asked is almost always
 * comparative — per-series hit testing answers "what was this line" when the
 * user meant "what was happening here".
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import type { ChartPoint as Point, ChartSeries } from './types'

const props = withDefaults(
    defineProps<{
        /** Single series, the common case. */
        data?: Point[]
        /** Several series. Takes precedence over `data`. */
        series?: ChartSeries[]
        height?: number
        type?: 'line' | 'area'
        format?: (value: number) => string
        /** Hide the y axis for a cleaner card, as the reference dashboards do. */
        showAxis?: boolean
        showLegend?: boolean
    }>(),
    { height: 220, type: 'area', showAxis: true, showLegend: false },
)

/**
 * TWO SCALES WHEN A SERIES ASKS FOR ONE.
 *
 * Sessions in the thousands plotted beside a percentage on a shared scale
 * flattens the percentage onto the baseline — it is drawn, it is just
 * indistinguishable from zero. A second axis is the only honest way to show
 * quantities with different units on one chart, and the axis labels are what
 * stop the reader comparing two lines that are not comparable.
 */
const hasRightAxis = computed(() => resolved.value.some((s) => s.axis === 'right'))

const host = ref<HTMLElement | null>(null)
const width = ref(560)
const hover = ref<number | null>(null)

let observer: ResizeObserver | null = null

onMounted(() => {
    observer = new ResizeObserver((entries) => {
        // Never zero: a card that mounts hidden reports 0 and every coordinate
        // becomes NaN, which SVG renders as nothing at all with no error.
        width.value = Math.max(160, entries[0].contentRect.width)
    })

    if (host.value) observer.observe(host.value)
})

onBeforeUnmount(() => observer?.disconnect())

/** Theme tokens, so a tenant brand or the user's primary colour applies. */
const PALETTE = ['var(--primary)', 'var(--chart-2)', 'var(--chart-4)', 'var(--chart-3)', 'var(--chart-5)']

/** A stable id per instance; two charts on one page must not share a gradient. */
const uid = Math.random().toString(36).slice(2, 9)

const resolved = computed<ChartSeries[]>(() => {
    const list = props.series?.length ? props.series : props.data?.length ? [{ name: '', points: props.data }] : []

    return list.map((s, i) => ({ ...s, color: s.color ?? PALETTE[i % PALETTE.length] }))
})

const labels = computed(() => resolved.value[0]?.points.map((p) => p.label) ?? [])
const count = computed(() => labels.value.length)

const pad = computed(() => ({
    top: 12,
    right: props.showAxis && hasRightAxis.value ? 44 : 12,
    bottom: 22,
    // The axis gutter disappears entirely when the axis is hidden, rather than
    // sitting there as dead space.
    left: props.showAxis ? 44 : 8,
}))

const format = (v: number) => (props.format ? props.format(v) : compact(v))

/** 1200 → "1.2k". Full precision belongs in the tooltip, not the axis. */
function compact(v: number): string {
    if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`
    if (Math.abs(v) >= 1_000) return `${(v / 1_000).toFixed(1).replace(/\.0$/, '')}k`

    return new Intl.NumberFormat().format(Math.round(v * 100) / 100)
}

/**
 * A round ceiling for the Y axis.
 *
 * Scaling exactly to the maximum pins the tallest point to the top edge, where
 * it reads as clipped, and produces gridlines at 8,333 / 16,667 that nobody can
 * compare at a glance.
 */
function ceilingOf(values: number[]): number {
    const max = Math.max(...values, 0)

    if (max <= 0) return 1

    const magnitude = 10 ** Math.floor(Math.log10(max))
    const step = [1, 2, 2.5, 5, 10].find((s) => max <= s * magnitude) ?? 10

    return step * magnitude
}

const ceiling = computed(() =>
    ceilingOf(resolved.value.filter((s) => s.axis !== 'right').flatMap((s) => s.points.map((p) => p.value))),
)

const rightCeiling = computed(() =>
    ceilingOf(resolved.value.filter((s) => s.axis === 'right').flatMap((s) => s.points.map((p) => p.value))),
)

const plot = computed(() => ({
    w: Math.max(1, width.value - pad.value.left - pad.value.right),
    h: Math.max(1, props.height - pad.value.top - pad.value.bottom),
}))

function xFor(i: number): number {
    return pad.value.left + (count.value <= 1 ? 0 : (i / (count.value - 1)) * plot.value.w)
}

function yFor(value: number, axis: 'left' | 'right' = 'left'): number {
    const top = axis === 'right' ? rightCeiling.value : ceiling.value

    return pad.value.top + plot.value.h - (value / top) * plot.value.h
}

const geometry = computed(() =>
    resolved.value.map((s) => {
        const pts = s.points.map((p, i) => ({ ...p, x: xFor(i), y: yFor(p.value, s.axis ?? 'left') }))
        // Stepped is a genuinely different reading, not a style: it says the
        // value HELD until the next reading rather than travelled towards it,
        // which is what a status or a tier actually does.
        const line = s.stepped ? steppedPath(pts) : monotonePath(pts)

        return { ...s, pts, line, area: areaFrom(line, pts) }
    }),
)

function steppedPath(pts: { x: number; y: number }[]): string {
    if (pts.length === 0) return ''

    let d = `M${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`

    for (let i = 1; i < pts.length; i++) {
        d += ` L${pts[i].x.toFixed(2)},${pts[i - 1].y.toFixed(2)} L${pts[i].x.toFixed(2)},${pts[i].y.toFixed(2)}`
    }

    return d
}

/**
 * Monotone cubic Hermite interpolation (the `monotoneX` shape).
 *
 * Tangents are damped wherever the data changes direction, which is what keeps
 * the curve inside the values it joins. Without that damping the classic
 * Catmull-Rom smoothing draws a visible undershoot below zero every time a
 * series touches its floor — on a count of sessions that reads as a negative
 * number of sessions.
 */
function monotonePath(pts: { x: number; y: number }[]): string {
    const n = pts.length

    if (n === 0) return ''
    if (n === 1) return `M${pts[0].x},${pts[0].y}`

    const dx: number[] = []
    const slope: number[] = []

    for (let i = 0; i < n - 1; i++) {
        dx[i] = pts[i + 1].x - pts[i].x
        slope[i] = dx[i] === 0 ? 0 : (pts[i + 1].y - pts[i].y) / dx[i]
    }

    const tangent: number[] = [slope[0]]

    for (let i = 1; i < n - 1; i++) {
        if (slope[i - 1] * slope[i] <= 0) {
            // A local extremum: a zero tangent is what pins the curve to the
            // data point instead of letting it sail past.
            tangent[i] = 0
        } else {
            const w1 = 2 * dx[i] + dx[i - 1]
            const w2 = dx[i] + 2 * dx[i - 1]
            tangent[i] = (w1 + w2) / (w1 / slope[i - 1] + w2 / slope[i])
        }
    }

    tangent[n - 1] = slope[n - 2]

    let d = `M${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`

    for (let i = 0; i < n - 1; i++) {
        const third = dx[i] / 3

        d +=
            ` C${(pts[i].x + third).toFixed(2)},${(pts[i].y + tangent[i] * third).toFixed(2)}` +
            ` ${(pts[i + 1].x - third).toFixed(2)},${(pts[i + 1].y - tangent[i + 1] * third).toFixed(2)}` +
            ` ${pts[i + 1].x.toFixed(2)},${pts[i + 1].y.toFixed(2)}`
    }

    return d
}

function areaFrom(line: string, pts: { x: number; y: number }[]): string {
    if (pts.length === 0) return ''

    const base = pad.value.top + plot.value.h

    return `${line} L${pts[pts.length - 1].x.toFixed(2)},${base} L${pts[0].x.toFixed(2)},${base} Z`
}

/** Four gridlines, drawn from the ceiling down. */
const gridlines = computed(() =>
    [0, 0.25, 0.5, 0.75, 1].map((fraction) => ({
        y: pad.value.top + plot.value.h * fraction,
        value: ceiling.value * (1 - fraction),
    })),
)

const rightGridlines = computed(() =>
    [0, 0.25, 0.5, 0.75, 1].map((fraction) => ({
        y: pad.value.top + plot.value.h * fraction,
        value: rightCeiling.value * (1 - fraction),
    })),
)

/** Keep roughly eight x labels whatever the period length. */
const labelStep = computed(() => Math.max(1, Math.ceil(count.value / 8)))

function showLabel(index: number): boolean {
    return index === count.value - 1 || index % labelStep.value === 0
}

/** Nearest index to the cursor, so the tooltip never feels like it lags. */
function track(event: MouseEvent) {
    const rect = (event.currentTarget as SVGElement).getBoundingClientRect()
    const x = event.clientX - rect.left - pad.value.left
    const step = count.value <= 1 ? 1 : plot.value.w / (count.value - 1)

    hover.value = Math.min(count.value - 1, Math.max(0, Math.round(x / step)))
}

const active = computed(() => {
    if (hover.value === null || count.value === 0) return null

    const i = hover.value

    return {
        i,
        x: xFor(i),
        label: labels.value[i],
        rows: geometry.value.map((s) => ({
            name: s.name,
            color: s.color!,
            value: s.points[i]?.value ?? 0,
            y: s.pts[i]?.y ?? 0,
        })),
    }
})

/** Flip the tooltip before it runs off the right edge of the card. */
const tooltipStyle = computed(() => {
    if (!active.value) return {}

    const flip = active.value.x > width.value * 0.6

    return {
        left: `${active.value.x}px`,
        top: '8px',
        transform: flip ? 'translateX(-100%) translateX(-12px)' : 'translateX(12px)',
    }
})
</script>

<template>
    <div ref="host" class="relative w-full">
        <div
            v-if="count === 0"
            class="text-muted-foreground flex items-center justify-center text-sm"
            :style="{ height: `${height}px` }"
        >
            No data
        </div>

        <template v-else>
            <svg
                :width="width"
                :height="height"
                class="overflow-visible"
                @mousemove="track"
                @mouseleave="hover = null"
            >
                <defs>
                    <linearGradient
                        v-for="(s, i) in geometry"
                        :id="`pk-fill-${uid}-${i}`"
                        :key="i"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop offset="0%" :stop-color="s.color" stop-opacity="0.25" />
                        <stop offset="100%" :stop-color="s.color" stop-opacity="0.01" />
                    </linearGradient>
                </defs>

                <!-- Horizontal gridlines and Y labels. -->
                <g v-if="showAxis">
                    <line
                        v-for="line in gridlines"
                        :key="line.y"
                        :x1="pad.left"
                        :x2="width - pad.right"
                        :y1="line.y"
                        :y2="line.y"
                        stroke="var(--border)"
                        stroke-width="1"
                    />
                    <text
                        v-for="line in gridlines"
                        :key="`t-${line.y}`"
                        :x="pad.left - 8"
                        :y="line.y + 3"
                        text-anchor="end"
                        class="fill-muted-foreground text-[10px] tabular-nums"
                    >
                        {{ compact(line.value) }}
                    </text>

                    <!-- The second scale, labelled on the opposite edge so it
                         is obvious which line it belongs to.

                         v-if on a WRAPPER, not on the same element as v-for:
                         Vue 3 evaluates v-if first, so the two together read as
                         if the condition could see the loop variable when it
                         cannot. -->
                    <template v-if="hasRightAxis">
                        <text
                            v-for="line in rightGridlines"
                            :key="`rt-${line.y}`"
                            :x="width - pad.right + 8"
                            :y="line.y + 3"
                            text-anchor="start"
                            class="fill-muted-foreground text-[10px] tabular-nums"
                        >
                            {{ compact(line.value) }}
                        </text>
                    </template>
                </g>

                <!-- Dotted verticals at the labelled positions, as the
                     reference dashboards use instead of a heavy grid. -->
                <line
                    v-for="(l, i) in labels"
                    v-show="showLabel(i)"
                    :key="`v-${i}`"
                    :x1="xFor(i)"
                    :x2="xFor(i)"
                    :y1="pad.top"
                    :y2="pad.top + plot.h"
                    stroke="var(--border)"
                    stroke-width="1"
                    stroke-dasharray="2 4"
                    opacity="0.7"
                />

                <g v-for="(s, i) in geometry" :key="`s-${i}`">
                    <path
                        v-if="s.filled ?? type === 'area'"
                        :d="s.area"
                        :fill="`url(#pk-fill-${uid}-${i})`"
                    />
                    <path
                        :d="s.line"
                        fill="none"
                        :stroke="s.color"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        :stroke-dasharray="s.dashed ? '6 4' : undefined"
                    />
                    <!-- A lone point draws no line, so it gets a dot or the
                         chart looks empty. -->
                    <circle v-if="s.pts.length === 1" :cx="s.pts[0].x" :cy="s.pts[0].y" r="3" :fill="s.color" />
                </g>

                <!-- Crosshair: one vertical, one dot per series. -->
                <g v-if="active">
                    <line
                        :x1="active.x"
                        :x2="active.x"
                        :y1="pad.top"
                        :y2="pad.top + plot.h"
                        stroke="var(--muted-foreground)"
                        stroke-width="1"
                        stroke-dasharray="4 3"
                    />
                    <circle
                        v-for="(row, i) in active.rows"
                        :key="`d-${i}`"
                        :cx="active.x"
                        :cy="row.y"
                        r="4"
                        :fill="row.color"
                        stroke="var(--card)"
                        stroke-width="2"
                    />
                </g>

                <!-- X labels. -->
                <text
                    v-for="(l, i) in labels"
                    v-show="showLabel(i)"
                    :key="`x-${i}`"
                    :x="xFor(i)"
                    :y="height - 6"
                    text-anchor="middle"
                    class="fill-muted-foreground text-[10px]"
                >
                    {{ l }}
                </text>
            </svg>

            <div
                v-if="active"
                class="bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg"
                :style="tooltipStyle"
            >
                <p class="text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap">{{ active.label }}</p>
                <div v-for="(row, i) in active.rows" :key="i" class="flex items-center gap-2 py-0.5">
                    <span class="size-2 shrink-0 rounded-full" :style="{ background: row.color }" />
                    <span class="text-muted-foreground min-w-0 flex-1 truncate text-[11px]">
                        {{ row.name || 'Value' }}
                    </span>
                    <span class="text-xs font-semibold tabular-nums">{{ format(row.value) }}</span>
                </div>
            </div>

            <div v-if="showLegend && resolved.length > 1" class="mt-2 flex flex-wrap items-center gap-4">
                <span v-for="(s, i) in geometry" :key="i" class="flex items-center gap-1.5 text-xs">
                    <span class="size-2 rounded-full" :style="{ background: s.color }" />
                    <span class="text-muted-foreground">{{ s.name }}</span>
                </span>
            </div>
        </template>
    </div>
</template>
