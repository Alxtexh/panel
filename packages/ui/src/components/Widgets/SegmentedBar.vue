<script setup lang="ts">
/**
 * A single bar split into labelled proportions.
 *
 * Two shapes, one component, because they are the same drawing:
 *
 *   TWO segments  — a limit: spent against remaining.
 *   N segments    — a breakdown: food, clothing, other.
 *
 * A TINY SEGMENT STILL GETS A VISIBLE SLIVER. A category worth 0.2% rounds to
 * zero width and disappears from the bar while still appearing in the legend
 * below, which reads as a rendering bug. Every non-zero segment is floored at
 * 2px, so "present but small" is distinguishable from "absent".
 *
 * THE PERCENTAGES ARE NOT RE-NORMALISED. If the segments do not sum to the
 * total, the remainder is drawn as empty track rather than being scaled away —
 * a bar that always fills completely cannot show an under-spend, which is
 * exactly what a spending limit is for.
 */
import { computed } from 'vue'

interface Segment {
    label: string
    value: number
    /** A CSS colour. Defaults to the theme palette by index. */
    color?: string
}

const props = withDefaults(
    defineProps<{
        segments: Segment[]
        /** The denominator. Defaults to the sum of the segments. */
        total?: number | null
        format?: (value: number) => string
        showLegend?: boolean
        height?: number
    }>(),
    { total: null, showLegend: true, height: 8 },
)

const PALETTE = ['var(--primary)', 'var(--chart-2)', 'var(--chart-4)', 'var(--chart-3)', 'var(--chart-5)']

const sum = computed(() => props.segments.reduce((t, s) => t + Math.max(0, s.value), 0))
const denominator = computed(() => Math.max(props.total ?? sum.value, sum.value, 1))

const resolved = computed(() =>
    props.segments.map((s, i) => {
        const share = Math.max(0, s.value) / denominator.value

        return {
            ...s,
            color: s.color ?? PALETTE[i % PALETTE.length],
            share,
            // A visible sliver rather than nothing, for a non-zero value too
            // small to round to a pixel.
            width: s.value > 0 ? `max(2px, ${(share * 100).toFixed(2)}%)` : '0px',
        }
    }),
)

const format = (v: number) => (props.format ? props.format(v) : new Intl.NumberFormat().format(v))

const percent = (share: number) => `${(share * 100).toFixed(share > 0 && share < 0.01 ? 1 : 0)}%`
</script>

<template>
    <div class="flex flex-col gap-2">
        <div
            class="bg-muted flex w-full overflow-hidden rounded-full"
            :style="{ height: `${height}px` }"
            role="img"
            :aria-label="segments.map((s) => `${s.label} ${format(s.value)}`).join(', ')"
        >
            <span
                v-for="(s, i) in resolved"
                :key="i"
                class="h-full transition-all"
                :class="[
                    i === 0 ? 'rounded-l-full' : '',
                    i === resolved.length - 1 && !total ? 'rounded-r-full' : '',
                ]"
                :style="{ width: s.width, background: s.color }"
                :title="`${s.label}: ${format(s.value)} (${percent(s.share)})`"
            />
        </div>

        <div v-if="showLegend" class="flex flex-wrap gap-x-6 gap-y-1">
            <div v-for="(s, i) in resolved" :key="i" class="flex min-w-0 flex-col">
                <span class="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <span class="size-2 shrink-0 rounded-full" :style="{ background: s.color }" />
                    <span class="truncate">{{ s.label }}</span>
                </span>
                <span class="text-sm font-semibold tabular-nums">{{ format(s.value) }}</span>
            </div>
        </div>
    </div>
</template>
