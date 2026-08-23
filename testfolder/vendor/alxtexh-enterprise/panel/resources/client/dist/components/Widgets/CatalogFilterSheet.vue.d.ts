import type { CatalogFacet, CatalogFilters } from './catalogFilter';
type __VLS_Props = {
    open: boolean;
    title?: string;
    searchPlaceholder?: string;
    /** Till keeps SKU search on the page; the sheet is chips only. */
    hideSearch?: boolean;
    facets: CatalogFacet[];
    applied: CatalogFilters;
    description?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    reset: () => any;
    close: () => any;
    apply: (filters: CatalogFilters) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onReset?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onApply?: ((filters: CatalogFilters) => any) | undefined;
}>, {
    title: string;
    description: string;
    searchPlaceholder: string;
    hideSearch: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
