/**
 * Shared chart shapes.
 *
 * EXTRACTED so BarChart does not import from LineChart. A type-only import
 * between two sibling components still creates a module edge, and Vue SFCs
 * compile to modules with side effects - LineChart's ResizeObserver setup would
 * be pulled into every bundle that only wanted bars.
 */
export interface ChartPoint {
    label: string
    value: number
}

export interface ChartSeries {
    name: string
    points: ChartPoint[]
    /** A CSS colour. Defaults to the theme palette by index. */
    color?: string
    /**
     * Which vertical scale this series is measured against.
     *
     * The multi-axis case: sessions in the thousands next to a percentage would
     * flatten the percentage into the baseline on a shared scale.
     */
    axis?: 'left' | 'right'
    /** Line style variations - the reference's "Line Styles" demo. */
    dashed?: boolean
    stepped?: boolean
    /** Force the area fill on or off for this series specifically. */
    filled?: boolean
}
