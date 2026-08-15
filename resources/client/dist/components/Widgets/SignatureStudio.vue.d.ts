export type SavedMark = {
    id: string;
    name: string;
    dataUrl: string;
};
export type StudioDocument = {
    key: string;
    label: string;
    document: Record<string, unknown>;
};
type __VLS_Props = {
    title?: string;
    description?: string | null;
    documents?: StudioDocument[];
    storageKey?: string | null;
    embedded?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    title: string;
    description: string | null;
    embedded: boolean;
    documents: StudioDocument[];
    storageKey: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
