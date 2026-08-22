type __VLS_Props = {
    width?: number;
    height?: number;
    disabled?: boolean;
    label?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
    save: (dataUrl: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: (() => any) | undefined;
    onSave?: ((dataUrl: string) => any) | undefined;
}>, {
    label: string;
    height: number;
    width: number;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
