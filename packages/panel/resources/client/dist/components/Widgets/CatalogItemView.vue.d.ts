import type { CatalogItem } from './CatalogCard.vue';
type __VLS_Props = {
    item: CatalogItem;
    catalogHref?: string;
    backLabel?: string;
    embedded?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cart: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCart?: ((key: string) => any) | undefined;
}>, {
    embedded: boolean;
    catalogHref: string;
    backLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
