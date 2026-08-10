import type { ChartSeries } from './types';
export interface HeatmapBucket {
    /** Upper bound, exclusive. The final bucket may omit it to catch the rest. */
    max?: number;
    label: string;
}
type __VLS_Props = {
    /** One series per ROW; each point is a column. */
    series: ChartSeries[];
    buckets?: HeatmapBucket[];
    height?: number;
    format?: (value: number) => string;
    /** Draw the column labels underneath. Off by default - usually too many. */
    showColumnLabels?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    buckets: HeatmapBucket[];
    showColumnLabels: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
