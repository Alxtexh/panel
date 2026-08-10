import type { FormField } from './types';
interface Block {
    type: string;
    label: string;
    fields: FormField[];
}
interface Entry {
    type: string;
    data: Record<string, unknown>;
}
type __VLS_Props = {
    modelValue?: Entry[] | null;
    blocks?: Block[];
    maxBlocks?: number | null;
    disabled?: boolean;
    errors?: Record<string, string>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Entry[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Entry[]) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: Entry[] | null;
    blocks: Block[];
    maxBlocks: number | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
