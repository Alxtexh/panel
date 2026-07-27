<script setup lang="ts">
/**
 * "▲ 4% vs previous 30 days".
 *
 * UP IS NOT ALWAYS GOOD. Rendering every increase green makes a rising churn
 * rate or a growing count of failed payments look like a win. `inverted` lets a
 * metric say which direction is healthy, and the colour follows the metric
 * rather than the arithmetic.
 *
 * A NULL PERCENTAGE IS A REAL STATE, not missing data — there is no percentage
 * increase from zero. It renders as "New" with an arrow and no figure, because
 * the alternatives are a division by zero or a fabricated 100%.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        direction: 'up' | 'down' | 'flat' | 'new'
        percentage: number | null
        /** e.g. "vs previous 30 days". */
        comparison?: string
        /** True when a DECREASE is the good outcome (churn, failures, latency). */
        inverted?: boolean
    }>(),
    { inverted: false },
)

const good = computed(() => {
    if (props.direction === 'flat') return null
    if (props.direction === 'new') return !props.inverted

    return props.inverted ? props.direction === 'down' : props.direction === 'up'
})

const tone = computed(() =>
    good.value === null
        ? 'text-muted-foreground'
        : good.value
          ? 'text-emerald-600 dark:text-emerald-400'
          : 'text-rose-600 dark:text-rose-400',
)

const arrow = computed(() =>
    props.direction === 'flat' ? '→' : props.direction === 'down' ? '▼' : '▲',
)

const figure = computed(() => {
    if (props.direction === 'new') return 'New'
    if (props.percentage === null) return '—'

    return `${Math.abs(props.percentage)}%`
})
</script>

<template>
    <span class="flex items-center gap-1 text-xs">
        <span class="flex items-center gap-0.5 font-medium tabular-nums" :class="tone">
            <span aria-hidden="true" class="text-[9px]">{{ arrow }}</span>
            {{ figure }}
        </span>
        <span v-if="comparison" class="text-muted-foreground truncate">{{ comparison }}</span>
    </span>
</template>
