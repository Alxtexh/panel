import type { FormField } from './types';
type Row = Record<string, unknown>;
type __VLS_Props = {
    modelValue: Row[] | null;
    /** One row's shape, declared server-side. */
    children: FormField[];
    itemLabel?: string;
    minItems?: number | null;
    maxItems?: number | null;
    disabled?: boolean;
    /** Validation errors for the whole form, keyed by dotted path. */
    errors?: Record<string, string>;
    /** The field's own key, so child error paths can be built. */
    fieldKey: string;
    /** Option lists for child selects, keyed by child field key. */
    childOptions?: Record<string, {
        value: any;
        label: string;
    }[]>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Row[] | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Row[] | null) => any) | undefined;
}>, {
    disabled: boolean;
    itemLabel: string;
    minItems: number | null;
    maxItems: number | null;
    errors: Record<string, string>;
    childOptions: Record<string, {
        value: any;
        label: string;
    }[]>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
