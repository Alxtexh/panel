type __VLS_Props = {
    open: boolean;
    title: string;
    description?: string | null;
    side?: 'left' | 'right';
    /** A Tailwind width class; forms want more room than a list. */
    width?: string;
};
declare var __VLS_13: {}, __VLS_15: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    'header-actions'?: (props: typeof __VLS_13) => any;
} & {
    default?: (props: typeof __VLS_15) => any;
} & {
    footer?: (props: typeof __VLS_17) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    description: string | null;
    width: string;
    side: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
