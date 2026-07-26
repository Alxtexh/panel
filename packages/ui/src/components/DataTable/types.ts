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
    key: string
    label: string
    sortable?: boolean
    /** ORDER BY key sent to the server. Defaults to `key`. */
    sortKey?: string
    /** Excluded from the column-visibility menu; always rendered. */
    locked?: boolean
    /** Renders an inline copy button revealed on row hover. */
    copyable?: boolean
    /** Extra classes for the cell. */
    cellClass?: string
}

/** A filter as described by the server's filterSchema prop. */
export interface FilterSchema {
    key: string
    label: string
    type: 'select' | 'boolean'
    options?: string[]
    trueLabel?: string
    falseLabel?: string
}

export type SortDirection = 'asc' | 'desc'
