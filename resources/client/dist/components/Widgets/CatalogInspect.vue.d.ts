import type { CatalogItem } from './CatalogCard.vue';
type __VLS_Props = {
    open: boolean;
    item: CatalogItem | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
    cart: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onCart?: ((key: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
