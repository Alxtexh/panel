/**
 * A form label, with the reference app's classes.
 *
 * A NATIVE `<label>` RATHER THAN `reka-ui`'s. What that component adds over the
 * element is click-forwarding to a nested control, which the native element does
 * by itself through `for` - and it would cost this package its only-Vue
 * dependency list.
 */
type __VLS_Props = {
    for?: string;
    class?: unknown;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
