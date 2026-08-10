import type { UploadedFileValue } from './PkFileUpload.vue';
export interface SchemaNode {
    component: 'field' | 'section' | 'grid' | 'flex' | 'fieldset' | 'callout' | 'tabs' | 'tab' | 'wizard' | 'step';
    children?: SchemaNode[];
    label?: string;
    description?: string;
    columns?: number;
    collapsible?: boolean;
    collapsed?: boolean;
    icon?: string | null;
    /** `flex` */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    gap?: 'sm' | 'md' | 'lg';
    wrap?: boolean;
    /** `callout` */
    tone?: 'info' | 'success' | 'warning' | 'danger';
    body?: string;
    title?: string;
    [key: string]: any;
}
type __VLS_Props = {
    node: SchemaNode;
    values: Record<string, any>;
    errors?: Record<string, string>;
    options?: Record<string, {
        value: any;
        label: string;
    }[]>;
    processing?: boolean;
    /** Supplied by the page; @alxtexh-enterprise/panel ships no HTTP client. */
    searchOptions?: (field: string, term: string) => Promise<{
        value: any;
        label: string;
    }[]>;
    /** Performs an upload for a file field. See PkFileUpload. */
    upload?: (field: string, file: File, onProgress: (percent: number) => void) => Promise<UploadedFileValue>;
    discard?: (handle: string) => Promise<void>;
    /** 0 is the outermost layout node - the only one that draws a frame. */
    depth?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (key: string, value: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((key: string, value: unknown) => any) | undefined;
}>, {
    depth: number;
    options: Record<string, {
        value: any;
        label: string;
    }[]>;
    errors: Record<string, string>;
    processing: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
