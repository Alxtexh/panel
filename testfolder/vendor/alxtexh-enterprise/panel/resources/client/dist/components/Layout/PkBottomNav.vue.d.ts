export interface BottomNavItem {
    key: string;
    title: string;
    href: string;
    icon?: string;
}
type __VLS_Props = {
    items: BottomNavItem[];
    /** The current path, so the active item can be marked. */
    current?: string;
    /** Shown on the fifth slot when there are more destinations than fit. */
    moreLabel?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    more: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onMore?: (() => any) | undefined;
}>, {
    current: string;
    moreLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
