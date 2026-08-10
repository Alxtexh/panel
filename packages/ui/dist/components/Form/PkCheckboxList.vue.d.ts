interface Option {
    value: string | number;
    label: string;
}
interface CheckboxListSchema {
    key: string;
    columns?: number;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: CheckboxListSchema;
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
