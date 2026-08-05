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

/**
 * A point positioned by two measured values rather than by a category.
 *
 * SEPARATE FROM `ChartPoint`, WHICH IS NOT THE SAME THING. A `ChartPoint` has
 * a `label` and a `value`: the x position is the label's turn in the list, so
 * the spacing between points carries no meaning. Here BOTH axes are measured,
 * so the distance between two points is information - which is the entire
 * reason to reach for a scatter over a line.
 */
export interface ChartXYPoint {
    x: number
    y: number
    /**
     * A third dimension, drawn as the mark's area.
     *
     * ANY POINT CARRYING THIS MAKES IT A BUBBLE CHART, the same way a
     * `PieChart` becomes a doughnut - one component, because they are one plot
     * with a size channel added rather than two different drawings.
     *
     * AREA, NOT RADIUS. Doubling the radius quadruples the ink, so a reader
     * comparing marks by eye reads twice the value as four times. Scaling by
     * area is the difference between a chart and a misleading one.
     */
    r?: number
    /** What this point is - a customer, a router, a month. Shown on hover. */
    label?: string
}

export interface ChartXYSeries {
    name: string
    points: ChartXYPoint[]
    /** A CSS colour. Defaults to the theme palette by index. */
    color?: string
}
