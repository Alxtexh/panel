<script setup lang="ts">
/**
 * Bars: vertical or horizontal, grouped or stacked, one series or many.
 *
 * ONE COMPONENT FOR FOUR OF THE REFERENCE DEMOS, because they are four
 * arrangements of the same arithmetic - a value becomes a length, and the only
 * questions are which axis the length runs along and whether bars sit beside or
 * on top of one another. Splitting them would mean four copies of the scale,
 * the gridlines and the tooltip, and four places to fix the next axis bug.
 *
 * NO CHARTING LIBRARY. Drawing this costs nothing to load, which is strictly
 * better than deferring a 200 KB dependency (spec §3).
 *
 * COORDINATES ARE MEASURED, NOT SCALED, for the reason LineChart gives: a
 * stretched viewBox distorts strokes and text. Horizontal mode needs the real
 * width for a second reason - its category-label gutter is a proportion of the
 * card, which a fixed viewBox cannot know.
 *
 * THE STACKED SCALE IS THE STACK TOTAL, not the largest single value. Scaling a
 * stack to its tallest segment pushes the top of the bar past the plot, so the
 * bar renders taller than the axis it is measured against - a chart that is
 * wrong without looking broken.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ChartSeries } from './types'

interface Point {
    label: string
    value: number
}

const props = withDefaults(
    defineProps<{
        /** Single series, the common case. */
        data?: Point[]
        /** Several series. Takes precedence over `data`. */
        series?: ChartSeries[]
        height?: number
        orientation?: 'vertical' | 'horizontal'
        stacked?: boolean
        format?: (value: number) => string
        showAxis?: boolean
        showLegend?: boolean
        /**
         * Colour each bar by its own VALUE rather than by its series.
         *
         * This is what turns a plain bar chart into a ranked "worst performers"
         * chart: the eye is drawn to the red end without having to read a single
         * number. Ordered ascending by `max`; the first threshold a value falls
         * under wins, and anything above them all takes `aboveColor`.
         */
        thresholds?: { max: number; color: string }[] | null
        aboveColor?: string
        /** Pin the value axis, e.g. to 100 for a percentage. */
        maxValue?: number | null
    }>(),
    {
        height: 220,
        orientation: 'vertical',
        stacked: false,
        showAxis: true,
        showLegend: false,
        thresholds: null,
        aboveColor: 'var(--chart-2)',
        maxValue: null,
    },
)

/**
 * Semantic tones, resolved here rather than passed as CSS from the server.
 *
 * A threshold declaration says `danger`, and this file decides what danger looks
 * like - the same rule that keeps every other colour out of PHP (§6.1).
 */
const TONES: Record<string, string> = {
    danger: 'var(--destructive)',
    warning: 'var(--chart-4)',
    success: 'var(--chart-2)',
    neutral: 'var(--muted-foreground)',
}

function toneColour(name: string): string {
    return TONES[name] ?? name
}

function colourFor(value: number, fallback: string): string {
    if (!props.thresholds?.length) {
        return fallback
    }

    const hit = props.thresholds.find((t) => value < t.max)

    return toneColour(hit ? hit.color : props.aboveColor)
}

const host = ref<HTMLElement | null>(null)
const width = ref(560)
const hover = ref<number | null>(null)

let observer: ResizeObserver | null = null

onMounted(() => {
    observer = new ResizeObserver((entries) => {
        // Never zero: a card that mounts hidden reports 0 and every coordinate
        // becomes NaN, which SVG renders as nothing with no error.
        width.value = Math.max(160, entries[0].contentRect.width)
    })

    if (host.value) {
        observer.observe(host.value)
    }
})

onBeforeUnmount(() => observer?.disconnect())

const PALETTE = [
    'var(--primary)',
    'var(--chart-2)',
    'var(--chart-4)',
    'var(--chart-3)',
    'var(--chart-5)',
]

const resolved = computed<ChartSeries[]>(() => {
    const list = props.series?.length
        ? props.series
        : props.data?.length
          ? [{ name: '', points: props.data }]
          : []

    return list.map((s, i) => ({
        ...s,
        color: s.color ?? PALETTE[i % PALETTE.length],
    }))
})

const labels = computed(() => resolved.value[0]?.points.map((p) => p.label) ?? [])
const count = computed(() => labels.value.length)

const horizontal = computed(() => props.orientation === 'horizontal')

/**
 * Roughly how wide the longest category label renders, at 10px.
 *
 * An estimate rather than a measurement: measuring means rendering the text,
 * reading its box, and re-rendering, which is two extra layout passes on every
 * resize. 5.6px per character is close enough for a gutter, and the truncation
 * below covers the cases where it is not.
 */
const CHAR_WIDTH = 5.6

const longestLabel = computed(() => Math.max(0, ...labels.value.map((l) => l.length)))

/**
 * The left gutter.
 *
 * A FIXED 120px cap meant a ranked chart's labels - which carry the value and
 * the sample size, so "RTR-01-001 - 42.6% (1000)" - simply ran off the left of
 * the card and over whatever was beside it. The gutter now follows the content,
 * capped at 40% of the card so the bars never become a sliver.
 */
const gutter = computed(() => {
    if (!horizontal.value) {
        return props.showAxis ? 44 : 8
    }

    const wanted = longestLabel.value * CHAR_WIDTH + 16

    return Math.round(Math.min(Math.max(60, wanted), width.value * 0.4))
})

/** How many characters actually fit, so anything longer is cut with an ellipsis. */
const labelChars = computed(() => Math.max(4, Math.floor((gutter.value - 16) / CHAR_WIDTH)))

function truncate(label: string): string {
    return label.length <= labelChars.value ? label : `${label.slice(0, labelChars.value - 1)}…`
}

const pad = computed(() => ({
    top: 12,
    right: 12,
    bottom: 26,
    left: gutter.value,
}))

const plot = computed(() => ({
    w: Math.max(1, width.value - pad.value.left - pad.value.right),
    h: Math.max(1, props.height - pad.value.top - pad.value.bottom),
}))

const format = (v: number) => (props.format ? props.format(v) : compact(v))

function compact(v: number): string {
    if (Math.abs(v) >= 1_000_000) {
        return `${(v / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`
    }

    if (Math.abs(v) >= 1_000) {
        return `${(v / 1_000).toFixed(1).replace(/\.0$/, '')}k`
    }

    return new Intl.NumberFormat().format(Math.round(v * 100) / 100)
}

/** A round ceiling, so gridlines land on numbers a person can compare. */
const ceiling = computed(() => {
    const totals = labels.value.map((_, i) =>
        props.stacked
            ? resolved.value.reduce((sum, s) => sum + Math.max(0, s.points[i]?.value ?? 0), 0)
            : Math.max(...resolved.value.map((s) => s.points[i]?.value ?? 0)),
    )

    // A pinned maximum keeps a percentage chart anchored to 100 rather than to
    // whatever the best performer happened to score - otherwise the worst bar
    // fills most of the width and "37%" reads as "nearly full".
    if (props.maxValue) {
        return props.maxValue
    }

    const max = Math.max(...totals, 0)

    if (max <= 0) {
        return 1
    }

    const magnitude = 10 ** Math.floor(Math.log10(max))
    const step = [1, 2, 2.5, 5, 10].find((s) => max <= s * magnitude) ?? 10

    return step * magnitude
})

/** Category slot, then the bar (or group of bars) inside it. */
const band = computed(
    () => (horizontal.value ? plot.value.h : plot.value.w) / Math.max(1, count.value),
)
const barGroup = computed(() => band.value * 0.68)
const barWidth = computed(() =>
    props.stacked || resolved.value.length <= 1
        ? barGroup.value
        : barGroup.value / resolved.value.length,
)

/**
 * Every bar, already positioned.
 *
 * Built as one flat list rather than nested loops in the template: a stacked
 * bar's offset depends on the series before it, and accumulating that inside a
 * template expression is exactly the multi-statement expression this codebase
 * has been bitten by twice.
 */
const bars = computed(() => {
    const out: {
        x: number
        y: number
        w: number
        h: number
        color: string
        label: string
        name: string
        value: number
        index: number
    }[] = []

    const offsets = new Array(count.value).fill(0)

    resolved.value.forEach((s, si) => {
        s.points.forEach((p, i) => {
            const value = Math.max(0, p.value)
            const length =
                (value / ceiling.value) * (horizontal.value ? plot.value.w : plot.value.h)

            const slotStart =
                (horizontal.value ? pad.value.top : pad.value.left) +
                i * band.value +
                (band.value - barGroup.value) / 2

            const lane = props.stacked ? 0 : si * barWidth.value

            out.push(
                horizontal.value
                    ? {
                          x: pad.value.left + offsets[i],
                          y: slotStart + lane,
                          w: length,
                          h: Math.max(0, barWidth.value - 2),
                          color: colourFor(p.value, s.color!),
                          label: p.label,
                          name: s.name,
                          value: p.value,
                          index: i,
                      }
                    : {
                          x: slotStart + lane,
                          y: pad.value.top + plot.value.h - length - offsets[i],
                          w: Math.max(0, barWidth.value - 2),
                          h: length,
                          color: colourFor(p.value, s.color!),
                          label: p.label,
                          name: s.name,
                          value: p.value,
                          index: i,
                      },
            )

            if (props.stacked) {
                offsets[i] += length
            }
        })
    })

    return out
})

const gridlines = computed(() =>
    [0, 0.25, 0.5, 0.75, 1].map((f) => ({
        value: ceiling.value * (horizontal.value ? f : 1 - f),
        x: pad.value.left + plot.value.w * f,
        y: pad.value.top + plot.value.h * f,
    })),
)

/** Keep labels legible: thin them when there are more categories than room. */
const labelStep = computed(() => Math.max(1, Math.ceil(count.value / (horizontal.value ? 14 : 10))))

function showLabel(i: number): boolean {
    return i === count.value - 1 || i % labelStep.value === 0
}

function categoryCentre(i: number): number {
    return (horizontal.value ? pad.value.top : pad.value.left) + i * band.value + band.value / 2
}

const active = computed(() => {
    if (hover.value === null) {
        return null
    }

    return {
        label: labels.value[hover.value],
        rows: resolved.value.map((s) => ({
            name: s.name,
            color: s.color!,
            value: s.points[hover.value!]?.value ?? 0,
        })),
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
            <!--
                NOT overflow-visible. The tooltip is an HTML sibling rather than
                an SVG child, so nothing here needs to escape the box - and
                letting it escape is precisely how the long ranked labels ended
                up drawn on top of the card next door.
            -->
            <svg :width="width" :height="height" @mouseleave="hover = null">
                <!-- Gridlines run along the VALUE axis, which swaps with the
                     orientation: horizontal bars are measured left to right. -->
                <g v-if="showAxis">
                    <template v-if="horizontal">
                        <line
                            v-for="g in gridlines"
                            :key="`g-${g.x}`"
                            :x1="g.x"
                            :x2="g.x"
                            :y1="pad.top"
                            :y2="pad.top + plot.h"
                            stroke="var(--border)"
                            stroke-width="1"
                        />
                        <text
                            v-for="g in gridlines"
                            :key="`gt-${g.x}`"
                            :x="g.x"
                            :y="height - 6"
                            text-anchor="middle"
                            class="fill-muted-foreground text-[10px] tabular-nums"
                        >
                            {{ compact(g.value) }}
                        </text>
                    </template>
                    <template v-else>
                        <line
                            v-for="g in gridlines"
                            :key="`g-${g.y}`"
                            :x1="pad.left"
                            :x2="width - pad.right"
                            :y1="g.y"
                            :y2="g.y"
                            stroke="var(--border)"
                            stroke-width="1"
                        />
                        <text
                            v-for="g in gridlines"
                            :key="`gt-${g.y}`"
                            :x="pad.left - 8"
                            :y="g.y + 3"
                            text-anchor="end"
                            class="fill-muted-foreground text-[10px] tabular-nums"
                        >
                            {{ compact(g.value) }}
                        </text>
                    </template>
                </g>

                <!-- Hover targets: one per CATEGORY, covering the whole band, so
                     the tooltip is reachable in the gaps between bars and above
                     a short one. Hit-testing the bars themselves makes a small
                     value nearly impossible to point at. -->
                <rect
                    v-for="(l, i) in labels"
                    :key="`hit-${i}`"
                    :x="horizontal ? pad.left : pad.left + i * band"
                    :y="horizontal ? pad.top + i * band : pad.top"
                    :width="horizontal ? plot.w : band"
                    :height="horizontal ? band : plot.h"
                    fill="var(--muted)"
                    :fill-opacity="hover === i ? 0.4 : 0"
                    @mouseenter="hover = i"
                />

                <rect
                    v-for="(b, i) in bars"
                    :key="`b-${i}`"
                    :x="b.x"
                    :y="b.y"
                    :width="b.w"
                    :height="b.h"
                    :fill="b.color"
                    :fill-opacity="hover === null || hover === b.index ? 0.9 : 0.35"
                    rx="3"
                    class="transition-[fill-opacity]"
                    pointer-events="none"
                />
                <!--
                    THE `<title>` THAT WAS HERE COULD NEVER APPEAR. A native
                    tooltip needs the element to receive pointer events, and
                    this rect sets `pointer-events="none"` so the hover band
                    above it can do the tracking. It was dead markup that read
                    like the tooltip's source - the real one is the rendered
                    card below, which is what actually shows.
                -->

                <!-- Category labels. -->
                <template v-if="horizontal">
                    <text
                        v-for="(l, i) in labels"
                        v-show="showLabel(i)"
                        :key="`c-${i}`"
                        :x="pad.left - 8"
                        :y="categoryCentre(i) + 3"
                        text-anchor="end"
                        class="fill-muted-foreground text-[10px]"
                    >
                        {{ truncate(l) }}
                        <title>{{ l }}</title>
                    </text>
                </template>
                <template v-else>
                    <text
                        v-for="(l, i) in labels"
                        v-show="showLabel(i)"
                        :key="`c-${i}`"
                        :x="categoryCentre(i)"
                        :y="height - 8"
                        text-anchor="middle"
                        class="fill-muted-foreground text-[10px] capitalize"
                    >
                        {{ l }}
                    </text>
                </template>
            </svg>

            <div
                v-if="active"
                class="bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
            >
                <p class="text-muted-foreground mb-1 text-[11px] capitalize">
                    {{ active.label }}
                </p>
                <div
                    v-for="(row, i) in active.rows"
                    :key="i"
                    class="flex items-center gap-2 py-0.5"
                >
                    <span class="size-2 shrink-0 rounded-full" :style="{ background: row.color }" />
                    <span class="text-muted-foreground min-w-0 flex-1 truncate text-[11px]">
                        {{ row.name || 'Value' }}
                    </span>
                    <span class="text-xs font-semibold tabular-nums">{{ format(row.value) }}</span>
                </div>
            </div>

            <div
                v-if="showLegend && resolved.length > 1"
                class="mt-2 flex flex-wrap items-center gap-4"
            >
                <span v-for="(s, i) in resolved" :key="i" class="flex items-center gap-1.5 text-xs">
                    <span class="size-2 rounded-full" :style="{ background: s.color }" />
                    <span class="text-muted-foreground">{{ s.name }}</span>
                </span>
            </div>
        </template>
    </div>
</template>
