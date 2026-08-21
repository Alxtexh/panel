import type { SchemaColumn } from '../../composables/useSchemaColumns';
import type { FilterIndicator, FilterSchema } from './types';
type __VLS_Props = {
    columns: SchemaColumn[];
    rows: Record<string, any>[];
    loading?: boolean;
    /** Present when there is another page. */
    nextCursor?: string | null;
    /** True once the retained-row ceiling stopped the appending. */
    capped?: boolean;
    /** True once at least one page has been requested. */
    loaded?: boolean;
    /** Relation label shown in the title band. */
    title?: string | null;
    emptyTitle?: string;
    emptyText?: string;
    /** Dedicated nested list URL. The tab stays a summary that links there. */
    indexHref?: string | null;
    /** Prefix for a related row's dedicated view page. */
    recordBase?: string | null;
    /** Filter schema from the relation table (structure; options merged). */
    filterSchema?: FilterSchema[];
    filters?: Record<string, unknown>;
    search?: string;
    indicators?: FilterIndicator[];
};
declare var __VLS_5: {}, __VLS_22: {}, __VLS_24: {}, __VLS_27: `cell:${string}`, __VLS_28: {
    row: Record<string, any>;
    value: any;
    column: SchemaColumn;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_27>]?: (props: typeof __VLS_28) => any;
} & {
    actions?: (props: typeof __VLS_5) => any;
} & {
    illustration?: (props: typeof __VLS_22) => any;
} & {
    'empty-actions'?: (props: typeof __VLS_24) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "clear-filters": () => any;
    load: (cursor: string | null) => any;
    "update:search": (value: string) => any;
    "apply-filters": (filters: Record<string, unknown>) => any;
    "clear-filter": (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onClear-filters"?: (() => any) | undefined;
    onLoad?: ((cursor: string | null) => any) | undefined;
    "onUpdate:search"?: ((value: string) => any) | undefined;
    "onApply-filters"?: ((filters: Record<string, unknown>) => any) | undefined;
    "onClear-filter"?: ((key: string) => any) | undefined;
}>, {
    search: string;
    title: string | null;
    loading: boolean;
    emptyTitle: string;
    filterSchema: FilterSchema[];
    filters: Record<string, unknown>;
    indicators: FilterIndicator[];
    nextCursor: string | null;
    capped: boolean;
    loaded: boolean;
    emptyText: string;
    indexHref: string | null;
    recordBase: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
