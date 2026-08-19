type __VLS_Props = {
    count: number;
    /** True when the selection means "everything matching the filters". */
    allMatching: boolean;
    /** Deferred - undefined until the count lands. */
    total?: number;
};
declare var __VLS_1: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_1) => any;
} & {
    actions?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    clear: () => any;
    "select-all-matching": () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: (() => any) | undefined;
    "onSelect-all-matching"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
