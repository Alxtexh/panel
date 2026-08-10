interface Slice {
    label: string;
    value: number;
}
type __VLS_Props = {
    data: Slice[];
    height?: number;
    /** A doughnut leaves room for the total in the middle. */
    type?: 'pie' | 'doughnut';
    format?: (value: number) => string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    type: "pie" | "doughnut";
    height: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
