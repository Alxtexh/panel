interface ColourSchema {
    key: string;
    presets?: string[];
    placeholder?: string;
    contrastBackground?: string | null;
    contrastMinRatio?: number;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: ColourSchema;
    modelValue: unknown;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
