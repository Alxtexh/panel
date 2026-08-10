import type { SortDirection, TableColumn } from './types';
type __VLS_Props = {
    columns: TableColumn[];
    rows: Record<string, any>[];
    /**
     * Cluster rows under headings, by this row key.
     *
     * The rows arrive already ORDERED by it - grouping is an ordering, not
     * an aggregation - so all that happens here is inserting a heading
     * wherever the value changes. Nothing is re-sorted or bucketed on the
     * client, which is what keeps this free on a page of any size.
     */
    groupBy?: {
        key: string;
        label: string;
    } | null;
    /**
     * Whether the table is CURRENTLY in reorder mode.
     *
     * A MODE, NOT A PERMANENT AFFORDANCE. Handles on every row all the time
     * are clutter on a table nobody reorders daily, and they turn an
     * ordinary list into something that looks half-editable. Filament gets
     * this right: reordering is entered deliberately, and while you are in
     * it the table stops being a list you read and becomes a thing you
     * arrange.
     *
     * The PAGE owns the flag, because entering the mode also suppresses
     * selection and sorting - decisions that belong with the toolbar rather
     * than with the rows.
     */
    reordering?: boolean;
    /**
     * Whether a click on the row body opens the record.
     *
     * The PAGE decides what "opens" means and whether the operator may -
     * this component only reports that a row was clicked somewhere that was
     * not another control. Declared server-side per resource; see
     * `Table::rowClick()`.
     */
    rowClickable?: boolean;
    rowKey?: string;
    sort?: string;
    direction?: SortDirection;
    loading?: boolean;
    hidden?: Set<string>;
    selectable?: boolean;
    /** Ids selected on the current page. */
    selected?: Set<string | number>;
    /** Distinguishes "nothing here" from "nothing matches your filters". */
    filtered?: boolean;
    emptyTitle?: string;
    emptyHint?: string;
    /**
     * Footer aggregate DEFINITIONS, keyed by column key - how to render.
     * Structure travels with the schema; the values arrive separately.
     */
    summaries?: Record<string, {
        kind: string;
        label: string | null;
        prefix: string | null;
        suffix: string | null;
        divideBy: number | null;
        decimals: number;
    }> | null;
    /** The computed values, once the deferred prop lands. */
    summaryValues?: Record<string, number | null> | null;
    /**
     * Whether the table draws its own border and rounding.
     *
     * False inside a `TableShell`, which owns the ONE border around
     * tabs, toolbar, rows and pagination together (DESIGN_RULES rule
     * 4) - a second border here would draw a box inside the box. True
     * by default so a bare table dropped anywhere still looks finished.
     */
    framed?: boolean;
};
declare var __VLS_2: `cell:${string}`, __VLS_3: {
    row: Record<string, any>;
    value: any;
    column: TableColumn;
}, __VLS_5: {
    row: Record<string, any>;
}, __VLS_7: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
} & {
    actions?: (props: typeof __VLS_5) => any;
} & {
    'clear-filters'?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    sort: (key: string) => any;
    reorder: (ids: (string | number)[]) => any;
    "toggle-row": (id: string | number) => any;
    "toggle-page": (select: boolean) => any;
    "row-click": (row: Record<string, unknown>) => any;
    "row-contextmenu": (row: Record<string, unknown>, event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSort?: ((key: string) => any) | undefined;
    onReorder?: ((ids: (string | number)[]) => any) | undefined;
    "onToggle-row"?: ((id: string | number) => any) | undefined;
    "onToggle-page"?: ((select: boolean) => any) | undefined;
    "onRow-click"?: ((row: Record<string, unknown>) => any) | undefined;
    "onRow-contextmenu"?: ((row: Record<string, unknown>, event: MouseEvent) => any) | undefined;
}>, {
    rowKey: string;
    direction: SortDirection;
    loading: boolean;
    selectable: boolean;
    filtered: boolean;
    emptyTitle: string;
    summaries: Record<string, {
        kind: string;
        label: string | null;
        prefix: string | null;
        suffix: string | null;
        divideBy: number | null;
        decimals: number;
    }> | null;
    summaryValues: Record<string, number | null> | null;
    framed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
