import type { FilterSchema, FilterIndicator, GroupSchema } from './types';
type __VLS_Props = {
    search: string;
    searchPlaceholder?: string;
    searchHint?: string;
    filterSchema: FilterSchema[];
    filters: Record<string, unknown>;
    columns: {
        key: string;
        label: string;
        locked?: boolean;
    }[];
    hidden: Set<string>;
    loading?: boolean;
    /**
     * Whether this table can be reordered at all. When true, the toolbar
     * offers the reorder MODE as an icon beside Filters and Columns -
     * DESIGN_RULES rule 3: a control that toggles how the table behaves
     * lives with the table, as an icon with a pressed state, never as a
     * word in the page header among actions that navigate and commit.
     */
    reorderable?: boolean;
    reordering?: boolean;
    /**
     * Groupings the operator may pick. Empty means no picker: a table that
     * only ever clusters one way should not grow a control that does nothing.
     */
    groups?: GroupSchema[];
    /** The grouping currently applied, or null for none. */
    groupBy?: GroupSchema | null;
    /** Applied-filter chips from the server. */
    indicators?: FilterIndicator[];
    /**
     * Index layout modes the operator may toggle. Empty means table only
     * (no control). Opt-in via `Table::layouts(['table', 'cards'])`.
     */
    layouts?: Array<'table' | 'cards'>;
    /** Current layout mode. */
    layout?: 'table' | 'cards';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    clear: () => any;
    "clear-filters": () => any;
    group: (key: string | null) => any;
    layout: (mode: "table" | "cards") => any;
    "update:search": (value: string) => any;
    "apply-filters": (filters: Record<string, unknown>) => any;
    "apply-columns": (hidden: string[]) => any;
    "toggle-reorder": () => any;
    "clear-filter": (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: (() => any) | undefined;
    "onClear-filters"?: (() => any) | undefined;
    onGroup?: ((key: string | null) => any) | undefined;
    onLayout?: ((mode: "table" | "cards") => any) | undefined;
    "onUpdate:search"?: ((value: string) => any) | undefined;
    "onApply-filters"?: ((filters: Record<string, unknown>) => any) | undefined;
    "onApply-columns"?: ((hidden: string[]) => any) | undefined;
    "onToggle-reorder"?: (() => any) | undefined;
    "onClear-filter"?: ((key: string) => any) | undefined;
}>, {
    groupBy: GroupSchema | null;
    reordering: boolean;
    loading: boolean;
    searchPlaceholder: string;
    reorderable: boolean;
    groups: GroupSchema[];
    indicators: FilterIndicator[];
    layouts: Array<"table" | "cards">;
    layout: "table" | "cards";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
