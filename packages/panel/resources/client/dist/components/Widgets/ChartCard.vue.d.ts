/**
 * The frame around a chart: title, period selector, trend, and the chart slot.
 *
 * IT DOES NOT FETCH. Selecting a period emits `update:period` and nothing else
 * - the page decides that this means an Inertia partial reload of one prop.
 * That is package rule 2 (§4), and it is what lets the same card work outside
 * Inertia later.
 *
 * THE CARD IS THE ONLY FRAME. The chart inside draws no border and no heading
 * of its own; nesting a bordered chart inside a bordered card is the wrapper
 * stack the layout renderer already avoids.
 *
 * The body height is FIXED across loading, error and loaded states. A skeleton
 * shorter than the chart makes the whole dashboard jump when six cards resolve
 * at slightly different times.
 */
type __VLS_Props = {
    label: string;
    description?: string | null;
    /** Omit to hide the selector entirely. */
    periods?: {
        value: string;
        label: string;
    }[] | null;
    period?: string;
    loading?: boolean;
    error?: boolean;
    bodyHeight?: number;
};
declare var __VLS_1: {}, __VLS_6: {};
type __VLS_Slots = {} & {
    trend?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:period": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:period"?: ((value: string) => any) | undefined;
}>, {
    loading: boolean;
    description: string | null;
    error: boolean;
    periods: {
        value: string;
        label: string;
    }[] | null;
    bodyHeight: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
