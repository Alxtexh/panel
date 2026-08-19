interface Block {
    type: string;
    [key: string]: unknown;
}
interface DocumentPayload {
    blocks: Block[];
    branding: {
        company: string;
        logoUrl?: string | null;
        accent: string;
        mono: boolean;
    };
    version: number;
    sample: boolean;
}
type __VLS_Props = {
    document: DocumentPayload;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
