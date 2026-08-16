/**
 * Pack dashboard widgets into independent column tracks.
 *
 * A two-column CSS grid shares rows: collapsing the left card leaves a hole
 * because the right neighbour still defines the row height. Assigning widgets
 * to flex columns (round-robin, declaration order) means a collapse only
 * shortens that column, and widgets below it slide up immediately.
 *
 * `span >= 2` widgets flush the current column batch and sit on their own
 * full-width band, matching `lg:col-span-2` without stretching siblings.
 */
export type WidgetColumnBand<T> =
    | { type: 'wide'; item: T }
    | { type: 'columns'; columns: T[][] }

export function packWidgetColumns<T extends { span?: number }>(
    items: readonly T[],
    columnCount: number,
): WidgetColumnBand<T>[] {
    const count = Math.max(1, Math.floor(columnCount))

    if (items.length === 0) {
        return []
    }

    if (count === 1) {
        return [{ type: 'columns', columns: [[...items]] }]
    }

    const bands: WidgetColumnBand<T>[] = []
    let pending: T[] = []

    const flush = () => {
        if (pending.length === 0) {
            return
        }

        const columns: T[][] = Array.from({ length: count }, () => [])

        pending.forEach((item, index) => {
            columns[index % count].push(item)
        })

        bands.push({ type: 'columns', columns })
        pending = []
    }

    for (const item of items) {
        if ((item.span ?? 1) >= 2) {
            flush()
            bands.push({ type: 'wide', item })
        } else {
            pending.push(item)
        }
    }

    flush()

    return bands
}
