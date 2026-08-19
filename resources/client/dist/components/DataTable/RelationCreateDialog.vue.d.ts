type __VLS_Props = {
    open: boolean;
    title?: string;
    form?: {
        nodes?: unknown[];
    } | null;
    formOptions?: Record<string, {
        value: any;
        label: string;
    }[]>;
    processing?: boolean;
    errors?: Record<string, string>;
    searchOptions?: (field: string, term: string) => Promise<{
        value: any;
        label: string;
    }[]>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (values: Record<string, unknown>) => any;
    close: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((values: Record<string, unknown>) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    form: {
        nodes?: unknown[];
    } | null;
    title: string;
    errors: Record<string, string>;
    processing: boolean;
    searchOptions: (field: string, term: string) => Promise<{
        value: any;
        label: string;
    }[]>;
    formOptions: Record<string, {
        value: any;
        label: string;
    }[]>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
