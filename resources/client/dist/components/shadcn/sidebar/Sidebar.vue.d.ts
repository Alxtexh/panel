import type { SidebarProps } from '.';
declare var __VLS_1: {}, __VLS_25: {}, __VLS_27: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_25) => any;
} & {
    default?: (props: typeof __VLS_27) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SidebarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarProps> & Readonly<{}>, {
    variant: "sidebar" | "floating" | "inset";
    side: "left" | "right";
    collapsible: "offcanvas" | "icon" | "none";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
