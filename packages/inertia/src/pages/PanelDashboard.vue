<script setup lang="ts">
/**
 * The screen a `DashboardPage` renders.
 *
 * WHY THIS FILE IS THE POINT. `StatWidget` and `ChartWidget` have shipped since
 * the beginning and were referenced nowhere in the package - they composed
 * correct value objects that nothing mounted, because there was no dashboard
 * route and no mechanism for a screen that was not a resource. This is the other
 * half: the declarations arrive with the page, and this draws them.
 *
 * EVERY VALUE IS A SEPARATE DEFERRED PROP. The server sends labels, spans and
 * descriptions immediately and each number when its own query finishes, so the
 * layout is on screen before anything has been counted and one slow aggregate
 * delays only itself. A card with no value yet is `loading`; a widget whose
 * query failed arrives with `error` and says so in place rather than blanking.
 *
 * SPANS ARE COLUMN COUNTS, NOT CLASSES. A widget declares `span(2)` and this
 * decides what two columns look like - the server never sends a Tailwind class,
 * because a payload containing markup is a payload that cannot be restyled.
 */
import { Deferred, router } from '@inertiajs/vue3'
import {
    BarChart,
    ChartCard,
    ComboChart,
    HeatmapChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    StatCard,
} from '@panelkit/ui'
import { computed } from 'vue'

type StatDeclaration = {
    key: string
    label: string
    description: string | null
    span: number
}

type ChartDeclaration = {
    key: string
    label: string
    type: string
    description: string | null
    span: number
    periods: { value: string; label: string }[] | null
    thresholds: unknown[] | null
    maxValue: number | null
}

const props = withDefaults(
    defineProps<{
        widgets?: StatDeclaration[]
        charts?: ChartDeclaration[]
        pageHeading?: string
        pageDescription?: string | null
    }>(),
    { widgets: () => [], charts: () => [], pageHeading: 'Dashboard', pageDescription: null },
)

/*
 * THE CHART COMPONENT IS CHOSEN FROM A NAME THE SERVER SENDS, and the map is
 * here rather than there for the reason every other schema in this panel gives:
 * a server that named a component could name ANY component in the bundle, which
 * turns a chart type into a way to mount arbitrary markup. An unknown type falls
 * back to a line rather than rendering nothing, because a chart that silently
 * disappears is harder to notice than one drawn in the wrong shape.
 */
const CHARTS: Record<string, unknown> = {
    line: LineChart,
    bar: BarChart,
    pie: PieChart,
    doughnut: PieChart,
    radar: RadarChart,
    polarArea: PolarAreaChart,
    combo: ComboChart,
    heatmap: HeatmapChart,
}

const chartComponent = (type: string) => CHARTS[type] ?? LineChart

/** A declared span, clamped to what the grid can express. */
const spanClass = (span: number) =>
    ({
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
        4: 'md:col-span-4',
    })[Math.min(Math.max(span || 1, 1), 4)] ?? 'md:col-span-1'

const hasAnything = computed(
    () => props.widgets.length > 0 || props.charts.length > 0,
)

/**
 * Changing one chart's window reloads THAT CHART, not the page.
 *
 * The period is a query parameter per chart, so a partial reload naming one
 * deferred prop re-resolves one series. Reloading the whole screen to change a
 * dropdown would re-run every other widget's query for nothing.
 */
const setPeriod = (key: string, period: string) => {
    router.reload({
        data: { [`period_${key}`]: period },
        only: [`chart_${key}`],
    })
}
</script>

<template>
    <div class="space-y-6">
        <header v-if="pageHeading">
            <h1 class="text-2xl font-semibold tracking-tight">
                {{ pageHeading }}
            </h1>
            <p v-if="pageDescription" class="mt-1 text-sm text-muted-foreground">
                {{ pageDescription }}
            </p>
        </header>

        <!--
            A DASHBOARD WITH NO WIDGETS SAYS SO. An empty grid is
            indistinguishable from a page that failed to load, and the first
            thing a new installation sees is this screen.
        -->
        <p v-if="!hasAnything" class="text-sm text-muted-foreground">
            This dashboard has no widgets yet. Declare them in
            <code>stats()</code> and <code>charts()</code> on the page class.
        </p>

        <div v-if="widgets.length" class="grid gap-4 md:grid-cols-4">
            <Deferred
                v-for="widget in widgets"
                :key="widget.key"
                :data="`stat_${widget.key}`"
            >
                <!--
                    THE FALLBACK IS THE SAME CARD, loading. Swapping in a
                    skeleton of a different shape makes the layout jump when the
                    number lands, which reads as the page breaking.
                -->
                <template #fallback>
                    <StatCard
                        :class="spanClass(widget.span)"
                        :label="widget.label"
                        :description="widget.description"
                        :loading="true"
                    />
                </template>

                <StatCard
                    :class="spanClass(widget.span)"
                    :label="widget.label"
                    :description="widget.description"
                    :value="($page.props as any)[`stat_${widget.key}`]?.value"
                    :trend="($page.props as any)[`stat_${widget.key}`]?.trend"
                    :sparkline="
                        ($page.props as any)[`stat_${widget.key}`]?.sparkline
                    "
                    :error="($page.props as any)[`stat_${widget.key}`]?.error"
                />
            </Deferred>
        </div>

        <div v-if="charts.length" class="grid gap-4 md:grid-cols-4">
            <Deferred
                v-for="chart in charts"
                :key="chart.key"
                :data="`chart_${chart.key}`"
            >
                <template #fallback>
                    <ChartCard
                        :class="spanClass(chart.span)"
                        :label="chart.label"
                        :description="chart.description"
                        :periods="chart.periods"
                        :loading="true"
                    />
                </template>

                <ChartCard
                    :class="spanClass(chart.span)"
                    :label="chart.label"
                    :description="chart.description"
                    :periods="chart.periods"
                    :error="($page.props as any)[`chart_${chart.key}`]?.error"
                    @update:period="setPeriod(chart.key, $event)"
                >
                    <component
                        :is="chartComponent(chart.type)"
                        :points="
                            ($page.props as any)[`chart_${chart.key}`]?.points
                        "
                        :series="
                            ($page.props as any)[`chart_${chart.key}`]?.series
                        "
                        :thresholds="chart.thresholds"
                        :max-value="chart.maxValue"
                    />
                </ChartCard>
            </Deferred>
        </div>
    </div>
</template>
