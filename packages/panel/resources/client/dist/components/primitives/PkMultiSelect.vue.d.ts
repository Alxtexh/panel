export interface MultiSelectOption {
    value: string | number;
    label: string;
}
type __VLS_Props = {
    modelValue: (string | number)[];
    options: MultiSelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    /** Show the search box. Pointless for a handful of options. */
    searchable?: boolean | null;
    disabled?: boolean;
    /** Refuse further selections past this many. */
    max?: number | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: (string | number)[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
}>, {
    disabled: boolean;
    placeholder: string;
    max: number | null;
    searchPlaceholder: string;
    searchable: boolean | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
