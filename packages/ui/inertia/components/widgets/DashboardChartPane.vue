<script setup lang="ts">
/**
 * One dashboard chart: boundary, deferred prop, card, plot.
 *
 * EXTRACTED so the masonry columns and a full-width band can render the same
 * frame without copying the Deferred tree. Layout (which column) stays on the
 * page; this is only the card.
 */
import { Deferred } from '@inertiajs/vue3'
import { ChartCard, PkBoundary, TrendBadge } from '@alxtexh-enterprise/panel'
import ChartBody from './ChartBody.vue'
import type { Chart, Series } from './types'
import { useWidgetPoll } from '../../composables/useWidgetPoll'

const props = defineProps<{
    chart: Chart
    series: Series
    periods: { value: string; label: string }[] | null
    period?: string
    comparison?: string
    bodyHeight: number
}>()

defineEmits<{
    (e: 'update:period', value: string): void
    (e: 'hide'): void
}>()

useWidgetPoll(() => [`chart_${props.chart.key}`], () => props.chart.poll ?? null)
</script>

<template>
    <PkBoundary :label="chart.label">
        <Deferred :data="`chart_${chart.key}`">
            <template #fallback>
                <ChartCard
                    :label="chart.label"
                    :description="chart.description"
                    :icon="chart.icon"
                    :periods="periods"
                    :period="period"
                    :body-height="bodyHeight"
                    :fit-body="chart.type === 'table'"
                    hideable
                    loading
                    @hide="$emit('hide')"
                />
            </template>

            <template #default>
                <ChartCard
                    :label="chart.label"
                    :description="chart.description"
                    :icon="chart.icon"
                    :periods="periods"
                    :period="period"
                    :error="series.error"
                    :body-height="bodyHeight"
                    :fit-body="chart.type === 'table'"
                    hideable
                    @update:period="$emit('update:period', $event)"
                    @hide="$emit('hide')"
                >
                    <template v-if="series.trend" #trend>
                        <TrendBadge
                            class="mt-1"
                            :direction="series.trend.direction"
                            :percentage="series.trend.percentage"
                            :comparison="comparison"
                        />
                    </template>

                    <ChartBody :chart="chart" :data="series" />
                </ChartCard>
            </template>
        </Deferred>
    </PkBoundary>
</template>
