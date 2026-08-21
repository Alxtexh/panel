interface Segment {
    label: string;
    value: number;
    /** A CSS colour. Defaults to the theme palette by index. */
    color?: string;
}
type __VLS_Props = {
    segments: Segment[];
    /** The denominator. Defaults to the sum of the segments. */
    total?: number | null;
    format?: (value: number) => string;
    showLegend?: boolean;
    height?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    total: number | null;
    showLegend: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
