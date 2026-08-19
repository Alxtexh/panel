export interface QueryField {
    kind: 'select' | 'multiselect' | 'boolean' | 'daterange';
    label: string;
    options?: string[];
}
export interface QueryRule {
    field?: string;
    operator?: string;
    value?: unknown;
}
export interface QueryGroup {
    logic: 'and' | 'or';
    rules: (QueryRule | QueryGroup)[];
}
type __VLS_Props = {
    modelValue?: QueryGroup | null;
    fields: Record<string, QueryField>;
    operators: Record<string, string[]>;
    maxDepth?: number;
    depth?: number;
    /** The root renders the apply/clear bar; nested groups do not. */
    root?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: QueryGroup | null) => any;
    apply: (value: QueryGroup | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: QueryGroup | null) => any) | undefined;
    onApply?: ((value: QueryGroup | null) => any) | undefined;
}>, {
    root: boolean;
    depth: number;
    maxDepth: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
