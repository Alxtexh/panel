export interface PaymentGateway {
    key: string;
    label: string;
    caption: string;
    mark: string;
    color: string;
    connected: boolean;
    mode: 'test' | 'live' | null;
    methods: string[];
    /** Connected but not offered at checkout when false. */
    enabled?: boolean;
    /** At most one gateway is the default tender. */
    isDefault?: boolean;
}
type __VLS_Props = {
    gateways: PaymentGateway[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggle: (key: string) => any;
    configure: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onToggle?: ((key: string) => any) | undefined;
    onConfigure?: ((key: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
