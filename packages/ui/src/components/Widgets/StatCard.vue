<script setup lang="ts">
import PkSkeleton from '../primitives/PkSkeleton.vue'
/**
 * One number on the dashboard, with an optional trend and sparkline.
 *
 * EVERY STATE IS THE SAME HEIGHT - skeleton, error, and resolved. Six cards
 * resolving independently is the whole point of deferring them; if each one
 * changes height on arrival the page reflows six times and the operator's
 * cursor lands on the wrong card. Cumulative layout shift target is 0 (§10),
 * and that is a property of THIS component, not of the page using it.
 *
 * THE SPARKLINE IS A FULL-BLEED FOOTER, not a background behind the text.
 * Positioning it absolutely under the content looked tidy in isolation and put
 * the curve straight through the trend line - "▲ 13.4% vs previous 30 days"
 * read across a moving graph, which is unreadable at any opacity. Below the
 * content and flush to the card edges, it reads as the card's own texture,
 * which is what makes a row of these scannable.
 *
 * Grid rows stretch, so a card with a series and one without still line up.
 *
 * `variant="section"` is the dashboard-01 card: larger type, roomier padding,
 * a soft primary gradient, and the trend as an outline chip in the header so a
 * row of four reads as separate blocks rather than a strip.
 */
import Sparkline from './Sparkline.vue'
import TrendBadge from './TrendBadge.vue'
import { computed } from 'vue'

const props = withDefaults(
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
        /**
         * `section` is dashboard-01 packing: taller cards that cannot be
         * mistaken for a joined StatStrip cell.
         */
        variant?: 'default' | 'section'
    }>(),
    {
        description: null,
        trend: null,
        sparkline: null,
        loading: false,
        error: false,
        inverted: false,
        variant: 'default',
    },
)

const isSection = computed(() => props.variant === 'section')

const format = (v: unknown) =>
    typeof v === 'number' ? new Intl.NumberFormat().format(v) : String(v ?? '-')

const trendChip = computed(() => {
    if (!props.trend) {
        return null
    }

    if (props.trend.direction === 'new') {
        return 'New'
    }

    if (props.trend.percentage === null) {
        return '-'
    }

    const arrow =
        props.trend.direction === 'flat' ? '→' : props.trend.direction === 'down' ? '▼' : '▲'

    return `${arrow} ${Math.abs(props.trend.percentage)}%`
})
</script>

<template>
    <div
        class="bg-card flex flex-col overflow-hidden border"
        :class="
            isSection
                ? 'min-h-[8.75rem] rounded-xl bg-gradient-to-t from-primary/5 to-card shadow-sm ring-1 ring-foreground/5'
                : 'rounded-lg'
        "
        :data-slot="isSection ? 'section-stat-card' : 'stat-card'"
    >
        <div
            class="flex flex-1 flex-col"
            :class="isSection ? 'gap-3 p-5 sm:p-6' : 'gap-1 p-4'"
        >
            <div
                class="flex items-start justify-between gap-2"
                :class="isSection ? '' : 'flex-col gap-1'"
            >
                <div class="min-w-0 flex-1" :class="isSection ? 'flex flex-col gap-1' : 'contents'">
                    <p
                        class="text-muted-foreground relative font-medium"
                        :class="isSection ? 'text-sm' : 'text-xs'"
                    >
                        {{ label }}
                    </p>

                    <!-- The `number` shape matches the resolved line exactly, which
                         is what keeps the card from jumping when the value lands. -->
                    <PkSkeleton v-if="loading" variant="number" class="my-1" />

                    <span
                        v-else-if="error"
                        class="text-destructive relative flex items-center text-sm"
                        :class="isSection ? 'h-10' : 'h-8'"
                        role="alert"
                    >
                        Could not load
                    </span>

                    <span
                        v-else
                        class="relative flex items-center font-semibold tabular-nums"
                        :class="isSection ? 'h-10 text-3xl tracking-tight' : 'h-8 text-2xl'"
                    >
                        {{ format(value) }}
                    </span>
                </div>

                <span
                    v-if="isSection && trend && !loading && !error && trendChip"
                    class="text-foreground inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums"
                >
                    {{ trendChip }}
                </span>
            </div>

            <TrendBadge
                v-if="!isSection && trend && !loading && !error"
                class="relative"
                :direction="trend.direction"
                :percentage="trend.percentage"
                :comparison="comparison"
                :inverted="inverted"
            />

            <div
                v-else-if="isSection && (description || (trend && comparison))"
                class="text-muted-foreground relative flex flex-col gap-0.5 text-xs"
            >
                <p v-if="description" class="line-clamp-2">{{ description }}</p>
                <p v-else-if="comparison" class="line-clamp-1">{{ comparison }}</p>
            </div>

            <p
                v-else-if="description"
                class="text-muted-foreground relative text-xs"
            >
                {{ description }}
            </p>
        </div>

        <!-- Full bleed: no padding, flush to the bottom edge. -->
        <div
            v-if="sparkline && sparkline.length > 1 && !loading && !error"
            class="-mb-px"
            aria-hidden="true"
        >
            <Sparkline :data="sparkline" :height="isSection ? 52 : 44" filled />
        </div>
    </div>
</template>
