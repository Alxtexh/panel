import type { SemanticTone } from '../primitives/statusTone';
export interface LineItem {
    key: string;
    label: string;
    detail?: string | null;
    qty?: string | number | null;
    amount?: string | null;
    status?: string | null;
    tone?: SemanticTone | null;
}
type __VLS_Props = {
    items: LineItem[];
    /** Qty stepper and remove, instead of a printed ×qty. */
    editable?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    remove: (key: string) => any;
    qty: (key: string, qty: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRemove?: ((key: string) => any) | undefined;
    onQty?: ((key: string, qty: number) => any) | undefined;
}>, {
    editable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
