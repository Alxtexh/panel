type __VLS_Props = {
    open: boolean;
    title: string;
    description?: string;
    busy?: boolean;
};
declare var __VLS_9: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
} & {
    footer?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    busy: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
