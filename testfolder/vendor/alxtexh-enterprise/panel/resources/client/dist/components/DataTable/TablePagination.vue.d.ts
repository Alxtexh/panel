type __VLS_Props = {
    page: number;
    perPage: number;
    perPageOptions?: number[];
    rowsOnPage: number;
    hasNext: boolean;
    hasPrevious: boolean;
    /** Deferred - undefined until the count request resolves. */
    total?: number;
    loading?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    next: () => any;
    previous: () => any;
    first: () => any;
    "update:perPage": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onNext?: (() => any) | undefined;
    onPrevious?: (() => any) | undefined;
    onFirst?: (() => any) | undefined;
    "onUpdate:perPage"?: ((value: number) => any) | undefined;
}>, {
    loading: boolean;
    perPageOptions: number[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
