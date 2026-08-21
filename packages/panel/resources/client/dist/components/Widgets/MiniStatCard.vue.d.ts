type __VLS_Props = {
    label: string;
    value: string | number;
    /** Small muted line under the title, e.g. a masked account number. */
    caption?: string | null;
    /** Percentage change; null renders no badge. */
    delta?: number | null;
    inverted?: boolean;
    series?: {
        label: string;
        value: number;
    }[] | null;
    /** A CSS colour for the sparkline; defaults to the theme primary. */
    color?: string;
    loading?: boolean;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    menu?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    caption: string | null;
    loading: boolean;
    color: string;
    series: {
        label: string;
        value: number;
    }[] | null;
    inverted: boolean;
    delta: number | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
