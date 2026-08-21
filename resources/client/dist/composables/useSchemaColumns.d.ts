import type { Ref } from 'vue';
import type { TableColumn } from '../components/DataTable/types';
/**
 * Turns the server's schema columns into DataTable columns.
 *
 * This is where SEMANTIC values become presentation. The schema says
 * `muted: true`, `mono: true`, `type: 'badge'`, `color: 'success'`; this file
 * decides what any of that looks like.
 *
 * The direction of that dependency is the point (antipatterns §6.1): PHP
 * describes intent, the client owns presentation. A CSS class authored in PHP
 * is invisible to the CSS scanner and gets purged silently - and *partially*,
 * so one class of a pair survives and the element renders wrong at some widths
 * with no error anywhere. That exact bug has already happened twice in this
 * project's history.
 */
export interface SchemaColumn {
    key: string;
    label: string;
    type: 'text' | 'badge' | 'date' | 'datetime' | 'icon' | 'image' | 'toggle' | 'select' | 'colour' | 'checkbox' | 'money' | 'code' | 'keyvalue' | 'tags' | 'rating';
    sortable?: boolean;
    sortKey?: string;
    copyable?: boolean;
    locked?: boolean;
    muted?: boolean;
    mono?: boolean;
    align?: 'right' | 'center';
    transform?: 'upper' | 'lower';
    prefix?: string;
    suffix?: string;
    colors?: Record<string, string>;
    defaultColor?: string;
    /** Set when the column sits under ColumnGroup::make(). */
    group?: string;
    currency?: string;
    currencyColumn?: string;
    major?: boolean;
    icons?: Record<string, string>;
    labels?: Record<string, string>;
    defaultIcon?: string;
    rounded?: boolean;
    size?: 'sm' | 'md' | 'lg';
    fallback?: 'initials' | 'icon' | 'none';
    fallbackFrom?: string;
    editable?: boolean;
    confirmation?: string | null;
    options?: Record<string, string>;
    onLabel?: string | null;
    offLabel?: string | null;
    /** Badge-only: a popover picker. Off unless the column opted in. */
    resolver?: boolean;
    showValue?: boolean;
    trueLabel?: string | null;
    falseLabel?: string | null;
    limit?: number | null;
    separator?: string;
    max?: number;
}
/**
 * Semantic intent to badge variant. The only place the mapping exists.
 *
 * `success`/`warning` POINT AT THEIR OWN FIXED COLOURS, not at the theme's
 * `default`/`secondary` variants. Those two are driven by `--primary` and
 * `--secondary`, which a tenant's brand colour rewrites - so a status column
 * declaring `success` used to render in whatever accent the panel happened to
 * be wearing, and "online" changed colour depending on who branded the panel.
 * `danger` already pointed at `destructive`, which was never theme-derived;
 * this brings the other two in line with it rather than introducing a new
 * idea.
 */
export declare const BADGE_VARIANTS: Record<string, string>;
/**
 * Whether a badge column's value deserves a pill at all.
 *
 * AN EMPTY BADGE COLUMN IS AN EM DASH, NOT A BADGE. A nullable enum -
 * roadmap 5.1's custom `select` fields were the first, but any nullable
 * badge column qualifies - once rendered `String(null)` inside a
 * `capitalize` pill, so an unanswered question read as a value called
 * "Null". This is the ONE place that decision lives; the pages branch on
 * it rather than restating the three empty shapes inline.
 */
export declare function hasBadgeValue(value: unknown): boolean;
export declare function useSchemaColumns(schemaColumns: Ref<SchemaColumn[]>): {
    columns: import("vue").ComputedRef<TableColumn[]>;
    byKey: import("vue").ComputedRef<{
        [k: string]: SchemaColumn;
    }>;
    badgeVariant: (key: string, value: unknown) => string;
};
