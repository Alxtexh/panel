<script setup lang="ts">
/**
 * Dashboard.
 *
 * Every stat and chart is its own DEFERRED prop, so the shell paints
 * immediately and the numbers fill in independently - one slow counter does not
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
    HeatmapChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    PkBoundary,
    SegmentedBar,
    StatCard,
    StatStrip,
    TrendBadge,
} from '@panelkit/ui'
import type { StatSegment } from '@panelkit/ui'
import { Deferred, Head, router, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import AnnouncementBanners from '@/components/AnnouncementBanners.vue'
import DashboardFilterPanel from '@/components/DashboardFilters.vue'

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
        | 'rankedBar'
        | 'heatmap'
        | 'segments'
    span: number
    periods: { value: string; label: string }[] | null
    thresholds: { max: number; color: string }[] | null
    maxValue: number | null
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
    trend: {
        direction: 'up' | 'down' | 'flat' | 'new'
        percentage: number | null
    } | null
    error: boolean
}

interface AppliedFilters {
    from: string | null
    to: string | null
    routers: number[]
    active: boolean
    label: string | null
}

const props = defineProps<{
    /** Notices somebody wrote, addressed to everybody here. */
    announcements: {
        id: number
        title: string
        body: string | null
        severity: 'info' | 'success' | 'warning' | 'danger'
        display: 'banner' | 'toast'
        actionLabel: string | null
        actionUrl: string | null
    }[]
    widgets: Widget[]
    charts: Chart[]
    periods: Record<string, string>
    filters: AppliedFilters
    filterOptions: { routers: { value: number; label: string }[] }
}>()

defineOptions({
    layout: { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }] },
})

const page = usePage()

/**
 * Read the resolved value from PAGE PROPS, not from the Deferred slot.
 *
 * <Deferred> gates when its default slot renders; it does not hand the value in
 * as a slot prop. Reading `slotProps[key]` looked plausible and silently
 * rendered an em dash for every stat - the numbers were arriving correctly and
 * being thrown away.
 */
/**
 * The window strip, and the shape it holds while it loads.
 *
 * The placeholder carries the real labels rather than blank cells, because the
 * labels are known before the numbers are - showing them immediately means the
 * strip does not change size or wording when the data lands, only its values.
 */
const STRIP_PLACEHOLDER: StatSegment[] = [
    { key: 'today', label: 'Today', value: '', caption: 'so far' },
    { key: 'week', label: 'Last 7 days', value: '', caption: 'rolling window' },
    { key: 'month', label: 'This month', value: '', caption: 'since the 1st' },
    {
        key: 'quarter',
        label: 'Last 90 days',
        value: '',
        caption: 'rolling window',
    },
]

const strip = computed(
    () =>
        ((page.props as Record<string, any>).strip as StatSegment[] | undefined) ??
        STRIP_PLACEHOLDER,
)

function stat(key: string) {
    return (page.props as Record<string, any>)[`stat_${key}`] as
        | {
              value: unknown
              error: boolean
              trend: {
                  direction: 'up' | 'down' | 'flat' | 'new'
                  percentage: number | null
              } | null
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
 * does not silently reset the signups one - each selector owns exactly its own
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
    // not happen - the worst kind of no-op.
    const datasets =
        resolved.series ??
        (stepped && resolved.points.length ? [{ name: '', points: resolved.points }] : null)

    if (!datasets) return undefined

    return stepped ? datasets.map((d) => ({ ...d, stepped: true, filled: false })) : datasets
}

/** Cards size to their content: a ranked list is tall, a proportion bar short. */
function bodyHeight(chart: Chart): number {
    if (chart.type === 'segments') return 64
    if (chart.type === 'rankedBar') return 380
    if (chart.type === 'heatmap') return 200

    return 220
}

/* ---------------------------------------------------------------------------
 * Dashboard-wide filters
 *
 * Applied filters live in the URL, so a filtered dashboard can be bookmarked or
 * sent to someone. Applying REPLACES the history entry rather than pushing one:
 * otherwise adjusting a range three times leaves three states to walk back
 * through before Back leaves the page.
 * ------------------------------------------------------------------------- */

const filtersOpen = ref(false)

function applyFilters(next: { from: string | null; to: string | null; routers: number[] }) {
    const query: Record<string, string> = {}

    if (next.from) query.from = next.from
    if (next.to) query.to = next.to
    if (next.routers.length) query.routers = next.routers.join(',')

    filtersOpen.value = false

    router.get(window.location.pathname, query, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    })
}

function resetFilters() {
    filtersOpen.value = false
    router.get(
        window.location.pathname,
        {},
        { preserveState: true, preserveScroll: true, replace: true },
    )
}

const filterSummary = computed(() => {
    const parts: string[] = []

    if (props.filters.label) parts.push(props.filters.label)
    if (props.filters.routers.length) {
        parts.push(
            `${props.filters.routers.length} router${props.filters.routers.length === 1 ? '' : 's'}`,
        )
    }

    return parts.join(' · ')
})

/**
 * A per-chart period selector is HIDDEN while a global range is applied.
 *
 * Leaving both visible produces a dashboard where one card says "7 days" and
 * another says "March", and no two numbers on the page can be compared. The
 * server ignores the period in that case; hiding the control is what stops the
 * interface implying otherwise.
 */
function periodsFor(chart: Chart) {
    return props.filters.from ? null : chart.periods
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
        <!--
            ABOVE EVERYTHING, because a notice below the fold is a notice nobody
            read - which is exactly what the dedicated Announcements page turned
            out to be.
        -->
        <AnnouncementBanners :announcements="announcements" />

        <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="min-w-0">
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Dashboard</h1>
                <p v-if="filterSummary" class="truncate text-xs text-muted-foreground">
                    {{ filterSummary }}
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button
                    v-if="filters.active"
                    type="button"
                    class="text-xs text-muted-foreground hover:text-foreground hover:underline"
                    @click="resetFilters"
                >
                    Clear
                </button>
                <button
                    type="button"
                    class="relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
                    @click="filtersOpen = true"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="size-4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M3 5h18M6 12h12M10 19h4" />
                    </svg>
                    Filters
                    <span
                        v-if="filters.active"
                        class="ml-0.5 rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground"
                    >
                        on
                    </span>
                </button>
            </div>
        </div>

        <DashboardFilterPanel
            :open="filtersOpen"
            :from="filters.from"
            :to="filters.to"
            :routers="filters.routers"
            :router-options="filterOptions.routers"
            @close="filtersOpen = false"
            @apply="applyFilters"
            @reset="resetFilters"
        />

        <!--
            One strip, four windows on the same metric. Separate cards would say
            "four things"; the shared container says "one thing, measured four
            ways", which is what these are.
        -->
        <!--
            EVERY WIDGET IS ITS OWN BOUNDARY, and that is the whole point of the
            pattern on this page: a dashboard is twenty independent queries, and
            one of them failing must cost one rectangle rather than the page.
            Wrapping the grid once instead would trade a broken widget for a
            broken dashboard, which is the trade this exists to refuse.
        -->
        <PkBoundary label="The summary strip">
            <Deferred data="strip">
                <template #fallback>
                    <StatStrip :segments="STRIP_PLACEHOLDER" loading />
                </template>

                <template #default>
                    <StatStrip :segments="strip" />
                </template>
            </Deferred>
        </PkBoundary>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <PkBoundary v-for="widget in widgets" :key="widget.key" :label="widget.label" fill>
            <Deferred :data="`stat_${widget.key}`">
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
            </PkBoundary>
        </div>

        <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <!-- `fill` because these are GRID CELLS: without it a row of cards
                 is only as tall as its shortest, which reads as misalignment. -->
            <PkBoundary
                v-for="chart in charts"
                :key="chart.key"
                :label="chart.label"
                :class="chart.span >= 2 ? 'lg:col-span-2' : ''"
                fill
            >
                <Deferred :data="`chart_${chart.key}`">
                    <template #fallback>
                        <ChartCard
                            :label="chart.label"
                            :description="chart.description"
                            :periods="periodsFor(chart)"
                            :period="periods[chart.key]"
                            :body-height="bodyHeight(chart)"
                            loading
                        />
                    </template>

                    <template #default>
                        <ChartCard
                            :label="chart.label"
                            :description="chart.description"
                            :periods="periodsFor(chart)"
                            :period="periods[chart.key]"
                            :error="series(chart.key).error"
                            :body-height="bodyHeight(chart)"
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
                            <HeatmapChart
                                v-else-if="chart.type === 'heatmap'"
                                :series="series(chart.key).series ?? []"
                                :height="160"
                            />
                            <BarChart
                                v-else-if="
                                    chart.type === 'bar' ||
                                    chart.type === 'horizontalBar' ||
                                    chart.type === 'stackedBar' ||
                                    chart.type === 'rankedBar'
                                "
                                :data="
                                    series(chart.key).series ? undefined : series(chart.key).points
                                "
                                :series="series(chart.key).series ?? undefined"
                                :orientation="
                                    chart.type === 'horizontalBar' || chart.type === 'rankedBar'
                                        ? 'horizontal'
                                        : 'vertical'
                                "
                                :stacked="chart.type === 'stackedBar'"
                                :thresholds="chart.thresholds"
                                :max-value="chart.maxValue"
                                :height="chart.type === 'rankedBar' ? 380 : 220"
                                :show-legend="chart.type !== 'rankedBar'"
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
            </PkBoundary>
        </div>
    </div>
</template>
