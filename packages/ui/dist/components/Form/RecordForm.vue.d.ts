import type { UploadedFileValue } from './PkFileUpload.vue';
import type { SchemaNode as SchemaNodeType } from './SchemaNode.vue';
import type { FormField } from './types';
type __VLS_Props = {
    /** Layout tree. Preferred when present. */
    nodes?: SchemaNodeType[];
    /** Flat fallback, for a schema with no layout. */
    fields?: FormField[];
    columns?: number;
    modelValue: Record<string, any>;
    errors?: Record<string, string>;
    options?: Record<string, {
        value: any;
        label: string;
    }[]>;
    processing?: boolean;
    /** Supplied by the page; this package ships no HTTP client. */
    searchOptions?: (field: string, term: string) => Promise<{
        value: any;
        label: string;
    }[]>;
    /** Performs an upload for a file field. See PkFileUpload. */
    upload?: (field: string, file: File, onProgress: (percent: number) => void) => Promise<UploadedFileValue>;
    discard?: (handle: string) => Promise<void>;
    /** Base URL of this form's resource, for tableSelect picker pages. */
    pickerBase?: string;
    /** Path to return to after picking a row. */
    returnUrl?: string;
    /** Create a related option without leaving the form. */
    createOption?: (field: string, values: Record<string, unknown>) => Promise<{
        value: any;
        label: string;
    }>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (key: string, value: unknown) => any;
    "affix-action": (field: string, action: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((key: string, value: unknown) => any) | undefined;
    "onAffix-action"?: ((field: string, action: string) => any) | undefined;
}>, {
    columns: number;
    options: Record<string, {
        value: any;
        label: string;
    }[]>;
    errors: Record<string, string>;
    processing: boolean;
    fields: FormField[];
    nodes: SchemaNodeType[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
