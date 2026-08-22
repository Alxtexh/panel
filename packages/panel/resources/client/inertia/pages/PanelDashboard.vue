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
import { Deferred, Head, Link, router, usePage } from '@inertiajs/vue3'
import { computed, markRaw, provide, ref, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import {
    DASHBOARD_HIDE_KEY,
    DASHBOARD_HIDDEN_STORAGE_KEY,
    DashboardShortcuts,
    PkBoundary,
    PkSlideover,
    SetupChecklist,
    StatStrip,
    iconPath,
    packWidgetColumns,
    useColumnVisibility,
} from '@alxtexh-enterprise/panel'
import type { DashboardHide, SetupChecklistItem, StatSegment } from '@alxtexh-enterprise/panel'
import DashboardChartPane from '../components/widgets/DashboardChartPane.vue'
import DashboardTablePane from '../components/widgets/DashboardTablePane.vue'
import type { TableWidgetDecl } from '../components/widgets/DashboardTablePane.vue'
import { emptySeries, type Chart, type Series } from '../components/widgets/types'
import { useWidgetPoll, useWidgetChannels, canUseEcho } from '../composables/useWidgetPoll'
import AnnouncementBanners from '../components/AnnouncementBanners.vue'
import DashboardFilterPanel from '../components/DashboardFilters.vue'
import EmptyGrantsNotice from '../components/EmptyGrantsNotice.vue'
import type { Announcement } from '../types'

interface Widget {
    key: string
    label: string
    description: string | null
    span: number
    poll?: number | null
    live?: string | null
}

/*
 * `Chart`, `Dataset` and `Series` WERE DECLARED HERE, which made this file the
 * only screen that could describe a chart - see `components/widgets/types.ts`.
 * They are imported now, so a renderer added to `ChartWidget::TYPES` is a
 * two-file change rather than a three-file one.
 */

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

/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a fragment.
 *
 * Inertia binds the WHOLE page payload onto the page component - the declared
 * props bind as props, and the twenty-odd others (shared props, plus every
 * deferred stat_* and chart_* as it lands) arrive as plain attributes. A
 * fragment root has nowhere to auto-inherit them, so Vue warned - once per
 * deferred prop, on every visit, growing the list each time - which read
 * exactly like the page reloading over and over. It was neither reloading nor
 * broken: the attributes are unused here by design, and this says so.
 */
defineOptions({ inheritAttrs: false })

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
        tables?: TableWidgetDecl[]
        shortcuts?: {
            catalog: { id: string; label: string; href: string; icon: string }[]
            defaults?: string[]
            storageKey?: string | null
        } | null
        /** Opt-in via Panel::userDashboards(). */
        userDashboards?: boolean
        dashboardLayout?: { chartOrder: string[] } | null
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
        tables: () => [],
        shortcuts: null,
        userDashboards: false,
        dashboardLayout: null,
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
const InertiaLink = markRaw(Link)

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

const onboarding = computed(
    () => ((page.props as Record<string, any>).onboarding as SetupChecklistItem[] | undefined) ?? [],
)

const onboardingDismiss = computed(
    () => ((page.props as Record<string, any>).onboardingDismiss as string | null | undefined) ?? null,
)

function skipOnboarding() {
    const href = onboardingDismiss.value

    if (!href) {
        return
    }

    if (typeof document !== 'undefined') {
        document.cookie = 'panel_onboarding_done=1;path=/;max-age=31536000;SameSite=Lax'
    }

    router.post(href, {}, { preserveScroll: true })
}

/**
 * THE WHOLE STAT ROW AS ONE STRIP - see the template for why this replaced a
 * grid of separate cards, and `StatSegment` for why nothing is lost by it.
 *
 * Refresh: Echo when `window.Echo` and `->live()` are set (push, no periodic
 * HTTP). Poll when they are not. Never both for the same widget. Redis is
 * not a UI transport.
 *
 * `sensitive: false` throughout: a strip masks by default, which is right for
 * figures somebody deliberately put behind an eye and wrong for the counters at
 * the top of a dashboard - those would all arrive covered.
 */
const statKeys = computed(() => props.widgets.map((w) => `stat_${w.key}`))

const pollingStatKeys = computed(() =>
    props.widgets
        .filter((w) => w.poll && !canUseEcho(w.live))
        .map((w) => `stat_${w.key}`),
)

const statsPollMs = computed(() => {
    const intervals = props.widgets
        .filter((w) => !canUseEcho(w.live))
        .map((w) => w.poll)
        .filter((n): n is number => typeof n === 'number' && n >= 1000)

    return intervals.length ? Math.min(...intervals) : null
})

useWidgetPoll(pollingStatKeys, statsPollMs)

useWidgetChannels(() =>
    props.widgets.map((w) => ({
        keys: [`stat_${w.key}`],
        channel: w.live,
    })),
)

const statColumns = computed(
    () => Math.min(Math.max(props.widgets.length, 2), 6) as 2 | 3 | 4 | 5 | 6,
)

const statSegments = computed(() =>
    props.widgets.map((widget) => {
        const value = stat(widget.key)

        return {
            key: widget.key,
            label: widget.label,
            value: value?.error ? '-' : ((value?.value as string | number) ?? '-'),
            caption: widget.description,
            comparison: 'vs previous 30 days',
            trend: value?.trend ?? null,
            sparkline: value?.sparkline ?? null,
            error: value?.error,
            sensitive: false,
        }
    }),
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
        ((page.props as Record<string, any>)[`chart_${key}`] as Series | undefined) ?? emptySeries()
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

    if (chart.type === 'catalog') {
        return 280
    }

    if (chart.type === 'items') {
        return 160
    }

    if (chart.type === 'table') {
        return 120
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
const hasAnything = computed(
    () =>
        props.widgets.length > 0
        || props.charts.length > 0
        || props.tables.length > 0
        || onboarding.value.length > 0,
)
const emptyGrants = computed(() => Boolean((page.props as Record<string, any>).panelEmptyGrants))

/**
 * ADDITIONAL STRIPS THE PAGE DECLARED - `DashboardPage::strips()`.
 *
 * READ OFF PAGE PROPS rather than `defineProps`, because the key is absent
 * entirely when a dashboard declares none - which is almost all of them, and
 * the case that must stay byte-identical to before.
 */
const extraStrips = computed(
    () =>
        ((page.props as Record<string, any>).strips ?? []) as {
            key: string
            label?: string | null
        }[],
)

/**
 * THE RESOLVED SEGMENTS COME FROM PAGE PROPS, NOT THE `<Deferred>` SLOT.
 *
 * `<Deferred>` gates WHEN its slot renders; it does not hand the value in.
 * Reading `slotProps[key]` looks right and renders an empty strip forever -
 * the same trap already documented on the stats above.
 */
function stripSegments(key: string): StatSegment[] {
    return ((page.props as Record<string, any>)[`strip_${key}`] ?? []) as StatSegment[]
}

/**
 * HIDE UNMOUNTS. Collapse is local to ChartCard (`v-if` on the body). Hide
 * uses `v-if` via `visibleCharts`, so ChartCard / echarts never mount for a
 * hidden key. Inertia still fetches every deferred key in the `charts` group,
 * so the cookie `panel_dashboard_hidden` lets PHP omit those props on the
 * next visit.
 */
const hiddenWidgets = useColumnVisibility(DASHBOARD_HIDDEN_STORAGE_KEY)
const extraLabels = ref<Record<string, string>>({})
const HIDDEN_COOKIE = 'panel_dashboard_hidden'

function writeHiddenCookie(ids: Iterable<string>) {
    if (typeof document === 'undefined') {
        return
    }

    document.cookie = `${HIDDEN_COOKIE}=${encodeURIComponent(JSON.stringify([...ids]))};path=/;max-age=31536000;SameSite=Lax`
}

watch(
    hiddenWidgets.hidden,
    (ids) => writeHiddenCookie(ids),
    { deep: true, immediate: true },
)

function hideWidget(id: string, label?: string) {
    if (label) {
        extraLabels.value = { ...extraLabels.value, [id]: label }
    }

    hiddenWidgets.hide(id)
    writeHiddenCookie(hiddenWidgets.hidden.value)
}

const dashboardHide: DashboardHide = {
    hidden: hiddenWidgets.hidden,
    hide: hideWidget,
    show: hiddenWidgets.show,
    register: (id, label) => {
        extraLabels.value = { ...extraLabels.value, [id]: label }
    },
    labels: extraLabels,
}

provide(DASHBOARD_HIDE_KEY, dashboardHide)

const hiddenOpen = ref(false)
const selectedHidden = ref<Set<string>>(new Set())

function toggleHiddenSelection(id: string) {
    const next = new Set(selectedHidden.value)

    if (next.has(id)) {
        next.delete(id)
    } else {
        next.add(id)
    }

    selectedHidden.value = next
}

function restoreSelectedHidden() {
    const restored: string[] = []

    for (const id of selectedHidden.value) {
        hiddenWidgets.show(id)
        restored.push(id)
    }

    selectedHidden.value = new Set()
    writeHiddenCookie(hiddenWidgets.hidden.value)

    const missing = restored.filter(
        (id) => (page.props as Record<string, unknown>)[`chart_${id}`] === undefined,
    )

    if (missing.length) {
        router.reload()
    }
}

function restoreAllHidden() {
    hiddenWidgets.reset()
    selectedHidden.value = new Set()
    hiddenOpen.value = false
    writeHiddenCookie([])
    router.reload()
}

const visibleCharts = computed(() => {
    const visible = props.charts.filter((chart) => !hiddenWidgets.hidden.value.has(chart.key))

    if (!props.userDashboards) {
        return visible
    }

    const order = props.dashboardLayout?.chartOrder ?? []

    if (order.length === 0) {
        return visible
    }

    const byKey = new Map(visible.map((chart) => [chart.key, chart]))
    const ordered: typeof visible = []

    for (const key of order) {
        const chart = byKey.get(key)

        if (chart) {
            ordered.push(chart)
            byKey.delete(key)
        }
    }

    for (const chart of byKey.values()) {
        ordered.push(chart)
    }

    return ordered
})

const chartDragKey = ref<string | null>(null)

function onChartDragStart(key: string, event: DragEvent) {
    if (!props.userDashboards) {
        event.preventDefault()
        return
    }

    chartDragKey.value = key
    event.dataTransfer?.setData('text/plain', key)

    if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move'
    }
}

function onChartDragEnd() {
    chartDragKey.value = null
}

async function onChartDrop(targetKey: string, event: DragEvent) {
    event.preventDefault()

    const from = chartDragKey.value
    chartDragKey.value = null

    if (!props.userDashboards || !from || from === targetKey) {
        return
    }

    const keys = visibleCharts.value.map((chart) => chart.key)
    const fromIndex = keys.indexOf(from)
    const toIndex = keys.indexOf(targetKey)

    if (fromIndex < 0 || toIndex < 0) {
        return
    }

    keys.splice(fromIndex, 1)
    keys.splice(toIndex, 0, from)

    const href = props.prefix ? `/${props.prefix}/settings/appearance` : '/settings/appearance'

    try {
        await fetch(href, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN':
                    (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null)
                        ?.content ?? '',
            },
            credentials: 'same-origin',
            body: JSON.stringify({ dashboardLayout: { chartOrder: keys } }),
        })

        router.reload({ only: ['dashboardLayout', 'charts'] })
    } catch {
        // Keep the previous order on failure.
    }
}

/**
 * Independent column tracks from `lg` up. Below that, one stack in
 * declaration order. Round-robin assignment (not a shared CSS-grid row)
 * is what lets a collapsed card give its space to the widget under it.
 */
const wideLayout = useMediaQuery('(min-width: 1024px)')
const chartBands = computed(() =>
    packWidgetColumns(visibleCharts.value, wideLayout.value ? 2 : 1),
)

const hiddenEntries = computed(() => {
    const entries: { id: string; label: string }[] = []

    for (const chart of props.charts) {
        if (hiddenWidgets.hidden.value.has(chart.key)) {
            entries.push({ id: chart.key, label: chart.label })
        }
    }

    for (const [id, label] of Object.entries(extraLabels.value)) {
        if (hiddenWidgets.hidden.value.has(id) && !entries.some((entry) => entry.id === id)) {
            entries.push({ id, label })
        }
    }

    return entries
})
</script>

<template>
    <Head :title="heading" />

    <div class="flex w-full min-w-0 flex-col gap-4 p-3 sm:p-4">
        <!--
            ABOVE EVERYTHING, because a notice below the fold is a notice nobody
            read - which is exactly what the dedicated Announcements page turned
            out to be.
        -->
        <AnnouncementBanners :announcements="announcements" :prefix="prefix" />

        <PkBoundary v-if="'onboarding' in page.props && onboarding.length" label="Get started">
            <SetupChecklist
                :items="onboarding"
                variant="onboarding"
                heading="Get started"
                skip-label="Skip remaining"
                :link-component="InertiaLink"
                @skip="skipOnboarding"
            />
        </PkBoundary>

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

            <div
                v-if="filterDimensions.length || charts.length || hiddenEntries.length"
                class="flex items-center gap-2"
            >
                <button
                    v-if="hiddenEntries.length"
                    type="button"
                    class="relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
                    aria-label="Hidden widgets"
                    @click="hiddenOpen = true"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="size-4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('eye-off')" />
                    </svg>
                    Hidden widgets
                    <span
                        class="ml-0.5 rounded-full bg-muted px-1.5 text-[10px] font-semibold"
                    >
                        {{ hiddenEntries.length }}
                    </span>
                </button>
                <button
                    v-if="filters.active"
                    type="button"
                    class="text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
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

        <PkSlideover
            :open="hiddenOpen"
            title="Hidden widgets"
            description="Restore cards you hid from this dashboard"
            width="w-[22rem]"
            @close="hiddenOpen = false"
        >
            <div class="flex flex-col gap-1 p-4">
                <label
                    v-for="entry in hiddenEntries"
                    :key="entry.id"
                    class="hover:bg-muted/60 flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm"
                >
                    <input
                        type="checkbox"
                        class="size-4 accent-primary"
                        :checked="selectedHidden.has(entry.id)"
                        @change="toggleHiddenSelection(entry.id)"
                    />
                    <span class="min-w-0 truncate">{{ entry.label }}</span>
                </label>
            </div>
            <template #footer>
                <button
                    type="button"
                    class="rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                    @click="restoreAllHidden"
                >
                    Restore all
                </button>
                <button
                    type="button"
                    class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                    :disabled="selectedHidden.size === 0"
                    @click="restoreSelectedHidden"
                >
                    Restore selected
                </button>
            </template>
        </PkSlideover>

        <EmptyGrantsNotice v-if="emptyGrants" />
        <p v-else-if="!hasAnything" class="text-sm text-muted-foreground font-normal">
            This dashboard has no widgets yet. Declare them in <code>stats()</code> and
            <code>charts()</code> on the page class, or
            <code>discoverWidgets(app_path('Panel/Widgets'))</code>.
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

        <!--
            ADDITIONAL STRIPS - `DashboardPage::strips()`.

            THE SAME COMPONENT, RENDERED AGAIN. A second row of windows over
            different figures is not a different kind of thing, so it is not a
            different component - and per-segment `sensitive` keeps working
            inside each because nothing here knows or cares about it.

            ONE `PkBoundary` AND ONE `Deferred` EACH, so a strip that throws or
            that is slow costs only its own row.

            THE PLACEHOLDER IS GENERIC HERE. The first strip knows its four
            window labels ahead of time; these are declared by the application,
            so the loading state carries the row's shape without pretending to
            know its wording.
        -->
        <PkBoundary
            v-for="extra in extraStrips"
            :key="extra.key"
            :label="extra.label ?? 'A summary strip'"
        >
            <Deferred :data="`strip_${extra.key}`">
                <template #fallback>
                    <StatStrip :segments="STRIP_PLACEHOLDER" loading />
                </template>

                <template #default>
                    <StatStrip :segments="stripSegments(extra.key)" />
                </template>
            </Deferred>
        </PkBoundary>

        <!--
            ONE `Deferred` FOR THE WHOLE ROW. Per-card deferral is right for
            tiles that land independently and wrong for a joined strip: the
            divider grid would reflow as each cell arrived.
        -->
        <PkBoundary v-if="widgets.length" label="Statistics">
            <Deferred :data="statKeys">
                <template #fallback>
                    <StatStrip
                        :segments="widgets.map((w) => ({ key: w.key, label: w.label, value: '', sensitive: false }))"
                        :columns="statColumns"
                        :maskable="false"
                        loading
                    />
                </template>

                <template #default>
                    <StatStrip :segments="statSegments" :columns="statColumns" :maskable="false" />
                </template>
            </Deferred>
        </PkBoundary>

        <div
            v-if="visibleCharts.length || $slots['before-charts'] || (shortcuts?.catalog?.length ?? 0) > 0"
            class="flex flex-col gap-3"
            data-slot="dashboard-charts"
        >
            <slot name="before-charts">
                <DashboardShortcuts
                    v-if="shortcuts?.catalog?.length"
                    :catalog="shortcuts.catalog"
                    :defaults="shortcuts.defaults ?? []"
                    :storage-key="shortcuts.storageKey ?? 'panel.dashboard.shortcuts'"
                />
            </slot>

            <!--
                COLUMN TRACKS, NOT A SHARED-ROW GRID. Each track is a flex
                column so a collapsed header frees space for the widget below
                it. Neighbours in the other track keep their own height.
            -->
            <template v-for="(band, bandIndex) in chartBands" :key="bandIndex">
                <div
                    v-if="band.type === 'wide'"
                    :draggable="userDashboards"
                    :class="chartDragKey === band.item.key ? 'opacity-40' : ''"
                    @dragstart="onChartDragStart(band.item.key, $event)"
                    @dragend="onChartDragEnd"
                    @dragover.prevent
                    @drop="onChartDrop(band.item.key, $event)"
                >
                    <p
                        v-if="userDashboards"
                        class="text-muted-foreground mb-1 text-[10px] uppercase tracking-wide"
                    >
                        Drag to rearrange
                    </p>
                    <DashboardChartPane
                        :chart="band.item"
                        :series="series(band.item.key)"
                        :periods="periodsFor(band.item)"
                        :period="periods[band.item.key]"
                        :comparison="comparison[periods[band.item.key]]"
                        :body-height="bodyHeight(band.item)"
                        @update:period="(value: string) => setPeriod(band.item.key, value)"
                        @hide="hideWidget(band.item.key, band.item.label)"
                    />
                </div>
                <div
                    v-else
                    class="flex flex-col items-start gap-3 lg:flex-row"
                    data-slot="dashboard-widget-columns"
                >
                    <div
                        v-for="(column, columnIndex) in band.columns"
                        :key="columnIndex"
                        class="flex w-full min-w-0 flex-1 flex-col gap-3"
                    >
                        <div
                            v-for="chart in column"
                            :key="chart.key"
                            :draggable="userDashboards"
                            :class="chartDragKey === chart.key ? 'opacity-40' : ''"
                            @dragstart="onChartDragStart(chart.key, $event)"
                            @dragend="onChartDragEnd"
                            @dragover.prevent
                            @drop="onChartDrop(chart.key, $event)"
                        >
                            <DashboardChartPane
                                :chart="chart"
                                :series="series(chart.key)"
                                :periods="periodsFor(chart)"
                                :period="periods[chart.key]"
                                :comparison="comparison[periods[chart.key]]"
                                :body-height="bodyHeight(chart)"
                                @update:period="(value: string) => setPeriod(chart.key, value)"
                                @hide="hideWidget(chart.key, chart.label)"
                            />
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div v-if="tables.length" class="flex flex-col gap-3" data-slot="dashboard-tables">
            <DashboardTablePane
                v-for="table in tables"
                :key="table.key"
                :table="table"
                :data-key="`table_${table.key}`"
            />
        </div>
    </div>
</template>
