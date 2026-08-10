import type { ChartXYPoint, ChartXYSeries } from './types';
type __VLS_Props = {
    /** Single series, the common case. */
    data?: ChartXYPoint[];
    /** Several series. Takes precedence over `data`. */
    series?: ChartXYSeries[];
    height?: number;
    xLabel?: string;
    yLabel?: string;
    /** Formatters own their own number format; the chart does not guess. */
    formatX?: (value: number) => string;
    formatY?: (value: number) => string;
    showLegend?: boolean;
    /** Largest mark radius in pixels, for the bubble case. */
    maxRadius?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    showLegend: boolean;
    maxRadius: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
