type __VLS_Props = {
    modelValue?: string | null;
    rows?: number;
    toolbar?: string[];
    disabled?: boolean;
    id?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    rows: number;
    disabled: boolean;
    modelValue: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
