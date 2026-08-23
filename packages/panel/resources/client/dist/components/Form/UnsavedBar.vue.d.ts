type __VLS_Props = {
    show: boolean;
    processing?: boolean;
    message?: string;
    saveLabel?: string;
    cancelLabel?: string;
    discardLabel?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    cancel: () => any;
    discard: () => any;
    save: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onDiscard?: (() => any) | undefined;
    onSave?: (() => any) | undefined;
}>, {
    message: string;
    processing: boolean;
    saveLabel: string;
    cancelLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
