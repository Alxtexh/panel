type __VLS_Props = {
    modelValue: Record<string, string> | null;
    keyLabel?: string;
    valueLabel?: string;
    maxPairs?: number | null;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Record<string, string> | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Record<string, string> | null) => any) | undefined;
}>, {
    disabled: boolean;
    keyLabel: string;
    valueLabel: string;
    maxPairs: number | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
