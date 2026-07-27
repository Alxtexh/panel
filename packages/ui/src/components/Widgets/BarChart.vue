<script setup lang="ts">
/**
 * A bar chart, drawn with theme-token divs.
 *
 * NO CHARTING LIBRARY. Spec §3 requires charts to be lazy-loaded and never in
 * the main bundle; drawing them costs nothing to load at all, which is strictly
 * better than deferring a 200 KB dependency. It also keeps @panelkit/ui free of
 * UI dependencies, which is the rule the whole package is built around.
 *
 * If a resource ever needs something this cannot express — a real time series
 * with zooming, say — that is the point to reach for ECharts behind a dynamic
 * import, not before.
 *
 * Colours come from theme tokens, so a per-tenant brand colour applies without
 * recompiling anything.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        data: { label: string; value: number }[]
        height?: number
        format?: (value: number) => string
    }>(),
    { height: 160 },
)

const max = computed(() => Math.max(1, ...props.data.map((d) => d.value)))

const label = (v: number) => (props.format ? props.format(v) : new Intl.NumberFormat().format(v))
</script>

<template>
    <div
        v-if="data.length === 0"
        class="text-muted-foreground flex items-center justify-center text-sm"
        :style="{ height: `${height}px` }"
    >
        No data
    </div>

    <div v-else class="flex items-end gap-2" :style="{ height: `${height}px` }">
        <div v-for="bar in data" :key="bar.label" class="flex min-w-0 flex-1 flex-col items-center gap-1.5">
            <span class="text-muted-foreground text-[10px] tabular-nums">{{ label(bar.value) }}</span>

            <div
                class="bg-primary/80 hover:bg-primary w-full rounded-t transition-all"
                :style="{ height: `${Math.max(2, (bar.value / max) * (height - 40))}px` }"
                :title="`${bar.label}: ${label(bar.value)}`"
            />

            <span class="text-muted-foreground w-full truncate text-center text-[10px] capitalize">
                {{ bar.label }}
            </span>
        </div>
    </div>
</template>
