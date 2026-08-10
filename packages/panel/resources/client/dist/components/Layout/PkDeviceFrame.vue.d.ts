type __VLS_Props = {
    width?: number;
    height?: number;
    /** A phone has one; a tablet does not. Ignored on a laptop. */
    notch?: boolean;
    /**
     * The kind of chrome to draw.
     *
     * A LAPTOP IS NOT A LARGE PHONE, and drawing one as a 1440px rounded
     * rectangle with a notch reads as a tablet nobody makes. The bezel is
     * thin, the corners are barely rounded, and there is a base underneath -
     * which is also the cue that tells somebody at a glance which width they
     * are looking at, without reading the number.
     */
    kind?: 'phone' | 'laptop';
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    width: number;
    height: number;
    notch: boolean;
    kind: "phone" | "laptop";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
