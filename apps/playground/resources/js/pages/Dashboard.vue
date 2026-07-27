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
import {
    BarChart,
    ChartCard,
    ComboChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    SegmentedBar,
    StatCard,
    TrendBadge,
} from '@panelkit/ui'
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
    type:
        | 'line'
        | 'area'
        | 'steppedLine'
        | 'multiAxis'
        | 'bar'
        | 'horizontalBar'
        | 'stackedBar'
        | 'combo'
        | 'pie'
        | 'doughnut'
        | 'polarArea'
        | 'radar'
        | 'segments'
    span: number
    periods: { value: string; label: string }[] | null
}

interface Dataset {
    name: string
    points: { label: string; value: number }[]
    axis?: 'left' | 'right'
    dashed?: boolean
}

interface Series {
    points: { label: string; value: number }[]
    series: Dataset[] | null
    bars: Dataset[] | null
    lines: Dataset[] | null
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
            series: null,
            bars: null,
            lines: null,
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

/**
 * Line-style flags are applied HERE, from the chart type.
 *
 * `steppedLine` is a type in PHP and a per-series flag in the renderer, because
 * the renderer supports mixing a stepped series with a smooth one on the same
 * plot. Translating at the boundary keeps the PHP declaration a single semantic
 * word instead of a bag of style booleans (§6.1).
 */
function multiSeries(chart: Chart): Dataset[] | undefined {
    const resolved = series(chart.key)
    const stepped = chart.type === 'steppedLine'

    // A single-dataset stepped chart arrives as `points`, so it has to be
    // promoted to a series before the flag has anywhere to live. Without this
    // the type was accepted, the data rendered, and the stepping silently did
    // not happen — the worst kind of no-op.
    const datasets =
        resolved.series ?? (stepped && resolved.points.length ? [{ name: '', points: resolved.points }] : null)

    if (!datasets) return undefined

    return stepped ? datasets.map((d) => ({ ...d, stepped: true, filled: false })) : datasets
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
                            :body-height="chart.type === 'segments' ? 64 : 220"
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
                            :body-height="chart.type === 'segments' ? 64 : 220"
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

                            <!--
                                One branch per renderer. Written out rather than
                                resolved through a component map so the props
                                each chart needs stay visible: a map would hide
                                that a combo takes bars and lines while a radar
                                takes series and a pie takes points.
                            -->
                            <SegmentedBar
                                v-if="chart.type === 'segments'"
                                :segments="series(chart.key).points"
                                :height="10"
                            />
                            <PieChart
                                v-else-if="chart.type === 'pie' || chart.type === 'doughnut'"
                                :data="series(chart.key).points"
                                :type="chart.type === 'pie' ? 'pie' : 'doughnut'"
                            />
                            <PolarAreaChart
                                v-else-if="chart.type === 'polarArea'"
                                :data="series(chart.key).points"
                            />
                            <RadarChart
                                v-else-if="chart.type === 'radar'"
                                :series="series(chart.key).series ?? []"
                            />
                            <ComboChart
                                v-else-if="chart.type === 'combo'"
                                :bars="series(chart.key).bars ?? []"
                                :lines="series(chart.key).lines ?? []"
                            />
                            <BarChart
                                v-else-if="chart.type === 'bar' || chart.type === 'horizontalBar' || chart.type === 'stackedBar'"
                                :data="series(chart.key).series ? undefined : series(chart.key).points"
                                :series="series(chart.key).series ?? undefined"
                                :orientation="chart.type === 'horizontalBar' ? 'horizontal' : 'vertical'"
                                :stacked="chart.type === 'stackedBar'"
                                show-legend
                            />
                            <LineChart
                                v-else
                                :data="multiSeries(chart) ? undefined : series(chart.key).points"
                                :series="multiSeries(chart)"
                                :type="chart.type === 'area' ? 'area' : 'line'"
                                show-legend
                            />
                        </ChartCard>
                    </template>
                </Deferred>
            </div>
        </div>
    </div>
</template>
