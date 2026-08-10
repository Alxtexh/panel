import type { FilterSchema } from './types';
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
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    clear: () => any;
    "update:search": (value: string) => any;
    "apply-filters": (filters: Record<string, unknown>) => any;
    "apply-columns": (hidden: string[]) => any;
    "toggle-reorder": () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: (() => any) | undefined;
    "onUpdate:search"?: ((value: string) => any) | undefined;
    "onApply-filters"?: ((filters: Record<string, unknown>) => any) | undefined;
    "onApply-columns"?: ((hidden: string[]) => any) | undefined;
    "onToggle-reorder"?: (() => any) | undefined;
}>, {
    reordering: boolean;
    loading: boolean;
    searchPlaceholder: string;
    reorderable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
