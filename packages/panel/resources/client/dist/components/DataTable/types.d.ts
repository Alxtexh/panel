/**
 * Column definition for DataTable.
 *
 * `sortKey` exists because Phase 2 proved display key and ORDER BY column are
 * not the same thing: Plans shows a formatted `price` but must sort by
 * `price_cents`, or 12,000.00 orders before 900.00. An abstraction built from
 * Clients and Routers alone would have assumed one key and been wrong.
 */
export interface TableColumn {
    /** Property on the row, and the slot name (`cell:<key>`). */
    key: string;
    label: string;
    sortable?: boolean;
    /** ORDER BY key sent to the server. Defaults to `key`. */
    sortKey?: string;
    /** Excluded from the column-visibility menu; always rendered. */
    locked?: boolean;
    /** Renders an inline copy button revealed on row hover. */
    copyable?: boolean;
    /** Extra classes for the cell. */
    cellClass?: string;
}
/** A filter as described by the server's filterSchema prop. */
export interface FilterSchema {
    key: string;
    label: string;
    /**
     * `querybuilder` IS A NESTED RULE TREE, not a value.
     *
     * It was missing from this union, so the toolbar had no branch for it and
     * a resource declaring one rendered a label with nothing under it - a
     * working server half nobody could reach.
     */
    type: 'select' | 'boolean' | 'multiselect' | 'daterange' | 'numberrange' | 'querybuilder';
    /** Plain strings, or `{ value, label }` when options come from a relationship. */
    options?: Array<string | {
        value: string | number;
        label: string;
    }>;
    trueLabel?: string;
    falseLabel?: string;
    /** Date ranges only. Structure, so it ships with the cached schema. */
    presets?: Record<string, string>;
}
/** A grouping the operator may pick, from `Table::groups()`. */
export interface GroupSchema {
    key: string;
    label: string;
    collapsible?: boolean;
    date?: boolean;
    titlePrefixed?: boolean;
}
/** An applied-filter chip. Clearing it drops that filter's query parameter. */
export interface FilterIndicator {
    key: string;
    label: string;
    removable?: boolean;
}
export type SortDirection = 'asc' | 'desc';
