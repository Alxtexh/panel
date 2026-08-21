import type { SchemaColumn } from '../../composables/useSchemaColumns';
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
};
declare var __VLS_5: {}, __VLS_10: {}, __VLS_13: `cell:${string}`, __VLS_14: {
    row: Record<string, any>;
    value: any;
    column: SchemaColumn;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_13>]?: (props: typeof __VLS_14) => any;
} & {
    actions?: (props: typeof __VLS_5) => any;
} & {
    'empty-actions'?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    load: (cursor: string | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLoad?: ((cursor: string | null) => any) | undefined;
}>, {
    title: string | null;
    loading: boolean;
    emptyTitle: string;
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
