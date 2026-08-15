import type { CatalogItem } from './CatalogCard.vue'

export interface CatalogFacetOption {
    value: string
    label: string
}

export interface CatalogRangeValue {
    min: number | null
    max: number | null
}

export interface CatalogFacet {
    key: string
    label?: string
    /** Chip toggles, or a from/to pair for numeric facts (rent, beds, price). */
    kind?: 'chips' | 'range'
    options?: CatalogFacetOption[]
}

export interface CatalogFilters {
    query: string
    selected: Record<string, string | null>
    ranges: Record<string, CatalogRangeValue>
}

export function emptyCatalogFilters(): CatalogFilters {
    return { query: '', selected: {}, ranges: {} }
}

export function catalogItemMetric(item: CatalogItem, key: string): number | null {
    const metric = item.metrics?.[key]

    if (typeof metric === 'number' && Number.isFinite(metric)) {
        return metric
    }

    const raw = item.facets?.[key]

    if (raw === undefined || raw === null || raw === '') {
        return null
    }

    const parsed = Number(raw)

    return Number.isFinite(parsed) ? parsed : null
}

function inRange(value: number | null, range: CatalogRangeValue | undefined): boolean {
    if (!range || (range.min === null && range.max === null)) {
        return true
    }

    if (value === null) {
        return false
    }

    if (range.min !== null && value < range.min) {
        return false
    }

    if (range.max !== null && value > range.max) {
        return false
    }

    return true
}

/** Whether one tile matches the toolbar's search string, chips, and ranges. */
export function matchCatalogItem(item: CatalogItem, filters: CatalogFilters): boolean {
    const query = filters.query.trim().toLowerCase()

    if (query !== '') {
        const hay = [
            item.key,
            item.sku ?? '',
            item.label,
            item.caption ?? '',
            ...(item.facts ?? []),
        ]
            .join(' ')
            .toLowerCase()

        if (!hay.includes(query)) {
            return false
        }
    }

    for (const [key, value] of Object.entries(filters.selected ?? {})) {
        if (!value) {
            continue
        }

        if ((item.facets?.[key] ?? null) !== value) {
            return false
        }
    }

    for (const [key, range] of Object.entries(filters.ranges ?? {})) {
        if (!inRange(catalogItemMetric(item, key), range)) {
            return false
        }
    }

    return true
}

/**
 * First item whose SKU or key equals the scan string.
 *
 * Used by a till to treat Enter as a barcode scan. Partial search still
 * filters the shelf; this is only the exact hit.
 */
export function findExactSku(items: CatalogItem[], query: string): CatalogItem | null {
    const needle = query.trim().toLowerCase()

    if (needle === '') {
        return null
    }

    return (
        items.find((item) => {
            const sku = (item.sku ?? '').trim().toLowerCase()
            const key = item.key.trim().toLowerCase()

            return sku === needle || key === needle
        }) ?? null
    )
}

/** True when search, a chip, or a range bound is set. */
export function catalogFiltersActive(filters: CatalogFilters): boolean {
    if (filters.query.trim() !== '') {
        return true
    }

    if (Object.values(filters.selected ?? {}).some(Boolean)) {
        return true
    }

    return Object.values(filters.ranges ?? {}).some(
        (range) => range.min !== null || range.max !== null,
    )
}
