import type { CatalogItem } from './CatalogCard.vue';
export interface CatalogFacetOption {
    value: string;
    label: string;
}
export interface CatalogRangeValue {
    min: number | null;
    max: number | null;
}
export interface CatalogFacet {
    key: string;
    label?: string;
    /** Chip toggles, or a from/to pair for numeric facts (rent, beds, price). */
    kind?: 'chips' | 'range';
    options?: CatalogFacetOption[];
}
export interface CatalogFilters {
    query: string;
    selected: Record<string, string | null>;
    ranges: Record<string, CatalogRangeValue>;
}
export declare function emptyCatalogFilters(): CatalogFilters;
export declare function catalogItemMetric(item: CatalogItem, key: string): number | null;
/** Whether one tile matches the toolbar's search string, chips, and ranges. */
export declare function matchCatalogItem(item: CatalogItem, filters: CatalogFilters): boolean;
/**
 * First item whose SKU or key equals the scan string.
 *
 * Used by a till to treat Enter as a barcode scan. Partial search still
 * filters the shelf; this is only the exact hit.
 */
export declare function findExactSku(items: CatalogItem[], query: string): CatalogItem | null;
/** True when search, a chip, or a range bound is set. */
export declare function catalogFiltersActive(filters: CatalogFilters): boolean;
