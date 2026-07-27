<script setup lang="ts">
/**
 * A line or area chart over a time series.
 *
 * NO CHARTING LIBRARY, for the reason BarChart gives: deferring a 200 KB
 * dependency is strictly worse than not having one. This is ~150 lines of SVG.
 *
 * COORDINATES ARE MEASURED, NOT SCALED. The obvious shortcut is a fixed
 * `viewBox` plus `preserveAspectRatio="none"`, which stretches the drawing to
 * the card. That also stretches the STROKES and the TEXT — the line comes out
 * thicker horizontally than vertically and the axis labels are visibly
 * condensed. A ResizeObserver gives real pixel widths, so a stroke is a stroke
 * and 11px text is 11px at every card size.
 *
 * X LABELS ARE THINNED. Thirty daily labels in a 400px card overlap into a grey
 * smear; the chart looks broken rather than dense. Every Nth label is drawn,
 * with the last always kept — the most recent point is the one being read.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface Point {
    label: string
    value: number
}

const props = withDefaults(
    defineProps<{
        data: Point[]
        height?: number
        type?: 'line' | 'area'
        format?: (value: number) => string
    }>(),
    { height: 220, type: 'area' },
)

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

const PAD = { top: 12, right: 12, bottom: 22, left: 44 }

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
const ceiling = computed(() => {
    const max = Math.max(...props.data.map((d) => d.value), 0)

    if (max <= 0) return 1

    const magnitude = 10 ** Math.floor(Math.log10(max))
    const step = [1, 2, 2.5, 5, 10].find((s) => max <= s * magnitude) ?? 10

    return step * magnitude
})

const plot = computed(() => ({
    w: Math.max(1, width.value - PAD.left - PAD.right),
    h: Math.max(1, props.height - PAD.top - PAD.bottom),
}))

const coords = computed(() =>
    props.data.map((point, i) => ({
        ...point,
        // A single point has no span to divide, so it sits at the left edge
        // rather than dividing by zero.
        x: PAD.left + (props.data.length <= 1 ? 0 : (i / (props.data.length - 1)) * plot.value.w),
        y: PAD.top + plot.value.h - (point.value / ceiling.value) * plot.value.h,
    })),
)

const linePath = computed(() =>
    coords.value.map((c, i) => `${i === 0 ? 'M' : 'L'}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(' '),
)

const areaPath = computed(() => {
    if (coords.value.length === 0) return ''

    const base = PAD.top + plot.value.h
    const first = coords.value[0]
    const last = coords.value[coords.value.length - 1]

    return `${linePath.value} L${last.x.toFixed(2)},${base} L${first.x.toFixed(2)},${base} Z`
})

/** Four gridlines, drawn from the ceiling down. */
const gridlines = computed(() =>
    [0, 0.25, 0.5, 0.75, 1].map((fraction) => ({
        y: PAD.top + plot.value.h * fraction,
        value: ceiling.value * (1 - fraction),
    })),
)

/** Keep roughly eight x labels whatever the period length. */
const labelStep = computed(() => Math.max(1, Math.ceil(props.data.length / 8)))

function showLabel(index: number): boolean {
    return index === props.data.length - 1 || index % labelStep.value === 0
}

/** Nearest point to the cursor, so the tooltip never feels like it lags. */
function track(event: MouseEvent) {
    const rect = (event.currentTarget as SVGElement).getBoundingClientRect()
    const x = event.clientX - rect.left - PAD.left
    const step = props.data.length <= 1 ? 1 : plot.value.w / (props.data.length - 1)

    hover.value = Math.min(props.data.length - 1, Math.max(0, Math.round(x / step)))
}

const active = computed(() => (hover.value === null ? null : coords.value[hover.value]))

/** Flip the tooltip before it runs off the right edge of the card. */
const tooltipStyle = computed(() => {
    if (!active.value) return {}

    const flip = active.value.x > width.value - 90

    return {
        left: `${active.value.x}px`,
        top: `${Math.max(0, active.value.y - 44)}px`,
        transform: flip ? 'translateX(-100%) translateX(-8px)' : 'translateX(8px)',
    }
})
</script>

<template>
    <div ref="host" class="relative w-full" :style="{ height: `${height}px` }">
        <div
            v-if="data.length === 0"
            class="text-muted-foreground flex h-full items-center justify-center text-sm"
        >
            No data
        </div>

        <svg
            v-else
            :width="width"
            :height="height"
            class="overflow-visible"
            @mousemove="track"
            @mouseleave="hover = null"
        >
            <defs>
                <linearGradient :id="`pk-area-${type}`" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.28" />
                    <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.02" />
                </linearGradient>
            </defs>

            <!-- Gridlines and Y labels. -->
            <g>
                <line
                    v-for="line in gridlines"
                    :key="line.y"
                    :x1="PAD.left"
                    :x2="width - PAD.right"
                    :y1="line.y"
                    :y2="line.y"
                    stroke="var(--border)"
                    stroke-width="1"
                />
                <text
                    v-for="line in gridlines"
                    :key="`t-${line.y}`"
                    :x="PAD.left - 8"
                    :y="line.y + 3"
                    text-anchor="end"
                    class="fill-muted-foreground text-[10px] tabular-nums"
                >
                    {{ compact(line.value) }}
                </text>
            </g>

            <path v-if="type === 'area'" :d="areaPath" :fill="`url(#pk-area-${type})`" />

            <path
                :d="linePath"
                fill="none"
                stroke="var(--primary)"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
            />

            <!-- A lone point draws no line, so it gets a dot or the chart looks empty. -->
            <circle
                v-if="coords.length === 1"
                :cx="coords[0].x"
                :cy="coords[0].y"
                r="3"
                fill="var(--primary)"
            />

            <!-- Hover marker. -->
            <g v-if="active">
                <line
                    :x1="active.x"
                    :x2="active.x"
                    :y1="PAD.top"
                    :y2="PAD.top + plot.h"
                    stroke="var(--border)"
                    stroke-width="1"
                    stroke-dasharray="3 3"
                />
                <circle
                    :cx="active.x"
                    :cy="active.y"
                    r="4"
                    fill="var(--primary)"
                    stroke="var(--card)"
                    stroke-width="2"
                />
            </g>

            <!-- X labels. -->
            <text
                v-for="(c, i) in coords"
                v-show="showLabel(i)"
                :key="`x-${i}`"
                :x="c.x"
                :y="height - 6"
                text-anchor="middle"
                class="fill-muted-foreground text-[10px]"
            >
                {{ c.label }}
            </text>
        </svg>

        <div
            v-if="active"
            class="bg-popover pointer-events-none absolute z-10 rounded-md border px-2 py-1 shadow-md"
            :style="tooltipStyle"
        >
            <p class="text-muted-foreground text-[10px] whitespace-nowrap">{{ active.label }}</p>
            <p class="text-xs font-semibold tabular-nums">{{ format(active.value) }}</p>
        </div>
    </div>
</template>
