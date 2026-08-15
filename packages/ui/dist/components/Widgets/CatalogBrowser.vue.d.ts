import type { CatalogFacet } from './catalogFilter';
import type { CatalogItem } from './CatalogCard.vue';
export interface CatalogBrowserTab {
    key: string;
    label: string;
    items: CatalogItem[];
    facets?: CatalogFacet[];
    searchPlaceholder?: string;
    filterTitle?: string;
}
type __VLS_Props = {
    title?: string;
    description?: string | null;
    tabs: CatalogBrowserTab[];
    pageSize?: number;
};
type __VLS_PublicProps = __VLS_Props & {
    'layout'?: 'grid' | 'list';
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (key: string) => any;
    cart: (key: string) => any;
    "update:layout": (value: "grid" | "list") => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((key: string) => any) | undefined;
    onCart?: ((key: string) => any) | undefined;
    "onUpdate:layout"?: ((value: "grid" | "list") => any) | undefined;
}>, {
    title: string;
    description: string | null;
    pageSize: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
