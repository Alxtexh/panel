type __VLS_Props = {
    direction: 'up' | 'down' | 'flat' | 'new';
    percentage: number | null;
    /** e.g. "vs previous 30 days". */
    comparison?: string;
    /** True when a DECREASE is the good outcome (churn, failures, latency). */
    inverted?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    inverted: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
