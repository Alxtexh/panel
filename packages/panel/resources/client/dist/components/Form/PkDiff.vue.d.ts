interface DiffSchema {
    key: string;
    originalKey?: string | null;
    modifiedKey?: string | null;
    rows?: number;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: DiffSchema;
    modelValue: unknown;
    disabled?: boolean;
    values?: Record<string, unknown>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    values: Record<string, unknown>;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
