type __VLS_Props = {
    data: {
        label: string;
        value: number;
    }[];
    height?: number;
    /** A CSS colour; defaults to the theme primary. */
    color?: string;
    /** Fill under the curve with a fading gradient. */
    filled?: boolean;
    smooth?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    color: string;
    filled: boolean;
    smooth: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
