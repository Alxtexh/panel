/**
 * Apply a persisted dashboard layout onto declared widgets.
 *
 * Ids are `kind:key` (`stat:users`, `chart:sessions`, `table:recent`). Legacy
 * `chartOrder` is folded by the server into `widgets` before the page props
 * arrive; this helper only consumes the normalized shape.
 */

export type DashboardWidgetKind = 'stat' | 'chart' | 'table'

export type DashboardLayoutEntry = {
    id: string
    span: number
    hidden: boolean
}

export type DashboardLayout = {
    widgets: DashboardLayoutEntry[]
}

export type LayoutItem<T extends { key: string; span?: number } = { key: string; span?: number }> =
    {
        id: string
        kind: DashboardWidgetKind
        key: string
        span: number
        hidden: boolean
        source: T
    }

export function widgetId(kind: DashboardWidgetKind, key: string): string {
    return `${kind}:${key}`
}

export function parseWidgetId(id: string): { kind: DashboardWidgetKind; key: string } | null {
    const match = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(id)

    if (!match) {
        return null
    }

    return {
        kind: match[1].toLowerCase() as DashboardWidgetKind,
        key: match[2],
    }
}

function clampSpan(span: number | undefined, fallback = 1): number {
    const value = span ?? fallback

    return value >= 2 ? 2 : 1
}

/**
 * Build one ordered list across kinds, following the saved widget order when
 * present, then appending leftovers in declaration order (stats, charts, tables).
 */
export function mergeLayoutItems<
    S extends { key: string; span?: number },
    C extends { key: string; span?: number },
    T extends { key: string; span?: number },
>(
    stats: readonly S[],
    charts: readonly C[],
    tables: readonly T[],
    layout: DashboardLayout | null | undefined,
): Array<LayoutItem<S | C | T>> {
    type AnySource = S | C | T

    const catalogs: Array<{ kind: DashboardWidgetKind; items: readonly AnySource[] }> = [
        { kind: 'stat', items: stats },
        { kind: 'chart', items: charts },
        { kind: 'table', items: tables },
    ]

    const byId = new Map<string, { kind: DashboardWidgetKind; source: AnySource }>()

    for (const catalog of catalogs) {
        for (const source of catalog.items) {
            byId.set(widgetId(catalog.kind, source.key), {
                kind: catalog.kind,
                source,
            })
        }
    }

    const ordered: Array<LayoutItem<AnySource>> = []
    const used = new Set<string>()

    for (const entry of layout?.widgets ?? []) {
        const id = entry.id.toLowerCase()
        const found = byId.get(id)

        if (!found) {
            continue
        }

        used.add(id)
        ordered.push({
            id,
            kind: found.kind,
            key: found.source.key,
            span: clampSpan(entry.span),
            hidden: Boolean(entry.hidden),
            source: found.source,
        })
    }

    for (const catalog of catalogs) {
        for (const source of catalog.items) {
            const id = widgetId(catalog.kind, source.key)

            if (used.has(id)) {
                continue
            }

            ordered.push({
                id,
                kind: catalog.kind,
                key: source.key,
                span: clampSpan(source.span),
                hidden: false,
                source,
            })
        }
    }

    return ordered
}

export function toPersistedLayout(
    items: readonly { id: string; span: number; hidden: boolean }[],
): DashboardLayout {
    return {
        widgets: items.map((item) => ({
            id: item.id.toLowerCase(),
            span: clampSpan(item.span),
            hidden: Boolean(item.hidden),
        })),
    }
}
