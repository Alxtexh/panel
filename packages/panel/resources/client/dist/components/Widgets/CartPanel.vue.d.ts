import { type LineItem } from './LineItems.vue';
type __VLS_Props = {
    items: LineItem[];
    title?: string;
    emptyTitle?: string;
    emptyDescription?: string;
    subtotal?: string | null;
    discountLabel?: string | null;
    /** Formatted already — this panel does not compute a discount. */
    discount?: string | null;
    taxLabel?: string | null;
    tax?: string | null;
    total?: string | null;
};
declare var __VLS_9: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    discount?: (props: typeof __VLS_9) => any;
} & {
    pay?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    remove: (key: string) => any;
    qty: (key: string, qty: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRemove?: ((key: string) => any) | undefined;
    onQty?: ((key: string, qty: number) => any) | undefined;
}>, {
    emptyTitle: string;
    title: string;
    total: string | null;
    emptyDescription: string;
    subtotal: string | null;
    discountLabel: string | null;
    discount: string | null;
    taxLabel: string | null;
    tax: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
