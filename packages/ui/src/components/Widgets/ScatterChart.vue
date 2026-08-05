<script setup lang="ts">
/**
 * Points positioned by two measured values. Bubbles when they carry a size.
 *
 * ONE COMPONENT, TWO FILAMENT CHART TYPES, and that is not a shortcut. A
 * bubble chart is a scatter with a size channel - the same axes, the same
 * marks, the same hit testing - so shipping `BubbleChart.vue` beside this one
 * would be two names for one drawing. `PieChart` already sets the precedent
 * here with `type="doughnut"`.
 *
 * WHY IT IS NOT A LINE CHART WITH NUMBERS. `LineChart` takes `ChartPoint`s,
 * whose x position is the label's turn in the list - so ten points spaced a day
 * apart and ten spaced a year apart draw identically. Here both axes are
 * measured, so the gaps between marks carry information, which is the only
 * reason to reach for this chart at all.
 *
 * COORDINATES ARE MEASURED, NOT SCALED, for the reason LineChart documents at
 * length: a fixed `viewBox` with `preserveAspectRatio="none"` stretches the
 * strokes and the text along with the drawing.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ChartTooltip from './ChartTooltip.vue'
import type { ChartXYPoint, ChartXYSeries } from './types'

const props = withDefaults(
    defineProps<{
        /** Single series, the common case. */
        data?: ChartXYPoint[]
        /** Several series. Takes precedence over `data`. */
        series?: ChartXYSeries[]
        height?: number
        xLabel?: string
        yLabel?: string
        /** Formatters own their own number format; the chart does not guess. */
        formatX?: (value: number) => string
        formatY?: (value: number) => string
        showLegend?: boolean
        /** Largest mark radius in pixels, for the bubble case. */
        maxRadius?: number
    }>(),
    { height: 260, showLegend: false, maxRadius: 22 },
)

/** Theme tokens, so a tenant brand or the user's primary colour applies. */
const PALETTE = [
    'var(--primary)',
    'var(--chart-2)',
    'var(--chart-4)',
    'var(--chart-3)',
    'var(--chart-5)',
]

const host = ref<HTMLElement | null>(null)
const width = ref(560)
const hover = ref<{ s: number; p: number } | null>(null)

let observer: ResizeObserver | null = null

onMounted(() => {
    observer = new ResizeObserver((entries) => {
        const measured = entries[0]?.contentRect.width ?? 0

        if (measured > 0) {
            width.value = measured
        }
    })

    if (host.value) {
        observer.observe(host.value)
    }
})

onBeforeUnmount(() => observer?.disconnect())

const resolved = computed<ChartXYSeries[]>(() =>
    props.series?.length ? props.series : [{ name: '', points: props.data ?? [] }],
)

const colourOf = (index: number, series: ChartXYSeries) =>
    series.color ?? PALETTE[index % PALETTE.length]

/** Every point, flattened, because the scales are shared across series. */
const allPoints = computed(() => resolved.value.flatMap((s) => s.points))

const isBubble = computed(() => allPoints.value.some((p) => typeof p.r === 'number'))

const PAD = { top: 12, right: 16, bottom: 32, left: 48 }

const plotWidth = computed(() => Math.max(10, width.value - PAD.left - PAD.right))
const plotHeight = computed(() => Math.max(10, props.height - PAD.top - PAD.bottom))

/**
 * The extents, padded outward so marks never sit on the axis.
 *
 * A SINGLE POINT, OR A COLUMN OF IDENTICAL VALUES, would give a zero-width
 * range and divide by zero - every mark stacking at one coordinate or
 * vanishing into NaN. The `|| 1` is that case, not defensive noise.
 */
function extent(values: number[]): [number, number] {
    if (values.length === 0) {
        return [0, 1]
    }

    const min = Math.min(...values)
    const max = Math.max(...values)
    const span = max - min || Math.abs(max) || 1

    return [min - span * 0.08, max + span * 0.08]
}

const xExtent = computed(() => extent(allPoints.value.map((p) => p.x)))
const yExtent = computed(() => extent(allPoints.value.map((p) => p.y)))

const xAt = (value: number) => {
    const [lo, hi] = xExtent.value

    return PAD.left + ((value - lo) / (hi - lo)) * plotWidth.value
}

const yAt = (value: number) => {
    const [lo, hi] = yExtent.value

    // Inverted: SVG y grows downward, the reader expects up.
    return PAD.top + plotHeight.value - ((value - lo) / (hi - lo)) * plotHeight.value
}

/**
 * Radius scaled by AREA, not by value.
 *
 * Mapping the value straight onto the radius quadruples the ink for twice the
 * quantity, so a reader comparing two marks by eye reads a doubling as a
 * quadrupling. `sqrt` is what makes the drawing tell the truth.
 */
const maxR = computed(() => Math.max(...allPoints.value.map((p) => p.r ?? 0), 0))

function radiusOf(point: ChartXYPoint): number {
    if (!isBubble.value || !maxR.value) {
        return 4
    }

    const share = Math.max(0, point.r ?? 0) / maxR.value

    return 3 + Math.sqrt(share) * (props.maxRadius - 3)
}

/** Five ticks per axis - enough to read a scale, few enough to stay legible. */
function ticks([lo, hi]: [number, number]): number[] {
    return Array.from({ length: 5 }, (_, i) => lo + ((hi - lo) / 4) * i)
}

const xTicks = computed(() => ticks(xExtent.value))
const yTicks = computed(() => ticks(yExtent.value))

const fmtX = (value: number) => props.formatX?.(value) ?? String(Math.round(value * 100) / 100)
const fmtY = (value: number) => props.formatY?.(value) ?? String(Math.round(value * 100) / 100)

const hovered = computed(() => {
    if (!hover.value) {
        return null
    }

    const series = resolved.value[hover.value.s]
    const point = series?.points[hover.value.p]

    return point ? { series, point } : null
})
</script>

<template>
    <div ref="host" class="w-full">
        <svg
            :width="width"
            :height="height"
            :viewBox="`0 0 ${width} ${height}`"
            class="overflow-visible"
            role="img"
            :aria-label="isBubble ? 'Bubble chart' : 'Scatter chart'"
        >
            <!-- Gridlines first, so marks sit above them. -->
            <g class="text-border">
                <line
                    v-for="(tick, i) in yTicks"
                    :key="`gy-${i}`"
                    :x1="PAD.left"
                    :x2="PAD.left + plotWidth"
                    :y1="yAt(tick)"
                    :y2="yAt(tick)"
                    stroke="currentColor"
                    stroke-width="1"
                    :stroke-dasharray="i === 0 ? '0' : '3 3'"
                    opacity="0.5"
                />
            </g>

            <g class="fill-muted-foreground text-[10px]">
                <text
                    v-for="(tick, i) in yTicks"
                    :key="`ty-${i}`"
                    :x="PAD.left - 8"
                    :y="yAt(tick) + 3"
                    text-anchor="end"
                >
                    {{ fmtY(tick) }}
                </text>

                <text
                    v-for="(tick, i) in xTicks"
                    :key="`tx-${i}`"
                    :x="xAt(tick)"
                    :y="height - 10"
                    text-anchor="middle"
                >
                    {{ fmtX(tick) }}
                </text>
            </g>

            <g v-for="(s, si) in resolved" :key="`s-${si}`">
                <circle
                    v-for="(point, pi) in s.points"
                    :key="`p-${si}-${pi}`"
                    :cx="xAt(point.x)"
                    :cy="yAt(point.y)"
                    :r="radiusOf(point)"
                    :fill="colourOf(si, s)"
                    :fill-opacity="isBubble ? 0.55 : 0.85"
                    :stroke="colourOf(si, s)"
                    stroke-width="1.5"
                    class="cursor-pointer transition-opacity"
                    :opacity="hover && (hover.s !== si || hover.p !== pi) ? 0.35 : 1"
                    @mouseenter="hover = { s: si, p: pi }"
                    @mouseleave="hover = null"
                />
            </g>
        </svg>

        <!--
            PER-POINT HIT TESTING, unlike LineChart's shared crosshair. A line
            chart is asked "what was happening here", so it answers for every
            series at that moment. A scatter is asked "what is THAT one", and
            the answer is a single mark.
        -->
        <ChartTooltip
            v-if="hovered"
            :label="hovered.point.label ?? hovered.series.name ?? 'Point'"
            :value="`${xLabel ? xLabel + ' ' : ''}${fmtX(hovered.point.x)} · ${yLabel ? yLabel + ' ' : ''}${fmtY(hovered.point.y)}`"
            :share="isBubble && hovered.point.r != null ? String(hovered.point.r) : null"
        />

        <div v-if="showLegend && resolved.length > 1" class="mt-2 flex flex-wrap gap-3">
            <span
                v-for="(s, si) in resolved"
                :key="`l-${si}`"
                class="text-muted-foreground flex items-center gap-1.5 text-xs"
            >
                <span
                    class="size-2.5 rounded-full"
                    :style="{ backgroundColor: colourOf(si, s) }"
                    aria-hidden="true"
                />
                {{ s.name }}
            </span>
        </div>
    </div>
</template>
