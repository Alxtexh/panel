<script setup lang="ts">
/**
 * The miniature series inside a stat card.
 *
 * Unlike LineChart this DOES stretch its viewBox, which is the right trade at
 * this size: a sparkline has no axes or text to distort, only a path. The one
 * casualty of stretching is the stroke, and `vector-effect="non-scaling-stroke"`
 * exempts it — so the line stays an even 1.5px at any card width without
 * measuring anything.
 *
 * The baseline is the series MINIMUM, not zero. A count that hovers between
 * 8,000 and 8,200 plotted from zero is a flat line at the top of the box, which
 * shows nothing; the point of a sparkline is the shape of the variation.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        data: { label: string; value: number }[]
        height?: number
    }>(),
    { height: 32 },
)

const W = 100
const H = 30

const path = computed(() => {
    const values = props.data.map((d) => d.value)

    if (values.length < 2) return ''

    const min = Math.min(...values)
    const max = Math.max(...values)
    // A perfectly flat series has no range to divide by; draw it down the middle.
    const span = max - min || 1

    return values
        .map((value, i) => {
            const x = (i / (values.length - 1)) * W
            const y = H - ((value - min) / span) * (H - 4) - 2

            return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`
        })
        .join(' ')
})
</script>

<template>
    <svg
        v-if="path"
        :viewBox="`0 0 ${W} ${H}`"
        preserveAspectRatio="none"
        class="w-full"
        :style="{ height: `${height}px` }"
        aria-hidden="true"
    >
        <path
            :d="path"
            fill="none"
            stroke="var(--primary)"
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-linecap="round"
            vector-effect="non-scaling-stroke"
            opacity="0.7"
        />
    </svg>
</template>
