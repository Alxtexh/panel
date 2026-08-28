export interface PurchasablePlan {
    id: string;
    name: string;
    price: number;
    priceFormatted?: string;
    annualPrice?: number;
    annualPriceFormatted?: string;
    interval?: string;
    description?: string;
    features?: string[];
    current?: boolean;
    recommended?: boolean;
}
type __VLS_Props = {
    plan: PurchasablePlan;
    /** Show the annual price when the plan has one. */
    annual?: boolean;
    /** This card's own checkout request is in flight. */
    processing?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    choose: (id: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChoose?: ((id: string) => any) | undefined;
}>, {
    processing: boolean;
    annual: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
