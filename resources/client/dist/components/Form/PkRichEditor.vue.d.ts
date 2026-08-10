type __VLS_Props = {
    modelValue: string | null;
    toolbar?: string[];
    maxLength?: number | null;
    disabled?: boolean;
    placeholder?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
}>, {
    disabled: boolean;
    placeholder: string;
    toolbar: string[];
    maxLength: number | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
