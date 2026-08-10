type Limits = {
    titleMax: number;
    titleMin: number;
    descriptionMax: number;
    descriptionMin: number;
};
type __VLS_Props = {
    field: {
        watch?: {
            title: string;
            description: string;
        };
        siteUrl?: string;
        path?: string;
        limits?: Limits;
    };
    /** The whole form - see `FormFieldControl`, which is the only caller. */
    values?: Record<string, any>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    values: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
