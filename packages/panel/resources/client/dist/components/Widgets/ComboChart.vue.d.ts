import type { ChartSeries } from './types';
type __VLS_Props = {
    bars: ChartSeries[];
    lines: ChartSeries[];
    height?: number;
    /** Give the line its own scale when it is in another unit. */
    lineAxis?: 'left' | 'right';
    format?: (value: number) => string;
    showLegend?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    showLegend: boolean;
    lineAxis: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
