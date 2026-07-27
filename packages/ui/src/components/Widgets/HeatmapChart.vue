<script setup lang="ts">
/**
 * A heatmap (matrix chart): rows × columns, colour carries the value.
 *
 * WHAT IT IS FOR. When a breakdown has two dimensions and one of them has
 * dozens of members — a hundred service areas against three statuses — every
 * other chart type fails. A grouped bar chart draws three hundred bars, a
 * stacked bar makes the small categories invisible, and a line chart implies an
 * ordering the categories do not have. A heatmap gives every cell the same
 * space and lets the eye find the dark and empty patches.
 *
 * COLOUR IS BUCKETED, NOT CONTINUOUS, and that is deliberate. A continuous
 * gradient looks more precise and is much harder to read: nobody can tell 40%
 * lightness from 45%, so a reader can only rank cells, never estimate them.
 * Named bands turn the legend into an actual key — a cell IS "11-30", it is not
 * "roughly two thirds of the way along a ramp".
 *
 * ZERO GETS ITS OWN NEUTRAL BAND rather than the palest shade of the scale.
 * "None" and "a few" are categorically different answers, and on a coverage
 * chart the empty cells are usually the entire point.
 *
 * CELLS ARE SIZED FROM THE MEASURED WIDTH, so a hundred columns compress into
 * thin stripes instead of overflowing. Below roughly two pixels a column is not
 * a readable cell and the chart says so rather than drawing a smear.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ChartSeries } from './types'

export interface HeatmapBucket {
    /** Upper bound, exclusive. The final bucket may omit it to catch the rest. */
    max?: number
    label: string
}

const props = withDefaults(
    defineProps<{
        /** One series per ROW; each point is a column. */
        series: ChartSeries[]
        buckets?: HeatmapBucket[]
        height?: number
        format?: (value: number) => string
        /** Draw the column labels underneath. Off by default — usually too many. */
        showColumnLabels?: boolean
    }>(),
    {
        buckets: () => [
            { max: 1, label: '0' },
            { max: 11, label: '1-10' },
            { max: 31, label: '11-30' },
            { max: 61, label: '31-60' },
            { label: '61+' },
        ],
        height: 240,
        showColumnLabels: false,
    },
)

const host = ref<HTMLElement | null>(null)
const width = ref(560)
const hover = ref<{ row: number; col: number } | null>(null)

let observer: ResizeObserver | null = null

onMounted(() => {
    observer = new ResizeObserver((entries) => {
        width.value = Math.max(160, entries[0].contentRect.width)
    })

    if (host.value) observer.observe(host.value)
})

onBeforeUnmount(() => observer?.disconnect())

const columns = computed(() => props.series[0]?.points.map((p) => p.label) ?? [])
const rowCount = computed(() => props.series.length)
const colCount = computed(() => columns.value.length)

/** Room for the row labels on the left. */
const gutter = computed(() => Math.min(140, Math.max(60, width.value * 0.16)))

const plotWidth = computed(() => Math.max(1, width.value - gutter.value - 8))
const cellWidth = computed(() => plotWidth.value / Math.max(1, colCount.value))
const rowHeight = computed(() => Math.max(1, (props.height - 8) / Math.max(1, rowCount.value)))

/**
 * Bucket colours: a neutral for the zero band, then the primary deepening.
 *
 * Opacity rather than five hand-picked colours, so the whole scale follows the
 * tenant's accent instead of only the darkest step matching it.
 */
function bucketColour(index: number): string {
    if (index === 0) return 'var(--muted)'

    const steps = Math.max(1, props.buckets.length - 1)

    return `color-mix(in oklch, var(--primary) ${Math.round((index / steps) * 100)}%, var(--muted))`
}

function bucketOf(value: number): number {
    for (let i = 0; i < props.buckets.length; i++) {
        const max = props.buckets[i].max

        if (max === undefined || value < max) return i
    }

    return props.buckets.length - 1
}

const cells = computed(() =>
    props.series.flatMap((row, r) =>
        row.points.map((p, c) => {
            const bucket = bucketOf(p.value)

            return {
                row: r,
                col: c,
                x: gutter.value + c * cellWidth.value,
                y: 4 + r * rowHeight.value,
                w: Math.max(1, cellWidth.value - 1),
                h: Math.max(1, rowHeight.value - 4),
                colour: bucketColour(bucket),
                label: p.label,
                value: p.value,
                rowName: row.name,
                bucketLabel: props.buckets[bucket].label,
            }
        }),
    ),
)

/** A column narrower than this is a smear rather than a cell. */
const tooDense = computed(() => cellWidth.value < 2)

const active = computed(() => {
    if (!hover.value) return null

    return cells.value.find((c) => c.row === hover.value!.row && c.col === hover.value!.col) ?? null
})

const format = (v: number) => (props.format ? props.format(v) : new Intl.NumberFormat().format(v))
</script>

<template>
    <div ref="host" class="relative w-full">
        <div
            v-if="rowCount === 0 || colCount === 0"
            class="text-muted-foreground flex items-center justify-center text-sm"
            :style="{ height: `${height}px` }"
        >
            No data
        </div>

        <template v-else>
            <!-- The legend is a KEY here, not decoration: without it a shade
                 means nothing at all. -->
            <div class="mb-3 flex flex-wrap items-center justify-center gap-3">
                <span v-for="(b, i) in buckets" :key="i" class="flex items-center gap-1.5 text-[11px]">
                    <span class="size-3 rounded-sm border" :style="{ background: bucketColour(i) }" />
                    <span class="text-muted-foreground">{{ b.label }}</span>
                </span>
            </div>

            <p v-if="tooDense" class="text-muted-foreground mb-2 text-center text-xs">
                {{ colCount }} columns — too many to label individually
            </p>

            <svg
                :width="width"
                :height="height"
                class="overflow-visible"
                @mouseleave="hover = null"
            >
                <text
                    v-for="(row, r) in series"
                    :key="`r-${r}`"
                    :x="gutter - 10"
                    :y="4 + r * rowHeight + rowHeight / 2 + 3"
                    text-anchor="end"
                    class="fill-muted-foreground text-[11px] capitalize"
                >
                    {{ row.name }}
                </text>

                <rect
                    v-for="(cell, i) in cells"
                    :key="i"
                    :x="cell.x"
                    :y="cell.y"
                    :width="cell.w"
                    :height="cell.h"
                    :fill="cell.colour"
                    :fill-opacity="hover === null || (hover.row === cell.row && hover.col === cell.col) ? 1 : 0.55"
                    rx="1"
                    class="transition-[fill-opacity]"
                    @mouseenter="hover = { row: cell.row, col: cell.col }"
                />

                <template v-if="showColumnLabels && !tooDense">
                    <text
                        v-for="(c, i) in columns"
                        :key="`c-${i}`"
                        :x="gutter + i * cellWidth + cellWidth / 2"
                        :y="height - 2"
                        text-anchor="middle"
                        class="fill-muted-foreground text-[9px]"
                    >
                        {{ c }}
                    </text>
                </template>
            </svg>

            <div
                v-if="active"
                class="bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
            >
                <p class="text-[11px] font-medium capitalize">{{ active.label }}</p>
                <p class="text-muted-foreground text-[11px] capitalize">{{ active.rowName }}</p>
                <p class="text-sm font-semibold tabular-nums">
                    {{ format(active.value) }}
                    <span class="text-muted-foreground text-xs font-normal">({{ active.bucketLabel }})</span>
                </p>
            </div>
        </template>
    </div>
</template>
