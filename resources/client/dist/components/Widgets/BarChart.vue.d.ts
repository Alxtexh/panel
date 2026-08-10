import type { ChartSeries } from './types';
interface Point {
    label: string;
    value: number;
}
type __VLS_Props = {
    /** Single series, the common case. */
    data?: Point[];
    /** Several series. Takes precedence over `data`. */
    series?: ChartSeries[];
    height?: number;
    orientation?: 'vertical' | 'horizontal';
    stacked?: boolean;
    format?: (value: number) => string;
    showAxis?: boolean;
    showLegend?: boolean;
    /**
     * Colour each bar by its own VALUE rather than by its series.
     *
     * This is what turns a plain bar chart into a ranked "worst performers"
     * chart: the eye is drawn to the red end without having to read a single
     * number. Ordered ascending by `max`; the first threshold a value falls
     * under wins, and anything above them all takes `aboveColor`.
     */
    thresholds?: {
        max: number;
        color: string;
    }[] | null;
    aboveColor?: string;
    /** Pin the value axis, e.g. to 100 for a percentage. */
    maxValue?: number | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    orientation: "vertical" | "horizontal";
    stacked: boolean;
    showAxis: boolean;
    showLegend: boolean;
    thresholds: {
        max: number;
        color: string;
    }[] | null;
    aboveColor: string;
    maxValue: number | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
