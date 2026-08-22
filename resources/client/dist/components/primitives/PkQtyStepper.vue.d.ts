type __VLS_Props = {
    min?: number;
    max?: number | null;
    disabled?: boolean;
};
type __VLS_PublicProps = __VLS_Props & {
    modelValue: number;
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    decrease: (value: number) => any;
    increase: (value: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onDecrease?: ((value: number) => any) | undefined;
    onIncrease?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
