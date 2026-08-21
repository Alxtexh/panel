interface QrSchema {
    key: string;
    size?: number;
    from?: string | null;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: QrSchema;
    modelValue: unknown;
    disabled?: boolean;
    values?: Record<string, unknown>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}>, {
    values: Record<string, unknown>;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
