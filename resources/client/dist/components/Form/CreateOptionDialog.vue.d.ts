import type { FormField } from './types';
type __VLS_Props = {
    open: boolean;
    title: string;
    description?: string;
    fields: FormField[];
    processing?: boolean;
    errors?: Record<string, string>;
    generalError?: string | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (values: Record<string, unknown>) => any;
    close: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((values: Record<string, unknown>) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    description: string;
    processing: boolean;
    errors: Record<string, string>;
    generalError: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
