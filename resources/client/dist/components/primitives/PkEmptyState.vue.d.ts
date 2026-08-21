type __VLS_Props = {
    title: string;
    description?: string;
    /** Semantic icon name from the kit registry. */
    icon?: string;
    /**
     * Filtered / compact empty: less vertical padding, smaller icon.
     * Use when the operator already has filters on and just needs a clear path.
     */
    compact?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    illustration?: (props: typeof __VLS_1) => any;
} & {
    icon?: (props: typeof __VLS_3) => any;
} & {
    actions?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    icon: string;
    compact: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
