import type { CatalogItem } from './CatalogCard.vue';
import type { CatalogFacet } from './catalogFilter';
import type { LineItem } from './LineItems.vue';
type __VLS_Props = {
    items: CatalogItem[];
    facets?: CatalogFacet[];
    shelfTitle?: string;
    shelfDescription?: string | null;
    searchPlaceholder?: string;
    cartTitle?: string;
    taxRate?: number;
    taxLabel?: string;
    discountRate?: number;
    discountLabel?: string;
    formatMoney?: (amount: number) => string;
    parsePrice?: (item: CatalogItem) => number;
};
declare function pay(): void;
type __VLS_PublicProps = __VLS_Props & {
    'cart'?: LineItem[];
};
declare var __VLS_22: {
    cart: LineItem[];
    paid: boolean;
    pay: typeof pay;
};
type __VLS_Slots = {} & {
    pay?: (props: typeof __VLS_22) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (key: string) => any;
    pay: (items: LineItem[]) => any;
    "update:cart": (value: LineItem[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((key: string) => any) | undefined;
    onPay?: ((items: LineItem[]) => any) | undefined;
    "onUpdate:cart"?: ((value: LineItem[]) => any) | undefined;
}>, {
    searchPlaceholder: string;
    facets: CatalogFacet[];
    discountLabel: string;
    taxLabel: string;
    shelfTitle: string;
    shelfDescription: string | null;
    cartTitle: string;
    taxRate: number;
    discountRate: number;
    formatMoney: (amount: number) => string;
    parsePrice: (item: CatalogItem) => number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
