/**
 * Resource page identity: title + purpose, actions at the trailing edge.
 *
 * DESIGN_RULES rules 1 and 2: exactly two flex children (identity, actions),
 * primary last inside the actions slot. Title scale is deliberately larger than
 * section headings so the page names itself before the table or form does.
 */
type __VLS_Props = {
    title: string;
    /** One sentence for what this screen is for (resource purpose, subtitle). */
    purpose?: string | null;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
