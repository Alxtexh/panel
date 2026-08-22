import type { PaymentGateway } from './PaymentGateways.vue';
type __VLS_Props = {
    title?: string;
    description?: string | null;
    headingVariant?: 'default' | 'small';
};
type __VLS_PublicProps = __VLS_Props & {
    'gateways'?: PaymentGateway[];
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:gateways": (value: PaymentGateway[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:gateways"?: ((value: PaymentGateway[]) => any) | undefined;
}>, {
    title: string;
    description: string | null;
    headingVariant: "default" | "small";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
