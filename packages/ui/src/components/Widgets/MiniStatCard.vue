<script setup lang="ts">
import { computed } from 'vue'
import PkSkeleton from '../primitives/PkSkeleton.vue'
/**
 * A compact metric card: value, delta badge, and a filled sparkline beneath.
 *
 * Modelled on the account cards in the reference dashboard - the shape where a
 * row of four sits side by side and the sparkline runs edge to edge along the
 * bottom of the card.
 *
 * THE SPARKLINE BLEEDS TO THE CARD EDGES. That is why the padding lives on the
 * inner content rather than on the card: an inset sparkline reads as a small
 * chart that happens to be in a card, while a full-bleed one reads as the
 * card's own texture, which is what makes a row of these scannable.
 *
 * THE DELTA IS NOT ASSUMED TO BE GOOD WHEN POSITIVE. `inverted` flips the
 * colouring for metrics where down is the win - churn, failures, latency -
 * because a rising failure count rendered green is worse than no colour at all.
 */
import Sparkline from './Sparkline.vue'

const props = withDefaults(
    defineProps<{
        label: string
        value: string | number
        /** Small muted line under the title, e.g. a masked account number. */
        caption?: string | null
        /** Percentage change; null renders no badge. */
        delta?: number | null
        inverted?: boolean
        series?: { label: string; value: number }[] | null
        /** A CSS colour for the sparkline; defaults to the theme primary. */
        color?: string
        loading?: boolean
    }>(),
    {
        caption: null,
        delta: null,
        inverted: false,
        series: null,
        color: 'var(--primary)',
        loading: false,
    },
)

const good = computed(() => {
    if (props.delta === null || props.delta === 0) {
        return null
    }

    return props.inverted ? props.delta < 0 : props.delta > 0
})

const badgeTone = computed(() =>
    good.value === null
        ? 'bg-muted text-muted-foreground'
        : good.value
          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
          : 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
)

const display = computed(() =>
    typeof props.value === 'number' ? new Intl.NumberFormat().format(props.value) : props.value,
)
</script>

<template>
    <div class="bg-card relative flex flex-col overflow-hidden rounded-lg border">
        <div class="flex flex-col gap-1 p-4">
            <div class="flex items-start justify-between gap-2">
                <p class="text-sm font-medium">{{ label }}</p>
                <slot name="menu" />
            </div>

            <p v-if="caption" class="text-muted-foreground font-mono text-xs">
                {{ caption }}
            </p>

            <div class="mt-1 flex flex-wrap items-center gap-2">
                <!-- The skeleton is the same height as the value, so a row of
                     cards does not jump as each one resolves. -->
                <PkSkeleton v-if="loading" variant="number" />
                <span v-else class="text-xl font-semibold tabular-nums">{{ display }}</span>

                <span
                    v-if="delta !== null && !loading"
                    class="rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums"
                    :class="badgeTone"
                >
                    {{ delta > 0 ? '+' : '' }}{{ delta }}%
                </span>
            </div>
        </div>

        <!-- Full bleed: no horizontal padding, flush to the bottom edge. -->
        <div v-if="series && series.length > 1 && !loading" class="-mb-px">
            <Sparkline :data="series" :color="color" :height="56" filled />
        </div>
    </div>
</template>
