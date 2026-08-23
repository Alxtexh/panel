import type { Component } from 'vue';
export interface DirectoryLink {
    label: string;
    href: string;
    icon?: string;
    external?: boolean;
}
export interface DirectorySection {
    key: string;
    title: string;
    accent?: string;
    links: DirectoryLink[];
}
type __VLS_Props = {
    title: string;
    description?: string | null;
    searchPlaceholder?: string;
    sections: DirectorySection[];
    /** Inertia `<Link>`, or any router link. Defaults to a plain `<a>`. */
    linkComponent?: string | Component;
    /** Drop page padding and max-width so this can sit inside another screen. */
    embedded?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    description: string | null;
    searchPlaceholder: string;
    linkComponent: string | Component;
    embedded: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
