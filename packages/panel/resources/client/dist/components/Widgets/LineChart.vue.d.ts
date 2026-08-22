import type { ChartPoint as Point, ChartSeries } from './types';
type __VLS_Props = {
    /** Single series, the common case. */
    data?: Point[];
    /** Several series. Takes precedence over `data`. */
    series?: ChartSeries[];
    height?: number;
    type?: 'line' | 'area';
    format?: (value: number) => string;
    /** Hide the y axis for a cleaner card, as the reference dashboards do. */
    showAxis?: boolean;
    showLegend?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    type: "line" | "area";
    height: number;
    showAxis: boolean;
    showLegend: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
