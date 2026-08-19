/**
 * The bar that appears when rows are selected.
 *
 * §8 requires "select-all-matching-filter, not just select-all-on-page", and the
 * distinction is the whole point: the header checkbox selects the ten rows you
 * can see, while the operator's intent is usually "all 3,243 expired clients".
 * Offering only the first silently under-applies a bulk action - it reports
 * success having done a fraction of the work.
 *
 * So the bar always states WHICH of the two is selected, and offers the other
 * explicitly. "Select all N" and "Deselect all" sit together, because someone
 * who over-selects needs the way back to be as obvious as the way in.
 *
 * Actions come through the slot. This owns the selection surface, never what an
 * action does - it does not fetch (spec §4 rule 2).
 */
type __VLS_Props = {
    count: number;
    /** True when the selection means "everything matching the filters". */
    allMatching: boolean;
    /** Deferred - undefined until the count lands. */
    total?: number;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_1) => any;
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
