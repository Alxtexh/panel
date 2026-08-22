interface TreeNode {
    value: string | number;
    label: string;
    children?: TreeNode[];
}
interface TreeSchema {
    key: string;
    options?: TreeNode[];
    searchable?: boolean;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: TreeSchema;
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
