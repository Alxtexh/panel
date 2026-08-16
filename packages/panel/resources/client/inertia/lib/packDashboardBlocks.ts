/**
 * How `blocks` dashboard layout places charts.
 *
 * Same rule as `Alxtexh\Panel\Widgets\DashboardPacking`: first area/line
 * series is the full-width hero; everything else sits below it. Applied to
 * the currently visible list so hiding the hero promotes the next series.
 */
export const DASHBOARD_HERO_TYPES = ['area', 'line', 'steppedLine', 'multiAxis'] as const

export function packDashboardBlocks<T extends { key: string; type: string }>(
    charts: readonly T[],
): { hero: T | null; rest: T[] } {
    const heroIndex = charts.findIndex((chart) =>
        (DASHBOARD_HERO_TYPES as readonly string[]).includes(chart.type),
    )

    if (heroIndex === -1) {
        return { hero: null, rest: [...charts] }
    }

    return {
        hero: charts[heroIndex] ?? null,
        rest: charts.filter((_, index) => index !== heroIndex),
    }
}
