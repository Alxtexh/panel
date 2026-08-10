type __VLS_Props = {
    /**
     * The shape being stood in for.
     *
     * Named rather than measured, so the six call sites cannot each choose a
     * different height for the same kind of content.
     */
    variant?: 'text' | 'number' | 'badge' | 'block' | 'row' | 'circle';
    /** How many, for the shapes that repeat. */
    count?: number;
    /** Overrides the variant's height, for a block that must match a chart. */
    height?: number;
    /** What a screen reader is told, once, for the whole group. */
    label?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    label: string;
    count: number;
    variant: "text" | "number" | "badge" | "block" | "row" | "circle";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
