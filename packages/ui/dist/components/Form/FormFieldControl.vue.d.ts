import type { UploadedFileValue } from './PkFileUpload.vue';
import type { FormField } from './types';
type __VLS_Props = {
    field: FormField;
    value: unknown;
    error?: string;
    options?: {
        value: any;
        label: string;
    }[];
    processing?: boolean;
    /**
     * Supplied only for a SEARCHABLE select. The component never fetches
     * itself - @alxtexh-enterprise/panel ships no HTTP client (spec §4 rule 2).
     */
    searchOptions?: (term: string) => Promise<{
        value: any;
        label: string;
    }[]>;
    /**
     * Performs an upload for a file field. Supplied by the page for the
     * same reason `searchOptions` is: this package ships no HTTP client.
     */
    upload?: (file: File, onProgress: (percent: number) => void) => Promise<UploadedFileValue>;
    discard?: (handle: string) => Promise<void>;
    /**
     * The whole form's errors, keyed by dotted path.
     *
     * A repeater needs these rather than the single `error` above, because
     * Laravel reports a child failure at `contacts.2.phone` and only the
     * repeater knows which row that is. Every other control uses `error`.
     */
    errors?: Record<string, string>;
    /** Option lists for a repeater's child selects, keyed by child key. */
    childOptions?: Record<string, {
        value: any;
        label: string;
    }[]>;
    /**
     * Every value in the form, for a REGISTERED control that previews other
     * fields rather than editing its own - see where it is bound below.
     */
    values?: Record<string, any>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: unknown) => any;
    "affix-action": (action: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: unknown) => any) | undefined;
    "onAffix-action"?: ((action: string) => any) | undefined;
}>, {
    options: {
        value: any;
        label: string;
    }[];
    errors: Record<string, string>;
    childOptions: Record<string, {
        value: any;
        label: string;
    }[]>;
    processing: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
