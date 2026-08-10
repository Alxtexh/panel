type __VLS_Props = {
    type: 'toggle' | 'select';
    value: unknown;
    /** For select: value => label. */
    options?: Record<string, string>;
    busy?: boolean;
    disabled?: boolean;
    onLabel?: string | null;
    offLabel?: string | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: unknown) => any) | undefined;
}>, {
    busy: boolean;
    disabled: boolean;
    options: Record<string, string>;
    onLabel: string | null;
    offLabel: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
