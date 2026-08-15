export interface ShortcutItem {
    id: string;
    label: string;
    href: string;
    icon: string;
}
type __VLS_Props = {
    items: ShortcutItem[];
    catalog: ShortcutItem[];
    hideable?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    hide: () => any;
    "update:items": (value: ShortcutItem[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onHide?: (() => any) | undefined;
    "onUpdate:items"?: ((value: ShortcutItem[]) => any) | undefined;
}>, {
    hideable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
