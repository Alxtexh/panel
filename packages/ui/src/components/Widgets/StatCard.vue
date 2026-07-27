<script setup lang="ts">
/**
 * One number on the dashboard, with an optional trend and sparkline.
 *
 * EVERY STATE IS THE SAME HEIGHT — skeleton, error, and resolved. Six cards
 * resolving independently is the whole point of deferring them; if each one
 * changes height on arrival the page reflows six times and the operator's
 * cursor lands on the wrong card. Cumulative layout shift target is 0 (§10),
 * and that is a property of THIS component, not of the page using it.
 *
 * The sparkline is absolutely positioned behind the content rather than laid
 * out below it, so a card with a series and a card without are identical in
 * size and the grid stays even.
 */
import Sparkline from './Sparkline.vue'
import TrendBadge from './TrendBadge.vue'

withDefaults(
    defineProps<{
        label: string
        description?: string | null
        value?: unknown
        trend?: {
            direction: 'up' | 'down' | 'flat' | 'new'
            percentage: number | null
        } | null
        comparison?: string
        sparkline?: { label: string; value: number }[] | null
        loading?: boolean
        error?: boolean
        /** True when a DECREASE is the good outcome. */
        inverted?: boolean
    }>(),
    { description: null, trend: null, sparkline: null, loading: false, error: false, inverted: false },
)

const format = (v: unknown) =>
    typeof v === 'number' ? new Intl.NumberFormat().format(v) : String(v ?? '—')
</script>

<template>
    <div class="bg-card relative flex flex-col gap-1 overflow-hidden rounded-lg border p-4">
        <div
            v-if="sparkline && sparkline.length > 1 && !loading && !error"
            class="pointer-events-none absolute inset-x-0 bottom-0 opacity-60"
            aria-hidden="true"
        >
            <Sparkline :data="sparkline" :height="40" />
        </div>

        <p class="text-muted-foreground relative text-xs font-medium">{{ label }}</p>

        <!-- The skeleton matches the resolved line exactly. -->
        <span v-if="loading" class="bg-muted my-1 h-6 w-24 animate-pulse rounded" />

        <span
            v-else-if="error"
            class="text-destructive relative flex h-8 items-center text-sm"
            role="alert"
        >
            Could not load
        </span>

        <span v-else class="relative flex h-8 items-center text-2xl font-semibold tabular-nums">
            {{ format(value) }}
        </span>

        <TrendBadge
            v-if="trend && !loading && !error"
            class="relative"
            :direction="trend.direction"
            :percentage="trend.percentage"
            :comparison="comparison"
            :inverted="inverted"
        />

        <p v-else-if="description" class="text-muted-foreground relative text-xs">{{ description }}</p>
    </div>
</template>
