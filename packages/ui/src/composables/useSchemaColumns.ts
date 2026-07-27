import { computed, type Ref } from 'vue'
import type { TableColumn } from '../components/DataTable/types'

/**
 * Turns the server's schema columns into DataTable columns.
 *
 * This is where SEMANTIC values become presentation. The schema says
 * `muted: true`, `mono: true`, `type: 'badge'`, `color: 'success'`; this file
 * decides what any of that looks like.
 *
 * The direction of that dependency is the point (antipatterns §6.1): PHP
 * describes intent, the client owns presentation. A CSS class authored in PHP
 * is invisible to the CSS scanner and gets purged silently — and *partially*,
 * so one class of a pair survives and the element renders wrong at some widths
 * with no error anywhere. That exact bug has already happened twice in this
 * project's history.
 */
export interface SchemaColumn {
    key: string
    label: string
    type: 'text' | 'badge' | 'date' | 'datetime' | 'icon' | 'image' | 'toggle' | 'select'
    sortable?: boolean
    sortKey?: string
    copyable?: boolean
    locked?: boolean
    muted?: boolean
    mono?: boolean
    align?: 'right' | 'center'
    transform?: 'upper' | 'lower'
    prefix?: string
    suffix?: string
    colors?: Record<string, string>
    defaultColor?: string

    /* icon */
    icons?: Record<string, string>
    labels?: Record<string, string>
    defaultIcon?: string

    /* image */
    rounded?: boolean
    size?: 'sm' | 'md' | 'lg'
    fallback?: 'initials' | 'icon' | 'none'
    fallbackFrom?: string

    /* toggle and select — writable in place */
    editable?: boolean
    confirmation?: string | null
    options?: Record<string, string>
    onLabel?: string | null
    offLabel?: string | null
}

/** Semantic intent to badge variant. The only place the mapping exists. */
export const BADGE_VARIANTS: Record<string, string> = {
    success: 'default',
    danger: 'destructive',
    warning: 'secondary',
    neutral: 'outline',
}

function cellClassFor(column: SchemaColumn): string {
    const classes: string[] = []

    /*
     * A control is not text. Applying `uppercase` or `font-mono` to a cell
     * holding a <select> restyles the control itself — the options render in
     * caps and the width jumps — so the text treatments stop at text.
     */
    if (column.type === 'toggle' || column.type === 'select' || column.type === 'image') {
        if (column.align === 'right') classes.push('text-right')
        if (column.align === 'center') classes.push('text-center')

        return classes.join(' ')
    }

    if (column.key === 'name') classes.push('font-medium')
    if (column.mono) classes.push('font-mono text-xs')
    if (column.muted) classes.push('text-muted-foreground')
    if (column.transform === 'upper') classes.push('uppercase')
    if (column.transform === 'lower') classes.push('lowercase')
    if (column.align === 'right') classes.push('text-right')
    if (column.align === 'center') classes.push('text-center')

    return classes.join(' ')
}

export function useSchemaColumns(schemaColumns: Ref<SchemaColumn[]>) {
    const columns = computed<TableColumn[]>(() =>
        schemaColumns.value.map((c) => ({
            key: c.key,
            label: c.label,
            sortable: c.sortable,
            sortKey: c.sortKey,
            locked: c.locked,
            copyable: c.copyable,
            cellClass: cellClassFor(c),
        })),
    )

    const byKey = computed(() => Object.fromEntries(schemaColumns.value.map((c) => [c.key, c])))

    function badgeVariant(key: string, value: unknown): string {
        const column = byKey.value[key]
        if (!column) return 'outline'

        // Booleans arrive as true/false but colour maps are keyed by string.
        const lookup = typeof value === 'boolean' ? (value ? '1' : '') : String(value)
        const intent = column.colors?.[lookup] ?? column.defaultColor ?? 'neutral'

        return BADGE_VARIANTS[intent] ?? 'outline'
    }

    return { columns, byKey, badgeVariant }
}
