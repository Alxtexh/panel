export interface SubNavItem {
    key: string;
    title: string;
    href: string;
    icon?: string;
    description?: string;
}
type __VLS_Props = {
    items: SubNavItem[];
    /** Read by both the mobile trigger and the desktop `<nav>`. */
    ariaLabel?: string;
    /** Icon shown when an item declares none. */
    fallbackIcon?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    ariaLabel: string;
    fallbackIcon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
