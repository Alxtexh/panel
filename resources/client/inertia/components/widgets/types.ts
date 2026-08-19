/**
 * The shapes `WidgetSet` puts on the wire, named once.
 *
 * THEY WERE DECLARED INSIDE `PanelDashboard.vue`, which made the dashboard the
 * only screen that could describe a chart. `Resource::headerWidgets()` and
 * `Page::headerWidgets()` send the SAME payload from the same `WidgetSet`, so a
 * second host either redeclared these interfaces or typed its props `any` - and
 * `any` is how a chart gets fed a shape it does not understand and renders an em
 * dash with no error.
 *
 * `Chart` MIRRORS `ChartWidget::TYPES` ON THE PHP SIDE. The two are declarations
 * of one contract in two languages, and the failure when they disagree is
 * specific: `scatter` was exported as a component, missing from the PHP union
 * and missing from this one, so declaring a scatter chart threw in PHP and had
 * nothing to draw it with here. Adding a renderer means touching both.
 */
export interface Dataset {
    name: string
    points: { label: string; value: number }[]
    axis?: 'left' | 'right'
    dashed?: boolean
}

/** One row of a `table` chart - "CPU cores  4", optionally with a usage bar. */
export interface StatListBarSegment {
    label: string
    value: number
    /** Semantic, never a colour - the renderer owns what each tone looks like. */
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null
}

export interface StatListRow {
    key: string
    label: string
    value?: string
    /** A subsection label rather than a fact. */
    heading?: boolean
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null
    bar?: {
        segments: StatListBarSegment[]
        /** The denominator. Defaults to the sum of the segments. */
        total?: number | null
    } | null
}

/** One tile of a `catalog` chart, or one row of an `items` chart. */
export interface WidgetItem {
    key: string
    label: string
    caption?: string | null
    image?: string | null
    price?: string | null
    qty?: string | number | null
    amount?: string | null
    detail?: string | null
    status?: string | null
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null
    facts?: string[] | null
    facets?: Record<string, string> | null
    progress?: {
        value: number
        total?: number | null
        tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null
    } | null
}

export interface Series {
    points: { label: string; value: number }[]
    series: Dataset[] | null
    bars: Dataset[] | null
    lines: Dataset[] | null
    rows: StatListRow[] | null
    items: WidgetItem[] | null
    total: number | null
    trend: {
        direction: 'up' | 'down' | 'flat' | 'new'
        percentage: number | null
    } | null
    error: boolean
}

export interface Chart {
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
        | 'scatter'
        | 'bubble'
        | 'rankedBar'
        | 'heatmap'
        | 'segments'
        | 'table'
        | 'catalog'
        | 'items'
    span: number
    periods: { value: string; label: string }[] | null
    thresholds: { max: number; color: string }[] | null
    maxValue: number | null
    icon?: string | null
    /** Milliseconds. Null means do not poll. */
    poll?: number | null
    /**
     * Echo / Reverb channel from `->live()`. Preferred over poll when
     * `window.Echo` exists. Redis is not this field; it is the host's
     * cache / queue / broadcast backend.
     */
    live?: string | null
}

/**
 * A stat card's resolved value.
 *
 * SPELLED OUT RATHER THAN `unknown`, because `StatCard` types its `trend` and
 * `sparkline` props precisely and `unknown` is not assignable to them -
 * `vue-tsc` rejects it, which is the check doing its job.
 */
export interface StatValue {
    value: unknown
    error?: boolean
    trend?: { direction: 'flat' | 'up' | 'down' | 'new'; percentage: number | null } | null
    sparkline?: { label: string; value: number }[] | null
}

/** A stat widget's declaration, as `WidgetSet` serialises it. */
export interface StatDefinition {
    key: string
    label: string
    description?: string
    /** Milliseconds. Null means do not poll. */
    poll?: number | null
    /** Echo / Reverb channel from `->live()`. Preferred over poll when Echo exists. */
    live?: string | null
}

/**
 * The empty series a chart falls back to.
 *
 * A RESOLVED-LOOKING EMPTY rather than `undefined`, so every renderer below can
 * read `.points` without a guard. The deferred prop is genuinely absent on the
 * first paint of every chart, so this path is taken on every load rather than
 * only in an error.
 */
export function emptySeries(): Series {
    return {
        points: [],
        series: null,
        bars: null,
        lines: null,
        rows: null,
        items: null,
        total: null,
        trend: null,
        error: false,
    }
}

/**
 * Promote a single-dataset stepped chart to a series.
 *
 * A stepped chart arrives as `points`, so it has to become a series before the
 * flag has anywhere to live. Without this the type was accepted, the data
 * rendered, and the stepping silently did not happen - the worst kind of no-op.
 */
export function multiSeries(chart: Chart, resolved: Series): Dataset[] | undefined {
    const stepped = chart.type === 'steppedLine'

    const datasets =
        resolved.series ??
        (stepped && resolved.points.length ? [{ name: '', points: resolved.points }] : null)

    if (!datasets) {
        return undefined
    }

    return stepped ? datasets.map((d) => ({ ...d, stepped: true, filled: false })) : datasets
}
