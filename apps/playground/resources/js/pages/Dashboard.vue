<script setup lang="ts">
/**
 * Dashboard.
 *
 * Every stat and chart is its own DEFERRED prop, so the shell paints
 * immediately and the numbers fill in independently — one slow counter does not
 * hold up the others. Spec §10: no widget may block first paint.
 *
 * CHANGING A PERIOD RELOADS ONE PROP. `only: ['chart_sessions', 'periods']` is
 * the whole point of the per-chart query parameter: the click re-runs one
 * grouped query, not the six counters and two breakdowns that did not change.
 * Without `only:` this page would re-resolve every deferred prop on every
 * period click, which is the polling-shaped waste §8 exists to avoid.
 */
import { ChartCard, LineChart, PieChart, StatCard, TrendBadge } from '@panelkit/ui'
import { Deferred, Head, router, usePage } from '@inertiajs/vue3'

interface Widget {
    key: string
    label: string
    description: string | null
    span: number
}

interface Chart {
    key: string
    label: string
    description: string | null
    type: 'line' | 'area' | 'bar' | 'pie' | 'doughnut'
    span: number
    periods: { value: string; label: string }[] | null
}

interface Series {
    points: { label: string; value: number }[]
    total: number | null
    trend: { direction: 'up' | 'down' | 'flat' | 'new'; percentage: number | null } | null
    error: boolean
}

defineProps<{
    widgets: Widget[]
    charts: Chart[]
    periods: Record<string, string>
}>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }] } })

const page = usePage()

/**
 * Read the resolved value from PAGE PROPS, not from the Deferred slot.
 *
 * <Deferred> gates when its default slot renders; it does not hand the value in
 * as a slot prop. Reading `slotProps[key]` looked plausible and silently
 * rendered an em dash for every stat — the numbers were arriving correctly and
 * being thrown away.
 */
function stat(key: string) {
    return (page.props as Record<string, any>)[`stat_${key}`] as
        | {
              value: unknown
              error: boolean
              trend: { direction: 'up' | 'down' | 'flat' | 'new'; percentage: number | null } | null
              sparkline: { label: string; value: number }[] | null
          }
        | undefined
}

function series(key: string): Series {
    return (
        ((page.props as Record<string, any>)[`chart_${key}`] as Series | undefined) ?? {
            points: [],
            total: null,
            trend: null,
            error: false,
        }
    )
}

/**
 * Swap one chart's window.
 *
 * The existing query string is carried forward, so changing the sessions period
 * does not silently reset the signups one — each selector owns exactly its own
 * parameter.
 */
function setPeriod(key: string, value: string) {
    const query = Object.fromEntries(new URLSearchParams(window.location.search))

    router.get(
        window.location.pathname,
        { ...query, [`period_${key}`]: value },
        {
            only: [`chart_${key}`, 'periods'],
            preserveState: true,
            preserveScroll: true,
            replace: true,
        },
    )
}

const comparison: Record<string, string> = {
    today: 'vs yesterday',
    '7d': 'vs previous 7 days',
    '30d': 'vs previous 30 days',
    '90d': 'vs previous 90 days',
    '12m': 'vs previous 12 months',
}
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Dashboard</h1>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Deferred v-for="widget in widgets" :key="widget.key" :data="`stat_${widget.key}`">
                <template #fallback>
                    <StatCard :label="widget.label" :description="widget.description" loading />
                </template>

                <template #default>
                    <StatCard
                        :label="widget.label"
                        :description="widget.description"
                        :value="stat(widget.key)?.value"
                        :trend="stat(widget.key)?.trend"
                        :sparkline="stat(widget.key)?.sparkline"
                        :error="stat(widget.key)?.error"
                        comparison="vs previous 30 days"
                    />
                </template>
            </Deferred>
        </div>

        <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div
                v-for="chart in charts"
                :key="chart.key"
                :class="chart.span >= 2 ? 'lg:col-span-2' : ''"
            >
                <Deferred :data="`chart_${chart.key}`">
                    <template #fallback>
                        <ChartCard
                            :label="chart.label"
                            :description="chart.description"
                            :periods="chart.periods"
                            :period="periods[chart.key]"
                            loading
                        />
                    </template>

                    <template #default>
                        <ChartCard
                            :label="chart.label"
                            :description="chart.description"
                            :periods="chart.periods"
                            :period="periods[chart.key]"
                            :error="series(chart.key).error"
                            @update:period="(value: string) => setPeriod(chart.key, value)"
                        >
                            <template v-if="series(chart.key).trend" #trend>
                                <TrendBadge
                                    class="mt-1"
                                    :direction="series(chart.key).trend!.direction"
                                    :percentage="series(chart.key).trend!.percentage"
                                    :comparison="comparison[periods[chart.key]]"
                                />
                            </template>

                            <PieChart
                                v-if="chart.type === 'pie' || chart.type === 'doughnut'"
                                :data="series(chart.key).points"
                                :type="chart.type"
                            />
                            <LineChart
                                v-else
                                :data="series(chart.key).points"
                                :type="chart.type === 'area' ? 'area' : 'line'"
                            />
                        </ChartCard>
                    </template>
                </Deferred>
            </div>
        </div>
    </div>
</template>
