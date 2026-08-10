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
    emptyText?: string;
};
declare var __VLS_2: `cell:${string}`, __VLS_3: {
    row: Record<string, any>;
    value: any;
    column: SchemaColumn;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    load: (cursor: string | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLoad?: ((cursor: string | null) => any) | undefined;
}>, {
    loading: boolean;
    nextCursor: string | null;
    capped: boolean;
    loaded: boolean;
    emptyText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
