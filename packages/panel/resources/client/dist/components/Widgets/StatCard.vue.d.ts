type __VLS_Props = {
    label: string;
    description?: string | null;
    value?: unknown;
    trend?: {
        direction: 'up' | 'down' | 'flat' | 'new';
        percentage: number | null;
    } | null;
    comparison?: string;
    sparkline?: {
        label: string;
        value: number;
    }[] | null;
    loading?: boolean;
    error?: boolean;
    /** True when a DECREASE is the good outcome. */
    inverted?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    loading: boolean;
    description: string | null;
    error: boolean;
    inverted: boolean;
    trend: {
        direction: "up" | "down" | "flat" | "new";
        percentage: number | null;
    } | null;
    sparkline: {
        label: string;
        value: number;
    }[] | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
