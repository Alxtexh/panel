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
 * and a shadow so a row of four reads as separate blocks rather than a strip.
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
</script>

<template>
    <div
        class="bg-card flex flex-col overflow-hidden border"
        :class="
            isSection
                ? 'min-h-[8.75rem] rounded-xl shadow-sm ring-1 ring-foreground/5'
                : 'rounded-lg'
        "
        :data-slot="isSection ? 'section-stat-card' : 'stat-card'"
    >
        <div
            class="flex flex-1 flex-col gap-1"
            :class="isSection ? 'p-5 sm:p-6' : 'p-4'"
        >
            <p
                class="text-muted-foreground relative font-medium"
                :class="isSection ? 'text-[0.7rem] uppercase tracking-wide' : 'text-xs'"
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

            <TrendBadge
                v-if="trend && !loading && !error"
                class="relative"
                :direction="trend.direction"
                :percentage="trend.percentage"
                :comparison="comparison"
                :inverted="inverted"
            />

            <p v-else-if="description" class="text-muted-foreground relative text-xs">
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
