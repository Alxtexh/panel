type __VLS_Props = {
    modelValue?: string;
    length?: number;
    disabled?: boolean;
    autofocus?: boolean;
    name?: string;
    id?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    complete: (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onComplete?: ((value: string) => any) | undefined;
}>, {
    length: number;
    disabled: boolean;
    modelValue: string;
    autofocus: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
