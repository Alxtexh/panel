<script setup lang="ts">
/**
 * The dashboard - the screen a `DashboardPage` renders.
 *
 * THIS IS THE REFERENCE APPLICATION'S DASHBOARD, MOVED. The package used to have
 * a second, thinner dashboard of its own: no per-widget boundary, no setup
 * checklist, no summary strip, no filters, no trend badges, and eight chart
 * types against the demo's fifteen. It also passed the resolved series to the
 * chart components as `points`, a prop none of them accept - so every chart on
 * every packaged dashboard drew an empty plot, and had since it shipped. Two
 * implementations, one of them broken and the one nobody was looking at.
 *
 * WHAT CHANGED IN THE MOVE IS THE FILTER DIMENSIONS. The panel had a section
 * headed "Routers" because it came from an ISP; here the page declares its
 * dimensions and this draws them. Nothing else was redesigned.
 *
 * EVERY STAT AND CHART IS ITS OWN DEFERRED PROP, so the shell paints immediately
 * and the numbers fill in independently - one slow counter does not hold up the
 * others.
 *
 * CHANGING A PERIOD RELOADS ONE PROP. `only: ['chart_sessions', 'periods']` is
 * the whole point of the per-chart query parameter: the click re-runs one
 * grouped query, not the six counters and two breakdowns that did not change.
 */
import { Deferred, Head, router, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import {
    BarChart,
    ChartCard,
    ComboChart,
    HeatmapChart,
    LineChart,
    PieChart,
    PkBoundary,
    PolarAreaChart,
    RadarChart,
    SegmentedBar,
    SetupChecklist,
    StatCard,
    StatStrip,
    TrendBadge,
} from '@alxtexh-enterprise/panel'
import type { SetupChecklistItem, StatSegment } from '@alxtexh-enterprise/panel'
import AnnouncementBanners from '../components/AnnouncementBanners.vue'
import DashboardFilterPanel from '../components/DashboardFilters.vue'
import type { Announcement } from '../types'

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
    selections: Record<string, number[]>
    active: boolean
    label: string | null
}

interface Dimension {
    key: string
    label: string
    /** What one of them is called, for the applied-filter summary. */
    singular?: string | null
    placeholder?: string | null
    options: { value: number; label: string }[]
}

const props = withDefaults(
    defineProps<{
        /**
         * Notices somebody wrote, addressed to everybody here.
         *
         * INLINE, NOT `Announcement[]`. A type imported into `defineProps` makes
         * the SFC compiler resolve it ACROSS FILES, which it can only do by
         * loading TypeScript from the CONSUMING project - see the drift guard
         * below. Same-file types need no such thing.
         */
        announcements?: {
            id: number
            title: string
            body: string | null
            severity: 'info' | 'success' | 'warning' | 'danger'
            display: 'banner' | 'toast'
            actionLabel: string | null
            actionUrl: string | null
        }[]
        widgets?: Widget[]
        charts?: Chart[]
        periods?: Record<string, string>
        filters?: AppliedFilters
        /** Filter dimensions this dashboard declared, with their options. */
        filterDimensions?: Dimension[]
        heading?: string
        /** Panel path prefix; the dismiss and report routes sit inside it. */
        prefix?: string
    }>(),
    {
        announcements: () => [],
        widgets: () => [],
        charts: () => [],
        periods: () => ({}),
        filters: () => ({
            from: null,
            to: null,
            selections: {},
            active: false,
            label: null,
        }),
        filterDimensions: () => [],
        heading: 'Dashboard',
        prefix: '',
    },
)

/*
 * THE DRIFT GUARD for the announcement shape spelled out above - a field added
 * to `Announcement` and not here fails `vue-tsc`, rather than arriving as a
 * banner prop this screen quietly drops. A type, so it compiles to nothing.
 */
type _AnnouncementMatch = NonNullable<typeof props.announcements>[number] extends Announcement
    ? true
    : never

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

/**
 * Absent, not empty, for a user without the ability - the page never adds the
 * prop at all rather than sending an empty array, so somebody without it cannot
 * see from the network tab that the check even ran. `Deferred` below only
 * renders once the key is present either way.
 */
const checklist = computed(
    () => ((page.props as Record<string, any>).checklist as SetupChecklistItem[] | undefined) ?? [],
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
 * word instead of a bag of style booleans.
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

    if (!datasets) {
        return undefined
    }

    return stepped ? datasets.map((d) => ({ ...d, stepped: true, filled: false })) : datasets
}

/** Cards size to their content: a ranked list is tall, a proportion bar short. */
function bodyHeight(chart: Chart): number {
    if (chart.type === 'segments') {
        return 64
    }

    if (chart.type === 'rankedBar') {
        return 380
    }

    if (chart.type === 'heatmap') {
        return 200
    }

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

function applyFilters(next: {
    from: string | null
    to: string | null
    selections: Record<string, number[]>
}) {
    const query: Record<string, string> = {}

    if (next.from) {
        query.from = next.from
    }

    if (next.to) {
        query.to = next.to
    }

    for (const [key, ids] of Object.entries(next.selections)) {
        if (ids.length) {
            query[key] = ids.join(',')
        }
    }

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

    if (props.filters.label) {
        parts.push(props.filters.label)
    }

    for (const dimension of props.filterDimensions) {
        const count = (props.filters.selections?.[dimension.key] ?? []).length

        if (count) {
            /*
             * "1 routers" is what a label pluralised by its author reads as
             * when one thing is chosen. The demo said "1 router" because the
             * dimension was hardcoded and could carry its own singular; a
             * declared dimension may name one, and dropping a trailing "s" is
             * the honest fallback rather than a wrong number agreement.
             */
            const label = dimension.label.toLowerCase()

            parts.push(
                `${count} ${count === 1 ? (dimension.singular?.toLowerCase() ?? label.replace(/s$/, '')) : label}`,
            )
        }
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

/**
 * A DASHBOARD WITH NOTHING DECLARED SAYS SO. An empty page is
 * indistinguishable from one that failed to load, and this is the first screen
 * a new installation opens on.
 */
const hasAnything = computed(() => props.widgets.length > 0 || props.charts.length > 0)
</script>

<template>
    <Head :title="heading" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <!--
            ABOVE EVERYTHING, because a notice below the fold is a notice nobody
            read - which is exactly what the dedicated Announcements page turned
            out to be.
        -->
        <AnnouncementBanners :announcements="announcements" :prefix="prefix" />

        <!--
            GUARDED ON THE PROP'S PRESENCE, not just its resolved value. The page
            never registers `checklist` at all for a user without the ability -
            unlike `strip` below, which is given a <Deferred> whenever it is
            offered and would otherwise sit on its loading skeleton forever for
            somebody who was never going to receive it.
        -->
        <PkBoundary v-if="'checklist' in page.props" label="The setup checklist">
            <Deferred data="checklist">
                <template #fallback>
                    <div class="h-24 animate-pulse rounded-lg border bg-muted/30" />
                </template>

                <template #default>
                    <SetupChecklist
                        :items="checklist"
                        :report-href="`${prefix}/operations/monitoring`"
                    />
                </template>
            </Deferred>
        </PkBoundary>

        <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="min-w-0">
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
                    {{ heading }}
                </h1>
                <p v-if="filterSummary" class="truncate text-xs text-muted-foreground">
                    {{ filterSummary }}
                </p>
            </div>

            <div v-if="filterDimensions.length || charts.length" class="flex items-center gap-2">
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
            :selections="filters.selections ?? {}"
            :dimensions="filterDimensions"
            @close="filtersOpen = false"
            @apply="applyFilters"
            @reset="resetFilters"
        />

        <p v-if="!hasAnything" class="text-sm text-muted-foreground">
            This dashboard has no widgets yet. Declare them in <code>stats()</code> and
            <code>charts()</code> on the page class.
        </p>

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
        <PkBoundary v-if="'strip' in page.props" label="The summary strip">
            <Deferred data="strip">
                <template #fallback>
                    <StatStrip :segments="STRIP_PLACEHOLDER" loading />
                </template>

                <template #default>
                    <StatStrip :segments="strip" />
                </template>
            </Deferred>
        </PkBoundary>

        <div v-if="widgets.length" class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

        <div v-if="charts.length" class="grid grid-cols-1 gap-3 lg:grid-cols-2">
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
