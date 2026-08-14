export interface StatListBarSegment {
    label: string;
    value: number;
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null;
}
export interface StatListRow {
    key: string;
    label: string;
    value: string;
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null;
    bar?: {
        segments: StatListBarSegment[];
        total?: number | null;
    } | null;
}
type __VLS_Props = {
    rows: StatListRow[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
