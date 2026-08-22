interface Option {
    value: string | number;
    label: string;
}
interface VisualSelectSchema {
    key: string;
    preview?: string | null;
    columns?: number;
    /** `tiles` (default) or `segmented` — a shape, never a class list. */
    layout?: string;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: VisualSelectSchema;
    modelValue: unknown;
    options?: Option[];
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}>, {
    disabled: boolean;
    options: Option[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
