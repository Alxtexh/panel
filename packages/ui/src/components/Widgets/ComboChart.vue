<script setup lang="ts">
/**
 * Bars and a line on the same plot — the reference's "Combo" demo.
 *
 * THE TWO HALVES SHARE ONE SCALE BY DEFAULT, and that is the point: a combo
 * chart says "this line is the trend through these bars". If the line is in a
 * different unit it needs `lineAxis: 'right'`, or it will either flatten onto
 * the baseline or tower over every bar — both of which are the chart lying
 * about a relationship it is drawn specifically to show.
 *
 * DRAW ORDER IS BARS FIRST, LINE SECOND. The line is the thing being read
 * against the bars, so it must never be hidden behind one.
 *
 * The bars and the line share the X band, and the line sits at the CENTRE of
 * each band rather than at its edge, so a point lines up with the bar it
 * describes instead of straddling two.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ChartSeries } from './types'

const props = withDefaults(
    defineProps<{
        bars: ChartSeries[]
        lines: ChartSeries[]
        height?: number
        /** Give the line its own scale when it is in another unit. */
        lineAxis?: 'left' | 'right'
        format?: (value: number) => string
        showLegend?: boolean
    }>(),
    { height: 240, lineAxis: 'left', showLegend: true },
)

const host = ref<HTMLElement | null>(null)
const width = ref(560)
const hover = ref<number | null>(null)

let observer: ResizeObserver | null = null

onMounted(() => {
    observer = new ResizeObserver((entries) => {
        width.value = Math.max(160, entries[0].contentRect.width)
    })

    if (host.value) observer.observe(host.value)
})

onBeforeUnmount(() => observer?.disconnect())

const BAR_PALETTE = ['var(--chart-2)', 'var(--chart-4)', 'var(--chart-3)']
const LINE_PALETTE = ['var(--primary)', 'var(--chart-5)']

const barSeries = computed(() =>
    props.bars.map((s, i) => ({ ...s, color: s.color ?? BAR_PALETTE[i % BAR_PALETTE.length] })),
)
const lineSeries = computed(() =>
    props.lines.map((s, i) => ({ ...s, color: s.color ?? LINE_PALETTE[i % LINE_PALETTE.length] })),
)

const labels = computed(() => barSeries.value[0]?.points.map((p) => p.label) ?? lineSeries.value[0]?.points.map((p) => p.label) ?? [])
const count = computed(() => labels.value.length)

const splitScale = computed(() => props.lineAxis === 'right')

const pad = computed(() => ({ top: 12, right: splitScale.value ? 44 : 12, bottom: 26, left: 44 }))

const plot = computed(() => ({
    w: Math.max(1, width.value - pad.value.left - pad.value.right),
    h: Math.max(1, props.height - pad.value.top - pad.value.bottom),
}))

function niceCeiling(values: number[]): number {
    const max = Math.max(...values, 0)

    if (max <= 0) return 1

    const magnitude = 10 ** Math.floor(Math.log10(max))
    const step = [1, 2, 2.5, 5, 10].find((s) => max <= s * magnitude) ?? 10

    return step * magnitude
}

const barCeiling = computed(() =>
    niceCeiling([
        ...barSeries.value.flatMap((s) => s.points.map((p) => p.value)),
        ...(splitScale.value ? [] : lineSeries.value.flatMap((s) => s.points.map((p) => p.value))),
    ]),
)

const lineCeiling = computed(() =>
    splitScale.value ? niceCeiling(lineSeries.value.flatMap((s) => s.points.map((p) => p.value))) : barCeiling.value,
)

const band = computed(() => plot.value.w / Math.max(1, count.value))
const groupWidth = computed(() => band.value * 0.6)
const barWidth = computed(() => groupWidth.value / Math.max(1, barSeries.value.length))

function centreOf(i: number): number {
    return pad.value.left + i * band.value + band.value / 2
}

const bars = computed(() =>
    barSeries.value.flatMap((s, si) =>
        s.points.map((p, i) => {
            const h = (Math.max(0, p.value) / barCeiling.value) * plot.value.h

            return {
                x: centreOf(i) - groupWidth.value / 2 + si * barWidth.value,
                y: pad.value.top + plot.value.h - h,
                w: Math.max(0, barWidth.value - 2),
                h,
                color: s.color!,
                index: i,
                name: s.name,
                value: p.value,
                label: p.label,
            }
        }),
    ),
)

const lines = computed(() =>
    lineSeries.value.map((s) => {
        const pts = s.points.map((p, i) => ({
            x: centreOf(i),
            y: pad.value.top + plot.value.h - (Math.max(0, p.value) / lineCeiling.value) * plot.value.h,
            value: p.value,
        }))

        return {
            ...s,
            pts,
            d: pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' '),
        }
    }),
)

const gridlines = computed(() =>
    [0, 0.25, 0.5, 0.75, 1].map((f) => ({
        y: pad.value.top + plot.value.h * f,
        left: barCeiling.value * (1 - f),
        right: lineCeiling.value * (1 - f),
    })),
)

const labelStep = computed(() => Math.max(1, Math.ceil(count.value / 10)))

function showLabel(i: number): boolean {
    return i === count.value - 1 || i % labelStep.value === 0
}

const format = (v: number) => (props.format ? props.format(v) : compact(v))

function compact(v: number): string {
    if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`
    if (Math.abs(v) >= 1_000) return `${(v / 1_000).toFixed(1).replace(/\.0$/, '')}k`

    return new Intl.NumberFormat().format(Math.round(v * 100) / 100)
}

const active = computed(() => {
    if (hover.value === null) return null

    const i = hover.value

    return {
        label: labels.value[i],
        rows: [
            ...barSeries.value.map((s) => ({ name: s.name, color: s.color!, value: s.points[i]?.value ?? 0 })),
            ...lineSeries.value.map((s) => ({ name: s.name, color: s.color!, value: s.points[i]?.value ?? 0 })),
        ],
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
            <svg :width="width" :height="height" class="overflow-visible" @mouseleave="hover = null">
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
                    :key="`lt-${g.y}`"
                    :x="pad.left - 8"
                    :y="g.y + 3"
                    text-anchor="end"
                    class="fill-muted-foreground text-[10px] tabular-nums"
                >
                    {{ compact(g.left) }}
                </text>
                <template v-if="splitScale">
                    <text
                        v-for="g in gridlines"
                        :key="`rt-${g.y}`"
                        :x="width - pad.right + 8"
                        :y="g.y + 3"
                        text-anchor="start"
                        class="fill-muted-foreground text-[10px] tabular-nums"
                    >
                        {{ compact(g.right) }}
                    </text>
                </template>

                <rect
                    v-for="(l, i) in labels"
                    :key="`hit-${i}`"
                    :x="pad.left + i * band"
                    :y="pad.top"
                    :width="band"
                    :height="plot.h"
                    fill="var(--muted)"
                    :fill-opacity="hover === i ? 0.4 : 0"
                    @mouseenter="hover = i"
                />

                <!-- Bars first: the line is read AGAINST them and must sit on top. -->
                <rect
                    v-for="(b, i) in bars"
                    :key="`b-${i}`"
                    :x="b.x"
                    :y="b.y"
                    :width="b.w"
                    :height="b.h"
                    :fill="b.color"
                    :fill-opacity="hover === null || hover === b.index ? 0.85 : 0.3"
                    rx="3"
                    pointer-events="none"
                />

                <g v-for="(l, i) in lines" :key="`l-${i}`">
                    <path
                        :d="l.d"
                        fill="none"
                        :stroke="l.color"
                        stroke-width="2.5"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        pointer-events="none"
                    />
                    <circle
                        v-if="hover !== null && l.pts[hover]"
                        :cx="l.pts[hover].x"
                        :cy="l.pts[hover].y"
                        r="4"
                        :fill="l.color"
                        stroke="var(--card)"
                        stroke-width="2"
                        pointer-events="none"
                    />
                </g>

                <text
                    v-for="(l, i) in labels"
                    v-show="showLabel(i)"
                    :key="`x-${i}`"
                    :x="centreOf(i)"
                    :y="height - 8"
                    text-anchor="middle"
                    class="fill-muted-foreground text-[10px] capitalize"
                >
                    {{ l }}
                </text>
            </svg>

            <div
                v-if="active"
                class="bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
            >
                <p class="text-muted-foreground mb-1 text-[11px] capitalize">{{ active.label }}</p>
                <div v-for="(row, i) in active.rows" :key="i" class="flex items-center gap-2 py-0.5">
                    <span class="size-2 shrink-0 rounded-full" :style="{ background: row.color }" />
                    <span class="text-muted-foreground min-w-0 flex-1 truncate text-[11px]">{{ row.name }}</span>
                    <span class="text-xs font-semibold tabular-nums">{{ format(row.value) }}</span>
                </div>
            </div>

            <div v-if="showLegend" class="mt-2 flex flex-wrap items-center gap-4">
                <span v-for="(s, i) in [...barSeries, ...lineSeries]" :key="i" class="flex items-center gap-1.5 text-xs">
                    <span class="size-2 rounded-full" :style="{ background: s.color }" />
                    <span class="text-muted-foreground">{{ s.name }}</span>
                </span>
            </div>
        </template>
    </div>
</template>
