type __VLS_Props = {
    /** What failed, in the user's words. "Revenue chart", not "RevenueWidget". */
    label?: string;
    /**
     * Render nothing at all instead of a message.
     *
     * For decorative regions where a failure notice is more disruptive than
     * the absence - a sparkline beside a number that still renders.
     */
    silent?: boolean;
    /**
     * Stretch to the parent's height and pass that height to an only child.
     *
     * OPT-IN, because it is only ever right for a widget in a grid cell,
     * and it was previously unconditional. See the template note.
     */
    fill?: boolean;
};
declare function retry(): void;
declare var __VLS_1: {
    key: number;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {
    retry: typeof retry;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    error: (error: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((error: unknown) => any) | undefined;
}>, {
    fill: boolean;
    label: string;
    silent: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
