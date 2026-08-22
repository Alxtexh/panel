export interface UploadedFileValue {
    /** A pending handle, or a stored path on an existing record. */
    value: string;
    name: string;
    size?: number;
    /** Where an already-stored file can be downloaded from. */
    url?: string | null;
}
type __VLS_Props = {
    modelValue: UploadedFileValue | null;
    accept?: string[];
    maxKilobytes?: number;
    image?: boolean;
    disabled?: boolean;
    /** Performs the transfer. Resolves to the handle and display name. */
    upload: (file: File, onProgress: (percent: number) => void) => Promise<UploadedFileValue>;
    /** Discards a pending upload the user removed. */
    discard?: (handle: string) => Promise<void>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: UploadedFileValue | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: UploadedFileValue | null) => any) | undefined;
}>, {
    image: boolean;
    disabled: boolean;
    discard: (handle: string) => Promise<void>;
    accept: string[];
    maxKilobytes: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
